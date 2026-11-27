/* The story scene (BL/BY/DB): how iFAST ONE gives a susceptibility result, drawn as ONE continuous diagram kept on screen
   for all three steps (ifastdiagnostics.com home page: "Suspended in solution and then exposed to a range of antibiotics",
   "Following a two-hour incubation, the iFAST instrument measures electrical properties of each individual bacterial cell
   (approx. 5,000 bacteria per sample)", "30 seconds per well", "iFAST microfluidic impedance chip", "Resistant/Susceptible
   and Minimum Inhibitory Concentration (MIC)", "iFAST instrument determines optimum antibiotic").
   Step 1: a row of wells, one antibiotic at rising concentration, each holding bacteria.
   Step 2: cells stream one by one between the electrodes of the microfluidic chip; each gives a pulse in the impedance trace,
           and cells the drug has acted on give a changed pulse.
   Step 3: the wells are called: the lowest concentration that changes the cells is marked as the MIC, and the drug is
           called susceptible. Illustrative, not data. */
var SCW=760,SCH=520;
function ifScene(o){
  var g='',mob=o.mob,i,j;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 40 760 452" aria-hidden="true">';
  g+='<text class="t" x="30" y="64">'+(mob?"ONE DRUG, SIX DOSES":"ONE ANTIBIOTIC, RISING CONCENTRATION")+'</text>';
  /* the wells */
  var WX=[90,206,322,438,554,670],WY=132,R=36,rods=[[-14,-10,20],[8,-4,-30],[-4,14,60],[14,12,10]];
  for(i=0;i<6;i++){
    g+='<circle class="wl sD" cx="'+WX[i]+'" cy="'+WY+'" r="'+R+'"/><circle class="cf" cx="'+WX[i]+'" cy="'+WY+'" r="'+(R-3)+'" style="fill-opacity:'+(.04+.05*i).toFixed(2)+'"/>';
    g+='<g class="bx'+(i>=3?' hit':'')+'">';
    for(j=0;j<rods.length;j++){var r=rods[j];g+='<rect x="'+(WX[i]+r[0]-7)+'" y="'+(WY+r[1]-3)+'" width="14" height="6" rx="3" transform="rotate('+r[2]+' '+(WX[i]+r[0])+' '+(WY+r[1])+')"/>'}
    g+='</g>';
  }
  /* the chip: a channel with three electrode pairs */
  var CY0=252,CY1=300,CM=276;
  g+='<path class="ch sD" d="M30 '+CY0+'H730M30 '+CY1+'H730"/>';
  g+='<g class="el">';[352,390,428].forEach(function(x){g+='<rect x="'+(x-7)+'" y="'+(CY0-16)+'" width="14" height="14"/><rect x="'+(x-7)+'" y="'+(CY1+2)+'" width="14" height="14"/>'});g+='</g>';
  g+='<g id="ifCells">';for(i=0;i<7;i++)g+='<ellipse class="'+(i%3===2?"hit":"")+'" cx="0" cy="'+CM+'" rx="'+(i%3===2?8:10)+'" ry="'+(i%3===2?6:4.5)+'"/>';g+='</g>';
  /* the impedance trace: one bipolar pulse per cell; changed cells give a smaller pulse */
  var TY=392,tr='M30 '+TY,P=[[110,1],[190,1],[262,.55],[330,1],[402,1],[470,.55],[540,1],[612,1],[680,.55]];
  P.forEach(function(q){var x=q[0],a=q[1]*34;tr+='H'+(x-14)+'C'+(x-9)+' '+TY+' '+(x-8)+' '+(TY-a)+' '+(x-4)+' '+(TY-a)+'C'+x+' '+(TY-a)+' '+x+' '+(TY+a)+' '+(x+4)+' '+(TY+a)+'C'+(x+8)+' '+(TY+a)+' '+(x+9)+' '+TY+' '+(x+14)+' '+TY});tr+='H730';
  g+='<path id="ifTr" class="tr" d="'+tr+'"/>';
  /* step 3: the MIC marker over the changed wells */
  g+='<path id="ifMic" class="mic" d="M'+(WX[3]-R-6)+' '+(WY-R-6)+'V'+(WY-R-14)+'H'+(WX[5]+R+6)+'V'+(WY-R-6)+'"/>';
  /* labels, each clear of every stroke (DR3) */
  g+='<g id="ifL1"><text class="t" x="30" y="'+(WY+R+30)+'">'+(mob?"BACTERIA IN EACH WELL":"BACTERIA IN EACH WELL · 2-HOUR INCUBATION")+'</text></g>';
  g+='<g id="ifL2"><text class="t s1" x="30" y="'+(CY0-26)+'">'+(mob?"IMPEDANCE CHIP":"MICROFLUIDIC IMPEDANCE CHIP")+'</text>'+
     '<text class="t" x="30" y="'+(TY+60)+'">'+(mob?"ONE PULSE PER CELL":"ONE PULSE PER BACTERIUM · ~5,000 PER SAMPLE")+'</text></g>';
  g+='<g id="ifL3"><text class="t s1" x="'+(WX[3]-R-6)+'" y="'+(WY-R-24)+'">'+(mob?"MIC":"MIC · CELLS CHANGED FROM HERE")+'</text>'+
     '<text class="t" x="30" y="'+(WY+R+30)+'">'+(mob?"CALL: SUSCEPTIBLE":"CALL: SUSCEPTIBLE, WITH ITS MIC")+'</text></g>';
  g+='<g id="lb1"><text class="a" x="20" y="484">'+(mob?"1 · EXPOSE":"1 · EXPOSED TO THE DRUG")+'</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="484">'+(mob?"2 · MEASURE":"2 · EACH CELL MEASURED")+'</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="484">'+(mob?"3 · PRESCRIBE":"3 · RESISTANT OR SUSCEPTIBLE")+'</text></g>';
  return g+'</svg>';
}
function scene(){return ifScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),tr:dl("#ifTr"),mic:dl("#ifMic"),cf:$$(".cf",svg),bx:$$(".bx",svg),hit:$$(".bx.hit",svg),el:$(".el",svg),cells:$$("#ifCells ellipse",svg),
    L1:$("#ifL1",svg),L2:$("#ifL2",svg),L3:$("#ifL3",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),t0:svg.querySelector("text.t")};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function ease(x){return x<.5?2*x*x:1-Math.pow(-2*x+2,2)/2}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);op(E.t0,b);op(E.el,b)}
    /* step 1: the wells fill with the drug, then the bacteria appear */
    E.cf.forEach(function(c,i){op(c,b*seg(p,.03+i*.025,.1+i*.025))});
    E.bx.forEach(function(c,i){op(c,b*seg(p,.12+i*.02,.2+i*.02))});
    op(E.L1,b*seg(p,.08,.16)*(1-seg(p,.31,.36)));
    /* step 2: cells stream through the chip, the trace writes itself */
    var s2=seg(p,.36,.66),vis=seg(p,.34,.4)*(1-seg(p,.66,.72));
    E.cells.forEach(function(c,i){var u=(s2*1.6+i/7)%1;c.setAttribute("cx",(30+u*700).toFixed(1));op(c,b*vis*Math.min(1,Math.min(u,1-u)*12))});
    draw(E.tr,b*ease(seg(p,.38,.64)));
    op(E.L2,b*seg(p,.4,.46)*(1-seg(p,.64,.68)));
    /* step 3: the changed wells, the MIC and the call */
    var s3=seg(p,.7,.8);E.hit.forEach(function(c){c.classList.toggle("on",s3>.5)});
    draw(E.mic,b*ease(seg(p,.72,.82)));
    op(E.L3,b*seg(p,.76,.84));
    op(E.l1,b*seg(p,.02,.1)*(1-seg(p,.33,.38)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.64,.68)));op(E.l3,b*seg(p,.7,.78));
  };
}
