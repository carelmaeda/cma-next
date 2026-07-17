# Analytics — event dictionary & GA4 setup

GA4 property tag: `G-TGVPXPQKVJ`, loaded in `src/app/layout.tsx`
(inline dataLayer queue runs pre-hydration; `gtag.js` stays `lazyOnload`
for performance — sub-2s bounces may go uncounted, accepted trade-off).

## How instrumentation works

- `src/lib/analytics.ts` — `track(name, params)` helper; calls `window.gtag`.
- `src/app/components/shared/Analytics.tsx` — mounted once in the root
  layout. Delegates clicks on any element with `data-track="event_name"`
  (optional `data-track-location`, `data-track-label` become the
  `location` / `label` params) and reports Core Web Vitals
  (LCP/CLS/INP/FCP/TTFB) as GA4 events via `useReportWebVitals`.
- `src/app/components/shared/ReadTracker.tsx` — last child of a case
  study `<article>`; fires reading-depth events once per page view.

To instrument a new CTA, add `data-track` attributes — no client
component needed. To instrument a new case study, render
`<ReadTracker study="slug" />` before `</article>`.

## Event dictionary

| Event | Fires when | Params |
| --- | --- | --- |
| `case_study_card_click` | Home "Latest work" card clicked | `label` (title), `location: home_work` |
| `case_study_scroll_25` / `_50` / `_75` | Reader passes 25/50/75% of the article | `study` (slug) |
| `case_study_read_complete` | Article bottom reached ("read to the end") | `study` (slug) |
| `contact_click` | Any mailto CTA | `location`: navbar, navbar_menu, home_contact, footer, case_study |
| `resume_open` | Resume PDF link | `location`: navbar, navbar_menu, home_about, footer |
| `social_click` | LinkedIn / GitHub links | `label` (network), `location`: home_about, footer |
| `LCP` `CLS` `INP` `FCP` `TTFB` | Web-vitals field measurements | `value` (ms; CLS ×1000), `metric_rating` (good/needs-improvement/poor) |

Scroll milestones use distinct event *names* (not one event + percent
param) so counts appear in the standard Events report with zero GA4
configuration.

## GA4 console checklist (manual, one-time)

Admin → (property) unless noted. Done items should be checked off here.

- [ ] **Demographics**: Admin → Data collection and modification →
      Data collection → turn on **Google Signals**. Age/gender/interest
      reports appear under Reports → User → User attributes.
      Note: demographic reports apply *thresholding* — low-traffic sites
      show "(not set)"/withheld rows until volume is high enough.
- [ ] **Enhanced measurement**: Admin → Data streams → web stream →
      Enhanced measurement — confirm ON, and specifically
      "Page changes based on browser history events" (this is what
      counts client-side `next/link` navigations as page_views).
- [ ] **Key events** (⚠ do AFTER deploy): Admin → Data display →
      Events → Key events tab → star `case_study_read_complete`,
      `contact_click`, `resume_open` (these are the portfolio's
      conversions). The star toggle only appears once GA4 has received
      an event at least once (~24h after first fire) — so deploy first,
      trigger each event manually on the live site, then star them.
      Do NOT use the blue "Create event" button as a workaround: it
      creates *derived* events cloned from an existing trigger (e.g.
      page_view) and would record the event names on the wrong actions.
      Key-event marking is not retroactive; star them promptly.
- [x] **Custom dimensions** — DONE 2026-07-16 (via browser agent):
      all four event-scoped dimensions (`location`, `label`, `study`,
      `metric_rating`) created and verified in Admin → Custom
      definitions ("1 – 4 of 4"). Note: only `purchase` existed as a
      key event beforehand; the three portfolio key events still
      pending (see above — after deploy).
- [ ] **Internal traffic filter** (optional): Admin → Data streams →
      Configure tag settings → Define internal traffic → add home IP,
      then Admin → Data filters → activate — keeps your own visits and
      `localhost` dev noise out of the numbers.

## Where to look for each question

| Question | GA4 location |
| --- | --- |
| How many users visited | Reports → Life cycle → Acquisition → Traffic acquisition (Users / Sessions) |
| How many opened the case study | Reports → Engagement → Pages and screens → `/case-studies/bonus-bowls` Views |
| How many read to the bottom | Reports → Engagement → Events → `case_study_read_complete` (funnel: `_25` → `_50` → `_75` → complete) |
| UX / engagement | Pages and screens: Average engagement time; Events: web-vitals events; field CWV also in Search Console → Core Web Vitals |
| Demographics | Reports → User → User attributes (after Google Signals is on) |
| Where visitors come from | Acquisition → Traffic acquisition (channel), User attributes → Demographic details (country/city) |

Realtime report (Reports → Realtime) is the fastest way to verify a new
event: open the site, click the CTA, watch the event appear within ~30s.
