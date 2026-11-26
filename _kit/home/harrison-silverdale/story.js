/* The story scene (BL/BY/DB): heat staking a threaded insert, as harrisonsilverdale.com describes it (20103 FL "Heatstake /
   Press In Insert ... the combination of knurls and ribs on the body provide high torque and pull out performance", FL table
   row FL040H079: M4, D 6.1, L 7.9, hole 5.6, min wall 2.8; HS1000 Heat Staking Machine: "install threaded inserts into
   thermoplastics and FDM materials ... digital temperature controller ranging between 0-400°c ... a stroke of 55mm ... can
   set inserts from M1.4 to M8"). ONE side elevation kept on screen, the boss drawn in section (hatched), in fine line:
   Step 1 (Hole): the blind hole and the wall around it light up.
   Step 2 (Heat): the HS1000 tip, carrying the insert, comes down; the controller's bar climbs and the tip glows.
   Step 3 (Press): the insert is pressed home; softened plastic flows along the knurls and ribs.
   Step 4 (Fasten): the tip lifts away, the plastic sets and an M4 screw goes into the insert.
   Scale: 10.4 units per mm (hole 5.6 mm = 58 units). The bar is illustrative, no temperature reading is claimed. */
var SCW=760,SCH=520;
var HX0=351,HX1=409,BT=300;          /* hole edges and boss top */
var IW=63,IH=82,IX=348.5,IY0=120;    /* insert size and rest position */
function hsInsert(){
  var d='M0 0H63V26H59V32';var y=32,i;
  for(i=0;i<5;i++){d+='L63 '+(y+3.8)+'L59 '+(y+7.6);y+=7.6}
  d+='V70H58V82H5V70H4';y=70;
  for(i=0;i<5;i++){d+='L0 '+(y-3.8)+'L4 '+(y-7.6);y-=7.6}
  d+='V26H0Z';
  var k='';for(i=1;i<10;i++)k+='M'+(i*6.3).toFixed(1)+' 1V25';
  return '<path class="ib" d="'+d+'"/><path class="ik" d="'+k+'"/>';
}
function hsScrew(){
  /* M4 pan head (illustrative): head 74 wide, 30 tall; shank 42 wide, 80 long, with the thread drawn as slanted lines */
  var g='<path class="sh" d="M-37 -30H37V-4Q37 0 33 0H-33Q-37 0 -37 -4Z"/><path class="sx" d="M-14 -24V-6M-4 -24V-6M6 -24V-6"/>';
  g+='<path class="sb" d="M-21 0H21V74L14 80H-14L-21 74Z"/>';var t='';for(var i=0;i<9;i++){var y=6+i*8;t+='M-21 '+y+'L21 '+(y+4)}
  return g+'<path class="st" d="'+t+'"/>';
}
function hsScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><pattern id="hsHat" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0V9" stroke="#3e4d56" stroke-width="1.4"/></pattern>'+
     '<linearGradient id="hsBr" x1="0" x2="1"><stop offset="0" stop-color="#8f6c22"/><stop offset=".35" stop-color="#e9c96f"/><stop offset=".55" stop-color="#c9a24a"/><stop offset="1" stop-color="#7d5e1c"/></linearGradient>'+
     '<linearGradient id="hsSt" x1="0" x2="1"><stop offset="0" stop-color="#5d6c75"/><stop offset=".4" stop-color="#d4dde2"/><stop offset="1" stop-color="#55636b"/></linearGradient>'+
     '<radialGradient id="hsGl"><stop offset="0" stop-color="#ffc56b" stop-opacity=".9"/><stop offset=".45" stop-color="#e8892b" stop-opacity=".4"/><stop offset="1" stop-color="#e8892b" stop-opacity="0"/></radialGradient></defs>';
  /* the moulded part in section: base plate and boss with its blind hole */
  g+='<path class="prt" d="M160 380H290V300H'+HX0+'V400H'+HX1+'V300H470V380H600V450H160Z"/>';
  g+='<g id="hsW" class="wal"><rect x="290" y="300" width="61" height="80"/><rect x="409" y="300" width="61" height="80"/></g>';
  g+='<path id="hsH" class="hol" d="M'+HX0+' 300V400H'+HX1+'V300"/>';
  /* softened plastic flowing along the insert (step 3) */
  g+='<g id="hsM" class="mlt"><rect id="hsM1" x="'+(HX0-8)+'" y="300" width="8" height="0"/><rect id="hsM2" x="'+HX1+'" y="300" width="8" height="0"/></g>';
  /* controller of the HS1000 and its cable to the heater */
  g+='<g class="ctl"><rect class="box" x="40" y="150" width="150" height="112"/><rect class="disp" x="56" y="168" width="118" height="40"/><rect class="trk" x="66" y="184" width="98" height="8"/><circle class="knb" cx="70" cy="238" r="9"/><rect class="key" x="96" y="230" width="16" height="16"/><rect class="key" x="120" y="230" width="16" height="16"/><rect class="key" x="144" y="230" width="16" height="16"/></g>';
  g+='<rect id="hsBar" class="bar" x="66" y="184" width="0" height="8"/>';
  g+='<path id="hsC" class="cab" d=""/>';
  /* the HS1000 heater and tip, carrying the insert */
  g+='<g id="hsT"><rect class="htr" x="340" y="30" width="80" height="54"/><path class="fin" d="M350 40H410M350 50H410M350 60H410M350 70H410"/><rect class="tip" x="370" y="84" width="20" height="36"/><circle id="hsG" cx="380" cy="122" r="46" fill="url(#hsGl)"/></g>';
  g+='<g id="hsI" transform="translate('+IX+' '+IY0+')">'+hsInsert()+'</g>';
  g+='<g id="hsS" transform="translate(380 70)">'+hsScrew()+'</g>';
  /* labels, all in clear space */
  g+='<g id="hsLc"><text class="t" x="40" y="'+(mob?128:134)+'">'+(mob?"HS1000 · 0–400 °C":"HS1000 CONTROLLER · 0–400 °C")+'</text></g>';
  g+='<g id="hsLt"><text class="t" x="440" y="'+(mob?50:62)+'">'+(mob?"HEATED TIP":"HS1000 HEATED TIP")+'</text></g>';
  g+='<g id="hsLi"><text class="t" x="440" y="'+(mob?172:166)+'">'+(mob?"M4 INSERT":"BRASS INSERT · M4 FL")+'</text></g>';
  g+='<g id="hsLh"><text class="t" x="486" y="'+(mob?318:318)+'">HOLE Ø 5.6 MM</text><text class="t" x="486" y="'+(mob?346:340)+'">WALL ≥ 2.8 MM</text></g>';
  g+='<g id="hsLp"><text class="t" x="160" y="'+(mob?484:478)+'">'+(mob?"THERMOPLASTIC":"THERMOPLASTIC PART, IN SECTION")+'</text></g>';
  g+='<g id="hsLs"><text class="t" x="440" y="'+(mob?250:262)+'">M4 SCREW</text></g>';
  return g+'</svg>';
}
function scene(){return hsScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var Q=function(s){return svg.querySelector(s)};
  var E={bar:Q("#hsBar"),cab:Q("#hsC"),T:Q("#hsT"),G:Q("#hsG"),I:Q("#hsI"),S:Q("#hsS"),H:Q("#hsH"),W:Q("#hsW"),M:Q("#hsM"),M1:Q("#hsM1"),M2:Q("#hsM2"),
    L:[Q("#hsLc"),Q("#hsLt"),Q("#hsLi"),Q("#hsLh"),Q("#hsLp"),Q("#hsLs")],ctl:Q(".ctl"),
    base:[].slice.call(svg.querySelectorAll(".prt,.ctl,.cab"))};
  var lastB=-1;
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function hi(el,on){if(el)el.classList.toggle("hi",on)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;E.base.forEach(function(el){op(el,b)})}
    var s1=seg(p,.03,.2),s2=seg(p,.28,.45),s3=seg(p,.53,.72),s4a=seg(p,.77,.85),s4b=seg(p,.85,.95);
    /* tool travel: rest, then down to just above the boss (94), then home (180), then back up and away */
    var dyI=94*s2+86*s3,dyT=dyI*(1-s4a)-30*s4a;
    E.T.setAttribute("transform","translate(0 "+dyT.toFixed(1)+")");op(E.T,b*(1-s4a));
    E.I.setAttribute("transform","translate("+IX+" "+(IY0+dyI).toFixed(1)+")");op(E.I,b);
    var hy=57+dyT;E.cab.setAttribute("d","M190 206C268 206 270 "+hy.toFixed(1)+" 340 "+hy.toFixed(1));op(E.cab,b*(1-s4a));
    /* heat: the bar fills and the tip glows; it cools as the tip lifts away */
    var heat=s2*(1-s4a);E.bar.setAttribute("width",(98*s2*(1-.6*s4a)).toFixed(1));op(E.bar,b*(.4+.6*s2));op(E.G,b*heat*(.55+.45*(1-s3*.3)));
    /* step 1: the hole and the wall around it */
    op(E.W,b*.55*s1*(1-seg(p,.26,.32)));op(E.H,b*(.35+.65*s1));
    /* step 3: plastic flows up along the insert as it goes in, then sets */
    var mh=82*s3;E.M1.setAttribute("height",mh.toFixed(1));E.M2.setAttribute("height",mh.toFixed(1));op(E.M,b*s3);E.M.classList.toggle("set",s4a>.5);
    /* step 4: the M4 screw comes down into the insert (head seated on the boss top at y 300) */
    var sy=70+230*s4b;E.S.setAttribute("transform","translate(380 "+sy.toFixed(1)+")");op(E.S,b*seg(p,.83,.88));
    var on=[seg(p,.26,.32)*(1-s4a),seg(p,.26,.32)*(1-s4a),1-seg(p,.76,.8),seg(p,0,.06),.6,seg(p,.84,.9)];
    E.L.forEach(function(el,i){op(el,b*(i===5?on[i]:.45+.55*on[i]))});
    hi(E.H,p<.26);hi(E.ctl,p>=.26&&p<.5);hi(E.T,p>=.26&&p<.76);
  };
}
