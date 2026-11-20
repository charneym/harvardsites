/* The story scene (BL/BY/DB): how Photozig builds a caregiver program (photozig.com/research.html and the NIH RePORTER
   abstracts of Recharge, R44AG084419, and CaringGPT, R44AG094463), as ONE continuous fine-line scene.
   Left: three protocol sheets for interventions already tested in clinical trials (Coping With Caregiving, Behavioral
   Activation, mindfulness practice). Centre: a phone, on screen for all three steps. Step 1 the sheets engrave in.
   Step 2 their content flows into the phone and becomes the app's self-paced modules. Step 3 caregivers are randomized
   into two arms (the Phase II randomized clinical trial), and the app goes out through the App Store and Google Play.
   No outcome is drawn: the scene shows the method, not results. Every element is driven by the scrubbed progress. */
var SCW=760,SCH=520;
function memScene(o){
  var g='',i,mob=o.mob;
  var A=function(a,b){return ' data-a="'+a+','+b+'"'};
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  /* ---- base: frame ticks and captions ---- */
  g+='<g id="scBase"><path class="frm sD" d="M24 30H736M24 500H736"/>';
  g+='<text class="t" x="24" y="18">EVIDENCE</text><text class="t" x="380" y="18" text-anchor="middle">APP</text><text class="t" x="736" y="18" text-anchor="end">TRIAL · RELEASE</text></g>';
  /* ---- step 1: three protocol sheets ---- */
  var SH=[["COPING WITH","CAREGIVING"],["BEHAVIORAL","ACTIVATION"],["MINDFULNESS","PRACTICE"]];
  g+='<g id="scSheets">';
  SH.forEach(function(t,k){var y=54+k*150,a=-.3+k*.02,b=a+.1; /* step 1 art is drawn in with the stage itself (b), so the stage is never blank */
    g+='<g class="sh"'+A(a,b)+'>';
    g+='<path class="sk dr" d="M24 '+y+'H234V'+(y+126)+'H24Z"/>';
    g+='<path class="sk2 dr" d="M31 '+(y-7)+'H241V'+(y+119)+'"/>';
    g+='<text class="s" x="40" y="'+(y+30)+'">'+t[0]+'</text><text class="s" x="40" y="'+(y+50)+'">'+t[1]+'</text>';
    g+='<path class="sk2 dr" d="M40 '+(y+72)+'H214M40 '+(y+88)+'H200M40 '+(y+104)+'H170"/>';
    g+='<path class="sa dr" d="M196 '+(y+112)+'l8 8 14-18"/>';
    g+='</g>';});
  g+='</g>';
  /* ---- the phone, on screen throughout ---- */
  g+='<g id="scPhone"'+A(-.3,-.2)+'><path class="sk dr" d="M318 44H442Q458 44 458 60V476Q458 492 442 492H318Q302 492 302 476V60Q302 44 318 44Z"/>';
  g+='<path class="sk2 dr" d="M314 70H446V462H314Z"/><path class="sk dr" d="M364 57H396"/><circle class="sk" cx="380" cy="478" r="6"/></g>';
  /* ---- step 2: flows from the sheets into the phone, then the modules on its screen ---- */
  g+='<g id="scFlow">';
  [117,267,417].forEach(function(y,k){var a=.34+k*.03;
    g+='<path class="sa dr fw"'+A(a,a+.14)+' d="M241 '+(y-8)+'C280 '+(y-8)+' 270 '+(150+k*90)+' 314 '+(150+k*90)+'"/>';});
  g+='</g>';
  var MOD=["COPING SKILLS","BEHAVIORS","CALMING","MY PLAN"];
  g+='<g id="scMods"><text class="s ac"'+A(.4,.48)+' x="326" y="98">TODAY</text>';
  MOD.forEach(function(m,k){var y=118+k*84,a=.44+k*.035,b=a+.1;
    g+='<g class="md"'+A(a,b)+'><path class="sk dr" d="M326 '+y+'H434V'+(y+66)+'H326Z"/>';
    g+='<circle class="'+(k===0?"fa":"sa")+'" cx="344" cy="'+(y+22)+'" r="8"/>';
    g+=mob?'<path class="sk2 dr" d="M360 '+(y+19)+'H420M360 '+(y+27)+'H404"/>':'<text class="m" x="360" y="'+(y+27)+'">'+m+'</text>'; /* phones: too small to read, so plain lines */
    g+='<path class="sk2 dr" d="M336 '+(y+46)+'H424"/><path class="sa dr" d="M336 '+(y+46)+'H'+(336+88*(.25+k*.2)).toFixed(0)+'"/></g>';});
  g+='</g>';
  /* ---- step 3: caregivers randomized into two arms; then the app stores ---- */
  g+='<g id="scTrial"><text class="s"'+A(.68,.74)+' x="520" y="62">CAREGIVERS</text>';
  for(i=0;i<16;i++)g+='<circle class="dot'+(i%2?" arm2":" arm1")+'" data-i="'+i+'" r="6.5" cx="0" cy="0"/>';
  g+='<text class="s ac"'+A(.78,.84)+' x="558" y="318" text-anchor="middle">APP</text><text class="s"'+A(.78,.84)+' x="686" y="318" text-anchor="middle">CONTROL</text>';
  g+='<path class="sk2 dr"'+A(.74,.82)+' d="M622 84V300"/>';
  g+='<path class="sa dr"'+A(.84,.92)+' d="M465 400H520"/>';
  g+='<g'+A(.86,.94)+'><path class="sk dr" d="M528 360H736V420H528Z"/><text class="s" x="548" y="396">APP STORE</text></g>';
  g+='<g'+A(.89,.97)+'><path class="sk dr" d="M528 432H736V492H528Z"/><text class="s" x="548" y="468">GOOGLE PLAY</text></g>';
  g+='</g>';
  /* ---- step labels, in the band under the frame ---- */
  g+='<g id="lb1"><text class="a" x="24" y="518">TESTED INTERVENTIONS</text></g>';
  g+='<g id="lb2"><text class="a" x="24" y="518">A SELF-PACED APP</text></g>';
  g+='<g id="lb3"><text class="a" x="24" y="518">RANDOMIZED TRIAL · APP STORES</text></g>';
  return g+'</svg>';
}
function scene(){return memScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var all=$$("[data-a]",svg).map(function(el){var r=el.getAttribute("data-a").split(",");
    var ps=(el.classList.contains("dr")?[el]:[]).concat($$(".dr",el));
    var dr=ps.map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]});
    return {el:el,a:+r[0],b:+r[1],dr:dr}});
  var base=$$("#scBase .sD",svg).map(function(p){var L=p.getTotalLength();p.style.strokeDasharray=L+" "+L;return [p,L]});
  var baseT=$$("#scBase text",svg);
  var dots=$$(".dot",svg).map(function(d){var i=+d.getAttribute("data-i");
    var c=[548+(i%4)*48,96+Math.floor(i/4)*30],arm=i%2,j=Math.floor(i/2);
    var t=[(arm?664:536)+(j%2)*44,110+Math.floor(j/2)*48];return {el:d,c:c,t:t}});
  var l1=$("#lb1",svg),l2=$("#lb2",svg),l3=$("#lb3",svg),lastB=-1;
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;base.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-b)).toFixed(1)});baseT.forEach(function(t){op(t,b)})}
    all.forEach(function(E){var v=E.a<0?b:seg(p,E.a,E.b);
      E.dr.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)});
      op(E.el,b*Math.min(1,v*2.2))});
    var dIn=seg(p,.68,.76),sp=seg(p,.74,.86);
    dots.forEach(function(D,i){var x=D.c[0]+(D.t[0]-D.c[0])*sp,y=D.c[1]+(D.t[1]-D.c[1])*sp;
      D.el.setAttribute("cx",x.toFixed(1));D.el.setAttribute("cy",y.toFixed(1));op(D.el,b*Math.min(1,Math.max(0,dIn*1.6-i*.04)))});
    op(l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(l2,b*seg(p,.4,.48)*(1-seg(p,.62,.68)));op(l3,b*seg(p,.76,.84));
  };
}
