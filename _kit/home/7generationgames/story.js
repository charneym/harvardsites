/* The story scene (DB/BY): how a 7 Generation Games game teaches, drawn as ONE fine-line map of a northern lake (the
   setting of Fish Lake, Spirit Lake and Forgotten Trail), with a canoe and its route across it.
   Frame 0 is complete: shoreline, island, pines, the dotted route and the canoe at its first landing.
   Step 1 (learn): the first landing lights; it stands for the standard the game teaches.
   Step 2 (play): the canoe paddles to the second landing, the quest, drawing its route behind it.
   Step 3 (measure): the canoe reaches the far shore; the result rings out. Driven by scrubbed progress. */
var SCW=760,SCH=560;
/* the shoreline as cubic segments [x0,y0,c1x,c1y,c2x,c2y,x1,y1] */
var SHORE=[[96,300,96.0,269.7,103.0,232.3,118,204],[118,204,133.0,175.7,162.0,146.3,186,130],[186,130,210.0,113.7,236.7,108.3,262,106],[262,106,287.3,103.7,313.3,121.0,338,116],[338,116,362.7,111.0,382.0,83.0,410,76],[410,76,438.0,69.0,474.3,70.3,506,74],[506,74,537.7,77.7,573.0,83.7,600,98],[600,98,627.0,112.3,653.0,134.7,668,160],[668,160,683.0,185.3,689.7,223.7,690,250],[690,250,690.3,276.3,668.7,294.3,670,318],[670,318,671.3,341.7,703.0,369.0,698,392],[698,392,693.0,415.0,666.3,442.3,640,456],[640,456,613.7,469.7,571.3,466.7,540,474],[540,474,508.7,481.3,486.7,497.7,452,500],[452,500,417.3,502.3,365.7,495.7,332,488],[332,488,298.3,480.3,275.0,461.7,250,454],[250,454,225.0,446.3,204.0,453.3,182,442],[182,442,160.0,430.7,132.3,409.7,118,386],[118,386,103.7,362.3,96.0,330.3,96,300]];
var ISLE="M388 296C390 280 410 270 428 276C440 280 446 272 458 280C468 288 462 304 448 310C432 318 418 312 404 314C392 315 386 306 388 296Z";
var R1=[178,388,200,300,232,224,300,192],R2=[300,192,386,156,526,196,592,330];
var CEN=[392,290];
function bzp(P,t){var u=1-t;return [u*u*u*P[0]+3*u*u*t*P[2]+3*u*t*t*P[4]+t*t*t*P[6],u*u*u*P[1]+3*u*u*t*P[3]+3*u*t*t*P[5]+t*t*t*P[7]]}
function f1(v){return v.toFixed(1)}
function cp(P){return 'M'+P[0]+' '+P[1]+'C'+P[2]+' '+P[3]+' '+P[4]+' '+P[5]+' '+P[6]+' '+P[7]}
function shoreD(k){var o='',i;for(i=0;i<SHORE.length;i++){var S=SHORE[i].map(function(v,j){return f1(CEN[j%2]+(v-CEN[j%2])*k)});o+=(i?'C':'M'+S[0]+' '+S[1]+'C')+S[2]+' '+S[3]+' '+S[4]+' '+S[5]+' '+S[6]+' '+S[7]}return o+'Z'}
/* pines along the outer shore, kept off the caption band at the base */
var PINES=(function(){var out=[],seed=11;function rnd(){seed=(seed*16807)%2147483647;return seed/2147483647}
  SHORE.forEach(function(S){for(var t=.15;t<.95;t+=.38){var p=bzp(S,t),dx=p[0]-CEN[0],dy=p[1]-CEN[1],L=Math.sqrt(dx*dx+dy*dy),o=34+rnd()*16;
    var x=CEN[0]+dx*(L+o)/L,y=CEN[1]+dy*(L+o)/L;if(y>470||y<20||x<24||x>740)continue;out.push([x,y,.8+rnd()*.5])}});return out})();
