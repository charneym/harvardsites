/* The story scene (DB/BL/BY): how a SensorStick makes its own power, as plant-e.com/technologie explains it ("Via fotosynthese
   produceert een plant organisch materiaal ... Dit resterende deel wordt door de wortels uitgescheiden in de grond. Rondom
   deze wortels leven bacteriën die dit organische materiaal afbreken. Tijdens dit afbraakproces komen elektronen als
   bijproduct vrij. Plant-e heeft een systeem ontwikkeld waarmee we in staat zijn de vrijgekomen elektronen te gebruiken als
   elektriciteit"), and the water-level SensorStick page (water level and soil temperature, data via satellite).
   ONE fine-line cross-section of a wet peat bog, kept on screen throughout: reeds and grasses above the ground line, their
   roots below, the groundwater line, a SensorStick standing in the bog and a satellite overhead. Frame 0 is complete.
   Step 1 (photosynthesis): sunlight and CO2 reach the leaves; organic matter (gold) flows down the stems to the roots.
   Step 2 (root zone): the roots release it into the soil; bacteria (green) gather around the roots and break it down.
   Step 3 (power and data): the freed electrons travel to the stick's electrode, the stick lights up and its data goes up
   to the satellite. Everything is driven by the scrubbed progress. */
var GY=258,SKX=580;
var PL=[[110,1,0],[186,.86,1],[262,1.08,0],[338,.92,0],[414,1.04,1],[490,.82,0]];
function blades(x,k,cat){
  var d="",B=[[-30,118],[-14,150],[0,176],[12,140],[26,122],[40,96],[-42,84]],i;
  for(i=0;i<B.length;i++){var dx=B[i][0]*k,hh=B[i][1]*k,tx=x+dx,ty=GY-hh;
    d+="M"+x+" "+GY+"Q"+(x+dx*.25).toFixed(1)+" "+(GY-hh*.6).toFixed(1)+" "+tx.toFixed(1)+" "+ty.toFixed(1)}
  return d;
}
function catHead(x,k){var tx=x+(-14*k),ty=GY-150*k;return [tx,ty]}
function roots(x,k){
  var d="",R=[[-34,96],[-12,124],[8,132],[30,104],[48,78],[-52,70]],i;
  for(i=0;i<R.length;i++){var dx=R[i][0]*k,dy=R[i][1]*k,ex=x+dx,ey=GY+dy;
    d+="M"+x+" "+GY+"Q"+(x+dx*.3).toFixed(1)+" "+(GY+dy*.55).toFixed(1)+" "+ex.toFixed(1)+" "+ey.toFixed(1);
    var bx=x+dx*.62,by=GY+dy*.62;d+="M"+bx.toFixed(1)+" "+by.toFixed(1)+"L"+(bx+(dx<0?-14:14)*k).toFixed(1)+" "+(by+22*k).toFixed(1)}
  return d;
}
function rootTips(x,k){return [[-34,96],[-12,124],[8,132],[30,104],[48,78]].map(function(r){return [x+r[0]*k,GY+r[1]*k]})}
/* the moving parts: sugar (down the stems), exudate (out of the root tips), bacteria (around the tips), electrons (to the stick) */
var SUG=[],EXU=[],BAC=[],ELE=[];
(function(){PL.forEach(function(p,i){var x=p[0],k=p[1];
  SUG.push([[x-4*k,GY-96*k],[x,GY+60*k]]);SUG.push([[x+10*k,GY-70*k],[x+4*k,GY+70*k]]);
  rootTips(x,k).forEach(function(t,j){if(j%2===0)EXU.push([[t[0],t[1]-10],[t[0]+(j-2)*5,t[1]+10]]);
    if(j!==2){var bx=t[0]+(j<2?-8:8),by=t[1]+4;BAC.push([bx,by,(j*37+i*23)%180]);
      ELE.push([[bx,by],[SKX-12,GY+64+((i*5+j)%9)*20]])}})})})();
function storyScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'40 24 690 500':'0 20 760 540')+'" aria-hidden="true">';
  g+='<g id="scBase">';
  /* the bog in section: ground line, the groundwater line, the cut edges of the soil block */
  g+='<path class="wo sD" d="M40 '+GY+'L40 486M720 '+GY+'L720 486M40 486L720 486"/>';
  g+='<path class="wl sD" d="M40 '+GY+'L720 '+GY+'"/>';
  g+='<path class="wt sD" d="M40 334L720 334"/>';
  /* sun, with short rays */
  var r='';for(var a=0;a<8;a++){var an=a*Math.PI/4;r+='M'+(96+Math.cos(an)*30).toFixed(1)+' '+(86+Math.sin(an)*30).toFixed(1)+'L'+(96+Math.cos(an)*40).toFixed(1)+' '+(86+Math.sin(an)*40).toFixed(1)}
  g+='<path class="wl sD" d="M76 86a20 20 0 1 0 40 0a20 20 0 1 0 -40 0"/><path class="wo sD" id="scRays" d="'+r+'"/>';
  /* plants and their roots */
  PL.forEach(function(p){g+='<path class="pl sD" d="'+blades(p[0],p[1])+'"/>';g+='<path class="rt sD" d="'+roots(p[0],p[1])+'"/>';
    if(p[2]){var c=catHead(p[0],p[1]);g+='<path class="pl sD" d="M'+(c[0]-3.5).toFixed(1)+' '+(c[1]+26).toFixed(1)+'l0 -26a3.5 3.5 0 0 1 7 0l0 26a3.5 3.5 0 0 1 -7 0"/>'}});
  /* the SensorStick: its housing above ground, the meshed electrode tube in the peat, the antenna */
  g+='<path class="sk sD" d="M'+(SKX-20)+' 168L'+(SKX+20)+' 168L'+(SKX+20)+' 212L'+(SKX-20)+' 212Z"/>';
  g+='<path class="sk sD" d="M'+(SKX-9)+' 212L'+(SKX-9)+' 470L'+(SKX+9)+' 470L'+(SKX+9)+' 212"/>';
  var m='';for(var y=222;y<466;y+=12)m+='M'+(SKX-9)+' '+y+'L'+(SKX+9)+' '+(y+8);
  g+='<path class="wo sD" d="'+m+'"/>';
  g+='<path class="sk sD" d="M'+(SKX+10)+' 168L'+(SKX+10)+' 146"/>';
  /* satellite overhead */
  g+='<path class="sk sD" d="M674 60L694 60L694 74L674 74Z"/><path class="wl sD" d="M640 62L668 62L668 72L640 72ZM700 62L728 62L728 72L700 72ZM668 67L674 67M694 67L700 67M684 74L684 82"/>';
  g+='</g>';
  /* step 1: light and CO2 to the leaves, organic matter down the stems */
  g+='<g id="sc1"><path class="lt" d="M124 104L168 130M120 116L246 150M112 120L316 170"/>';
  g+='<text class="t" x="214" y="66" text-anchor="middle">CO₂</text><path class="ld" d="M214 76L214 108M209 102L214 108L219 102"/></g>';
  g+='<g id="scSug">';SUG.forEach(function(s){g+='<circle class="sg" r="2.6" cx="'+s[0][0]+'" cy="'+s[0][1]+'"/>'});g+='</g>';
  /* step 2: exudate into the soil, bacteria gather around the roots */
  g+='<g id="scExu">';EXU.forEach(function(s){g+='<circle class="sg" r="2.2" cx="'+s[0][0]+'" cy="'+s[0][1]+'"/>'});g+='</g>';
  g+='<g id="scBac">';BAC.forEach(function(b){g+='<ellipse class="bc" rx="5.2" ry="2.4" cx="'+b[0].toFixed(1)+'" cy="'+b[1].toFixed(1)+'" transform="rotate('+b[2]+' '+b[0].toFixed(1)+' '+b[1].toFixed(1)+')"/>'});g+='</g>';
  /* step 3: electrons to the electrode, current up the stick, data to the satellite */
  g+='<g id="scEle">';ELE.forEach(function(e){g+='<circle class="el" r="2.4" cx="'+e[0][0].toFixed(1)+'" cy="'+e[0][1].toFixed(1)+'"/>'});g+='</g>';
  g+='<path class="cu" id="scCur" d="M'+SKX+' 462L'+SKX+' 214"/>';
  g+='<circle class="led" id="scLed" cx="'+(SKX-8)+'" cy="180" r="3.4"/>';
  g+='<path class="sig" id="scSig" d="M'+(SKX+10)+' 140Q'+(SKX+40)+' 92 680 84"/>';
  g+='<g id="scArc"><path class="arc" d="M'+(SKX+2)+' 136a10 10 0 0 1 16 0"/><path class="arc" d="M'+(SKX-4)+' 130a18 18 0 0 1 28 0"/></g>';
  /* labels, each clear of every stroke (DR) */
  if(!mob){
    g+='<g id="lSun"></g>';
    g+='<g id="lStick"><text class="t" x="'+(SKX+32)+'" y="186">SENSORSTICK</text></g>';
    g+='<g id="lSat"><text class="t" x="684" y="44" text-anchor="middle">SATELLIET</text></g>';
    g+='<g id="lWat"><text class="t" x="712" y="324" text-anchor="end">GRONDWATER</text></g>';
    g+='<g id="lRoot"><text class="t" x="52" y="476">WORTELZONE</text></g>';
    g+='<g id="lBac"><path class="ld" d="M'+BAC[9][0].toFixed(0)+' '+(BAC[9][1]+10).toFixed(0)+'L'+BAC[9][0].toFixed(0)+' 446"/><text class="t" x="'+BAC[9][0].toFixed(0)+'" y="462" text-anchor="middle">BACTERIËN</text></g>';
    g+='<g id="lEle"><text class="t" x="'+(SKX+22)+'" y="404">ELEKTRONEN</text></g>';
  }else{
    g+='<g id="lSun"></g><g id="lWat"></g><g id="lRoot"></g><g id="lBac"></g><g id="lEle"></g>';
    g+='<g id="lStick"><text class="t" x="'+(SKX+30)+'" y="196">STICK</text></g>';
    g+='<g id="lSat"><text class="t" x="640" y="44" text-anchor="middle">SATELLIET</text></g>';
  }
  var ly=mob?514:536,lx=52;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'FOTOSYNTHESE':'DE PLANT MAAKT ORGANISCH MATERIAAL UIT LICHT EN CO₂')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'BACTERIËN BREKEN HET AF':'BACTERIËN ROND DE WORTELS BREKEN HET AF')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'STROOM EN DATA':'DE VRIJGEKOMEN ELEKTRONEN WORDEN STROOM EN DATA')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),cur:dl("#scCur"),sig:dl("#scSig"),s1:$("#sc1",svg),sug:$$("#scSug .sg",svg),exu:$$("#scExu .sg",svg),bac:$$("#scBac .bc",svg),ele:$$("#scEle .el",svg),
    led:$("#scLed",svg),arc:$("#scArc",svg),lSun:$("#lSun",svg),lStick:$("#lStick",svg),lSat:$("#lSat",svg),lWat:$("#lWat",svg),lRoot:$("#lRoot",svg),lBac:$("#lBac",svg),lEle:$("#lEle",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function mv(el,a,f){el.setAttribute("cx",(a[0][0]+(a[1][0]-a[0][0])*f).toFixed(1));el.setAttribute("cy",(a[0][1]+(a[1][1]-a[0][1])*f).toFixed(1))}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    /* static labels of the scene, always present */
    op(E.lSun,b);op(E.lStick,b);op(E.lSat,b);op(E.lWat,b);op(E.lRoot,b);
    /* 1. light and CO2 in, organic matter down the stems */
    op(E.s1,b*seg(p,.04,.1)*(1-seg(p,.3,.36)));
    E.sug.forEach(function(el,i){var f=sm(seg(p,.1+(i%4)*.02,.28+(i%4)*.02));mv(el,SUG[i],f);op(el,b*seg(p,.08,.12)*(1-seg(p,.36,.4)))});
    /* 2. exudate out of the roots, bacteria gather and break it down */
    E.exu.forEach(function(el,i){var f=sm(seg(p,.36+(i%3)*.02,.5+(i%3)*.02));mv(el,EXU[i],f);op(el,b*seg(p,.35,.39)*(1-seg(p,.58,.64)))});
    E.bac.forEach(function(el,i){op(el,b*seg(p,.4+(i%5)*.02,.48+(i%5)*.02))});
    op(E.lBac,b*seg(p,.48,.54)*(1-seg(p,.64,.7)));
    /* 3. electrons to the electrode, current up the stick, the data goes up */
    E.ele.forEach(function(el,i){var f=sm(seg(p,.66+(i%6)*.012,.8+(i%6)*.012));mv(el,ELE[i],f);op(el,b*seg(p,.64,.68)*(1-seg(p,.84+(i%6)*.012,.88+(i%6)*.012)))});
    op(E.lEle,b*seg(p,.68,.74)*(1-seg(p,.86,.9)));
    var c=seg(p,.8,.88);draw(E.cur,c);op(E.cur[0][0],b*(c>0?1:0));
    op(E.led,b*seg(p,.86,.9));op(E.arc,b*seg(p,.88,.92));
    var s=seg(p,.88,.96);draw(E.sig,s);op(E.sig[0][0],b*(s>0?1:0));
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}
