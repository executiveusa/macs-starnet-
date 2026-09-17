import {createRequire} from 'node:module'; const require=createRequire(import.meta.url); const {buildDailyReport}=require('../app/reports'); console.log(JSON.stringify(buildDailyReport(),null,2));
