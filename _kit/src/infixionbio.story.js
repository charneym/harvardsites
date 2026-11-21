/* the story scene: iNFixion's own haploinsufficiency-correction diagram (their "HCT" figure on Our Approach and the NIH abstract
   for 1R43NS147645), redrawn as one fine-line plate. Two copies of the NF1 gene, each read into mRNA and then protein, over a
   neurofibromin gauge.
   Step 1 one copy carries the mutation: half the functional neurofibromin (the gauge at 1/2);
   step 2 haploinsufficiency: the missing half is drawn as a dashed ghost beside the normal protein;
   step 3 microRNAs bind the 3'UTR of the normal NF1 mRNA, then a steric-blocking ASO takes the site and they fall away;
   step 4 more mRNA and protein from the normal copy, and the gauge swings to a normal level. One caption names each step. */
function ixHelix(cx,cy,wd,amp){var a='',b='',r='',n=56,x0=cx-wd/2;
  for(var i=0;i<=n;i++){var t=i/n,x=x0+t*wd,ph=t*Math.PI*4,y1=cy+Math.sin(ph)*amp,y2=cy+Math.sin(ph+Math.PI*.78)*amp;
    a+=(i?'L':'M')+x.toFixed(1)+' '+y1.toFixed(1);b+=(i?'L':'M')+x.toFixed(1)+' '+y2.toFixed(1);
    if(i%3===1)r+='M'+x.toFixed(1)+' '+y1.toFixed(1)+'V'+y2.toFixed(1)}
  return [a,b,r]}
function ixRna(cx,cy,wd,amp,k){var d='',n=48,x0=cx-wd/2;for(var i=0;i<=n;i++){var t=i/n,x=x0+t*wd,y=cy+Math.sin(t*Math.PI*k)*amp;d+=(i?'L':'M')+x.toFixed(1)+' '+y.toFixed(1)}
  var tk='';for(i=1;i<n;i+=2){var t2=i/n,x2=x0+t2*wd,y2=cy+Math.sin(t2*Math.PI*k)*amp;tk+='M'+x2.toFixed(1)+' '+y2.toFixed(1)+'v-7'}return [d,tk]}
