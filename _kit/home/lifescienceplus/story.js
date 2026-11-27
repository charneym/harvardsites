/* The story scene (BL/BY/DB): how BloodSTOP iX works (lifescienceplus.com home, Medical/Surgical, BloodSTOP iX and Trauma
   Matrix pages), drawn as ONE fine-line cross-section kept on screen for all four steps:
   Step 1 (Apply): the dry woven eCMC matrix is laid over a shallow surface wound (schematic, neutral line work).
   Step 2 (Gel): it absorbs blood and exudates and becomes a translucent adhesive gel that seals the wound.
   Step 3 (Clot): the gel binds and activates platelets and the intrinsic coagulation cascade; a clot forms.
   Step 4 (Heal): a moist environment for granulation and tissue regeneration; the gel washes away. */
var SCW=760,SCH=520;
var LS_W="M40 330H280Q300 330 312 352Q340 392 380 392Q420 392 448 352Q460 330 480 330H720";
function lsScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  if(!mob)g+='<text class="t" x="20" y="30">BLOODSTOP iX, CROSS-SECTION</text>';
  /* the tissue: the surface with a shallow wound, two deeper layers */
  g+='<g id="lsT"><path class="edge sT" d="'+LS_W+'"/><path class="lay sT" d="M40 420H720"/><path class="lay sT" d="M40 462H720"/></g>';
  /* step 1: the woven matrix above the wound */
  var m='';for(i=0;i<=26;i++)m+='M'+(252+i*10)+' 262V292';for(i=0;i<=3;i++)m+='M252 '+(262+i*10)+'H512';
  g+='<g id="lsM"><path class="weave sM" d="'+m+'"/><path class="edge sM" d="M252 262H512V292H252Z"/></g>';
  /* step 2: the gel filling and sealing the wound, a little above the surface */
  g+='<g id="lsG"><path class="gel" d="M262 330Q262 312 290 312H470Q498 312 498 330H480Q460 330 448 352Q420 392 380 392Q340 392 312 352Q300 330 280 330Z"/>'+
     '<path class="gedge sG" d="M262 330Q262 312 290 312H470Q498 312 498 330"/></g>';
  /* step 3: platelets gathering and the fibrin mesh between them */
  var P=[[330,350],[352,366],[376,374],[400,370],[424,358],[344,338],[368,350],[394,354],[416,342],[384,336],[440,340],[322,336]];
  g+='<g id="lsP">';P.forEach(function(p){g+='<ellipse class="plt" cx="'+p[0]+'" cy="'+p[1]+'" rx="6" ry="4"/>'});g+='</g>';
  g+='<g id="lsF"><path class="fib sF" d="M330 350L352 366L376 374L400 370L424 358L440 340M344 338L368 350L394 354L416 342M322 336L344 338M352 366L368 350L384 336L394 354M376 374L394 354M400 370L416 342"/></g>';
  /* step 4: new tissue rising from below into the wound */
  g+='<g id="lsH"><path class="grow sH" d="M318 420Q318 380 334 362"/><path class="grow sH" d="M350 420Q350 386 360 372"/><path class="grow sH" d="M380 420Q380 392 380 380"/><path class="grow sH" d="M410 420Q410 386 400 372"/><path class="grow sH" d="M442 420Q442 380 426 362"/></g>';
  /* labels, per step, >= 8px clear of every stroke (DR3) */
  g+='<g id="lsL1"><text class="t s2" x="252" y="'+(mob?236:244)+'">'+(mob?'eCMC MATRIX':'WOVEN eCMC MATRIX · DRY')+'</text></g>';
  g+='<g id="lsL2"><text class="t s2" x="252" y="'+(mob?284:294)+'">'+(mob?'GEL SEAL':'TRANSLUCENT ADHESIVE GEL')+'</text></g>';
  g+='<g id="lsL3"><text class="t s2" x="252" y="'+(mob?284:294)+'">'+(mob?'PLATELETS':'PLATELETS · COAGULATION CASCADE')+'</text></g>';
  g+='<g id="lsL4"><text class="t s2" x="252" y="'+(mob?284:294)+'">'+(mob?'TISSUE GROWTH':'MOIST FIELD · TISSUE GROWTH')+'</text></g>';
  g+='<g id="lsL0"><text class="t" x="560" y="'+(mob?318:318)+'">'+(mob?'SKIN':'SURFACE')+'</text></g>';
  /* step captions */
  g+='<g id="lb1"><text class="a" x="20" y="508">1 · APPLY</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="508">2 · GEL</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="508">3 · CLOT</text></g>';
  g+='<g id="lb4"><text class="a" x="20" y="508">4 · HEAL</text></g>';
  return g+'</svg>';
}
function scene(){return lsScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={T:$("#lsT",svg),tE:dl(".sT"),M:$("#lsM",svg),mE:dl(".sM"),G:$("#lsG",svg),gF:$("#lsG .gel",svg),gE:dl(".sG"),
    P:$$("#lsP ellipse",svg),F:$("#lsF",svg),fE:dl(".sF"),H:$("#lsH",svg),hE:dl(".sH"),
    L0:$("#lsL0",svg),L1:$("#lsL1",svg),L2:$("#lsL2",svg),L3:$("#lsL3",svg),L4:$("#lsL4",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg),t0:svg.querySelector("text.t")};
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    op(E.t0,b);
    /* the tissue draws first and stays */
    op(E.T,b);draw(E.tE,b*seg(p,0,.08));op(E.L0,b*seg(p,.04,.1));
    /* step 1: the matrix draws in, then gives way to the gel */
    op(E.M,b*(1-seg(p,.3,.4)));draw(E.mE,b*seg(p,.06,.18));
    op(E.L1,b*seg(p,.1,.16)*(1-seg(p,.22,.25)));
    /* step 2: the gel fills the wound and seals it */
    op(E.G,b);op(E.gF,b*seg(p,.3,.44)*(1-.45*seg(p,.8,.95)));draw(E.gE,b*seg(p,.34,.46));
    op(E.L2,b*seg(p,.32,.38)*(1-seg(p,.47,.5)));
    /* step 3: platelets gather, the mesh forms */
    E.P.forEach(function(e,i){op(e,b*seg(p,.52+i*.008,.58+i*.008))});op(E.F,b);draw(E.fE,b*seg(p,.6,.71));
    op(E.L3,b*seg(p,.55,.61)*(1-seg(p,.72,.75)));
    /* step 4: tissue grows up into the wound */
    op(E.H,b);draw(E.hE,b*seg(p,.78,.92));
    op(E.L4,b*seg(p,.8,.86));
    op(E.l1,b*seg(p,0,.05)*(1-seg(p,.22,.25)));op(E.l2,b*seg(p,.27,.32)*(1-seg(p,.47,.5)));op(E.l3,b*seg(p,.52,.57)*(1-seg(p,.72,.75)));op(E.l4,b*seg(p,.77,.82));
  };
}
