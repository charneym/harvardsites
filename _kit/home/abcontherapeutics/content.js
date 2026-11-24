/* Abcon Therapeutics: facts from abcontx.com (Home, About Us, Investors, Leadership, Research & Development,
   Publications & Press Releases), the Cleveland Clinic newsroom (4 Aug 2023; 14 Mar 2025), NIH RePORTER
   (1R41EY033243, 1R41CA275639) and PubMed. Real characters only, never HTML entities (DU).
   Programme rows: [compound, stage, title, sub, detail, dim, tag, link, linklabel] */
var PIPE=[
 ["ATX101","Preclinical · IND-enabling","T-cell lymphoma","Peripheral and cutaneous TCL","The anti-CD6 antibody-drug conjugate. In animal models of TCL it shrinks tumours and inhibits metastasis. The National Cancer Institute’s NExT program is carrying out its manufacturing and the preclinical toxicology, pharmacokinetic and pharmacodynamic work required to take it into human trials.",0,"",PUB_LEUK,"Leukemia · 2023"],
 ["ATX101","Preclinical","T-cell autoimmune disease","Autoimmune uveitis · graft-versus-host disease","ATX101 also selectively eliminates activated, proliferating non-malignant T cells. An anti-CD6 ADC protected mice from inflammation and retinal damage in experimental autoimmune uveitis, and a single dose eliminated pathogenic T cells in a model of graft-versus-host disease.",0,"",PUB_EAU,"J Autoimmun · 2018"],
 ["ATX006","Preclinical","Solid tumours","Triple-negative breast, prostate and non-small cell lung cancer models","The fully humanized anti-CD6 monoclonal antibody, licensed from the University of Michigan in 2023. It directly activates lymphocytes that kill cancer cells and, unlike checkpoint inhibitors, should suppress rather than induce autoimmunity.",0,"",PUB_CII,"Cancer Immunol Immunother · 2024"],
 ["ATX006","Preclinical","Autoimmune disease","Rheumatoid arthritis · multiple sclerosis · uveitis","Treatment with ATX006 has led to outstanding results in multiple mouse models of human autoimmune disease, including rheumatoid arthritis, multiple sclerosis and uveitis.",0,"",PUB_FMED,"Front Med · 2022"]];
var TEAM=[
 {name:"Tony Giordano, Ph.D.",title:"President and CEO · Director",img:"p-giordano.webp"},
 {name:"Feng Lin, Ph.D.",title:"Chief Scientific Officer, Founder",img:"p-lin.webp"},
 {name:"Kyle Chan, Ph.D.",title:"Chairman of the Board",img:"p-chan.webp"},
 {name:"Joe Rich, J.D., M.B.A.",title:"Director · Cleveland Clinic",img:"p-rich.webp"},
 {name:"David Fox, M.D.",title:"Co-founder · Scientific and Clinical Advisory Board · University of Michigan",img:"p-fox.webp"},
 {name:"Brian Hill, M.D.",title:"Clinical and Scientific Advisory Board · Cleveland Clinic",img:"p-hill.webp"},
 {name:"Eric Hsi, M.D.",title:"Advisor · Mayo Clinic",img:"p-hsi.webp"},
 {name:"Paolo Caimi, M.D.",title:"Clinical and Scientific Advisory Board · Cleveland Clinic",img:"p-caimi.webp"}];
/* the key manuscripts listed on abcontx.com, with journal and year from PubMed */
var PUBS=[
 ["Cancer Immunol Immunother · 2024","Activation of cytotoxic lymphocytes through CD6 enhances killing of cancer cells","Gurrea-Rubio M, et al.",PUB_CII],
 ["Leukemia · 2023","CD6-targeted antibody-drug conjugate as a new therapeutic agent for T cell lymphoma","Parameswaran N, et al.",PUB_LEUK],
 ["Front Med · 2022","The dual role of CD6 as a therapeutic target in cancer and autoimmune disease","Gurrea-Rubio M, et al.",PUB_FMED],
 ["JCI Insight · 2021","CD6 is a target for cancer immunotherapy","Ruth JH, et al.","https://insight.jci.org/articles/view/145662"],
 ["Arthritis Rheumatol · 2020","Attenuation of murine collagen‑induced arthritis by targeting CD6","Li Y, et al.","https://doi.org/10.1002/art.41288"],
 ["J Autoimmun · 2018","Targeting CD6 for the treatment of experimental autoimmune uveitis","Zhang L, et al.",PUB_EAU],
 ["PNAS · 2017","CD6 as a potential target for treating multiple sclerosis","Li Y, et al.","https://pubmed.ncbi.nlm.nih.gov/28209777/"]];
var NEWS=[
 ["14 Mar 2025","Cleveland Clinic profiles Dr. Feng Lin’s work: Abcon has secured funding support from the National Cancer Institute for pre-IND studies","Cleveland Clinic","https://newsroom.clevelandclinic.org/2025/03/14/innovation-in-immunology-cleveland-clinic-researcher-advances-next-generation-biologics-through-innovation-and-industry-partnerships"],
 ["4 Aug 2023","New cancer treatment being developed by Abcon Therapeutics for incurable lymphoma will receive support from the NCI’s NExT program","Cleveland Clinic","https://newsroom.clevelandclinic.org/2023/08/04/new-cancer-treatment-being-developed-by-abcon-therapeutics/"]];
var SHEETS=[];
