// src/pages/CreatePost.jsx
import React, { useState, useEffect } from 'react'; // Consolidated and correct React imports
import { useNavigate, Link } from 'react-router-dom'; // Consolidated and correct react-router-dom imports
import { createPost } from '../services/localJsonService';
import MainNav from '../components/MainNav';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

function CreatePost() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [authorName, setAuthorName] = useState('Admin User');
  const [categoryName, setCategoryName] = useState('');
  const [featuredImage, setFeaturedImage] = useState(''); // This will now store the Base64 string
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');

  // --- ADMIN REDIRECT useEffect (MUST BE INSIDE THE COMPONENT) ---
  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin') === 'true';
    if (!isAdmin) {
      alert("Access Denied: You must be an admin to create posts.");
      navigate("/blogs", { replace: true });
    }
  }, [navigate]); // navigate is a dependency
  // --- END ADMIN REDIRECT useEffect ---

  // Handler for file input change
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const MAX_IMAGE_SIZE_MB = 5; // 5MB limit
      if (file.size > 1024 * 1024 * MAX_IMAGE_SIZE_MB) {
          alert(`Image size must be less than ${MAX_IMAGE_SIZE_MB}MB for local storage compatibility.`);
          e.target.value = null; // Clear the input
          setFeaturedImage('');
          return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setFeaturedImage(reader.result); // Store Base64 string
      };
      reader.readAsDataURL(file); // Convert file to Base64
    } else {
      setFeaturedImage('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) {
        alert("Title and Content are required!");
        return;
    }
    try {
      const newPostData = {
        title,
        author: { name: authorName || "Admin User" },
        category: categoryName ? { name: categoryName, slug: categoryName.toLowerCase().replace(/[^a-z0-9-]/g, '-') } : undefined,
        featuredImage, // This will be the Base64 string
        excerpt,
        content,
        tags // Will be parsed in localJsonService
      };
      const createdPost = createPost(newPostData);
      alert('Post created successfully! Remember to export your JSON file to save changes permanently.');
      navigate(`/blog/${createdPost.slug}`);
    } catch (err) {
      alert('Failed to create post: ' + err.message);
      console.error("Error creating post:", err);
    }
  };

  return (
    <>
      <MainNav />
      <Hero title="Create New Post" bgImage="/images/hero/blog.jpg" />
      <section className="py-16 px-4 md:px-10 bg-gray-100">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <Link to="/blogs" className="inline-flex items-center gap-2 text-green-700 hover:text-green-800 font-medium mb-8">
            <span className="text-xl">&larr;</span> Back to Blog List
          </Link>
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Create New Blog Post</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Title:</label>
              <input
                type="text"
                id="title"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="authorName" className="block text-gray-700 font-bold mb-2">Author Name:</label>
              <input
                type="text"
                id="authorName"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="categoryName" className="block text-gray-700 font-bold mb-2">Category Name:</label>
              <input
                type="text"
                id="categoryName"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                placeholder="e.g., Technology, Food, Travel"
              />
            </div>
            <div>
              <label htmlFor="featuredImageInput" className="block text-gray-700 font-bold mb-2">Featured Image:</label>
              <input
                type="file"
                id="featuredImageInput"
                accept="image/*"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                onChange={handleImageUpload}
              />
              {featuredImage && (
                <div className="mt-4">
                  <p className="text-gray-600 text-sm mb-2">Image Preview:</p>
                  <img src={featuredImage} alt="Featured Preview" className="max-w-xs h-auto rounded-md shadow-sm" />
                </div>
              )}
            </div>
            <div>
              <label htmlFor="excerpt" className="block text-gray-700 font-bold mb-2">Excerpt (HTML allowed):</label>
              <textarea
                id="excerpt"
                rows="4"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                placeholder="A short summary of your post. HTML tags like <p>, <strong> are allowed."
              ></textarea>
            </div>
            <div>
              <label htmlFor="content" className="block text-gray-700 font-bold mb-2">Full Content (HTML allowed):</label>
              <textarea
                id="content"
                rows="15"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                placeholder="The full body of your blog post. HTML tags like <h2>, <p>, <ul>, <strong> are allowed. You can paste HTML directly."
              ></textarea>
            </div>
            <div>
              <label htmlFor="tags" className="block text-gray-700 font-bold mb-2">Tags (comma-separated):</label>
              <input
                type="text"
                id="tags"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder="e.g., react, javascript, tutorial"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              Publish Post
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default CreatePost;