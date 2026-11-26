/* The story scene (BL/BY/DB): how a Frohn cold-forming die (Matrize) comes about and what it does, using the three methods
   frohn-hemer.de names ("CNC-Drehen: Moderne Maschinen dienen als Basis der spanenden Bearbeitung im Werkzeugbau";
   "Drahterodieren: ... durch Funkenerosion feine, endformnahe Bohrungen und Koniken"; "Senkerodieren: Die Anfertigung
   spezieller Elektroden ermöglicht es uns, komplexe Formen zu erodieren") and the use it names ("Massivumformung in der
   Schrauben- und Nietenindustrie"). ONE section drawing of the die kept on screen:
   Step 1 (Drehen): the turning tool runs down the steel casing; its contour draws in; the carbide core sits inside.
   Step 2 (Erodieren): the wire between its two guides cuts the bore and entry cone through the carbide, with sparks.
   Step 3 (Senken): a shaped electrode sinks into the top face and leaves the head form.
   Step 4 (Umformen): the punch drives a wire blank into the die: shank into the bore, head upset into the form.
   Sizes are illustrative. */
var SCW=760,SCH=520,FX=380,FT=118,FB=428,FCH=212,FIH=82,FBH=10,FCO=28,FCD=30,FPH=40,FPD=34;
function frScene(o){
  var g='',mob=o.mob,i,T=FT,B=FB,X=FX;
  var fs=mob?" mob":"";
  g+='<svg class="frsc'+fs+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><pattern id="frH1" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="9" height="9" fill="#1e2024"/><path d="M0 0V9" stroke="rgba(244,243,241,.16)" stroke-width="1.2"/></pattern>'+
     '<pattern id="frH2" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)"><rect width="5" height="5" fill="#2b2e34"/><path d="M0 0V5" stroke="rgba(244,243,241,.24)" stroke-width="1"/></pattern>'+
     '<linearGradient id="frW" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#8f949b"/><stop offset=".45" stop-color="#eceef1"/><stop offset="1" stop-color="#7d8289"/></linearGradient>'+
     '<clipPath id="frClip"><rect x="0" y="0" width="'+SCW+'" height="'+SCH+'"/></clipPath></defs>';
  g+='<g clip-path="url(#frClip)">';
  /* axis */
  g+='<path class="axis" d="M'+X+' '+(T-120)+'V'+(B+70)+'"/>';
  /* steel casing (section, hatched) with a turned groove, and the carbide core (cross-hatched) */
  var gy=T+Math.round((B-T)*.66);
  g+='<g class="cas" id="frCas"><path class="fill" d="M'+(X-FCH)+' '+(T+8)+'L'+(X-FCH+8)+' '+T+'H'+(X-FIH)+'V'+B+'H'+(X-FCH+8)+'L'+(X-FCH)+' '+(B-8)+'V'+(gy+6)+'H'+(X-FCH+7)+'V'+(gy-6)+'H'+(X-FCH)+'Z"/>'+
     '<path class="fill" d="M'+(X+FCH)+' '+(T+8)+'L'+(X+FCH-8)+' '+T+'H'+(X+FIH)+'V'+B+'H'+(X+FCH-8)+'L'+(X+FCH)+' '+(B-8)+'V'+(gy+6)+'H'+(X+FCH-7)+'V'+(gy-6)+'H'+(X+FCH)+'Z"/></g>';
  g+='<g class="ins" id="frIns"><rect class="fill" x="'+(X-FIH)+'" y="'+T+'" width="'+(2*FIH)+'" height="'+(B-T)+'"/></g>';
  /* the cavities, drawn in the ground colour over the core: bore + entry cone (step 2), head form (step 3) */
  g+='<path class="cav" id="frBore" d=""/>';
  g+='<rect class="cav" id="frPock" x="'+(X-FPH)+'" y="'+T+'" width="'+(2*FPH)+'" height="0"/>';
  /* contour (outline) of the casing, drawn as the turning tool passes */
  var cl='M'+(X+FIH)+' '+T+'H'+(X+FCH-8)+'L'+(X+FCH)+' '+(T+8)+'V'+(gy-6)+'H'+(X+FCH-7)+'V'+(gy+6)+'H'+(X+FCH)+'V'+(B-8)+'L'+(X+FCH-8)+' '+B+'H'+(X+FIH);
  var cr='M'+(X-FIH)+' '+T+'H'+(X-FCH+8)+'L'+(X-FCH)+' '+(T+8)+'V'+(gy-6)+'H'+(X-FCH+7)+'V'+(gy+6)+'H'+(X-FCH)+'V'+(B-8)+'L'+(X-FCH+8)+' '+B+'H'+(X-FIH);
  g+='<path class="ctr" id="frC0" d="'+cl+'"/><path class="ctr" id="frC1" d="'+cr+'"/>';
  g+='<path class="seam" d="M'+(X-FIH)+' '+T+'V'+B+'M'+(X+FIH)+' '+T+'V'+B+'"/>';
  /* turning tool: an insert on its holder, right of the casing */
  g+='<g class="tool" id="frTool"><path class="tip" d="M'+(X+FCH)+' 0L'+(X+FCH+22)+' -9V9Z"/><rect class="hold" x="'+(X+FCH+22)+'" y="-8" width="96" height="16"/></g>';
  /* wire EDM: wire between two guides, sparks along the cut */
  g+='<g class="edm" id="frEdm"><path class="wire" d="M'+X+' '+(T-56)+'V'+(B+46)+'"/><rect class="gd" x="'+(X-16)+'" y="'+(T-72)+'" width="32" height="16"/><rect class="gd" x="'+(X-16)+'" y="'+(B+46)+'" width="32" height="16"/>';
  for(i=0;i<9;i++)g+='<circle class="spk" id="frS'+i+'" cx="'+X+'" cy="'+T+'" r="2.2"/>';
  g+='</g>';
  /* sink EDM electrode: shaped block on its holder */
  g+='<g class="ele" id="frEle"><rect class="hold" x="'+(X-14)+'" y="-140" width="28" height="60"/><path class="eb" d="M'+(X-FPH)+' -80H'+(X+FPH)+'V-6L'+(X+FPH-6)+' 0H'+(X-FPH+6)+'L'+(X-FPH)+' -6Z"/><path class="ef" d="M'+(X-FPH/3)+' -80V0M'+(X+FPH/3)+' -80V0"/></g>';
  /* the blank (drawn per frame) and the punch */
  g+='<path class="blank" id="frBl" d=""/>';
  g+='<g class="pun" id="frPun"><path class="eb" d="M'+(X-44)+' -170H'+(X+44)+'V-8L'+(X+40)+' 0H'+(X-40)+'L'+(X-44)+' -8Z"/><path class="ef" d="M'+(X-44)+' -34H'+(X+44)+'"/></g>';
  g+='</g>';
  /* labels: casing and core always; each tool's label with its step (x >= 436, clear of every moving part) */
  var ly1=mob?B+42:B+34,ly2=mob?B+78:B+34;
  g+='<g id="frLc"><text class="t" x="'+(X-FCH)+'" y="'+ly1+'">'+(mob?"STAHL":"STAHLGEHÄUSE")+'</text></g>';
  g+='<g id="frLi"><text class="t" text-anchor="end" x="'+(X+FCH)+'" y="'+ly2+'">'+(mob?"HARTMETALL":"HARTMETALLKERN")+'</text></g>';
  g+='<g id="frL1"><text class="t" x="'+(X+FCH+(mob?-2:8))+'" y="'+(T-(mob?40:30))+'">'+(mob?"DREHSTAHL":"DREHMEISSEL")+'</text></g>';
  g+='<g id="frL2"><text class="t" x="'+(X+40)+'" y="'+(T-(mob?84:76))+'">DRAHT</text></g>';
  g+='<g id="frL3"><text class="t" x="'+(X+56)+'" y="'+(T-(mob?84:76))+'">ELEKTRODE</text></g>';
  g+='<g id="frL4"><text class="t" x="'+(X+66)+'" y="'+(T-(mob?84:76))+'">STEMPEL</text></g>';
  return g+'</svg>';
}
function scene(){return frScene({mob:MOBILE()?1:0})}
function frBoreD(k){
  /* bore + entry cone, cut from the top down to depth fraction k */
  var T=FT,B=FB,X=FX,yb=T+(B-T)*k,yc=Math.min(yb,T+FCD),hc=FCO-(FCO-FBH)*((yc-T)/FCD);
  if(k<=0)return "";
  var d="M"+(X-FCO)+" "+T+"H"+(X+FCO)+"L"+(X+hc).toFixed(1)+" "+yc.toFixed(1);
  if(yb>yc)d+="L"+(X+FBH)+" "+(T+FCD)+"V"+yb.toFixed(1)+"H"+(X-FBH)+"V"+(T+FCD);
  else d+="H"+(X-hc).toFixed(1);
  return d+"L"+(X-hc).toFixed(1)+" "+yc.toFixed(1)+"Z";
}
function frBlankD(a,b){
  /* a: travel 0..1 into the die; b: upsetting 0..1. The part that stands above the form bottom (P + FPD) is upset into the
     head form at roughly constant volume; the shank ends SH below the form bottom. */
  var T=FT,X=FX,hw=FBH-1,P=Math.round(FPH*FPD/hw),SH=170,L=P+FPD+SH,yb=T-40+(FPD+SH+40)*a,yt=yb-L;
  if(b<=0)return {d:"M"+(X-hw)+" "+yt.toFixed(1)+"H"+(X+hw)+"V"+yb.toFixed(1)+"H"+(X-hw)+"Z",top:yt};
  var e=b*b*(3-2*b),ht=(T-P)+P*e,hh=hw+(FPH-hw)*e,yf=T+FPD;
  var d="M"+(X-hh).toFixed(1)+" "+ht.toFixed(1)+"H"+(X+hh).toFixed(1)+"V"+yf+"H"+(X+hw)+"V"+yb.toFixed(1)+"H"+(X-hw)+"V"+yf+"H"+(X-hh).toFixed(1)+"Z";
  return {d:d,top:ht};
}
function storyDraw(svg){
  var q=function(s){return svg.querySelector(s)};
  var E={cas:q("#frCas"),ins:q("#frIns"),bore:q("#frBore"),pock:q("#frPock"),c0:q("#frC0"),c1:q("#frC1"),tool:q("#frTool"),edm:q("#frEdm"),ele:q("#frEle"),
    bl:q("#frBl"),pun:q("#frPun"),Lc:q("#frLc"),Li:q("#frLi"),L1:q("#frL1"),L2:q("#frL2"),L3:q("#frL3"),L4:q("#frL4"),sp:[]};
  for(var i=0;i<9;i++)E.sp.push(q("#frS"+i));
  var len=[E.c0.getTotalLength(),E.c1.getTotalLength()];
  [E.c0,E.c1].forEach(function(c,i){c.style.strokeDasharray=len[i]+" "+len[i]});
  var lastB=-1;
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    var s1=seg(p,.02,.2),s2=seg(p,.27,.45),s3=seg(p,.52,.7),s4a=seg(p,.76,.86),s4b=seg(p,.86,.96);
    /* step 1: the contour draws in as the tool runs down; the section fills */
    E.c0.style.strokeDashoffset=(len[0]*(1-s1)).toFixed(1);E.c1.style.strokeDashoffset=(len[1]*(1-s1)).toFixed(1);
    op(E.cas,b*(.35+.65*s1));op(E.ins,b*(.35+.65*s1));
    var ty=FT+(FB-FT)*s1;E.tool.setAttribute("transform","translate(0 "+ty.toFixed(1)+")");
    op(E.tool,b*(1-seg(p,.22,.26)));op(E.L1,b*(1-seg(p,.22,.26)));
    /* step 2: the wire cuts the bore and cone, top to bottom */
    var on2=seg(p,.24,.27)*(1-seg(p,.47,.5));op(E.edm,b*on2);op(E.L2,b*on2);
    E.bore.setAttribute("d",frBoreD(s2));
    var t=performance.now()/1000;
    E.sp.forEach(function(c,i){var k=(i*.37+t*3.1)%1,yy=FT+(FB-FT)*s2-k*26,sd=(i%2?1:-1);
      c.setAttribute("cx",(FX+sd*(FBH+1)).toFixed(1));c.setAttribute("cy",yy.toFixed(1));op(c,(s2>0&&s2<1)?(1-k):0)});
    /* step 3: the electrode comes down and sinks the form */
    var on3=seg(p,.49,.52)*(1-seg(p,.72,.75));op(E.ele,b*on3);op(E.L3,b*on3);
    var ey=(FT-90)+(90)*seg(p,.5,.56)+FPD*s3;
    E.ele.setAttribute("transform","translate(0 "+ey.toFixed(1)+")");
    E.pock.setAttribute("height",(FPD*s3).toFixed(1));
    /* step 4: the punch drives the blank in and upsets the head */
    var on4=seg(p,.73,.76);op(E.pun,b*on4);op(E.bl,b*on4);op(E.L4,b*on4);
    var bl=frBlankD(s4a,s4b);E.bl.setAttribute("d",bl.d);E.pun.setAttribute("transform","translate(0 "+bl.top.toFixed(1)+")");
    if(b!==lastB){lastB=b;op(E.Lc,b);op(E.Li,b)}
  };
}
