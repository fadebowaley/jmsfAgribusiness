// src/components/AdminControls.jsx
import React, { useState, useEffect } from 'react';
import { UserCog, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const AdminControls = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [showAdminPrompt, setShowAdminPrompt] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const adminStatus = localStorage.getItem('isAdmin');
    if (adminStatus === 'true') {
      setIsAdmin(true);
    }
  }, []);

  useEffect(() => {
    setShowAdminPrompt(false);
  }, [location]);

  const handleAdminToggle = (password) => {
    // *** IMPORTANT: CHANGE THIS TO YOUR DESIRED ADMIN PASSWORD ***
    const ADMIN_PASSWORD = 'SCOTTER123.'; // Your chosen admin password

    if (password === ADMIN_PASSWORD) {
      setIsAdmin(true);
      localStorage.setItem('isAdmin', 'true');
      alert('Admin mode activated!');
      setShowAdminPrompt(false);
      // window.location.reload(); // Consider if you truly need a full reload here
    } else {
      alert('Incorrect admin password.');
      setIsAdmin(false);
      localStorage.removeItem('isAdmin');
    }
  };

  const handleAdminLogout = () => {
    setIsAdmin(false);
    localStorage.removeItem('isAdmin');
    alert('Admin mode deactivated.');
    // window.location.reload(); // Consider if you truly need a full reload here
  };

  return (
    <div className="relative inline-block"> {/* Ensure it's inline-block or similar if used in a footer */}
      {isAdmin ? (
        <button
          onClick={handleAdminLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors flex items-center gap-2 text-sm" // Smaller text for footer
        >
          <UserCog size={16} /> Admin (Logout)
        </button>
      ) : (
        <button
          onClick={() => setShowAdminPrompt(!showAdminPrompt)}
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors flex items-center gap-2 text-sm" // Smaller text for footer
          aria-label="Admin Login"
        >
          <UserCog size={16} /> Admin Login
        </button>
      )}

      {showAdminPrompt && !isAdmin && (
        <div className="absolute right-0 bottom-full mb-2 w-52 p-4 bg-white rounded-md shadow-lg border border-gray-200 z-50 transform translate-y-0 md:-translate-y-full"> {/* Position above button for footer */}
          <input
            type="password"
            id="admin-password-input-footer" // Unique ID
            placeholder="Admin Password"
            className="w-full p-2 border border-gray-300 rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleAdminToggle(e.target.value);
                e.target.value = '';
              }
            }}
          />
          <button
            onClick={() => {
              const input = document.getElementById('admin-password-input-footer');
              if (input) {
                handleAdminToggle(input.value);
                input.value = '';
              }
            }}
            className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Login
          </button>
          <button
            onClick={() => setShowAdminPrompt(false)}
            className="absolute -top-2 -right-2 bg-gray-100 rounded-full p-1 shadow hover:bg-gray-200"
            aria-label="Close admin password prompt"
          >
            <X size={16} />
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminControls;