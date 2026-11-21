// node post.js in.png out.webp  — feathers the render to real alpha with a long eased elliptical mask (no box edge: DP, DJ)
const sharp=require(process.env.SHARP||'sharp');
(async()=>{const [i,o]=process.argv.slice(2);const {data,info}=await sharp(i).ensureAlpha().raw().toBuffer({resolveWithObject:true});
const W=info.width,H=info.height,ink=[13,20,26];
for(let y=0;y<H;y++)for(let x=0;x<W;x++){const k=(y*W+x)*4;
  const dx=(x/W-.5)/.5,dy=(y/H-.46)/.54;const d=Math.sqrt(dx*dx*.92+dy*dy);let m=1-Math.min(1,Math.max(0,(d-.42)/.56));m=m*m*(3-2*m);
  // un-mix the ink ground so the alpha carries only the subject
  const r=data[k],g=data[k+1],b=data[k+2];const ex=Math.max(r-ink[0],g-ink[1],b-ink[2],0)/255;let a=Math.min(1,ex*3.2);
  const A=a*m;if(A<=0.002){data[k]=data[k+1]=data[k+2]=data[k+3]=0;continue}
  for(let c=0;c<3;c++){const v=(data[k+c]-ink[c]*(1-a))/a;data[k+c]=Math.max(0,Math.min(255,Math.round(v)))}data[k+3]=Math.round(A*255)}
await sharp(data,{raw:{width:W,height:H,channels:4}}).webp({quality:88,alphaQuality:90}).toFile(o);})();
