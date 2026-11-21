/* the story scene (BL/BY/DB/CK): how Phlex works, drawn in fine line. ONE front view of the chest stays on screen for all three steps:
   the airway with its breathing tube, both lungs, the two phrenic nerves running down from the neck, and the diaphragm dome beneath.
   Step 1 the ventilator pushes air down the tube under positive pressure; the diaphragm stays passive.
   Step 2 Phlex stimulates the phrenic nerves from inside the trachea: the stimulation site on the tube glows and the signal runs
   down both nerves to the diaphragm.
   Step 3 the diaphragm contracts and moves down, the chest cavity grows and the lung bases follow: negative-pressure assist.
   Sources: xn-health.com (home and About), NSF award 2432754. Schematic; proportions are illustrative. Driven by the scrubbed story progress. */
var CH={cx:400,top:40,car:236,dTop:372,dDown:58,W:226};
function domeY(u,dd){/* u in [-1,1] across the dome; a two-cupola diaphragm with the central tendon between */
  var a=Math.min(1,Math.abs(u)),k=1-.42*dd/CH.dDown;return CH.dTop+dd+84-110*k*Math.pow(Math.max(0,Math.sin(Math.PI*(.12+.88*a))),.75)}
function lungPath(side,dd){
  var f=function(n){return (+n).toFixed(1)},s=side,cx=CH.cx,W=CH.W,apx=cx+s*92,apy=150,ox=cx+s*212,ix=cx+s*34,i,p=[];
  var ub=.9,ui=.2,yb=domeY(ub,dd)-3,yi=domeY(ui,dd)-3;
  var d='M'+f(ix)+' 250C'+f(ix-s*4)+' 200 '+f(apx-s*30)+' '+apy+' '+f(apx)+' '+apy+
    'C'+f(apx+s*70)+' '+apy+' '+f(ox)+' 210 '+f(ox)+' '+f(300+dd*.3)+
    'C'+f(ox)+' '+f(yb-60)+' '+f(cx+s*W*ub+s*4)+' '+f(yb-14)+' '+f(cx+s*W*ub)+' '+f(yb);
  for(i=1;i<=24;i++){var u=ub+(ui-ub)*i/24;d+='L'+f(cx+s*W*u)+' '+f(domeY(u,dd)-3)}
  d+='C'+f(ix+s*2)+' '+f(yi-30)+' '+f(ix)+' 320 '+f(ix)+' 250Z';
  return d;
}
function diaPath(dd){
  var f=function(n){return (+n).toFixed(1)},cx=CH.cx,W=CH.W,d='',i;
  for(i=0;i<=64;i++){var u=-1+2*i/64;d+=(i?'L':'M')+f(cx+W*u)+' '+f(domeY(u,dd))}
  return d;
}
function nervePath(side,dd){
  var f=function(n){return (+n).toFixed(1)},s=side,cx=CH.cx,b=domeY(.3,dd)-2;
  return 'M'+f(cx+s*44)+' 44C'+f(cx+s*40)+' 110 '+f(cx+s*30)+' 150 '+f(cx+s*28)+' 200C'+f(cx+s*26)+' 260 '+f(cx+s*44)+' 300 '+f(cx+s*58)+' '+f(b-2)+'C'+f(cx+s*66)+' '+f(b+6)+' '+f(cx+s*90)+' '+f(b+4)+' '+f(cx+s*110)+' '+f(b+2);
}
function scene(){
  var mob=MOBILE(),cx=CH.cx,g='';
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<defs><radialGradient id="xglow" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#74c0b3" stop-opacity=".5"/><stop offset="1" stop-color="#74c0b3" stop-opacity="0"/></radialGradient>'+
     '<radialGradient id="xbg" cx=".5" cy=".55" r=".5"><stop offset="0" stop-color="#8c73ae" stop-opacity=".12"/><stop offset="1" stop-color="#8c73ae" stop-opacity="0"/></radialGradient></defs>';
  g+='<g id="xBase"><ellipse class="pg" cx="'+cx+'" cy="300" rx="330" ry="260" fill="url(#xbg)"/>';
  /* body outline: neck and shoulders, and the ribs in fine hairline */
  g+='<path class="bod sD" d="M'+(cx-46)+' 0V58C'+(cx-46)+' 92 '+(cx-120)+' 104 '+(cx-230)+' 128C'+(cx-286)+' 140 '+(cx-300)+' 190 '+(cx-296)+' 260"/>';
  g+='<path class="bod sD" d="M'+(cx+46)+' 0V58C'+(cx+46)+' 92 '+(cx+120)+' 104 '+(cx+230)+' 128C'+(cx+286)+' 140 '+(cx+300)+' 190 '+(cx+296)+' 260"/>';
  for(var i=0;i<6;i++){var y=150+i*44,wd=150+i*16;g+='<path class="rib sD" d="M'+(cx-24)+' '+(y-10)+'C'+(cx-wd*.6)+' '+(y-30)+' '+(cx-wd-40)+' '+(y-6)+' '+(cx-wd-56)+' '+(y+34)+'"/><path class="rib sD" d="M'+(cx+24)+' '+(y-10)+'C'+(cx+wd*.6)+' '+(y-30)+' '+(cx+wd+40)+' '+(y-6)+' '+(cx+wd+56)+' '+(y+34)+'"/>'}
  /* trachea with cartilage rings, carina and main bronchi */
  g+='<path class="tra sD" d="M'+(cx-17)+' 20V'+(CH.car-6)+'C'+(cx-20)+' '+(CH.car+12)+' '+(cx-48)+' '+(CH.car+20)+' '+(cx-70)+' '+(CH.car+44)+'"/><path class="tra sD" d="M'+(cx+17)+' 20V'+(CH.car-6)+'C'+(cx+20)+' '+(CH.car+12)+' '+(cx+48)+' '+(CH.car+20)+' '+(cx+70)+' '+(CH.car+44)+'"/>';
  g+='<path class="tra sD" d="M'+(cx-46)+' '+(CH.car+46)+'C'+(cx-26)+' '+(CH.car+26)+' '+(cx-6)+' '+(CH.car+18)+' '+cx+' '+(CH.car+6)+'C'+(cx+6)+' '+(CH.car+18)+' '+(cx+26)+' '+(CH.car+26)+' '+(cx+46)+' '+(CH.car+46)+'"/>';
  for(i=0;i<9;i++){var ry=40+i*20;g+='<path class="ring sD" d="M'+(cx-16)+' '+ry+'Q'+cx+' '+(ry+6)+' '+(cx+16)+' '+ry+'"/>'}
  /* the lungs and the diaphragm (redrawn each frame in step 3) */
  g+='<path class="lung" id="lgR" d="'+lungPath(-1,0)+'"/><path class="lung" id="lgL" d="'+lungPath(1,0)+'"/>';
  g+='<path class="dia" id="dia" d="'+diaPath(0)+'"/>';
  /* the breathing tube in the trachea, its cuff, and the Phlex stimulation site */
  g+='<path class="ett sD" d="M'+(cx-7)+' -10V196M'+(cx+7)+' -10V196"/><ellipse class="cuff sD" cx="'+cx+'" cy="180" rx="15" ry="9"/>';
  g+='<g id="site"><circle cx="'+cx+'" cy="120" r="46" fill="url(#xglow)" class="sg"/><rect class="elec" x="'+(cx-11)+'" y="110" width="22" height="20"/></g>';
  g+='<text class="t" x="'+cx+'" y="548" text-anchor="middle">'+(mob?'FRONT VIEW':'THE CHEST, FRONT VIEW')+'</text></g>';

  /* step 1: air pushed down the tube; a passive diaphragm */
  g+='<g id="s1">';
  [[0],[1],[2]].forEach(function(q){g+='<path class="air" data-k="'+q[0]+'" d="M'+(cx-5)+' 0L'+cx+' 9L'+(cx+5)+' 0"/>'});
  g+='<path class="ldr" d="M'+(cx-24)+' 60H'+(mob?190:150)+'"/><text class="a" x="'+(mob?190:150)+'" y="48">'+(mob?'PRESSURE':'POSITIVE PRESSURE IN')+'</text>';
  g+=mob?'<text class="m" x="800" y="556" text-anchor="end">PASSIVE</text></g>':'<path class="ldr" d="M'+(cx+170)+' 432L'+(cx+212)+' 508H'+(cx+232)+'"/><text class="m" x="'+(cx+240)+'" y="512">DIAPHRAGM AT REST</text></g>';

  /* step 2: the signal along both phrenic nerves */
  g+='<g id="s2"><path class="nv sD2" id="nvR" d="'+nervePath(-1,0)+'"/><path class="nv sD2" id="nvL" d="'+nervePath(1,0)+'"/>';
  g+='<path class="pulse" id="puR" d="'+nervePath(-1,0)+'"/><path class="pulse" id="puL" d="'+nervePath(1,0)+'"/>';
  g+='<path class="ldr" d="M'+(cx+12)+' 120L'+(cx+52)+' 80H790"/><text class="a" x="790" y="68" text-anchor="end">'+(mob?'STIMULUS':'TRANSTRACHEAL STIMULUS')+'</text>';
  g+='<path class="ldr" d="M'+(cx-43)+' 80H10"/><text class="a" x="10" y="68">'+(mob?'NERVES':'PHRENIC NERVES')+'</text></g>';

  /* step 3: the diaphragm contracts and moves down */
  g+='<g id="s3"><path class="dn" d="M'+(cx-98)+' 300v40M'+(cx-104)+' 332l6 8 6-8M'+(cx+98)+' 300v40M'+(cx+92)+' 332l6 8 6-8"/>';
  g+=mob?'<text class="a" x="800" y="556" text-anchor="end">CONTRACTS</text><text class="a" x="0" y="556">MORE VOLUME</text></g>':
    '<text class="a" x="'+(cx+240)+'" y="540">DIAPHRAGM CONTRACTS</text><text class="a" x="0" y="526">MORE CHEST VOLUME</text><text class="m" x="0" y="548">LOWER INFLATION PRESSURE</text></g>';
  g+='</svg>';
  return g;
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#xBase .sD"),fade:$$("#xBase text, #xBase .pg",svg),lg:[$("#lgR",svg),$("#lgL",svg)],dia:$("#dia",svg),dyn:$$("#lgR,#lgL,#dia",svg),
    site:$("#site",svg),s1:$("#s1",svg),air:$$("#s1 .air",svg),s2:$("#s2",svg),nv:dl("#s2 .sD2"),pu:[$("#puR",svg),$("#puL",svg)],nvp:[$("#nvR",svg),$("#nvL",svg)],s3:$("#s3",svg)};
  var lastB=-1,lastD=-1,PL=E.pu.map(function(p){return p.getTotalLength()});
  E.pu.forEach(function(p,k){p.style.strokeDasharray="26 "+(PL[k]+40)});
  function draw(list,v){v=Math.max(0,Math.min(1,v));list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)});E.dyn.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    /* step 1: air pulses down the tube */
    var o1=b*(1-seg(p,.3,.38));op(E.s1,o1);
    E.air.forEach(function(el,k){var q=((p*9+k/3)%1);el.setAttribute("transform","translate(0 "+(20+q*150).toFixed(1)+")");el.style.opacity=(Math.sin(q*Math.PI)).toFixed(3)});
    /* step 2: the stimulation site lights, the signal runs down both nerves */
    var s2=seg(p,.34,.44);op(E.s2,b*s2*(1-.55*seg(p,.66,.74)));draw(E.nv,seg(p,.36,.5));
    op(E.site,b*(.25+.75*seg(p,.34,.42)));
    var pq=seg(p,.42,.64);E.pu.forEach(function(el,k){el.style.strokeDashoffset=(-(PL[k]+14)*((pq*2.2)%1)+26).toFixed(1);el.style.opacity=pq>0&&pq<1?"1":"0"});
    /* step 3: the diaphragm contracts and moves down; the lung bases and nerve ends follow */
    var dd=Math.round(CH.dDown*seg(p,.7,.88)*10)/10;
    if(dd!==lastD){lastD=dd;E.lg[0].setAttribute("d",lungPath(-1,dd));E.lg[1].setAttribute("d",lungPath(1,dd));E.dia.setAttribute("d",diaPath(dd));
      E.nvp[0].setAttribute("d",nervePath(-1,dd));E.nvp[1].setAttribute("d",nervePath(1,dd));E.pu[0].setAttribute("d",nervePath(-1,dd));E.pu[1].setAttribute("d",nervePath(1,dd))}
    E.dia.classList.toggle("on",seg(p,.68,.72)>.5);
    op(E.s3,b*seg(p,.72,.82));
  };
}
