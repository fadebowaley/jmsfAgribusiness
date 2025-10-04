// src/pages/EditPost.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getPostBySlug, updatePost } from '../services/localJsonService';
import MainNav from '../components/MainNav';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

function EditPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Form states, initialized from post data
  const [title, setTitle] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [categoryName, setCategoryName] = useState('');
  const [featuredImage, setFeaturedImage] = useState(''); // This will now store Base64
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');


  // Inside CreatePost.jsx and EditPost.jsx
useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin') === 'true';
    if (!isAdmin) {
      alert("Access Denied: You must be an admin to create/edit posts.");
      navigate("/blogs", { replace: true });
    }
}, [navigate]); // navigate is a dependency
  // Handler for file input change
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
if (file.size > 1024 * 1024 * 5) { // 5MB limit for demo, adjust as needed
    alert('Image size must be less than 5MB for local storage compatibility.');
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

  useEffect(() => {
    const fetchPost = () => {
      setLoading(true);
      setError(null);
      try {
        const postData = getPostBySlug(slug);
        if (postData) {
          setPost(postData);
          // Initialize form fields with existing post data
          setTitle(postData.title);
          setAuthorName(postData.author?.name || '');
          setCategoryName(postData.category?.name || '');
          setFeaturedImage(postData.featuredImage || ''); // Load existing Base64 or URL
          setExcerpt(postData.excerpt || '');
          setContent(postData.content || '');
          setTags(postData.tags?.join(', ') || '');
        } else {
          setError("Post not found for editing.");
        }
      } catch (err) {
        console.error("Error fetching post for editing:", err);
        setError("Failed to load post for editing.");
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) {
        alert("Title and Content are required!");
        return;
    }
    try {
      const updatedPostData = {
        title,
        author: { name: authorName || "Admin User" },
        category: categoryName ? { name: categoryName, slug: categoryName.toLowerCase().replace(/[^a-z0-9-]/g, '-') } : undefined,
        featuredImage, // This will be the Base64 string or original URL
        excerpt,
        content,
        tags, // Will be parsed in localJsonService
      };
      updatePost(slug, updatedPostData);
      alert('Post updated successfully! Remember to export your JSON file to save changes permanently.');
      navigate(`/blog/${slug}`); // Go back to the single post view
    } catch (err) {
      alert('Failed to update post: ' + err.message);
      console.error("Error updating post:", err);
    }
  };

  if (loading) {
    return (
        <>
            <MainNav />
            <section className="py-20 px-4 md:px-10 bg-gray-100 flex justify-center items-center h-screen-minus-nav">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-800">Loading post for editing...</h1>
                </div>
            </section>
            <Footer />
        </>
    );
  }

  if (error || !post) {
    return (
      <>
        <MainNav />
        <section className="py-20 px-4 md:px-10 bg-gray-100 flex justify-center items-center h-screen-minus-nav">
          <div className="text-center bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{error || "Post Not Found"}</h1>
            <p className="text-gray-600 mb-6">It might have been deleted or moved.</p>
            <Link to="/blogs" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md transition-colors duration-300">
              <span className="text-xl">&larr;</span> Back to Blog List
            </Link>
          </div>
        </section>
        <Footer />
      </>
    );
  }


  return (
    <>
      <MainNav />
      <Hero title={`Edit: ${post.title}`} bgImage={featuredImage} /> {/* Use featuredImage state here */}
      <section className="py-16 px-4 md:px-10 bg-gray-100">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <Link to={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-green-700 hover:text-green-800 font-medium mb-8">
                <span className="text-xl">&larr;</span> Back to Post
            </Link>
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Edit Blog Post</h1>

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
            {/* --- FEATURED IMAGE INPUT (UPDATED FOR FILE UPLOAD) --- */}
            <div>
              <label htmlFor="featuredImageInput" className="block text-gray-700 font-bold mb-2">Featured Image:</label>
              <input
                type="file"
                id="featuredImageInput" // Unique ID for file input
                accept="image/*" // Only accept image files
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                onChange={handleImageUpload}
              />
              {featuredImage && ( // Show a preview if Base64 string is present
                <div className="mt-4">
                  <p className="text-gray-600 text-sm mb-2">Image Preview:</p>
                  <img src={featuredImage} alt="Featured Preview" className="max-w-xs h-auto rounded-md shadow-sm" />
                  <button type="button" onClick={() => setFeaturedImage('')} className="mt-2 text-red-600 hover:underline">Remove Image</button>
                </div>
              )}
            </div>
            {/* --- END FEATURED IMAGE INPUT --- */}
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
              Update Post
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default EditPost;