/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function devs(){return '<ul class="pfr pipe np">'+DEV.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><span class="lab lk xt2">'+esc(c[3])+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
/* HuNet (huneo.us > HuNet: System Architecture), each with a small line icon */
var ICO={
 s:'<svg viewBox="0 0 56 56"><path d="M6 14H22V30H6Z"/><path d="M34 26H50V42H34Z"/><path d="M6 38H22V50H6Z"/><path class="a" d="M22 22H28V34H34M22 44H28V34"/></svg>',
 c:'<svg viewBox="0 0 56 56"><path d="M16 40H42C47 40 50 36 50 32C50 27 46 24 42 24C41 17 35 12 28 12C21 12 16 17 15 23C10 24 6 28 6 32C6 37 10 40 16 40Z"/><path class="a" d="M28 46V30M22 36L28 30L34 36"/></svg>',
 z:'<svg viewBox="0 0 56 56"><path d="M8 18H48V38H8Z"/><path class="a" d="M14 28C17 22 19 22 22 28S27 34 30 28S35 22 38 28S43 34 46 28"/></svg>',
 a:'<svg viewBox="0 0 56 56"><path d="M8 46H48"/><path d="M8 10V46"/><path class="a" d="M14 38L22 26L30 32L38 18L46 24"/></svg>'};
var HUN=[
 ["s","From all sources","Captures every signal","Interfaces with a wide variety of devices, from patient monitoring systems to Bluetooth health monitors and current sensor technology."],
 ["c","Cloud storage","Available anywhere","Detailed time-series records are stored securely in the cloud, for authorised users on any internet-connected device, anywhere in the world."],
 ["z","Compression","Big data, small size","Proprietary compression collects detailed waveform data for millions of subjects, so providers see the most complete record."],
 ["a","Analysis","Pattern recognition","Signal recognition algorithms compare patients and time periods, and speed up the analysis of every study."]];
function hun(){return '<div class="caps svc">'+HUN.map(function(c){return '<div class="cap">'+ICO[c[0]]+'<span class="lab" data-r>'+esc(c[1])+'</span><h3 data-r>'+esc(c[2])+'</h3><p data-r>'+esc(c[3])+'</p></div>'}).join("")+'</div>'}
/* the WRAP difference (huneo.us > WRAP System) */
var DIFF=[
 ["Attended, not just uploaded","The only home PSG designed to support attended billing: a technologist oversees self-application remotely and monitors the study live, under the same codes as in-lab attended PSG."],
 ["Fewer failed studies","Live, continuous streaming catches signal changes or signal loss while the patient sleeps, before it costs a night."],
 ["Wet electrodes, full signal","Traditional full-contact wet-adhesive electrodes for EEG, EMG and EOG avoid the data loss of tape-embedded and dry electrodes."]];
function diff(){return '<div class="caps nwc tst">'+DIFF.map(function(c,i){return '<div class="cap"><span class="lab" data-r>0'+(i+1)+'</span><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
var SIG=["EEG","EOG","Chin EMG","Reflective pulse oximetry","ECG","Respiration","Body position","Leg EMG","Head position and orientation"];
function sig(){return '<div class="bk cnd"><span class="lab kick" data-r>Recorded in one wearable montage</span><p class="cr" data-r>'+SIG.map(function(c){return '<span>'+esc(c)+'</span>'}).join("")+'</p></div>'}
/* who Huneo would like to hear from (huneo.us home) */
var HEAR=[
 ["Customers","A potential customer for our screening services"],
 ["Clinicians","A medical professional who needs a better way to collect and retain patient data"],
 ["Researchers","A researcher who needs access to massive amounts of patient data"],
 ["Partners","A potential partner with applications that require biophysical data"],
 ["Competitors","You think you’re a competitor: we believe we can turn you into a partner"]];
function hear(){return '<ul class="nws">'+HEAR.map(function(n){return '<li><a href="mailto:'+MAIL+'?subject='+encodeURIComponent('Huneo: '+n[0])+'"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">Email us '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<div class="hero-ph"><figure data-r><img src="hero-cut.webp" width="1492" height="1185" alt="Three Huneo WRAP System sensor modules" decoding="async" fetchpriority="high"></figure></div>'+
   '<span class="lab eyebrow" data-r>Wireless sleep diagnostics<span class="nomob"> · Willoughby Hills, Ohio</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">The sleep lab,</span> <span class="l">now wearable.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>The WRAP System is an FDA-cleared wearable for clinical-grade polysomnography, at home or in the lab, streaming every signal live to the Huneo cloud.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/wrap">The WRAP System '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="intro" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Making health diagnostics accessible</span>'+
   '<h2 class="txt" id="mani"><span class="nw">We specialise in</span> <span class="nw">one kind of big data:</span> <span class="nw">human time-series</span> <span class="nw">information.</span> <em><span class="nw">Captured in real time,</span> <span class="nw">kept online for years,</span> <span class="nw">ready for the next study.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2009</span><p class="k">the year Huneo was founded, to bring real-time data capture and historization to healthcare</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">200 MB</span><p class="k">of waveform data from a typical overnight sleep study, all of it kept online</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">510(k)</span><p class="k">FDA clearance for the WRAP System, July 2026</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">A night with the WRAP System</span><h2 class="d3"><span class="nw">One night,</span> <em class="nw">every signal.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Apply</span><span>Record</span><span>Stream</span><span>Score</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Self-applied,</span> <span class="nw">with a technologist.</span></h2><p>The patient puts on the modular WRAP montage at home. A sleep technologist oversees the self-application remotely, live.</p></article>'+
     '<article class="step"><h2><span class="nw">Full PSG</span> <span class="nw">on the body.</span></h2><p>Head, chest and leg modules and a finger sensor record EEG, EOG, EMG, ECG, respiration, oximetry and position: lab-quality polysomnography, not a simplified home test.</p></article>'+
     '<article class="step"><h2><span class="nw">Streamed live</span> <span class="nw">to the cloud.</span></h2><p>A mobile app starts, monitors and stops the study. Waveforms and events flow in real time to the Huneo Health Portal, so a lost signal is caught before it costs a night.</p></article>'+
     '<article class="step"><h2><span class="nw">Scored in</span> <span class="nw">the portal.</span></h2><p>Automated scoring, manual scoring tools and workflow management turn the night into a report, with the data kept online for years.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="wrap" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>The WRAP System</span><h2 class="d2 split"><span class="nw">Wireless, realtime,</span> <em class="nw">attended PSG.</em></h2></div><p data-r>One device design: each module is assigned to the signal it needs to collect, so montages flex to the protocol without added hardware or inventory, in the lab or at home.</p></div>'+
   devs()+
  '</div></section>'+

  '<section class="sec light" id="clinical" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Clinical</span><h2 class="d2 split"><span class="nw">Clinical-grade PSG,</span> <em class="nw">in a wearable.</em></h2></div><p data-r>A 510(k)-cleared, multi-channel polysomnography system for the lab or the home, with the comfort of a take-home device and the data of an attended study.</p></div>'+
   diff()+sig()+
  '</div></section>'+

  '<section class="sec dark" id="hunet" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>HuNet</span><h2 class="d2 split"><span class="nw">Every waveform,</span> <em class="nw">kept online.</em></h2></div><p data-r>Once vital signs scroll off a monitor, they are usually lost. HuNet captures, stores and delivers human time-series data from any source, for sleep clinics, inpatient care and wearable devices.</p></div>'+
   hun()+
  '</div></section>'+

  '<section class="sec light" id="about" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>About us</span><h2 class="d2 split"><span class="nw">Real-time data,</span> <em class="nw">since 2009.</em></h2></div><p data-r>Huneo was founded in 2009 to bring advanced real-time data capture, telemetry and historization to healthcare, on many years of experience building massive real-time and time-series data historian systems.</p></div>'+
   team()+
   '<div class="ozs">'+
    '<div class="oz-site"><span class="lab" data-r>Mission</span><h3 data-r>Infrastructure for health data</h3><p data-r>To capture, store and share human time-series information beyond the limits of dedicated on-site systems.</p></div>'+
    '<div class="oz-site"><span class="lab" data-r>Clinical services</span><h3 data-r>Clinics, wards and wearables</h3><p data-r>HuNet serves sleep clinics, inpatient care and wearable devices, with custom interfaces to any source of time-series data.</p></div>'+
    '<div class="oz-site"><span class="lab" data-r>FDA 510(k) K260050</span><h3 data-r>WRAP System cleared</h3><p data-r>Cleared by the FDA on 15 July 2026. <a class="ul" href="'+K510+'" target="_blank" rel="noopener">See the FDA record</a></p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="hear" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Work with us</span><h2 class="d2 split"><span class="nw">We’d like to</span> <em class="nw">hear from you.</em></h2></div><p data-r>From a single sleep lab to comparisons across millions of patient trends: if one of these is you, write to us.</p></div>'+
   hear()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Questions about</span> <em><span class="nw">the WRAP System?</span></em></h2>'+
   '<p class="sub" data-r>For the WRAP System, HuNet or our clinical services, email us or call the office in Willoughby Hills.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r>Huneo, LLC<br>35000 Chardon Rd, Ste 110<br>Willoughby Hills, OH 44094</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>35000 Chardon Rd, Ste 110<br>Willoughby Hills, OH 44094</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/wrap">WRAP System</a><br><a class="ul" href="#/clinical">Clinical</a><br><a class="ul" href="#/hunet">HuNet</a><br><a class="ul" href="#/about">About</a></div>'+
   '<div class="c"><span class="lab">Products</span>WRAP System<br>Huneo Health Portal<br>HuNet</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 1000 214" aria-hidden="true"><text class="bmx" x="500" y="176" text-anchor="middle" textLength="980" lengthAdjust="spacing">Huneo</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Huneo LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={intro:"intro",story:"story",wrap:"wrap",clinical:"clinical",hunet:"hunet",about:"about",hear:"hear",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Huneo — The WRAP System: wireless, real-time, attended polysomnography",x:"Home"};
}
function secEl(id){var el=document.getElementById(id);if(!el)return null;var pa=el.parentElement;return pa&&pa.classList.contains("pin-spacer")?pa:el}
function secGo(id,instant){var el=secEl(id);if(!el)return;if(lenis&&!instant)lenis.scrollTo(el,{offset:0,duration:1.5,force:true});else{var y=el.getBoundingClientRect().top+scrollY;if(lenis)lenis.scrollTo(y,{immediate:true,force:true});scrollTo(0,y)}}
addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[href^='#/']");if(!a)return;var r=route(a.getAttribute("href"));if(!r.sec)return;
  e.preventDefault();e.stopPropagation();if(document.body.classList.contains("menu-open")){closeMenu();setTimeout(function(){secGo(r.sec)},450)}else secGo(r.sec)},true);
addEventListener("hashchange",function(e){var r=route(location.hash);if(curKey!=="home")return;e.stopImmediatePropagation();
  if(r.sec)secGo(r.sec);else if(lenis)lenis.scrollTo(0,{duration:1.4});else scrollTo(0,0);
  try{history.replaceState(null,"","#/")}catch(x){}prevHash="#/"});
(function(){var r=route(location.hash);if(!r.sec)return;var n=0;(function wait(){if(++n>60)return;var lk=document.documentElement.style.overflow==="hidden"||!document.getElementById(r.sec);if(lk){setTimeout(wait,150);return}
  setTimeout(function(){secGo(r.sec,true);try{history.replaceState(null,"","#/")}catch(x){}},300)})()})();
