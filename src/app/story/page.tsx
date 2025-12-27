"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Mountain, Sparkles, Moon, Sun, Wind, Leaf } from "lucide-react";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function StoryPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.4], [1, 0.5, 0]);
    const opacity2 = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 0]);
    const opacity3 = useTransform(scrollYProgress, [0.6, 0.8, 1], [0, 1, 1]);

    return (
        <main ref={containerRef} className="bg-warm-white min-h-screen">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-shadow to-stone">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://hdblob1.blob.core.windows.net/hermit/DSCN0283.JPG"
                        alt="Dimbulagala Mountain"
                        fill
                        className="object-cover opacity-40"
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
                        <Sparkles className="w-4 h-4 text-white" />
                        <span className="text-sm tracking-[0.3em] uppercase text-white font-semibold">
                            The Sacred Mountain
                        </span>
                    </div>

                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-tight tracking-tight"
                        style={{
                            fontWeight: 300,
                            textShadow: "0 4px 24px rgba(0,0,0,0.9), 0 2px 12px rgba(0,0,0,0.7)",
                        }}
                    >
                        The Legend of
                        <br />
                        <span className="italic">Dimbulagala</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-white font-light leading-relaxed"
                        style={{
                            textShadow: "0 2px 12px rgba(0,0,0,0.8)",
                        }}
                    >
                        A 2,500-year journey from ancient hermits to modern seekers
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

            {/* Chapter 1: The Discovery */}
            <section className="relative py-32 px-6 bg-gradient-to-b from-stone via-warm-white to-linen">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        style={{ opacity: opacity1 }}
                        className="space-y-12"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-4 rounded-2xl bg-sage/10">
                                <Mountain className="w-8 h-8 text-sage-dark" />
                            </div>
                            <div>
                                <p className="text-sm tracking-widest uppercase text-sage-dark font-semibold">Chapter One</p>
                                <h2 className="text-4xl font-serif text-shadow">The Discovery</h2>
                            </div>
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-xl text-stone-light font-light leading-relaxed mb-6">
                                In the 5th century BC, when the Buddha's teachings first reached the shores of Sri Lanka,
                                wandering monks sought places of profound stillness to deepen their practice. They walked
                                for days through dense jungle, guided by something beyond maps or logic.
                            </p>

                            <p className="text-xl text-stone-light font-light leading-relaxed mb-6">
                                Then they saw it: a massive rock formation rising 545 meters above the earth, its surface
                                weathered by millennia of wind and rain. The locals called it "Dimbulagala"—the Cloud Rock—
                                for the mists that crowned its peak each dawn.
                            </p>

                            <div className="p-8 rounded-3xl glass-sage border border-sage/20 my-12">
                                <p className="text-2xl font-serif text-shadow italic text-center leading-relaxed">
                                    "Here," they said, "the earth touches the sky.
                                    <br />
                                    Here, we will find what we seek."
                                </p>
                            </div>

                            <p className="text-xl text-stone-light font-light leading-relaxed">
                                They were right. The mountain possessed an energy unlike anywhere else—a silence so deep
                                it seemed to pulse with life. They carved meditation caves into the rock face, built simple
                                shelters, and devoted themselves to the path of enlightenment.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Chapter 2: The Hermits */}
            <section className="relative py-32 px-6 bg-gradient-to-b from-linen via-mist to-cream">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        style={{ opacity: opacity2 }}
                        className="space-y-12"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-4 rounded-2xl bg-champagne/10">
                                <Moon className="w-8 h-8 text-champagne" />
                            </div>
                            <div>
                                <p className="text-sm tracking-widest uppercase text-champagne font-semibold">Chapter Two</p>
                                <h2 className="text-4xl font-serif text-shadow">The Hermits</h2>
                            </div>
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-xl text-stone-light font-light leading-relaxed mb-6">
                                Over centuries, Dimbulagala became legendary. Monks who sought the deepest truths came here
                                to live as hermits—renouncing all contact with the world below, owning nothing but their robes,
                                eating only what the forest provided.
                            </p>

                            <p className="text-xl text-stone-light font-light leading-relaxed mb-6">
                                They meditated in caves. They walked barefoot on ancient paths. They watched the sun rise
                                and set over the endless green canopy. Days became weeks, weeks became years, years became
                                lifetimes. Time moved differently on the mountain.
                            </p>

                            <div className="grid md:grid-cols-2 gap-8 my-12">
                                <div className="p-6 rounded-2xl glass-light border border-sage/20">
                                    <Sun className="w-12 h-12 text-champagne mb-4" />
                                    <h3 className="text-xl font-serif text-shadow mb-3">The Morning Ritual</h3>
                                    <p className="text-stone-light font-light">
                                        Before dawn, they would sit in absolute stillness, watching darkness give way to light,
                                        feeling the mountain awaken.
                                    </p>
                                </div>
                                <div className="p-6 rounded-2xl glass-light border border-sage/20">
                                    <Wind className="w-12 h-12 text-sage-dark mb-4" />
                                    <h3 className="text-xl font-serif text-shadow mb-3">The Walking Meditation</h3>
                                    <p className="text-stone-light font-light">
                                        Each step a prayer, each breath a blessing. The forest paths became sacred corridors
                                        between earth and enlightenment.
                                    </p>
                                </div>
                            </div>

                            <p className="text-xl text-stone-light font-light leading-relaxed">
                                What did they discover in all that silence? Peace, certainly. Clarity, undoubtedly. But also
                                something more profound: the realization that everything they'd been seeking was already within
                                them. The mountain didn't give them enlightenment—it simply removed everything that obscured it.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Chapter 3: The Legacy */}
            <section className="relative py-32 px-6 bg-gradient-to-b from-cream to-warm-white">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        style={{ opacity: opacity3 }}
                        className="space-y-12"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-4 rounded-2xl bg-sage/10">
                                <Leaf className="w-8 h-8 text-sage-dark" />
                            </div>
                            <div>
                                <p className="text-sm tracking-widest uppercase text-sage-dark font-semibold">Chapter Three</p>
                                <h2 className="text-4xl font-serif text-shadow">The Legacy Lives On</h2>
                            </div>
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-xl text-stone-light font-light leading-relaxed mb-6">
                                Today, 2,500 years later, the caves remain. The paths are still walked. The mountain continues
                                to call to those who need it most. But now, there's a new chapter in the story of Dimbulagala.
                            </p>

                            <p className="text-xl text-stone-light font-light leading-relaxed mb-6">
                                Hermit's Lair was created to honor this sacred legacy while making it accessible to modern
                                seekers. We've built a sanctuary that bridges ancient wisdom and contemporary comfort—a place
                                where you can experience what those hermit monks discovered, without renouncing the world entirely.
                            </p>

                            <div className="p-12 rounded-3xl bg-gradient-to-br from-sage/20 to-champagne/20 border border-sage/30 shadow-premium-lg my-12">
                                <h3 className="text-3xl font-serif text-shadow mb-6 text-center">
                                    The Mountain Still Calls
                                </h3>
                                <p className="text-xl text-stone-light font-light leading-relaxed text-center mb-8">
                                    Perhaps you've felt it—that quiet whisper beneath the noise of daily life. The longing for
                                    stillness. The hunger for meaning. The need to remember who you are when no one's watching.
                                </p>
                                <p className="text-xl text-shadow font-normal text-center">
                                    That's the mountain calling. And we're here to help you answer.
                                </p>
                            </div>

                            <div className="text-center mt-16">
                                <a
                                    href="/"
                                    className="inline-block px-10 py-4 bg-sage text-white rounded-full hover:shadow-premium-lg transition-all duration-300 text-sm tracking-widest uppercase font-medium"
                                >
                                    Begin Your Journey
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </main>
    );
}
