/* The story scene (BL/BY/DB): Refining Systems' own process (refiningsystems.com > Services: melting, rolling, wire
   drawing, stamping, turning, surface grinding, flat lapping, polishing), drawn as ONE piece of metal kept on screen:
   Step 1 (Melt): an ingot of the specified purity.
   Step 2 (Roll): the ingot passes through the rolling mill and leaves as sheet; the rolls turn.
   Step 3 (Finish): a disc is cut from the sheet and finished as a sputtering target on its copper backing plate, the
   turned grooves drawing in. */
var SCW=760,SCH=520;
function rsScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true"><defs>'+
    '<linearGradient id="rsMt" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f2efea" stop-opacity=".55"/><stop offset=".45" stop-color="#bdb6ae" stop-opacity=".32"/><stop offset="1" stop-color="#6f6963" stop-opacity=".4"/></linearGradient>'+
    '<linearGradient id="rsRl" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#d9d4cd" stop-opacity=".30"/><stop offset="1" stop-color="#4b4744" stop-opacity=".30"/></linearGradient>'+
    '<radialGradient id="rsTg" cx=".45" cy=".4" r=".7"><stop offset="0" stop-color="#f4f1ec" stop-opacity=".6"/><stop offset="1" stop-color="#9c958e" stop-opacity=".3"/></radialGradient>'+
    '<linearGradient id="rsCu" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#e8a183" stop-opacity=".5"/><stop offset="1" stop-color="#8f4a2e" stop-opacity=".45"/></linearGradient>'+
    '</defs>';
  g+='<text class="t" x="20" y="30">'+(mob?"FROM MELT TO PART":"FROM MELT TO PART, SCHEMATIC")+'</text>';
  /* the rolling mill: two rolls with their axles, the nip at y=260 */
  g+='<g id="rsMill">';
  [[330,192],[330,328]].forEach(function(c,k){
    g+='<circle class="roll sD" cx="'+c[0]+'" cy="'+c[1]+'" r="64"/><circle class="axl" cx="'+c[0]+'" cy="'+c[1]+'" r="12"/>'+
      '<g class="spk" data-c="'+c[0]+' '+c[1]+'" data-d="'+(k?-1:1)+'"><path class="ld" d="M'+c[0]+' '+(c[1]-14)+'V'+(c[1]-56)+'M'+(c[0]-12)+' '+(c[1]+7)+'L'+(c[0]-48)+' '+(c[1]+28)+'M'+(c[0]+12)+' '+(c[1]+7)+'L'+(c[0]+48)+' '+(c[1]+28)+'"/></g>';
  });
  g+='</g>';
  /* the sheet leaving the nip (grows in step 2) */
  g+='<g id="rsSh"><path class="sht" d="M330 255H712V265H330Z"/></g>';
  /* the ingot: a block in three-quarter view, moves into the nip in step 2 */
  g+='<g id="rsIng"><path class="ing" d="M60 232H220V290H60Z"/><path class="ing" d="M60 232L80 214H240L220 232Z"/><path class="ing" d="M220 232L240 214V272L220 290Z"/></g>';
  /* step 3: the cut, and the finished target on its backing plate */
  g+='<g id="rsCut"><path class="cut" d="M560 270V330"/><path class="arr" d="M552 322L560 334L568 322"/></g>';
  g+='<g id="rsTgG">'+
    '<path class="bpl" d="M410 408A150 46 0 0 0 710 408V424A150 46 0 0 1 410 424Z"/><ellipse class="bpl" cx="560" cy="408" rx="150" ry="46"/>';
  for(i=0;i<8;i++){var a=Math.PI/8+i*Math.PI/4;g+='<ellipse class="hole" cx="'+(560+132*Math.cos(a)).toFixed(1)+'" cy="'+(408+40.5*Math.sin(a)).toFixed(1)+'" rx="5.5" ry="2.6"/>'}
  g+='<path class="tgt" d="M455 394A105 32 0 0 0 665 394V408A105 32 0 0 1 455 408Z"/><ellipse class="tgt" cx="560" cy="394" rx="105" ry="32"/>';
  for(i=1;i<=6;i++){g+='<ellipse class="grv gD" cx="560" cy="394" rx="'+(105-i*14)+'" ry="'+(32-i*4.27).toFixed(2)+'"/>'}
  g+='</g>';
  /* labels, per step (≥8px clear of every stroke) */
  g+='<g id="rsL1"><text class="t" x="60" y="196">'+(mob?"INGOT":"INGOT, PURE OR ALLOY")+'</text><text class="t s1" x="60" y="322">'+(mob?"99.999%":"99.5 – 99.999% PURE")+'</text></g>';
  g+='<g id="rsL2"><text class="t" x="410" y="116">'+(mob?"ROLLING":"ROLLING MILL")+'</text><text class="t s1" x="410" y="240">'+(mob?"SHEET":"SHEET AND FOIL")+'</text></g>';
  g+='<g id="rsL3"><text class="t s1" x="'+(mob?420:590)+'" y="'+(mob?306:300)+'">'+(mob?"TARGET":"CUT AND TURNED")+'</text><text class="t" x="'+(mob?420:450)+'" y="'+(mob?506:490)+'">'+(mob?"POLISHED":"TARGET ON BACKING PLATE")+'</text></g>';
  /* step captions */
  g+='<g id="lb1"><text class="a" x="20" y="508">1 · MELT</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="508">2 · ROLL</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="508">3 · FINISH</text></g>';
  return g+'</svg>';
}
function scene(){return rsScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),mill:$("#rsMill",svg),ing:$("#rsIng",svg),sh:$("#rsSh",svg),shp:$("#rsSh path",svg),cut:$("#rsCut",svg),tg:$("#rsTgG",svg),grv:dl(".gD"),
    spk:$$(".spk",svg),L1:$("#rsL1",svg),L2:$("#rsL2",svg),L3:$("#rsL3",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),t0:svg.querySelector("text.t")};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function ease(x){return x<.5?2*x*x:1-Math.pow(-2*x+2,2)/2}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);op(E.t0,b)}
    op(E.mill,b);
    /* step 1: the ingot */
    op(E.L1,b*seg(p,.02,.1)*(1-seg(p,.3,.36)));
    /* step 2: the ingot moves into the nip and is used up as the sheet grows out; the rolls turn */
    var m=ease(seg(p,.36,.62));
    E.ing.setAttribute("transform","translate("+(240+30*m).toFixed(1)+" 252) scale("+(1-.75*m).toFixed(3)+" "+(1-.8*m).toFixed(3)+") translate(-240 -252)");op(E.ing,b*(1-seg(p,.56,.64)));
    op(E.sh,b*seg(p,.36,.42));
    E.shp.setAttribute("d","M330 255H"+(330+382*seg(p,.38,.64)).toFixed(1)+"V265H330Z");
    var rot=360*seg(p,.34,.66);
    E.spk.forEach(function(s){var c=s.getAttribute("data-c"),d=+s.getAttribute("data-d");s.setAttribute("transform","rotate("+(d*rot).toFixed(1)+" "+c+")")});
    op(E.L2,b*seg(p,.42,.5)*(1-seg(p,.64,.68)));
    /* step 3: cut and finished: the target on its backing plate, grooves drawing in */
    op(E.cut,b*seg(p,.68,.74));
    op(E.tg,b*seg(p,.7,.8));
    draw(E.grv,b*seg(p,.76,.92));
    op(E.L3,b*seg(p,.8,.88));
    op(E.l1,b*seg(p,0,.06)*(1-seg(p,.33,.38)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.64,.68)));op(E.l3,b*seg(p,.7,.78));
  };
}
