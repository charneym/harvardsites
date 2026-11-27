/* The story scene (BL/BY/DB): one plastic film web, corona treated, as coronasupplies.co.uk describes it ("to obtain optimum adhesion
   when printing, laminating or coating, the surface energy of the substrate has to be raised"). ONE side elevation kept on screen,
   the same web carried through all three steps (no cross-fades):
   1 Roll: the film runs over the treater's base roll, covered in its dielectric (silicone sleeve or ceramic).
   2 Corona: the power supply drives the electrode; the discharge in the air gap treats the film, and the treated length runs on.
   3 Dyne test: a test pen drawn across the web beads up on the untreated film and wets out on the treated film.
   Sizes are illustrative. */
var CS={rx:250,ry:330,rr:70,fy:260,ex0:205,ex1:295};
function csScene(o){
  var g='',mob=o.mob,C=CS,i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 150 520 320" aria-hidden="true"><defs>'+
     '<pattern id="csHt" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0V9" stroke="rgba(242,245,243,.2)" stroke-width="1"/></pattern>'+
     '<clipPath id="csRc"><circle cx="'+C.rx+'" cy="'+C.ry+'" r="'+(C.rr-1)+'"/></clipPath></defs>';
  /* the base roll: steel core, dielectric sleeve */
  g+='<g id="csRo"><circle class="slv" cx="'+C.rx+'" cy="'+C.ry+'" r="'+C.rr+'"/><circle class="core" cx="'+C.rx+'" cy="'+C.ry+'" r="'+(C.rr-12)+'"/><circle class="hub" cx="'+C.rx+'" cy="'+C.ry+'" r="9"/><path id="csSp" class="spin" d=""/></g>';
  /* the film web over the top of the roll; the treated length is drawn over it as it runs on */
  g+='<path class="flm" d="M10 '+C.fy+'H510"/><path id="csTr" class="trt" d=""/><g id="csMv" class="mv"></g>';
  /* the electrode above the roll, its cable and the power supply */
  g+='<g id="csEl"><rect class="blk" x="'+C.ex0+'" y="'+(C.fy-54)+'" width="'+(C.ex1-C.ex0)+'" height="34"/><rect class="hat" x="'+C.ex0+'" y="'+(C.fy-54)+'" width="'+(C.ex1-C.ex0)+'" height="34"/>'+
     '<rect class="elc" x="'+(C.ex0+8)+'" y="'+(C.fy-20)+'" width="'+(C.ex1-C.ex0-16)+'" height="6"/></g>';
  g+='<path id="csCb" class="cab" d="M'+C.ex0+' '+(C.fy-37)+'H120V360"/>';
  g+='<g id="csPs"><rect class="blk" x="40" y="360" width="100" height="70"/><rect class="scr" x="52" y="372" width="44" height="18"/><circle class="led" cx="118" cy="381" r="4"/><circle class="hub" cx="60" cy="412" r="6"/><circle class="hub" cx="82" cy="412" r="6"/></g>';
  /* the discharge in the gap: fine dashes, flickering on a slow cycle */
  g+='<g id="csDc" class="dc">';for(i=0;i<9;i++){var x=C.ex0+14+i*((C.ex1-C.ex0-28)/8);g+='<path d="M'+x.toFixed(1)+' '+(C.fy-13)+'V'+(C.fy-2)+'"/>'}g+='</g>';
  /* the dyne test: the web seen from above below the roll, a pen stroke across untreated and treated film */
  g+='<g id="csTs"><rect class="web" x="300" y="400" width="210" height="46"/><path class="dv" d="M405 400V446"/>'+
     '<g id="csBd"></g><path id="csWt" class="wet" d=""/><g id="csPn" class="pen"><path d="M0 0L-6 -10L22 -40L28 -30Z"/></g></g>';
  var T=function(id,x,y,s,a){return '<text class="t" id="'+id+'" x="'+x+'" y="'+y+'"'+(a?' text-anchor="'+a+'"':'')+'>'+s+'</text>'};
  g+=T("csLf",14,C.fy-10,"FILM");
  g+=T("csLr",C.rx,C.ry+C.rr+24,mob?"BASE ROLL":"DIELECTRIC-COVERED ROLL","middle");
  g+=T("csLe",C.ex1+10,C.fy-38,"ELECTRODE");
  g+=T("csLp",40,450,mob?"POWER":"POWER SUPPLY");
  g+=T("csLu",352,466,"UNTREATED","middle");g+=T("csLt",458,466,"TREATED","middle");
  var L=mob?["THE ROLL","CORONA","DYNE TEST"]:["TREATER STATION · OVER THE DIELECTRIC","IGBT POWER SUPPLY · SURFACE ENERGY RAISED","DYNE PEN · BEADS, THEN WETS OUT"];
  for(i=0;i<3;i++)g+='<text class="t cl cap" id="csC'+i+'" x="8" y="186">'+L[i]+'</text>';
  return g+'</svg>';
}
function scene(){return csScene({mob:MOBILE()?1:0})}
function csE(u){u=u<0?0:u>1?1:u;return u<.5?2*u*u:1-Math.pow(-2*u+2,2)/2}
function storyDraw(svg){
  var C=CS,Q=function(s){return svg.querySelector(s)};
  var E={sp:Q("#csSp"),tr:Q("#csTr"),mv:Q("#csMv"),el:Q("#csEl"),cb:Q("#csCb"),ps:Q("#csPs"),dc:Q("#csDc"),ts:Q("#csTs"),bd:Q("#csBd"),wt:Q("#csWt"),pn:Q("#csPn"),
    L:{f:Q("#csLf"),r:Q("#csLr"),e:Q("#csLe"),p:Q("#csLp"),u:Q("#csLu"),t:Q("#csLt")},C:[0,1,2].map(function(k){return Q("#csC"+k)})};
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function f1(v){return v.toFixed(1)}
  var beads="";for(var k=0;k<7;k++){var x=312+k*13;beads+='<circle class="bead" cx="'+x+'" cy="423" r="'+(3+(k%3))+'"/>'}E.bd.innerHTML=beads;
  return function(p,bb){
    if(!svg.isConnected)return;
    /* the web runs throughout: travel marks along the film, the roll turning with it */
    var run=p*900,m="";for(var k=-1;k<14;k++){var x=10+((k*40+run)%560);if(x>10&&x<505)m+='<path d="M'+f1(x)+' '+(C.fy-4)+'l6 4l-6 4"/>'}E.mv.innerHTML=m;op(E.mv,bb*.8);
    var a=run/C.rr;E.sp.setAttribute("d","M"+f1(C.rx+(C.rr-12)*Math.cos(a))+" "+f1(C.ry+(C.rr-12)*Math.sin(a))+"L"+C.rx+" "+C.ry);
    /* 2: corona on; the treated length grows from the electrode downstream */
    var on=csE((p-.36)/.08),tr=csE(seg(p,.4,.66));
    op(E.el,bb*seg(p,.3,.36));op(E.cb,bb*seg(p,.32,.38));op(E.ps,bb*seg(p,.32,.38));
    var fl=.55+.45*Math.abs(Math.sin(p*90));op(E.dc,bb*on*fl*(1-seg(p,.9,.96)*.0));
    E.tr.setAttribute("d",tr>0?"M"+C.ex0+" "+C.fy+"H"+f1(C.ex0+(505-C.ex0)*tr):"");op(E.tr,bb);
    /* 3: the dyne test; the pen moves left to right; beads on the untreated half, a continuous wet line on the treated half */
    var ts=seg(p,.68,.72),pen=csE(seg(p,.72,.94)),px=310+190*pen;
    op(E.ts,bb*ts);E.pn.setAttribute("transform","translate("+f1(px)+" 423)");
    var bdN=Math.min(7,Math.floor((px-306)/13));[].forEach.call(E.bd.children,function(c,i){c.style.opacity=i<bdN?1:0});
    E.wt.setAttribute("d",px>412?"M412 423H"+f1(Math.min(px,500)):"");
    /* labels */
    op(E.L.f,bb*(1-seg(p,.3,.34)));op(E.L.r,bb*(1-seg(p,.62,.66)));op(E.L.e,bb*seg(p,.36,.4)*(1-seg(p,.62,.66)));op(E.L.p,bb*seg(p,.36,.4)*(1-seg(p,.62,.66)));
    op(E.L.u,bb*seg(p,.72,.76));op(E.L.t,bb*seg(p,.84,.88));
    var W=[[0,1/3],[1/3,2/3],[2/3,1.01]];
    E.C.forEach(function(c,k){var A=W[k][0],Z=W[k][1];op(c,bb*(k===0?1:seg(p,A,A+.03))*(k===2?1:(1-seg(p,Z-.03,Z))))});
  };
}
