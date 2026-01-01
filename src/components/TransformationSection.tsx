"use client";

import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, Wind, Sun, Moon, Bird } from "lucide-react";
import { cn } from "@/lib/utils";

// --- Data ---
const moments = [
    {
        id: "step1",
        title: "The Unplugging",
        subtitle: "Step One",
        description: "The first step is the hardest. Leaving the digital tether behind. We guide you gently into the offline world, where the only notifications are the calls of birds and the wind in the trees.",
        image: "https://hdblob1.blob.core.windows.net/hermit/ha (19).jpg",
        icon: Moon,
    },
    {
        id: "step2",
        title: "The Grounding",
        subtitle: "Step Two",
        description: "Your feet touch the earth. The forest surrounds you. Through guided nature immersion, the nervous system shifts from 'fight or flight' to 'rest and digest'. You are no longer rushing.",
        image: "https://hdblob1.blob.core.windows.net/hermit/DSCN0204.JPG",
        icon: Wind,
    },
    {
        id: "step3",
        title: "The Inward Turn",
        subtitle: "Step Three",
        description: "With the external noise silenced, we teach you to navigate the internal. Daily meditation isn't a task here; it's a remembering of who you are beneath the roles you play.",
        image: "https://hdblob1.blob.core.windows.net/hermit/meditatetransform.png",
        icon: Sun,
    },
    {
        id: "step4",
        title: "The Release",
        subtitle: "Step Four",
        description: "Held by the mountains, you finally feel safe enough to let go. The anxiety, the expectations—they drift away like clouds over the Dimbulagala rock. You are exactly where you need to be.",
        image: "https://hdblob1.blob.core.windows.net/hermit/pokuna.png",
        icon: Bird,
    },
    {
        id: "step5",
        title: "The Integration",
        subtitle: "Step Five",
        description: "You don't just leave with a memory. You leave with a practice. A new way of being that you carry back into the noise, protecting your peace like a hidden flame.",
        image: "https://hdblob1.blob.core.windows.net/hermit/DSCN0311.JPG",
        icon: Sparkles,
    }
];

