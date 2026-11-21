/* The story scene (BL/BY/DB): ONE engraved scene kept on screen for all four steps, drawn in fine lines with the logo's cyan
   rule as the accent. Left: a section through the oral epithelium with a lesion; a cytology brush collects its surface cells
   (step 1). Centre: the cells are preserved in solution in a collection tube (step 2). Upper right: their microRNA is extracted
   and amplified, and amplification curves rise (step 3). Lower right: a classifier separates cancer from benign lesions and the
   new sample lands on its side of the boundary (step 4). Follows Arphion's own workflow diagram (About Us): collect oral cells
   with the Arphion kit, preserve in solution, gene extraction and amplification, analysis, simple diagnostic report.
   Schematic, not to scale; the plotted points are illustrative, not data. Driven by the scrubbed story progress. */
var AR={SY:330,T:[196,302],S:[300,22],TUBE:[400,150,410],CELLS:[[176,334],[186,330],[197,333],[207,331],[217,334],[192,342],[211,343]]};
function arRnd(i){var x=Math.sin(i*127.1+311.7)*43758.5453;return x-Math.floor(x)}
function arSurf(x){return AR.SY+5*Math.sin(x/38)+3*Math.sin(x/17+1.3)}
function arMucosa(){var s='',r,x,y,k=0,les;
  var surf='M30 '+arSurf(30).toFixed(1);for(x=36;x<=334;x+=6)surf+='L'+x+' '+arSurf(x).toFixed(1);
  s+='<path class="ar-sf sD" d="'+surf+'"/>';
  var bas='M30 466';for(x=36;x<=334;x+=6)bas+='L'+x+' '+(466+9*Math.sin(x/24+.6)).toFixed(1);
  s+='<path class="ar-bm sD" d="'+bas+'"/>';
  for(r=0;r<5;r++){var rx=[15,13,11,9.5,8.5][r],ry=[3.6,4.8,6.4,7.6,8.4][r],dy=[11,25,44,66,90][r];
    for(x=44+(r%2)*rx;x<=322;x+=rx*2+3){y=arSurf(x)+dy+(arRnd(k)-.5)*3;les=x>158&&x<236&&r<4;
      var ed=Math.min(1,Math.min(x-30,334-x)/40);
      s+='<g class="ar-cl'+(les?' les':'')+'" style="opacity:'+ed.toFixed(2)+'"><ellipse class="sD" cx="'+x.toFixed(1)+'" cy="'+y.toFixed(1)+'" rx="'+(rx*(les?1.08:1)).toFixed(1)+'" ry="'+(ry*(les?1.15:1)).toFixed(1)+'" transform="rotate('+((arRnd(k+7)-.5)*(les?22:8)).toFixed(1)+' '+x.toFixed(1)+' '+y.toFixed(1)+')"/><circle cx="'+(x+(arRnd(k+3)-.5)*3).toFixed(1)+'" cy="'+y.toFixed(1)+'" r="'+(les?2.3:1.4)+'"/></g>';k++}}
  return s}
function arBrush(){var T=AR.T,S=AR.S,dx=T[0]-S[0],dy=T[1]-S[1],L=Math.sqrt(dx*dx+dy*dy),ux=dx/L,uy=dy/L,px=-uy,py=ux,s='',k;
  s+='<path class="ar-st" d="M'+S[0]+' '+S[1]+'L'+(T[0]-ux*58).toFixed(1)+' '+(T[1]-uy*58).toFixed(1)+'"/>';
  s+='<path class="ar-st2" d="M'+(S[0]+px*2.4).toFixed(1)+' '+(S[1]+py*2.4).toFixed(1)+'L'+(T[0]-ux*58+px*2.4).toFixed(1)+' '+(T[1]-uy*58+py*2.4).toFixed(1)+'"/>';
  for(k=0;k<19;k++){var cx=T[0]-ux*(4+k*3),cy=T[1]-uy*(4+k*3),w=10.5*Math.min(1,(k+2)/5)*Math.min(1,(19-k)/4+.4);
    s+='<path class="ar-bt" d="M'+(cx-px*w).toFixed(1)+' '+(cy-py*w).toFixed(1)+'L'+(cx+px*w).toFixed(1)+' '+(cy+py*w).toFixed(1)+'"/>'}
  s+='<path class="ar-st" d="M'+(T[0]-ux*58).toFixed(1)+' '+(T[1]-uy*58).toFixed(1)+'L'+T[0]+' '+T[1]+'"/>';
  return '<g id="arBrush">'+s+'</g>'}
function arTube(){var X=AR.TUBE[0],T=AR.TUBE[1],B=AR.TUBE[2],s='';
  s+='<path class="ar-tb sD" d="M'+(X-26)+' '+(T+18)+'V'+(B-34)+'Q'+(X-26)+' '+B+' '+X+' '+B+'Q'+(X+26)+' '+B+' '+(X+26)+' '+(B-34)+'V'+(T+18)+'"/>';
  s+='<path class="ar-tb sD" d="M'+(X-34)+' '+(T-14)+'H'+(X+34)+'V'+(T+18)+'H'+(X-34)+'Z"/>';
  for(var i=0;i<5;i++)s+='<path class="ar-gr sD" d="M'+(X+14)+' '+(T+70+i*40)+'H'+(X+26)+'"/>';
  return s}
