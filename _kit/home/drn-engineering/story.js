/* The story scene (BL/BY/DB): one part made on a sliding head lathe, as drn.co.uk describes its Star machines ("sliding head with
   sub-spindle and driven tooling ... all fed by magazine bar loading capability", Services: "more jobs in one operation"). ONE side
   elevation kept on screen; the part's profile is computed from the headstock stroke, so the tool really cuts it (no cross-fades):
   1 Bar: the magazine bar loader feeds the bar through the main spindle and out to the guide bush; the collet closes.
   2 Turn: the headstock slides the bar forward (Z) while the tool, fixed just in front of the guide bush, moves in and out (X).
   3 Drill: a driven tool comes down and cross drills the body while the bar is held.
   4 Part off: the sub-spindle grips the nose, the parting tool cuts the part free and the sub-spindle draws it away.
   The part and its sizes are illustrative. */
var DR={cy:270,rb:50,bx:276,gap:12,ext:160,hw:56,h0:4};
/* part profile from the nose (u=0) back: [u, radius] corners */
var DRP=[[0,25],[4,30],[46,30],[46,23],[54,23],[54,36],[60,42],[110,42],[110,50],[140,50]];
function drR(u){var P=DRP,i;if(u<=0)return P[0][1];for(i=1;i<P.length;i++){if(u<=P[i][0]){var a=P[i-1],b=P[i];if(b[0]===a[0])return b[1];return a[1]+(b[1]-a[1])*(u-a[0])/(b[0]-a[0])}}return 50}
function drScene(o){
  var g='',mob=o.mob,D=DR,cy=D.cy,rb=D.rb,i,xt=D.bx+D.gap;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 56 610 450" aria-hidden="true"><defs>'+
     '<linearGradient id="drSt" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7d8580"/><stop offset=".2" stop-color="#e9ece8"/><stop offset=".42" stop-color="#b3b9b4"/><stop offset=".78" stop-color="#626a65"/><stop offset="1" stop-color="#8a918c"/></linearGradient>'+
     '<linearGradient id="drBr" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#59605b"/><stop offset=".25" stop-color="#a7aea9"/><stop offset=".5" stop-color="#7e857f"/><stop offset="1" stop-color="#4a514c"/></linearGradient>'+
     '<linearGradient id="drFd" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#132620" stop-opacity="1"/><stop offset="1" stop-color="#132620" stop-opacity="0"/></linearGradient>'+
     '<pattern id="drHt" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0V9" stroke="rgba(242,242,238,.2)" stroke-width="1"/></pattern>'+
     '</defs>';
  /* the axis */
  g+='<path class="axl" d="M-10 '+cy+'H770"/>';
  /* the bar from the magazine (static behind the headstock), and the turned bar beyond the guide bush (computed) */
  g+='<rect id="drBar" class="bar" x="-10" y="'+(cy-rb)+'" width="0" height="'+(2*rb)+'"/>';
  g+='<rect class="fade" x="-10" y="'+(cy-rb-2)+'" width="70" height="'+(2*rb+4)+'"/>';
  /* the main spindle (headstock), sliding in Z, with its collet */
  g+='<g id="drHs" class="hs"><rect class="blk" x="0" y="'+(cy-84)+'" width="'+D.hw+'" height="168"/><rect class="hat" x="0" y="'+(cy-84)+'" width="'+D.hw+'" height="168"/>'+
     '<path id="drCo" class="col" d="M'+(D.hw-2)+' '+(cy-rb-14)+'L'+(D.hw-16)+' '+(cy-rb-2)+'M'+(D.hw-2)+' '+(cy+rb+14)+'L'+(D.hw-16)+' '+(cy+rb+2)+'"/></g>';
  /* the guide bush housing */
  g+='<g class="gb"><rect class="blk" x="'+(D.bx-44)+'" y="'+(cy-104)+'" width="44" height="'+(104-rb-3)+'"/><rect class="blk" x="'+(D.bx-44)+'" y="'+(cy+rb+3)+'" width="44" height="'+(104-rb-3)+'"/>'+
     '<rect class="hat" x="'+(D.bx-44)+'" y="'+(cy-104)+'" width="44" height="'+(104-rb-3)+'"/><rect class="hat" x="'+(D.bx-44)+'" y="'+(cy+rb+3)+'" width="44" height="'+(104-rb-3)+'"/>'+
     '<path class="bsh" d="M'+(D.bx-44)+' '+(cy-rb-3)+'H'+D.bx+'M'+(D.bx-44)+' '+(cy+rb+3)+'H'+D.bx+'"/></g>';
  g+='<path id="drPt" class="pt" d=""/><path id="drPh" class="ph" d=""/><path id="drSb" class="pt" d=""/>';
  /* the cross hole: hidden lines once drilled */
  g+='<path id="drHo" class="ho" d=""/>';
  /* tools: the turning tool from above (insert in the logo orange), the parting blade from below */
  g+='<g id="drT1" class="tool"><path class="sh" d="M0 -14V'+(mob?-104:-150)+'H30V-30L14 -14Z"/><path class="ins" d="M0 0L-2 -16H16L14 -14Z"/></g>';
  g+='<g id="drT2" class="tool"><path class="sh" d="M0 16V112H34V40L8 16Z"/><path class="ins" d="M0 0H8V18H0Z"/></g>';
  /* the driven tool: a motor housing and a drill; the length of drill inside the bar is drawn as hidden lines */
  g+='<g id="drDt" class="dt"><rect class="blk" x="-30" y="-168" width="60" height="44"/><path class="spin" d="M-16 -146A16 7 0 1 0 16 -146"/><path class="spin" d="M12 -152L16 -146L9 -143"/><rect class="chk" x="-13" y="-124" width="26" height="24"/></g>';
  g+='<path id="drDv" class="drl" d=""/><path id="drDf" class="flt" d=""/><path id="drDh" class="drh" d=""/>';
  /* the sub-spindle, which comes in from the right */
  g+='<g id="drSs" class="ss"><rect class="blk" x="0" y="'+(cy-80)+'" width="110" height="160"/><rect class="hat" x="0" y="'+(cy-80)+'" width="110" height="160"/>'+
     '<path class="col" d="M2 '+(cy-44)+'L16 '+(cy-32)+'M2 '+(cy+44)+'L16 '+(cy+32)+'"/></g>';
  /* labels: feature labels while they matter, one caption per step under the scene */
  var T=function(id,x,y,s,a){return '<text class="t" id="'+id+'" x="'+x+'" y="'+y+'"'+(a?' text-anchor="'+a+'"':'')+'>'+s+'</text>'};
  g+=T("drLm",8,cy-100,"MAIN SPINDLE");
  g+=T("drLg",D.bx-22,cy-120,"GUIDE BUSH","middle");
  g+=T("drLb",8,cy+84+30,mob?"BAR":"BAR FROM THE MAGAZINE");
  g+=T("drLt",xt+44,mob?86:84,"TURNING TOOL");
  g+=T("drLd",0,mob?92:90,"DRIVEN TOOL");
  g+=T("drLs",0,cy-96,"SUB-SPINDLE","end");
  g+=T("drLp",xt+44,cy+122,"PARTING TOOL");
  var C=mob?["MAGAZINE BAR LOADING","SLIDING HEAD TURNING","DRIVEN TOOL · CROSS HOLE","SUB-SPINDLE · PART OFF"]:["MAGAZINE BAR LOADING · TO THE GUIDE BUSH","SLIDING HEAD · THE BAR MOVES, THE TOOL CUTS","DRIVEN TOOL · CROSS DRILLED IN THE SAME SET-UP","SUB-SPINDLE · PARTED OFF, ONE OPERATION"];
  for(i=0;i<4;i++)g+='<text class="t cl cap" id="drC'+i+'" x="8" y="496">'+C[i]+'</text>';
  return g+'</svg>';
}
function scene(){return drScene({mob:MOBILE()?1:0})}
function drE(u){u=u<0?0:u>1?1:u;return u<.5?2*u*u:1-Math.pow(-2*u+2,2)/2}
function storyDraw(svg){
  var D=DR,cy=D.cy,rb=D.rb,xt=D.bx+D.gap,Q=function(s){return svg.querySelector(s)};
  var E={bar:Q("#drBar"),hs:Q("#drHs"),co:Q("#drCo"),pt:Q("#drPt"),ph:Q("#drPh"),sb:Q("#drSb"),ho:Q("#drHo"),t1:Q("#drT1"),t2:Q("#drT2"),dt:Q("#drDt"),dv:Q("#drDv"),df:Q("#drDf"),dh:Q("#drDh"),ss:Q("#drSs"),
    L:{m:Q("#drLm"),g:Q("#drLg"),b:Q("#drLb"),t:Q("#drLt"),d:Q("#drLd"),s:Q("#drLs"),p:Q("#drLp")},C:[0,1,2,3].map(function(k){return Q("#drC"+k)}),base:[].slice.call(svg.querySelectorAll(".axl,.gb,.fade"))};
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function f1(v){return v.toFixed(1)}
  /* the outline of the bar beyond the guide bush: profile where the tool has passed, bar size behind it; pg = parting depth (0..1) */
  function outline(ext,x0,uMax,uMin,pg){
    var turned=ext-D.gap,bs=[uMin,uMax,turned,140,148].concat(DRP.map(function(q){return q[0]}));
    bs=bs.filter(function(v,i,A){return v>=uMin&&v<=uMax&&A.indexOf(v)===i}).sort(function(a,b){return a-b});
    function rad(u){if(u>turned)return rb;if(u>=140&&u<=148)return Math.max(.01,rb*(1-pg));return drR(u)}
    var top=[];bs.forEach(function(u,i){var L=rad(Math.max(uMin,u-1e-4)),R=rad(Math.min(uMax,u+1e-4));
      if(i===0)top.push([u,R]);else if(i===bs.length-1)top.push([u,L]);else{top.push([u,L]);if(Math.abs(L-R)>.01)top.push([u,R])}});
    var d="M"+f1(x0-top[0][0])+" "+cy;top.forEach(function(q){d+="L"+f1(x0-q[0])+" "+f1(cy-q[1])});
    d+="L"+f1(x0-top[top.length-1][0])+" "+cy;
    for(var i=top.length-1;i>=0;i--)d+="L"+f1(x0-top[i][0])+" "+f1(cy+top[i][1]);
    return d+"Z";
  }
  function hilite(x0,uMax,uMin,ext){var turned=ext-D.gap,d="",u0=uMin;
    /* one highlight line along each turned diameter */
    for(var i=1;i<DRP.length;i++){var a=DRP[i-1],b=DRP[i];if(a[1]!==b[1]||b[0]<=a[0])continue;var s=Math.max(a[0],uMin)+2,e=Math.min(b[0],turned,uMax)-2;if(e>s)d+="M"+f1(x0-s)+" "+f1(cy-a[1]*.62)+"H"+f1(x0-e)}
    return d}
  return function(p,bb){
    if(!svg.isConnected)return;
    E.base.forEach(function(el){op(el,bb)});
    var s1=drE(seg(p,.03,.2)),s2=drE(seg(p,.28,.47)),s3=drE(seg(p,.53,.7)),pa=drE(seg(p,.76,.86)),pg=drE(seg(p,.86,.92)),pw=drE(seg(p,.92,.98));
    /* 1: the bar runs in from the magazine until its face meets the guide bush; the collet closes */
    var front=-10+(D.bx+10)*s1;
    var ext=D.ext*s2,x0=D.bx+ext;
    E.bar.setAttribute("width",f1(Math.max(0,Math.min(front,D.bx)+10)));
    E.hs.setAttribute("transform","translate("+f1(D.h0+ext)+" 0)");op(E.hs,bb);
    E.co.style.stroke=s1>.98?"var(--accL)":"";
    /* 2: the turned part beyond the bush (and, after parting, the stub left on the bar) */
    var dx=100*pw,ssIn=drE(seg(p,.74,.84));
    if(ext>.5){
      if(pg<1){E.pt.setAttribute("d",outline(ext,x0,ext,0,pg));E.sb.setAttribute("d","")}
      else{E.pt.setAttribute("d",outline(ext,x0+dx,140,0,0));E.sb.setAttribute("d",outline(ext,x0,ext,148,0))}
      E.ph.setAttribute("d",hilite(x0+(pg>=1?dx:0),140,0,ext));
    }else{E.pt.setAttribute("d","");E.sb.setAttribute("d","");E.ph.setAttribute("d","")}
    op(E.pt,bb);op(E.sb,bb);op(E.ph,bb*seg(p,.3,.36));
    /* the turning tool: fixed in Z just in front of the bush, its tip follows the profile in X */
    var ut=ext-D.gap,rt=ut<0?rb+6:(ut>=110?rb+4:drR(ut));
    var tIn=seg(p,.22,.28),tOut=seg(p,.48,.52),rtip=rt+(1-tIn)*60+tOut*70;
    E.t1.setAttribute("transform","translate("+xt+" "+f1(cy-rtip)+")");op(E.t1,bb*seg(p,.2,.26)*(1-seg(p,.5,.54)));
    /* 3: the driven tool drills the cross hole at the middle of the body */
    var xh=x0-82+(pg>=1?dx:0),dIn=seg(p,.53,.6),dDn=drE(seg(p,.58,.66)),dUp=drE(seg(p,.68,.74));
    var tipY=cy-42-14*(1-dIn)+(42+50)*dDn-(42+50+40)*dUp,top0=cy-42;
    E.dt.setAttribute("transform","translate("+f1(xh)+" "+f1(tipY)+")");
    var dOn=bb*seg(p,.53,.57)*(1-seg(p,.73,.77));op(E.dt,dOn);op(E.dv,dOn);op(E.df,dOn);op(E.dh,dOn);
    /* drill: body from the chuck (tip-50) to the tip; above the bar surface solid, inside it hidden (dashed) */
    var dT=tipY-100,vis=Math.min(tipY,top0);
    E.dv.setAttribute("d",vis>dT?("M"+f1(xh-7)+" "+f1(dT)+"V"+f1(Math.min(vis,tipY-6))+(tipY<=top0?"L"+f1(xh)+" "+f1(tipY+4)+"L"+f1(xh+7)+" "+f1(tipY-6):"H"+f1(xh+7))+"V"+f1(dT)+"Z"):"");
    var fl="";for(var k=0;k<7;k++){var fy=dT+6+k*12;if(fy+10<vis)fl+="M"+f1(xh-7)+" "+f1(fy)+"L"+f1(xh+7)+" "+f1(fy+10)}E.df.setAttribute("d",fl);
    E.dh.setAttribute("d",tipY>top0?("M"+f1(xh-7)+" "+f1(Math.max(top0,dT))+"V"+f1(tipY-6)+"L"+f1(xh)+" "+f1(tipY+4)+"L"+f1(xh+7)+" "+f1(tipY-6)+"V"+f1(Math.max(top0,dT))):"");
    /* the cross hole stays, as hidden lines, once the drill has been through */
    var deep=Math.min(cy+42,top0+(42+50)*dDn);
    E.ho.setAttribute("d",dDn>0?"M"+f1(xh-7)+" "+top0+"V"+f1(deep)+"M"+f1(xh+7)+" "+top0+"V"+f1(deep):"");op(E.ho,bb*seg(p,.58,.6));
    /* 4: the sub-spindle grips the nose, the parting blade rises, and the part goes with the sub-spindle */
    var ssX=x0-46,ssx=640+(ssX-640)*ssIn+dx;
    E.ss.setAttribute("transform","translate("+f1(ssx)+" 0)");op(E.ss,bb*seg(p,.74,.77));
    var bladeY=cy+rb+6-(rb+6)*pg+30*(1-seg(p,.8,.86))+40*pw;
    E.t2.setAttribute("transform","translate("+f1(x0-148)+" "+f1(bladeY)+")");op(E.t2,bb*seg(p,.8,.84));
    /* labels */
    op(E.L.m,bb*(1-seg(p,.2,.24)));op(E.L.g,bb*(1-seg(p,.2,.24)));op(E.L.b,bb*(1-seg(p,.18,.22)));
    op(E.L.t,bb*seg(p,.3,.33)*(1-seg(p,.46,.49)));
    E.L.d.setAttribute("x",f1(xh+42));E.L.d.setAttribute("y",f1(tipY-142));op(E.L.d,bb*seg(p,.6,.63)*(1-seg(p,.69,.72)));
    E.L.s.setAttribute("x",f1(Math.min(ssx+110,600)));op(E.L.s,bb*seg(p,.82,.85));
    op(E.L.p,bb*seg(p,.84,.87)*(1-seg(p,.93,.96)));
    var W=[[0,.25],[.25,.5],[.5,.75],[.75,1.01]];
    E.C.forEach(function(c,k){var A=W[k][0],Z=W[k][1];op(c,bb*(k===0?1:seg(p,A,A+.03))*(k===3?1:(1-seg(p,Z-.03,Z))))});
  };
}
