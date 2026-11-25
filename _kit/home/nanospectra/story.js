/* The story scene (BL/BY/DB): how AuroLase Therapy works, drawn as ONE continuous cross-section of the prostate, kept on
   screen for all three steps (nanospectra.com; Nanospectra press releases Feb 2020 and Nov 2021). Step 1: AuroShell
   nanoshells are infused intravenously, travel in the bloodstream and gather in the target lesion. Step 2: MRI/ultrasound
   fusion imaging locates the lesion (a crosshair echoing the Nanospectra mark) and an optical fiber probe is placed into it
   through the skin. Step 3: near-infrared light through the fiber; the nanoshells turn it into heat, so only the lesion is
   ablated and the healthy tissue around it is spared. Every element is driven by the scrubbed story progress. */
var SCW=760,SCH=520;
var NS_LX=490,NS_LY=300;
var NS_T=[];(function(){var r=11;function rnd(){r=(r*9301+49297)%233280;return r/233280}
  for(var i=0;i<16;i++){var a=i*2.39996,d=Math.sqrt((i+.5)/16)*30;NS_T.push([NS_LX+d*Math.cos(a)+(rnd()-.5)*3,NS_LY+d*Math.sin(a)*.86+(rnd()-.5)*3])}})();
function nsScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true"><defs>'+
    '<radialGradient id="nsTis" cx=".55" cy=".55" r=".6"><stop offset="0" stop-color="#3fa2f7" stop-opacity=".16"/><stop offset="1" stop-color="#3fa2f7" stop-opacity=".03"/></radialGradient><radialGradient id="nsHeat"><stop offset="0" stop-color="#ffe08a" stop-opacity=".95"/><stop offset=".45" stop-color="#ffb43c" stop-opacity=".6"/><stop offset="1" stop-color="#ff8a1e" stop-opacity="0"/></radialGradient></defs>';
  /* ---- base: the prostate in cross-section, the urethra, the feeding vessel and the target lesion ---- */
  g+='<g id="scBase">';
  g+='<path class="org sD" d="M380 82C520 80 612 150 610 250C608 340 520 402 380 402C240 402 152 340 150 250C148 150 240 84 380 82Z"/>';
  g+='<circle class="ure sD" cx="380" cy="190" r="12"/>';
  g+='<path class="ves sD" id="nsVes" d="M20 336C110 336 170 320 240 313C320 305 380 300 448 300"/>';
  g+='<path class="ves cap sD" d="M392 302C424 292 446 280 468 274"/><path class="ves cap sD" d="M392 302C424 314 450 326 474 332"/>';
  g+='<path class="les sD" d="M490 256C518 255 536 276 535 300C534 326 514 344 490 344C463 344 446 326 446 300C446 274 464 257 490 256Z"/>';
  g+='<text class="t" x="150" y="62">PROSTATE, CROSS-SECTION</text>';
  g+='<text class="t" x="400" y="194">URETHRA</text>';
  g+='<text class="t" x="20" y="'+(mob?310:316)+'">'+(mob?"VESSEL":"BLOOD VESSEL")+'</text>';
  g+='</g>';
  /* ---- step 3: the heat, confined to the lesion ---- */
  g+='<g id="heat"><circle cx="'+NS_LX+'" cy="'+NS_LY+'" r="62" fill="url(#nsHeat)"/><circle class="ring" id="ring1" cx="'+NS_LX+'" cy="'+NS_LY+'" r="50"/><circle class="ring" id="ring2" cx="'+NS_LX+'" cy="'+NS_LY+'" r="50"/></g>';
  g+='<g id="spare"><text class="t sp" x="178" y="262">'+(mob?"TISSUE SPARED":"HEALTHY TISSUE SPARED")+'</text></g>';
  /* ---- AuroShell nanoshells: gold particles that travel the vessel and gather in the lesion ---- */
  g+='<g id="shells">'+NS_T.map(function(t,k){return '<circle class="shl" id="sh'+k+'" r="4.2" cx="0" cy="0"/>'}).join("")+'</g>';
  /* ---- step 2: the fusion-imaging target (a crosshair, like the Nanospectra mark) ---- */
  g+='<g id="xh"><circle class="xh" cx="'+NS_LX+'" cy="'+NS_LY+'" r="64"/>'+
    '<path class="xh" d="M'+NS_LX+' '+(NS_LY-84)+'V'+(NS_LY-70)+'M'+NS_LX+' '+(NS_LY+70)+'V'+(NS_LY+84)+'M'+(NS_LX-84)+' '+NS_LY+'H'+(NS_LX-70)+'M'+(NS_LX+70)+' '+NS_LY+'H'+(NS_LX+84)+'"/></g>';
  /* ---- the optical fiber probe, tip advancing to the lesion from the lower right ---- */
  g+='<g id="fib"><path class="fbr" id="fbrP" d="M740 470L740 470"/><circle class="tip" id="fbrT" r="3.2" cx="740" cy="470"/></g>';
  g+='<g id="fibL"><text class="t" x="740" y="504" text-anchor="end">OPTICAL FIBER</text></g>';
  /* ---- the state of the lesion, under the organ ---- */
  g+='<g id="m1"><text class="t s1" x="380" y="446" text-anchor="middle">'+(mob?"NANOSHELLS GATHER":"NANOSHELLS GATHER IN THE TARGET LESION")+'</text></g>';
  g+='<g id="m2"><text class="t s2" x="380" y="446" text-anchor="middle">'+(mob?"LESION LOCATED":"MRI / ULTRASOUND FUSION LOCATES THE LESION")+'</text></g>';
  g+='<g id="m3"><text class="t s1" x="380" y="446" text-anchor="middle">'+(mob?"ABLATION ZONE":"ABLATION ZONE: THE LESION ONLY")+'</text></g>';
  /* ---- step captions, in the clear band under the scene ---- */
  g+='<g id="lb1"><text class="a" x="30" y="'+(mob?504:500)+'">'+(mob?"1 · INFUSE":"1 · INTRAVENOUS INFUSION")+'</text></g>';
  g+='<g id="lb2"><text class="a" x="30" y="'+(mob?504:500)+'">'+(mob?"2 · GUIDE":"2 · IMAGE-GUIDED PROBE")+'</text></g>';
  g+='<g id="lb3"><text class="a" x="30" y="'+(mob?504:500)+'">'+(mob?"3 · ABLATE":"3 · NEAR-INFRARED LIGHT")+'</text></g>';
  return g+'</svg>';
}
function scene(){return nsScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var ves=$("#nsVes",svg),VL=ves.getTotalLength();
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),sh:$$("#shells .shl",svg),xh:$("#xh",svg),fib:$("#fib",svg),fbrP:$("#fbrP",svg),fbrT:$("#fbrT",svg),fibL:$("#fibL",svg),
    heat:$("#heat",svg),r1:$("#ring1",svg),r2:$("#ring2",svg),spare:$("#spare",svg),m1:$("#m1",svg),m2:$("#m2",svg),m3:$("#m3",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function mix(a,b,t){return a+(b-a)*t}
  function ease(x){return x<.5?2*x*x:1-Math.pow(-2*x+2,2)/2}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    /* step 1: the nanoshells travel the vessel, then gather in the lesion */
    var n=E.sh.length;
    E.sh.forEach(function(c,k){
      var t=seg(p,.03+k*.009,.2+k*.009),q=seg(p,.18+k*.006,.3+k*.006);
      var pt=ves.getPointAtLength(VL*ease(t)),tg=NS_T[k];
      var x=mix(pt.x,tg[0],ease(q)),y=mix(pt.y,tg[1],ease(q));
      c.setAttribute("cx",x.toFixed(1));c.setAttribute("cy",y.toFixed(1));
      op(c,b*seg(p,.02+k*.009,.05+k*.009));
    });
    /* step 2: the target and the fiber */
    op(E.xh,b*seg(p,.38,.46)*(1-.6*seg(p,.7,.8)));
    var f=ease(seg(p,.46,.6)),tx=mix(740,NS_LX+4,f),ty=mix(470,NS_LY+3,f);
    E.fbrP.setAttribute("d","M"+tx.toFixed(1)+" "+ty.toFixed(1)+"L740 470");E.fbrT.setAttribute("cx",tx.toFixed(1));E.fbrT.setAttribute("cy",ty.toFixed(1));
    op(E.fib,b*seg(p,.465,.5));op(E.fibL,b*seg(p,.5,.56));
    /* step 3: near-infrared light; the nanoshells turn it into heat, only inside the lesion */
    var h=seg(p,.72,.86);
    op(E.heat,b*h);
    var rp=((p*6)%1);E.r1.setAttribute("r",(44+20*rp).toFixed(1));E.r1.style.opacity=(h*(1-rp)*.8).toFixed(3);
    var rq=((p*6+.5)%1);E.r2.setAttribute("r",(44+20*rq).toFixed(1));E.r2.style.opacity=(h*(1-rq)*.8).toFixed(3);
    E.sh.forEach(function(c){c.style.fill=h>.02?"rgb(255,"+Math.round(210+35*h)+","+Math.round(5+150*h)+")":""});
    op(E.spare,b*seg(p,.84,.92));
    op(E.m1,b*seg(p,.12,.2)*(1-seg(p,.32,.36)));op(E.m2,b*seg(p,.42,.5)*(1-seg(p,.64,.68)));op(E.m3,b*seg(p,.8,.88));
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.32,.36)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.64,.68)));op(E.l3,b*seg(p,.72,.8));
  };
}
