/* The story scene (BL/BY/DB): how a MOS multilayer is built in Neuweiler (mos-electronic.de > Produkte, Eildienst,
   Ansprechpartner (Team CAM), job ads 2026 (Galvanik, Ätztechnik, Lötstopplack/Oberflächenbeschichtung), news 2024
   (ITC THP 35 hole plugging, type VII filled vias)), drawn as ONE cross-section kept on screen for all three steps:
   Step 1 (Verpressen): copper foils, prepregs and two cores come together between the press plates.
   Step 2 (Bohren): a through hole is drilled and plated, a microvia is lasered; both are filled and capped (type VII).
   Step 3 (Oberfläche): solder mask in MOS pink on both sides, gold finish on the open pads.
   Schematic, not to scale, no measured values. */
var SCW=760,SCH=520,VY=80;
var BX0=40,BX1=540,HX=200,MX=360;
/* drawn in board units (x 40-540, y 230-394), mapped onto the frame so the section fills it (DB) */
var SMOB=0;
function SX(x){return +(SMOB?20+(x-40)*1.44:30+(x-40)*1.1).toFixed(1)}
function SY(y){return +(232+(y-244)*1.8).toFixed(1)}
function mosScene(o){
  var g='',mob=o.mob;SMOB=mob?1:0;
  function poly(pts){return 'M'+pts.map(function(p){return SX(p[0])+' '+SY(p[1])}).join('L')+'Z'}
  function R(x0,y0,x1,y1,c,id){return '<path'+(id?' id="'+id+'"':'')+' class="'+c+'" d="'+poly([[x0,y0],[x1,y0],[x1,y1],[x0,y1]])+'"/>'}
  function cuL(y,h,segs){return segs.map(function(s){return R(s[0],y,s[1],y+h,"cu")}).join("")}
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 '+VY+' '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<text class="t" x="20" y="'+(mob?102:108)+'">'+(mob?"QUERSCHNITT":"MULTILAYER, QUERSCHNITT, SCHEMATISCH")+'</text>';
  /* press plates (step 1) */
  g+='<g id="msPt">'+R(BX0-10,196,BX1+10,222,"plate")+R(BX0-10,196,BX1+10,222,"body sD")+'</g>';
  g+='<g id="msPb">'+R(BX0-10,402,BX1+10,428,"plate")+R(BX0-10,402,BX1+10,428,"body sD")+'</g>';
  /* the five packages that are pressed together */
  g+='<g id="msA">'+R(BX0,250,BX1,268,"pp")+cuL(244,6,[[BX0,BX1]])+R(BX0,244,BX1,268,"body sD")+'</g>';
  g+='<g id="msB">'+R(BX0,273,BX1,297,"core")+cuL(268,5,[[60,130],[150,250],[270,330],[350,460],[480,530]])+cuL(297,5,[[50,170],[190,300],[320,420],[440,520]])+R(BX0,268,BX1,302,"body sD")+'</g>';
  g+='<g id="msC">'+R(BX0,302,BX1,322,"pp")+R(BX0,302,BX1,322,"body sD")+'</g>';
  g+='<g id="msD">'+R(BX0,327,BX1,351,"core")+cuL(322,5,[[BX0,BX1]])+cuL(351,5,[[60,150],[170,260],[280,400],[420,530]])+R(BX0,322,BX1,356,"body sD")+'</g>';
  g+='<g id="msE">'+R(BX0,356,BX1,374,"pp")+cuL(374,6,[[BX0,BX1]])+R(BX0,356,BX1,380,"body sD")+'</g>';
  /* step 2: outer copper gets patterned (gaps etched), the drill, the hole, plating, filling and caps */
  g+='<g id="msEt">'+R(120,244,140,250,"gap")+R(255,244,300,250,"gap")+R(392,244,410,250,"gap")+R(470,244,490,250,"gap")+
     R(110,374,130,380,"gap")+R(250,374,280,380,"gap")+R(430,374,450,380,"gap")+'</g>';
  g+='<path id="msDr" class="drill" d="'+poly([[HX-7,196],[HX+7,196],[HX+7,216],[HX,222],[HX-7,216]])+'"/>';
  g+=R(HX-8,244,HX+8,380,"hole","msH");
  g+='<path id="msMv" class="hole" d="'+poly([[MX-11,244],[MX+11,244],[MX+5,268],[MX-5,268]])+'"/>';
  g+='<g id="msPl"><path class="plate2" d="'+poly([[HX-10,244],[HX-8,244],[HX-8,380],[HX-10,380]])+poly([[HX+8,244],[HX+10,244],[HX+10,380],[HX+8,380]])+'"/>'+
     '<path class="plate2" d="'+poly([[MX-13,244],[MX-11,244],[MX-5,266],[MX+5,266],[MX+11,244],[MX+13,244],[MX+7,268],[MX-7,268]])+'"/></g>';
  g+='<g id="msF">'+R(HX-8,244,HX+8,380,"fill")+'<path class="cu" d="'+poly([[MX-11,244],[MX+11,244],[MX+5,266],[MX-5,266]])+'"/></g>';
  g+='<g id="msCap">'+R(HX-22,238,HX+22,244,"cu")+R(HX-22,380,HX+22,386,"cu")+R(MX-17,238,MX+17,244,"cu")+'</g>';
  /* step 3: solder mask (MOS pink) with openings at the pads, gold on the open pads */
  g+='<g id="msSm"><path class="mask" d="'+poly([[BX0,230],[HX-26,230],[HX-26,244],[BX0,244]])+poly([[HX+26,230],[MX-21,230],[MX-21,244],[HX+26,244]])+poly([[MX+21,230],[BX1,230],[BX1,244],[MX+21,244]])+
     poly([[BX0,380],[HX-26,380],[HX-26,394],[BX0,394]])+poly([[HX+26,380],[BX1,380],[BX1,394],[HX+26,394]])+'"/></g>';
  g+='<g id="msAu">'+R(HX-22,235,HX+22,238,"au")+R(MX-17,235,MX+17,238,"au")+R(HX-22,386,HX+22,389,"au")+'</g>';
  /* labels, each clear of every stroke (8px+) */
  var LX=SX(BX1)+22,hx=SX(HX),mx=SX(MX),rx=SX(MX+95);
  if(mob){
    g+='<g id="msN1"></g>';
    g+='<g id="msN2"><text class="t" x="'+hx+'" y="196" text-anchor="middle">BOHRUNG</text><text class="t" x="'+mx+'" y="196" text-anchor="middle">MICROVIA</text></g>';
    g+='<g id="msP2"><text class="t s1" x="'+hx+'" y="520" text-anchor="middle">TYP VII</text></g>';
    g+='<g id="msN3"><text class="t" x="'+rx+'" y="186" text-anchor="middle">LÖTSTOPPLACK</text><text class="t s3" x="'+hx+'" y="186" text-anchor="middle">GOLD</text></g>';
  }else{
    g+='<g id="msN1"><text class="t" x="'+LX+'" y="246">KUPFERFOLIE</text><text class="t" x="'+LX+'" y="310">KERN</text><text class="t" x="'+LX+'" y="358">PREPREG</text><text class="t" x="'+LX+'" y="174">PRESSPLATTE</text></g>';
    g+='<g id="msN2"><text class="t" x="'+hx+'" y="200" text-anchor="middle">DURCHKONTAKTIERT</text><text class="t" x="'+mx+'" y="200" text-anchor="middle">MICROVIA</text></g>';
    g+='<g id="msP2"><text class="t s1" x="'+hx+'" y="514" text-anchor="middle">TYP VII · VERFÜLLT</text></g>';
    g+='<g id="msN3"><text class="t" x="'+rx+'" y="194" text-anchor="middle">LÖTSTOPPLACK</text><text class="t s3" x="'+hx+'" y="194" text-anchor="middle">ENDOBERFLÄCHE</text><text class="t" x="'+rx+'" y="526" text-anchor="middle">IMPEDANZGEPRÜFT</text></g>';
  }
  g+='<g id="lb1"><text class="a" x="740" y="108" text-anchor="end">'+(mob?"":"1 · VERPRESSEN")+'</text></g>';
  g+='<g id="lb2"><text class="a" x="740" y="108" text-anchor="end">'+(mob?"":"2 · BOHREN")+'</text></g>';
  g+='<g id="lb3"><text class="a" x="740" y="108" text-anchor="end">'+(mob?"":"3 · OBERFLÄCHE")+'</text></g>';
  return g+'</svg>';
}
function scene(){return mosScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var q=function(s){return $(s,svg)};
  var E={base:dl(".sD"),fills:$$(".pp,.core,.cu,.plate",svg),Pt:q("#msPt"),Pb:q("#msPb"),A:q("#msA"),B:q("#msB"),C:q("#msC"),D:q("#msD"),Ee:q("#msE"),
    Et:q("#msEt"),Dr:q("#msDr"),H:q("#msH"),Mv:q("#msMv"),Pl:q("#msPl"),F:q("#msF"),Cap:q("#msCap"),Sm:q("#msSm"),Au:q("#msAu"),
    N1:q("#msN1"),N2:q("#msN2"),P2:q("#msP2"),N3:q("#msN3"),l1:q("#lb1"),l2:q("#lb2"),l3:q("#lb3"),t0:svg.querySelector("text.t")};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function ty(el,y){if(el)el.setAttribute("transform","translate(0 "+y.toFixed(1)+")")}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);op(E.t0,b);E.fills.forEach(function(c){op(c,b)})}
    /* step 1: the exploded stack closes up, the press plates clamp it, then lift away */
    var cl=seg(p,.04,.2),pl=seg(p,.12,.22),off=seg(p,.3,.4);
    ty(E.A,-50*(1-cl));ty(E.B,-25*(1-cl));ty(E.D,25*(1-cl));ty(E.Ee,50*(1-cl));
    ty(E.Pt,-18*(1-pl)-18*off);ty(E.Pb,18*(1-pl)+18*off);op(E.Pt,1-off);op(E.Pb,1-off);
    op(E.N1,b*seg(p,.18,.24)*(1-seg(p,.31,.36)));
    /* step 2: outer layers etched, drill through, plate, fill and cap */
    op(E.Et,b*seg(p,.36,.42));
    var dr=seg(p,.4,.5),du=seg(p,.5,.56);ty(E.Dr,(SY(392)-SY(222))*dr-(SY(392)-SY(150))*du);op(E.Dr,b*seg(p,.36,.4)*(1-du));
    op(E.H,b*seg(p,.44,.5)*(1-seg(p,.6,.64)));op(E.Mv,b*seg(p,.5,.54)*(1-seg(p,.6,.64)));
    op(E.Pl,b*seg(p,.54,.6));op(E.F,b*seg(p,.6,.64));op(E.Cap,b*seg(p,.62,.66));
    op(E.N2,b*seg(p,.56,.62)*(1-seg(p,.68,.72)));op(E.P2,b*seg(p,.62,.66)*(1-seg(p,.7,.74)));
    /* step 3: solder mask in MOS pink, gold on the pads */
    op(E.Sm,b*seg(p,.74,.84));ty(E.Sm,-10*(1-seg(p,.74,.84)));
    op(E.Au,b*seg(p,.84,.9));op(E.N3,b*seg(p,.86,.94));
    op(E.l1,b*seg(p,0,.06)*(1-seg(p,.32,.36)));op(E.l2,b*seg(p,.38,.44)*(1-seg(p,.64,.68)));op(E.l3,b*seg(p,.72,.78));
  };
}
