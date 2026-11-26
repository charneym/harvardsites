/* The story scene (BL/BY/DB): one extrusion line as gillardcutting.com describes it. Side elevation, kept on screen:
   Step 1 (Pull): the extrusion arrives and a twin-belt caterpillar haul-off grips it ("twin direct-drive AC servo motors;
     one motor/drive per belt", belt lengths 250-1800 mm).
   Step 2 (Guide): it feeds through the cutter's guide bush (Servo-Torq capacities up to 300 mm outer diameter).
   Step 3 (Cut): the fly knife sweeps across the bush face; one cut, one piece ("automatic stepless cutting from 1 to
     2,000 cuts/minute").
   Step 4 (Collect): a conveyor supports the extrusion out of the cutter and carries the cut lengths away; cut length,
     rate and quality are ticked off. Sizes are illustrative. */
var SCW=760,SCH=520,TY=218,TH=24,BF=402,PL=72,KX=405,KY=372,KR=218;
function frScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="gcsc'+(mob?" mob":"")+'" viewBox="'+(mob?'0 100 760 432':'0 100 760 385')+'" aria-hidden="true">';
  /* conveyor (step 4) sits under everything after the cutter */
  g+='<g id="gcCv"><rect class="cvb" x="440" y="'+(TY+TH+4)+'" width="290" height="14"/><circle class="cvr" cx="447" cy="'+(TY+TH+11)+'" r="7"/><circle class="cvr" cx="723" cy="'+(TY+TH+11)+'" r="7"/><path class="cvl" id="gcCl" d="M454 '+(TY+TH+11)+'H716"/></g>';
  /* the extrusion: one band that grows from the left up to the bush face, plus the stub fed past it */
  g+='<rect class="tb" id="gcTb" x="24" y="'+TY+'" width="0" height="'+TH+'"/>';
  g+='<rect class="tb" id="gcSt" x="'+BF+'" y="'+TY+'" width="0" height="'+TH+'"/>';
  for(i=0;i<4;i++)g+='<rect class="tb pc" id="gcP'+i+'" x="'+BF+'" y="'+TY+'" width="'+PL+'" height="'+TH+'"/>';
  /* step 1: caterpillar haul-off, two belts round their pulleys, cleats moving */
  g+='<g id="gcCa"><rect class="frm" x="58" y="118" width="250" height="226"/>';
  [[TY-56,TY-4],[TY+TH+4,TY+TH+56]].forEach(function(b){var cy=(b[0]+b[1])/2,r=(b[1]-b[0])/2;
    g+='<rect class="blt" x="78" y="'+b[0]+'" width="210" height="'+(b[1]-b[0])+'" rx="'+r+'"/><circle class="pul" cx="'+(78+r)+'" cy="'+cy+'" r="'+(r-7)+'"/><circle class="pul" cx="'+(288-r)+'" cy="'+cy+'" r="'+(r-7)+'"/>'});
  g+='<path class="clt" id="gcK1" d="M100 '+(TY-4)+'H266"/><path class="clt" id="gcK2" d="M100 '+(TY+TH+4)+'H266"/></g>';
  /* step 2: the cutter's guide bush (a block with the bore) */
  g+='<g id="gcBu"><rect class="bush" x="352" y="'+(TY-46)+'" width="'+(BF-352)+'" height="'+(TH+92)+'"/><path class="bore" d="M352 '+(TY-3)+'H'+BF+'M352 '+(TY+TH+3)+'H'+BF+'"/></g>';
  /* step 3: the fly knife on its hub below the line; the blade is a line from the hub whose tip rises through the bush face */
  g+='<g id="gcKn"><path class="kb" id="gcKb" d="M'+KX+' '+KY+'V'+(KY-60)+'"/><circle class="hub" cx="'+KX+'" cy="'+KY+'" r="22"/><circle class="hubi" cx="'+KX+'" cy="'+KY+'" r="7"/></g>';
  /* band labels, one per step (y below the scene) */
  var BY=mob?452:462;
  var LB=mob?["PULL · TWIN SERVO BELTS","GUIDE BUSH · TO 300 MM OD","CUT · 1 TO 2,000 PER MIN"]:["PULL · TWIN SERVO BELTS · 250 TO 1800 MM","GUIDE BUSH · UP TO 300 MM OD","FLY KNIFE · 1 TO 2,000 CUTS A MINUTE"];
  LB.forEach(function(s,k){g+='<g id="gcB'+(k+1)+'"><text class="t" x="24" y="'+BY+'">'+s+'</text></g>'});
  var R=mob?[[24,440],[24,478],[24,516]]:[[24,462],[284,462],[524,462]];
  g+='<g id="gcRd">';["CUT LENGTH","CUT RATE","CUT QUALITY"].forEach(function(s,k){var cx=mob?330:R[k][0]+(k===0?120:k===1?96:132);
    g+='<text class="t" x="'+R[k][0]+'" y="'+R[k][1]+'">'+s+'</text><path class="ok rk" d="M'+cx+' '+(R[k][1]-7)+'l5 5l10 -11"/>'});g+='</g>';
  return g+'</svg>';
}
function scene(){return frScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var q=function(s){return svg.querySelector(s)};
  var E={cv:q("#gcCv"),cl:q("#gcCl"),tb:q("#gcTb"),st:q("#gcSt"),ca:q("#gcCa"),k1:q("#gcK1"),k2:q("#gcK2"),bu:q("#gcBu"),kn:q("#gcKn"),kb:q("#gcKb"),
    b1:q("#gcB1"),b2:q("#gcB2"),b3:q("#gcB3"),rd:q("#gcRd"),pc:[0,1,2,3].map(function(i){return q("#gcP"+i)}),rk:[].slice.call(svg.querySelectorAll("#gcRd .rk"))};
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  var CUT=.8;           /* where in each feed cycle the knife passes */
  return function(p,b){
    if(!svg.isConnected)return;
    /* step 1 (0-.25): the caterpillar appears, the extrusion runs in to the bush face; cleats travel with it */
    op(E.ca,b*seg(p,0,.08));
    var run=seg(p,.03,.42);E.tb.setAttribute("width",((BF-24)*run).toFixed(1));op(E.tb,b);
    var off=(-p*900).toFixed(1);E.k1.style.strokeDashoffset=off;E.k2.style.strokeDashoffset=off;
    op(E.b1,b*(1-seg(p,.24,.27)));
    /* step 2 (.25-.5): the guide bush */
    op(E.bu,b*seg(p,.27,.34));op(E.b2,b*seg(p,.27,.3)*(1-seg(p,.49,.52)));
    /* step 3 (.5-.75): the knife on its hub; feed cycles start: each cycle feeds one piece length past the face, the knife sweeps, the piece drops free */
    op(E.kn,b*seg(p,.5,.55));op(E.b3,b*seg(p,.52,.55)*(1-seg(p,.74,.77)));
    var u=Math.max(0,(p-.55)/.45*3.2),cyc=Math.floor(u),f=u-cyc;
    var feed=u<=0?0:(f<CUT?f/CUT:0);
    if(u>=3.2-1e-6){feed=0}
    E.st.setAttribute("width",(PL*Math.min(1,feed)).toFixed(1));op(E.st,b*(u>0?1:0));
    /* blade: projected tip height, swept up through the line around each cut */
    var sw=0;if(u>0){var d=f-CUT;if(d>=-.12&&d<.08)sw=Math.sin(Math.PI*(d+.12)/.2)}
    var tip=KY-60-(KR-60)*Math.max(0,sw);E.kb.setAttribute("d","M"+KX+" "+KY+"V"+tip.toFixed(1));
    /* cut pieces: piece k was cut at u = k + CUT; it moves right with the conveyor (one pitch per cycle) */
    for(var k=0;k<4;k++){var t=u-(k+CUT),el=E.pc[k];
      if(t<0||u<=0){op(el,0);continue}
      var x=BF+6+t*96;el.setAttribute("x",x.toFixed(1));op(el,b*(1-seg(x,650,700)))}
    /* step 4 (.75-1): conveyor under the cut lengths, readout */
    op(E.cv,b*seg(p,.72,.78));E.cl.style.strokeDashoffset=(-p*600).toFixed(1);
    op(E.rd,b*seg(p,.77,.8));
    E.rk.forEach(function(r,k){op(r,seg(p,.84+k*.04,.87+k*.04))});
  };
}
