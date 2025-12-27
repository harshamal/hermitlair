"use client";

import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, Wind, Sun, Moon, Bird } from "lucide-react";
import { cn } from "@/lib/utils";

// --- Data ---
const moments = [
    {
        id: "morning",
        title: "Golden Hour",
        subtitle: "The Awakening",
        description: "Wake to the symphony of peacocks and the gentle warmth of the sun breaking through the mist. The world is reborn, and so are you.",
        image: "https://hdblob1.blob.core.windows.net/hermit/ha%20(1).jpg",
        icon: Sun,
        color: "amber"
    },
    {
        id: "nature",
        title: "Living Silence",
        subtitle: "The Connection",
        description: "Walk where ancient monks once walked. The forest breathes with you. In this silence, you don't lose yourself—you find yourself.",
        image: "https://hdblob1.blob.core.windows.net/hermit/DSCN0204.JPG",
        icon: Bird,
        color: "emerald"
    },
    {
        id: "night",
        title: "Celestial Canopy",
        subtitle: "The Perspective",
        description: "Under a blanket of a billion stars, your worries feel infinitely small. The universe watches over your sleep.",
        image: "https://hdblob1.blob.core.windows.net/hermit/DSCN0311.JPG",
        icon: Moon,
        color: "indigo"
    }
];

