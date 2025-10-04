// src/pages/SinglePost.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import { getPostBySlug, deletePost, getPosts, getCategories } from '../services/localJsonService';
import { formatDate, calculateReadingTime } from "../utils/blogUtils";

import MainNav from '../components/MainNav';
import Footer from '../components/Footer'; // Footer will contain AdminControls
import Hero from '../components/Hero';

import { CalendarDays, User2, Clock, Pencil, Trash2 } from "lucide-react";

function SinglePost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [recentPosts, setRecentPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false); // Add isAdmin state for conditional rendering

  const location = useLocation(); // To react to URL changes (e.g., after admin login/logout)


  // Fetch single post and sidebar data
  useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      setError(null);
      try {
        const postData = getPostBySlug(slug);
        if (postData) {
          setPost(postData);
          // Fetch data for sidebar
          const allPosts = getPosts(); // Get all posts
          setRecentPosts(allPosts.filter(p => p.slug !== slug).slice(0, 3)); // Filter out current, get 3 recent
          const allCategories = getCategories();
          setCategories(allCategories);
        } else {
          setError("The blog post you're looking for doesn't exist or has been moved.");
        }
      } catch (err) {
        console.error("Error fetching single blog post:", err);
        setError("Failed to load blog post. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (slug) { // Only fetch if slug is available
      fetchData();
    }
    // Check admin status when component mounts or location changes
    // This allows the Admin/Logout state to dynamically update without a full page reload,
    // although `window.location.reload()` is used in AdminControls for simplicity.
    const adminStatus = localStorage.getItem('isAdmin');
    setIsAdmin(adminStatus === 'true');
  }, [slug, location]); // Re-run effect if slug or location changes

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this post? This cannot be undone.")) {
      try {
        deletePost(slug);
        alert("Post deleted successfully! Remember to export your JSON file to save changes permanently.");
        navigate("/blogs"); // Redirect to the CORRECT blog list route
      } catch (err) {
        alert("Failed to delete post: " + err.message);
        console.error("Error deleting post:", err);
      }
    }
  };

  // --- Loading, Error, Not Found states ---
  if (loading) {
    return (
      <>
        <MainNav />
        <section className="py-20 px-4 md:px-10 bg-gray-100 flex justify-center items-center h-screen-minus-nav">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800">Loading blog post...</h1>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  // Combined error/not found state display
  if (error || !post) {
    return (
      <>
        <MainNav />
        <section className="py-20 px-4 md:px-10 bg-gray-100 flex justify-center items-center h-screen-minus-nav">
          <div className="text-center bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Failed to load blog post</h1>
            <p className="text-gray-600 mb-6">{error || "It looks like this post no longer exists or has been moved."}</p>
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
      <Hero
        title={post.title}
        bgImage={post.featuredImage}
        isCompact={true}
      />

      <section className="py-16 px-4 md:px-10 bg-gray-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10"> {/* Two-column layout */}
          {/* Main Article Content - Left Side */}
          <div className="md:col-span-2 bg-white p-8 rounded-lg shadow-md">
            {/* Post Header */}
            <h1 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-4">{post.title}</h1>
            <div className="flex items-center text-sm text-gray-500 gap-6 mt-2 mb-8 border-b pb-4">
              <span className="flex items-center gap-1">
                <User2 size={16} /> {post.author?.name || 'Unknown Author'}
              </span>
              <span className="flex items-center gap-1">
                <CalendarDays size={16} /> {formatDate(post.publishDate)}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={16} /> {calculateReadingTime(post.content)}
              </span>
            </div>

            {/* Admin Edit/Delete Buttons (Conditional Rendering) */}
            {isAdmin && ( // <--- ONLY SHOW THIS BLOCK IF isAdmin IS TRUE
              <div className="flex gap-4 mb-8">
                <Link to={`/blog/edit/${post.slug}`} className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
                  <Pencil size={18} className="mr-2" /> Edit Post
                </Link>
                <button onClick={handleDelete} className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                  <Trash2 size={18} className="mr-2" /> Delete Post
                </button>
              </div>
            )}

            {/* Post Content (HTML String) */}
            <div className="prose prose-green max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-8 pt-4 border-t">
                <span className="font-semibold text-gray-700">Tags:</span>
                {post.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-10 text-center">
              <Link to="/blogs" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md transition-colors duration-300">
                <span className="text-xl">&larr;</span> Back to Blog List
              </Link>
            </div>
          </div>

          {/* Sidebar - Right Side */}
          <aside className="md:col-span-1 space-y-8">
            {/* Categories */}
            <div className="bg-white p-6 shadow rounded-md">
              <h3 className="text-lg font-bold mb-4 text-gray-800">
                Categories
              </h3>
              <ul className="text-gray-700 space-y-3">
                {categories.map((category) => (
                  <li key={category.slug}>
                    <Link
                      to={`/blogs/category/${category.slug}`}
                      className="hover:text-green-700 transition-colors flex justify-between items-center">
                      <span>{category.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts */}
            <div className="bg-white p-6 shadow rounded-md">
              <h3 className="text-lg font-bold mb-4 text-gray-800">
                Recent Posts
              </h3>
              <ul className="space-y-4">
                {recentPosts.map((rPost) => (
                  <li
                    key={rPost.id}
                    className="border-b border-gray-100 pb-3 last:border-b-0">
                    <Link
                      to={`/blog/${rPost.slug}`}
                      className="block hover:text-green-700 transition-colors">
                      <h4 className="font-medium text-sm leading-tight mb-1">
                        {rPost.title}
                      </h4>
                      <p className="text-xs text-gray-500">
                        {formatDate(rPost.publishDate)}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-green-50 p-6 shadow rounded-md border border-green-100">
              <h3 className="text-lg font-bold mb-4 text-gray-800">
                Stay Updated
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                  Get the latest agricultural insights and industry news delivered
                  to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                  />
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </section>
        <Footer />
      </>
    );
    }

    export default SinglePost;
  