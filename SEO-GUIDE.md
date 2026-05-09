# SEO Configuration Guide for Google Search

This guide explains everything you need to do to make your portfolio appear in Google search results for the keywords:

## Target Keywords

| Primary Keywords | Brand Keywords | Portfolio Keywords | Website Keywords |
|-----------------|----------------|-------------------|------------------|
| Lobar Jabborova | dazzling | lobarsdiary | Lobars page |
| Lobar photographer | medelame | lobars portfolio | lobars web portfolio |
| Lobar media | labelume | jabborovas portfolio | lobars web page |
| Lobar's Diary | 01l24 | lobar jabborova portfolio | lobars website |
| loabrsdiary.uz | sun | | |
| | princess quenn | | |

---

## 📋 What Has Been Done (Code Changes)

The following files have been created/updated in your project:

### 1. `index.html` - SEO Meta Tags
- Primary meta tags (title, description, keywords)
- Google Site Verification meta tag
- Open Graph tags for social media sharing
- Twitter Card tags
- Schema.org structured data for Person and PhotographyBusiness
- All target keywords are included in meta tags

### 2. `public/sitemap.xml` - Sitemap
- Lists all pages for search engines to discover
- Includes priority and change frequency for each page

### 3. `public/robots.txt` - Crawler Instructions
- Tells search engines which pages to crawl
- Points to your sitemap location
- Allows Google verification file

### 4. `public/google88802942aba4eed0.html` - Google Verification File
- Domain verification file from Google Search Console

### 5. `vercel.json` - Headers Configuration
- Proper cache control for SEO files
- Optimized image caching

---

## 🚀 Steps to Configure in Google

### Step 1: Deploy Your Website

Before Google can index your site, it must be live on the internet.

**If using Vercel:**
```bash
npm run build
vercel deploy --prod
```

**Your domain:** `https://loabrsdiary.uz`

---

### Step 2: Google Search Console Setup

#### 2.1 Add Your Site to Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Sign in with your Google account
3. Click **"Add Property"**
4. Enter your domain: `loabrsdiary.uz` (choose Domain type, not URL prefix)
5. Choose **"DNS record"** verification method (recommended)

#### 2.2 Verify Domain Ownership

**DNS Record Method:**
1. In Search Console, you'll get a DNS record like: `google-site-verification=abc123...`
2. Go to your domain registrar (where you bought `loabrsdiary.uz`)
3. Add a new TXT record:
   - **Type:** TXT
   - **Name:** @ (or leave blank)
   - **Value:** `google-site-verification=abc123...` (copy from GSC)
4. Wait 24-48 hours for DNS propagation
5. Click **"Verify"** in Search Console

**Alternative - HTML File Upload Method:**
1. Upload `google88802942aba4eed0.html` to your domain root
2. After deployment, verify it's accessible at: `https://loabrsdiary.uz/google88802942aba4eed0.html`
3. Click **"Verify"** in Search Console

**Note:** The Google site verification meta tag is already added to `index.html`:
```html
<meta name="google-site-verification" content="LaXKjCSzhywkvxpzhN0CHttFtRfw_YHqE-qcTWGeT2s" />
```

---

### Step 3: Submit Your Sitemap

1. In Google Search Console, select your property (`loabrsdiary.uz`)
2. In the left sidebar, click **"Sitemaps"**
3. Enter: `sitemap.xml`
4. Click **"Submit"**
5. You should see: `Success` status

---

### Step 4: Request Indexing for Key Pages

1. In Search Console, use the **URL Inspection Tool** (top search bar)
2. Enter: `https://loabrsdiary.uz`
3. Click **"Request Indexing"**
4. Repeat for important pages:
   - `https://loabrsdiary.uz/about`
   - `https://loabrsdiary.uz/works`
   - `https://loabrsdiary.uz/contact`
   - `https://loabrsdiary.uz/portfolio`

---

### Step 5: Google Business Profile (For Local SEO)

This is CRUCIAL for appearing when people search "Lobar photographer" or "Lobar media":