const colorMap: Record<string, { bg: string, text: string, border: string, sub: string }> = {
    amber: { bg: "bg-amber-500/10", text: "text-amber-400", border: "border-amber-500/20", sub: "text-amber-400" },
    emerald: { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/20", sub: "text-emerald-400" },
    indigo: { bg: "bg-indigo-500/10", text: "text-indigo-400", border: "border-indigo-500/20", sub: "text-indigo-400" }
};

export default function TransformationSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Parallax & Opacity transforms
    const opacityNoise = useTransform(smoothProgress, [0, 0.1], [1, 0]);
    const opacityNature = useTransform(smoothProgress, [0.05, 0.15], [0, 1]);
    const scaleNature = useTransform(smoothProgress, [0.05, 0.15], [0.8, 1]);

    const xMove = useTransform(smoothProgress, [0.15, 0.9], ["0%", "-66.66%"]); // Move horizontally for 3 slides

    return (
        <section ref={containerRef} className="relative bg-stone-950 text-white min-h-[400vh]">

            {/* STAGE 1: THE NOISE (Sticky Top) */}
            <div className="sticky top-0 h-screen overflow-hidden">

                {/* Layer 1: The Noise / Chaos */}
                <motion.div
                    style={{ opacity: opacityNoise }}
                    className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-stone-200 text-stone-900 overflow-hidden"
                >
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-40 mix-blend-multiply" />

                    <div className="relative z-10 text-center space-y-8 px-6">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-[family-name:var(--font-cinzel)]  mb-8 tracking-tight text-[#8b7355]"
                        >
                            NOISE
                        </motion.h2>
                        <div className="space-y-2 font-[family-name:var(--font-cinzel)] text-sm md:text-base tracking-[0.3em] text-stone-600 uppercase">
                            <p>Deadlines • Notifications • Traffic</p>
                            <p>Pressure • Expectations • Anxiety</p>
                        </div>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-2xl md:text-4xl font-light text-stone-800 font-[family-name:var(--font-cormorant)] italic"
                        >
                            Is this all there is?
                        </motion.p>
                    </div>
                </motion.div>

                {/* Layer 2: The Portal / Nature Reveal */}
                <motion.div
                    style={{ opacity: opacityNature, scale: scaleNature }}
                    className="absolute inset-0 z-10 bg-gradient-to-b from-[#e3d5b5] via-[#fdfbf7] to-[#e3d5b5]"
                >
                    {/* Background Image/Video for the "Portal" feel */}
                    <div className="absolute inset-0">
                        <Image
                            src="https://hdblob1.blob.core.windows.net/hermit/hermitback%20(2).png"
                            alt="Nature Background"
                            fill
                            className="object-cover opacity-40 saturate-[0.8]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-stone-900/20" />
                    </div>

                    {/* Horizontal Scroll Container */}
                    <div className="relative h-full flex items-center overflow-hidden">
                        <motion.div
                            style={{ x: xMove }}
                            className="flex h-[80vh] w-[300vw] px-[10vw] items-center gap-[10vw]"
                        >
                            {moments.map((moment, index) => (
                                <div key={moment.id} className="w-[80vw] md:w-[60vw] h-full flex flex-col md:flex-row shadow-2xl rounded-[3rem] overflow-hidden bg-[#fbf9f5] border border-[#8b7355]/20 relative group">

                                    {/* Image Side */}
                                    <div className="relative flex-1 h-1/2 md:h-full overflow-hidden">
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700 z-10" />
                                        <Image
                                            src={moment.image}
                                            alt={moment.title}
                                            fill
                                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                        />
                                    </div>

                                    {/* Content Side */}
                                    <div className="flex-1 h-1/2 md:h-full p-8 md:p-16 flex flex-col justify-center bg-[#fbf9f5] relative">
                                        {/* Decorative Icon */}
                                        <div className={`w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-8 border border-[#8b7355]/20 shadow-lg`}>
                                            <moment.icon className={`w-8 h-8 text-[#8b7355]`} />
                                        </div>

                                        <div className="space-y-6">
                                            <div>
                                                <p className={`text-xs font-bold uppercase tracking-[0.3em] text-[#8b7355] mb-2 font-[family-name:var(--font-cinzel)]`}>
                                                    {moment.subtitle}
                                                </p>
                                                <h3 className="text-4xl md:text-6xl font-[family-name:var(--font-cinzel)] text-[#4a3f2e] tracking-tight leading-[0.9]">
                                                    {moment.title}
                                                </h3>
                                            </div>

                                            <div className="w-12 h-px bg-[#8b7355]/30" />

                                            <p className="text-lg md:text-xl text-[#5a4a3a] font-light leading-relaxed font-[family-name:var(--font-cormorant)] italic">
                                                {moment.description}
                                            </p>
                                        </div>

                                        {/* Corner Number */}
                                        <div className="absolute bottom-8 right-8 text-8xl font-[family-name:var(--font-cinzel)] text-[#8b7355]/5 select-none font-bold">
                                            0{index + 1}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Instruction to scroll */}
                    <motion.div
                        style={{ opacity: useTransform(smoothProgress, [0.85, 0.9], [1, 0]) }}
                        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-stone-500/50"
                    >
                        <div className="w-px h-12 bg-gradient-to-b from-stone-500/0 via-stone-500/50 to-stone-500/0" />
                        <span className="text-xs uppercase tracking-[0.4em]">Journey Deeper</span>
                    </motion.div>

                </motion.div>

                {/* Final CTA Overlay (appears at the end) */}
                <motion.div
                    style={{ opacity: useTransform(smoothProgress, [0.9, 0.95], [0, 1]), pointerEvents: useTransform(smoothProgress, (val) => val > 0.9 ? 'auto' : 'none') }}
                    className="absolute inset-0 z-30 flex items-center justify-center bg-stone-950/80 backdrop-blur-md"
                >
                    <div className="text-center p-12 max-w-4xl mx-auto">
                        <Sparkles className="w-12 h-12 text-[#8b7355] mx-auto mb-8 animate-pulse" />
                        <h2 className="text-5xl md:text-7xl font-[family-name:var(--font-cinzel)] text-white mb-8 tracking-tight">
                            The New You <span className="text-[#8b7355] italic">Awaits</span>
                        </h2>
                        <p className="text-xl text-stone-200 mb-12 font-light max-w-2xl mx-auto font-[family-name:var(--font-cormorant)] italic">
                            The silence is calling. Will you answer?
                        </p>
                        <button
                            onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
                            className="bg-[#fbf9f5] text-[#4a3f2e] px-12 py-5 rounded-full text-lg tracking-[0.2em] uppercase font-bold hover:bg-[#8b7355] hover:text-white transition-all duration-500 shadow-xl border border-white/10"
                        >
                            Reserve Your Sanctuary
                        </button>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

// Helper to keep styling clean
const FeatureCard = ({ moment }: { moment: typeof moments[0] }) => {
    return (
        <div className="w-[80vw] h-[70vh] shrink-0 bg-white/5 rounded-3xl border border-white/10 overflow-hidden relative group">
            <Image
                src={moment.image}
                alt={moment.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/50 to-transparent flex flex-col justify-end p-10">
                <h3 className="text-4xl font-serif mb-4">{moment.title}</h3>
                <p className="text-stone-300 max-w-md">{moment.description}</p>
            </div>
        </div>
    );
};
