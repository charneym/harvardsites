/* The story scene (BL/BY/DB): the MEDBEST MULTILINE NEXT DC dialysis couch in side elevation, as greiner-gmbh.de > Medbest >
   Dialyseliege describes it: electric adjustment of back, seat and leg section and the height lift, the four positions
   "Sitzposition, Relax-Position / Zero-Gravity, Bettlage, Trendelenburg", entry height 54 cm, lift 54-75 cm, from sitting to
   Trendelenburg in 11 s, foot / emergency switch as an accessory. ONE articulated line drawing kept on screen for all four steps:
   its sections rotate about their real hinges along the scrubbed timeline (no cross-dissolve of separate figures).
   1 Sitzen: low, upright, leg section down.   2 Relax: back reclines, seat tips, legs rise (zero gravity).
   3 Liegen: everything flat, the column lifts.   4 Notfall: the whole surface tilts head-down, the foot switch lights. */
var GRP={px:452,ls:170,lb:226,ll:138};
/* poses: seat angle (front up), back angle above horizontal, leg angle below horizontal, column top y, tilt (head down) */
var GRPOSE=[{s:7,b:66,l:62,y:300,t:0},{s:16,b:32,l:-6,y:292,t:0},{s:0,b:0,l:0,y:262,t:0},{s:0,b:0,l:0,y:270,t:12}];
function grPose(p){
  var K=[[0,.24],[.30,.47],[.53,.70],[.77,.92]],a=GRPOSE[0],b=GRPOSE[0],u=0,i;
  for(i=1;i<K.length;i++){if(p>=K[i][0]){a=GRPOSE[i-1];b=GRPOSE[i];u=Math.min(1,(p-K[i][0])/(K[i][1]-K[i][0]))}}
  u=u<.5?2*u*u:1-Math.pow(-2*u+2,2)/2;var o={};for(var k in a)o[k]=a[k]+(b[k]-a[k])*u;return o}
function grScene(o){
  var g='',mob=o.mob,i,L=GRP;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="20 30 720 470" aria-hidden="true"><defs>'+
     '<linearGradient id="grCu" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6a7c84"/><stop offset="1" stop-color="#3b4e57"/></linearGradient></defs>';
  g+='<text class="t" x="36" y="52">'+(mob?"MULTILINE NEXT DC":"MEDBEST · MULTILINE NEXT DC · DIALYSELIEGE")+'</text>';
  /* the floor, the base frame and the castors */
  g+='<path class="pl" d="M36 452H724"/>';
  g+='<path class="ln sD" d="M262 404H630M262 404V412M630 404V412"/>';
  g+='<circle class="ln" cx="284" cy="430" r="20"/><circle class="hub" cx="284" cy="430" r="3.5"/><circle class="ln" cx="608" cy="430" r="20"/><circle class="hub" cx="608" cy="430" r="3.5"/>';
  /* the lifting column (its inner stage telescopes with the pose) */
  g+='<rect class="col" x="372" y="336" width="80" height="68"/>';
  g+='<rect class="col2" id="grCol" x="384" y="300" width="56" height="40"/>';
  /* the foot / emergency switch on the floor, right of the base */
  g+='<rect class="sw" x="664" y="436" width="44" height="14"/><rect class="swl" id="grSwL" x="671" y="439" width="30" height="4"/>';
  /* the couch: one group tilted about the column top; inside, back / seat / leg each rotate about their hinge */
  g+='<g id="grTilt"><g id="grSurf">'+
     '<path class="ln" id="grArm" d=""/>'+
     '<g id="grBack"><rect class="cu" rx="7" x="4" y="-24" width="'+L.lb+'" height="24"/><path class="seam" d="M14 -6H'+(L.lb-8)+'"/>'+
       '<rect class="cu" rx="7" x="'+(L.lb+10)+'" y="-28" width="38" height="28"/></g>'+
     '<g id="grSeat"><rect class="cu" rx="7" x="'+(-L.ls)+'" y="-24" width="'+(L.ls)+'" height="24"/><path class="frm" d="M'+(-L.ls+8)+' 7H-8"/>'+
       '<path class="ln" d="M'+(-L.ls+40)+' -58V-24M-44 -58V-24"/><rect class="arm" x="'+(-L.ls+22)+'" y="-66" width="'+(L.ls-46)+'" height="9"/></g>'+
     '<g id="grLeg"><rect class="cu" rx="7" x="'+(-L.ll)+'" y="-22" width="'+(L.ll-4)+'" height="22"/><rect class="ft" x="'+(-L.ll-10)+'" y="-36" width="9" height="50"/></g>'+
     '<circle class="hg" id="grH1" r="4.5"/><circle class="hg" id="grH2" r="4.5"/>'+
  '</g></g>';
  /* one caption per position, below the floor line, clear of every stroke */
  var C=mob?["SITZPOSITION","RELAX · ZERO-GRAVITY","BETTLAGE · BIS 75 CM","TRENDELENBURG · 11 S"]:["SITZPOSITION · EINSTIEG AB 54 CM","RELAX-POSITION · ZERO-GRAVITY","BETTLAGE · HÖHENHUB BIS 75 CM","TRENDELENBURG · AUS DEM SITZEN IN 11 S"];
  for(i=0;i<4;i++)g+='<text class="cl cap" id="grC'+i+'" x="36" y="'+(mob?492:486)+'">'+C[i]+'</text>';
  return g+'</svg>';
}
function scene(){return grScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),tilt:$("#grTilt",svg),back:$("#grBack",svg),seat:$("#grSeat",svg),leg:$("#grLeg",svg),
    col:$("#grCol",svg),arm:$("#grArm",svg),h2:$("#grH2",svg),sw:$("#grSwL",svg),surf:$("#grSurf",svg),
    cap:[0,1,2,3].map(function(k){return $("#grC"+k,svg)})};
  var lastB=-1,R=Math.PI/180,L=GRP;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=(+v).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var P=grPose(p),py=P.y-16;
    /* the seat's front hinge, in the couch frame (origin at the seat's rear hinge, above the column) */
    var fx=-L.ls*Math.cos(P.s*R),fy=-L.ls*Math.sin(P.s*R);
    E.surf.setAttribute("transform","translate("+L.px+","+py.toFixed(1)+")");
    E.back.setAttribute("transform","rotate("+(-P.b).toFixed(2)+")");
    E.seat.setAttribute("transform","rotate("+(P.s).toFixed(2)+")");
    E.leg.setAttribute("transform","translate("+fx.toFixed(1)+","+fy.toFixed(1)+") rotate("+(-P.l).toFixed(2)+")");
    E.h2.setAttribute("cx",fx.toFixed(1));E.h2.setAttribute("cy",fy.toFixed(1));
    E.tilt.setAttribute("transform","rotate("+P.t.toFixed(2)+" "+(L.px-40)+" "+P.y.toFixed(1)+")");
    E.col.setAttribute("y",P.y.toFixed(1));E.col.setAttribute("height",(340-P.y).toFixed(1));
    /* the support arm from the column top to the middle of the seat frame (in the couch frame) */
    var mx=fx*.5,my=fy*.5+7;
    E.arm.setAttribute("d","M-40 16L"+mx.toFixed(1)+" "+my.toFixed(1));
    op(E.sw,b*seg(p,.74,.8));
    var w=[[0,.27],[.27,.5],[.5,.74],[.74,1.01]];
    E.cap.forEach(function(c,k){var a=w[k][0],z=w[k][1];op(c,b*(k===0?1:seg(p,a,a+.04))*(k===3?1:(1-seg(p,z-.04,z))))});
    op(E.surf,b);
  };
}
