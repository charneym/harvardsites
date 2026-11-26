/* The story scene (BL/BY/DB): ONE wheelchair wheel seen from the side, kept on screen for all three steps, drawn in the
   fine-line language of an assembly drawing (delfi.cz > REHA program: ráfky, náboje, kompletní kola, obruče, pláště):
   Step 1 (Ráfek): the rim and the hub are drawn.
   Step 2 (Vypletení): the spokes are laced, crossed, from the hub flange to the rim.
   Step 3 (Obruč): the push rim on its standoffs and the tyre complete the wheel.
   Schematic, not to scale, no measured values. */
var SCW=760,SCH=520,CX=380,CY=262;
function dlCirc(r){return 'M'+(CX+r)+' '+CY+'A'+r+' '+r+' 0 1 1 '+(CX-r)+' '+CY+'A'+r+' '+r+' 0 1 1 '+(CX+r)+' '+CY}
function dlScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?"150 36 460 494":"0 0 "+SCW+" "+SCH)+'" aria-hidden="true">';
  if(!mob)g+='<text class="t" x="20" y="26">KOLO K VOZÍKU, POHLED ZBOKU</text>';
  /* tyre (drawn last, step 3) sits under everything */
  g+='<path id="dlT" class="tyre" d="'+dlCirc(212)+'"/>';
  /* rim: two concentric lines; hub: shell and flange */
  g+='<path class="body sD" d="'+dlCirc(202)+'"/><path class="body sD" d="'+dlCirc(190)+'"/>';
  g+='<path class="body sD" d="'+dlCirc(30)+'"/><path class="body sD" d="'+dlCirc(13)+'"/>';
  g+='<circle class="hubf" cx="'+CX+'" cy="'+CY+'" r="13"/>';
  /* spokes: 24, crossed (leading and trailing alternate), from the flange (r 26) to the rim (r 190) */
  var sp='';
  for(i=0;i<24;i++){var th=Math.PI*2*i/24,lead=(Math.floor(i/2)%2?-1:1),hth=th+lead*0.96;
    var x1=CX+26*Math.cos(hth),y1=CY+26*Math.sin(hth),x2=CX+190*Math.cos(th),y2=CY+190*Math.sin(th);
    sp+='<path class="spk" d="M'+x1.toFixed(1)+' '+y1.toFixed(1)+'L'+x2.toFixed(1)+' '+y2.toFixed(1)+'"/>'}
  g+='<g id="dlS">'+sp+'</g>';
  /* push rim and its six standoffs */
  g+='<path id="dlH" class="hrim" d="'+dlCirc(176)+'"/>';
  var so='';for(i=0;i<6;i++){var a=Math.PI*2*(i+.5)/6;so+='<circle class="so" cx="'+(CX+176*Math.cos(a)).toFixed(1)+'" cy="'+(CY+176*Math.sin(a)).toFixed(1)+'" r="4.2"/>'}
  g+='<g id="dlO">'+so+'</g>';
  /* callouts (desktop only): each leader runs from its point on the wheel to just before the start of its label */
  function co(id,L){return '<g id="'+id+'">'+L.map(function(z){var lx=z[2],ly=z[3];return '<path class="ldr" d="M'+z[0].toFixed(1)+' '+z[1].toFixed(1)+'L'+(lx-12)+' '+(ly-5)+'"/><circle class="dot" cx="'+z[0].toFixed(1)+'" cy="'+z[1].toFixed(1)+'" r="2.6"/><text class="t" x="'+lx+'" y="'+ly+'">'+z[4]+'</text>'}).join('')+'</g>'}
  function P(r,deg){var a=deg*Math.PI/180;return [CX+r*Math.cos(a),CY+r*Math.sin(a)]}
  if(!mob){
    var r1=P(196,-38),h1=P(30,-8),s1=[(CX+26*Math.cos(.96)+CX+190)/2,(CY+26*Math.sin(.96)+CY)/2],o1=P(176,30),t1=P(212,52);
    g+=co('dlL1',[[r1[0],r1[1],640,116,"RÁFEK"],[h1[0],h1[1],640,262,"NÁBOJ"]]);
    g+=co('dlL2',[[s1[0],s1[1],640,262,"PAPRSKY"]]);
    g+=co('dlL3',[[o1[0],o1[1],640,372,"OBRUČ"],[t1[0],t1[1],640,450,"PLÁŠŤ"]]);
  }
  /* step captions */
  var cy=mob?518:506,cx0=mob?168:20;
  g+='<g id="lb1"><text class="a" x="'+cx0+'" y="'+cy+'">1 · RÁFEK</text></g>';
  g+='<g id="lb2"><text class="a" x="'+cx0+'" y="'+cy+'">2 · VYPLETENÍ</text></g>';
  g+='<g id="lb3"><text class="a" x="'+cx0+'" y="'+cy+'">3 · OBRUČ</text></g>';
  return g+'</svg>';
}
function scene(){return dlScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),hubf:$(".hubf",svg),S:dl(".spk"),T:dl("#dlT"),H:dl("#dlH"),O:$("#dlO",svg),
    L1:$("#dlL1",svg),L2:$("#dlL2",svg),L3:$("#dlL3",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),t0:svg.querySelector("text.t")};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);op(E.t0,b);op(E.hubf,b)}
    /* step 1: rim and hub (drawn with the scene), named */
    op(E.L1,b*seg(p,.06,.14)*(1-seg(p,.30,.34)));
    /* step 2: spokes laced one after another, round the wheel */
    var sv=b*seg(p,.36,.58);
    E.S.forEach(function(a,i){var w=Math.min(1,Math.max(0,sv*1.6-i/24*0.6));a[0].style.strokeDashoffset=(a[1]*(1-w)).toFixed(1)});
    op(E.L2,b*seg(p,.42,.50)*(1-seg(p,.63,.67)));
    /* step 3: push rim, standoffs and tyre */
    draw(E.H,b*seg(p,.69,.80));op(E.O,b*seg(p,.76,.82));draw(E.T,b*seg(p,.72,.86));
    op(E.L3,b*seg(p,.82,.9));
    op(E.l1,b*seg(p,0,.06)*(1-seg(p,.33,.38)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.64,.68)));op(E.l3,b*seg(p,.7,.78));
  };
}
