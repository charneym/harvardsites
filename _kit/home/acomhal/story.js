/* The story scene: how JM2 works, in the terms of NIH 1R41CA306619 ("We identified a novel, channel-independent
   tumor-promoting role of connexin43 (Cx43) in GSCs, mediated by its cytoplasmic interaction with microtubules.
   We developed JM2, a Cx43 mimetic peptide that disrupts this interaction and specifically kills GSCs without
   affecting normal brain cells").
   ONE figure: a glioblastoma stem cell with a microtubule running through it, the connexin43 tails gripping it.
   Step 1: the cell sits there after treatment, intact. Step 2: the Cx43 tails are drawn, holding the microtubule.
   Step 3: JM2 peptides arrive and take those binding sites. Step 4: the grips release and the cell breaks up.
   Schematic, not to scale. */
var GRIP=[[250,232],[330,268],[410,232],[490,268]];
function acScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="acsc'+(mob?' mob':'')+'" viewBox="'+(mob?'110 20 520 500':'30 20 620 500')+'" aria-hidden="true">';
  if(!mob)g+='<text class="t" x="44" y="46">MECHANISM · SCHEMATIC, NOT TO SCALE</text>';
  /* the stem cell */
  g+='<g id="acCell"><path class="cell" d="M350 270m-182 0a182 150 0 1 0 364 0a182 150 0 1 0-364 0"/>'+
     '<circle class="nuc" cx="350" cy="270" r="40"/>'+
     '<text class="cd lbl" x="'+(mob?124:48)+'" y="104">GLIOBLASTOMA STEM CELL</text></g>';
  /* the microtubule: two rails with rungs */
  g+='<g id="acMt"><path class="mt" d="M196 244H504"/><path class="mt" d="M196 262H504"/>';
  for(i=0;i<13;i++){var x=200+i*24;g+='<path class="mtr" d="M'+x+' 244V262"/>'}
  g+='<text class="cd mtl" x="'+(mob?124:48)+'" y="140">MICROTUBULE</text></g>';
  /* the connexin43 tails gripping it */
  for(i=0;i<4;i++){var p=GRIP[i];
    g+='<g id="acG'+i+'"><path class="grip" d="M'+p[0]+' '+p[1]+'C'+(p[0]-16)+' '+(p[1]+(p[1]>253?26:-26))+' '+(p[0]+16)+' '+(p[1]+(p[1]>253?26:-26))+' '+p[0]+' '+(p[1]+(p[1]>253?34:-34))+'"/>'+
       '<circle class="gripn" cx="'+p[0]+'" cy="'+(p[1]+(p[1]>253?34:-34))+'" r="7"/></g>'}
  g+='<text class="cd cxl" id="acCxL" x="'+(mob?124:48)+'" y="176">CONNEXIN43 TAILS</text>';
  /* the JM2 peptides */
  for(i=0;i<4;i++){var p2=GRIP[i];
    g+='<g id="acJ'+i+'"><rect class="jm" x="'+(p2[0]-13)+'" y="'+(p2[1]+(p2[1]>253?52:-66))+'" width="26" height="14" rx="4"/></g>'}
  g+='<text class="cd jml" id="acJmL" x="'+(mob?124:48)+'" y="456">JM2 PEPTIDE</text>';
  /* break marks for the final step */
  for(i=0;i<3;i++){var bx=250+i*100;
    g+='<path class="brk" id="acB'+i+'" d="M'+bx+' '+(372+i*8)+'l24 24M'+(bx+24)+' '+(372+i*8)+'l-24 24"/>'}
  var C=mob?["THE CELL SURVIVES TREATMENT","CX43 TAILS HOLD THE MICROTUBULE","JM2 TAKES THOSE SITES","THE CELL CANNOT HOLD"]
           :["THE STEM CELL SURVIVES CHEMOTHERAPY AND RADIATION","CONNEXIN43 TAILS HOLD THE MICROTUBULE FROM INSIDE",
             "JM2, A CX43 MIMETIC PEPTIDE, TAKES THOSE BINDING SITES","THE GRIP RELEASES AND THE STEM CELL DIES"];
  for(i=0;i<4;i++)g+='<text class="cl" id="acC'+i+'" x="'+(mob?122:44)+'" y="500">'+C[i]+'</text>';
  return g+'</svg>';
}
function scene(){return acScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var q=function(s){return svg.querySelector(s)};
  var cell=q("#acCell"),mt=q("#acMt"),cxl=q("#acCxL"),jml=q("#acJmL"),G=[],J=[],B=[],i;
  for(i=0;i<4;i++){G.push(q("#acG"+i));J.push(q("#acJ"+i))}
  for(i=0;i<3;i++)B.push(q("#acB"+i));
  var cap=[0,1,2,3].map(function(k){return q("#acC"+k)});
  var LB=B.map(function(el){var L=el.getTotalLength();el.style.strokeDasharray=L+" "+L;el.style.strokeDashoffset=L;return L});
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    op(cell,b*seg(p,.02,.10));
    op(mt,b*seg(p,.22,.32));
    G.forEach(function(gp,k){op(gp,b*seg(p,.30+k*.03,.38+k*.03)*(1-seg(p,.80+k*.02,.88+k*.02)))});
    op(cxl,b*seg(p,.34,.42)*(1-seg(p,.84,.92)));
    /* the peptides slide in and take the sites */
    J.forEach(function(jp,k){
      var u=seg(p,.52+k*.035,.64+k*.035);
      op(jp,b*u);
      var dy=(GRIP[k][1]>253?1:-1)*18*(1-u);
      jp.style.transform="translateY("+dy.toFixed(1)+"px)";
    });
    op(jml,b*seg(p,.54,.62));
    /* the cell breaks up */
    B.forEach(function(el,k){var u=seg(p,.80+k*.03,.90+k*.03);el.style.strokeDashoffset=(LB[k]*(1-u)).toFixed(1);op(el,b*u)});
    cell.style.setProperty("--dim",(1-0.5*seg(p,.80,.95)).toFixed(3));
    var w=[[0,.25],[.25,.5],[.5,.75],[.75,1.01]];
    cap.forEach(function(cp,k){op(cp,b*(k===0?1:seg(p,w[k][0],w[k][0]+.04))*(k===3?1:(1-seg(p,w[k][1]-.04,w[k][1]))))});
  };
}
