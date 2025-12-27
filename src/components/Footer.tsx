"use client";

import { motion } from "framer-motion";
import { Instagram, Facebook, Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative bg-[#0c0a09] text-[#e3d5b5] overflow-hidden pt-24 pb-12">
            {/* Background Texture - Grain */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`
                }}
            />

            {/* Background - faint gradient orb */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#8b7355]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">

                {/* 1. Main Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24 border-b border-[#8b7355]/10 pb-16">

                    {/* Brand Column (Span 5) */}
                    <div className="lg:col-span-5 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                {/* Logo */}
                                <div className="relative w-10 h-10">
                                    <Image
                                        src="https://hdblob1.blob.core.windows.net/hermit/hermitlogo.png"
                                        alt="Hermit's Lair Logo"
                                        fill
                                        className="object-contain brightness-0 invert opacity-90"
                                    />
                                </div>
                                <span className="text-3xl font-[family-name:var(--font-cinzel)] text-white tracking-wide">
                                    Hermit's Lair
                                </span>
                            </div>
                            <p className="text-[#a8a29e] font-[family-name:var(--font-cormorant)] text-xl italic leading-relaxed max-w-sm">
                                "In the silence of the mountain, the soul remembers its song."
                            </p>
                            <p className="text-[#a8a29e]/60 text-sm mt-4 leading-relaxed max-w-md">
                                A sanctuary of solitude nestled in the ancient misty peaks of Dimbulagala, Sri Lanka.
                            </p>
                        </motion.div>

                        {/* Socials */}
                        <div className="flex gap-4">
                            {[Instagram, Facebook, Mail].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-full border border-[#8b7355]/20 flex items-center justify-center text-[#8b7355] hover:bg-[#8b7355] hover:text-[#0c0a09] transition-all duration-300"
                                >
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Column (Span 3) */}
                    <div className="lg:col-span-3 lg:pl-8">
                        <h4 className="text-sm font-bold text-white uppercase tracking-[0.2em] mb-8 font-[family-name:var(--font-cinzel)]">
                            Explore
                        </h4>
                        <ul className="space-y-4 font-[family-name:var(--font-cormorant)] text-lg text-[#a8a29e]">
                            {["Our Story", "The Sanctuary", "Chalets", "Experiences", "Gallery"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="hover:text-[#8b7355] hover:pl-2 transition-all duration-300 block">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column (Span 4) */}
                    <div className="lg:col-span-4">
                        <h4 className="text-sm font-bold text-white uppercase tracking-[0.2em] mb-8 font-[family-name:var(--font-cinzel)]">
                            Visit Us
                        </h4>
                        <ul className="space-y-6 font-[family-name:var(--font-cormorant)] text-lg text-[#a8a29e]">
                            <li className="flex items-start gap-4 group">
                                <MapPin className="w-5 h-5 text-[#8b7355] mt-1 group-hover:text-white transition-colors" />
                                <span>
                                    Dimbulagala Rajamaha Viharaya,<br />
                                    Polonnaruwa, Sri Lanka
                                </span>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <Phone className="w-5 h-5 text-[#8b7355] group-hover:text-white transition-colors" />
                                <span>+94 77 123 4567</span>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <Mail className="w-5 h-5 text-[#8b7355] group-hover:text-white transition-colors" />
                                <span>reservations@hermitslair.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* 2. Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-4 text-xs text-[#a8a29e]/40 font-medium uppercase tracking-wider">
                    <p>© {currentYear} Hermit's Lair. All rights reserved.</p>

                    <div className="flex items-center gap-8">
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                        <button
                            onClick={scrollToTop}
                            className="flex items-center gap-2 text-[#8b7355] hover:text-white transition-colors"
                        >
                            Back to Top <ArrowUp className="w-3 h-3" />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
