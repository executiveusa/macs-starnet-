const fs=require('node:fs'); const path=require('node:path');
const root=path.resolve(__dirname,'..');
const files={clients:'data/clients.json',content:'data/content.json',tasks:'data/tasks.json',crypto:'data/crypto-watch.json'};
function read(name){if(!files[name]) throw new Error('unknown store'); return JSON.parse(fs.readFileSync(path.join(root,files[name]),'utf8'));}
function atomicWrite(name,value){if(!files[name]) throw new Error('unknown store'); const dest=path.join(root,files[name]); const tmp=dest+'.tmp'; fs.writeFileSync(tmp,JSON.stringify(value,null,2)+'\n'); fs.renameSync(tmp,dest);}
module.exports={read,atomicWrite,root};
