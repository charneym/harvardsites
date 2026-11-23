/* the story scene (BL/BY/DB): ONE pancreatic islet in cross-section, drawn once and kept on screen for all four steps:
   a core of insulin-producing beta-cells inside a mantle of alpha-cells, as a tissue of shared membranes.
   Start (type 2 diabetes): the islet is distorted, beta-cells are lost (empty outlines) and the survivors glow, overworked.
   Step 1 (rest): DBL peptides arrive and dock at receptors on the beta-cell surface; the overworked glow calms.
   Step 2 (function): insulin granules fill the rested beta-cells.
   Step 3 (mass): the lost beta-cells are replaced, drawn back in.
   Step 4 (structure): the islet returns to its clearly defined, circular, pre-diabetic shape.
   Source: diabetalabs.com (Our Solution; Beta-Cell Health). Schematic. Driven by the scrubbed story progress. */
var IS={cx:350,cy:262,R:176,hx:19};
function isRand(i){var x=Math.sin(i*127.1+311.7)*43758.5453;return x-Math.floor(x)}
function isWarp(x,y,k){var dx=x-IS.cx,dy=y-IS.cy,a=Math.atan2(dy,dx),r=Math.hypot(dx,dy)/IS.R;
  var f=1+k*(.13*Math.sin(2*a+.6)+.08*Math.sin(3*a+2.1)-.06*Math.cos(5*a+.4))*Math.pow(Math.min(r,1.15),1.4);
  var sh=k*10*Math.sin(r*3.2+a);return [IS.cx+dx*f+Math.cos(a+1.57)*sh*r,IS.cy+dy*f*.94+Math.sin(a+1.57)*sh*r]}
var IC=null;
function isCells(){
  if(IC)return IC;var cells=[],h=IS.hx,w=Math.sqrt(3)*h,q,r,i=0;
  var vj={};function V(x,y){var k=Math.round(x*2)+","+Math.round(y*2);if(!vj[k]){var s=Object.keys(vj).length;vj[k]=[x+(isRand(s+7)-.5)*h*.42,y+(isRand(s+911)-.5)*h*.42]}return vj[k]}
  for(r=-12;r<=12;r++)for(q=-12;q<=12;q++){var x=IS.cx+w*(q+r/2),y=IS.cy+1.5*h*r,d=Math.hypot(x-IS.cx,y-IS.cy);if(d>IS.R-h*.6)continue;
    var vs=[];for(var k=0;k<6;k++){var a=Math.PI/180*(60*k+30);vs.push(V(x+h*Math.cos(a),y+h*Math.sin(a)))}
    var alpha=d>IS.R-h*2.6,lost=!alpha&&isRand(i+51)<.3;cells.push({x:x,y:y,v:vs,alpha:alpha,lost:lost,i:i});i++}
  IC=cells;return cells}
