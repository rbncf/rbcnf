/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/AboutUs';
import ReadyStock from './pages/ReadyStock';
import FormulaLibrary from './pages/FormulaLibrary';
import PrivateLabel from './pages/PrivateLabel';
import Contact from './pages/Contact';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ready-stock" element={<ReadyStock />} />
        <Route path="/formula-library" element={<FormulaLibrary />} />
        <Route path="/private-label" element={<PrivateLabel />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
