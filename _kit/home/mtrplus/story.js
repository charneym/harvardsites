/* The story scene (BL/BY/DB): how an MTR+ stimulator works (mtrplus.com product pages for DoloBravo, BioBravo, SineBravo and
   DuoBravo), drawn as ONE fine-line schematic kept on screen for all four steps: a generic two-channel handheld stimulator
   (outline only, no product branding) wired to two pairs of electrodes.
   Step 1 (Programm): the device draws in; its display steps through the programmes, P 01 is chosen.
   Step 2 (Impuls): the two channels' cables run out to four electrodes; an asymmetric, rectangular, biphasic pulse train draws.
   Step 3 (EMG): a measured EMG trace rises; when it crosses the threshold, the stimulation is triggered (EMG-triggered, ETS).
   Step 4 (Kontrolle): the real-time clock's therapy log: one bar per treatment day. */
var SCW=760,SCH=520;
function circ(cx,cy,r){return "M"+(cx-r)+" "+cy+"a"+r+" "+r+" 0 1 0 "+(2*r)+" 0a"+r+" "+r+" 0 1 0 "+(-2*r)+" 0"}
function rr(x,y,w,h,r){return "M"+(x+r)+" "+y+"H"+(x+w-r)+"Q"+(x+w)+" "+y+" "+(x+w)+" "+(y+r)+"V"+(y+h-r)+"Q"+(x+w)+" "+(y+h)+" "+(x+w-r)+" "+(y+h)+"H"+(x+r)+"Q"+x+" "+(y+h)+" "+x+" "+(y+h-r)+"V"+(y+r)+"Q"+x+" "+y+" "+(x+r)+" "+y+"Z"}
function pulses(x0,x1,y,step,up,dn){var d="M"+x0+" "+y,x=x0+8;while(x+18<x1){d+="H"+x+"V"+(y-up)+"H"+(x+5)+"V"+(y+dn)+"H"+(x+15)+"V"+y;x+=step}return d+"H"+x1}
function mtScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  if(!mob)g+='<text class="t" x="20" y="30">ZWEIKANAL-STIMULATOR, SCHEMATISCH</text>';
  /* the device, always on screen: housing, display, keypad ring */
  g+='<path class="body" d="'+rr(40,70,170,380,26)+'"/>';
  g+='<path class="edge sD" d="'+rr(40,70,170,380,26)+'"/><path class="edge sD" d="'+rr(62,104,126,128,6)+'"/>'+
     '<path class="edge sD" d="'+circ(125,338,48)+'"/><path class="edge sD" d="'+circ(125,338,18)+'"/>'+
     '<path class="ring0 sD" d="M50 410H200"/>';
  /* step 1: the display steps through the programmes; P 01 stays. Beside it, the programme grid: 12 preset, 3 free */
  g+='<g id="mtP"><text class="dsp" x="78" y="196">P</text><text class="dsp n" id="mtPn" x="172" y="196" text-anchor="end">01</text></g>';
  g+='<g id="mtTk">';for(i=0;i<12;i++){g+='<path class="tick" d="M'+(76+i*8.6)+' 128V'+(i===0?142:136)+'"/>'}g+='</g>';
  g+='<g id="mtG">';for(i=0;i<15;i++){var gx=250+(i%5)*62,gy=262+Math.floor(i/5)*54;
    g+='<path class="'+(i<12?"cell":"cell free")+'" d="M'+gx+' '+gy+'H'+(gx+50)+'V'+(gy+40)+'H'+gx+'Z"/>'+(mob||i>=12?'':'<text class="cn" x="'+(gx+25)+'" y="'+(gy+25)+'" text-anchor="middle">'+(i<9?"0":"")+(i+1)+'</text>')}
  g+='</g>';
  /* step 2: two channels, four electrodes; the cables run along the top and bottom margins, clear of every label */
  var PX=640,PY=[96,176,300,380];
  g+='<g id="mtW">'+
     '<path class="cab cA cD" d="M150 70C150 52 168 46 220 46H560C612 46 598 116 '+PX+' 116"/>'+
     '<path class="cab cA cD" d="M176 70C176 60 192 58 232 58H572C620 58 600 196 '+PX+' 196"/>'+
     '<path class="cab cB cD" d="M150 450C150 466 168 470 220 470H560C612 470 598 320 '+PX+' 320"/>'+
     '<path class="cab cB cD" d="M176 450C176 474 192 482 232 482H572C620 482 600 400 '+PX+' 400"/></g>';
  g+='<g id="mtPads">';PY.forEach(function(y,j){g+='<path class="pad '+(j<2?"pA":"pB")+'" d="'+rr(PX,y,40,40,4)+'"/>'});g+='</g>';
  g+='<g id="mtPu"><path class="base" d="M250 300H560"/><path class="pu sP" d="'+pulses(250,560,300,30,60,36)+'"/></g>';
  /* step 3: the EMG trace, the threshold, the triggered stimulation */
  var e="M250 320",x,amp,s=7;for(x=250;x<=560;x+=3){s=(s*9301+49297)%233280;var r=s/233280-.5;amp=x<380?6:x<430?6+(x-380)*.9:51-(x-430)*.12;e+="L"+x+" "+(320+r*2*amp).toFixed(1)}
  g+='<g id="mtE"><path class="thr" d="M250 284H560"/><path class="emg sE" d="'+e+'"/></g>';
  g+='<g id="mtTr"><path class="trg" d="M420 262V384"/><path class="pu2" d="'+pulses(420,560,410,24,22,12)+'"/></g>';
  /* step 4: the therapy log, one bar per treatment day */
  var hs=[60,92,74,118,104,86,132,126,98,140,150,122,136,158,146,164,152,170],bars='';
  hs.forEach(function(h,j){bars+='<path class="bar" d="M'+(262+j*16.5)+' 430V'+(430-h)+'"/>'});
  g+='<g id="mtLog"><path class="axis" d="M250 430H560"/>'+bars+'</g>';
  /* labels, per step, in the centre column above each figure, >= 8px clear of every stroke (DR3) */
  var LX=250;
  g+='<g id="mtL1"><text class="t s1" x="'+LX+'" y="'+(mob?206:212)+'">12 PROGRAMME</text><text class="t" x="'+LX+'" y="236">'+(mob?'+ 3 FREIE':'+ 3 FREI KONFIGURIERBARE')+'</text></g>';
  g+='<g id="mtL2"><text class="t s2" x="'+LX+'" y="196">'+(mob?'BIPHASISCH':'BIPHASISCH · RECHTECKIG')+'</text><text class="t" x="'+LX+'" y="'+(mob?390:384)+'">'+(mob?'OHNE GLEICHSTROM':'OHNE GLEICHSTROMANTEIL')+'</text></g>';
  g+='<g id="mtL3"><text class="t s2" x="'+LX+'" y="'+(mob?250:256)+'">'+(mob?'EMG':'EMG · SCHWELLE')+'</text><text class="t s1" x="'+LX+'" y="'+(mob?418:414)+'">'+(mob?'STIM':'STIMULATION')+'</text></g>';
  g+='<g id="mtL4"><text class="t s2" x="'+LX+'" y="'+(mob?220:212)+'">'+(mob?'RTC-SPEICHER':'REAL TIME CLOCK')+'</text>'+(mob?'':'<text class="t" x="'+LX+'" y="236">JEDE SITZUNG, MIT DATUM</text>')+'</g>';
  /* step captions */
  g+='<g id="lb1"><text class="a" x="20" y="508">1 · PROGRAMM</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="508">2 · IMPULS</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="508">3 · BIOFEEDBACK</text></g>';
  g+='<g id="lb4"><text class="a" x="20" y="508">4 · KONTROLLE</text></g>';
  return g+'</svg>';
}
function scene(){return mtScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),body:$(".body",svg),P:$("#mtP",svg),G:$("#mtG",svg),cells:$$("#mtG .cell",svg),Pn:$("#mtPn",svg),tk:$("#mtTk",svg),W:$("#mtW",svg),cab:dl(".cD"),pads:$$(".pad",svg),
    pu:$("#mtPu",svg),pul:dl(".sP"),E:$("#mtE",svg),emg:dl(".sE"),tr:$("#mtTr",svg),log:$("#mtLog",svg),bars:$$(".bar",svg),
    L1:$("#mtL1",svg),L2:$("#mtL2",svg),L3:$("#mtL3",svg),L4:$("#mtL4",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg),t0:svg.querySelector("text.t")};
  var lastB=-1,lastN="";
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);op(E.t0,b)}
    op(E.body,b);
    /* step 1: the display counts through the programmes and settles on P 01 */
    var c=seg(p,.03,.17),n=c<1?(1+Math.floor(c*11.99)):1,ns=(n<10?"0":"")+n;if(E.Pn&&ns!==lastN){lastN=ns;E.Pn.textContent=ns}
    op(E.P,b*seg(p,.02,.05));op(E.G,b*seg(p,.03,.07)*(1-seg(p,.23,.26)));
    E.cells.forEach(function(c,i){c.classList.toggle("on",i===n-1)});op(E.tk,b*seg(p,.02,.06)*(1-.6*seg(p,.24,.28)));
    op(E.L1,b*seg(p,.04,.1)*(1-seg(p,.22,.25)));
    /* step 2: cables, pads, the pulse train */
    op(E.W,b);draw(E.cab,b*seg(p,.27,.38));
    E.pads.forEach(function(t,i){op(t,b*seg(p,.33+i*.015,.37+i*.015))});
    op(E.pu,b*seg(p,.28,.31)*(1-seg(p,.48,.51)));draw(E.pul,b*seg(p,.3,.45));
    op(E.L2,b*seg(p,.3,.36)*(1-seg(p,.47,.5)));
    /* step 3: EMG trace, the threshold, the triggered burst */
    op(E.E,b*seg(p,.52,.55)*(1-seg(p,.73,.76)));draw(E.emg,b*seg(p,.53,.66));
    op(E.tr,b*seg(p,.63,.67)*(1-seg(p,.73,.76)));
    op(E.L3,b*seg(p,.55,.61)*(1-seg(p,.72,.75)));
    /* step 4: the log fills, day by day */
    op(E.log,b*seg(p,.77,.8));
    E.bars.forEach(function(t,i){op(t,b*seg(p,.79+i*.009,.82+i*.009))});
    op(E.L4,b*seg(p,.79,.85));
    op(E.l1,b*seg(p,0,.05)*(1-seg(p,.22,.25)));op(E.l2,b*seg(p,.27,.32)*(1-seg(p,.47,.5)));op(E.l3,b*seg(p,.52,.57)*(1-seg(p,.72,.75)));op(E.l4,b*seg(p,.77,.82));
  };
}
