# 📸 Photo Gallery JSON Management Guide

## 🎯 **Overview**
The Photo Gallery page now has a comprehensive JSON structure that allows you to manage all gallery content, including placeholders for easy image addition.

## 📁 **JSON Structure Location**
All photo gallery data is stored in: `src/data/images.json` under the `photoGallery` section.

## 🏗️ **Complete JSON Structure**

### **Page Settings**
```json
"photoGallery": {
  "pageSettings": {
    "heroTitle": "Photo Galleries",
    "heroSubtitle": "Capturing Our Impact Through Visual Stories",
    "heroDescription": "Explore our comprehensive photo galleries...",
    "heroImage": "/public/banner.jpg"
  }
}
```

### **Categories**
```json
"categories": [
  "Agricultural Advisory",
  "Agro-Tourism", 
  "Training & Capacity Building",
  "Market Development",
  "Renewable Energy",
  "Research & Development"
]
```

### **Gallery Images Structure**
```json
"images": {
  "Agricultural Advisory": [
    {
      "id": 1,
      "src": "/public/slides1.jpg",
      "title": "Farm Consultation Session",
      "description": "Expert advisory session with local farmers",
      "date": "2024-01-15",
      "location": "Kaduna State",
      "category": "Agricultural Advisory",
      "featured": true
    }
  ]
}
```

### **Placeholder Images**
```json
"placeholderImages": {
  "Agricultural Advisory": [
    {
      "id": "placeholder-1",
      "src": "/public/placeholder-agricultural.jpg",
      "title": "Add New Agricultural Advisory Image",
      "description": "Click to add a new image for Agricultural Advisory services",
      "date": "2024-01-01",
      "location": "Add Location",
      "category": "Agricultural Advisory",
      "featured": false,
      "isPlaceholder": true
    }
  ]
}
```

## 🔧 **How to Add New Images**

### **Step 1: Add Image to Public Folder**
1. Place your image in `/public` folder
2. Use descriptive filename (e.g., `farm-consultation-2024.jpg`)

### **Step 2: Update JSON**
Add new image to appropriate category in `images` object:

```json
"Agricultural Advisory": [
  // ... existing images ...
  {
    "id": 15,
    "src": "/public/your-new-image.jpg",
    "title": "Your Image Title",
    "description": "What the image shows",
    "date": "2024-04-01",
    "location": "State/Region",
    "category": "Agricultural Advisory",
    "featured": false
  }
]
```

## 🎨 **Image Properties Explained**

### **Required Fields**
- `id`: Unique number (start from 15)
- `src`: Path to image in `/public` folder
- `title`: Display title
- `description`: What the image shows
- `date`: When taken (YYYY-MM-DD format)
- `location`: Where taken (State/Region)
- `category`: Must match existing categories

### **Optional Fields**
- `featured`: Boolean - highlights important images
- `isPlaceholder`: Boolean - marks placeholder images

## 📝 **Quick Examples**

### **Example 1: Add New Agricultural Advisory Image**
```json
{
  "id": 15,
  "src": "/public/farm-extension-2024.jpg",
  "title": "Farm Extension Service",
  "description": "Providing extension services to rural farmers",
  "date": "2024-04-01",
  "location": "Benue State",
  "category": "Agricultural Advisory",
  "featured": true
}
```

### **Example 2: Add New Category**
1. Add category name to `categories` array
2. Create new section in `images` object
3. Add images to new category

```json
"categories": [
  "Agricultural Advisory",
  "Agro-Tourism",
  "New Category Name"  // Add here
],
"images": {
  "New Category Name": [  // Add here
    {
      "id": 16,
      "src": "/public/new-category-image.jpg",
      "title": "New Category Image",
      "description": "Description of new category image",
      "date": "2024-04-01",
      "location": "Location",
      "category": "New Category Name",
      "featured": false
    }
  ]
}
```

### **Example 3: Update Page Settings**
```json
"pageSettings": {
  "heroTitle": "Your Custom Title",
  "heroSubtitle": "Your Custom Subtitle",
  "heroDescription": "Your custom description text",
  "heroImage": "/public/your-hero-image.jpg"
}
```

## 🎯 **Placeholder System**

### **What are Placeholders?**
- Visual indicators showing where new images can be added
- Clickable areas that show "Add Image" prompts
- Organized by category for easy management

### **How to Use Placeholders**
1. **Enable Placeholders**: Click "Show Placeholders" button on gallery page
2. **See Available Slots**: Placeholder images show where you can add new content
3. **Click to Add**: Clicking placeholders shows what category they belong to
4. **Add Real Images**: Replace placeholder entries with real image data

### **Placeholder Structure**
```json
"placeholderImages": {
  "Category Name": [
    {
      "id": "placeholder-X",
      "src": "/public/placeholder-category.jpg",
      "title": "Add New Category Image",
      "description": "Click to add a new image for Category services",
      "date": "2024-01-01",
      "location": "Add Location",
      "category": "Category Name",
      "featured": false,
      "isPlaceholder": true
    }
  ]
}
```

## 🚀 **Best Practices**

### **Image Management**
- **Use High Quality**: 800x600px minimum
- **Descriptive Names**: `farm-consultation-2024.jpg`
- **Consistent Dating**: YYYY-MM-DD format
- **Unique IDs**: Start from 15 for new images

### **Content Guidelines**
- **Clear Titles**: Descriptive, engaging titles
- **Detailed Descriptions**: What the image shows
- **Accurate Locations**: Specific states/regions
- **Relevant Categories**: Match existing category names

### **Featured Images**
- Mark important images with `"featured": true`
- Featured images get special highlighting
- Use sparingly for maximum impact

## 🔄 **How It Works**

1. **JSON File**: All gallery data in `src/data/images.json`
2. **Component**: PhotoGalleries.jsx reads from JSON
3. **Placeholders**: Optional placeholder system for easy management
4. **Real-time Updates**: Changes appear on page refresh

## 📱 **Testing Your Changes**

1. **Save JSON file**
2. **Refresh gallery page**: http://localhost:5173/photo-galleries
3. **Toggle placeholders**: Click "Show Placeholders" button
4. **Test categories**: Filter by different categories
5. **Verify images**: Check all images load correctly

## 🆘 **Troubleshooting**

### **Images Not Showing?**
- Check file paths start with `/public/`
- Ensure images exist in `/public` folder
- Verify JSON syntax is correct

### **Placeholders Not Working?**
- Make sure `isPlaceholder: true` is set
- Check placeholder images exist
- Verify category names match

### **Categories Not Filtering?**
- Ensure category names match exactly
- Check JSON structure is correct
- Verify all required fields are present

## 🎉 **Ready to Manage Gallery?**

1. **Edit `src/data/images.json`**
2. **Add your images to `/public` folder**
3. **Update the JSON with your image data**
4. **Save and refresh the gallery page**
5. **Use placeholders to see where you can add more images**

---

*This system makes it super easy to manage your photo gallery without touching any code. Just update the JSON file and your changes appear instantly!*
