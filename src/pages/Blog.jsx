// src/pages/Blog.jsx
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import MainNav from "../components/MainNav";
import Hero from "../components/Hero";
import { motion } from "framer-motion";
import { CalendarDays, User2, Clock } from "lucide-react"; // Removed MessageCircle
import Footer from "../components/Footer"; // Footer will contain AdminControls

// IMPORTS FOR LOCAL JSON SERVICE AND UTILITIES
import { getPosts, getCategories, exportToJsonFile, importFromJsonFile } from "../services/localJsonService";
import { formatDate, calculateReadingTime } from "../utils/blogUtils";

function Blog() {
  // STATE DECLARATIONS (MUST BE AT THE VERY TOP OF THE COMPONENT)
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false); // Add isAdmin state for conditional rendering

  const location = useLocation(); // To react to URL changes (e.g., after admin login/logout)


  // FUNCTION TO REFRESH POSTS (uses localJsonService)
  const refreshPosts = () => {
    setLoading(true); // Indicate that data is being loaded
    try {
      const allPosts = getPosts(); // Fetch posts from local storage
      setPosts(allPosts);

      const allCategories = getCategories(); // Extract categories from posts
      setCategories(allCategories);
      setError(null); // Clear any previous errors on a successful refresh
    } catch (err) {
      console.error("Error loading blog data:", err);
      setError("Failed to load blog posts. Please try again or import data.");
    } finally {
      setLoading(false); // Finished loading (success or failure)
    }
  };

  // useEffect FOR INITIAL DATA LOADING & ADMIN STATUS CHECK
  // This effect runs once when the component mounts and whenever location changes.
  useEffect(() => {
    // Load posts initially
    refreshPosts();
    // Check admin status when component mounts or location changes
    const adminStatus = localStorage.getItem('isAdmin');
    setIsAdmin(adminStatus === 'true');
  }, [location]); // Re-run effect if URL changes (e.g., after login/logout from AdminControls in Footer)


  // HANDLER FOR IMPORTING JSON FILE
  const handleImport = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        await importFromJsonFile(file); // Import posts and save to local storage
        refreshPosts(); // Reload posts from local storage to update UI
        alert("Posts imported successfully!");
      } catch (err) {
        console.error("Error importing posts:", err);
        alert(err.message); // Display error message to the user
      } finally {
        // Clear the file input to allow re-importing the same file if needed
        event.target.value = null;
      }
    }
  };

  // CONDITIONAL RENDERING FOR LOADING STATE
  if (loading) {
    return (
      <>
        <MainNav />
        <Hero title="Blog" bgImage="/images/hero/blog.jpg" />
        <section className="py-16 px-4 md:px-10 bg-gray-100">
          <div className="max-w-7xl mx-auto text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 rounded w-48 mx-auto mb-8"></div>
              <div className="grid md:grid-cols-3 gap-10">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="bg-white shadow rounded-md overflow-hidden">
                    <div className="h-64 bg-gray-300"></div>
                    <div className="p-6 space-y-4">
                      <div className="h-6 bg-gray-300 rounded"></div>
                      <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                      <div className="h-20 bg-gray-300 rounded"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  // MAIN RENDER FOR THE BLOG LIST (AFTER LOADING AND ERROR CHECKS)
  return (
    <>
      <MainNav />
      <Hero title="Blog" bgImage="/images/hero/blog.jpg" />
      <section className="py-16 px-4 md:px-10 bg-gray-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          {/* Main Blog Posts Section */}
          <div className="md:col-span-2 space-y-10">
            {/* Display error message if any */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                {error}
              </div>
            )}

            {/* Admin Buttons for Export/Import/Create (Conditional Rendering) */}
            {isAdmin && ( // <--- Only show these buttons if isAdmin is true
              <div className="bg-white p-6 shadow rounded-md flex justify-center gap-4 flex-wrap">
                <Link to="/blog/create" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Create New Post
                </Link>
                <button onClick={exportToJsonFile} className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200">
                  Export Posts as JSON
                </button>
                <label htmlFor="import-json" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 cursor-pointer">
                  Import Posts from JSON
                </label>
                <input
                  type="file"
                  id="import-json"
                  accept=".json"
                  className="hidden"
                  onChange={handleImport}
                />
              </div>
            )}


            {/* Display "No posts found" if the array is empty */}
            {posts.length === 0 && !loading && ( // Added !loading to prevent showing this while still loading
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold text-gray-600 mb-4">
                  No blog posts found
                </h3>
                <p className="text-gray-500">
                  Check back soon for new content!
                  {!isAdmin && <br />} {/* Add a line break if not admin for better layout */}
                  {isAdmin && <Link to="/blog/create" className="text-green-600 hover:underline">Create your first post</Link>} or import from JSON.
                </p>
              </div>
            )}

            {/* Map and display blog posts */}
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white shadow rounded-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                {post.featuredImage && (
                  <Link to={`/blog/${post.slug}`}>
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </Link>
                )}
                <div className="p-6">
                  <Link to={`/blog/${post.slug}`}>
                    <h2 className="text-2xl font-bold text-green-800 hover:text-green-600 cursor-pointer transition-colors">
                      {post.title}
                    </h2>
                  </Link>

                  <div className="flex items-center text-sm text-gray-500 gap-6 mt-2 mb-4">
                    <span className="flex items-center gap-1">
                      <User2 size={14} /> {post.author.name}
                    </span>
                    <span className="flex items-center gap-1">
                      <CalendarDays size={14} />{" "}
                      {formatDate(post.publishDate)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} /> {calculateReadingTime(post.content)}
                    </span>
                  </div>

                  {post.category && (
                    <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mb-3">
                      {post.category.name}</span>
                  )}

                  <p
                    className="text-gray-700 mb-4 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: post.excerpt }}
                  ></p>

                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-block mt-4 text-green-700 font-medium hover:text-green-800 transition-colors">
                    Read More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sidebar Section */}
          <aside className="space-y-8">
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
                {posts.slice(0, 3).map((post) => (
                  <li
                    key={post.id}
                    className="border-b border-gray-100 pb-3 last:border-b-0">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="block hover:text-green-700 transition-colors">
                      <h4 className="font-medium text-sm leading-tight mb-1">
                        {post.title}
                      </h4>
                      <p className="text-xs text-gray-500">
                        {formatDate(post.publishDate)}
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

    export default Blog;