function isPath(c,k){var f=function(n){return (+n).toFixed(1)};return c.v.map(function(p,j){var w=isWarp(p[0],p[1],k);return (j?'L':'M')+f(w[0])+' '+f(w[1])}).join('')+'Z'}
function isRim(k){var f=function(n){return (+n).toFixed(1)},d='',n=96;for(var j=0;j<=n;j++){var a=j/n*Math.PI*2,w=isWarp(IS.cx+Math.cos(a)*(IS.R+8),IS.cy+Math.sin(a)*(IS.R+8),k);d+=(j?'L':'M')+f(w[0])+' '+f(w[1])}return d+'Z'}
function scene(){
  var mob=MOBILE(),f=function(n){return (+n).toFixed(1)},g='',cells=isCells(),K0=1;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'150 22 400 470':'20 10 660 500')+'" aria-hidden="true">';
  g+='<defs><radialGradient id="isHot" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#e98b62" stop-opacity=".55"/><stop offset="1" stop-color="#e98b62" stop-opacity="0"/></radialGradient>'+
     '<radialGradient id="isGlow" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#2098a1" stop-opacity=".16"/><stop offset="1" stop-color="#2098a1" stop-opacity="0"/></radialGradient></defs>';
  g+='<g id="scBase"><circle cx="'+IS.cx+'" cy="'+IS.cy+'" r="'+(IS.R+40)+'" fill="url(#isGlow)" stroke="none"/>';
  g+='<path class="rim sD" id="isRim" d="'+isRim(K0)+'"/>';
  cells.forEach(function(c){g+='<path class="cl '+(c.alpha?'al':c.lost?'lo':'be')+'" data-i="'+c.i+'" d="'+isPath(c,K0)+'"/>'});
  g+='</g>';
  /* overworked glow inside the surviving beta-cells */
  g+='<g id="hot">';cells.forEach(function(c){if(c.alpha||c.lost)return;g+='<circle class="ht" data-i="'+c.i+'" r="'+(IS.hx*.95)+'" cx="'+c.x+'" cy="'+c.y+'" fill="url(#isHot)"/>'});g+='</g>';
  /* nuclei */
  g+='<g id="nuc">';cells.forEach(function(c){g+='<circle class="nu '+(c.alpha?'al':c.lost?'lo':'be')+'" data-i="'+c.i+'" r="'+(c.alpha?3.4:3.8)+'" cx="'+c.x+'" cy="'+c.y+'"/>'});g+='</g>';
  /* step 2: insulin granules in the beta-cells */
  g+='<g id="gran">';cells.forEach(function(c){if(c.alpha)return;for(var j=0;j<4;j++){var a=isRand(c.i*9+j)*6.28,rr=7+isRand(c.i*13+j)*5;
    g+='<circle class="gr'+(c.lost?' lo':'')+'" data-i="'+c.i+'" data-o="'+f(Math.cos(a)*rr)+','+f(Math.sin(a)*rr)+'" r="1.9" cx="'+f(c.x+Math.cos(a)*rr)+'" cy="'+f(c.y+Math.sin(a)*rr)+'"/>'}});g+='</g>';
  /* step 1: peptides docking on beta-cell membranes (one per surviving beta-cell, on a cell edge) */
  g+='<g id="pep">';var np=0;cells.forEach(function(c){if(c.alpha||c.lost||isRand(c.i+333)<.35)return;var e=Math.floor(isRand(c.i+77)*6),a=c.v[e],b=c.v[(e+1)%6];
    var mx=(a[0]+b[0])/2,my=(a[1]+b[1])/2,ang=Math.atan2(my-IS.cy,mx-IS.cx)+(isRand(c.i+5)-.5)*1.6,sx=IS.cx+Math.cos(ang)*(IS.R+120),sy=IS.cy+Math.sin(ang)*(IS.R+90);
    g+='<g class="pp" data-i="'+c.i+'" data-e="'+e+'" data-s="'+f(sx)+','+f(sy)+'" data-k="'+np+'"><path class="pz" d="M-6 0q1.5-3.4 3 0t3 0 3 0 3 0"/><circle class="pd" r="1.9" cx="6" cy="0"/></g>';np++});
  g+='</g>';
  /* labels, one per step, in the clear band above the islet; a legend below it */
  var ly=mob?48:38,lx=IS.cx,an=' text-anchor="middle"';
  g+='<g id="lb0"><text class="a r" x="'+lx+'" y="'+ly+'"'+an+'>'+(mob?'TYPE 2 DIABETIC ISLET':'TYPE 2 DIABETES · A DISTORTED ISLET')+'</text></g>';
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'"'+an+'>'+(mob?'PEPTIDES DOCK':'PEPTIDES DOCK AT BETA-CELL RECEPTORS')+'</text></g>';
  g+='<g id="lb2"><text class="a w" x="'+lx+'" y="'+ly+'"'+an+'>'+(mob?'INSULIN STORES REFILL':'INSULIN STORES REFILL')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'"'+an+'>'+(mob?'NEW BETA-CELLS':'LOST BETA-CELLS REPLACED')+'</text></g>';
  g+='<g id="lb4"><text class="a" x="'+lx+'" y="'+ly+'"'+an+'>'+(mob?'CIRCULAR ISLET':'A CIRCULAR, PRE-DIABETIC ISLET')+'</text></g>';
  var gy=mob?482:498;
  g+='<g id="lgd"><circle class="lgb" cx="'+(mob?222:224)+'" cy="'+(gy-4)+'" r="4.5"/><text class="t" x="'+(mob?234:236)+'" y="'+gy+'">BETA-CELLS</text>'+
     '<circle class="lga" cx="'+(mob?384:384)+'" cy="'+(gy-4)+'" r="4.5"/><text class="t" x="'+(mob?396:396)+'" y="'+gy+'">ALPHA-CELLS</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var cells=isCells(),byI={};cells.forEach(function(c){byI[c.i]=c});
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={rim:$("#isRim",svg),rimL:0,cl:$$("#scBase .cl",svg),nu:$$("#nuc .nu",svg),ht:$$("#hot .ht",svg),hot:$("#hot",svg),gr:$$("#gran .gr",svg),gran:$("#gran",svg),
    pp:$$("#pep .pp",svg),pep:$("#pep",svg),lgd:$("#lgd",svg),l:[0,1,2,3,4].map(function(k){return $("#lb"+k,svg)})};
  E.pp.forEach(function(d){var s=d.getAttribute("data-s").split(",");d._s=[+s[0],+s[1]];d._c=byI[+d.getAttribute("data-i")];d._e=+d.getAttribute("data-e");d._k=+d.getAttribute("data-k")});
  E.gr.forEach(function(d){var o=d.getAttribute("data-o").split(",");d._o=[+o[0],+o[1]];d._c=byI[+d.getAttribute("data-i")]});
  [E.nu,E.ht].forEach(function(a){a.forEach(function(d){d._c=byI[+d.getAttribute("data-i")]})});
  E.cl.forEach(function(d){d._c=byI[+d.getAttribute("data-i")]});
  var lastK=-1,lastB=-1;
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function C(c,k){return isWarp(c.x,c.y,k)}
  return function(p,b){
    if(!svg.isConnected)return;
    var s1=seg(p,.02,.2),s2=seg(p,.27,.45),s3=seg(p,.52,.7),s4=seg(p,.77,.95),K=1-s4;
    /* base: the islet draws in as the section arrives */
    if(b!==lastB){lastB=b;var L=E.rim.getTotalLength();E.rim.style.strokeDasharray=L+" "+L;E.rim.style.strokeDashoffset=(L*(1-b)).toFixed(1)}
    if(Math.abs(K-lastK)>.001){lastK=K;E.rim.setAttribute("d",isRim(K));var L2=E.rim.getTotalLength();E.rim.style.strokeDasharray=L2+" "+L2;E.rim.style.strokeDashoffset=(L2*(1-b)).toFixed(1);
      E.cl.forEach(function(el){el.setAttribute("d",isPath(el._c,K))});
      E.nu.concat(E.ht).forEach(function(el){var w=C(el._c,K);el.setAttribute("cx",w[0].toFixed(1));el.setAttribute("cy",w[1].toFixed(1))});
      E.gr.forEach(function(el){var w=C(el._c,K);el.setAttribute("cx",(w[0]+el._o[0]).toFixed(1));el.setAttribute("cy",(w[1]+el._o[1]).toFixed(1))})}
    E.cl.forEach(function(el,j){var c=el._c,t=c.alpha?1:c.lost?.22+.78*s3:1;el.style.opacity=(b*Math.min(1,b*1.6-(j%7)*.04+.2)*t).toFixed(3);
      if(c.lost)el.classList.toggle("back",s3>.5)});
    E.nu.forEach(function(el){op(el,b*(el._c.lost?s3:1))});
    /* overworked glow: pulses before treatment, calms as the peptides dock */
    var pulse=.75+.25*Math.sin(p*60);op(E.hot,b*(1-s1)*pulse);
    /* peptides travel in and dock on a cell edge; they fade a little once docked */
    op(E.pep,b*seg(p,.01,.05)*(1-.55*s4));
    E.pp.forEach(function(d){var v=seg(s1,d._k*.012,.6+d._k*.012),c=d._c,a=c.v[d._e],bb=c.v[(d._e+1)%6],
      wa=isWarp(a[0],a[1],K),wb=isWarp(bb[0],bb[1],K),mx=(wa[0]+wb[0])/2,my=(wa[1]+wb[1])/2,cc=C(c,K),ang=Math.atan2(my-cc[1],mx-cc[0]),
      tx=mx+Math.cos(ang)*7,ty=my+Math.sin(ang)*7,x=d._s[0]+(tx-d._s[0])*v,y=d._s[1]+(ty-d._s[1])*v,rot=(ang*180/Math.PI+180)*v+(1-v)*(d._k*37%360);
      d.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+") rotate("+rot.toFixed(1)+")");d.style.opacity=(v<.02?0:1).toFixed(2)});
    /* insulin granules: fill the surviving cells in step 2, the new cells in step 3 */
    op(E.gran,b);E.gr.forEach(function(el,j){el.style.opacity=(el._c.lost?seg(s3,.4,1):seg(s2,(j%9)*.05,.55+(j%9)*.05)).toFixed(3)});
    op(E.lgd,b);
    op(E.l[0],b*(1-seg(p,.02,.07)));op(E.l[1],b*seg(p,.07,.12)*(1-seg(p,.22,.26)));op(E.l[2],b*seg(p,.27,.32)*(1-seg(p,.47,.51)));
    op(E.l[3],b*seg(p,.52,.57)*(1-seg(p,.72,.76)));op(E.l[4],b*seg(p,.8,.86));
  };
}
