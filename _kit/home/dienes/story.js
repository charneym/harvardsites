/* The story scene (BL/BY/DB): the DIENES thread line (dienes.net > Anlagen, Komponenten, MultiMode), drawn as ONE fine-line
   side view kept on screen for all four steps: a spinneret, two godet duos (heated godet + separator roll), a thread-tension
   sensor and a winder, with the MultiMode Master touch display above.
   Step 1 (Spinnen): spinneret, filaments converge, the yarn runs onto the first duo.
   Step 2 (Heizen): both godets glow copper; induction coils inside, label "bis 700 °C".
   Step 3 (Verstrecken): speed arrows v1 and v2 > v1; the yarn between the duos is drawn.
   Step 4 (Steuern): the control unit draws in, signal lines run to each module, tension sensor and winder light up. */
var SCW=760,SCH=520;
function circ(cx,cy,r){return "M"+(cx-r)+" "+cy+"a"+r+" "+r+" 0 1 0 "+(2*r)+" 0a"+r+" "+r+" 0 1 0 "+(-2*r)+" 0"}
function arcA(cx,cy,r,a0,a1){var p=function(a){return [(cx+r*Math.cos(a)).toFixed(1),(cy+r*Math.sin(a)).toFixed(1)]},s=p(a0),e=p(a1);return "M"+s[0]+" "+s[1]+"A"+r+" "+r+" 0 0 1 "+e[0]+" "+e[1]}
function headA(cx,cy,r,a){var x=cx+r*Math.cos(a),y=cy+r*Math.sin(a),tx=-Math.sin(a),ty=Math.cos(a),nx=Math.cos(a),ny=Math.sin(a),k=8,w=4;
  return "M"+(x-tx*k+nx*w).toFixed(1)+" "+(y-ty*k+ny*w).toFixed(1)+"L"+x.toFixed(1)+" "+y.toFixed(1)+"L"+(x-tx*k-nx*w).toFixed(1)+" "+(y-ty*k-ny*w).toFixed(1)}
