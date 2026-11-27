/* The story scene (BL/BY/DB): how an Instanosis lateral-flow strip is used and read, in the terms of instanosis.com
   (Technology: "drastic contrast between the negative and positive readouts, and the sharp signal transition across the
   cutoff"; product pages: urine dipstick at 1 ng/mL; FXN 3-in-1 strip with cutoffs 2 / 10 / 50 ng/mL). ONE figure:
   Step 1: the strip dips into the sample. Step 2: the fluid front climbs the membrane. Step 3: the C and T lines resolve.
   Step 4: two more strips join it: fentanyl, xylazine, nitazene. Schematic; which line pattern means positive is not drawn. */
function strip(x,id,lab){
  return '<g id="'+id+'"><rect class="sh" x="'+x+'" y="60" width="56" height="390"/>'+
    '<rect class="hd" x="'+x+'" y="60" width="56" height="96"/>'+
    '<rect class="mb" x="'+(x+8)+'" y="166" width="40" height="190"/>'+
    '<rect class="pd" x="'+x+'" y="366" width="56" height="84"/>'+
    (lab?'<text class="sl" x="'+(x+28)+'" y="118" text-anchor="middle">'+lab+'</text>':'')+'</g>';
}
function trScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="issc'+(mob?' mob':'')+'" viewBox="'+(mob?'120 18 480 492':'20 18 680 492')+'" aria-hidden="true">';
  if(!mob)g+='<text class="t" x="40" y="40">LATERAL-FLOW TEST STRIP · SCHEMATIC</text>';
  g+='<path class="cup" d="M236 418H484L472 478H248Z"/><rect class="liq" id="isLq" x="242" y="430" width="236" height="44"/>';
  g+='<g id="isMain">'+strip(332,'isS0','')+'<rect class="fl" id="isFl" x="340" y="450" width="40" height="0"/>'+
     '<rect class="ln" id="isC" x="340" y="204" width="40" height="7"/><rect class="ln" id="isT" x="340" y="262" width="40" height="7"/>'+
     '<text class="lb" id="isLc" x="394" y="212">C</text><text class="lb" id="isLt" x="394" y="270">T</text></g>';
  g+='<g id="isTri">'+strip(232,'isS1','X')+strip(432,'isS2','N')+
     '<rect class="fl2" x="240" y="166" width="40" height="190"/><rect class="fl2" x="440" y="166" width="40" height="190"/>'+
     '<rect class="ln2" x="240" y="204" width="40" height="7"/><rect class="ln2" x="440" y="204" width="40" height="7"/>'+
     '<text class="ct" x="260" y="'+(mob?412:404)+'" text-anchor="middle">10</text><text class="ct" x="360" y="'+(mob?412:404)+'" text-anchor="middle">2</text><text class="ct" x="460" y="'+(mob?412:404)+'" text-anchor="middle">50</text>'+
     '<text class="lb" x="'+(mob?520:510)+'" y="'+(mob?412:404)+'">NG/ML</text></g>';
  g+='<text class="sl" id="isF" x="360" y="118" text-anchor="middle">F</text>';
  var C=mob?["DIP THE STRIP","THE SAMPLE FLOWS","READ BY EYE","F · X · N AT ONCE"]:["DIP: URINE, OR A DISSOLVED SAMPLE","LATERAL FLOW ALONG THE MEMBRANE","CONTROL AND TEST LINES, READ BY EYE","FENTANYL · XYLAZINE · NITAZENE, ONE TEST"];
  for(i=0;i<4;i++)g+='<text class="cl" id="isC'+i+'" x="'+(mob?140:40)+'" y="'+(mob?504:502)+'">'+C[i]+'</text>';
  return g+'</svg>';
}
function scene(){return trScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var q=function(s){return svg.querySelector(s)};
  var M=q("#isMain"),fl=q("#isFl"),C=q("#isC"),T=q("#isT"),lc=q("#isLc"),lt=q("#isLt"),tri=q("#isTri"),F=q("#isF"),lq=q("#isLq"),
    cap=[0,1,2,3].map(function(k){return q("#isC"+k)});
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    /* step 1: the strip lowers into the sample */
    var d=seg(p,.03,.2),lift=(1-d)*-34;M.setAttribute("transform","translate(0 "+lift.toFixed(1)+")");
    op(lq,b*(1-seg(p,.8,.86)));
    /* step 2: the fluid front climbs the membrane */
    var f=seg(p,.27,.47),top=lerp(450,166,f);fl.setAttribute("y",top.toFixed(1));fl.setAttribute("height",(450-top).toFixed(1));
    /* step 3: the lines resolve */
    op(C,b*seg(p,.52,.6));op(T,b*seg(p,.58,.68));op(lc,b*seg(p,.52,.6));op(lt,b*seg(p,.58,.68));
    /* step 4: the three-strip panel */
    var t3=seg(p,.78,.9);op(tri,b*t3);op(F,b*t3);op(q(".cup"),b*(1-seg(p,.8,.86)));
    op(M,b);
    var w=[[0,.25],[.25,.5],[.5,.75],[.75,1.01]];
    cap.forEach(function(cp,k){op(cp,b*(k===0?1:seg(p,w[k][0],w[k][0]+.04))*(k===3?1:(1-seg(p,w[k][1]-.04,w[k][1]))))});
  };
}
