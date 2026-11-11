// Usage: node build.js src.html out.html   (run `npm i` in this folder first)
// In src.html use these markers:
//   <!--@libs gsap ScrollTrigger SplitText CustomEase Flip lenis-->   -> inlines those scripts
//   /*@fonts Fraunces:300,400,400i,600; Inter Tight:400,500,600*/        -> inlines @font-face (base64 woff2) inside a <style>
//   Font names map to @fontsource/<kebab-name>. Install new ones first:  npm i @fontsource/<kebab-name>
const fs=require('fs'),path=require('path');const K=path.join(__dirname,'node_modules');
const [,,src,out]=process.argv;let h=fs.readFileSync(src,'utf8');
/* Reveal triggers created before a pinned section would otherwise be measured without the pin spacer and fire early (content reveals off-screen). Always sort by page position before every refresh. */
const STFIX=';(function(){var S=window.ScrollTrigger;if(!S||S.__sorted)return;S.__sorted=1;var r=S.refresh;S.refresh=function(){try{S.sort()}catch(e){}return r.apply(S,arguments)};var c=S.create;S.create=function(){var t=c.apply(S,arguments);clearTimeout(S.__rt);S.__rt=setTimeout(function(){S.refresh()},120);return t}})();';
const libs={gsap:'gsap/dist/gsap.min.js',ScrollTrigger:'gsap/dist/ScrollTrigger.min.js',SplitText:'gsap/dist/SplitText.min.js',CustomEase:'gsap/dist/CustomEase.min.js',Flip:'gsap/dist/Flip.min.js',lenis:'lenis/dist/lenis.min.js',storyfx:'../storyfx.js'};
h=h.replace(/<!--@libs([^>]*)-->/g,(m,l)=>l.trim().split(/\s+/).map(n=>{if(!libs[n])throw Error('unknown lib '+n);return '<script>'+fs.readFileSync(path.join(K,libs[n]),'utf8').replace(/\/\/# sourceMappingURL=.*$/m,'')+(n==='ScrollTrigger'?STFIX:'')+(n==='gsap'?fs.readFileSync(path.join(__dirname,'imgfx.js'),'utf8'):'')+'</script>'}).join('\n'));
h=h.replace(/\/\*@fonts([^*]*)\*\//g,(m,spec)=>spec.split(';').map(s=>s.trim()).filter(Boolean).map(s=>{const [fam,ws]=s.split(':');const name=fam.trim();const k=name.toLowerCase().replace(/\s+/g,'-');const dir=path.join(K,'@fontsource',k,'files');if(!fs.existsSync(dir))throw Error('Install font: cd '+__dirname+' && npm i @fontsource/'+k);
 return ws.split(',').map(w=>{w=w.trim();const it=w.endsWith('i');const wt=w.replace('i','');const f=path.join(dir,`${k}-latin-${wt}-${it?'italic':'normal'}.woff2`);if(!fs.existsSync(f))throw Error('missing '+f);
 return `@font-face{font-family:'${name}';font-style:${it?'italic':'normal'};font-weight:${wt};font-display:swap;src:url(data:font/woff2;base64,${fs.readFileSync(f).toString('base64')}) format('woff2')}`}).join('\n')}).join('\n'));
fs.writeFileSync(out,h);console.log('built',out,(h.length/1024|0)+'KB');
