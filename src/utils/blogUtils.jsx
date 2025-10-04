// src/utils/blogUtils.js

export const formatDate = (dateString) => {
    if (!dateString) return 'No Date';
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    try {
      return new Date(dateString).toLocaleDateString(undefined, options);
    } catch (e) {
      console.error("Invalid date string for formatDate:", dateString, e);
      return 'Invalid Date';
    }
  };
  
  export const calculateReadingTime = (htmlContent) => {
    if (!htmlContent) return '1 min read';
    // Strip HTML tags for word count
    const textContent = htmlContent.replace(/<[^>]*>/g, '');
    const wordsPerMinute = 200; // Average reading speed
    const words = textContent.split(/\s+/).filter(Boolean).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  };