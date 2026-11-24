/* The story scene (DB/BL/BY): Abcon's own mechanism, as drawn in the figure on abcontx.com (Research & Development):
   ATX101, a fully humanized anti-CD6 antibody carrying the mitotic toxin MMAE, binds CD6 on T cells, is rapidly and
   completely internalised, and kills dividing cells (T lymphoma cells) while sparing resting normal T cells that carry
   the same marker. ONE scene, drawn in fine line, kept on screen throughout: a dividing T lymphoma cell (left, its
   mitotic spindle showing) and a resting normal T cell (right), both studded with CD6. Nothing is drawn as a wound (DT):
   the cleared cell simply fades back to a faint outline.
   Frame 0 is complete: both cells, their CD6 receptors, and ATX101 molecules (the logo's antibody, red payload drop)
   waiting above.
   Step 1 (bind): the ATX101 molecules settle on CD6 receptors of both cells.
   Step 2 (inside): each bound ATX101 is drawn inside in a small vesicle and its payload is released.
   Step 3 (select): in the dividing cell the payload stops the spindle and the cell fades away; the resting cell stays,
   brightening in the accent. Driven by scrubbed progress. */
var SCW=760,SCH=560;
var C1={x:225,y:300,r:122},C2={x:568,y:300,r:100};
function f1(v){return v.toFixed(1)}
/* CD6 receptors around each membrane; the ones on the upper side are bound by ATX101 */
var RCP=(function(){var out=[];[[C1,18],[C2,16]].forEach(function(cn,ci){var c=cn[0],n=cn[1];
  for(var i=0;i<n;i++){var a=-Math.PI/2+(i/n)*Math.PI*2+(ci?.11:.07);out.push({c:ci,a:a,x:c.x+Math.cos(a)*c.r,y:c.y+Math.sin(a)*c.r})}});return out})();
var ADC=(function(){var out=[],seed=11;function rnd(){seed=(seed*16807)%2147483647;return seed/2147483647}
  RCP.forEach(function(q,i){var deg=q.a*180/Math.PI,up=deg>-160&&deg<-20;if(!up)return;if(i%2)return;
    var c=q.c?C2:C1,dx=Math.cos(q.a),dy=Math.sin(q.a);
    out.push({c:q.c,a:q.a,
      sx:Math.max(q.c?470:84,Math.min(q.c?686:326,q.x+dx*70+(rnd()-.5)*30)),sy:40+rnd()*58,
      bx:q.x+dx*22,by:q.y+dy*22,
      ix:c.x+dx*(c.r-38),iy:c.y+dy*(c.r-38),
      px:c.x+(q.c?dx*42:dx*14),py:c.y+(q.c?dy*42+6:dy*14),d:rnd()})});
  return out})();
