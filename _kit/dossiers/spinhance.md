# Spinhance, LLC — factual dossier

Site: https://spinhance.com/ (Squarespace, read 2026-11-21): the logo and a single "Home" link on a blank white page; page title
still "Your Site Title". No content, no email, no team. Screenshot: _kit/sourcing/v2-sheets/11f-spinhance.jpg.
Palette: sampled from the live logo (spinhance_logo_transparent.jpg): "SPIN" #00a0de, "HANCE" charcoal #1b1918 on white.
Site ink #111315, bone #f2f1ee, accent #00a0de. Display font Sora (close to the logo's squared geometric letters).
Header logo: the live logo recoloured for the dark header (HANCE -> bone), spinhance/logo.webp.

## Activity (pre-screen: OK)
- **NIH NIBIB SBIR Phase I, 1R43EB038849-01**: "Quality assurance imaging phantom for clinical pulmonary gas exchange xenon MRI".
  SPINHANCE, LLC, Rydal, PA 19046. 2026-09-15 to 2027-09-14; $306,358. Contact PI Nicholas Drachman ("Senior Research and
  Development Engineer"). https://reporter.nih.gov/project-details/11316661
  Abstract (used for hero, story, technology, programme): phantom for hyperpolarized Xe-129 (recently FDA-approved for lung function);
  no commercially available HPX phantom reproduces the dissolved-phase signal, which hinders multi-site trials; pressurised xenon gas
  phantom with 3D-printed polymer mesh mimicking diffusion, susceptibility and relaxation of xenon in airways and parenchyma;
  ventilation parameters SNR, B0, B1, flip angle, resolution, geometric distortion; polymer compartments (thermoplastic polyurethane,
  PDMS) to mimic gas, membrane and RBC signatures; testing at clinical sites on different manufacturers (Philips, Siemens); IPF,
  pulmonary hypertension, pulmonary drug development.
- **NIH NHLBI SBIR Phase I, 1R43HL178239-01**: "Free-Breathing Dynamic Cardiopulmonary Function Imaging System to use with Xenon MRI".
  2025-02-01 to 2027-01-31; $306,530. Contact PI Kiarash Emami. https://reporter.nih.gov/project-details/11070224
  MRI-compatible piston-based syringe pumps responding to breathing, injecting HPX or oxygen; based on an existing product used for
  HPX in ventilated small-animal studies; pneumotach; synchronisation with MR data, heartbeat, exhaled O2/CO2/xenon; pilot study.
- Not pathogens/toxins/biodefence: MRI imaging devices.

## Publications
- Friedlander Y, ... Emami K (Spinhance LLC, Philadelphia), ... "Effect of inhaled oxygen concentration on 129Xe chemical shift of red
  blood cells in rat lungs", Magn Reson Med 2021, doi:10.1002/mrm.28801 (Europe PMC affiliation search "Spinhance": 1 hit).

## People / contact
- **Kiarash Emami, PhD**: co-founder (ZoomInfo/RocketReach aggregators; MRM 2021 disclosure of an ownership stake, per search
  summary). Contact PI on the NHLBI award. BS mech. eng. KNT University of Technology; MS bioengineering and PhD electrical and
  systems engineering, University of Pennsylvania (Polarean team page, where he is VP Technology and Applications; not used on the
  site). Pronouns not published -> "Dear Dr. Emami".
- **Nicholas Drachman**: Senior R&D Engineer (NIH RePORTER), contact PI on the NIBIB award; Penn Radiology hyperpolarized-MR papers
  (2017). No doctorate listed -> "Dear Nicholas Drachman".
- Email: none published (site placeholder; no @spinhance.com address found on the web). Older Penn address
  kiarash.emami@uphs.upenn.edu appears in 2010/2012 paper affiliations (stale). The site's CTA links the NIH records instead of a mailto.
- HQ: Rydal, Pennsylvania 19046 (NIH RePORTER; MRM 2021 lists Philadelphia, PA). UEI HLPDK4TK2J62.

## Build
- Hero: crafted render of the phantom (option c): clear pressure vessel with a graded 3D-printed gyroid lattice between machined
  end caps and a gas fitting, _kit/assets/spinhance/render_hero.py -> spinhance/hero.webp (no third-party imagery).
- Story: alveolus -> phantom, with a qualitative three-peak xenon spectrum (gas, membrane, RBC; no ppm values), then two sites' traces.
