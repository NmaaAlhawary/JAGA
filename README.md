# E-Training-Platform

Design mockups for the JAGA (Jordan Academy for Government Administration) e-training platform, styled with JAGA's brand colours and fonts and structured after HTUx.

## Pages

| Page | Arabic (RTL) | English (LTR) |
|---|---|---|
| Home | `index.html` | `en/index.html` |
| Pathway | `pathway.html` | `en/pathway.html` |
| Courses | `courses.html` | `en/courses.html` |
| Inside a Moodle course | `course.html` | `en/course.html` |

Open `index.html` in a browser; the bar at the bottom switches between pages and the **EN / ع** button switches language.

## Notes

- Shared styles live in `assets/jaga.css`; page-specific styles are in each Arabic page.
- After changing an Arabic page's styles, sync the English pages with `python3 _tools/build_en.py .`
- Course names, numbers and dates are sample content.
