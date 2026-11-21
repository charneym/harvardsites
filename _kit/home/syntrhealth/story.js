/* The story scene (BL/BY/DB): the SyntrFuge procedure as Syntr describes it (syntrhealth.com/syntrfuge-system, home page),
   as ONE continuous engraved scene. Top: the harvest syringe (syringe vacuum liposuction, in office). Middle: the SyntrFuge
   AdipoChambers joined by the AdipoSets, spun by the SyntrFPU 360. Bottom: the reinjection syringe and blunt-tip cannula.
   Step 1: the plunger draws back and coarse fat lobules fill the barrel. Step 2: the lobules are pushed into the first
   AdipoChamber and shuttled back and forth through the AdipoSets, breaking down pass by pass into small, even microfat
   particles. Step 3: the microfat lines the cannula, ready for reinjection. Every element is driven by the scrubbed story
   progress. The fat is drawn in Syntr's own yellow (the call-to-action colour on syntrhealth.com). */
var SCW=760,SCH=520;
var FAT=(function(){var s=360,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff},P=[],i,c;
  var OFF=[[-6,-4],[6,-4],[0,6]];
  for(i=0;i<9;i++){
    var A=[150+i*35,92+(R()-.5)*14];                                     /* in the harvest syringe */
    var B=[62+(i%3)*42+12,240+Math.floor(i/3)*32+8];                      /* in the first AdipoChamber */
    for(c=0;c<3;c++){var j=i*3+c;
      var D=[604+(j%5)*24+(Math.floor(j/5)%2)*8,234+Math.floor(j/5)*17+(R()-.5)*4];  /* microfat, in the far chamber */
      var E=[316+j*13.8,440];                                               /* lining the cannula */
      P.push({i:i,c:c,o:OFF[c],A:A,B:B,D:D,E:E})}}
  return P})();
function memScene(o){
  var f=function(n){return (+n).toFixed(1)},g='',i;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g id="scBase">';
  /* harvest syringe: flange, barrel with graduations, nozzle */
  g+='<path class="sD ln" d="M108 52V132M108 64H470V120H108"/>';
  g+='<path class="sD ln" d="M470 78H500V106H470M500 86H540V98H500"/>';
  for(i=0;i<12;i++)g+='<path class="sD tk" d="M'+(150+i*26)+' 64V'+(i%3===0?78:72)+'"/>';
  /* the SyntrFuge: two AdipoChambers joined by the AdipoSets */
  g+='<path class="sD ln" d="M40 214H176V338H40Z"/>';
  g+='<path class="sD ln" d="M584 214H720V338H584Z"/>';
  g+='<path class="sD ln" d="M176 258H584M176 292H584"/>';
  [270,380,490].forEach(function(x){g+='<path class="sD sc" d="M'+x+' 258V292M'+(x+8)+' 258V292"/>'});
  /* the spin of the SyntrFPU 360, under the set */
  g+='<path class="sD sp" d="M290 352A120 26 0 0 0 470 352"/><path class="sD sp" d="M461 345L470 352L459 357"/>';
  /* reinjection syringe and blunt-tip cannula */
  g+='<path class="sD ln" d="M40 412V468M40 420H236V460H40"/>';
  g+='<path class="sD ln" d="M236 424H290V456H236M290 432H704A8 8 0 0 1 704 448H290"/>';
  g+='<text class="t" x="24" y="30">SYRINGE HARVEST · IN OFFICE</text>';
  g+='<text class="t" x="40" y="204">ADIPOCHAMBER</text><text class="t" x="720" y="204" text-anchor="end">ADIPOCHAMBER</text>';
  g+='<text class="t" x="380" y="248" text-anchor="middle">ADIPOSETS</text>';
  g+='<text class="t" x="380" y="398" text-anchor="middle">SYNTRFPU 360 · SPIN</text>';
  g+='<text class="t" x="24" y="'+(SCH-6)+'">BLUNT-TIP CANNULA · REINJECTION</text>';
  g+='</g>';
  /* plungers: the head sits at x=0 of each group */
  g+='<g id="pl1"><path class="pl" d="M0 68V116M0 92H-96M-96 74V110"/></g>';
  g+='<g id="pl2"><path class="pl" d="M0 424V456M0 440H-96M-96 428V452"/></g>';
  /* the fat */
  g+='<g id="scFat">';
  FAT.forEach(function(p,k){g+='<circle class="fat" data-k="'+k+'" cx="'+f(p.A[0]+p.o[0])+'" cy="'+f(p.A[1]+p.o[1])+'" r="9"/>'});
  g+='</g>';
  g+='<g id="lb1"><text class="a" x="740" y="172" text-anchor="end">1 · THE PATIENT’S OWN FAT</text></g>';
  g+='<g id="lb2"><text class="a" x="740" y="172" text-anchor="end">2 · MICROSIZED, AUTOMATICALLY</text></g>';
  g+='<g id="lb3"><text class="a" x="740" y="172" text-anchor="end">3 · READY TO REINJECT</text></g>';
  return g+'</svg>';
}
function scene(){return memScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),fat:$$(".fat",svg).map(function(el){return {el:el,p:FAT[+el.getAttribute("data-k")]}}),
    pl1:$("#pl1",svg),pl2:$("#pl2",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function lp(a,b,t){return a+(b-a)*t}
  function cl(x){return x<0?0:x>1?1:x}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    /* step 1: the plunger draws back as the lobules fill the barrel; then it pushes them on into the chamber */
    var fill=seg(p,.04,.24),push=seg(p,.28,.4),inj=seg(p,.74,.92);
    E.pl1.setAttribute("transform","translate("+(lp(462,142,fill)+(462-142)*push).toFixed(1)+" 0)");
    E.pl2.setAttribute("transform","translate("+lp(140,232,inj).toFixed(1)+" 0)");
    op(E.pl1,b);op(E.pl2,b);
    var t2=seg(p,.42,.68),u=(1-Math.cos(t2*Math.PI*3))/2,ch=Math.sin(Math.PI*u);
    E.fat.forEach(function(F,k){var P=F.p,o=P.o,x,y,r=9;
      var vis=cl(fill*1.6-P.i*.07);
      var t1=cl(push*1.5-(8-P.i)*.06);t1=t1*t1*(3-2*t1);
      var ax=P.A[0]+o[0],ay=P.A[1]+o[1],bx=P.B[0]+o[0],by=P.B[1]+o[1];
      x=lp(ax,bx,t1);y=lp(ay,by,t1)-Math.sin(Math.PI*t1)*18;
      if(t2>0){
        /* back and forth through the AdipoSets: the lobules break into even microfat, pass by pass */
        var by2=lp(by,P.D[1],u);x=lp(bx,P.D[0],u);y=lp(by2,275+((k%5)-2)*5.2,ch);
        r=lp(9,3.6,t2)}
      var t3=cl(inj*1.45-(26-k)*.017);t3=t3*t3*(3-2*t3);
      if(t3>0){x=lp(x,P.E[0],t3);y=lp(y,P.E[1],t3)+Math.sin(Math.PI*t3)*30;r=3.6}
      F.el.setAttribute("cx",x.toFixed(1));F.el.setAttribute("cy",y.toFixed(1));F.el.setAttribute("r",r.toFixed(2));
      op(F.el,b*vis);
    });
    op(E.l1,b*seg(p,.08,.16)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.44,.52)*(1-seg(p,.66,.72)));op(E.l3,b*seg(p,.8,.88));
  };
}
