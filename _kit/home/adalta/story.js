/* The story scene (DB/BL/BY): how AdAlta's lead CAR-T therapy works, as ONE continuous fine-line scene that fills the frame
   (adalta.com.au, East to West strategy: "collecting a patient's own T cells, enhancing and expanding them in the laboratory,
   and then reinfusing"; ASX 1 April 2026: BZDS1901/EW-001 targets mesothelin, Gen 2 manufacturing under two days).
   Frame 0 is already a complete picture: a T cell on the left, a mesothelioma cell carrying mesothelin on the right.
   Step 1 (collect): the patient's own T cell.  Step 2 (engineer): chimeric antigen receptors appear on its membrane.
   Step 3 (expand): copies of the engineered cell appear.  Step 4 (engage): the CAR-T cell moves in, its receptors bind
   mesothelin, the cancer cell breaks down. Labels sit in open space, leaders stop short of the text (DR3).
   Driven by the scrubbed progress. */
var SCW=760,SCH=560;
var TC=[210,290,76],TU=[566,290,110],MOVE=142;
var CA=[-150,-112,-74,-36,0,36,74,112,150,180];
var MS=[-160,-128,-96,-64,-32,0,32,64,96,128,160,190];
var CL=[[96,140],[336,140],[104,452],[312,458]];
function tuR(a){return TU[2]*(1+.05*Math.cos(3*a+.8)+.035*Math.cos(5*a-.6)+.02*Math.cos(7*a+1.9))}
function tuPath(){var s="",k,n=96;for(k=0;k<=n;k++){var a=k/n*Math.PI*2,r=tuR(a);s+=(k?"L":"M")+(TU[0]+r*Math.cos(a)).toFixed(1)+" "+(TU[1]+r*Math.sin(a)).toFixed(1)}return s}
function circ(x,y,r){return "M"+(x+r)+" "+y+"A"+r+" "+r+" 0 1 1 "+(x+r-.01)+" "+(y-.5)}
function yRec(a,r,len){
  var t=a*Math.PI/180,c=Math.cos(t),s=Math.sin(t),b=r+2,m=r+len*.62,e=r+len,w=len*.32,px=-s,py=c;
  return "M"+(b*c).toFixed(1)+" "+(b*s).toFixed(1)+"L"+(m*c).toFixed(1)+" "+(m*s).toFixed(1)+
    "M"+(m*c).toFixed(1)+" "+(m*s).toFixed(1)+"L"+(e*c+w*px).toFixed(1)+" "+(e*s+w*py).toFixed(1)+
    "M"+(m*c).toFixed(1)+" "+(m*s).toFixed(1)+"L"+(e*c-w*px).toFixed(1)+" "+(e*s-w*py).toFixed(1)}
function storyScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><radialGradient id="kglow"><stop offset="0" stop-color="#f2575b" stop-opacity=".55"/><stop offset="1" stop-color="#f2575b" stop-opacity="0"/></radialGradient></defs>';
  g+='<g id="tum"><path class="tw sD" id="tuo" d="'+tuPath()+'"/><path class="wo sD" d="'+circ(TU[0]+14,TU[1]-8,40)+'"/>';
  g+='<g id="msl">';MS.forEach(function(d){var a=d*Math.PI/180,r=tuR(a),x=TU[0]+(r+5)*Math.cos(a),y=TU[1]+(r+5)*Math.sin(a);
    g+='<rect class="ms" x="-4" y="-4" width="8" height="8" transform="translate('+x.toFixed(1)+' '+y.toFixed(1)+') rotate('+(d+45)+')"/>'});g+='</g></g>';
  g+='<circle class="halo" id="kh" cx="'+(TU[0]-TU[2]+6)+'" cy="'+TU[1]+'" r="120" fill="url(#kglow)"/>';
  g+='<g id="cls">';CL.forEach(function(c){g+='<g class="cl" transform="translate('+c[0]+' '+c[1]+')"><path class="wl" d="'+circ(0,0,24)+'"/><path class="wo" d="'+circ(-3,2,10)+'"/>';
    [-120,-60,0,60,120,180].forEach(function(a){g+='<path class="car" d="'+yRec(a,24,9)+'"/>'});g+='</g>'});g+='</g>';
  g+='<g id="tcg"><g id="tcm">';
  g+='<path class="wl sD" d="'+circ(TC[0],TC[1],TC[2])+'"/><path class="wo sD" d="'+circ(TC[0]-10,TC[1]+6,32)+'"/>';
  g+='<g id="cars" transform="translate('+TC[0]+' '+TC[1]+')">';CA.forEach(function(a){g+='<path class="car" d="'+yRec(a,TC[2],18)+'"/>'});g+='</g>';
  if(!mob)g+='<text class="t" x="'+(TC[0]-26)+'" y="'+(TC[1]-TC[2]-34)+'">T CELL</text>';
  else g+='<text class="t" x="'+(TC[0]-40)+'" y="'+(TC[1]-TC[2]-38)+'">T CELL</text>';
  g+='</g></g>';
  if(!mob){
    g+='<g id="lCar"><path class="ld" d="M'+(TC[0]-TC[2]-24)+' '+TC[1]+'L'+(TC[0]-TC[2]-46)+' '+TC[1]+'"/><text class="t a2" x="'+(TC[0]-TC[2]-92)+'" y="'+(TC[1]+4)+'">CAR</text></g>';
    g+='<g id="lTu"><text class="t" x="'+(TU[0]-46)+'" y="'+(TU[1]-TU[2]-40)+'">TUMOUR CELL</text></g>';
    g+='<g id="lMs"><path class="ld" d="M'+(TU[0]+66)+' '+(TU[1]+108)+'L'+(TU[0]+82)+' '+(TU[1]+150)+'"/><text class="t" x="'+(TU[0]+40)+'" y="'+(TU[1]+170)+'">MESOTHELIN</text></g>';
  }else{
    g+='<g id="lCar"></g>';
    g+='<g id="lTu"><text class="t" x="'+(TU[0]-70)+'" y="'+(TU[1]-TU[2]-44)+'">TUMOUR CELL</text></g>';
    g+='<g id="lMs"></g>';
  }
  var ly=SCH-6,lx=mob?24:20;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'THE PATIENT&#8217;S T CELLS':'THE PATIENT&#8217;S OWN T CELLS, COLLECTED')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'A RECEPTOR FOR MESOTHELIN':'A CHIMERIC ANTIGEN RECEPTOR FOR MESOTHELIN')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'EXPANDED, REINFUSED':'EXPANDED AND REINFUSED · GEN 2 MADE IN UNDER TWO DAYS')+'</text></g>';
  g+='<g id="lb4"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'MESOTHELIN BOUND':'THE RECEPTOR BINDS MESOTHELIN · THE T CELL STRIKES')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),cars:$$("#cars .car",svg),ms:$$("#msl .ms",svg),cls:$$("#cls .cl",svg),tcm:$("#tcm",svg),tum:$("#tum",svg),tuo:$("#tuo",svg),kh:$("#kh",svg),
    lCar:$("#lCar",svg),lTu:$("#lTu",svg),lMs:$("#lMs",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    /* 2. receptors appear one by one */
    E.cars.forEach(function(el,i){op(el,b*seg(p,.27+.012*i,.34+.012*i))});
    op(E.lCar,b*seg(p,.36,.42)*(1-seg(p,.74,.78)));
    /* 3. copies of the engineered cell, then they step back as the cell moves in */
    E.cls.forEach(function(el,i){op(el,b*.8*seg(p,.52+.03*i,.6+.03*i)*(1-seg(p,.74,.8)))});
    /* 4. the CAR-T cell moves to the tumour cell; the receptors bind; the cancer cell breaks down */
    var mv=seg(p,.76,.86);E.tcm.setAttribute("transform","translate("+(MOVE*mv).toFixed(1)+" 0)");
    var hit=seg(p,.85,.93);
    E.ms.forEach(function(el){el.classList.toggle("on",p>.84)});
    op(E.kh,b*hit);
    E.tuo.classList.toggle("off",p>.9);
    op(E.tum,b*(1-.55*seg(p,.9,.98)));
    op(E.lTu,b);op(E.lMs,b*(1-seg(p,.9,.96)));
    op(E.l1,b*seg(p,.03,.1)*(1-seg(p,.22,.27)));op(E.l2,b*seg(p,.29,.36)*(1-seg(p,.47,.52)));op(E.l3,b*seg(p,.54,.6)*(1-seg(p,.72,.77)));op(E.l4,b*seg(p,.8,.87));
  };
}
