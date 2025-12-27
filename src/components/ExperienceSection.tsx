"use client";

import { motion } from "framer-motion";
import { Sunrise, Wind, Coffee, BookOpen, Mountain, Sparkles } from "lucide-react";

const experiences = [
    {
        icon: Sunrise,
        title: "Morning Rituals",
        description: "Wake to golden light filtering through mountain mist",
        color: "champagne",
    },
    {
        icon: Wind,
        title: "Mountain Air",
        description: "Breathe deeply in nature's purest sanctuary",
        color: "sage",
    },
    {
        icon: Coffee,
        title: "Mindful Moments",
        description: "Savor stillness with your morning brew",
        color: "wood",
    },
    {
        icon: BookOpen,
        title: "Quiet Reflection",
        description: "Find clarity in the embrace of silence",
        color: "champagne",
    },
    {
        icon: Mountain,
        title: "Nature Walks",
        description: "Wander ancient paths through untouched wilderness",
        color: "sage",
    },
    {
        icon: Sparkles,
        title: "Starlit Evenings",
        description: "Watch the cosmos unfold above you",
        color: "wood",
    },
];

export default function ExperienceSection() {
    return (
        <section className="relative py-32 px-6 bg-gradient-to-b from-cream via-warm-white to-linen overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-20 right-10 w-96 h-96 bg-sage/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-champagne/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-sage border border-sage/20 mb-6">
                        <Sparkles className="w-4 h-4 text-sage-dark" />
                        <span className="text-xs tracking-[0.3em] uppercase text-stone font-light">
                            The Experience
                        </span>
                    </div>

                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-shadow mb-6 tracking-tight" style={{ fontWeight: 300 }}>
                        Moments That
                        <span className="text-sage-dark italic"> Matter</span>
                    </h2>

                    <p className="text-lg md:text-xl text-stone-light font-light max-w-2xl mx-auto leading-relaxed">
                        Every detail crafted to nurture your soul and restore your spirit
                    </p>
                </motion.div>

                {/* Experience Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {experiences.map((experience, index) => {
                        const Icon = experience.icon;
                        return (
                            <motion.div
                                key={experience.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                className="group relative"
                            >
                                <div className="relative p-8 rounded-3xl glass-light border border-white/40 shadow-premium hover:shadow-premium-lg transition-all duration-500 h-full">
                                    {/* Icon Container */}
                                    <div className="mb-6 relative">
                                        <div className={`inline-flex p-4 rounded-2xl bg-${experience.color}/10 group-hover:bg-${experience.color}/20 transition-colors duration-300`}>
                                            <Icon className={`w-7 h-7 text-${experience.color}`} strokeWidth={1.5} />
                                        </div>

                                        {/* Subtle glow effect */}
                                        <div className={`absolute inset-0 bg-${experience.color}/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-2xl font-serif text-shadow mb-3 tracking-tight" style={{ fontWeight: 400 }}>
                                        {experience.title}
                                    </h3>
                                    <p className="text-stone-light font-light leading-relaxed">
                                        {experience.description}
                                    </p>

                                    {/* Hover Border Effect */}
                                    <div className="absolute inset-0 rounded-3xl border-2 border-sage/0 group-hover:border-sage/20 transition-colors duration-500" />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-center mt-20"
                >
                    <p className="text-stone-light/70 font-light mb-6 text-lg">
                        Ready to begin your journey?
                    </p>
                    <button
                        onClick={() => document.getElementById("visit")?.scrollIntoView({ behavior: "smooth" })}
                        className="group relative px-10 py-4 bg-sage text-white rounded-full overflow-hidden transition-all duration-500 hover:shadow-premium-lg hover:scale-105"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-sage-dark to-sage translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                        <span className="relative text-sm tracking-widest uppercase font-medium">
                            Reserve Your Retreat
                        </span>
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
