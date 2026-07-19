import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';
import Navbar from '../layouts/navbar';
import LustreHeroMatched from './HeroPage';
import BrandMarquee from './BrandMarquee';
import CollectionSection from './CollectionSection';
import NewArrivals from './NewArrivals';
import ChooseUsSection from './ChooseUsSection';
import PromoBanner from './PromoBanner';
import Newsletter from './Newsletter';
import CustomerSupport from './CustomerSupport';

const Homepage = () => {
  
  return (
    <>
  <LustreHeroMatched />
  <BrandMarquee />
  <CollectionSection/>
  <NewArrivals/>
  <ChooseUsSection/>
  <PromoBanner/>
  <Newsletter/>
  <CustomerSupport/>
    </>
  );
};

export default Homepage;