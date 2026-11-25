/* The story scene (BL/BY/DB): "Präzision am Gewebe", drawn as ONE fine-line cross-section kept on screen for all four steps:
   a focusing handpiece above a block of soft tissue (skin layers as dashed rules). Facts from limmerlaser.de product pages.
   Step 1 (Strahl): the CO2 beam (10,600 nm, TEM00) converges from the handpiece to its focus on the surface (UNILAS Touch).
   Step 2 (Scanner): SurgiScan X2 spreads the energy in a pattern of spots across the surface (fractional mode).
   Step 3 (LFD): the coagulation zone: standard coagulation lasers 9-11 mm deep (dashed) against LFD mode, 1 mm (DIOLAS LFD 3000).
   Step 4 (Absaugung): the plume rises from the spot and is drawn into the suction nozzle (VACULAS 4000, 950 l/min, ULPA). */
var SCW=760,SCH=520,FX=270,FY=330;
function llScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true"><defs>'+
    '<radialGradient id="llGlow" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ff8f7f" stop-opacity=".9"/><stop offset="1" stop-color="#ff6a57" stop-opacity="0"/></radialGradient>'+
    '<clipPath id="llClip"><path d="M60 330H480V470H60Z"/></clipPath></defs>';
  /* the drawing is scaled up to fill its frame (DB); labels and captions stay outside the scale */
  g+='<g transform="translate(-56 -36) scale(1.16)">';
  /* the tissue block and its layers, always on screen */
  g+='<path class="body" d="M60 330H480V470H60Z"/>';
  g+='<path class="edge sD" d="M60 330H480V470H60Z"/>';
  g+='<path class="ring0 sD" d="M60 352H480"/><path class="ring0 sD" d="M60 410H480"/>';
  /* the focusing handpiece, always on screen */
  g+='<path class="edge sD" d="M252 40H288V140L278 172H262L252 140Z"/><path class="ring0 sD" d="M252 62H288M252 118H288"/>';
  /* step 3: coagulation zones under the focus (drawn under the beam) */
  g+='<g clip-path="url(#llClip)"><path id="llStd" class="std" d="M'+(FX-74)+' '+FY+'A74 112 0 0 0 '+(FX+74)+' '+FY+'"/>'+
     '<path id="llLfd" class="lfd" d="M'+(FX-34)+' '+FY+'A34 11 0 0 0 '+(FX+34)+' '+FY+'Z"/></g>';
  /* step 1: the beam cone to the focus, the axis, the spot */
  g+='<path id="llAx" class="axis" d="M'+FX+' 172V'+FY+'"/>';
  g+='<path id="llB1" class="flow" d="M262 172L'+FX+' '+FY+'"/><path id="llB2" class="flow" d="M278 172L'+FX+' '+FY+'"/>';
  g+='<circle id="llGl" cx="'+FX+'" cy="'+FY+'" r="22" fill="url(#llGlow)"/><circle id="llSp" class="gate" cx="'+FX+'" cy="'+FY+'" r="4"/>';
  /* step 2: the scan pattern, a row of spots with their fan of beams */
  var fan='',sp='';for(i=0;i<9;i++){var x=150+i*30;if(x===FX)continue;fan+='<path class="fan" d="M'+FX+' 172L'+x+' '+FY+'"/>';sp+='<path class="spot" d="M'+x+' '+(FY-1)+'V'+(FY+12+(i%3)*3)+'"/>'}
  g+='<g id="llScan">'+fan+sp+'</g>';
  /* step 4: the suction nozzle at the left and the plume drawn into it */
  g+='<g id="llNoz"><path class="tool" d="M62 236H150L178 224V276L150 264H62"/><path class="tool" d="M90 236V264M120 236V264"/></g>';
  g+='<path id="llP1" class="plume" d="M'+FX+' '+(FY-6)+'C'+(FX-6)+' 290 250 262 182 250"/>'+
     '<path id="llP2" class="plume" d="M'+(FX+8)+' '+(FY-6)+'C'+(FX+14)+' 284 236 240 182 238"/>'+
     '<path id="llP3" class="plume" d="M'+(FX-10)+' '+(FY-4)+'C'+(FX-24)+' 300 230 274 182 262"/>';
  g+='</g>';
  /* labels, per step: right column, each >= 8px clear of every stroke (DR3) */
  var LX=mob?520:528;
  function L(id,a,b,c,cls){var y0=mob?[150,180,330]:[200,226,272];return '<g id="'+id+'"><text class="t '+cls+'" x="'+LX+'" y="'+y0[0]+'">'+a+'</text><text class="t" x="'+LX+'" y="'+y0[1]+'">'+b+'</text>'+(c?'<text class="t" x="'+LX+'" y="'+y0[2]+'">'+c+'</text>':'')+'</g>'}
  g+=L('llL1','CO₂ · 10.600 NM','TEM₀₀-MODUS',mob?'':'ULTRASHARP-FOKUS','s1');
  g+=L('llL2','SURGISCAN X2',mob?'FRAKTIONIERT':'FRAKTIONIERT · RANDOMISIERT',mob?'':'ABTRAGEN · SCHNEIDEN','s2');
  g+='<g id="llL3"><text class="t s1" x="'+LX+'" y="'+(mob?318:338)+'">LFD-MODUS: 1 MM</text><text class="t" x="'+LX+'" y="'+(mob?440:432)+'">STANDARD:</text><text class="t" x="'+LX+'" y="'+(mob?470:456)+'">9–11 MM</text></g>';
  g+=L('llL4','VACULAS 4000','950 L/MIN',mob?'':'ULPA-FILTER · < 52 DB','s2');
  /* step captions */
  g+='<g id="lb1"><text class="a" x="20" y="30">1 · STRAHL</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="30">2 · SCANNER</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="30">3 · LFD</text></g>';
  g+='<g id="lb4"><text class="a" x="20" y="30">4 · ABSAUGUNG</text></g>';
  return g+'</svg>';
}
function scene(){return llScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),body:$(".body",svg),beam:dl("#llB1,#llB2"),ax:$("#llAx",svg),sp:$("#llSp",svg),gl:$("#llGl",svg),
    scan:$("#llScan",svg),std:dl("#llStd"),lfd:$("#llLfd",svg),noz:$("#llNoz",svg),pl:dl("#llP1,#llP2,#llP3"),
    L1:$("#llL1",svg),L2:$("#llL2",svg),L3:$("#llL3",svg),L4:$("#llL4",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg),t0:svg.querySelector("text.t")};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);op(E.t0,b)}
    op(E.body,b);
    /* step 1: the beam converges to its focus; it stays as the working beam through step 3 and dims for the plume */
    draw(E.beam,b*seg(p,.03,.12));
    var bo=1-.75*seg(p,.75,.8);E.beam.forEach(function(a){a[0].style.opacity=bo.toFixed(3)});
    op(E.ax,b*seg(p,.06,.12)*.8);
    op(E.sp,b*seg(p,.1,.14));op(E.gl,b*seg(p,.1,.16)*(.75+.25*Math.sin(p*40)));
    op(E.L1,b*seg(p,.06,.12)*(1-seg(p,.22,.25)));
    /* step 2: the fan of beams and the row of spots */
    op(E.scan,b*seg(p,.28,.38)*(1-seg(p,.47,.5)));
    op(E.L2,b*seg(p,.3,.36)*(1-seg(p,.47,.5)));
    /* step 3: the deep standard zone draws, then the 1 mm LFD zone fills */
    draw(E.std,b*seg(p,.52,.6));E.std.forEach(function(a){a[0].style.opacity=(1-seg(p,.74,.78)).toFixed(3)});
    op(E.lfd,b*seg(p,.58,.64)*(1-.6*seg(p,.75,.8)));
    op(E.L3,b*seg(p,.55,.61)*(1-seg(p,.72,.75)));
    /* step 4: the nozzle appears and the plume curls into it */
    op(E.noz,b*seg(p,.77,.83));
    draw(E.pl,b*seg(p,.8,.95));
    op(E.L4,b*seg(p,.79,.85));
    op(E.l1,b*seg(p,0,.05)*(1-seg(p,.22,.25)));op(E.l2,b*seg(p,.27,.32)*(1-seg(p,.47,.5)));op(E.l3,b*seg(p,.52,.57)*(1-seg(p,.72,.75)));op(E.l4,b*seg(p,.77,.82));
  };
}
