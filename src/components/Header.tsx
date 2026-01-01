"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, BookOpen, MapPin, Users, Sparkles, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Determine if scrolled for styling styling
            setIsScrolled(currentScrollY > 50);

            // Determine visibility based on scroll direction
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // Scrolling down
                setIsVisible(false);
            } else {
                // Scrolling up or at the top
                setIsVisible(true);
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: "Our Story", href: "/story" },
        { name: "The Sanctuary", href: "/sanctuary" },
        { name: "Packages", href: "/packages" },
        { name: "FAQ", href: "/faq" },
    ];

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: isVisible ? 0 : "-100%" }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "py-4" : "py-6 md:py-8"
                    }`}
            >
                <div className="max-w-[1920px] mx-auto px-6 md:px-12">
                    <div className={`relative flex items-center justify-between transition-all duration-500 rounded-full px-6 py-3 ${isScrolled
                        ? "bg-[#fbf9f5]/80 backdrop-blur-md border border-[#8b7355]/20 shadow-[0_8px_32px_rgba(0,0,0,0.05)]"
                        : "bg-transparent"
                        }`}>

                        {/* 1. Logo Section */}
                        <Link href="/" className="relative z-10 group flex items-center gap-3">
                            <div className="relative w-10 h-10 md:w-12 md:h-12">
                                <Image
                                    src="https://hdblob1.blob.core.windows.net/hermit/hermitlogo.png"
                                    alt="Hermit's Lair"
                                    fill
                                    className={`object-contain transition-all duration-500 ${isScrolled ? "brightness-100" : "brightness-0 invert"}`}
                                />
                            </div>
                            <div className="hidden md:block">
                                <span className={`block font-[family-name:var(--font-cinzel)] font-bold tracking-widest text-lg transition-colors duration-300 ${isScrolled ? "text-[#4a3f2e]" : "text-white"}`}>
                                    HERMIT'S LAIR
                                </span>
                                <span className={`block font-[family-name:var(--font-cormorant)] italic text-xs tracking-[0.2em] transition-colors duration-300 ${isScrolled ? "text-[#8b7355]" : "text-white/70"}`}>
                                    Sanctuary of Silence
                                </span>
                            </div>
                        </Link>

                        {/* 2. Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`relative text-sm font-[family-name:var(--font-cinzel)] tracking-widest uppercase font-medium transition-colors duration-300 group ${isScrolled ? "text-[#4a3f2e] hover:text-[#8b7355]" : "text-white/90 hover:text-white"
                                        }`}
                                >
                                    {item.name}
                                    <span className={`absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${isScrolled ? "bg-[#8b7355]" : "bg-white"
                                        }`} />
                                </Link>
                            ))}
                        </nav>

                        {/* 3. Actions / CTA */}
                        <div className="flex items-center gap-4">
                            <Link href="/book">
                                <button
                                    className={`hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full transition-all duration-300 font-[family-name:var(--font-cinzel)] text-xs font-bold tracking-widest uppercase border ${isScrolled
                                        ? "border-[#8b7355] text-[#8b7355] hover:bg-[#8b7355] hover:text-white"
                                        : "border-white/30 text-white hover:bg-white hover:text-[#4a3f2e]"
                                        }`}
                                >
                                    <Sparkles size={14} />
                                    <span>Book Now</span>
                                </button>
                            </Link>

                            <button
                                onClick={() => setIsMobileMenuOpen(true)}
                                className={`lg:hidden p-2 rounded-full transition-colors ${isScrolled ? "text-[#4a3f2e] hover:bg-[#8b7355]/10" : "text-white hover:bg-white/10"
                                    }`}
                            >
                                <Menu size={28} strokeWidth={1.5} />
                            </button>
                        </div>
                    </div>
                </div>
            </motion.header>

            {/* Full Screen Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="fixed inset-0 z-[60] bg-[#fbf9f5]"
                    >
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-[0.03]"
                            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30L0 0v60h60V0L30 30z' fill='%238b7355' fill-rule='evenodd'/%3E%3C/svg%3E")` }}
                        />

                        <div className="relative h-full flex flex-col p-8">

                            {/* Header inside Menu */}
                            <div className="flex items-center justify-between mb-16">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 relative">
                                        <Image
                                            src="https://hdblob1.blob.core.windows.net/hermit/hermitlogo.png"
                                            alt="Logo"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <span className="font-[family-name:var(--font-cinzel)] font-bold text-[#4a3f2e] tracking-widest">HERMIT'S LAIR</span>
                                </div>
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="p-2 rounded-full hover:bg-[#8b7355]/10 text-[#4a3f2e]"
                                >
                                    <X size={32} strokeWidth={1} />
                                </button>
                            </div>

                            {/* Menu Links */}
                            <nav className="flex-1 flex flex-col justify-center items-center gap-8">
                                {navItems.map((item, i) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, y: 40 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 + i * 0.1, duration: 0.5, ease: "easeOut" }}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="font-[family-name:var(--font-cinzel)] text-3xl md:text-5xl text-[#4a3f2e] hover:text-[#8b7355] transition-colors tracking-wide"
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>

                            {/* Footer inside Menu */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="flex flex-col items-center gap-6 mt-auto"
                            >
                                <Link href="/book" className="w-full max-w-sm">
                                    <button className="w-full py-4 bg-[#8b7355] text-white font-[family-name:var(--font-cinzel)] tracking-widest uppercase rounded-full shadow-lg">
                                        Book Your Stay
                                    </button>
                                </Link>
                                <div className="flex gap-6 text-[#8b7355]/60">
                                    <a href="#" className="hover:text-[#8b7355] transition-colors"><Users size={20} /></a>
                                    <a href="#" className="hover:text-[#8b7355] transition-colors"><MapPin size={20} /></a>
                                    <a href="#" className="hover:text-[#8b7355] transition-colors"><BookOpen size={20} /></a>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