function pine(x,y,s){var h=16*s,w=6*s;return '<path class="pn" d="M'+f1(x)+' '+f1(y-h)+'L'+f1(x-w)+' '+f1(y-h*.35)+'M'+f1(x)+' '+f1(y-h)+'L'+f1(x+w)+' '+f1(y-h*.35)+'M'+f1(x)+' '+f1(y-h*.62)+'L'+f1(x-w*1.4)+' '+f1(y)+'M'+f1(x)+' '+f1(y-h*.62)+'L'+f1(x+w*1.4)+' '+f1(y)+'M'+f1(x)+' '+f1(y-h)+'V'+f1(y+3*s)+'"/>'}
function storyScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="20 8 720 560" aria-hidden="true">';
  g+='<g id="scLake"><path class="wl sD" d="'+shoreD(1)+'"/><path class="wo sD" d="'+shoreD(1.045)+'"/><path class="wl sD" d="'+ISLE+'"/>';
  PINES.forEach(function(q){g+=pine(q[0],q[1],q[2])});g+=pine(414,300,.7)+pine(430,296,.85)+pine(446,299,.65);
  /* a few quiet ripple lines on the water */
  [[150,250,60],[520,140,70],[470,420,80],[230,440,50]].forEach(function(r){g+='<path class="wv" d="M'+r[0]+' '+r[1]+'h'+r[2]+'M'+(r[0]+14)+' '+(r[1]+9)+'h'+(r[2]-28)+'"/>'});
  g+='</g>';
  /* the route: a faint dotted guide (frame 0) and the paddled line that draws behind the canoe */
  g+='<path class="rg" d="'+cp(R1)+'"/><path class="rg" d="'+cp(R2)+'"/>';
  g+='<path class="rd" id="rd1" d="'+cp(R1)+'"/><path class="rd" id="rd2" d="'+cp(R2)+'"/>';
  /* the three landings */
  [[R1[0],R1[1]],[R2[0],R2[1]],[R2[6],R2[7]]].forEach(function(p,i){g+='<g class="wp" id="wp'+i+'" transform="translate('+p[0]+' '+p[1]+')"><circle class="wr" r="15"/><circle class="wd" r="5"/><circle class="wx" r="15"/></g>'});
  /* the canoe, seen from above */
  g+='<g id="cn" transform="translate('+R1[0]+' '+R1[1]+')"><g id="cnr"><path class="cb" d="M-19 0C-10 -7 10 -7 19 0C10 7 -10 7 -19 0Z"/><path class="ct" d="M-6 -4.6V4.6M6 -4.6V4.6"/></g></g>';
  /* landing labels: >=8px clear of every stroke */
  if(!mob){
    g+='<text class="t wl0" x="220" y="392">THE STANDARD</text>';
    g+='<text class="t wl1" x="300" y="152" text-anchor="middle">THE QUEST</text>';
    g+='<text class="t wl2" x="592" y="382" text-anchor="middle">THE RESULT</text>';
  }else{
    g+='<text class="t wl0" x="222" y="396">LEARN</text>';
    g+='<text class="t wl1" x="300" y="146" text-anchor="middle">PLAY</text>';
    g+='<text class="t wl2" x="592" y="392" text-anchor="middle">MEASURE</text>';
  }
  var ly=SCH+2,lx=mob?40:40;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'START WITH THE STANDARD':'START WITH WHAT PLAYERS SHOULD LEARN')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'THE MATH BECOMES A QUEST':'THE MATH BECOMES A MATTER OF SURVIVAL')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'+30% IN 10 WEEKS':'+30% ON TESTS OF THE STANDARDS IN 10 WEEKS')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),pn:$$(".pn",svg),wv:$$(".wv",svg),rg:$$(".rg",svg),r1:$("#rd1",svg),r2:$("#rd2",svg),cn:$("#cn",svg),cnr:$("#cnr",svg),
    wp:[0,1,2].map(function(i){return $("#wp"+i,svg)}),wl:[0,1,2].map(function(i){return $(".wl"+i,svg)}),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var L1=E.r1.getTotalLength(),L2=E.r2.getTotalLength();
  E.r1.style.strokeDasharray=L1+" "+L1;E.r2.style.strokeDasharray=L2+" "+L2;
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function at(path,L,v){var a=path.getPointAtLength(L*v),b=path.getPointAtLength(Math.min(L,L*v+2)),c0=path.getPointAtLength(Math.max(0,L*v-2));return [a.x,a.y,Math.atan2(b.y-c0.y,b.x-c0.x)*180/Math.PI]}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.pn.concat(E.wv,E.rg).forEach(function(el){op(el,b)})}
    var s1=seg(p,.04,.3),s2=seg(p,.36,.62),s3=seg(p,.68,.92);
    /* the paddled route draws behind the canoe */
    E.r1.style.strokeDashoffset=(L1*(1-s2)).toFixed(1);E.r2.style.strokeDashoffset=(L2*(1-s3)).toFixed(1);
    var q=s3>0?at(E.r2,L2,s3):at(E.r1,L1,s2);
    E.cn.setAttribute("transform","translate("+f1(q[0])+" "+f1(q[1])+")");E.cnr.setAttribute("transform","rotate("+f1(q[2])+")");op(E.cn,b);
    /* landings light in turn; the reached one keeps its accent */
    var lit=[s1,sm((s2-.85)/.15),sm((s3-.85)/.15)];
    E.wp.forEach(function(g,i){op(g,b);g.classList.toggle("on",lit[i]>.5);var x=$(".wx",g);x.setAttribute("r",f1(15+lit[i]*16));op(x,lit[i]*(1-sm((lit[i]-.6)/.4))*.9+lit[i]*.25)});
    E.wl.forEach(function(t,i){op(t,b*(.55+.45*lit[i]))});
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.32,.38)));op(E.l2,b*seg(p,.4,.48)*(1-seg(p,.64,.7)));op(E.l3,b*seg(p,.74,.82));
  };
}
