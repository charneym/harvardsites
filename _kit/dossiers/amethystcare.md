# Amethyst Care — dossier (batch 2026-11h, HOME-ONLY build)

Slug: `amethystcare` · built at `/amethystcare/` · domain amethystcare.ie · parts and hero render in `_kit/home/amethystcare/`

## Domain check
amethystcare.ie (Themefisher Bootstrap template) carries the company name, the diamond-heartbeat logo, the product
("AI Voice Technology Companion"), a team page naming Rebecca McManus (CEO & Founder) and the current team, and a partner
strip (ADAPT, TCD, Enterprise Ireland, EIT Health, Ohio Living, Western Reserve Area Agency on Aging, etc.). ADAPT and
Silicon Republic coverage name the same founder and product. No newer site on another domain found.

## The company
AI voice technology companion that helps care for older people (and people with mobility-related illness) at home and
keeps them independent for longer: daily check-ins, medication reminders, two-way conversation, caregiver alerts, daily
care plans, voice biomarker analysis, long-term monitoring for clinicians. Started 2024 as a research project at ADAPT
(Research Ireland Centre for AI-Driven Digital Content Technology), Trinity College Dublin; Prof. Vinny Wade research lead.
Funding: >€500,000 Enterprise Ireland Commercialisation Fund (Silicon Republic 2024-07-22), plus Trinity Innovation KnEx
(ADAPT 2025-08-14). Sources: amethystcare.ie (home, about, solution, team); siliconrepublic.com; adaptcentre.ie.

HQ: ADAPT Centre, O'Reilly Institute, Trinity College Dublin, Dublin 2, Ireland (spin-out from ADAPT planned Feb 2026).
Lead: Rebecca McManus, CEO & Founder (amethystcare.ie/team.html). No pronouns published: greeting "Dear Rebecca McManus".
Email: none published (site has only a contact form at amethystcare.ie/#contact; contact.html 404s). Fallback: ADAPT
general info@adaptcentre.ie.

## Activity
- 2025-09-11: ADAPT news, EIT Health Innovators Community interview: preparing a €2.5M raise, team of 10 growing to 17 by
  2026, clinical trials about to start in Ohio, US expansion
  (https://www.adaptcentre.ie/news-and-events/rebecca-mcmanus-interviewed-by-eit-health-innovators-community-on-building-adapt-start-up-amethyst-care/).
- 2025-08-14: ADAPT news, podcast appearance; project at clinical-trial stage
  (https://www.adaptcentre.ie/news-and-events/rebecca-mcmanus-discusses-ai-driven-elder-care-innovation-project-amethyst-care-on-podcast/).
- 2024-07-22: Silicon Republic feature (https://www.siliconrepublic.com/start-ups/amethyst-care-ai-voice-assistant-healthcare-rebecca-mcmanus-vinny-wade-adapt).

## Bad-site evidence
Themefisher template ("Designed & Developed by Themefisher" footer): near-empty hero with a tiny grey text block beside a
raw product photo on white, generic icon cards, floating chat bubble, broken contact.html (404)
(screenshot _kit/sourcing/v2-sheets/11h-amethystcare.jpg).

## Build notes
- Hero: crafted render (render.py, numpy) of their own voice device, modelled on amethystcare.ie/images/device.png
  (450x420, too small to use sharp): round speakerphone, perforated grille, nine control icons, green LED ring; unbranded
  as on their site. Real alpha, separate LED layer pulsed in the canvas. Not used on any other concept.
- Logo: their 188x149 raster mark redrawn as a solid SVG (gradient diamond #a6b6f6 to #5d6cee with the heartbeat cut as a
  mask); wordmark set in Figtree 500. Loader draws the heartbeat cut across the solid mark.
- Palette: logo periwinkle (sampled #7282f5/#8b9ef5) -> --acc #4f5fe0, --accL #4553d6 (text on light), --accD #a3b0f8 (on dark);
  ink #eeedf5, deep band #1a1930.
- Story: one scene (device, reply waveform, pill organiser, family phone); the phone message "Your mum is doing fine today"
  is from their own app mock-up (images/iphone-rebecca.png).
- Team: their published headshots (amethystcare.ie/images/team/*), used at or below native size.
- Partners set as a type credit line (CJ/BW) from their partner logo strip.
- Photos inventoried and unused: device.png (rendered instead, too small), iphone-rebecca.png (message quoted in the story),
  news.jpg (stock typewriter), partner logos (set in type).
