import { Link } from "react-router-dom";
import MainNav from "../components/MainNav";
import Footer from "../components/Footer";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <MainNav />
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-4">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-2xl text-gray-600 mb-6">Page Not Found</p>
      <p className="text-gray-500 mb-8">
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-flex items-center px-4 py-2 text-black bg-white hover:bg-green-600 hover:text-white rounded-lg transition"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Home
      </Link>
    </div>
    <Footer />
    </>
    
  );
}
