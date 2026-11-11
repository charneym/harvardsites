;(function(){/* Photos never rise, slide or wipe in: they fade in while settling from a hair of scale, in place. */
var g=window.gsap;if(!g||g.__imgfx)return;g.__imgfx=1;
function isPh(el){if(!el||el.nodeType!==1)return false;var t=el.tagName;if(t==='IMG'||t==='PICTURE'||t==='VIDEO')return true;
  if(t==='SVG'||t==='CANVAS')return false;var im=el.querySelector&&el.querySelector('img,picture,video');if(!im)return false;
  var r=el.getBoundingClientRect(),ir=im.getBoundingClientRect();return r.width*r.height>0&&ir.width*ir.height/(r.width*r.height)>.18}
function tl(x){if(!x)return[];if(typeof x==='string'){try{return[].slice.call(document.querySelectorAll(x))}catch(e){return[]}}if(x.length!==undefined&&!x.nodeType)return[].slice.call(x);return[x]}
var MOVE=['y','x','yPercent','xPercent','clipPath','webkitClipPath','rotation','rotate'];
function reveal(v){return v&&(('opacity'in v)||('autoAlpha'in v)||('clipPath'in v))&&!(v.scrollTrigger&&v.scrollTrigger.scrub)}
function strip(v,phase){var o={};for(var k in v)if(MOVE.indexOf(k)<0)o[k]=v[k];
  if(phase==='start'){o.scale=1.035;if(!('opacity'in o)&&!('autoAlpha'in o))o.opacity=0}
  else if(phase==='end'){o.scale=1;if(!('opacity'in o)&&!('autoAlpha'in o))o.opacity=1;o.duration=Math.max(o.duration||1,1.35);o.ease='power2.out';
    if(o.clearProps&&/clipPath/.test(o.clearProps))o.clearProps=o.clearProps.replace(/clipPath/g,'transform')}
  return o}
function split(targets,fn){var a=tl(targets),ph=[],ot=[];a.forEach(function(e){(isPh(e)?ph:ot).push(e)});return {ph:ph,ot:ot}}
['set','to','from'].forEach(function(m){var orig=g[m];g[m]=function(t,v){
  if(!reveal(v)&&!(m==='set'&&v&&('clipPath'in v||'y'in v||'yPercent'in v)&&('opacity'in v||'clipPath'in v)))return orig.apply(g,arguments);
  var s=split(t);if(!s.ph.length)return orig.apply(g,arguments);
  var phase=m==='set'?'start':m==='from'?'start':'end';
  if(s.ot.length)orig.call(g,s.ot,v);
  var r=orig.call(g,s.ph,strip(v,phase));if(m==='set')s.ph.forEach(function(e){e.style.clipPath='none'});return r}});
var fT=g.fromTo;g.fromTo=function(t,a,b){if(!reveal(b))return fT.apply(g,arguments);var s=split(t);if(!s.ph.length)return fT.apply(g,arguments);
  if(s.ot.length)fT.call(g,s.ot,a,b);return fT.call(g,s.ph,strip(a,'start'),strip(b,'end'))};
})();
;(function(){/* A throwing scroll/timeline callback (e.g. a view torn down mid-scrub during a route change) must never break page transitions */
var g=window.gsap;if(!g||!g.core||!g.core.Animation)return;var A=g.core.Animation.prototype,ec=A.eventCallback;if(A.__safe)return;A.__safe=1;
A.eventCallback=function(t,cb,pr){if(typeof cb==='function'){var f=cb;cb=function(){try{return f.apply(this,arguments)}catch(e){console.warn('safe cb',e)}}}return arguments.length>1?ec.call(this,t,cb,pr):ec.call(this,t)};
})();
