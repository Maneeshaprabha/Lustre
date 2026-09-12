import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck } from 'lucide-react';



const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    { id: 'introduction', title: '1. Introduction' },
    { id: 'information-collection', title: '2. Information We Collect' },
    { id: 'information-use', title: '3. How We Use Your Information' },
    { id: 'information-sharing', title: '4. Sharing Your Information' },
    { id: 'cookies', title: '5. Cookies & Tracking' },
    { id: 'your-rights', title: '6. Your Rights & Choices' },
    { id: 'contact', title: '7. Contact Us' },
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
              <span className="text-[#1A1A1A]">Privacy Policy</span>
            </nav>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck size={20} className="text-[#3d352e]" strokeWidth={1.5} />
                <span className="text-[10px] font-bold tracking-[0.25em] text-[#3d352e] uppercase">Data Protection</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.9] text-[#1A1A1A] mb-6">
                Privacy <br/> Policy.
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
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#1A1A1A] mb-2">Data Inquiries?</h4>
                <p className="text-xs text-[#1A1A1A]/60 font-medium leading-relaxed mb-4">
                  If you have any questions regarding how we handle your data, please contact our support team.
                </p>
                <Link to="/contact" className="flex items-center gap-2 text-[10px] font-bold tracking-[0.15em] uppercase text-[#3d352e] hover:text-[#1A1A1A] transition-colors border-b border-[#3d352e] hover:border-[#1A1A1A] pb-0.5 w-max">
                  Contact Concierge <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT: EDITORIAL TEXT CONTENT */}
          <div className="lg:col-span-8 flex flex-col gap-16">
            
            {/* 1. Introduction */}
            <section id="introduction" className="scroll-mt-32">
              <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-[#1A1A1A] mb-6">
                1. Introduction
              </h2>
              <div className="prose prose-lg max-w-none text-[#1A1A1A]/70 font-medium leading-relaxed">
                <p className="mb-4">
                  At Lustre Luxury ("we," "our," or "us"), we respect your privacy and are committed to protecting your personal data. This Privacy Policy outlines how we collect, use, safeguard, and disclose your information when you visit our website or make a purchase from us.
                </p>
                <p>
                  By engaging with our platform, you consent to the data practices described in this policy. We ensure that our data handling aligns with global luxury standards, offering you transparency and control.
                </p>
              </div>
            </section>

            {/* 2. Information We Collect */}
            <section id="information-collection" className="scroll-mt-32 pt-8 border-t border-[#C4BEB6]/30">
              <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-[#1A1A1A] mb-6">
                2. Information We Collect
              </h2>
              <div className="prose prose-lg max-w-none text-[#1A1A1A]/70 font-medium leading-relaxed">
                <p className="mb-4">
                  We collect information that helps us elevate your shopping experience. This includes:
                </p>
                <ul className="list-disc pl-5 mb-4 space-y-2">
                  <li><strong className="text-[#1A1A1A]">Personal Data:</strong> Your name, billing address, shipping address, email address, and phone number when you place an order or create an account.</li>
                  <li><strong className="text-[#1A1A1A]">Payment Information:</strong> Securely processed payment details (we do not store full credit card numbers on our servers).</li>
                  <li><strong className="text-[#1A1A1A]">Device Information:</strong> Information about your web browser, IP address, time zone, and some of the cookies installed on your device.</li>
                </ul>
              </div>
            </section>

            {/* 3. How We Use Your Information */}
            <section id="information-use" className="scroll-mt-32 pt-8 border-t border-[#C4BEB6]/30">
              <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-[#1A1A1A] mb-6">
                3. How We Use Your Information
              </h2>
              <div className="prose prose-lg max-w-none text-[#1A1A1A]/70 font-medium leading-relaxed">
                <p className="mb-4">
                  The data we collect is utilized strictly to fulfill our services and enhance your interaction with the Lustre brand:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>To process and fulfill your orders, including sending order confirmations and shipping updates.</li>
                  <li>To communicate with you regarding bespoke inquiries, styling advice, and customer support.</li>
                  <li>To screen our orders for potential risk or fraud.</li>
                  <li>To provide you with information or advertising relating to our products, only in accordance with the preferences you have shared with us.</li>
                </ul>
              </div>
            </section>

            {/* 4. Sharing Your Information */}
            <section id="information-sharing" className="scroll-mt-32 pt-8 border-t border-[#C4BEB6]/30">
              <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-[#1A1A1A] mb-6">
                4. Sharing Your Information
              </h2>
              <div className="prose prose-lg max-w-none text-[#1A1A1A]/70 font-medium leading-relaxed">
                <p className="mb-4">
                  We value your trust. <strong className="text-[#1A1A1A]">We do not sell your personal information to third parties.</strong> We only share your Personal Information with trusted third parties to help us use your Personal Information, as described above. 
                </p>
                <p>
                  For example, we use secure payment gateways to process your payments, and trusted courier services to deliver your packages. We may also share your Personal Information to comply with applicable laws and regulations, or to otherwise protect our rights.
                </p>
              </div>
            </section>

            {/* 5. Cookies */}
            <section id="cookies" className="scroll-mt-32 pt-8 border-t border-[#C4BEB6]/30">
              <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-[#1A1A1A] mb-6">
                5. Cookies & Tracking Technologies
              </h2>
              <div className="prose prose-lg max-w-none text-[#1A1A1A]/70 font-medium leading-relaxed">
                <p className="mb-4">
                  We use cookies and similar tracking technologies to track the activity on our Service and store certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
                </p>
                <p>
                  You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some premium portions of our Service seamlessly.
                </p>
              </div>
            </section>

            {/* 6. Your Rights */}
            <section id="your-rights" className="scroll-mt-32 pt-8 border-t border-[#C4BEB6]/30">
              <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-[#1A1A1A] mb-6">
                6. Your Rights & Choices
              </h2>
              <div className="prose prose-lg max-w-none text-[#1A1A1A]/70 font-medium leading-relaxed">
                <p className="mb-4">
                  If you are a resident of certain territories (such as Europe or California), you have specific rights regarding your personal information:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>The right to access the personal information we hold about you.</li>
                  <li>The right to ask that your personal information be corrected, updated, or deleted.</li>
                  <li>The right to opt-out of marketing communications at any time.</li>
                </ul>
                <p className="mt-4">
                  If you would like to exercise these rights, please contact our data privacy team through the contact information provided below.
                </p>
              </div>
            </section>

            {/* 7. Contact Us */}
            <section id="contact" className="scroll-mt-32 pt-8 border-t border-[#C4BEB6]/30">
              <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-[#1A1A1A] mb-6">
                7. Contact Us
              </h2>
              <div className="prose prose-lg max-w-none text-[#1A1A1A]/70 font-medium leading-relaxed">
                <p className="mb-4">
                  For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at:
                </p>
                <p className="font-bold text-[#1A1A1A]">
                  privacy@lustre-luxury.com
                </p>
                <p className="mt-4">
                  Or by mail using the details provided below:<br/>
                  <span className="block mt-2">
                    Lustre Client Concierge<br/>
                    742 Madison Avenue, New York<br/>
                    NY 10021, United States
                  </span>
                </p>
              </div>
            </section>

          </div>
        </main>
      </div>

   
    </>
  );
};

export default PrivacyPolicy;