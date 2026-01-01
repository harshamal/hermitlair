"use client";

import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";

export default function BookingPage() {
    return (
        <main className="bg-cream min-h-screen selection:bg-sage/30 selection:text-shadow">
            {/* 
               We add pt-20 to account for the fixed header. 
               The BookingSection itself has padding as well.
            */}
            <BookingSection />
            <Footer />
        </main>
    );
}
