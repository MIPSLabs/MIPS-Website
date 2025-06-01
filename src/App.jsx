import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import ProductShowcase from './components/ProductShowcase';
import Testimonials from './components/Testimonials.jsx';
import HowToPlaySection from './components/HowToPlaySection';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <ProductShowcase />
      <Testimonials />
      <HowToPlaySection />
      <BlogSection />
      <Footer />
    </>
  );
}

export default App;

