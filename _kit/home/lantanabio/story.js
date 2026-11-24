/* The story scene (DB/BL/BY): Lantana's own process, from lantanabio.com (Technology) and Biotope by VIB (2024):
   baker's yeast is fed sugar in a fermentation like brewing; an engineered plant pathway inside the cell turns the
   aromatic amino acids phenylalanine and tyrosine into flavonoids and then anthocyanins; the pigment is purified with
   every trace of yeast removed. ONE scene in fine line, kept on screen throughout: a budding yeast cell (left) with its
   pathway drawn inside as a chain of aromatic rings (the hexagon of Lantana's logo), and a glass vial (right).
   Frame 0 is complete: the cell, its nucleus, the pathway outlined, sugar rings waiting at the left, the empty vial.
   Step 1 (brew): the sugar rings drift into the cell.
   Step 2 (build): the pathway lights ring by ring, pale to anthocyanin crimson, and pigment gathers in the cell.
   Step 3 (purify): the pigment moves into the vial, which fills; the yeast cell fades to a faint outline.
   Driven by scrubbed progress. Every label keeps >=8px clear of every stroke (DR3). */
var SCW=760,SCH=560;
var CE={x:290,y:300,rx:170,ry:132},BU={x:448,y:166,rx:52,ry:44};
var VI={x:585,w:84,top:196,bot:432};
function f1(v){return v.toFixed(1)}
function hexP(cx,cy,r){var d='';for(var i=0;i<6;i++){var a=Math.PI/6+i*Math.PI/3;d+=(i?'L':'M')+f1(cx+Math.cos(a)*r)+' '+f1(cy+Math.sin(a)*r)}return d+'Z'}
/* the pathway: five rings from phenylalanine/tyrosine to anthocyanin, inside the mother cell */
var NODES=[[190,300],[235,300],[280,300],[325,300],[370,300]];
var SUG=(function(){var out=[],seed=7;function rnd(){seed=(seed*16807)%2147483647;return seed/2147483647}
  for(var i=0;i<7;i++)out.push({sx:34+rnd()*86,sy:150+i*40+rnd()*14,ex:180+rnd()*20,ey:286+rnd()*28,d:rnd(),r:8+rnd()*2});return out})();
var PIG=(function(){var out=[],seed=23;function rnd(){seed=(seed*16807)%2147483647;return seed/2147483647}
  for(var i=0;i<14;i++){var a=rnd()*Math.PI*2,rr=.25+rnd()*.5;out.push({x:CE.x+30+Math.cos(a)*50*rr/.75,y:CE.y+82+Math.sin(a)*18*rr/.75,
    vx:VI.x+14+rnd()*(VI.w-28),vy:VI.bot-14-rnd()*90,d:rnd(),r:3+rnd()*2.4})}return out})();
