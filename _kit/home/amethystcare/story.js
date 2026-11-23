/* The story scene (BL/BY/DB): a day with Amethyst Care, as ONE continuous drawing: the voice device on a table, the
   reply waveform above it, the week's pill organiser beside it and a family member's phone. Step 1, check-in: the
   device speaks (sound arcs, LED ring) and the reply is drawn as a voice waveform. Step 2, medication: today's
   compartment lights and is ticked as the reply confirms it. Step 3, listening: the waveform runs on across the days
   and a contour traces the speech pattern. Step 4, alerts: a link draws to the phone, which shows the notification and
   the long-term trend. Source: amethystcare.ie (Home, About, Solution); the phone message is their own app mock-up's.
   Labels sit one at a time in the clear band at the top (DR3). Driven by the scrubbed progress. */
var SCW=760,SCH=520;
var AMW=(function(){var a=[],x,s=7,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff};
  for(x=40;x<=500;x+=2.5){var u=(x-40)/460,env=Math.max(0,Math.sin(u*Math.PI*7.3+.4))*.75+.25*Math.max(0,Math.sin(u*Math.PI*2.1));env=Math.pow(env,1.4);a.push([x,env*(.55+.45*R())])}return a})();
function amWave(){var d="",i,y0=200;AMW.forEach(function(p,i){var y=y0+(i%2?1:-1)*p[1]*38;d+=(i?"L":"M")+p[0].toFixed(1)+" "+y.toFixed(1)});return d}
function amCont(){var d="",y0=200;for(var i=0;i<AMW.length;i+=3){var a=0,n=0;for(var j=Math.max(0,i-4);j<Math.min(AMW.length,i+5);j++){a+=AMW[j][1];n++}d+=(i?"L":"M")+AMW[i][0].toFixed(1)+" "+(y0-6-a/n*40).toFixed(1)}return d}
function amScene(o){
  var g='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">',i;
  g+='<defs><pattern id="amGr" width="6" height="4" patternUnits="userSpaceOnUse"><circle cx="1.5" cy="1" r=".9" fill="#2d2c4e"/><circle cx="4.5" cy="3" r=".9" fill="#2d2c4e"/></pattern></defs>';
  /* table */
  g+='<path class="tb sD" d="M24 432H736"/>';
  /* the device: wall, top, LED ring, grille, icons */
  g+='<path class="dw" d="M90 372V388A120 42 0 0 0 330 388V372"/><path class="dwl sD" d="M90 372V388A120 42 0 0 0 330 388V372"/>';
  g+='<ellipse class="dt" cx="210" cy="372" rx="120" ry="42"/><ellipse class="dtl sD" cx="210" cy="372" rx="120" ry="42"/>';
  g+='<ellipse class="gr" cx="210" cy="372" rx="84" ry="28"/><ellipse class="grl" cx="210" cy="372" rx="88" ry="30"/>';
  g+='<ellipse class="led0" cx="210" cy="372" rx="111" ry="38.5"/><ellipse class="led" id="amLed" cx="210" cy="372" rx="111" ry="38.5"/>';
  g+='<path class="ico" d="M210 337.5v4M206.4 339.6a5 4 0 1 0 7.2 0"/>';
  /* sound arcs from the device (it speaks) */
  g+='<g id="amArc">';[28,48,68].forEach(function(r,k){g+='<path class="arc" d="M'+(210-r*.87).toFixed(1)+' '+(318-r*.5).toFixed(1)+'A'+r+' '+r+' 0 0 1 '+(210+r*.87).toFixed(1)+' '+(318-r*.5).toFixed(1)+'"/>'});g+='</g>';
  /* the reply: voice waveform on its axis, and the speech-pattern contour */
  g+='<path class="ax sD" d="M40 200H500"/>';
  g+='<path class="wv" id="amWv" d="'+amWave()+'"/>';
  g+='<path class="ct" id="amCt" d="'+amCont()+'"/>';
  /* pill organiser: seven compartments, today lit and ticked */
  g+='<path class="pb sD" d="M372 432V404H572V432M372 410H572"/>';
  var pd="";for(i=1;i<7;i++)pd+="M"+(372+i*200/7).toFixed(1)+" 404V432";g+='<path class="pb sD" d="'+pd+'"/>';
  g+='<rect class="pf" id="amPf" x="'+(372+2*200/7+3).toFixed(1)+'" y="413" width="'+(200/7-6).toFixed(1)+'" height="16"/>';
  g+='<path class="tk" id="amTk" d="M'+(372+2*200/7+8).toFixed(1)+' 390l5 5 9 -10"/>';
  /* the link to the family phone, a dot travelling along it */
  g+='<path class="lk" id="amLk" d="M326 352C420 344 500 300 578 300"/><circle class="lkd" id="amLd" r="4"/>';
  /* phone */
  g+='<rect class="ph sD" x="580" y="150" width="140" height="252" rx="16"/><rect class="phs" x="588" y="166" width="124" height="222" rx="6"/>';
  g+='<g id="amNt"><rect class="nt" x="594" y="190" width="112" height="70"/><text class="n1" x="604" y="211">AMETHYST CARE</text><text class="n2" x="604" y="232">Your mum is doing</text><text class="n2" x="604" y="247">fine today</text></g>';
  g+='<path class="pax" d="M604 362H696"/><path class="tr" id="amTr" d="M604 340L619 334L634 342L649 326L664 330L679 318L696 322"/>';
  /* labels, one at a time, in the clear band at the top */
  function lab(id,a,t){return '<g id="'+id+'"><text class="a" x="40" y="84">'+a+'</text><text class="t" x="40" y="110">'+t+'</text></g>'}
  g+=lab("lb1","DAILY CHECK-IN","“HOW ARE YOU FEELING TODAY?”");
  g+=lab("lb2","MEDICATION REMINDER","CONFIRMED BY VOICE");
  g+=lab("lb3","VOICE BIOMARKERS","CHANGES IN SPEECH PATTERNS");
  g+=lab("lb4","ALERTS AND INSIGHTS",o.mob?"FAMILY AND CLINICIANS":"FOR FAMILY AND CLINICIANS, IN REAL TIME");
  return g+'</svg>';
}
function scene(){return amScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var q=function(s){return $(s,svg)};
  var E={base:dl(".sD"),wv:dl("#amWv")[0],ct:dl("#amCt")[0],tk:dl("#amTk")[0],lk:dl("#amLk")[0],tr:dl("#amTr")[0],
    ld:q("#amLd"),led:q("#amLed"),arc:$$("#amArc .arc",svg),pf:q("#amPf"),nt:q("#amNt"),lb:[q("#lb1"),q("#lb2"),q("#lb3"),q("#lb4")]};
  var lastB=-1,lkP=E.lk[0];
  function draw(a,v){a[0].style.strokeDashoffset=(a[1]*(1-Math.max(0,Math.min(1,v)))).toFixed(1)}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function fr(x){return x-Math.floor(x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;E.base.forEach(function(a){draw(a,b)})}
    /* speaking: steps 1 and 2 */
    var sp=b*Math.max(seg(p,.0,.04)*(1-seg(p,.2,.24)),seg(p,.27,.31)*(1-seg(p,.4,.44)));
    E.arc.forEach(function(el,i){var k=fr(p*14-i/3);op(el,sp*(.25+.75*Math.sin(Math.PI*k)))});
    op(E.led,b*(.35+.65*Math.max(sp,seg(p,.76,.8))));
    /* the reply waveform: drawn in step 1 to the middle, completed in step 3; the contour in step 3 */
    draw(E.wv,b*(.5*sm2(seg(p,.08,.22))+.5*sm2(seg(p,.52,.68))));
    draw(E.ct,b*sm2(seg(p,.58,.72)));
    /* medication: today lit and ticked */
    op(E.pf,b*sm2(seg(p,.3,.36)));draw(E.tk,b*sm2(seg(p,.38,.46)));
    /* alerts: the link draws, a dot carries the message, the phone shows it and the trend */
    var lv=sm2(seg(p,.77,.86));draw(E.lk,b*lv);
    var dk=seg(p,.8,.9);if(lkP&&dk>0&&dk<1){var pt=lkP.getPointAtLength(E.lk[1]*dk);E.ld.setAttribute("cx",pt.x.toFixed(1));E.ld.setAttribute("cy",pt.y.toFixed(1));op(E.ld,b*Math.sin(Math.PI*dk))}else op(E.ld,0);
    op(E.nt,b*sm2(seg(p,.88,.93)));draw(E.tr,b*sm2(seg(p,.9,.98)));
    /* labels: one at a time */
    E.lb.forEach(function(el,i){var a=i*.25;op(el,b*seg(p,a+(i?.02:0)-(i?0:1),a+(i?.06:0))*(1-(i<3?seg(p,a+.21,a+.24):0)))});
  };
}
function sm2(x){return x*x*(3-2*x)}
