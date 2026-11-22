var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "Mulish"','500 1em "Mulish"','600 1em "Mulish"','500 1em "Cinzel"'];
var MAIL="support@greenmark.bio";
/* products and programmes, from greenmark.bio (Technology, product pages) and the 2025-11-11 and 2026-08-25 releases;
   NIH RePORTER: R43DE035019, R43DE034324, R44DE027903.
   [product, sub, indication, detail line, status label, text, dim] */
var PIPE=[
 ["CrystLCare™","Biorestorative, Fluoride-Free","Dental sensitivity","Dissolvable strips · at home or chairside","On the market","Particles loaded with calcium and phosphate; saliva enzymes release the ions, which form hydroxyapatite crystals that occlude exposed dentinal tubules and enamel porosities. Sold since January 2024.",0],
 ["CrystLCare™","Regeneration+","Early non-cavitated caries","Rx-only dissolvable strips",'Rx only',"An Rx-only treatment of early non-cavitated caries lesions that regenerates fluorohydroxyapatite mineral within early decay.",0],
 ["LumiCare™ · LumiKids™","Caries Detection Rinse","Early caries detection","Patients ages 6 and up","Detection","Fluorescent sub-micron starch particles target the subsurface of early lesions, which glow under a dental curing lamp; the starch is fully bio-resorbed before the patient leaves.",0],
 ["LumiVision™","AI-enabled intraoral camera","Caries diagnosis","Companion to LumiCare™ rinse","In development","An NIH SBIR-funded camera that pairs targeted nanoparticle contrast with AI-assisted intraoral imaging.",1]];
/* greenmark.bio (Management Team). Text-only masthead. Summaries only restate the site. */
var TEAM=[
 {g:"Management team",name:"Steven Bloembergen, Ph.D.",title:"Founder, Chairman and CEO",sum:"Founded GreenMark in 2016 after EcoSynthetix (TSX: ECO). Inventor on over 25 biomaterials patent families."},
 {g:"Management team",name:"Arash Hakhamian, DDS, FICOI, FIADFE",title:"Chief Dental Officer",sum:"Cosmetic and implant dentist; co-founder and CEO of the teledentistry platform Dentulu."},
 {g:"Management team",name:"Wendy Bloembergen, MD, MS",title:"Vice President Clinical Affairs",sum:"Internist and nephrologist; formerly University of Michigan faculty and NIH-funded investigator."},
 {g:"Management team",name:"Nathan Jones, M.Sc., Ph.D.",title:"Vice President Technology",sum:"Ph.D., University of Michigan, on functionalized polysaccharides. Co-PI on the NIH SBIR awards."}];
/* news: only items with a working link (greenmark.bio News & Events). [date, headline, source, url] */
var NEWS=[
 ["August 2026","GreenMark secures follow-on regenerative medicine grant funding","EIN Presswire","https://www.einpresswire.com/article/936733733/greenmark-biomedical-secures-follow-on-regenerative-medicine-grant-funding"],
 ["November 2025","GreenMark secures its third NIH grant of 2025","EIN Presswire","https://www.einpresswire.com/article/865852185/greenmark-biomedical-secures-third-nih-grant-in-2025"],
 ["October 2025","Dr. Steven Bloembergen receives the Shils Fund “Excellence in Research” Award","Shils Fund","https://shilsfund.org/shils-fund-celebrates-innovation-and-leadership-in-oral-health-at-nyu-college-of-dentistry/"],
 ["October 2025","The next frontier in prevention is regenerating enamel naturally","RDH Magazine","https://www.rdhmag.com/patient-care/in-office-preventive/article/55323017/the-next-frontier-in-prevention-is-regenerating-enamel-naturally"],
 ["August 2025","A nanoparticle, fluorescence-based rinse for caries activity","International Dental Journal","https://www.sciencedirect.com/science/article/pii/S0020653925000437"]];
var SHEETS=[];
