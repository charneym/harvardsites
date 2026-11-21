/* the story scene (BL/BY/DB): ONE engraved field, kept on screen for all three steps. Left, a tumour cell studded with MIC;
   right, an NK / CD8 T cell with NKG2D receptors facing it. Step 1 (Shed): MIC heads are cut from the tumour surface and drift
   out as sMIC. Step 2 (Silence): sMIC settles on the immune cell's receptors and the cell dims. Step 3 (Clear): Y-shaped
   antibodies (CZX-11) arrive, capture the sMIC and tag MIC left on the tumour; the immune cell relights.
   Sources: cancurellc.com (CZX-11 targets sMIC and tumour MIC) and the publications it lists (Lu et al. Clin Cancer Res 2015;
   Zhang et al. JITC 2019; Basher et al. J Hematol Oncol 2020). Schematic; counts and positions are illustrative. */
var TU={c:[214,280],r:138},IM={c:[640,280],r:86};
function cellPath(c,r,seed,amp){var s='',i,n=96;for(i=0;i<=n;i++){var t=i/n*Math.PI*2,rr=r*(1+amp*(Math.sin(3*t+seed)*.5+Math.sin(5*t+seed*2)*.3+Math.cos(7*t+seed*.7)*.2));s+=(i?'L':'M')+(c[0]+rr*Math.cos(t)).toFixed(1)+' '+(c[1]+rr*Math.sin(t)).toFixed(1)}return s+'Z'}
function rOf(c,r,seed,amp,t){return r*(1+amp*(Math.sin(3*t+seed)*.5+Math.sin(5*t+seed*2)*.3+Math.cos(7*t+seed*.7)*.2))}
/* MIC sites on the tumour's right-facing membrane; the first 6 are shed, the rest stay (and get tagged in step 3) */
var MIC=(function(){var a=[],k,angs=[-.95,-.62,-.3,.02,.34,.66,.98,-1.3,1.32,-.12];for(k=0;k<angs.length;k++){var t=angs[k],r=rOf(TU.c,TU.r,1.3,.05,t);
  a.push({t:t,x:TU.c[0]+r*Math.cos(t),y:TU.c[1]+r*Math.sin(t),nx:Math.cos(t),ny:Math.sin(t)})}return a})();
