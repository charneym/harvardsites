var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "Barlow"','500 1em "Barlow"','600 1em "Barlow"','500 1em "Barlow Semi Condensed"','600 1em "Barlow Semi Condensed"'];
var MAIL="info@mitovation.com";
var RPT="https://reporter.nih.gov/project-details/";
var DOI="https://doi.org/";
/* the road from the bench to the clinic: mitovation.com (story, technology), the founders' papers and NIH RePORTER.
   [year, title, sub, status, detail, link, label] */
var PIPE=[
 ["2018","Small animal studies","Rat model of global brain ischemia","Published","Untreated animals lost 86% of the neurons in the CA1 hippocampus after reperfusion. With the COX-inhibitory wavelengths, neuronal loss was 11% to 35%, and neurologic function was preserved at control levels with both wavelengths combined.",DOI+"10.1038/s41598-018-21869-x","Sci Rep"],
 ["2019","Stroke","Small animal model of ischemic stroke","Published","Non-invasive treatment with near-infrared light, a mechanisms-based strategy, evoked a sustained reduction in brain injury after stroke.",DOI+"10.1177/0271678x19845149","JCBFM"],
 ["2023","Large animal studies","Adult cardiac arrest with CPR, pig","Published","Two hours of transcranial light from the return of circulation significantly improved neurological deficit scores and reduced brain injury after resuscitation, without substantial tissue heating.",DOI+"10.1186/s13054-023-04745-7","Crit Care"],
 ["2023","Light into the human brain","Soft silicone waveguides","Published","Soft, skin-conforming waveguides spread the light evenly across the head with no hot spots. In human cadaver studies they delivered up to 95% more light than fiberoptic delivery at a depth of 4 cm.",DOI+"10.1002/btm2.10496","BTM"],
 ["Next","LUCID and the LUTICA trial","Infant cardiac arrest","NIH funded","The Light Utilizing COX-Inhibitory Device (LUCID) is being built for clinical use in infants up to one year old, followed by a first clinical trial, LUCID Therapy for Infant Cardiac Arrest.",RPT+"11009481","NIH record"]];
/* what the 2018 study showed (Sci Rep 8:3481, Sanderson, Hüttemann et al.) */
var EVID=[
 ["The spectrum","Scanning near-infrared light from 700 to 1000 nm found two wavelengths, 750 and 950 nm, that reduce the activity of cytochrome c oxidase"],
 ["In the cell","Those wavelengths reduced mitochondrial respiration and superoxide production, and protected neurons after oxygen-glucose deprivation"],
 ["The contrast","810 nm light, which activates the enzyme, gave no benefit: the protection comes from calming mitochondria, not from stimulating them"],
 ["In the brain","Neuronal loss in the hippocampus fell from 86% without treatment to between 11% and 35% with it"]];
/* the team: mitovation.com/team.php. Text-only masthead (CI/CL), one format for every group. */
var TEAM=[
 {g:"Leadership",name:"Bruce Barrett",title:"Chairman & Chief Executive Officer",sum:"Almost 30 years bringing near-infrared light-based medical innovations to market. Former CEO of Somanetics, until its sale to Covidien, and of Ornim Medical."},
 {g:"Leadership",name:"Maik Hüttemann, PhD",title:"Founder & Co-Chief Science Officer",sum:"Professor and Division Director for Research, Center for Molecular Medicine & Genetics, Wayne State University School of Medicine. Mitochondrial bioenergetics."},
 {g:"Leadership",name:"Thomas Sanderson, PhD",title:"Founder & Co-Chief Science Officer",sum:"Associate Professor of Emergency Medicine and Molecular and Integrative Physiology, University of Michigan. Cardiac arrest, resuscitation and mitochondrial dysfunction."},
 {g:"Leadership",name:"Tom Waddell",title:"Chief Operating Officer",sum:"Over 30 years of medical device project leadership; CEO of Waddell Group, with 40+ devices led from concept through launch."},
 {g:"Medical Advisory Board",name:"Robert Neumar, MD, PhD",title:"University of Michigan",sum:"Professor and Chair, Department of Emergency Medicine, Michigan Medicine."},
 {g:"Medical Advisory Board",name:"Brian J. O’Neil, MD",title:"Wayne State University",sum:"Professor and Chair, Department of Emergency Medicine; Specialist-in-Chief, DMC."},
 {g:"Medical Advisory Board",name:"Richard J. Levy, MD",title:"Columbia University",sum:"Professor of Anesthesiology and Pediatrics; Vice Chair for Pediatric Laboratory Research."}];
/* research and news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["September 2026","NIH continues funding for LUCID: development and testing of a therapeutic device for brain injury after infant cardiac arrest, year three",'NIH',RPT+"11009481"],
 ["September 2025","Inhibitory infrared light attenuates mitochondrial hyperactivity and accelerates restoration of mitochondrial homeostasis","Antioxidants",DOI+"10.3390/antiox14091119"],
 ["December 2023","Modulation of mitochondrial function with near‑infrared light reduces brain injury in a translational model of cardiac arrest","Critical Care",DOI+"10.1186/s13054-023-04745-7"],
 ["February 2023","Effective transmission of therapeutic near‑infrared light into the human brain through soft skin‑conforming silicone waveguides","Bioeng Transl Med",DOI+"10.1002/btm2.10496"],
 ["October 2022","Sometimes less is more: inhibitory infrared light during early reperfusion calms hyperactive mitochondria and suppresses reperfusion injury","Biochem Soc Trans",DOI+"10.1042/bst20220446"],
 ["November 2020","Cytochrome c oxidase‑modulatory near‑infrared light penetration into the human brain","IUBMB Life",DOI+"10.1002/iub.2405"],
 ["February 2018","Inhibitory modulation of cytochrome c oxidase activity with specific near‑infrared light wavelengths attenuates brain ischemia/reperfusion injury","Scientific Reports",DOI+"10.1038/s41598-018-21869-x"]];
var SHEETS=[];
