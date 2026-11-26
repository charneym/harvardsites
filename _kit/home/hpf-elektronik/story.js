/* The story scene (BL/BY/DB): how the HPF blister inspection system EOK FA works, as hpf-elektronik.de > Blisterkontrollsystem
   EOK FA describes it ("Im Auflichtverfahren wird das zu kontrollierende Füllgut mit weißem Licht angestrahlt. Die
   temperaturkompensierte LED-Auflichtbeleuchtung leuchtet das Füllgut gleichmäßig und ohne störende Glanzlichter aus. Die
   Farbkamera erfasst das Bild, das im IPC ausgewertet wird. Die Farbkamera wird durch ein Signal der Maschine synchronisiert";
   Leistungsbeschreibung: Befüllungskontrolle, Bruchstückerkennung, Kontur und Spots; integriertes Schieberegister;
   Bilddatenbank; Auswertestatistik zu einzelnen Näpfen). Drawn as ONE blister strip under the camera, kept on screen:
   Step 1 (Ausleuchten): the LED top light washes the strip evenly.
   Step 2 (Erfassen): the camera's field of view frames the strip, triggered by the machine.
   Step 3 (Auswerten): a scan crosses the strip; each cavity is checked, one broken tablet is flagged.
   Step 4 (Ablegen): every result moves into the shift register; result images go to the image database.
   The cavity count and the flagged cavity are illustrative. */
