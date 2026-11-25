/* the story scene (BL/BY/DB/DR): ONE fusion construct, drawn once and kept on screen for all four steps, in a lateral view laid
   on its side: eight vertebrae (six instrumented with pedicle screws, two native at the top of the construct), the rod in the
   screw tulips, and below it a trace of stress along the construct.
   Step 1 (constant): a constant 5.5 mm rod, one stiffness end to end.
   Step 2 (junction): the stiff construct ends abruptly; stress peaks at the proximal junction.
   Step 3 (stepped): a stepped 6.0 -> 5.0 mm rod; a stress riser at the step.
   Step 4 (Bezier): the rod tapers smoothly 6.0 -> 5.5 -> 5.0 -> 4.75 mm in SRI's anodized segment colours; the trace flattens.
   Source: spinalresourcesinc.com (Bezier Parametric Curve Transition Rods; FEA comparison; May 2026 patent release). The
   stress trace is schematic. Driven by the scrubbed story progress. Rod widths are exaggerated for legibility. */
var SR={y:168,x0:70,x1:522,jx:541,base:410,amp:52,vc:[90,172,254,336,418,500,582,664],vw:62,vt:238,vb:304,stepX:300};
function srR(mode,x){/* rod half-width in px: (d-3.5mm)*7 */
  function d2r(d){return (d-3.5)*7}
  function ss(a,b,v){var t=(v-a)/(b-a);t=t<0?0:t>1?1:t;return t*t*(3-2*t)}
  if(mode===0)return d2r(5.5);
  if(mode===1)return x<SR.stepX?d2r(6):d2r(5);
  var d=6-.5*ss(226,292,x)-.5*ss(372,438,x)-.25*ss(452,500,x);return d2r(d);
}
function srRodD(m1,m2){var f=function(n){return (+n).toFixed(1)},top='',bot='',x,r,pts=[];
  for(x=SR.x0;x<=SR.x1+.01;x+=3){var a=srR(0,x),b=srR(1,x),c=srR(2,x);r=a+(b-a)*m1;r=r+(c-r)*m2;pts.push([x,r])}
  /* the stepped profile is a true step: insert the vertical edge so the outline stays crisp */
  pts.forEach(function(p,i){top+=(i?'L':'M')+f(p[0])+' '+f(SR.y-p[1])});
  var e=pts[pts.length-1],s=pts[0];
  top+='A'+f(e[1])+' '+f(e[1])+' 0 0 1 '+f(e[0])+' '+f(SR.y+e[1]);
  for(var i=pts.length-1;i>=0;i--)bot+='L'+f(pts[i][0])+' '+f(SR.y+pts[i][1]);
  return top+bot+'A'+f(s[1])+' '+f(s[1])+' 0 0 1 '+f(s[0])+' '+f(SR.y-s[1])+'Z';
}
function srStress(mode,x){
  function g(c,s){return Math.exp(-((x-c)*(x-c))/(2*s*s))}
  var inC=x<SR.x1?1:0;
  if(mode===0)return (inC?.26:.18)+.72*g(SR.jx,20);
  if(mode===1)return (inC?.26:.18)+.62*g(SR.stepX,13)+.44*g(SR.jx,20);
  return .30-.10*(x-60)/660+.14*g(SR.jx,42);
}
function scene(){
  var mob=MOBILE(),f=function(n){return (+n).toFixed(1)},g='',i,x;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'44 24 690 424':'20 24 740 424')+'" aria-hidden="true">';
  g+='<defs><linearGradient id="srg" gradientUnits="userSpaceOnUse" x1="'+SR.x0+'" x2="'+SR.x1+'" y1="0" y2="0">'+
     '<stop offset="0" stop-color="#d8d23a"/><stop offset=".39" stop-color="#d8d23a"/><stop offset=".45" stop-color="#c98ac4"/><stop offset=".72" stop-color="#c98ac4"/><stop offset=".78" stop-color="#6fcf97"/><stop offset="1" stop-color="#6fcf97"/></linearGradient></defs>';
  g+='<g id="srBase">';
  /* vertebral bodies and discs */
  var vb='';SR.vc.forEach(function(c){var l=c-SR.vw/2,r=c+SR.vw/2;vb+='M'+(l+6)+' '+SR.vt+'L'+(r-6)+' '+SR.vt+'Q'+r+' '+SR.vt+' '+r+' '+(SR.vt+6)+'L'+(r-2)+' '+(SR.vb-6)+'Q'+(r-2)+' '+SR.vb+' '+(r-8)+' '+SR.vb+'L'+(l+8)+' '+SR.vb+'Q'+(l+2)+' '+SR.vb+' '+(l+2)+' '+(SR.vb-6)+'L'+l+' '+(SR.vt+6)+'Q'+l+' '+SR.vt+' '+(l+6)+' '+SR.vt});
  g+='<path class="vt sD" d="'+vb+'"/>';
  var dk='';for(i=0;i<SR.vc.length-1;i++){var m=(SR.vc[i]+SR.vc[i+1])/2;dk+='M'+(m-6)+' '+(SR.vt+8)+'Q'+m+' '+((SR.vt+SR.vb)/2)+' '+(m-6)+' '+(SR.vb-8)+'M'+(m+6)+' '+(SR.vt+8)+'Q'+m+' '+((SR.vt+SR.vb)/2)+' '+(m+6)+' '+(SR.vb-8)}
  g+='<path class="dk sD" d="'+dk+'"/>';
  /* pedicle screws: shank and thread into the body, tulip and cap around the rod */
  var sk='',th='',tu='';
  SR.vc.slice(0,6).forEach(function(c){sk+='M'+c+' '+(SR.y+26)+'L'+c+' '+(SR.vb-14);
    for(var y=SR.y+44;y<SR.vb-16;y+=9)th+='M'+(c-5)+' '+y+'L'+(c+5)+' '+(y+4);
    tu+='M'+(c-23)+' '+(SR.y-25)+'L'+(c-23)+' '+(SR.y+14)+'Q'+(c-23)+' '+(SR.y+27)+' '+(c-10)+' '+(SR.y+27)+'L'+(c+10)+' '+(SR.y+27)+'Q'+(c+23)+' '+(SR.y+27)+' '+(c+23)+' '+(SR.y+14)+'L'+(c+23)+' '+(SR.y-25)+
        'M'+(c-25)+' '+(SR.y-31)+'L'+(c+25)+' '+(SR.y-31)});
  g+='<path class="sk sD" d="'+sk+'"/><path class="th sD" d="'+th+'"/>';
  g+='<path class="tu sD" d="'+tu+'"/>';
  /* the stress trace axis */
  g+='<path class="ax sD" d="M60 '+SR.base+'L720 '+SR.base+'"/>';
  g+='<text class="t" x="60" y="'+(SR.base+30)+'">'+(mob?'STRESS (SCHEMATIC)':'STRESS ALONG THE CONSTRUCT · SCHEMATIC')+'</text>';
  g+='<text class="t" x="'+((SR.vc[6]+SR.vc[7])/2)+'" y="'+(SR.vt-16)+'" text-anchor="middle">'+(mob?'NATIVE':'NATIVE SPINE')+'</text>';
  g+='</g>';
  /* the rod (outline morphs between constant, stepped and Bezier), drawn over the tulips' inside */
  g+='<g id="srRod"><path class="rodF" id="rodF"/><path class="rodC" id="rodC"/><path class="rodS" id="rodS"/></g>';
  /* the proximal junction marker (step 2) */
  g+='<g id="srJn"><path class="jn" d="M'+SR.jx+' 116L'+SR.jx+' '+(SR.vb+6)+'"/><text class="a r" x="'+SR.jx+'" y="104" text-anchor="middle">'+(mob?'JUNCTION':'PROXIMAL JUNCTION')+'</text></g>';
  /* the step marker (step 3) */
  g+='<g id="srSt"><text class="a r" x="'+SR.stepX+'" y="104" text-anchor="middle">STEP</text></g>';
  /* diameter labels (step 4) */
  g+='<g id="srDm">'+[[150,'6.0'],[331,'5.5'],[421,'5.0'],[486,'4.75']].map(function(d){return '<text class="a b" x="'+(d[0]+(d[1]==='5.0'?-4:0))+'" y="104" text-anchor="middle">'+d[1]+'</text>'}).join('')+
     '<text class="t" x="'+(mob?560:600)+'" y="104"'+(mob?' text-anchor="middle"':'')+'>MM</text></g>';
  /* the stress trace and its peak */
  g+='<path class="st" id="srTr"/><circle class="pk" id="srPk" r="4.5"/><text class="a r" id="srPl" text-anchor="middle">PEAK</text>';
  /* step labels in the clear band at the top */
  var lx=mob?SR.x0-10:SR.x0-10,ly=58;
  g+='<g id="lb0"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'CONSTANT 5.5 MM ROD':'CONSTANT 5.5 MM ROD · ONE STIFFNESS END TO END')+'</text></g>';
  g+='<g id="lb1"><text class="a r" x="'+lx+'" y="'+ly+'">'+(mob?'STRESS AT THE JUNCTION':'STRESS CONCENTRATES AT THE PROXIMAL JUNCTION')+'</text></g>';
  g+='<g id="lb2"><text class="a r" x="'+lx+'" y="'+ly+'">'+(mob?'STEPPED 6.0 TO 5.0 MM ROD':'STEPPED 6.0 TO 5.0 MM ROD · A STRESS RISER AT THE STEP')+'</text></g>';
  g+='<g id="lb3"><text class="a g" x="'+lx+'" y="'+ly+'">'+(mob?'BEZIER TAPER · GRADUAL':'BEZIER 6.0 · 5.5 · 5.0 · 4.75 MM · A GRADUAL STIFFNESS PROFILE')+'</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#srBase .sD"),fade:$$("#srBase text",svg),rod:$("#srRod",svg),rf:$("#rodF",svg),rc:$("#rodC",svg),rs:$("#rodS",svg),
    jn:$("#srJn",svg),stp:$("#srSt",svg),dm:$("#srDm",svg),tr:$("#srTr",svg),pk:$("#srPk",svg),pl:$("#srPl",svg),
    l0:$("#lb0",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1,lastK='';
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var m1=seg(p,.5,.58)*(1-0),m2=seg(p,.76,.86),key=m1.toFixed(3)+'|'+m2.toFixed(3);
    if(key!==lastK){lastK=key;
      var d=srRodD(m1,m2);E.rf.setAttribute("d",d);E.rc.setAttribute("d",d);E.rs.setAttribute("d",d);
      var tr='',best=-1,bx=0,by=0,x;
      for(x=60;x<=720;x+=4){var a=srStress(0,x),c=srStress(1,x),e=srStress(2,x),v=a+(c-a)*m1;v=v+(e-v)*m2;var y=SR.base-SR.amp*v;tr+=(tr?'L':'M')+x+' '+y.toFixed(1);if(v>best){best=v;bx=x;by=y}}
      E.tr.setAttribute("d",tr);E.pk.setAttribute("cx",bx);E.pk.setAttribute("cy",by.toFixed(1));E.pl.setAttribute("x",bx);E.pl.setAttribute("y",(by-14).toFixed(1));
    }
    op(E.rod,b);op(E.rc,m2);op(E.rf,1-m2*.6);
    op(E.tr,b);op(E.pk,b*(1-m2*.7));op(E.pl,b*(1-m2)*(1-seg(p,.47,.5)*(1-seg(p,.56,.6))));
    op(E.jn,b*seg(p,.27,.33)*(1-seg(p,.45,.5)));op(E.stp,b*seg(p,.56,.62)*(1-seg(p,.7,.76)));op(E.dm,b*seg(p,.84,.9));
    op(E.l0,b*(1-seg(p,.2,.26)));op(E.l1,b*seg(p,.27,.33)*(1-seg(p,.45,.51)));op(E.l2,b*seg(p,.52,.58)*(1-seg(p,.7,.76)));op(E.l3,b*seg(p,.77,.83));
  };
}
