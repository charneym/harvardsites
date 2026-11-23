// node bake.js out.png [w] [h] [query]  (serves this folder + three from SCR on :8771)
const {chromium}=require('playwright');const http=require('http'),fs=require('fs'),path=require('path');
const THREE_DIR=process.env.THREE_DIR;const here=__dirname;
const srv=http.createServer((q,s)=>{let u=decodeURIComponent(q.url.split('?')[0]);let f=u.startsWith('/three/')?path.join(THREE_DIR,u.slice(7)):path.join(here,u);
  fs.readFile(f,(e,d)=>{if(e){s.writeHead(404);s.end();return}s.writeHead(200,{'content-type':f.endsWith('.js')?'text/javascript':'text/html'});s.end(d)})}).listen(+(process.env.PORT||8771));
(async()=>{const [out,w,h,qs]=[process.argv[2],+(process.argv[3]||2400),+(process.argv[4]||1800),process.argv[5]||''];
const b=await chromium.launch({args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist']});
const p=await b.newPage({viewport:{width:w,height:h},deviceScaleFactor:1});p.on('pageerror',e=>console.log('ERR',e.message));p.on('console',m=>{if(m.type()==='error')console.log('console',m.text())});
await p.goto(`http://127.0.0.1:${process.env.PORT||8771}/band.html?w=${w}&h=${h}&${qs}`);
await p.waitForFunction('window.DONE===true',null,{timeout:300000});
await p.screenshot({path:out,omitBackground:true});await b.close();srv.close()})();
