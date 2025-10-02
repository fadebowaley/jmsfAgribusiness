// src/services/localJsonService.js
import { v4 as uuidv4 } from 'uuid'; // npm install uuid

const LOCAL_STORAGE_KEY = 'myLocalBlogPosts';

// --- Helper Functions for Data Access ---

export const loadPosts = () => {
  const storedPosts = localStorage.getItem(LOCAL_STORAGE_KEY);
  return storedPosts ? JSON.parse(storedPosts) : [];
};

export const savePosts = (posts) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(posts));
};

// --- CRUD Operations ---

export const getPosts = (limit = null) => {
  let posts = loadPosts();
  // Sort posts by publish date, newest first
  posts.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
  return limit ? posts.slice(0, limit) : posts;
};

export const getPostBySlug = (slug) => {
  const posts = loadPosts();
  return posts.find(post => post.slug === slug);
};

export const createPost = (newPostData) => {
  const posts = loadPosts();
  const now = new Date().toISOString(); // Current ISO timestamp

  const baseSlug = newPostData.title.toLowerCase()
                                    .replace(/[^a-z0-9-]/g, '-') // Replace non-alphanumeric with hyphen
                                    .replace(/--+/g, '-')       // Replace multiple hyphens with single
                                    .replace(/^-+|-+$/g, '');   // Trim hyphens from start/end


  let finalSlug = baseSlug;
  let counter = 1;
  while (posts.some(p => p.slug === finalSlug)) {
    finalSlug = `${baseSlug}-${counter}`;
    counter++;
  }

  const newPost = {
    id: uuidv4(), // Generate a unique ID
    slug: finalSlug,
    publishDate: now,
    ...newPostData,
    author: newPostData.author || { name: "Admin User" },
    category: newPostData.category && newPostData.category.name ? { name: newPostData.category.name, slug: newPostData.category.name.toLowerCase().replace(/[^a-z0-9-]/g, '-') } : undefined,
    tags: newPostData.tags ? newPostData.tags.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0) : []
  };

  posts.push(newPost);
  savePosts(posts);
  return newPost;
};

export const updatePost = (slug, updatedPostData) => {
  let posts = loadPosts();
  const postIndex = posts.findIndex(post => post.slug === slug);

  if (postIndex === -1) {
    return null; // Post not found
  }

  // Preserve ID and original publishDate, but update other fields
  const existingPost = posts[postIndex];

  // Recalculate category slug
  const updatedCategory = updatedPostData.category?.name
    ? { name: updatedPostData.category.name, slug: updatedPostData.category.name.toLowerCase().replace(/[^a-z0-9-]/g, '-') }
    : undefined;

  posts[postIndex] = {
    ...existingPost,
    ...updatedPostData,
    category: updatedCategory, // Update category object
    tags: updatedPostData.tags ? updatedPostData.tags.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0) : existingPost.tags // Handle tags string to array
  };
  savePosts(posts);
  return posts[postIndex];
};

export const deletePost = (slug) => {
  let posts = loadPosts();
  const initialLength = posts.length;
  posts = posts.filter(post => post.slug !== slug);
  savePosts(posts);
  return posts.length < initialLength; // True if a post was deleted
};

// --- Category Functions (simplified to extract from posts) ---
export const getCategories = () => {
    const posts = loadPosts();
    const uniqueCategories = new Map(); // Use Map to store unique categories by slug
    posts.forEach(post => {
        if (post.category && post.category.name && post.category.slug) {
            uniqueCategories.set(post.category.slug, post.category);
        }
    });
    return Array.from(uniqueCategories.values()); // Return array of unique category objects
};

// --- Manual JSON File Management ---

// To be called from a component to download the JSON
export const exportToJsonFile = () => {
    const posts = loadPosts();
    const jsonString = JSON.stringify(posts, null, 2); // Pretty print with 2-space indent
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'posts.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
};

// To be called from a component to import JSON (returns a Promise)
export const importFromJsonFile = (file) => {
    return new Promise((resolve, reject) => {
        if (!file || file.type !== 'application/json') {
            return reject(new Error('Please select a valid JSON file.'));
        }
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const importedPosts = JSON.parse(e.target.result);
                // Basic validation: check if it's an array and has expected structure
                if (Array.isArray(importedPosts) && importedPosts.every(item => typeof item === 'object' && item.id && item.slug)) {
                    savePosts(importedPosts); // Overwrite existing posts
                    resolve(importedPosts);
                } else {
                    reject(new Error('Invalid JSON file format. Expected an array of post objects with "id" and "slug".'));
                }
            } catch (error) {
                reject(new Error('Error parsing JSON file: ' + error.message));
            }
        };
        reader.onerror = () => reject(new Error('Error reading file.'));
        reader.readAsText(file);
    });
};