var SCW=760,SCH=520,BX0=100,BX1=550,BY0=262,BY1=402,NC=5,PCH=90,RY=[302,362],FLAG=8;
function hpCav(i){var c=i%NC,r=(i/NC)|0;return [BX0+45+c*PCH,RY[r]]}
function hpScene(o){
  var g='',mob=o.mob,i,k;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  /* light cone (step 1), under everything */
  g+='<polygon id="hpCone" class="cone" points="120,141 530,141 572,250 78,250"/>';
  /* field-of-view lines from the lens to the strip (step 2) */
  g+='<path id="hpF1" class="fov sD" d="M318 124L'+BX0+' '+(BY0-6)+'"/><path id="hpF2" class="fov sD" d="M332 124L'+BX1+' '+(BY0-6)+'"/>';
  g+='<rect id="hpFr" class="frm" x="'+(BX0-8)+'" y="'+(BY0-8)+'" width="'+(BX1-BX0+16)+'" height="'+(BY1-BY0+16)+'"/>';
  /* camera: body, lens, status LED */
  g+='<g class="cam"><rect x="275" y="40" width="100" height="60"/><rect x="305" y="100" width="40" height="22"/><path d="M290 56H330"/></g><circle id="hpLed" class="led" cx="358" cy="56" r="3.2"/>';
  g+='<text class="t" x="395" y="66">'+(mob?"KAMERA":"FARBKAMERA")+'</text>';
  /* LED top-light bars */
  g+='<g class="bar2"><rect x="120" y="128" width="110" height="12"/><rect x="420" y="128" width="110" height="12"/></g>';
  g+='<g id="hpLl"><text class="t s1" x="120" y="114">'+(mob?"LICHT":"LED-AUFLICHT")+'</text></g>';
  /* the blister strip with ten cavities */
  g+='<rect class="bl" x="'+BX0+'" y="'+BY0+'" width="'+(BX1-BX0)+'" height="'+(BY1-BY0)+'"/>';
  for(i=0;i<NC*2;i++){var p=hpCav(i);g+='<circle class="cv" cx="'+p[0]+'" cy="'+p[1]+'" r="23"/>';
    if(i===FLAG)g+='<path class="tb" d="M'+(p[0]-13)+' '+(p[1]-3)+'A13 9 0 0 1 '+(p[0]-1)+' '+(p[1]-8.6)+'L'+(p[0]-4)+' '+(p[1]+1)+'L'+(p[0]+2)+' '+(p[1]+8.8)+'A13 9 0 0 1 '+(p[0]-13)+' '+(p[1]-3)+'Z"/>';
    else g+='<ellipse class="tb" cx="'+p[0]+'" cy="'+p[1]+'" rx="13" ry="9"/>'}
  /* scan line and per-cavity checks (step 3) */
  g+='<path id="hpScan" class="scan" d="M'+BX0+' '+(BY0+4)+'V'+(BY1-4)+'"/>';
  for(i=0;i<NC*2;i++){var q=hpCav(i);g+=i===FLAG?'<rect id="hpK'+i+'" class="bad" x="'+(q[0]-30)+'" y="'+(q[1]-27)+'" width="60" height="54"/>':'<circle id="hpK'+i+'" class="ok" cx="'+(q[0]+17)+'" cy="'+(q[1]-17)+'" r="3.4"/>'}
  /* results on the right (step 3), each line clear of every stroke */
  g+='<g id="hpRes">'+(mob?'<text class="t" x="590" y="318">9 i. O.</text><text class="t s1" x="590" y="356">1 n. i. O.</text>':
    '<text class="t" x="590" y="290">10 NÄPFE</text><text class="t" x="590" y="324">9 i. O.</text><text class="t s1" x="590" y="358">1 BRUCHSTÜCK</text>')+'</g>';
  /* shift register (step 4) */
  g+='<g id="hpReg">';for(i=0;i<NC*2;i++)g+='<rect class="rc" x="'+(BX0+i*45+2)+'" y="434" width="41" height="24"/>';g+='</g>';
  for(i=0;i<NC*2;i++)g+='<rect id="hpR'+i+'" class="'+(i===FLAG?"rbad":"rok")+'" x="'+(BX0+i*45+6)+'" y="438" width="33" height="16"/>';
  g+='<g id="hpRl"><text class="t" x="'+BX0+'" y="'+(mob?504:492)+'">SCHIEBEREGISTER</text></g>';
  /* image database (step 4) */
  g+='<g id="hpDb">';for(k=2;k>=0;k--)g+='<rect class="db" x="'+(600+k*10)+'" y="'+(420+k*8)+'" width="100" height="'+(mob?34:30)+'"/>';
  g+='</g><g id="hpDl"><text class="t" x="600" y="'+(mob?504:492)+'">'+(mob?"BILDER":"BILDDATENBANK")+'</text></g>';
  return g+'</svg>';
}
function scene(){return hpScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={cone:$("#hpCone",svg),F:dl("#hpF1,#hpF2"),Fr:$("#hpFr",svg),Led:$("#hpLed",svg),Ll:$("#hpLl",svg),scan:$("#hpScan",svg),Res:$("#hpRes",svg),
    Reg:$("#hpReg",svg),Rl:$("#hpRl",svg),Db:$("#hpDb",svg),Dl:$("#hpDl",svg),K:[],R:[],base:$$(".cam,.bar2,.bl,.cv,.tb,text.t:not(#hpLl text):not(#hpRes text):not(#hpRl text):not(#hpDl text)",svg)};
  for(var i=0;i<NC*2;i++){E.K.push($("#hpK"+i,svg));E.R.push($("#hpR"+i,svg))}
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1);a[0].style.opacity=v>.002?"1":"0"})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;E.base.forEach(function(el){op(el,b)})}
    /* step 1: the LED top light */
    op(E.cone,b*seg(p,.03,.15));op(E.Ll,b*seg(p,.05,.15));
    /* step 2: the camera fires on the machine signal and frames the strip */
    draw(E.F,b*seg(p,.27,.4));op(E.Fr,b*seg(p,.36,.44));op(E.Led,b*(.35+.65*seg(p,.27,.32)));
    /* step 3: the scan crosses the strip; checks appear behind it; one broken tablet is flagged */
    var s=seg(p,.5,.68),sx=BX0+4+(BX1-BX0-8)*s;E.scan.setAttribute("transform","translate("+(sx-BX0).toFixed(1)+" 0)");op(E.scan,b*seg(p,.5,.52)*(1-seg(p,.7,.74)));
    for(var i=0;i<NC*2;i++){var c=hpCav(i);op(E.K[i],b*(s>0&&sx>c[0]+6?1:0))}
    op(E.Res,b*seg(p,.66,.72));
    /* step 4: results fill the shift register; images go to the database */
    op(E.Reg,b*(.32+.68*seg(p,.76,.8)));op(E.Rl,b*seg(p,.77,.82));
    for(var j=0;j<NC*2;j++)op(E.R[j],b*seg(p,.78+j*.011,.8+j*.011));
    op(E.Db,b*(.32+.68*seg(p,.86,.92)));op(E.Dl,b*seg(p,.87,.93));
  };
}
