/* The story scene (BL/BY/DB): one electron beam weld as EBP describe it (ebpglobal.com > Electron Beam & TIG Welding:
   "EBW is a machine controlled process, with welding carried out in a vacuum with no filler material"; "focus 4KW into a
   spot of 0.5mm diameter. This instantly melts the metal to a vapour hole surrounded by liquid"; X-Ray & NDT:
   radiography in two X-ray bays with 225 kV systems and CR digital film), drawn in section and kept on screen:
   Step 1 (Fit up): the chamber and the gun draw in; two finish-machined parts close on the joint; the air is pumped out.
   Step 2 (Weld): the beam strikes the joint and a deep, narrow keyhole weld grows down through it; the part turns.
   Step 3 (X-ray): chamber and gun fall away; an X-ray head comes down, the fan passes through the weld onto the film. */
var SCW=760,SCH=520;
function ebScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="120 50 540 466" aria-hidden="true">';
  g+='<defs><pattern id="ebH" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0V9" stroke="rgba(246,243,239,.2)" stroke-width="1"/></pattern>'+
     '<pattern id="ebH2" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)"><path d="M0 0V7" stroke="rgba(246,243,239,.24)" stroke-width="1"/></pattern>'+
     '<linearGradient id="ebW" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff4b0"/><stop offset=".35" stop-color="#ffd21a"/><stop offset="1" stop-color="#e8360c"/></linearGradient></defs>';
  g+='<text class="t" x="650" y="506" text-anchor="end">'+(mob?"IN SECTION":"ELECTRON BEAM WELD, IN SECTION")+'</text>';
  /* vacuum chamber walls (roof open for the gun neck) */
  g+='<g id="ebC"><path class="cs sD" d="M150 228H388V240H162V458H638V240H412V228H650V470H150Z"/></g>';
  /* air in the chamber, pumped out in step 1 */
  g+='<g id="ebA">';var air=[[190,300],[236,276],[300,300],[352,270],[470,282],[520,306],[584,272],[606,330],[196,372],[226,420],[580,404],[604,436],[348,296],[456,312]];
  for(i=0;i<air.length;i++)g+='<circle class="air" cx="'+air[i][0]+'" cy="'+air[i][1]+'" r="2.4"/>';g+='</g>';
  /* electron gun: column, filament, anode, focusing coils, neck */
  g+='<g id="ebG"><path class="gn sD" d="M372 62H428V196H412V228H388V196H372Z"/><path class="gi sD" d="M392 84L400 96L408 84"/><path class="gi sD" d="M376 122H393M407 122H424"/>'+
     '<path class="cs" d="M356 150H370V178H356Z"/><path class="cs" d="M430 150H444V178H430Z"/></g>';
  /* rotary fixture and the rotation arrow */
  g+='<g id="ebF"><path class="cs" d="M330 410H470V432H330Z"/></g>';
  g+='<g id="ebR"><path class="ar" d="M346 446A54 6 0 1 0 454 446"/><path class="ar" d="M446 440L454 446L445 451"/></g>';
  /* the two finish-machined parts, in section, meeting on the joint at x=400 */
  g+='<path id="ebPA" class="pa" d="M270 350H399V410H270Z"/>';
  g+='<path id="ebPB" class="pb" d="M401 350H530V410H401Z"/>';
  /* step 2: the beam, the strike and the keyhole weld */
  g+='<g id="ebB"><path class="bmg" d="M400 228V350"/><path class="bm sD" d="M400 196V350"/></g>';
  g+='<g id="ebS"><path class="sp" d="M400 350L388 342M400 350L394 337M400 350L406 337M400 350L412 342"/></g>';
  g+='<path id="ebWd" class="wd" d="M394.5 350Q400 347 405.5 350L403 398Q400 404 397 398Z"/>';
  /* step 3: X-ray head, fan, film plate and the weld's image on it */
  g+='<g id="ebX"><path class="cs" d="M354 150H446V200H354Z"/><path class="gi" d="M392 200L400 210L408 200"/></g>';
  g+='<g id="ebN"><path class="fn sD" d="M400 210L240 436"/><path class="fn sD" d="M400 210L560 436"/><path class="fn sD" d="M400 210V436"/></g>';
  g+='<g id="ebM"><path class="fm" d="M230 438H570V448H230Z"/><path class="wi" d="M396 438H404V448H396Z"/></g>';
  /* labels, per step (8px+ clear of every stroke) */
  g+='<g id="ebL1"><text class="t s1" x="'+(mob?446:456)+'" y="'+(mob?100:96)+'">'+(mob?"GUN":"ELECTRON GUN")+'</text><text class="t" x="176" y="'+(mob?220:216)+'">'+(mob?"VACUUM":"VACUUM CHAMBER")+'</text><text class="t" x="382" y="326" text-anchor="end">'+(mob?"PARTS":"FINISHED PARTS")+'</text></g>';
  g+='<g id="ebL2"><text class="t s1" x="420" y="'+(mob?300:292)+'">'+(mob?"4 KW BEAM":"ELECTRON BEAM · 4 KW")+'</text><text class="t" x="424" y="326">'+(mob?"0.5 MM":"0.5 MM SPOT")+'</text><text class="t" x="382" y="326" text-anchor="end">'+(mob?"WELD":"DEEP, NARROW WELD")+'</text></g>';
  g+='<g id="ebL3"><text class="t s1" x="458" y="'+(mob?176:180)+'">'+(mob?"X-RAY":"X-RAY · 225 KV")+'</text><text class="t" x="388" y="476" text-anchor="end">'+(mob?"WELD":"SOUND WELD")+'</text><text class="t" x="412" y="476">'+(mob?"FILM":"CR FILM PLATE")+'</text>'+(mob?'':'<text class="t s1" x="548" y="384">NADCAP NDT</text>')+'</g>';
  g+='<g id="lb1"><text class="a" x="130" y="506">1 · FIT UP</text></g>';
  g+='<g id="lb2"><text class="a" x="130" y="506">2 · WELD</text></g>';
  g+='<g id="lb3"><text class="a" x="130" y="506">3 · X-RAY</text></g>';
  return g+'</svg>';
}
function scene(){return ebScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={C:$("#ebC",svg),cd:dl("#ebC .sD"),cc:$$("#ebC .cs",svg),A:$("#ebA",svg),G:$("#ebG",svg),gd:dl("#ebG .sD"),gc:$$("#ebG .cs",svg),F:$("#ebF",svg),R:$("#ebR",svg),rr:dl("#ebR .ar"),
    PA:$("#ebPA",svg),PB:$("#ebPB",svg),B:$("#ebB",svg),bd:dl("#ebB .sD"),S:$("#ebS",svg),Wd:$("#ebWd",svg),X:$("#ebX",svg),N:$("#ebN",svg),nd:dl("#ebN .sD"),M:$("#ebM",svg),Wi:$("#ebM .wi",svg),
    L1:$("#ebL1",svg),L2:$("#ebL2",svg),L3:$("#ebL3",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),t0:svg.querySelector("text.t")};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;op(E.t0,b)}
    /* step 1: chamber and gun draw in, the parts close on the joint, the air is pumped out */
    var out=1-seg(p,.66,.72);
    draw(E.cd,b*seg(p,0,.12));E.cc.forEach(function(c){c.style.fillOpacity=seg(p,.08,.16).toFixed(3)});
    draw(E.gd,b*seg(p,.04,.14));E.gc.forEach(function(c){c.style.fillOpacity=seg(p,.1,.16).toFixed(3)});
    op(E.C,b*out);op(E.G,b*out);
    op(E.A,b*seg(p,.06,.12)*(1-seg(p,.2,.3)));
    op(E.F,b*seg(p,.1,.16)*out);
    var cl=seg(p,.12,.26);
    E.PA.setAttribute("transform","translate("+(-70*(1-cl)).toFixed(1)+" 0)");E.PB.setAttribute("transform","translate("+(70*(1-cl)).toFixed(1)+" 0)");
    op(E.PA,b*seg(p,.1,.16));op(E.PB,b*seg(p,.1,.16));
    op(E.L1,b*seg(p,.1,.16)*(1-seg(p,.3,.34)));
    /* step 2: the beam strikes and the keyhole weld grows down through the joint; the part turns */
    op(E.B,b*seg(p,.37,.39)*(1-seg(p,.6,.64)));draw(E.bd,b*seg(p,.38,.44));
    op(E.S,b*seg(p,.43,.45)*(1-seg(p,.6,.63))*(.75+.25*Math.sin(p*620)));
    var wg=seg(p,.44,.56);E.Wd.setAttribute("transform","translate(0 347) scale(1 "+Math.max(wg,.001).toFixed(3)+") translate(0 -347)");op(E.Wd,b*seg(p,.44,.46));
    op(E.R,b*seg(p,.42,.48)*out);draw(E.rr,b*seg(p,.42,.54));
    op(E.L2,b*seg(p,.42,.5)*(1-seg(p,.62,.66)));
    /* step 3: chamber and gun fall away; X-ray head, fan, film; the weld's image appears */
    var xd=seg(p,.7,.78);E.X.setAttribute("transform","translate(0 "+(-160*(1-xd)).toFixed(1)+")");op(E.X,b*seg(p,.7,.74));
    op(E.N,b*seg(p,.78,.8));draw(E.nd,b*seg(p,.78,.88));
    E.M.setAttribute("transform","translate(0 "+(30*(1-seg(p,.72,.8))).toFixed(1)+")");op(E.M,b*seg(p,.72,.78));
    op(E.Wi,seg(p,.86,.92));
    op(E.L3,b*seg(p,.78,.86));
    op(E.l1,b*seg(p,0,.06)*(1-seg(p,.33,.38)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.64,.68)));op(E.l3,b*seg(p,.7,.78));
  };
}
