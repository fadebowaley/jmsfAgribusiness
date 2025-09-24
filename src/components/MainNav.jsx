import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Phone, Mail, ArrowRight } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

const MainNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Home', path: '/', dropdown: null },
    { 
      name: 'ABOUT', 
      path: '/about',
      dropdown: [
        { name: 'About us', path: '/about' },
        { name: 'Leadership', path: '/leadership' },
        { name: 'Partners', path: '/patners' }
      ] 
    },
    { 
      name: 'OUR SERVICES', 
      path: '/services',
      dropdown: [
        { name: 'What we offer', path: '/services/what-we-offer' },
        { name: 'Jobs Done', path: '/jobs-done' }
      ] 
    },
    { 
      name: 'NEWS AND MEDIA', 
      path: '/blogs',
      dropdown: [
        { name: 'Blog', path: '/blogs' }
      ] 
    },
    { name: 'Contact us', path: '/contact', dropdown: null },
    { name: 'Book Consultation', path: '/book-consultation', dropdown: null }
  ];

  return (
    <nav className="bg-white border-3 border-white border-b-green-500 py-6 px-6 sticky top-0 z-50 uppercase">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src='/logo.png'
            alt='CompanyLogo'
            className='h-10'
          />
        </Link>

        {/* Mobile Icons and Menu Button */}
        <div className="flex md:hidden items-center space-x-8">
          <a href="tel:+2348129460848" className="text-gray-700 hover:text-green-500 ">
            <Phone size={25} />
          </a>
          <a href="mailto:info@greenova.com" className="text-gray-700 hover:text-green-500">
            <Mail size={26} />
          </a>
          <Link 
            to="/get-quote" 
            className="bg-green-500 text-white px-5 py-3 rounded-full flex items-center text-sm"
          >
            Get a Quote <ArrowRight size={16} className="ml-1 font-bold" />
          </Link>
        </div>

        <button 
            onClick={toggleMenu}
            className=" md:hidden text-gray-700 ml-2"
            aria-label="Toggle menu"
        >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:justify-between items-center space-x-9">
          {navItems.map((item, index) => (
            <div key={index} className="group relative text-sm font-semibold">
              {item.dropdown ? (
                <>
                  <button 
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center text-gray-700 hover:text-green-500"
                  >
                    <NavLink 
                      to={item.path}
                      className={({ isActive }) => 
                        isActive ? 'text-green-500' : ''
                      }
                    >
                      {item.name}
                    </NavLink>
                    {openDropdown === item.name ? (
                      <ChevronUp size={16} className="ml-1" />
                    ) : (
                      <ChevronDown size={16} className="ml-1" />
                    )}
                  </button>
                  {openDropdown === item.name && (
                    <div className="absolute left-0 mt-2 w-48 bg-green-500 text-white rounded-md shadow-lg py-1 z-50">
                      {item.dropdown.map((subItem, subIndex) => (
                        <NavLink
                          key={subIndex}
                          to={subItem.path}
                          className={({ isActive }) => 
                            `block px-4 py-2 hover:bg-green-600 ${isActive ? 'bg-green-600' : ''}`
                          }
                          onClick={() => setOpenDropdown(null)}
                        >
                          {subItem.name}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <NavLink
                  to={item.path}
                  className={({ isActive }) => 
                    `text-gray-700 hover:text-green-500 ${isActive ? 'text-green-500' : ''}`
                  }
                >
                  {item.name}
                </NavLink>
              )}
            </div>
          ))}
          <Link 
            to="/get-quote" 
            className="bg-green-500 text-white hover:text-black hover:bg-white px-5 py-3 rounded-full flex items-center ml-4 border-1 border-green-500"
          >
            Get a Quote <ArrowRight size={16} className="ml-3" />
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
  <div className="md:hidden bg-green-50 rounded-b-lg py-4 px-4 font-semibold">
    <ul className="flex flex-col space-y-2">
      {navItems.map((item, index) => (
        <li key={index} className="border-b border-gray-200 py-2">
          {item.dropdown ? (
            <>
              <button
                onClick={() => toggleDropdown(item.name)}
                className="flex justify-between w-full items-center text-left text-gray-800 hover:text-green-600"
              >
                <span>{item.name}</span>
                {openDropdown === item.name ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                )}
              </button>
              {openDropdown === item.name && (
                <ul className="mt-4 mb-2 pl-4 space-y-5">
                  {item.dropdown.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        to={subItem.path}
                        className="block text-sm text-gray-700 hover:text-green-600"
                        onClick={() => {
                          setOpenDropdown(null);
                          setIsMenuOpen(false);
                        }}
                      >
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </>
          ) : (
            <Link
              to={item.path}
              className="block text-gray-800 hover:text-green-600"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          )}
        </li>
      ))}
    </ul>
  </div>
)}

    </nav>
  );
};

export default MainNav;