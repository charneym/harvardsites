/* the story scene (BL/DB): ONE engraved bench drawing of the HEDS workflow described in CG Scientific's NIH Phase II
   abstract (2R44GM139391). Step 1 a tube of whole blood (red cells, white cells, platelets) is drawn; step 2 the plan view
   of a plastic HEDS chip draws and the blood runs in along its tubing into the separation chamber; step 3 the chamber
   splits it into two streams that fill two vials, PBMCs above and red cells with platelets below, with the Phase I
   figures; step 4 the PBMC vial is read out: viability, immunophenotype and T cell activation unchanged, and the device's
   15-minute target. The chamber's inner structure is not drawn: the sources do not describe it. */
function scene(){
  var mob=MOBILE();
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="799" height="559"/>';
  /* the blood tube */
  g+='<path class="sD bl" d="M70 132H122M76 132V438A20 20 0 0 0 116 438V132"/><path class="sD kb" d="M66 124H126V138H66Z"/>';
  for(var k=0;k<8;k++)g+='<path class="sD ht" d="M116 '+(190+k*30)+'h-10"/>';
  /* tubing from the tube to the chip inlet, and from the outlets to the vials */
  g+='<path class="sD tb1" d="M96 124C96 70 170 70 196 150C214 206 232 248 262 268"/>';
  /* the chip, in plan view */
  g+='<path class="sD bl" d="M224 210H612A8 8 0 0 1 620 218V342A8 8 0 0 1 612 350H224A8 8 0 0 1 216 342V218A8 8 0 0 1 224 210Z"/>';
  g+='<path class="sD kb" d="M262 280m-13 0a13 13 0 1 0 26 0a13 13 0 1 0 -26 0M580 240m-11 0a11 11 0 1 0 22 0a11 11 0 1 0 -22 0M580 320m-11 0a11 11 0 1 0 22 0a11 11 0 1 0 -22 0"/>';
  g+='<path class="sD ch" d="M275 280H316L336 246H496L522 270V290L496 314H336L316 280M522 274H540L552 240H569M522 286H540L552 320H569"/>';
  g+='<path class="sD kb" d="M232 222h10M237 217v10M598 338h10M603 333v10"/>';
  g+='<text x="232" y="340" class="t s">HEDS · COP</text>';
  /* vials */
  g+='<path class="sD bl" d="M664 92H724M670 92V212A12 12 0 0 0 682 224H706A12 12 0 0 0 718 212V92"/>';
  g+='<path class="sD bl" d="M664 336H724M670 336V456A12 12 0 0 0 682 468H706A12 12 0 0 0 718 456V336"/>';
  g+='<path class="sD tb1" d="M591 240C626 240 630 160 650 120C656 108 664 100 678 100"/><path class="sD tb1" d="M591 320C626 320 632 360 646 352C656 346 664 344 678 344"/>';
  g+='<path class="tbl" d="M40 516H312V540H40Z"/><text x="52" y="532" class="t">PBMC ISOLATION · SCHEMATIC</text>';
  g+='</g>';
  /* blood in the tube (it drains as it runs into the chip) and its cells */
  g+='<clipPath id="tubeC"><path d="M76 140V438A20 20 0 0 0 116 438V140Z"/></clipPath>';
  g+='<g clip-path="url(#tubeC)"><rect id="bl0" class="bld" x="70" y="170" width="52" height="300"/><g id="cells0"></g></g>';
  /* flow: the inlet stream, the chamber, the clear stream, the two outlets */
  g+='<path id="fIn" class="fl red" d="M96 124C96 70 170 70 196 150C214 206 232 248 262 268M262 280H316L336 280"/>';
  g+='<path id="cham" class="chm" d="M316 280L336 246H496L522 270V290L496 314H336Z"/>';
  g+='<path id="sTop" class="strm" d="M336 252H494L516 272C470 268 400 262 336 270Z"/>';
  g+='<g id="cells1"></g>';
  g+='<path id="fTop" class="fl straw" d="M522 274H540L552 240H580C626 240 630 160 650 120C656 108 664 100 678 100"/>';
  g+='<path id="fBot" class="fl red" d="M522 286H540L552 320H580C626 320 632 360 646 352C656 346 664 344 678 344"/>';
  /* vial contents */
  g+='<clipPath id="v1C"><path d="M670 96V212A12 12 0 0 0 682 224H706A12 12 0 0 0 718 212V96Z"/></clipPath><clipPath id="v2C"><path d="M670 340V456A12 12 0 0 0 682 468H706A12 12 0 0 0 718 456V340Z"/></clipPath>';
  g+='<g clip-path="url(#v1C)"><rect id="v1" class="pbmc" x="664" y="230" width="60" height="140"/></g><g clip-path="url(#v2C)"><rect id="v2" class="bld" x="664" y="474" width="60" height="140"/></g>';
  /* labels: step 3 figures by the vials, step 4 readout under the chip */
  var A=mob?'end':'middle',LX=mob?780:694;
  g+='<g id="lb3"><text x="'+LX+'" y="'+(mob?72:74)+'" text-anchor="'+A+'" class="a">PBMC '+(mob?'':'· ')+'~97.2%'+(mob?'':' RECOVERED')+'</text>'+
     '<text x="'+LX+'" y="'+(mob?508:496)+'" text-anchor="'+A+'" class="w">RBC ~99.97%'+(mob?'':' REMOVED')+'</text>'+
     '<text x="'+LX+'" y="'+(mob?540:514)+'" text-anchor="'+A+'" class="w">PLT ~99.86%'+(mob?'':' REMOVED')+'</text></g>';
  g+='<g id="lb4">';
  if(!mob){g+='<path class="dim" d="M236 392H470"/>';
    ["VIABILITY · NO LOSS","IMMUNOPHENOTYPE · UNCHANGED","T CELL ACTIVATION · NONE","TARGET · 10 mL IN 15 MIN"].forEach(function(t,i){g+='<text x="236" y="'+(420+i*24)+'" class="'+(i===3?'a':'w')+' r4">'+t+'</text>'})}
  else g+='<text x="216" y="420" class="a r4">TARGET · 15 MIN</text>';
  g+='<path id="ring" class="ring" d="M694 160m-46 0a46 76 0 1 0 92 0a46 76 0 1 0 -92 0"/></g>';
  g+='<text id="cap1" x="40" y="58" class="a">WHOLE BLOOD</text>';
  g+='<text id="cap2" x="40" y="58" class="a">INTO A HEDS CHIP</text>';
  g+='<text id="cap3" x="40" y="58" class="a">TWO STREAMS OUT</text>';
  g+='<text id="cap4" x="40" y="58" class="a">CELLS AS THEY WERE</text>';
  return g+'</svg>';
}
function storyDraw(svg){
  var NS="http://www.w3.org/2000/svg";
  var dl=function(sel){return $$(sel,svg).map(function(p){var Lg=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=Lg+" "+Lg;return [p,Lg]})};
  /* cells: red discs, white cells, platelets (deterministic positions) */
  var c0=$("#cells0",svg),c1=$("#cells1",svg),T0=[],T1=[];
  function rnd(i){var x=Math.sin(i*127.1+11.7)*43758.5453;return x-Math.floor(x)}
  function cell(ty,big){var el=document.createElementNS(NS,ty==="r"?"ellipse":"circle");
    if(ty==="r"){el.setAttribute("rx",big?"4.6":"4");el.setAttribute("ry",big?"2.6":"2.2");el.setAttribute("class","rbc")}else{el.setAttribute("r",ty==="w"?(big?"4.4":"4"):"1.4");el.setAttribute("class",ty==="w"?"wbc":"plt")}return el}
  for(var i=0;i<46;i++){var ty=i%9===0?"w":i%5===0?"p":"r",el=cell(ty,1);
    el.setAttribute("cx",(84+rnd(i)*24).toFixed(1));el.setAttribute("cy",(184+rnd(i+50)*266).toFixed(1));c0.appendChild(el);T0.push(el)}
  for(var j=0;j<34;j++){var t2=j%6===0?"w":j%4===0?"p":"r",e2=cell(t2,0);c1.appendChild(e2);T1.push({el:e2,w:t2==="w",o:rnd(j+200),y:rnd(j+300)})}
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .neat, #scBase text, #scBase .tbl",svg),bl0:$("#bl0",svg),fIn:dl("#fIn"),fTop:dl("#fTop"),fBot:dl("#fBot"),
    cham:$("#cham",svg),sTop:$("#sTop",svg),v1:$("#v1",svg),v2:$("#v2",svg),lb3:$("#lb3",svg),lb4:$("#lb4",svg),r4:$$("#lb4 .r4",svg),ring:dl("#ring"),
    cap:[$("#cap1",svg),$("#cap2",svg),$("#cap3",svg),$("#cap4",svg)]};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s1=seg(p,0,.16),s2=seg(p,.25,.44),s3=seg(p,.5,.69),s4=seg(p,.75,.94);
    /* step 1: the tube is full; it drains as the chip runs */
    var lvl=170+60*s2+80*s3;E.bl0.setAttribute("y",lvl.toFixed(1));E.bl0.style.opacity=(b*Math.max(s1,b)).toFixed(3);
    T0.forEach(function(el){var cy=+el.getAttribute("cy");el.style.opacity=(b*(cy>lvl+3?1:0)).toFixed(3)});
    /* step 2: blood runs in along the tubing and fills the chamber */
    draw(E.fIn,s2);E.cham.style.opacity=(b*Math.max(0,s2*2-1)*.9).toFixed(3);
    /* step 3: a clear stream forms along the top of the chamber; the outlets run and the vials fill */
    E.sTop.style.opacity=s3.toFixed(3);draw(E.fTop,s3);draw(E.fBot,s3);
    E.v1.setAttribute("y",(224-92*s3).toFixed(1));E.v2.setAttribute("y",(468-110*s3).toFixed(1));
    var ph=(p*9)%1;
    T1.forEach(function(c){var q=(c.o+ph)%1,x=338+q*182,y0=256+c.y*50,y=c.w?y0+(262-y0)*Math.min(1,q*1.6*s3):y0+(298-y0)*Math.min(1,q*1.2*s3)*.4;
      c.el.setAttribute("cx",x.toFixed(1));c.el.setAttribute("cy",y.toFixed(1));c.el.style.opacity=(b*Math.max(0,s2*2-1)*Math.sin(Math.PI*q)).toFixed(3)});
    var I=function(v){return Math.max(0,v*2-1)},O=function(v){return 1-Math.min(1,v*2)};
    E.lb3.style.opacity=I(s3).toFixed(3);
    /* step 4: the readout, line by line, and a ring drawn round the PBMC vial */
    E.lb4.style.opacity=(s4>0?1:0)+"";draw(E.ring,s4);
    E.r4.forEach(function(t,k){t.style.opacity=seg(s4,k*.18,k*.18+.3).toFixed(3)});
    E.cap[0].style.opacity=(b*O(s2)).toFixed(3);E.cap[1].style.opacity=(I(s2)*O(s3)).toFixed(3);E.cap[2].style.opacity=(I(s3)*O(s4)).toFixed(3);E.cap[3].style.opacity=I(s4).toFixed(3);
  };
}
