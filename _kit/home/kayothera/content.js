var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','300 1em "Montserrat"','400 1em "Montserrat"','500 1em "Montserrat"','600 1em "Montserrat"'];
var MAIL="info@kayothera.com";
var KS="https://kayothera.com/";
/* the pipeline, from kayothera.com (Science) and the 2025-06-21 and 2025-09-23 releases.
   [programme, area, title, sub, progress 0..4, progress incl. in-progress, detail, dim] */
var PIPE=[
 ["KAYO-1732","Diabetes · cardiometabolic","Type 2 diabetes and cardiovascular disease","Oral ALDH1A3 inhibitor · development candidate, September 2025",2,3,"Inhibits retinoid synthesis in the pancreas, adipose tissue and vasculature. In preclinical models it turned dedifferentiated β cells back into a functional, mature state, restoring glucose control and insulin secretion, with an exceptional safety profile in 28-day toxicology studies.",0],
 ["KAYO-2000","Obesity","A next-generation, oral weight-loss therapy","Rexinoid pathway",0,0,"Targets a genetically validated obesity driver in the rexinoid pathway, which regulates thyroid and mitochondrial function, to raise thyroid function and energy expenditure and drive healthy weight loss.",1],
 ["KAYO-1609","Male contraceptive","A non-hormonal route to male contraception","ALDH1A2 inhibitor · IND-enabling studies completed",3,3,"Blocks ALDH1A2 in the testicular Sertoli cells, and with it the retinoic acid synthesis that is necessary for both spermatogonia differentiation and spermiation.",0]];
/* stats and facts: the 2025-10-14 iScience release, the 2026-02-10 CAB release, the 2023-07-19 funding release */
/* kayothera.com (Team), with roles from the releases. Text-only masthead (CI/CL); summaries only restate the sources. */
var TEAM=[
 {g:"Leadership and board",name:"Thong Q. Le",title:"President and CEO, Board Member",sum:"Senior Managing Director of Accelerator Life Science Partners, which led Kayothera’s Series A."},
 {g:"Leadership and board",name:"Mark Esposito, Ph.D.",title:"Chief Scientific Officer, Co-Founder, Board Member",sum:"The company was founded on discoveries from his postdoctoral research with Professor Yibin Kang at Princeton University."},
 {g:"Leadership and board",name:"Ian Howes",title:"Chief Financial Officer",sum:""},
 {g:"Leadership and board",name:"Bruce Carter, Ph.D.",title:"Chairman, Board Member",sum:"Joined the board in October 2024, adding drug development and operating experience."},
 {g:"Leadership and board",name:"Paul Sekhri",title:"Board Member",sum:"Joined the board in October 2024."},
 {g:"Leadership and board",name:"Merika Koday, Ph.D.",title:"Board Member",sum:""},
 {g:"Leadership and board",name:"Gregory Harriman, MD",title:"Board Observer",sum:""},
 {g:"Scientific Advisory Board",name:"Yibin Kang, Ph.D.",title:"Chair, Scientific Advisory Board, Co-Founder",sum:"Princeton University and the Ludwig Institute for Cancer Research, Princeton Branch; lead contact on the 2025 iScience paper."},
 {g:"Scientific Advisory Board",name:"Kendall Mohler, Ph.D.",title:"Scientific Advisory Board",sum:""},
 {g:"Clinical Advisory Board",name:"Domenico Accili, MD",title:"Clinical Advisory Board",sum:"2017 Banting Medal recipient; the first to describe β cell dedifferentiation as the root cause of β cell dysfunction."},
 {g:"Clinical Advisory Board",name:"John Buse, MD, PhD",title:"Clinical Advisory Board",sum:"Director of the Diabetes Center at the University of North Carolina and a Banting Medal recipient."},
 {g:"Clinical Advisory Board",name:"Francesco Giorgino, MD, PhD",title:"Clinical Advisory Board",sum:"Professor of Endocrinology at the University of Bari Aldo Moro; β cell regeneration and survival."},
 {g:"Clinical Advisory Board",name:"Steven Kahn, MD",title:"Clinical Advisory Board",sum:"Professor of Medicine at the University of Washington and the 2025 Banting Medal recipient."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["February 2026","Kayothera expands its Clinical Advisory Board with leaders in β cell health and type 2 diabetes","Press release",KS+"kayothera-announces-expansion-of-clinical-advisory-board/"],
 ["January 2026","A nuclear target to revive anti-tumor immunity: Ludwig Princeton on retinoic acid and dendritic cell vaccines","Ludwig Institute",KS+"a-nuclear-target-to-revive-anti-tumor-immunity/"],
 ["October 2025","Foundational research in iScience details the first oral antagonists of the retinoid nuclear receptor pathway","Press release",KS+"development-of-retinoid-nuclear-receptor-pathway-antagonists-through-targeting-aldehyde-dehydrogenase-1a3-aldh1a3/"],
 ["September 2025","Kayothera nominates KAYO-1732 as a development candidate for type 2 diabetes and cardiometabolic indications","Press release",KS+"kayothera-inc-nominates-kayo-1732-a-first-in-class-oral-inhibitor-of-the-retinoid-nuclear-receptor-pathway-in-type-2-diabetes-and-cardiometabolic-indications-as-a-development-candidate/"],
 ["June 2025","Kayothera named a winner of the American Diabetes Association’s Innovation Challenge","Press release",KS+"kayothera-named-as-a-winner-of-the-american-diabetes-associations-innovation-challenge-to-transform-type-2-diabetes-care/"],
 ["October 2024","Yibin Kang, PhD, chairs an expanded Scientific Advisory Board","Press release",KS+"kayothera-announces-expansion-of-the-scientific-advisory-board/"]];
var SHEETS=[];
