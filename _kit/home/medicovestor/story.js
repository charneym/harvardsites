/* the story scene (BL/BY/DB): ONE tumour cell, drawn once and kept on screen for all three steps (fine-line, the site's language).
   Step 1 (bind): FRα receptors on the tumour cell membrane; three ADoBind dimers (two IgG1 "Y"s joined at their Fc tips, as
   Medicovestor draws its backbone) arrive and dock, one Y on each receptor, so more antibody binds per antigen.
   Step 2 (deliver): the gold payloads leave the conjugates and spread through the cell; the cell dims as it is killed.
   Step 3 (recruit): an immune effector cell arrives; its Fc receptors reach the joined Fc stems (ADCC, ADCP, CDC).
   Source: medicovestor.com/platform and the company's press releases. Schematic. Driven by the scrubbed story progress.
   Labels sit in clear bands (top band, inside the empty lower cell, or under the effector cell) with >= 8px clearance (DR3). */
var SX={cx:205,cy:262,rx:160,ry:158},MVX=112;
function sxR(a){return 1+.045*Math.sin(a*3+.6)+.03*Math.sin(a*5+2.1)+.02*Math.sin(a*7+.4)}
function sxP(a,o){var r=sxR(a);return [SX.cx+Math.cos(a)*(SX.rx*r+(o||0)),SX.cy+Math.sin(a)*(SX.ry*r+(o||0))]}
function scene(){
  var mob=MOBILE(),f=function(n){return (+n).toFixed(1)},g='',k,a,d;
  var EX=mob?585:600,EY=262,ERX=mob?92:100,ERY=128;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 720 470" aria-hidden="true">';
  /* tumour cell (the cell, its conjugates and payloads move together: centred in steps 1-2, left in step 3) */
  g+='<g id="mv"><g id="tc">';
  d='';for(k=0;k<=120;k++){a=k/120*Math.PI*2;var p=sxP(a);d+=(k?'L':'M')+f(p[0])+' '+f(p[1])}
  g+='<path class="cfill" id="cfill" d="'+d+'Z"/><path class="cedge sD" d="'+d+'Z"/>';
  g+='<ellipse class="nuc sD" cx="'+(SX.cx-40)+'" cy="'+(SX.cy-34)+'" rx="62" ry="50"/>';
  g+='<ellipse class="nuc2 sD" cx="'+(SX.cx-52)+'" cy="'+(SX.cy-42)+'" rx="16" ry="12"/>';
  g+='<text class="t" id="tcl" x="'+(SX.cx-34)+'" y="'+(SX.cy+96)+'" text-anchor="middle">TUMOUR CELL</text>';
  /* FRα receptors on the right-hand membrane: a stalk and a cup */
  var RA=[-.78,-.48,-.16,.16,.48,.78],RC=[];
  RA.forEach(function(a,j){var p0=sxP(a,-2),p1=sxP(a,16),nx=Math.cos(a),ny=Math.sin(a),tx=-ny,ty=nx;RC.push([p1[0]+nx*5,p1[1]+ny*5,nx,ny,tx,ty]);
    g+='<path class="rc sD" d="M'+f(p0[0])+' '+f(p0[1])+'L'+f(p1[0])+' '+f(p1[1])+'"/>';
    g+='<path class="rc sD" d="M'+f(p1[0]+tx*7+nx*6)+' '+f(p1[1]+ty*7+ny*6)+'Q'+f(p1[0]-nx*2)+' '+f(p1[1]-ny*2)+' '+f(p1[0]-tx*7+nx*6)+' '+f(p1[1]-ty*7+ny*6)+'"/>'});
  g+='</g>';
  /* ADoBind dimers: receptor pairs (0,1), (2,3), (4,5) */
  var J=[];g+='<g id="abs">';
  [[0,1],[2,3],[4,5]].forEach(function(pr,i){
    var A=RC[pr[0]],B=RC[pr[1]],mx=(A[0]+B[0])/2,my=(A[1]+B[1])/2,nx=(A[2]+B[2])/2,ny=(A[3]+B[3])/2,nl=Math.hypot(nx,ny);nx/=nl;ny/=nl;
    var jx=mx+nx*78,jy=my+ny*78;J.push([jx,jy,nx,ny]);var s='';
    [A,B].forEach(function(R){var fx=R[0]+R[2]*22,fy=R[1]+R[3]*22;
      s+='<path class="ab" d="M'+f(fx)+' '+f(fy)+'L'+f(R[0]+R[4]*10+R[3]*0+R[2]*2)+' '+f(R[1]+R[5]*10+R[3]*2)+'M'+f(fx)+' '+f(fy)+'L'+f(R[0]-R[4]*10+R[2]*2)+' '+f(R[1]-R[5]*10+R[3]*2)+'M'+f(fx)+' '+f(fy)+'L'+f(jx)+' '+f(jy)+'"/>';
      var px=fx+(jx-fx)*.45,py=fy+(jy-fy)*.45;s+='<circle class="pl0" cx="'+f(px)+'" cy="'+f(py)+'" r="3.6"/>'});
    s+='<path class="ss" d="M'+f(jx-ny*7-nx*3)+' '+f(jy+nx*7-ny*3)+'Q'+f(jx+nx*7)+' '+f(jy+ny*7)+' '+f(jx+ny*7-nx*3)+' '+f(jy-nx*7-ny*3)+'"/>';
    g+='<g class="dm" id="dm'+i+'">'+s+'</g>'});
  g+='</g>';
  /* payloads released inside the cell (step 2) */
  var PT=[[262,188],[300,236],[248,262],[318,292],[270,318],[226,214],[296,170],[236,300]];
  g+='<g id="pls">';PT.forEach(function(q,j){g+='<circle class="pl1" cx="'+q[0]+'" cy="'+q[1]+'" r="3.6"/>'});g+='</g></g>';
  /* immune effector cell (step 3) and its Fc receptors reaching the joined Fc stems */
  g+='<g id="ef">';d='';for(k=0;k<=96;k++){a=k/96*Math.PI*2;var r=1+.05*Math.sin(a*4+1.2)+.03*Math.sin(a*6+.3);d+=(k?'L':'M')+f(EX+Math.cos(a)*ERX*r)+' '+f(EY+Math.sin(a)*ERY*r)}
  g+='<path class="efill" d="'+d+'Z"/><path class="eedge" d="'+d+'Z"/><ellipse class="enuc" cx="'+(EX+18)+'" cy="'+(EY-10)+'" rx="38" ry="46"/>';
  g+='<text class="t" id="efl" x="'+EX+'" y="'+(EY+ERY+40)+'" text-anchor="middle">'+(mob?'IMMUNE CELL':'IMMUNE EFFECTOR CELL')+'</text></g>';
  g+='<g id="fcr">';J.forEach(function(q){var ex=EX-ERX*.98,ey=EY+(q[1]-EY)*.62;
    g+='<path class="fr" d="M'+f(ex)+' '+f(ey)+'C'+f(ex-30)+' '+f(ey)+' '+f(q[0]+q[2]*40)+' '+f(q[1]+q[3]*40)+' '+f(q[0]+q[2]*10)+' '+f(q[1]+q[3]*10)+'"/>'});g+='</g>';
  /* labels, one per step, in the clear band above the scene */
  var lx=mob?360:45,ly=mob?40:44,an=mob?' text-anchor="middle"':'';
  g+='<g id="lb0"><text class="a l0" x="'+lx+'" y="'+ly+'"'+an+'>'+(mob?'ADOBIND BINDS FRα':'ADOBIND BINDS FRα · MORE ANTIBODY PER ANTIGEN')+'</text></g>';
  g+='<g id="lb1"><text class="a l1" x="'+lx+'" y="'+ly+'"'+an+'>'+(mob?'PAYLOAD RELEASED':'PAYLOAD RELEASED · TUMOUR CELL KILL')+'</text></g>';
  g+='<g id="lb2"><text class="a l2" x="'+lx+'" y="'+ly+'"'+an+'>'+(mob?'ADCC · ADCP · CDC':'IMMUNE EFFECTOR FUNCTION · ADCC · ADCP · CDC')+'</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#tc .sD"),cfill:$("#cfill",svg),tcl:$("#tcl",svg),dm:$$("#abs .dm",svg),pl0:$$("#abs .pl0",svg),pl1:$$("#pls .pl1",svg),
    ef:$("#ef",svg),mv:$("#mv",svg),fr:dl("#fcr .fr"),l0:$("#lb0",svg),l1:$("#lb1",svg),l2:$("#lb2",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(2)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);op(E.tcl,b)}
    var s1=seg(p,.04,.3),s2=seg(p,.38,.62),s3=seg(p,.7,.84),fr=seg(p,.84,.97);
    /* step 1: the dimers arrive from the right, one after another, and dock */
    E.dm.forEach(function(el,j){var v=seg(s1,j*.22,.56+j*.22);el.setAttribute("transform","translate("+(140*(1-v)).toFixed(1)+" 0)");op(el,b*v)});
    /* step 2: payloads leave the conjugates and spread through the cell, which dims */
    E.pl0.forEach(function(c){op(c,b*seg(s1,.5,1)*(1-seg(s2,0,.35)))});
    E.pl1.forEach(function(c,j){op(c,b*seg(s2,.1+j*.06,.4+j*.06))});
    op(E.cfill,b*(1-.55*s2));
    /* step 3: the effector cell arrives; its Fc receptors draw out to the joined Fc stems (every line reaches its end) */
    var mv=seg(p,.64,.78);E.mv.setAttribute("transform","translate("+(MVX*(1-mv)).toFixed(1)+" 0)");
    E.ef.setAttribute("transform","translate("+(120*(1-s3)).toFixed(1)+" 0)");op(E.ef,b*s3);
    draw(E.fr,fr);E.fr.forEach(function(a){a[0].style.opacity=(b*(fr>0?1:0)).toFixed(3)});
    op(E.l0,b*(1-seg(p,.3,.38)));op(E.l1,b*seg(p,.38,.44)*(1-seg(p,.64,.7)));op(E.l2,b*seg(p,.72,.8));
  };
}
