"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MapPin, Phone, Mail, Instagram, Globe, Calendar } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { packages } from "@/data/packages";
import BookingFormModal from "@/components/BookingFormModal";

export default function BookingSection() {
    const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
    const [isFormOpen, setIsFormOpen] = useState(false);

    const openForm = (pkgName?: string) => {
        if (pkgName) setSelectedPackage(pkgName);
        setIsFormOpen(true);
    };

    const closeForm = () => {
        setIsFormOpen(false);
    };

    const scrollToForm = () => {
        document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-stone-900 to-stone-800">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://hdblob1.blob.core.windows.net/hermit/DSCN0196.JPG"
                        alt="Booking"
                        fill
                        className="object-cover opacity-50"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-stone-900" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5 }}
                    className="relative z-10 text-center px-6 max-w-5xl"
                >
                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-xl mb-8">
                        <Calendar className="w-4 h-4 text-[#d4b483]" />
                        <span className="text-sm tracking-[0.3em] uppercase text-white font-semibold">
                            Reservations Open
                        </span>
                    </div>

                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-tight tracking-tight"
                        style={{
                            fontWeight: 300,
                            textShadow: "0 4px 24px rgba(0,0,0,0.9)",
                        }}
                    >
                        Begin Your
                        <br />
                        <span className="italic text-[#d4b483]">Journey</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-2xl mx-auto">
                        Select your path and secure your sanctuary in the mountains
                    </p>
                </motion.div>

                <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
                >
                    <span className="text-xs tracking-[0.2em] uppercase text-white/70 font-bold block mb-2">
                        Scroll to Select
                    </span>
                </motion.div>
            </section>

            {/* Content Section */}
            <section id="booking-form" className="relative py-32 px-6 bg-[#313b2c]">
                <div className="max-w-7xl mx-auto">

                    {/* Packages Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                        {packages.map((pkg, index) => {
                            const Icon = pkg.icon;
                            // Matching user's preferred image or falling back
                            const bgImage = "https://hdblob1.blob.core.windows.net/hermit/pokuna.png";
                            const isSelected = selectedPackage === pkg.name;

                            return (
                                <motion.div
                                    key={pkg.name}
                                    initial={{ opacity: 0, y: 60 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    onClick={() => openForm(pkg.name)}
                                    className="relative group h-full cursor-pointer"
                                >
                                    <div className={`relative h-full flex flex-col rounded-[2.5rem] overflow-hidden transition-all duration-700 hover:shadow-2xl border border-white/10 ${isSelected ? 'ring-2 ring-[#d4b483] scale-[1.02]' : 'hover:scale-[1.02]'
                                        }`}>

                                        {/* Background Image */}
                                        <div className="absolute inset-0 z-0">
                                            <Image
                                                src={bgImage}
                                                alt={pkg.name}
                                                fill
                                                className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/80 to-stone-900/40" />
                                        </div>

                                        <div className="relative z-10 p-8 flex flex-col h-full text-white">
                                            {/* Icon & Title */}
                                            <div className="mb-6">
                                                <div className="inline-flex p-3 rounded-2xl bg-[#d4b483]/20 backdrop-blur-md mb-6 border border-[#d4b483]/20">
                                                    <Icon className="w-6 h-6 text-[#d4b483]" />
                                                </div>
                                                <h3 className="text-3xl font-serif mb-2 tracking-tight text-[#f4f1ea] drop-shadow-md">
                                                    {pkg.name}
                                                </h3>
                                                <p className="text-[#d4b483] font-medium tracking-wide text-sm uppercase">
                                                    {pkg.tagline}
                                                </p>
                                            </div>

                                            {/* Price */}
                                            <div className="mt-auto pt-6 border-t border-white/10">
                                                <p className="text-3xl font-serif text-white mb-4">
                                                    {pkg.price}
                                                    <span className="text-sm text-white/50 font-sans tracking-normal ml-2">/ person</span>
                                                </p>
                                                <button className="w-full py-4 rounded-full bg-white/10 border border-white/20 hover:bg-[#d4b483] hover:border-[#d4b483] hover:text-stone-900 transition-all duration-300 font-medium tracking-widest uppercase text-xs">
                                                    Select Plan
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Contact Info - Editorial Style */}
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-stone-900/50 backdrop-blur-md rounded-[3rem] p-10 md:p-16 border border-white/10 text-center"
                        >
                            <h3 className="text-4xl font-serif text-[#f4f1ea] mb-12 tracking-tight">Connect With Us</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                                <a href="tel:+94773826714" className="group flex flex-col items-center gap-4">
                                    <div className="p-4 rounded-full bg-[#d4b483]/10 text-[#d4b483] group-hover:bg-[#d4b483] group-hover:text-stone-900 transition-all duration-300">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-[#d4b483] text-xs uppercase tracking-widest mb-1">Call Us</p>
                                        <p className="text-white font-serif text-lg">+94 77 382 6714</p>
                                    </div>
                                </a>
                                <a href="mailto:connect.hermitslair@gmail.com" className="group flex flex-col items-center gap-4">
                                    <div className="p-4 rounded-full bg-[#d4b483]/10 text-[#d4b483] group-hover:bg-[#d4b483] group-hover:text-stone-900 transition-all duration-300">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-[#d4b483] text-xs uppercase tracking-widest mb-1">Email Us</p>
                                        <p className="text-white font-serif text-lg">connect.hermitslair</p>
                                    </div>
                                </a>
                                <a href="https://www.instagram.com/hermitslair_official" target="_blank" className="group flex flex-col items-center gap-4">
                                    <div className="p-4 rounded-full bg-[#d4b483]/10 text-[#d4b483] group-hover:bg-[#d4b483] group-hover:text-stone-900 transition-all duration-300">
                                        <Instagram className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-[#d4b483] text-xs uppercase tracking-widest mb-1">Follow Us</p>
                                        <p className="text-white font-serif text-lg">@hermitslair_official</p>
                                    </div>
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <BookingFormModal
                    isOpen={isFormOpen}
                    onClose={closeForm}
                    selectedPackage={selectedPackage}
                />
            </section>
        </>
    );
}
