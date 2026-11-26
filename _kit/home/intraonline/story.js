/* The story scene (BL/BY/DB/DT): the Seldinger technique that every intra arterial and venous catheter set is built for
   (intra-online.de > Zentralvenöse Katheter, Verpackungsinhalt: Seldinger-Punktionsnadel, Führungsdraht mit flexibler J-Spitze
   und Einhandtechnik, Dilatator), drawn as ONE calm fine-line section through skin, tissue and vessel, kept on screen for all
   four steps. No blood, no wound: neutral strokes only.
   Step 1 (Punktion): the needle enters through the skin into the vessel lumen.
   Step 2 (Draht): the guidewire runs through the needle and on along the vessel, its J-tip curling; the needle withdraws.
   Step 3 (Dilatator): the dilator slides over the wire and widens the track, then withdraws.
   Step 4 (Katheter): the catheter (cm marks) follows over the wire, the wire withdraws, the clip fixes the hub. */
var SCW=760,SCH=520;
var IO_A=35*Math.PI/180,IO_C=Math.cos(IO_A),IO_S=Math.sin(IO_A),IO_X0=60,IO_Y0=104;
function ioP(s){return [IO_X0+IO_C*s,IO_Y0+IO_S*s]}
function ioF(v){return v.toFixed(1)}
/* a straight tube from s1 to s2 along the entry line, width w1 -> w2 (a tapered outline) */
function ioTube(s1,s2,w1,w2){var a=ioP(s1),b=ioP(s2),nx=-IO_S,ny=IO_C;
  return "M"+ioF(a[0]+nx*w1/2)+" "+ioF(a[1]+ny*w1/2)+"L"+ioF(b[0]+nx*w2/2)+" "+ioF(b[1]+ny*w2/2)+"L"+ioF(b[0]-nx*w2/2)+" "+ioF(b[1]-ny*w2/2)+"L"+ioF(a[0]-nx*w1/2)+" "+ioF(a[1]-ny*w1/2)+"Z"}
