# Cloudflare Pages Deployment Guide

This guide explains how to deploy the Simmons Heating & Air website to **Cloudflare Pages** (not Workers).

## Why Cloudflare Pages?

Since you're already using Cloudflare for your domain registrar, Pages is the natural choice:
- ✅ Integrated with your Cloudflare account
- ✅ Free tier includes 500 deployments/month
- ✅ Automatic deployments from Git
- ✅ Instant SSL/TLS certificates
- ✅ Built-in CDN and caching

## Prerequisites

1. Cloudflare account with your domain
2. GitHub account with this repository pushed
3. Admin access to both accounts

## Step-by-Step Setup

### 1. Push Your Repository to GitHub

If you haven't already, push this repository to GitHub:

```bash
git remote add origin https://github.com/YOUR_USERNAME/simmons-heating.git
git branch -M main
git push -u origin main
```

### 2. Connect Cloudflare Pages to GitHub

1. Log into your **Cloudflare Dashboard**
2. Go to **Pages** (in the left sidebar)
3. Click **Create a project**
4. Select **Connect to Git**
5. Authorize GitHub and select your `simmons-heating` repository
6. Click **Begin setup**

### 3. Configure Build Settings

This is the **critical step** that fixes the deployment error.

**Build settings:**
- **Framework preset**: `Astro`
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Root directory**: (leave blank)

**Environment variables** (optional):
- Add any environment variables needed (none required for basic deployment)

### 4. Important: Remove or Fix wrangler.jsonc

The error occurred because Cloudflare Pages found `wrangler.jsonc` and tried to run `wrangler deploy` instead of the Pages build process.

**Option A: Keep wrangler.toml (recommended)**
The `wrangler.toml` file in this repo is already configured for Pages:
```toml
name = "simmons-heating-air"
pages_build_output_dir = "dist"
```
This tells Cloudflare: "This is a Pages project, not a Workers project."

**Option B: Delete wrangler.jsonc**
If you don't plan to use Workers, you can delete:
```bash
rm wrangler.jsonc
```

### 5. Deploy

Click **Save and Deploy**. Cloudflare will:
1. Clone your repository
2. Run `npm install`
3. Run `npm run build`
4. Upload the `dist` folder to Cloudflare's global network
5. Deploy to your Pages URL

### 6. Configure Custom Domain

After initial deployment:

1. In Cloudflare Pages project settings
2. Go to **Custom domains**
3. Click **Add custom domain**
4. Enter your domain (e.g., `simmonsheatingair.com`)
5. Follow the instructions to update DNS (it's usually automatic if nameservers are already with Cloudflare)

## Troubleshooting

### Error: "It looks like you've run a Workers-specific command"

**Cause**: `wrangler.jsonc` is being detected instead of `wrangler.toml`

**Fix**: 
- Delete `wrangler.jsonc`: `rm wrangler.jsonc`
- Keep `wrangler.toml` with proper Pages configuration
- Redeploy

### Build fails with "npm ERR!"

**Cause**: Node version mismatch or missing dependencies

**Fix**:
1. Set Node version in Cloudflare Pages settings:
   - Go to project **Settings**
   - Set **Node.js version** to `22` (matches package.json requirement)
2. Or delete `.nvmrc` if it conflicts with Cloudflare's Node version

### Site shows 404 errors

**Cause**: Static site not being served correctly

**Fix**:
- Verify `pages_build_output_dir = "dist"` in `wrangler.toml`
- Ensure `npm run build` completes without errors
- Check that `dist/index.html` exists after build

## Continuous Deployment

Once connected to GitHub:
- Every push to `main` branch → automatic build and deploy
- Previous deployments preserved (can rollback)
- Preview deployments for pull requests (optional)

## Environment Variables (If Needed)

To add secrets like API keys:

1. In Cloudflare Pages project **Settings**
2. Go to **Environment variables**
3. Add variables for **Production** and **Preview**

Example (if using email form service):
```
FORMSPREE_ID=your_form_id_here
```

Then reference in Astro:
```astro
const formspreeId = import.meta.env.FORMSPREE_ID;
```

## Performance & Analytics

In Cloudflare Pages dashboard, you can see:
- **Deployments**: History of all builds
- **Analytics**: Page views, traffic patterns
- **Logs**: Build and request logs for debugging

## Next Steps

1. ✅ Connect GitHub repository
2. ✅ Configure build settings (as above)
3. ✅ Deploy
4. ✅ Set custom domain
5. ✅ Monitor first deployment
6. ✅ Test all pages work correctly
7. ✅ Monitor analytics

## Useful Commands (Local Testing)

Before pushing to GitHub, test locally:

```bash
# Build locally
npm run build

# Preview production build locally
npm run preview

# Check that dist folder is created
ls -la dist/
```

## Support

- **Cloudflare Pages Docs**: https://developers.cloudflare.com/pages/
- **Astro + Cloudflare**: https://docs.astro.build/en/guides/deploy/cloudflare/
- **Deployment Troubleshooting**: Check Cloudflare Pages build logs in the dashboard

---

**Status**: Ready for Cloudflare Pages deployment ✅
