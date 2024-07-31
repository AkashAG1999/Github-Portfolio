import React, { useState } from 'react';
import { FaGithub, FaTimes } from 'react-icons/fa';
import { GoBook, GoMortarBoard, GoZap } from "react-icons/go";
import { HiMenuAlt2, } from "react-icons/hi";
import { Link, useLocation } from 'react-router-dom';
import pic from '../assets/pic.jpg';

const Navbar = () => {
  const location = useLocation();
  const activeTab = location.pathname;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  return (
    <div>
      <header className="bg-black text-white relative">
        <div className="max-w-full mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-4">
              <HiMenuAlt2 className="text-2xl md:hidden cursor-pointer" onClick={() => setIsSidebarOpen(true)} />
              <FaGithub className="text-2xl hidden md:block" />
              <span className="text-base font-normal">Akash A G</span>
            </div>
            <nav className="hidden md:flex flex-row space-x-6 text-sm">
              <Link
                to="/overview"
                className={`hover:text-gray-400 flex items-center relative ${activeTab === '/overview' ? 'active-tab' : ''}`}
              >
                <GoBook className="mr-1" />
                Overview
              </Link>
              <Link
                to="/qualifications"
                className={`hover:text-gray-400 flex items-center relative ${activeTab === '/qualifications' ? 'active-tab' : ''}`}
              >
                <GoMortarBoard className="mr-1" />
                <span>Qualifications</span>
              </Link>
              <Link
                to="/skills"
                className={`hover:text-gray-400 flex items-center relative ${activeTab === '/skills' ? 'active-tab' : ''}`}
              >
                <GoZap className="mr-1" />
                Skills
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Type / to search"
              className="hidden md:block bg-gray-800 text-sm text-white rounded px-4 py-1 outline-none"
            />
            <button className="hover:text-gray-400 hidden md:block">+</button>
            <button className="hover:text-gray-400 hidden md:block">🔔</button>
            <button className="hover:text-gray-400 hidden md:block">⚙️</button>
            <div className="relative">
              <img
                src={pic}
                alt="Profile"
                className="w-8 h-8 rounded-full cursor-pointer"
                onClick={() => setShowButtons(!showButtons)}
              />
              {showButtons && (
                <div className="absolute right-0 mt-2 w-32 bg-white text-black rounded shadow-lg py-2">
                  <button className="block px-4 py-2 hover:bg-gray-100 w-full text-left">Contact</button>
                  <button className="block px-4 py-2 hover:bg-gray-100 w-full text-left">Hire</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-black text-white transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-between items-center p-4">
          <span className="text-lg font-semibold">Menu</span>
          <FaTimes className="text-2xl cursor-pointer" onClick={() => setIsSidebarOpen(false)} />
        </div>
        <nav className="flex flex-col space-y-4 px-4">
          <Link
            to="/overview"
            className={`hover:text-gray-400 flex items-center ${activeTab === '/overview' ? 'active-tab' : ''}`}
            onClick={() => setIsSidebarOpen(false)}
          >
            <GoBook className="mr-1" />
            Overview
          </Link>
          <Link
            to="/qualifications"
            className={`hover:text-gray-400 flex items-center ${activeTab === '/qualifications' ? 'active-tab' : ''}`}
            onClick={() => setIsSidebarOpen(false)}
          >
            <GoMortarBoard className="mr-1" />
            <span>Qualifications</span>
          </Link>
          <Link
            to="/skills"
            className={`hover:text-gray-400 flex items-center ${activeTab === '/skills' ? 'active-tab' : ''}`}
            onClick={() => setIsSidebarOpen(false)}
          >
            <GoZap className="mr-1" />
            Skills
          </Link>

        </nav>
      </div>
      {/* Backdrop */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
      <style jsx>{`
        .active-tab::after {
          content: '';
          position: absolute;
          bottom: -12px; 
          left: 0;
          right: 0;
          height: 2px;
          background-color: #FE9900;
        }
        @media (max-width: 767px) {
          .active-tab::after {
            bottom: -2px; 
          }
        }
      `}</style>
    </div>
  );
};

export default Navbar;
