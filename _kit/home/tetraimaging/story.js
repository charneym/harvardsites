/* the story scene (DB): ONE engraved schematic of tetrahedron beam CT, as described in Tetraimaging's NIH awards.
   Step 1 the linear MPTEX source array is drawn beneath the anatomy; step 2 each source fires a collimated fan beam in turn,
   building a stack of fans; step 3 the linear detector array, crossed to the source line, is drawn and the four corners of
   the tetrahedron are joined; step 4 the gantry turns and the volume inside the anatomy is reconstructed voxel by voxel. */
var TB={S0:[190,478],S1:[610,478],DA:[332,140],DB:[488,86],N:9};
function scene(){
  var mob=MOBILE();
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="799" height="559"/>';
  /* the anatomy: a cylinder phantom at the isocentre */
  g+='<path class="sD gr" d="M330 252A80 24 0 1 0 490 252A80 24 0 1 0 330 252M330 252V352M490 252V352M330 352A80 24 0 0 0 490 352"/>';
  g+='<path class="sD kb" d="M330 352A80 24 0 0 1 490 352"/>';
  /* the source array: a housing and N emitters */
  g+='<path class="sD bl" d="M'+(TB.S0[0]-26)+' '+(TB.S0[1]-6)+'H'+(TB.S1[0]+26)+'V'+(TB.S0[1]+26)+'H'+(TB.S0[0]-26)+'Z"/>';
  g+='<g id="srcs">';for(var i=0;i<TB.N;i++){var x=TB.S0[0]+(TB.S1[0]-TB.S0[0])*i/(TB.N-1);g+='<rect class="em" x="'+(x-5)+'" y="'+(TB.S0[1]-3)+'" width="10" height="7"/>'}g+='</g>';
  g+='<g class="tb"><text x="24" y="540" class="t">TETRAHEDRON BEAM CT · SCHEMATIC</text></g>';
  g+='<text x="'+(TB.S0[0]-26)+'" y="'+(TB.S0[1]+48)+'" class="t">MPTEX SOURCE ARRAY</text>';
  g+='</g>';
  /* fans, one per source */
  g+='<g id="fans">';for(var j=0;j<TB.N;j++){var sx=TB.S0[0]+(TB.S1[0]-TB.S0[0])*j/(TB.N-1);g+='<path class="fan" d="M'+sx+' '+(TB.S0[1]-3)+'L'+TB.DA[0]+' '+TB.DA[1]+'L'+TB.DB[0]+' '+TB.DB[1]+'Z"/>'}g+='</g>';
  /* the detector array and the tetrahedron edges */
  var cells='';for(var k=0;k<=12;k++){var u=k/12,cx=TB.DA[0]+(TB.DB[0]-TB.DA[0])*u,cy=TB.DA[1]+(TB.DB[1]-TB.DA[1])*u;cells+='M'+(cx-2).toFixed(1)+' '+(cy-9).toFixed(1)+'l4 0l0 9'}
  g+='<g id="sc3a"><path class="det dr" d="M'+TB.DA[0]+' '+TB.DA[1]+'L'+TB.DB[0]+' '+TB.DB[1]+'"/><path class="cel dr" d="'+cells+'"/>'+
     '<path class="tet dr" d="M'+TB.S0[0]+' '+(TB.S0[1]-3)+'L'+TB.DA[0]+' '+TB.DA[1]+'M'+TB.S0[0]+' '+(TB.S0[1]-3)+'L'+TB.DB[0]+' '+TB.DB[1]+'M'+TB.S1[0]+' '+(TB.S1[1]-3)+'L'+TB.DA[0]+' '+TB.DA[1]+'M'+TB.S1[0]+' '+(TB.S1[1]-3)+'L'+TB.DB[0]+' '+TB.DB[1]+'M'+TB.S0[0]+' '+(TB.S0[1]-3)+'H'+TB.S1[0]+'"/>'+
     '<text x="'+(TB.DB[0]+20)+'" y="'+(TB.DB[1]+4)+'" class="t dl">LINEAR DETECTOR</text></g>';
  /* the gantry turn and the reconstructed voxels */
  var vox='';for(var r=0;r<5;r++)for(var q=0;q<7;q++){vox+='<rect class="vx" x="'+(352+q*17)+'" y="'+(262+r*17)+'" width="14" height="14"/>'}
  g+='<g id="sc4a"><path class="rot dr" d="M196 330A214 64 0 0 0 624 330"/><path class="roth" d="M624 330l-16 -2l10 12Z"/><g id="vox">'+vox+'</g></g>';
  g+='<text id="cap1" x="40" y="58" class="a">A LINE OF X-RAY SOURCES</text>';
  g+='<text id="cap2" x="40" y="58" class="a">A STACK OF FAN BEAMS</text>';
  g+='<text id="cap3" x="40" y="58" class="a">THE TETRAHEDRON</text>';
  g+='<text id="cap4" x="40" y="58" class="a">ROTATE AND RECONSTRUCT</text>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var Lg=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=Lg+" "+Lg;return [p,Lg]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .neat, #scBase .tb, #scBase>text",svg),em:$$("#srcs rect",svg),fans:$$("#fans path",svg),
    a3:$("#sc3a",svg),a4:$("#sc4a",svg),d3:dl("#sc3a .dr"),d4:dl("#sc4a .dr"),vx:$$("#vox rect",svg),
    cap:[$("#cap1",svg),$("#cap2",svg),$("#cap3",svg),$("#cap4",svg)]};
  var lastB=-1,N=TB.N;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s1=seg(p,0,.16),s2=seg(p,.25,.44),s3=seg(p,.5,.69),s4=seg(p,.75,.94);
    /* step 1: the emitters light one after another along the array */
    E.em.forEach(function(el,i){var on=Math.max(0,Math.min(1,(Math.max(s1,b*.25)*(N+2)-i)));el.style.opacity=(b*(.25+.75*on)).toFixed(3)});
    /* step 2: fans fire in sequence and stay, building the stack; the newest fan is brightest */
    var cur=s2*N;E.fans.forEach(function(el,i){var v=Math.max(0,Math.min(1,cur-i)),hot=s2>0&&s2<1?Math.max(0,1-Math.abs(cur-i-.5)*1.4):0;
      el.style.opacity=(b*Math.min(1,v*.42+hot*.5)*(1-.35*s4)).toFixed(3)});
    /* step 3: detector and tetrahedron edges draw */
    E.a3.style.opacity=(b*(s3>0?1:0)).toFixed(3);draw(E.d3,s3);
    /* step 4: the gantry arc draws and the voxels fill in, row by row */
    E.a4.style.opacity=(b*(s4>0?1:0)).toFixed(3);draw(E.d4,s4);
    var nv=E.vx.length;E.vx.forEach(function(el,i){var v=Math.max(0,Math.min(1,s4*(nv+6)-i));el.style.opacity=(v*(.35+.5*((i*37)%11)/11)).toFixed(3)});
    var I=function(v){return Math.max(0,v*2-1)},O=function(v){return 1-Math.min(1,v*2)};
    E.cap[0].style.opacity=(b*O(s2)).toFixed(3);E.cap[1].style.opacity=(I(s2)*O(s3)).toFixed(3);E.cap[2].style.opacity=(I(s3)*O(s4)).toFixed(3);E.cap[3].style.opacity=I(s4).toFixed(3);
  };
}
