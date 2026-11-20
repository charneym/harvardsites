const {chromium}=require('playwright');const http=require('http'),fs=require('fs'),path=require('path');
const root=path.resolve(__dirname,'../../../node_modules');
const srv=http.createServer((q,res)=>{let u=decodeURIComponent(q.url.split('?')[0]);let f=u==='/'?path.join(__dirname,'hero.html'):path.join(root,u);
 fs.readFile(f,(e,d)=>{if(e){res.writeHead(404);return res.end()}res.writeHead(200,{'content-type':f.endsWith('.js')?'text/javascript':'text/html'});res.end(d)})}).listen(8765,async()=>{
 const [out,w,h,qs]=[process.argv[2],+process.argv[3]||1600,+process.argv[4]||900,process.argv[5]||''];
 const b=await chromium.launch({args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader']});const p=await b.newPage({viewport:{width:w,height:h}});
 p.on('console',m=>console.log(m.text()));p.on('pageerror',e=>console.log('ERR',e.message));
 await p.goto(`http://localhost:8765/?w=${w}&h=${h}&${qs}`);await p.waitForFunction('window.DONE',null,{timeout:60000});
 await p.screenshot({path:out});await b.close();srv.close()});
