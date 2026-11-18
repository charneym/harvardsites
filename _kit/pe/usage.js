// Usage: node _kit/pe/usage.js [label]   -> sums token usage of THIS Claude Code session (newest transcript in
// ~/.claude/projects/<repo>/) and appends a line to _kit/pe/review/usage.log. Run before and after a site; the
// difference is that site's cost. Fields: in = uncached input, cw = cache writes, cr = cache reads, out = output.
const fs=require('fs'),path=require('path'),os=require('os');
const dir=path.join(os.homedir(),'.claude','projects');let best=null;
for(const d of fs.readdirSync(dir)){const p=path.join(dir,d);if(!fs.statSync(p).isDirectory())continue;for(const f of fs.readdirSync(p))if(f.endsWith('.jsonl')){const q=path.join(p,f),t=fs.statSync(q).mtimeMs;if(!best||t>best.t)best={q,t}}}
const s={in:0,cw:0,cr:0,out:0,turns:0},seen=new Set();
for(const l of fs.readFileSync(best.q,'utf8').split('\n')){if(!l)continue;let j;try{j=JSON.parse(l)}catch(e){continue}const u=j.message&&j.message.usage;if(!u||seen.has(j.message.id))continue;seen.add(j.message.id);s.turns++;s.in+=u.input_tokens||0;s.cw+=u.cache_creation_input_tokens||0;s.cr+=u.cache_read_input_tokens||0;s.out+=u.output_tokens||0}
const line=new Date().toISOString()+' '+(process.argv[2]||'')+' '+JSON.stringify(s);console.log(line);
fs.mkdirSync(path.join(__dirname,'review'),{recursive:true});fs.appendFileSync(path.join(__dirname,'review','usage.log'),line+'\n');