function dnScene(o){
  var g='',mob=o.mob,i;
  var G1=[250,290],G2=[480,290],R=50,S1=[178,352],S2=[408,352],r=22,B=[668,408];
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  if(!mob)g+='<text class="t" x="20" y="30">FADENLAUF, SCHEMATISCH</text>';
  /* frame line (machine base) */
  g+='<path class="ring0 sD" d="M40 420H600"/>';
  /* godet duos: heated godet + separator roll, with wraps */
  [[G1,S1],[G2,S2]].forEach(function(d,j){var G=d[0],S=d[1];
    g+='<path class="hot" id="dnH'+j+'" d="'+circ(G[0],G[1],R-2)+'"/>';
    g+='<path class="edge sD" d="'+circ(G[0],G[1],R)+'"/><path class="edge sD" d="'+circ(G[0],G[1],8)+'"/>'+
       '<path class="edge sD" d="'+circ(S[0],S[1],r)+'"/><path class="edge sD" d="'+circ(S[0],S[1],5)+'"/>';
    g+='<path class="coil" id="dnC'+j+'" d="'+circ(G[0],G[1],34)+' '+circ(G[0],G[1],24)+'"/>';
    g+='<g class="wr" id="dnWr'+j+'">';for(i=0;i<3;i++){g+='<path d="M'+(S[0]+6+i*5)+' '+(S[1]-r+1)+'L'+(G[0]-14+i*9)+' '+(G[1]+R-1)+'"/>'}g+='</g>';
  });
  /* spinneret and filaments */
  g+='<path class="edge sD" d="M106 56H154V78H106Z"/><path class="edge sD" d="M96 78H164L152 102H108Z"/>';
  g+='<g id="dnF">';for(i=0;i<6;i++){var fx=112+i*7.2;g+='<path class="fil sF" d="M'+fx.toFixed(1)+' 104C'+fx.toFixed(1)+' 150 130 168 130 196"/>'}g+='</g>';
  /* the yarn: onto G1 top, over G1, across to G2 top, over G2, through the sensor to the winder */
  var y1='M130 196V212C130 232 160 240 '+G1[0]+' 240A50 50 0 0 1 '+(G1[0]+R)+' '+G1[1];
  var y2='M'+(G1[0]+R)+' '+G1[1]+'C'+(G1[0]+R)+' 262 400 240 '+G2[0]+' 240';
  var y3='M'+G2[0]+' 240A50 50 0 0 1 '+(G2[0]+R)+' '+G2[1]+'C'+(G2[0]+R)+' 316 560 330 598 330H624C646 330 '+B[0]+' 346 '+B[0]+' 366';
  g+='<path class="yarn sY" d="'+y1+'"/><path class="yarn y2 sY2" d="'+y2+'"/><path class="yarn sY" d="'+y3+'"/>';
  /* tension sensor and winder */
  g+='<g id="dnTs"><path class="edge" d="M598 322H624V312H598Z"/><path class="edge" d="M604 330V338M618 330V338"/></g>';
  g+='<path class="edge sD" d="'+circ(B[0],B[1],42)+'"/><path class="edge sD" d="'+circ(B[0],B[1],14)+'"/>';
  g+='<path class="wind" id="dnWi" d="'+circ(B[0],B[1],30)+' '+circ(B[0],B[1],36)+'"/>';
  /* step 3: speed arrows */
  g+='<g id="dnV"><path class="arr" d="'+arcA(G1[0],G1[1],62,-2.3,-1.0)+'"/><path class="arr" d="'+arcA(G2[0],G2[1],62,-2.3,-.55)+'"/><path class="arr" d="'+headA(G1[0],G1[1],62,-1.0)+'"/><path class="arr" d="'+headA(G2[0],G2[1],62,-.55)+'"/></g>';
  /* step 4: the control unit (MultiMode Master) and its signal lines */
  g+='<g id="dnK"><path class="edge" d="M560 70H720V176H560Z"/><path class="scr" d="M572 82H708V150H572Z"/>';
  for(i=0;i<5;i++){g+='<path class="kb" d="M'+(586+i*24)+' 140V'+(140-[30,44,24,50,38][i])+'"/>'}
  g+='<path class="sig sK" d="M560 150H'+G1[0]+'V'+(G1[1]-R-14)+'"/><path class="sig sK" d="M'+G2[0]+' 150V'+(G1[1]-R-14)+'"/><path class="sig sK" d="M611 176V306"/><path class="sig sK" d="M700 176V362"/></g>';
  /* labels per step, each >= 8px clear of every stroke (DR3) */
  g+='<g id="dnL1"><text class="t s1" x="184" y="'+(mob?92:84)+'">'+(mob?'SPINNDÜSE':'SPINNDÜSE · FILAMENTE')+'</text></g>';
  g+='<g id="dnL2"><text class="t s2" x="'+(mob?150:160)+'" y="'+(mob?470:462)+'">'+(mob?'BIS 700 °C':'INDUKTIONSBEHEIZT · BIS 700 °C')+'</text></g>';
  g+='<g id="dnL3"><text class="t s1" x="'+(G1[0]-58)+'" y="196">V1</text><text class="t s1" x="'+(G2[0]-58)+'" y="196">'+(mob?'V2>V1':'V2 > V1')+'</text>'+
     '<text class="t s2" x="160" y="'+(mob?470:462)+'">'+(mob?'0,1–8.000 M/MIN':'0,1 – 8.000 M/MIN')+'</text></g>';
  g+='<g id="dnL4"><text class="t s2" x="560" y="'+(mob?52:56)+'">'+(mob?'MASTER':'MULTIMODE MASTER')+'</text><text class="t s1" x="'+(mob?400:470)+'" y="'+(mob?470:462)+'">'+(mob?'SPANNUNG':'FADENSPANNUNG')+'</text></g>';
  g+='<g id="lb1"><text class="a" x="20" y="508">1 · SPINNEN</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="508">2 · HEIZEN</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="508">3 · VERSTRECKEN</text></g>';
  g+='<g id="lb4"><text class="a" x="20" y="508">4 · STEUERN</text></g>';
  return g+'</svg>';
}
function scene(){return dnScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),fil:dl(".sF"),yarn:dl(".sY"),y2:dl(".sY2"),sig:dl(".sK"),H:$$(".hot",svg),C:$$(".coil",svg),Wr:$$(".wr",svg),F:$("#dnF",svg),Ts:$("#dnTs",svg),Wi:$("#dnWi",svg),V:$("#dnV",svg),K:$("#dnK",svg),
    L1:$("#dnL1",svg),L2:$("#dnL2",svg),L3:$("#dnL3",svg),L4:$("#dnL4",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg),t0:svg.querySelector("text.t")};
  var lastB=-1,y2=E.y2[0]&&E.y2[0][0];
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);op(E.t0,b)}
    /* step 1: filaments and the yarn run through the line */
    op(E.F,b);draw(E.fil,b*seg(p,.02,.1));draw(E.yarn,b*seg(p,.06,.2));draw(E.y2,b*seg(p,.08,.18));
    E.Wr.forEach(function(w){op(w,b*seg(p,.1,.16))});op(E.Wi,b*seg(p,.14,.2));
    op(E.L1,b*seg(p,.03,.09)*(1-seg(p,.22,.25)));
    /* step 2: the godets heat up */
    var h=seg(p,.27,.36);E.H.forEach(function(t){op(t,b*h*(1-.55*seg(p,.5,.56)))});E.C.forEach(function(t){op(t,b*h*(1-seg(p,.48,.52)))});
    op(E.L2,b*seg(p,.3,.36)*(1-seg(p,.47,.5)));
    /* step 3: v2 > v1, the drawn yarn between the duos is highlighted */
    op(E.V,b*seg(p,.52,.58)*(1-seg(p,.73,.76)));if(y2)y2.classList.toggle("on",p>.52&&p<.75);
    op(E.L3,b*seg(p,.55,.61)*(1-seg(p,.72,.75)));
    /* step 4: control unit, signal lines, sensor */
    op(E.K,b*seg(p,.77,.82));draw(E.sig,b*seg(p,.79,.9));op(E.Ts,b*(.35+.65*seg(p,.84,.9)));
    op(E.L4,b*seg(p,.8,.86));
    op(E.l1,b*seg(p,0,.05)*(1-seg(p,.22,.25)));op(E.l2,b*seg(p,.27,.32)*(1-seg(p,.47,.5)));op(E.l3,b*seg(p,.52,.57)*(1-seg(p,.72,.75)));op(E.l4,b*seg(p,.77,.82));
  };
}
