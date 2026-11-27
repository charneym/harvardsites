/* The story scene (BL/BY/DB): one microCMA Auger measurement, in the terms rbdinstruments.com > microCMA uses (compact AES
   probe on a 2.75" / 70 mm CF flange; integrated coaxial 3 kV electron gun; electrons accepted at 42.3°, the second-order
   focusing angle; 4 mm end-of-optics to sample; Li and heavier). ONE figure kept on screen: the analyzer with its gun, the
   sample and the electron paths beside the measured spectrum.
   Step 1 (Beam): the coaxial gun sends a 3 kV electron beam to the sample.
   Step 2 (Emit): atoms near the surface emit Auger electrons.
   Step 3 (Filter): the cylindrical mirror passes one energy at a time; the spectrum is traced as the energy is swept.
   Step 4 (Spectrum): the peaks are labelled with their elements.
   The spectrum is illustrative: a copper sample with surface carbon and oxygen, at the textbook KLL/LMM energies
   (C 272 eV, O 503 eV, Cu 776/849/920 eV), drawn as a derivative spectrum. */
var SPX0=320,SPX1=720,SPY0=270,SPE0=50,SPE1=1000;
var PK=[[272,46,"C"],[503,64,"O"],[776,30,""],[849,56,""],[920,92,"Cu"]];
function spX(e){return SPX0+(e-SPE0)/(SPE1-SPE0)*(SPX1-SPX0)}
function dN(e){var v=-14*Math.exp(-(e-SPE0)/180);PK.forEach(function(p){var u=(e-p[0])/9;v+=p[1]*(-u*Math.exp(-u*u*.5))*1.6});return v}
function spPath(){var d='',e;for(e=SPE0;e<=SPE1;e+=2)d+=(e===SPE0?'M':'L')+spX(e).toFixed(1)+' '+(SPY0+dN(e)).toFixed(1);return d}
function tsScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="tssc'+(mob?' mob':'')+'" viewBox="'+(mob?'236 20 504 486':'20 20 720 486')+'" aria-hidden="true">';
  if(!mob){
    g+='<text class="t" x="40" y="44">RBD · microCMA AUGER ANALYZER</text>';
    /* the analyzer seen in section: inner and outer cylinders, the coaxial gun, the sample, the detector at the back */
    g+='<g id="tsCh"><rect class="cab" x="60" y="110" width="180" height="40"/><rect class="cab" x="60" y="230" width="180" height="40"/>'+
       '<rect class="wtr" x="60" y="150" width="180" height="80"/><rect class="lns" x="44" y="176" width="200" height="28"/>'+
       '<text class="ax" x="150" y="100" text-anchor="middle">cylindrical mirror</text><text class="ax" x="150" y="194" text-anchor="middle">3 kV gun</text>'+
       '<rect class="cab" x="268" y="140" width="12" height="100"/><text class="ax" x="274" y="258" text-anchor="middle">sample</text>'+
       '<rect class="wtr" x="40" y="168" width="14" height="44"/><text class="ax" x="47" y="290" text-anchor="middle">detector</text>'+
       '<text class="s3" x="160" y="312" text-anchor="middle">2.75 inch CF flange</text><path class="pl" d="M40 328H290"/></g>';
    g+='<path class="lb" id="tsGr" d="M244 190H268"/>';
    for(i=0;i<5;i++)g+='<path class="rg" id="tsRg'+i+'" d="M268 '+(186+i*2)+'L'+(226-i*14)+' '+(150-i*0)+'"/>';
    g+='<path class="sc" id="tsGr2" d="M268 190L210 150Q130 96 56 176"/>';
    g+='<text class="ro" id="tsRo" x="40" y="372">0 eV</text><text class="ro2" id="tsRh" x="40" y="394">BEAM ON</text>';
  }else{
    g+='<text class="ro" id="tsRo" x="250" y="56">0 eV</text><text class="ro2" id="tsRh" x="470" y="56">BEAM ON</text>';
  }
  /* the spectrum: dN/dE against kinetic energy, with element labels in step 4 */
  [[200,"200"],[500,"500"],[800,"800"]].forEach(function(r){var x=spX(r[0]);g+='<path class="gl" d="M'+x.toFixed(1)+' 90V440"/><text class="ax" x="'+x.toFixed(1)+'" y="'+(mob?470:462)+'" text-anchor="middle">'+r[1]+'</text>'});
  g+='<path class="axl" d="M320 90V440H720"/><text class="ax" x="720" y="'+(mob?500:482)+'" text-anchor="end">'+(mob?'eV':'KINETIC ENERGY · eV')+'</text>'+(mob?'':'<text class="ax" x="308" y="96" text-anchor="end">dN/dE</text>');
  g+='<path class="ms" id="tsMs" d="'+spPath()+'"/><circle class="hd" id="tsHd" r="5" cx="320" cy="'+SPY0+'"/>';
  PK.forEach(function(p,k){if(!p[2])return;g+='<text class="bl el" id="tsE'+k+'" x="'+spX(p[0]).toFixed(1)+'" y="'+(SPY0-p[1]*1.05-16).toFixed(1)+'" text-anchor="middle">'+p[2]+'</text>'});
  var C=mob?["A 3 kV BEAM","AUGER ELECTRONS OUT","SORTED AT 42.3°","ELEMENTS ON THE SURFACE"]:["THE COAXIAL GUN SENDS A 3 kV BEAM","ATOMS EMIT AUGER ELECTRONS","THE MIRROR PASSES ONE ENERGY AT A TIME","PEAKS NAME THE SURFACE ELEMENTS"];
  for(i=0;i<4;i++)g+='<text class="cl" id="tsC'+i+'" x="'+(mob?250:320)+'" y="'+(mob?500:504)+'">'+C[i]+'</text>';
  return g+'</svg>';
}
function scene(){return tsScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var q=function(s){return svg.querySelector(s)};
  var E={ms:q("#tsMs"),hd:q("#tsHd"),ro:q("#tsRo"),rh:q("#tsRh"),gr:q("#tsGr"),gr2:q("#tsGr2"),
    rg:[0,1,2,3,4].map(function(k){return q("#tsRg"+k)}),el:[0,1,4].map(function(k){return q("#tsE"+k)}),cap:[0,1,2,3].map(function(k){return q("#tsC"+k)})};
  var CU=[0],px=spX(SPE0),py=SPY0+dN(SPE0),e;for(e=SPE0+2;e<=SPE1;e+=2){var x=spX(e),y=SPY0+dN(e);CU.push(CU[CU.length-1]+Math.hypot(x-px,y-py));px=x;py=y}
  var L=E.ms.getTotalLength(),CT=CU[CU.length-1],lastT="",lastH="",GL=E.gr2?E.gr2.getTotalLength():0;
  E.ms.style.strokeDasharray=L+" "+L;E.ms.style.strokeDashoffset=L;if(E.gr2){E.gr2.style.strokeDasharray=GL+" "+GL}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(E.gr){op(E.gr,b*seg(p,.03,.1));E.rg.forEach(function(r,k){op(r,b*seg(p,.28+k*.03,.33+k*.03)*.85)});
      var g2=seg(p,.52,.6);E.gr2.style.strokeDashoffset=(GL*(1-g2)).toFixed(1);op(E.gr2,b*seg(p,.52,.54))}
    var en=SPE0+(SPE1-SPE0)*seg(p,.54,.74),ci=(en-SPE0)/2,i0=Math.min(CU.length-1,Math.floor(ci)),i1=Math.min(CU.length-1,i0+1),f=(CU[i0]+(CU[i1]-CU[i0])*(ci-i0))/CT;
    E.ms.style.strokeDashoffset=(L*(1-f)).toFixed(1);op(E.ms,b*seg(p,.54,.57));
    E.hd.setAttribute("cx",spX(en).toFixed(1));E.hd.setAttribute("cy",(SPY0+dN(en)).toFixed(1));op(E.hd,b*seg(p,.54,.57)*(1-seg(p,.74,.78)));
    E.el.forEach(function(t,k){op(t,b*seg(p,.8+k*.03,.85+k*.03))});
    var ts=p<.52?(p<.27?"3 kV":"AUGER e⁻"):p<.77?Math.round(en)+" eV":"C · O · Cu";if(ts!==lastT){lastT=ts;E.ro.textContent=ts}
    var hs=p<.27?"BEAM ON":p<.52?"EMITTING":p<.77?"SWEEPING ENERGY":"SURFACE COMPOSITION";if(hs!==lastH){lastH=hs;E.rh.textContent=hs}
    var w=[[0,.25],[.25,.5],[.5,.75],[.75,1.01]];
    E.cap.forEach(function(cp,k2){op(cp,b*(k2===0?1:seg(p,w[k2][0],w[k2][0]+.04))*(k2===3?1:(1-seg(p,w[k2][1]-.04,w[k2][1]))))});
    op(E.ro,b);op(E.rh,b);
  };
}