export default function TransformationSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const jumpToGallery = () => {
        document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
        // Or just scroll the container end into view
        if (containerRef.current) {
            const nextSection = containerRef.current.nextElementSibling;
            nextSection?.scrollIntoView({ behavior: "smooth" });
        }
    };

    // Parallax & Opacity transforms
    const opacityNoise = useTransform(smoothProgress, [0, 0.1], [1, 0]);
    const opacityNature = useTransform(smoothProgress, [0.08, 0.15], [0, 1]);
    const scaleNature = useTransform(smoothProgress, [0.08, 0.15], [0.8, 1]);

    // Move horizontally for 5 slides. Range 0 to -80% (4/5ths)
    const xMove = useTransform(smoothProgress, [0.15, 0.9], ["0%", "-80%"]);

    return (
        <section ref={containerRef} className="relative bg-stone-950 text-white min-h-[400vh]">

            {/* STAGE 1: THE NOISE (Sticky Top) */}
            <div className="sticky top-0 h-screen overflow-hidden">

                {/* OPTIMIZED BACKGROUND: Only renders 100vh instead of 400vh */}
                <div className="absolute inset-0 z-0">
                    <video
                        src="https://hdblob1.blob.core.windows.net/hermit/Generating_Magical_Place_Video.mp4"
                        autoPlay
                        loop
                        muted
                        className="object-cover opacity-60 pointer-events-none"
                    />
                </div>

                {/* Layer 1: The Noise / Chaos */}
                <motion.div
                    style={{ opacity: opacityNoise }}
                    className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-stone-200/90 text-stone-900 overflow-hidden will-change-transform"
                >
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-40 mix-blend-multiply" />

                    <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-6xl font-[family-name:var(--font-cinzel)] mb-8 tracking-tight text-[#5c5346]"
                        >
                            THE NOISE OF THE WORLD
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 1 }}
                            className="space-y-6 text-lg md:text-2xl text-stone-700 font-[family-name:var(--font-cormorant)] font-light leading-relaxed max-w-2xl mx-auto"
                        >
                            <p>
                                We live in an era of infinite connectivity, yet our minds have never been more fragmented.
                                The relentless ping of notifications. The weight of unwritten emails. The city that refuses to sleep.
                                It creates a static that drowns out the most important voice of all your own.
                            </p>
                            <p>
                                You carry this weight every day. The invisible pressure to be "always on," to respond, to perform.
                                It is not just noise; it is a thief that steals your peace.
                            </p>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 1 }}
                            className="mt-12 text-2xl md:text-3xl text-[#8b7355] font-[family-name:var(--font-cinzel)] tracking-wide"
                        >
                            But what if you could just... <span className="italic">stop?</span>
                        </motion.p>
                    </div>
                </motion.div>

                {/* Layer 2: The Portal / Nature Reveal */}
                <motion.div
                    style={{ opacity: opacityNature, scale: scaleNature }}
                    className="absolute inset-0 z-10 bg-gradient-to-b from-[#e3d5b5] via-[#fdfbf7] to-[#e3d5b5]"
                >
                    {/* Background Image/Video */}
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
                            className="flex h-[80vh] w-[500vw] px-[10vw] items-center gap-[5vw] will-change-transform"
                        >
                            {moments.map((moment, index) => (
                                <div key={moment.id} className="w-[85vw] md:w-[60vw] h-full flex flex-col md:flex-row shadow-2xl rounded-[3rem] overflow-hidden bg-[#fbf9f5] border border-[#8b7355]/20 relative group">

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
                                    <div className="flex-1 h-1/2 md:h-full p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-[#fbf9f5] relative">
                                        {/* Decorative Icon */}
                                        <div className={`w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-8 border border-[#8b7355]/20 shadow-lg`}>
                                            <moment.icon className={`w-8 h-8 text-[#8b7355]`} />
                                        </div>

                                        <div className="space-y-6">
                                            <div>
                                                <p className={`text-xs font-bold uppercase tracking-[0.3em] text-[#8b7355] mb-2 font-[family-name:var(--font-cinzel)]`}>
                                                    {moment.subtitle}
                                                </p>
                                                <h3 className="text-3xl md:text-5xl font-[family-name:var(--font-cinzel)] text-[#4a3f2e] tracking-tight leading-[0.9]">
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

                    {/* Progress Bar & Skip */}
                    <div className="absolute bottom-8 left-0 right-0 px-12 flex items-center justify-between z-40">
                        {/* Progress Line */}
                        <div className="flex flex-1 items-center gap-4 max-w-md">
                            <span className="text-xs font-bold text-[#8b7355] tracking-widest uppercase">Start</span>
                            <div className="h-1 bg-[#8b7355]/20 flex-1 rounded-full overflow-hidden relative">
                                <motion.div
                                    style={{ scaleX: smoothProgress }}
                                    className="absolute inset-0 bg-[#8b7355] origin-left"
                                />
                            </div>
                            <span className="text-xs font-bold text-[#8b7355] tracking-widest uppercase">Sanctuary</span>
                        </div>

                        {/* Skip Button */}
                        <button
                            onClick={jumpToGallery}
                            className="ml-8 text-xs font-bold text-[#8b7355]/60 hover:text-[#8b7355] tracking-widest uppercase transition-colors"
                        >
                            Skip Animation &rarr;
                        </button>
                    </div>

                </motion.div>

                {/* Final CTA Overlay (appears at the end) */}
                <motion.div
                    style={{
                        opacity: useTransform(smoothProgress, [0.85, 0.95], [0, 1]),
                        pointerEvents: useTransform(smoothProgress, (val) => val > 0.85 ? 'auto' : 'none')
                    }}
                    className="absolute inset-0 z-30 flex items-center justify-center bg-stone-950/90 backdrop-blur-md will-change-[opacity]"
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
                            onClick={() => document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth" })}
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
