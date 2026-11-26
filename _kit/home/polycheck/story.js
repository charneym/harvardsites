/* The story scene (BL/BY/DB): how a Polycheck test runs (polycheck.de home "A User-Friendly Testing System", Polycheck System,
   BIS Software), drawn as ONE fine-line cassette of eight panels kept on screen for all four steps.
   Step 1 (Serum): serum is pipetted onto the panels' membranes, 200 µl per panel (up to 30 allergens).
   Step 2 (Incubate): incubation by the protocol on a rocking shaker, timed.
   Step 3 (Develop): the membranes are washed several times; the AP substrate precipitates as lines where antibodies bound.
   Step 4 (Read): a flatbed scanner reads the cassette; the Biocheck Imaging Software gives a quantitative result per parameter.
   The report rows are the allergen codes of their Inhalation 10-I panel (polycheck.de > Products > Allergy). */
var SCW=760,SCH=520;
var PYB=[[3,0,2,4,0,1,0],[0,2,0,0,3,0,1],[1,0,0,2,0,0,4],[0,0,3,0,0,2,0],[2,1,0,0,0,3,0],[0,0,0,3,1,0,2],[0,3,0,0,2,0,0],[1,0,2,0,0,0,3]];
var PYC=["k202","t03","t02","t04","g06","w06","d01"];
function pyScene(o){
  var g='',mob=o.mob,i,k;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g id="pyCas">';
  /* the cassette frame (always) */
  g+='<path class="frm sD" d="M30 150H450V470H30Z"/>';
  for(i=0;i<8;i++){var px=48+i*50;
    g+='<path class="pan sD" d="M'+px+' 160H'+(px+38)+'V460H'+px+'Z"/>';
    g+='<path class="tab sD" d="M'+(px+5)+' 168H'+(px+33)+'V188H'+(px+5)+'Z"/>';
    g+='<path class="mem sD" d="M'+(px+9)+' 200H'+(px+29)+'V440H'+(px+9)+'Z"/>';
    g+='<rect class="ser" id="pyS'+i+'" x="'+(px+9)+'" y="200" width="20" height="240"/>';
    var bd='';for(k=0;k<7;k++){var v=PYB[i][k];if(v)bd+='<rect class="bnd b'+v+'" x="'+(px+11)+'" y="'+(213+k*33)+'" width="16" height="'+(v>2?3.2:2.4)+'"/>'}
    g+='<g class="bands" id="pyB'+i+'">'+bd+'</g>';
  }
  g+='<rect id="pyHi" class="hi" x="44" y="156" width="46" height="308"/>';
  g+='</g>';
  /* step 1: the pipette, travelling along the panels */
  g+='<g id="pyPip"><path class="pip" d="M0 0L-4 -40H4Z"/><path class="pip" d="M-7 -40H7V-94H-7Z"/><path class="pip" d="M-3 -94H3V-110H-3Z"/><circle class="drop" id="pyDrop" cx="0" cy="8" r="3"/></g>';
  /* step 2: the rocking shaker under the cassette, and the incubation timer */
  g+='<g id="pyShk"><path class="shk kD" d="M22 482H458V494H22Z"/><path class="shk kD" d="M60 494V506M420 494V506M240 474V482"/></g>';
  g+='<g id="pyTmr"><circle class="tmr" cx="600" cy="300" r="52"/><circle class="tmp" id="pyArc" cx="600" cy="300" r="52" transform="rotate(-90 600 300)"/><path class="tmh" id="pyHand" d="M600 300V258"/><path class="tmr" d="M588 238H612M600 238V248"/></g>';
  /* step 3: the wash, rinsing down the membranes */
  var wa='';for(i=0;i<8;i++){var wx=67+i*50;wa+='<path class="wash" d="M'+wx+' 206V236M'+(wx-4)+' 230L'+wx+' 236L'+(wx+4)+' 230"/>'}
  g+='<g id="pyWash">'+wa+'</g>';
  /* step 4: the scan line, and the report */
  g+='<g id="pyScan"><rect class="scg" x="-10" y="146" width="20" height="328"/><path class="scl" d="M0 146V474"/></g>';
  g+='<g id="pyRep"><path class="rep rD" d="M520 150H740V470H520Z"/><path class="rep rD" d="M536 178H724"/>';
  var bx=mob?624:604;for(k=0;k<7;k++){var ry=212+k*36;g+='<g class="row" id="pyR'+k+'"><text class="t c" x="536" y="'+(ry+5)+'">'+PYC[k]+'</text><path class="rb0" d="M'+bx+' '+ry+'H724"/><path class="rbv b'+PYB[0][k]+'" d="M'+bx+' '+ry+'H'+(bx+PYB[0][k]*(724-bx)/4)+'"/></g>'}
  g+='</g>';
  /* labels, per step, in the band above the cassette: each >= 8px clear of every stroke (DR3) */
  function L(id,cl,a,b){return '<g id="'+id+'"><text class="t '+cl+'" x="20" y="'+(mob?34:32)+'">'+a+'</text>'+(b?'<text class="t" x="20" y="'+(mob?62:54)+'">'+b+'</text>':'')+'</g>'}
  g+=mob?L("pyL1","s1","200 µL SERUM PER PANEL",""):L("pyL1","s1","200 µL OF SERUM PER PANEL","EACH MEMBRANE CARRIES ITS OWN ALLERGEN COMPOSITION");
  g+=mob?L("pyL2","s2","ROCKING SHAKER, TIMED",""):L("pyL2","s2","INCUBATION ON A ROCKING SHAKER","TIMES AND CONDITIONS AS THE PROTOCOL SETS THEM");
  g+=mob?L("pyL3","s1","WASH, THEN DEVELOP",""):L("pyL3","s1","WASHED SEVERAL TIMES, THEN DEVELOPED","THE AP SUBSTRATE PRECIPITATES WHERE ANTIBODIES BOUND");
  g+=mob?L("pyL4","s2","SCANNED, ONE RESULT EACH",""):L("pyL4","s2","FLATBED SCANNER AND BIOCHECK IMAGING SOFTWARE","A QUANTITATIVE RESULT FOR EVERY ALLERGEN ON THE PANEL");
  return g+'</svg>';
}
function scene(){return pyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),shk:dl(".kD"),rep:dl(".rD"),cas:$("#pyCas",svg),ser:$$(".ser",svg),bands:$$(".bands",svg),hi:$("#pyHi",svg),
    pip:$("#pyPip",svg),drop:$("#pyDrop",svg),shkG:$("#pyShk",svg),tmr:$("#pyTmr",svg),arc:$("#pyArc",svg),hand:$("#pyHand",svg),
    wash:$("#pyWash",svg),washes:$$("#pyWash path",svg),scan:$("#pyScan",svg),rows:$$("#pyRep .row",svg),rbv:$$("#pyRep .rbv",svg),
    L1:$("#pyL1",svg),L2:$("#pyL2",svg),L3:$("#pyL3",svg),L4:$("#pyL4",svg)};
  var AL=2*Math.PI*52;E.arc.style.strokeDasharray=AL+" "+AL;
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    /* step 1: the pipette moves panel to panel; each membrane takes its serum */
    var s1=seg(p,.03,.2),pos=s1*7.999,pi=Math.floor(pos),fr=pos-pi;
    var dip=Math.sin(Math.min(1,fr/.7)*Math.PI);
    E.pip.setAttribute("transform","translate("+(67+pi*50+(fr>.7?(fr-.7)/.3*50:0)).toFixed(1)+" "+(176+dip*16).toFixed(1)+")");
    op(E.pip,b*seg(p,.02,.05)*(1-seg(p,.21,.24)));op(E.drop,dip>.6?1:0);
    E.ser.forEach(function(r,i){var f=seg(pos,i+.15,i+.6);var w=seg(p,.52,.6);op(r,b*(.55*f*(p<.2?1:1)*(1-.85*w)))});
    op(E.L1,b*seg(p,.04,.1)*(1-seg(p,.22,.25)));
    /* step 2: the shaker, the cassette rocking gently, the timer running */
    draw(E.shk,b*seg(p,.27,.33)*(1-seg(p,.72,.76)));
    var rk=seg(p,.31,.34)*(1-seg(p,.46,.5))*Math.sin(p*90)*2.2;
    E.cas.setAttribute("transform","rotate("+rk.toFixed(2)+" 240 478)");
    op(E.tmr,b*seg(p,.28,.33)*(1-seg(p,.47,.5)));
    var tp=seg(p,.32,.47);E.arc.style.strokeDashoffset=(AL*(1-tp)).toFixed(1);E.hand.setAttribute("transform","rotate("+(tp*360).toFixed(1)+" 600 300)");
    op(E.L2,b*seg(p,.3,.36)*(1-seg(p,.47,.5)));
    /* step 3: the wash runs down, then the lines develop panel by panel */
    op(E.wash,b*seg(p,.52,.55)*(1-seg(p,.6,.63)));
    var wy=((p*30)%1)*14;E.washes.forEach(function(w){w.setAttribute("transform","translate(0 "+wy.toFixed(1)+")")});
    E.bands.forEach(function(g,i){op(g,b*seg(p,.6+i*.012,.66+i*.012))});
    op(E.L3,b*seg(p,.53,.58)*(1-seg(p,.72,.75)));
    /* step 4: the scan line passes; panel 1 is read into the report, one row per allergen */
    var sc=seg(p,.77,.88);E.scan.setAttribute("transform","translate("+(30+420*sc).toFixed(1)+" 0)");
    op(E.scan,b*seg(p,.76,.78)*(1-seg(p,.88,.9)));
    op(E.hi,b*seg(p,.86,.9));
    draw(E.rep,b*seg(p,.78,.86));
    E.rows.forEach(function(r,k){op(r,b*seg(p,.84+k*.015,.88+k*.015))});
    op(E.L4,b*seg(p,.79,.85));
  };
}
