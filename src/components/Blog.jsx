import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getBlogPosts } from "../services/contentful";
import { formatDate } from "../utils/contentfulRenderer";

const BlogCard = ({
  title,
  publishDate,
  excerpt,
  slug,
  featuredImage,
  category,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="overflow-hidden">
        <Link to={`/blog/${slug}`}>
          <img
            src={
              featuredImage
                ? featuredImage.startsWith("//")
                  ? `https:${featuredImage}`
                  : featuredImage
                : "/blog1.jpeg"
            }
            alt={title}
            className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-105"
          />
        </Link>
      </div>
      <div className="p-6">
        <Link to={`/blog/${slug}`}>
          <h3 className="font-bold text-lg mb-3 hover:text-green-600 transition-colors cursor-pointer line-clamp-2">
            {title}
          </h3>
        </Link>

        {category && (
          <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mb-3">
            {category.name}
          </span>
        )}

        <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">
          {excerpt}
        </p>

        <div className="text-sm text-gray-500 mb-4">
          {formatDate(publishDate)}
        </div>

        <div className="pt-4 border-t border-gray-200">
          <Link
            to={`/blog/${slug}`}
            className="text-green-600 hover:text-green-800 text-sm font-medium transition-colors">
            Read more →
          </Link>
        </div>
      </div>
    </div>
  );
};

const BlogSection = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBlogPosts = async () => {
      try {
        const posts = await getBlogPosts(4); // Get 4 posts for homepage
        setBlogPosts(posts);
      } catch (error) {
        console.error("Error loading blog posts:", error);
        // Fallback posts will be returned by the service
      } finally {
        setLoading(false);
      }
    };

    loadBlogPosts();
  }, []);

  if (loading) {
    return (
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
            Our Blogs
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <div className="animate-pulse">
                  <div className="h-48 bg-gray-300"></div>
                  <div className="p-6 space-y-4">
                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                    <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                    <div className="h-20 bg-gray-300 rounded"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
          Our Blogs
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>

        <div className="mt-12 mb-12 text-center">
          <Link
            to="/blogs"
            className="bg-white text-black border border-green-500 hover:bg-green-600 hover:text-white px-6 py-3 rounded-full font-medium transition-colors">
            VIEW ALL
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
