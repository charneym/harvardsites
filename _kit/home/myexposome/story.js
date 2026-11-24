/* The story scene (DB/BL): MyExposome's own method (myexposome.com, Approach and Welcome; NIH SBIR 5R44ES033586), drawn as ONE
   fine-line scene that fills the frame: the wristband at the centre, the places it goes (home, work, play, outdoors) around it.
   Step 1 (wear): chemicals hover around each place. Step 2 (absorb): they drift to the band and sink into the silicone, leaving
   their mark on it. Step 3 (screen): the band, sealed in its bag, steps aside while the six test panels draw in beside it.
   Everything is driven by the scrubbed progress. */
var BX=380,BY=250,BRX=196,BRY=60,BH=60;
var SRC=[{k:"HOME",x:96,y:84},{k:"WORK",x:664,y:84},{k:"PLAY",x:96,y:404},{k:"OUTDOORS",x:664,y:404}];
var CLS=["PESTICIDES","FLAME RETARDANTS","PAHS","VOLATILE ORGANICS","PHTHALATES","FRAGRANCES"];
function f1(v){return v.toFixed(1)}
function hexP(r){var d="";for(var i=0;i<6;i++){var a=Math.PI/3*i+Math.PI/6;d+=(i?"L":"M")+f1(r*Math.cos(a))+" "+f1(r*Math.sin(a))}return d+"Z"}
function bandPt(th){return [BX+BRX*Math.cos(th),BY+BRY*Math.sin(th)+BH*.5]}
var MOL=(function(){var L=[],th=[2.75,2.45,2.15,1.9, .3,.55,.85,1.1, 2.6,2.3,1.75,1.5, .45,.7,1.25,1.4],
  OF=[[66,-22],[92,4],[64,30],[100,40]];
  SRC.forEach(function(s,si){var sx=s.x<380?1:-1,sy=s.y<250?1:-1;OF.forEach(function(o,j){L.push({s:si,x:s.x+sx*o[0],y:s.y+sy*o[1]-(sy<0?18:0),th:th[si*4+j]})})});
  return L})();
