const test=require('node:test'),assert=require('node:assert/strict');
// C4: server now fails closed without MACS_COMMAND_TOKEN, so this suite sets one and authorizes.
process.env.MACS_COMMAND_TOKEN='test-token-http-suite';
const server=require('../app/server'); let base;
const auth={authorization:'Bearer test-token-http-suite'};
test.before(async()=>{await new Promise(r=>server.listen(0,'127.0.0.1',r));base=`http://127.0.0.1:${server.address().port}`});
test.after(()=>{server.close();delete process.env.MACS_COMMAND_TOKEN;});
test('health and overview work',async()=>{assert.equal((await fetch(base+'/health/live')).status,200);const o=await (await fetch(base+'/api/overview',{headers:auth})).json();assert.equal(o.city.primaryAgent,'MAXX');assert.equal(o.clients.clients.length,0)});
test('overview without token is 401',async()=>{assert.equal((await fetch(base+'/api/overview')).status,401)});
