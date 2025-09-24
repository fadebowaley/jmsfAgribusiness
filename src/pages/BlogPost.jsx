import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CalendarDays, User2, Clock, ArrowLeft, Tag, Share2 } from 'lucide-react';
import MainNav from '../components/MainNav';
import Footer from '../components/Footer';
import { getBlogPostBySlug, getBlogPosts } from '../services/contentful';
import { renderRichText, formatDate, calculateReadingTime } from '../utils/contentfulRenderer';

function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPost = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const [blogPost, allPosts] = await Promise.all([
          getBlogPostBySlug(slug),
          getBlogPosts(5)
        ]);
        
        if (!blogPost) {
          setError('Blog post not found');
          return;
        }
        
        setPost(blogPost);
        
        // Get related posts (excluding current post)
        const related = allPosts
          .filter(p => p.slug !== slug)
          .slice(0, 3);
        setRelatedPosts(related);
        
      } catch (err) {
        console.error('Error loading blog post:', err);
        setError('Failed to load blog post');
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      loadPost();
    }
  }, [slug]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  if (loading) {
    return (
      <>
        <MainNav />
        <div className="min-h-screen bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2 mb-8"></div>
              <div className="h-64 bg-gray-300 rounded mb-8"></div>
              <div className="space-y-4">
                <div className="h-4 bg-gray-300 rounded"></div>
                <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                <div className="h-4 bg-gray-300 rounded w-4/6"></div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (error || !post) {
    return (
      <>
        <MainNav />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              {error || 'Post Not Found'}
            </h1>
            <p className="text-gray-600 mb-8">
              The blog post you're looking for doesn't exist or has been moved.
            </p>
            <Link
              to="/blogs"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md transition-colors"
            >
              Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <MainNav />
      
      <article className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b">
          <div className="max-w-4xl mx-auto px-4 py-8">
            <Link
              to="/blogs"
              className="inline-flex items-center text-green-600 hover:text-green-800 mb-6 transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Blog
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {post.category && (
                <span className="inline-block bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full mb-4">
                  {post.category.name}
                </span>
              )}
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center text-gray-600 gap-6 mb-6">
                <span className="flex items-center gap-2">
                  <User2 size={18} />
                  {post.author.name}
                </span>
                <span className="flex items-center gap-2">
                  <CalendarDays size={18} />
                  {formatDate(post.publishDate)}
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={18} />
                  {calculateReadingTime(post.content)}
                </span>
                <button
                  onClick={handleShare}
                  className="flex items-center gap-2 text-green-600 hover:text-green-800 transition-colors"
                >
                  <Share2 size={18} />
                  Share
                </button>
              </div>
              
              {post.excerpt && (
                <p className="text-xl text-gray-600 leading-relaxed">
                  {post.excerpt}
                </p>
              )}
            </motion.div>
          </div>
        </div>

        {/* Featured Image */}
        {post.featuredImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="max-w-6xl mx-auto px-4 py-8"
          >
            <img
              src={post.featuredImage.startsWith('//') ? `https:${post.featuredImage}` : post.featuredImage}
              alt={post.title}
              className="w-full h-96 object-cover rounded-xl shadow-lg"
            />
          </motion.div>
        )}

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="max-w-4xl mx-auto px-4 py-8"
        >
          <div className="bg-white rounded-xl shadow-sm p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              {renderRichText(post.content)}
            </div>
            
            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center gap-3 flex-wrap">
                  <Tag size={18} className="text-gray-500" />
                  <span className="text-gray-600 font-medium">Tags:</span>
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 hover:bg-green-100 text-gray-700 hover:text-green-800 px-3 py-1 rounded-full text-sm transition-colors cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="max-w-6xl mx-auto px-4 py-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  {relatedPost.featuredImage && (
                    <img
                      src={relatedPost.featuredImage.startsWith('//') ? `https:${relatedPost.featuredImage}` : relatedPost.featuredImage}
                      alt={relatedPost.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-6">
                    <h3 className="font-bold text-lg text-gray-800 mb-2 hover:text-green-600 transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {relatedPost.excerpt}
                    </p>
                    <p className="text-xs text-gray-500">
                      {formatDate(relatedPost.publishDate)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.section>
        )}
      </article>
      
      <Footer />
    </>
  );
}

export default BlogPost; 