// Usage: node deep.js dom1,dom2,... work/deep   -> per-site JSON (all page texts, links, meta) + full-page screenshot
const {chromium}=require('playwright');const fs=require('fs');
const ids=process.argv[2].split(',');const out=process.argv[3];fs.mkdirSync(out,{recursive:true});
(async()=>{const b=await chromium.launch();
async function crawl(id){const ctx=await b.newContext({viewport:{width:1280,height:800},userAgent:'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36'});const p=await ctx.newPage();const pages={};let imgs=[];
 try{await p.goto('https://'+id,{timeout:30000,waitUntil:'domcontentloaded'});await p.waitForTimeout(3000);
  const host=new URL(p.url()).host;
  const links=await p.evaluate(h=>[...new Set([...document.querySelectorAll('a[href]')].map(a=>a.href).filter(u=>{try{const x=new URL(u);return x.host==h&&!/\.(pdf|jpg|png|zip)$/i.test(x.pathname)}catch(e){return false}}).map(u=>u.split('#')[0]))],host);
  const meta=await p.evaluate(()=>({gen:(document.querySelector('meta[name=generator]')||{}).content||'',theme:(document.querySelector('meta[name=theme-color]')||{}).content||'',title:document.title,desc:(document.querySelector('meta[name=description]')||{}).content||''}));
  pages[p.url()]=await p.evaluate(()=>document.body.innerText);
  await p.screenshot({path:`${out}/${id}-full.png`,fullPage:true}).catch(()=>{});
  for(const u of links.slice(0,12)){if(pages[u])continue;try{await p.goto(u,{timeout:20000,waitUntil:'domcontentloaded'});await p.waitForTimeout(1500);pages[u]=await p.evaluate(()=>document.body.innerText)}catch(e){pages[u]='ERR '+e.message.slice(0,80)}}
  fs.writeFileSync(`${out}/${id}.json`,JSON.stringify({id,meta,links,pages},null,1));
 }catch(e){fs.writeFileSync(`${out}/${id}.json`,JSON.stringify({id,err:String(e).slice(0,200)}))}
 await ctx.close()}
const q=[...ids];await Promise.all([1,2,3,4].map(async()=>{while(q.length)await crawl(q.shift())}));await b.close()})();
