import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MainNav from "../components/MainNav";
import Hero from "../components/Hero";
import { motion } from "framer-motion";
import { CalendarDays, MessageCircle, User2, Clock } from "lucide-react";
import Footer from "../components/Footer";
import { getBlogPosts, getBlogCategories } from "../services/contentful";
import { formatDate, calculateReadingTime } from "../utils/contentfulRenderer";

function Blog() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadBlogData = async () => {
      try {
        setLoading(true);
        const [blogPosts, blogCategories] = await Promise.all([
          getBlogPosts(10),
          getBlogCategories(),
        ]);

        setPosts(blogPosts);
        setCategories(blogCategories);
      } catch (err) {
        console.error("Error loading blog data:", err);
        setError("Failed to load blog posts");
      } finally {
        setLoading(false);
      }
    };

    loadBlogData();
  }, []);

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

  return (
    <>
      <MainNav />
      <Hero title="Blog" bgImage="/images/hero/blog.jpg" />
      <section className="py-16 px-4 md:px-10 bg-gray-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          {/* Blog Posts */}
          <div className="md:col-span-2 space-y-10">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                {error}
              </div>
            )}

            {posts.length === 0 && !loading ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold text-gray-600 mb-4">
                  No blog posts found
                </h3>
                <p className="text-gray-500">
                  Check back soon for new content!
                </p>
              </div>
            ) : (
              posts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white shadow rounded-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  {post.featuredImage && (
                    <Link to={`/blog/${post.slug}`}>
                      <img
                        src={
                          post.featuredImage.startsWith("//")
                            ? `https:${post.featuredImage}`
                            : post.featuredImage
                        }
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
                        {post.category.name}
                      </span>
                    )}

                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>

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
              ))
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Categories */}
            <div className="bg-white p-6 shadow rounded-md">
              <h3 className="text-lg font-bold mb-4 text-gray-800">
                Categories
              </h3>
              <ul className="text-gray-700 space-y-3">
                {categories.map((category) => (
                  <li key={category.id}>
                    <Link
                      to={`/blog/category/${category.slug}`}
                      className="hover:text-green-700 transition-colors flex justify-between items-center">
                      <span>{category.name}</span>
                      {/* You can add post count here later */}
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
