var FONTS=['300 1em "Outfit"','400 1em "Outfit"','500 1em "Outfit"','400 1em "Inter"','500 1em "Inter"','600 1em "Inter"'];
var MAIL="evan.scott@snctherapeutics.com";
var RP="https://reporter.nih.gov/project-details/";
/* Programmes. Sources: snctherapeutics.com (home page copy), the NIH award record for 1R41DK142265-01 (Tolerogenic
   Nanotherapy to Delay Type I Diabetes, NIDDK, July 2025) and Burke et al., Nature Nanotechnology 17:319-330 (2022).
   Stage words only where the public record states them. [programme, area, title, stage, detail, dim] */
var PIPE=[
 ["rPS&#8201;/&#8201;T1D","Type 1 diabetes · onset delay","Rapamycin-loaded polymersomes, given subcutaneously","NIH STTR Phase I under way; IND the stated goal","The lead programme. A short-course subcutaneous regimen of rapamycin-loaded polymersomes induces antigen-specific tolerance without global lymphocyte suppression, and delays diabetes onset in non-obese diabetic mice. The Phase I STTR optimises dosing against the standard of care and scales up polymer synthesis and formulation under Good Laboratory Practice.",0],
 ["rPS&#8201;/&#8201;Transplant","Islet transplantation","The same nanotherapy, for graft tolerance","Published pre-clinical work","In fully MHC-mismatched islet transplantation in mice, subcutaneous rapamycin-loaded polymersomes improved maintenance of normoglycaemia and induced tolerance specific to the donor&#8217;s antigens. Published in Nature Nanotechnology in 2022.",0],
 ["SNC platform","Nonviral gene delivery","Synthetic nanocarriers for transfection of diverse cell populations","Platform, in development","Beyond rapamycin, SNC&#8217;s vesicles and micelles are a scalable, versatile and controlled way to carry drugs into, and transfect, the cell populations that set the immune response, with the toxicity and side effects of systemic therapy minimised.",1]];
/* What the published work showed. Burke et al., Nature Nanotechnology 17:319-330 (2022), and the NIH project abstract. */
var EVID=[
 ["Antigen-specific","In a mixed lymphocyte reaction, T cells specific to the donor&#8217;s antigens were suppressed while T cells against other antigens were still activated"],
 ["Not a T-cell drug","The nanotherapy does not act on T cells directly: polymersomes drain to the lymph node, where antigen-presenting cells take them up"],
 ["No global suppression","Tolerance is induced without the systemic immunosuppression, and without the side effects, that free rapamycin brings"],
 ["Redosing tolerated","Repeat dosing was not associated with an adverse immune response, so a short subcutaneous course can be repeated"]];
/* snctherapeutics.com (Meet the Team) and the public record. Summaries state only what the record states. */
var TEAM=[
 {name:"Evan Scott, PhD",title:"Founder",img:"scott.jpg",sum:"Founded SNC Therapeutics on the nanocarrier research of his own laboratory and is the principal investigator on the company&#8217;s NIH STTR award. Senior author of the Nature Nanotechnology paper behind the platform."},
 {name:"Jeffrey Hubbell, PhD",title:"Co-Founder",img:"hubbell.jpg",sum:"A founder of the field of immunoengineering and a member of the National Academy of Sciences, whose work turns materials into ways of tipping immunity between tolerance and aggression."},
 {name:"Jacqueline Burke, PhD",title:"Chief Scientific Officer",img:"burke.jpg",sum:"First author of the Nature Nanotechnology study that showed subcutaneous rapamycin-loaded polymersomes repurpose the drug&#8217;s mechanism to enhance allogeneic islet graft viability."},
 {name:"Sean Allen, PhD",title:"Director of R&amp;D",img:"allen.jpg",sum:"A co-author of the same study, working on the formulation, characterisation and scale-up of the company&#8217;s synthetic nanocarriers."}];
/* News: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["July 2025","NIH STTR Phase I award, <span class=\"nb\">$350,000</span>: Tolerogenic Nanotherapy to Delay Type I Diabetes","NIH RePORTER",RP+"11066586"],
 ["March 2022","Subcutaneous nanotherapy repurposes the immunosuppressive mechanism of rapamycin to enhance allogeneic islet graft viability","Nature Nanotechnology 17, 319&#8211;330","https://doi.org/10.1038/s41565-021-01048-2"],
 ["2022","SNC Therapeutics founded on Northwestern University research, through the Innovation and New Ventures Office","Northwestern INVO","https://www.invo.northwestern.edu/innovation-commercialization/industry-partnership/startups/snc-therapeutics.html"]];
var SHEETS=[];
