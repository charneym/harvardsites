/* The story scene (BL/BY/DB): how BoneTape works, as ONE continuous fine-line scene. A plate of facial bone (an engraved
   plan view: cortical contour lines and pores) runs across the frame, broken by a jagged fracture. Step 1 (align): the
   displaced fragment on the right moves back into position. Step 2 (tape): a single piece of BoneTape, cut to shape with
   flared ends as in Cohesys's own photograph, is laid across the fracture from end to end; its fine mesh shows the bone
   through it (translucent). Step 3 (resorb): the tape thins and dissolves while the fracture line knits. Driven by the
   scrubbed progress. Facts: cohesys.ca, UHN Research News 2019, Business Wire 2025-08-18, ClinicalTrials.gov NCT06600854. */
var SCW=760,SCH=520,FX=372;
function chTop(x){return 128-34*Math.sin(Math.PI*(x-40)/680)+6*Math.sin(x/53)}
function chBot(x){return 392+18*Math.sin(Math.PI*(x-40)/680)+5*Math.sin(x/41+1)}
function chEdge(){var d='',x;for(x=40;x<=720;x+=8)d+=(x==40?'M':'L')+x+' '+chTop(x).toFixed(1);
  d+='C752 '+chTop(720).toFixed(1)+' 752 '+chBot(720).toFixed(1)+' 720 '+chBot(720).toFixed(1);
  for(x=720;x>=40;x-=8)d+='L'+x+' '+chBot(x).toFixed(1);
  return d+'C8 '+chBot(40).toFixed(1)+' 8 '+chTop(40).toFixed(1)+' 40 '+chTop(40).toFixed(1)+'Z'}
/* the fracture: a jagged line from the upper edge to the lower edge */
var CHF=(function(){var s=11,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff},a=[],y,t0=chTop(FX)-30,b0=chBot(FX)+30;
  var n=23,x=FX,yy=t0;for(var i=0;i<=n;i++){yy=t0+(b0-t0)*(i+(i&&i<n?(R()-.5)*.7:0))/n;x+=(R()-.42)*13;if(i%5==3)x+=(R()-.5)*16;a.push([x,yy])}return a})();
function chFrac(){return CHF.map(function(p,i){return (i?'L':'M')+p[0].toFixed(1)+' '+p[1].toFixed(1)}).join('')}
function chFracIn(){var t=chTop(FX)-2,b=chBot(FX)+2;return CHF.filter(function(p){return p[1]>t&&p[1]<b}).map(function(p,i){return (i?'L':'M')+p[0].toFixed(1)+' '+p[1].toFixed(1)}).join('')}
function chClip(side){var d=chFrac();return side<0?d+'L-40 '+(SCH+40)+'L-40 -40Z':d+'L'+(SCW+40)+' '+(SCH+40)+'L'+(SCW+40)+' -40Z'}
var CHP=(function(){var s=7,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff},a=[],i;
  for(i=0;i<400&&a.length<70;i++){var x=60+R()*640,f=.12+R()*.76,y=chTop(x)+(chBot(x)-chTop(x))*f;
    if(a.some(function(b){return Math.hypot(b[0]-x,b[1]-y)<26}))continue;a.push([x,y,1.4+R()*3.2,R()*180])}return a})();
function chArt(){var g='<g>',k,x;
  g+='<path class="bo1 sD" d="'+chEdge()+'"/>';
  for(k=1;k<=7;k++){var f=k/8,d='';for(x=56;x<=704;x+=8){var y=chTop(x)+(chBot(x)-chTop(x))*f+Math.sin(x/37+k*1.7)*3.2;d+=(x==56?'M':'L')+x+' '+y.toFixed(1)}
    g+='<path class="'+(k==1||k==7?'bo2':'bo3')+' sD" d="'+d+'"/>'}
  CHP.forEach(function(p){g+='<ellipse class="po sD" cx="'+p[0].toFixed(1)+'" cy="'+p[1].toFixed(1)+'" rx="'+p[2].toFixed(1)+'" ry="'+(p[2]*.55).toFixed(1)+'" transform="rotate('+p[3].toFixed(0)+' '+p[0].toFixed(1)+' '+p[1].toFixed(1)+')"/>'});
  return g+'</g>'}
/* BoneTape, cut to shape: a bar with flared ends (after the shape in Cohesys's photograph) */
var TCX=386,TCY=262,TW=170,TH=34,TF=64;
function chTape(){return 'M'+(-TW)+' '+(-TF)+'L'+(-TW+46)+' '+(-TF)+'Q'+(-TW+52)+' '+(-TH)+' '+(-TW+92)+' '+(-TH)+'L'+(TW-92)+' '+(-TH)+'Q'+(TW-52)+' '+(-TH)+' '+(TW-46)+' '+(-TF)+'L'+TW+' '+(-TF)+
  'L'+TW+' '+TF+'L'+(TW-46)+' '+TF+'Q'+(TW-52)+' '+TH+' '+(TW-92)+' '+TH+'L'+(-TW+92)+' '+TH+'Q'+(-TW+52)+' '+TH+' '+(-TW+46)+' '+TF+'L'+(-TW)+' '+TF+'Z'}
