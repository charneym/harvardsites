# MasterSwitch Bio (MasterSwitch, Inc.) (slug: masterswitchbio) — HOME-ONLY build, batch 2026-11h

- Site: https://masterswitchbio.com/ (read 2026-11-23): one-screen placeholder, a wide-spaced wordmark over a faint grey protein render on flat slate, tagline "Master Transcription Therapy to Rescue End Stage Organs", a CONTACT block (Christina Galbraith, COO, christina@masterswitchbio.com) and an FCOI policy PDF. No technology, program, team or news.
- Domain check: company name and © MasterSwitch, Inc. on the page; domain registered 2025-01-10 (Verisign RDAP); MX smtp.google.com; contact email on the domain. No newer site elsewhere.
- Type: preclinical biotech, HNF4α mRNA-LNP therapy for decompensated cirrhosis / end-stage liver disease. No pathogens, toxins or biodefence.
- HQ: Ambler, Pennsylvania (Around Ambler 2025-06-25; BioPharmGuy; MONTCO Today). NIH RePORTER org city is Wilmington (DE registration). No street address published.
- Lead: Topher Brooke, CEO (Around Ambler / MONTCO Today / PA Biotechnology Center coverage); NIH RePORTER contact PI "Christopher Brooke". No pronouns published → "Dear Topher Brooke".
- Best published email: christina@masterswitchbio.com (Christina Galbraith, COO; the only address on the site). No published address for Brooke found.

## Activity (pre-screen OK)
- NIH RePORTER 1R44DK148355-01 (NIDDK), "Novel Nucleotide HNF4α Transcriptional Modulation for End Stage Liver Disease with Cirrhosis", FY2026, $1,189,285, project 2026-09-07 to 2028-06-30. https://reporter.nih.gov/project-details/1R44DK148355-01
- Penn Center for Innovation "2026 Penn Startups Raising Money" (Jan 2026): MasterSwitch Bio (Series A).
- 2025-06: launch coverage (MONTCO Today, Around Ambler); $250K Hatch BioFund investment after winning the PA Biotechnology Center entrepreneur spotlight pitch competition.

## Facts used
- RePORTER abstract: no FDA-approved medications to halt or reverse progression to hepatic failure; transplant is curative but organ demand far outweighs supply and transplant is not viable/accessible for many; disruption of hepatocyte-specific transcriptional networks drives decompensation; reduced HNF4α consistently associated with worse outcomes; re-expressing HNF4α via nucleotide-LNP improves hepatocyte function and survival in human and animal models; aims: finalize construct, dose and schedule, large-scale manufacturing of nucleotide and LNP, advance to clinical trials.
- Penn list: mRNA company treating ESLD with cirrhosis from MASH / MetALD / ALD; complete reversal of disease and cirrhosis in three models (rat, human hepatocyte, whole explanted human livers).
- AllSci / press: joint spinout of Pitt and Penn; co-founded by Drew Weissman (2023 Nobel), who contributed the modified-mRNA technology; Weissman directs the Penn Institute for RNA Innovation; virtual company with labs at Penn and Pitt; founded 2024 (BioPharmGuy).
- Not used: Ira Fox / Alejandro Soto-Gutierrez as co-founders (one search summary claimed it, could not verify; they are verified co-founders of Pittsburgh ReLiver, a different company).

## Palette / type
Live site :root: --slate #5E7AA2 (hero ground) → accent (#4f6c96 buttons on light, tint #a9bfdf on dark); --ink #101820 (wordmark) → dark grounds; --teal #1C4E63 (contact heading/links) → emphasis and labels on light; white → cool off-white #f3f5f8. Type: Jura (their wordmark/site face) for display, wordmark and loader; Source Sans 3 for body/labels; Greek subsets inlined for α. Logo is a pure type lockup (MasterSwitch / BIO right-aligned / rule), rebuilt in Jura for header, loader and footer.

## Hero
Option (c): crafted render of their real mechanism, the HNF4α homodimer bound to its DNA response element, Gaussian molecular surface from PDB 4IQR (Chandra et al. 2013; chains A–D), protein in brand slate, DNA warm bone, real alpha. surf.py adapted from gilatherapeutics. No other site uses 4IQR (grep).

## Story
One fine-line scene: liver sinusoid beside a hepatocyte (nucleus, DNA, ER, mitochondria). Deliver: LNP travels down the sinusoid, through the endothelial gap into the cell and opens. Translate: the HNF4α mRNA uncoils, ribosomes bind, new HNF4α protein gathers by the nucleus. Restore: HNF4α enters the nucleus and binds DNA in pairs, transcripts rise, the cell outline brightens.

## Gates (2026-11-23)
textclash OK; smoke OK; reveal/anim/clip 1440+390 OK; overlay, masthead, mixed, loader, unstyled, cramped, hoverpad, split, balance, logo OK; buildout-test OK (8 nav clicks); fit-audit OK; loader-contrast OK. polish CUE flag is a false positive (regex hits "rescue" in the H1's SplitText aria-label; no scroll cue exists). hero-audit reports "title never uncovered" on #/, same as on shipped gilatherapeutics in this environment (tool/environment issue).
