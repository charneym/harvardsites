/* The story scene (BL/BY/DB): how SensoMedical takes an electrode from concept to cleared product, drawn as ONE
   depth electrode kept on screen for all three steps (sensomedical.com /about, /implants, /electrode-development-solutions;
   FDA 510(k) summary K253970). Step 1 (Design): its contacts and jacket get their dimensions (4-16 Pt/Ir contacts,
   1.5-3 mm long, a 0.8-2.0 mm jacket). Step 2 (Qualify): one conductor per contact runs back to the connector and the
   contacts light as they are tested. Step 3 (Clear): the stylet slides in for placement; FDA clearance and the sterile,
   single-use labelling are noted. Every element is driven by the scrubbed story progress. */
var SCW=760,SCH=470;
var SMY=250,SMR=52,SMCW=62;                             /* electrode axis, jacket radius, contact width */
var SMC=[];(function(){for(var k=0;k<6;k++)SMC.push(628-96*k)})();     /* contact left edges, tip end first */
var SMW=[212,222,232,268,278,288];               /* conductor heights inside the jacket, clear of the stylet at SMY */
function smScene(o){
  var g='',k,mob=o.mob,T=SMY-SMR,B=SMY+SMR;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><linearGradient id="smMet" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff" stop-opacity="1"/><stop offset=".4" stop-color="#c9d4de" stop-opacity="1"/><stop offset=".55" stop-color="#8c9fb2" stop-opacity="1"/><stop offset="1" stop-color="#d8e6ef" stop-opacity="1"/></linearGradient></defs>';
  /* ---- base: the connector, the jacket and the contacts, drawn in with the section ---- */
  g+='<g id="smBase">';
  g+='<path class="jk sD" d="M96 '+T+'H700A'+SMR+' '+SMR+' 0 0 1 700 '+B+'H96Z"/>';
  g+='<path class="cn sD" d="M24 '+(T-4)+'H96V'+(B+4)+'H24Z"/>';
  for(k=0;k<6;k++)g+='<path class="cr sD" d="M'+(34+k*11)+' '+(T-4)+'V'+(B+4)+'"/>';
  g+='<text class="t" x="24" y="110">WOVYN DEPTH ELECTRODE</text>';
  g+='<text class="t" x="24" y="'+(B+34)+'">CONNECTOR</text>';
  g+='</g>';
  /* ---- step 2: one conductor per contact, from the contact back to the connector ---- */
  g+='<g id="smWires">'+SMC.map(function(x,k){return '<path class="wr" d="M'+x+' '+SMW[k]+'H96"/>'}).join("")+'</g>';
  /* ---- step 3: the stylet, slid in from the connector end (its handle sits outside) ---- */
  g+='<g id="smSty"><path class="st" d="M16 '+SMY+'H700"/><path class="sth" d="M2 '+(SMY-9)+'H16V'+(SMY+9)+'H2Z"/></g>';
  /* ---- the contacts (drawn over the conductors) ---- */
  g+='<g id="smCon">'+SMC.map(function(x,k){return '<rect class="ct" id="smc'+k+'" x="'+x+'" y="'+(T-1)+'" width="'+SMCW+'" height="'+(2*SMR+2)+'"/>'}).join("")+'</g>';
  /* ---- step 1: dimensions ---- */
  g+='<g id="smDim">'+
    '<path class="dm" d="M628 '+(T-10)+'V'+(T-16)+'H690V'+(T-10)+'"/><text class="t s1" x="659" y="'+(T-26)+'" text-anchor="middle">'+(mob?"1.5–3 MM":"1.5–3 MM CONTACTS")+'</text>'+
    '<path class="dm" d="M148 '+(B+10)+'V'+(B+16)+'H690V'+(B+10)+'"/><text class="t s1" x="419" y="'+(B+36)+'" text-anchor="middle">'+(mob?"4–16 CONTACTS":"4–16 PT/IR CONTACTS")+'</text>'+
    '<path class="dm" d="M745 '+T+'H755M750 '+T+'V'+B+'M745 '+B+'H755M750 '+(B+4)+'V'+(B+44)+'"/><text class="t s1" x="756" y="'+(B+62)+'" text-anchor="end">Ø 0.8–2.0 MM</text>'+
  '</g>';
  g+='<g id="smL2"><path class="dm" d="M150 '+(T-20)+'V'+(T-3)+'"/><text class="t s2" x="110" y="'+(T-28)+'">'+(mob?"1 CONDUCTOR PER CONTACT":"ONE CONDUCTOR PER CONTACT")+'</text></g>';
  g+='<g id="smL3"><path class="dm" d="M9 '+(T-20)+'V'+(SMY-12)+'"/><text class="t s3" x="2" y="'+(T-28)+'">'+(mob?"STYLET":"STYLET, FOR PLACEMENT")+'</text></g>';
  /* ---- step captions, in the clear band under the electrode ---- */
  g+='<g id="lb1"><text class="a" x="24" y="436">'+(mob?"DESIGNED TO THE SIGNAL":"DESIGNED AROUND THE SIGNAL IT MUST CARRY")+'</text></g>';
  g+='<g id="lb2"><text class="a" x="24" y="436">'+(mob?"IMPEDANCE · CHARGE · AGING":"TESTED IN-HOUSE: IMPEDANCE · CHARGE INJECTION · AGING")+'</text></g>';
  g+='<g id="lb3"><text class="a" x="24" y="436">'+(mob?"FDA 510(K) · 17 APRIL 2026":"FDA 510(K) CLEARED 17 APRIL 2026 · STERILE · SINGLE USE")+'</text></g>';
  return g+'</svg>';
}
function scene(){return smScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#smBase .sD"),fade:$$("#smBase text",svg),wires:dl("#smWires .wr"),sty:$("#smSty",svg),con:$$("#smCon .ct",svg),dim:$("#smDim",svg),
    l2:$("#smL2",svg),l3:$("#smL3",svg),b1:$("#lb1",svg),b2:$("#lb2",svg),b3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function tf(el,x,y){el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")")}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    /* the contacts are always there; step 2 lights them one by one, tip first, as they are tested */
    var lit=seg(p,.4,.6);
    E.con.forEach(function(c,k){var on=Math.min(1,Math.max(0,lit*1.6-k/8*.6));c.style.opacity=b.toFixed(3);c.classList.toggle("on",on>.5)});
    /* step 1: dimensions */
    op(E.dim,b*seg(p,.06,.16)*(1-seg(p,.3,.35)));
    /* step 2: conductors draw back to the connector */
    draw(E.wires,seg(p,.36,.56));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.64,.68)));
    /* step 3: the stylet slides in from the connector end */
    var sIn=seg(p,.7,.86);tf(E.sty,-680*(1-sIn),0);op(E.sty,b*seg(p,.68,.72));op(E.l3,b*seg(p,.84,.9));
    op(E.b1,b*seg(p,.08,.16)*(1-seg(p,.3,.34)));op(E.b2,b*seg(p,.4,.48)*(1-seg(p,.64,.68)));op(E.b3,b*seg(p,.8,.88));
  };
}
