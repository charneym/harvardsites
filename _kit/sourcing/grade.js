// Usage: node grade.js work/candidates.json work/shots   -> screenshots + badness signals in work/shots/grade.json
const {chromium}=require('playwright');const fs=require('fs');
const sites=JSON.parse(fs.readFileSync(process.argv[2])).map(x=>({...x,id:x.id||x.domain,url:x.url||('https://'+x.domain),org:x.org||''}));const outdir=process.argv[3];fs.mkdirSync(outdir,{recursive:true});
(async()=>{const b=await chromium.launch();const res=[];let i=0;
async function one(s){const ctx=await b.newContext({viewport:{width:1280,height:800},userAgent:'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36'});const p=await ctx.newPage();
 const r={...s};try{await p.goto(s.url,{timeout:25000,waitUntil:'domcontentloaded'});await p.waitForTimeout(3500);
 r.final=p.url();
 Object.assign(r,await p.evaluate(()=>{const h=document.documentElement.outerHTML;const t=document.body?document.body.innerText:'';
  const gen=(document.querySelector('meta[name=generator]')||{}).content||'';
  const fp=[['wix',/wixstatic|wix\.com/],['squarespace',/squarespace/],['godaddy',/wsimg\.com|godaddy/],['weebly',/weebly/],['webflow',/webflow/],['framer',/framer/],['wordpress',/wp-content/],['hubspot',/hubspot|hs-sites/],['elementor',/elementor/],['divi',/et_pb_|Divi/],['site123',/site123/],['strikingly',/strikingly/],['google sites',/sites\.google/],['jimdo',/jimdo/]].filter(([n,re])=>re.test(h)).map(x=>x[0]);
  const host=location.host;const links=[...new Set([...document.querySelectorAll('a[href]')].map(a=>a.href).filter(u=>{try{const x=new URL(u);return x.host==host&&x.pathname.length>1&&!/\.(pdf|jpg|png)$/i.test(x.pathname)}catch(e){return false}}).map(u=>new URL(u).pathname.replace(/\/$/,'')))];
  const yrs=(t.match(/\b20[0-2]\d\b/g)||[]).map(Number);const cr=(t.match(/(?:©|copyright)\s*(?:\d{4}\s*[-–]\s*)?(\d{4})/i)||[])[1]||'';
  const tmpl=(t.match(/lorem ipsum|blog post title|new page|your title here|add a description|sample page|hello world|coming soon|under construction|placeholder|click here to edit|this is a paragraph|write something|insert text/gi)||[]).slice(0,5);
  return {title:document.title,gen,fp,nlinks:links.length,links:links.slice(0,25),textlen:t.length,maxyr:yrs.length?Math.max(...yrs):0,copyright:cr,tmpl,team:/team|leadership|about|people/i.test(links.join(' ')),news:/news|press|media|blog|updates/i.test(links.join(' ')),height:document.body?document.body.scrollHeight:0,snippet:t.replace(/\s+/g,' ').slice(0,400)};}));
 await p.screenshot({path:`${outdir}/${s.id}.png`});}catch(e){r.err=String(e).slice(0,120)}
 await ctx.close();return r}
const q=[...sites];async function worker(){while(q.length){const s=q.shift();res.push(await one(s));if(res.length%20==0)console.log(res.length)}}
await Promise.all([worker(),worker(),worker(),worker()]);fs.writeFileSync(outdir+'/grade.json',JSON.stringify(res,null,0));await b.close()})();
