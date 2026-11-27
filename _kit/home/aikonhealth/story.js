/* The story scene (BL/BY/DB): what continuous monitoring changes after discharge, drawn as ONE timeline kept on screen
   for all three steps (aikonhealth.com /solution: readmission after initial treatment, often from inaccurately titrated
   medication; the wearable measures "thoracic fluid overload, cardiac output and stroke volume"; "Digital Biomarkers,
   characteristic of heart failure, can provide indicators of early deterioration and can help Clinicians in identifying
   patients for intervention at the right time"). Illustrative, not patient data.
   Step 1: discharge from hospital to home; the days at home ahead.
   Step 2: the fluid trace is drawn day by day from the wearable, and starts to climb.
   Step 3: the early flag where it crosses the alert line, a remote medication adjustment, and the trace settling back. */
var SCW=760,SCH=520;
function akScene(o){
  var g='',mob=o.mob,i;
  var X0=60,X1=720,YB=380,YT=150,YA=230;   /* axis, top, alert line */
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 40 760 452" aria-hidden="true">';
  g+='<text class="t" x="30" y="64">'+(mob?"DAYS AT HOME":"THE DAYS AFTER DISCHARGE, AT HOME")+'</text>';
  /* axes and day ticks */
  g+='<path class="ax sD" d="M'+X0+' '+YT+'V'+YB+'H'+X1+'"/>';
  var tk='';for(i=1;i<=10;i++){var x=X0+i*(X1-X0)/10;tk+='M'+x+' '+YB+'v6'}g+='<path class="tk sD" d="'+tk+'"/>';
  g+='<text class="t" x="'+(X0+6)+'" y="'+(YT-12)+'">'+(mob?"FLUID":"THORACIC FLUID INDEX")+'</text>';
  /* discharge marker */
  g+='<g id="akD"><path class="dc" d="M'+X0+' '+(YB+20)+'V'+(YB-6)+'"/><text class="t s1" x="'+(X0+10)+'" y="'+(YB+34)+'">'+(mob?"DISCHARGE":"DISCHARGE: HOSPITAL TO HOME")+'</text></g>';
  /* the alert line */
  g+='<path id="akA" class="al" d="M'+X0+' '+YA+'H'+X1+'"/>';
  /* the trace: steady, then climbing toward the line, then settling after the adjustment */
  var P=[[0,330],[.05,326],[.1,332],[.15,324],[.2,328],[.25,318],[.3,322],[.35,306],[.4,298],[.45,284],[.5,270],[.55,252],[.58,236],[.62,232],[.66,244],[.7,262],[.75,282],[.8,296],[.85,306],[.9,312],[.95,316],[1,318]],tr='';
  P.forEach(function(q,k){var x=X0+q[0]*(X1-X0);tr+=(k?'L':'M')+x.toFixed(1)+' '+q[1]});
  g+='<path id="akT" class="tr" d="'+tr+'"/>';
  var fx=X0+.58*(X1-X0);
  g+='<g id="akF"><circle class="fp" cx="'+fx.toFixed(1)+'" cy="236" r="7"/><path class="dc" d="M'+fx.toFixed(1)+' 222V'+(YT+6)+'"/></g>';
  /* labels, each clear of every stroke (DR3) */
  g+='<g id="akL1"><text class="t" x="'+(X0+10)+'" y="'+(YA-12)+'">'+(mob?"ALERT LEVEL":"ALERT LEVEL")+'</text></g>';
  g+='<g id="akL2"><text class="t s1" x="'+(mob?300:330)+'" y="'+(YB-16)+'">'+(mob?"CHEST + ARM SENSORS":"CHEST AND ARM SENSORS, EVERY DAY")+'</text></g>';
  g+='<g id="akL3"><text class="t s1" x="'+(fx+14).toFixed(1)+'" y="'+(YT+14)+'">'+(mob?"EARLY FLAG":"EARLY FLAG · MEDICATION ADJUSTED")+'</text><text class="t" x="'+(fx+14).toFixed(1)+'" y="'+(YT+38)+'">'+(mob?"NO READMISSION":"REMOTELY, BY THE CARDIOLOGY TEAM")+'</text></g>';
  g+='<g id="lb1"><text class="a" x="20" y="484">'+(mob?"1 · HOME":"1 · HOME FROM HOSPITAL")+'</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="484">'+(mob?"2 · MONITOR":"2 · MEASURED EVERY DAY")+'</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="484">'+(mob?"3 · ACT":"3 · ACTED ON EARLY")+'</text></g>';
  return g+'</svg>';
}
function scene(){return akScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),tr:dl("#akT"),al:dl("#akA"),D:$("#akD",svg),F:$("#akF",svg),
    L1:$("#akL1",svg),L2:$("#akL2",svg),L3:$("#akL3",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),t0:svg.querySelector("text.t")};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function ease(x){return x<.5?2*x*x:1-Math.pow(-2*x+2,2)/2}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);op(E.t0,b)}
    /* step 1: discharge, the alert line */
    op(E.D,b*seg(p,.06,.16));draw(E.al,b*ease(seg(p,.12,.26)));op(E.L1,b*seg(p,.18,.26));
    /* step 2: the trace to the point it nears the line; step 3: the flag and the rest of the trace */
    var t2=ease(seg(p,.38,.62))*.6,t3=ease(seg(p,.72,.9))*.4;draw(E.tr,b*(t2+t3));
    op(E.L2,b*seg(p,.42,.5)*(1-seg(p,.64,.68)));
    op(E.F,b*seg(p,.68,.74));op(E.L3,b*seg(p,.74,.82));
    op(E.l1,b*seg(p,.02,.1)*(1-seg(p,.33,.38)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.64,.68)));op(E.l3,b*seg(p,.7,.78));
  };
}