/* NKG2D receptors on the immune cell, facing left */
var RC=(function(){var a=[],k,angs=[Math.PI-.72,Math.PI-.36,Math.PI,Math.PI+.36,Math.PI+.72];for(k=0;k<angs.length;k++){var t=angs[k];a.push({t:t,x:IM.c[0]+IM.r*Math.cos(t),y:IM.c[1]+IM.r*Math.sin(t),nx:Math.cos(t),ny:Math.sin(t)})}return a})();
/* free sMIC drift spots (step 1 end) */
var FREE=[[404,150],[452,236],[396,318],[470,392],[430,470],[500,120]];
/* antibodies: where they enter from, where they catch */
var ABS=[{f:[440,620],k:2},{f:[520,-60],k:0},{f:[560,640],k:4},{f:[-40,-40],m:7},{f:[-60,640],m:8},{f:[300,-80],m:6}];
function yGlyph(){return '<path class="yb" d="M0 0V26M0 0L-15 -19M0 0L15 -19"/><path class="yt" d="M-15 -19l-4 -9M15 -19l4 -9"/>'}
function scene(){
  var mob=MOBILE(),f=function(n){return (+n).toFixed(1)},g='',i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<defs><radialGradient id="tug" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#5fa8f0" stop-opacity=".10"/><stop offset="1" stop-color="#5fa8f0" stop-opacity="0"/></radialGradient>'+
     '<radialGradient id="img" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#22c3d9" stop-opacity=".34"/><stop offset="1" stop-color="#22c3d9" stop-opacity="0"/></radialGradient></defs>';
  g+='<g id="scBase">';
  g+='<circle cx="'+TU.c[0]+'" cy="'+TU.c[1]+'" r="'+(TU.r*1.5)+'" fill="url(#tug)" class="nt"/>';
  g+='<path class="tu sD" d="'+cellPath(TU.c,TU.r,1.3,.05)+'"/><path class="tu2 sD" d="'+cellPath(TU.c,TU.r*.86,2.1,.05)+'"/>';
  g+='<path class="nu sD" d="'+cellPath([TU.c[0]-22,TU.c[1]+8],46,.4,.08)+'"/><path class="nu2 sD" d="'+cellPath([TU.c[0]-22,TU.c[1]+8],30,1.4,.08)+'"/>';
  /* MIC stalks (stay) */
  MIC.forEach(function(m){g+='<path class="st sD" d="M'+f(m.x)+' '+f(m.y)+'L'+f(m.x+m.nx*12)+' '+f(m.y+m.ny*12)+'"/>'});
  /* immune cell */
  g+='<path class="im sD" d="'+cellPath(IM.c,IM.r,.6,.035)+'"/><path class="im2 sD" d="'+cellPath(IM.c,IM.r*.8,2.6,.04)+'"/>';
  g+='<path class="nu sD" d="'+cellPath([IM.c[0]+14,IM.c[1]-6],30,2.2,.07)+'"/>';
  RC.forEach(function(r){var bx=r.x+r.nx*14,by=r.y+r.ny*14,px=-r.ny*6,py=r.nx*6;
    g+='<path class="rc sD" d="M'+f(r.x)+' '+f(r.y)+'L'+f(bx)+' '+f(by)+'M'+f(bx+px)+' '+f(by+py)+'L'+f(bx)+' '+f(by)+'L'+f(bx-px)+' '+f(by-py)+'"/>'});
  g+='<text class="t" x="'+TU.c[0]+'" y="'+(TU.c[1]+TU.r+42)+'" text-anchor="middle">TUMOUR CELL</text>';
  g+='<text class="t" x="'+IM.c[0]+'" y="'+(IM.c[1]+IM.r+42)+'" text-anchor="middle">NK / CD8 T CELL</text>';
  g+='<text class="t" x="784" y="548" text-anchor="end">sMIC · SCHEMATIC</text>';
  g+='</g>';
  g+='<g id="scMove">';
  g+='<circle id="imGlow" cx="'+IM.c[0]+'" cy="'+IM.c[1]+'" r="'+(IM.r*1.7)+'" fill="url(#img)"/>';
  MIC.forEach(function(m,k){g+='<g class="mic" id="mic'+k+'"><circle r="6.2"/></g>'});
  ABS.forEach(function(a,k){g+='<g class="ab" id="ab'+k+'">'+yGlyph()+'</g>'});
  g+='</g>';
  /* labels, one per step (leaders end at the thing they name) */
  var m0=MIC[1];
  g+='<g id="lb1"><text class="a" x="'+(mob?400:390)+'" y="'+(mob?64:70)+'" text-anchor="middle">'+(mob?'MIC SHED AS sMIC':'MIC CUT LOOSE · SOLUBLE sMIC')+'</text><path class="ldr" d="M'+(mob?400:390)+' '+(mob?80:84)+'L404 138"/></g>';
  g+='<g id="lb2"><text class="a" x="'+(mob?776:770)+'" y="'+(mob?96:110)+'" text-anchor="end">'+(mob?'CELL SILENCED':'NKG2D BLOCKED · CELL WORN DOWN')+'</text><path class="ldr" d="M'+(mob?700:690)+' '+(mob?112:124)+'L'+f(RC[1].x-6)+' '+f(RC[1].y-10)+'"/></g>';
  g+='<g id="lb3"><text class="a" x="'+(mob?24:40)+'" y="'+(mob?548:548)+'">'+(mob?'CZX-11 CLEARS sMIC':'CZX-11 CLEARS sMIC · TAGS TUMOUR MIC')+'</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text, #scBase .nt",svg),mv:$("#scMove",svg),mic:$$(".mic",svg),ab:$$(".ab",svg),glow:$("#imGlow",svg),
    im:$$("#scBase .im, #scBase .im2, #scBase .rc",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function ease(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function L(a,b,t){return a+(b-a)*t}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)});op(E.mv,b)}
    var s1=seg(p,0,.2),s2=seg(p,.34,.56),s3=seg(p,.66,.9);
    /* sMIC: shed (s1) to free spots, then onto receptors (s2), then caught by antibodies and carried off (s3) */
    E.mic.forEach(function(el,k){var m=MIC[k],x,y,o=1,shed=k<6;
      var hx=m.x+m.nx*18,hy=m.y+m.ny*18;
      if(!shed){x=hx;y=hy}else{
        var e1=ease(seg(p,k*.022,.12+k*.022)),fr=FREE[k],fx=fr[0]+Math.sin(p*22+k)*5,fy=fr[1]+Math.cos(p*19+k*2)*5;
        x=L(hx,fx,e1);y=L(hy,fy,e1);
        var rc=RC[k%5],rx=rc.x+rc.nx*24+(k>4?-12:0),ry=rc.y+rc.ny*24+(k>4?-26:0),e2=ease(s2*(1+k*.06)>1?1:s2*(1+k*.06));
        x=L(x,rx,e2);y=L(y,ry,e2);
        if(s3>0){var ai=-1;ABS.forEach(function(a,j){if(a.k===k)ai=j});
          if(ai>=0){var ab=ABS[ai],e3=ease(seg(s3,.25,.6)),e4=ease(seg(s3,.6,1));x=L(x,rx-10,e3);y=L(y,ry-4,e3);x=L(x,ab.f[0],e4);y=L(y,ab.f[1],e4);o=1-e4}
          else{o=1-ease(seg(s3,.3,.8))}}
      }
      el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")");op(el,b*o);
      el.classList.toggle("free",shed&&s1>.5)});
    /* antibodies: enter, reach their sMIC (or a tumour MIC), then carry sMIC away; tags stay on the tumour */
    E.ab.forEach(function(el,j){var a=ABS[j],tx,ty,rot,e3=ease(seg(s3,0,.35)),e4=ease(seg(s3,.6,1));
      if(a.k!==undefined){var rc=RC[a.k%5];tx=rc.x+rc.nx*24-10;ty=rc.y+rc.ny*24-4+30;rot=0;
        var x=L(a.f[0],tx,e3),y=L(a.f[1],ty,e3);x=L(x,a.f[0],e4);y=L(y,a.f[1],e4);
        el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")");op(el,b*e3*(1-e4))}
      else{var m=MIC[a.m];tx=m.x+m.nx*50;ty=m.y+m.ny*50;rot=Math.atan2(-m.nx,m.ny)*180/Math.PI;
        var x2=L(a.f[0],tx,e3),y2=L(a.f[1],ty,e3);
        el.setAttribute("transform","translate("+x2.toFixed(1)+" "+y2.toFixed(1)+") rotate("+rot.toFixed(1)+")");op(el,b*e3)}});
    /* the immune cell dims while sMIC sits on it, and relights when it is cleared */
    var dimv=s2*(1-ease(seg(s3,.45,.9)));
    E.im.forEach(function(el){el.style.opacity=(b*(1-.6*dimv)).toFixed(3)});
    op(E.glow,b*(.55*(1-s2)+ease(seg(s3,.5,1))*(1)));
    op(E.l1,b*s1*(1-seg(p,.28,.34)));op(E.l2,b*s2*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.74,.84));
  };
}