function chScene(o){
  var g='',i;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true"><defs>';
  g+='<clipPath id="chL"><path d="'+chClip(-1)+'"/></clipPath><clipPath id="chR"><path d="'+chClip(1)+'"/></clipPath>';
  g+='<clipPath id="chT"><path d="'+chTape()+'"/></clipPath><clipPath id="chRev"><rect id="chRevR" x="'+(-TW-4)+'" y="'+(-TF-4)+'" width="0" height="'+(2*TF+8)+'"/></clipPath>';
  g+='</defs><g id="scBase">';
  g+='<g clip-path="url(#chL)">'+chArt()+'</g>';
  g+='<g id="chFragR"><g clip-path="url(#chR)">'+chArt()+'</g></g>';
  g+='<path class="fr sD" id="chFr" d="'+chFracIn()+'"/>';
  g+=o.mob?'<text class="t" x="380" y="44" text-anchor="middle">MIDFACE FRACTURE · PLAN VIEW</text>':'<text class="t" x="40" y="40">ZYGOMATICOMAXILLARY FRACTURE · PLAN VIEW</text>';
  g+='</g>';
  /* the tape: a translucent body, a fine crossed mesh and its cut outline; laid from its left end to its right */
  var mesh='';for(i=-24;i<=24;i++){var x=i*14;mesh+='M'+(x-80)+' '+(-TF-10)+'L'+(x+80)+' '+(TF+10)+'M'+(x+80)+' '+(-TF-10)+'L'+(x-80)+' '+(TF+10)}
  g+='<g id="chTapeG" transform="translate('+TCX+' '+TCY+') rotate(-7)"><g clip-path="url(#chRev)">';
  g+='<path class="tb" id="chTb" d="'+chTape()+'"/><g clip-path="url(#chT)"><path class="tm" id="chTm" d="'+mesh+'"/></g><path class="to" id="chTo" d="'+chTape()+'"/>';
  g+='</g></g>';
  g+='<g id="chKnit"><path class="kn" d="'+chFracIn()+'"/></g>';
  if(o.mob){
    /* phones: every label centred under the bone, so none can run off the frame */
    g+='<g id="lb1"><text x="380" y="480" text-anchor="middle">FRAGMENTS REALIGNED</text></g>';
    g+='<g id="lb2"><text x="380" y="480" text-anchor="middle">BONETAPE · CUT TO SHAPE</text></g>';
    g+='<g id="lb3"><text x="380" y="480" text-anchor="middle">RESORBS AS THE BONE HEALS</text></g>';
  }else{
    g+='<g id="lb1"><path class="ld" d="M'+(FX+30)+' '+(chTop(FX)+4).toFixed(1)+'L'+(FX+86)+' 76"/><text x="'+(FX+94)+'" y="80">FRAGMENTS REALIGNED</text></g>';
    g+='<g id="lb2"><path class="ld" d="M'+(TCX+150)+' '+(TCY+60)+'L'+(TCX+156)+' 464"/><text x="'+(TCX+164)+'" y="468">BONETAPE · CUT TO SHAPE</text></g>';
    g+='<g id="lb3"><path class="ld" d="M'+(TCX-120)+' '+(TCY+74)+'L'+(TCX-160)+' 464"/><text x="'+(TCX-168)+'" y="468" text-anchor="end">RESORBS AS THE BONE HEALS</text></g>';
  }
  return g+'</svg>';
}
function scene(){return chScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),fr:$("#chFragR",svg),frac:$("#chFr",svg),rev:$("#chRevR",svg),tb:$("#chTb",svg),tm:$("#chTm",svg),to:$("#chTo",svg),
    knit:$("#chKnit",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var al=sm2(seg(p,.06,.28)),lay=sm2(seg(p,.38,.62)),dis=sm2(seg(p,.72,.94));
    /* step 1: the displaced fragment moves back into place */
    var dx=22*(1-al),dy=-16*(1-al),rot=5*(1-al);
    E.fr.setAttribute("transform","translate("+dx.toFixed(1)+" "+dy.toFixed(1)+") rotate("+rot.toFixed(2)+" 600 260)");
    /* step 2: the tape is laid across, end to end */
    E.rev.setAttribute("width",((2*TW+8)*lay).toFixed(1));
    /* step 3: the tape thins and dissolves; the fracture knits */
    op(E.tb,1-dis);op(E.to,1-dis*.92);op(E.tm,1-dis);
    op(E.frac,b*(1-.8*dis));op(E.knit,b*dis*.9);
    op(E.l1,b*seg(p,.2,.27)*(1-seg(p,.34,.4)));op(E.l2,b*seg(p,.5,.57)*(1-seg(p,.68,.74)));op(E.l3,b*seg(p,.82,.9));
  };
}
function sm2(x){return x*x*(3-2*x)}
