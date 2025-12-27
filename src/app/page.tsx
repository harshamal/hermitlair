"use client";

import HeroSection from "@/components/HeroSection";
import LegendSection from "@/components/LegendSection";
import TransformationSection from "@/components/TransformationSection";
import ExperienceSection from "@/components/ExperienceSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-cream min-h-screen selection:bg-sage/30 selection:text-shadow">
      {/* Hero Section - The Gateway: First impression, create wonder */}
      <HeroSection />

      {/* Legend Section - The Story: Ancient mystery, create fascination */}
      <LegendSection />

      {/* Transformation Section - The Promise: Emotional journey, create desire */}
      <TransformationSection />

      {/* Experience Section - MERGED into Transformation */}
      {/* <div id="experience">
        <ExperienceSection />
      </div> */}

      {/* Gallery Section - Visual Storytelling */}
      <GallerySection />

      {/* Testimonials Section - Social Proof */}
      <TestimonialsSection />

      {/* Booking moved to /book */}
      {/* <BookingSection /> */}

      {/* Footer - Final Touch */}
      <Footer />
    </main>
  );
}
