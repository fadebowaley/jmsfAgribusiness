import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  X, 
  Eye, 
  Calendar, 
  MapPin, 
  Users,
  Award,
  ChevronLeft,
  ChevronRight,
  Grid3X3,
  List,
  Download,
  Plus,
  Edit
} from 'lucide-react';
import MainNav from '../components/MainNav';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import imagesData from '../data/images.json';

function PhotoGalleries() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [currentPage, setCurrentPage] = useState(1);
  const [showPlaceholders, setShowPlaceholders] = useState(false);
  const imagesPerPage = 12;

  // Get gallery data from JSON
  const pageSettings = imagesData.photoGallery.pageSettings;
  const categories = imagesData.photoGallery.categories;
  const galleryData = imagesData.photoGallery.images;
  const placeholderData = imagesData.photoGallery.placeholderImages;

  // Combine regular images with placeholders if enabled
  const getAllImages = () => {
    let allImages = Object.values(galleryData).flat();
    if (showPlaceholders) {
      allImages = [...allImages, ...Object.values(placeholderData).flat()];
    }
    return allImages;
  };

  // Filter images based on category and search term
  const filteredImages = getAllImages().filter(image => {
    const matchesCategory = selectedCategory === 'All' || image.category === selectedCategory;
    const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         image.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         image.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Pagination
  const totalPages = Math.ceil(filteredImages.length / imagesPerPage);
  const startIndex = (currentPage - 1) * imagesPerPage;
  const currentImages = filteredImages.slice(startIndex, startIndex + imagesPerPage);

  const openModal = (image) => {
    if (image.isPlaceholder) {
      // Handle placeholder click - could open an upload modal or redirect to admin
      alert(`This is a placeholder. In a real application, this would open an image upload form for ${image.category} category.`);
      return;
    }
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    setSelectedImage(filteredImages[prevIndex]);
  };

  // Animation variants
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <>
      <MainNav />
      
      {/* Hero Section */}
      <section className="relative">
        <Hero title={pageSettings.heroTitle} bgImage={pageSettings.heroImage} />
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-gradient-to-b from-green-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-16 h-1 bg-green-600 rounded-full"></div>
              <span className="text-green-600 font-semibold text-lg uppercase tracking-wider">
                Our Projects
              </span>
              <div className="w-16 h-1 bg-green-600 rounded-full"></div>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-[Poppins] max-w-4xl mx-auto leading-tight">
              {pageSettings.heroSubtitle}
            </h2>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {pageSettings.heroDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search photos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory('All')}
                className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${
                  selectedCategory === 'All'
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-700'
                }`}>
                All Categories
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-green-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-700'
                  }`}>
                  {category}
                </button>
              ))}
            </div>

            {/* View Mode Toggle and Placeholder Toggle */}
            <div className="flex gap-2">
              <button
                onClick={() => setShowPlaceholders(!showPlaceholders)}
                className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${
                  showPlaceholders
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-blue-100'
                }`}>
                <Plus className="w-4 h-4 mr-2 inline" />
                {showPlaceholders ? 'Hide' : 'Show'} Placeholders
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-3 rounded-xl transition-all duration-300 ${
                  viewMode === 'grid'
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-green-100'
                }`}>
                <Grid3X3 className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-3 rounded-xl transition-all duration-300 ${
                  viewMode === 'list'
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-green-100'
                }`}>
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <motion.section
        variants={container}
        initial="hidden"
        animate="show"
        className="py-16 bg-gradient-to-br from-gray-50 to-green-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {currentImages.length > 0 ? (
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'grid-cols-1'
            }`}>
              {currentImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  variants={fadeInUp}
                  className={`group cursor-pointer ${
                    viewMode === 'list' ? 'flex gap-6' : ''
                  } ${image.isPlaceholder ? 'opacity-60' : ''}`}
                  onClick={() => openModal(image)}>
                  
                  {viewMode === 'grid' ? (
                    // Grid View
                    <div className={`relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                      image.isPlaceholder ? 'border-2 border-dashed border-gray-300' : ''
                    }`}>
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                          <h3 className="text-lg font-bold mb-2 font-[Poppins]">{image.title}</h3>
                          <p className="text-sm text-gray-200 mb-2">{image.description}</p>
                          {!image.isPlaceholder && (
                            <div className="flex items-center gap-4 text-xs">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {image.date}
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {image.location}
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="absolute top-4 right-4">
                          {image.isPlaceholder ? (
                            <Plus className="w-6 h-6 text-white" />
                          ) : (
                            <Eye className="w-6 h-6 text-white" />
                          )}
                        </div>
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          image.isPlaceholder 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-green-600 text-white'
                        }`}>
                          {image.isPlaceholder ? 'Add Image' : image.category}
                        </span>
                      </div>
                      {image.isPlaceholder && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                          <div className="text-center text-white">
                            <Plus className="w-12 h-12 mx-auto mb-2" />
                            <p className="text-sm font-semibold">Click to Add Image</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    // List View
                    <div className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 flex items-center gap-6 ${
                      image.isPlaceholder ? 'border-2 border-dashed border-gray-300' : ''
                    }`}>
                      <div className="relative overflow-hidden rounded-xl w-32 h-32 flex-shrink-0">
                        <img
                          src={image.src}
                          alt={image.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {image.isPlaceholder ? (
                            <Plus className="w-6 h-6 text-white" />
                          ) : (
                            <Eye className="w-6 h-6 text-white" />
                          )}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-xl font-bold text-gray-800 font-[Poppins]">{image.title}</h3>
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            image.isPlaceholder 
                              ? 'bg-blue-100 text-blue-700' 
                              : 'bg-green-100 text-green-700'
                          }`}>
                            {image.isPlaceholder ? 'Add Image' : image.category}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-4">{image.description}</p>
                        {!image.isPlaceholder && (
                          <div className="flex items-center gap-6 text-sm text-gray-500">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              {image.date}
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              {image.location}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 font-[Poppins]">No Photos Found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-12">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${
                    currentPage === i + 1
                      ? 'bg-green-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-green-100 hover:text-green-700 border border-gray-200'
                  }`}>
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </motion.section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && !selectedImage.isPlaceholder && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={closeModal}>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}>
              
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors">
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors">
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image */}
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[70vh] object-cover"
              />

              {/* Image Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-800 font-[Poppins]">{selectedImage.title}</h3>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {selectedImage.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{selectedImage.description}</p>
                <div className="flex items-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {selectedImage.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {selectedImage.location}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}

export default PhotoGalleries;
