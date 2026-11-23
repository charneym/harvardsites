/* The story scene (DB/BY): HelpWear's own "Detect + Treat = Protect" (helpwear.ca Product and Patients pages), drawn as ONE
   fine-line scene that stays on screen: an upper arm wearing the HeartWatch on the bicep, the ECG it records running out
   to the right, and a day 0 to day 180 coverage line beneath. Frame 0 is already complete (arm, band, trace).
   Step 1 (detect): the device lights; an irregular stretch of the trace (atrial fibrillation) is picked out in the logo cyan.
   Step 2 (treat): the finding leads to a guideline-driven treatment (oral anticoagulants after a cryptogenic stroke).
   Step 3 (protect): the coverage line draws from day 0 to day 180, past where patch monitors stop (15-30 days).
   Everything is driven by the scrubbed progress. */
var SCW=760,SCH=560;
var ARM_O="M150 26C118 40 96 66 88 104C80 142 80 196 84 250C88 320 96 400 104 470C108 498 110 514 112 526";
var ARM_T="M150 26C190 14 238 18 262 40C284 52 300 58 318 60";
var ARM_I="M270 150C268 200 270 240 270 270C270 330 260 400 248 460C243 488 240 510 238 526";
var DELT="M262 40C274 70 276 110 270 150";
var BAND_T="M84 248C140 262 214 262 270 248",BAND_B="M87 320C142 334 214 334 268 320";
var MOD="M142 238H212Q224 238 224 250V318Q224 330 212 330H142Q130 330 130 318V250Q130 238 142 238Z";
var GLYPH="M161 284h7l3-8 4 15 4-11 3 4h7";
var TX0=300,TX1=740,TY=284,TA=56,TP=62,AF0=470.5,AF1=612,AFR=[492,527,548,585];
function ecgU(u){u=u-Math.floor(u);
  if(u<.1)return 0;if(u<.2)return -.09*Math.sin((u-.1)/.1*Math.PI);if(u<.26)return 0;
  if(u<.29)return .12*((u-.26)/.03);if(u<.33)return .12-1.12*((u-.29)/.04);if(u<.37)return -1+1.32*((u-.33)/.04);
  if(u<.4)return .32-.32*((u-.37)/.03);if(u<.52)return 0;if(u<.7)return -.2*Math.sin((u-.52)/.18*Math.PI);return 0}
function qrs(d){if(d<-6||d>6)return 0;if(d<-4)return .12*((d+6)/2);if(d<0)return .12-1.12*((d+4)/4);if(d<4)return -1+1.32*(d/4);return .32-.32*((d-4)/2)}
function ecgY(x){var v;
  if(x>=AF0&&x<=AF1){var e=Math.max(0,Math.min(1,(x-AF0)/8,(AF1-x)/8));v=e*(.045*Math.sin(x*.9)+.03*Math.sin(x*1.7+1));AFR.forEach(function(r){v+=qrs(x-r)})}
  else if(x<AF0)v=ecgU((x-TX0)/TP);else v=ecgU((x-AF1)/TP+.75);
  return TY+TA*v}
