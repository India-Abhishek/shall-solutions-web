"use client";

import LanguageModal from "@/components/common/language-modal";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import About from "@/components/home/About";
import WhatsappButton from "@/components/common/WhatsappButton";
import Footer from "@/components/layout/Footer";
import Gallery from "@/components/home/Gallery";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Contact from "@/components/home/Contact";
import Testimonials from "@/components/home/Testimonials";

export default function HomePage() {
  return (
    <>
      <LanguageModal />
      <Navbar />
      <Hero />
      <Services />
      <About />
      <WhyChooseUs />
      <Gallery />
      <Contact />
      <Testimonials />
      <WhatsappButton />
      <Footer />
    </>
  );
}