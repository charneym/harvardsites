/* The story scene (DB/BL/BY): Foundation Instruments' own subject, from their site and the NIH abstracts for
   R44ES031465 and R43ES037584 — chlorination forms trihalomethanes and haloacetic acids in the water; standard
   methods give a plant a few compliance results a year; the THM-Meter puts the measurement on site (fill a vial,
   touch start, a result in under an hour); real-time data lets the plant control by-products day by day.
   ONE continuous scene that fills the frame, complete from the first frame: the treated-water main with its
   chlorine dose line across the top, the plant's record of THM levels bottom left, and the analyser bottom right.
   Step 1: water flows; downstream of the dose point organic matter turns into THM molecules.
   Step 2: four quarterly compliance results appear on the record, one of them over the limit.
   Step 3: the sample tap opens, a vial fills and drops into the analyser; its gauge sweeps to a reading.
   Step 4: a daily on-site trace draws across the record, held under the limit, and fewer THMs form in the main.
   Everything is driven by the scrubbed progress; nothing appears that the step text does not explain. */
var SCW=760,SCH=560;
function f1(v){return (Math.round(v*10)/10).toString()}
var PIPE_T=118,PIPE_B=170,PX0=44,PX1=716,DOSE=140,TAP=600;
/* the record: axes, quarter marks, the limit, four compliance results and a daily on-site trace */
var CH={x0:84,x1:372,y0:272,y1:458},LIM=318;
var QX=[132,200,268,336],QY=[352,334,302,348];
var TRACE=(function(){var P=[],i,n=48;for(i=0;i<=n;i++){var u=i/n,x=CH.x0+10+u*(CH.x1-CH.x0-14);
  var y=346+u*42+9*Math.sin(u*19)+5*Math.sin(u*47+1.3);P.push([x,y])}return P})();
function pathOf(P){return "M"+P.map(function(q){return f1(q[0])+" "+f1(q[1])}).join("L")}
/* the analyser, front on: its body, the touch screen with a gauge, the two vial wells */
var AN={x0:452,x1:716,y0:320,y1:498};
var GA={x:548,y:410,r:46};
var WELL=[[670,356],[698,356]];
function arcd(cx,cy,r,a0,a1){var x0=cx+Math.cos(a0)*r,y0=cy+Math.sin(a0)*r,x1=cx+Math.cos(a1)*r,y1=cy+Math.sin(a1)*r;
  return "M"+f1(x0)+" "+f1(y0)+"A"+r+" "+r+" 0 "+((a1-a0)>Math.PI?1:0)+" 1 "+f1(x1)+" "+f1(y1)}
