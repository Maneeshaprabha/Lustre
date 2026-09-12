import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText } from 'lucide-react';

const TermsOfService = () => {
  const [activeSection, setActiveSection] = useState('overview');

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    { id: 'overview', title: '1. Overview' },
    { id: 'general', title: '2. General Conditions' },
    { id: 'products', title: '3. Products & Services' },
    { id: 'billing', title: '4. Billing & Account' },
    { id: 'privacy', title: '5. Privacy & Personal Info' },
    { id: 'liability', title: '6. Limitation of Liability' },
    { id: 'changes', title: '7. Changes to Terms' },
  ];

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      // Adjusted for fixed navbar height
      const y = element.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } }
  };

  return (
    <>
      <div className="min-h-screen w-full bg-white font-sans text-[#1A1A1A] antialiased">
        
        {/* HEADER SECTION */}
        <div className="w-full pt-32 pb-12 px-6 md:px-12 bg-[#FBFBFA] border-b border-[#C4BEB6]/30">
          <div className="max-w-[1200px] mx-auto">
            <nav className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#C4BEB6] uppercase mb-8">
              <Link to="/" className="hover:text-[#1A1A1A] transition-colors">Home</Link>
              <span className="mx-3">/</span>
              <span className="text-[#1A1A1A]">Terms of Service</span>
            </nav>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <div className="flex items-center gap-3 mb-4">
                <FileText size={20} className="text-[#3d352e]" strokeWidth={1.5} />
                <span className="text-[10px] font-bold tracking-[0.25em] text-[#3d352e] uppercase">Legal Agreement</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.9] text-[#1A1A1A] mb-6">
                Terms of <br/> Service.
              </h1>
              <p className="text-sm font-bold tracking-widest text-[#1A1A1A]/40 uppercase">
                Last Updated: September 12, 2026
              </p>
            </motion.div>
          </div>
        </div>

        {/* MAIN SPLIT CONTENT */}
        <main className="max-w-[1200px] mx-auto px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* LEFT: STICKY NAVIGATION (Table of Contents) */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-32">
              <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-[#1A1A1A] mb-8 border-b border-[#C4BEB6]/40 pb-4">
                Table of Contents
              </h3>
              <ul className="flex flex-col gap-2">
                {sections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => scrollToSection(section.id)}
                      className={`text-left w-full px-4 py-3 text-sm font-medium transition-all duration-300 border-l-2 ${
                        activeSection === section.id 
                          ? 'border-[#3d352e] text-[#3d352e] bg-[#FBFBFA] font-bold tracking-wide' 
                          : 'border-transparent text-[#1A1A1A]/60 hover:text-[#1A1A1A] hover:bg-[#E9E3DB]/20'
                      }`}
                    >
                      {section.title}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-12 p-6 bg-[#FBFBFA] border border-[#C4BEB6]/30">
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#1A1A1A] mb-2">Have Questions?</h4>
                <p className="text-xs text-[#1A1A1A]/60 font-medium leading-relaxed mb-4">
                  If you need clarification on any of our terms, our concierge is here to help.
                </p>
                <Link to="/contact" className="flex items-center gap-2 text-[10px] font-bold tracking-[0.15em] uppercase text-[#3d352e] hover:text-[#1A1A1A] transition-colors border-b border-[#3d352e] hover:border-[#1A1A1A] pb-0.5 w-max">
                  Contact Concierge <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT: EDITORIAL TEXT CONTENT */}
          <div className="lg:col-span-8 flex flex-col gap-16">
            
            {/* 1. Overview */}
            <section id="overview" className="scroll-mt-32">
              <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-[#1A1A1A] mb-6">
                1. Overview
              </h2>
              <div className="prose prose-lg max-w-none text-[#1A1A1A]/70 font-medium leading-relaxed">
                <p className="mb-4">
                  This website is operated by Lustre Luxury. Throughout the site, the terms “we”, “us” and “our” refer to Lustre. Lustre offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.
                </p>
                <p>
                  By visiting our site and/or purchasing something from us, you engage in our “Service” and agree to be bound by the following terms and conditions (“Terms of Service”, “Terms”), including those additional terms and conditions and policies referenced herein and/or available by hyperlink.
                </p>
              </div>
            </section>

            {/* 2. General Conditions */}
            <section id="general" className="scroll-mt-32 pt-8 border-t border-[#C4BEB6]/30">
              <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-[#1A1A1A] mb-6">
                2. General Conditions
              </h2>
              <div className="prose prose-lg max-w-none text-[#1A1A1A]/70 font-medium leading-relaxed">
                <p className="mb-4">
                  We reserve the right to refuse service to anyone for any reason at any time. You understand that your content (not including credit card information), may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices. 
                </p>
                <p>
                  You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the website through which the service is provided, without express written permission by us.
                </p>
              </div>
            </section>

            {/* 3. Products & Services */}
            <section id="products" className="scroll-mt-32 pt-8 border-t border-[#C4BEB6]/30">
              <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-[#1A1A1A] mb-6">
                3. Products or Services
              </h2>
              <div className="prose prose-lg max-w-none text-[#1A1A1A]/70 font-medium leading-relaxed">
                <p className="mb-4">
                  Certain products or services may be available exclusively online through the website. These products or services may have limited quantities and are subject to return or exchange only according to our Return Policy.
                </p>
                <p className="mb-4">
                  We have made every effort to display as accurately as possible the colors and images of our products that appear at the store. We cannot guarantee that your computer monitor's display of any color will be accurate.
                </p>
                <p>
                  We reserve the right, but are not obligated, to limit the sales of our products or Services to any person, geographic region or jurisdiction. We may exercise this right on a case-by-case basis. All descriptions of products or product pricing are subject to change at anytime without notice, at the sole discretion of us.
                </p>
              </div>
            </section>

            {/* 4. Billing & Account */}
            <section id="billing" className="scroll-mt-32 pt-8 border-t border-[#C4BEB6]/30">
              <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-[#1A1A1A] mb-6">
                4. Accuracy of Billing and Account Information
              </h2>
              <div className="prose prose-lg max-w-none text-[#1A1A1A]/70 font-medium leading-relaxed">
                <p className="mb-4">
                  We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household or per order. These restrictions may include orders placed by or under the same customer account, the same credit card, and/or orders that use the same billing and/or shipping address.
                </p>
                <p>
                  You agree to provide current, complete and accurate purchase and account information for all purchases made at our store. You agree to promptly update your account and other information, including your email address and credit card numbers and expiration dates, so that we can complete your transactions and contact you as needed.
                </p>
              </div>
            </section>

            {/* 5. Privacy */}
            <section id="privacy" className="scroll-mt-32 pt-8 border-t border-[#C4BEB6]/30">
              <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-[#1A1A1A] mb-6">
                5. Personal Information & Privacy
              </h2>
              <div className="prose prose-lg max-w-none text-[#1A1A1A]/70 font-medium leading-relaxed">
                <p>
                  Your submission of personal information through the store is governed by our Privacy Policy. We are committed to protecting your privacy and ensuring your personal data is handled securely. We do not sell your personal data to third parties. For more details, please review our comprehensive Privacy Policy available on our website.
                </p>
              </div>
            </section>

            {/* 6. Liability */}
            <section id="liability" className="scroll-mt-32 pt-8 border-t border-[#C4BEB6]/30">
              <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-[#1A1A1A] mb-6">
                6. Limitation of Liability
              </h2>
              <div className="prose prose-lg max-w-none text-[#1A1A1A]/70 font-medium leading-relaxed">
                <p className="mb-4">
                  We do not guarantee, represent or warrant that your use of our service will be uninterrupted, timely, secure or error-free. We do not warrant that the results that may be obtained from the use of the service will be accurate or reliable.
                </p>
                <p>
                  In no case shall Lustre, our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, including, without limitation lost profits, lost revenue, lost savings, loss of data, replacement costs, or any similar damages.
                </p>
              </div>
            </section>

            {/* 7. Changes */}
            <section id="changes" className="scroll-mt-32 pt-8 border-t border-[#C4BEB6]/30">
              <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-[#1A1A1A] mb-6">
                7. Changes to Terms of Service
              </h2>
              <div className="prose prose-lg max-w-none text-[#1A1A1A]/70 font-medium leading-relaxed">
                <p className="mb-4">
                  You can review the most current version of the Terms of Service at any time at this page.
                </p>
                <p>
                  We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our website. It is your responsibility to check our website periodically for changes. Your continued use of or access to our website or the Service following the posting of any changes to these Terms of Service constitutes acceptance of those changes.
                </p>
              </div>
            </section>

          </div>
        </main>
      </div>

    </>
  );
};

export default TermsOfService;