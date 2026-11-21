/* The story (BL/BY/DB): the STAb-T mechanism as ONE continuous scene, in fine line. Sources: stabtherapeutics.com
   (Strategy); CNIO / Hospital 12 de Octubre (Science Translational Medicine, 2024); the Spanish GMO notification
   B/ES/26/13 (patient T cells modified to secrete αCD19×αCD3 bispecific antibodies).
   Left: a STAb-T cell, a patient's own T cell engineered with the gene for a T cell-engager (TCE).
   Step 1: the gene is written into its nucleus. Step 2: the cell secretes TCE molecules (two linked binding arms) that drift
   out and bind the target antigen on the tumour cell. Step 3: unmodified bystander T cells are caught by the free arm of each
   engager (CD3) and close in on the tumour cell, which breaks up. */
var SCW=760,SCH=520,TX=530,TY=262,TRr=136,SX=170,SY=262,SR=90;
function tpt(a,r){var t=a*Math.PI/180;return [TX+(r||TRr)*Math.cos(t),TY+(r||TRr)*Math.sin(t)]}
/* engager binding sites on the tumour (degrees, SVG y down); the first three are where bystander T cells dock */
var SITES=[-110,35,140,-150,180,165,-130,-62,80,-12];
var DOCK=[{a:-110,r:38,from:[440,-60]},{a:35,r:40,from:[820,520]},{a:140,r:36,from:[300,600]}];
var ANT=(function(){var a=[];for(var i=0;i<22;i++)a.push(-180+i*360/22+7);return a})();
function memScene(o){
  var g='',i;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g id="scBase">';
  /* the STAb-T cell, its nucleus and a few microvilli */
  g+='<circle class="dz sD" cx="'+SX+'" cy="'+SY+'" r="'+SR+'"/><circle class="bl sD" cx="'+(SX-6)+'" cy="'+(SY+4)+'" r="42"/>';
  for(i=0;i<20;i++){var a=i*18*Math.PI/180;g+='<path class="bl sD" d="M'+(SX+SR*Math.cos(a)).toFixed(1)+' '+(SY+SR*Math.sin(a)).toFixed(1)+'L'+(SX+(SR+9)*Math.cos(a)).toFixed(1)+' '+(SY+(SR+9)*Math.sin(a)).toFixed(1)+'"/>'}
  /* the tumour cell: an irregular membrane, nucleus, antigen stubs */
  var mp='';for(i=0;i<=72;i++){var aa=i*5,rr=TRr*(1+.035*Math.sin(aa*Math.PI/180*5+1)+.02*Math.sin(aa*Math.PI/180*11)),q=tpt(aa,rr);mp+=(i?'L':'M')+q[0].toFixed(1)+' '+q[1].toFixed(1)}
  g+='<path class="dz sD" id="tMem" d="'+mp+'Z"/><circle class="bl sD" cx="'+(TX+12)+'" cy="'+(TY-6)+'" r="56"/>';
  g+='</g>';
  g+='<g id="scAnt">';ANT.forEach(function(a){var p0=tpt(a,TRr+3),p1=tpt(a,TRr+13);g+='<path class="ag" d="M'+p0[0].toFixed(1)+' '+p0[1].toFixed(1)+'L'+p1[0].toFixed(1)+' '+p1[1].toFixed(1)+'"/>'});g+='</g>';
  /* step 1: the TCE gene, a short double helix, settles into the nucleus */
  g+='<g id="scGene">';var hx='',hy='';for(i=0;i<=24;i++){var x=SX-36+i*3,s=Math.sin(i*.55)*9;hx+=(i?'L':'M')+x.toFixed(1)+' '+(SY+4+s).toFixed(1);hy+=(i?'L':'M')+x.toFixed(1)+' '+(SY+4-s).toFixed(1)}
  g+='<path class="gn" d="'+hx+'"/><path class="gn" d="'+hy+'"/>';for(i=1;i<24;i+=3){var x2=SX-36+i*3,s2=Math.sin(i*.55)*9;g+='<path class="gr" d="M'+x2.toFixed(1)+' '+(SY+4+s2).toFixed(1)+'V'+(SY+4-s2).toFixed(1)+'"/>'}g+='</g>';
  /* step 2: engagers; each is two binding arms joined by a linker */
  g+='<g id="scTe">';SITES.forEach(function(a,k){g+='<g class="te" id="te'+k+'"><path d="M-11 0H11"/><ellipse cx="-14" cy="0" rx="6.5" ry="4.2"/><ellipse class="ar2" cx="14" cy="0" rx="6.5" ry="4.2"/></g>'});g+='</g>';
  /* step 3: bystander T cells */
  g+='<g id="scBy">';DOCK.forEach(function(d,k){g+='<g class="by" id="by'+k+'"><circle class="byc" r="'+d.r+'"/><circle class="bl" r="'+Math.round(d.r*.45)+'" cx="-3" cy="2"/></g>'});g+='</g>';
  g+='<g id="scCap">';
  g+='<text class="t" x="'+SX+'" y="'+(SY+SR+44)+'" text-anchor="middle">STAb-T CELL</text>';
  g+='<text class="t" x="'+TX+'" y="'+(TY+TRr+62)+'" text-anchor="middle">TUMOUR CELL</text>';
  g+='</g>';
  var y2=o.mob?62:58;
  g+='<g id="lb1"><text class="a" x="24" y="36">TCE GENE</text><text class="a" x="24" y="'+y2+'">WRITTEN IN</text></g>';
  g+='<g id="lb2"><text class="a" x="24" y="36">ENGAGERS SECRETED</text><text class="a" x="24" y="'+y2+'">IN VIVO</text></g>';
  g+='<g id="lb3"><text class="a" x="24" y="36">BYSTANDER T CELLS</text><text class="a" x="24" y="'+y2+'">RECRUITED</text></g>';
  return g+'</svg>';
}
function scene(){return memScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),cap:$("#scCap",svg),ant:$("#scAnt",svg),gene:$("#scGene",svg),te:$$("#scTe .te",svg),by:$$("#scBy .by",svg),
    mem:$("#tMem",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function cl(v){return v<0?0:v>1?1:v}
  function lp(a,b,t){return a+(b-a)*t}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);op(E.cap,b);op(E.ant,b)}
    /* step 1: the gene drops into the nucleus */
    var g1=seg(p,.06,.24);op(E.gene,b*g1);E.gene.setAttribute("transform","translate(0 "+(-70*(1-g1)).toFixed(1)+")");
    /* step 2: engagers leave the STAb-T cell one after another, arc across and bind the tumour antigen */
    SITES.forEach(function(a,k){var el=E.te[k],t=cl((p-.36-k*.022)/.2),e=t*t*(3-2*t);
      var st=[SX+SR*.98,SY+(k-4)*9],en=tpt(a,TRr+20),mx=(st[0]+en[0])/2,my=Math.min(st[1],en[1])-40+k*14;
      var x=(1-e)*(1-e)*st[0]+2*(1-e)*e*mx+e*e*en[0],y=(1-e)*(1-e)*st[1]+2*(1-e)*e*my+e*e*en[1];
      var rot=lp(0,a,e);el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+") rotate("+rot.toFixed(1)+")");
      op(el,b*(t>0?1:0)*cl(t*6))});
    /* step 3: bystander T cells close in on the free arms and dock; the tumour membrane breaks up */
    DOCK.forEach(function(d,k){var t=seg(p,.68+k*.04,.86+k*.03),en=tpt(d.a,TRr+20+20+d.r);
      var x=lp(d.from[0],en[0],t),y=lp(d.from[1],en[1],t);E.by[k].setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")");op(E.by[k],b*cl(t*2.5))});
    var ly=seg(p,.88,.99);if(E.mem){E.mem.style.opacity=(1-.45*ly).toFixed(3);E.mem.classList.toggle("lys",ly>.02)}
    op(E.l1,b*seg(p,.08,.16)*(1-seg(p,.28,.33)));op(E.l2,b*seg(p,.4,.48)*(1-seg(p,.61,.66)));op(E.l3,b*seg(p,.74,.82));
  };
}
