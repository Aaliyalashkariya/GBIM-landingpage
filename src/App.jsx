import React from 'react';
import './App.css';
import { Navbar } from './components/navbar';
import { NewBanner } from './components/Newbanner';
import StatsSection from './stats/acchievements';
import WhatWeOffer from './weoffer/whatweoffer';
import DesignSolutions from './designsolution/DesignSolutions';
import CreativeProcess from './create/creative';
import ShowcaseSection from './showcase/aidesign';
import CategoryShowcase from './categories/CategoryShowcase';
import FAQ from './components/Faqs';
import Testimonials from './components/testimonials';
import Footer from './components/footer';



function App() {
  return (
    <div className="app-background">
      <Navbar/>
      <NewBanner/>
      <StatsSection/>
      <WhatWeOffer/>
       <DesignSolutions/>
       <CreativeProcess/>
       <ShowcaseSection/>
       <CategoryShowcase/>
       <FAQ/>
       <Testimonials/>
       <Footer/>
    </div>
  );
}

export default App;
