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
    const [hasLoaded, setHasLoaded] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // --- 1. Magical Particle System ---
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
                this.size = Math.random() * 2;
                this.speedX = (Math.random() - 0.5) * 0.3;
                this.speedY = (Math.random() - 0.5) * 0.3;
                this.opacity = Math.random() * 0.5 + 0.1;
                this.color = Math.random() > 0.5 ? "rgba(227, 213, 181, " : "rgba(255, 255, 255, ";
            }
            update() {
                this.x += this.speedX; this.y += this.speedY;
                if (this.x < 0) this.x = canvas!.width; if (this.x > canvas!.width) this.x = 0;
                if (this.y < 0) this.y = canvas!.height; if (this.y > canvas!.height) this.y = 0;
                if (Math.random() > 0.99) this.opacity = Math.random() * 0.5 + 0.2; // Twinkle
            }
            draw() {
                if (!ctx) return;
                ctx.fillStyle = this.color + this.opacity + ")";
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        const initParticles = () => { particles = []; for (let i = 0; i < 120; i++) particles.push(new Particle()); };
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

    // Trigger Animation
    useEffect(() => {
        const t1 = setTimeout(() => setHasLoaded(true), 400);
        return () => clearTimeout(t1);
    }, []);

    // Background Slider
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        }, 7000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0c0a09]">

            {/* LAYER 1: Background Slider (Zooming In) */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={currentImageIndex}
                        initial={{ opacity: 0, scale: 1.15 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 2.5, ease: "easeInOut" }}
                        className="absolute inset-0"
                    >
                        <Image src={heroImages[currentImageIndex]} alt="Sanctuary" fill className="object-cover" priority />
                        {/* Overlay for better text readability */}
                        <div className="absolute inset-0 bg-black/60" />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* LAYER 2: Particles */}
            <div className="absolute inset-0 z-10 pointer-events-none mix-blend-screen">
                <canvas ref={canvasRef} className="absolute inset-0 opacity-70" />
            </div>

            {/* LAYER 3: The "Void" Mask (Darkness -> Aperture Reveal) */}
            <motion.div
                className="absolute inset-0 z-20 bg-[#0c0a09]" // Deep Black/Bronze
                initial={{ opacity: 1 }}
                animate={{
                    // Gradient expands from 0% (solid black) to 150% (clear)
                    maskImage: hasLoaded
                        ? "radial-gradient(circle at center, transparent 150%, black 150%)"
                        : "radial-gradient(circle at center, transparent 0%, black 0%)",
                }}
                transition={{ duration: 3.5, ease: [0.7, 0, 0.3, 1], delay: 1.5 }} // Delays reveal until lines draw
                style={{ pointerEvents: "none" }}
            >
                {/* Optional: Subtle pulse in darkness before reveal */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-1 h-1 bg-[#e3d5b5] rounded-full shadow-[0_0_20px_#e3d5b5] animate-pulse" />
                </div>
            </motion.div>


            {/* LAYER 4: Content (Overlaying even the mask for the Lines) */}
            {/* We want the Golden Lines to appear ON TOP of the black mask, then the mask opens BEHIND them */}
            <div className="relative z-30 flex flex-col items-center justify-center w-full max-w-4xl px-4 text-center">

                <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[350px] flex items-center justify-center mb-0">

                    {/* A. Golden Lines (Visible on Black) */}
                    <div className="absolute inset-0 z-20 opacity-80 mix-blend-screen">
                        <svg viewBox="0 0 300 200" className="w-full h-full">
                            {/* Glowing Mountain */}
                            <motion.path
                                d="M 20 160 C 50 160, 80 140, 100 80 L 130 110 L 160 50 C 190 90, 230 140, 280 160"
                                fill="none"
                                stroke="#e3d5b5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 3.0, delay: 0.5, ease: "easeInOut" }}
                                style={{ filter: "drop-shadow(0 0 8px rgba(227, 213, 181, 0.6))" }} // Glow
                            />
                            {/* Horizon */}
                            <motion.line
                                x1="10" y1="160" x2="290" y2="160"
                                stroke="#e3d5b5" strokeWidth="1"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 0.5 }}
                                transition={{ duration: 3.0, delay: 1.0, ease: "easeOut" }}
                                style={{ filter: "drop-shadow(0 0 5px rgba(227, 213, 181, 0.4))" }} // Glow
                            />
                            {/* Halo */}
                            <motion.circle
                                cx="150" cy="100" r="95"  // Centered in 300x200 viewbox (150, 100)
                                transform="translate(-50, 0)" // Adjusting for svg viewBox quirk if needed, or just fix cx
                                fill="none" stroke="#e3d5b5" strokeWidth="1"
                                initial={{ pathLength: 0, rotate: -180, opacity: 0 }}
                                animate={{ pathLength: 1, rotate: 0, opacity: 0.4 }}
                                transition={{ duration: 3.0, delay: 0.5, ease: "easeOut" }}
                                style={{ filter: "drop-shadow(0 0 10px rgba(227, 213, 181, 0.3))" }}
                            />
                        </svg>
                    </div>

                    {/* B. Logo (Appears AFTER reveal) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        transition={{ duration: 2.0, delay: 2.5, ease: "easeOut" }} // Sync with mask open
                        className="relative z-10 w-48 md:w-64"
                    >
                        <img
                            src="https://hdblob1.blob.core.windows.net/hermit/hermitlogo.png"
                            alt="Logo"
                            className="w-full h-auto drop-shadow-2xl brightness-0 invert"
                        />
                        {/* Radiant Burst behind Logo */}
                        <div className="absolute inset-0 bg-white/10 blur-[80px] -z-10 rounded-full scale-150 animate-pulse" />
                    </motion.div>
                </div>

                {/* Typography */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2.0, delay: 3.0, ease: "easeOut" }} // Staggered enter
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-[family-name:var(--font-cinzel)] font-light tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)] mb-2">
                        Hermit's Lair
                    </h1>

                    <div className="flex items-center justify-center gap-6 opacity-90">
                        <motion.div
                            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.5, delay: 3.5 }}
                            className="h-[1px] w-12 bg-[#e3d5b5]"
                        />
                        <span className="text-sm md:text-base font-[family-name:var(--font-cinzel)] tracking-[0.4em] uppercase text-[#e3d5b5] drop-shadow-md">
                            Sanctuary
                        </span>
                        <motion.div
                            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.5, delay: 3.5 }}
                            className="h-[1px] w-12 bg-[#e3d5b5]"
                        />
                    </div>

                    <p className="mt-8 font-[family-name:var(--font-cormorant)] italic text-xl md:text-2xl text-white/90 max-w-xl mx-auto leading-relaxed drop-shadow-lg">
                        "Where silence becomes the loudest voice."
                    </p>
                </motion.div>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 4.0, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12"
                >
                    <a href="/book" className="group relative px-10 py-4 bg-white text-[#4a3f2e] rounded-full font-[family-name:var(--font-cinzel)] text-sm font-bold tracking-widest overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:scale-105 duration-300">
                        <span className="relative z-10">Book Your Stay</span>
                        <div className="absolute inset-0 bg-[#e3d5b5] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out" />
                    </a>

                    <button
                        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
                        className="group px-10 py-4 border border-white/30 text-white rounded-full font-[family-name:var(--font-cinzel)] text-sm font-bold tracking-widest hover:bg-white/10 backdrop-blur-md transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105 duration-300"
                    >
                        Explore
                    </button>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 4.5, duration: 1.5 }}
                    className="absolute bottom-[-15vh] left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="flex flex-col items-center gap-2 opacity-60"
                    >
                        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white to-transparent" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
