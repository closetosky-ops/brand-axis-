# Brand Axis /admin setup

The site includes Decap CMS at `/admin/`. It edits `data/work.json` and `data/site.json`, commits those changes to GitHub, and Netlify then redeploys the site.

## One-time GitHub login setup

1. In GitHub, create an OAuth App for Brand Axis.
2. Homepage URL: `https://brandaxisnew.netlify.app` (later update to the custom domain).
3. Authorization callback URL: `https://api.netlify.com/auth/done`.
4. Copy the GitHub Client ID and Client Secret.
5. In Netlify open the Brand Axis project. Go to Project configuration / Access & security / OAuth / Authentication providers.
6. Install the GitHub provider and paste the Client ID + Client Secret.
7. Visit `https://brandaxisnew.netlify.app/admin/` and sign in with the GitHub account that has push access to `closetosky-ops/brand-axis-`.

## What the admin controls now

- Work portfolio cards: title, type, Campaign/Build/Create categories, summary, details, image, link, status, featured flag.
- Starting prices: Campaign / Build / Create.
- Campaign and founder email addresses.
- Footer tagline.

Images uploaded in the Work editor are stored in `assets/images/work`.

## Important

Publishing from the admin creates a GitHub commit and therefore a Netlify deploy. Batch your edits before pressing Publish when possible.
