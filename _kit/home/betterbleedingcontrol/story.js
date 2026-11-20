/* the story scene (BL/BY/DB): ONE side elevation of the trainer's limb segment, redrawn every frame as it moves through the
   method in the NIH STTR abstract 1R41EB038879 and the Georgia Tech capstone brief. 1 Bleed: the torso reservoir feeds a pump,
   a valve opens, simulated blood runs up the line and out of the wound. 2 Intervene: a tourniquet closes above the wound and
   direct pressure presses into it. 3 Sense: the pressure sensors in the wound bed read the force. 4 Feedback: the flow trace
   falls, the indicator turns, the report is written. One figure, continuous morph. Colours: arterial red, bone, olive. */
var SN_SENS=[[392,262],[404,282],[424,296],[444,282],[456,262]];
function scene(){
  var mob=MOBILE(),i;
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<g id="snBase"><rect class="neat" x=".5" y=".5" width="799" height="559"/>';
  g+='<path class="tk" d="M24 40H40M24 40V56M776 40H760M776 40V56M24 520H40M24 520V504M776 520H760M776 520V504"/>';
  /* the limb: thigh from a cut section at the hip to the knee */
  g+='<path class="sD limb" d="M96 196C230 186 330 200 420 212C500 222 580 228 640 234C676 238 700 262 704 300C700 338 676 362 640 366C580 372 500 378 420 386C330 396 230 410 96 404"/>';
  g+='<ellipse class="sD cut" cx="96" cy="300" rx="22" ry="104"/>';
  g+='<path class="sD wi" d="M150 240C260 234 340 244 372 248M482 262C540 266 600 270 650 276M150 362C260 368 360 360 470 352C540 348 600 344 650 340"/>';
  /* the wound: an opening in the top surface and its pocket */
  g+='<path class="sD wnd" d="M380 214C390 236 402 300 424 306C446 300 458 238 468 222"/>';
  g+='<path class="sD lnk" d="M136 470H220M260 470H352V440M352 420V400H424V306"/></g>';
  g+='<ellipse class="cutH" cx="96" cy="300" rx="21" ry="103"/>';
  /* torso reservoir, pump, valve */
  g+='<g id="snRig"><rect class="box" x="60" y="440" width="76" height="60"/><rect class="lvl" id="snLvl" x="61" y="462" width="74" height="37"/><text class="t" x="60" y="428">RESERVOIR</text>';
  g+='<circle class="box" cx="240" cy="470" r="20"/><path class="imp" id="snImp" d="M240 456V484M226 470H254"/><text class="t" x="222" y="512">PUMP</text>';
  g+='<rect class="box vlv" id="snVal" x="340" y="420" width="24" height="20"/><text class="t" x="374" y="434">VALVE</text></g>';
  g+='<path class="flow" id="snFlow" d="M136 470H220M260 470H352V400H424V306"/>';
  g+='<path class="blood" id="snPool" d=""/>';
  g+='<g id="snDrops"><circle class="drop" r="3.4"/><circle class="drop" r="2.8"/><circle class="drop" r="3"/></g>';
  /* tourniquet band and windlass, above the wound */
  g+='<g id="snTq"><path class="band" id="snBand" d=""/><rect class="wl" x="246" y="176" width="44" height="7"/><text class="t" x="214" y="160">TOURNIQUET</text></g>';
  /* direct pressure into the wound */
  g+='<g id="snPr"><path class="arr" d="M424 96V196M414 180L424 196L434 180"/><text class="t" x="440" y="114">DIRECT PRESSURE</text></g>';
  /* sensors in the wound bed */
  g+='<g id="snSens">';for(i=0;i<SN_SENS.length;i++)g+='<circle class="snr" cx="'+SN_SENS[i][0]+'" cy="'+SN_SENS[i][1]+'" r="8"/><rect class="sn" x="'+(SN_SENS[i][0]-4)+'" y="'+(SN_SENS[i][1]-4)+'" width="8" height="8"/>';
  g+='<path class="ldr" d="M450 290L516 416H530"/><text class="t" x="536" y="420">PRESSURE SENSORS</text><text class="t s" x="536" y="436">IN THE WOUND BED</text><text class="t a2" id="snF" x="536" y="458">FORCE WITHIN ±5%</text></g>';
  /* feedback panel */
  g+='<g id="snFb"><rect class="box" x="560" y="56" width="200" height="124"/><text class="t" x="572" y="78">FLOW RATE</text>';
  g+='<path class="axis" d="M572 164H748"/><path class="trace" id="snTr" d=""/><circle class="ind" id="snInd" cx="742" cy="74" r="6"/>';
  g+='<text class="t a2" id="snT" x="760" y="200" text-anchor="end">RESPONSE &lt; 0.5 S</text></g>';
  g+='<text x="44" y="64" class="a" id="snS1">1 · THE WOUND BLEEDS</text><text x="44" y="64" class="a" id="snS2">2 · THE TRAINEE INTERVENES</text>'+
     '<text x="44" y="64" class="a" id="snS3">3 · THE SENSORS MEASURE</text><text x="44" y="64" class="a" id="snS4">4 · THE FEEDBACK TEACHES</text>';
  g+='<text x="44" y="536" class="t tb" id="snCap">SCHEMATIC · TRAINER LIMB, SIDE ELEVATION</text>';
  return g+'</svg>';
}
function storyDraw(svg){
  var f=function(n){return n.toFixed(2)};
  var E={base:$$("#snBase .sD",svg),fade:$$("#snBase .neat, #snBase .tk, #snCap",svg),cutH:$(".cutH",svg),rig:$("#snRig",svg),lvl:$("#snLvl",svg),imp:$("#snImp",svg),val:$("#snVal",svg),
    flow:$("#snFlow",svg),pool:$("#snPool",svg),drops:$$("#snDrops .drop",svg),tq:$("#snTq",svg),band:$("#snBand",svg),pr:$("#snPr",svg),sens:$("#snSens",svg),sn:$$("#snSens .sn",svg),snr:$$("#snSens .snr",svg),
    fb:$("#snFb",svg),tr:$("#snTr",svg),ind:$("#snInd",svg),tt:$("#snT",svg),st:[$("#snS1",svg),$("#snS2",svg),$("#snS3",svg),$("#snS4",svg)]};
  E.base.forEach(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;p._L=L});
  var t0=performance.now(),LP=0,LB=0,K=0;
  /* the blood keeps moving between scroll updates: a light ticker redraws while the figure is on screen */
  function tick(){if(!svg.isConnected){gsap.ticker.remove(tick);return}if((++K)%2)return;var r=svg.getBoundingClientRect();if(r.bottom<0||r.top>innerHeight||LB<.02)return;draw(LP,LB)}
  if(!RM)gsap.ticker.add(tick);
  return function(p,b){LP=p;LB=b;draw(p,b)};
  function draw(p,b){
    if(!svg.isConnected)return;
    var t=RM?0:(performance.now()-t0)/1000;
    E.base.forEach(function(el){el.style.strokeDashoffset=f(el._L*(1-b))});E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)});
    E.cutH.style.opacity=(b*.9).toFixed(3);
    var s1=seg(p,0,.2),s2=seg(p,.25,.44),s3=seg(p,.5,.69),s4=seg(p,.75,.94);
    /* the bleed: full in step 1, held back by the intervention, slowed almost to a stop by step 4 */
    var bleed=Math.max(.15,b)*(.35+.65*s1)*(1-.5*s2)*(1-.42*s4);
    E.rig.style.opacity=b.toFixed(3);
    E.lvl.setAttribute("y",f(462+10*s1));E.lvl.setAttribute("height",f(37-10*s1));
    E.imp.setAttribute("transform","rotate("+f((t*160*bleed)%360)+" 240 470)");
    E.val.classList.toggle("open",s4<.6);
    E.flow.style.opacity=(b*(.3+.7*Math.max(s1,.2))).toFixed(3);
    E.flow.style.strokeDashoffset=f(-((t*70*bleed)%18));
    E.flow.style.strokeWidth=f(1.4+1.8*bleed);
    var pw=40+120*s1*(1-.35*s4);
    E.pool.setAttribute("d","M"+f(400-pw*.2)+" 211C"+f(424)+" 204 "+f(440+pw*.3)+" 206 "+f(452+pw*.55)+" 214C"+f(462+pw*.8)+" 220 "+f(470+pw)+" 224 "+f(474+pw*1.05)+" 226");
    E.pool.style.opacity=(b*(.4+.6*s1)).toFixed(3);
    E.drops.forEach(function(d,i){var ph=((t*(.55+.17*i)+i*.33)%1);d.setAttribute("cx",f(474+pw*1.05+i*10));d.setAttribute("cy",f(230+ph*120));d.style.opacity=(Math.min(1,bleed*1.6)*(1-ph)*.9).toFixed(3)});
    /* intervention */
    E.tq.style.opacity=(b*s2).toFixed(3);
    E.band.setAttribute("d","M252 "+f(186+8*s2)+"C249 260 249 340 252 "+f(408-6*s2)+"M284 "+f(186+8*s2)+"C287 260 287 340 284 "+f(408-6*s2));
    E.tq.setAttribute("transform","translate(0,"+f(-26*(1-s2))+")");
    E.pr.style.opacity=(b*s2*(1-.45*s4)).toFixed(3);E.pr.setAttribute("transform","translate(0,"+f(-24*(1-s2))+")");
    /* sensing */
    E.sens.style.opacity=(b*(.2+.8*s3)).toFixed(3);
    E.snr.forEach(function(c,i){var ph=((t*.8+i*.17)%1);c.setAttribute("r",f(6+14*ph*s3));c.style.opacity=(s3*(1-ph)*.8).toFixed(3)});
    E.sn.forEach(function(r){r.classList.toggle("on",s3>.5)});
    /* feedback: the flow-rate trace stays high while bleeding and falls after the intervention */
    E.fb.style.opacity=(b*(.25+.75*Math.max(s1*.7,s4))).toFixed(3);
    var d="",n=44;for(var i=0;i<=n;i++){var x=i/n,lv=x<.5?1:1-(.86*s4)*Math.min(1,(x-.5)*5);var yy=164-84*lv*(.4+.6*s1)+Math.sin(i*1.9+t*3.2)*3.2*bleed;d+=(i?"L":"M")+f(572+176*x)+" "+f(yy)}
    E.tr.setAttribute("d",d);
    E.ind.classList.toggle("ok",s4>.6);E.tt.style.opacity=seg(s4,.6,1).toFixed(3);
    var I=function(v){return Math.max(0,v*2-1)},O=function(v){return 1-Math.min(1,v*2)};
    E.st[0].style.opacity=(b*O(s2)).toFixed(3);E.st[1].style.opacity=(I(s2)*O(s3)).toFixed(3);E.st[2].style.opacity=(I(s3)*O(s4)).toFixed(3);E.st[3].style.opacity=I(s4).toFixed(3);
  }
}
