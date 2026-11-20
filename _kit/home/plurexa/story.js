/* the story scene (BL/BY/DB): ONE schematic cross-section of a kidney tubule, redrawn every frame as it changes through the
   four steps of Plurexa's science (from the NIH STTR abstract, R42DK136452). 1 Healthy: a ring of epithelial cells around a
   narrow lumen, the apical actomyosin belt lit with NMII motors. 2 PKD: the lumen fills and the tubule swells into a cyst,
   the cells flattening. 3 NMII inhibited: the motors dim and the cyst grows larger. 4 NMII activated: the motors glow and
   the cyst is held much smaller, against a dashed ghost of the untreated size. One figure, continuous morph. */
function scene(){
  var mob=MOBILE();
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="799" height="559"/>';
  g+='<path class="sD tk" d="M24 40H40M24 40V56M776 40H760M776 40V56M24 520H40M24 520V504M776 520H760M776 520V504"/>';
  g+='<text x="44" y="536" class="t">CROSS-SECTION · KIDNEY TUBULE · SCHEMATIC</text></g>';
  g+='<g id="scGhost"><circle class="ghost" cx="400" cy="282" r="218"/><path class="ldr" id="ghL" d=""/><text class="t g" id="ghT" x="0" y="0">WITHOUT ACTIVATOR</text></g>';
  g+='<circle class="lumen" id="scLum" cx="400" cy="282" r="70"/>';
  g+='<path class="cells" id="scCells" d=""/><path class="nuc" id="scNuc" d=""/>';
  g+='<circle class="belt" id="scBelt" cx="400" cy="282" r="74"/><path class="myo" id="scMyo" d=""/>';
  g+='<g id="scAnn"><path class="ldr" id="anL1" d=""/><text class="t" id="anT1" x="0" y="0">NMII MOTORS</text>'+
     '<path class="ldr" id="anL2" d=""/><text class="t" id="anT2" x="0" y="0" text-anchor="end">EPITHELIAL CELLS</text>'+
     '<text class="t c" id="anT3" x="400" y="284" text-anchor="middle">LUMEN</text></g>';
  g+='<text x="44" y="64" class="a" id="st1">1 · HEALTHY TUBULE</text><text x="44" y="64" class="a" id="st2">2 · PKD: A CYST FORMS</text>'+
     '<text x="44" y="64" class="a" id="st3">3 · NMII INHIBITED</text><text x="44" y="64" class="a" id="st4">4 · NMII ACTIVATED</text>';
  return g+'</svg>';
}
function storyDraw(svg){
  var CX=400,CY=280,N=24,f=function(n){return n.toFixed(1)};
  var E={base:$$("#scBase .sD",svg),fade:$$("#scBase .neat, #scBase text",svg),gh:$("#scGhost",svg),ghC:$("#scGhost .ghost",svg),ghL:$("#ghL",svg),ghT:$("#ghT",svg),
    lum:$("#scLum",svg),cells:$("#scCells",svg),nuc:$("#scNuc",svg),belt:$("#scBelt",svg),myo:$("#scMyo",svg),ann:$("#scAnn",svg),
    l1:$("#anL1",svg),t1:$("#anT1",svg),l2:$("#anL2",svg),t2:$("#anT2",svg),t3:$("#anT3",svg),st:[$("#st1",svg),$("#st2",svg),$("#st3",svg),$("#st4",svg)]};
  E.base.forEach(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;p._L=L});
  function L(a,b,t){return a+(b-a)*t}
  function pol(r,a){return [CX+r*Math.cos(a),CY+r*Math.sin(a)]}
  return function(p,b){
    if(!svg.isConnected)return;
    E.base.forEach(function(el){el.style.strokeDashoffset=f(el._L*(1-b))});E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)});
    var s2=seg(p,.25,.44),s3=seg(p,.5,.69),s4=seg(p,.75,.94);
    /* apical (inner) radius and wall thickness through the four states */
    var ri=70,th=50;ri=L(ri,150,s2);th=L(th,30,s2);ri=L(ri,198,s3);th=L(th,22,s3);ri=L(ri,138,s4);th=L(th,32,s4);
    var m=1;m=L(m,.75,s2);m=L(m,.12,s3);m=L(m,1,s4);var glow=s4;
    var wob=s2*(1-s4)*.06,ro=ri+th,grow=(.86+.14*b)*1.1;
    var cd="",nd="",md="";
    function R(r,a){return r*grow*(1+wob*Math.sin(a*3+.6)+wob*.5*Math.sin(a*5))}
    for(var i=0;i<N;i++){
      var a0=i/N*Math.PI*2-Math.PI/2,a1=(i+1)/N*Math.PI*2-Math.PI/2,am=(a0+a1)/2,g0=.012,
          p1=pol(R(ri,a0),a0+g0),p2=pol(R(ro,a0),a0+g0),p3=pol(R(ro,a1),a1-g0),p4=pol(R(ri,a1),a1-g0);
      cd+="M"+f(p1[0])+" "+f(p1[1])+"L"+f(p2[0])+" "+f(p2[1])+"A"+f(R(ro,am))+" "+f(R(ro,am))+" 0 0 1 "+f(p3[0])+" "+f(p3[1])+"L"+f(p4[0])+" "+f(p4[1])+"A"+f(R(ri,am))+" "+f(R(ri,am))+" 0 0 0 "+f(p1[0])+" "+f(p1[1])+"Z";
      /* nuclei flatten with the cell: an ellipse, long axis tangential */
      var rn=(R(ri,am)+R(ro,am))/2,nr=Math.max(3.2,th*.17),nx=pol(rn,am),ex=nr*1.25,rot=f(am*180/Math.PI+90);
      var tx=-Math.sin(am),ty=Math.cos(am),q1=[nx[0]+tx*ex,nx[1]+ty*ex],q2=[nx[0]-tx*ex,nx[1]-ty*ex];
      nd+="M"+f(q1[0])+" "+f(q1[1])+"A"+f(ex)+" "+f(nr*.78)+" "+rot+" 0 1 "+f(q2[0])+" "+f(q2[1])+"A"+f(ex)+" "+f(nr*.78)+" "+rot+" 0 1 "+f(q1[0])+" "+f(q1[1])+"Z";
      /* an NMII bipolar filament at each junction, just inside the apical surface: a short bar with two heads */
      var j=pol(R(ri,a0)+5,a0),hl=7,hx=-Math.sin(a0)*hl,hy=Math.cos(a0)*hl,nx2=Math.cos(a0)*3.2,ny2=Math.sin(a0)*3.2;
      md+="M"+f(j[0]-hx)+" "+f(j[1]-hy)+"L"+f(j[0]+hx)+" "+f(j[1]+hy)+"M"+f(j[0]+hx)+" "+f(j[1]+hy)+"l"+f(nx2)+" "+f(ny2)+"M"+f(j[0]-hx)+" "+f(j[1]-hy)+"l"+f(nx2)+" "+f(ny2);
    }
    E.cells.setAttribute("d",cd);E.nuc.setAttribute("d",nd);E.myo.setAttribute("d",md);
    var rb=(ri+5)*grow;E.belt.setAttribute("r",f(rb));E.lum.setAttribute("r",f(ri*grow));
    E.cells.style.opacity=E.nuc.style.opacity=b.toFixed(3);E.lum.style.opacity=(b*(.5+.5*s2)).toFixed(3);
    E.belt.style.opacity=(b*(.18+.7*m)).toFixed(3);E.myo.style.opacity=(b*(.15+.85*m)).toFixed(3);
    E.myo.style.strokeWidth=E.belt.style.strokeWidth=(1.4+1.2*glow).toFixed(2);
    svg.classList.toggle("on4",glow>.5);
    /* ghost of the untreated cyst in step 4 */
    E.gh.style.opacity=(b*s4).toFixed(3);var gr=220*grow;E.ghC.setAttribute("r",f(gr));
    var gp=pol(gr,Math.PI*.2);E.ghL.setAttribute("d","M"+f(gp[0])+" "+f(gp[1])+"l22 16h14");E.ghT.setAttribute("x",f(gp[0]+42));E.ghT.setAttribute("y",f(gp[1]+20));
    /* annotations follow the ring: the motors to the upper right, the cells to the lower left */
    var b1=pol(rb,-Math.PI*.16),e1=[Math.min(CX+(ro*grow+38),668),b1[1]-34];
    E.l1.setAttribute("d","M"+f(b1[0])+" "+f(b1[1])+"L"+f(e1[0]-8)+" "+f(e1[1])+"H"+f(e1[0]));E.t1.setAttribute("x",f(e1[0]+6));E.t1.setAttribute("y",f(e1[1]+4));
    var b2=pol((ri+th*.5)*grow,Math.PI*.78),e2=[Math.max(CX-(ro*grow+30),186),b2[1]+40];
    E.l2.setAttribute("d","M"+f(b2[0])+" "+f(b2[1])+"L"+f(e2[0]+8)+" "+f(e2[1])+"H"+f(e2[0]));E.t2.setAttribute("x",f(e2[0]-6));E.t2.setAttribute("y",f(e2[1]+4));
    E.ann.style.opacity=(b*(1-.7*s4)).toFixed(3);
    var I=function(v){return Math.max(0,v*2-1)},O=function(v){return 1-Math.min(1,v*2)};
    E.st[0].style.opacity=(b*O(s2)).toFixed(3);E.st[1].style.opacity=(I(s2)*O(s3)).toFixed(3);E.st[2].style.opacity=(I(s3)*O(s4)).toFixed(3);E.st[3].style.opacity=I(s4).toFixed(3);
  };
}
