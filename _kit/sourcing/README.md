# Sourcing pipeline: finding companies that genuinely need a new site
Run from `_kit/sourcing/` with a scratch work dir (keep work dirs OUT of the repo; they contain critiques of real sites).
```bash
W=/tmp/work; mkdir -p $W
python3 fetch_grants.py --since <6 months ago YYYY-MM-DD> --until <today> --out $W   # NIH SBIR/STTR Phase II (new awards only) + NSF Phase II, bio/med
python3 find_domains.py $W/orgs.json $W/candidates.json                              # guess+verify websites, skip registry.csv companies
python3 fetch_prn.py --pages 60 --out $W                                             # PRNewswire funding releases (seed/Series A/grants), US only
node grade.js $W/candidates.json $W/shots                                           # screenshot + badness signals (add PRN domains as {domain,url,org})
python3 rank.py $W/shots                                                             # ranked.json + sheetNN.png contact sheets: LOOK at them
node deep.js dom1,dom2,... $W/deep                                                   # crawl the shortlist (all pages' text + full screenshot)
python3 evidence.py $W/deep $W/orgs.json                                             # quotable evidence, CEO hints, funding row per site
```
Then: choose the worst sites that pass spec §2 (≥3 quoted pieces of evidence, CEO nameable, US, funding disclosed and in the window). Write the ranked
list (with evidence) for the client OUTSIDE the repo. Pick about 20% extra as alternates: some builds get stopped by safety classifiers.
Never add bot-evasion flags to the crawlers; skip sites that block automation.

## Registry
`registry.csv` holds every company already handled (status: emailed / built / blocked / rejected). Every script skips registry matches.
After a batch: add each new slug as `built` with the batch id; when the client confirms they emailed, flip it to `emailed`; add any company
a safety classifier stopped as `blocked`.

## Orchestration (what worked)
The coordinator session sources and picks, then starts 7 cloud sessions (create_session with source_url = this repo, outcome_branch = main),
3 sites each plus 1 alternate. Each prompt is short: "Read `_kit/BATCH_BRIEF.md` and follow it", plus the assignment block (seed data and
evidence). Sessions push each site to main when it passes every gate and report `SITE DONE` via send_message. The coordinator pulls each site,
sends the HTML to the client, and builds the Mailmeteor CSV from the reports (columns Email, Greeting, Company, URL, Notes).

## Usage limit (learned Nov 2026)
The account has a rolling 5-hour usage cap. 14 concurrent build sessions exhaust it in roughly 30–60 minutes, and every session then stops mid-task
(status FAILED, result "You've hit your 5-hour limit · resets <time>"). Nothing is lost: the sessions resume when sent a message after the reset.
Run the most important work first (client fixes before new builds), keep 6–7 sessions at a time, tell sessions to avoid redundant QA re-runs,
and schedule a check just after each reset to nudge stalled sessions.
