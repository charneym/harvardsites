/* The story scene (DB/BL): how ASA makes an enzyme, from their own site (strain development by classical mutagenesis and
   expression in E. coli and Pichia pastoris; fermentation and purification processes; small-batch fill and finish of
   0.3 to 1 mL into glass vials under Ph. Eur. Annex 1), drawn as ONE fine-line process scene that fills the frame:
   a stirred fermenter, a purification column and a row of glass vials, joined by one line.
   Frame 0 is complete: the vessel, column and vials are drawn, the impeller turns and air rises in the broth.
   Step 1 (express): production cells appear in the broth and the enzyme (logo blue dots) gathers around them.
   Step 2 (purify): the enzyme travels to the column and runs down it as one blue band.
   Step 3 (fill): the purified enzyme flows along the filling line and the vials fill one after another.
   Driven by scrubbed progress. */
var SCW=760,SCH=560;
var VES="M120 214C120 178 156 166 195 166C234 166 270 178 270 214V418C270 432 262 440 248 440H142C128 440 120 432 120 418Z";
var P_OUT="M262 410H318C332 410 340 402 340 388V112C340 100 348 94 360 94H382C390 94 395 100 395 108V428";
var VX=[548,598,648,698];
function pFill(k){return "M395 428V458C395 466 401 470 409 470H478C490 470 496 464 496 452V296C496 286 502 280 512 280H"+(VX[k]-10)+"C"+(VX[k]-4)+" 280 "+VX[k]+" 284 "+VX[k]+" 290V350"}
function vial(x){return "M"+(x-16)+" 360V432C"+(x-16)+" 437 "+(x-13)+" 440 "+(x-8)+" 440H"+(x+8)+"C"+(x+13)+" 440 "+(x+16)+" 437 "+(x+16)+" 432V360C"+(x+16)+" 354 "+(x+10)+" 351 "+(x+7)+" 350V340H"+(x-7)+"V350C"+(x-10)+" 351 "+(x-16)+" 354 "+(x-16)+" 360Z"}
function storyScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'100 84 630 440':'92 70 652 480')+'" aria-hidden="true">';
  g+='<g id="scArt">';
  /* the fermenter: vessel, motor and shaft, two impellers, broth surface, sparger and legs */
  g+='<path class="cs sD" d="'+VES+'"/><path class="wo sD" d="M178 126h34v30h-34Z"/><path class="wo sD" d="M195 156V392"/>';
  g+='<path class="en sD" d="M124 238C156 232 176 244 196 238C218 232 240 244 266 236"/>';
  g+='<path class="wo sD" d="M160 426h70"/><path class="wo sD" d="M138 440v26M252 440v26"/><path class="wo sD" d="M110 214h10M110 418h10M270 300h8"/>';
  g+='<path class="ip" id="ip1" d="M171 392h48"/><path class="ip" id="ip2" d="M171 320h48"/>';
  /* the line to the column, the column with its packing, caps, and the filling line on to the vials */
  g+='<path class="pp sD" d="'+P_OUT+'"/><path class="cs sD" d="M372 120h46v300h-46Z"/><path class="wo sD" d="M364 120h62M364 420h62"/>';
  for(i=0;i<13;i++)g+='<path class="pk sD" d="M378 '+(136+i*22)+'h34"/>';
  g+='<path class="pp sD" d="M395 420V458C395 466 401 470 409 470H478C490 470 496 464 496 452V296C496 286 502 280 512 280H704"/>';
  VX.forEach(function(x){g+='<path class="pp sD" d="M'+x+' 280V330"/><path class="wo sD" d="M'+(x-4)+' 330h8"/>'});
  /* the vials, each with a fill that rises from its base (clipped to the vial) */
  g+='<defs>';VX.forEach(function(x,k){g+='<clipPath id="vc'+k+'"><path d="'+vial(x)+'"/></clipPath>'});g+='</defs>';
  VX.forEach(function(x,k){g+='<rect class="vf" id="vf'+k+'" clip-path="url(#vc'+k+')" x="'+(x-17)+'" y="440" width="34" height="0"/><path class="cs sD" d="'+vial(x)+'"/>'});
  g+='<path class="wo sD" d="M524 440h200"/>';
  /* the column's enzyme band */
  g+='<rect class="bd" id="scBand" x="374" y="130" width="42" height="34"/></g>';
  /* motion paths */
  g+='<path id="scOut" d="'+P_OUT+'" fill="none" stroke="none"/>';
  for(i=0;i<4;i++)g+='<path id="scF'+i+'" d="'+pFill(i)+'" fill="none" stroke="none"/>';
  /* air bubbles, production cells, enzyme dots */
  g+='<g id="scBu">';for(i=0;i<9;i++)g+='<circle class="bu" r="2.4" cx="0" cy="0"/>';g+='</g>';
  g+='<g id="scCe">';[[150,300],[236,286],[176,360],[226,372],[160,410],[248,336],[202,268],[140,262],[256,404],[214,416]].forEach(function(c){g+='<ellipse class="ce" rx="9" ry="5.5" data-x="'+c[0]+'" data-y="'+c[1]+'" cx="'+c[0]+'" cy="'+c[1]+'"/>'});g+='</g>';
  g+='<g id="scEn">';for(i=0;i<24;i++)g+='<circle class="ez" r="2.8" cx="0" cy="0"/>';g+='</g>';
  if(!mob){
    g+='<g id="lFe"><text class="t" x="195" y="492" text-anchor="middle">FERMENTER</text></g>';
    g+='<g id="lCo"><text class="t" x="395" y="500" text-anchor="middle">PURIFICATION</text></g>';
    g+='<g id="lVi"><text class="t" x="624" y="470" text-anchor="middle">GLASS VIALS</text></g>';
  }else{g+='<g id="lFe"></g><g id="lCo"></g><g id="lVi"></g>'}
  var ly=mob?508:534,lx=mob?112:104;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'CELLS EXPRESS THE ENZYME':'PRODUCTION CELLS EXPRESS THE ENZYME')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'THE COLUMN PURIFIES IT':'THE COLUMN SEPARATES AND PURIFIES IT')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'FILLED INTO VIALS, GMP':'FILLED INTO GLASS VIALS UNDER GMP')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var OUT=$("#scOut",svg),FP=[0,1,2,3].map(function(k){return $("#scF"+k,svg)}),OL=OUT.getTotalLength(),FL=FP.map(function(p){return p.getTotalLength()});
  var E={base:dl(".sD"),ip:[$("#ip1",svg),$("#ip2",svg)],bu:$$("#scBu .bu",svg),ce:$$("#scCe .ce",svg),ez:$$("#scEn .ez",svg),
    vf:[0,1,2,3].map(function(k){return $("#vf"+k,svg)}),band:$("#scBand",svg),
    lFe:$("#lFe",svg),lCo:$("#lCo",svg),lVi:$("#lVi",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function at(p,l,L){return p.getPointAtLength(Math.max(0,Math.min(1,l))*L)}
  /* where the column outlet sits on the outlet path: dots run down the column to its foot */
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var s1=seg(p,.04,.3),s2=seg(p,.36,.62),s3=seg(p,.68,.92);
    /* impellers turn (seen side-on: the blades foreshorten), air rises from the sparger */
    E.ip.forEach(function(el,k){var c=Math.cos(p*38+k*1.2);el.setAttribute("transform","translate(195 0) scale("+(.25+.75*Math.abs(c)).toFixed(3)+" 1) translate(-195 0)");op(el,b)});
    E.bu.forEach(function(el,i){var u=((i/9)+p*3.2)%1,x=168+((i*37)%56)+Math.sin(u*9+i)*4,y=424-u*184;el.setAttribute("cx",x.toFixed(1));el.setAttribute("cy",y.toFixed(1));op(el,b*.55*Math.min(1,(1-u)*6)*Math.min(1,u*8))});
    /* cells appear one by one in step 1 and stay; they dim as the enzyme leaves */
    E.ce.forEach(function(el,i){var a=sm(seg(p,.04+i*.016,.12+i*.016)),x=+el.dataset.x,y=+el.dataset.y,w=Math.sin(p*20+i)*3;
      el.setAttribute("cx",(x+w).toFixed(1));el.setAttribute("cy",(y+Math.cos(p*17+i)*2).toFixed(1));op(el,b*a*(1-.45*s2))});
    /* the enzyme: around the cells in step 1, down the line and the column in step 2, along the filling line in step 3 */
    E.ez.forEach(function(el,i){var c=E.ce[i%10],x,y,o,q;
      var born=sm(seg(p,.1+(i%12)*.012,.2+(i%12)*.012));
      var go2=Math.max(0,Math.min(1,(p-.36)/.22*1.25-(i/24)*.25));
      var go3=Math.max(0,Math.min(1,(p-.68)/.2*1.3-(i/24)*.3));
      if(go3>0){q=at(FP[i%4],go3,FL[i%4]);x=q.x;y=q.y;o=1-sm(seg(go3,.9,1))}
      else if(go2>0){var stop=.9+.1*((i%6)/6);q=at(OUT,go2*stop,OL);x=q.x+(go2>.8?((i%3)-1)*8:0);y=q.y;o=1}
      else{var ang=p*14+i*1.7,r=11+(i%3)*4;x=+c.dataset.x+Math.cos(ang)*r;y=+c.dataset.y+Math.sin(ang)*r*.7;o=born}
      el.setAttribute("cx",x.toFixed(1));el.setAttribute("cy",y.toFixed(1));op(el,b*o*(1-sm(seg(p,.62,.68))*(go3>0?0:1)))});
    /* the band runs down the column in step 2 and is gone once the filling starts */
    var by=130+250*sm(seg(p,.4,.64));E.band.setAttribute("y",by.toFixed(1));op(E.band,b*seg(p,.38,.44)*(1-seg(p,.66,.72))*.85);
    /* vials fill in turn */
    E.vf.forEach(function(el,k){var f=sm(seg(p,.72+k*.04,.84+k*.035)),hh=f*62;el.setAttribute("y",(440-hh).toFixed(1));el.setAttribute("height",hh.toFixed(1));op(el,b)});
    op(E.lFe,b*(1-seg(p,.32,.38)));op(E.lCo,b*seg(p,.38,.44)*(1-seg(p,.64,.7)));op(E.lVi,b*seg(p,.7,.76));
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}