function storyScene(o){
  var g='',mob=o.mob,cx=CE.x,cy=CE.y;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><linearGradient id="lqd" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d23a6a"/><stop offset="1" stop-color="#6a2384"/></linearGradient>'+
     '<clipPath id="vclip"><path d="M'+(VI.x+6)+' '+VI.top+'V'+(VI.bot-16)+'Q'+(VI.x+6)+' '+(VI.bot-2)+' '+(VI.x+VI.w/2)+' '+(VI.bot-2)+'Q'+(VI.x+VI.w-6)+' '+(VI.bot-2)+' '+(VI.x+VI.w-6)+' '+(VI.bot-16)+'V'+VI.top+'Z"/></clipPath></defs>';
  /* the budding yeast cell: mother, bud, the wall drawn twice (wall and membrane), nucleus and a vacuole */
  g+='<g id="cell">';
  g+='<ellipse class="cw sD" cx="'+cx+'" cy="'+cy+'" rx="'+CE.rx+'" ry="'+CE.ry+'"/><ellipse class="cw2 sD" cx="'+cx+'" cy="'+cy+'" rx="'+(CE.rx-8)+'" ry="'+(CE.ry-8)+'"/>';
  g+='<ellipse class="cw sD" cx="'+BU.x+'" cy="'+BU.y+'" rx="'+BU.rx+'" ry="'+BU.ry+'" transform="rotate(-32 '+BU.x+' '+BU.y+')"/><ellipse class="cw2 sD" cx="'+BU.x+'" cy="'+BU.y+'" rx="'+(BU.rx-7)+'" ry="'+(BU.ry-7)+'" transform="rotate(-32 '+BU.x+' '+BU.y+')"/>';
  g+='<circle class="nu sD" cx="'+(cx+54)+'" cy="'+(cy-58)+'" r="30"/><circle class="nu2" cx="'+(cx+62)+'" cy="'+(cy-64)+'" r="7"/>';
  g+='<ellipse class="vac sD" cx="'+(cx-62)+'" cy="'+(cy-50)+'" rx="34" ry="24"/>';
  g+='</g>';
  /* the pathway: rings linked by short arrows */
  g+='<g id="path">';NODES.forEach(function(n,i){if(i){var p=NODES[i-1];g+='<path class="lk sD" d="M'+(p[0]+13)+' '+p[1]+'H'+(n[0]-14)+'M'+(n[0]-18)+' '+(n[1]-4)+'l4 4-4 4"/>'}});
  g+='</g><g id="rings">';NODES.forEach(function(n){g+='<path class="rg" d="'+hexP(n[0],n[1],11)+'"/>'});g+='</g>';
  /* pigment gathered in the cell, later carried to the vial */
  g+='<g id="pig">';PIG.forEach(function(q){g+='<circle class="pg" r="'+f1(q.r)+'" cx="0" cy="0" transform="translate(-99 -99)"/>'});g+='</g>';
  /* sugar rings, waiting at the left */
  g+='<g id="sug">';SUG.forEach(function(q){g+='<path class="sg" d="'+hexP(0,0,q.r)+'" transform="translate(-99 -99)"/>'});g+='</g>';
  /* the glass vial, filling from the bottom */
  g+='<g id="vial"><rect id="lq" x="'+VI.x+'" y="'+VI.bot+'" width="'+VI.w+'" height="0" fill="url(#lqd)" clip-path="url(#vclip)"/>'+
     '<path class="gl sD" d="M'+VI.x+' '+(VI.top-14)+'H'+(VI.x+VI.w)+'M'+(VI.x+6)+' '+(VI.top-14)+'V'+(VI.bot-16)+'Q'+(VI.x+6)+' '+VI.bot+' '+(VI.x+VI.w/2)+' '+VI.bot+'Q'+(VI.x+VI.w-6)+' '+VI.bot+' '+(VI.x+VI.w-6)+' '+(VI.bot-16)+'V'+(VI.top-14)+'"/>'+
     '<path class="gl2 sD" d="M'+(VI.x+18)+' '+(VI.top+10)+'V'+(VI.bot-40)+'"/></g>';
  /* labels, each clear of every stroke */
  var ly=cy+CE.ry+42;
  g+='<g id="lC"><text class="t" x="'+cx+'" y="'+ly+'" text-anchor="middle">'+(mob?'YEAST':'BAKER’S YEAST')+'</text></g>';
  g+='<g id="lV"><text class="t" x="'+(VI.x+VI.w/2)+'" y="'+ly+'" text-anchor="middle">'+(mob?'PIGMENT':'NATURAL PIGMENT')+'</text></g>';
  if(!mob){
    g+='<g id="lS"><text class="t o" x="77" y="122" text-anchor="middle">SUGAR</text></g>';
    g+='<g id="lP"><text class="t" x="'+NODES[0][0]+'" y="'+(NODES[0][1]+36)+'" text-anchor="middle">PHE · TYR</text><text class="t" x="'+NODES[4][0]+'" y="'+(NODES[4][1]+36)+'" text-anchor="middle">ANTHOCYANIN</text></g>';
  }else{g+='<g id="lS"><text class="t o" x="77" y="114" text-anchor="middle">SUGAR</text></g><g id="lP"></g>'}
  var sy=SCH-4,sx=mob?24:40;
  g+='<g id="lb1"><text class="a" x="'+sx+'" y="'+sy+'">'+(mob?'SUGAR IN, AS IN BREWING':'THE YEAST FERMENTS SUGAR, AS IN BREWING')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+sx+'" y="'+sy+'">'+(mob?'PLANT GENES BUILD IT':'A PLANT PATHWAY BUILDS THE PIGMENT')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+sx+'" y="'+sy+'">'+(mob?'PURIFIED, YEAST-FREE':'PURIFIED, WITH NO YEAST LEFT')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),sg:$$("#sug .sg",svg),pg:$$("#pig .pg",svg),rg:$$("#rings .rg",svg),lq:$("#lq",svg),
    cell:$("#cell",svg),path:$("#path",svg),lC:$("#lC",svg),lV:$("#lV",svg),lS:$("#lS",svg),lP:$("#lP",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function mix(a,b,t){return [0,1,2].map(function(i){return Math.round(a[i]+(b[i]-a[i])*t)})}
  var PALE=[200,208,240],CRIM=[210,58,106],PURP=[122,40,140];
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var s1=seg(p,.04,.32),s2=seg(p,.36,.64),s3=seg(p,.68,.94),t=p*40;
    /* step 1: sugar rings drift into the cell and dissolve at the first ring of the pathway */
    E.sg.forEach(function(el,i){var q=SUG[i],f=sm((s1-q.d*.45)/.55),bob=Math.sin(t+i*1.7)*2.2*(1-f);
      var x=q.sx+(q.ex-q.sx)*f,y=q.sy+bob+(q.ey-q.sy)*f;
      el.setAttribute("transform","translate("+f1(x)+" "+f1(y)+") scale("+(1-.45*f).toFixed(3)+")");op(el,b*(1-sm((f-.8)/.2)))});
    op(E.lS,b*(1-seg(p,.1,.22)));
    /* step 2: the pathway lights ring by ring, pale to crimson to purple */
    E.rg.forEach(function(el,i){var on=sm((s2-i*.16)/.24),c=i<3?mix(PALE,CRIM,on*(i+1)/3):mix(PALE,mix(CRIM,PURP,(i-2)/2),on);
      el.style.stroke="rgb("+c.join(",")+")";el.style.fill="rgba("+c.join(",")+","+(.25*on).toFixed(3)+")";op(el,b*(1-.75*sm(seg(p,.8,.94))))});
    /* pigment gathers in the cell during step 2, then moves into the vial in step 3 */
    E.pg.forEach(function(el,i){var q=PIG[i],a=sm((s2-.5-q.d*.3)/.25),m=sm((s3-q.d*.35)/.5);
      var x=q.x+(q.vx-q.x)*m,y=q.y+(q.vy-q.y)*m-Math.sin(m*Math.PI)*60;
      el.setAttribute("transform","translate("+f1(x)+" "+f1(y)+")");op(el,b*a*(1-sm((m-.85)/.15)))});
    var fill=sm((s3-.25)/.7),hh=(VI.bot-VI.top-30)*fill;E.lq.setAttribute("y",f1(VI.bot-hh));E.lq.setAttribute("height",f1(hh));
    /* step 3: the yeast is removed, fading back to a faint outline */
    var gone=sm(seg(p,.72,.92));op(E.cell,b*(1-.8*gone));op(E.path,b*(1-.8*gone));op(E.lC,b*(1-.55*gone));op(E.lP,b*(1-seg(p,.66,.72)));
    op(E.lV,b);
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}
