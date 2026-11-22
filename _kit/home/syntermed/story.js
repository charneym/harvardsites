/* The story scene (BL/BY/DB): how Cardiac Toolbox reads a myocardial perfusion study, as ONE continuous scene in fine line
   (syntermed.com/cardiac-toolbox, SmartReport: "Study processed ... Syntermed IDS converts study to segmental quantitative
   scores ... automatically propagates an intelligent, structured report for perfusion, function and viability ... physician
   sees justifications"). Step 1: a long-axis section of the left ventricle is cut into four short-axis slices, base to apex,
   each a ring of tracer uptake on the nuclear heat scale. Step 2: the same rings slide into one polar map (17 segments) and
   each segment is scored. Step 3: the map moves aside and the structured report writes itself, with a justification line
   from the scored segments to the finding. An illustrative study, not patient data. Driven by the scrubbed story progress. */
var SCW=760,SCH=520;
var BANDS=[[100,138,6,-120],[62,100,6,-120],[26,62,4,-135],[0,26,1,0]];   /* basal, mid, apical, apex: r0, r1, segments, start angle */
var PLANES=[150,240,320,405],ROWS=[[352,150,.32],[352,240,.4],[352,320,.52],[352,405,.7]],BE=[530,252,1],B3=[214,262,.92];
var DEPTH=[.1,.36,.46,.22];
function hcol(t){var S=[[0,[8,2,4]],[.22,[90,6,10]],[.42,[196,30,18]],[.6,[240,110,20]],[.76,[250,196,30]],[.9,[255,236,140]],[1,[255,252,232]]];
  for(var i=1;i<S.length;i++)if(t<=S[i][0]){var a=S[i-1],b=S[i],k=(t-a[0])/(b[0]-a[0]);return "rgb("+a[1].map(function(c,j){return Math.round(c+(b[1][j]-c)*k)}).join(",")+")"}return "rgb(255,252,232)"}
function sector(r0,r1,a0,a1){var R=Math.PI/180,f=function(n){return n.toFixed(2)},p=function(r,a){return f(r*Math.cos(a*R))+" "+f(r*Math.sin(a*R))},lg=(a1-a0)>180?1:0;
  if(a1-a0>=359.9){return r0>0?"M"+p(r1,0)+"A"+r1+" "+r1+" 0 1 1 "+p(r1,180)+"A"+r1+" "+r1+" 0 1 1 "+p(r1,360)+"M"+p(r0,0)+"A"+r0+" "+r0+" 0 1 0 "+p(r0,180)+"A"+r0+" "+r0+" 0 1 0 "+p(r0,360)+"Z":"M"+p(r1,0)+"A"+r1+" "+r1+" 0 1 1 "+p(r1,180)+"A"+r1+" "+r1+" 0 1 1 "+p(r1,360)+"Z"}
  return "M"+p(r1,a0)+"A"+r1+" "+r1+" 0 "+lg+" 1 "+p(r1,a1)+"L"+p(r0,a1)+"A"+r0+" "+r0+" 0 "+lg+" 0 "+p(r0,a0)+"Z"}
