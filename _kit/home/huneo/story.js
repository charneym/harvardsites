/* The story scene (BL/BY/DB): a night with the WRAP System (huneo.us > WRAP System), drawn as ONE fine-line schematic
   kept on screen for all four steps:
   Step 1 (Apply): the modular montage, self-applied: head, chest and leg modules and the finger sensor, overseen live.
   Step 2 (Record): each position records its signals (EEG at the head, ECG at the chest, EMG at the leg, oximetry at the finger).
   Step 3 (Stream): the signals stream in real time to the Huneo Health Portal; the study is monitored live.
   Step 4 (Score): automated scoring in the portal (a schematic sleep-stage trace, not patient data). */
var SCW=760,SCH=520;
var HN_ROWS=[["HEAD","EEG",96],["CHEST","ECG",196],["LEG","EMG",296],["FINGER","SpO₂",396]];
function hnTrace(k,cy){
  var d="",x,y,y0=cy+10;
  for(x=124;x<=486;x+=3){
    var t=x-124;
    if(k===0)y=y0+5*Math.sin(t*.21)+3*Math.sin(t*.53+1)+2*Math.sin(t*1.31+2);
    else if(k===1){var m=t%62;y=y0+(m>26&&m<30?-(m-26)*5:m>=30&&m<34?-20+(m-30)*7.5:m>=34&&m<38?8-(m-34)*2:0)+(m>44&&m<56?-3*Math.sin((m-44)/12*Math.PI):0)}
    else if(k===2){var b=(t%90)<34?1:0;y=y0+(b?7*Math.sin(t*1.7)*Math.sin((t%90)/34*Math.PI):1.2*Math.sin(t*1.1))}
    else{var p=(t%48)/48;y=y0-(p<.3?Math.sin(p/.3*Math.PI/2)*11:11*Math.exp(-(p-.3)*4.2)*(1+.25*Math.sin((p-.3)*18)))+4}
    d+=(d?"L":"M")+x+" "+y.toFixed(1);
  }
  return d;
}
function pod(x,y){return "M"+(x+14)+" "+y+"H"+(x+52)+"Q"+(x+66)+" "+y+" "+(x+66)+" "+(y+14)+"V"+(y+38)+"Q"+(x+66)+" "+(y+52)+" "+(x+52)+" "+(y+52)+"H"+(x+14)+"Q"+x+" "+(y+52)+" "+x+" "+(y+38)+"V"+(y+14)+"Q"+x+" "+y+" "+(x+14)+" "+y+"Z"}
function hnScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  if(!mob)g+='<text class="t" x="20" y="30">WRAP SYSTEM, SCHEMATIC</text>';
  /* step 1: the four positions of the montage */
  g+='<g id="hnP">';
  HN_ROWS.forEach(function(r,i){var cy=r[2];
    g+=(i<3?'<path class="edge sP" d="'+pod(30,cy-26)+'"/><path class="mk sP" d="M50 '+(cy-6)+'Q45 '+cy+' 50 '+(cy+8)+'M58 '+(cy-9)+'Q52 '+cy+' 58 '+(cy+11)+'"/>':
      '<path class="edge sP" d="M44 '+(cy-24)+'H70Q78 '+(cy-24)+' 78 '+(cy-16)+'V'+(cy+20)+'Q78 '+(cy+28)+' 70 '+(cy+28)+'H52Q44 '+(cy+28)+' 44 '+(cy+20)+'Z"/><path class="mk sP" d="M78 '+cy+'H96"/>');
  });
  g+='</g>';
  /* step 2: what each position records */
  g+='<g id="hnS">';
  HN_ROWS.forEach(function(r,i){g+='<path class="trace sT" d="'+hnTrace(i,r[2])+'"/>'});
  g+='</g>';
  g+='<g id="hnN">';
  HN_ROWS.forEach(function(r){g+='<text class="t s2" x="124" y="'+(r[2]-18)+'">'+r[0]+' · '+r[1]+'</text>'});
  g+='</g>';
  /* step 3: the stream to the portal */
  g+='<g id="hnW"><path class="edge sW" d="M540 56H736V444H540Z"/><path class="edge sW" d="M540 92H736"/>'+
     '<text class="t" x="552" y="80">'+(mob?'PORTAL':'HEALTH PORTAL')+'</text><circle class="live" cx="722" cy="74" r="5"/></g>';
  g+='<g id="hnL">';
  HN_ROWS.forEach(function(r){g+='<path class="beam sL" d="M490 '+(r[2]+10)+'H540"/>'});
  g+='</g>';
  /* step 4: scoring, a schematic sleep-stage trace inside the portal */
  var LV={W:150,R:190,N1:230,N2:270,N3:310};
  g+='<g id="hnH">';
  ["W","R","N1","N2","N3"].forEach(function(k){g+='<text class="t ax" x="556" y="'+(LV[k]+4)+'">'+k+'</text>'});
  g+='<path class="hyp sH" d="M590 150H604V230H614V270H632V310H650V270H660V190H676V270H690V310H702V270H712V190H726"/></g>';
  /* labels, per step, >= 8px clear of every stroke (DR3) */
  g+='<g id="hnL1"><text class="t s2" x="124" y="'+(mob?470:466)+'">'+(mob?'SELF-APPLIED':'SELF-APPLIED · OVERSEEN LIVE')+'</text></g>';
  g+='<g id="hnL3"><text class="t s2" x="552" y="'+(mob?402:396)+'">'+(mob?'LIVE':'STREAMING LIVE')+'</text></g>';
  g+='<g id="hnL4"><text class="t s2" x="552" y="'+(mob?402:396)+'">'+(mob?'SCORED':'AUTOMATED SCORING')+'</text></g>';
  /* step captions */
  g+='<g id="lb1"><text class="a" x="20" y="508">1 · APPLY</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="508">2 · RECORD</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="508">3 · STREAM</text></g>';
  g+='<g id="lb4"><text class="a" x="20" y="508">4 · SCORE</text></g>';
  return g+'</svg>';
}
function scene(){return hnScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={P:$("#hnP",svg),pE:dl(".sP"),S:$("#hnS",svg),tE:dl(".sT"),N:$("#hnN",svg),W:$("#hnW",svg),wE:dl(".sW"),wT:$$("#hnW text,#hnW circle",svg),
    Lk:$("#hnL",svg),H:$("#hnH",svg),hE:dl(".sH"),hT:$$("#hnH text",svg),
    L1:$("#hnL1",svg),L3:$("#hnL3",svg),L4:$("#hnL4",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg),t0:svg.querySelector("text.t")};
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    op(E.t0,b);
    /* step 1: the four positions draw in, one after the other */
    op(E.P,b);E.pE.forEach(function(a,i){var k=Math.floor(i/2)*.035;draw([a],b*seg(p,k,k+.08))});
    op(E.L1,b*seg(p,.06,.12)*(1-seg(p,.22,.25)));
    /* step 2: each position records its signal, and its name appears */
    op(E.S,b);E.tE.forEach(function(a,i){draw([a],b*seg(p,.27+i*.035,.39+i*.035))});
    op(E.N,b*seg(p,.27,.33));
    /* step 3: the portal and the live links */
    op(E.W,b);draw(E.wE,b*seg(p,.51,.6));E.wT.forEach(function(t){op(t,b*seg(p,.57,.62))});
    op(E.Lk,b*seg(p,.58,.66));
    op(E.L3,b*seg(p,.6,.66)*(1-seg(p,.72,.75)));
    /* step 4: scoring */
    op(E.H,b);E.hT.forEach(function(t,i){op(t,b*seg(p,.77+i*.01,.81+i*.01))});draw(E.hE,b*seg(p,.79,.92));
    op(E.L4,b*seg(p,.84,.9));
    op(E.l1,b*seg(p,0,.05)*(1-seg(p,.22,.25)));op(E.l2,b*seg(p,.27,.32)*(1-seg(p,.47,.5)));op(E.l3,b*seg(p,.52,.57)*(1-seg(p,.72,.75)));op(E.l4,b*seg(p,.77,.82));
  };
}
