/* The story scene (BL/BY/DB): how a BIOREF control is made, from bioref.com > Products and About Us. Three vials, three
   control levels, stay on screen for all three steps:
   Step 1 (Matrix): the vials fill with the liquid human serum matrix.
   Step 2 (Levels): a pipette spikes each vial with analyte; the serum deepens from low to normal to high.
   Step 3 (Filling): caps go on, the customer's label goes on, and the shelf life is stated (up to 5 years at -20 °C). */
var SCW=760,SCH=520,VX=[215,380,545];
function vialD(cx){return "M"+(cx-62)+" 440V215Q"+(cx-62)+" 192 "+(cx-34)+" 180V160H"+(cx+34)+"V180Q"+(cx+62)+" 192 "+(cx+62)+" 215V440Z"}
function brScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true"><defs>'+
    VX.map(function(cx,i){return '<clipPath id="brC'+i+'"><path d="'+vialD(cx)+'"/></clipPath>'}).join("")+'</defs>';
  g+='<text class="t" x="20" y="30">'+(mob?"THREE LEVELS":"THREE CONTROL LEVELS, SCHEMATIC")+'</text>';
  /* the bench */
  g+='<path class="edge sD" d="M110 440H650"/>';
  /* serum in each vial (height and tint are animated) */
  VX.forEach(function(cx,i){
    g+='<g clip-path="url(#brC'+i+')"><rect class="ser" id="brS'+i+'" x="'+(cx-63)+'" y="440" width="126" height="0"/><rect class="tint" id="brT'+i+'" x="'+(cx-63)+'" y="440" width="126" height="0"/>'+
      '<path class="msc" id="brM'+i+'" d="M'+(cx-62)+' 440H'+(cx+62)+'"/></g>';
  });
  /* the glass */
  VX.forEach(function(cx){g+='<path class="glass sD" d="'+vialD(cx)+'"/><path class="shine" d="M'+(cx-42)+' 222V418"/>'});
  /* step 2: the pipette and its drop */
  g+='<g id="brPp"><path class="pip" d="M-7 -96H7V-40L2 -10H-2L-7 -40Z"/><path class="pipb" d="M-11 -110H11V-96H-11Z"/></g><circle id="brDr" class="drop" cx="0" cy="0" r="4.5"/>';
  /* step 3: caps and labels */
  VX.forEach(function(cx,i){
    g+='<g class="capg" id="brK'+i+'"><rect class="cap" x="'+(cx-42)+'" y="120" width="84" height="44"/>'+[-30,-20,-10,0,10,20,30].map(function(dx){return '<path class="rib" d="M'+(cx+dx)+' 125V159"/>'}).join("")+'</g>';
    g+='<g class="lbg" id="brB'+i+'"><rect class="lbl" x="'+(cx-62)+'" y="318" width="124" height="76"/><path class="lst" d="M'+(cx-62)+' 332H'+(cx+62)+'"/></g>';
  });
  g+='<path id="brOk" class="ok" d="M40 376L54 390L80 362"/>';
  /* labels, per step (kept clear of the vials, pipette and caps) */
  g+='<g id="brL1"><text class="t" x="20" y="320">HUMAN</text><text class="t" x="20" y="'+(mob?342:338)+'">SERUM</text><text class="t s1" x="20" y="'+(mob?364:356)+'">MATRIX</text></g>';
  g+='<g id="brL2">'+["LOW","NORMAL","HIGH"].map(function(s,i){return '<text class="t s1" x="'+VX[i]+'" y="476" text-anchor="middle">'+s+'</text>'}).join("")+
    '<text class="t" x="624" y="'+(mob?282:276)+'">ANALYTES</text><text class="t" x="624" y="'+(mob?304:294)+'">SPIKED</text></g>';
  g+='<g id="brL3"><text class="t s1" x="20" y="'+(mob?84:80)+'">'+(mob?"−20 °C · 5 YEARS":"−20 °C · UP TO 5 YEARS")+'</text><text class="t" x="624" y="'+(mob?346:344)+'">YOUR</text><text class="t" x="624" y="'+(mob?368:362)+'">LABEL</text></g>';
  /* step captions */
  g+='<g id="lb1"><text class="a" x="20" y="508">1 · MATRIX</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="508">2 · LEVELS</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="508">3 · FILLING</text></g>';
  return g+'</svg>';
}
function scene(){return brScene({mob:MOBILE()?1:0})}
function sm01(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var ix=[0,1,2];
  var E={base:dl(".sD"),ser:ix.map(function(i){return $("#brS"+i,svg)}),tint:ix.map(function(i){return $("#brT"+i,svg)}),msc:ix.map(function(i){return $("#brM"+i,svg)}),
    caps:ix.map(function(i){return $("#brK"+i,svg)}),lbls:ix.map(function(i){return $("#brB"+i,svg)}),shine:$$(".shine",svg),
    pp:$("#brPp",svg),dr:$("#brDr",svg),ok:dl("#brOk"),okEl:$("#brOk",svg),L1:$("#brL1",svg),L2:$("#brL2",svg),L3:$("#brL3",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),t0:svg.querySelector("text.t")};
  var lastB=-1,TG=[.3,.6,.9];
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);op(E.t0,b);E.shine.forEach(function(s){op(s,b)})}
    VX.forEach(function(cx,i){
      /* step 1: the serum matrix rises in each vial, slightly staggered */
      var f=seg(p,.03+i*.05,.24+i*.05),y=440-165*f;
      E.ser[i].setAttribute("y",y.toFixed(1));E.ser[i].setAttribute("height",(440-y).toFixed(1));
      E.tint[i].setAttribute("y",y.toFixed(1));E.tint[i].setAttribute("height",(440-y).toFixed(1));
      E.msc[i].setAttribute("d","M"+(cx-62)+" "+y.toFixed(1)+"H"+(cx+62));
      op(E.ser[i],b*Math.min(1,f*4));op(E.msc[i],b*Math.min(1,f*4));
      /* step 2: each vial deepens to its level as the pipette passes */
      op(E.tint[i],b*TG[i]*seg(p,.42+i*.08,.5+i*.08));
      /* step 3: caps settle, then the labels */
      var c=seg(p,.7+i*.03,.78+i*.03);op(E.caps[i],b*c);E.caps[i].setAttribute("transform","translate(0 "+(-26*(1-c)).toFixed(1)+")");
      op(E.lbls[i],b*seg(p,.8+i*.03,.86+i*.03));
    });
    op(E.L1,b*seg(p,.04,.12)*(1-seg(p,.3,.36)));
    /* the pipette visits each vial in turn and releases a drop */
    var q=seg(p,.38,.66),pos=Math.min(2.999,q*3),i0=Math.floor(pos),fr=pos-i0;
    var px=VX[i0]+(i0<2&&fr>.7?(VX[i0+1]-VX[i0])*sm01((fr-.7)/.3):0);
    op(E.pp,b*seg(p,.36,.4)*(1-seg(p,.64,.68)));E.pp.setAttribute("transform","translate("+px.toFixed(1)+" 152)");
    var dq=fr<.6?fr/.6:1;op(E.dr,b*(q>0&&q<1&&dq<1?1:0));
    E.dr.setAttribute("cx",VX[i0].toFixed(1));E.dr.setAttribute("cy",(152+dq*118).toFixed(1));
    op(E.L2,b*seg(p,.4,.48)*(1-seg(p,.66,.7)));
    op(E.L3,b*seg(p,.72,.8));
    op(E.okEl,b*seg(p,.88,.92));draw(E.ok,b*seg(p,.89,.96));
    op(E.l1,b*seg(p,0,.06)*(1-seg(p,.33,.38)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.66,.7)));op(E.l3,b*seg(p,.7,.78));
  };
}
