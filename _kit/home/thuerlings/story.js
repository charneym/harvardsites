/* The story scene (BL/BY/DB): the Linearpac 85 M exactly as thuerlings.de > Maschinen > Linearpac 85 M describes it
   ("Aus einem Magazin entstapelt werden die Beutel in der intermittierend linear laufenden Vorschiebekette platziert. Zwei
   Halbschalen tauchen auf der Füllstation in den Beutelkopf ein und bilden eine ideale Präsentation des Beutels zur Befüllung,
   bevor sechs Finger auf der nächsten Station die Seitenfalte wieder einlegen. Die Versiegelung ..."), drawn as ONE line
   elevation kept on screen for all four steps: magazine, chain, filling station and sealing station, with one block-bottom bag
   travelling through them.
   1 Entstapeln: the bottom bag leaves the magazine and stands up in the chain.
   2 Aufspannen: the chain indexes to the filling station; two half shells dip into the bag head and open it.
   3 Befüllen: the product falls through the funnel between the shells; the fill level rises.
   4 Verschließen: the shells lift, the chain indexes on; six fingers tuck the side gussets, the jaws close, the seal shows. */
var THS=[170,390,610],THY=374;
function thScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 760 520" aria-hidden="true"><defs>'+
     '<linearGradient id="thMet" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9fb0bf"/><stop offset=".5" stop-color="#e6edf3"/><stop offset="1" stop-color="#6d7f8f"/></linearGradient>'+
     '<clipPath id="thBagClip"><rect x="-37" y="236" width="74" height="137"/></clipPath></defs>';
  if(!mob)g+='<text class="t" x="40" y="30">LINEARPAC 85 M · VORSCHIEBEKETTE</text>';
  /* magazine over station 1, with the stack of flat bags */
  var m=THS[0];
  g+='<path class="ln sD" d="M'+(m-52)+' 72V186H'+(m-40)+'M'+(m+52)+' 72V186H'+(m+40)+'"/>';
  g+='<g id="thStack">';for(i=0;i<7;i++)g+='<rect class="fb" x="'+(m-44)+'" y="'+(88+i*13)+'" width="88" height="6"/>';g+='</g>';
  g+='<text class="cl" id="thLm" x="'+m+'" y="58" text-anchor="middle">MAGAZIN</text>';
  /* the chain: two sprockets, upper and lower run, travelling link marks */
  g+='<path class="ln sD" d="M56 '+(THY+2)+'H704M56 410H704"/>';
  g+='<circle class="ln" cx="56" cy="393" r="17"/><circle class="ln" cx="704" cy="393" r="17"/><circle class="hub" cx="56" cy="393" r="4"/><circle class="hub" cx="704" cy="393" r="4"/>';
  g+='<path class="lk" id="thLk1" d="M64 382H696"/><path class="lk" id="thLk2" d="M64 404H696"/>';
  /* filling station: funnel and the two half shells on their rods */
  var f=THS[1];
  g+='<g id="thFun"><path class="ln" d="M'+(f-28)+' 96L'+(f-8)+' 150V172M'+(f+28)+' 96L'+(f+8)+' 150V172"/><path class="pl" d="M'+(f-28)+' 96H'+(f+28)+'"/></g>';
  g+='<g id="thSh"><path class="met" d="M'+(f-35)+' 222V250Q'+(f-35)+' 262 '+(f-23)+' 262H'+(f-8)+'V222Z"/><path class="met" d="M'+(f+35)+' 222V250Q'+(f+35)+' 262 '+(f+23)+' 262H'+(f+8)+'V222Z"/>'+
     '<path class="ln" d="M'+(f-35)+' 222V90M'+(f+35)+' 222V90"/></g>';
  g+='<text class="cl" id="thLh" x="'+(f-50)+'" y="'+(mob?128:132)+'" text-anchor="end">'+(mob?"SCHALEN":"HALBSCHALEN")+'</text>';
  g+='<g id="thPc">';for(i=0;i<6;i++)g+='<rect class="pc" x="-4" y="-4" width="8" height="8"/>';g+='</g>';
  /* sealing station: six fingers and the jaws */
  var s=THS[2];
  g+='<g id="thFi">';[0,1,2].forEach(function(k){var y=250+k*11;g+='<rect class="fi fiL" x="'+(s-82)+'" y="'+y+'" width="30" height="5"/><rect class="fi fiR" x="'+(s+52)+'" y="'+y+'" width="30" height="5"/>'});g+='</g>';
  g+='<g id="thJw"><rect class="jw" x="'+(s-50)+'" y="214" width="100" height="16"/><path class="ln" d="M'+(s-22)+' 214V150M'+(s+22)+' 214V150"/></g>';
  g+='<text class="cl" id="thLf" x="'+s+'" y="108" text-anchor="middle">'+(mob?"6 FINGER":"SECHS FINGER")+'</text>';
  g+='<text class="cl" id="thLs" x="'+s+'" y="108" text-anchor="middle">'+(mob?"SIEGEL":"VERSIEGELUNG")+'</text>';
  /* the bag (local x about 0): front panel, block bottom, gusset folds, the opening, fill and seal */
  g+='<g id="thBag"><g id="thBagIn">'+
     '<path class="bag" id="thBody" d="M-38 374V234H38V374Z"/>'+
     '<g clip-path="url(#thBagClip)"><rect class="fill" id="thFill" x="-37" y="373" width="74" height="0"/></g>'+
     '<path class="pl" d="M-38 360H38M-26 236V360M26 236V360"/>'+
     '<path class="mouth" id="thMouth" d="M-38 234Q0 234 38 234Q0 234 -38 234Z"/>'+
     '<g id="thSeal"><rect class="seal" x="-38" y="234" width="76" height="14"/><path class="crimp" d="M-30 236V246M-22 236V246M-14 236V246M-6 236V246M2 236V246M10 236V246M18 236V246M26 236V246"/></g>'+
     '</g></g>';
  /* station marks and labels under the chain */
  var SL=mob?["MAGAZIN","FÜLLEN","SIEGELN"]:["MAGAZIN","FÜLLSTATION","SIEGELSTATION"];
  THS.forEach(function(x,k){g+='<path class="tk" d="M'+x+' 420V428"/><text class="a" id="thS'+k+'" x="'+x+'" y="'+(mob?462:452)+'" text-anchor="middle">'+SL[k]+'</text>'});
  if(!mob)g+='<text class="ok" id="thOk" x="704" y="496" text-anchor="end">BEUTEL VERSIEGELT</text>';
  return g+'</svg>';
}
function scene(){return thScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),bag:$("#thBag",svg),bin:$("#thBagIn",svg),mouth:$("#thMouth",svg),fill:$("#thFill",svg),seal:$("#thSeal",svg),
    stack:$("#thStack",svg),fun:$("#thFun",svg),sh:$("#thSh",svg),pcs:$$("#thPc rect",svg),fi:$("#thFi",svg),fiL:$$(".fiL",svg),fiR:$$(".fiR",svg),jw:$("#thJw",svg),
    lk:[$("#thLk1",svg),$("#thLk2",svg)],S:[0,1,2].map(function(k){return $("#thS"+k,svg)}),Lm:$("#thLm",svg),Lh:$("#thLh",svg),Lf:$("#thLf",svg),Ls:$("#thLs",svg),ok:$("#thOk",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=(+v).toFixed(3)}
  function tr(el,x,y){el.setAttribute("transform","translate("+x.toFixed(1)+","+y.toFixed(1)+")")}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    /* where the bag is: station 1, index to 2 (.27-.35), index to 3 (.77-.85) */
    var m1=seg(p,.27,.35),m2=seg(p,.77,.85),bx=THS[0]+(THS[1]-THS[0])*m1+(THS[2]-THS[1])*m2;
    E.lk.forEach(function(l){l.style.strokeDashoffset=(-(bx-THS[0])).toFixed(1)});
    /* 1: the bottom bag leaves the magazine and stands up */
    var dr=seg(p,.03,.17);tr(E.bag,bx,0);
    E.bin.setAttribute("transform","translate(0,"+(-150*(1-dr)).toFixed(1)+") translate(0,374) scale(1,"+(.06+.94*dr).toFixed(3)+") translate(0,-374)");
    op(E.bag,b*(dr>0?1:0));op(E.stack,b*(1-.25*dr));
    /* 2: the shells dip into the head and open it; they lift again before the chain indexes on */
    var dip=seg(p,.37,.46)*(1-seg(p,.72,.77));tr(E.sh,0,-72*(1-dip));op(E.sh,b);
    var open=seg(p,.42,.5)*(1-seg(p,.86,.91)),oy=(18*open).toFixed(1);
    E.mouth.setAttribute("d","M-38 234Q0 "+(234-+oy)+" 38 234Q0 "+(234+ +oy)+" -38 234Z");op(E.mouth,b*(open>.01?1:0));
    /* 3: product falls through the funnel between the shells, the level rises */
    var fn=seg(p,.5,.55)*(1-seg(p,.74,.78));op(E.fun,b*(.25+.75*fn));
    var lv=seg(p,.56,.72),top=373-96*lv;E.fill.setAttribute("y",top.toFixed(1));E.fill.setAttribute("height",(373-top).toFixed(1));
    var on=p>.54&&p<.72;E.pcs.forEach(function(r,i){var q=((p-.54)/.18*3+i/6)%1;if(q<0)q+=1;var y=176+q*(top-10-176),x=THS[1]+[-5,4,-2,6,-4,1][i];
      r.setAttribute("transform","translate("+x+","+y.toFixed(1)+") rotate("+(i*37+q*90).toFixed(0)+")");op(r,b*(on?Math.min(1,q*6)*(1-seg(q,.9,1)):0))});
    /* 4: six fingers tuck the gussets, the jaws close and open, the seal shows */
    var fin=seg(p,.85,.9)*(1-seg(p,.95,.99));E.fiL.forEach(function(r){r.setAttribute("transform","translate("+(16*fin).toFixed(1)+",0)")});E.fiR.forEach(function(r){r.setAttribute("transform","translate("+(-16*fin).toFixed(1)+",0)")});
    op(E.fi,b*seg(p,.8,.85));
    var jw=seg(p,.9,.93)*(1-seg(p,.96,.99));tr(E.jw,0,-40*(1-jw));op(E.jw,b*seg(p,.86,.9));
    op(E.seal,b*seg(p,.93,.96));op(E.ok,b*seg(p,.95,.98));
    /* labels: the current one lights, tool labels show with their step */
    var cur=p<.25?0:p<.5?1:p<.75?2:3,st=cur===0?0:cur<3?1:2;
    E.S.forEach(function(t,k){t.classList.toggle("on",k===st);op(t,b*(k===st?1:.55))});
    op(E.Lm,b*(1-seg(p,.22,.27)));op(E.Lh,b*seg(p,.36,.42)*(1-seg(p,.72,.76)));
    op(E.Lf,b*seg(p,.82,.86)*(1-seg(p,.9,.92)));op(E.Ls,b*seg(p,.92,.95));
  };
}