/* the water in the main: fourteen parcels of organic matter riding the flow */
var NP=14,PAR=[];(function(){for(var i=0;i<NP;i++)PAR.push({x:PX0+i*(PX1-PX0)/NP,y:PIPE_T+14+((i*7)%4)*8,keep:(i%3===0)})})();
function storyScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="30 26 700 532" aria-hidden="true">';
  g+='<defs><clipPath id="fiPipe"><rect x="'+PX0+'" y="'+(PIPE_T+1)+'" width="'+(PX1-PX0)+'" height="'+(PIPE_B-PIPE_T-2)+'"/></clipPath></defs>';
  g+='<g id="scBase">';
  /* the treated-water main and its flanges */
  g+='<path class="wl sD" d="M'+PX0+' '+PIPE_T+'H'+PX1+'"/><path class="wl sD" d="M'+PX0+' '+PIPE_B+'H'+PX1+'"/>';
  [300,460].forEach(function(x){g+='<path class="wo sD" d="M'+x+' '+(PIPE_T-7)+'V'+(PIPE_B+7)+'M'+(x+8)+' '+(PIPE_T-7)+'V'+(PIPE_B+7)+'"/>'});
  /* the chlorine dose line and its valve */
  g+='<path class="wl sD" d="M'+(DOSE-6)+' 40V'+PIPE_T+'M'+(DOSE+6)+' 40V'+PIPE_T+'"/>';
  g+='<path class="wl sD" d="M'+(DOSE-15)+' 62L'+(DOSE+15)+' 80V62L'+(DOSE-15)+' 80Z"/>';
  /* the sample tap under the main */
  g+='<path class="wl sD" d="M'+(TAP-5)+' '+PIPE_B+'V226M'+(TAP+5)+' '+PIPE_B+'V226"/>';
  g+='<path class="wl sD" d="M'+(TAP-13)+' 186L'+(TAP+13)+' 202V186L'+(TAP-13)+' 202Z"/>';
  /* the record */
  g+='<path class="wl sD" d="M'+CH.x0+' '+CH.y0+'V'+CH.y1+'H'+CH.x1+'"/>';
  QX.forEach(function(x){g+='<path class="wo sD" d="M'+x+' '+CH.y1+'v6"/>'});
  /* the analyser */
  g+='<path class="wl sD" d="M'+AN.x0+' '+AN.y0+'H'+AN.x1+'V'+AN.y1+'H'+AN.x0+'Z"/>';
  g+='<path class="wo sD" d="M468 334H640V452H468Z"/>';
  g+='<path class="wo sD" d="M'+AN.x0+' 466H'+AN.x1+'"/>';
  g+='<path class="wo sD" d="M652 334V466"/>';
  WELL.forEach(function(w){g+='<path class="wo sD" d="M'+(w[0]-9)+' '+w[1]+'a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/>'});
  g+='<path class="wo sD" d="'+arcd(GA.x,GA.y,GA.r,Math.PI,Math.PI*2)+'"/>';
  g+='<path class="wl sD" d="M'+(GA.x-3.5)+' '+GA.y+'a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0"/>';
  g+='</g>';
  /* the water: organic matter upstream, THM molecules downstream of the dose point */
  g+='<g id="scFlow" clip-path="url(#fiPipe)">';
  PAR.forEach(function(q,k){
    g+='<g class="par" data-i="'+k+'"><path class="om" d="M-7 2q3.5-6 7-1t7-2"/>'+
       '<g class="thm"><path class="bd" d="M0 0L0-8M0 0L7 4.6M0 0L-7 4.6"/><circle class="c" r="2.8"/><circle class="x" cy="-9" r="2.6"/><circle class="x" cx="7.8" cy="5" r="2.6"/><circle class="x" cx="-7.8" cy="5" r="2.6"/></g></g>'});
  for(var d=0;d<5;d++)g+='<circle class="cl" r="2.4" cx="'+DOSE+'" cy="'+(PIPE_T+4)+'"/>';
  g+='</g>';
  /* step 2: the limit and four compliance results */
  g+='<g id="scQ"><path class="lim" d="M'+CH.x0+' '+LIM+'H'+CH.x1+'"/>';
  QX.forEach(function(x,k){g+='<circle class="qp'+(QY[k]<LIM?' over':'')+'" cx="'+x+'" cy="'+QY[k]+'" r="5.5"/>'});
  g+='</g>';
  /* step 3: the sample vial and the reading */
  g+='<g id="scVial"><g class="vl"><path class="vg" d="M-8 -22V14a8 8 0 0 0 16 0V-22"/><path class="vc" d="M-10 -30H10V-22H-10Z"/><path class="lq" d="M-6 -4V14a6 6 0 0 0 12 0V-4Z"/></g></g>';
  g+='<path id="scGauge" class="gg" d="'+arcd(GA.x,GA.y,GA.r,Math.PI,Math.PI*1.42)+'"/>';
  g+='<path id="scNeedle" class="nd" d="M0 0L-'+(GA.r-12)+' 0"/>';
  /* step 4: the daily trace */
  g+='<path id="scTrace" class="tr" d="'+pathOf(TRACE)+'"/>';
  /* labels: each sits ≥8px clear of every stroke, and no two share a band (DR.3, CY) */
  if(!mob){
    g+='<g id="lCl"><text class="t" x="'+(DOSE+26)+'" y="76">CHLORINE</text></g>';
    g+='<g id="lMain"><text class="t" x="476" y="100">TREATED WATER</text></g>';
    g+='<g id="lRec"><text class="t" x="'+CH.x0+'" y="252">THM LEVEL</text></g>';
    g+='<g id="lLim"><text class="t" x="'+(CH.x1-46)+'" y="'+(LIM-12)+'">LIMIT</text></g>';
    g+='<g id="lAn"><text class="t" x="'+AN.x0+'" y="302">ON-SITE ANALYSER</text></g>';
  }else{
    g+='<g id="lCl"><text class="t" x="'+(DOSE+28)+'" y="80">CHLORINE</text></g>';
    g+='<g id="lMain"></g><g id="lAn"></g>';
    g+='<g id="lRec"><text class="t" x="'+CH.x0+'" y="248">THM LEVEL</text></g>';
    g+='<g id="lLim"></g>';
  }
  g+='<g id="lQ">';QX.forEach(function(x,k){g+='<text class="t q" x="'+x+'" y="'+(CH.y1+(mob?34:28))+'" text-anchor="middle">Q'+(k+1)+'</text>'});g+='</g>';
  var ly=SCH-10,lx=CH.x0;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'CHLORINE FORMS THMS':'CHLORINE MEETS ORGANIC MATTER, AND THMS FORM')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'FOUR RESULTS A YEAR':'FOUR COMPLIANCE RESULTS A YEAR')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'ON SITE, UNDER AN HOUR':'A RESULT ON SITE IN UNDER AN HOUR')+'</text></g>';
  g+='<g id="lb4"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'DAILY DATA, FEWER THMS':'DAILY DATA, AND FEWER THMS IN THE WATER')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),par:$$("#scFlow .par",svg),cl:$$("#scFlow .cl",svg),qp:$$("#scQ .qp",svg),lim:$("#scQ .lim",svg),
    vial:$("#scVial .vl",svg),lq:$("#scVial .lq",svg),gauge:$("#scGauge",svg),needle:$("#scNeedle",svg),trace:$("#scTrace",svg),
    lCl:$("#lCl",svg),lMain:$("#lMain",svg),lRec:$("#lRec",svg),lLim:$("#lLim",svg),lAn:$("#lAn",svg),lQ:$("#lQ",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg)};
  var LT=E.trace.getTotalLength(),LG=E.gauge.getTotalLength();
  E.trace.style.strokeDasharray=LT+" "+LT;E.gauge.style.strokeDasharray=LG+" "+LG;
  E.om=E.par.map(function(el){return $(".om",el)});E.thm=E.par.map(function(el){return $(".thm",el)});
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function cl(x){return x<0?0:x>1?1:x}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var s2=seg(p,.27,.45),s3=seg(p,.52,.70),s4=seg(p,.78,.94);
    /* the flow: parcels ride left to right with the scroll; downstream of the dose they become THM molecules.
       Once the plant has daily data (step 4) two of every three parcels pass without forming THMs. */
    var span=PX1-PX0+30,off=p*560;
    E.par.forEach(function(el,k){
      var q=PAR[k],x=PX0-15+((q.x-PX0+15+off)%span+span)%span;
      var conv=sm((x-DOSE-10)/60);
      if(!q.keep)conv*=1-sm(s4*1.6-.3);
      var edge=sm((x-PX0)/26)*sm((PX1-x)/26);
      el.setAttribute("transform","translate("+f1(x)+" "+f1(q.y+3*Math.sin(x*.03+k))+") rotate("+f1((x*.6+k*40)%360)+")");
      op(el,b*edge);op(E.om[k],1-conv);op(E.thm[k],conv);
    });
    E.cl.forEach(function(el,k){
      var u=((p*9+k/E.cl.length)%1+1)%1;
      el.setAttribute("cy",f1(PIPE_T+4+u*36));el.setAttribute("cx",f1(DOSE+u*26));
      op(el,b*sm(u*5)*(1-sm((u-.7)/.3)));
    });
    /* 2. the record: the limit, then four results, a quarter apart */
    op(E.lim,b*sm(s2*3));
    E.qp.forEach(function(el,k){var v=sm((s2-.18-k*.17)/.2);op(el,b*v);el.setAttribute("r",f1(5.5*(.4+.6*v)))});
    /* 3. the vial fills at the tap, then drops into the analyser's first well; the gauge sweeps */
    var fill=sm(s3/.35),mv=sm((s3-.38)/.34),gin=sm((s3-.72)/.28);
    var vx=TAP+(WELL[0][0]-TAP)*mv,vy=262+(WELL[0][1]-20-262)*mv-Math.sin(mv*Math.PI)*18;
    E.vial.setAttribute("transform","translate("+f1(vx)+" "+f1(vy)+") scale("+(1-.3*mv).toFixed(3)+")");
    op(E.vial,b*sm(s3*6)*(1-sm((mv-.8)/.2)));
    E.lq.setAttribute("transform","translate(0 "+f1(18*(1-fill))+") scale(1 "+Math.max(.001,fill).toFixed(3)+")");
    E.gauge.style.strokeDashoffset=(LG*(1-gin)).toFixed(1);op(E.gauge,b*(gin>0?1:0));
    var ang=Math.PI*1.42*gin+(1-gin)*Math.PI;
    E.needle.setAttribute("transform","translate("+GA.x+" "+GA.y+") rotate("+f1((ang-Math.PI)*180/Math.PI)+")");op(E.needle,b*sm(s3*4));
    /* 4. the daily on-site trace draws across the record */
    E.trace.style.strokeDashoffset=(LT*(1-s4)).toFixed(1);op(E.trace,b*(s4>0?1:0));
    E.qp.forEach(function(el){if(s4>0)el.style.opacity=(b*(1-.55*s4)).toFixed(3)});
    op(E.lCl,b*seg(p,.04,.12));
    op(E.lMain,b*seg(p,.08,.16));
    op(E.lRec,b*seg(p,.04,.14));
    op(E.lQ,b*seg(p,.06,.16));
    op(E.lLim,b*sm(s2*3));
    op(E.lAn,b*seg(p,.10,.18));
    op(E.l1,b*seg(p,.04,.12)*(1-seg(p,.22,.27)));
    op(E.l2,b*seg(p,.29,.36)*(1-seg(p,.47,.52)));
    op(E.l3,b*seg(p,.54,.61)*(1-seg(p,.72,.77)));
    op(E.l4,b*seg(p,.79,.86));
  };
}
