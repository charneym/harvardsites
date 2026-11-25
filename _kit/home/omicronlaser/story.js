/* The story scene (BL/BY/DB): how an Omicron LightHUB Ultra® laser light engine works, drawn as ONE plan view of the
   engine, kept on screen for all three steps (omicron-laser.de, LightHUB Ultra page: "up to 7 wavelengths beam-combined and
   efficiently fibre coupled into one or two fibres", "over 30 different wavelengths available", "wavelengths upgradable by
   the end-user", "one or two single-mode, polarization maintaining or multi-mode fibre coupled outputs", "all lasers with
   direct analogue and digital modulation", 375 to 1550 nm).
   Step 1: five diode lasers inside the engine, each emits its own wavelength (beams rise to the combining axis).
   Step 2: the beams are folded onto one axis and combined.
   Step 3: the combined beam is coupled into the fibre, which leaves the engine. */
var SCW=760,SCH=520,OM_AY=190,OM_X=[112,210,308,406,504],OM_C=["#9d7bff","#2ec5f0","#b8e04a","#ff5a4f","#c2465a"],OM_N=["405","488","561","638","785"];
function omScene(o){
  var g='',mob=o.mob,ay=OM_AY;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true"><defs>'+
    '<radialGradient id="omGl"><stop offset="0" stop-color="#ffffff"/><stop offset=".35" stop-color="#bfe0ff" stop-opacity=".8"/><stop offset="1" stop-color="#4a9be8" stop-opacity="0"/></radialGradient></defs>';
  /* the engine housing and its name */
  g+='<path class="hs sD" d="M48 118H688V458H48Z"/>';
  g+='<text class="t" x="48" y="100">'+(mob?"LIGHTHUB ULTRA":"LIGHTHUB ULTRA® · PLAN VIEW")+'</text>';
  /* five diode laser modules, engraved */
  OM_X.forEach(function(x,i){
    g+='<g class="md"><path class="mb sD" d="M'+(x-32)+' 318H'+(x+32)+'V408H'+(x-32)+'Z"/><path class="mn sD" d="M'+(x-9)+' 318V304H'+(x+9)+'V318"/>'+
       '<path class="mx" d="M'+(x-22)+' 338H'+(x+22)+'M'+(x-22)+' 348H'+(x+8)+'"/><circle class="mx" cx="'+(x-20)+'" cy="394" r="3"/><circle class="mx" cx="'+(x+20)+'" cy="394" r="3"/></g>';
    g+='<text class="t wl" x="'+x+'" y="440" text-anchor="middle">'+OM_N[i]+(mob?"":" nm")+'</text>';
  });
  /* step 1: one beam per laser, rising to the combining axis */
  OM_X.forEach(function(x,i){g+='<path class="bm b'+i+'" style="stroke:'+OM_C[i]+'" d="M'+x+' 302V'+(ay+2)+'"/>'});
  /* step 2: fold mirrors on the axis, then the combined beam */
  g+='<g id="omMir">'+OM_X.map(function(x){return '<path class="mr" d="M'+(x-15)+' '+(ay+15)+'L'+(x+15)+' '+(ay-15)+'"/>'}).join("")+'</g>';
  g+='<path id="omAxG" class="axg" d="M'+OM_X[0]+' '+ay+'H592"/><path id="omAx" class="ax" d="M'+OM_X[0]+' '+ay+'H592"/>';
  g+='<g id="omL2"><text class="t s1" x="'+OM_X[0]+'" y="'+(ay-34)+'">'+(mob?"ONE AXIS":"BEAM-COMBINED ON ONE AXIS")+'</text></g>';
  /* step 3: the coupler and the fibre leaving the engine */
  g+='<g id="omCp"><path class="cp" d="M600 166V214"/><path class="cb" d="M616 174H668V206H616Z"/></g>';
  g+='<path id="omFb" class="fb" d="M668 190H714C740 190 748 214 748 242V452"/>';
  g+='<path id="omFc" class="fc" d="M741 452H755V482H741Z"/>';
  g+='<circle id="omOut" cx="748" cy="496" r="26" fill="url(#omGl)"/>';
  g+='<g id="omL3"><text class="t s1" x="712" y="508" text-anchor="end">'+(mob?"1 OR 2 OUTPUTS":"ONE OR TWO FIBRE OUTPUTS")+'</text></g>';
  /* step captions */
  g+='<g id="lb1"><text class="a" x="20" y="508">'+(mob?"1 · ONE LASER EACH":"1 · ONE LASER PER WAVELENGTH")+'</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="508">'+(mob?"2 · COMBINED":"2 · COMBINED ON ONE AXIS")+'</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="508">'+(mob?"3 · INTO THE FIBRE":"3 · COUPLED INTO THE FIBRE")+'</text></g>';
  return g+'</svg>';
}
function scene(){return omScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),bm:dl(".bm"),ax:dl("#omAx"),axg:dl("#omAxG"),fb:dl("#omFb"),mir:$("#omMir",svg),cp:$("#omCp",svg),fc:$("#omFc",svg),out:$("#omOut",svg),
    mx:$$(".mx",svg),wl:$$(".wl",svg),L2:$("#omL2",svg),L3:$("#omL3",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),t0:svg.querySelector("svg>text.t")||svg.querySelector("text.t")};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);op(E.t0,b);E.mx.forEach(function(m){op(m,b)})}
    /* step 1: the beams rise one after another; wavelengths labelled */
    E.bm.forEach(function(a,i){var v=b*seg(p,.04+.035*i,.13+.035*i);a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)});
    E.wl.forEach(function(t,i){op(t,b*seg(p,.04+.035*i,.12+.035*i))});
    /* step 2: mirrors, then the combined beam runs to the coupler */
    op(E.mir,b*seg(p,.36,.44));
    var c=b*seg(p,.42,.6);draw(E.ax,c);draw(E.axg,c);
    op(E.L2,b*seg(p,.56,.62));
    /* step 3: coupler, fibre, output */
    op(E.cp,b*seg(p,.66,.72));
    draw(E.fb,b*seg(p,.7,.84));
    op(E.fc,b*seg(p,.82,.86));
    var pu=.75+.25*Math.sin(p*Math.PI*14);
    op(E.out,b*seg(p,.84,.9)*pu);
    op(E.L3,b*seg(p,.86,.92));
    op(E.l1,b*seg(p,.02,.1)*(1-seg(p,.33,.38)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.64,.68)));op(E.l3,b*seg(p,.7,.78));
  };
}
