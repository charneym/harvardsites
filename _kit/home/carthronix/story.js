/* The story scene (BL/BY/DB): CX-011 in knee osteoarthritis (carthronix.com Home and Pipeline; ClinicalTrials.gov NCT07308834),
   as ONE continuous scene: a frontal cross-section of the knee, the femoral condyle above and the tibial plateau below, each
   capped by articular cartilage with its chondrocytes, the synovial capsule around the joint space.
   Step 1 (wear): the cartilage thins and fissures, chondrocytes are lost and the joint space narrows.
   Step 2 (inject): a needle enters the capsule and CX-011 (droplets in the logo rust) spreads through the joint.
   Step 3 (regenerate): the cartilage layer rebuilds to full thickness and new chondrocytes fill it.
   Schematic, drawn in the site's fine-line language. Every element is driven by the scrubbed story progress. */
var SCW=760,SCH=468;
var CX0=150,CX1=730,FY=200,TY=268;
var CT=28;
function fBone(x){var u=(x-CX0)/(CX1-CX0);return FY-CT-30*Math.pow(Math.abs(u-.5)*2,2.2)}
function tBone(x){var u=(x-CX0)/(CX1-CX0);return TY+CT+12*Math.pow(Math.abs(u-.5)*2,2.4)}
var CHO=(function(){var s=11,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff},a=[],i;
  for(i=0;i<52;i++){var x=CX0+16+R()*(CX1-CX0-32);a.push({x:x,top:i%2===0,d:.15+R()*.7,w:R()<.36,ph:R()})}return a})();
var DRP=(function(){var s=5,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff},a=[],i;
  for(i=0;i<34;i++)a.push({tx:CX0+20+R()*(CX1-CX0-40),ty:(FY+TY)/2+(R()-.5)*26,d:R()});return a})();
