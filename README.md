# Brand Axis — v17 polished homepage

This package includes the full multipage Brand Axis website plus the updated homepage.

## v17 homepage changes
- Replaced the placeholder hero model with Anastasia's approved Brand Axis hero portrait.
- Preserved the existing soft blur/fade treatment so the portrait blends into Axis Blue.
- Removed the old one-page About / Services / Work / Contact placeholder sections from `index.html`.
- Home navigation now links to Home, About, Services, and the new Contact page.
- Added a functional Netlify inquiry form and removed dead one-page Contact links across the site.
- Work is intentionally omitted from navigation until a real portfolio page is built.
- Added a polished brand-positioning section and closing CTA instead of one-page placeholders.
- Added a clean footer.
- Home is now marked active in the navigation.
- Existing About and service pages remain unchanged.

## Deploy
Upload everything inside this folder to the root of the GitHub repository. Netlify should redeploy automatically.

# Brand Axis — polished hero rebuild

Fresh website code based on the approved Brand Axis hero, updated with:
- approved circular BA monogram logo
- approved palette:
  - Axis Blue #0F1B2D
  - Gold #C6A24A
  - Ivory #F8F5EF
  - Mist #DFE8F3
  - Gray #6F7480
- logo moved to the far-left and linked to Home
- hero portrait softened/blended into the blue background
- CREATIVE updated to CREATIVE CONCEPT
- PLAN MY CONTENT header CTA
- responsive mobile menu

Netlify:
- Branch: main
- Build command: blank
- Publish directory: .


## v4 adjustments
- Full circular approved logo is padded so it does not clip.
- Navigation group is aligned to the right, before the primary CTA.
- Lower hero CTA changed to `START MY CONTENT PLAN →`.


## v5
- Replaced cropped logo asset with the approved clean full-circle logo.
- Increased header/logo box to keep the full circle visible.


## v6 hero content
- Added `BRAND POSITIONING · CONTENT STRATEGY · CREATIVE PRODUCTION` above the headline.
- Restored the stronger positioning paragraph.
- Added `MONTHLY PLANNING · FOCUSED PRODUCTION · INSTAGRAM-READY CONTENT`.


## v7 logo fix
- Replaced the broken-arc/cropped logo with the approved full-circle BA + BRAND AXIS mark.
- Removed the screenshot background to transparency.
- Added generous transparent padding around the complete circle.


## v8
- Increased desktop navigation text from 13px to 15px.
- Slightly increased nav spacing for a more polished header.


## v9 — Services page
- Added `services.html` matching the supplied Services reference.
- Home page navigation now opens the Services page.
- Hero `START MY CONTENT PLAN` button also opens Services.
- Approved circular logo, Brand Axis palette, navigation size, and header CTA are preserved.


## v10 — Brand Analysis detail page
- Added `brand-analysis.html` based on the supplied Brand Analysis reference.
- The Brand Analysis `LEARN MORE` link on `services.html` now opens this page.
- Services remains the active gold-underlined navigation item.
- Includes hero, Who it’s for, What’s getting in the way, What you receive, and the four-step How it works timeline.


## v11 — Content Direction detail page
- Added `content-direction.html` matching the supplied Content Direction reference.
- Content Direction `LEARN MORE` on Services now opens this page.
- Services remains the active gold-underlined navigation item.
- Includes Who it’s for, What you receive, How it helps, and the dark CTA strip.


## v13 — Creative Production detail page
- Added `creative-production.html` based on the supplied Creative Production reference.
- Creative Production `LEARN MORE` on Services now opens this page.
- Services remains the active gold-underlined navigation item.
- Includes Who it’s for, What you receive, How it helps, five-image content strip, and the dark inquiry CTA.


## v14 — About page
- Added `about.html` based on the supplied About reference.
- All About navigation links now open `about.html`.
- About is gold-underlined while active.
- Includes founder portrait/story/signature and Our Values cards.


V18 homepage update: lowered founder portrait slightly in hero crop; replaced monthly-content language with campaign-focused positioning; updated homepage CTA/proof/capability strip and header CTA.


## v19 update
- Added campaign@brand-axis.com and anastasia@brand-axis.com across the site.
- Added direct-contact blocks to Contact.
- Added branded contact details to the homepage footer and compact internal-page footers.
- Netlify form remains active; configure form email notifications in Netlify to campaign@brand-axis.com.

## v22 fix
- Restored the complete assets folder (CSS, JS, and images) after the v21 packaging error.
- Added a root route rewrite so `/` serves `index.html`.


## v23 form fix
The Contact form now posts to Netlify via JavaScript and redirects to `/thank-you.html` using a normal GET request after a successful submission. This prevents blank POST responses on the thank-you page.
