/* The story scene (BL/BY/DB): how a glass mould is made at Krahl (krahl.de > Leistungen: Giessereimodelle aus Holz
   und Kunststoff, zur Gussstueckherstellung fuer Glasformen weiter verwendet; Formenbau: Formen fuer die manuelle und
   maschinelle Glasfertigung aus Gusseisen, CNC und konventionell bearbeitet), drawn as ONE line of three stations kept
   on screen for all three steps:
   Step 1 (Modell): the wooden pattern of a mould half is milled under a CNC spindle.
   Step 2 (Guss): the pattern's impression sits in a two-part sand flask; iron is poured through the sprue and fills it.
   Step 3 (Form): the cast blank is machined: the bottle cavity is cut, polished, and the guide-pin bores are set.
   Schematic, not to scale, no measured values. */
var SCW=760,SCH=520,VY=80;
var GY=530,PX=[130,380,630];
function bottle(cx,top){
  /* the bottle cavity of a mould half, open at the top edge of the block */
  return 'M'+(cx-16)+' '+top+'V'+(top+52)+'C'+(cx-16)+' '+(top+74)+' '+(cx-48)+' '+(top+80)+' '+(cx-48)+' '+(top+102)+
    'V'+(top+192)+'Q'+(cx-48)+' '+(top+200)+' '+(cx-40)+' '+(top+200)+'H'+(cx+40)+'Q'+(cx+48)+' '+(top+200)+' '+(cx+48)+' '+(top+192)+
    'V'+(top+102)+'C'+(cx+48)+' '+(top+80)+' '+(cx+16)+' '+(top+74)+' '+(cx+16)+' '+(top+52)+'V'+top;
}
function spindle(x,tip){
  /* a CNC spindle nose with an end mill whose tip ends at y = tip */
  return '<path class="body sD" d="M'+(x-18)+' '+(tip-130)+'H'+(x+18)+'V'+(tip-62)+'H'+(x-18)+'Z"/>'+
    '<path class="body sD" d="M'+(x-11)+' '+(tip-62)+'H'+(x+11)+'V'+(tip-48)+'H'+(x-11)+'Z"/>'+
    '<path class="tool" d="M'+(x-5)+' '+(tip-48)+'H'+(x+5)+'V'+(tip-3)+'L'+x+' '+tip+'L'+(x-5)+' '+(tip-3)+'Z"/>'+
    '<path class="body sD" d="M'+(x-5)+' '+(tip-40)+'L'+(x+5)+' '+(tip-30)+'M'+(x-5)+' '+(tip-26)+'L'+(x+5)+' '+(tip-16)+'M'+(x-5)+' '+(tip-12)+'L'+(x+4)+' '+(tip-3)+'"/>';
}
function krScene(o){
  var g='',mob=o.mob,i;
  function P(d,c,id){return '<path'+(id?' id="'+id+'"':'')+' class="'+c+'" d="'+d+'"/>'}
  function R(x0,y0,x1,y1){return 'M'+x0+' '+y0+'H'+x1+'V'+y1+'H'+x0+'Z'}
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 '+VY+' '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><clipPath id="kcav3"><path d="'+bottle(PX[2],300)+'Z"/></clipPath><clipPath id="kcav2"><path clip-rule="evenodd" d="'+R(PX[1]-75,286,PX[1]+75,516)+bottle(PX[1],286)+'Z"/></clipPath>'+
     '<linearGradient id="kpol" x1="0" x2="1"><stop offset="0" stop-color="#8d8798"/><stop offset=".32" stop-color="#e9e6ee"/><stop offset=".5" stop-color="#a7a1b2"/><stop offset=".78" stop-color="#d4cfdc"/><stop offset="1" stop-color="#7a7485"/></linearGradient></defs>';
  g+='<text class="t" x="20" y="'+(mob?112:108)+'">'+(mob?"MODELL, GUSS, FORM":"MODELL, GUSS, FORM · SCHEMATISCH")+'</text>';
  g+=P('M20 '+GY+'H740',"body sD gl");
  /* 1 · the wooden pattern of a mould half under the CNC spindle */
  var a=PX[0];
  g+='<g id="kP1">'+P(R(a-75,300,a+75,GY),"wood")+'</g>';
  g+=P(R(a-75,300,a+75,GY)+bottle(a,300),"body sD");
  var gr='';[-66,-58,58,66].forEach(function(dx){var x=a+dx;gr+='M'+x+' 308C'+(x+3)+' 360 '+(x-3)+' 420 '+x+' 470S'+(x+2)+' 512 '+x+' 522'});
  gr+='M'+(a-36)+' 512C'+(a-12)+' 509 '+(a+12)+' 515 '+(a+36)+' 512';
  g+='<g id="kG1">'+P(gr,"grain")+'</g>';
  g+='<g id="kS1">'+spindle(a+30,288)+'</g>';
  /* 2 · the sand flask (cope over drag) holding the pattern's impression: iron fills the block, the bottle core stays sand */
  var b=PX[1],IT=286;
  g+=P(R(b-104,250,b+104,GY)+'M'+(b-112)+' 396H'+(b-75)+'M'+(b+75)+' 396H'+(b+112),"body sD");
  var dots='';for(i=0;i<300;i++){var dx=((i*73)%208)-104+((i*17)%7)*.4,dy=250+((i*151)%280);var x=b+dx;
    if(x<b-100||x>b+100||dy<256||dy>GY-5)continue;if(x>b-81&&x<b+81&&dy>IT-6&&dy<IT+236)continue;if(x>b+44&&x<b+66&&dy<IT)continue;
    dots+='<circle cx="'+x.toFixed(1)+'" cy="'+dy+'" r="1.3"/>'}
  g+='<g id="kSand" class="sand">'+dots+P(bottle(b,IT)+'Z',"core")+'</g>';
  g+='<rect id="kIron" class="iron" clip-path="url(#kcav2)" x="'+(b-75)+'" y="'+IT+'" width="150" height="230"/>';
  g+=P(R(b-75,IT,b+75,IT+230)+bottle(b,IT)+'M'+(b+50)+' 250V'+IT+'M'+(b+60)+' 250V'+IT,"body sD");
  g+='<g id="kLad">'+P('M'+(b+62)+' 162L'+(b+108)+' 146L'+(b+132)+' 196Q'+(b+112)+' 226 '+(b+78)+' 214Z',"ladle")+P('M'+(b+108)+' 146L'+(b+150)+' 124',"body")+'</g>';
  g+='<g id="kPour">'+P('M'+(b+64)+' 172C'+(b+56)+' 192 '+(b+55)+' 220 '+(b+55)+' 244',"pour")+'</g>';
  /* 3 · the cast blank machined into the finished glass mould half */
  var c3=PX[2];
  g+='<g id="kB3">'+P(R(c3-75,300,c3+75,GY),"cast")+'</g>';
  g+=P(R(c3-75,300,c3+75,GY),"body sD");
  g+='<g id="kPol"><rect clip-path="url(#kcav3)" x="'+(c3-48)+'" y="300" width="96" height="200" fill="url(#kpol)"/>'+
     P('M'+(c3-6)+' 312V352M'+(c3-26)+' 410V488',"shine")+'</g>';
  g+=P(bottle(c3,300),"cut sD","kCut");
  g+='<g id="kBore">';[[-60,316],[60,316],[-60,514],[60,514]].forEach(function(q){g+='<circle class="bore" cx="'+(c3+q[0])+'" cy="'+q[1]+'" r="5.5"/>'});g+='</g>';
  g+='<g id="kS3">'+spindle(c3,292)+'</g>';
  /* labels, each clear of every stroke (8px+) */
  var ly=GY+30;
  if(mob){
    g+='<g id="kN1"><text class="t" x="'+a+'" y="'+ly+'" text-anchor="middle">MODELL</text></g>';
    g+='<g id="kN2"><text class="t" x="'+b+'" y="'+ly+'" text-anchor="middle">SANDFORM</text></g>';
    g+='<g id="kN3"><text class="t" x="'+c3+'" y="'+ly+'" text-anchor="middle">GLASFORM</text></g>';
  }else{
    g+='<g id="kN1"><text class="t" x="'+a+'" y="'+ly+'" text-anchor="middle">MODELL · HOLZ</text><text class="t s1" x="'+a+'" y="'+(ly+22)+'" text-anchor="middle">CNC-GEFRÄST</text></g>';
    g+='<g id="kN2"><text class="t" x="'+b+'" y="'+ly+'" text-anchor="middle">SANDFORM</text><text class="t s1" x="'+b+'" y="'+(ly+22)+'" text-anchor="middle">GUSSEISEN</text></g>';
    g+='<g id="kN3"><text class="t" x="'+c3+'" y="'+ly+'" text-anchor="middle">GLASFORM</text><text class="t s1" x="'+c3+'" y="'+(ly+22)+'" text-anchor="middle">GEDREHT · POLIERT</text></g>';
  }
  g+='<g id="lb1"><text class="a" x="740" y="108" text-anchor="end">'+(mob?"":"1 · MODELL")+'</text></g>';
  g+='<g id="lb2"><text class="a" x="740" y="108" text-anchor="end">'+(mob?"":"2 · GUSS")+'</text></g>';
  g+='<g id="lb3"><text class="a" x="740" y="108" text-anchor="end">'+(mob?"":"3 · FORM")+'</text></g>';
  return g+'</svg>';
}
function scene(){return krScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;p.style.strokeDashoffset=L;return [p,L]})};
  var q=function(s){return $(s,svg)};
  var E={base:dl(".sD:not(#kCut)"),cut:dl("#kCut"),pour:dl("#kPour path"),P1:q("#kP1"),G1:q("#kG1"),S1:q("#kS1"),Sand:q("#kSand"),Iron:q("#kIron"),Lad:q("#kLad"),
    B3:q("#kB3"),Pol:q("#kPol"),Bore:q("#kBore"),S3:q("#kS3"),N1:q("#kN1"),N2:q("#kN2"),N3:q("#kN3"),l1:q("#lb1"),l2:q("#lb2"),l3:q("#lb3"),t0:svg.querySelector("text.t")};
  var lastB=-1,IH=+E.Iron.getAttribute("height"),IY=+E.Iron.getAttribute("y");
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);op(E.t0,b)}
    /* step 1: the pattern in wood, milled under the spindle (complete at the start of the step) */
    op(E.P1,b);op(E.G1,b);op(E.S1,b*(1-.55*seg(p,.34,.42)));
    op(E.N1,b*seg(p,.04,.12));
    /* step 2: the ladle tips, the iron runs down the sprue and fills the impression */
    op(E.Sand,b*seg(p,.34,.42));op(E.Lad,b*seg(p,.38,.44));
    draw(E.pour,b*seg(p,.44,.5));
    var f=seg(p,.48,.62);E.Iron.setAttribute("height",(IH*f).toFixed(1));E.Iron.setAttribute("y",(IY+IH*(1-f)).toFixed(1));op(E.Iron,b);
    op(E.N2,b*seg(p,.4,.48));
    /* step 3: the cast blank, the cavity cut under the spindle, polished, bores set */
    op(E.B3,b*seg(p,.66,.72));op(E.S3,b*seg(p,.68,.74));
    draw(E.cut,b*seg(p,.72,.86));
    op(E.Pol,b*seg(p,.84,.92));op(E.Bore,b*seg(p,.86,.92));
    op(E.N3,b*seg(p,.82,.9));
    op(E.l1,b*(1-seg(p,.3,.34)));op(E.l2,b*seg(p,.36,.42)*(1-seg(p,.64,.68)));op(E.l3,b*seg(p,.7,.76));
  };
}