1. Go to [Google Business Profile](https://www.google.com/business/)
2. Click **"Manage Now"**
3. Create a business profile:
   - **Business Name:** Lobar Media (or Lobar Jabborova Photography)
   - **Category:** Photographer, Media Company, or Artist
   - **Address:** Your location (or mark as service area business)
   - **Phone:** Your contact number
   - **Website:** `https://loabrsdiary.uz`
4. Add:
   - Business description with keywords
   - High-quality photos of your work
   - Services you offer
   - Business hours
5. Verify your business (by mail, phone, or email)

---

### Step 6: How Each Keyword is Optimized

| Keyword | Where It's Optimized |
|---------|---------------------|
| **Lobar Jabborova** | Primary name in title tag, H1, Schema.org Person, meta description |
| **Lobar photographer** | In meta keywords, Schema alternateName, Business name |
| **Lobar media** | In company name, Schema.org Organization, meta keywords |
| **Lobar's Diary** | In title tag, Schema alternateName, site name |
| **lobarsdiary** | In Schema alternateName, meta keywords |
| **lobars portfolio** | In meta keywords |
| **jabborovas portfolio** | In Schema alternateName, meta keywords |
| **lobar jabborova portfolio** | In meta keywords, description |
| **Lobars page** | In Schema alternateName, meta keywords |
| **lobars web portfolio** | In Schema alternateName, meta keywords |
| **lobars web page** | In Schema alternateName, meta keywords |
| **lobars website** | In Schema alternateName, meta keywords |
| **loabrsdiary.uz** | In meta keywords, domain reference |
| **dazzling** | In Schema.org Brand, keywords meta tag |
| **medelame** | In Schema.org Brand, keywords meta tag |
| **labelume** | In Schema.org Brand, keywords meta tag |
| **01l24** | In Schema.org Brand, keywords meta tag |
| **sun** | In Schema.org Brand, keywords meta tag |
| **princess quenn** | In Schema alternateName, keywords meta tag, Brand |

---

### Step 7: Build Backlinks (Important for Ranking)

Google ranks sites higher when other sites link to them:

1. **Social Media Profiles:**
   - Add `https://loabrsdiary.uz` to Instagram, Twitter, LinkedIn bios
   - Use consistent name: "Lobar Jabborova" or "Lobar Media"

2. **Portfolio Platforms:**
   - Create profiles on Behance, Dribbble, ArtStation
   - Link back to `https://loabrsdiary.uz`

3. **Guest Posts/Features:**
   - Get featured in photography blogs
   - Write guest posts about your work

4. **Uzbekistan-Specific:**
   - Register on Uzbek business directories
   - Get listed on local photography forums

---

### Step 8: Monitor Your Progress

In Google Search Console, check:

1. **Performance Report:**
   - See which queries show your site
   - Check click-through rates
   - Monitor impressions over time

2. **Coverage Report:**
   - Ensure all pages are indexed
   - Fix any errors

3. **Enhancements:**
   - Check for mobile usability issues
   - Review structured data errors

---

## ⏱️ Timeline Expectations

| Action | Expected Time to See Results |
|--------|------------------------------|
| Initial indexing | 3-7 days |
| Ranking for "Lobar Jabborova" | 1-2 weeks |
| Ranking for "loabrsdiary.uz" | 1-2 weeks |
| Ranking for competitive terms | 1-3 months |
| Google Business Profile ranking | 2-4 weeks after verification |

---

## 📱 Additional Tips

### Image SEO
- Name image files with keywords: `lobar-jabborova-photography.jpg`
- Add alt text to all images
- Use WebP format for faster loading

### Content Strategy
- Add a blog section with articles about photography
- Write about your projects using brand names (dazzling, medelame, etc.)
- Create pages for each portfolio section
- Update your portfolio regularly

### Social Signals
- Share your work on social media frequently
- Engage with your audience
- Use consistent branding across platforms

---

## ✅ Quick Checklist

- [x] Deploy website to `loabrsdiary.uz`
- [x] Google site verification meta tag added
- [x] Google verification HTML file in public folder
- [ ] Add site to Google Search Console (`loabrsdiary.uz`)
- [ ] Verify domain ownership via DNS or HTML file
- [ ] Submit `sitemap.xml`
- [ ] Request indexing for main pages
- [ ] Create Google Business Profile with website `loabrsdiary.uz`
- [ ] Add site to Bing Webmaster Tools
- [ ] Set up social media profiles with links to `loabrsdiary.uz`
- [ ] Monitor Search Console weekly

---

## 🆘 Troubleshooting

### Site Not Appearing in Search?
1. Check if indexed: Search `site:loabrsdiary.uz` in Google
2. Check Search Console Coverage report
3. Ensure robots.txt isn't blocking
4. Request indexing again

### Keywords Not Ranking?
1. Add more content using those keywords naturally
2. Build more backlinks
3. Create dedicated pages for each brand
4. Be patient - SEO takes time

---

## 📞 Need Help?

For technical SEO issues:
- Google Search Console Help: https://support.google.com/webmasters
- Schema.org Validator: https://validator.schema.org/