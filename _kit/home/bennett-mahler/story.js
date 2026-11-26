/* The story scene (BL/BY/DB): a Bennett Maxicoil servo-driven lathe-type spring coiler, as bennettmahler.com > Maxicoil and
   Maxicoil > Features describe it ("servo driven lathe type spring coiling machines ... compression, tension and torsion springs";
   "amazing control over squareness of end coils, pitch, initial tension ... directly from the keyboard"; overhead reel systems
   are a listed accessory), then a Bennett spring end grinder. ONE line elevation kept on screen for all four steps.
   1 Set: the keyboard screen lights, three settings fill in.
   2 Coil: the mandrel turns, the wire guide travels, the turns of the spring appear one by one.
   3 Pitch: the pitch dimension and the closed end coils are marked.
   4 Grind: the wire is cut, the grinding wheel comes in and the end is ground square. */
var BMY=280,BMR=38,BMX0=204;
function bmTurns(){var P=[10,10,34,34,34,34,34,34,34,34,34,10,10],x=BMX0,o=[];P.forEach(function(p){o.push([x,p]);x+=p});return o}
function bmScene(o){
  var g='',mob=o.mob,i,T=bmTurns(),xe=T[T.length-1][0]+T[T.length-1][1];
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="24 6 716 470" aria-hidden="true"><defs>'+
     '<linearGradient id="bmMet" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8a9bb8"/><stop offset=".5" stop-color="#e3e9f3"/><stop offset="1" stop-color="#5d6e8c"/></linearGradient></defs>';
  if(!mob)g+='<text class="t" x="40" y="22">BENNETT MAXICOIL · SERVO-DRIVEN COILING LATHE</text>';
  /* the bed and legs */
  g+='<path class="ln sD" d="M30 382H730M60 382V470M700 382V470M30 396H730"/>';
  /* headstock with its screen, the chuck and the mandrel */
  g+='<path class="ln sD" d="M40 382V190H164V382"/>';
  g+='<rect class="scr" x="54" y="204" width="96" height="62"/>';
  g+='<g id="bmBars">';for(i=0;i<3;i++)g+='<rect class="bar0" x="64" y="'+(216+i*15)+'" width="76" height="5"/><rect class="bar1" id="bmB'+i+'" x="64" y="'+(216+i*15)+'" width="0" height="5"/>';g+='</g>';
  g+='<path class="pl" d="M60 296H144M60 312H144M60 328H144"/>';
  g+='<rect class="met" x="164" y="248" width="30" height="64"/>';
  g+='<rect class="mand" x="194" y="'+(BMY-6)+'" width="'+(xe+14-194)+'" height="12"/>';
  g+='<path class="rot" id="bmRot" d="M196 '+BMY+'H'+(xe+12)+'"/>';
  g+='<text class="cl" id="bmLk" x="102" y="176" text-anchor="middle">KEYBOARD</text>';
  /* the overhead reel and the wire run to the guide */
  g+='<g id="bmReel"><circle class="ln" cx="250" cy="92" r="50"/><circle class="pl" cx="250" cy="92" r="40"/><circle class="pl" cx="250" cy="92" r="30"/><circle class="hub" cx="250" cy="92" r="4"/></g>';
  g+='<text class="cl" id="bmLr" x="318" y="96">'+(mob?"REEL":"OVERHEAD REEL")+'</text>';
  g+='<path class="wire" id="bmWire" d="M250 142V170H260V236"/>';
  g+='<g id="bmGd"><rect class="met" x="-9" y="220" width="18" height="18"/></g>';
  /* the spring: each turn a bright front half and a dim back half */
  g+='<g id="bmSpr">';T.forEach(function(t,k){var x=t[0],p=t[1],h=p/2;
    g+='<g class="tn"><path class="bk" d="M'+(x+h)+' '+(BMY+BMR)+'C'+(x+h+p*.32)+' '+(BMY+BMR)+' '+(x+p-p*.18)+' '+(BMY-BMR)+' '+(x+p)+' '+(BMY-BMR)+'"/>'+
       '<path class="sp" d="M'+x+' '+(BMY-BMR)+'C'+(x+p*.18)+' '+(BMY-BMR)+' '+(x+h-p*.32)+' '+(BMY+BMR)+' '+(x+h)+' '+(BMY+BMR)+'"/></g>'});
  g+='</g>';
  /* 3: pitch dimension and closed-end callouts */
  var a=T[5][0],b2=T[6][0];
  g+='<g id="bmPt"><path class="dim" d="M'+a+' 226V'+(BMY-BMR-6)+'M'+b2+' 226V'+(BMY-BMR-6)+'M'+a+' 226H'+b2+'"/><path class="dimA" d="M'+(a+7)+' 222L'+a+' 226L'+(a+7)+' 230M'+(b2-7)+' 222L'+b2+' 226L'+(b2-7)+' 230"/></g>';
  g+='<text class="cl" id="bmLp" x="'+((a+b2)/2)+'" y="210" text-anchor="middle">PITCH</text>';
  g+='<path class="dim" id="bmCe" d="M'+BMX0+' 330V340H'+(BMX0+20)+'V330M'+(xe-20)+' 330V340H'+xe+'V330"/>';
  g+='<text class="cl" id="bmLc" x="'+BMX0+'" y="'+(mob?370:362)+'">'+(mob?"CLOSED ENDS":"CLOSED END COILS")+'</text>';
  g+='<text class="cl" id="bmLm" x="'+(mob?330:360)+'" y="'+(mob?370:362)+'" text-anchor="middle">MANDREL</text>';
  /* 4: the grinding wheel face, the ground end and sparks */
  g+='<g id="bmWh"><rect class="whl" x="0" y="196" width="26" height="168"/><path class="pl" d="M6 196V364M13 196V364M20 196V364"/></g>';
  g+='<rect class="gnd" id="bmGn" x="'+(xe-3)+'" y="'+(BMY-BMR)+'" width="4" height="'+(2*BMR)+'"/>';
  g+='<g id="bmSk">';for(i=0;i<7;i++)g+='<circle class="spk" r="2" cx="0" cy="0"/>';g+='</g>';
  g+='<text class="cl" id="bmLw" x="'+(xe+26)+'" y="176" text-anchor="middle">'+(mob?"WHEEL":"GRINDING WHEEL")+'</text>';
  g+='<text class="ok" id="bmOk" x="680" y="'+(mob?446:436)+'" text-anchor="end">'+(mob?"GROUND SQUARE":"ENDS GROUND SQUARE")+'</text>';
  return g+'</svg>';
}
function scene(){return bmScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var T=bmTurns(),xe=T[T.length-1][0]+T[T.length-1][1];
  var E={base:dl(".sD"),bars:[0,1,2].map(function(k){return $("#bmB"+k,svg)}),rot:$("#bmRot",svg),wire:$("#bmWire",svg),gd:$("#bmGd",svg),
    tn:$$("#bmSpr .tn",svg),pt:$("#bmPt",svg),ce:$("#bmCe",svg),wh:$("#bmWh",svg),gn:$("#bmGn",svg),sk:$$("#bmSk circle",svg),reel:$("#bmReel",svg),
    Lk:$("#bmLk",svg),Lr:$("#bmLr",svg),Lp:$("#bmLp",svg),Lc:$("#bmLc",svg),Lm:$("#bmLm",svg),Lw:$("#bmLw",svg),ok:$("#bmOk",svg)};
  var lastB=-1,N=T.length;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=(+v).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    /* 1: the three settings fill in on the screen */
    E.bars.forEach(function(r,k){r.setAttribute("width",(76*[.62,.84,.46][k]*seg(p,.04+k*.05,.12+k*.05)).toFixed(1))});
    op(E.Lk,b*(1-seg(p,.24,.28)));
    /* 2: the turns appear one by one as the guide travels right; the mandrel turns */
    var cv=seg(p,.27,.52),nv=cv*N,gx=BMX0;
    E.tn.forEach(function(t,k){var v=Math.max(0,Math.min(1,nv-k));op(t,b*v);if(v>0)gx=T[k][0]+T[k][1]*v});
    E.gd.setAttribute("transform","translate("+gx.toFixed(1)+",0)");
    E.rot.style.strokeDashoffset=(-p*900).toFixed(1);op(E.rot,b*(p>.26&&p<.53?1:.35));
    var cut=seg(p,.76,.8);
    E.wire.setAttribute("d","M250 142V170H"+gx.toFixed(1)+"V220");op(E.wire,b*(1-cut));op(E.gd,b*(1-cut));
    E.reel.setAttribute("transform","rotate("+(cv*540).toFixed(1)+" 250 92)");
    op(E.Lr,b*(1-seg(p,.5,.54)));op(E.Lm,b*seg(p,.3,.34)*(1-seg(p,.48,.52)));
    /* 3: pitch dimension and the closed end coils */
    op(E.pt,b*seg(p,.55,.6)*(1-seg(p,.74,.77)));op(E.Lp,b*seg(p,.56,.61)*(1-seg(p,.74,.77)));
    op(E.ce,b*seg(p,.6,.65)*(1-seg(p,.74,.77)));op(E.Lc,b*seg(p,.61,.66)*(1-seg(p,.74,.77)));
    /* 4: the wheel comes in, sparks, the end shows ground square */
    var wi=seg(p,.8,.87);E.wh.setAttribute("transform","translate("+(xe+1+80*(1-wi)).toFixed(1)+",0)");op(E.wh,b*seg(p,.78,.83));
    op(E.Lw,b*seg(p,.83,.87));
    var gr=seg(p,.87,.95);op(E.gn,b*gr);
    E.sk.forEach(function(c,i){var q=((p-.87)/.08*2+i/7)%1;if(q<0)q+=1;var an=(-120+i*22)*Math.PI/180,d=8+q*46;
      c.setAttribute("cx",(xe+2+Math.cos(an)*d*.25).toFixed(1));c.setAttribute("cy",(BMY+BMR-4+Math.sin(an)*d).toFixed(1));
      op(c,b*(p>.87&&p<.95?(1-q):0))});
    op(E.ok,b*seg(p,.94,.98));
  };
}
