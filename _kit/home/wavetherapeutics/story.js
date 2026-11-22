/* The story scene (BL/BY/DB): the Wave cushion as ONE continuous engraved side section: the seated body's tissue (skin,
   fat, muscle and the ischial tuberosity, the bone that loads a wheelchair cushion), resting on the cushion's row of air
   cells over its foam base, with the peristaltic pump that drives them (wavetherapeuticsinc.com: "a unique and innovative
   microprocessor-controlled peristaltic pump designed to safely and effectively eliminate pressure hot spots, reperfuse
   tissues, and improve return blood flow to the heart and lungs").
   Step 1, pressure: the cells sit still and the bone presses the skin into a hot spot.
   Step 2, alternate: the pump inflates and deflates alternate cells, so the load keeps moving and the hot spot fades.
   Step 3, flow: sequential compression runs a crest along the cells, and blood in the vessel above is pushed home.
   Every element is driven by the scrubbed story progress. */
var SCW=760,SCH=520,NC=9,CX0=108,CDX=68,CR=30,BY=424;
function cellX(i){return CX0+i*CDX}
function cushScene(o){
  var g='',i;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g id="scBase">';
  g+='<text class="t" x="24" y="24">SEATED · SIDE SECTION</text>';
  g+='<path class="sD fb" d="M64 '+BY+'H696V'+(BY+26)+'H64Z"/>';
  for(i=0;i<NC;i++)g+='<path class="sD cr" d="M'+(cellX(i)-CDX/2)+' '+BY+'V'+(BY+26)+'"/>';
  g+='<path class="sD pm" d="M604 468h92v34h-92z"/><path class="sD pt" d="M604 485H'+cellX(0)+'V'+(BY+26)+'"/>';
  for(i=1;i<NC;i++)g+='<path class="sD pt" d="M'+cellX(i)+' '+(BY+26)+'V485"/>';
  g+='<text class="t" x="696" y="'+(SCH-8)+'" text-anchor="end">PERISTALTIC PUMP</text>';
  g+='</g>';
  g+='<g id="scCells">';for(i=0;i<NC;i++)g+='<circle class="cl" cx="'+cellX(i)+'" cy="'+(BY-CR)+'" r="'+CR+'"/>';g+='</g>';
  g+='<g id="scBody"><path class="mu" id="skM"/><path class="vs" id="skV"/><path class="vf" id="skVf"/><path class="ft" id="skF"/><path class="ep" id="skE"/><path class="sk" id="skS"/>'+
     '<path class="bn" d="M300 150C318 112 372 104 410 120C452 138 470 176 452 204C436 230 400 240 368 236C330 232 286 196 300 150Z"/>'+
     '<path class="bh" d="M322 146l58 58M340 132l70 70M364 124l74 74M310 168l52 52"/>'+
     '<text class="t" x="476" y="132">ISCHIAL TUBEROSITY</text><text class="t" x="476" y="196">BLOOD VESSEL</text><text class="t" x="24" y="'+(BY-CR+4)+'">AIR</text><text class="t" x="24" y="'+(BY-CR+20)+'">CELLS</text></g>';
  g+='<g id="scHot"><ellipse class="hs" id="hs1" cx="380" cy="360" rx="18" ry="6"/><ellipse class="hs" id="hs2" cx="380" cy="360" rx="40" ry="11"/><ellipse class="hs" id="hs3" cx="380" cy="360" rx="64" ry="16"/></g>';
  g+='<g id="scFlow"><path class="ar" d="M540 78H700M690 71l10 7-10 7"/><text class="a" x="700" y="58" text-anchor="end">RETURN FLOW TO THE HEART</text></g>';
  g+='<g id="lb1"><text class="a" x="24" y="'+(SCH-8)+'">A PRESSURE HOT SPOT</text></g>';
  g+='<g id="lb2"><text class="a" x="24" y="'+(SCH-8)+'">ALTERNATING PRESSURE</text></g>';
  g+='<g id="lb3"><text class="a" x="24" y="'+(SCH-8)+'">SEQUENTIAL COMPRESSION</text></g>';
  return g+'</svg>';
}
function scene(){return cushScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),cells:$$("#scCells circle",svg),body:$("#scBody",svg),
    sS:$("#skS",svg),sE:$("#skE",svg),sF:$("#skF",svg),sM:$("#skM",svg),sV:$("#skV",svg),sVf:$("#skVf",svg),
    hs:[$("#hs1",svg),$("#hs2",svg),$("#hs3",svg)],flow:$("#scFlow",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1,f=function(n){return (+n).toFixed(1)},X0=64,DX=8,NX=Math.round((696-64)/8)+1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function line(ys,off,sm){var d='',k,j,s,c;for(k=0;k<NX;k++){s=0;c=0;for(j=-sm;j<=sm;j++){var q=k+j;if(q>=0&&q<NX){s+=ys[q];c++}}d+=(d?'L':'M')+f(X0+k*DX)+' '+f(s/c-off)}return d}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var alt=seg(p,.34,.46)*(1-seg(p,.6,.68)),wav=seg(p,.66,.78),hot=seg(p,.06,.2)*(1-seg(p,.36,.5));
    var R=[],i,k;
    for(i=0;i<NC;i++){
      var a=alt*9*Math.sin(p*46)*(i%2?1:-1);
      var cr=Math.pow(Math.max(0,Math.cos(i*.9-p*70)),3);
      var r=CR-3*hot*Math.exp(-Math.pow((cellX(i)-380)/70,2))+a+wav*(11*cr-4);
      R.push(r);E.cells[i].setAttribute("r",f(r));E.cells[i].setAttribute("cy",f(BY-r));
      E.cells[i].style.opacity=b.toFixed(3);E.cells[i].classList.toggle("up",(wav>.3&&cr>.45)||(alt>.3&&a>3));
    }
    /* the skin rests on the top envelope of the cells (sagging a little between them), pressed into a dip under the bone in step 1 */
    var ys=[];
    for(k=0;k<NX;k++){var x=X0+k*DX,y=BY-2*CR+16;
      for(i=0;i<NC;i++){var dx=x-cellX(i);if(Math.abs(dx)<R[i]){var t=BY-R[i]-Math.sqrt(R[i]*R[i]-dx*dx);if(t<y)y=t}}
      ys.push(y+7*hot*Math.exp(-Math.pow((x-380)/60,2)))}
    E.sS.setAttribute("d",line(ys,0,2));E.sE.setAttribute("d",line(ys,7,2));E.sF.setAttribute("d",line(ys,48,5));E.sM.setAttribute("d",line(ys,128,8));
    var v=line(ys,88,7);E.sV.setAttribute("d",v);E.sVf.setAttribute("d",v);
    E.sVf.style.strokeDashoffset=f(-p*1400);E.sVf.style.opacity=(b*(.25+.75*wav)).toFixed(3);
    op(E.body,b);
    var sy=ys[Math.round((380-X0)/DX)];
    E.hs.forEach(function(el,q){el.setAttribute("cy",f(sy+1));el.style.opacity=(b*hot*(1-q*.28)).toFixed(3)});
    op(E.flow,b*wav);
    op(E.l1,b*seg(p,.1,.18)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.6,.66)));op(E.l3,b*seg(p,.74,.82));
  };
}
