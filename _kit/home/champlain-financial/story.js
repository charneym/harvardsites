/* the story scene (BL/BY/DB): ONE engraved elevation of a Quebec mid-market company, a plant with its office block and
   loading dock, the kind of niche manufacturer or distributor Champlain backs. Each of the four levers on the firm's
   Our Approach page inks one more layer of the same drawing: strategic planning (survey dimensions and the planned
   extension in dashed line), streamlined operations (one straight production line through the plant, in section),
   business development (trucks at the dock and the routes out to new customers), and a structured acquisition program
   (the add-on plant made real and joined to the first). */
function scene(){
  var mob=MOBILE();
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="0 120 800 440" aria-hidden="true">';
  var GL=470;
  function saw(x0,x1,top,n){var s='M'+x0+' '+GL+'V'+top;var sw=(x1-x0)/n;for(var i=0;i<n;i++){var a=x0+i*sw;s+='L'+(a+sw*.78)+' '+(top-34)+'V'+top+(i<n-1?'':'')+'H'+(a+sw)}return s+'V'+GL}
  function wins(x0,x1,y,n,wh){var s='',sp=(x1-x0)/n;for(var i=0;i<n;i++){var x=x0+i*sp+sp*.22;s+='M'+x+' '+y+'h'+(sp*.56)+'v'+wh+'h'+(-sp*.56)+'Z'}return s}
  function truck(x,y,s){return 'M'+x+' '+y+'h'+(86*s)+'v'+(-40*s)+'h'+(-86*s)+'Z M'+(x+86*s)+' '+y+'h'+(30*s)+'v'+(-22*s)+'l'+(-8*s)+' '+(-12*s)+'h'+(-22*s)+'Z M'+(x+92*s)+' '+(y-30*s)+'h'+(12*s)+'v'+(10*s)+'h'+(-16*s)+
    'M'+(x+18*s)+' '+(y+6*s)+'a'+(7*s)+' '+(7*s)+' 0 1 0 .1 0Z M'+(x+68*s)+' '+(y+6*s)+'a'+(7*s)+' '+(7*s)+' 0 1 0 .1 0Z M'+(x+104*s)+' '+(y+6*s)+'a'+(7*s)+' '+(7*s)+' 0 1 0 .1 0Z'}
  /* base: neatline, ground, the plant (sawtooth roof), the office block, the stack, the dock, a title block */
  g+='<g id="scBase"><rect class="neat" x=".5" y="120.5" width="799" height="439"/>';
  /* the far ridge behind the plant, engraved, broken where the stack stands */
  g+='<path class="sD kb" d="M24 252C80 236 120 214 176 220S268 250 318 238S410 204 460 214M502 222C560 236 600 206 660 200S742 222 776 214"/><path class="sD ht" d="M24 262C90 250 140 236 190 240S280 262 330 252S420 228 456 232M506 238C566 250 610 226 664 222S744 236 776 230"/>';
  g+='<path class="sD gr" d="M24 '+GL+'H776"/><path class="sD kb" d="M24 '+(GL+8)+'H776M24 '+(GL+13)+'H776"/>';
  var hz='';for(var i=0;i<62;i++){var hx=30+i*12;hz+='M'+hx+' '+(GL+13)+'l-8 8'}g+='<path class="sD ht" d="'+hz+'"/>';
  g+='<path class="sD bl" d="'+saw(250,520,300,5)+'"/>';
  g+='<path class="sD bl" d="M140 '+GL+'V336H250M140 336H250M134 336H256V328H134Z"/>';
  g+='<path class="sD bl" d="'+wins(146,246,352,4,26)+wins(146,246,396,4,26)+'"/>';
  g+='<path class="sD bl" d="M186 '+GL+'V432H210V'+GL+'"/>';
  g+='<path class="sD bl" d="M470 266V180H492V266M466 180H496V172H466Z"/>';
  g+='<path class="sD bl" d="M520 '+GL+'V384H562V'+GL+'M520 384L568 376M262 '+GL+'V420H300V'+GL+'M312 '+GL+'V420H350V'+GL+'"/>';
  g+='<path class="sD kb" d="'+(function(){var s='';for(var y=424;y<GL;y+=6)s+='M262 '+y+'H300M312 '+y+'H350';return s})()+'"/>';
  g+='<g class="tb"><path class="tbl" d="M548 492h228v52h-228Z M548 518h228"/><text x="558" y="510" class="t">ELEVATION · ONE COMPANY</text><text x="558" y="536" class="t s">MONTRÉAL, QUÉBEC</text></g>';
  g+='</g>';
  /* 1 strategic planning: overall dimensions, a datum, the planned extension in dashed line */
  g+='<g id="sc1"><path class="dim dr" d="M140 236H520M140 228V244M520 228V244M570 236H740M570 228V244M740 228V244"/>'+
     '<path class="plan dr" d="M576 '+GL+'V336H740V'+GL+'M576 336L590 318H726L740 336"/>'+
     '<path class="dim dr" d="M104 '+GL+'V300M96 '+GL+'H112M96 300H112"/>'+
     '<text x="44" y="150" class="a">THE PLAN</text></g>';
  /* 2 streamlined operations: the line through the plant in section, receiving to shipping, straight */
  var rl='';for(var x=270;x<=510;x+=16)rl+='M'+x+' 448a4 4 0 1 0 .1 0Z';
  g+='<g id="sc2"><path class="pipe dr" d="M262 442H516"/><path class="sec dr" d="'+rl+'"/>'+
     '<path class="pipe dr" d="M496 436l20 6-20 6"/>'+
     '<path class="sys dr" d="M296 442v-18h18v18M352 442v-18h18v18M408 442v-18h18v18M464 442v-18h18v18"/>'+
     '<text x="44" y="150" class="a">ONE STRAIGHT LINE</text></g>';
  /* 3 business development: trucks at the dock, and the routes out to new customers */
  g+='<g id="sc3"><path class="frm dr" d="'+truck(576,GL-6,.86)+'"/>'+
     '<path class="plan dr" d="M690 420C716 360 740 330 770 300M650 420C640 330 610 270 600 200M720 440C746 430 760 420 784 412"/>'+
     '<path class="frm dr" d="M770 300m-6 0a6 6 0 1 0 12 0a6 6 0 1 0-12 0M600 200m-6 0a6 6 0 1 0 12 0a6 6 0 1 0-12 0"/>'+
     '<text x="44" y="150" class="a">NEW CUSTOMERS</text></g>';
  /* 4 a structured acquisition program: the add-on plant made real, joined to the first by a covered link */
  g+='<g id="sc4"><path class="lit2" d="M576 '+GL+'V336H740V'+GL+'Z"/><path class="lit" d="M576 336L590 318H726L740 336Z"/>'+
     '<path class="lit" d="'+wins(584,734,352,5,22)+'"/>'+
     '<path class="lit2" d="M520 '+(GL-56)+'H576V'+(GL-30)+'H520Z"/>'+
     '<path class="lit3" d="'+saw(250,520,300,5)+'"/>'+
     '<text x="44" y="150" class="a">ONE PLATFORM</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .neat, #scBase .tb",svg),g1:$("#sc1",svg),g2:$("#sc2",svg),g3:$("#sc3",svg),g4:$("#sc4",svg),
    d1:dl("#sc1 .dr"),d2:dl("#sc2 .dr"),d3:dl("#sc3 .dr"),t:[$("#sc1 text",svg),$("#sc2 text",svg),$("#sc3 text",svg),$("#sc4 text",svg)]};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s1=seg(p,0,.16),s2=seg(p,.25,.44),s3=seg(p,.5,.69),s4=seg(p,.75,.94);
    E.g1.style.opacity=(b*(1-.5*s4)).toFixed(3);draw(E.d1,Math.max(s1,.6*b));
    E.g2.style.opacity=(b*(s2>0?1:0)).toFixed(3);draw(E.d2,s2);
    E.g3.style.opacity=(b*(s3>0?1:0)).toFixed(3);draw(E.d3,s3);
    E.g4.style.opacity=(b*s4).toFixed(3);
    /* the step labels share one spot: one at a time */
    var I=function(v){return Math.max(0,v*2-1)},O=function(v){return 1-Math.min(1,v*2)};
    E.t[0].style.opacity=O(s2).toFixed(3);
    E.t[1].style.opacity=(I(s2)*O(s3)).toFixed(3);E.t[2].style.opacity=(I(s3)*O(s4)).toFixed(3);E.t[3].style.opacity=I(s4).toFixed(3);
  };
}
