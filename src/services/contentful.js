// import { createClient } from 'contentful';

// // Contentful client configuration
// const client = createClient({
//   space: import.meta.env.VITE_CONTENTFUL_SPACE_ID || 'placeholder_space_id',
//   accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN || 'placeholder_access_token',
//   environment: import.meta.env.VITE_CONTENTFUL_ENVIRONMENT || 'master',
// });

// // Get all blog posts
// export const getBlogPosts = async (limit = 10) => {
//   try {
//     const response = await client.getEntries({
//       content_type: 'blogPost',
//       limit,
//       order: '-sys.createdAt', // Most recent first
//     });
    
//     return response.items.map(item => ({
//       id: item.sys.id,
//       title: item.fields.title,
//       slug: item.fields.slug,
//       excerpt: item.fields.excerpt,
//       content: item.fields.content,
//       featuredImage: item.fields.featuredImage?.fields?.file?.url,
//       author: item.fields.author?.fields || { name: 'Admin' },
//       publishDate: item.fields.publishDate || item.sys.createdAt,
//       tags: item.fields.tags || [],
//       category: item.fields.category?.fields || null,
//     }));
//   } catch (error) {
//     console.error('Error fetching blog posts:', error);
//     // Return fallback data if Contentful is not configured
//     return getFallbackBlogPosts();
//   }
// };

// // Get a single blog post by slug
// export const getBlogPostBySlug = async (slug) => {
//   try {
//     const response = await client.getEntries({
//       content_type: 'blogPost',
//       'fields.slug': slug,
//       limit: 1,
//     });
    
//     if (response.items.length === 0) {
//       return null;
//     }
    
//     const item = response.items[0];
//     return {
//       id: item.sys.id,
//       title: item.fields.title,
//       slug: item.fields.slug,
//       excerpt: item.fields.excerpt,
//       content: item.fields.content,
//       featuredImage: item.fields.featuredImage?.fields?.file?.url,
//       author: item.fields.author?.fields || { name: 'Admin' },
//       publishDate: item.fields.publishDate || item.sys.createdAt,
//       tags: item.fields.tags || [],
//       category: item.fields.category?.fields || null,
//     };
//   } catch (error) {
//     console.error('Error fetching blog post:', error);
//     return getFallbackBlogPost(slug);
//   }
// };

// // Get blog categories
// export const getBlogCategories = async () => {
//   try {
//     const response = await client.getEntries({
//       content_type: 'blogCategory',
//     });
    
//     return response.items.map(item => ({
//       id: item.sys.id,
//       name: item.fields.name,
//       slug: item.fields.slug,
//       description: item.fields.description,
//     }));
//   } catch (error) {
//     console.error('Error fetching categories:', error);
//     return getFallbackCategories();
//   }
// };

// // Fallback data when Contentful is not configured
// const getFallbackBlogPosts = () => [
//   {
//     id: '1',
//     title: "The Rise of Agritech in Nigeria",
//     slug: "rise-of-agritech-nigeria",
//     excerpt: "Discover how technology is transforming Nigeria's agricultural landscape and empowering farmers with new tools.",
//     content: "Technology is rapidly transforming Nigeria's agricultural sector...",
//     featuredImage: "/blog1.jpeg",
//     author: { name: "Admin", image: null },
//     publishDate: "2025-01-10",
//     tags: ["Agritech", "Technology", "Nigeria"],
//     category: { name: "Technology", slug: "technology" },
//   },
//   {
//     id: '2',
//     title: "Policy Gaps Affecting Local Farmers",
//     slug: "policy-gaps-local-farmers",
//     excerpt: "Explore the critical policy gaps hindering local food production and what can be done to support grassroots farmers.",
//     content: "Local farmers in Nigeria face numerous challenges...",
//     featuredImage: "/blog2.png",
//     author: { name: "Nancy Duffour", image: null },
//     publishDate: "2025-01-05",
//     tags: ["Policy", "Farmers", "Agriculture"],
//     category: { name: "Policy", slug: "policy" },
//   },
//   {
//     id: '3',
//     title: "Investment Guide for Agribusiness",
//     slug: "investment-guide-agribusiness",
//     excerpt: "Learn the top investment strategies and funding options available for entrepreneurs in agribusiness.",
//     content: "Investing in agribusiness requires careful planning...",
//     featuredImage: "/blog3.jpg",
//     author: { name: "Guest Writer", image: null },
//     publishDate: "2024-12-29",
//     tags: ["Investment", "Business", "Funding"],
//     category: { name: "Business", slug: "business" },
//   },
// ];

// const getFallbackBlogPost = (slug) => {
//   const posts = getFallbackBlogPosts();
//   return posts.find(post => post.slug === slug) || null;
// };

// const getFallbackCategories = () => [
//   { id: '1', name: 'Agritech', slug: 'agritech', description: 'Technology in agriculture' },
//   { id: '2', name: 'Policy', slug: 'policy', description: 'Agricultural policies and regulations' },
//   { id: '3', name: 'Investment', slug: 'investment', description: 'Investment opportunities in agriculture' },
//   { id: '4', name: 'Startups', slug: 'startups', description: 'Agricultural startups and innovation' },
// ]; 