import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Sidebar from './menu/sidebar';
import Home from './main-header/Home';
import About from './main-header/about';
import Contact from './main-header/contact';
import Page1 from './main-header/Page1';
import Page2 from './main-header/Page2';
import Page3 from './main-header/Page3';
import Datatable from './threat-vulnerability/datatable';

function App() {
  return (
    <Router>
      <div className="flex flex-col bg-ivory h-screen">
        <div className="bg-header bg-darkslateblue-100 p-4 flex justify-between items-center">
          <h1 className="text-white text-3xl font-semibold">ISCube</h1>
          <nav className="space-x-4">
            <a href="/" className="text-white text-2xl no-underline hover:text-gray-400">Home</a>
            <a href="/about" className="text-white text-2xl no-underline hover:text-gray-400">About Us</a>
            <a href="/contact" className="text-white text-2xl no-underline hover:text-gray-400">Contact</a>
          </nav>
        </div>
        <div className="flex flex-1">
          <Sidebar />
          <div className="flex-1 p-4 overflow-y-auto bg-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/page1" element={<Page1 />} />
              <Route path="/page2" element={<Page2 />} />
              <Route path="/page3" element={<Page3 />} />
              <Route path="/datatable" element={<Datatable />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
