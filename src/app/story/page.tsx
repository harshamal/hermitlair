"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Mountain, Sparkles, Moon, Sun, Wind, Leaf } from "lucide-react";
import Image from "next/image";
import Footer from "@/components/Footer";
import LivingMapSection from "@/components/LivingMapSection";

export default function StoryPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    // Removed legacy scroll/opacity transforms to fix visibility issues

    return (
        <main ref={containerRef} className="bg-warm-white min-h-screen">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-shadow to-stone">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://hdblob1.blob.core.windows.net/hermit/dimbulagala_cross_section_masterpiece_1767210448029.png"
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
            <section className="relative py-32 px-6 overflow-hidden">
                {/* Background Element */}
                <div className="absolute inset-0 bg-[#f4f1ea]">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#8b7355]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#617a55]/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
                    <div className="absolute inset-0 opacity-[0.9]" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/concrete-wall.png')" }} />
                </div>

                <div className="max-w-[1400px] mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="grid lg:grid-cols-2 gap-16 items-center"
                    >
                        {/* Visual Side */}
                        <div className="relative order-2 lg:order-1">
                            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
                                <Image
                                    src="https://hdblob1.blob.core.windows.net/hermit/monk_cliff.png"
                                    alt="Ancient Discovery"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-1000"
                                />
                                {/* Clean Gradient for Text Visibility */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />

                                {/* Overlay Badge */}
                                <div className="absolute bottom-8 left-8 right-8 p-6 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl text-white">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Sparkles className="w-5 h-5 text-amber-200" />
                                        <span className="text-xs tracking-[0.2em] font-medium uppercase text-amber-100">Sacred Grounds</span>
                                    </div>
                                    <p className="font-[family-name:var(--font-cormorant)] text-xl italic leading-relaxed">
                                        "Where the earth touches the sky, there we shall find what we seek."
                                    </p>
                                </div>
                            </div>
                            {/* Decorative Frame */}
                            <div className="absolute -inset-4 border border-[#8b7355]/20 rounded-[2.5rem] -z-10" />
                        </div>

                        {/* Content Side */}
                        <div className="order-1 lg:order-2 lg:pl-10">
                            <div className="inline-flex items-center gap-3 mb-6">
                                <div className="w-12 h-px bg-[#8b7355]" />
                                <span className="text-sm tracking-[0.3em] font-bold text-[#8b7355] uppercase font-[family-name:var(--font-cinzel)]">
                                    Chapter I
                                </span>
                            </div>

                            <h2 className="text-5xl md:text-7xl font-[family-name:var(--font-cinzel)] text-[#4a3f2e] mb-8 leading-[0.9] tracking-tight">
                                The Great <br />
                                <span className="italic text-[#8b7355]">Discovery</span>
                            </h2>

                            <div className="prose prose-lg prose-stone">
                                <p className="text-xl md:text-2xl font-[family-name:var(--font-cormorant)] text-[#5a4a3a] leading-relaxed font-light mb-8">
                                    <span className="text-6xl float-left mr-3 mt-[-10px] text-[#8b7355] font-[family-name:var(--font-cinzel)]">I</span>
                                    n the 5th century BC, when the Buddha's teachings first reached the shores of Sri Lanka, wandering monks sought places of profound stillness. They walked for days through dense jungle, guided by something beyond maps or logic.
                                </p>

                                <p className="text-lg font-[family-name:var(--font-cormorant)] text-[#5a4a3a]/80 leading-relaxed mb-8">
                                    Then they saw it: a massive rock formation rising 545 meters above the earth, its surface weathered by millennia of wind and rain. The locals called it <strong>"Dimbulagala"</strong>, the Cloud Rock, named for the mists that crowned its peak each dawn.
                                </p>

                                <div className="flex gap-4 items-center">
                                    <div className="w-12 h-12 rounded-full border border-[#8b7355]/30 flex items-center justify-center text-[#8b7355]">
                                        <Mountain size={20} />
                                    </div>
                                    <div>
                                        <p className="font-[family-name:var(--font-cinzel)] text-sm font-bold text-[#4a3f2e] uppercase tracking-wider">Elevation</p>
                                        <p className="font-[family-name:var(--font-cormorant)] text-lg text-[#8b7355]">545 Meters Above Sea Level</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* THE MASTERPIECE: Living Map Section */}
            {/* Designed as a cinematic interlude between the discovery and the hermit lifestyle */}
            <LivingMapSection />

            {/* Chapter 2: The Hermits */}
            <section className="relative py-32 px-6 overflow-hidden bg-[#faf9f6]">

                {/* Mountain Shape Divider Top */}
                <div className="absolute top-0 left-0 right-0 h-24 text-[#f4f1ea] -mt-1 transform rotate-180 z-20">
                    <svg viewBox="0 0 1440 320" className="w-full h-full" preserveAspectRatio="none">
                        <path fill="currentColor" fillOpacity="1" d="M0,96L80,112C160,128,320,160,480,160C640,160,800,128,960,112C1120,96,1280,96,1360,96L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                    </svg>
                </div>

                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dust.png')] opacity-40" />

                <div className="max-w-[1400px] mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="grid lg:grid-cols-12 gap-12 lg:gap-24"
                    >
                        {/* Title Column */}
                        <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
                            <div className="inline-flex items-center gap-3 mb-6">
                                <div className="w-12 h-px bg-[#617a55]" />
                                <span className="text-sm tracking-[0.3em] font-bold text-[#617a55] uppercase font-[family-name:var(--font-cinzel)]">
                                    Chapter II
                                </span>
                            </div>

                            <h2 className="text-5xl md:text-7xl font-[family-name:var(--font-cinzel)] text-[#4a3f2e] mb-8 leading-none tracking-tight">
                                The <br />
                                Silent <br />
                                <span className="text-[#8b7355]/40 text-transparent bg-clip-text bg-gradient-to-r from-[#8b7355] to-[#617a55]">Ones</span>
                            </h2>

                            <p className="text-lg font-[family-name:var(--font-cormorant)] text-[#5a4a3a]/80 leading-relaxed italic border-l border-[#617a55]/20 pl-6">
                                "To know the mountain is to become the mountain. Silence is the only language spoken here."
                            </p>
                        </div>

                        {/* Content Column */}
                        <div className="lg:col-span-8 space-y-16 mt-12 lg:mt-0">

                            <p className="text-2xl md:text-3xl font-[family-name:var(--font-cormorant)] text-[#5a4a3a] leading-relaxed font-light">
                                Over centuries, Dimbulagala became legendary. Monks who sought the deepest truths came here to live as hermits, renouncing all contact with the world below, owning nothing but their robes, eating only what the forest provided.
                            </p>

                            {/* Cards */}
                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Card 1 */}
                                <div className="group p-8 rounded-3xl bg-white border border-[#617a55]/10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(97,122,85,0.1)] transition-all duration-500">
                                    <div className="w-14 h-14 rounded-full bg-[#f4f1ea] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <Sun className="w-6 h-6 text-[#d4b483]" />
                                    </div>
                                    <h3 className="text-2xl font-[family-name:var(--font-cinzel)] text-[#4a3f2e] mb-3">The Morning Ritual</h3>
                                    <p className="text-[#5a4a3a]/70 font-[family-name:var(--font-cormorant)] text-lg leading-relaxed">
                                        Before dawn, they would sit in absolute stillness, watching darkness give way to light, feeling the mountain awaken breath by breath.
                                    </p>
                                </div>

                                {/* Card 2 */}
                                <div className="group p-8 rounded-3xl bg-white border border-[#617a55]/10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(97,122,85,0.1)] transition-all duration-500">
                                    <div className="w-14 h-14 rounded-full bg-[#617a55]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <Wind className="w-6 h-6 text-[#617a55]" />
                                    </div>
                                    <h3 className="text-2xl font-[family-name:var(--font-cinzel)] text-[#4a3f2e] mb-3">Walking Meditation</h3>
                                    <p className="text-[#5a4a3a]/70 font-[family-name:var(--font-cormorant)] text-lg leading-relaxed">
                                        Each step a prayer, each breath a blessing. The forest paths became sacred corridors between earth and enlightenment.
                                    </p>
                                </div>
                            </div>

                            {/* Insight Box */}
                            <div className="relative p-10 rounded-[2rem] overflow-hidden bg-gradient-to-br from-[#617a55]/5 to-[#8b7355]/5">
                                <div className="absolute top-0 right-0 p-8 opacity-10">
                                    <Mountain size={120} strokeWidth={0.5} />
                                </div>
                                <div className="absolute inset-0 border border-[#617a55]/10 rounded-[2rem]" />

                                <p className="relative z-10 text-xl font-[family-name:var(--font-cormorant)] text-[#5a4a3a] leading-relaxed text-center">
                                    What did they discover in all that silence? Peace, certainly. But also something more profound: the realization that everything they'd been seeking was already within them. <br /><br />
                                    <span className="text-[#617a55] font-style: italic font-medium">The mountain didn't give them enlightenment. It simply removed everything that obscured it.</span>
                                </p>
                            </div>

                        </div>
                    </motion.div>
                </div>

                {/* Mountain Shape Divider Bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-24 text-[#f4f1ea] -mb-1 z-20">
                    <svg viewBox="0 0 1440 320" className="w-full h-full" preserveAspectRatio="none">
                        <path fill="currentColor" fillOpacity="1" d="M0,224L80,213.3C160,203,320,181,480,181.3C640,181,800,203,960,224C1120,245,1280,267,1360,277.3L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                    </svg>
                </div>
            </section>

            {/* Chapter 3: The Legacy */}
            <section className="relative py-32 px-6 bg-gradient-to-b from-cream to-warm-white">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
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
                                seekers. We've built a sanctuary that bridges ancient wisdom and contemporary comfort. It is a place
                                where you can experience what those hermit monks discovered, without renouncing the world entirely.
                            </p>

                            <div className="p-12 rounded-3xl bg-gradient-to-br from-sage/20 to-champagne/20 border border-sage/30 shadow-premium-lg my-12">
                                <h3 className="text-3xl font-serif text-shadow mb-6 text-center">
                                    The Mountain Still Calls
                                </h3>
                                <p className="text-xl text-stone-light font-light leading-relaxed text-center mb-8">
                                    Perhaps you've felt it, that quiet whisper beneath the noise of daily life. The longing for
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
