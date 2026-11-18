/* Lake Ten: Alignment · Planning · Execution, told through its inaugural platform (CDS release, 2026-10-13).
   Step 1: three strands (CDS management, LongueVue Capital, Lake Ten) converge into one course at CDS.
   Step 2: the plan fans out over CDS's five-state footprint; leadership stays in place.
   Step 3: two new outlined nodes (new markets, new services) join the fan along moving flows. */
function scene(){
  var ST=[["NEW JERSEY",110],["PENNSYLVANIA",170],["GEORGIA",230],["MISSOURI",290],["CALIFORNIA",350]];
  var o='<svg viewBox="24 30 752 400" aria-hidden="true">'+
   '<g id="ltS">'+[["MANAGEMENT",110],["LONGUEVUE",230],["LAKE TEN",350]].map(function(s,i){
     return '<path class="join ltJ" d="M44 '+s[1]+'C200 '+s[1]+' 250 230 372 230"/><circle class="node ltN" cx="44" cy="'+s[1]+'" r="6"/><text class="'+(i==2?'a':'w')+'" x="44" y="'+(s[1]-18)+'">'+s[0]+'</text>'}).join("")+'</g>'+
   '<g id="ltF">'+ST.map(function(s){return '<path class="ln-a ltL" d="M462 230L594 '+s[1]+'"/>'}).join("")+
     ST.map(function(s){return '<g class="ltSt"><circle class="node" cx="600" cy="'+s[1]+'" r="6"/><text class="w" x="618" y="'+(s[1]+5)+'">'+s[0]+'</text></g>'}).join("")+
     '<text class="a" x="420" y="168" text-anchor="middle">2M SQ FT</text><text class="a" x="420" y="306" text-anchor="middle">LEADERSHIP STAYS</text></g>'+
   '<g id="ltX">'+[["NEW MARKETS",50],["NEW SERVICES",410]].map(function(s){return '<path class="flow ltFl" d="M462 230L594 '+s[1]+'"/><rect class="own ltO" x="593" y="'+(s[1]-7)+'" width="14" height="14" transform="rotate(45 600 '+s[1]+')"/><text class="a" x="618" y="'+(s[1]+5)+'">'+s[0]+'</text>'}).join("")+'</g>'+
   '<g id="ltC"><rect class="frm2" x="364" y="174" width="112" height="112"/><rect class="own" id="ltCore" x="378" y="188" width="84" height="84"/><text class="w big" x="420" y="236" text-anchor="middle">CDS</text></g>';
  return o+'</svg>';
}
function storyDraw(svg){
  var Js=$$(".ltJ",svg),JL=Js.map(function(j){return j.getTotalLength()}),Ns=$$(".ltN",svg),S=$("#ltS",svg),F=$("#ltF",svg),X=$("#ltX",svg),C=$("#ltC",svg),core=$("#ltCore",svg),
    Ls=$$(".ltL",svg),LL=Ls.map(function(l){return l.getTotalLength()}),Sts=$$(".ltSt",svg),Fl=$$(".ltFl",svg);
  return function(p,b){if(!C.isConnected)return;
    var s1=seg(p,.02,.28),s2=seg(p,.36,.6),s3=seg(p,.68,.94);
    S.style.opacity=b.toFixed(3);C.style.opacity=b.toFixed(3);
    Js.forEach(function(j,k){var q=seg(s1,k*.12,.76+k*.12);j.style.strokeDasharray=JL[k];j.style.strokeDashoffset=(JL[k]*(1-q)).toFixed(1)});
    Ns.forEach(function(n){n.classList.toggle("on",s1>.05)});
    core.style.fill="rgba(var(--accr),"+(.1+.45*s1+.3*s3).toFixed(3)+")";
    F.style.opacity=b.toFixed(3);
    Ls.forEach(function(l,k){var q=seg(s2,k*.08,.6+k*.08);l.style.strokeDasharray=LL[k];l.style.strokeDashoffset=(LL[k]*(1-q)).toFixed(1)});
    Sts.forEach(function(g,k){var q=seg(s2,.3+k*.08,.7+k*.06);g.style.opacity=q.toFixed(3);$(".node",g).classList.toggle("on",q>.6)});
    $$("text.a",F).forEach(function(t){t.style.opacity=s2.toFixed(3)});
    X.style.opacity=(b*s3).toFixed(3);Fl.forEach(function(f){f.style.strokeDashoffset=(-p*520).toFixed(1)})}}

/* BV(3): a one-person team is a founder feature (large portrait, bio inline), never a lone tile or a sheet. */
if(D.team&&D.team.length===1){SHEETS=[];var LT_HOME=0,_ltTeam=SEC.team;SEC.team=function(cl){LT_HOME=1;var o=_ltTeam(cl);LT_HOME=0;return o};
  peopleBlock=function(){var p=D.team[0],bio=LT_HOME?p.bio.slice(0,1):p.bio;
    return '<div class="ltf"><div class="ltf-ph"><img src="'+p.img+'" alt="Portrait of '+esc(p.name)+'" loading="eager" onerror="this.parentNode.classList.add(\'noph\')"></div>'+
      '<div class="ltf-b"><span class="lab" data-r>'+esc(p.grp||"Leadership")+'</span><h3 class="split">'+esc(p.name)+'</h3><p class="ltf-t" data-r>'+esc(p.title)+'</p>'+
      bio.map(function(x){return '<p class="ltf-p" data-r>'+esc(x)+'</p>'}).join("")+'</div></div>'}}
