const test=require('node:test'),assert=require('node:assert/strict'); const {decide}=require('../app/policy');
test('wallet actions, trades, wagers, and production are blocked',()=>{for(const x of ['money-move','crypto-trade','wallet-sign','wager','gambling-execute','production-deploy']) assert.equal(decide(x).allowed,false)});
test('publishing and server writes need approval',()=>{for(const x of ['publish','bluehost-write','external-message']){assert.equal(decide(x).reason,'approval-required');assert.equal(decide(x,{approved:true}).allowed,true)}});
