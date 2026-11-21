var FONTS=['300 1em "Fraunces"','italic 300 1em "Fraunces"','400 1em "Fraunces"','italic 400 1em "Fraunces"','300 1em "Inter"','400 1em "Inter"','500 1em "Inter"','600 1em "Inter"'];
var WEB="https://oncabio.com/";
var MAIL="hello@oncabio.com";
var ADDR="Richmond, Virginia, United States";
var MAP="https://www.google.com/maps/search/?api=1&query=Richmond+Virginia";
/* the NCATS SBIR Phase I award: every technical fact on this page comes from its RePORTER record */
var RP="https://reporter.nih.gov/project-details/11255473";
var DOI="https://doi.org/10.1021/acssynbio.4c00179";
var DISS="https://stacks.stanford.edu/file/druid:jd110qd1669/dissertation_stukenbroeker012716-augmented.pdf";
/* what the award funds, stated as its own aims (RePORTER abstract of 1R43TR005911-01).
   [label, heading, body, link, link label] */
var WORK=[
 ["Aim one","The method","Develop segmented in vitro translation itself: reassigning mRNA codons to different amino acids more than once within a single transcript, so the codon table is defined locally by position rather than globally across the sequence.",RP,"NIH RePORTER"],
 ["Aim two","The libraries","Design mRNA display libraries around that method, including the non-natural substrates that drive cyclization, so that no position in the ring has to be held constant.",RP,"NIH RePORTER"],
 ["Aim three","The benchmark","Run the resulting libraries in mRNA display selections against targets considered undruggable, and benchmark them against typical macrocycle libraries.",RP,"NIH RePORTER"]];
/* macrocyclic peptide drugs that began in mRNA display, named in the award abstract. [compound, indication, stage, note] */
var APPS=[
 ["MK-0616","Cholesterol management","Phase III trials","An orally administered macrocyclic peptide that came out of mRNA display and is now in late-stage trials."],
 ["RYZ101","Cancer radiotherapy","Phase III trials","A radiotherapeutic whose targeting peptide was discovered by mRNA display."],
 ["Zilucoplan","Myasthenia gravis","Approved","A macrocyclic peptide inhibitor of complement C5, now an approved medicine."]];
/* the one person published for the company: contact PI on the award, listed there as CEO */
var TEAM=[
 ["Tyler Stukenbroeker, Ph.D.","Chief Executive Officer","Contact principal investigator on Onca Bio's NCATS SBIR award, where the recorded title is CEO. Ph.D. in chemistry, Stanford University, 2016, on organocatalyzed ring-opening polymerization and the design of materials for topological trapping.",DISS,"Stanford dissertation"]];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["September 12, 2025","NCATS awards Onca Bio an SBIR Phase I grant of $348,848 for “Segmented In Vitro Translation for Expanding Peptide Library Diversity”","NIH RePORTER",RP],
 ["August 16, 2024","Tyler Stukenbroeker publishes “From De Novo to Xeno: Advancing Macromolecule Design beyond Proteins”, a perspective on designing macromolecules with non-natural components","ACS Synthetic Biology",DOI]];
var SHEETS=[];
