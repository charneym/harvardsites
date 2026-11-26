/* The story scene (BL/BY/DB): rotational moulding as gordonellis.com > Manufacturing > Rotational Moulding Process describes it.
   ONE biaxial moulding arm and its tool stay on screen for all four steps (no cross-dissolve of separate figures):
   1 Fill: the tool's top half lifts, a measured shot of powder drops in, the tool closes.
   2 Heat: the oven draws in around it (up to 360 C); the tool turns about both axes (major: the tool spins in the frame, minor:
     the yoke turns about the arm) and the powder sinters into an even wall.
   3 Cool: the oven goes, a fan blows air across while the arm keeps rotating; the wall turns solid.
   4 Finish: the tool stops upright and opens, the moulding comes out onto a cooling jig, a hole is drilled, and it is packed. */
var GEC={x:450,y:250,k:1.45,r:172};
function geScene(o){
  var g='',mob=o.mob,i,C=GEC;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="20 36 724 464" aria-hidden="true"><defs>'+
     '<linearGradient id="geTl" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5b6269"/><stop offset="1" stop-color="#3a3f45"/></linearGradient>'+
     '<linearGradient id="gePt" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#5fcbf1"/><stop offset="1" stop-color="#0f8fc0"/></linearGradient>'+
     '<radialGradient id="geHt" cx=".5" cy=".55" r=".6"><stop offset="0" stop-color="#f08a4b" stop-opacity=".55"/><stop offset=".6" stop-color="#d9622f" stop-opacity=".18"/><stop offset="1" stop-color="#d9622f" stop-opacity="0"/></radialGradient>'+
     '</defs>';
  /* floor, the machine column and the arm (drawn in as the section arrives) */
  g+='<path class="pl" d="M36 452H724"/>';
  g+='<path class="ln sD" d="M58 452V214H112V452M50 452H120"/>';
  g+='<path class="ln sD" d="M112 243H'+(C.x-C.r)+'M112 257H'+(C.x-C.r)+'"/>';
  /* the oven, behind everything that turns */
  g+='<g id="geOv"><rect class="heat" id="geHeat" x="244" y="48" width="412" height="392"/>'+
     '<path class="ov sO" d="M244 440V48H656V440"/><path class="ov2 sO" d="M244 440H656"/>'+
     '<text class="ol" x="258" y="'+(mob?78:72)+'">'+(mob?"OVEN":"OVEN · 360 °C")+'</text></g>';
  /* the yoke (minor axis) and the tool (major axis) */
  g+='<ellipse class="yk" id="geYk" cx="'+C.x+'" cy="'+C.y+'" rx="'+C.r+'" ry="'+C.r+'"/>';
  g+='<path class="ax" d="M'+(C.x-C.r)+' '+C.y+'H'+(C.x-136)+'M'+(C.x+136)+' '+C.y+'H'+(C.x+C.r)+'"/>';
  /* powder: in the world frame, settled at the bottom of the cavity (inside its inscribed circle, whatever the tool's angle) */
  var pw='';for(i=0;i<26;i++){var a=i*2.399,r=4+Math.sqrt(i)*5.2,px=C.x+Math.cos(a)*r*1.5*C.k,py=C.y+(30+Math.abs(Math.sin(a))*r*.45-(i%3)*1.5)*C.k;pw+='<circle class="pw" data-i="'+i+'" cx="'+px.toFixed(1)+'" cy="'+py.toFixed(1)+'" r="3.4"/>'}
  g+='<g id="geTool"><g id="geBot"><rect class="tl" x="-76" y="2" width="152" height="54" rx="14"/><path class="fl" d="M-90 4H90"/></g>'+
     '<path class="coat" id="geCoat" d="M-60 -47H60Q67 -47 67 -40V40Q67 47 60 47H-60Q-67 47 -67 40V-40Q-67 -47 -60 -47Z"/>'+
     '<g id="geTop"><rect class="tl" x="-76" y="-56" width="152" height="54" rx="14"/><path class="fl" d="M-90 -4H90"/>'+
       '<rect class="cl" x="-88" y="-11" width="14" height="11"/><rect class="cl" x="74" y="-11" width="14" height="11"/></g>'+
     '<rect class="cl" x="-88" y="0" width="14" height="11"/><rect class="cl" x="74" y="0" width="14" height="11"/>'+
     '<circle class="hub" r="4"/></g>';
  /* the powder sits on top of the tool, read as a cutaway */
  g+='<g id="gePw">'+pw+'</g>';
  /* the fan and its air */
  g+='<g id="geFan"><circle class="ln" cx="704" cy="250" r="30"/><g id="geBl">'+
     [0,120,240].map(function(d){return '<path class="bl" transform="rotate('+d+' 704 250)" d="M704 250C710 237 719 231 726 237C729 244 717 250 704 250Z"/>'}).join("")+
     '</g><circle class="hub" cx="704" cy="250" r="4"/>'+
     '<path class="air" id="geAir" d="M666 222H632M666 250H632M666 278H632"/>'+
     '<text class="ol" x="704" y="'+(mob?310:302)+'" text-anchor="middle">FAN</text></g>';
  /* the cooling jig and the finished part */
  g+='<path class="ln" id="geJig" d="M602 452V430H732V452M614 430V452M720 430V452"/>';
  g+='<g id="gePart"><rect class="pt" x="-66" y="-46" width="132" height="92" rx="12"/><circle class="hole" id="geHole" cx="34" cy="-14" r="7"/></g>';
  g+='<path class="pk" id="gePk" d="M602 424V338H732V424"/>';
  var CP=mob?["FILL · SHOT WEIGHT","HEAT · TWO AXES","COOL · STILL TURNING","FINISH · TRIM, FIT, PACK"]:["FILL · A MEASURED SHOT WEIGHT OF POWDER","HEAT · UP TO 360 °C, ABOUT 10 TURNS A MINUTE","COOL · FANS OR A COOLING CHAMBER","FINISH · TRIMMED, FITTED, SPRAYED AND PACKED"];
  for(i=0;i<4;i++)g+='<text class="cl2 cap" id="geC'+i+'" x="36" y="'+(mob?492:486)+'">'+CP[i]+'</text>';
  return g+'</svg>';
}
function scene(){return geScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),ov:dl(".sO"),ovg:$("#geOv",svg),heat:$("#geHeat",svg),yk:$("#geYk",svg),tool:$("#geTool",svg),top:$("#geTop",svg),
    coat:$("#geCoat",svg),pw:$$("#gePw circle",svg),fan:$("#geFan",svg),bl:$("#geBl",svg),air:$("#geAir",svg),jig:$("#geJig",svg),
    part:$("#gePart",svg),hole:$("#geHole",svg),pk:dl("#gePk"),cap:[0,1,2,3].map(function(k){return $("#geC"+k,svg)})};
  var lastB=-1,C=GEC;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=(+v).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    /* the tool's two rotations through heat and cool, ending upright (multiples of 360) */
    var u=seg(p,.27,.73),rot=720*u,phi=1080*u*Math.PI/180;
    E.tool.setAttribute("transform","translate("+C.x+","+C.y+") rotate("+rot.toFixed(2)+") scale("+C.k+")");
    E.yk.setAttribute("ry",(C.r*Math.max(.06,Math.abs(Math.cos(phi)))).toFixed(1));
    /* the top half: open for filling, closed by .2, open again to demould */
    var lift=Math.max(1-seg(p,.13,.22),seg(p,.77,.83))*46;
    E.top.setAttribute("transform","translate(0,"+(-lift).toFixed(1)+")");
    /* powder pours in (fill), then sinters into the wall (heat) */
    var pin=seg(p,.02,.16),pout=1-seg(p,.32,.5);
    E.pw.forEach(function(c,i){op(c,b*seg(pin,i/34,i/34+.25)*pout)});
    var coat=seg(p,.32,.6);E.coat.style.strokeWidth=(1+coat*6).toFixed(2);op(E.coat,b*coat*(1-seg(p,.78,.8)));
    /* oven: drawn in for heat, gone for cool */
    var ovIn=seg(p,.25,.33),ovOut=seg(p,.5,.55);draw(E.ov,ovIn);op(E.ovg,b*seg(p,.25,.29)*(1-ovOut));
    op(E.heat,seg(p,.3,.36)*(1-seg(p,.48,.53)));
    /* fan and air for cooling */
    op(E.fan,b*seg(p,.52,.57)*(1-seg(p,.75,.79)));
    E.bl.setAttribute("transform","rotate("+(p*4200%360).toFixed(1)+" 704 250)");
    E.air.style.strokeDashoffset=(-p*900).toFixed(1);
    /* finish: the part leaves the tool for the jig, is drilled, then packed */
    var out=seg(p,.81,.89),pin2=seg(p,.79,.82);
    var x=C.x+(667-C.x)*out,y=C.y+(392-C.y)*out,s=C.k*(1-.62*out);
    E.part.setAttribute("transform","translate("+x.toFixed(1)+","+y.toFixed(1)+") scale("+s.toFixed(3)+")");
    op(E.part,b*pin2);op(E.jig,b*seg(p,.76,.8));
    op(E.hole,seg(p,.9,.93));draw(E.pk,seg(p,.93,.99));
    var w=[[0,.25],[.25,.5],[.5,.75],[.75,1.01]];
    E.cap.forEach(function(c,k){var a=w[k][0],z=w[k][1];op(c,b*(k===0?1:seg(p,a,a+.04))*(k===3?1:(1-seg(p,z-.04,z))))});
  };
}
