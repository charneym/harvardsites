/* The story scene (BL/BY/DB): how a Neuro-i SS-OCT scan works, as ONE continuous fine-line drawing. A sagittal eye with
   the wearable headset in front of it. Step 1 (Align): the headset comes up to the eye and its near-infrared beam
   finds the pupil and the retina. Step 2 (Scan): the beam sweeps across the macula and, in the inset, the cross-section
   (B-scan) of the retina builds up line by line behind the scan line. Step 3 (Segment): the AI traces the layer
   boundaries in the logo's blues and the key layers are named. Step 4 (Report): an ETDRS thickness map and a
   scan-by-scan trend are drawn for the doctor. Driven by the scrubbed progress. Sources: junebrain.com (Neuro-i SS-OCT,
   Reading Center, 2026 pilot: automated acquisition, AI segmentation of 8+ layers, ETDRS subfields, reports to
   providers; weekly or monthly scans), NSF SBIR/STTR abstracts 1819326 and 2053315, NOBIC BioChallenge Q&A (2025). */
var SCW=800,SCH=520,EX=230,EY=262,ER=138,RR=128,PX0=460,PX1=660,PY0=120,PY1=320,FX=560;
var JBL=[[175,24],[185,20],[199,16],[209,10],[219,6],[241,0],[249,0],[259,0],[269,0],[275,0]];
var JBC=["#2f3b97","#30489c","#3054a8","#3c6cb4","#4884c0","#4890cc","#549cd8","#54a8d8","#60b4e4","#5fb7e7"];
function jbY(i,x){var L=JBL[i],g=Math.exp(-Math.pow(x-FX,2)/(2*22*22));return L[0]+L[1]*g+2.2*Math.sin((x-PX0)/38+i*.3)*(i>4?.6:1)}
function jbLayer(i){var d="",x;for(x=PX0;x<=PX1;x+=4)d+=(x===PX0?"M":"L")+x+" "+jbY(i,x).toFixed(1);return d}
function jbPt(th,r){var a=th*Math.PI/180;return [EX+r*Math.cos(a),EY+r*Math.sin(a)]}
function jbArc(r,a0,a1){var p=jbPt(a0,r),q=jbPt(a1,r);return 'M'+p[0].toFixed(1)+' '+p[1].toFixed(1)+'A'+r+' '+r+' 0 '+(a1-a0>180?1:0)+' 1 '+q[0].toFixed(1)+' '+q[1].toFixed(1)}
function jbScene(o){
  var g='<svg class="'+(o.mob?"mob":"")+'" viewBox="'+(o.mob?"0 84 800 432":"0 0 "+SCW+" "+SCH)+'" aria-hidden="true"><defs><clipPath id="jbClip"><rect id="jbClipR" x="'+PX0+'" y="'+PY0+'" width="0" height="'+(PY1-PY0)+'"/></clipPath></defs>',i;
  var c1=jbPt(-155,ER),c2=jbPt(155,ER);
  /* the eye: sclera, cornea, iris, lens, retina, optic nerve */
  g+='<g id="jbEye"><path class="sc sD" d="'+jbArc(ER,-155,155)+'"/>';
  g+='<path class="co sD" d="M'+c1[0].toFixed(1)+' '+c1[1].toFixed(1)+'Q60 '+EY+' '+c2[0].toFixed(1)+' '+c2[1].toFixed(1)+'"/>';
  g+='<path class="ir sD" d="M112 226V247M112 277V298"/><path class="ln sD" d="M128 232C146 236 146 288 128 292C110 288 110 236 128 232Z"/>';
  var f0=jbPt(-4,RR),f1=jbPt(4,RR);
  g+='<path class="rt sD" d="'+jbArc(RR,-58,-4)+'Q'+(EX+RR+7)+' '+EY+' '+f1[0].toFixed(1)+' '+f1[1].toFixed(1)+jbArc(RR,4,58).replace(/^M[^A]+/,'')+'"/>';
  var n0=jbPt(24,ER),n1=jbPt(34,ER);
  g+='<path class="nv sD" d="M'+n0[0].toFixed(1)+' '+n0[1].toFixed(1)+'C'+(n0[0]+26).toFixed(1)+' '+(n0[1]+8).toFixed(1)+' 396 330 418 350M'+n1[0].toFixed(1)+' '+n1[1].toFixed(1)+'C'+(n1[0]+20).toFixed(1)+' '+(n1[1]+10).toFixed(1)+' 384 352 404 368"/>';
  g+='<path class="mac" id="jbMac" d="'+jbArc(RR-1,-14,14)+'"/></g>';
  /* the headset in front of the eye */
  g+='<g id="jbHs"><path class="hs" d="M50 196C26 196 14 210 14 232V292C14 314 26 328 50 328"/><path class="hs2" d="M50 214C36 214 30 224 30 236V288C30 300 36 310 50 310"/><path class="hs2" d="M14 248H4M14 276H4"/><circle class="src" cx="50" cy="'+EY+'" r="4"/></g>';
  /* the beam: source to pupil, pupil to retina */
  g+='<path class="bm" id="jbB1" d="M50 '+EY+'L112 '+EY+'"/><path class="bm" id="jbB2" d="M112 '+EY+'L358 '+EY+'"/><circle class="spot" id="jbSp" cx="358" cy="'+EY+'" r="4"/>';
  /* zoom guides from the macula to the inset */
  var m0=jbPt(-14,RR),m1=jbPt(14,RR);
  g+='<path class="gd" id="jbGd" d="M'+m0[0].toFixed(1)+' '+m0[1].toFixed(1)+'L'+PX0+' '+PY0+'M'+m1[0].toFixed(1)+' '+m1[1].toFixed(1)+'L'+PX0+' '+PY1+'"/>';
  /* the inset: a cross-section of the retina */
  g+='<path class="pf" id="jbPf" d="M'+PX0+' '+PY0+'H'+PX1+'V'+PY1+'H'+PX0+'Z"/>';
  g+='<g clip-path="url(#jbClip)">';for(i=0;i<JBL.length;i++)g+='<path class="ly" d="'+jbLayer(i)+'"/>';g+='</g>';
  g+='<g id="jbSeg">';for(i=0;i<JBL.length;i++)g+='<path class="sg" style="stroke:'+JBC[i]+'" d="'+jbLayer(i)+'"/>';g+='</g>';
  g+='<path class="scan" id="jbScan" d="M'+PX0+' '+(PY0+6)+'V'+(PY1-6)+'"/>';
  /* step 4: the ETDRS thickness map and the scan-by-scan trend */
  g+='<g id="jbMap"><circle class="mp mpf" cx="560" cy="420" r="16"/><circle class="mp" cx="560" cy="420" r="32"/><circle class="mp" cx="560" cy="420" r="46"/>';
  [45,135,225,315].forEach(function(a){var r=a*Math.PI/180;g+='<path class="mp" d="M'+(560+16*Math.cos(r)).toFixed(1)+' '+(420+16*Math.sin(r)).toFixed(1)+'L'+(560+46*Math.cos(r)).toFixed(1)+' '+(420+46*Math.sin(r)).toFixed(1)+'"/>'});g+='</g>';
  var TD=[[652,418],[676,414],[700,420],[724,412],[748,416],[772,410]];
  g+='<g id="jbTr"><path class="ax" d="M644 452H784"/><path class="tl" id="jbTl" d="M'+TD.map(function(p){return p.join(" ")}).join("L")+'"/>';
  TD.forEach(function(p){g+='<circle class="td" cx="'+p[0]+'" cy="'+p[1]+'" r="3.4"/>'});g+='</g>';
  /* labels (>=8px clear of every stroke; phones get fewer, larger ones) */
  if(!o.mob){
    g+='<g id="jl1"><text class="t" x="12" y="364">HEADSET</text><text class="a" x="150" y="320">NEAR-INFRARED LIGHT</text></g>';
    g+='<g id="jl2"><text class="t" x="'+PX0+'" y="106">CROSS-SECTION OF THE MACULA</text><text class="t" x="392" y="398">OPTIC NERVE</text></g>';
    var LB=[["NERVE FIBRES",1,0,164],["GANGLION CELLS",2,1,200],["PHOTORECEPTORS",7,6,244],["RPE",8,8,290]];
    g+='<g id="jl3">';LB.forEach(function(l){var ya=(jbY(l[1],PX1)+jbY(l[2],PX1))/2;g+='<path class="ld" d="M'+(PX1+4)+' '+ya.toFixed(1)+'L'+(PX1+12)+' '+(l[3]-4)+'H'+(PX1+16)+'"/><text class="a" x="'+(PX1+20)+'" y="'+l[3]+'">'+l[0]+'</text>'});g+='</g>';
    g+='<g id="jl4"><text class="t" x="560" y="496" text-anchor="middle">THICKNESS MAP</text><text class="t" x="714" y="496" text-anchor="middle">SCAN BY SCAN</text></g>';
  }else{
    g+='<g id="jl1"><text class="t" x="6" y="368">HEADSET</text><text class="a" x="150" y="330">LIGHT IN</text></g>';
    g+='<g id="jl2"><text class="t" x="'+PX0+'" y="104">RETINA</text></g>';
    g+='<g id="jl3"><text class="a" x="'+(PX0+110)+'" y="104">8+ LAYERS</text></g>';
    g+='<g id="jl4"><text class="t" x="560" y="500" text-anchor="middle">THICKNESS</text><text class="t" x="714" y="500" text-anchor="middle">OVER TIME</text></g>';
  }
  return g+'</svg>';
}
function scene(){return jbScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;p.style.strokeDashoffset=L;return [p,L]})};
  var E={base:dl("#jbEye .sD"),seg:dl("#jbSeg .sg"),map:dl("#jbMap .mp"),gd:dl("#jbGd"),pf:dl("#jbPf"),pfe:$("#jbPf",svg),mpf:$("#jbMap .mpf",svg),tl:dl("#jbTl"),b1:dl("#jbB1"),
    hs:$("#jbHs",svg),b2:$("#jbB2",svg),sp:$("#jbSp",svg),mac:$("#jbMac",svg),clip:$("#jbClipR",svg),scan:$("#jbScan",svg),tr:$("#jbTr",svg),
    tds:$$("#jbTr .td",svg),ax:$("#jbTr .ax",svg),l1:$("#jl1",svg),l2:$("#jl2",svg),l3:$("#jl3",svg),l4:$("#jl4",svg)};
  var lastB=-1;
  function draw(list,v){v=Math.max(0,Math.min(1,v));list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    /* step 1: the headset comes up to the eye; the beam reaches the pupil, then the centre of the retina */
    var up=sm2(seg(p,0,.08)),b1=seg(p,.06,.12),b2=sm2(seg(p,.12,.2));
    E.hs.setAttribute("transform","translate("+(-26*(1-up)).toFixed(1)+" 0)");op(E.hs,b*(.25+.75*up));
    draw(E.b1,b1);E.b1[0][0].style.opacity=b1>0?1:0;
    /* step 2: the beam sweeps the macula (-14..14 deg) and the cross-section builds behind the scan line */
    var sw=seg(p,.3,.5),th=sw>0?-14+28*sw:0,rp=jbPt(th,RR),bx=112+(rp[0]-112)*b2,by=EY+(rp[1]-EY)*b2;
    var bOut=1-sm2(seg(p,.8,.88));
    E.b2.setAttribute("d","M112 "+EY+"L"+bx.toFixed(1)+" "+by.toFixed(1));op(E.b2,b*(b2>0?1:0)*bOut);
    E.sp.setAttribute("cx",bx.toFixed(1));E.sp.setAttribute("cy",by.toFixed(1));op(E.sp,b*seg(p,.17,.2)*bOut);
    op(E.mac,b*seg(p,.24,.3));
    draw(E.gd,seg(p,.24,.32));draw(E.pf,seg(p,.26,.34));E.pfe.style.fillOpacity=seg(p,.3,.36).toFixed(3);
    E.clip.setAttribute("width",(sw*(PX1-PX0)).toFixed(1));
    var sx=PX0+sw*(PX1-PX0);E.scan.setAttribute("transform","translate("+(sx-PX0).toFixed(1)+" 0)");op(E.scan,b*seg(p,.3,.32)*(1-seg(p,.5,.54)));
    /* step 3: the AI traces each boundary in the logo's blues, inner to outer, then the layers are named */
    E.seg.forEach(function(a,i){var s=seg(p,.55+i*.012,.62+i*.012);a[0].style.strokeDashoffset=(a[1]*(1-s)).toFixed(1);a[0].style.opacity=s>0?1:0});
    /* step 4: the thickness map and the trend draw in */
    draw(E.map,seg(p,.8,.9));E.mpf.style.fillOpacity=seg(p,.86,.92).toFixed(3);op(E.ax,seg(p,.82,.86));draw(E.tl,seg(p,.84,.96));
    E.tds.forEach(function(d,i){op(d,seg(p,.84+i*.02,.86+i*.02))});
    op(E.l1,b*seg(p,.08,.14)*(1-seg(p,.5,.55)));op(E.l2,b*seg(p,.3,.36)*(1-seg(p,.75,.8)));op(E.l3,seg(p,.64,.7));op(E.l4,seg(p,.88,.94));
  };
}
function sm2(x){return x*x*(3-2*x)}