function wear(x){var u=(x-CX0)/(CX1-CX0);return Math.max(0,Math.min(1,1.15-Math.abs(u-.46)/.34))}
function wearC(x){return Math.min(1,wear(x))}
function surfPath(fn,n){var p='',i;for(i=0;i<=n;i++){var x=CX0+(CX1-CX0)*i/n;p+='L'+x.toFixed(1)+' '+fn(x).toFixed(1)}return p}
function kneeScene(o){
  var g='',i;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g id="scBase">';
  g+='<path class="bn sD" d="M'+CX0+' 14'+surfPath(fBone,40)+'L'+CX1+' 14"/>';
  g+='<path class="bn sD" d="M'+CX0+' 440'+surfPath(tBone,40)+'L'+CX1+' 440"/>';
  for(i=0;i<9;i++){var x=CX0+34+i*62;g+='<path class="tb sD" d="M'+x+' 30C'+(x+20)+' 66 '+(x-14)+' 104 '+(x+8)+' '+(fBone(x+8)-12).toFixed(0)+'"/>';
    g+='<path class="tb sD" d="M'+(x+10)+' 428C'+(x-8)+' 392 '+(x+22)+' 356 '+(x+2)+' '+(tBone(x+2)+12).toFixed(0)+'"/>'}
  g+='<path class="cp sD" d="M'+(CX0-4)+' 118C'+(CX0-40)+' 190 '+(CX0-40)+' 280 '+(CX0-4)+' 350"/><path class="cp sD" d="M'+(CX1+4)+' 118C'+(CX1+28)+' 190 '+(CX1+28)+' 280 '+(CX1+4)+' 350"/>';
  g+='<text class="t" x="20" y="70">FEMUR</text>';
  g+='<text class="t" x="20" y="'+(FY-12)+'">CARTILAGE</text>';
  g+='<text class="t" x="20" y="'+((FY+TY)/2+5)+'">JOINT SPACE</text>';
  g+='<text class="t" x="20" y="'+(TY+26)+'">CARTILAGE</text>';
  g+='<text class="t" x="20" y="400">TIBIA</text>';
  g+='</g>';
  g+='<path id="scFc" class="ct"/><path id="scTc" class="ct"/>';
  g+='<g id="scFis"></g>';
  g+='<g id="scCho">';CHO.forEach(function(c,k){g+='<ellipse class="ch'+(c.w?' nw':'')+'" data-k="'+k+'" rx="5" ry="3.2" cx="0" cy="0"/>'});g+='</g>';
  g+='<g id="scNd"><path class="nd" d="M0 0L-120 -120"/><path class="nb" d="M-120 -120L-170 -170"/></g>';
  g+='<g id="scDrp">';DRP.forEach(function(m,k){g+='<circle class="dp" data-k="'+k+'" r="3.4" cx="0" cy="0"/>'});g+='</g>';
  var ly=SCH-6;
  g+='<g id="lb1"><text class="a" x="20" y="'+ly+'">'+(o.mob?'CARTILAGE THINS · SPACE NARROWS':'OSTEOARTHRITIS · CARTILAGE THINS, THE JOINT SPACE NARROWS')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="'+ly+'">'+(o.mob?'CX-011 · ONE INJECTION':'CX-011 · ONE INTRA-ARTICULAR INJECTION')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="'+ly+'">'+(o.mob?'DESIGNED TO REGENERATE':'DESIGNED TO REGENERATE CARTILAGE · SCHEMATIC')+'</text></g>';
  return g+'</svg>';
}
function scene(){return kneeScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),fc:$("#scFc",svg),tc:$("#scTc",svg),fis:$("#scFis",svg),
    ch:$$(".ch",svg).map(function(el){return {el:el,c:CHO[+el.getAttribute("data-k")]}}),
    nd:$("#scNd",svg),dp:$$(".dp",svg).map(function(el){return {el:el,m:DRP[+el.getAttribute("data-k")]}}),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1,lastL=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function th(x,L){return CT*(1-.8*L*wearC(x))}
  function rough(x,L){return L*wearC(x)*3.4*Math.sin(x*.23)}
  function layers(L){
    var n=56,f='',t='',i,x;
    for(i=0;i<=n;i++){x=CX0+(CX1-CX0)*i/n;f+=(i?'L':'M')+x.toFixed(1)+' '+(fBone(x)+th(x,L)+rough(x,L)).toFixed(1)}
    for(i=n;i>=0;i--){x=CX0+(CX1-CX0)*i/n;f+='L'+x.toFixed(1)+' '+fBone(x).toFixed(1)}
    for(i=0;i<=n;i++){x=CX0+(CX1-CX0)*i/n;t+=(i?'L':'M')+x.toFixed(1)+' '+(tBone(x)-th(x,L)-rough(x,L)*.8).toFixed(1)}
    for(i=n;i>=0;i--){x=CX0+(CX1-CX0)*i/n;t+='L'+x.toFixed(1)+' '+tBone(x).toFixed(1)}
    E.fc.setAttribute("d",f+'Z');E.tc.setAttribute("d",t+'Z');
    var fs='';[262,306,350,394,438,482,522].forEach(function(x,k){var w_=wearC(x)*L;if(w_<.2)return;var y0=fBone(x)+th(x,L)+rough(x,L),d=Math.max(3,th(x,L)-3)*w_;
      fs+='<path class="fs" d="M'+x+' '+y0.toFixed(1)+'l'+(k%2?3:-3)+' '+(-d*.55).toFixed(1)+'l'+(k%2?-2:2)+' '+(-d*.4).toFixed(1)+'"/>';
      var x2=x+16,y1=tBone(x2)-th(x2,L)-rough(x2,L)*.8;fs+='<path class="fs" d="M'+x2+' '+y1.toFixed(1)+'l'+(k%2?-3:3)+' '+(d*.6).toFixed(1)+'"/>'});
    E.fis.innerHTML=fs;
  }
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var loss=seg(p,.04,.26)*(1-seg(p,.68,.92)),inj=seg(p,.36,.48),out=seg(p,.6,.7),spread=seg(p,.44,.66),gone=seg(p,.8,.94);
    var Lq=Math.round(loss*60)/60;if(Lq!==lastL){lastL=Lq;layers(Lq)}
    op(E.fc,b);op(E.tc,b);op(E.fis,b);
    E.ch.forEach(function(C){var c=C.c,x=c.x,t_=th(x,loss),y=c.top?fBone(x)+t_*(.25+.55*c.d):tBone(x)-t_*(.25+.55*c.d);
      var lost=wearC(x)*loss>c.d*.85,reg=c.w?seg(p,.72+c.ph*.14,.8+c.ph*.14):0;
      C.el.setAttribute("cx",x.toFixed(1));C.el.setAttribute("cy",y.toFixed(1));
      op(C.el,b*(c.w?reg:(lost?0:1)))});
    var nx=CX0+110,ny=(FY+TY)/2,a=(1-inj)+out;
    E.nd.setAttribute("transform","translate("+(nx-110*a).toFixed(1)+" "+(ny-110*a).toFixed(1)+")");
    op(E.nd,b*sm(inj*2.5)*(1-out));
    E.dp.forEach(function(D){var m=D.m,q=sm((spread-m.d*.45)/(1-m.d*.45));
      D.el.setAttribute("cx",(nx+(m.tx-nx)*q).toFixed(1));D.el.setAttribute("cy",(ny+(m.ty-ny)*q).toFixed(1));
      op(D.el,b*sm(spread*4)*(1-gone))});
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.4,.48)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}
