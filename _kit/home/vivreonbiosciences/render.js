/* Offline render of the hero (HOME_BRIEF update, option c: a crafted render of the real subject).
   Subject: a ramified microglial cell, the brain's resident immune cell, whose CRAC channels Vivreon's
   Alzheimer's and opioid-use-disorder programmes target (NIH abstracts AG061995 / DA058467). Drawn as a
   fluorescence-microscopy image in the Vivreon logo blue (#0188ca), with an out-of-focus neuropil behind it.
   Output: hero.webp (2880x1800) + paths.json (primary process polylines for the live calcium glints).
   Run: node _kit/home/vivreonbiosciences/render.js */
const {chromium}=require('playwright');const fs=require('fs');const path=require('path');
const W=2880,H=1800;
(async()=>{
const b=await chromium.launch();const p=await b.newPage({viewport:{width:800,height:600}});
const out=await p.evaluate(({W,H})=>{
 let s=7321;const R=()=>{s=(s*16807)%2147483647;return (s-1)/2147483646};const RR=(a,b)=>a+(b-a)*R();
 const cv=document.createElement('canvas');cv.width=W;cv.height=H;const c=cv.getContext('2d');
 /* tissue: deep navy, a little lighter where the cell sits */
 let g=c.createRadialGradient(W*.64,H*.5,0,W*.64,H*.5,W*.75);g.addColorStop(0,'#0c2236');g.addColorStop(.5,'#081827');g.addColorStop(1,'#040c15');c.fillStyle=g;c.fillRect(0,0,W,H);
 c.globalCompositeOperation='lighter';
 /* grow a process tree: returns list of segments [x0,y0,x1,y1,width,depth] */
 function tree(x,y,ang,len,w0,depth,segs,poly){
   let step=12,n=Math.round(len/step),w=w0,a=ang,av=0,pts=[[x,y]];
   for(let i=0;i<n;i++){
     av+=RR(-.036,.036);av*=.86;a+=av;const nx=x+Math.cos(a)*step,ny=y+Math.sin(a)*step;
     const t=i/n,ww=w0*Math.pow(1-t*.86,1.35);segs.push([x,y,nx,ny,Math.max(ww,1.3),depth]);x=nx;y=ny;pts.push([x,y]);
     if(depth<4&&i>3&&R()<(depth==0?.085:.06)&&n-i>6){const side=R()<.5?-1:1;tree(x,y,a+side*RR(.45,1.05),len*(1-t)*RR(.45,.8),ww*RR(.55,.75),depth+1,segs,null)}
   }
   /* terminal bulb */
   segs.push([x,y,x+.1,y,Math.max(w0*.5,3.2),9]);
   if(poly)poly.push(pts);return segs;
 }
 function cell(cx,cy,sc,blur,alpha,nProc,seedRot,keep){
   const segs=[],polys=[];const rot=seedRot;
   for(let k=0;k<nProc;k++){const a=rot+k*2*Math.PI/nProc+RR(-.28,.28);
     const sx=cx+Math.cos(a)*48*sc,sy=cy+Math.sin(a)*38*sc;tree(sx,sy,a,RR(540,880)*sc,RR(19,27)*sc,0,segs,polys)}
   /* draw the tree once, sharp, onto a layer canvas; the glows are that layer blurred (fast: one filter per layer) */
   const L=document.createElement('canvas');L.width=W;L.height=H;const l=L.getContext('2d');l.lineCap='round';
   function paint(col,wm){l.clearRect(0,0,W,H);l.strokeStyle=col;l.fillStyle=col;
     for(const q of segs){l.globalAlpha=q[5]==9?1:Math.max(.45,1-q[5]*.12);l.lineWidth=q[4]*wm;l.beginPath();l.moveTo(q[0],q[1]);l.lineTo(q[2],q[3]);l.stroke()}
     l.globalAlpha=1;const rk=wm<.5?.86:1;l.beginPath();for(let i=0;i<=48;i++){const t=i/48*Math.PI*2,r=rk*(80+9*Math.sin(t*3+1)+6*Math.sin(t*5))*sc;l.lineTo(cx+Math.cos(t)*r*1.12,cy+Math.sin(t)*r*.9)}
     if(wm<.5){const rg=l.createRadialGradient(cx+14*sc,cy-12*sc,0,cx,cy,84*sc);rg.addColorStop(0,'rgba(240,250,255,.95)');rg.addColorStop(.6,'rgba(170,222,250,.6)');rg.addColorStop(1,'rgba(90,180,235,.25)');l.fillStyle=rg}l.fill()}
   const layers=blur>0?[[blur*2.4,'#0188ca',.5*alpha,1.6],[blur,'#3fb2ee',.6*alpha,1]]:[[38,'#0188ca',.75,1.9],[12,'#2ea6ea',.8,1.25],[3,'#6cc6f4',.85,.8],[0,'#dcf2ff',.9,.42]];
   for(const [bl,col,al,wm] of layers){paint(col,wm);c.globalAlpha=al;c.filter=bl>0?'blur('+bl+'px)':'none';c.drawImage(L,0,0);c.filter='none';c.globalAlpha=1}
   c.filter='none';
   if(blur==0){/* nucleus: a slightly darker kidney-shaped body inside the soma, with a bright rim (a second, nuclear stain) */
     c.globalCompositeOperation='source-over';const ng=c.createRadialGradient(cx-8*sc,cy+4*sc,0,cx-8*sc,cy+4*sc,52*sc);ng.addColorStop(0,'rgba(22,104,170,.62)');ng.addColorStop(.65,'rgba(44,140,205,.42)');ng.addColorStop(1,'rgba(150,215,255,0)');
     c.fillStyle=ng;c.beginPath();c.ellipse(cx-8*sc,cy+4*sc,50*sc,38*sc,.3,0,7);c.fill();c.globalCompositeOperation='lighter';
     /* varicosities along the processes */
     for(const q of segs){if(q[5]<9&&R()<.018){c.fillStyle='rgba(225,245,255,.5)';c.beginPath();c.arc(q[2],q[3],q[4]*.35+1.2,0,7);c.fill()}}
   }
   if(keep)return polys;
 }
 /* neuropil: soft out-of-focus strands far behind */
 const N=document.createElement('canvas');N.width=W;N.height=H;const nc=N.getContext('2d');nc.lineCap='round';
 for(let i=0;i<70;i++){let x=RR(-100,W+100),y=RR(-100,H+100),a=RR(0,7);nc.strokeStyle='rgba(30,110,170,'+RR(.05,.13)+')';nc.lineWidth=RR(4,14);nc.beginPath();nc.moveTo(x,y);for(let k=0;k<40;k++){a+=RR(-.12,.12);x+=Math.cos(a)*30;y+=Math.sin(a)*30;nc.lineTo(x,y)}nc.stroke()}
 c.filter='blur(14px)';c.drawImage(N,0,0);c.filter='none';
 /* neighbouring microglia, out of focus (they tile the brain) */
 cell(W*.13,H*.2,.75,16,.42,6,.4);cell(W*.3,H*.9,.7,18,.36,6,1.1);cell(W*.96,H*.12,.65,20,.34,5,2.2);cell(W*.92,H*.92,.8,14,.4,6,.7);
 /* the cell in focus */
 const polys=cell(W*.64,H*.5,1.18,0,1,8,.25,true);
 /* bokeh dust */
 {const B=document.createElement('canvas');B.width=W;B.height=H;const bc=B.getContext('2d');for(let i=0;i<120;i++){bc.fillStyle='rgba(120,200,250,'+RR(.04,.16)+')';bc.beginPath();bc.arc(RR(0,W),RR(0,H),RR(2,9),0,7);bc.fill()}c.filter='blur(6px)';c.drawImage(B,0,0);c.filter='none'}
 c.globalCompositeOperation='source-over';
 /* film grain to kill banding */
 const id=c.getImageData(0,0,W,H),d=id.data;for(let i=0;i<d.length;i+=4){const n=(R()-.5)*7;d[i]+=n;d[i+1]+=n;d[i+2]+=n}c.putImageData(id,0,0);
 const P=polys.map(pl=>pl.filter((_,i)=>i%3==0).map(q=>[+(q[0]/W).toFixed(4),+(q[1]/H).toFixed(4)]));
 return {url:cv.toDataURL('image/webp',.9),P};
},{W,H});
fs.writeFileSync(path.join(__dirname,'hero.webp'),Buffer.from(out.url.split(',')[1],'base64'));
fs.writeFileSync(path.join(__dirname,'paths.json'),JSON.stringify(out.P));
console.log('hero.webp',fs.statSync(path.join(__dirname,'hero.webp')).size,'paths',out.P.length);
await b.close();})();
