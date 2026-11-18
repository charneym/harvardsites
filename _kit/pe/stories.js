/* PE story library: pinned one-scene diagrams (BL/BY: ONE scene; each step changes one labelled part).
   Each type: svg(steps, P) -> SVG markup (node side, at gen time); draw -> browser source of storyDraw(svg)
   returning function(p,b): p = pinned progress 0..1, b = build-in before the pin (0..1).
   Steps: 3 or 4 [{tag,title,text}]. Labels are short UPPERCASE mono text (keep each <= 18 characters).
   Shared classes come from the engine's scene CSS (.frm .frm2 .ln-a .flow .node .own .join .grow text.a/.w/.big). */
const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const up = s => esc(String(s || '').toUpperCase());

module.exports = {
  /* hub-and-spokes: the company at the centre; each step lights one group of spokes (the firm's resources, sectors
     or levers); the last step closes the ring. P: center ("THE COMPANY"), nodes [labels] (3..8, default = step tags) */
  hub: {
    svg(steps, P) {
      const nodes = (P.nodes && P.nodes.length ? P.nodes : steps.map(s => s.tag)).slice(0, 8), n = nodes.length, N = steps.length;
      let o = '<svg viewBox="0 0 800 460" aria-hidden="true"><g id="hbCo"><circle class="frm2" cx="400" cy="230" r="78"/><circle class="frm" cx="400" cy="230" r="78"/><circle class="own" id="hbCore" cx="400" cy="230" r="34"/>' +
        '<text class="big" x="400" y="134" text-anchor="middle">' + up(P.center || 'THE COMPANY') + '</text></g><circle class="ln-a" id="hbRing" cx="400" cy="230" r="178" stroke-dasharray="4 8"/>';
      nodes.forEach((lb, i) => {
        const a = -Math.PI / 2 + (i + .5) * 2 * Math.PI / n, x = 400 + Math.cos(a) * 178, y = 230 + Math.sin(a) * 178, x0 = 400 + Math.cos(a) * 82, y0 = 230 + Math.sin(a) * 82;
        const g = Math.min(N - 1, Math.floor(i * N / n)), right = Math.cos(a) > .25, left = Math.cos(a) < -.25;
        const tx = right ? x + 18 : left ? x - 18 : x, ty = Math.abs(Math.cos(a)) <= .25 ? (Math.sin(a) < 0 ? y - 18 : y + 30) : y + 5;
        o += '<g class="hbN" data-g="' + g + '"><path class="ln-a" d="M' + x0.toFixed(1) + ' ' + y0.toFixed(1) + 'L' + x.toFixed(1) + ' ' + y.toFixed(1) + '"/><path class="flow" d="M' + x.toFixed(1) + ' ' + y.toFixed(1) + 'L' + x0.toFixed(1) + ' ' + y0.toFixed(1) + '"/>' +
          '<circle class="node" cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="9"/><text class="w" x="' + tx.toFixed(1) + '" y="' + ty.toFixed(1) + '" text-anchor="' + (right ? 'start' : left ? 'end' : 'middle') + '">' + up(lb) + '</text></g>';
      });
      return o + '</svg>';
    },
    draw: `function storyDraw(svg){
  var G=$$(".hbN",svg),core=$("#hbCore",svg),ring=$("#hbRing",svg),co=$("#hbCo",svg),N=$$(".step").length||3;
  return function(p,b){if(!co.isConnected)return;co.style.opacity=b;
    G.forEach(function(g){var k=+g.getAttribute("data-g"),s=seg(p,k/N-.02,k/N+.16);g.style.opacity=(b*(.22+.78*s)).toFixed(3);
      $(".node",g).classList.toggle("on",s>.6);var f=$(".flow",g);f.style.strokeDashoffset=(-p*600).toFixed(1);f.style.opacity=s.toFixed(3)});
    var e=seg(p,(N-1)/N+.05,.98);ring.style.opacity=(b*(.3+.7*e)).toFixed(3);ring.style.strokeDashoffset=(-p*300).toFixed(1);
    core.style.fill="rgba(var(--accr),"+(.15+.85*e).toFixed(3)+")"}}`
  },

  /* between two poles: the owner on one side, the firm on the other; each step is a station on the bridge between
     them; the last step joins the two. P: left ("FOUNDER"), right ("FIRM NAME"), result (caption under the bridge) */
  poles: {
    svg(steps, P) {
      const N = steps.length, x0 = 190, x1 = 610;
      let o = '<svg viewBox="0 0 800 440" aria-hidden="true">' +
        '<g id="poL"><circle class="frm2" cx="110" cy="220" r="62"/><circle class="frm" cx="110" cy="220" r="62"/><circle class="own" cx="110" cy="220" r="22"/><text class="big" x="110" y="318" text-anchor="middle">' + up(P.left || 'THE OWNER') + '</text></g>' +
        '<g id="poR"><circle class="frm2" cx="690" cy="220" r="62"/><circle class="frm" cx="690" cy="220" r="62"/><circle class="own" id="poRc" cx="690" cy="220" r="22"/><text class="big" x="690" y="318" text-anchor="middle">' + up(P.right || 'THE FIRM') + '</text></g>' +
        '<path class="ln-a" d="M' + (x0 - 18) + ' 220H' + (x1 + 18) + '"/><path class="join" id="poJ" d="M' + (x0 - 18) + ' 220H' + (x1 + 18) + '"/>';
      steps.forEach((s, i) => {
        const x = x0 + (x1 - x0) * (N === 1 ? .5 : i / (N - 1)), up2 = i % 2 === 0;
        o += '<g class="poS"><path class="ln-a" d="M' + x + ' 220V' + (up2 ? 164 : 276) + '"/><rect class="node" x="' + (x - 9) + '" y="211" width="18" height="18" rx="4"/><text class="w" x="' + x + '" y="' + (up2 ? 150 : 298) + '" text-anchor="middle">' + up(s.tag) + '</text></g>';
      });
      return o + '<text class="a" id="poT" x="400" y="404" text-anchor="middle">' + up(P.result || '') + '</text><circle id="poM" r="7" cx="' + x0 + '" cy="220" style="fill:var(--accL)"/></svg>';
    },
    draw: `function storyDraw(svg){
  var S=$$(".poS",svg),J=$("#poJ",svg),M=$("#poM",svg),L=$("#poL",svg),Rr=$("#poR",svg),T=$("#poT",svg),Rc=$("#poRc",svg),JL=J.getTotalLength(),N=S.length;
  return function(p,b){if(!L.isConnected)return;L.style.opacity=b;Rr.style.opacity=(b*(.4+.6*seg(p,.6,.95))).toFixed(3);
    var q=Math.min(1,p*1.08);J.style.strokeDasharray=JL;J.style.strokeDashoffset=(JL*(1-q)).toFixed(1);M.setAttribute("cx",(172+(JL)*q).toFixed(1));M.style.opacity=b;
    S.forEach(function(g,k){var s=seg(p,k/N-.04,k/N+.12);g.style.opacity=(b*(.25+.75*s)).toFixed(3);$(".node",g).classList.toggle("on",s>.6)});
    Rc.style.fill="rgba(var(--accr),"+(.15+.85*seg(p,.8,.98)).toFixed(3)+")";if(T)T.style.opacity=seg(p,.84,.98).toFixed(3)}}`
  },

  /* climb: a stair of blocks rising left to right, one per step; a line climbs them and the top block lights.
     P: top (label above the last block, optional), base (label under the first, optional) */
  climb: {
    svg(steps, P) {
      const N = steps.length, bw = 520 / N, bx = 140, by = 390, hs = 270 / N;
      let o = '<svg viewBox="0 0 800 450" aria-hidden="true"><path class="ln-a" d="M100 ' + by + 'H700"/>', path = 'M' + bx + ' ' + by;
      steps.forEach((s, i) => {
        const x = bx + i * bw, hgt = hs * (i + 1), y = by - hgt;
        o += '<g class="clB"><rect class="frm2" x="' + (x + 4) + '" y="' + y + '" width="' + (bw - 8) + '" height="' + hgt + '" rx="6"/><rect class="frm" x="' + (x + 4) + '" y="' + y + '" width="' + (bw - 8) + '" height="' + hgt + '" rx="6"/>' +
          '<text class="w" x="' + (x + bw / 2) + '" y="' + (y - 18) + '" text-anchor="middle">' + up(s.tag) + '</text><text x="' + (x + bw / 2) + '" y="' + (by - 16) + '" text-anchor="middle">0' + (i + 1) + '</text></g>';
        path += 'V' + y + 'H' + (x + bw);
      });
      o += '<path class="join" id="clP" d="' + path + '"/>';
      const tx = bx + (N - 1) * bw + bw / 2, ty = by - hs * N;
      o += '<rect class="own" id="clTop" x="' + (tx - 14) + '" y="' + (ty + 26) + '" width="28" height="28" rx="5"/>';
      if (P.base) o += '<text class="a" x="' + bx + '" y="' + (by + 34) + '">' + up(P.base) + '</text>';
      if (P.top) o += '<text class="a" id="clT" x="' + (bx + N * bw) + '" y="' + (by + 34) + '" text-anchor="end">' + up(P.top) + '</text>';
      return o + '</svg>';
    },
    draw: `function storyDraw(svg){
  var B=$$(".clB",svg),P=$("#clP",svg),top=$("#clTop",svg),T=$("#clT",svg),PL=P.getTotalLength(),N=B.length;
  return function(p,b){if(!P.isConnected)return;
    B.forEach(function(g,k){var s=seg(p,k/N-.05,k/N+.14);g.style.opacity=(b*(.2+.8*s)).toFixed(3);g.setAttribute("transform","translate(0 "+(14*(1-s)).toFixed(1)+")")});
    P.style.strokeDasharray=PL;P.style.strokeDashoffset=(PL*(1-Math.min(1,p*1.05))).toFixed(1);P.style.opacity=b;
    var e=seg(p,(N-1)/N,.97);top.style.fill="rgba(var(--accr),"+(.1+.9*e).toFixed(3)+")";top.style.opacity=b;if(T)T.style.opacity=e.toFixed(3)}}`
  },

  /* layered cross-section: the company drawn as stacked strata, one per step, built from the ground up; the top layer
     lights at the end. P: caption (label on the left of the stack, optional) */
  layers: {
    svg(steps, P) {
      const N = steps.length, x = 230, wd = 340, lh = Math.min(70, 300 / N), y0 = 400;
      let o = '<svg viewBox="0 0 800 450" aria-hidden="true"><path class="ln-a" d="M150 ' + y0 + 'H650"/>';
      steps.forEach((s, i) => {
        const y = y0 - (i + 1) * lh - i * 10, sk = 26;
        o += '<g class="lyL"><path class="frm2" d="M' + x + ' ' + (y + lh) + 'L' + (x + sk) + ' ' + y + 'H' + (x + wd + sk) + 'L' + (x + wd) + ' ' + (y + lh) + 'Z"/>' +
          '<path class="frm" d="M' + x + ' ' + (y + lh) + 'L' + (x + sk) + ' ' + y + 'H' + (x + wd + sk) + 'L' + (x + wd) + ' ' + (y + lh) + 'Z"/>' +
          '<path class="ln-a" d="M' + (x + wd + sk + 14) + ' ' + (y + lh / 2) + 'H' + (x + wd + sk + 40) + '"/><text class="w" x="' + (x + wd + sk + 50) + '" y="' + (y + lh / 2 + 5) + '">' + up(s.tag) + '</text>' +
          '<text x="' + (x + 22) + '" y="' + (y + lh / 2 + 5) + '">0' + (i + 1) + '</text></g>';
      });
      const yt = y0 - N * lh - (N - 1) * 10;
      o += '<path id="lyTop" class="own" d="M' + (x + 140) + ' ' + (yt - 8) + 'h70l-8 -26h-54z"/>';
      if (P.caption) o += '<text class="a" x="' + (x - 20) + '" y="' + (y0 - 14) + '" text-anchor="end">' + up(P.caption) + '</text>';
      return o + '</svg>';
    },
    draw: `function storyDraw(svg){
  var Ls=$$(".lyL",svg),top=$("#lyTop",svg),N=Ls.length;
  return function(p,b){if(!top.isConnected)return;
    Ls.forEach(function(g,k){var s=seg(p,k/N-.06,k/N+.12);g.style.opacity=(b*(.18+.82*s)).toFixed(3);g.setAttribute("transform","translate(0 "+(-22*(1-s)).toFixed(1)+")")});
    var e=seg(p,(N-1)/N+.02,.97);top.style.opacity=(b*e).toFixed(3);top.style.fill="rgba(var(--accr),"+(.2+.8*e).toFixed(3)+")"}}`
  }
};
