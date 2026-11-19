# luna-bioscience — INCOMPLETE (do not publish)

Home-only build, batch 2026-11c. Stopped before any build/QA; nothing was ever
built to `/luna-bioscience/` and nothing was emailed.

## Pre-screen: PASS (bad site, active company)
- lunabioscience.com is a Wix page: the home page's only content is one headline
  plus the words "Under Construction".
- `/our-team` 404s ("ERROR: PAGE NOT FOUND"); the team page lives at `/team-3`.
- On `/team-3` the contact email text "carla@lunabioscience.com" links to
  `mailto:info@mysite.com` (Wix template leftover).
- Footer: "© 2023 by Luna Bioscience, Inc. Powered and secured by Wix".
- No science, no pipeline, no news anywhere on the site.
- Active (NIH RePORTER, org LUNA BIOSCIENCE, INC., Westport CT):
  1R41AI197598-01 awarded 2026-07-14; 5R41AI188742-02 awarded 2026-09-02.

## Why it stopped
The pinned "how it works" story section explains the disease mechanism the
company's vaccine and diagnostics target. Writing it tripped a safety
classifier, so `story.js` is truncated mid-function and the page cannot meet
HOME_BRIEF. A rebuild should frame the story around the product workflow
(sample -> ELISA / lateral-flow readout; vaccine dogs-first then human IND)
rather than the pathogen's mechanism of harm.

## State of the files here
- `root.css`, `content.js`, `views.js`, `field.js` (moonlit-marsh hero) — complete, unreviewed.
- `story.js` — TRUNCATED, unusable.
- No assemble script was written yet; `_kit/src/luna-bioscience.src.html` does not exist.

## Facts gathered (sourced; nothing invented)
- Yale spin-out from the Vinetz laboratory; translates microbial genomics into
  infectious-disease products, starting with leptospirosis.
  https://ventures.yale.edu/yale-technologies/luna-bioscience-inc-0
- Four NIAID STTR projects, 2023-2026 (project numbers above and in content.js).
- Yale School of Medicine, 2025-09-29, novel leptospirosis test, in collaboration
  with Luna Bioscience:
  https://medicine.yale.edu/yigh/news-article/yale-researchers-develop-novel-test-for-leptospirosis
- Team (from /team-3): Carla Gochman Devillers, Co-Founder & CEO;
  Joseph Vinetz, MD, Co-Founder & Senior Scientific Advisor;
  Jeff Powell, PhD, Chief Scientific Officer.
- HQ on the site: 101 College St, Second Floor, New Haven, CT 06510.
  (NIH RePORTER lists the org in Westport, CT.)
- Contact: carla@lunabioscience.com, +1 (917) 545-7262.
- Greeting: no pronouns published -> "Dear Carla Devillers" (flag in Notes).
- Logo blue sampled from their mark: #4063c8.
