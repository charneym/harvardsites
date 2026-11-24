/* The story scene (DB/BL): Haermonics' own working principle (haermonics.com: chest tubes must stay clear and drain residual
   blood; they obstruct in as many as 36% of patients; the Haermonics Pure System keeps a steady flow of saline through the
   pericardium from closure, preventing clots and keeping the tubes open, and gives clinical teams real-time insight),
   drawn as ONE fine-line scene that fills the frame: the heart in its pericardium, two chest tubes, the saline line and the
   Pure console. Calm and clinical (DT): no blood is drawn; residual fluid and clots are pale stone tones, saline is the
   logo blue.
   Frame 0 is complete: the heart, sac, tubes and console, with fluid draining slowly down the tubes.
   Step 1 (drain): small clots gather in the tubes and the drainage stalls.
   Step 2 (flush): saline flows from the console into the pericardium, the clots clear and drainage resumes.
   Step 3 (monitor): the console screen draws the drained volume over time. Driven by scrubbed progress. */
var SCW=760,SCH=560;
var HEART="M300 196C282 150 214 132 190 186C168 236 212 300 300 366C388 300 432 236 410 186C386 132 318 150 300 196Z";
function scl(d,k,cx,cy){return d.replace(/(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/g,function(m,x,y){return (cx+(+x-cx)*k).toFixed(1)+' '+(cy+(+y-cy)*k).toFixed(1)})}
var SAC=scl(HEART,1.24,300,262);
var TUBE1="M276 372C276 440 330 470 420 470C500 470 560 462 616 440";
var TUBE2="M324 368C326 420 360 444 430 444C500 444 560 432 616 414";
var INFL="M616 214C540 186 470 112 392 112C350 112 322 140 312 176";
var LOOP="M312 176C340 190 392 214 386 252C380 300 330 320 300 346C290 356 280 364 276 372";
var LOOP2="M312 176C280 196 224 214 226 252C228 296 288 330 324 368";
function storyScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'138 60 614 470':'100 58 660 484')+'" aria-hidden="true">';
  /* pericardium and heart */
  g+='<g id="scArt"><path class="wo sD" d="'+SAC+'"/><path class="wl sD" d="'+HEART+'"/>';
  g+='<path class="en sD" d="M300 196C304 226 296 262 284 300"/><path class="en sD" d="M250 176C262 194 272 204 286 210"/>';
  /* chest tubes: an outer wall and a dark core, so each reads as a tube */
  g+='<path class="tw sD" d="'+TUBE1+'"/><path class="tw sD" d="'+TUBE2+'"/><path class="tc" d="'+TUBE1+'"/><path class="tc" d="'+TUBE2+'"/>';
  /* the saline line from the console into the pericardium */
  g+='<path class="il sD" d="'+INFL+'"/>';
  /* the Haermonics Pure console: screen on a column, a tall body with its window, a base with wheels */
  g+='<path class="cs sD" d="M626 70h84v58h-84Z"/><path class="wo sD" d="M660 128v14"/><path class="cs sD" d="M622 142h92v300h-92Z"/>';
  g+='<path class="wo sD" d="M636 160h64v180h-64Z"/><path class="wo sD" d="M646 176v34M660 176v34M674 176v34M688 176v34"/>';
  g+='<path class="cs sD" d="M610 442h116"/><path class="wo sD" d="M618 442v12M718 442v12"/><circle class="wo" cx="618" cy="460" r="6"/><circle class="wo" cx="718" cy="460" r="6"/>';
  g+='<path class="pg" id="scGr" d="M634 118C648 92 656 88 668 96C680 104 690 110 702 112"/><path class="ga" d="M632 120h74"/></g>';
  g+='<path id="scLoop" d="'+LOOP+'" fill="none" stroke="none"/><path id="scLoop2" d="'+LOOP2+'" fill="none" stroke="none"/>';
  /* drainage fluid (stone) in the tubes, clots, and saline drops (blue) */
  g+='<g id="scDr">';for(var i=0;i<14;i++)g+='<circle class="dr" r="2.6" data-i="'+i+'" cx="0" cy="0"/>';g+='</g>';
  g+='<g id="scCl">';[[0,.18],[0,.27],[0,.36],[1,.2],[1,.3],[1,.4]].forEach(function(c){g+='<path class="cl" data-t="'+c[0]+'" data-u="'+c[1]+'" d="M-9 -1C-9 -7 -2 -9 3 -7C9 -6 10 0 7 4C4 9 -4 9 -7 4Z"/>'});g+='</g>';
  g+='<g id="scSa">';for(var k=0;k<22;k++)g+='<circle class="sa" r="3" data-i="'+k+'" cx="0" cy="0"/>';g+='</g>';
  if(!mob){
    g+='<g id="lSac"><path class="ld" d="M200 124L182 98"/><text class="t" x="182" y="88" text-anchor="middle">PERICARDIUM</text></g>';
    g+='<g id="lTu"><path class="ld" d="M268 424L214 476"/><text class="t" x="206" y="492" text-anchor="end">CHEST TUBES</text></g>';
    g+='<g id="lIn"><path class="ld" d="M470 120L470 84"/><text class="t o" x="470" y="72" text-anchor="middle">SALINE IN</text></g>';
    g+='<g id="lCo"><text class="t" x="668" y="486" text-anchor="middle">HAERMONICS PURE</text></g>';
  }else{g+='<g id="lSac"></g><g id="lTu"></g><g id="lIn"></g><g id="lCo"></g>'}
  var ly=mob?522:532,lx=mob?150:112;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'CLOTS CAN BLOCK THE TUBES':'CLOTS CAN BLOCK THE CHEST TUBES')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'SALINE KEEPS THEM CLEAR':'A STEADY FLOW OF SALINE KEEPS THEM CLEAR')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'DRAINAGE, IN REAL TIME':'THE CONSOLE SHOWS DRAINAGE IN REAL TIME')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var T=[$$("path.tc",svg)[0],$$("path.tc",svg)[1]],TL=T.map(function(p){return p.getTotalLength()}),IN=$("path.il",svg),INL=IN.getTotalLength(),
    LP=[$("#scLoop",svg),$("#scLoop2",svg)],LPL=LP.map(function(p){return p.getTotalLength()}),GR=$("#scGr",svg),GRL=GR.getTotalLength();
  GR.style.strokeDasharray=GRL+" "+GRL;
  var E={base:dl(".sD"),dr:$$("#scDr .dr",svg),cl:$$("#scCl .cl",svg),sa:$$("#scSa .sa",svg),tc:T,
    lSac:$("#lSac",svg),lTu:$("#lTu",svg),lIn:$("#lIn",svg),lCo:$("#lCo",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function at(p,l){var q=p.getPointAtLength(Math.max(0,Math.min(1,l))*p.getTotalLength());return q}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.tc.forEach(function(el){el.style.opacity=b})}
    var s1=seg(p,.04,.3),s2=seg(p,.36,.62),s3=seg(p,.68,.92);
    var clot=sm(s1)*(1-sm(seg(p,.42,.6))),flush=sm(seg(p,.34,.46));
    /* drainage: fluid drops travel down each tube, stall behind the clots in step 1, run freely again once flushing starts */
    var spd=1-.85*clot;
    E.dr.forEach(function(el,i){var t=i%2,u=((i/14)+p*1.6*spd+(i>6?.05:0))%1;
      if(clot>.05){var stop=t?.18:.16;if(u>stop&&u<.5)u=stop-(u-stop)*.02}
      var q=at(T[t],u);el.setAttribute("cx",q.x.toFixed(1));el.setAttribute("cy",q.y.toFixed(1));op(el,b*.9*Math.min(1,(1-u)*8))});
    E.cl.forEach(function(el){var t=+el.dataset.t,u=+el.dataset.u,q=at(T[t],u),sz=.4+.6*sm((s1*1.3-u))*(1-sm(seg(p,.42,.6)));
      el.setAttribute("transform","translate("+q.x.toFixed(1)+" "+q.y.toFixed(1)+") scale("+sz.toFixed(2)+")");op(el,b*clot*1.4)});
    /* saline: from the console along the line, around the heart inside the sac, and out through the tubes */
    E.sa.forEach(function(el,i){var ph=((i/22)+p*2.2)%1,q,lp=i%2;
      if(ph<.4)q=at(IN,ph/.4);else if(ph<.62)q=at(LP[lp],(ph-.4)/.22);else q=at(T[lp?1:0],(ph-.62)/.38*.95);
      el.setAttribute("cx",q.x.toFixed(1));el.setAttribute("cy",q.y.toFixed(1));op(el,b*flush*Math.min(1,(1-ph)*10))});
    GR.style.strokeDashoffset=(GRL*(1-sm(s3))).toFixed(1);GR.style.opacity=b;
    op(E.lSac,b*(1-seg(p,.12,.2)));op(E.lTu,b*seg(p,.04,.1)*(1-seg(p,.3,.36)));
    op(E.lIn,b*seg(p,.38,.44)*(1-seg(p,.6,.66)));op(E.lCo,b*seg(p,.7,.76));
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}
