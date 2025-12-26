# Ceramic Portfolio - Image Management Instructions

## Overview

The ceramic portfolio now uses a **folder-based image organization system**. Instead of renaming each image to a specific format, you can now upload images with any filename into the appropriate folder and simply update a configuration file.

## Image Organization Structure

```
images/
├── piece-1/
│   ├── img1.jpeg
│   ├── img2.jpeg
│   ├── img3.jpeg
│   └── img4.jpeg
├── piece-2/
│   ├── img1.jpeg
│   ├── img2.jpeg
│   └── ...
└── piece-3/
    └── ...
```

## How to Add Images to Existing Pieces

### Step 1: Upload Images to the Piece Folder

1. Navigate to the piece's folder: `images/piece-X/` (where X is the piece number)
2. Upload your images with **any filename** you want (e.g., `my-photo.jpg`, `angle-view.jpeg`, `detail.png`)

### Step 2: Update the Configuration File

1. Open `pieces-config.js`
2. Find the piece you're updating (e.g., `'piece-1'`)
3. Add the new image filename to the `images` array:

```javascript
'piece-1': {
    // ... other settings ...
    images: [
        'img1.jpeg',
        'img2.jpeg',
        'img3.jpeg',
        'img4.jpeg',
        'my-new-photo.jpeg'  // ← Add your new image here
    ],
    altTexts: [
        'Description for img1',
        'Description for img2',
        'Description for img3',
        'Description for img4',
        'Description for my new photo'  // ← Add alt text for accessibility
    ],
    // ... rest of config ...
}
```

### Step 3: Test

1. Open the piece page in your browser (e.g., `piece-1.html`)
2. Verify the new image appears
3. Check that it displays correctly on both the piece detail page and gallery

That's it! No need to rename files or update multiple HTML files.

## How to Add a New Piece

### Step 1: Create the Folder

```bash
mkdir images/piece-5
```

### Step 2: Upload Images

Upload all images for the new piece to `images/piece-5/` with any filenames.

### Step 3: Update Configuration

Open `pieces-config.js` and add a new entry:

```javascript
'piece-5': {
    id: 'piece-5',
    title: 'Your Piece Title 2025',
    shortTitle: 'Your Piece Title',
    date: '2025-03-15',
    dateDisplay: 'March 15, 2025',
    material: 'Brown stoneware',
    glaze: 'Your glaze name',
    location: 'Atlanta',
    images: [
        'your-image-1.jpg',
        'your-image-2.jpg'
    ],
    altTexts: [
        'Alt text for image 1',
        'Alt text for image 2'
    ],
    seo: {
        metaDescription: 'Your SEO description here',
        keywords: 'ceramic, pottery, keywords',
        ogTitle: 'Your Piece - Handmade Ceramic Pottery',
        ogDescription: 'Description for social media'
    },
    schema: {
        artMedium: 'Brown stoneware with your glaze',
        blogDescription: 'A detailed description of your piece'
    },
    detailsHtml: `
        <h2>About This Piece</h2>
        <p>Your detailed description here...</p>

        <h2>Another Section</h2>
        <p>More details...</p>
    `
}
```

### Step 4: Add to Gallery Config

In the same file, add gallery configuration:

```javascript
const galleryConfig = {
    // ... existing pieces ...
    'piece-5': {
        displayTitle: 'Your Piece Title 2025',
        subtitle: 'Brown stoneware, 2025'
    }
};
```

### Step 5: Update Piece Order

Add the new piece to the order array:

```javascript
const pieceOrder = ['piece-1', 'piece-2', 'piece-3', 'piece-4', 'piece-5'];
```

### Step 6: Create the HTML Page

Copy `piece-4.html` to `piece-5.html` and update the piece ID:

```javascript
const pieceId = 'piece-5';  // Change this line only
```

### Step 7: Test

Open `piece-5.html` and `index.html` to verify everything works.

## Benefits of This System

- **No More Renaming**: Upload images with any filename
- **Easy Updates**: Just edit one configuration file instead of multiple HTML files
- **Consistent**: All piece pages use the same template
- **Organized**: Each piece has its own folder
- **Flexible**: Add or remove images easily by editing the config

## File Reference

- `pieces-config.js` - Main configuration file for all pieces
- `piece-1.html`, `piece-2.html`, etc. - Individual piece pages
- `index.html` - Gallery page
- `images/piece-X/` - Image folders for each piece

## Need Help?

If you run into issues:
1. Check browser console for JavaScript errors
2. Verify image paths in `pieces-config.js` match actual filenames
3. Ensure images are uploaded to the correct folder
4. Clear browser cache if changes don't appear
