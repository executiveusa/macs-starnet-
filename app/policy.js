const policy=require('../config/policies.json');
const blocked=new Set(['money-move','crypto-trade','wallet-sign','wager','gambling-execute','production-deploy']);
const approvals=new Set(['external-message','publish','bluehost-write','delete-client','change-domain']);
function decide(action,{approved=false}={}){if(blocked.has(action)) return {allowed:false,reason:'blocked-by-policy'}; if(approvals.has(action)&&!approved) return {allowed:false,reason:'approval-required'}; return {allowed:true,reason:'within-scope'};}
module.exports={decide,policy};
