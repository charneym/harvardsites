/* The story scene (BL/BY/DB): the EVSS mechanism as Efemoral's releases describe it, as ONE continuous scene kept on screen
   for all three steps: a long section through a leg artery (outer wall, media, inner wall). Step 1: plaque builds on the
   inner wall and the lumen narrows; the blood flow thins through it. Step 2: a guidewire and balloon come in from the left;
   the balloon expands four short scaffolds in series, with FlexStep spaces between them, pressing the plaque back to the
   wall and restoring the lumen; the balloon is withdrawn. Step 3: sirolimus elutes from the struts into the wall (gold),
   the scaffolds resorb and fade, and the artery stays open with nothing left behind. Driven by the scrubbed story progress. */
var SCW=760,SCH=520;
var AR={c:260,ot:132,it:162,ib:358,ob:388,x0:16,x1:744};
var SEGS=[[186,270],[294,378],[402,486],[510,594]];
function bump(x,a,b){if(x<=a||x>=b)return 0;var t=(x-a)/(b-a);return Math.pow(Math.sin(Math.PI*t),1.6)}
function plaqueD(top,k){
  /* plaque on the inner wall: top grows down from it, bottom grows up; k = thickness at its crown */
  var y0=top?AR.it:AR.ib,sg=top?1:-1,a=top?178:206,b=top?574:604,d="M"+a+" "+y0,x;
  for(x=a;x<=b;x+=6){var j=1+.12*Math.sin(x*.07+(top?0:1.7));d+="L"+x+" "+(y0+sg*k*bump(x,a,b)*j).toFixed(1)}
  return d+"L"+b+" "+y0+"Z"}
