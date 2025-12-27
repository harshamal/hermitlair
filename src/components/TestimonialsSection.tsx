"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Mitchell",
        location: "London, UK",
        text: "The most peaceful place I've ever experienced. Every morning felt like a gift, and the silence was truly transformative. I left feeling renewed.",
        rating: 5,
        image: "SM",
    },
    {
        name: "David Chen",
        location: "Singapore",
        text: "Hermit's Lair exceeded all expectations. The attention to detail, the serenity of the location, and the warmth of the hospitality made this unforgettable.",
        rating: 5,
        image: "DC",
    },
    {
        name: "Emma Rodriguez",
        location: "Barcelona, Spain",
        text: "A sanctuary in the truest sense. I came seeking clarity and found so much more. The mountains, the stillness, the beauty—it all stays with you.",
        rating: 5,
        image: "ER",
    },
];

export default function TestimonialsSection() {
    return (
        <section className="relative py-32 px-6 bg-gradient-to-b from-linen via-mist to-warm-white overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-sage/20 to-transparent" />
            <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-champagne/20 to-transparent" />

            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <span className="text-wood uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Testimonies</span>
                    <h2 className="text-5xl md:text-7xl font-[family-name:var(--font-cinzel)] text-stone mb-6">
                        Stories from <span className="text-sage-dark italic">Our Guests</span>
                    </h2>
                    <p className="text-lg text-stone-light font-light max-w-2xl mx-auto font-[family-name:var(--font-cormorant)] italic text-2xl">
                        Discover what makes Hermit's Lair unforgettable
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="group relative"
                        >
                            <div className="relative p-8 rounded-3xl glass-light border border-white/40 shadow-premium hover:shadow-premium-lg transition-all duration-500 h-full flex flex-col">
                                {/* Quote Icon */}
                                <div className="mb-6">
                                    <Quote className="w-10 h-10 text-champagne/40" strokeWidth={1.5} />
                                </div>

                                {/* Rating */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-champagne text-champagne" />
                                    ))}
                                </div>

                                {/* Testimonial Text */}
                                <p className="text-stone font-light leading-relaxed mb-6 flex-grow italic">
                                    "{testimonial.text}"
                                </p>

                                {/* Author Info */}
                                <div className="flex items-center gap-4 pt-6 border-t border-sage/10">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sage to-champagne flex items-center justify-center text-white font-medium">
                                        {testimonial.image}
                                    </div>
                                    <div>
                                        <p className="font-medium text-shadow">
                                            {testimonial.name}
                                        </p>
                                        <p className="text-sm text-stone-light font-light">
                                            {testimonial.location}
                                        </p>
                                    </div>
                                </div>

                                {/* Hover Effect */}
                                <div className="absolute inset-0 rounded-3xl border-2 border-sage/0 group-hover:border-sage/20 transition-colors duration-500 pointer-events-none" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Trust Indicators */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-20 text-center"
                >
                    <div className="inline-flex flex-wrap items-center justify-center gap-8 px-8 py-6 rounded-full glass-sage border border-sage/20">
                        <div className="text-center">
                            <p className="text-3xl font-serif text-sage-dark mb-1">500+</p>
                            <p className="text-xs tracking-wider uppercase text-stone-light font-light">Happy Guests</p>
                        </div>
                        <div className="w-px h-12 bg-sage/20" />
                        <div className="text-center">
                            <p className="text-3xl font-serif text-sage-dark mb-1">4.9</p>
                            <p className="text-xs tracking-wider uppercase text-stone-light font-light">Average Rating</p>
                        </div>
                        <div className="w-px h-12 bg-sage/20" />
                        <div className="text-center">
                            <p className="text-3xl font-serif text-sage-dark mb-1">98%</p>
                            <p className="text-xs tracking-wider uppercase text-stone-light font-light">Would Return</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
