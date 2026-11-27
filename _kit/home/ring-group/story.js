/* The story scene (BL/BY/DB): one perforation job, as ring-group.com describes it ("from hole pattern to finished part": the pattern,
   the tool, the machine). ONE plan view kept on screen, the same sheet and pattern carried through all three steps (no cross-fades):
   1 Pattern: the hole pattern is developed as a design tile.
   2 Tool: the tool room builds the matching pin tool; its pins sit exactly on the pattern.
   3 Perforate: the sheet feeds under the press; each stroke punches one tool's width of the pattern.
   The pattern and sizes are illustrative. */
var RG={x0:30,x1:500,y0:236,y1:420,p:16,tx:300,tw:96};
function rgPts(x0,y0,w,h,P){var a=[],r=0;for(var y=y0+P/2;y<y0+h;y+=P*.866,r++){for(var x=x0+(r%2?P:P/2);x<x0+w;x+=P)a.push([x,y])}return a}
function rgScene(o){
  var g='',mob=o.mob,R=RG,i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 150 520 316" aria-hidden="true"><defs>'+
     '<pattern id="rgHt" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0V9" stroke="rgba(242,244,248,.2)" stroke-width="1"/></pattern>'+
     '<clipPath id="rgCl"><rect x="'+R.x0+'" y="'+R.y0+'" width="'+(R.x1-R.x0)+'" height="'+(R.y1-R.y0)+'"/></clipPath></defs>';
  /* the design tile (step 1) */
  g+='<g id="rgDs"><rect class="tile" x="40" y="168" width="128" height="52"/>';rgPts(40,168,128,52,R.p).forEach(function(q){g+='<circle class="hd" cx="'+q[0].toFixed(1)+'" cy="'+q[1].toFixed(1)+'" r="3.2"/>'});g+='</g>';
  /* the leather sheet (moves left in step 3), with its holes */
  g+='<g clip-path="url(#rgCl)"><g id="rgSh"><rect class="lth" x="'+R.x0+'" y="'+R.y0+'" width="'+(R.x1-R.x0+300)+'" height="'+(R.y1-R.y0)+'"/><g id="rgHl"></g></g></g>';
  /* the pin tool over the sheet (plan: the plate outline with its pins) */
  g+='<g id="rgTl"><rect class="plt" x="'+R.tx+'" y="'+(R.y0-14)+'" width="'+R.tw+'" height="'+(R.y1-R.y0+28)+'"/><rect class="hat" x="'+R.tx+'" y="'+(R.y0-14)+'" width="'+R.tw+'" height="'+(R.y1-R.y0+28)+'"/><g id="rgPn"></g></g>';
  var T=function(id,x,y,s,a){return '<text class="t" id="'+id+'" x="'+x+'" y="'+y+'"'+(a?' text-anchor="'+a+'"':'')+'>'+s+'</text>'};
  g+=T("rgLd",180,198,mob?"PATTERN":"HOLE PATTERN · DESIGN TILE");
  g+=T("rgLt",R.tx+R.tw/2,R.y0-24,mob?"TOOL":"PERFORATING TOOL","middle");
  if(!mob)g+=T("rgLs",R.x0+6,R.y1+22,"LEATHER, FED UNDER THE PRESS");
  var L=mob?["THE PATTERN","THE TOOL","PERFORATED"]:["DESIGN DEVELOPMENT · THE PATTERN","TOOL ROOM · PINS ON THE PATTERN","HD XL · ONE STROKE, ONE TOOL WIDTH"];
  for(i=0;i<3;i++)g+='<text class="t cl cap" id="rgC'+i+'" x="8" y="458">'+L[i]+'</text>';
  return g+'</svg>';
}
function scene(){return rgScene({mob:MOBILE()?1:0})}
function rgE(u){u=u<0?0:u>1?1:u;return u<.5?2*u*u:1-Math.pow(-2*u+2,2)/2}
function storyDraw(svg){
  var R=RG,Q=function(s){return svg.querySelector(s)};
  var E={ds:Q("#rgDs"),sh:Q("#rgSh"),hl:Q("#rgHl"),tl:Q("#rgTl"),pn:Q("#rgPn"),L:{d:Q("#rgLd"),t:Q("#rgLt"),s:Q("#rgLs")},C:[0,1,2].map(function(k){return Q("#rgC"+k)})};
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  /* the pattern over the whole sheet in sheet coordinates; the tool's pins are the pattern under the tool */
  var H=rgPts(R.x0,R.y0,R.x1-R.x0+300,R.y1-R.y0,R.p),pins=rgPts(R.tx,R.y0,R.tw,R.y1-R.y0,R.p);
  /* align pins to the sheet's pattern phase */
  E.pn.innerHTML=H.filter(function(q){return q[0]>=R.tx&&q[0]<R.tx+R.tw}).map(function(q){return '<circle class="pin" cx="'+q[0].toFixed(1)+'" cy="'+q[1].toFixed(1)+'" r="3.4"/>'}).join("");
  E.hl.innerHTML=H.map(function(q){return '<circle class="hole" cx="'+q[0].toFixed(1)+'" cy="'+q[1].toFixed(1)+'" r="3.2"/>'}).join("");
  var C=[].slice.call(E.hl.children),N=6,step=R.tw;
  return function(p,bb){
    if(!svg.isConnected)return;
    op(E.ds,bb*(1-seg(p,.62,.68)*.6));op(E.L.d,bb*(1-seg(p,.3,.34)));
    op(E.sh,bb*seg(p,.04,.12));op(E.L.s,bb*seg(p,.08,.12)*(1-seg(p,.3,.34)));
    var tl=seg(p,.36,.46);op(E.tl,bb*tl);op(E.L.t,bb*tl*(1-seg(p,.9,.95)));
    /* 3: N strokes; between strokes the sheet indexes one tool width to the left (eased), during a stroke the pins flash down */
    var s3=seg(p,.68,.98),k=Math.min(N,Math.floor(s3*N)),f=s3*N-k,adv=(k+rgE(Math.min(1,f/.6)))*step*(s3>0?1:0);if(k>=N)adv=N*step;
    E.sh.setAttribute("transform","translate("+(-adv).toFixed(1)+" 0)");
    var hit=s3>0&&f>.6&&k<N;E.pn.style.opacity=hit?"0.35":"1";
    /* a hole shows once a stroke has passed over it: its sheet x is under the tool at some completed stroke */
    C.forEach(function(c,i){var x=H[i][0],done=0;for(var j=0;j<=Math.min(k,N-1);j++){var at=x-j*step;if(at>=R.tx&&at<R.tx+R.tw&&(j<k||f>.75))done=1}
      c.style.opacity=done?"1":"0"});
    var W=[[0,1/3],[1/3,2/3],[2/3,1.01]];
    E.C.forEach(function(c,i){var a=W[i][0],z=W[i][1];op(c,bb*(i===0?1:seg(p,a,a+.03))*(i===2?1:(1-seg(p,z-.03,z))))});
  };
}
