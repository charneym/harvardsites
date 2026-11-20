/* LAYOUT FIT (coordinator phase 2, 2026-11-20; client on /finatem/ at ~1920: "too narrow and leave way too much white space ... maybe their text should be smaller on smaller dimensions?")
   Shared by every home-only site (bundled with "buildout" in build.js). Runs in <head> order before the site's script, so the CSS is in place before any text is split.
   1. Wide screens: the content container grows from 1320px to ~1600px between 1500 and 2000px of viewport.
   2. The large serif statement (.mani) sits on the grid (left edge = grid left, ~2/3 width) and scales with the viewport.
   3. Display type eases at 1024-1366 and on phones; the hero H1 stops growing at ~1700px.
      H1 / stat / section-heading sizes are min(site's own size, shared curve), so a site tuned smaller stays smaller.
      The site's own rules (and their @media variants) are read from the CSSOM and mirrored, so per-site tuning keeps working.
   4. Stat numerals always fit their column: shrink-to-fit on load, resize and whenever a counter changes the text. */
(function(){
"use strict";
if(window.__fit)return;window.__fit=1;
var D=document;
var CURVE={
  h1:"clamp(40px, 4.7vw + 24px, 108px)",
  d2:"clamp(34px, 3.4vw + 20px, 88px)",
  stat:"clamp(40px, 3vw + 14px, 92px)"
};
/* fake elements standing in for the template's markup, used to find which site rules size them */
function fake(html,sel){var t=D.createElement("div");t.innerHTML=html;return t.querySelector(sel)}
var F={
  h1:fake('<main><div id="view"><section class="hero" id="hero"><h1 class="d1 hero-h" id="pageTitle"></h1></section></div></main>',"h1"),
  ph:fake('<main><div id="view"><section class="ph-head"><h1 class="d1" id="pageTitle"></h1></section></div></main>',"h1"),
  d2:fake('<main><div id="view"><section class="sec light"><div class="wrap"><div class="shead"><div><h2 class="d2 split"></h2></div></div></div></section></div></main>',"h2"),
  stat:fake('<main><div id="view"><section class="sec mani dark"><div class="wrap"><div class="stats"><div class="stat"><span class="v"></span></div></div></div></section></div></main>',".v")
};
function sites(el){/* [{media:"", val:"..."}] in cascade order */var out=[];
  function walk(rules,media){for(var i=0;i<rules.length;i++){var r=rules[i];
    if(r.type===4){walk(r.cssRules,(media?media+" and ":"")+r.media.mediaText);continue}
    if(r.type!==1||!r.style)continue;var fs=r.style.getPropertyValue("font-size");if(!fs)continue;
    var sels=r.selectorText.split(",");for(var j=0;j<sels.length;j++){var s=sels[j].trim();if(!s||/::?(before|after|first-line|first-letter)/.test(s))continue;try{if(el.matches(s)){out.push({media:media,val:fs});break}}catch(e){}}}}
  for(var k=0;k<D.styleSheets.length;k++){var sh=D.styleSheets[k];if(sh.ownerNode&&sh.ownerNode.id==="fit-css")continue;try{walk(sh.cssRules,"")}catch(e){}}
  return out}
function minRules(sel,el,curve){var list=sites(el),css="";
  if(!list.length)return sel+"{font-size:"+curve+"!important}";
  list.forEach(function(x){var v=/^(inherit|initial|unset|revert)$/.test(x.val)?curve:"min("+x.val+", "+curve+")";var r=sel+"{font-size:"+v+"!important}";css+=x.media?"@media "+x.media+"{"+r+"}":r});return css}
function build(){var css=
  /* 1. a wider container on large screens (the template's --side is computed from --maxw) */
  "@media (min-width:1500px){:root{--maxw:clamp(1320px, 88vw - 100px, 1600px)}}"+
  /* 2. the statement on the grid, ~2/3 wide, scaling with the viewport */
  ".mani .mani-in{width:auto;max-width:none;margin-left:0;margin-right:0}"+
  ".mani .txt{font-size:clamp(28px, 2.8vw + 6px, 76px)!important;max-width:none;text-wrap:pretty}"+
  "@media (min-width:1025px){.mani .txt{max-width:66%!important}}"+
  /* 3. gentler display type; the hero H1 caps out */
  minRules("html body .hero h1.d1, html body .hero .hero-h",F.h1,CURVE.h1)+
  minRules("html body .ph-head h1.d1",F.ph,CURVE.h1)+
  minRules("html body .sec .d2",F.d2,CURVE.d2)+
  minRules("html body .stats .stat .v",F.stat,CURVE.stat)+
  /* 4. stat numerals never run into the next column */
  ".stats .stat{min-width:0}.stats .stat .v{max-width:100%}";
  var s=D.getElementById("fit-css")||D.createElement("style");s.id="fit-css";s.textContent=css;(D.head||D.documentElement).appendChild(s)}
try{build()}catch(e){}

/* stat shrink-to-fit: measure the text itself (a Range, so split-line masks don't hide the overflow) against the column */
var VS=".stats .stat .v, .stat .v";
function textW(el){/* union of the glyph boxes of every text node (block wrappers from line splitting would report the full column) */
  var l=1e9,r=-1e9,w=D.createTreeWalker(el,4),n,rg=D.createRange();
  while((n=w.nextNode())){if(!n.nodeValue.trim())continue;rg.selectNodeContents(n);var rs=rg.getClientRects();for(var i=0;i<rs.length;i++){if(!rs[i].width)continue;if(rs[i].left<l)l=rs[i].left;if(rs[i].right>r)r=rs[i].right}}
  return r>l?r-l:0}
var busy=false;
function fitStats(){if(busy)return;busy=true;try{
  Array.prototype.forEach.call(D.querySelectorAll(VS),function(v){if(v.closest("#bo")&&!v.closest(".on"))return;
    v.style.removeProperty("font-size");var col=v.parentElement?v.parentElement.clientWidth:0;if(!col)return;
    var w=textW(v);if(w>col-2){var fs=parseFloat(getComputedStyle(v).fontSize)||0;if(fs)v.style.setProperty("font-size",Math.floor(fs*(col-2)/w*0.98)+"px","important")}})
  }finally{busy=false}}
var raf=0;function soon(){if(raf)return;raf=requestAnimationFrame(function(){raf=0;fitStats()})}
addEventListener("resize",soon);addEventListener("load",function(){soon();setTimeout(soon,600);setTimeout(soon,2500)});
if(D.fonts&&D.fonts.ready)D.fonts.ready.then(soon);
/* counters and route changes rewrite the text: refit (the observer ignores our own style writes) */
try{new MutationObserver(function(ms){for(var i=0;i<ms.length;i++){var t=ms[i].target,e=t.nodeType===1?t:t.parentElement;if(e&&(e.closest&&e.closest(".stats, .stat")||e.id==="view"||e.id==="bo")){soon();return}}})
  .observe(D.documentElement,{childList:true,subtree:true,characterData:true})}catch(e){}
window.Fit={stats:fitStats,css:build};
})();
