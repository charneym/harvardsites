/* the story scene (BL/BY/DB): ONE needle suture drawn as an engraved technical plate and kept on screen for all three steps: a
   3/8-circle needle (the curvature guide dashed behind it), swaged to its thread.
   Step 1 (the point): the taper lights up and a detail circle shows the point and its round-bodied cross-section.
   Step 2 (the swage): the swage end lights up and a detail circle shows the thread seated in the needle's drilled end, the
   needle body barely wider than the suture.
   Step 3 (the thread): a blue DemeLENE polypropylene thread draws out from the swage in one loose loop.
   Sources: demetech.us/specialty/needle (needle body, needle point, needle-to-suture ratio, curvatures) and
   /product/sutures/Polypropylene (blue for visibility). Schematic. Driven by the scrubbed story progress. */
var NS={cx:380,cy:300,R:196,a0:157.5,a1:22.5};
function nsPt(t,off){var a=(NS.a0+(NS.a1-NS.a0)*t)*Math.PI/180,r=NS.R+(off||0);return [NS.cx+r*Math.cos(a),NS.cy-r*Math.sin(a)]}
function nsW(t){return t<.06?8.2:t<.6?6.6:6.6*Math.pow(Math.max(0,(1-t)/.4),.9)}
function nsPath(t0,t1,off){var f=function(n){return n.toFixed(1)},d='',n=60,i;for(i=0;i<=n;i++){var p=nsPt(t0+(t1-t0)*i/n,off);d+=(i?'L':'M')+f(p[0])+' '+f(p[1])}return d}
function nsBody(){var f=function(n){return n.toFixed(1)},o=[],q=[],n=120,i;
  for(i=0;i<=n;i++){var t=i/n,w=nsW(t);o.push(nsPt(t,w));q.push(nsPt(t,-w))}
  var d='M'+o.map(function(p){return f(p[0])+' '+f(p[1])}).join('L');
  d+='L'+q.reverse().map(function(p){return f(p[0])+' '+f(p[1])}).join('L')+'Z';return d}
function scene(){
  var mob=MOBILE(),f=function(n){return (+n).toFixed(1)},g='',sw=nsPt(0,0),pt=nsPt(1,0);
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'30 70 700 440':'20 40 720 470')+'" aria-hidden="true">';
  g+='<defs><linearGradient id="nsSteel" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e9f3f5"/><stop offset=".45" stop-color="#7f9298"/><stop offset="1" stop-color="#2c3a3f"/></linearGradient>'+
     '<clipPath id="nsC1"><circle cx="632" cy="392" r="78"/></clipPath><clipPath id="nsC2"><circle cx="128" cy="392" r="78"/></clipPath></defs>';
  /* base plate: curvature guide, centre mark, radii to both ends, the needle body and its highlight */
  g+='<g id="scBase">';
  g+='<circle class="sD gd" cx="'+NS.cx+'" cy="'+NS.cy+'" r="'+NS.R+'"/>';
  g+='<path class="sD gdx" d="M'+(NS.cx-8)+' '+NS.cy+'H'+(NS.cx+8)+'M'+NS.cx+' '+(NS.cy-8)+'V'+(NS.cy+8)+'"/>';
  g+='<path class="sD gdr" d="M'+NS.cx+' '+NS.cy+'L'+f(sw[0])+' '+f(sw[1])+'M'+NS.cx+' '+NS.cy+'L'+f(pt[0])+' '+f(pt[1])+'"/>';
  g+='<path class="nbody" d="'+nsBody()+'"/><path class="sD nedge" d="'+nsBody()+'"/>';
  g+='<path class="sD nhi" d="'+nsPath(.05,.86,2.4)+'"/>';
  g+='<text class="a" x="'+NS.cx+'" y="'+(NS.cy+34)+'" text-anchor="middle">3/8 CIRCLE</text>';
  g+='</g>';
  /* step 1: the point */
  var pa=nsPt(.97,0);
  g+='<g id="st1"><path class="hl" d="'+nsPath(.6,.995,0)+'"/>'+
     '<path class="sD1 cl" d="M'+f(pa[0]+8)+' '+f(pa[1]+12)+'L604 320"/>'+
     '<circle class="ring" cx="632" cy="392" r="78"/>'+
     '<g clip-path="url(#nsC1)"><path class="dpt" d="M548 374C604 370 660 380 712 392 660 404 604 414 548 410Z"/><path class="dpth" d="M556 382C606 379 650 385 700 392"/>'+
     '<path class="gr" d="M592 375 596 409M614 376 616 407M636 380 637 404M658 384 658 400"/></g>'+
     '<text class="a" x="'+(mob?712:632)+'" y="496" text-anchor="'+(mob?"end":"middle")+'">TAPER POINT · ROUND BODIED</text></g>';
  /* step 2: the swage */
  var sa=nsPt(.02,0);
  g+='<g id="st2"><path class="hl" d="'+nsPath(0,.09,0)+'"/>'+
     '<path class="sD2 cl" d="M'+f(sa[0]-10)+' '+f(sa[1]+12)+'L152 320"/>'+
     '<circle class="ring" cx="128" cy="392" r="78"/>'+
     '<g clip-path="url(#nsC2)"><path class="dbar" d="M106 300H150V420H106Z"/><path class="dbore" d="M118 372V420M138 372V420M118 372H138"/>'+
     '<path class="dthr" d="M128 378V480"/></g>'+
     '<text class="a" x="'+(mob?48:128)+'" y="496" text-anchor="'+(mob?"start":"middle")+'">SWAGE · NEEDLE TO SUTURE</text></g>';
  /* step 3: the thread, one loose loop from the swage end */
  var t3='M'+f(sw[0])+' '+f(sw[1])+'C'+f(sw[0]-30)+' '+f(sw[1]+70)+' 150 330 196 380C246 434 344 436 352 386C360 338 290 330 270 372C248 418 312 452 420 450C500 448 548 430 600 438';
  g+='<g id="st3"><path class="sD3 thr" d="'+t3+'"/><path class="sD3 thrh" d="'+t3+'"/>'+
     '<text class="a" x="'+(mob?712:736)+'" y="496" text-anchor="end">DEMELENE · POLYPROPYLENE, BLUE</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text, #scBase .nbody",svg),s1:$("#st1",svg),s2:$("#st2",svg),s3:$("#st3",svg),
    c1:dl("#st1 .sD1"),c2:dl("#st2 .sD2"),thr:dl("#st3 .sD3")};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var i1=seg(p,0,.1),o1=seg(p,.31,.36),i2=seg(p,.35,.45),o2=seg(p,.64,.69),i3=seg(p,.68,.88);
    op(E.s1,b*i1*(1-o1));draw(E.c1,i1);
    op(E.s2,b*i2*(1-o2));draw(E.c2,i2);
    op(E.s3,b*Math.min(1,i3*6));draw(E.thr,i3);
  };
}
