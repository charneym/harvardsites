/* StoryFX: continuous, scroll-scrubbed motion for pinned "how it works" sections.
   Usage:  var fx = StoryFX({section: el, figs: [figEl...], steps: [stepEl...]});
           then call fx(p) with p = the SMOOTHED pinned progress 0..1 (e.g. tl.eventCallback("onUpdate", ()=>fx(tl.progress())) ).
   - Figures: overlapping cross-dissolve (rise + scale + slight focus pull), each figure's SVG primitives build in
     (strokes draw, fills grow from their own centre, radially from the middle), a gentle drift while held.
   - First figure builds as the section scrolls into view (own ScrollTrigger), so the pin starts with it already composed.
   - Steps: stacked steps cross over line by line; side-by-side lists brighten/lift the active step continuously.
   - Canvases / images inside figures just get the figure-level transition. Reduced motion: no-op. */
(function(){
  var clamp=function(v){return v<0?0:v>1?1:v};
  var ease=function(t){return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2};
  var out=function(t){return 1-Math.pow(1-t,3)};
  var SKIP='defs,clipPath,mask,pattern,marker,symbol,linearGradient,radialGradient,filter';
  function prepFig(f){
    var prims=[],svgs=f.querySelectorAll('svg');
    for(var s=0;s<svgs.length;s++){
      var svg=svgs[s],list=svg.querySelectorAll('path,line,polyline,polygon,circle,ellipse,rect,text,image'),bb0;
      try{bb0=svg.getBBox()}catch(e){bb0=null}
      var cx=bb0?bb0.x+bb0.width/2:0,cy=bb0?bb0.y+bb0.height/2:0,R=bb0?Math.hypot(bb0.width,bb0.height)/2||1:1;
      for(var i=0;i<list.length;i++){
        var el=list[i];if(el.closest(SKIP))continue;
        var cs=getComputedStyle(el),bb;try{bb=el.getBBox()}catch(e){continue}
        if(bb.width*bb.height===0&&el.tagName!=='line'&&el.tagName!=='path'&&el.tagName!=='polyline')continue;
        var st=cs.stroke,fl=cs.fill,noFill=(fl==='none'||/rgba\([^)]*,\s*0\)$/.test(fl)||cs.fillOpacity==='0'),
            hasStroke=st&&st!=='none'&&cs.strokeOpacity!=='0'&&parseFloat(cs.strokeWidth)>0,
            dashed=cs.strokeDasharray&&cs.strokeDasharray!=='none',
            mode=(noFill&&hasStroke&&!dashed&&el.tagName!=='text'&&el.tagName!=='image')?'draw':'grow',
            canT=!el.getAttribute('transform')&&!el.closest('[transform]')?true:!el.getAttribute('transform');
        var d=Math.hypot(bb.x+bb.width/2-cx,bb.y+bb.height/2-cy)/R;
        var p={el:el,mode:mode,d:d,o:parseFloat(cs.opacity)||1,last:-1,canT:canT&&mode==='grow'&&el.tagName!=='image'};
        if(mode==='draw'){el.setAttribute('pathLength','1');el.style.strokeDasharray='1 1';el.style.strokeDashoffset='1'}
        else if(p.canT){el.style.transformBox='fill-box';el.style.transformOrigin='50% 50%'}
        el.style.transition='none';prims.push(p);
      }
    }
    prims.sort(function(a,b){return a.d-b.d});
    var M=prims.length;prims.forEach(function(p,i){p.off=M>1?(i/(M-1))*.62:0});
    f.style.transition='none';f.style.opacity='1';f.style.willChange='translate,scale,filter';
    return {el:f,prims:prims,last:{}};
  }
  function setFig(F,vis,y,sc,blur){
    var s=F.el.style,k=vis.toFixed(3)+y.toFixed(1)+sc.toFixed(4)+blur.toFixed(2);if(F.last.k===k)return;F.last.k=k;
    // individual translate/scale + filter:opacity compose with any reveal tween on the same element
    s.visibility=vis<.002?'hidden':'visible';
    s.translate='0 '+y.toFixed(1)+'px';s.scale=sc.toFixed(4);
    s.filter='opacity('+vis.toFixed(3)+')'+(blur>.06?' blur('+blur.toFixed(2)+'px)':'');
  }
  function build(F,b){
    for(var i=0;i<F.prims.length;i++){
      var p=F.prims[i],e=clamp((b-p.off)/.38);if(Math.abs(e-p.last)<.004&&!(e===0||e===1)||e===p.last)continue;p.last=e;
      if(p.mode==='draw'){p.el.style.strokeDashoffset=(1-out(e)).toFixed(4);p.el.style.opacity=(p.o*Math.min(1,e*3)).toFixed(3)}
      else{p.el.style.opacity=(p.o*out(e)).toFixed(3);if(p.canT)p.el.style.transform=e>=1?'':'scale('+(.55+.45*out(e)).toFixed(4)+')'}
    }
  }
  window.StoryFX=function(o){
    var RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
    var figs=(o.figs||[]).map(prepFig),steps=o.steps||[],N=Math.max(figs.length,steps.length,1),T=o.overlap||.2,pre=1;
    if(RM)return function(){};
    var stacked=false;
    if(steps.length>1){var a=steps[0].getBoundingClientRect(),c=steps[1].getBoundingClientRect();stacked=Math.abs(a.top-c.top)<12&&Math.abs(a.left-c.left)<12}
    var parts=steps.map(function(s){
      var kids=[].slice.call(s.children).filter(function(k){return k.offsetWidth||k.offsetHeight});if(!kids.length)kids=[s];
      s.style.transition='none';if(stacked){s.style.opacity='1'}kids.forEach(function(k){k.style.transition='none';k.style.willChange='translate,filter'});return kids});
    var lastP=-1;
    function upd(p){
      if(p==null)p=lastP<0?0:lastP;lastP=p;
      var q=p*N;
      for(var j=0;j<N;j++){
        var t=q-j,en=j===0?1:clamp((t+T)/(2*T)),ex=j===N-1?0:clamp((t-(1-T))/(2*T));
        var F=figs[j];
        if(F){
          if(j===0)en=pre;
          var vis=ease(en)*(1-ease(ex)),hold=clamp(t);
          var y=(1-out(en))*34-ease(ex)*30+(.5-hold)*10,sc=(.93+.07*out(en))*(1+.035*ease(ex))*(1+.018*hold),blur=(1-out(en))*5+ease(ex)*5;
          setFig(F,vis,y,sc,blur);
          if(vis>0||en>0)build(F,j===0?pre*1.3:clamp((t+T)/(2*T+.45)));
        }
        var kids=parts[j];if(!kids)continue;
        if(stacked){
          var se=j===0?1:clamp((t-.02)/T),sx=j===N-1?0:clamp((t-(1-T))/T);
          steps[j].style.visibility=(se>0&&sx<1)?'visible':'hidden';
          for(var k=0;k<kids.length;k++){
            var o2=k*.18,ke=clamp((se*(1+o2*kids.length*.5))-o2),kx=clamp(sx*(1+.15*k));
            kids[k].style.filter='opacity('+(out(ke)*(1-ease(kx))).toFixed(3)+')';
            kids[k].style.translate='0 '+((1-out(ke))*26-ease(kx)*18).toFixed(1)+'px';
          }
        }else{
          var act=t<0?clamp(1+t/T):t>1?clamp(1-(t-1)/T):1;act=ease(act);
          steps[j].style.filter='opacity('+(.36+.64*act).toFixed(3)+')';
          steps[j].style.translate='0 '+((1-act)*8).toFixed(1)+'px';
        }
      }
    }
    if(figs[0]&&o.section&&window.ScrollTrigger){
      pre=0;ScrollTrigger.create({trigger:o.section,start:'top 70%',end:'top top',onUpdate:function(s){pre=s.progress;upd()},onLeave:function(){pre=1;upd()},onLeaveBack:function(){pre=0;upd()}});
      // already past?  (reload restore)
      if(o.section.getBoundingClientRect().top<=0)pre=1;
    }
    upd(0);
    return upd;
  };
})();