function lumenAt(x,k){var t=AR.it+k*bump(x,178,574)*1.06,b=AR.ib-k*bump(x,206,604)*1.06;return [t,b]}
function ringD(x,half,amp){var d="",n=8,i;for(i=0;i<=n;i++){var y=AR.c-half+2*half*i/n,xx=x+(i%2?amp:-amp);d+=(i?"L":"M")+xx.toFixed(1)+" "+y.toFixed(1)}return d}
function efScene(o){
  var g='',i,mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><linearGradient id="efWf" x1="0" x2="1"><stop offset="0" stop-color="#6cc6ec" stop-opacity="0"/><stop offset=".08" stop-color="#6cc6ec" stop-opacity="1"/><stop offset=".92" stop-color="#6cc6ec" stop-opacity="1"/><stop offset="1" stop-color="#6cc6ec" stop-opacity="0"/></linearGradient></defs>';
  /* ---- base: the artery wall in section, engraved in with the section ---- */
  g+='<g id="scBase">';
  g+='<path class="wl sD" d="M'+AR.x0+' '+AR.ot+'H'+AR.x1+'"/><path class="wl sD" d="M'+AR.x0+' '+AR.ob+'H'+AR.x1+'"/>';
  g+='<path class="md sD" d="M'+AR.x0+' 147H'+AR.x1+'"/><path class="md sD" d="M'+AR.x0+' 373H'+AR.x1+'"/>';
  g+='<path class="wi sD" d="M'+AR.x0+' '+AR.it+'H'+AR.x1+'"/><path class="wi sD" d="M'+AR.x0+' '+AR.ib+'H'+AR.x1+'"/>';
  g+='<text class="t" x="18" y="44">LEG ARTERY · LONG SECTION</text>';
  g+='</g>';
  g+='<rect class="wf" x="'+AR.x0+'" y="'+AR.ot+'" width="'+(AR.x1-AR.x0)+'" height="'+(AR.it-AR.ot)+'"/><rect class="wf" x="'+AR.x0+'" y="'+AR.ib+'" width="'+(AR.x1-AR.x0)+'" height="'+(AR.ob-AR.ib)+'"/>';
  /* ---- plaque ---- */
  g+='<path id="pqT" class="pq"/><path id="pqB" class="pq"/>';
  /* ---- blood flow: short dashes moving along the lumen ---- */
  g+='<g id="flow">';for(i=0;i<27;i++)g+='<path class="fl" d="M0 0h12"/>';g+='</g>';
  /* ---- guidewire, balloon and the four scaffolds ---- */
  g+='<path id="gw" class="gw" d="M-20 '+AR.c+'H700"/>';
  g+='<rect id="bal" class="bal" x="176" y="'+(AR.c-10)+'" width="428" height="20"/>';
  g+='<g id="scf">';SEGS.forEach(function(s,k){g+='<g class="sg">';for(i=0;i<4;i++)g+='<path class="st"/>';g+='<path class="lk"/><path class="lk"/></g>'});g+='</g>';
  /* ---- sirolimus: dots that leave the struts and settle into the wall ---- */
  g+='<g id="drg">';for(i=0;i<40;i++)g+='<circle class="dg" r="2.4"/>';g+='</g>';
  /* ---- step captions, in the clear band under the artery ---- */
  g+='<g id="lb1"><text class="a" x="18" y="470">PLAQUE NARROWS THE LUMEN</text></g>';
  g+='<g id="lb2"><text class="a" x="18" y="470">'+(mob?"SCAFFOLDS IN SERIES, SPACED":"FOUR SHORT SCAFFOLDS, FLEXSTEP SPACES BETWEEN")+'</text></g>';
  g+='<g id="lb3"><text class="a" x="18" y="470">'+(mob?"SIROLIMUS ELUTES, SCAFFOLDS RESORB":"SIROLIMUS ELUTES, THEN THE SCAFFOLDS RESORB")+'</text></g>';
  return g+'</svg>';
}
function scene(){return efScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),wf:$$(".wf",svg),pqT:$("#pqT",svg),pqB:$("#pqB",svg),fl:$$("#flow .fl",svg),
    gw:$("#gw",svg),bal:$("#bal",svg),sg:$$("#scf .sg",svg),dg:$$("#drg .dg",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  /* fixed pseudo-random seeds for the flow lanes and the drug dots */
  var FL=E.fl.map(function(_,i){return {x:(i*137)%728,lane:((i*7919+31)%97)/96-.5}});
  var DG=E.dg.map(function(_,i){var s=SEGS[i%4],top=(i>>2)%2===0;return {x:s[0]+8+((i*29)%(s[1]-s[0]-16)),top:top,d:12+((i*17)%16)}});
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)});E.wf.forEach(function(el){op(el,b)})}
    /* step 1: plaque builds (0.04-0.22); step 2: scaffolds expand and press it back (0.40-0.52) */
    var grow=seg(p,.04,.22),exp=seg(p,.40,.52),k=(8+60*grow)*(1-exp)+11*exp;
    E.pqT.setAttribute("d",plaqueD(1,k));E.pqB.setAttribute("d",plaqueD(0,k));op(E.pqT,b);op(E.pqB,b);
    /* blood flow follows the lumen: lanes squeeze through the narrowing */
    var ph=p*1600;
    E.fl.forEach(function(el,i){var f=FL[i],x=AR.x0+((f.x+ph*(1+.15*(i%3)))%(AR.x1-AR.x0-12)),L=lumenAt(x+6,k),mid=(L[0]+L[1])/2,hw=(L[1]-L[0])/2;
      el.setAttribute("transform","translate("+x.toFixed(1)+" "+(mid+f.lane*hw*1.5).toFixed(1)+")");
      var edge=Math.min(1,(x-AR.x0)/40,(AR.x1-12-x)/40);op(el,b*Math.max(0,edge)*(.35+.65*Math.min(1,hw/70)))});
    /* step 2: guidewire and balloon in (0.30-0.40), expand (0.40-0.52), balloon out (0.56-0.64) */
    var gin=seg(p,.28,.38),bout=seg(p,.56,.64),gx=-760*(1-gin)-760*bout;
    E.gw.setAttribute("transform","translate("+gx.toFixed(1)+" 0)");op(E.gw,b*(gin>0?1:0)*(1-bout));
    var half=14+(AR.ib-AR.it-26)/2*exp-14*exp;half=Math.max(14,half);
    var bh=Math.max(10,half-3);E.bal.setAttribute("y",(AR.c-bh).toFixed(1));E.bal.setAttribute("height",(2*bh).toFixed(1));
    E.bal.setAttribute("transform","translate("+gx.toFixed(1)+" 0)");op(E.bal,b*(gin>0?1:0)*(1-bout)*(.55+.45*(1-exp*.5)));
    /* the scaffolds ride in on the balloon, then stay; step 3 they resorb (0.80-0.94) */
    var res=seg(p,.80,.94),sx=gin<1?gx:0;
    E.sg.forEach(function(gr,j){var s=SEGS[j],w=s[1]-s[0],st=$$(".st",gr),lk=$$(".lk",gr),amp=5+3*exp;
      st.forEach(function(e,r){e.setAttribute("d",ringD(s[0]+6+r*(w-12)/3,half,amp))});
      lk[0].setAttribute("d","M"+(s[0]+6)+" "+(AR.c-half).toFixed(1)+"H"+(s[1]-6+amp));lk[1].setAttribute("d","M"+(s[0]+6-amp)+" "+(AR.c+half).toFixed(1)+"H"+(s[1]-6));
      gr.setAttribute("transform","translate("+sx.toFixed(1)+" 0)");
      op(gr,b*(gin>0?1:0)*(1-res));gr.style.strokeDasharray=res>0?(6*(1-res)+1).toFixed(1)+" "+(2+6*res).toFixed(1):"none"});
    /* step 3: sirolimus leaves the struts into the wall (0.68-0.86), then fades */
    var el=seg(p,.68,.86),dfade=seg(p,.9,.98);
    E.dg.forEach(function(c,i){var d=DG[i],y0=d.top?AR.c-half:AR.c+half,y=y0+(d.top?-1:1)*d.d*el;c.setAttribute("cx",d.x);c.setAttribute("cy",y.toFixed(1));
      op(c,b*Math.min(1,el*3)*(1-dfade*.7))});
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.26,.3)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.64,.68)));op(E.l3,b*seg(p,.74,.82));
  };
}
