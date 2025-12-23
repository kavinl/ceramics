# Ceramics Portfolio Website

A clean, minimal portfolio website designed for showcasing ceramic work with a refined aesthetic inspired by contemporary craft artists.

## Quick Start

1. **Replace placeholder text**: 
   - Update "Your Name" throughout all HTML files
   - Add your actual email in `contact.html`
   - Fill in your bio details in `about.html`

2. **Add your images**:
   - Create an `images` folder in the same directory as your HTML files
   - Add your ceramic photos with these filenames:
     - `piece-1.jpg` through `piece-10.jpg` (grid thumbnails)
     - `piece-1-main.jpg`, `piece-1-angle2.jpg`, etc. (detail pages)
     - `about-photo.jpg` (your studio photo)

3. **Customize piece information**:
   - Edit the titles, materials, and dates in `index.html`
   - Create individual piece pages (piece-2.html through piece-10.html) following the `piece-1.html` template
   - Update descriptions and dimensions for each piece

## File Structure

```
portfolio/
├── index.html          # Homepage with grid of 10 pieces
├── about.html          # About page with bio
├── contact.html        # Contact information
├── piece-1.html        # Individual piece detail page (template)
├── piece-2.html        # (Create 9 more like this)
├── styles.css          # All styling
└── images/            # Your photos
    ├── piece-1.jpg
    ├── piece-1-main.jpg
    ├── piece-1-angle2.jpg
    └── ...
```

## Image Guidelines

For best results with this design:

- **Grid thumbnails**: Square or portrait orientation (4:5 ratio works well)
- **Detail images**: Any orientation, but consistent sizing within each piece
- **Resolution**: At least 1200px on the longest side
- **Background**: Pure white or very light neutral backgrounds make your work pop
- **Format**: JPG is fine for web, keep file sizes under 500KB each

## Customization

### Colors
Edit the CSS variables in `styles.css` (lines 13-19) to change the color scheme:
```css
--white: #FFFFFF;
--off-white: #FAFAFA;
--light-gray: #E8E8E8;
--mid-gray: #999999;
--dark-gray: #333333;
--black: #1A1A1A;
```

### Fonts
The site uses:
- **Cormorant** (serif) for headings - elegant, refined
- **Work Sans** (sans-serif) for body text - clean, readable

To change fonts, update the Google Fonts import in `styles.css` (line 22) and the font-family declarations.

### Layout
- **2-column grid** on desktop (lines 271-276 in styles.css)
- **1-column** on mobile
- To switch to 3 columns: change `grid-template-columns: repeat(2, 1fr)` to `repeat(3, 1fr)`

## Creating Additional Piece Pages

To create piece-2.html through piece-10.html:

1. Copy `piece-1.html`
2. Rename to `piece-2.html`
3. Update:
   - Page title
   - Navigation (Previous/Next links)
   - Image paths
   - Piece title and details
   - Description

## Hosting

This is a static site - no server-side code needed. Host it on:

- **GitHub Pages** (free, easiest)
- **Netlify** (free, drag-and-drop)
- **Vercel** (free)
- Any web host

### GitHub Pages Quick Setup:
1. Create a new repository
2. Upload all files
3. Go to Settings → Pages
4. Select main branch
5. Your site will be at `username.github.io/repository-name`

## Features

- Fully responsive (mobile, tablet, desktop)
- Clean animations and transitions
- Fast loading
- No dependencies (just HTML/CSS)
- Easy to customize
- Professional, gallery-like aesthetic

## Browser Support

Works on all modern browsers:
- Chrome, Firefox, Safari, Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Tips

- Keep your bio concise but personal (3-4 paragraphs max)
- Use high-quality images - they're the star of the show
- Update the copyright year in footers
- Consider adding an Instagram feed link if you're active there
- Less is more - the minimal design lets your work shine

## Questions?

This is a simple HTML/CSS site, so basic web development knowledge helps. If you need to make changes:
- HTML files control content and structure
- styles.css controls all visual styling
- No JavaScript needed for basic functionality
