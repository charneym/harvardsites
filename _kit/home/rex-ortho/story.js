/* the story scene (BL/BY/DB): ONE engraved section through a proximal femur, kept on screen throughout; each step adds one
   part of the REX Screw story as REX Ortho describes it (rexortho.com home and about; Curtin thesis abstract, espace.curtin.edu.au
   20.500.11937/94391): a proximal femoral fracture in poor-quality bone; the screw placed through the neck into the femoral head
   within the existing workflow; expansion inside the head for fixation strength; and removal, the expansion reversed. Schematic. */
var HC=[500,182],HR=104,S0=[196,414],ANG=-33.2;
var FEM='M204 560L200 440C196 380 168 300 178 232C184 196 206 180 234 186C262 192 286 214 322 222C360 230 392 214 414 178'+
  'C430 150 446 112 470 92A104 104 0 1 1 560 268C520 278 470 300 432 330C400 356 372 392 352 430C340 456 330 500 322 560Z';
function lead(x,y){var a=ANG*Math.PI/180,c=Math.cos(a),s=Math.sin(a);return 'M'+(S0[0]+x*c-y*s).toFixed(1)+' '+(S0[1]+x*s+y*c).toFixed(1)}
function scene(){
  var mob=MOBILE(),LX=mob?600:618;
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<defs><pattern id="rxTb" width="11" height="11" patternUnits="userSpaceOnUse" patternTransform="rotate(33)"><circle cx="3" cy="3" r="1.05" fill="rgba(243,245,247,.22)"/><circle cx="8.5" cy="8" r=".7" fill="rgba(243,245,247,.14)"/></pattern></defs>';
  g+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="799" height="559"/>';
  g+='<path class="hatch" d="'+FEM+'"/><path class="wl sD" d="'+FEM+'"/>';
  /* inner cortex: the walls of the medullary canal and the shell of the head */
  g+='<path class="wi sD" d="M222 560V470C222 436 228 410 242 390M304 560V480C304 452 310 428 322 408"/><circle class="wi sD" cx="'+HC[0]+'" cy="'+HC[1]+'" r="'+(HR-12)+'"/>';
  g+='<g class="tb"><path class="tbl" d="M548 494h228v52h-228Z M548 520h228"/><text x="558" y="512" class="t">SECTION · PROXIMAL FEMUR</text><text x="558" y="538" class="t s">F-REX · REX ORTHO</text></g>';
  g+='</g>';
  /* 1 the fracture: a break across the trochanteric region */
  g+='<g id="sc1"><path class="frc dr" d="M240 192L258 230L250 262L278 296L272 330L302 354L316 386"/>'+
     '<path class="ld2 dr" d="M'+(HC[0]+HR*.72).toFixed(0)+' '+(HC[1]-HR*.7).toFixed(0)+'L'+(LX-40)+' 96H'+(LX-8)+'"/><text x="'+LX+'" y="100" class="t c">FEMORAL HEAD</text>'+
     '<path class="ld2 dr" d="M302 354L'+(LX-60)+' 410H'+(LX-8)+'"/><text x="'+LX+'" y="414" class="t c">FRACTURE</text>'+
     '<text x="40" y="60" class="a">THE FRACTURE</text></g>';
  /* 2 the screw, closed, through the lateral cortex and the neck into the head */
  var T='translate('+S0[0]+' '+S0[1]+') rotate('+ANG+')';
  var thr='';for(var i=0;i<6;i++){var x=258+i*18;thr+='M'+x+' -10L'+(x+7)+' -16L'+(x+14)+' -10M'+x+' 10L'+(x+7)+' 16L'+(x+14)+' 10'}
  g+='<g id="sc2"><g class="mv"><g transform="'+T+'"><path class="scr" d="M-6 -10H372L398 0L372 10H-6Z"/><path class="thr dr" d="'+thr+'"/><path class="slt dr" d="M236 -3.5H368M236 3.5H368"/></g></g>'+
     '<path class="ld2 dr" d="'+lead(330,-16)+'L'+(LX-40)+' 196H'+(LX-8)+'"/><text x="'+LX+'" y="200" class="t c">REX SCREW</text>'+
     '<text x="40" y="60" class="a">THE SCREW</text></g>';
  /* 3 expansion: the leaves open into the cancellous bone of the head */
  g+='<g id="sc3"><g transform="'+T+'"><path class="fin" d="M236 -10L370 -38L378 -28L250 -6Z"/><path class="fin" d="M236 10L370 38L378 28L250 6Z"/><path class="glw" d="M30 0H356"/></g>'+
     '<path class="ld2 dr" d="'+lead(372,38)+'L'+(LX-30)+' 286H'+(LX-8)+'"/><text x="'+LX+'" y="290" class="t c c3">EXPANDED</text><text x="'+LX+'" y="308" class="t c c3">IN THE HEAD</text>'+
     '<text x="40" y="60" class="a">THE EXPANSION</text></g>';
  /* 4 removal: the leaves fold back and the screw draws out along its own path */
  g+='<g id="sc4"><g class="mv"><g transform="'+T+'"><path class="arw dr" d="M-24 0H-130M-116 -9L-130 0L-116 9"/></g></g>'+
     '<path class="ld2 dr" d="'+lead(-100,10)+'L150 476H'+(LX-8)+'"/><text x="'+LX+'" y="480" class="t c c4">REMOVABLE</text>'+
     '<text x="40" y="60" class="a">THE REMOVAL</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .neat, #scBase .tb, #scBase .hatch",svg),
    g:[$("#sc1",svg),$("#sc2",svg),$("#sc3",svg),$("#sc4",svg)],
    d:[dl("#sc1 .dr"),dl("#sc2 .dr"),dl("#sc3 .dr"),dl("#sc4 .dr")],
    c:[$$("#sc1 text.t",svg),$$("#sc2 text.t",svg),$$("#sc3 text.t",svg),$$("#sc4 text.t",svg)],
    t:[$("#sc1 text.a",svg),$("#sc2 text.a",svg),$("#sc3 text.a",svg),$("#sc4 text.a",svg)],
    sc:$("#sc2 .mv",svg),ar:$("#sc4 .mv",svg),fin:$$("#sc3 .fin, #sc3 .glw",svg)};
  var lastB=-1,a=ANG*Math.PI/180,ux=Math.cos(a),uy=Math.sin(a);
  function draw(list,v){list.forEach(function(q){q[0].style.strokeDashoffset=(q[1]*(1-v)).toFixed(1)})}
  function along(el,d){el.setAttribute("transform","translate("+(ux*d).toFixed(1)+" "+(uy*d).toFixed(1)+")")}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s=[Math.max(seg(p,0,.16),.55),seg(p,.25,.44),seg(p,.5,.69),seg(p,.75,.94)];
    for(var i=0;i<4;i++){
      var on=i===0?b:b*(s[i]>0?1:0),nx=i<3?s[i+1]:0;
      E.g[i].style.opacity=on.toFixed(3);draw(E.d[i],i===0?b*s[0]:s[i]);
      var lv=(i===0?b:Math.max(0,Math.min(1,s[i]*2-1)))*(1-.5*nx);
      E.c[i].forEach(function(el){el.style.opacity=lv.toFixed(3)});
    }
    /* the screw slides in along its axis; the leaves open, then fold back as it is drawn out */
    along(E.sc,-70*(1-s[1])-40*s[3]);along(E.ar,-40*s[3]);
    var f=(s[2]*(1-s[3])).toFixed(3);E.fin.forEach(function(el){el.style.opacity=f});
    var I=function(v){return Math.max(0,v*2-1)},O=function(v){return 1-Math.min(1,v*2)};
    E.t[0].style.opacity=O(s[1]).toFixed(3);
    E.t[1].style.opacity=(I(s[1])*O(s[2])).toFixed(3);E.t[2].style.opacity=(I(s[2])*O(s[3])).toFixed(3);E.t[3].style.opacity=I(s[3]).toFixed(3);
  };
}
