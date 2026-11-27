/* The story scene (BL/BY/DB): what a flow diverter does, drawn as ONE side view of an artery with an aneurysm, kept on
   screen for all three steps (CORDIS report, H2020 project 859001: aneurysms are "a balloon like dilation on the arterial
   wall"; flow diverters "divert blood flow away from the aneurysm, thus eliminating the risk of growth/rupture and
   enabling natural healing"; OXIFLOW "combines an inner frame to address the placement and opening issues, with an outer
   sleeve to deal with the flow diversions and healing", "optimum and uniform radial forces"). Calm line drawing, no blood.
   Step 1: flow along the artery, with a swirl entering the sac.
   Step 2: the device is placed across the neck: the origami frame (diamond cells, crowned ends) and the fine sleeve.
   Step 3: the flow runs straight past; the swirl stops and the sac draws in as it heals. Illustrative. */
var SCW=760,SCH=520;
function oxScene(o){
  var g='',mob=o.mob,i;
  var T=300,B=400,N0=300,N1=460,CX=380,CY=214,SR=100;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 40 760 452" aria-hidden="true">';
  g+='<text class="t" x="30" y="64">'+(mob?"ARTERY, SIDE VIEW":"CEREBRAL ARTERY WITH AN ANEURYSM, SIDE VIEW")+'</text>';
  /* the sac: an arc from neck to neck (scaled toward the neck as it heals) */
  g+='<g id="oxSac"><path class="ws sD" d="M'+N0+' '+T+'C'+(N0-34)+' '+(T-56)+' '+(CX-112)+' '+(CY-SR+12)+' '+CX+' '+(CY-SR+12)+'C'+(CX+112)+' '+(CY-SR+12)+' '+(N1+34)+' '+(T-56)+' '+N1+' '+T+'"/>'+
     '<path id="oxSw" class="sw" d="M'+(N0+10)+' '+(T-6)+'C'+(N0+10)+' '+(T-90)+' '+(CX-60)+' '+(CY-30)+' '+CX+' '+(CY-30)+'C'+(CX+56)+' '+(CY-30)+' '+(CX+64)+' '+(CY+40)+' '+(CX+22)+' '+(CY+52)+'C'+(CX-14)+' '+(CY+62)+' '+(CX-24)+' '+(CY+20)+' '+(CX+2)+' '+(CY+12)+'"/></g>';
  /* the artery walls */
  g+='<path class="ws sD" d="M30 '+T+'H'+N0+'M'+N1+' '+T+'H730M30 '+B+'H730"/>';
  /* flow lines (step 1: one bends into the sac; step 3: all run straight) */
  g+='<path id="oxF1" class="fl" d="M40 330H720"/><path id="oxF2" class="fl" d="M40 350H720"/><path id="oxF3" class="fl" d="M40 370H720"/>';
  g+='<path id="oxIn" class="fl" d="M210 318C270 318 '+(N0+4)+' 312 '+(N0+10)+' '+(T-6)+'"/>';
  g+='<g class="arw"><path d="M700 324L712 330L700 336"/><path d="M700 344L712 350L700 356"/><path d="M700 364L712 370L700 376"/></g>';
  /* the device: crowned diamond frame + fine sleeve, between the walls */
  var X0=210,X1=550,cw=34,fr='',k,y0=T+5,y1=B-5;
  for(k=0;X0+k*cw<X1;k++){var xa=X0+k*cw,xb=xa+cw;fr+='M'+xa+' '+y0+'L'+xb+' '+y1+'M'+xa+' '+y1+'L'+xb+' '+y0}
  var sl='';for(k=0;X0+8+k*9<X1-8;k++){var xs=X0+8+k*9;sl+='M'+xs+' '+(y0+2)+'L'+(xs+9)+' '+(y1-2)+'M'+xs+' '+(y1-2)+'L'+(xs+9)+' '+(y0+2)}
  g+='<path id="oxSl" class="sl" d="'+sl+'"/><path id="oxFr" class="fr" d="'+fr+'"/>';
  /* labels, each clear of every stroke (DR3) */
  g+='<g id="oxL1"><text class="t s1" x="'+(N1+40)+'" y="'+(CY-10)+'">'+(mob?"ANEURYSM":"ANEURYSM")+'</text><text class="t" x="'+(N1+40)+'" y="'+(CY+14)+'">'+(mob?"FLOW INTO THE SAC":"BLOOD FLOW INTO THE SAC")+'</text></g>';
  g+='<g id="oxL2"><text class="t s1" x="30" y="'+(B+30)+'">'+(mob?"ORIGAMI FRAME":"INNER FRAME · ORIGAMI, LASER-CUT NITINOL")+'</text><text class="t" x="30" y="'+(B+52)+'">'+(mob?"FINE OUTER SLEEVE":"FINE OUTER SLEEVE ACROSS THE NECK")+'</text></g>';
  g+='<g id="oxL3"><text class="t s1" x="30" y="'+(B+30)+'">'+(mob?"FLOW DIVERTED":"FLOW DIVERTED ALONG THE ARTERY")+'</text><text class="t" x="'+(N1+40)+'" y="'+(CY+14)+'">'+(mob?"SAC HEALS":"THE SAC IS LEFT TO HEAL")+'</text></g>';
  g+='<g id="lb1"><text class="a" x="20" y="484">'+(mob?"1 · ANEURYSM":"1 · AN ANEURYSM UNDER PRESSURE")+'</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="484">'+(mob?"2 · PLACE":"2 · OXIFLOW ACROSS THE NECK")+'</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="484">'+(mob?"3 · DIVERT":"3 · FLOW DIVERTED, SAC HEALS")+'</text></g>';
  return g+'</svg>';
}
function scene(){return oxScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),sw:dl("#oxSw"),inn:dl("#oxIn"),fl:dl("#oxF1,#oxF2,#oxF3"),fr:dl("#oxFr"),sl:dl("#oxSl"),sac:$("#oxSac",svg),arw:$(".arw",svg),
    L1:$("#oxL1",svg),L2:$("#oxL2",svg),L3:$("#oxL3",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),t0:svg.querySelector("text.t"),swp:$("#oxSw",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function ease(x){return x<.5?2*x*x:1-Math.pow(-2*x+2,2)/2}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);op(E.t0,b)}
    /* step 1: the flow, one line curling into the sac */
    draw(E.fl,b*ease(seg(p,.03,.2)));op(E.arw,b*seg(p,.16,.22));
    draw(E.inn,b*ease(seg(p,.12,.2)));draw(E.sw,b*ease(seg(p,.18,.3)));
    op(E.L1,b*seg(p,.1,.18)*(1-seg(p,.31,.36)));
    /* step 2: the frame and the sleeve are drawn across the neck */
    draw(E.fr,b*ease(seg(p,.38,.56)));draw(E.sl,b*ease(seg(p,.48,.64)));
    op(E.L2,b*seg(p,.44,.5)*(1-seg(p,.64,.68)));
    /* step 3: the swirl and the inflow fade, the sac draws in toward the neck */
    var s3=ease(seg(p,.7,.88));
    op(E.swp,1-s3);draw(E.inn,b*ease(seg(p,.12,.2))*(1-s3));
    if(E.sac)E.sac.setAttribute("transform","translate(380 300) scale(1 "+(1-.45*s3).toFixed(3)+") translate(-380 -300)");
    op(E.L3,b*seg(p,.76,.84));
    op(E.l1,b*seg(p,.02,.1)*(1-seg(p,.33,.38)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.64,.68)));op(E.l3,b*seg(p,.7,.78));
  };
}
