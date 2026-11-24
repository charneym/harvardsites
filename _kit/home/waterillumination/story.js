/* The story scene (DB/BL): Water Illumination's own process (waterillumination.com, Our Technology and News; NSF awards
   2335229 and 2538137: a flow-through UV reactor in which, under tuned ultraviolet light, water molecules act as the
   catalyst and generate reactive radicals that break PFAS down and mineralise it to harmless products such as fluoride),
   drawn as ONE fine-line flow-through reactor that fills the frame: an inlet pipe at top left, the reactor body with the
   UV lamp in its quartz sleeve along its axis, and an outlet pipe at bottom right.
   Frame 0 is complete: PFAS chains (a zigzag carbon chain with its fluorine atoms) wait in the inlet.
   Step 1 (flow): the chains flow into the reactor around the sleeve.
   Step 2 (illuminate): the lamp lights; UV rays reach out through the water; radicals spark beside each chain.
   Step 3 (destroy): each chain breaks apart and fades; fluoride (accent dots) flows out of the outlet.
   Everything is driven by the scrubbed progress. */
var SCW=760,SCH=560;
var BX0=120,BX1=640,BY0=140,BY1=420;
/* molecule targets inside the body (around the sleeve) */
var MOL=[[200,196,-8],[360,366,6],[420,200,4],[580,362,-6],[310,192,10],[530,196,-4],[250,362,-4],[470,368,8]];
function f1(v){return v.toFixed(1)}
function chain(){
  /* a PFAS chain: 7 carbons in a zigzag, a fluorine on each, an acid head at the right end */
  var pts=[],k,g='',d='';
  for(k=0;k<7;k++)pts.push([-30+k*10,k%2?-4:4]);
  function half(a,b){var s='<g class="hf">',dd='M'+pts[a][0]+' '+pts[a][1];for(var i=a+1;i<=b;i++)dd+='L'+pts[i][0]+' '+pts[i][1];
    s+='<path class="mc" d="'+dd+'"/>';for(i=a;i<=b;i++){if(i===b&&b!==6)continue;var up=i%2?-1:1;s+='<path class="mf" d="M'+pts[i][0]+' '+pts[i][1]+'l0 '+(up*7)+'"/><circle class="ma" cx="'+pts[i][0]+'" cy="'+(pts[i][1]+up*9)+'" r="1.9"/>'}
    if(b===6)s+='<circle class="mh" cx="'+(pts[6][0]+5)+'" cy="'+pts[6][1]+'" r="3.2"/>';return s+'</g>'}
  return half(0,3)+half(3,6);
}
function storyScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'60 20 700 540':'24 20 736 540')+'" aria-hidden="true">';
  g+='<defs><linearGradient id="gLamp" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5cb8f0" stop-opacity=".35"/><stop offset=".5" stop-color="#e8f4ff" stop-opacity=".95"/><stop offset="1" stop-color="#5cb8f0" stop-opacity=".35"/></linearGradient>'+
    '<radialGradient id="gGlow"><stop offset="0" stop-color="#5cb8f0" stop-opacity=".42"/><stop offset="1" stop-color="#5cb8f0" stop-opacity="0"/></radialGradient></defs>';
  /* the reactor: inlet pipe, body with flanges, outlet pipe */
  g+='<g id="scBody">';
  g+='<path class="wl sD" d="M40 70H164V'+(BY0-12)+'"/><path class="wl sD" d="M40 94H140V'+(BY0-12)+'"/>';
  g+='<path class="wl sD" d="M'+BX0+' '+BY0+'H'+BX1+'"/><path class="wl sD" d="M'+BX0+' '+BY1+'H'+BX1+'"/>';
  g+='<path class="wl sD" d="M108 '+(BY0-12)+'h12v'+(BY1-BY0+24)+'h-12z"/><path class="wl sD" d="M640 '+(BY0-12)+'h12v'+(BY1-BY0+24)+'h-12z"/>';
  g+='<path class="wl sD" d="M572 '+(BY1+12)+'V486H736"/><path class="wl sD" d="M596 '+(BY1+12)+'V462H736"/>';
  g+='<path class="wo sD" d="M28 58v48M748 450v48"/>';g+='<g id="scCh">';for(var c=0;c<4;c++)g+='<path class="chv" d="M-4 -6L3 0L-4 6"/>';g+='</g>';
  g+='</g>';
  /* UV glow, then the quartz sleeve and the lamp along the axis */
  g+='<ellipse id="scGlow" cx="380" cy="280" rx="300" ry="150" fill="url(#gGlow)"/>';
  g+='<g id="scRays">';for(var r=0;r<14;r++){var rx=170+r*30;g+='<path class="ry" d="M'+rx+' 246V'+(BY0+8)+'"/><path class="ry" d="M'+rx+' 314V'+(BY1-8)+'"/>'}g+='</g>';
  g+='<path class="wl sD" d="M164 252H596A28 28 0 0 1 596 308H164A28 28 0 0 1 164 252Z"/>';
  g+='<rect id="scLamp" x="176" y="268" width="408" height="24" fill="url(#gLamp)"/>';
  g+='<path class="wo sD" d="M176 268H584M176 292H584"/>';
  g+='<path class="wl sD" d="M120 280H136M624 280H640"/>';
  /* PFAS chains */
  g+='<g id="scMol">';MOL.forEach(function(){g+='<g class="mol" transform="translate(300 200)">'+chain()+'</g>'});g+='</g>';
  /* radicals: small sparks beside each chain */
  g+='<g id="scRad">';MOL.forEach(function(m){for(var k=0;k<3;k++){var a=k*2.1+m[2],x=m[0]+Math.cos(a)*24,y=m[1]+Math.sin(a)*12;g+='<circle class="rad" cx="'+f1(x)+'" cy="'+f1(y)+'" r="2"/>'}});g+='</g>';
  /* fluoride out */
  g+='<g id="scF">';MOL.forEach(function(){for(var k=0;k<3;k++)g+='<circle class="fl" r="3.4" cx="0" cy="0"/>'});g+='</g>';
  if(!mob){
    g+='<g id="lIn"><text class="t" x="40" y="38">PFAS-LADEN</text><text class="t q" x="40" y="54">WATER IN</text></g>';
    g+='<g id="lLamp"><path class="ld" d="M658 280H674"/><text class="t" x="682" y="276">UV</text><text class="t q" x="682" y="292">LAMP</text></g>';
    g+='<g id="lOut"><text class="t o" x="736" y="512" text-anchor="end">FLUORIDE AND</text><text class="t q" x="736" y="528" text-anchor="end">HARMLESS PRODUCTS OUT</text></g>';
  }else{g+='<g id="lIn"></g><g id="lLamp"></g><g id="lOut"></g>'}
  var ly=mob?548:SCH-6,lx=mob?40:40;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'PFAS FLOWS IN':'PFAS-LADEN WATER FLOWS IN')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'UV LIGHT ACTIVATES WATER':'UV LIGHT TURNS WATER INTO THE CATALYST')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'PFAS IS MINERALISED':'PFAS IS MINERALISED TO FLUORIDE')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={ch:$$("#scCh .chv",svg),base:dl(".sD"),mol:$$("#scMol .mol",svg),glow:$("#scGlow",svg),lamp:$("#scLamp",svg),rays:$$("#scRays .ry",svg),rad:$$("#scRad .rad",svg),fl:$$("#scF .fl",svg),
    lIn:$("#lIn",svg),lLamp:$("#lLamp",svg),lOut:$("#lOut",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  E.mol.forEach(function(m){m.hf=$$(".hf",m)});
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function outPath(x0,y0,f){var pts=[[x0,y0],[584,BY1-14],[584,474],[750,474]],L=[],T=0,k;
    for(k=0;k<3;k++){var d=Math.hypot(pts[k+1][0]-pts[k][0],pts[k+1][1]-pts[k][1]);L.push(d);T+=d}
    var s=f*T;for(k=0;k<3;k++){if(s<=L[k]||k===2){var q=L[k]?Math.min(1,s/L[k]):1;return [pts[k][0]+(pts[k+1][0]-pts[k][0])*q,pts[k][1]+(pts[k+1][1]-pts[k][1])*q]}s-=L[k]}}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var s1=seg(p,.04,.32),s2=seg(p,.36,.64),s3=seg(p,.68,.94);
    /* 1: chains flow in; in frame 0 they queue in the inlet (only the first four show there) */
    E.mol.forEach(function(el,i){var f=sm((s1-i*.04)/.7),m=MOL[i],q=[m[0]-40+40*f,m[1]];
      var x=q[0],y=q[1],rot=m[2]*f,br=sm((s3-(i%4)*.05)/.55);
      el.setAttribute("transform","translate("+f1(x)+" "+f1(y)+") rotate("+f1(rot)+")");
      el.hf[0].setAttribute("transform","translate("+f1(-br*12)+" "+f1(-br*6)+") rotate("+f1(-br*24)+")");
      el.hf[1].setAttribute("transform","translate("+f1(br*12)+" "+f1(br*7)+") rotate("+f1(br*20)+")");
      var vis=1;
      op(el,b*vis*(1-br))});
    /* 2: the lamp lights, rays reach the walls, radicals spark */
    var L2=sm(s2/.5);
    op(E.lamp,b*(.18+.82*L2)*(1-.15*s3));op(E.glow,b*L2*(1-.3*s3));
    E.rays.forEach(function(el,i){var ph=(p*8+i*.37)%1;op(el,b*L2*(.25+.55*Math.sin(ph*Math.PI))*(1-.5*s3))});
    E.rad.forEach(function(el,i){var m=(i/3)|0,ph=(p*9+i*.29)%1;op(el,b*sm((s2-.35-(m%4)*.06)/.3)*(.4+.6*Math.sin(ph*Math.PI))*(1-sm((s3-.3)/.4)))});
    /* 3: fluoride flows out through the outlet */
    E.fl.forEach(function(el,i){var m=(i/3)|0,k=i%3,M=MOL[m],st=sm((s3-(m%4)*.05)/.55),fo=Math.max(0,(s3-.25-(m%4)*.04-k*.05)/.7);
      var x0=M[0]+(k-1)*12,y0=M[1]+(k===1?-8:6),q=fo>0?outPath(x0,y0,Math.min(1,fo)):[x0,y0];
      el.setAttribute("cx",f1(q[0]));el.setAttribute("cy",f1(q[1]));op(el,b*st*(1-sm((fo-.85)/.15)))});
    E.ch.forEach(function(el,i){var ph=(p*5+i*.25)%1;el.setAttribute("transform","translate("+f1(52+ph*96)+" 82)");op(el,b*Math.sin(ph*Math.PI)*(1-.7*s3))});
    op(E.lIn,b*(1-seg(p,.2,.3)));
    op(E.lLamp,b*seg(p,.38,.46)*(1-seg(p,.62,.68)));
    op(E.lOut,b*seg(p,.8,.88));
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}
