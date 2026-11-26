/* The story scene (BL/BY/DB): how WOLCO makes a fine wire (wolco.pl > O firmie, Usługi), ONE side view kept on screen for
   all three steps: the wire runs left to right through a drawing die, dips through a plating bath and is wound on a spool.
   Step 1 (Ciągnienie): the die glows, the wire runs through it and leaves thinner.
   Step 2 (Powlekanie): the bath fills and lights up, the copper coat travels along the wire to the spool.
   Step 3 (Nawijanie): the spool turns and the winding grows.
   Schematic, not to scale. */
var SCW=760,SCH=420,VY=80,WY=230,DX=204,SX=640,SY=330,SR=95;
function wcScene(o){
  var g='',mob=o.mob,i;
  var wire='M20 '+WY+'H262L300 322H440L478 '+WY+'H560';
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 '+VY+' '+SCW+' '+SCH+'" aria-hidden="true"><defs>'+
    '<linearGradient id="wcB" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4f8fd6" stop-opacity=".10"/><stop offset="1" stop-color="#4f8fd6" stop-opacity=".34"/></linearGradient>'+
    '<radialGradient id="wcS" cx=".5" cy=".5" r=".5"><stop offset=".3" stop-color="#e08a5a" stop-opacity=".95"/><stop offset=".8" stop-color="#c46a3c" stop-opacity=".9"/><stop offset="1" stop-color="#f0b48c" stop-opacity=".95"/></radialGradient>'+
    '<radialGradient id="wcH" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ffd27a" stop-opacity=".85"/><stop offset="1" stop-color="#f6ab00" stop-opacity="0"/></radialGradient></defs>';
  g+='<text class="t" x="20" y="108">'+(mob?"SCHEMAT":"LINIA DRUTU, WIDOK Z BOKU, SCHEMAT")+'</text>';
  /* the plating bath */
  g+='<path class="liq" id="wcLiq" d="M266 288H474V368H266Z"/>';
  g+='<path class="body sD" d="M262 262V372H478V262"/><path class="body sD" d="M266 288H474"/>';
  g+='<g id="wcAn">';for(i=0;i<3;i++)g+='<path class="an" d="M'+(324+i*44)+' 296H'+(336+i*44)+'V308H'+(324+i*44)+'Z"/>';g+='</g>';
  /* guide rollers in the bath */
  g+='<path class="body sD" d="M310 330A10 10 0 1 1 290 330A10 10 0 1 1 310 330Z"/><path class="body sD" d="M450 330A10 10 0 1 1 430 330A10 10 0 1 1 450 330Z"/>';
  /* the wire: thicker before the die, steel after, copper once coated */
  g+='<path class="wr0" d="M20 '+WY+'H'+(DX-6)+'"/>';
  g+='<path class="wr sD" d="M'+(DX+6)+' '+WY+'H262L300 322H440L478 '+WY+'H560L'+SX+' '+(SY-44)+'"/>';
  g+='<path class="cu" id="wcCu" d="M478 '+WY+'H560L'+SX+' '+(SY-44)+'"/>';
  g+='<path class="flow" id="wcFl" d="'+wire+'"/>';
  /* the drawing die */
  g+='<g id="wcDie"><circle cx="'+DX+'" cy="'+WY+'" r="26" fill="url(#wcH)" id="wcDh"/>'+
    '<path class="tool" d="M'+(DX-22)+' 186H'+(DX+22)+'V'+(WY-6)+'L'+DX+' '+(WY-2)+'L'+(DX-22)+' '+(WY-16)+'Z"/><path class="body sD" d="M'+(DX-22)+' 186H'+(DX+22)+'V'+(WY-6)+'L'+DX+' '+(WY-2)+'L'+(DX-22)+' '+(WY-16)+'Z"/>'+
    '<path class="tool" d="M'+(DX-22)+' 274H'+(DX+22)+'V'+(WY+6)+'L'+DX+' '+(WY+2)+'L'+(DX-22)+' '+(WY+16)+'Z"/><path class="body sD" d="M'+(DX-22)+' 274H'+(DX+22)+'V'+(WY+6)+'L'+DX+' '+(WY+2)+'L'+(DX-22)+' '+(WY+16)+'Z"/></g>';
  /* the spool, seen along its axis: flange, growing winding, hub */
  g+='<circle class="tool" cx="'+SX+'" cy="'+SY+'" r="'+SR+'"/><path class="body sD" d="M'+(SX+SR)+' '+SY+'A'+SR+' '+SR+' 0 1 1 '+(SX-SR)+' '+SY+'A'+SR+' '+SR+' 0 1 1 '+(SX+SR)+' '+SY+'Z"/>';
  g+='<circle id="wcW" cx="'+SX+'" cy="'+SY+'" r="44" fill="url(#wcS)"/>';
  g+='<circle class="hub" cx="'+SX+'" cy="'+SY+'" r="20"/><path class="body sD" d="M'+(SX+20)+' '+SY+'A20 20 0 1 1 '+(SX-20)+' '+SY+'A20 20 0 1 1 '+(SX+20)+' '+SY+'Z"/>';
  g+='<g id="wcHo">';for(i=0;i<3;i++)g+='<circle class="ho" transform="rotate('+(i*120)+' '+SX+' '+SY+')" cx="'+SX+'" cy="'+(SY-32)+'" r="5"/>';g+='</g>';
  /* labels, kept clear of every stroke */
  g+='<g id="wcN"><text class="t" x="20" y="'+(mob?204:206)+'">'+(mob?"DRUT":"DRUT STALOWY")+'</text><text class="t" x="262" y="'+(mob?410:400)+'">'+(mob?"KĄPIEL":"KĄPIEL GALWANICZNA")+'</text><text class="t" x="'+SX+'" y="'+(mob?462:452)+'" text-anchor="middle">SZPULA</text></g>';
  g+='<g id="wcP1"><text class="t s1" x="20" y="'+(mob?296:266)+'">'+(mob?"Ø 0,05–5,5 MM":"Ø 0,050–5,500 MM")+'</text></g>';
  g+='<g id="wcP2"><text class="t s1" x="262" y="'+(mob?448:424)+'">'+(mob?"6 METALI":"Cu · Ni · Zn · Sn · CuZn · Ag")+'</text></g>';
  g+='<g id="wcP3"><text class="t s1" x="'+SX+'" y="'+(mob?496:474)+'" text-anchor="middle">'+(mob?"K-125…MP-100":"K-125 … MP-100")+'</text></g>';
  g+='<g id="lb1"><text class="a" x="20" y="488">'+(mob?"":"1 · CIĄGNIENIE")+'</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="488">'+(mob?"":"2 · POWLEKANIE")+'</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="488">'+(mob?"":"3 · NAWIJANIE")+'</text></g>';
  return g+'</svg>';
}
function scene(){return wcScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var Cu=$("#wcCu",svg),CuL=Cu.getTotalLength();Cu.style.strokeDasharray=CuL+" "+CuL;
  var E={base:dl(".sD"),tools:$$(".tool,.hub,.wr0",svg),Liq:$("#wcLiq",svg),An:$("#wcAn",svg),Fl:$("#wcFl",svg),Dh:$("#wcDh",svg),
    W:$("#wcW",svg),Ho:$("#wcHo",svg),N:$("#wcN",svg),P1:$("#wcP1",svg),P2:$("#wcP2",svg),P3:$("#wcP3",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),t0:svg.querySelector("text.t")};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);op(E.t0,b);E.tools.forEach(function(c){op(c,b)})}
    var s2=seg(p,.36,.62),s3=seg(p,.68,1);
    /* the wire keeps running through the whole story */
    E.Fl.style.strokeDashoffset=(-p*900).toFixed(1);op(E.Fl,b*.9);
    /* step 1: the die glows while the wire is drawn through it */
    op(E.Dh,b*seg(p,.04,.12)*(1-.7*seg(p,.32,.4)));op(E.P1,b*seg(p,.06,.14)*(1-seg(p,.3,.35)));
    /* step 2: the bath fills, the anodes light, the copper coat travels from the bath exit to the spool */
    op(E.Liq,b*(.25+.75*seg(p,.34,.44)));op(E.An,b*(.3+.7*seg(p,.36,.46)));
    Cu.style.strokeDashoffset=(CuL*(1-seg(p,.42,.62))).toFixed(1);
    op(E.P2,b*seg(p,.38,.46)*(1-seg(p,.64,.68)));
    /* step 3: the spool turns and the winding grows to its final radius */
    E.W.setAttribute("r",(44+34*s3).toFixed(2));
    E.Ho.setAttribute("transform","rotate("+(400*s3+40*s2).toFixed(2)+" "+SX+" "+SY+")");
    op(E.W,b*(.35+.65*seg(p,.5,.62)));op(E.P3,b*seg(p,.72,.8));
    op(E.N,b*seg(p,.03,.1));
    op(E.l1,b*seg(p,0,.06)*(1-seg(p,.33,.38)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.64,.68)));op(E.l3,b*seg(p,.7,.78));
  };
}
