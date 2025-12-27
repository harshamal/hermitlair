"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Calendar, Clock, Users } from "lucide-react";

export default function BookingSection() {
    return (
        <section id="visit" className="relative py-32 px-6 bg-gradient-to-b from-warm-white to-sage/10 overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-20 left-20 w-72 h-72 bg-champagne/20 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-sage/20 rounded-full blur-3xl" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-shadow mb-6 tracking-tight" style={{ fontWeight: 300 }}>
                        Begin Your
                        <span className="text-sage-dark italic"> Journey</span>
                    </h2>
                    <p className="text-lg md:text-xl text-stone-light font-light max-w-2xl mx-auto leading-relaxed">
                        Your sanctuary in the mountains awaits. Reserve your retreat today.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Booking Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="glass-light rounded-3xl p-8 md:p-10 border border-white/40 shadow-premium-lg"
                    >
                        <h3 className="text-2xl font-serif text-shadow mb-6 tracking-tight">
                            Reserve Your Stay
                        </h3>

                        <form className="space-y-6">
                            {/* Name */}
                            <div>
                                <label className="block text-sm font-medium text-stone mb-2 tracking-wide">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full px-5 py-3.5 rounded-2xl bg-white/60 border border-sage/20 focus:border-sage focus:outline-none focus:ring-2 focus:ring-sage/20 transition-all duration-300 text-shadow placeholder:text-stone-light/50"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-medium text-stone mb-2 tracking-wide">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="w-full px-5 py-3.5 rounded-2xl bg-white/60 border border-sage/20 focus:border-sage focus:outline-none focus:ring-2 focus:ring-sage/20 transition-all duration-300 text-shadow placeholder:text-stone-light/50"
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <label className="block text-sm font-medium text-stone mb-2 tracking-wide">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    placeholder="+1 (555) 000-0000"
                                    className="w-full px-5 py-3.5 rounded-2xl bg-white/60 border border-sage/20 focus:border-sage focus:outline-none focus:ring-2 focus:ring-sage/20 transition-all duration-300 text-shadow placeholder:text-stone-light/50"
                                />
                            </div>

                            {/* Dates */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-stone mb-2 tracking-wide">
                                        Check-in
                                    </label>
                                    <input
                                        type="date"
                                        className="w-full px-5 py-3.5 rounded-2xl bg-white/60 border border-sage/20 focus:border-sage focus:outline-none focus:ring-2 focus:ring-sage/20 transition-all duration-300 text-shadow"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-stone mb-2 tracking-wide">
                                        Check-out
                                    </label>
                                    <input
                                        type="date"
                                        className="w-full px-5 py-3.5 rounded-2xl bg-white/60 border border-sage/20 focus:border-sage focus:outline-none focus:ring-2 focus:ring-sage/20 transition-all duration-300 text-shadow"
                                    />
                                </div>
                            </div>

                            {/* Guests */}
                            <div>
                                <label className="block text-sm font-medium text-stone mb-2 tracking-wide">
                                    Number of Guests
                                </label>
                                <select className="w-full px-5 py-3.5 rounded-2xl bg-white/60 border border-sage/20 focus:border-sage focus:outline-none focus:ring-2 focus:ring-sage/20 transition-all duration-300 text-shadow">
                                    <option>1 Guest</option>
                                    <option>2 Guests</option>
                                    <option>3 Guests</option>
                                    <option>4 Guests</option>
                                    <option>5+ Guests</option>
                                </select>
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-sm font-medium text-stone mb-2 tracking-wide">
                                    Special Requests (Optional)
                                </label>
                                <textarea
                                    rows={4}
                                    placeholder="Let us know how we can make your stay perfect..."
                                    className="w-full px-5 py-3.5 rounded-2xl bg-white/60 border border-sage/20 focus:border-sage focus:outline-none focus:ring-2 focus:ring-sage/20 transition-all duration-300 text-shadow placeholder:text-stone-light/50 resize-none"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="group w-full relative px-8 py-4 bg-sage text-white rounded-full overflow-hidden transition-all duration-500 hover:shadow-premium-lg hover:scale-[1.02]"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-sage-dark to-sage translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                <span className="relative text-sm tracking-widest uppercase font-medium flex items-center justify-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    Request Booking
                                </span>
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Info & Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        {/* Contact Cards */}
                        <div className="glass-light rounded-3xl p-8 border border-white/40 shadow-premium">
                            <h3 className="text-xl font-serif text-shadow mb-6 tracking-tight">
                                Get in Touch
                            </h3>
                            <div className="space-y-4">
                                <a href="#" className="flex items-start gap-4 group">
                                    <div className="p-3 rounded-xl bg-sage/10 group-hover:bg-sage/20 transition-colors">
                                        <MapPin className="w-5 h-5 text-sage-dark" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-shadow mb-1">Location</p>
                                        <p className="text-sm text-stone-light font-light">
                                            Dimbulagala, Sri Lanka
                                        </p>
                                    </div>
                                </a>

                                <a href="tel:+94123456789" className="flex items-start gap-4 group">
                                    <div className="p-3 rounded-xl bg-champagne/10 group-hover:bg-champagne/20 transition-colors">
                                        <Phone className="w-5 h-5 text-champagne" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-shadow mb-1">Phone</p>
                                        <p className="text-sm text-stone-light font-light">
                                            +94 (123) 456-789
                                        </p>
                                    </div>
                                </a>

                                <a href="mailto:hello@hermitslair.com" className="flex items-start gap-4 group">
                                    <div className="p-3 rounded-xl bg-wood/10 group-hover:bg-wood/20 transition-colors">
                                        <Mail className="w-5 h-5 text-wood" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-shadow mb-1">Email</p>
                                        <p className="text-sm text-stone-light font-light">
                                            hello@hermitslair.com
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Quick Info */}
                        <div className="glass-light rounded-3xl p-8 border border-white/40 shadow-premium">
                            <h3 className="text-xl font-serif text-shadow mb-6 tracking-tight">
                                Good to Know
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <Clock className="w-5 h-5 text-sage-dark mt-0.5" />
                                    <div>
                                        <p className="font-medium text-shadow mb-1">Check-in / Check-out</p>
                                        <p className="text-sm text-stone-light font-light">
                                            2:00 PM / 11:00 AM
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <Users className="w-5 h-5 text-champagne mt-0.5" />
                                    <div>
                                        <p className="font-medium text-shadow mb-1">Capacity</p>
                                        <p className="text-sm text-stone-light font-light">
                                            Up to 6 guests comfortably
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Trust Badge */}
                        <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-sage/10 to-champagne/10 border border-sage/20">
                            <p className="text-sm text-stone-light font-light mb-2">
                                ✨ Trusted by travelers worldwide
                            </p>
                            <p className="text-xs text-stone-light/70 font-light">
                                Secure booking • Instant confirmation • Flexible cancellation
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