function arAxes(x0,y0,x1,y1){return '<path class="ar-ax sD" d="M'+x0+' '+y1+'V'+y0+'M'+x0+' '+y0+'H'+x1+'"/>'}
function arSig(x0,y0,ct,h,cls,id){var d='';for(var i=0;i<=48;i++){var x=x0+i*5,y=y0-h/(1+Math.exp(-(x-ct)/13));d+=(i?'L':'M')+x.toFixed(1)+' '+y.toFixed(1)}
  return '<path id="'+id+'" class="ar-cv '+cls+'" d="'+d+'"/>'}
function scene(){
  var mob=MOBILE(),g='',X=AR.TUBE[0];
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<defs><radialGradient id="arw" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#f3f5fa" stop-opacity=".14"/><stop offset="1" stop-color="#f3f5fa" stop-opacity="0"/></radialGradient>'+
     '<radialGradient id="arc" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#a8ebf3" stop-opacity=".26"/><stop offset="1" stop-color="#a8ebf3" stop-opacity="0"/></radialGradient>'+
     '<linearGradient id="arl" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#a8ebf3" stop-opacity=".26"/><stop offset="1" stop-color="#a8ebf3" stop-opacity=".08"/></linearGradient></defs>';
  g+='<g id="scBase">';
  g+='<circle class="ar-halo" cx="190" cy="360" r="200" fill="url(#arw)"/><circle class="ar-halo" cx="640" cy="290" r="230" fill="url(#arw)"/>';
  g+='<text class="side" x="40" y="'+(AR.SY-40)+'">ORAL LESION</text>';
  g+=arMucosa();
  g+=arTube();
  g+=arAxes(520,236,764,80)+arAxes(520,508,764,300);
  g+='<path class="ar-th sD" d="M520 196H764"/>';
  g+='</g>';
  g+='<g id="scMove">';
  g+='<circle id="arGl" cx="196" cy="336" r="70" fill="url(#arc)"/>';
  g+=arBrush();
  var tin='M'+(X-25)+' '+(AR.TUBE[1]+19)+'V'+(AR.TUBE[2]-34)+'Q'+(X-25)+' '+(AR.TUBE[2]-1)+' '+X+' '+(AR.TUBE[2]-1)+'Q'+(X+25)+' '+(AR.TUBE[2]-1)+' '+(X+25)+' '+(AR.TUBE[2]-34)+'V'+(AR.TUBE[1]+19)+'Z';
  g+='<clipPath id="arTc"><path d="'+tin+'"/></clipPath><g clip-path="url(#arTc)"><path id="arLiq" class="ar-lq" d="M'+(X-30)+' 250H'+(X+30)+'V'+(AR.TUBE[2]+4)+'H'+(X-30)+'Z"/></g>';
  g+='<path id="arC1" class="ar-cn" d="M436 214C470 214 486 168 514 158"/><path id="arC2" class="ar-cn" d="M642 246V292"/>';
  g+='<g id="arSig">'+arSig(520,232,600,128,"","arS1")+arSig(520,232,640,118,"dim","arS2")+arSig(520,232,684,108,"dim","arS3")+'</g>';
  var pts='',i;
  for(i=0;i<16;i++){var a=arRnd(i+40)*6.283,rr=10+arRnd(i+60)*44;pts+='<circle class="ar-bn" cx="'+(580+Math.cos(a)*rr*1.15).toFixed(1)+'" cy="'+(444+Math.sin(a)*rr*.85).toFixed(1)+'" r="4.2"/>'}
  for(i=0;i<16;i++){var a2=arRnd(i+90)*6.283,r2=10+arRnd(i+120)*42;pts+='<circle class="ar-ca" cx="'+(704+Math.cos(a2)*r2*1.0).toFixed(1)+'" cy="'+(352+Math.sin(a2)*r2*.85).toFixed(1)+'" r="4.2"/>'}
  g+='<g id="arPts">'+pts+'</g>';
  g+='<path id="arDb" class="ar-db" d="M574 304C616 356 660 410 760 470"/>';
  g+='<g id="arNew"><circle class="ar-nr" cx="690" cy="372" r="15"/><circle class="ar-nc" cx="690" cy="372" r="5.5"/></g>';
  g+='<g id="arCells">'+AR.CELLS.map(function(c,i){return '<circle class="ar-cc" r="'+(i%3?3.4:4)+'" cx="0" cy="0"/>'}).join('')+'</g>';
  g+='</g>';
  var BY=mob?540:528,BY2=mob?558:548,LX=mob?40:40;
  g+='<g id="lb1"><text class="a" x="'+LX+'" y="'+BY+'">BRUSH BIOPSY</text>'+(mob?'':'<text class="t" x="'+LX+'" y="'+BY2+'">CELLS FROM THE LESION SURFACE</text>')+'</g>';
  g+='<g id="lb2"><text class="a" x="'+X+'" y="'+BY+'" text-anchor="middle">PRESERVED IN SOLUTION</text>'+(mob?'':'<text class="t" x="'+X+'" y="'+BY2+'" text-anchor="middle">SENT TO ARPHION</text>')+'</g>';
  g+='<g id="lb3"><text class="a" x="'+(mob?400:520)+'" y="'+(mob?BY:52)+'"'+(mob?' text-anchor="middle"':'')+'>microRNA LEVELS</text>'+(mob?'':'<text class="t" x="520" y="34">EXTRACTED AND AMPLIFIED</text>')+'</g>';
  g+='<g id="lb4"><text class="a" x="'+(800-LX)+'" y="'+BY+'" text-anchor="end">CLASSIFIER</text>'+(mob?'':'<text class="t" x="'+(800-LX)+'" y="'+BY2+'" text-anchor="end">CANCER OR BENIGN</text>')+'</g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var dl1=function(el){var L=el.getTotalLength();el.style.strokeDasharray=L+" "+L;return [el,L]};
  var E={base:dl("#scBase path.sD"),cls:$$("#scBase .ar-cl",svg),halo:$$(".ar-halo",svg),mv:$("#scMove",svg),side:$$(".side",svg),
    br:$("#arBrush",svg),gl:$("#arGl",svg),liq:$("#arLiq",svg),c1:dl1($("#arC1",svg)),c2:dl1($("#arC2",svg)),
    s:[dl1($("#arS1",svg)),dl1($("#arS2",svg)),dl1($("#arS3",svg))],pts:$$("#arPts circle",svg),db:dl1($("#arDb",svg)),nw:$("#arNew",svg),
    cells:$$("#arCells circle",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg)};
  var T=AR.T,TB=AR.TUBE,lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function lerp(a,b,t){return a+(b-a)*t}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.cls.forEach(function(c,i){c.style.visibility=b>((i%23)/23)*.9?"visible":"hidden"});E.halo.forEach(function(h){op(h,b)});op(E.mv,b);E.side.forEach(function(s){op(s,b*.9)})}
    /* 1: the brush comes down onto the lesion and sweeps; 2: it lifts away and the cells go into the tube */
    var down=seg(p,.02,.14),sweep=seg(p,.1,.22),up=seg(p,.28,.4);
    var bx=-14*Math.sin(sweep*Math.PI*2)*(1-up)+30*up,by=-60*(1-down)+22*down*(1-up)-90*up;
    E.br.setAttribute("transform","translate("+bx.toFixed(1)+" "+by.toFixed(1)+")");op(E.br,b*(1-up*.75));
    op(E.gl,b*seg(p,.06,.16)*(1-seg(p,.36,.46)));
    var pick=seg(p,.14,.24),go=seg(p,.3,.46);
    E.cells.forEach(function(c,i){var a=AR.CELLS[i],hx=T[0]-6+(i%4)*4+bx,hy=T[1]-14-(i%3)*7+by,
      tx=TB[0]-12+(i%4)*8,ty=TB[2]-60-(i%3)*34-(i>3?16:0)+4*Math.sin(p*20+i);
      var x=lerp(lerp(a[0],hx,pick),tx,go),y=lerp(lerp(a[1],hy,pick),ty,go);
      if(go>0&&go<1){y-=Math.sin(go*Math.PI)*60}
      c.setAttribute("cx",x.toFixed(1));c.setAttribute("cy",y.toFixed(1));op(c,b*seg(p,.12,.18))});
    var fill=seg(p,.26,.42);E.liq.setAttribute("transform","translate(0 "+(130*(1-fill)).toFixed(1)+")");op(E.liq,b*fill);
    /* 3: extraction and amplification curves; 4: the classifier */
    draw([E.c1],seg(p,.48,.56));
    E.s.forEach(function(s,i){draw([s],seg(p,.52+i*.04,.66+i*.04))});
    draw([E.c2],seg(p,.72,.78));
    E.pts.forEach(function(d,i){op(d,b*seg(p,.74+(i%8)*.008,.8+(i%8)*.008))});
    draw([E.db],seg(p,.8,.9));
    var nw=seg(p,.88,.96);op(E.nw,b*nw);E.nw.setAttribute("transform","translate(0 "+(-40*(1-nw)).toFixed(1)+")");
    E.nw.classList.toggle("lit",nw>.95);
    op(E.l1,b*seg(p,.02,.1)*(1-seg(p,.22,.27)));
    op(E.l2,b*seg(p,.3,.37)*(1-seg(p,.46,.5)));
    op(E.l3,b*seg(p,.52,.6)*(1-seg(p,.68,.72)));
    op(E.l4,b*seg(p,.8,.88));
  };
}
