/* The story scene (BL/BY/DB/DR): how the DryNeb works (nobhilltherapeutics.com, Technology; NIH RePORTER 5R44CA281538
   abstract), as ONE continuous fine-line scene: the airway tree seen from the front, trachea with its cartilage rings,
   bronchi branching four times to clusters of alveoli, inside a faint outline of the two lungs.
   Step 1 (disperse): a cloud of fine powder forms above the trachea, independent of the breath.
   Step 2 (inhale): with a calm tidal breath the particles flow down the trachea and out along the branches.
   Step 3 (deliver): they settle in the alveolar clusters of the lower airways, which light in the logo lime.
   Every element is driven by the scrubbed story progress. Labels live in clear bands (top-left caption, bottom labels). */
var SCW=760,SCH=520;
var TREE=(function(){
  var segs=[],tips=[];
  function rnd(i){var x=Math.sin(i*12.9898+78.233)*43758.5453;return x-Math.floor(x)}
  var LEN=[96,76,56,40],WID=[15,10.5,7.5,5.2],SPR=[28,24,22],SX=.92;
  function grow(x,y,th,d,par,id){
    var L=LEN[d]*(0.94+rnd(id)*.12),r=th*Math.PI/180,x1=x+Math.sin(r)*L*SX,y1=y+Math.cos(r)*L;
    var s={x0:x,y0:y,x1:x1,y1:y1,w:WID[d],d:d,par:par};segs.push(s);var k=segs.length-1;
    if(d===3){tips.push({x:x1,y:y1,th:th,seg:k});return}
    var sp=SPR[d]*(0.9+rnd(id+7)*.2),bias=th*.25;
    grow(x1,y1,Math.max(-75,Math.min(75,th-sp-bias)),d+1,k,id*2+1);
    grow(x1,y1,Math.max(-75,Math.min(75,th+sp-bias)),d+1,k,id*2+2);
  }
  var TX=380,TY0=68,TY1=166;
  grow(TX,TY1,-44,0,-1,1);grow(TX,TY1,38,0,-1,2);
  return {segs:segs,tips:tips,TX:TX,TY0:TY0,TY1:TY1};
})();
function trPath(k){  /* the route from the trachea top to the end of segment k */
  var pts=[],s=TREE.segs[k];while(k>=0){s=TREE.segs[k];pts.unshift([s.x1,s.y1]);k=s.par}
  pts.unshift([TREE.TX,TREE.TY1]);pts.unshift([TREE.TX,TREE.TY0-6]);return pts}
function along(pts,u){var L=0,i,ls=[];for(i=1;i<pts.length;i++){var l=Math.hypot(pts[i][0]-pts[i-1][0],pts[i][1]-pts[i-1][1]);ls.push(l);L+=l}
  var t=u*L;for(i=0;i<ls.length;i++){if(t<=ls[i]||i===ls.length-1){var f=ls[i]?Math.min(1,t/ls[i]):0;return [pts[i][0]+(pts[i+1][0]-pts[i][0])*f,pts[i][1]+(pts[i+1][1]-pts[i][1])*f]}t-=ls[i]}return pts[pts.length-1]}
