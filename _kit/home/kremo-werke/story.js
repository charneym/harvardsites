/* The story scene (BL/BY/DB): how a KREMO Vorschweißbördel is made in the Krefeld stainless works
   (kremo-werke.de > Über uns: own tool shop, presses 25 to 2500 t, deep drawing and stretch forming, vacuum annealing,
   pickling and acceptance in house), drawn as ONE cross-section kept on screen for all three steps:
   Step 1 (Pressen): punch and blank holder above a stainless blank lying on the die.
   Step 2 (Umformen): the punch draws the blank into the die: a seamless stub with its flared collar.
   Step 3 (Abnahme): tools withdraw, the loose flange ring goes on behind the collar, annealed; certificate 3.1 EN 10204.
   Schematic, not to scale, no measured values. */
var SCW=760,SCH=420,VY=80,CX=380;
function krScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 '+VY+' '+SCW+' '+SCH+'" aria-hidden="true"><defs>'+
    '<linearGradient id="krS" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#cfd8ea" stop-opacity=".55"/><stop offset=".5" stop-color="#f3f5f8" stop-opacity=".85"/><stop offset="1" stop-color="#9fb0d0" stop-opacity=".5"/></linearGradient>'+
    '<linearGradient id="krT" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6f9bea" stop-opacity=".22"/><stop offset="1" stop-color="#6f9bea" stop-opacity=".06"/></linearGradient>'+
    '<radialGradient id="krH" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ffb070" stop-opacity=".42"/><stop offset="1" stop-color="#ff9050" stop-opacity="0"/></radialGradient></defs>';
  g+='<text class="t" x="20" y="'+(mob?112:108)+'">'+(mob?"QUERSCHNITT":"TIEFZIEHEN, QUERSCHNITT, SCHEMATISCH")+'</text>';
  /* centre line */
  g+='<path class="axis sD" d="M'+CX+' 120V488"/>';
  /* die (Matrize): two blocks with the drawing opening between them */
  g+='<g id="krDie"><path class="tool" style="fill:url(#krT)" d="M140 332H326V452H140Z"/><path class="body sD" d="M140 332H326V452H140Z"/>'+
     '<path class="tool" style="fill:url(#krT)" d="M434 332H620V452H434Z"/><path class="body sD" d="M434 332H620V452H434Z"/></g>';
  /* blank holder (Niederhalter) and punch (Stempel), moved together in step 1-2 */
  g+='<g id="krHold"><path class="tool" style="fill:url(#krT)" d="M150 270H318V314H150Z"/><path class="body sD" d="M150 270H318V314H150Z"/>'+
     '<path class="tool" style="fill:url(#krT)" d="M442 270H610V314H442Z"/><path class="body sD" d="M442 270H610V314H442Z"/></g>';
  g+='<g id="krPun"><path class="tool" style="fill:url(#krT)" d="M342 150H418V308C418 314 414 318 408 318H352C346 318 342 314 342 308Z"/><path class="body sD" d="M342 150H418V308C418 314 414 318 408 318H352C346 318 342 314 342 308Z"/></g>';
  /* the stainless blank (step 1) */
  g+='<path id="krBl" class="steel" d="M190 320H570V330H190Z"/>';
  /* the drawn stub: flared collar flowing into the tube walls (step 2 on) */
  g+='<path id="krSt" class="steel" d="M228 320H322C336 320 342 326 342 340V470H332V342C332 334 328 330 320 330H228Z M532 320H438C424 320 418 326 418 340V470H428V342C428 334 432 330 440 330H532Z"/>';
  g+='<path id="krStO" class="edge sD2" d="M228 320H322C336 320 342 326 342 340V470H332V342C332 334 328 330 320 330H228Z M532 320H438C424 320 418 326 418 340V470H428V342C428 334 432 330 440 330H532Z"/>';
  /* the loose flange ring behind the collar (step 3), each side with its bolt hole */
  g+='<g id="krRing"><path class="steel" d="M180 332H198V360H180Z M218 332H316V360H218Z M562 332H580V360H562Z M444 332H542V360H444Z"/>'+
     '<path class="edge" d="M180 332H198V360H180Z M218 332H316V360H218Z M562 332H580V360H562Z M444 332H542V360H444Z"/>'+
     '<path class="axis" d="M208 318V376M552 318V376"/></g>';
  g+='<ellipse id="krHeat" cx="'+CX+'" cy="370" rx="250" ry="120" fill="url(#krH)"/>';
  /* part labels (kept clear of every stroke) */
  if(mob){
    g+='<g id="krN1"><text class="t" x="430" y="196">STEMPEL</text><text class="t" x="20" y="232">NIEDERHALTER</text><text class="t" x="20" y="486">MATRIZE</text></g>';
    g+='<g id="krN3"><text class="t" x="20" y="300">LOSFLANSCH</text><text class="t" x="450" y="300">BÖRDEL</text></g>';
  }else{
    g+='<g id="krN1"><text class="t" x="432" y="200">STEMPEL</text><text class="t" x="150" y="232">NIEDERHALTER</text><text class="t" x="236" y="476">MATRIZE</text><text class="t" x="628" y="329">ROHLING</text></g>';
    g+='<g id="krN3"><text class="t" x="150" y="300">LOSFLANSCH</text><text class="t" x="446" y="300">VORSCHWEISSBÖRDEL</text></g>';
  }
  g+='<g id="krP1"><text class="t s1" x="'+(mob?430:432)+'" y="'+(mob?228:224)+'">'+(mob?"25–2500 T":"25 BIS 2500 T")+'</text></g>';
  g+='<g id="krP3"><text class="t s3" x="'+(mob?450:446)+'" y="'+(mob?258:270)+'">'+(mob?"3.1 · EN 10204":"PRÜFZEUGNIS 3.1 · EN 10204")+'</text></g>';
  /* step captions */
  g+='<g id="lb1"><text class="a" x="20" y="'+(mob?488:488)+'">'+(mob?"":"1 · PRESSEN")+'</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="488">'+(mob?"":"2 · UMFORMEN")+'</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="488">'+(mob?"":"3 · ABNAHME")+'</text></g>';
  return g+'</svg>';
}
function scene(){return krScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),edge:dl(".sD2"),tools:$$(".tool",svg),Die:$("#krDie",svg),Hold:$("#krHold",svg),Pun:$("#krPun",svg),Bl:$("#krBl",svg),St:$("#krSt",svg),StO:$("#krStO",svg),
    Ring:$("#krRing",svg),Heat:$("#krHeat",svg),N1:$("#krN1",svg),N3:$("#krN3",svg),P1:$("#krP1",svg),P3:$("#krP3",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),t0:svg.querySelector("text.t")};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function ty(el,y){if(el)el.setAttribute("transform","translate(0 "+y.toFixed(1)+")")}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);op(E.t0,b);E.tools.forEach(function(c){op(c,b)})}
    /* step 1: the blank lies on the die, the blank holder clamps it, the punch waits above */
    var hold=seg(p,.06,.2);ty(E.Hold,-26*(1-hold));
    op(E.Bl,b*(1-seg(p,.42,.5)));
    op(E.N1,b*seg(p,.04,.12)*(1-seg(p,.66,.72)));op(E.P1,b*seg(p,.1,.18)*(1-seg(p,.33,.38)));
    /* step 2: the punch descends and draws the blank into the die; the stub appears as the blank goes */
    var dn=seg(p,.38,.6),up=seg(p,.68,.8);
    ty(E.Pun,150*dn-210*up);op(E.Pun,1-up);
    ty(E.Hold,-26*(1-hold)-120*up);op(E.Hold,1-up);
    op(E.St,b*seg(p,.42,.54));draw(E.edge,b*seg(p,.42,.6));
    /* step 3: tools withdraw, die fades back, the loose ring arrives behind the collar, a warm anneal glow, the certificate */
    op(E.Die,1-.7*seg(p,.7,.8));
    op(E.Ring,b*seg(p,.76,.86));ty(E.Ring,30*(1-seg(p,.76,.88)));
    op(E.Heat,b*seg(p,.78,.86)*(1-.6*seg(p,.9,1)));
    op(E.N3,b*seg(p,.82,.9));op(E.P3,b*seg(p,.86,.94));
    op(E.l1,b*seg(p,0,.06)*(1-seg(p,.33,.38)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.64,.68)));op(E.l3,b*seg(p,.7,.78));
  };
}
