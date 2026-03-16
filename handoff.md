# Handoff

## Repo shape

This is a small static portfolio site. There is no framework or build system.

- Main HTML shell: `index.html`
- Dynamic page rendering: `dom.js`
- Styling: `style.css`
- Resume source used for content sync: `resume/Javier_Sedano_Resume.pdf`

## Current state

The site was changed from a 3-view JS-swapped layout into a single scrolling page.

- Top nav now uses anchor links to scroll to sections instead of replacing content.
- Sections are rendered in order by `renderSinglePage()` in `dom.js`.
- Navbar social icons were removed.
- LinkedIn, GitHub, and email were moved into the lower intro section.
- Projects were updated to match the current resume entries.
- Memoire now has both a GitHub link and a live-site link.

## Key content changes

### Home section

`renderHomePage()` now returns a wrapper section with:

1. Original intro row:
   - image on the left
   - intro text on the right
2. New lower row:
   - text on the left
   - placeholder image on the right
   - contact icons under the text

Current lower-row text:

- "I'm currently looking for a job starting for fall 2026."
- "Outside of coding, you'll usually find me cooking, diving into a good book, or exploring YouTube rabbit holes."

The old internship line was removed.

### Projects section

Projects in `dom.js` are currently:

- Memoire
- GroupLink
- Shop Platform

Memoire includes:

- GitHub: `https://github.com/Peluhott/memoire`
- Live site: `https://memoireclient.mangosky-85e31bca.eastus2.azurecontainerapps.io`

## Files touched

- `index.html`
- `dom.js`
- `style.css`

Also present in the worktree:

- `resume/Javier_Sedano_Resume.pdf` is modified, but that change was not made by this agent and should be treated as user-owned unless explicitly requested otherwise.

## Known rough edges

- `handoff.md` was previously empty and is now filled.
- The lower home-section image is still a remote placeholder URL:
  - `https://via.placeholder.com/420x280?text=Image+Coming+Soon`
- `GroupLink` is using `images/sedanoDevLogo.png` as a temporary project image because there was no dedicated asset in the repo.
- `style.css` still has some older / duplicated CSS that could be cleaned up:
  - `.main-content` is declared twice
  - `.nav-social` styles still exist even though the navbar icons were removed
- The project card actions are functional but minimal:
  - GitHub is an icon
  - Memoire live link is text
  - layout could be made more consistent
- Metadata in `index.html` still looks stale in places:
  - placeholder OG/Twitter URL
  - image references may not match desired production assets

## Good next tasks

1. Replace the lower home-section placeholder image with the real asset once provided.
2. Clean up dead and duplicate CSS in `style.css`.
3. Improve project card CTA styling so GitHub and Live Site feel consistent.
4. Decide whether the resume download link should be reintroduced somewhere else since it was removed from the top bar when social icons were moved.
5. Audit meta tags in `index.html` and update OG/Twitter values for the real domain/assets.

## Verification done

Only code-level verification was done in the terminal:

- confirmed anchor IDs and nav links line up
- confirmed Memoire live link is in the project data
- confirmed navbar no longer contains social icons

No browser preview or visual QA was run in this environment.
