/* the story scene (BL/BY/DB): ONE tumour section, drawn once and kept on screen for all three steps.
   Step 1 (slide): the outline of an H&E-stained section of a resected colorectal tumour, glands inside, as scanned.
   Step 2 (tiles): the whole section is read tile by tile; each tile takes a tint by its score as the scan passes.
   Step 3 (risk): the section moves left and its result resolves into one of three distinct risk groups: low, intermediate, high.
   Source: domorediagnostics.com/products (Histotype Px Colorectal: deep neural network on routine H&E slides, 90 million tiles,
   low / intermediate / high risk). Schematic. Driven by the scrubbed story progress. */
var SX={cx:250,cy:236,rx:178,ry:136,t:20};
function sxRand(i){var x=Math.sin(i*127.1+311.7)*43758.5453;return x-Math.floor(x)}
function sxR(a){return 1+.09*Math.sin(a*2+.6)+.06*Math.sin(a*3+2.1)+.035*Math.sin(a*5+.4)+.02*Math.sin(a*8+1.3)}
function sxIn(x,y){var dx=(x-SX.cx)/SX.rx,dy=(y-SX.cy)/SX.ry,a=Math.atan2(dy,dx);return Math.hypot(dx,dy)<sxR(a)*.97}
function scene(){
  var mob=MOBILE(),f=function(n){return (+n).toFixed(1)},g='',i,k,x,y;SX.cx=mob?345:360;SX.tx=mob?-190:-200;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 720 470" aria-hidden="true">';
  g+='<g id="sec">';
  /* the section outline */
  var d='';for(k=0;k<=96;k++){var a=k/96*Math.PI*2,r=sxR(a);d+=(k?'L':'M')+f(SX.cx+Math.cos(a)*SX.rx*r)+' '+f(SX.cy+Math.sin(a)*SX.ry*r)}
  g+='<defs><clipPath id="sxclip"><path d="'+d+'Z"/></clipPath></defs><path class="sfill" d="'+d+'Z"/>';
  /* glands: small irregular rings inside the section */
  var gl=[];for(i=0;gl.length<34&&i<3000;i++){x=SX.cx+(sxRand(i+3)*2-1)*SX.rx;y=SX.cy+(sxRand(i+907)*2-1)*SX.ry;
    if(!sxIn(x,y)||!sxIn(x+16,y)||!sxIn(x-16,y)||!sxIn(x,y+12)||!sxIn(x,y-12))continue;if(gl.some(function(q){return Math.hypot(q[0]-x,q[1]-y)<30}))continue;gl.push([x,y])}
  gl.forEach(function(q,j){var rx=7+sxRand(j+51)*6,ry=4+sxRand(j+77)*4,rot=sxRand(j+99)*180;
    g+='<ellipse class="gld sD" cx="'+f(q[0])+'" cy="'+f(q[1])+'" rx="'+f(rx)+'" ry="'+f(ry)+'" transform="rotate('+f(rot)+' '+f(q[0])+' '+f(q[1])+')"/>'});
  /* tiles: the grid the network reads, only where there is tissue */
  g+='<g clip-path="url(#sxclip)"><g id="tiles">';var n=0;
  for(y=SX.cy-SX.ry*1.2;y<SX.cy+SX.ry*1.2;y+=SX.t)for(x=SX.cx-SX.rx*1.2;x<SX.cx+SX.rx*1.2;x+=SX.t){
    if(!sxIn(x+SX.t/2,y+SX.t/2)&&!sxIn(x,y)&&!sxIn(x+SX.t,y)&&!sxIn(x,y+SX.t)&&!sxIn(x+SX.t,y+SX.t))continue;var s=sxRand(n*3+17),c=s<.55?'t0':s<.85?'t1':'t2';
    g+='<rect class="tl '+c+'" x="'+f(x+1)+'" y="'+f(y+1)+'" width="'+(SX.t-2)+'" height="'+(SX.t-2)+'"/>';n++}
  g+='</g>';
  /* the scan line sweeping down the section */
  g+='<path id="scan" class="scan" d="M'+f(SX.cx-SX.rx*1.3)+' 0H'+f(SX.cx+SX.rx*1.3)+'"/></g><path class="sedge sD" d="'+d+'Z"/>';
  g+='<text class="t" id="cap" x="'+(mob?SX.cx:SX.cx-SX.rx)+'" y="'+(SX.cy+SX.ry+52)+'"'+(mob?' text-anchor="middle"':'')+'>'+(mob?'H&amp;E SECTION':'H&amp;E-STAINED SECTION, SCANNED')+'</text>';
  g+='</g>';
  /* step 3: three risk groups, each in its own plain box; connectors run from the section to each box edge */
  var BX=mob?430:470,BW=mob?280:240,BH=mob?72:62,BY=[112,206,300];
  g+='<g id="risk">';
  BY.forEach(function(by){g+='<path class="cn" d="M'+f(SX.cx+SX.tx+SX.rx*.7*1.08+8)+' '+SX.cy+'C'+(BX-80)+' '+SX.cy+' '+(BX-70)+' '+(by+BH/2)+' '+BX+' '+(by+BH/2)+'"/>'});
  var LB=mob?['LOW','INTERMEDIATE','HIGH']:['LOW RISK','INTERMEDIATE RISK','HIGH RISK'],CL=['r0','r1','r2'];
  BY.forEach(function(by,j){g+='<g class="rb" id="rb'+j+'"><rect class="bx '+CL[j]+'" x="'+BX+'" y="'+by+'" width="'+BW+'" height="'+BH+'"/><rect class="sw '+CL[j]+'" x="'+BX+'" y="'+by+'" width="5" height="'+BH+'"/>'+
    '<text class="a '+CL[j]+'" x="'+(BX+24)+'" y="'+(by+BH/2+(mob?10:5))+'">'+LB[j]+'</text></g>'});
  g+='</g>';
  /* labels, one per step, in the clear band above the section */
  var lx=mob?360:SX.cx-SX.rx,ly=mob?44:52,an=mob?' text-anchor="middle"':'';
  g+='<g id="lb0"><text class="a l0" x="'+lx+'" y="'+ly+'"'+an+'>'+(mob?'A ROUTINE SLIDE':'A ROUTINE H&amp;E SLIDE')+'</text></g>';
  g+='<g id="lb1"><text class="a l1" x="'+lx+'" y="'+ly+'"'+an+'>'+(mob?'READ TILE BY TILE':'DEEP NEURAL NETWORK · TILE BY TILE')+'</text></g>';
  g+='<g id="lb2"><text class="a l2" x="'+lx+'" y="'+ly+'"'+an+'>'+(mob?'ONE OF THREE GROUPS':'ONE OF THREE DISTINCT RISK GROUPS')+'</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#sec .sD"),sfill:$("#sec .sfill",svg),cap:$("#cap",svg),sec:$("#sec",svg),tiles:$$("#tiles .tl",svg),scan:$("#scan",svg),
    cn:dl("#risk .cn"),rb:$$("#risk .rb",svg),risk:$("#risk",svg),l0:$("#lb0",svg),l1:$("#lb1",svg),l2:$("#lb2",svg)};
  var y0=SX.cy-SX.ry*1.12,y1=SX.cy+SX.ry*1.12,lastB=-1;
  E.tiles.forEach(function(t){t._y=+t.getAttribute("y")});
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);op(E.sfill,b)}
    var s2=seg(p,.36,.62),s3=seg(p,.7,.92),mv=seg(p,.66,.8);
    /* step 2: the scan passes down the section; tiles behind it take their tint */
    var sy=y0+(y1-y0)*s2;E.scan.setAttribute("transform","translate(0 "+sy.toFixed(1)+")");op(E.scan,b*(s2>0&&s2<1?1:0));
    E.tiles.forEach(function(t){var v=Math.max(0,Math.min(1,(sy-t._y)/30));t.style.opacity=(b*v).toFixed(3)});
    /* step 3: the section moves left and shrinks; the connectors draw out to the three groups, which appear in turn */
    var sc=1-.3*mv,tx=SX.tx*mv;E.sec.setAttribute("transform","translate("+(SX.cx*(1-sc)+tx).toFixed(1)+" "+(SX.cy*(1-sc)).toFixed(1)+") scale("+sc.toFixed(3)+")");
    op(E.cap,b*(1-mv));
    op(E.risk,b*Math.min(1,s3*6));draw(E.cn,seg(s3,0,.55));
    E.rb.forEach(function(r,j){op(r,seg(s3,.3+j*.18,.5+j*.18))});
    op(E.l0,b*(1-seg(p,.3,.38)));op(E.l1,b*seg(p,.38,.44)*(1-seg(p,.64,.7)));op(E.l2,b*seg(p,.72,.8));
  };
}
