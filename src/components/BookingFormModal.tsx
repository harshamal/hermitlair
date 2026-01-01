"use client";

import { useForm, ValidationError } from '@formspree/react';
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, Loader2, X } from "lucide-react";

interface BookingFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    selectedPackage: string | null;
}

export default function BookingFormModal({ isOpen, onClose, selectedPackage }: BookingFormModalProps) {
    const [state, handleSubmit] = useForm("mwvpezvj");

    if (state.succeeded) {
        return (
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={onClose}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative bg-stone-900 border border-white/10 rounded-[2.5rem] shadow-2xl p-12 text-center max-w-lg"
                        >
                            <div className="w-20 h-20 bg-[#d4b483]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Check className="w-10 h-10 text-[#d4b483]" />
                            </div>
                            <h2 className="text-3xl font-serif text-white mb-4">Request Received</h2>
                            <p className="text-white/70 font-light mb-8">
                                Thank you. We will contact you shortly to confirm your retreat.
                            </p>
                            <button
                                onClick={() => window.location.reload()}
                                className="text-[#d4b483] font-medium hover:text-white transition-colors text-sm uppercase tracking-widest"
                            >
                                Close & Refresh
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        );
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-stone-900 border border-white/10 rounded-[2.5rem] shadow-2xl p-8 md:p-12 no-scrollbar"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-8 right-8 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="text-center mb-10">
                            <span className="text-[#d4b483] text-xs font-bold tracking-[0.2em] uppercase block mb-3">Begin Your Journey</span>
                            <h3 className="text-4xl font-serif text-white tracking-tight">
                                Reserve Your Stay
                            </h3>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <input type="hidden" name="package" value={selectedPackage || "Not Selected"} />

                            <div>
                                <label className="block text-xs font-bold text-[#d4b483] uppercase tracking-widest mb-2 ml-1">Full Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="Enter your name"
                                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-[#d4b483] focus:outline-none focus:ring-1 focus:ring-[#d4b483]/50 transition-all duration-300"
                                />
                                <ValidationError prefix="Name" field="name" errors={state.errors} />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold text-[#d4b483] uppercase tracking-widest mb-2 ml-1">Email</label>
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="hello@example.com"
                                        className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-[#d4b483] focus:outline-none focus:ring-1 focus:ring-[#d4b483]/50 transition-all duration-300"
                                    />
                                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-[#d4b483] uppercase tracking-widest mb-2 ml-1">Phone</label>
                                    <input
                                        id="phone"
                                        type="tel"
                                        name="phone"
                                        placeholder="+94 ..."
                                        className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-[#d4b483] focus:outline-none focus:ring-1 focus:ring-[#d4b483]/50 transition-all duration-300"
                                    />
                                    <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold text-[#d4b483] uppercase tracking-widest mb-2 ml-1">Date</label>
                                    <input
                                        id="date"
                                        type="date"
                                        name="date"
                                        className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white scheme-dark focus:border-[#d4b483] focus:outline-none focus:ring-1 focus:ring-[#d4b483]/50 transition-all duration-300"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-[#d4b483] uppercase tracking-widest mb-2 ml-1">Guests</label>
                                    <select
                                        name="guests"
                                        className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:border-[#d4b483] focus:outline-none focus:ring-1 focus:ring-[#d4b483]/50 transition-all duration-300 [&>option]:bg-stone-900"
                                    >
                                        <option value="1">1 Seeker</option>
                                        <option value="2">2 Seekers</option>
                                        <option value="3">3 Seekers</option>
                                        <option value="4+">Group (4+)</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-[#d4b483] uppercase tracking-widest mb-2 ml-1">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    placeholder="Any special requests..."
                                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-[#d4b483] focus:outline-none focus:ring-1 focus:ring-[#d4b483]/50 transition-all duration-300 resize-none"
                                />
                                <ValidationError prefix="Message" field="message" errors={state.errors} />
                            </div>

                            <div className="p-4 rounded-2xl bg-[#d4b483]/10 border border-[#d4b483]/20 flex items-center justify-between">
                                <span className="text-sm text-[#d4b483] font-medium">Selected Experience:</span>
                                <span className="text-sm font-serif text-white font-bold tracking-wide">
                                    {selectedPackage || "None Selected"}
                                </span>
                            </div>

                            <button
                                type="submit"
                                disabled={state.submitting}
                                className="group w-full relative px-8 py-5 bg-[#d4b483] text-stone-900 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,180,131,0.4)] disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                <span className="relative text-xs tracking-[0.2em] uppercase font-bold flex items-center justify-center gap-3">
                                    {state.submitting ? (
                                        <>
                                            <Loader2 className="w-4 h-4 animate-spin" />
                                            Sending Request...
                                        </>
                                    ) : (
                                        <>
                                            Request Booking
                                            <ArrowRight className="w-4 h-4" />
                                        </>
                                    )}
                                </span>
                            </button>
                        </form>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
