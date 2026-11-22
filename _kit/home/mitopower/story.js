/* The story scene (BL/BY/DB): how MP-04 works (mitopower.com Pipeline; NIH 5U44AA029833 abstract), as ONE continuous scene:
   a liver cell drawn in fine line, its nucleus and five mitochondria (outer membrane and cristae), the cell's NAD+ pool as
   small accent rings and an NAD+ gauge. Step 1 (depletion): the NAD+ rings drain away, the cristae dim and inflammatory
   signals gather outside the cell. Step 2 (restore): MP-04 (NRH, drawn as small diamonds) flows in from the vessel side and
   each molecule becomes an NAD+ ring; the gauge refills. Step 3 (recover): the cristae light up in the logo cyan and the
   inflammation fades. Every element is driven by the scrubbed story progress. */
var SCW=760,SCH=520;
var MITS=[{x:330,y:150,a:-14,l:118},{x:520,y:128,a:12,l:104},{x:610,y:270,a:-62,l:96},{x:440,y:330,a:8,l:124},{x:300,y:392,a:-24,l:92}];
var NADS=(function(){var s=7,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff},a=[],i,x,y,ok;
  for(i=0;i<400&&a.length<30;i++){x=140+R()*530;y=90+R()*340;ok=Math.pow((x-405)/300,2)+Math.pow((y-262)/190,2)<.86&&Math.hypot(x-200,y-262)>78&&!(x>140&&x<270&&y>325&&y<372)&&!(x>440&&x<600&&y>70&&y<100);
    MITS.forEach(function(m){if(Math.hypot(x-m.x,y-m.y)<m.l*.62)ok=false});a.forEach(function(b){if(Math.hypot(x-b.x,y-b.y)<34)ok=false});if(ok)a.push({x:x,y:y})}
  return a})();
