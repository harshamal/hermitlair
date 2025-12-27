"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, Moon, Sun, Mountain, Heart, Users, Calendar } from "lucide-react";
import Footer from "@/components/Footer";

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
    return (
        <main className="bg-warm-white min-h-screen">
            {/* Hero Section */}
            <section className="relative py-32 px-6 bg-gradient-to-b from-shadow to-stone overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sage/30 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-champagne/30 rounded-full blur-3xl" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative z-10 text-center max-w-4xl mx-auto"
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
            </section>

            {/* Packages Grid */}
            <section className="relative py-32 px-6 bg-gradient-to-b from-cream via-warm-white to-linen">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8">
                        {packages.map((pkg, index) => {
                            const Icon = pkg.icon;
                            return (
                                <motion.div
                                    key={pkg.name}
                                    initial={{ opacity: 0, y: 60 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    className="relative group"
                                >
                                    {/* Featured Badge */}
                                    {pkg.featured && (
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                                            <div className="px-6 py-2 bg-gradient-to-r from-sage to-champagne text-white text-sm font-semibold rounded-full shadow-lg">
                                                Most Popular
                                            </div>
                                        </div>
                                    )}

                                    <div className={`relative h-full p-8 rounded-3xl glass-light border ${pkg.featured ? 'border-sage/40 shadow-premium-lg' : 'border-white/40 shadow-premium'
                                        } hover:shadow-premium-lg transition-all duration-500 ${pkg.featured ? 'md:scale-105' : ''
                                        }`}>
                                        {/* Icon */}
                                        <div className={`inline-flex p-4 rounded-2xl bg-${pkg.color}/10 mb-6`}>
                                            <Icon className={`w-8 h-8 text-${pkg.color}`} />
                                        </div>

                                        {/* Package Info */}
                                        <h3 className="text-3xl font-serif text-shadow mb-2 tracking-tight">
                                            {pkg.name}
                                        </h3>
                                        <p className={`text-${pkg.color} font-medium mb-4`}>
                                            {pkg.tagline}
                                        </p>
                                        <p className="text-stone-light font-light mb-6">
                                            {pkg.description}
                                        </p>

                                        {/* Duration & Price */}
                                        <div className="mb-6 pb-6 border-b border-sage/10">
                                            <p className="text-sm text-stone-light mb-2">{pkg.duration}</p>
                                            <p className="text-4xl font-serif text-shadow">
                                                {pkg.price}
                                                <span className="text-lg text-stone-light font-light"> /person</span>
                                            </p>
                                        </div>

                                        {/* Includes */}
                                        <div className="mb-6">
                                            <p className="text-sm font-semibold text-stone mb-4 uppercase tracking-wider">
                                                What's Included
                                            </p>
                                            <ul className="space-y-3">
                                                {pkg.includes.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-3">
                                                        <Check className={`w-5 h-5 text-${pkg.color} flex-shrink-0 mt-0.5`} />
                                                        <span className="text-stone-light font-light text-sm">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Ideal For */}
                                        <div className={`p-4 rounded-2xl bg-${pkg.color}/5 mb-6`}>
                                            <p className="text-xs font-semibold text-stone mb-2 uppercase tracking-wider">
                                                Ideal For
                                            </p>
                                            <p className="text-sm text-stone-light font-light">
                                                {pkg.ideal}
                                            </p>
                                        </div>

                                        {/* CTA Button */}
                                        <button
                                            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                                            className={`w-full py-4 bg-${pkg.color} text-white rounded-full hover:shadow-lg transition-all duration-300 font-medium`}
                                        >
                                            Begin This Journey
                                        </button>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Add-Ons Section */}
            <section className="relative py-32 px-6 bg-gradient-to-b from-linen to-mist">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-serif text-shadow mb-6 tracking-tight" style={{ fontWeight: 300 }}>
                            Enhance Your
                            <span className="text-sage-dark italic"> Experience</span>
                        </h2>
                        <p className="text-lg text-stone-light font-light max-w-2xl mx-auto">
                            Add these special experiences to deepen your journey
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {addOns.map((addon, index) => {
                            const Icon = addon.icon;
                            return (
                                <motion.div
                                    key={addon.name}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="p-6 rounded-2xl glass-light border border-white/40 shadow-premium hover:shadow-premium-lg transition-all duration-300"
                                >
                                    <Icon className="w-8 h-8 text-champagne mb-4" />
                                    <h3 className="text-xl font-serif text-shadow mb-2">{addon.name}</h3>
                                    <p className="text-2xl font-semibold text-sage-dark">{addon.price}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Custom Retreats CTA */}
            <section className="relative py-32 px-6 bg-gradient-to-b from-mist to-warm-white">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="p-12 rounded-3xl bg-gradient-to-br from-sage/20 to-champagne/20 border border-sage/30 shadow-premium-lg"
                    >
                        <Users className="w-16 h-16 text-sage-dark mx-auto mb-6" />
                        <h2 className="text-4xl font-serif text-shadow mb-6">
                            Custom Group Retreats
                        </h2>
                        <p className="text-lg text-stone-light font-light mb-8 leading-relaxed">
                            Planning a retreat for your team, family, or community? We create bespoke experiences
                            tailored to your group's unique needs and intentions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="#contact"
                                className="px-10 py-4 bg-sage text-white rounded-full hover:shadow-premium-lg transition-all duration-300 text-sm tracking-widest uppercase font-medium"
                            >
                                Inquire About Custom Retreats
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* What's Included Globally */}
            <section className="relative py-32 px-6 bg-warm-white">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-serif text-shadow mb-6 tracking-tight" style={{ fontWeight: 300 }}>
                            Every Journey Includes
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Heart, title: "Nourishing Meals", desc: "Locally sourced, vegetarian cuisine" },
                            { icon: Mountain, title: "Sacred Spaces", desc: "Access to meditation caves & nature trails" },
                            { icon: Sparkles, title: "Daily Practices", desc: "Guided meditation & mindful movement" },
                            { icon: Moon, title: "Peaceful Sleep", desc: "Comfortable rooms with mountain views" },
                        ].map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="text-center"
                                >
                                    <div className="inline-flex p-4 rounded-2xl bg-sage/10 mb-4">
                                        <Icon className="w-8 h-8 text-sage-dark" />
                                    </div>
                                    <h3 className="text-xl font-serif text-shadow mb-2">{item.title}</h3>
                                    <p className="text-stone-light font-light">{item.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
