var FONTS=['300 1em "Fraunces"','italic 300 1em "Fraunces"','400 1em "Fraunces"','italic 400 1em "Fraunces"','300 1em "Manrope"','400 1em "Manrope"','500 1em "Manrope"','700 1em "Manrope"'];
var WEB="https://tourocp.com/";
var MAIL="geral@tourocp.com",MAILCV="cv@tourocp.com";
var AREA="https://tourocp.com/area-reservada/?lang=pt";
var MAP="https://www.google.com/maps/search/?api=1&query=Pra%C3%A7a+do+Pr%C3%ADncipe+Real+11+1250-184+Lisboa";
/* the two funds, as described on tourocp.com (Fundos) */
var FUNDS=[
 {n:"Touro I",v:"71,5 M€",st:"Segundo fecho · Em investimento",d:"Fundo de Capital de Risco Fechado (Crescimento/Compra) para a aquisição de negócios maduros e comprovados no sector de produtos industriais, incluindo negócios auxiliares.",
  f:[["Geografia","Negócios domésticos ou estrangeiros a operar em Portugal"],["Participação","Controlo do negócio"],["Performance","Volume de negócios de 10 M€ · EBITDA de 2 M€"],["Imperativo de mudança","Abertura, resiliência, compromisso e mudança de cultura para superar obstáculos disruptivos"],["Sustentabilidade","Compromisso com a neutralidade carbónica; signatária dos PRI das Nações Unidas"]],reg:"Registado na CMVM com o n.º 1894"},
 {n:"Touro Next",v:"21,1 M€",st:"Fecho final · Em investimento",d:"Fundo de Capital de Risco Fechado (SIFIDE II) para a aquisição de negócios alvo com investimentos exclusivos em Investigação e Desenvolvimento.",
  f:[["Geografia","Negócios a operar em Portugal"],["Tipo de investimento","I&D em negócios alvo reconhecidos pela ANI"],["Sectores","Um vertical, a indústria, e dois horizontais: I&D e ESG/Sustentabilidade"],["Ativos","Negócios em fase de crescimento, com oportunidades de investimento em I&D"],["Participação","Posições minoritárias ou maioritárias"]],reg:"Registado na CMVM com o n.º 1971"}];
/* participadas, newest first, with year and sector exactly as listed on tourocp.com */
var PF=[
 ["Reckon.ai","2025","IA · Retalho","https://www.reckon.ai"],
 ["Factor Social","2025","Sustentabilidade","https://factorsocial.pt"],
 ["Effizency","2025","Plataforma digital","https://effizency.com"],
 ["Pasto Alentejano","2025","Produtos à base de carne","https://www.pastoalentejano.com"],
 ["Uzugos","2025","Participações industriais","https://www.uzugos.pt"],
 ["proGrow","2025","Digitalização industrial","http://www.progrow.io/pt"],
 ["Engidro","2025","Sustentabilidade","https://engidro.pt"],
 ["Agentifai","2025","Assistentes virtuais","https://agentifai.com"],
 ["Bhout","2025","Tecnologia fitness","http://www.bhout.com/pt"],
 ["Norbags","2024","Sacos de papel","http://www.norbags.com/index.php/pt"],
 ["Sair da Casca","2024","Sustentabilidade","https://www.sairdacasca.com"],
 ["Maven","2024","Saúde animal","https://maven.pet"],
 ["S317 Consulting","2023","Sustentabilidade","https://s317consulting.com"]];
var TEAM=[
 {g:"Sócios",name:"António Ramalho",title:"Presidente",sum:"Presidente do Conselho de Administração desde setembro de 2023; foi CEO do Novo Banco (2016–2022) e Vice-Presidente do Millennium BCP."},
 {g:"Sócios",name:"Manuel Alves Gomes",title:"Sócio Fundador",sum:"Mais de 25 anos de experiência, dez dos quais na PwC, KPMG e Deloitte em todo o Deal Continuum; ACA pelo ICAEW."},
 {g:"Sócios",name:"Miguel Vodrazka de Miranda",title:"Sócio Fundador",sum:"Business Angel e banqueiro de investimento; liderou transações de cerca de 500 M€. MBA pela Harvard Business School."},
 {g:"Sócios",name:"Paulo Pio Correia",title:"Sócio Fundador",sum:"Mais de 25 anos em multinacionais em quatro continentes; liderou aquisições e integrações no Grupo Royal Numico."},
 {g:"Back Office",name:"Rita Freitas Vicente",title:"Responsável pela Conformidade",sum:"Mais de duas décadas em advocacia e assessoria jurídica, especializada em conformidade, proteção de dados e sustentabilidade."},
 {g:"Back Office",name:"Sónia Pereira",title:"Controller Administrativa e Financeira",sum:"Mais de 20 anos em transformação financeira e otimização de desempenho; Contabilista Certificada."},
 {g:"Conselho Consultivo",name:"Claudio Boada Pallarés",title:"Conselheiro Sénior",sum:"Conselheiro Sénior da Blackstone em Espanha e Portugal; durante quinze anos Diretor Executivo da Lehman Brothers."},
 {g:"Conselho Consultivo",name:"Carlos López Blanco",title:"Conselheiro Sénior",sum:"Especialista em economia digital; foi Secretário de Estado das Telecomunicações em Espanha e Vice-Presidente Sénior da Telefónica."},
 {g:"Conselho Consultivo",name:"Miguel Frasquilho",title:"Conselheiro",sum:"Diretor Executivo da CI&T para o sul da Europa; foi Presidente da TAP Air Portugal e Diretor Executivo da AICEP."}];
/* notícias: only items with a working link */
var NEWS=[
 ["29 jul 2025","Reckon.ai capta 5,1 M€, com a participação da Touro, para acelerar a expansão dos seus armários inteligentes com IA","Retail Tech Innovation Hub","https://retailtechinnovationhub.com/home/2025/7/29/autonomous-retail-technology-startup-reckonai-bags-51-million-in-funding-round-led-by-iberis-capital"],
 ["3 jun 2025","proGrow capta 2 M€ numa ronda liderada pela Touro Capital Partners","El Referente","https://elreferente.es/?p=185378"],
 ["4 ago 2023","Programa Consolidar encerra a fase de first closing","Banco Português de Fomento","https://www.bpfomento.pt/pt/noticias/programa-consolidar-encerra-fase-de-first-closing-com-uma-subscricao-dos-fundos-de-capital-de-risco-no-valor-de-478-m/"],
 ["1 out 2021","Entrevista a Josep Piqué Camps","Jornal Expresso","https://expresso.pt/economia/2021-10-02-Jose-Pique-ex-ministro-de-Aznar-E-precisa-uma-alianca-iberica-cada-vez-mais-estreita-15fdfddc"]];
var SHEETS=[];
