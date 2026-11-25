/* The story scene (BL/BY/DB): valve-in-valve crossing with EasyCross, as ViVHeart's published papers describe it, as ONE continuous
   scene for all three steps: a long section through the aortic root (aorta on the left, sinuses, the annulus and the left
   ventricle on the right) holding a transcatheter valve, whose frame is drawn as its diamond cells. Step 1: a free guidewire
   wanders outside the frame, toward a strut (the hazard). Step 2: that path fades; EasyCross comes in along the aorta and opens its
   six-arm basket, centring its tip on the prosthesis outflow. Step 3: the guidewire leaves the tip inside the frame, crosses the
   leaflets and curls into a pigtail in the ventricle. Driven by the scrubbed story progress. */
var SCW=760,SCH=520,VC=250;
function vwall(top){
  /* aortic wall, sinus bulge, annulus, ventricle; mirrored for the lower wall */
  var s=top?-1:1,y=function(v){return (VC+s*v).toFixed(1)};
  return "M10 "+y(96)+"L330 "+y(96)+"C380 "+y(96)+" 392 "+y(138)+" 450 "+y(138)+"C520 "+y(138)+" 548 "+y(104)+" 572 "+y(84)+
    "L606 "+y(70)+"C640 "+y(76)+" 680 "+y(108)+" 750 "+y(128)}
function frameD(){
  /* THV frame in side view: diamond cells between x 478 and 610, |y| <= 64 */
  var d="",x0=478,x1=610,cols=4,rows=6,i,j,cw=(x1-x0)/cols,rh=128/rows;
  for(j=0;j<=rows;j++){var y0=VC-64+j*rh;
    for(i=0;i<cols;i++){var xa=x0+i*cw,xm=xa+cw/2,xb=xa+cw;
      if(j<rows)d+="M"+xa.toFixed(1)+" "+y0.toFixed(1)+"L"+xm.toFixed(1)+" "+(y0+rh/2).toFixed(1)+"L"+xb.toFixed(1)+" "+y0.toFixed(1)+
        "M"+xa.toFixed(1)+" "+(y0+rh).toFixed(1)+"L"+xm.toFixed(1)+" "+(y0+rh/2).toFixed(1)+"L"+xb.toFixed(1)+" "+(y0+rh).toFixed(1)}}
  return d+"M"+x0+" "+(VC-64)+"H"+x1+"M"+x0+" "+(VC+64)+"H"+x1}
function armD(k,open){
  /* arm k of six, projected: its height is the basket radius times the cosine of its angle */
  var ph=k*Math.PI/3+.32,R=6+52*open,hgt=R*Math.cos(ph),x0=318,x1=436,bow=Math.sin(ph)*R*.18;
  return "M"+x0+" "+(VC+Math.sign(hgt||1)*5).toFixed(1)+"C"+(x0+24+bow).toFixed(1)+" "+(VC+hgt*1.3).toFixed(1)+" "+(x1-28+bow).toFixed(1)+" "+(VC+hgt*1.3).toFixed(1)+" "+x1+" "+(VC+Math.sign(hgt||1)*5).toFixed(1)}
function vScene(o){
  var g='',i,mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g id="scBase">';
  g+='<path class="wl sD" d="'+vwall(1)+'"/><path class="wl sD" d="'+vwall(0)+'"/>';
  g+='<path class="fr sD" d="'+frameD()+'"/>';
  g+='<path class="lf sD" d="M600 186C590 214 576 240 560 250M600 314C590 286 576 260 560 250"/>';
  g+='<text class="t" x="12" y="40">AORTIC ROOT · LONG SECTION</text>';
  g+='<text class="t" x="'+(mob?560:600)+'" y="40">'+(mob?"VALVE":"PROSTHESIS")+'</text>';
  g+='</g>';
  /* step 1: a free wire, outside the frame toward a strut */
  g+='<path id="bad" class="bad" d="M10 268C140 268 260 262 340 226C410 194 452 168 484 170C506 172 512 182 520 186"/>';
  g+='<circle id="badX" class="bx" cx="520" cy="186" r="7"/>';
  /* step 2: EasyCross */
  g+='<g id="cath"><path id="shaft" class="sh" d="M10 '+(VC-6)+'H318V'+(VC+6)+'H10Z"/><g id="bsk">';
  for(i=0;i<6;i++)g+='<path class="arm"/>';
  g+='<path class="sh" d="M436 '+(VC-6)+'H452Q462 '+VC+' 452 '+(VC+6)+'H436Z"/><path class="sh" d="M312 '+(VC-6)+'H322V'+(VC+6)+'H312Z"/></g></g>';
  /* step 3: the guidewire through the prosthesis and the pigtail in the ventricle */
  g+='<path id="gw" class="gw" d="M458 250H640C676 250 700 238 700 222C700 206 680 200 668 210C656 220 664 236 680 236"/>';
  g+='<g id="lb1"><text class="a" x="12" y="476">'+(mob?"WIRE OUTSIDE THE FRAME":"A FREE WIRE CAN PASS OUTSIDE THE FRAME")+'</text></g>';
  g+='<g id="lb2"><text class="a" x="12" y="476">'+(mob?"SIX ARMS CENTRE THE TIP":"SIX-ARM BASKET OPENS, CENTRING THE TIP")+'</text></g>';
  g+='<g id="lb3"><text class="a" x="12" y="476">'+(mob?"CROSSES IN THE TRUE LUMEN":"THE WIRE CROSSES IN THE TRUE LUMEN")+'</text></g>';
  return g+'</svg>';
}
function scene(){return vScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),bad:dl("#bad")[0],bx:$("#badX",svg),cath:$("#cath",svg),shaft:$("#shaft",svg),bsk:$("#bsk",svg),arms:$$("#cath .arm",svg),
    gw:dl("#gw")[0],l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    /* step 1 (0.04-0.24): the free wire draws in toward a strut; it fades as step 2 begins (0.34-0.42) */
    var bd=seg(p,.04,.24),bf=1-seg(p,.34,.42);
    E.bad[0].style.strokeDashoffset=(E.bad[1]*(1-bd)).toFixed(1);op(E.bad[0],b*bf);op(E.bx,b*seg(p,.2,.26)*bf);
    /* step 2: the catheter slides in (0.36-0.5), the basket opens (0.5-0.62) */
    var cin=seg(p,.36,.5),open=seg(p,.5,.62);
    /* nothing is drawn outside the frame: the shaft grows in from the scene's left edge and carries the closed basket */
    var off=300*(1-cin);E.bsk.setAttribute("transform","translate("+(-off).toFixed(1)+" 0)");
    E.shaft.setAttribute("d","M10 "+(VC-6)+"H"+(318-off).toFixed(1)+"V"+(VC+6)+"H10Z");op(E.cath,b*Math.min(1,cin*6));
    E.arms.forEach(function(a,k){a.setAttribute("d",armD(k,open))});
    /* step 3: the wire leaves the tip and crosses (0.7-0.9) */
    var gw=seg(p,.7,.9);E.gw[0].style.strokeDashoffset=(E.gw[1]*(1-gw)).toFixed(1);op(E.gw[0],b*(gw>0?1:0));
    op(E.l1,b*seg(p,.08,.16)*(1-seg(p,.3,.34)));op(E.l2,b*seg(p,.5,.58)*(1-seg(p,.66,.7)));op(E.l3,b*seg(p,.8,.88));
  };
}
