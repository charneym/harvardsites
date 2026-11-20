/* the story scene (BL/BY/DB): ONE engraved elevation of a lighthouse, the way the firm builds a portfolio. Step 1 draws the
   plan (the allocation agreed with the client, as dashed outline and labelled zones); step 2 lays the lower courses (fixed
   income, maturities staggered out to twenty years); step 3 raises the tower (diversified stocks and funds, held long);
   step 4 lights the lantern (daily reconciliation, regular review, a phone answered 24/7). Each step changes one labelled
   part of the same drawing. */
function tower(o){
  var W=o.W,H=o.H,cx=o.cx,gy=o.gy,ty=o.ty,bw=o.bw,tw=o.tw,f=function(n){return n.toFixed(1)};
  function hw(y){return bw+(tw-bw)*(gy-y)/(gy-ty)}
  var g='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+W+' '+H+'" aria-hidden="true"><defs><clipPath id="scClip"><rect x="0" y="0" width="'+W+'" height="'+H+'"/></clipPath>'+
    '<radialGradient id="scGlow"><stop offset="0" stop-color="var(--accL)" stop-opacity=".55"/><stop offset="1" stop-color="var(--accL)" stop-opacity="0"/></radialGradient>'+
    '<linearGradient id="scBeamL" x1="1" x2="0"><stop offset="0" stop-color="var(--accL)" stop-opacity=".42"/><stop offset="1" stop-color="var(--accL)" stop-opacity="0"/></linearGradient>'+
    '<linearGradient id="scBeamR" x1="0" x2="1"><stop offset="0" stop-color="var(--accL)" stop-opacity=".42"/><stop offset="1" stop-color="var(--accL)" stop-opacity="0"/></linearGradient></defs>';
  /* base: neatline, sea hatching, dunes and palms, ground line, title block */
  g+='<g id="scBase"><g clip-path="url(#scClip)">';
  var hz=o.hz,k,i;
  for(k=0;k<o.seaN;k++){var yy=hz+4+k*o.seaG,x0=8+((k*37)%23),len=W-16-((k*53)%41);
    for(var xs=x0;xs<len;xs+=o.dash+((k+xs)%3)*6){g+='<path class="ct sD" d="M'+f(xs)+' '+f(yy)+'H'+f(Math.min(len,xs+o.dash*.7))+'"/>'}}
  g+='<path class="bank sD" d="M0 '+f(hz)+'H'+W+'"/>';
  /* the point of land the tower stands on */
  var lL=cx-o.land,lR=cx+o.land;
  g+='<path class="bank sD" d="M'+f(lL-o.land*.5)+' '+f(hz)+'Q'+f(lL)+' '+f(gy)+' '+f(lL+o.land*.3)+' '+f(gy)+'H'+f(lR-o.land*.3)+'Q'+f(lR)+' '+f(gy)+' '+f(lR+o.land*.5)+' '+f(hz)+'"/>';
  var R=function(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}(29);
  for(i=0;i<(o.mob?26:44);i++){var dx=lL+R()*(lR-lL),dy=gy+2+R()*(hz-gy-4);if(Math.abs(dx-cx)<bw+6&&dy<gy+6)continue;g+='<circle class="dot" cx="'+f(dx)+'" cy="'+f(dy)+'" r="1"/>'}
  o.palms.forEach(function(p){g+=palmSvg(p[0],gy,p[1],p[2])});
  g+='</g><rect class="neat" x=".5" y=".5" width="'+(W-1)+'" height="'+(H-1)+'"/>';
  if(!o.mob)g+='<g class="tb"><path class="neat" d="M'+(W-196)+' '+(H-46)+'H'+(W-14)+'V'+(H-14)+'H'+(W-196)+'Z M'+(W-196)+' '+(H-30)+'H'+(W-14)+'"/><text x="'+(W-188)+'" y="'+(H-34)+'" class="q">ELEVATION · A PORTFOLIO</text><text x="'+(W-188)+'" y="'+(H-18)+'" class="q">BUILT TO STAND</text></g>';
  g+='</g>';
  /* step 1: the plan, dashed, with its zones */
  var yB=o.yB,yS=o.yS;
  g+='<g id="scPlan"><path class="plan" d="M'+f(cx-bw)+' '+gy+'L'+f(cx-tw)+' '+ty+'H'+f(cx+tw)+'L'+f(cx+bw)+' '+gy+'Z"/>'+
     '<path class="plan" d="M'+f(cx-hw(yB))+' '+f(yB)+'H'+f(cx+hw(yB))+'M'+f(cx-hw(yS))+' '+f(yS)+'H'+f(cx+hw(yS))+'"/>';
  o.zones.forEach(function(z){var y=z[0],x=cx-hw(y),lx=o.labL;g+='<path class="lead" d="M'+f(x-4)+' '+f(y)+'H'+f(lx+6)+'"/><circle class="mk" cx="'+f(x-4)+'" cy="'+f(y)+'" r="2.4"/><text x="'+f(lx)+'" y="'+f(y+4)+'" text-anchor="end" class="'+(z[2]||"w")+'">'+z[1]+'</text>'});
  g+='</g>';
  /* step 2: the bond courses, a ladder of maturities */
  var nb=o.rungs.length;g+='<g id="scBonds">';
  for(i=0;i<nb;i++){var y1=gy-(gy-yB)*i/nb,y2=gy-(gy-yB)*(i+1)/nb,a1=hw(y1),a2=hw(y2);
    g+='<g class="crs"><path class="cf" d="M'+f(cx-a1)+' '+f(y1)+'L'+f(cx-a2)+' '+f(y2)+'H'+f(cx+a2)+'L'+f(cx+a1)+' '+f(y1)+'Z"/>';
    for(var bx=-a1+((i%2)?o.brick/2:0);bx<a1-2;bx+=o.brick){g+='<path class="br" d="M'+f(cx+bx)+' '+f(y1)+'V'+f(y2)+'"/>'}
    var ym=(y1+y2)/2;g+='<path class="lead" d="M'+f(cx+hw(ym)+4)+' '+f(ym)+'H'+f(o.labR-6)+'"/><text x="'+f(o.labR)+'" y="'+f(ym+4)+'" class="a">'+o.rungs[i]+'</text></g>'}
  g+='<text x="'+f(o.labR)+'" y="'+f(yB-o.capG)+'" class="w">'+o.bondT+'</text></g>';
  /* step 3: the stock courses, the gallery and the lantern room */
  var ns=o.sN;g+='<g id="scStocks">';
  for(i=0;i<ns;i++){var s1=yB-(yB-ty)*i/ns,s2=yB-(yB-ty)*(i+1)/ns,b1=hw(s1),b2=hw(s2);
    g+='<g class="crs"><path class="sf" d="M'+f(cx-b1)+' '+f(s1)+'L'+f(cx-b2)+' '+f(s2)+'H'+f(cx+b2)+'L'+f(cx+b1)+' '+f(s1)+'Z"/></g>'}
  var gw=tw*1.5,lw=tw*.78,lt=ty-o.lan;
  g+='<g id="scTop"><path class="iron" d="M'+f(cx-gw)+' '+f(ty)+'H'+f(cx+gw)+'M'+f(cx-gw)+' '+f(ty-o.rail)+'H'+f(cx+gw)+'"/>';
  for(i=0;i<=8;i++){var rx=cx-gw+gw*2*i/8;g+='<path class="iron" d="M'+f(rx)+' '+f(ty)+'V'+f(ty-o.rail)+'"/>'}
  g+='<rect class="lan" x="'+f(cx-lw)+'" y="'+f(lt)+'" width="'+f(lw*2)+'" height="'+f(o.lan)+'"/><path class="iron" d="M'+f(cx-lw/3)+' '+f(lt)+'V'+f(ty)+'M'+f(cx+lw/3)+' '+f(lt)+'V'+f(ty)+'"/>'+
     '<path class="cap" d="M'+f(cx-lw*1.15)+' '+f(lt)+'Q'+f(cx-lw)+' '+f(lt-o.lan*.8)+' '+cx+' '+f(lt-o.lan*.85)+'Q'+f(cx+lw)+' '+f(lt-o.lan*.8)+' '+f(cx+lw*1.15)+' '+f(lt)+'Z"/><path class="iron" d="M'+cx+' '+f(lt-o.lan*.85)+'V'+f(lt-o.lan*1.25)+'"/></g>';
  o.sLab.forEach(function(z){var y=z[0],x=cx-hw(y);g+='<path class="lead" d="M'+f(x-4)+' '+f(y)+'H'+f(o.labL+6)+'"/><text x="'+f(o.labL)+'" y="'+f(y+4)+'" text-anchor="end" class="a">'+z[1]+'</text>'});
  g+='</g>';
  /* step 4: the lantern lit, its beam across the whole drawing, and what it stands for */
  var ly=lt+o.lan/2;
  g+='<g id="scLight"><circle cx="'+cx+'" cy="'+f(ly)+'" r="'+f(o.glow)+'" fill="url(#scGlow)"/>'+
     '<path id="scBeamL" fill="url(#scBeamL)" d="M'+cx+' '+f(ly-3)+'L10 '+f(ly-o.spread)+'V'+f(ly+o.spread)+'L'+cx+' '+f(ly+3)+'Z"/>'+
     '<path id="scBeamR" fill="url(#scBeamR)" d="M'+cx+' '+f(ly-3)+'L'+(W-10)+' '+f(ly-o.spread)+'V'+f(ly+o.spread)+'L'+cx+' '+f(ly+3)+'Z"/>'+
     '<rect class="lit" x="'+f(cx-lw*.86)+'" y="'+f(lt+1.5)+'" width="'+f(lw*1.72)+'" height="'+f(o.lan-3)+'"/>';
  o.wLab.forEach(function(z){g+='<text x="'+z[0]+'" y="'+z[1]+'" text-anchor="'+z[3]+'" class="'+(z[4]||"w")+'">'+z[2]+'</text>'});
  g+='</g>';
  return g+'</svg>';
}
function palmSvg(x,gy,H,lean){
  var tx=x+lean*H,ty=gy-H,f=function(n){return n.toFixed(1)},s='<g class="palm"><path class="pt2" d="M'+f(x)+' '+gy+'Q'+f(x+lean*H*.2)+' '+f(gy-H*.55)+' '+f(tx)+' '+f(ty)+'"/>';
  for(var i=0;i<8;i++){var a=-Math.PI/2+(i/7-.5)*Math.PI*1.85,L=H*(.34+.08*((i*7)%3)),ex=tx+Math.cos(a)*L,ey=ty+Math.sin(a)*L+L*.55,mx=tx+Math.cos(a)*L*.55,my=ty+Math.sin(a)*L*.55-L*.06;
    s+='<path class="pt2" d="M'+f(tx)+' '+f(ty)+'Q'+f(mx)+' '+f(my)+' '+f(ex)+' '+f(ey)+'"/>';
    for(var k=1;k<6;k++){var u=k/6,px=(1-u)*(1-u)*tx+2*(1-u)*u*mx+u*u*ex,py=(1-u)*(1-u)*ty+2*(1-u)*u*my+u*u*ey,ll=L*.16*(1-u*.6);s+='<path class="pl" d="M'+f(px)+' '+f(py)+'l'+f(-ll*.35)+' '+f(ll)+'M'+f(px)+' '+f(py)+'l'+f(ll*.35)+' '+f(ll)+'"/>'}}
  return s+'</g>';
}
function scene(){
  if(MOBILE())return tower({mob:1,W:400,H:440,cx:200,gy:396,ty:92,bw:40,tw:26,hz:410,seaN:3,seaG:9,dash:22,land:150,
    palms:[[56,58,-.14],[82,40,.12],[332,58,.14],[358,40,-.1]],yB:262,yS:180,brick:16,
    zones:[[352,"CASH"],[300,"BONDS & CDS"],[220,"FUNDS"],[150,"STOCKS"]],labL:150,labR:250,
    rungs:["1 YR","5 YR","10 YR","20 YR"],bondT:"LADDERED",capG:10,capT:0,sN:5,lan:28,rail:10,
    sLab:[[186,"DIVERSIFIED"],[116,"HELD LONG"]],glow:60,spread:46,
    wLab:[[14,30,"RECONCILED DAILY","start"],[386,30,"24/7","end","a"]]});
  return tower({W:800,H:520,cx:400,gy:458,ty:92,bw:62,tw:40,hz:470,seaN:4,seaG:11,dash:30,land:300,
    palms:[[120,74,-.14],[160,52,.12],[640,80,.14],[680,56,-.12],[716,40,.1]],yB:300,yS:210,brick:22,
    zones:[[436,"CASH"],[386,"BONDS & CDS"],[310,"MUTUAL FUNDS"],[252,"INTERNATIONAL STOCKS"],[176,"U.S. STOCKS"]],labL:300,labR:510,
    rungs:["1 YR","5 YR","10 YR","15 YR","20 YR"],bondT:"MATURITIES STAGGERED",capG:12,sN:6,lan:36,rail:12,
    sLab:[[214,"A DIVERSIFIED MIX"],[132,"HELD FOR THE LONG TERM"]],glow:92,spread:60,
    wLab:[[24,46,"RECONCILED DAILY","start"],[24,66,"REVIEWED REGULARLY","start","q"],[776,46,"PHONES ANSWERED 24/7","end","a"]]});
}
function storyDraw(svg){
  var E={base:$$("#scBase .sD",svg),dots:$$("#scBase .dot, #scBase .palm, #scBase .neat, #scBase .tb",svg),plan:$("#scPlan",svg),bonds:$$("#scBonds .crs",svg),bt:$("#scBonds > text",svg),
    stocks:$$("#scStocks .crs",svg),top:$("#scTop",svg),sl:$$("#scStocks > path.lead, #scStocks > text",svg),light:$("#scLight",svg),bl:$("#scBeamL",svg),br:$("#scBeamR",svg)};
  var BL=E.base.map(function(p){return p.getTotalLength()}),lastB=-1,cx=parseFloat(svg.getAttribute("viewBox").split(" ")[2])/2;
  return function(p,b){
    if(!E.plan.isConnected)return;
    if(b!==lastB){lastB=b;E.base.forEach(function(el,k){el.style.strokeDasharray=BL[k];el.style.strokeDashoffset=(BL[k]*(1-b)).toFixed(1)});E.dots.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s1=seg(p,0,.14),s2=seg(p,.25,.46),s3=seg(p,.5,.66),s4=seg(p,.72,.92);
    E.plan.style.opacity=(b*s1*(1-.55*s3)).toFixed(3);
    var nb=E.bonds.length;E.bonds.forEach(function(el,i){var v=Math.max(0,Math.min(1,s2*nb-i));el.style.opacity=(b*v).toFixed(3);el.style.transform="translateY("+((1-v)*10).toFixed(1)+"px)"});
    E.bt.style.opacity=(b*seg(s2,.7,1)).toFixed(3);
    var ns=E.stocks.length;E.stocks.forEach(function(el,i){var v=Math.max(0,Math.min(1,s3*(ns+1)-i));el.style.opacity=(b*v).toFixed(3);el.style.transform="translateY("+((1-v)*10).toFixed(1)+"px)"});
    var tv=Math.max(0,Math.min(1,s3*(ns+1)-ns));E.top.style.opacity=(b*tv).toFixed(3);
    E.sl.forEach(function(el){el.style.opacity=(b*seg(s3,.5,1)).toFixed(3)});
    E.light.style.opacity=(b*s4).toFixed(3);
    var sw=s4>0?1:0;E.bl.style.opacity=sw.toFixed(3);E.br.style.opacity=sw.toFixed(3);
  };
}
