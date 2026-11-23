/* The story scene (DB/BL/BY): Evecxia's pharmacology as ONE continuous fine-line serotonin synapse that fills the frame
   (evecxia.com, Serotonin Synthesis Amplification and Pipeline; release of 15 Sep 2026): the axon terminal of a serotonin
   neuron with its vesicles and the serotonin transporter (SERT), the synaptic cleft, and the receiving neuron's receptors.
   Frame 0 is already a complete picture.
   Step 1 (brake): an SSRI blocks SERT; only a little serotonin is in the cleft.
   Step 2 (precursor): 5-HTP arrives along the axon as a steady stream and enters the terminal.
   Step 3 (synthesis): 5-HTP becomes serotonin; the vesicles fill.
   Step 4 (signal): more serotonin is released and the receptors light.
   Labels sit in open space with >=8px clear (DR3). Driven by the scrubbed progress. */
var SCW=760,SCH=560;
var PRE="M0 150C90 150 150 80 300 66C470 52 610 96 650 196C676 262 652 318 596 330L214 330C168 330 136 300 116 266C96 236 60 232 0 232";
var POST="M118 560C124 470 150 400 226 392L594 392C670 400 694 470 700 560";
var VES=[[300,262],[364,226],[426,272],[490,232],[552,272],[404,168],[474,148]];
var RCP=[268,336,404,472,540];
var SERT=[236,574];
var FUS=[[300,333],[426,333],[552,333]];
var NHP=10,NREL=5;
function vdots(v,n){var o=[],k;for(k=0;k<n;k++){var a=k*2.39996+.6,r=k?3.6+2.2*Math.sqrt(k):0;o.push([v[0]+r*Math.cos(a)*1.25,v[1]+r*Math.sin(a)*1.25])}return o}
function storyScene(o){
  var g='',i,k,mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><radialGradient id="cglow"><stop offset="0" stop-color="#5cc66a" stop-opacity=".34"/><stop offset="1" stop-color="#5cc66a" stop-opacity="0"/></radialGradient></defs>';
  g+='<ellipse class="halo" id="ch" cx="404" cy="362" rx="250" ry="90" fill="url(#cglow)"/>';
  g+='<g id="scBase">';
  g+='<path class="wl sD" d="'+PRE+'"/>';
  g+='<path class="wl sD" d="'+POST+'"/>';
  VES.forEach(function(v){g+='<circle class="wmd sD" cx="'+v[0]+'" cy="'+v[1]+'" r="18"/>'});
  g+='</g>';
  /* serotonin transporters on the terminal membrane, and the SSRI that blocks them */
  g+='<g id="tps">';SERT.forEach(function(x){g+='<rect class="tp" x="'+(x-6)+'" y="322" width="12" height="16"/>'});g+='</g>';
  g+='<g id="ssri">';SERT.forEach(function(x){g+='<rect class="ss" x="'+(x-5)+'" y="342" width="10" height="8"/>'});g+='</g>';
  /* receptors on the receiving membrane */
  g+='<g id="rcp">';RCP.forEach(function(x){g+='<path class="rc" d="M'+(x-8)+' 391V381H'+(x-3)+'V387H'+(x+3)+'V381H'+(x+8)+'V391"/>'});g+='</g>';
  /* serotonin stored in the vesicles: three per vesicle from the start, filling to seven */
  g+='<g id="sd">';VES.forEach(function(v){vdots(v,7).forEach(function(q,k){g+='<circle class="sd" data-k="'+k+'" r="2.6" cx="'+q[0].toFixed(1)+'" cy="'+q[1].toFixed(1)+'"/>'})});g+='</g>';
  /* the 5-HTP stream along the axon */
  g+='<path id="inP" class="gd" d="M0 204C80 204 150 202 236 216"/>';
  g+='<g id="hp">';for(i=0;i<NHP;i++)g+='<path class="hp" d="M0 -4.5L4.5 0 0 4.5-4.5 0Z" transform="translate(0 204)"/>';g+='</g>';
  /* release paths: fusion sites to receptors */
  g+='<g id="rel">';FUS.forEach(function(f,fi){[[0,1],[2,3],[3,4]][fi].map(function(j){return RCP[j]}).forEach(function(rx,ri){
    g+='<path class="gd rp" d="M'+f[0]+' '+f[1]+'L'+rx+' 376"/>';for(k=0;k<NREL;k++)g+='<circle class="rs" data-p="'+(fi*2+ri)+'" r="2.6" cx="'+f[0]+'" cy="'+f[1]+'"/>'})});g+='</g>';
  /* labels */
  if(!mob){
    g+='<g id="lAx"><text class="t" x="232" y="120">AXON TERMINAL</text></g>';
    g+='<g id="lVe"><text class="t" x="512" y="146">VESICLES</text></g>';
    g+='<g id="lSe"><path class="ld" d="M226 344L178 362"/><text class="t" x="124" y="376">SERT</text></g>';
    g+='<g id="lCl"><text class="t" x="750" y="368" text-anchor="end">SYNAPTIC CLEFT</text></g>';
    g+='<g id="lRc"><text class="t" x="356" y="444">RECEPTORS</text></g>';
    g+='<g id="lHp"><text class="t a2" x="22" y="182">5-HTP</text></g>';
    g+='<g id="lSt"><text class="t a2" x="512" y="128">SEROTONIN</text></g>';
  }else{
    g+='<g id="lAx"><text class="t" x="226" y="124">AXON TERMINAL</text></g>';
    g+='<g id="lVe"></g><g id="lSe"></g><g id="lCl"></g>';
    g+='<g id="lRc"><text class="t" x="330" y="452">RECEPTORS</text></g>';
    g+='<g id="lHp"><text class="t a2" x="16" y="182">5-HTP</text></g>';
    g+='<g id="lSt"></g>';
  }
  var ly=24,lx=mob?16:20;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'SSRI BLOCKS SERT':'AN SSRI BLOCKS THE SEROTONIN TRANSPORTER')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'5-HTP ARRIVES':'5-HTP, THE PRECURSOR, ARRIVES STEADILY')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'MORE SEROTONIN MADE':'5-HTP → SEROTONIN · THE VESICLES FILL')+'</text></g>';
  g+='<g id="lb4"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'MORE SEROTONIN RELEASED':'MORE SEROTONIN RELEASED · RECEPTORS ACTIVATED')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),sd:$$("#sd .sd",svg),tps:$$("#tps .tp",svg),ss:$$("#ssri .ss",svg),rc:$$("#rcp .rc",svg),hp:$$("#hp .hp",svg),rs:$$("#rel .rs",svg),
    ch:$("#ch",svg),lAx:$("#lAx",svg),lVe:$("#lVe",svg),lSe:$("#lSe",svg),lCl:$("#lCl",svg),lRc:$("#lRc",svg),lHp:$("#lHp",svg),lSt:$("#lSt",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg)};
  var inP=$("#inP",svg),IL=inP.getTotalLength(),RP=$$("#rel .rp",svg).map(function(p){return [p,p.getTotalLength()]});
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var s1=seg(p,.02,.18),s4=seg(p,.77,.92);
    /* 1. the SSRI docks on SERT (and stays) */
    E.tps.forEach(function(el){op(el,b)});
    E.ss.forEach(function(el){op(el,b*s1)});
    /* stored serotonin: three per vesicle from the start; 5-HTP fills them in step 3 */
    E.sd.forEach(function(el){var k=+el.getAttribute("data-k");op(el,b*(k<3?1:seg(p,.5+.04*(k-3),.58+.04*(k-3))))});
    op(E.lAx,b);op(E.lVe,b*(1-seg(p,.5,.55)));op(E.lSt,b*seg(p,.56,.62));op(E.lSe,b);op(E.lCl,b);op(E.lRc,b);
    /* 2. a steady, evenly spaced stream of 5-HTP enters the terminal (from step 2 on, easing off after step 3) */
    var on2=seg(p,.25,.33)*(1-seg(p,.7,.78));
    E.hp.forEach(function(el,i){var f=((i/NHP)+p*6)%1;var q=inP.getPointAtLength(IL*f);el.setAttribute("transform","translate("+q.x.toFixed(1)+" "+q.y.toFixed(1)+")");op(el,b*on2*Math.min(1,f*8)*Math.min(1,(1-f)*6))});
    op(E.lHp,b*seg(p,.28,.35)*(1-seg(p,.7,.76)));
    /* release: a trickle from the start (the SSRI-only baseline), a strong flow in step 4 */
    E.rs.forEach(function(el,i){var pi=+el.getAttribute("data-p"),k=i%NREL,R=RP[pi];var f=((k/NREL)+p*5+pi*.13)%1;
      var q=R[0].getPointAtLength(R[1]*f);el.setAttribute("cx",q.x.toFixed(1));el.setAttribute("cy",q.y.toFixed(1));
      var show=(k<2?1:s4);op(el,b*show*Math.min(1,f*6)*Math.min(1,(1-f)*6))});
    E.rc.forEach(function(el,i){el.classList.toggle("on",p>.8+.02*i)});
    op(E.ch,b*s4);
    op(E.l1,b*seg(p,.03,.1)*(1-seg(p,.22,.27)));op(E.l2,b*seg(p,.29,.36)*(1-seg(p,.47,.52)));op(E.l3,b*seg(p,.54,.6)*(1-seg(p,.72,.77)));op(E.l4,b*seg(p,.8,.87));
  };
}
