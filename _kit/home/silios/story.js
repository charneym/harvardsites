/* The story scene (BL/BY/DB): how a SILIOS snapshot multispectral camera works (silios.com > Multispectral Imaging:
   COLOR SHADES filters "composed of several cells, each of which is filtering a given wavelength band", configurable
   number, size and centring; TOUCAN: "hybridization of a custom Bayer-like mosaic filter on a commercial 4.2 MPixel CMOS
   Sensor, it allows extracting the spectrum on each point of the image"; CMS: 8 colours and 1 B&W), ONE schematic:
   Step 1 (Light): light from the scene.
   Step 2 (Filter): the mosaic of filter cells, each its own band.
   Step 3 (Sensor): the filter bonded onto a CMOS sensor and its board.
   Step 4 (Spectrum): the spectrum at each pixel, one peak per band. */
var SCW=760,SCH=520;
function slScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  if(!mob)g+='<text class="t" x="20" y="30">SNAPSHOT MULTISPECTRAL CAMERA, SCHEMATIC</text>';
  /* step 1: light from the scene */
  g+='<g id="slA"><path class="rf sRy" d="M60 210H240M60 260H240M60 310H240"/></g>';
  /* step 2: the 3x3 COLOR SHADES mosaic, one cell per band */
  var cells='',k=0;for(var r=0;r<3;r++)for(var c=0;c<3;c++){k++;cells+='<path class="cell c'+k+'" d="M'+(260+c*40)+' '+(200+r*40)+'h40v40h-40Z"/>'}
  g+='<g id="slF">'+cells+'</g>';
  /* step 3: the sensor behind the filter and its board */
  g+='<g id="slS"><path class="edge sSn" d="M250 190H390V330H250Z"/><path class="edge sBo" d="M230 330H410V350H230Z"/></g>';
  /* step 4: out to the spectrum plot, one peak per band */
  g+='<g id="slP"><path class="beam sOut" d="M410 260H456"/><path class="edge sAx" d="M470 170V330H730"/>'+
     '<path class="spec sSp" d="M474 326Q490 326 500 232Q510 326 525 326Q540 326 550 212Q560 326 575 326Q590 326 600 202Q610 326 625 326Q640 326 650 216Q660 326 675 326Q690 326 700 236Q710 326 724 326"/></g>';
  /* labels, per step, >= 8px clear of every stroke (DR3) */
  g+='<g id="slL1"><text class="t s2" x="60" y="'+(mob?188:192)+'">'+(mob?'LIGHT':'LIGHT FROM THE SCENE')+'</text></g>';
  g+='<g id="slL2"><text class="t s2" x="250" y="'+(mob?170:176)+'">'+(mob?'FILTER':'COLOR SHADES FILTER')+'</text></g>';
  g+='<g id="slL3"><text class="t s2" x="230" y="'+(mob?380:374)+'">'+(mob?'SENSOR':'CMOS SENSOR')+'</text></g>';
  g+='<g id="slL4"><text class="t s2" x="470" y="'+(mob?150:156)+'">'+(mob?'SPECTRUM':'SPECTRUM PER PIXEL')+'</text><text class="t" x="560" y="'+(mob?362:358)+'">'+(mob?'8 BANDS':'8 BANDS + B&amp;W')+'</text></g>';
  g+='<g id="lb1"><text class="a" x="20" y="508">1 · LIGHT</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="508">2 · FILTER</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="508">3 · SENSOR</text></g>';
  g+='<g id="lb4"><text class="a" x="20" y="508">4 · SPECTRUM</text></g>';
  return g+'</svg>';
}
function scene(){return slScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={A:$("#slA",svg),ry:dl(".sRy"),F:$("#slF",svg),cells:$$(".cell",svg),S:$("#slS",svg),sn:dl(".sSn"),bo:dl(".sBo"),
    P:$("#slP",svg),out:dl(".sOut"),ax:dl(".sAx"),sp:dl(".sSp"),
    L1:$("#slL1",svg),L2:$("#slL2",svg),L3:$("#slL3",svg),L4:$("#slL4",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg),t0:svg.querySelector("text.t")};
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    op(E.t0,b);
    /* step 1 */
    op(E.A,b);draw(E.ry,b*seg(p,0,.16));
    op(E.L1,b*seg(p,.04,.1)*(1-seg(p,.22,.25)));
    /* step 2: the cells appear one by one */
    op(E.F,b);E.cells.forEach(function(c,i){op(c,b*seg(p,.26+i*.018,.3+i*.018))});
    op(E.L2,b*seg(p,.3,.36)*(1-seg(p,.47,.5)));
    /* step 3 */
    op(E.S,b);draw(E.sn,b*seg(p,.52,.6));draw(E.bo,b*seg(p,.58,.68));
    op(E.L3,b*seg(p,.55,.61)*(1-seg(p,.72,.75)));
    /* step 4 */
    op(E.P,b);draw(E.out,b*seg(p,.77,.81));draw(E.ax,b*seg(p,.79,.85));draw(E.sp,b*seg(p,.84,.95));
    op(E.L4,b*seg(p,.8,.86));
    op(E.l1,b*seg(p,0,.05)*(1-seg(p,.22,.25)));op(E.l2,b*seg(p,.27,.32)*(1-seg(p,.47,.5)));op(E.l3,b*seg(p,.52,.57)*(1-seg(p,.72,.75)));op(E.l4,b*seg(p,.77,.82));
  };
}
