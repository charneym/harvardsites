// PROD-7 eyeball shots: node _kit/tools/p7shot.js <slug> <outdir> [scrolls...]  -> hero 1440 (8s, + scroll offsets), 390, loader frames
const {chromium}=require('playwright');const path=require('path');
const [slug,out,...sc]=process.argv.slice(2);const F='file://'+path.resolve(__dirname,'../../'+slug+'/index.html')+'#/';
(async()=>{const b=await chromium.launch();
 let p=await b.newPage({viewport:{width:1440,height:900}});await p.goto(F);
 for(const t of [250,700,1150]){await p.waitForTimeout(t===250?250:450);await p.screenshot({path:`${out}/${slug}-ld${t}.jpg`,quality:60})}
 await p.waitForTimeout(7000);await p.screenshot({path:`${out}/${slug}-1440.jpg`,quality:75});
 for(const y of sc){await p.mouse.wheel(0,+y);await p.waitForTimeout(1200);await p.screenshot({path:`${out}/${slug}-1440-s${y}.jpg`,quality:60});await p.evaluate(()=>{try{lenis.scrollTo(0,{immediate:true})}catch(e){scrollTo(0,0)}});await p.waitForTimeout(600)}
 await p.close();p=await b.newPage({viewport:{width:390,height:844},deviceScaleFactor:1});await p.goto(F);await p.waitForTimeout(8000);
 await p.screenshot({path:`${out}/${slug}-390.jpg`,quality:70});await b.close()})();
