/* The story scene (BL/BY/DB): how a Sacher Littman/Metcalf external cavity diode laser picks and tunes its wavelength, drawn as
   ONE schematic cavity kept on screen for all three steps (sacher-laser.com: tunable external cavity diode lasers in
   Littman/Metcalf configuration, LION series, 397 to 2,450 nm, manual or motor tuning, patented technology; antireflection coated
   diode lasers with a reflectivity below 5E-5).
   Step 1: the AR-coated diode chip on its mount, its light collimated by a lens onto the grating.
   Step 2: the grating at grazing incidence: the first order goes up to the tuning mirror and back (feedback), the zero order
           leaves as the output beam.
   Step 3: the mirror tilts, the fed-back wavelength changes (the beam colour shifts), the output keeps its direction. */
var SCW=760,SCH=520,SL_GX=470,SL_GY=300,SL_TILT=-7;
function slScene(o){
  var g='',mob=o.mob,gx=SL_GX,gy=SL_GY;
  function T(x,y,s,cls,anc){return '<text class="'+(cls||"t")+'" x="'+x+'" y="'+y+'"'+(anc?' text-anchor="'+anc+'"':'')+'>'+s+'</text>'}
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true"><defs>'+
    '<radialGradient id="slGl"><stop offset="0" stop-color="#ffd2c8"/><stop offset=".4" stop-color="#ff6a55" stop-opacity=".7"/><stop offset="1" stop-color="#ff6a55" stop-opacity="0"/></radialGradient>'+
    '<marker id="slAh" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M1 1L8 5L1 9" fill="none" stroke="#74c0f0" stroke-width="1.4"/></marker></defs>';
  g+=T(20,30,mob?"EXTERNAL CAVITY":"LITTMAN/METCALF EXTERNAL CAVITY, SCHEMATIC");
  /* the bench: diode mount and chip, lens, grating */
  g+='<g class="hw">'+
     '<path class="sD body" d="M40 316H150V352H40Z"/>'+
     '<path class="sD chip" d="M62 288H140V314H62Z"/>'+
     '<path class="sD lens" d="M220 266C232 280 232 320 220 334C208 320 208 280 220 266Z"/>'+
     '<path class="sD body" d="M206 334V352H234V334"/>'+
     '<path class="sD grat" d="M371.5 317.4L568.5 282.6"/>'+
     '<path class="sD body" d="M375 326L572 291.3L574.6 305.6L377.6 340.3Z"/>'+
     '<path class="rul" d="'+(function(){var s='';for(var i=0;i<=24;i++){var t=i/24,x=371.5+197*t,y=317.4-34.8*t;s+='M'+(x+0.6).toFixed(1)+' '+(y+3.2).toFixed(1)+'l1.2 5.6'}return s})()+'"/>'+
   '</g>';
  /* the AR facet, lit */
  g+='<path id="slAR" class="ar" d="M140 284V318"/>';
  /* step 1: emission, diverging to the lens, then collimated onto the grating */
  g+='<path class="cone" id="slCone" d="M140 298L212 274V326L140 302Z"/>';
  g+='<path class="bm sB" id="slB1" d="M228 300H'+gx+'"/>';
  /* step 2/3: first order up to the mirror and back (in one group that turns about the grating spot), zero order out */
  g+='<g id="slTune" transform="rotate(0 '+gx+' '+gy+')">'+
     '<path class="bm sB" id="slB2" d="M'+gx+' '+gy+'L433.5 93"/>'+
     '<path class="sD mir" d="M379.3 102.6L487.7 83.4"/>'+
     '<path class="sD body" d="M377.9 94.7L486.3 75.5L484.9 67.6L376.5 86.8Z"/>'+
   '</g>';
  g+='<path class="bm sB" id="slB3" d="M'+gx+' '+gy+'L740 202.3"/>';
  g+='<circle id="slSpot" cx="'+gx+'" cy="'+gy+'" r="16" fill="url(#slGl)"/>';
  g+='<circle id="slFac" cx="140" cy="300" r="14" fill="url(#slGl)"/>';
  /* labels, step 1 */
  g+='<g id="slL1">'+T(40,382,mob?"AR DIODE":"AR-COATED DIODE")+T(140,272,mob?"FACET":"AR FACET","t","middle")+T(220,252,"LENS","t","middle")+'</g>';
  /* labels, steps 2-3 */
  g+='<g id="slL2">'+T(520,350,"GRATING","t","middle")+T(476,196,mob?"1ST ORDER":"FIRST ORDER","t s2")+T(506,90,mob?"MIRROR":"TUNING MIRROR")+
     T(740,182,mob?"OUTPUT":"ZERO ORDER · OUTPUT","t s1","end")+'</g>';
  /* step 3: the tilt */
  g+='<g id="slL3"><path class="arc" d="M441.2 65.8A236 236 0 0 0 385.4 79.7" marker-end="url(#slAh)"/>'+T(372,60,"TILT","t s2","end")+
     T(740,156,mob?"NEW λ, SAME AXIS":"NEW WAVELENGTH, SAME DIRECTION","t","end")+'</g>';
  /* step captions */
  g+='<g id="lb1">'+T(20,500,mob?"1 · AR DIODE":"1 · AN AR-COATED DIODE","a")+'</g>';
  g+='<g id="lb2">'+T(20,500,mob?"2 · FEEDBACK":"2 · GRATING AND MIRROR","a")+'</g>';
  g+='<g id="lb3">'+T(20,500,mob?"3 · TUNE":"3 · TILT TO TUNE","a")+'</g>';
  return g+'</svg>';
}
function scene(){return slScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),b1:dl("#slB1"),b2:dl("#slB2"),b3:dl("#slB3"),bm:$$(".bm",svg),cone:$("#slCone",svg),ar:$("#slAR",svg),rul:$(".rul",svg),
    tune:$("#slTune",svg),spot:$("#slSpot",svg),fac:$("#slFac",svg),L1:$("#slL1",svg),L2:$("#slL2",svg),L3:$("#slL3",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),t0:svg.querySelector("svg>text.t")||svg.querySelector("text.t")};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function ease(x){return x<.5?2*x*x:1-Math.pow(-2*x+2,2)/2}
  function mix(a,b,t){return "rgb("+a.map(function(v,i){return Math.round(v+(b[i]-v)*t)}).join(",")+")"}
  var C0=[255,96,80],C1=[255,170,72];
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);op(E.t0,b);op(E.rul,b*.9)}
    /* step 1: the facet lights, the cone, the collimated beam to the grating */
    var s1=seg(p,.02,.16);
    op(E.ar,b*(.35+.65*s1));op(E.fac,b*s1);op(E.cone,b*s1*.9);
    draw(E.b1,b*seg(p,.06,.22));
    op(E.L1,b*(1-seg(p,.33,.38)));
    /* step 2: first order up to the mirror, then the zero order out */
    draw(E.b2,b*seg(p,.36,.46));draw(E.b3,b*seg(p,.44,.56));
    op(E.spot,b*seg(p,.36,.42));
    op(E.L2,b*seg(p,.46,.54));
    /* step 3: tilt, the wavelength (colour) follows, the output stays put */
    var t=ease(seg(p,.7,.86));
    E.tune.setAttribute("transform","rotate("+(SL_TILT*t).toFixed(2)+" "+SL_GX+" "+SL_GY+")");
    var col=mix(C0,C1,t);E.bm.forEach(function(e){e.style.stroke=col});
    op(E.L3,b*seg(p,.68,.74));
    op(E.l1,b*(1-seg(p,.33,.38)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.64,.68)));op(E.l3,b*seg(p,.7,.78));
  };
}
