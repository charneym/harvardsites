/* The story scene (BL/BY/DB): how a ClydeHSI push-broom (line-scan) hyperspectral camera builds a data cube
   (clydehsi.com > Hyperspectral Cameras, SWIR-384 specifications, SC-C80, spectraSENS), ONE fine-line schematic:
   Step 1 (Line): the camera images one line of the sample.
   Step 2 (Spectrum): each line frame records spatial and spectral data at every pixel.
   Step 3 (Scan): the conveyor / stage moves the sample under the camera, line after line.
   Step 4 (Cube): spectraSENS stacks the lines into the hyperspectral cube (x, y, wavelength). */
var SCW=760,SCH=520;
var RB=["#ec0606","#f09018","#f0e40c","#18a848","#009cc0","#3b4fb0","#c01878"];
function hsScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  if(!mob)g+='<text class="t" x="20" y="30">PUSH-BROOM HYPERSPECTRAL IMAGING</text>';
  /* step 1: the camera, its lens, the sample, the field of view onto one line */
  g+='<g id="hsC"><path class="edge sCa" d="M100 70H250V122H100Z"/><path class="edge sCa" d="M158 122H192V140H158Z"/>'+
     '<path class="edge sSm" d="M60 300H340V440H60Z"/><path class="fov sFv" d="M175 142L60 330M175 142L340 330"/><path class="ln sLn" d="M60 330H340"/></g>';
  /* step 2: the spectrum of that line, one band per colour, spatial pixels along each band */
  g+='<g id="hsS"><path class="fov sLk" d="M250 96H392"/><path class="edge sPn" d="M392 56H560V176H392Z"/>';
  for(i=0;i<RB.length;i++)g+='<path class="band sBd" style="stroke:'+RB[i]+'" d="M'+(408+i*22)+' 70V162"/>';
  g+='</g>';
  /* step 3: the sample moves under the camera; the scanned lines accumulate */
  g+='<g id="hsM"><path class="arr sAr" d="M362 430V318M355 326L362 316L369 326"/>';
  for(i=0;i<9;i++)g+='<path class="scan sSc" d="M60 '+(342+i*11)+'H340"/>';
  g+='</g>';
  /* step 4: the hyperspectral cube */
  g+='<g id="hsQ"><path class="edge sQ" d="M500 300H620V420H500Z"/><path class="edge sQ" d="M500 300L548 256H668L620 300"/><path class="edge sQ" d="M620 420L668 376V256"/>';
  for(i=0;i<RB.length;i++)g+='<path class="layer sLy" style="stroke:'+RB[i]+'" d="M'+(626+i*6)+' '+(294-i*5.5).toFixed(1)+'V'+(414-i*5.5).toFixed(1)+'"/>';
  g+='</g>';
  /* labels, per step, >= 8px clear of every stroke (DR3) */
  g+='<g id="hsL1"><text class="t s2" x="100" y="'+(mob?54:58)+'">'+(mob?'CAMERA':'LINE-SCAN CAMERA')+'</text><text class="t" x="352" y="'+(mob?338:334)+'">'+(mob?'ONE LINE':'ONE LINE OF THE SAMPLE')+'</text></g>';
  g+='<g id="hsL2"><text class="t s2" x="392" y="'+(mob?42:44)+'">'+(mob?'SPECTRUM':'SPECTRUM AT EVERY PIXEL')+'</text><text class="t" x="392" y="'+(mob?204:196)+'">'+(mob?'400–2500 nm':'400 – 2500 nm')+'</text></g>';
  g+='<g id="hsL3"><text class="t s2" x="'+(mob?60:60)+'" y="'+(mob?474:466)+'">'+(mob?'SAMPLE MOVES':'CONVEYOR OR STAGE MOVES THE SAMPLE')+'</text></g>';
  g+='<g id="hsL4"><text class="t s2" x="500" y="'+(mob?452:446)+'">'+(mob?'DATA CUBE':'HYPERSPECTRAL CUBE')+'</text><text class="dk" x="500" y="'+(mob?482:470)+'">x · y · λ</text></g>';
  /* step captions */
  g+='<g id="lb1"><text class="a" x="20" y="508">1 · LINE</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="508">2 · SPECTRUM</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="508">3 · SCAN</text></g>';
  g+='<g id="lb4"><text class="a" x="20" y="508">4 · CUBE</text></g>';
  return g+'</svg>';
}
function scene(){return hsScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={C:$("#hsC",svg),ca:dl(".sCa"),sm:dl(".sSm"),fv:dl(".sFv"),ln:dl(".sLn"),
    S:$("#hsS",svg),lk:dl(".sLk"),pn:dl(".sPn"),bd:dl(".sBd"),
    M:$("#hsM",svg),ar:dl(".sAr"),sc:dl(".sSc"),
    Q:$("#hsQ",svg),q:dl(".sQ"),ly:dl(".sLy"),
    L1:$("#hsL1",svg),L2:$("#hsL2",svg),L3:$("#hsL3",svg),L4:$("#hsL4",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg),t0:svg.querySelector("text.t")};
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function stag(list,v){var n=list.length;list.forEach(function(a,i){var w=Math.max(0,Math.min(1,v*n-i));a[0].style.strokeDashoffset=(a[1]*(1-w)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    op(E.t0,b);
    /* step 1 */
    op(E.C,b);draw(E.ca,b*seg(p,0,.07));draw(E.sm,b*seg(p,.03,.1));draw(E.fv,b*seg(p,.08,.15));draw(E.ln,b*seg(p,.13,.2));
    op(E.L1,b*seg(p,.04,.1)*(1-seg(p,.22,.25)));
    /* step 2 */
    op(E.S,b);draw(E.lk,b*seg(p,.26,.32));draw(E.pn,b*seg(p,.29,.36));stag(E.bd,b*seg(p,.34,.47));
    op(E.L2,b*seg(p,.3,.36)*(1-seg(p,.47,.5)));
    /* step 3 */
    op(E.M,b);draw(E.ar,b*seg(p,.51,.57));stag(E.sc,b*seg(p,.55,.71));
    op(E.L3,b*seg(p,.55,.61)*(1-seg(p,.72,.75)));
    /* step 4 */
    op(E.Q,b);draw(E.q,b*seg(p,.76,.84));stag(E.ly,b*seg(p,.82,.94));
    op(E.L4,b*seg(p,.8,.86));
    op(E.l1,b*seg(p,0,.05)*(1-seg(p,.22,.25)));op(E.l2,b*seg(p,.27,.32)*(1-seg(p,.47,.5)));op(E.l3,b*seg(p,.52,.57)*(1-seg(p,.72,.75)));op(E.l4,b*seg(p,.77,.82));
  };
}
