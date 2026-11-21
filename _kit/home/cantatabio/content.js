var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "Montserrat"','500 1em "Montserrat"','600 1em "Montserrat"'];
var WEB="https://cantatabio.com/";
var MAIL="info@cantatabio.com";
var TEL="831-713-4465";
var ADDR="100 Enterprise Way, Suite A-101, Scotts Valley, CA 95066";
var MAP="https://www.google.com/maps/search/?api=1&query=100+Enterprise+Way+Scotts+Valley+CA+95066";
var DOV="https://dovetail-genomics.com/";
var ARC="https://arcbio.com/";
var EDEN="https://edenrocsciences.com/";
var LP="https://cantatabio.com/linkprep";
var RP_PG="https://reporter.nih.gov/project-details/11294135";
var PR_SBIR="https://prnewswire.com/news-releases/dovetail-genomics-secures-2m-sbir-grant-to-develop-high-throughput-linkprep-solutions-for-oncology-applications-302296769.html";
var GW_CSO="https://www.genomeweb.com/people-news/dovetail-genomics-lisa-munding/648921";
var TS="https://www.the-scientist.com/emerging-3d-dna-structure-technology-powers-genomic-discovery-73535";
var Q3="https://www.linkedin.com/pulse/summer-science-real-world-impact-worldwide-connections-nk3fc";
var JOBS="https://edenroc.bamboohr.com/careers/";
/* applications: the three core areas of LinkPrep, in Cantata Bio's own words (cantatabio.com, 2026).
   [area, what it covers, label, detail] */
var APPS=[
 ["Genetic variation","SNVs, indels, CNVs and structural variants","Somatic variation","WGS-comparable detection of SNVs, indels and CNVs, with high-sensitivity detection of structural variants, including large and complex genomic rearrangements. The Dovetail FFPE Assay extends this to FFPE specimens, from limited and degraded material."],
 ["3D genomics & epigenetics","Compartments, TADs and chromatin loops","Genome organization","High-resolution maps of chromatin interactions. Integrated with ATAC-seq, ChIP-seq and CUT&RUN data, they help connect regulatory elements to their target genes."],
 ["Genome assembly","Chromosome-scale, haplotype-resolved and polyploid","De novo assembly","Hi-C-like long-range information for chromosome-scale, haplotype-resolved and polyploid genome assemblies, in a workflow that is automation-compatible and suited to high-throughput environments."]];
/* the Dovetail portfolio, as listed on cantatabio.com and dovetail-genomics.com */
var KITS=["LinkPrep™","Dovetail FFPE","Micro-C","Omni-C®","Pan Promoter","HiChIP MNase","Genome assembly services","Dovetail Analysis Portal"];
/* people: the leadership listed on dovetail-genomics.com/about (Dovetail Genomics is a brand of Cantata Bio LLC); no portraits are published */
var TEAM=[
 ["Mathew Easterday, PhD, JD","Chief Executive Officer","Discussed in The Scientist (2025) how combining DNA sequence and structure analysis reveals the genome’s three-dimensional organization."],
 ["Lisa Munding, PhD","Chief Scientific Officer","Promoted from Vice President of Research & Development in 2026; principal investigator on the NHGRI award for an automated Hi-C platform for cancer samples."],
 ["Zack Sanborn, PhD","Senior Director, Computational Biology & Bioinformatics","Principal investigator on the 2026 NHGRI award for pangenome-based inference of a patient’s phased, inherited genome."],
 ["Sierra McWilson","Senior Director of Global Sales and Market Development","Leads sales and the network of distributors and partners that brings the portfolio to global markets."],
 ["Myriam El Khawand, PhD","Head of Customer Success","Leads scientific support for researchers and clinicians using the kits, services and analysis portal."]];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["September 2026","NHGRI awards a $406,703 SBIR grant for pangenome-based inference of a phased, inherited genome from patient-derived sequencing data","NIH RePORTER",RP_PG],
 ["September 2026","Q3 2026 update: a summer of science, real-world impact and worldwide connections","Dovetail Genomics",Q3],
 ["February 2026","Dovetail Genomics promotes Lisa Munding to Chief Scientific Officer","GenomeWeb",GW_CSO],
 ["October 2025","Emerging 3D DNA structure technology powers genomic discovery","The Scientist",TS],
 ["November 6, 2024","Dovetail Genomics secures a $2M NHGRI SBIR grant to develop high-throughput LinkPrep solutions for oncology","PR Newswire",PR_SBIR]];
var SHEETS=[];
