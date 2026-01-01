"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, Moon, Sun, Mountain, Heart, Users, Calendar } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import BookingFormModal from "@/components/BookingFormModal";

const packages = [
    {
        name: "The Seeker",
        tagline: "A Weekend of Stillness",
        duration: "3 Days / 2 Nights",
        price: "$450",
        icon: Moon,
        color: "sage",
        description: "Perfect for those taking their first step into silence. A gentle introduction to mindful living.",
        includes: [
            "2 nights in a private room",
            "All vegetarian meals",
            "Daily guided meditation",
            "Sunrise yoga session",
            "Forest walking meditation",
            "Access to meditation caves",
            "Complimentary herbal tea ceremony",
        ],
        ideal: "Solo travelers, first-time retreat guests, weekend warriors",
    },
    {
        name: "The Wanderer",
        tagline: "Deeper Into the Mountain",
        duration: "5 Days / 4 Nights",
        price: "$850",
        icon: Mountain,
        color: "champagne",
        featured: true,
        description: "Our most popular journey. Time to truly disconnect, explore, and rediscover yourself.",
        includes: [
            "4 nights in a private room",
            "All vegetarian meals",
            "Daily guided meditation & yoga",
            "Sound healing session",
            "Private mindfulness consultation",
            "Guided nature hikes",
            "Journaling workshop",
            "Access to all facilities",
            "Complimentary massage (60 min)",
        ],
        ideal: "Anyone seeking real transformation, digital detox enthusiasts, nature lovers",
    },
    {
        name: "The Transformer",
        tagline: "The Complete Journey",
        duration: "7 Days / 6 Nights",
        price: "$1,400",
        icon: Sun,
        color: "wood",
        description: "A full week to shed what no longer serves you and emerge renewed. Deep, lasting change.",
        includes: [
            "6 nights in a premium room",
            "All vegetarian meals",
            "Daily meditation & yoga",
            "3 private coaching sessions",
            "Sound healing & breathwork",
            "Art therapy workshop",
            "Guided forest bathing",
            "Stargazing experience",
            "2 massages (90 min each)",
            "Personalized wellness plan",
        ],
        ideal: "Life transitions, burnout recovery, creative blocks, deep soul work",
    },
];

const addOns = [
    { name: "Private Meditation Session", price: "$80", icon: Moon },
    { name: "Ayurvedic Massage (90 min)", price: "$120", icon: Heart },
    { name: "Sound Healing Journey", price: "$100", icon: Sparkles },
    { name: "Photography Workshop", price: "$150", icon: Sun },
    { name: "Private Chef Experience", price: "$200", icon: Users },
];