function upt(b,ac){var d=((ac-90+540)%360)-180;return .86-DEPTH[b]*Math.exp(-(d*d)/(2*38*38))+.03*Math.cos(ac*Math.PI/90+b)}
var SCN=0;
function memScene(o){
  var u='s'+(++SCN),g='';
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><linearGradient id="wall'+u+'" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f8c808" stop-opacity=".2"/><stop offset=".7" stop-color="#f08a14" stop-opacity=".2"/><stop offset="1" stop-color="#c41e12" stop-opacity=".26"/></linearGradient></defs>';
  /* ---- the left ventricle, long axis, base at the top ---- */
  var EPI="M70 90C70 300 118 432 160 432C202 432 250 300 250 90",ENDO="M106 90C106 272 134 382 160 382C186 382 214 272 214 90";
  g+='<g id="scLV">';
  g+='<path class="wl" d="'+EPI+'L214 90C214 272 186 382 160 382C134 382 106 272 106 90Z" fill="url(#wall'+u+')"/>';
  g+='<path class="ep sD" d="'+EPI+'"/><path class="en sD" d="'+ENDO+'"/>';
  g+='<text class="t" x="40" y="62">LEFT VENTRICLE · LONG AXIS</text>';
  PLANES.forEach(function(y,k){g+='<path class="pl sD2" data-k="'+k+'" d="M48 '+y+'H272"/><path class="lk sD2" data-k="'+k+'" d="M276 '+y+'H'+(ROWS[k][0]-ROWS[k][2]*BANDS[k][1]-10)+'"/>'});
  g+='</g>';
  /* ---- four slices, each a ring of segments; the same groups become the polar map ---- */
  g+='<g id="scRings">';
  BANDS.forEach(function(B,k){var n=B[2],st=360/n;
    g+='<g class="rg" data-k="'+k+'" transform="translate('+ROWS[k][0]+' '+ROWS[k][1]+') scale('+ROWS[k][2]+')">';
    for(var i=0;i<n;i++){var a0=B[3]+i*st,a1=a0+st,ac=n===1?90:(a0+a1)/2,v=upt(k,ac);
      g+='<path class="sg" d="'+sector(B[0],B[1],a0,a1)+'" fill="'+hcol(Math.max(.05,Math.min(1,v)))+'"/>';
      var sc=v<.5?3:v<.62?2:v<.74?1:0,rm=(B[0]+B[1])/2,R=Math.PI/180;
      if(sc)g+='<text class="sc hi" x="'+(n===1?0:(rm*Math.cos(ac*R))).toFixed(1)+'" y="'+((n===1?0:(rm*Math.sin(ac*R)))+5).toFixed(1)+'" text-anchor="middle">'+sc+'</text>'}
    g+='</g>'});
  g+='</g>';
  /* ---- the structured report ---- */
  var RX=430,RL=[["PERFUSION","Segmental scores, stress and rest"],["FUNCTION","Ejection fraction and wall motion"],["VIABILITY","Viable myocardium, by segment"],["FINDING","A defect phrase, in plain language"]];
  g+='<g id="scRep"><text class="t rp" x="'+RX+'" y="96">STRUCTURED REPORT · SMARTREPORT</text><path class="rr sD3" d="M'+RX+' 112H720"/>';
  RL.forEach(function(r,k){var y=150+k*74;g+='<g class="rl" data-k="'+k+'"><text class="rh" x="'+RX+'" y="'+y+'">'+r[0]+'</text><text class="rb" x="'+RX+'" y="'+(y+28)+'">'+r[1]+'</text><path class="rr sD3" d="M'+RX+' '+(y+46)+'H720"/></g>'});
  g+='<path class="js sD3" d="M'+(B3[0]+Math.cos(1.57)*72*B3[2])+' '+(B3[1]+81*B3[2])+'C'+(B3[0]+60)+' '+(B3[1]+150)+' 360 '+(150+3*74+20)+' '+(RX-14)+' '+(150+3*74+20)+'"/>';
  g+='<g id="apv"><path class="ck" d="M'+RX+' 474l7 7 14-16"/><text class="a" x="'+(RX+32)+'" y="480">REVIEWED · APPROVED</text></g>';
  g+='</g>';
  /* ---- step labels ---- */
  g+='<g id="lb1"><text class="a" x="40" y="508">FOUR SHORT-AXIS SLICES · BASE TO APEX</text></g>';
  g+='<g id="lb2"><text class="a" x="40" y="508">ONE POLAR MAP · 17 SEGMENTS · EACH SCORED</text></g>';
  g+='<g id="lb3"><text class="a" x="40" y="508">THE REPORT, WITH ITS JUSTIFICATION</text></g>';
  return g+'</svg>';
}
function scene(){return memScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;p.style.strokeDashoffset=L;return [p,L]})};
  var E={lv:dl("#scLV .sD"),pl:dl("#scLV .pl"),lk:dl("#scLV .lk"),wl:$$("#scLV .wl",svg),lvt:$("#scLV text",svg),lvg:$("#scLV",svg),
    rg:$$(".rg",svg),sc:$$(".rg .sc",svg),rep:$("#scRep",svg),rr:dl("#scRep .sD3"),rl:$$("#scRep .rl",svg),rpt:$("#scRep .rp",svg),apv:$("#apv",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function cl(x){return x<0?0:x>1?1:x}
  function ez(x){return x<.5?2*x*x:1-Math.pow(-2*x+2,2)/2}
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  return function(p,b){
    if(!svg.isConnected)return;
    var lvIn=seg(p,0,.1),cut=seg(p,.06,.2),toMap=ez(seg(p,.36,.56)),scr=seg(p,.5,.62),toRep=ez(seg(p,.7,.82)),rep=seg(p,.76,.94);
    draw(E.lv,b*lvIn);E.wl.forEach(function(w){op(w,b*lvIn*(1-toRep))});op(E.lvt,b*lvIn*(1-toMap));
    E.pl.forEach(function(a,k){var v=cl(cut*1.6-k*.2);a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1);op(a[0],b*(1-.7*toMap)*(1-toRep))});
    E.lk.forEach(function(a,k){var v=cl(cut*1.6-k*.2-.1);a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1);op(a[0],b*(1-toMap))});
    op(E.lvg,1-toRep);
    E.rg.forEach(function(el,k){var R=ROWS[k],v=cl(cut*1.6-k*.2-.15),m=toMap,
      x=R[0]+(BE[0]-R[0])*m,y=R[1]+(BE[1]-R[1])*m,s=R[2]+(BE[2]-R[2])*m;
      x=x+(B3[0]-BE[0])*toRep;y=y+(B3[1]-BE[1])*toRep;s=s+(B3[2]-BE[2])*toRep;
      el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+") scale("+s.toFixed(3)+")");op(el,b*v)});
    E.sc.forEach(function(t){op(t,b*scr)});
    op(E.rep,b*(toRep>0?1:0));op(E.rpt,b*rep);draw(E.rr,rep);
    E.rl.forEach(function(el,k){op(el,b*cl(rep*2.2-k*.3))});op(E.apv,b*seg(p,.9,.97));
    op(E.l1,b*seg(p,.08,.16)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.5,.56)*(1-seg(p,.66,.72)));op(E.l3,b*seg(p,.86,.92));
  };
}
