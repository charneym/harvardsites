/* The story scene: an engraved lab plate in two halves. Left, the donor heart (its outline traced from the hero photograph),
   with a hatched level for the energy its muscle holds (ATP): during cold ischemic storage it drains; with Nourexal (CCrP) given
   once to the donor it is held. Right, the storage clock in hours, 0 to 24: today's 4-hour transport limit, the 6-hour pig
   study in the Phase II award (Aim 3), and the 22 hours of storage reported in rat donors with full recovery of grafted hearts.
   Above it, ten donor hearts, six of them unused. Facts: NIH RePORTER 5R44HL174138-02 abstract; nourheart.com product page. */
var NH_HEART="M219.9 140.6 L219.6 147.8 L218.9 154.9 L217.5 161.9 L215.4 168.8 L213.4 175.6 L211.2 182.4 L208.6 189.1 L205.5 195.6 L202.5 202.2 L199.3 209.0 L195.8 215.6 L191.8 222.2 L187.6 228.8 L183.0 235.5 L178.1 242.2 L172.8 249.1 L167.1 255.9 L160.8 262.9 L154.0 269.8 L146.6 276.6 L138.5 283.0 L129.7 288.4 L120.2 293.0 L110.2 297.1 L99.9 298.9 L89.7 297.5 L80.1 293.4 L71.2 287.4 L63.3 279.8 L56.7 270.6 L51.5 260.4 L47.1 250.6 L42.9 241.8 L39.1 233.6 L35.5 226.2 L32.1 219.0 L29.2 211.9 L26.5 205.0 L23.6 198.6 L20.4 192.6 L17.3 186.5 L14.4 180.4 L11.6 174.1 L9.0 167.8 L6.6 161.2 L4.3 154.6 L2.3 147.7 L1.0 140.6 L0.4 133.4 L0.3 126.1 L1.0 118.9 L2.6 111.8 L4.5 104.7 L6.5 97.6 L8.3 90.2 L10.1 82.7 L11.9 74.7 L13.8 66.4 L16.6 58.3 L20.4 50.6 L24.9 43.1 L28.9 34.2 L32.5 23.8 L37.9 14.9 L45.9 10.0 L55.9 9.7 L66.1 10.7 L75.3 10.1 L84.1 9.0 L92.9 7.6 L101.5 5.9 L110.4 4.3 L119.4 2.7 L128.7 1.5 L137.7 2.9 L145.8 7.7 L153.7 12.9 L161.6 17.0 L169.2 21.1 L176.0 26.7 L182.1 33.1 L187.8 39.6 L193.0 46.3 L197.9 53.0 L202.7 59.6 L207.5 66.1 L212.3 72.5 L216.7 79.2 L217.6 87.5 L214.7 97.2 L214.6 105.3 L217.5 112.0 L219.3 119.0 L219.9 126.2 L220.1 133.4Z";
var NH_VES=["M40 74C40 34 40 10 44 -34","M100 52C98 2 104 -40 134 -46C164 -52 184 -34 188 -4","M140 62C150 32 168 16 198 10"];
var NH_BR="M126 -42V-70M146 -48V-76M164 -46L172 -72";
var NH_COR="M172 66C152 120 112 190 72 262M146 120L104 112M126 162L164 196M100 212L70 200M156 96L190 120";
function nhTubes(w){return NH_VES.map(function(d){return '<path class="tb0" d="'+d+'" style="stroke-width:'+(w+3)+'px"/><path class="tb1" d="'+d+'" style="stroke-width:'+w+'px"/>'}).join("")}
function nhHearts(x,y,s,n){var o="";for(var i=0;i<n;i++)o+='<g class="nhh" transform="translate('+(x+i*s*1.18)+','+y+') scale('+(s/225)+')"><path d="'+NH_VES[1]+'" class="st"/><path d="'+NH_HEART+'"/></g>';return o}
function scene(){
  var mob=MOBILE(),fs=mob?21:12,cs=mob?15:13;
  /* phones stack the plate: the heart on top, the clock below it, in a near-square frame (DB, CW) */
  var VB=mob?"0 0 560 870":"0 0 800 500",rf=mob?16:12;
  var HT=mob?' transform="translate(134,112) scale(.95)"':' transform="translate(78,122) scale(1.05)"';
  var RT=mob?' transform="translate(-441,336) scale(1.2)"':"";
  var caps=["SIX OF EVERY TEN DONOR HEARTS GO UNUSED","TRANSPORT IS LIMITED TO FOUR HOURS",
            "CCrP · KEEPS MAKING ATP UNDER LOW OXYGEN","RAT DONORS · 22 HOURS OF STORAGE, FULL RECOVERY"];
  var s='<svg viewBox="'+VB+'" role="img" aria-label="Lab plate: a donor heart whose energy level drains during cold storage and is held with cyclocreatine phosphate, beside a storage clock from 0 to 24 hours marking the 4-hour transport limit, a 6-hour pig study and 22 hours reached in rat donors">';
  var GW=mob?540:780,GH=mob?820:452,g="";
  for(var gx=40;gx<=GW;gx+=37)g+='<path class="gd" d="M'+gx+' 24V'+GH+'"/>';
  for(var gy=24;gy<=GH;gy+=36)g+='<path class="gd" d="M40 '+gy+'H'+GW+'"/>';s+=g;
  /* --- left: the donor heart, its energy level hatched inside --- */
  s+='<defs><clipPath id="nhClip"><path d="'+NH_HEART+'"/></clipPath><pattern id="nhHatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(-35)"><path d="M0 0V7" class="hl"/></pattern></defs>';
  s+='<g'+HT+'><g id="nhHeart"><path class="br" d="'+NH_BR+'"/>'+nhTubes(mob?13:17)+'<path class="bf" d="'+NH_HEART+'"/><path class="mb" d="'+NH_HEART+'"/>';
  /* contour lines on the muscle, engraved: a few inset copies of the outline */
  [.9,.78].forEach(function(k){s+='<path class="mb2" transform="translate('+(112.5*(1-k)).toFixed(1)+','+(160*(1-k)).toFixed(1)+') scale('+k+')" d="'+NH_HEART+'"/>'});
  s+='<g clip-path="url(#nhClip)"><rect id="nhLvl" x="-10" y="0" width="250" height="320" fill="url(#nhHatch)"/><path id="nhLine" class="lvl" d="M-10 0H240"/></g><path class="cor" d="'+NH_COR+'"/>';
  s+='<text class="nm2" x="0" y="-92" style="font-size:'+(fs/1.05).toFixed(1)+'px">DONOR HEART</text>';
  s+='<text id="nhAtp" class="a" x="236" y="160" style="font-size:'+(fs/1.05).toFixed(1)+'px">ATP</text></g></g>';
  /* --- right: ten donor hearts, then the storage clock --- */
  s+='<g id="nhR"'+RT+'>';
  s+='<g id="nhTen">'+nhHearts(430,86,26,10)+'</g>';
  s+='<text id="nhTenL" x="430" y="70" style="font-size:'+rf+'px">HEARTS FROM TEN ORGAN DONORS</text>';
  var X0=430,X1=772,Y=330,hx=function(h){return X0+(X1-X0)*h/24};
  s+='<g id="nhClock"><path class="ax" d="M'+X0+' '+Y+'H'+X1+'"/>';
  for(var hh=0;hh<=24;hh+=2)s+='<path class="ax" d="M'+hx(hh)+' '+Y+'V'+(Y+(hh%6?5:10))+'"/>';
  [6,12,18,24].forEach(function(hh){s+='<text x="'+hx(hh)+'" y="'+(Y+16+rf)+'" text-anchor="middle" style="font-size:'+rf+'px">'+hh+'</text>'});
  s+='<text x="'+X1+'" y="'+(Y+22+rf*2.2)+'" text-anchor="end" style="font-size:'+rf+'px">HOURS OF STORAGE</text>';
  s+='<path id="nhB4" class="bar0" d="M'+X0+' '+(Y-26)+'H'+X0+'"/>';
  s+='<path id="nhM4" class="mk0" d="M'+hx(4)+' '+(Y-58)+'V'+Y+'"/><text id="nhT4" x="'+(hx(4)+8)+'" y="'+(Y-46)+'" style="font-size:'+rf+'px">4 H LIMIT TODAY</text>';
  s+='<path id="nhB22" class="bar1" d="M'+X0+' '+(Y-96)+'H'+X0+'"/>';
  s+='<path id="nhM6" class="mk1" d="M'+hx(6)+' '+(Y-162)+'V'+(Y-90)+'"/><text id="nhT6" class="a" x="'+(hx(6)+8)+'" y="'+(Y-150)+'" style="font-size:'+rf+'px">6 H · PIG STUDY</text>';
  s+='<text id="nhT22" class="a" x="'+hx(22)+'" y="'+(Y-110)+'" text-anchor="end" style="font-size:'+rf+'px">22 H · RAT DONORS</text></g>';
  s+='</g>';
  caps.forEach(function(t,i){s+='<text class="cap" id="nhC'+i+'" x="'+(mob?280:400)+'" y="'+(mob?858:492)+'" text-anchor="middle" style="font-size:'+cs+'px">'+t+'</text>'});
  return s+"</svg>";
}
function storyDraw(svg){
  var E={heart:$("#nhHeart",svg),lvl:$("#nhLvl",svg),line:$("#nhLine",svg),atp:$("#nhAtp",svg),ten:[].slice.call(svg.querySelectorAll(".nhh")),
    tenL:$("#nhTenL",svg),clock:$("#nhClock",svg),b4:$("#nhB4",svg),m4:$("#nhM4",svg),t4:$("#nhT4",svg),b22:$("#nhB22",svg),
    m6:$("#nhM6",svg),t6:$("#nhT6",svg),t22:$("#nhT22",svg),cap:[0,1,2,3].map(function(i){return $("#nhC"+i,svg)})};
  var X0=430,X1=772,Y=330,hx=function(h){return X0+(X1-X0)*h/24};
  return function(p,b){
    if(!E.lvl.isConnected)return;
    var s1=seg(p,.02,.14),s2=seg(p,.26,.40),s3=seg(p,.50,.64),s4=seg(p,.74,.88);
    svg.style.opacity=(.3+.7*b).toFixed(3);
    E.heart.style.opacity=b.toFixed(3);
    /* step 1: six of the ten hearts fall away */
    E.ten.forEach(function(el,i){el.style.opacity=(b*(i<4?1:1-.78*s1)).toFixed(3)});
    E.tenL.style.opacity=b.toFixed(3);
    /* step 2: the four-hour bar; the energy level drains as the clock runs */
    E.clock.style.opacity=(b*(.35+.65*Math.max(s2,s4))).toFixed(3);
    E.b4.setAttribute("d","M"+X0+" "+(Y-26)+"H"+hx(4*s2).toFixed(1));
    E.m4.style.opacity=E.t4.style.opacity=(b*s2).toFixed(3);
    /* level: full (y 40) -> drained (y 250) in step 2, restored and held (y 70) with CCrP in step 3 */
    var y=40+210*s2-180*s3;
    E.lvl.setAttribute("y",y.toFixed(1));E.line.setAttribute("d","M-10 "+y.toFixed(1)+"H240");
    E.atp.setAttribute("y",(y+5).toFixed(1));E.atp.style.opacity=(b*(.4+.6*Math.max(s2,s3))).toFixed(3);
    /* step 4: the storage bar runs on to 22 hours; the 6-hour pig study is marked */
    E.b22.setAttribute("d","M"+X0+" "+(Y-96)+"H"+hx(22*s4).toFixed(1));
    E.m6.style.opacity=E.t6.style.opacity=E.t22.style.opacity=(b*s4).toFixed(3);
    var W=[[0,0,.24,.26],[.26,.29,.49,.51],[.51,.54,.73,.75],[.75,.78,2,2]];
    E.cap.forEach(function(el,k){var a=k===0?1:seg(p,W[k][0],W[k][1]),o=k===3?0:seg(p,W[k][2],W[k][3]);
      el.style.opacity=(b*a*(1-o)).toFixed(3)});
  };
}