function lungScene(o){
  var g='',i,T=TREE;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  /* ---- the lungs, as a faint outline ---- */
  g+='<g id="lgBase">';
  g+='<path class="lo sD" d="M350 126C300 128 228 170 178 240C136 300 116 380 120 432C124 468 220 472 300 460"/>';
  g+='<path class="lo sD" d="M410 126C460 128 532 170 582 240C624 300 644 380 640 432C636 468 540 472 460 460"/>';
  /* ---- airway tree: an outer stroke and an inner ink stroke make one clean outline of the union ---- */
  var tr='M'+T.TX+' '+T.TY0+'V'+T.TY1;
  var segD=T.segs.map(function(s){return 'M'+s.x0.toFixed(1)+' '+s.y0.toFixed(1)+'L'+s.x1.toFixed(1)+' '+s.y1.toFixed(1)});
  g+='<g class="aw o"><path class="sD" style="stroke-width:'+(26+2.4)+'px" d="'+tr+'"/>'+T.segs.map(function(s,k){return '<path class="sD" style="stroke-width:'+(s.w+2.4).toFixed(1)+'px" d="'+segD[k]+'"/>'}).join("")+'</g>';
  g+='<g class="aw i"><path class="sD" style="stroke-width:26px" d="'+tr+'"/>'+T.segs.map(function(s,k){return '<path class="sD" style="stroke-width:'+s.w.toFixed(1)+'px" d="'+segD[k]+'"/>'}).join("")+'</g>';
  /* cartilage rings on the trachea */
  for(i=0;i<6;i++){var ry=T.TY0+10+i*14;g+='<path class="rg sD" d="M'+(T.TX-11)+' '+ry+'Q'+T.TX+' '+(ry+5)+' '+(T.TX+11)+' '+ry+'"/>'}
  g+='</g>';
  /* ---- alveolar clusters at every tip ---- */
  g+='<g id="lgAlv">';
  T.tips.forEach(function(t,k){var r=t.th*Math.PI/180,cx=t.x+Math.sin(r)*9,cy=t.y+Math.cos(r)*9,j;
    g+='<g class="alv" data-k="'+k+'">';
    for(j=0;j<6;j++){var a=r+(j-2.5)*.62,ax=cx+Math.sin(a)*7.5,ay=cy+Math.cos(a)*7.5;g+='<circle class="sD" cx="'+ax.toFixed(1)+'" cy="'+ay.toFixed(1)+'" r="5.4"/>'}
    g+='<circle class="glow" cx="'+cx.toFixed(1)+'" cy="'+cy.toFixed(1)+'" r="15"/></g>'});
  g+='</g>';
  /* ---- powder particles ---- */
  g+='<g id="lgP">';
  for(i=0;i<64;i++)g+='<circle class="pd" r="'+(1.7+(i%3)*.5)+'"/>';
  g+='</g>';
  /* ---- breath: a calm tidal wave drawn across the top band during step 2 ---- */
  g+='<path id="lgBr" class="br" d=""/>';
  /* ---- caption and step labels, in clear bands ---- */
  g+='<text class="t" id="lgCap" x="20" y="34">THE AIRWAYS · FRONT VIEW</text>';
  g+='<g id="lb1"><text class="a" x="20" y="506">POWDER DISPERSED · BEFORE THE BREATH</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="506">RELEASED ON INHALATION · TIDAL BREATHING</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="506">DELIVERED TO THE LOWER AIRWAYS</text></g>';
  return g+'</svg>';
}
function scene(){return lungScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#lgBase .sD"),alv:dl("#lgAlv .sD"),grp:$$("#lgAlv .alv",svg),glow:$$("#lgAlv .glow",svg),pd:$$(".pd",svg),
    br:$("#lgBr",svg),cap:$("#lgCap",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var T=TREE,NT=T.tips.length;
  var P=E.pd.map(function(el,i){var tip=i%NT,pts=trPath(T.tips[tip].seg),t=T.tips[tip],r=t.th*Math.PI/180,a=r+((i*7)%6-2.5)*.62;
    pts.push([t.x+Math.sin(r)*9+Math.sin(a)*7.5,t.y+Math.cos(r)*9+Math.cos(a)*7.5]);
    var h=Math.sin(i*91.7)*.5+.5,h2=Math.sin(i*37.3)*.5+.5;
    return {el:el,pts:pts,cx:T.TX+(h-.5)*170,cy:42+(h2-.5)*40,ph:i*.7,del:(i%16)/16*.35}});
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);draw(E.alv,b);op(E.cap,b)}
    var disp=seg(p,.04,.28),inh=seg(p,.36,.7),dep=seg(p,.66,.9);
    /* particles: a soft cloud above the trachea, then carried down the airways, then settled in the alveoli */
    P.forEach(function(q){var u=Math.max(0,Math.min(1,(inh-q.del)/(1-q.del))),x,y;
      var sw=Math.sin(p*18+q.ph)*4*(1-u);
      var gx=T.TX+(q.cx-T.TX)*disp+sw,gy=T.TY0-8+(q.cy-(T.TY0-8))*disp+Math.cos(p*14+q.ph)*3*(1-u);
      if(u<=0){x=gx;y=gy}else{var a=along(q.pts,u*u*(3-2*u));var m=Math.min(1,u*4);x=gx+(a[0]-gx)*m;y=gy+(a[1]-gy)*m}
      q.el.setAttribute("cx",x.toFixed(1));q.el.setAttribute("cy",y.toFixed(1));op(q.el,b*disp*(1-.35*dep))});
    /* the alveoli warm to the logo lime as the powder arrives */
    E.glow.forEach(function(el,k){op(el,b*Math.max(0,Math.min(1,dep*1.4-(k%8)*.05))*.9)});
    E.grp.forEach(function(el,k){el.classList.toggle("on",dep>.35)});
    /* a calm tidal breath across the top band during step 2 */
    var bw=b*seg(p,.34,.42)*(1-seg(p,.66,.74)),d="",x;
    for(x=540;x<=740;x+=5){var yy=34+Math.sin((x-540)/200*Math.PI*2-p*16)*8;d+=(x===540?"M":"L")+x+" "+yy.toFixed(1)}
    E.br.setAttribute("d",d);op(E.br,bw*.8);
    op(E.l1,b*seg(p,.12,.2)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.8,.88));
  };
}
