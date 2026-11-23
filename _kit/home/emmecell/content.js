var FONTS=['400 1em "Montserrat"','500 1em "Montserrat"','600 1em "Montserrat"','400 1em "Lato"','700 1em "Lato"'];
var MAIL="mailto:info@emmecell.com";
/* Programmes, from emmecell.com (Technology, Pipeline and Clinical Trials pages) and the EMERALD announcement
   (Optometry Times, 2026-11-18). [name, area, title, detail, stage] */
var PROG=[
 ["EO2002","Corneal edema","Magnetic human corneal endothelial cells","An investigational allogeneic therapy: cultured corneal endothelial cells from donor tissue, magnetically labelled and given as a single intracameral injection, for corneal edema secondary to corneal endothelial dysfunction, including Fuchs endothelial corneal dystrophy and pseudophakic bullous keratopathy.","Phase 2 · EMERALD"],
 ["Retina","Retinal disease","Magnetic Cell Delivery beyond the cornea","Beyond the cornea, Emmecell is also studying its Magnetic Cell Delivery platform in retinal disease.","Research"]];
/* EMERALD, as described in the 2026-11-18 announcement */
var TRIAL=[
 ["Design","Randomised, double-masked, placebo-controlled, multicentre US study"],
 ["Arms","A single injection of EO2002 at 150,000 or 500,000 cells, or placebo"],
 ["Primary end point","Eyes gaining 15 or more letters of best-corrected visual acuity at week 26"],
 ["Follow-up","Visual acuity, central corneal thickness and safety, through week 52"]];
/* Team, from emmecell.com/team (one-sentence summaries from their own bios) */
var LEAD=[
 ["Ramin Valian","Chief Executive Officer","A leader in global biopharmaceutical development in eye care, previously in senior leadership roles at Allergan and AbbVie."],
 ["Noelia J. Kunzevitzky, PhD","Chief Development Officer","More than 20 years in ophthalmology; leads pre-clinical development, cell manufacturing, regulatory strategy and clinical development."],
 ["Jill Tierney","VP of Finance","Over 15 years in corporate finance for biotechnology and pharma, previously VP of Finance at AsclepiX Therapeutics."],
 ["Roger A. Goldberg, MD, MBA","Co-founder and Chief Medical Advisor","A vitreoretinal surgeon with expertise in clinical trial design, trained at the Bascom Palmer Eye Institute and Tufts University."]];
var BOARD=[
 ["Jeffrey L. Goldberg, MD, PhD","Co-founder and Chair","Professor and Chair of Ophthalmology and Director of the Byers Eye Institute at Stanford University."],
 ["James V. Mazzo","Board of Directors","Executive Chair of Neurotech, with more than 40 years in ophthalmic medical devices, including CEO of Allergan’s North American and European eye care businesses."],
 ["James W. Donaghy, MBA","Board of Directors","Over thirty years in private equity investing; President of Holding Capital Group’s principal investment entities."]];
var MAB=["Sumit (Sam) Garg, MD","Winston Chamberlain, MD, PhD","Jennifer Rose-Nussbaumer, MD","Preeya Gupta, MD","David Hardten, MD","Julie Schallhorn, MD","Vance Thompson, MD","Dean Eliott, MD","Jeffrey Heier, MD","Allen Ho, MD","Eleonora Lad, MD, PhD","Charles Wykoff, MD, PhD"];
/* News, from emmecell.com/news-and-events (each links to the release) */
var NEWS=[
 ["November 18, 2026","Emmecell announces first patient dosed in the EMERALD study of magnetic cell therapy for corneal endothelial disease","businesswire.com","https://www.businesswire.com/news/home/20261118271215/en"],
 ["July 7, 2026","Emmecell announces RMAT designation for EO2002 for corneal endothelial disease","emmecell.com","https://www.emmecell.com/news-and-events"],
 ["June 16, 2026","Emmecell announces closing of strategic financing","businesswire.com","https://www.businesswire.com/news/home/20260616975605/en/Emmecell-Announces-Closing-of-Strategic-Financing"],
 ["January 16, 2026","Emmecell appoints Ramin Valian as Chief Executive Officer","businesswire.com","https://www.businesswire.com/news/home/20260116413099/en/Emmecell-Appoints-Ramin-Valian-as-Chief-Executive-Officer-to-Advance-Magnetic-Cell-Delivery-Platform"]];
/* Selected publications, from emmecell.com/technology (each links to its DOI) */
var PUBS=[
 ["IOVS · 2019","Magnetic human corneal endothelial cell transplant: delivery, retention, and short-term efficacy","https://doi.org/10.1167/iovs.18-26001"],
 ["IOVS · 2018","A cell culture approach to optimized human corneal endothelial cell function","https://doi.org/10.1167/iovs.17-23637"],
 ["Nanomedicine · 2015","Magnetic field-guided cell delivery with nanoparticle-loaded human corneal endothelial cells","https://doi.org/10.1016/j.nano.2014.12.002"]];
var SHEETS=[];