function adcGlyph(){return '<path class="ab" d="M0 9V0M0 0L-6.5 -7.5M0 0L6.5 -7.5M-2.6 1.2L-9 -6.2M2.6 1.2L9 -6.2"/>'}
function storyScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  /* the two cells: membranes and nuclei */
  g+='<g id="cL"><circle class="cm sD" cx="'+C1.x+'" cy="'+C1.y+'" r="'+C1.r+'"/><circle class="cm2 sD" cx="'+C1.x+'" cy="'+C1.y+'" r="'+(C1.r-7)+'"/>';
  /* the mitotic spindle of the dividing cell: two poles, fibres, and the aligned chromosomes */
  var pl=[C1.x-62,C1.y-10],pr=[C1.x+62,C1.y+10];
  g+='<g id="spd">';
  for(var k=-3;k<=3;k++){var mx=C1.x+k*1.2,my=C1.y+k*13;g+='<path class="sp sD" d="M'+pl[0]+' '+pl[1]+'Q'+f1(C1.x-24)+' '+f1(my-3)+' '+f1(mx)+' '+f1(my)+'"/><path class="sp sD" d="M'+pr[0]+' '+pr[1]+'Q'+f1(C1.x+24)+' '+f1(my+3)+' '+f1(mx)+' '+f1(my)+'"/>'}
  g+='<circle class="pole" cx="'+pl[0]+'" cy="'+pl[1]+'" r="4"/><circle class="pole" cx="'+pr[0]+'" cy="'+pr[1]+'" r="4"/>';
  for(k=-3;k<=3;k++)g+='<path class="chr" d="M'+f1(C1.x-5+k*1.2)+' '+f1(C1.y+k*13-4)+'l10 8M'+f1(C1.x+5+k*1.2)+' '+f1(C1.y+k*13-4)+'l-10 8"/>';
  g+='</g></g>';
  g+='<g id="cR"><circle class="cm sD" cx="'+C2.x+'" cy="'+C2.y+'" r="'+C2.r+'"/><circle class="cm2 sD" cx="'+C2.x+'" cy="'+C2.y+'" r="'+(C2.r-7)+'"/>'+
     '<circle class="nu sD" cx="'+(C2.x-6)+'" cy="'+(C2.y+4)+'" r="52"/><circle class="nu2" cx="'+(C2.x+10)+'" cy="'+(C2.y-12)+'" r="9"/></g>';
  /* CD6 on both membranes */
  g+='<g id="rcp">';RCP.forEach(function(q){var dx=Math.cos(q.a),dy=Math.sin(q.a);
    g+='<g class="cd"><path d="M'+f1(q.x)+' '+f1(q.y)+'L'+f1(q.x+dx*9)+' '+f1(q.y+dy*9)+'"/><circle cx="'+f1(q.x+dx*11.5)+'" cy="'+f1(q.y+dy*11.5)+'" r="2.6"/></g>'});g+='</g>';
  /* vesicles that hold ATX101 once inside, and ATX101 itself: the logo's antibody with its red payload drop */
  g+='<g id="ves">';ADC.forEach(function(){g+='<circle class="ves" r="18" cx="0" cy="0" transform="translate(-99 -99)"/>'});g+='</g>';
  g+='<g id="adc">';ADC.forEach(function(){g+='<g class="ad" transform="translate(-99 -99)">'+adcGlyph()+'</g>'});g+='</g>';
  g+='<g id="pay">';ADC.forEach(function(){g+='<circle class="py" r="4.6" cx="0" cy="0" transform="translate(-99 -99)"/>'});g+='</g>';
  /* labels: the cells below, CD6 at the right, ATX101 between the two waiting groups (each clear of every stroke) */
  var ly=C1.y+C1.r+46;
  g+='<g id="lL"><text class="t" x="'+C1.x+'" y="'+ly+'" text-anchor="middle">'+(mob?'LYMPHOMA CELL':'T LYMPHOMA CELL')+'</text><text class="t s" x="'+C1.x+'" y="'+(ly+(mob?28:20))+'" text-anchor="middle">DIVIDING</text></g>';
  g+='<g id="lR"><text class="t" x="'+C2.x+'" y="'+ly+'" text-anchor="middle">NORMAL T CELL</text><text class="t s" x="'+C2.x+'" y="'+(ly+(mob?28:20))+'" text-anchor="middle">RESTING</text></g>';
  if(!mob){
    g+='<g id="lCd"><text class="t" x="'+(C2.x+C2.r+26)+'" y="'+(C2.y+4)+'">CD6</text></g>';
    g+='<g id="lAd"><text class="t o" x="398" y="84" text-anchor="middle">ATX101</text></g>';
  }else{g+='<g id="lCd"></g><g id="lAd"></g>'}
  var sy=SCH-4,sx=mob?24:40;
  g+='<g id="lb1"><text class="a" x="'+sx+'" y="'+sy+'">'+(mob?'ATX101 BINDS CD6':'ATX101 BINDS CD6 ON BOTH T CELLS')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+sx+'" y="'+sy+'">'+(mob?'TAKEN INSIDE THE CELL':'TAKEN INSIDE; THE PAYLOAD IS RELEASED')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+sx+'" y="'+sy+'">'+(mob?'ONLY THE DIVIDING CELL IS CLEARED':'THE DIVIDING CELL IS CLEARED; THE RESTING CELL IS SPARED')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),ad:$$("#adc .ad",svg),ves:$$("#ves .ves",svg),py:$$("#pay .py",svg),cd:$$("#rcp .cd",svg),
    cL:$("#cL",svg),cR:$("#cR",svg),spd:$("#spd",svg),lL:$("#lL",svg),lR:$("#lR",svg),lCd:$("#lCd",svg),lAd:$("#lAd",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  var RCPC=RCP.map(function(q){return q.c});
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var s1=seg(p,.04,.32),s2=seg(p,.36,.64),s3=seg(p,.68,.94),t=p*40;
    /* step 3: the dividing cell fades back to a faint outline; the resting cell brightens */
    var clr=sm(seg(p,.7,.9));
    op(E.cL,b*(1-.82*clr));E.cL.setAttribute("transform","translate("+C1.x+" "+C1.y+") scale("+(1-.06*clr).toFixed(4)+") translate("+(-C1.x)+" "+(-C1.y)+")");
    op(E.spd,1-sm(seg(p,.68,.8)));
    E.cR.classList.toggle("on",p>.8);
    E.cd.forEach(function(el,i){op(el,b*(RCPC[i]===0?1-.82*clr:1))});
    E.ad.forEach(function(el,i){var q=ADC[i],f=sm((s1-q.d*.4)/.6),g2=sm((s2-q.d*.35)/.55),x,y,sc,rot;
      var bob=Math.sin(t+i)*2*(1-f);
      x=q.sx+(q.bx-q.sx)*f;y=q.sy+bob+(q.by-q.sy)*f;
      x+=(q.ix-x)*g2;y+=(q.iy-y)*g2;sc=1.5*(1-.2*g2);
      rot=(q.a*180/Math.PI+90)*f;
      el.setAttribute("transform","translate("+f1(x)+" "+f1(y)+") rotate("+rot.toFixed(1)+") scale("+sc.toFixed(3)+")");
      var fade=q.c===0?1-clr:1-.65*sm(seg(p,.74,.92));op(el,b*fade);
      var v=E.ves[i];v.setAttribute("transform","translate("+f1(x)+" "+f1(y)+")");op(v,b*sm((g2-.55)/.45)*(q.c===0?1-clr:1-.7*sm(seg(p,.74,.92))));
      /* the payload rides with the antibody, then is released towards the centre of the cell */
      var r=sm((s2-.55-q.d*.15)/.35),px=x+(q.px-x)*r,py=y+(q.py-y)*r,dp=E.py[i];
      if(r<=0){var rr=rot*Math.PI/180,ox=0,oy=-2.6;px=x+(ox*Math.cos(rr)-oy*Math.sin(rr))*sc;py=y+(ox*Math.sin(rr)+oy*Math.cos(rr))*sc}
      dp.setAttribute("transform","translate("+f1(px)+" "+f1(py)+")");op(dp,b*(q.c===0?1-clr:1-.85*sm(seg(p,.76,.94))))});
    op(E.lL,b*(1-.55*clr));op(E.lR,b);
    op(E.lAd,b*(1-seg(p,.03,.1)));op(E.lCd,b*(1-seg(p,.66,.72)));
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}
