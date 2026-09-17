const {request}=require('./http-client'); const {decide}=require('../app/policy');
function config(env=process.env){return {baseUrl:env.POSTASTUDIOS_BASE_URL,token:env.POSTASTUDIOS_API_TOKEN};}
async function listCalendar(env,fetchImpl){const c=config(env);return request({...c,path:'/api/posts',fetchImpl});}
async function createDraft(draft,env,fetchImpl){const c=config(env);return request({...c,path:'/api/posts',method:'POST',body:{...draft,status:'draft'},fetchImpl});}
async function publish(id,{approved=false}={},env,fetchImpl){const gate=decide('publish',{approved});if(!gate.allowed)return gate;const c=config(env);return request({...c,path:`/api/posts/${encodeURIComponent(id)}/publish`,method:'POST',body:{approved:true},fetchImpl});}
module.exports={listCalendar,createDraft,publish};