function ecgPath(a,b){var s="";for(var x=a;x<=b+.01;x+=1){s+=(x===a?"M":"L")+x.toFixed(1)+" "+ecgY(x).toFixed(1)}return s}
var TL0=TX0,TL1=TX1,TLY=470,D30=TL0+(TL1-TL0)*30/180;
function storyScene(o){
  var g='',mob=o.mob,cx=(AF0+AF1)/2;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'50 0 712 560':'40 0 720 560')+'" aria-hidden="true">';
  g+='<defs><radialGradient id="gled"><stop offset="0" stop-color="#5cc4ef" stop-opacity=".7"/><stop offset="1" stop-color="#5cc4ef" stop-opacity="0"/></radialGradient></defs>';
  g+='<g id="scBase">';
  g+='<path class="wl sD" d="'+ARM_O+'"/><path class="wl sD" d="'+ARM_T+'"/><path class="wl sD" d="'+ARM_I+'"/><path class="wo sD" d="'+DELT+'"/>';
  g+='<path class="wmd sD" d="'+BAND_T+'"/><path class="wmd sD" d="'+BAND_B+'"/>';
  g+='<path class="mod sD" d="'+MOD+'"/><circle class="wmd sD" cx="177" cy="284" r="18"/><path class="wmd sD" d="'+GLYPH+'"/>';
  g+='<path class="tr sD" d="'+ecgPath(TX0,TX1)+'"/>';
  g+='</g>';
  g+='<circle id="led" cx="177" cy="284" r="46" fill="url(#gled)"/>';
  /* step 1: the irregular stretch picked out */
  g+='<path id="afHi" class="afh" d="'+ecgPath(AF0,AF1)+'"/>';
  g+='<g id="lAf"><path class="ld" d="M'+AF0+' 214V206H'+AF1+'V214"/><text class="t a2" x="'+cx+'" y="'+(mob?190:194)+'" text-anchor="middle">'+(mob?'AF DETECTED':'ATRIAL FIBRILLATION')+'</text></g>';
  /* step 2: the treatment it informs */
  g+='<g id="lTx"><path class="ld" d="M'+cx+' 314V346"/><text class="t" x="'+cx+'" y="'+(mob?378:366)+'" text-anchor="middle">'+(mob?'ANTICOAGULANTS':'ORAL ANTICOAGULANTS')+'</text>'+(mob?'':'<text class="t q" x="'+cx+'" y="384" text-anchor="middle">TO PREVENT A SECONDARY STROKE</text>')+'</g>';
  /* step 3: coverage from day 0 to day 180 */
  g+='<g id="tl"><path class="wo" d="M'+TL0+' '+TLY+'H'+TL1+'"/><path class="wo" d="M'+TL0+' '+(TLY-6)+'V'+(TLY+6)+'M'+TL1+' '+(TLY-6)+'V'+(TLY+6)+'"/>'+
     '<path class="pt" d="M'+D30.toFixed(1)+' '+(TLY-10)+'V'+(TLY+10)+'"/>'+
     '<text class="t" x="'+TL0+'" y="'+(TLY+(mob?40:28))+'">DAY 0</text><text class="t" x="'+TL1+'" y="'+(TLY+(mob?40:28))+'" text-anchor="end">DAY 180</text>'+
     (mob?'':'<text class="t q" x="'+(D30+10).toFixed(1)+'" y="'+(TLY+28)+'">PATCHES STOP AT 15&#8211;30 DAYS</text>')+'</g>';
  g+='<path id="tlFill" class="tlf" d="M'+TL0+' '+TLY+'H'+TL1+'"/>';
  g+='<text id="tlLab" class="t a2" x="'+TL1+'" y="'+(TLY-(mob?22:16))+'" text-anchor="end">'+(mob?'UP TO 180 DAYS':'THE HEARTWATCH · UP TO 180 DAYS')+'</text>';
  /* the device label */
  if(!mob)g+='<g id="lDev"><path class="ld" d="M226 240L296 152"/><text class="t" x="306" y="146">THE HEARTWATCH</text><text class="t q" x="306" y="164">WORN ON THE BICEP</text></g>';
  else g+='<g id="lDev"></g>';
  if(!mob){var ly=SCH-4,lx=40;
    g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">MEDICAL-GRADE ECG, RECORDED WITHOUT ADHESIVE</text></g>';
    g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">CLINICALLY ACTIONABLE REPORTS GUIDE TREATMENT</text></g>';
    g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">MONITORING FROM DAY 0 THROUGH DIAGNOSIS</text></g>';
  }else g+='<g id="lb1"></g><g id="lb2"></g><g id="lb3"></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),af:dl("#afHi"),fill:dl("#tlFill"),led:$("#led",svg),lAf:$("#lAf",svg),lTx:$("#lTx",svg),tl:$("#tl",svg),tlLab:$("#tlLab",svg),lDev:$("#lDev",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var s1=seg(p,.04,.3),s3=seg(p,.68,.92);
    op(E.lDev,b);
    /* 1. detect: the device lights, the AF stretch draws in cyan */
    op(E.led,b*(.25+.75*seg(p,.04,.14))*(1-.6*s3));
    draw(E.af,b*s1);
    op(E.lAf,b*seg(p,.22,.32));
    /* 2. treat */
    op(E.lTx,b*seg(p,.4,.52));
    /* 3. protect: the coverage line */
    op(E.tl,b*seg(p,.64,.72));
    draw(E.fill,b*s3);
    op(E.tlLab,b*seg(p,.84,.92));
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}
