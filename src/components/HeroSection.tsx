"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";
import Image from "next/image";

const heroImages = [
    "https://hdblob1.blob.core.windows.net/hermit/Untitled%20design%20(16).png",
    "https://hdblob1.blob.core.windows.net/hermit/ha%20(1).jpg",
    "https://hdblob1.blob.core.windows.net/hermit/Untitled%20design%20(16).png",
    "https://hdblob1.blob.core.windows.net/hermit/DSCN0283.JPG",
    "https://hdblob1.blob.core.windows.net/hermit/DSCN0190.JPG",
    "https://hdblob1.blob.core.windows.net/hermit/ha%20(10).jpg",
    "https://hdblob1.blob.core.windows.net/hermit/DSCN0323.JPG",
    "https://hdblob1.blob.core.windows.net/hermit/DSCN0165.JPG",
    "https://hdblob1.blob.core.windows.net/hermit/ha%20(14).jpg"
];

export default function HeroSection() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [phase, setPhase] = useState<'intro' | 'transition' | 'slider'>('intro');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // --- 1. Particle System (Magical & Persistent) ---
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        let animationFrameId: number;
        let particles: Particle[] = [];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        class Particle {
            x: number; y: number; size: number; speedX: number; speedY: number; opacity: number; color: string;
            constructor() {
                this.x = Math.random() * canvas!.width;
                this.y = Math.random() * canvas!.height;
                this.size = Math.random() * 3; // Slightly larger for "firefly" effect
                this.speedX = Math.random() * 0.4 - 0.2;
                this.speedY = Math.random() * 0.4 - 0.2;
                this.opacity = Math.random() * 0.5 + 0.2;
                // Universal Magical Color: Light Gold / Starlight White
                // This works with `mix-blend-screen` efficiently on both dark and light backgrounds
                this.color = Math.random() > 0.5
                    ? `rgba(230, 210, 160, ${this.opacity})` // Soft Gold
                    : `rgba(255, 255, 255, ${this.opacity})`; // Starlight
            }
            update() {
                this.x += this.speedX; this.y += this.speedY;
                if (this.x < 0) this.x = canvas!.width; if (this.x > canvas!.width) this.x = 0;
                if (this.y < 0) this.y = canvas!.height; if (this.y > canvas!.height) this.y = 0;

                // Twinkle effect
                if (Math.random() > 0.98) {
                    this.opacity = Math.random() * 0.5 + 0.2;
                }
            }
            draw() {
                if (!ctx) return;
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        const initParticles = () => { particles = []; for (let i = 0; i < 80; i++) particles.push(new Particle()); }; // More particles
        const animateParticles = () => {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => { p.update(); p.draw(); });
            animationFrameId = requestAnimationFrame(animateParticles);
        };
        initParticles();
        animateParticles();
        return () => { window.removeEventListener('resize', resize); cancelAnimationFrame(animationFrameId); };
    }, []);

    // --- 2. Phase Control ---
    useEffect(() => {
        // Start transition after 6 seconds
        const t1 = setTimeout(() => setPhase('transition'), 6000);
        // Complete transition to slider state after 8 seconds (allows 2s overlap)
        const t2 = setTimeout(() => setPhase('slider'), 8500);
        return () => { clearTimeout(t1); clearTimeout(t2); };
    }, []);

    // Image Slider Interval
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);


    // --- Variants ---
    const drawingVariants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: { pathLength: 1, opacity: 1, transition: { duration: 3, ease: "easeInOut" } },
    } as const;

    const fadeMaskVariants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0, transition: { duration: 4, ease: "easeInOut" } } // Slower mask fade (4s)
    } as const;

    return (
        <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-black">

            {/* LAYER 1: IMAGE SLIDER (Bottom) - Now with Focus Pull Effect */}
            {/* LAYER 1: IMAGE SLIDER (Bottom) - Zoom Through Effect */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={currentImageIndex}
                        initial={{ opacity: 0, scale: 1.2 }}
                        animate={{
                            opacity: 1,
                            scale: phase === 'intro' ? 1.2 : 1, // Zoom out to settle
                            filter: phase === 'intro' ? "blur(10px) brightness(0.5)" : "blur(0px) brightness(0.8)" // Brighten as we enter
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={heroImages[currentImageIndex]}
                            alt="Background"
                            fill
                            className="object-cover opacity-80"
                            priority
                        />
                        {/* Permanent Gradient Overlay for text readability */}
                        <div className="absolute inset-0 bg-black/40" />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* LAYER 1.5: PERMANENT PARTICLES (Moved OUT of mask) */}
            {/* These now float on top of everything, persisting through the transition */}
            <div className="absolute inset-0 z-10 pointer-events-none mix-blend-screen">
                <canvas ref={canvasRef} className="absolute inset-0 opacity-80" />
            </div>

            {/* LAYER 2: CREAM MASK (Portal Reveal) */}
            <motion.div
                className="absolute inset-0 z-10 bg-[#fbf9f5]"
                initial={{
                    WebkitMaskImage: "radial-gradient(circle at center, transparent 0%, black 0%)",
                    maskImage: "radial-gradient(circle at center, transparent 0%, black 0%)"
                } as any}
                animate={{
                    // Open a hole from 0% to 150% (clearing the screen)
                    WebkitMaskImage: phase === 'intro'
                        ? "radial-gradient(circle at center, transparent 0%, black 0%)"
                        : "radial-gradient(circle at center, transparent 150%, black 150%)",
                    maskImage: phase === 'intro'
                        ? "radial-gradient(circle at center, transparent 0%, black 0%)"
                        : "radial-gradient(circle at center, transparent 150%, black 150%)",
                } as any}
                transition={{ duration: 3.5, ease: [0.65, 0, 0.35, 1] }} // Custom bezier for "cinematic" opening
                style={{ pointerEvents: phase === 'intro' ? "auto" : "none" }}
            >
                {/* Subtle Ambient Blobs (Only visible during intro) */}
                <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-[#a8b5a0]/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-[#8b7355]/10 rounded-full blur-[100px]" />
            </motion.div>

            {/* LAYER 3: CONTENT & LOGO */}
            <div className="relative z-20 flex flex-col items-center justify-center w-full max-w-4xl px-4 pointer-events-none">

                {/* SVG & Logo Block - PERSISTENT */}
                {/* SVG & Logo Block - PERSISTENT */}
                <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[350px] flex items-center justify-center mb-0">
                    <motion.div
                        className="absolute inset-0 w-full h-full"
                    >
                        {/* Vector Graphics - Static */}
                        <div className="absolute inset-0 z-10 opacity-40">
                            <svg viewBox="0 0 300 200" className="w-full h-full">
                                <motion.path
                                    d="M 20 160 C 50 160, 80 140, 100 80 L 130 110 L 160 50 C 190 90, 230 140, 280 160"
                                    fill="none"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{
                                        pathLength: 1,
                                        opacity: 1,
                                        stroke: phase === 'intro' ? "#8b7355" : "#ffffff"
                                    }}
                                    transition={{ duration: 3, ease: "easeInOut" }}
                                    strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
                                />
                                <motion.line
                                    x1="10" y1="160" x2="290" y2="160"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{
                                        pathLength: 1,
                                        opacity: 0.5,
                                        stroke: phase === 'intro' ? "#a8b5a0" : "#ffffff"
                                    }}
                                    transition={{ duration: 2, delay: 0.5 }}
                                    strokeWidth="1" strokeOpacity="0.5"
                                />
                            </svg>
                        </div>

                        {/* Halo - Static (No Pulse) */}
                        <div className="absolute inset-0 z-0 flex items-center justify-center">
                            <svg viewBox="0 0 200 200" className="w-[80%] h-[80%]">
                                <motion.circle cx="100" cy="100" r="95" fill="none"
                                    initial={{ pathLength: 0, rotate: -90, opacity: 0 }}
                                    animate={{
                                        pathLength: 1,
                                        rotate: 0,
                                        stroke: phase === 'intro' ? "#8b7355" : "#ffffff",
                                        opacity: phase === 'intro' ? 0.4 : 0.2
                                    }}
                                    transition={{ duration: 3, ease: "easeOut", delay: 1 }}
                                    strokeWidth="0.5"
                                />
                            </svg>
                        </div>

                        {/* Logo - With Glint Effect (Kept as requested) */}
                        <div className="absolute inset-0 flex items-center justify-center z-20 overflow-hidden">
                            <motion.div
                                className="relative"
                                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                    y: 0,
                                    filter: phase === 'intro' ? "brightness(1) blur(0px)" : "brightness(0) invert(1) blur(0px)"
                                }}
                                transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
                            >
                                <img
                                    src="https://hdblob1.blob.core.windows.net/hermit/hermitlogo.png"
                                    alt="Logo" className="w-48 md:w-64 h-auto drop-shadow-2xl"
                                    onError={(e) => (e.target as HTMLImageElement).style.display = 'none'}
                                />
                                {/* Circular Shimmer Pulse */}
                                <motion.div
                                    className="absolute inset-0 flex items-center justify-center"
                                    style={{ mixBlendMode: 'overlay' }}
                                >
                                    <motion.div
                                        className="w-[300px] h-[300px] rounded-full"
                                        style={{ background: "radial-gradient(circle, #8b7355 0%, transparent 70%)" }}
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: [0, 1.2], opacity: [0, 0.5, 0] }}
                                        transition={{ duration: 4, repeat: Infinity, repeatDelay: 1, ease: "easeOut" }}
                                    />
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Typography Block */}
                <motion.div
                    layout
                    className="text-center relative z-20 -mt-12 pointer-events-auto"
                >
                    {/* Eyebrow - Hidden as per user's last edit request (commented out) */}
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: phase !== 'intro' ? 1 : 0, height: phase !== 'intro' ? 'auto' : 0 }}
                        transition={{ duration: 1.0, delay: 0.3 }}
                        className="mb-6 overflow-hidden"
                    >
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            color: phase === 'intro' ? "#4a3f2e" : "#ffffff",
                            textShadow: phase !== 'intro' ? "0 4px 30px rgba(0,0,0,0.8)" : "none"
                        }}
                        transition={{ duration: 4, ease: "easeInOut" }}
                        className="text-6xl md:text-8xl lg:text-7xl font-[family-name:var(--font-cinzel)] font-light tracking-tight"
                    >
                        Hermit's Lair
                    </motion.h1>

                    <div className="flex items-center justify-center gap-4 mt-6">
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1, backgroundColor: phase === 'intro' ? "#8b7355" : "#d4b483" }}
                            transition={{ duration: 4 }} className="h-px w-12"
                        />
                        <motion.h2
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, color: phase === 'intro' ? "#8b7355" : "#d4b483" }}
                            transition={{ duration: 4 }}
                            className="text-sm md:text-base font-[family-name:var(--font-cinzel)] tracking-[0.4em] uppercase"
                        >
                            Chalets
                        </motion.h2>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1, backgroundColor: phase === 'intro' ? "#8b7355" : "#d4b483" }}
                            transition={{ duration: 4 }} className="h-px w-12"
                        />
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            color: phase === 'intro' ? "#a8b5a0" : "#e5e7eb",
                            textShadow: phase !== 'intro' ? "0 2px 10px rgba(0,0,0,0.8)" : "none"
                        }}
                        transition={{ duration: 4, delay: phase === 'intro' ? 4 : 0 }}
                        className="mt-6 font-[family-name:var(--font-cormorant)] italic text-xl md:text-3xl max-w-2xl mx-auto leading-relaxed"
                    >
                        {phase !== 'intro' ? "Where silence becomes sanctuary." : "Dimbulagala, Sri Lanka"}
                    </motion.p>

                    {/* Buttons */}
                    <AnimatePresence>
                        {phase !== 'intro' && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1, duration: 1.5 }}
                                className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12"
                            >
                                <button className="px-8 py-3 bg-white text-stone-900 rounded-full font-[family-name:var(--font-cinzel)] text-sm font-bold tracking-widest hover:bg-[#e6d2a0] transition-colors shadow-lg hover:scale-105 duration-300">
                                    Book Your Stay
                                </button>
                                <button onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })} className="px-8 py-3 border border-white/40 text-white rounded-full font-[family-name:var(--font-cinzel)] text-sm font-bold tracking-widest hover:bg-white/10 transition-colors backdrop-blur-sm hover:scale-105 duration-300">
                                    Explore
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>

                </motion.div>
            </div>


            {/* Scroll Indicator - ONLY VISIBLE IN INTRO PHASE to prevent overlap with buttons */}
            <AnimatePresence>
                {phase === 'intro' && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 1 } }}
                        transition={{ delay: 5, duration: 1 }}
                        className="absolute bottom-10 z-20 pointer-events-none"
                    >
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="flex flex-col items-center gap-2"
                        >
                            <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#8b7355]">
                                Begin Journey
                            </span>
                            <ChevronDown className="w-4 h-4 text-[#8b7355]" />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    );
}