function storyScene(o){
  var mob=o.mob,g='';
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'26 20 720 540':'0 0 760 560')+'" aria-hidden="true">';
  g+='<defs><radialGradient id="gAbs"><stop offset="0" stop-color="#86c157" stop-opacity=".5"/><stop offset="1" stop-color="#86c157" stop-opacity="0"/></radialGradient></defs>';
  /* the places: fine-line icons with a small label under each */
  g+='<g id="scSrc">';
  SRC.forEach(function(s,i){var x=s.x,y=s.y,ic;
    if(i===0)ic='M'+(x-26)+' '+(y+22)+'V'+(y-4)+'L'+x+' '+(y-26)+'L'+(x+26)+' '+(y-4)+'V'+(y+22)+'ZM'+(x-7)+' '+(y+22)+'V'+(y+6)+'H'+(x+7)+'V'+(y+22);
    else if(i===1)ic='M'+(x-28)+' '+(y+22)+'V'+(y-6)+'L'+(x-12)+' '+(y+4)+'V'+(y-6)+'L'+(x+4)+' '+(y+4)+'V'+(y-6)+'L'+(x+16)+' '+(y+2)+'V'+(y-26)+'H'+(x+26)+'V'+(y+22)+'Z';
    else if(i===2)ic='M'+(x-28)+' '+(y+22)+'H'+(x+28)+'M'+(x-20)+' '+(y+22)+'V'+(y-18)+'H'+(x-8)+'L'+(x+24)+' '+(y+22)+'M'+(x-20)+' '+(y-4)+'H'+(x-2);
    else ic='M'+x+' '+(y+22)+'V'+(y+2)+'M'+(x-22)+' '+(y-4)+'C'+(x-24)+' '+(y-30)+' '+(x+24)+' '+(y-30)+' '+(x+22)+' '+(y-4)+'C'+(x+18)+' '+(y+6)+' '+(x-18)+' '+(y+6)+' '+(x-22)+' '+(y-4)+'Z';
    g+='<g class="src"><path class="wl si sD" transform="translate('+x+' '+y+') scale(1.35) translate('+(-x)+' '+(-y)+')" d="'+ic+'"/><text class="t" x="'+x+'" y="'+(y+(mob?66:60))+'" text-anchor="middle">'+s.k+'</text></g>'});
  g+='</g>';
  /* the wristband (moves and scales as one group in step 3); the bag outline belongs to it */
  var fr='M'+(BX-BRX)+' '+BY+'A'+BRX+' '+BRY+' 0 0 0 '+(BX+BRX)+' '+BY+'V'+(BY+BH)+'A'+BRX+' '+BRY+' 0 0 1 '+(BX-BRX)+' '+(BY+BH)+'Z';
  g+='<g id="scBand">';
  g+='<path class="bag sB" d="M'+(BX-236)+' '+(BY-92)+'H'+(BX+236)+'V'+(BY+156)+'H'+(BX-236)+'Z"/><path class="bag sB" d="M'+(BX-236)+' '+(BY-70)+'H'+(BX+236)+'"/>';
  g+='<path class="bk sD" d="M'+(BX-BRX)+' '+BY+'A'+BRX+' '+BRY+' 0 0 1 '+(BX+BRX)+' '+BY+'"/>';
  g+='<path class="bk2 sD" d="M'+(BX-BRX+9)+' '+(BY+4)+'A'+(BRX-9)+' '+(BRY-6)+' 0 0 1 '+(BX+BRX-9)+' '+(BY+4)+'"/>';
  g+='<path class="bfill" id="scFill" d="'+fr+'"/><ellipse class="babs" id="scAbs" cx="'+BX+'" cy="'+(BY+BH*.6)+'" rx="'+(BRX+30)+'" ry="'+(BRY+40)+'" fill="url(#gAbs)"/>';
  g+='<path class="wl sD" d="'+fr+'"/>';
  g+='<g id="scSpots">';MOL.forEach(function(m){var p=bandPt(m.th);g+='<circle class="spot" cx="'+f1(p[0])+'" cy="'+f1(p[1])+'" r="3.2"/>'});g+='</g>';
  g+='</g>';
  /* the chemicals: small rings that drift from each place into the band */
  g+='<g id="scMol">';MOL.forEach(function(m){g+='<path class="mol" d="'+hexP(mob?11:8.5)+'" transform="translate('+f1(m.x)+' '+f1(m.y)+')"/>'});g+='</g>';
  /* the readout: six quantitative tests draw in beside the bagged band */
  var rx0=mob?380:430,rx1=730;
  g+='<g id="scRd"><text class="a hd" x="'+rx0+'" y="'+(mob?136:150)+'">1,500+ COMPOUNDS</text>';
  CLS.forEach(function(c,i){var y=(mob?192:202)+i*(mob?54:52);
    g+='<g class="row"><text class="t" x="'+rx0+'" y="'+y+'">'+c+'</text><path class="rl" d="M'+rx0+' '+(y+(mob?16:14))+'H'+rx1+'"/><circle class="rd" cx="'+rx1+'" cy="'+(y+(mob?16:14))+'" r="3.5"/></g>'});
  g+='</g>';
  var ly=mob?548:548,lx=mob?40:60;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'WORN FOR A DAY, WEEK OR MONTH':'WORN FOR A DAY, A WEEK OR A MONTH, WHEREVER YOU GO')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'CHEMICALS COLLECT IN THE SILICONE':'CHEMICALS FROM AIR AND SKIN CONTACT COLLECT IN THE SILICONE')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'SEALED, RETURNED AND SCREENED':'SEALED IN ITS BAG, RETURNED AND SCREENED IN THE LABORATORY')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var mob=svg.classList.contains("mob");
  var E={base:dl(".sD"),bag:dl(".sB"),src:$$("#scSrc .src",svg),band:$("#scBand",svg),fill:$("#scFill",svg),abs:$("#scAbs",svg),spots:$$("#scSpots .spot",svg),
    mol:$$("#scMol .mol",svg),rd:$("#scRd",svg),hd:$("#scRd .hd",svg),rows:$$("#scRd .row",svg),rl:dl("#scRd .rl"),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;E.base.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-b)).toFixed(1)})}
    var s1=seg(p,.02,.3),s2=seg(p,.34,.64),s3=seg(p,.68,.94);
    /* 1: the places, and the chemicals hovering around them */
    E.src.forEach(function(el){op(el,b*(1-.75*s2)*(1-sm(s3*2.2)))});
    E.mol.forEach(function(el,i){var m=MOL[i],tp=bandPt(m.th),f=sm((s2-(i%4)*.06-(i>>2)*.02)/.62);
      var dx=Math.sin(p*9+i*1.7)*4*(1-f),dy=Math.cos(p*7+i*2.3)*3*(1-f);
      var x=m.x+(tp[0]-m.x)*f+dx,y=m.y+(tp[1]-m.y)*f-Math.sin(f*Math.PI)*24+dy;
      el.setAttribute("transform","translate("+f1(x)+" "+f1(y)+") rotate("+f1(p*120+i*20)+")");
      op(el,b*sm(seg(p,.0,.08)+.2)*(1-sm((f-.82)/.18)))});
    /* 2: each chemical leaves its mark in the silicone, which takes on the colour */
    E.spots.forEach(function(el,i){var f=sm((s2-(i%4)*.06-(i>>2)*.02)/.62);op(el,b*sm((f-.8)/.2))});
    op(E.abs,b*s2*(1-.55*s3));op(E.fill,1);E.fill.style.fillOpacity=(.06+.14*s2).toFixed(3);
    /* 3: the band, sealed in its bag, steps aside; the tests draw in */
    var mv=sm(s3/.42),sc=1-(mob?.5:.48)*mv,cx=BX+((mob?196:214)-BX)*mv,cy=BY+((mob?300:300)-BY)*mv;
    E.band.setAttribute("transform","translate("+f1(cx)+" "+f1(cy)+") scale("+sc.toFixed(3)+") translate("+(-BX)+" "+(-BY)+")");
    E.bag.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-sm((s3-.2)/.35))).toFixed(1);op(a[0],b*(s3>.2?1:0))});
    op(E.hd,b*sm((s3-.45)/.25));
    E.rows.forEach(function(el,i){op(el,b*sm((s3-.48-i*.05)/.25))});
    E.rl.forEach(function(a,i){a[0].style.strokeDashoffset=(a[1]*(1-sm((s3-.5-i*.05)/.3))).toFixed(1)});
    op(E.l1,b*seg(p,.04,.12)*(1-seg(p,.28,.34)));op(E.l2,b*seg(p,.4,.48)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}
