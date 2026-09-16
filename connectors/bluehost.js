const {request}=require('./http-client');const {decide}=require('../app/policy');
function cfg(env=process.env){return {baseUrl:env.BLUEHOST_API_BASE_URL,token:env.BLUEHOST_API_TOKEN};}
async function listSites(env,fetchImpl){return request({...cfg(env),path:'/sites',fetchImpl});}
async function changeSite(siteId,change,{approved=false}={},env,fetchImpl){const gate=decide('bluehost-write',{approved});if(!gate.allowed)return gate;return request({...cfg(env),path:`/sites/${encodeURIComponent(siteId)}`,method:'PATCH',body:change,idempotencyKey:change.idempotencyKey,fetchImpl});}
module.exports={listSites,changeSite};
