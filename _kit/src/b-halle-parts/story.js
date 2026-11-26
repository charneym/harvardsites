/* The story scene (BL/BY/DB): how a Glan-type polarizing prism works (b-halle.de > Products > Polarizers: "polarizers only
   transmit light having the desired polarization state; the component with the orthogonal polarization is either absorbed
   or reflected"; Glan-type prisms "exploit the total internal reflection on a boundary surface of a birefringent crystal").
   ONE prism, drawn side on, stays on screen for all three steps:
   Step 1 (Enter): an unpolarized beam (strokes and dots: both states) travels into the crystal.
   Step 2 (Separate): at the diagonal boundary the orthogonal state (dots) is turned out of the prism by total internal reflection.
   Step 3 (Transmit): one linear polarization (strokes only) leaves the far face.
   Schematic, no measured values. Beams grow by recomputed endpoints; nothing is dash-drawn (DR4). */
var SCW=760,SCH=520;
var GP={X0:265,X1:495,Y0:145,Y1:375,BY:260,SX:380,IN0:30,OUT1:730,UP1:34};
function gpScene(o){
  var g='',mob=o.mob,G=GP;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true"><defs>'+
    '<linearGradient id="gpG" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#8ba6ff" stop-opacity=".16"/><stop offset="1" stop-color="#8ba6ff" stop-opacity=".05"/></linearGradient>'+
    '<radialGradient id="gpF" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ffffff" stop-opacity="1"/><stop offset=".3" stop-color="#8ba6ff" stop-opacity=".6"/><stop offset="1" stop-color="#3d6bff" stop-opacity="0"/></radialGradient></defs>';
  /* the prism: two crystal halves with a thin gap along the diagonal (bottom left to top right) */
  g+='<path class="cry" d="M'+G.X0+' '+G.Y0+'H'+(G.X1-5)+'L'+G.X0+' '+(G.Y1-5)+'Z"/>';
  g+='<path class="cry" d="M'+(G.X0+5)+' '+G.Y1+'L'+G.X1+' '+(G.Y0+5)+'V'+G.Y1+'Z"/>';
  /* faint hatching inside each half */
  var h='';for(var k=1;k<6;k++){var d=k*34;h+="M"+(G.X0+10)+" "+(G.Y0+d)+"H"+(G.X0+10+Math.max(0,200-d-18))}
  g+='<path class="hat" d="'+h+'"/>';
  var h2='';for(var k2=1;k2<6;k2++){var d2=k2*34;h2+="M"+(G.X1-10)+" "+(G.Y1-d2)+"H"+(G.X1-10-Math.max(0,200-d2-18))}
  g+='<path class="hat" d="'+h2+'"/>';
  /* beams: lines whose endpoints are set per frame */
  g+='<line id="gpBi" class="bm" x1="'+G.IN0+'" y1="'+G.BY+'" x2="'+G.IN0+'" y2="'+G.BY+'"/>';
  g+='<line id="gpBu" class="bm" x1="'+G.SX+'" y1="'+G.BY+'" x2="'+G.SX+'" y2="'+G.BY+'"/>';
  g+='<line id="gpBo" class="bm" x1="'+G.SX+'" y1="'+G.BY+'" x2="'+G.SX+'" y2="'+G.BY+'"/>';
  g+='<g id="gpMi"></g><g id="gpMu"></g><g id="gpMo"></g>';
  g+='<circle id="gpS" cx="'+G.SX+'" cy="'+G.BY+'" r="20" fill="url(#gpF)"/>';
  /* labels, kept clear of every stroke (>= 8px) */
  g+='<g id="gpL1"><text class="t s1" x="'+G.IN0+'" y="'+(G.BY-30)+'">'+(mob?"UNPOLARIZED":"UNPOLARIZED LIGHT")+'</text></g>';
  g+='<g id="gpL2"><text class="t s1" x="'+(G.SX+24)+'" y="'+(G.UP1+12)+'">'+(mob?"REFLECTED OUT":"ORTHOGONAL STATE,")+'</text>'+(mob?'':'<text class="t s1" x="'+(G.SX+24)+'" y="'+(G.UP1+28)+'">REFLECTED OUT</text>')+'</g>';
  g+='<g id="gpL3"><text class="t s1" x="'+G.OUT1+'" y="'+(G.BY-30)+'" text-anchor="end">'+(mob?"POLARIZED":"LINEARLY POLARIZED")+'</text></g>';
  g+='<text class="t" x="'+((G.X0+G.X1)/2)+'" y="'+(G.Y1+44)+'" text-anchor="middle">'+(mob?"CRYSTAL PRISM":"BIREFRINGENT CRYSTAL PRISM")+'</text>';
  g+='<g id="lb1"><text class="a" x="20" y="508">1 · ENTER</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="508">2 · SEPARATE</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="508">3 · TRANSMIT</text></g>';
  return g+'</svg>';
}
function scene(){return gpScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var $i=function(id){return svg.querySelector("#"+id)},G=GP,ns="http://www.w3.org/2000/svg";
  var E={Bi:$i("gpBi"),Bu:$i("gpBu"),Bo:$i("gpBo"),Mi:$i("gpMi"),Mu:$i("gpMu"),Mo:$i("gpMo"),S:$i("gpS"),
    L1:$i("gpL1"),L2:$i("gpL2"),L3:$i("gpL3"),l1:$i("lb1"),l2:$i("lb2"),l3:$i("lb3")};
  /* polarization markers: "s" = stroke across the beam (in the drawing plane), "d" = dot (perpendicular to it) */
  function mk(par,n,kinds){var a=[];for(var i=0;i<n;i++){var k=kinds[i%kinds.length],e;
    if(k==="d"){e=document.createElementNS(ns,"circle");e.setAttribute("r","3.4");e.setAttribute("class","gp-d")}
    else{e=document.createElementNS(ns,"line");e.setAttribute("class","gp-s")}
    e.__k=k;par.appendChild(e);a.push(e)}return a}
  var SP=30,MI=mk(E.Mi,10,["s","d"]),MU=mk(E.Mu,8,["d"]),MO=mk(E.Mo,12,["s"]);
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function ease(x){return x<.5?2*x*x:1-Math.pow(-2*x+2,2)/2}
  /* markers along a beam from (ax,ay) in direction (ux,uy), shown up to the beam's current length; none inside the prism */
  function place(M,ax,ay,ux,uy,len,ph,b){M.forEach(function(e,i){var s=(i+ph)*SP,x=ax+ux*s,y=ay+uy*s,vis=s<len-8&&s>4&&!inPrism(x,y);
      if(e.__k==="d"){e.setAttribute("cx",x.toFixed(1));e.setAttribute("cy",y.toFixed(1))}
      else{var px=-uy*9,py=ux*9;e.setAttribute("x1",(x-px).toFixed(1));e.setAttribute("y1",(y-py).toFixed(1));e.setAttribute("x2",(x+px).toFixed(1));e.setAttribute("y2",(y+py).toFixed(1))}
      op(e,vis?b:0)})}
  function inPrism(x,y){return x>G.X0-12&&x<G.X1+12&&y>G.Y0-12&&y<G.Y1+12}
  var lastB=-1;
  return function(p,b){
    if(!svg.isConnected)return;
    var gi=ease(seg(p,0,.26)),gu=ease(seg(p,.36,.6)),go=ease(seg(p,.68,.9)),ph=(p*6)%1;
    var xi=G.IN0+(G.SX-G.IN0)*gi;E.Bi.setAttribute("x2",xi.toFixed(1));
    var yu=G.BY-(G.BY-G.UP1)*gu;E.Bu.setAttribute("y2",yu.toFixed(1));
    var xo=G.SX+(G.OUT1-G.SX)*go;E.Bo.setAttribute("x2",xo.toFixed(1));
    op(E.Bi,b*Math.min(1,gi*8));op(E.Bu,b*Math.min(1,gu*8));op(E.Bo,b*Math.min(1,go*8));
    place(MI,G.IN0,G.BY,1,0,xi-G.IN0,ph,b);
    place(MU,G.SX,G.BY,0,-1,G.BY-yu,ph,b);
    place(MO,G.SX,G.BY,1,0,xo-G.SX,ph,b);
    op(E.S,b*seg(p,.22,.3));
    if(b!==lastB){lastB=b;$$(".cry,.hat,text.t:not(.s1)",svg).forEach(function(e){op(e,b)})}
    op(E.L1,b*seg(p,0,.08)*(1-seg(p,.33,.38)));op(E.L2,b*seg(p,.5,.58)*(1-seg(p,.64,.68)));op(E.L3,b*seg(p,.8,.88));
    op(E.l1,b*seg(p,0,.06)*(1-seg(p,.33,.38)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.64,.68)));op(E.l3,b*seg(p,.7,.78));
  };
}
