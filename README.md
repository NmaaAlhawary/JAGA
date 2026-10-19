# JAGA E-Training Platform

Design mockups for the JAGA (Jordan Academy for Government Administration) e-training platform, styled with JAGA's brand colours and fonts and structured after HTUx.

## Pages

| Page | Arabic (RTL) | English (LTR) |
|---|---|---|
| Home | `index.html` | `en/index.html` |
| Pathways list | `pathways.html` | `en/pathways.html` |
| Pathway | `pathway.html` | `en/pathway.html` |
| Courses | `courses.html` | `en/courses.html` |
| Inside a Moodle course | `course.html` | `en/course.html` |

Open `index.html` in a browser; the bar at the bottom switches between pages and the **EN / ع** button switches language.

## Notes

- The two pathways (AI Leadership; AI for Government Development Professions) — descriptions, outcomes, skills/knowledge/attitude, audience and module/block study plans in Arabic and English — live in `assets/pathways.js` and drive the home, pathway, courses and course pages.
- Shared styles live in `assets/jaga.css`; page-specific styles are in each Arabic page.
- After changing an Arabic page's styles, sync the English pages with `python3 _tools/build_en.py .`
- Course names, numbers and dates are sample content.
