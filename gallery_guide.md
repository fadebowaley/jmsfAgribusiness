# 📸 Photo Gallery - How to Add More Images

## 🗂️ **Current Image Categories**

The gallery is organized into these service categories:
1. **Agricultural Advisory** - Farm consultations, crop assessments, soil analysis
2. **Agro-Tourism** - Farm tours, rural tourism experiences  
3. **Training & Capacity Building** - Workshops, youth programs, women empowerment
4. **Market Development** - Market linkages, commodity trading
5. **Renewable Energy** - Solar irrigation, clean energy projects

## 📁 **Where to Add Images**

### **Step 1: Add Images to Public Folder**
Place your images in the `/public` folder. You already have many images available:
- `slides1.jpg`, `slides2.jpg`, `slides3.jpg`, `slides4.jpg`
- `blog1.jpeg`, `blog2.png`, `blog3.jpg`, `blog4.png` 
- `banner.jpg`, `about.jpg`
- `partner1.png` through `partner47.jpeg`
- `agricAdvisory.png`, `agroTourism.png`, `marketDevelopment.png`
- `renewableEnergy.png`, `trainingProvision.png`

### **Step 2: Update Gallery Data**
Edit `src/pages/PhotoGalleries.jsx` and add new entries to the `galleryData` object.

## 🏷️ **Image Labeling Structure**

Each image needs these properties:
```javascript
{
  id: unique_number,           // Unique identifier
  src: '/public/filename.jpg', // Path to image in public folder
  title: 'Image Title',       // Display title
  description: 'Description',  // What the image shows
  date: 'YYYY-MM-DD',         // When it was taken
  location: 'State/Region',   // Where it was taken
  category: 'Category Name'    // Must match existing categories
}
```

## 📝 **Example: Adding New Images**

```javascript
// Add to existing category
'Agricultural Advisory': [
  // ... existing images ...
  {
    id: 13,
    src: '/public/partner15.jpeg',
    title: 'Farm Extension Service',
    description: 'Providing extension services to rural farmers',
    date: '2024-03-30',
    location: 'Benue State',
    category: 'Agricultural Advisory'
  }
],

// Or create new category
'Research & Development': [
  {
    id: 14,
    src: '/public/partner20.jpeg', 
    title: 'Agricultural Research',
    description: 'Conducting field research on crop varieties',
    date: '2024-04-01',
    location: 'Ibadan, Oyo State',
    category: 'Research & Development'
  }
]
```

## 🎯 **Best Practices**

1. **Image Quality**: Use high-quality images (recommended: 800x600px or larger)
2. **File Names**: Use descriptive names (e.g., `farm-consultation-2024.jpg`)
3. **Consistent Sizing**: All images should be similar aspect ratios for best grid display
4. **Unique IDs**: Each image needs a unique `id` number
5. **Descriptive Content**: Write clear, engaging titles and descriptions

## 🔧 **Quick Add Template**

Copy this template and modify for each new image:

```javascript
{
  id: [NEXT_AVAILABLE_NUMBER],
  src: '/public/[YOUR_IMAGE_FILE]',
  title: '[DESCRIPTIVE_TITLE]',
  description: '[WHAT_THE_IMAGE_SHOWS]',
  date: '[YYYY-MM-DD]',
  location: '[STATE/REGION]',
  category: '[EXISTING_CATEGORY_NAME]'
}
```

## 📊 **Current Available Images**

You have these images ready to use:
- **Slides**: slides1.jpg, slides2.jpg, slides3.jpg, slides4.jpg
- **Blog Images**: blog1.jpeg, blog2.png, blog3.jpg, blog4.png
- **Partners**: partner1.png through partner47.jpeg
- **Service Icons**: agricAdvisory.png, agroTourism.png, marketDevelopment.png, renewableEnergy.png, trainingProvision.png
- **General**: banner.jpg, about.jpg, 2021-12-jmsf2.jpg

## 🚀 **Ready to Add Images?**

1. Choose images from your `/public` folder
2. Decide which category they belong to
3. Edit `src/pages/PhotoGalleries.jsx`
4. Add new entries to the `galleryData` object
5. Save and view at `http://localhost:5173/photo-galleries`
