import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; // Ensure Link is imported
import './assets/css/all.min.css'; // Your existing global CSS
import NotFound from './pages/NotFound'; // Assuming you have a NotFound component
import Home from './pages/Home';
import About from './pages/About';
import Leadership  from './pages/Leadership';
import Patners from './pages/Patners';
import Contact from './pages/Contact';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import WhatWeOffer from './pages/What-we-Offer';
import BookConsulation from './pages/Book-Consultation';
import ScrollToTop from './components/ScrollToTop';
import TeamGrid from './components/TeamGrid';
import Quote from './pages/Get-Quote';
import TeamProfile from './components/TeamProfile';
import JobsDone from './pages/Jobs-Done';
import PhotoGalleries from './pages/PhotoGalleries';
import Admincontrol from './components/AdminControls'

// --- NEW IMPORTS FOR LOCAL JSON BLOG ---
import BlogList from './pages/Blog'; // Your main blog listing page (renamed from Blog)
import SinglePost from './pages/SinglePost'; // Component for individual posts
import CreatePost from './pages/CreatePost';  // Component for creating posts
import EditPost from './pages/EditPost';      // Component for editing posts
// --- END NEW IMPORTS ---


function Layout() {
  return (
    <>
      <div className=""> {/* This div often wraps common layout elements like header/footer */}
      <Admincontrol/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/about" element={<About />} />
          <Route path="/team-grid" element={<TeamGrid />} />
          <Route path="/team/:name" element={<TeamProfile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/patners" element={<Patners />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/what-we-offer" element={<WhatWeOffer />} />
          <Route path="/jobs-done" element={<JobsDone />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/photo-galleries" element={<PhotoGalleries />} />
          <Route path="/book-consultation" element={<BookConsulation />} />
          <Route path="/get-quote" element={<Quote />} />

          {/* --- BLOG ROUTES (UPDATED FOR LOCAL JSON) --- */}
          <Route path="/blogs" element={<BlogList />} />           {/* Main blog listing page */}
          <Route path="/blog/create" element={<CreatePost />} />   {/* Route for creating a new post */}
          <Route path="/blog/edit/:slug" element={<EditPost />} /> {/* Route for editing an existing post */}
          <Route path="/blog/:slug" element={<SinglePost />} />     {/* Route for viewing a single post */}
          {/* --- END BLOG ROUTES --- */}

          {/* Fallback for any unmatched routes */}
          <Route path="*" element={<NotFound />} /> {/* Use your existing NotFound component */}
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* Global component for scrolling to top on route change */}
      <Layout />      {/* Renders all your main routes */}
    </BrowserRouter>
  );
}

export default App;