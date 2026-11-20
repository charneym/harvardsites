/* the story scene (DB): ONE engraved axial schematic of the prostate and rectum, the OmnEcoil idea in four steps.
   Step 1 the twelve standard cores of a blind biopsy, which miss the lesion; step 2 the endorectal coil lights the gland and the
   target appears; step 3 the curved array of channels and its convergence point (the guide) draw in, with the fan of trajectories;
   step 4 the needle runs down the one channel aimed at the target and takes the core. Geometry only, not to scale. */
var SC={C:[400,372],R:62,lz:[480,276],ang:[50,60,70,80,90,100,110,120,130],pick:8};
function scene(){
  var mob=MOBILE(),C=SC.C,R=SC.R,i;
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="799" height="559"/><g transform="translate(400 300) scale(1.2) translate(-400 -318)">';
  /* prostate (a rounded chestnut in axial section), urethra, rectum wall */
  g+='<path class="sD bl" d="M400 118C486 118 552 160 556 226C560 292 506 342 440 346C420 347 410 340 400 340C390 340 380 347 360 346C294 342 240 292 244 226C248 160 314 118 400 118Z"/>';
  g+='<path class="sD kb" d="M400 140C462 142 512 176 520 222M282 226C292 178 338 144 400 140"/>';
  g+='<circle class="sD kb" cx="400" cy="196" r="12"/>';
  g+='<circle class="sD gr" cx="400" cy="446" r="74"/><circle class="sD kb" cx="400" cy="446" r="64"/>';
  g+='<text x="566" y="150" class="t">PROSTATE</text><text x="484" y="512" class="t">RECTUM</text>';
  g+='</g><g class="tb"><text x="24" y="540" class="t">AXIAL SECTION · SCHEMATIC, NOT TO SCALE</text></g>';
  g+='</g>';
  g+='<g transform="translate(400 300) scale(1.2) translate(-400 -318)">';
  /* the lesion: unseen (dashed) in step 1, revealed on MRI from step 2 */
  g+='<g id="lzU"><circle class="lzu" cx="'+SC.lz[0]+'" cy="'+SC.lz[1]+'" r="22"/></g>';
  g+='<g id="lzS"><circle class="lzg" cx="'+SC.lz[0]+'" cy="'+SC.lz[1]+'" r="40"/><path class="lzs" d="M462 268C466 254 484 250 494 258C506 266 504 286 492 294C480 300 462 296 458 284C456 278 458 272 462 268Z"/>'+
     '<text x="532" y="290" class="a" id="lzT">TARGET</text></g>';
  /* step 1: twelve standard cores and their needle paths */
  var cores='',paths='';[200,250].forEach(function(y){[300,340,380,420,460,500].forEach(function(x){paths+='M'+x+' 352V'+(y+6);cores+='<circle class="core" cx="'+x+'" cy="'+y+'" r="5"/>'})});
  g+='<g id="sc1"><path class="np dr" d="'+paths+'"/>'+cores+'</g>';
  /* step 2: the endorectal coil and its sensitivity field */
  g+='<g id="sc2"><path class="coil dr" d="M352 404C368 392 432 392 448 404C462 414 462 432 448 442C432 452 368 452 352 442C338 432 338 414 352 404Z"/>'+
     '<path class="fld dr" d="M316 380C340 330 460 330 484 380M290 366C320 290 480 290 510 366M266 352C300 250 500 250 534 352"/></g>';
  /* step 3: the curved array of channels around the convergence point, with their trajectories */
  var ch='',tr='';for(i=0;i<SC.ang.length;i++){var a=SC.ang[i]*Math.PI/180,px=C[0]+R*Math.cos(a),py=C[1]+R*Math.sin(a),ux=Math.cos(a),uy=Math.sin(a);
    ch+='M'+(px+ux*10).toFixed(1)+' '+(py+uy*10).toFixed(1)+'L'+(px-ux*8).toFixed(1)+' '+(py-uy*8).toFixed(1);
    tr+='M'+(px-ux*8).toFixed(1)+' '+(py-uy*8).toFixed(1)+'L'+(C[0]-ux*190).toFixed(1)+' '+(C[1]-uy*190).toFixed(1)}
  var a0=SC.ang[0]*Math.PI/180,a8=SC.ang[8]*Math.PI/180;
  g+='<g id="sc3"><path class="arr dr" d="M'+(C[0]+R*Math.cos(a0)).toFixed(1)+' '+(C[1]+R*Math.sin(a0)).toFixed(1)+'A'+R+' '+R+' 0 0 1 '+(C[0]+R*Math.cos(a8)).toFixed(1)+' '+(C[1]+R*Math.sin(a8)).toFixed(1)+'"/>'+
     '<path class="chn dr" d="'+ch+'"/><path class="trj dr" d="'+tr+'"/><circle class="cvp" cx="'+C[0]+'" cy="'+C[1]+'" r="5"/><text x="'+(C[0]+14)+'" y="'+(C[1]+4)+'" class="t s">GUIDE</text></g>';
  /* step 4: the needle down the chosen channel to the target */
  var pa=SC.ang[SC.pick]*Math.PI/180,pX=C[0]+(R+10)*Math.cos(pa),pY=C[1]+(R+10)*Math.sin(pa);
  g+='<g id="sc4"><path id="ndl" class="ndl" d="M'+pX.toFixed(1)+' '+pY.toFixed(1)+'L'+SC.lz[0]+' '+SC.lz[1]+'"/><circle id="ndt" class="ndt" cx="'+SC.lz[0]+'" cy="'+SC.lz[1]+'" r="4"/>'+
     '</g>';
  g+='</g>';
  var cx=mob?24:612,cy=mob?392:404;
  g+='<g id="sc4t"><text x="'+cx+'" y="'+cy+'" class="t">EX VIVO, 15 CHANNELS</text><text x="'+cx+'" y="'+(cy+24)+'" class="a">1.7 MM LATERAL</text><text x="'+cx+'" y="'+(cy+48)+'" class="a">2.0 MM LONGITUDINAL</text><text x="'+cx+'" y="'+(cy+68)+'" class="t s">MEAN TIP-TO-TARGET</text></g>';
  g+='<text id="cap1" x="40" y="58" class="a">TWELVE STANDARD CORES</text>';
  g+='<text id="cap2" x="40" y="58" class="a">ENDORECTAL MRI SHOWS THE TARGET</text>';
  g+='<text id="cap3" x="40" y="58" class="a">CHANNELS CONVERGE ON THE GUIDE</text>';
  g+='<text id="cap4" x="40" y="58" class="a">NEEDLE TO TARGET, IN THE BORE</text>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var Lg=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=Lg+" "+Lg;return [p,Lg]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .neat, #scBase .tb, #scBase text",svg),
    lzU:$("#lzU",svg),lzS:$("#lzS",svg),g1:$("#sc1",svg),g2:$("#sc2",svg),g3:$("#sc3",svg),g4:$("#sc4",svg),
    cores:$$("#sc1 .core",svg),d1:dl("#sc1 .dr"),d2:dl("#sc2 .dr"),d3:dl("#sc3 .dr"),cvp:$("#sc3 .cvp",svg),ndl:$("#ndl",svg),ndt:$("#ndt",svg),
    t4:$$("#sc4t text",svg),cap:[$("#cap1",svg),$("#cap2",svg),$("#cap3",svg),$("#cap4",svg)]};
  var nL=E.ndl.getTotalLength();E.ndl.style.strokeDasharray=nL+" "+nL;
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s1=seg(p,0,.16),s2=seg(p,.25,.44),s3=seg(p,.5,.69),s4=seg(p,.75,.94);
    /* step 1: the needle paths draw and the cores land; the lesion is there but unseen */
    var c1=Math.max(s1,b);E.g1.style.opacity=(b*(1-.8*s2)).toFixed(3);draw(E.d1,c1);
    E.cores.forEach(function(el,k){el.style.opacity=Math.min(1,Math.max(0,c1*12-k*.7)).toFixed(3)});
    E.lzU.style.opacity=(b*.9*(1-s2)).toFixed(3);
    /* step 2: the coil and its field draw; the target lights up */
    E.g2.style.opacity=(b*(s2>0?1:0)*(1-.5*s4)).toFixed(3);draw(E.d2,s2);E.lzS.style.opacity=(b*s2).toFixed(3);
    /* step 3: the array, channels and trajectories draw; the convergence point appears */
    E.g3.style.opacity=(b*(s3>0?1:0)*(1-.55*s4)).toFixed(3);draw(E.d3,s3);E.cvp.style.opacity=s3.toFixed(3);
    /* step 4: the needle travels to the target */
    E.g4.style.opacity=(b*(s4>0?1:0)).toFixed(3);E.ndl.style.strokeDashoffset=(nL*(1-s4)).toFixed(1);E.ndt.style.opacity=Math.max(0,s4*3-2).toFixed(3);
    E.t4.forEach(function(el){el.style.opacity=Math.max(0,s4*2-1).toFixed(3)});
    var I=function(v){return Math.max(0,v*2-1)},O=function(v){return 1-Math.min(1,v*2)};
    E.cap[0].style.opacity=(b*O(s2)).toFixed(3);E.cap[1].style.opacity=(I(s2)*O(s3)).toFixed(3);E.cap[2].style.opacity=(I(s3)*O(s4)).toFixed(3);E.cap[3].style.opacity=I(s4).toFixed(3);
  };
}
