/* the story scene: how C80EZ works, drawn as one engraved plate around a single cell (membrane, nucleus, organelles).
   Step 1 ordinary freezing: large hexagonal ice crystals grow in and tear the membrane (damage marks);
   step 2 the C80EZ polymers (wavy chains) arrive and the ice is nanoscale and cubic instead, a fine field of tiny crystals;
   step 3 storage: a temperature scale holds at -80 C (a regular lab deep freezer) with liquid nitrogen at -196 C crossed out,
   and the small ice does not regrow; step 4 thaw: the ice melts away and the cell comes back intact. Schematic, not to scale. */
var CC_C=[262,268],CC_R=118;
function ccRand(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}
function ccHex(cx,cy,r,rot){var d="";for(var i=0;i<6;i++){var t=(rot||0)+i*Math.PI/3;d+=(i?"L":"M")+(cx+Math.cos(t)*r).toFixed(1)+" "+(cy+Math.sin(t)*r).toFixed(1)}return d+"Z"}
function ccDendrite(cx,cy,r,rot){/* an engraved six-armed ice crystal */
  var d="";for(var k=0;k<6;k++){var a=rot+k*Math.PI/3,co=Math.cos(a),si=Math.sin(a);
    function P(x,y){return (cx+(x*co-y*si)*r).toFixed(1)+" "+(cy+(x*si+y*co)*r).toFixed(1)}
    d+="M"+P(.12,0)+"L"+P(1,0);
    [[.38,.26],[.58,.3],[.78,.18]].forEach(function(b){var ex=b[0]+.5*b[1],ey=.866*b[1];d+="M"+P(b[0],0)+"L"+P(ex,ey)+"M"+P(b[0],0)+"L"+P(ex,-ey)})}
  return d+ccHex(cx,cy,r*.14,rot)}
