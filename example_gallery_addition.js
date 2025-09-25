// Example: How to add more images to the gallery
// Add this to the galleryData object in src/pages/PhotoGalleries.jsx

const additionalImages = {
  'Agricultural Advisory': [
    // Add more images to existing category
    {
      id: 13,
      src: '/public/partner15.jpeg',
      title: 'Farm Extension Service',
      description: 'Providing extension services to rural farmers',
      date: '2024-03-30',
      location: 'Benue State',
      category: 'Agricultural Advisory'
    },
    {
      id: 14,
      src: '/public/partner20.jpeg',
      title: 'Crop Monitoring',
      description: 'Monitoring crop growth and health',
      date: '2024-04-01',
      location: 'Kaduna State',
      category: 'Agricultural Advisory'
    }
  ],
  
  'Agro-Tourism': [
    {
      id: 15,
      src: '/public/partner25.jpeg',
      title: 'Eco-Tourism Experience',
      description: 'Sustainable tourism in agricultural settings',
      date: '2024-04-05',
      location: 'Ogun State',
      category: 'Agro-Tourism'
    }
  ],
  
  'Training & Capacity Building': [
    {
      id: 16,
      src: '/public/partner30.jpeg',
      title: 'Youth Training Program',
      description: 'Empowering young people with agricultural skills',
      date: '2024-04-10',
      location: 'Lagos State',
      category: 'Training & Capacity Building'
    },
    {
      id: 17,
      src: '/public/partner35.jpeg',
      title: 'Women Empowerment Workshop',
      description: 'Training women in modern farming techniques',
      date: '2024-04-15',
      location: 'Kano State',
      category: 'Training & Capacity Building'
    }
  ],
  
  'Market Development': [
    {
      id: 18,
      src: '/public/partner40.jpeg',
      title: 'Market Linkage Program',
      description: 'Connecting farmers directly to buyers',
      date: '2024-04-20',
      location: 'Abuja',
      category: 'Market Development'
    }
  ],
  
  'Renewable Energy': [
    {
      id: 19,
      src: '/public/partner45.jpeg',
      title: 'Solar Irrigation Project',
      description: 'Implementing solar-powered irrigation systems',
      date: '2024-04-25',
      location: 'Jigawa State',
      category: 'Renewable Energy'
    }
  ],
  
  // You can also create new categories
  'Research & Development': [
    {
      id: 20,
      src: '/public/partner47.jpeg',
      title: 'Agricultural Research',
      description: 'Conducting field research on crop varieties',
      date: '2024-04-30',
      location: 'Ibadan, Oyo State',
      category: 'Research & Development'
    }
  ]
};

// To add these images:
// 1. Copy the images you want to add
// 2. Paste them into the appropriate category in galleryData
// 3. Make sure each has a unique ID
// 4. Update the categories array if you add new categories