export default function PackagesPage() {
    const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
    const [isFormOpen, setIsFormOpen] = useState(false);

    const openForm = (pkgName?: string) => {
        if (pkgName) setSelectedPackage(pkgName);
        setIsFormOpen(true);
    };

    const closeForm = () => {
        setIsFormOpen(false);
    };

    return (
        <main className="bg-warm-white min-h-screen">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-shadow to-stone">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://hdblob1.blob.core.windows.net/hermit/meditatetransform.png"
                        alt="Transformation Journey"
                        fill
                        className="object-cover opacity-60"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5 }}
                    className="relative z-10 text-center px-6 max-w-5xl"
                >
                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-xl mb-8">
                        <Calendar className="w-4 h-4 text-white" />
                        <span className="text-sm tracking-[0.3em] uppercase text-white font-semibold">
                            Your Journey Awaits
                        </span>
                    </div>

                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-tight tracking-tight"
                        style={{
                            fontWeight: 300,
                            textShadow: "0 4px 24px rgba(0,0,0,0.9), 0 2px 12px rgba(0,0,0,0.7)",
                        }}
                    >
                        Choose Your
                        <br />
                        <span className="italic">Transformation</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-white font-light leading-relaxed max-w-2xl mx-auto"
                        style={{
                            textShadow: "0 2px 12px rgba(0,0,0,0.8)",
                        }}
                    >
                        Each journey is designed to meet you where you are and guide you where you need to be
                    </p>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
                >
                    <span className="text-xs tracking-[0.2em] uppercase text-white font-bold drop-shadow-lg block mb-2">
                        Scroll to explore
                    </span>
                </motion.div>
            </section>

            {/* Packages Grid */}
            <section className="relative py-32 px-6 bg-gradient-to-b from-cream via-warm-white to-linen">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                ...packages[0],
                                image: "https://hdblob1.blob.core.windows.net/hermit/pokuna.png"
                            },
                            {
                                ...packages[1],
                                image: "https://hdblob1.blob.core.windows.net/hermit/pokuna.png"
                            },
                            {
                                ...packages[2],
                                image: "https://hdblob1.blob.core.windows.net/hermit/pokuna.png"
                            }
                        ].map((pkg, index) => {
                            const Icon = pkg.icon;
                            return (
                                <motion.div
                                    key={pkg.name}
                                    initial={{ opacity: 0, y: 60 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    className="relative group h-full"
                                >
                                    {/* Featured Badge - Enhanced */}
                                    {pkg.featured && (
                                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-30">
                                            <div className="px-8 py-2 bg-gradient-to-r from-[#d4b483] via-[#e6d2a0] to-[#d4b483] text-[#4a3f2e] text-sm font-bold tracking-widest uppercase rounded-full shadow-[0_4px_20px_rgba(212,180,131,0.5)] border border-white/20">
                                                Best Seller
                                            </div>
                                        </div>
                                    )}

                                    <div className={`relative h-full flex flex-col rounded-[2.5rem] overflow-hidden transition-all duration-700 hover:shadow-2xl ${pkg.featured ? 'shadow-xl scale-105 z-10' : 'shadow-lg hover:-translate-y-2'
                                        }`}>

                                        {/* Background Image with Zoom Effect */}
                                        <div className="absolute inset-0 z-0">
                                            <Image
                                                src={pkg.image}
                                                alt={pkg.name}
                                                fill
                                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/80 to-stone-900/30" />
                                        </div>

                                        <div className="relative z-10 p-8 flex flex-col h-full text-white">
                                            {/* Header */}
                                            <div className="mb-6">
                                                <div className={`inline-flex p-3 rounded-2xl bg-white/10 backdrop-blur-md mb-6 border border-white/10 group-hover:bg-white/20 transition-colors`}>
                                                    <Icon className="w-6 h-6 text-[#e3d5b5]" />
                                                </div>
                                                <h3 className="text-3xl font-serif mb-2 tracking-tight text-[#f4f1ea] drop-shadow-md">
                                                    {pkg.name}
                                                </h3>
                                                <p className="text-[#e3d5b5] font-medium tracking-wide text-sm uppercase">
                                                    {pkg.tagline}
                                                </p>
                                            </div>

                                            {/* Description */}
                                            <p className="text-white/80 font-light mb-8 leading-relaxed border-b border-white/10 pb-8">
                                                {pkg.description}
                                            </p>

                                            {/* Includes List */}
                                            <div className="mb-8 flex-grow">
                                                <p className="text-xs font-bold text-[#e3d5b5] mb-4 uppercase tracking-widest opacity-80">
                                                    Package Highlights
                                                </p>
                                                <ul className="space-y-3">
                                                    {pkg.includes.slice(0, 5).map((item, i) => (
                                                        <li key={i} className="flex items-start gap-3 text-sm text-white/90">
                                                            <Check className="w-4 h-4 text-[#e3d5b5] flex-shrink-0 mt-0.5" />
                                                            <span className="font-light">{item}</span>
                                                        </li>
                                                    ))}
                                                    {pkg.includes.length > 5 && (
                                                        <li className="text-xs text-white/50 italic pl-7 pt-1">
                                                            And more...
                                                        </li>
                                                    )}
                                                </ul>
                                            </div>

                                            {/* Price & CTA */}
                                            <div className="pt-6">
                                                <div className="flex items-end justify-between mb-6">
                                                    <div>
                                                        <p className="text-white/60 text-xs mb-1">{pkg.duration}</p>
                                                        <p className="text-3xl font-serif text-white">
                                                            {pkg.price}
                                                        </p>
                                                    </div>
                                                </div>

                                                <button
                                                    onClick={() => openForm(pkg.name)}
                                                    className="w-full group/btn relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-bold text-white rounded-full bg-gradient-to-r from-[#8b7355] to-[#6b5744] shadow-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,115,85,0.4)] hover:scale-[1.02]"
                                                >
                                                    <span className="w-full h-full absolute top-0 left-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite]" />
                                                    <span className="relative tracking-widest text-sm uppercase">Reserve Now</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Add-Ons Section - Editorial Menu Style */}
            <section className="relative py-32 px-6 overflow-hidden">
                {/* Parallax Background */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://hdblob1.blob.core.windows.net/hermit/DSCN0174.JPG"
                        alt="Enhancements"
                        fill
                        className="object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-warm-white via-warm-white/95 to-warm-white/80" />
                </div>

                <div className="max-w-5xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6"
                    >
                        <div>
                            <span className="text-sage-dark font-bold tracking-[0.2em] text-xs uppercase block mb-4">
                                Curated Enhancements
                            </span>
                            <h2 className="text-5xl md:text-6xl font-serif text-stone-800 tracking-tight">
                                Deepen Your<br />
                                <span className="italic text-sage-dark">Journey</span>
                            </h2>
                        </div>
                        <p className="text-stone-600 font-light max-w-sm text-lg text-right md:text-left">
                            Select these sacred additions to personalize your retreat experience.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
                        {addOns.map((addon, index) => {
                            const Icon = addon.icon;
                            return (
                                <motion.div
                                    key={addon.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group flex items-start justify-between border-b border-stone-300 pb-6 hover:border-sage duration-500"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 p-2 bg-sage/5 rounded-full text-sage-dark/70 group-hover:bg-sage/10 group-hover:text-sage-dark transition-colors">
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-serif text-stone-800 mb-1 group-hover:text-sage-dark transition-colors">{addon.name}</h3>
                                            <p className="text-stone-500 text-sm font-light">Available upon request</p>
                                        </div>
                                    </div>
                                    <span className="text-xl font-medium text-sage-dark font-serif">{addon.price}</span>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Custom Retreats - Immersive Parallax */}
            <section className="relative py-40 px-6 overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://hdblob1.blob.core.windows.net/hermit/hermit (25).jpg"
                        alt="Group Retreat"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-stone-900/40 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-stone-900/20" />
                </div>

                <div className="max-w-4xl mx-auto text-center relative z-10 text-white">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="p-10 md:p-16 border border-white/20 bg-white/5 backdrop-blur-sm rounded-[3rem]"
                    >
                        <Users className="w-12 h-12 text-[#d4b483] mx-auto mb-8" />
                        <h2 className="text-5xl md:text-7xl font-serif mb-8 text-[#f4f1ea] leading-tight">
                            Collective<br /><span className="italic text-[#d4b483]">Sanctuary</span>
                        </h2>
                        <p className="text-xl text-white/90 font-light mb-10 leading-relaxed max-w-2xl mx-auto">
                            Design a bespoke retreat for your team or family. We curate the entire experience to align with your group's shared intention.
                        </p>
                        <button
                            onClick={() => openForm("Custom Group Retreat")}
                            className="px-12 py-5 bg-[#d4b483] text-stone-900 rounded-full hover:bg-[#e6d2a0] transition-colors duration-300 text-sm tracking-[0.2em] uppercase font-bold shadow-[0_0_40px_rgba(212,180,131,0.3)] hover:shadow-[0_0_60px_rgba(212,180,131,0.5)]"
                        >
                            Inquire for Groups
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* What's Included Globally - Premium Grid */}
            <section className="relative py-32 px-6 bg-[#313b2c] text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')"
                }} />

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-4xl md:text-5xl font-serif mb-6 tracking-tight text-[#f4f1ea]" style={{ fontWeight: 300 }}>
                            The Standard of
                            <span className="text-[#d4b483] italic"> Sanctuary</span>
                        </h2>
                        <p className="text-xl text-white/60 font-light max-w-2xl mx-auto">
                            Every retreat at Hermit's Lair includes these foundational elements
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {[
                            { icon: Heart, title: "Nourishing Mechanics", desc: "Chef-prepared vegetarian meals using estate-grown produce." },
                            { icon: Mountain, title: "Sacred Access", desc: "Private access to ancient meditation caves and hidden trails." },
                            { icon: Sparkles, title: "Guided Wisdom", desc: "Daily morning and evening meditation sessions with our residents." },
                            { icon: Moon, title: "Restorative Sleep", desc: "Luxury bedding in climate-controlled, sound-insulated suites." },
                        ].map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="relative group text-center"
                                >
                                    <div className="absolute inset-0 bg-white/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="relative">
                                        <div className="inline-flex p-5 rounded-full border border-[#d4b483]/30 bg-[#d4b483]/10 mb-6 group-hover:scale-110 transition-transform duration-300">
                                            <Icon className="w-8 h-8 text-[#d4b483]" />
                                        </div>
                                        <h3 className="text-2xl font-serif text-[#f4f1ea] mb-4">{item.title}</h3>
                                        <p className="text-white/60 font-light leading-relaxed px-4">{item.desc}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <BookingFormModal
                isOpen={isFormOpen}
                onClose={closeForm}
                selectedPackage={selectedPackage}
            />

            <Footer />
        </main >
    );
}