var INF=[[700,70],[728,150],[700,440],[738,372],[90,470],[640,496],[120,60],[60,140]];
function mitoP(m){var r=22,h=m.l/2-r;return 'M'+(-h)+' '+(-r)+'H'+h+'A'+r+' '+r+' 0 0 1 '+h+' '+r+'H'+(-h)+'A'+r+' '+r+' 0 0 1 '+(-h)+' '+(-r)+'Z'}
function cristae(m){var r=22,h=m.l/2-r,d='',x,k=0;for(x=-h-6;x<=h+6;x+=13,k++){var up=k%2===0,y0=up?-r+3:r-3,y1=up?r*.35:-r*.35;d+='M'+x.toFixed(1)+' '+y0+'C'+(x-5).toFixed(1)+' '+((y0+y1)/2).toFixed(1)+' '+(x+5).toFixed(1)+' '+((y0+y1)/2).toFixed(1)+' '+x.toFixed(1)+' '+y1.toFixed(1)}return d}
function star(cx,cy,r){var d='',k;for(k=0;k<8;k++){var a=Math.PI/4*k,rr=k%2?r*.45:r;d+=(k?'L':'M')+(cx+rr*Math.cos(a)).toFixed(1)+' '+(cy+rr*Math.sin(a)).toFixed(1)}return d+'Z'}
function mitoScene(o){
  var g='';
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g id="scBase">';
  /* the liver cell: a rounded membrane (double line), and the nucleus with its nucleolus */
  g+='<path class="wl sD" d="M120 250C118 150 190 74 300 66C420 58 560 62 640 112C708 156 720 250 700 330C680 412 600 462 470 468C340 474 210 462 158 404C128 370 121 310 120 250Z"/>';
  g+='<path class="wo sD" d="M108 250C106 144 182 62 298 54C420 46 566 50 648 102C722 150 734 250 712 334C690 422 606 476 470 480C338 486 202 474 148 412C116 376 109 314 108 250Z"/>';
  g+='<circle class="wl sD" cx="200" cy="262" r="62"/><circle class="en sD" cx="200" cy="262" r="54"/><circle class="en sD" cx="214" cy="248" r="14"/>';
  MITS.forEach(function(m){g+='<g transform="translate('+m.x+' '+m.y+') rotate('+m.a+')"><path class="wl sD" d="'+mitoP(m)+'"/></g>'});
  g+='<text class="t" x="108" y="30">LIVER CELL · HEPATOCYTE</text>';
  g+='<text class="t" x="166" y="352">NUCLEUS</text>';
  g+='<text class="t" x="'+(MITS[1].x-58)+'" y="'+(MITS[1].y-42)+'">MITOCHONDRION</text>';
  g+='</g>';
  /* cristae: dim (grey) and lit (cyan) copies, cross-faded */
  g+='<g id="scCr">';MITS.forEach(function(m){g+='<g transform="translate('+m.x+' '+m.y+') rotate('+m.a+')"><path class="cr" d="'+cristae(m)+'"/><path class="crl" d="'+cristae(m)+'"/></g>'});g+='</g>';
  /* the NAD+ pool */
  g+='<g id="scNad">';NADS.forEach(function(n,k){g+='<circle class="nd" cx="'+n.x.toFixed(1)+'" cy="'+n.y.toFixed(1)+'" r="5.5"/>'});g+='</g>';
  /* MP-04 (NRH) molecules: diamonds that travel in from the left edge to an NAD+ site */
  g+='<g id="scDrug">';NADS.forEach(function(){g+='<path class="dg" d="M0 -6L6 0L0 6L-6 0Z"/>'});g+='</g>';
  /* inflammatory signals outside the cell */
  g+='<g id="scInf">';INF.forEach(function(p){g+='<path class="inf" d="'+star(p[0],p[1],11)+'"/>'});g+='</g>';
  /* NAD+ gauge, upper right */
  g+='<g id="scGauge"><text class="t" x="560" y="22">NAD+ IN THE CELL</text><rect class="gb" x="560" y="32" width="170" height="5"/><rect class="gf" id="gFill" x="560" y="32" width="170" height="5"/></g>';
  var ly=SCH-4;
  g+='<g id="lb1"><text class="a" x="108" y="'+ly+'">ALCOHOL · NAD+ DEPLETED · INFLAMMATION</text></g>';
  g+='<g id="lb2"><text class="a" x="108" y="'+ly+'">MP-04 (NRH) · NAD+ RESTORED</text></g>';
  g+='<g id="lb3"><text class="a" x="108" y="'+ly+'">MITOCHONDRIA RECOVER · INFLAMMATION CALMED</text></g>';
  return g+'</svg>';
}
function scene(){return mitoScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),cr:$$(".cr",svg),crl:$$(".crl",svg),nd:$$(".nd",svg),dg:$$(".dg",svg),inf:$$(".inf",svg),
    gauge:$("#scGauge",svg),gf:$("#gFill",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function cl(v){return v<0?0:v>1?1:v}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var drain=seg(p,.06,.3),fill=seg(p,.38,.62),lit=seg(p,.68,.9),n=E.nd.length;
    E.nd.forEach(function(el,i){
      var out=cl(drain*1.5-(i/n)*.5);           /* the rings drain away one after another */
      var back=cl((fill*1.6-(i/n)*.6-.85)*7);    /* each returns as its MP-04 molecule arrives */
      op(el,b*Math.max(1-out,back));
    });
    E.dg.forEach(function(el,i){var N=NADS[i],tt=cl(fill*1.6-(i/n)*.6),x=30+(N.x-30)*tt,y=262+(N.y-262)*tt;
      el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")");
      op(el,b*(tt>0&&tt<1?Math.min(1,tt*8)*(1-Math.pow(tt,8)):0))});
    E.cr.forEach(function(el){op(el,b*(1-.7*drain)*(1-lit))});
    E.crl.forEach(function(el){op(el,b*lit)});
    E.inf.forEach(function(el,i){op(el,b*cl(drain*1.4-(i%4)*.1)*(1-seg(p,.7,.9)))});
    op(E.gauge,b);if(E.gf)E.gf.setAttribute("width",(170*Math.max(.1,1-.9*drain+.9*fill)).toFixed(1));
    op(E.l1,b*seg(p,.18,.26)*(1-seg(p,.36,.42)));op(E.l2,b*seg(p,.48,.56)*(1-seg(p,.64,.7)));op(E.l3,b*seg(p,.8,.88));
  };
}