var IO_SKIN=176,IO_V1=322,IO_V2=398,IO_VC=360;
var IO_ST=(IO_VC-IO_Y0)/IO_S;            /* entry-line length to the vessel centre */
function ioScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  var Y=mob?26:8;
  g+='<g transform="translate(0 '+Y+')">';
  /* anatomy (always): skin surface and its second line, faint tissue strata, the vessel walls and centreline */
  g+='<g id="ioAn"><path class="skin aD" d="M20 '+IO_SKIN+'H740"/><path class="skn2 aD" d="M20 '+(IO_SKIN+9)+'H740"/>';
  g+='<path class="tis aD" d="M20 238C200 232 420 246 740 236"/><path class="tis aD" d="M20 282C240 290 480 276 740 286"/>';
  g+='<path class="ves aD" d="M20 '+IO_V1+'C260 '+(IO_V1-6)+' 500 '+(IO_V1+6)+' 740 '+IO_V1+'"/><path class="ves aD" d="M20 '+IO_V2+'C260 '+(IO_V2+6)+' 500 '+(IO_V2-6)+' 740 '+IO_V2+'"/>';
  g+='<path class="vc" d="M20 '+IO_VC+'H740"/></g>';
  /* static anatomy labels, right-aligned, >= 10px clear of every stroke (DR3) */
  g+='<text class="t an" x="740" y="'+(IO_SKIN-14)+'" text-anchor="end">HAUT</text>';
  g+='<text class="t an" x="740" y="'+(IO_V2+(mob?34:26))+'" text-anchor="end">GEFÄSS</text>';
  /* step 1: the needle: hub (s 0..58), bevelled shaft to the lumen */
  var tip=ioP(IO_ST+4);
  g+='<g id="ioNd"><path class="nd" d="'+ioTube(0,58,22,18)+'"/><path class="nd" d="'+ioTube(58,IO_ST-6,6,5)+'"/>';
  var t1=ioP(IO_ST-6),nx=-IO_S,ny=IO_C;
  g+='<path class="nd" d="M'+ioF(t1[0]+nx*2.5)+' '+ioF(t1[1]+ny*2.5)+'L'+ioF(tip[0])+' '+ioF(tip[1])+'L'+ioF(t1[0]-nx*2.5)+' '+ioF(t1[1]-ny*2.5)+'"/></g>';
  /* step 3: the dilator (tapered), moved along the entry line by script */
  g+='<g id="ioDil"><path class="dil" d="'+ioTube(40,IO_ST-40,13,13)+'"/><path class="dil" d="'+ioTube(IO_ST-40,IO_ST+18,13,4)+'"/></g>';
  /* step 4: the catheter over the wire (outer and inner stroke = a tube), cm marks, the hub with wings and the clip */
  var e=ioP(IO_ST),wx=e[0];
  var cath='M'+ioF(ioP(64)[0])+' '+ioF(ioP(64)[1])+'L'+ioF(e[0])+' '+ioF(e[1])+'C'+ioF(wx+28)+' '+ioF(IO_VC+18)+' '+ioF(wx+60)+' '+IO_VC+' '+ioF(wx+96)+' '+IO_VC+'H600';
  g+='<path id="ioCo" class="cath" d="'+cath+'"/><path id="ioCi" class="cathi" d="'+cath+'"/>';
  /* step 2: the guidewire with its J-tip, as one drawn path */
    var wire='M'+ioF(ioP(-30)[0])+' '+ioF(ioP(-30)[1])+'L'+ioF(e[0])+' '+ioF(e[1])+'C'+ioF(wx+28)+' '+ioF(IO_VC+18)+' '+ioF(wx+60)+' '+IO_VC+' '+ioF(wx+96)+' '+IO_VC+'H662A11 11 0 1 0 662 '+(IO_VC-22)+'H652';
  g+='<path id="ioWire" class="wire" d="'+wire+'"/>';
  var mk='';for(i=0;i<5;i++){var q=ioP(130+i*36);mk+='M'+ioF(q[0]+nx*7)+' '+ioF(q[1]+ny*7)+'L'+ioF(q[0]-nx*7)+' '+ioF(q[1]-ny*7)}
  g+='<path id="ioMk" class="mk2" d="'+mk+'"/>';
  var h=ioP(40);
  g+='<g id="ioHub" transform="translate('+ioF(h[0])+' '+ioF(h[1])+') rotate(35)"><path class="hub" d="M-34 -9H22V9H-34Z"/><path class="hub" d="M-6 -9L-2 -30H10L12 -9M-6 9L-2 30H10L12 9"/><path class="clip" d="M-20 -14H-6V14H-20Z"/></g>';
  g+='</g>';
  /* labels, per step, in the band above the scene: each >= 8px clear of every stroke (DR3) */
  function L(id,cl,a,b){return '<g id="'+id+'"><text class="t '+cl+'" x="20" y="'+(mob?34:30)+'">'+a+'</text><text class="t" x="20" y="'+(mob?64:52)+'">'+b+'</text></g>'}
  g+=mob?L("ioL1","s1","PUNKTION","NADEL IM GEFÄSSLUMEN"):L("ioL1","s1","PUNKTION MIT DER SELDINGER-NADEL","DIE NADELSPITZE ERREICHT DAS GEFÄSSLUMEN");
  g+=mob?L("ioL2","s2","FÜHRUNGSDRAHT","FLEXIBLE J-SPITZE"):L("ioL2","s2","FÜHRUNGSDRAHT MIT FLEXIBLER J-SPITZE","IN EINHANDTECHNIK, DANN NADEL ZURÜCK");
  g+=mob?L("ioL3","s1","DILATATOR","ÜBER DEN DRAHT"):L("ioL3","s1","DER DILATATOR WEITET DEN STICHKANAL","ÜBER DEN LIEGENDEN FÜHRUNGSDRAHT");
  g+=mob?L("ioL4","s2","KATHETER","DRAHT ZURÜCK, CLIP FIXIERT"):L("ioL4","s2","KATHETER ÜBER DEN DRAHT, DRAHT ZURÜCK","CM-MARKIERUNG, FIXIERT MIT DEM KATHETERCLIP");
  /* step captions */
  g+='<g id="lb1"><text class="a" x="20" y="500">1 · PUNKTION</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="500">2 · FÜHRUNGSDRAHT</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="500">3 · DILATATION</text></g>';
  g+='<g id="lb4"><text class="a" x="20" y="500">4 · KATHETER</text></g>';
  return g+'</svg>';
}
function scene(){return ioScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={an:dl("#ioAn .aD"),wire:dl("#ioWire"),co:dl("#ioCo"),ci:dl("#ioCi"),nd:$("#ioNd",svg),dil:$("#ioDil",svg),mk:$("#ioMk",svg),hub:$("#ioHub",svg),
    L1:$("#ioL1",svg),L2:$("#ioL2",svg),L3:$("#ioL3",svg),L4:$("#ioL4",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  /* the wire withdraws from its tip end: the visible part shrinks back toward the outside */
  function undraw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(-a[1]*v).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function mv(el,ds){if(el)el.setAttribute("transform","translate("+ioF(IO_C*ds)+" "+ioF(IO_S*ds)+")")}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.an,b)}
    /* step 1: the needle advances along its line into the lumen */
    var n1=seg(p,.03,.18),nOut=seg(p,.4,.48);
    op(E.nd,b*seg(p,.03,.1)*(1-nOut));mv(E.nd,-40*(1-n1)-36*nOut);
    op(E.L1,b*seg(p,.04,.1)*(1-seg(p,.22,.25)));
    /* step 2: the wire draws through the needle and along the vessel; the needle then withdraws */
    var w=seg(p,.28,.4);
    if(p<.8)draw(E.wire,b*w);else undraw(E.wire,seg(p,.88,.97));
    op(E.L2,b*seg(p,.3,.36)*(1-seg(p,.47,.5)));
    /* step 3: the dilator slides in over the wire and back out */
    var d1=seg(p,.53,.63),d2=seg(p,.68,.74);
    op(E.dil,b*seg(p,.52,.55)*(1-d2));mv(E.dil,-60*(1-d1)-40*d2);
    op(E.L3,b*seg(p,.56,.62)*(1-seg(p,.72,.75)));
    /* step 4: the catheter follows over the wire, the marks and the hub with its clip settle */
    var c=b*seg(p,.77,.88);draw(E.co,c);draw(E.ci,c);
    op(E.mk,b*seg(p,.85,.9));op(E.hub,b*seg(p,.86,.92));
    op(E.L4,b*seg(p,.79,.85));
    op(E.l1,b*seg(p,0,.05)*(1-seg(p,.22,.25)));op(E.l2,b*seg(p,.27,.32)*(1-seg(p,.47,.5)));op(E.l3,b*seg(p,.52,.57)*(1-seg(p,.72,.75)));op(E.l4,b*seg(p,.77,.82));
  };
}