function scene(){
  var mob=MOBILE(),fs=mob?20:12,cs=mob?22:13;
  var caps=["SLOW FREEZING · LARGE HEXAGONAL ICE","C80EZ POLYMERS · NANOSCALE CUBIC ICE","STORED AT −80 °C · NO LIQUID NITROGEN","THAWED · VIABLE AND FUNCTIONAL"];
  var s='<svg viewBox="0 0 640 560" role="img" aria-label="Engraved diagram of one cell during freezing: large ice crystals tear it, C80EZ keeps the ice nanoscale, the sample is stored at minus 80 degrees and the cell thaws intact">';
  var g='';for(var gx=20;gx<=620;gx+=40)g+='<path class="cg" d="M'+gx+' 20V500"/>';for(var gy=20;gy<=500;gy+=40)g+='<path class="cg" d="M20 '+gy+'H620"/>';
  s+='<g>'+g+'</g>';
  /* nano ice: many tiny crystals outside the cell */
  var rnd=ccRand(7),N='';
  for(var i=0;i<230;i++){var x=40+rnd()*440,y=40+rnd()*450;var dx=x-CC_C[0],dy=y-CC_C[1];if(Math.sqrt(dx*dx+dy*dy)<CC_R+12)continue;
    var r=2.2+rnd()*2.2;N+='<path class="cn" data-k="'+rnd().toFixed(3)+'" d="'+ccHex(x,y,r,rnd()*1.05)+'"/>'}
  s+='<g id="ccN">'+N+'</g>';
  /* the polymers: wavy chains threading between the ice */
  var PL='';[[60,90,0],[70,440,1],[400,70,2],[430,470,3],[40,270,4],[470,250,5]].forEach(function(p,k){var x=p[0],y=p[1],d="M"+x+" "+y,a=(k*1.1)%6.28;
    for(var j=0;j<9;j++){a+=(rnd()-.5)*1.2;var nx=x+Math.cos(a)*14,ny=y+Math.sin(a)*14;var c1x=x+Math.cos(a+1.2)*10,c1y=y+Math.sin(a+1.2)*10;d+="Q"+c1x.toFixed(1)+" "+c1y.toFixed(1)+" "+nx.toFixed(1)+" "+ny.toFixed(1);x=nx;y=ny}
    PL+='<path class="cp" d="'+d+'"/>'});
  s+='<g id="ccP">'+PL+'</g>';
  /* the cell */
  var M="";for(var q=0;q<=64;q++){var t=q/64*Math.PI*2,rr=CC_R+Math.sin(t*3)*3+Math.sin(t*5+1)*2;M+=(q?"L":"M")+(CC_C[0]+Math.cos(t)*rr).toFixed(1)+" "+(CC_C[1]+Math.sin(t)*rr).toFixed(1)}
  s+='<g id="ccCell"><path id="ccMem" class="cm" d="'+M+'Z"/><path class="cm2" d="'+M+'Z" transform="translate('+CC_C[0]*.06+' '+CC_C[1]*.06+') scale(.94)"/>'+
    '<ellipse class="cnu" cx="'+(CC_C[0]-14)+'" cy="'+(CC_C[1]-10)+'" rx="44" ry="38"/><circle class="cnl" cx="'+(CC_C[0]-6)+'" cy="'+(CC_C[1]-16)+'" r="10"/>'+
    '<path class="cor" d="M'+(CC_C[0]+40)+' '+(CC_C[1]+40)+'c10-8 26-6 30 4s-8 16-18 14-16-10-12-18zM'+(CC_C[0]-70)+' '+(CC_C[1]+44)+'c8-10 24-10 28 0s-6 14-16 12-16-6-12-12zM'+(CC_C[0]+50)+' '+(CC_C[1]-58)+'c8-6 20-4 22 4s-6 12-14 10-12-8-8-14z"/>'+
    '<path class="cer" d="M'+(CC_C[0]-40)+' '+(CC_C[1]+70)+'q20-12 40 0t40 0M'+(CC_C[0]-30)+' '+(CC_C[1]+84)+'q18-10 36 0t36 0M'+(CC_C[0]+38)+' '+(CC_C[1]-20)+'q10 18 0 36"/></g>';
  /* step 1: large hexagonal ice and the tears it makes */
  var BIG=[[150,150,70,.2],[392,160,64,.5],[408,392,74,.1],[130,392,62,.7],[262,96,40,.35]],L='';
  BIG.forEach(function(b,k){L+='<path class="cb" data-k="'+k+'" d="'+ccDendrite(b[0],b[1],b[2],b[3])+'"/>'});
  s+='<g id="ccB">'+L+'</g>';
  var TR=[[190,190],[340,195],[345,345],[180,345],[262,150]],T='';
  TR.forEach(function(p){T+='<path class="ct" d="M'+(p[0]-7)+' '+(p[1]-7)+'l14 14M'+(p[0]+7)+' '+(p[1]-7)+'l-14 14"/>'});
  s+='<g id="ccT">'+T+'<text class="cw" x="40" y="44" style="font-size:'+fs+'px">MEMBRANE DAMAGE</text></g>';
  /* step 3: the temperature scale */
  var X=566,Y0=60,Y1=470;function ty(c){return Y0+(-c)/196*(Y1-Y0)}
  var sc='<path class="cs" d="M'+X+' '+Y0+'V'+Y1+'"/>';
  [[0,"0 °C"],[-20,"−20"],[-80,"−80"],[-196,"−196"]].forEach(function(m){sc+='<path class="cs" d="M'+(X-8)+' '+ty(m[0]).toFixed(1)+'H'+(X+8)+'"/><text x="'+(X+14)+'" y="'+(ty(m[0])+4).toFixed(1)+'" style="font-size:'+fs+'px">'+m[1]+'</text>'});
  for(var c=-10;c>-196;c-=10)sc+='<path class="cs2" d="M'+(X-4)+' '+ty(c).toFixed(1)+'H'+X+'"/>';
  sc+='<path class="cx" d="M'+(X-24)+' '+(ty(-196)-10)+'l20 20M'+(X-4)+' '+(ty(-196)-10)+'l-20 20"/>';
  sc+='<text class="ca" x="'+(X-18)+'" y="'+(ty(-80)+4).toFixed(1)+'" text-anchor="end" style="font-size:'+fs+'px">LAB FREEZER</text>';
  sc+='<text x="'+(X-30)+'" y="'+(ty(-196)+4).toFixed(1)+'" text-anchor="end" style="font-size:'+fs+'px">NO LN₂</text>';
  s+='<g id="ccS">'+sc+'<circle id="ccDot" class="cd" cx="'+X+'" cy="'+ty(0)+'" r="6"/></g>';
  s+='<text id="ccNR" class="ca" x="40" y="44" style="font-size:'+fs+'px">NO REGROWTH IN STORAGE</text>';
  /* step 4: the intact cell */
  s+='<g id="ccOK"><path class="cok" d="M'+(CC_C[0]+CC_R*.72+10)+' '+(CC_C[1]-CC_R*.72-8)+'l10 10 20-22"/><text class="ca" x="'+(CC_C[0]+CC_R*.72+46)+'" y="'+(CC_C[1]-CC_R*.72-4)+'" style="font-size:'+fs+'px">INTACT</text></g>';
  caps.forEach(function(t,i){s+='<text class="cap" id="ccC'+i+'" x="300" y="'+(mob?546:540)+'" text-anchor="middle" style="font-size:'+cs+'px">'+t+'</text>'});
  return s+'</svg>';
}
function storyDraw(svg){
  var E={mem:$("#ccMem",svg),cell:$("#ccCell",svg),B:[].slice.call(svg.querySelectorAll(".cb")),T:$("#ccT",svg),N:[].slice.call(svg.querySelectorAll(".cn")),
    P:[].slice.call(svg.querySelectorAll(".cp")),S:$("#ccS",svg),dot:$("#ccDot",svg),NR:$("#ccNR",svg),OK:$("#ccOK",svg),cap:[0,1,2,3].map(function(i){return $("#ccC"+i,svg)})};
  var PLn=E.P.map(function(p){return p.getTotalLength()});
  var Y0=60,Y1=470;function ty(c){return Y0+(-c)/196*(Y1-Y0)}
  return function(p,b){
    if(!E.mem.isConnected)return;
    var s1=seg(p,.02,.18),s2=seg(p,.27,.47),s3=seg(p,.53,.7),s4=seg(p,.78,.94);
    svg.style.opacity=(.3+.7*b).toFixed(3);
    /* step 1: big crystals grow in, then step 2 they give way */
    E.B.forEach(function(el,k){var g=seg(s1,k*.12,.5+k*.1);el.style.opacity=(g*(1-s2)).toFixed(3);
      var bb=el.getAttribute("data-c");if(!bb){var r=el.getBBox();bb=(r.x+r.width/2)+","+(r.y+r.height/2);el.setAttribute("data-c",bb)}var cc=bb.split(",");
      el.setAttribute("transform","translate("+cc[0]+" "+cc[1]+") scale("+(.35+.65*g).toFixed(3)+") translate("+(-cc[0])+" "+(-cc[1])+")")});
    E.T.style.opacity=(seg(s1,.55,1)*(1-s2)).toFixed(3);
    E.mem.classList.toggle("hurt",s1>.6&&s2<.5);
    /* step 2: polymers draw in, nano ice appears */
    E.P.forEach(function(el,k){var L=PLn[k];el.style.strokeDasharray=L.toFixed(1)+" "+L.toFixed(1);el.style.strokeDashoffset=(L*(1-s2)).toFixed(1);el.style.opacity=(1-.5*s4).toFixed(3)});
    E.N.forEach(function(el){var k=+el.getAttribute("data-k");var a=seg(s2,k*.6,k*.6+.4);el.style.opacity=(a*(1-s4)).toFixed(3)});
    /* step 3: the scale cools to -80 and holds */
    E.S.style.opacity=Math.min(1,s3*1.6)*(1-.6*s4)+"";
    E.dot.setAttribute("cy",ty(-80*s3).toFixed(1));
    E.NR.style.opacity=(seg(s3,.5,1)*(1-s4)).toFixed(3);
    /* step 4: thawed, intact */
    E.OK.style.opacity=s4.toFixed(3);E.mem.classList.toggle("ok",s4>.4);
    var W=[[0,0,.23,.25],[.25,.28,.48,.5],[.5,.53,.73,.75],[.75,.78,2,2]];
    E.cap.forEach(function(el,k){var a2=k===0?1:seg(p,W[k][0],W[k][1]),o=k===3?0:seg(p,W[k][2],W[k][3]);el.style.opacity=(b*a2*(1-o)).toFixed(3)});
  };
}
