const consequential=new Set(['publish','external-message','bluehost-write','delete-client','change-domain']);
function next({transcript='',action=''}){const clean=String(transcript).trim();if(!clean)return {state:'listening',say:'I didn’t catch that.'};if(consequential.has(action))return {state:'readback',say:`I heard: ${clean}. Confirm before I do that.`,requiresConfirmation:true};return {state:'dispatch',transcript:clean,requiresConfirmation:false};}
module.exports={next};
