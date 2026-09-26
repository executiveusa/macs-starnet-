// Proof mission 2026-09-26 (claude/proof-missions): MACS command task end-to-end with test data.
// Creates one allowlisted task envelope, dispatches it through connectors/instinct-relay.js
// against a LOCAL STUB relay standing in for BARS (the real BARS bridge contract is an open
// owner decision), receives the callback receipt, verifies the 401 negative path, and stores
// task + receipt in data/tasks.json (the store the command API reads via app/store.js).
const http=require("node:http");
const relay=require("../connectors/instinct-relay");
const store=require("../app/store");

(async()=>{
  const got=[];
  const stub=http.createServer((req,res)=>{
    if(req.url==="/tasks"&&req.method==="POST"){
      let b="";req.on("data",c=>b+=c);req.on("end",()=>{
        const item=JSON.parse(b); got.push(item);
        res.writeHead(202,{"content-type":"application/json"});
        res.end(JSON.stringify({accepted:true,correlationId:item.correlationId}));
      });
    } else { res.writeHead(404); res.end(); }
  });
  await new Promise(r=>stub.listen(0,"127.0.0.1",r));
  const port=stub.address().port;
  process.env.INSTINCT_RELAY_BASE_URL=`http://127.0.0.1:${port}`;
  process.env.INSTINCT_RELAY_OUTBOUND_TOKEN="proof-outbound-token";
  process.env.INSTINCT_RELAY_CALLBACK_TOKEN="proof-callback-token";

  // 1. create + dispatch the task
  const result=await relay.dispatch({summary:"PROOF FIXTURE: compile the weekly fixture report (no real client data)",context:{proof:true,date:"2026-09-26"}});
  console.log("dispatched:",result.correlationId,result.idempotencyKey!==undefined);

  // 2. negative test: bad callback token -> 401
  const bad=relay.acceptCallback({token:"wrong",body:{correlationId:result.correlationId,receiptId:"rcpt-1"}});
  console.log("bad-token-callback-status:",bad.status);

  // 3. good callback -> receipt; 4. replay -> replayed:true
  const good=relay.acceptCallback({token:"proof-callback-token",body:{correlationId:result.correlationId,receiptId:"rcpt-1",state:"done",summary:"fixture report compiled (stub BARS)"}});
  const replay=relay.acceptCallback({token:"proof-callback-token",body:{correlationId:result.correlationId,receiptId:"rcpt-1",state:"done",summary:"fixture report compiled (stub BARS)"}});
  console.log("good-callback-status:",good.status,"replay:",replay.replayed);

  // 5. store task + receipt where the command API reads them (status done: the receipt completed it)
  const db=store.read("tasks");
  db.tasks.push({correlationId:result.correlationId,idempotencyKey:result.idempotencyKey,summary:result.summary,requestedBy:result.requestedBy,createdAt:"2026-09-26",status:"done",proofFixture:true});
  db.receipts.push({...good.receipt,receivedAt:"2026-09-26",executor:"local-stub-relay (BARS bridge contract pending owner decision)",proofFixture:true});
  store.atomicWrite("tasks",db);
  console.log("stored: tasks=",db.tasks.length,"receipts=",db.receipts.length);
  stub.close();
})().catch(e=>{console.error("PROOF FAILED",e);process.exit(1);});
