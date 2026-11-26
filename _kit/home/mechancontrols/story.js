/* The story scene (BL/BY/DB): the SafeLine SL4 grabwire as described on mechancontrols.com > SafeLine 4, drawn as ONE side
   elevation of a conveyor kept on screen for all three steps:
   Step 1 (Tension): the wire rope draws along the line from the SL4 to the anchor; the tensioner clamps it; the conveyor runs.
   Step 2 (Pull): the rope is pulled mid-line; the safety contacts open (positive mechanical linkage, IEC 60947-5-1); the line stops.
   Step 3 (Reset): released, the rope is straight again but the SL4 stays latched until the blue reset switch is turned to RUN
   (ISO 13850); the contacts close and the line runs. Schematic, not to scale. */
var SCW=760,SCH=520;
function mcScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  /* the conveyor: belt, end drums, idlers, legs */
  g+='<path class="sD bt" d="M78 312H682A18 18 0 0 1 682 348H78A18 18 0 0 1 78 312Z"/>';
  g+='<circle class="sD" cx="78" cy="330" r="12"/><circle class="sD" cx="682" cy="330" r="12"/>';
  for(i=0;i<6;i++){g+='<circle class="sD id" cx="'+(170+i*84)+'" cy="330" r="7"/>'}
  g+='<path class="sD lg" d="M110 348V430M650 348V430M90 430H130M630 430H670M110 392H650"/>';
  g+='<text class="t" x="'+(mob?150:150)+'" y="462">CONVEYOR</text>';
  /* the cartons riding the belt (moved by the timeline while the line runs) */
  g+='<defs><clipPath id="mcBelt"><path d="M70 200H690V312H70Z"/></clipPath></defs><g clip-path="url(#mcBelt)"><g id="crt">';for(i=-1;i<5;i++){var cx=96+i*150;g+='<path class="box" d="M'+cx+' 268H'+(cx+64)+'V312H'+cx+'Z"/><path class="boxl" d="M'+(cx+22)+' 268V280H'+(cx+42)+'V268"/>'}g+='</g></g>';
  /* the anchor post at the far end, its eyebolt */
  g+='<path class="sD" d="M724 120V440M708 440H740"/><circle class="sD" cx="712" cy="150" r="7"/>';
  /* the wire rope (step 1 draws it; step 2 pulls it into a V) */
  g+='<path class="rope" id="rope" d="M140 150L400 150L705 150"/>';
  g+='<g id="tns"><path class="tool" d="M156 142H190V158H156Z"/>'+(mob?'':'<text class="t" x="150" y="128">TENSIONER</text>')+'</g>';
  if(!mob)g+='<g id="wr"><text class="t" x="520" y="134">WIRE ROPE</text></g>';
  /* the SL4 itself: housing, eyebolt, red e-stop, blue reset switch, tension indicator */
  g+='<path class="sl" d="M28 112H122V194H28Z"/><circle class="sDk" cx="131" cy="150" r="7"/><path class="sDk" d="M122 150H124"/>';
  g+='<path class="es" d="M54 112C54 92 92 92 92 112Z"/><path class="sDk" d="M60 112H86"/>';
  g+='<g id="knob"><circle class="kn" cx="58" cy="158" r="14"/><path class="knp" d="M58 158V173"/></g>';
  g+='<text class="t k" x="'+(mob?40:42)+'" y="'+(mob?228:224)+'">OFF</text><text class="t k" x="'+(mob?84:82)+'" y="'+(mob?228:224)+'">RUN</text>';
  g+='<path class="win" id="win" d="M94 128H112V140H94Z"/>';
  g+='<text class="t" x="28" y="'+(mob?262:256)+'">SAFELINE SL4</text>';
  /* the safety contacts (a normally-closed pair) */
  g+='<g id="ctc"><text class="t" x="'+(mob?240:250)+'" y="40">'+(mob?"CONTACTS":"SAFETY CONTACTS")+'</text>'+
     '<circle class="ct" cx="'+(mob?262:272)+'" cy="74" r="4.5"/><circle class="ct" cx="'+(mob?332:342)+'" cy="74" r="4.5"/>'+
     '<path class="cb" id="cbar" d="M'+(mob?262:272)+' 74H'+(mob?332:342)+'"/></g>';
  /* the pull, mid-line */
  g+='<g id="pull"><path class="ar" d="M400 214V258M392 248L400 260L408 248"/><text class="t s1" x="414" y="246">PULL</text></g>';
  /* line status, top right */
  var sx=mob?470:520;
  g+='<g id="st1"><circle class="dot g" cx="'+sx+'" cy="70" r="6"/><text class="a" x="'+(sx+16)+'" y="75">RUNNING</text></g>';
  g+='<g id="st2"><circle class="dot r" cx="'+sx+'" cy="70" r="6"/><text class="a" x="'+(sx+16)+'" y="75">STOPPED</text></g>';
  g+='<g id="st3"><circle class="dot r" cx="'+sx+'" cy="70" r="6"/><text class="a" x="'+(sx+16)+'" y="75">LATCHED</text></g>';
  g+='<g id="st4"><circle class="dot g" cx="'+sx+'" cy="70" r="6"/><text class="a" x="'+(sx+16)+'" y="75">RUNNING</text></g>';
  /* step captions */
  g+='<g id="lb1"><text class="a" x="'+(mob?420:470)+'" y="500">1 · TENSION</text></g>';
  g+='<g id="lb2"><text class="a" x="'+(mob?420:470)+'" y="500">2 · PULL</text></g>';
  g+='<g id="lb3"><text class="a" x="'+(mob?420:470)+'" y="500">3 · RESET</text></g>';
  return g+'</svg>';
}
function scene(){return mcScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var q=function(s){return svg.querySelector(s)};
  var E={base:dl(".sD"),texts:$$("text.t",svg).filter(function(t){return !t.closest("g[id]")}),solid:$$(".sl,.es,.sDk,.win,#knob",svg),
    rope:q("#rope"),tns:q("#tns"),wr:q("#wr"),crt:q("#crt"),knob:q("#knob"),win:q("#win"),ctc:q("#ctc"),cbar:q("#cbar"),pull:q("#pull"),
    s1:q("#st1"),s2:q("#st2"),s3:q("#st3"),s4:q("#st4"),l1:q("#lb1"),l2:q("#lb2"),l3:q("#lb3")};
  var RL=E.rope.getTotalLength();E.rope.style.strokeDasharray=(RL+40)+" "+(RL+40);
  var cb=E.cbar.getAttribute("d").match(/M(\d+) (\d+)/),cbx=+cb[1],cby=+cb[2];
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function tr(el,s){if(el)el.setAttribute("transform",s)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.texts.forEach(function(e){op(e,b)});E.solid.forEach(function(e){op(e,b)});op(E.crt,b);op(E.ctc,b)}
    /* step 1: the rope draws out from the SL4 to the anchor, the tensioner clamps it, the indicator reads tensioned */
    var rd=seg(p,.02,.16);E.rope.style.strokeDashoffset=((RL+40)*(1-rd)).toFixed(1);op(E.rope,b);
    op(E.tns,b*seg(p,.14,.2));op(E.wr,b*seg(p,.16,.22));
    var tens=seg(p,.18,.24);
    /* step 2: pulled mid-line into a V, then released (straight again) */
    var pl=seg(p,.4,.48)*(1-seg(p,.6,.67)),dy=pl*58;
    E.rope.setAttribute("d","M140 150L400 "+(150+dy).toFixed(1)+"L705 150");
    op(E.pull,b*seg(p,.4,.45)*(1-seg(p,.58,.63)));tr(E.pull,"translate(0 "+(dy-58).toFixed(1)+")");
    /* the contacts open at the trip and stay open (latched) until the reset */
    var trip=seg(p,.46,.5),rst=seg(p,.76,.82),open=trip*(1-rst);
    tr(E.cbar,"rotate("+(28*open).toFixed(2)+" "+cbx+" "+cby+")");
    /* the blue reset switch: RUN at rest, OFF when tripped, turned back to RUN */
    var ang=-45+90*open;tr(E.knob,"rotate("+ang.toFixed(1)+" 58 158)");
    E.win.style.fill=open>.5?"#d23a2e":(tens>.5?"#5bb8ea":"transparent");
    /* the line runs, stops at the trip, runs again after the reset (cartons ride the belt) */
    var run=180*seg(p,.12,.46)+120*seg(p,.82,1);tr(E.crt,"translate("+(run%150).toFixed(1)+" 0)");
    op(E.s1,b*seg(p,.2,.26)*(1-seg(p,.46,.5)));op(E.s2,b*seg(p,.48,.52)*(1-seg(p,.6,.64)));op(E.s3,b*seg(p,.62,.66)*(1-seg(p,.8,.84)));op(E.s4,b*seg(p,.82,.86));
    op(E.l1,b*seg(p,0,.06)*(1-seg(p,.33,.38)));op(E.l2,b*seg(p,.36,.42)*(1-seg(p,.64,.69)));op(E.l3,b*seg(p,.68,.74));
  };
}
