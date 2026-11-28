/* The story scene: which tau isoform marks which disease, in the terms of NIH 1R44AG102186 ("While Alzheimer's disease
   (AD) involves both 3R and 4R tau in approximately equal proportions, other tauopathies show a predominance of one
   isoform: 3R in Pick's disease, and 4R in progressive supranuclear palsy (PSP) and corticobasal degeneration (CBD).
   Chronic traumatic encephalopathy (CTE) ... features both 3R and 4R tau aggregates—similarly to AD").
   ONE figure: a stacked bar per disease, 3R below and 4R above, with the 4R-predominant pair picked out.
   Step 1: the MAPT transcript splits into the 3R and 4R groups. Step 2: the bars fill, disease by disease.
   Step 3: the 4R-predominant diseases are marked, and the tracer's preference is drawn against them.
   Step 4: the trial arms are labelled. Proportions are schematic, as the abstract gives predominance, not figures. */
var DIS=[["AD",50],["PICK'S",10],["PSP",90],["CBD",88],["CTE",50]];
var BX=[150,258,366,474,582],BW_=72,BY0=408,BH=250;
function enScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="ensc'+(mob?' mob':'')+'" viewBox="'+(mob?'96 20 560 512':'20 20 650 512')+'" aria-hidden="true">';
  if(!mob)g+='<text class="t" x="34" y="44">TAU ISOFORM COMPOSITION · SCHEMATIC</text>';
  g+='<path class="axl" d="M118 '+BY0+'H640"/>';
  /* the splice: one transcript dividing into the two groups */
  g+='<g id="enSpl"><path class="spl" d="M118 120H250"/><path class="spl" d="M250 120C300 120 300 92 346 92"/><path class="spl" d="M250 120C300 120 300 148 346 148"/>'+
     '<text class="cd r4" x="356" y="97">4R · FOUR REPEATS</text><text class="cd r3" x="356" y="153">3R · THREE REPEATS</text>'+
     '<text class="cd mapt" x="118" y="108">MAPT</text></g>';
  for(i=0;i<5;i++){
    var p=DIS[i][1],h4=Math.round(BH*p/100),h3=BH-h4;
    g+='<g id="enB'+i+'">'+
       '<rect class="b3" x="'+BX[i]+'" y="'+(BY0-h3)+'" width="'+BW_+'" height="'+h3+'"/>'+
       '<rect class="b4" x="'+BX[i]+'" y="'+(BY0-BH)+'" width="'+BW_+'" height="'+h4+'"/>'+
       '<text class="dl" x="'+(BX[i]+BW_/2)+'" y="'+(BY0+26)+'" text-anchor="middle">'+DIS[i][0]+'</text></g>';
  }
  /* the 4R-predominant pair, which the tracer is made for */
  g+='<g id="enMark"><rect class="mk4" x="'+(BX[2]-10)+'" y="'+(BY0-BH-18)+'" width="'+(BX[3]+BW_+10-(BX[2]-10))+'" height="'+(BH+30)+'" rx="6"/>'+
     '<text class="cd tr" x="'+(BX[2]+BW_+10)+'" y="'+(BY0-BH-30)+'" text-anchor="middle">TRACER TARGET</text></g>';
  var C=mob?["ONE GENE, SIX ISOFORMS","EACH DISEASE, ITS OWN MIX","THE TRACER PREFERS 4R","FORTY PEOPLE, ONE SITE"]
           :["ALTERNATIVE SPLICING YIELDS THE 3R AND 4R GROUPS","EACH DISEASE KEEPS ITS OWN ISOFORM MIX",
             "THE TRACER BINDS 4R TAU WITH HIGH AFFINITY","THE TRIAL ENROLS PSP, CBD, CTE AND HEALTHY VOLUNTEERS"];
  for(i=0;i<4;i++)g+='<text class="cl" id="enC'+i+'" x="'+(mob?106:34)+'" y="502">'+C[i]+'</text>';
  return g+'</svg>';
}
function scene(){return enScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var q=function(s){return svg.querySelector(s)};
  var spl=q("#enSpl"),mark=q("#enMark"),B=[],i;
  for(i=0;i<5;i++)B.push(q("#enB"+i));
  var cap=[0,1,2,3].map(function(k){return q("#enC"+k)});
  var sp=[].slice.call(svg.querySelectorAll(".spl")).map(function(el){var L=el.getTotalLength();el.style.strokeDasharray=L+" "+L;el.style.strokeDashoffset=L;return L});
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    op(spl,b*seg(p,.02,.10)*(1-seg(p,.30,.38)));
    [].slice.call(svg.querySelectorAll(".spl")).forEach(function(el,k){var u=seg(p,.04+k*.045,.14+k*.045);el.style.strokeDashoffset=(sp[k]*(1-u)).toFixed(1)});
    B.forEach(function(gp,k){
      var u=seg(p,.30+k*.045,.40+k*.045);
      op(gp,b*u);
      var b3=gp.querySelector(".b3"),b4=gp.querySelector(".b4");
      b3.style.transform="scaleY("+u.toFixed(3)+")";b4.style.transform="scaleY("+u.toFixed(3)+")";
    });
    op(mark,b*seg(p,.60,.70));
    var w=[[0,.25],[.25,.5],[.5,.75],[.75,1.01]];
    cap.forEach(function(cp,k){op(cp,b*(k===0?1:seg(p,w[k][0],w[k][0]+.04))*(k===3?1:(1-seg(p,w[k][1]-.04,w[k][1]))))});
  };
}
