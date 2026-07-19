import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';
import Navbar from '../layouts/navbar';
import LustreHeroMatched from './HeroPage';
import BrandMarquee from './BrandMarquee';
import CollectionSection from './CollectionSection';
import NewArrivals from './NewArrivals';

const Homepage = () => {
  
  return (
    <>
  <LustreHeroMatched />
  <BrandMarquee />
  <CollectionSection/>
  <NewArrivals/>
    </>
  );
};

export default Homepage;