function scene(){
  var mob=MOBILE(),fs=mob?18:12.5,cs=mob?19:13,X=[160,440];
  var caps=["ONE COPY MUTATED · ABOUT 50% FUNCTIONAL NEUROFIBROMIN","HAPLOINSUFFICIENCY · TOO LITTLE NORMAL PROTEIN","MICRORNAS AT THE 3′UTR · A STERIC-BLOCKING ASO","NORMAL NEUROFIBROMIN LEVELS RESTORED"];
  var s='<svg viewBox="0 0 600 580" role="img" aria-label="Two copies of the NF1 gene, one mutated, read into mRNA and neurofibromin protein, with a gauge of the neurofibromin level">';
  var g='';for(var gx=20;gx<=580;gx+=40)g+='<path class="ig" d="M'+gx+' 20V500"/>';for(var gy=20;gy<=500;gy+=40)g+='<path class="ig" d="M20 '+gy+'H580"/>';
  s+='<g>'+g+'</g>';
  /* column heads */
  s+='<text class="ia" x="'+X[0]+'" y="34" text-anchor="middle" style="font-size:'+fs+'px">NORMAL COPY</text><text class="it" x="'+X[1]+'" y="34" text-anchor="middle" style="font-size:'+fs+'px">MUTATED COPY</text>';
  /* row 1: the two gene copies */
  X.forEach(function(cx,i){var H=ixHelix(cx,86,210,17);var c=i?'m':'n';
    s+='<g id="ixG'+i+'"><path class="ir'+c+'" d="'+H[2]+'"/><path class="ih'+c+' ixd" d="'+H[0]+'"/><path class="ih'+c+' ixd" d="'+H[1]+'"/></g>'});
  s+='<g id="ixMut"><circle class="imk" cx="'+(X[1]+22)+'" cy="86" r="11"/><path class="imx" d="M'+(X[1]+16)+' 80l12 12M'+(X[1]+28)+' 80l-12 12"/></g>';
  /* arrows */
  function arr(x,y1,y2,id){return '<path '+(id?'id="'+id+'" ':'')+'class="iar" d="M'+x+' '+y1+'V'+y2+'M'+(x-5)+' '+(y2-7)+'L'+x+' '+y2+'L'+(x+5)+' '+(y2-7)+'"/>'}
  s+=arr(X[0],118,150)+arr(X[1],118,150);
  /* row 2: mRNA (a second strand appears for the normal copy in step 4) */
  X.forEach(function(cx,i){var R=ixRna(cx,176,200,5,3);var c=i?'m':'n';s+='<g id="ixR'+i+'"><path class="ih'+c+' ixd" d="'+R[0]+'"/><path class="it'+c+'" d="'+R[1]+'"/></g>'});
  var R2=ixRna(X[0],196,200,5,3);s+='<g id="ixR2"><path class="ihn ixd" d="'+R2[0]+'"/><path class="itn" d="'+R2[1]+'"/></g>';
  s+='<text class="it" id="ixRl" x="'+(X[0]-100)+'" y="'+(mob?224:214)+'" style="font-size:'+fs+'px">NF1 mRNA</text>';
  /* the 3'UTR bracket, microRNAs and the ASO (step 3) */
  var ux=X[0]+52;
  s+='<g id="ixUtr"><path class="ibr" d="M'+ux+' 152V146H'+(X[0]+100)+'V152"/><text class="ia" x="'+(X[0]+76)+'" y="138" text-anchor="middle" style="font-size:'+fs+'px">3′UTR</text></g>';
  s+='<g id="ixMi"><path class="imi" d="M'+(ux+4)+' 168c6-12 14-12 20-2"/><path class="imi" d="M'+(ux+26)+' 166c6-12 14-12 20 0"/><text class="it" x="'+(ux+70)+'" y="'+(mob?236:228)+'" style="font-size:'+fs+'px">MICRORNA</text></g>';
  s+='<g id="ixAso"><rect class="iaso" x="'+(ux+2)+'" y="160" width="44" height="7"/><text class="ia" x="'+(ux+70)+'" y="'+(mob?236:228)+'" style="font-size:'+fs+'px">ASO</text></g>';
  s+=arr(X[0],226,262,"ixA3")+arr(X[1],226,262);
  /* row 3: protein */
  function cap(cx,cy,cls,id,lab){return '<g id="'+id+'"><rect class="'+cls+'" x="'+(cx-80)+'" y="'+(cy-24)+'" width="160" height="48"/>'+(lab?'<text class="iw" x="'+cx+'" y="'+(cy+5)+'" text-anchor="middle" style="font-size:'+(mob?15.5:fs)+'px">'+lab+'</text>':'')+'</g>'}
  s+=cap(X[0]+14,306,"ipg","ixGhost","")+cap(X[0]+14,306,"ipn2","ixP2","")+cap(X[0],292,"ipn","ixP0","NEUROFIBROMIN")+cap(X[1],292,"ipm","ixP1","NON-FUNCTIONAL");
  s+='<g id="ixLow"><text class="ia" x="'+(X[0]+14)+'" y="352" text-anchor="middle" style="font-size:'+fs+'px">THE MISSING HALF</text></g>';
  /* row 4: the gauge */
  var gc=[300,476],gr=mob?96:104,tk='';
  for(var k=0;k<=20;k++){var a=Math.PI+k/20*Math.PI,r1=gr-(k%5?8:15);tk+='M'+(gc[0]+Math.cos(a)*r1).toFixed(1)+' '+(gc[1]+Math.sin(a)*r1).toFixed(1)+'L'+(gc[0]+Math.cos(a)*gr).toFixed(1)+' '+(gc[1]+Math.sin(a)*gr).toFixed(1)}
  s+='<g id="ixGa"><path class="igA" d="M'+(gc[0]-gr)+' '+gc[1]+'A'+gr+' '+gr+' 0 0 1 '+(gc[0]+gr)+' '+gc[1]+'"/><path class="igT" d="'+tk+'"/>'+
    '<path id="ixArc" class="igF" d="M'+(gc[0]-gr+4)+' '+gc[1]+'A'+(gr-4)+' '+(gr-4)+' 0 0 1 '+(gc[0]+gr-4)+' '+gc[1]+'"/>'+
    '<text class="it" x="'+(gc[0]-gr-6)+'" y="'+(gc[1]+4)+'" text-anchor="end" style="font-size:'+fs+'px">NONE</text><text class="it" x="'+(gc[0]+gr+6)+'" y="'+(gc[1]+4)+'" style="font-size:'+fs+'px">100%</text>'+
    '<g id="ixNd"><path class="ind" d="M0 0L'+(gr-22)+' 0"/><circle class="inc" cx="0" cy="0" r="6"/></g></g>';
  caps.forEach(function(t,i){var parts=t.split(" · ");var body=(mob&&parts.length>1)?'<tspan x="300" dy="0">'+parts[0]+'</tspan><tspan x="300" dy="1.35em">'+parts[1]+'</tspan>':t;
    s+='<text class="cap" id="ixC'+i+'" x="300" y="'+(mob&&parts.length>1?548:(mob?562:562))+'" text-anchor="middle" style="font-size:'+cs+'px">'+body+'</text>'});
  s+='<text class="it" id="ixL0" x="300" y="'+(gc[1]+30)+'" text-anchor="middle" style="font-size:'+fs+'px">NEUROFIBROMIN · 50%</text><text class="ia" id="ixL1" x="300" y="'+(gc[1]+30)+'" text-anchor="middle" style="font-size:'+fs+'px">NEUROFIBROMIN · NORMAL</text>';
  return s+'</svg>';
}
function storyDraw(svg){
  var q=function(id){return $("#"+id,svg)};
  var E={g0:q("ixG0"),g1:q("ixG1"),mut:q("ixMut"),r0:q("ixR0"),r1:q("ixR1"),r2:q("ixR2"),rl:q("ixRl"),utr:q("ixUtr"),mi:q("ixMi"),aso:q("ixAso"),
    p0:q("ixP0"),p1:q("ixP1"),p2:q("ixP2"),gh:q("ixGhost"),low:q("ixLow"),ga:q("ixGa"),arc:q("ixArc"),nd:q("ixNd"),l0:q("ixL0"),l1:q("ixL1"),
    cap:[0,1,2,3].map(function(i){return q("ixC"+i)}),ar:$$(".iar",svg)};
  var D=$$(".ixd",svg).map(function(p){var L=p.getTotalLength();p.style.strokeDasharray=L.toFixed(1)+" "+L.toFixed(1);return [p,L]});
  var AL=E.arc.getTotalLength();E.arc.style.strokeDasharray=AL.toFixed(1)+" "+AL.toFixed(1);
  var gc=E.ga.querySelector(".igA").getAttribute("d").match(/M([\d.]+) ([\d.]+)A([\d.]+)/),cx=+gc[1]+ +gc[3],cy=+gc[2];
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!E.g0.isConnected)return;
    var s1=seg(p,.02,.16),s2=seg(p,.27,.45),s3a=seg(p,.52,.6),s3b=seg(p,.6,.7),s4=seg(p,.77,.94);
    svg.style.opacity=(.3+.7*b).toFixed(3);
    var draw=Math.max(.0,s1);
    D.forEach(function(d){var el=d[0],own=el.closest("#ixR2")?s4:draw;el.style.strokeDashoffset=(d[1]*(1-own)).toFixed(1)});
    op(E.g0,.25+.75*s1);op(E.g1,(.25+.75*s1)*(1-.35*s2));op(E.mut,s1);op(E.r0,.2+.8*s1);op(E.r1,(.2+.8*s1)*(1-.35*s2));op(E.rl,s1*(1-s3a));
    E.ar.forEach(function(a,i){op(a,.15+.85*s1)});
    op(E.p0,s1);op(E.p1,s1*(1-.35*s2));
    /* step 2: the missing half */
    op(E.gh,s2*(1-s4));op(E.low,s2*(1-s3a*.6)*(1-s4));
    /* step 3: microRNAs bound at the 3'UTR, then the ASO takes the site */
    op(E.utr,s3a*(1-.5*s4));op(E.mi,s3a*(1-s3b));E.mi.setAttribute("transform","translate("+(s3b*10).toFixed(1)+" "+(-s3b*26).toFixed(1)+")");
    op(E.aso,s3b);
    /* step 4: more mRNA and protein from the normal copy; the gauge swings */
    op(E.r2,s4);op(E.p2,s4);
    var lv=.5*Math.min(1,s1*1.4)+.5*s4;
    E.nd.setAttribute("transform","translate("+cx+" "+cy+") rotate("+(-180+lv*180).toFixed(1)+")");
    E.arc.style.strokeDashoffset=(AL*(1-lv)).toFixed(1);
    op(E.ga,.25+.75*s1);op(E.l0,s1*(1-s4));op(E.l1,s4);
    var W=[[0,0,.23,.25],[.25,.28,.48,.5],[.5,.53,.73,.75],[.75,.78,2,2]];
    E.cap.forEach(function(el,k){var a2=k===0?1:seg(p,W[k][0],W[k][1]),o=k===3?0:seg(p,W[k][2],W[k][3]);el.style.opacity=(b*a2*(1-o)).toFixed(3)});
  };
}
