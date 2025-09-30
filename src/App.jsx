import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  './assets/css/all.min.css';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import About from './pages/About';
import Leadership  from './pages/Leadership';
import Patners from './pages/Patners';
import Contact from './pages/Contact';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import WhatWeOffer from './pages/What-we-Offer';
import Blog from './pages/Blog'
import BlogPost from "./pages/BlogPost";
import BookConsulation from './pages/Book-Consultation'
import ScrollToTop from './components/ScrollToTop';
import TeamGrid from './components/TeamGrid';
import Quote from './pages/Get-Quote';
import TeamProfile from './components/TeamProfile';
import JobsDone from './pages/Jobs-Done'; // Import the JobsDone component
import PhotoGalleries from './pages/PhotoGalleries'; // Import the PhotoGalleries component

function Layout() {
  return (
    <>
      <div className="">
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
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/photo-galleries" element={<PhotoGalleries />} />
          <Route path="/book-consultation" element={<BookConsulation />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/get-quote" element={<Quote />} />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout />
    </BrowserRouter>
  );
}

export default App;
