# Rhapsogen — dossier (batch 2026-11h, HOME-ONLY build)

Slug: `rhapsogen` · built at `/rhapsogen/` · domain rhapsogen.com · parts and hero render in `_kit/home/rhapsogen/`

## Domain check
rhapsogen.com (Webflow, site id 690bd485772629c41ea6c03c) carries the company name, the RHAPSO/GEN logo (RHAP_logo_fnl.svg)
and the tagline "Precision Biologics for Autoimmune Disease". Catalio Capital's portfolio page
(https://cataliocapital.com/portfolio/rhapsogen) links to https://www.rhapsogen.com/, and the Jan 2026 Business Wire release
says "To learn more, please visit www.rhapsogen.com". No newer site on another domain found.

## The company
Cambridge, MA immunology company, founded 2025 by Prof. Jeffrey Ravetch, MD, PhD (Rockefeller University; Catalio Venture
Partner) and Prof. Eric Sundberg, PhD (Emory University); launched by Catalio Capital Management's venture strategy.
Develops next-generation therapies that rapidly neutralize pathogenic autoantibodies and prevent autoimmune inflammation
and tissue damage while preserving the immune system's ability to fight infection (Business Wire boilerplate). Catalio:
a new biologic drug class that modulates antibody effector function, preserving antibodies' capacity to neutralize viruses
and other pathogens. Site meta: "a best in class precision biologic for autoimmune disease with superior efficacy, safety
and durability". Board: Matthew Hobson, PhD (Principal, Catalio). Science is immunology (autoimmune), not pathogen/toxin work.

HQ: Cambridge, Massachusetts (no street address published).
Lead: Renato Skerlj, Ph.D., Chief Executive Officer (Business Wire, 2026-01-06). Greeting: "Dear Dr. Skerlj".
Email: none published on rhapsogen.com or in the release. Release media contact is Catalio's PR agency
(catalio@rubenstein.com), not a Rhapsogen address.

## Activity
- 2026-01-05/06: Business Wire, "Catalio-Backed Rhapsogen Names Renato Skerlj, Ph.D., Chief Executive Officer"
  (https://www.businesswire.com/news/home/20260105793531/en/Catalio-Backed-Rhapsogen-Names-Renato-Skerlj-Ph.D.-Chief-Executive-Officer).

## Bad-site evidence
Near-empty single screen: dark gradient, the glitchy red/blue outline wordmark and one tagline; no content, no
team, no contact (screenshot _kit/sourcing/v2-sheets/11h-rhapsogen.jpg).

## Build notes
- Hero: crafted render (render.py, numpy, adapted from dembiopharma/render.py) of an intact IgG antibody, molecular surface
  of PDB 1IGY, new viewpoint and palette: Fab arms in the logo blue (#29abe2), the Fc stem in the logo red. Real alpha.
  Not the same image as any other concept (different view, colours, no payloads).
- Palette and type from their live site: navy ground #020d18 easing to teal-navy, logo blue/red; Exo and Lato (both loaded
  on rhapsogen.com). Real logo SVG inline in header, loader and footer.
- Story: schematic of autoantibody attack -> effector function modulated -> protective antibodies still neutralize a virus;
  no mechanism beyond the published description is drawn.
- Contact: no email published, so the CTA links to their LinkedIn (linkedin.com/company/rhapsogen-inc) and shows the city.
