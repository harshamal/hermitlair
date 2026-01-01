"use client";

import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Flame, Sparkles, X, ChevronRight, ChevronLeft, Compass, MoveRight } from "lucide-react";

// --- DATA: THE DEEP STORIES ---
// Replace these URLs with your generated images from the Prompts above.
const STORY_DATA = {
    vedda: {
        title: "The Keepers of the Rock",
        theme: "warm",
        chapters: [
            {
                title: "The First Hearth",
                year: "5000 BC",
                text: "Long before the chants of monks filled these valleys, the smoke of the Vedda fires blackened these ceilings. This was not a temple, but a fortress of survival. The 'Yakka' tribes called this rock 'Oagala'—the rock of safety. Here, the first inhabitants of the island sharpened quartz arrowheads by firelight.",
                image: "https://hdblob1.blob.core.windows.net/hermit/vedda_fire.png" // Prompt: Vedda Img 1
            },
            {
                title: "The Honey & The Hunt",
                year: "Ancient Tradition",
                text: "The forest was not a resource, but a relative. They climbed the sheer vertical faces of Dimbulagala on vines to gather wild bee honey from the crevices. To take from the rock required a pact with the spirits of the wind—a balance of fear and respect that defined their civilization.",
                image: "https://hdblob1.blob.core.windows.net/hermit/vedda_honey.png" // Prompt: Vedda Img 2
            },
            {
                title: "The Living Ancestors",
                year: "Present Day",
                text: "Though empires rose and fell around the rock, the bloodline remains. In the villages of Henanigala and Dalukana nearby, the descendants of these cave-dwellers still walk. The rock is not just history to them; it is their grandfather.",
                image: "https://hdblob1.blob.core.windows.net/hermit/vedda.png" // Prompt: Vedda Img 3
            }
        ]
    },
    hermit: {
        title: "The Architecture of Silence",
        theme: "cool",
        chapters: [
            {
                title: "The Arrival of the Arhants",
                year: "3rd Century BC",
                text: "Following the path of Arahat Mahinda, monks sought places where the silence was loud enough to hear the mind. Dimbulagala was chosen for its isolation. They did not build on the rock; they merged with it, turning natural caverns into chambers of enlightenment.",
                image: "https://hdblob1.blob.core.windows.net/hermit/monk_cliff.png" // Prompt: Hermit Img 1
            },
            {
                title: "The Stone Scripts",
                year: "2nd Century BC",
                text: "Look closely above the drip-ledges of the caves. Carved into the granite are early Brahmi inscriptions—the oldest donate records in the land. They tell simple stories: 'Cave of the Chief', 'Gift of the Merchant'. These etchings are the receipts of a civilization investing in spiritual peace.",
                image: "https://www.archaeology.lk/wp-content/uploads/2017/12/DSC05141-1024x768.jpg" // Prompt: Hermit Img 2
            },
            {
                title: "The Astral Pond",
                year: "Timeless",
                text: "High within the rocky matrix lies the Namal Pokuna and other rock pools. Legend says these waters never dry, fed by the tears of the rock itself. At night, the water becomes a mirror for the galaxy, allowing monks to meditate on the infinite nature of the universe.",
                image: "https://scontent.fcmb2-2.fna.fbcdn.net/v/t39.30808-6/501009985_4197767240493482_4109483908146083594_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=KJAgkrc_pIEQ7kNvwElWxlf&_nc_oc=AdkX8PB5eUB2sh7zViKGOHYAAdMwqfGLtj0oaTJlUN7bqU8nIWCMR8L5_O2pb_O5P86ibVgUxOysIxzg14kpClFT&_nc_zt=23&_nc_ht=scontent.fcmb2-2.fna&_nc_gid=6Ucb3fYlmPbCXviXE9p1Wg&oh=00_AfnOkFAf7RBelfXt6w_FpbPFdFUjbIA9WbYrE7Kl4-vV8A&oe=695B45C2" // Prompt: Hermit Img 3
            }
        ]
    }
};

const EXTERIOR_IMG = "https://hdblob1.blob.core.windows.net/hermit/rock.png"; // Prompt 1
const INTERIOR_SPLIT_IMG = "https://hdblob1.blob.core.windows.net/hermit/Gemini_Generated_Image_bwyouxbwyouxbwyo%20(2).png"; // Prompt 2

export default function LivingMapSection() {
    const [viewState, setViewState] = useState<"outside" | "inside">("outside");
    const [activePath, setActivePath] = useState<"vedda" | "hermit" | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Mouse Parallax Logic
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (viewState === "inside") {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            mouseX.set((clientX / innerWidth) - 0.5);
            mouseY.set((clientY / innerHeight) - 0.5);
        }
    };

    const parallaxX = useTransform(mouseX, [-0.5, 0.5], ["3%", "-3%"]);
    const parallaxY = useTransform(mouseY, [-0.5, 0.5], ["2%", "-2%"]);

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative h-screen w-full bg-[#050403] overflow-hidden text-white"
        >

            {/* 1. SCENE RENDERER */}
            <div className="absolute inset-0 z-0">
                {/* Exterior View */}
                <motion.div
                    initial={{ opacity: 1, scale: 1 }}
                    animate={{
                        opacity: viewState === "outside" ? 1 : 0,
                        scale: viewState === "outside" ? 1 : 2.5,
                        filter: viewState === "outside" ? "blur(0px)" : "blur(20px)"
                    }}
                    transition={{ duration: 1.5, ease: [0.65, 0, 0.35, 1] }}
                    className="absolute inset-0 pointer-events-none"
                >
                    <Image src={EXTERIOR_IMG} alt="Dimbulagala Outside" fill className="object-cover" priority />
                    <div className="absolute inset-0 bg-black/20" />
                </motion.div>

                {/* Interior View (The Split) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                        opacity: viewState === "inside" ? 1 : 0,
                        scale: viewState === "inside" ? 1.05 : 0.8,
                    }}
                    style={{ x: parallaxX, y: parallaxY }} // Connect Parallax
                    transition={{ duration: 1.5, ease: [0.65, 0, 0.35, 1] }}
                    className="absolute inset-0"
                >
                    <Image src={INTERIOR_SPLIT_IMG} alt="Inside the Cave" fill className="object-cover" />

                    {/* Shadow Overlays for mood */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000_120%)] mix-blend-multiply" />
                </motion.div>
            </div>

            {/* 2. UI LAYER: EXTERIOR */}
            <AnimatePresence>
                {viewState === "outside" && (
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: -50 }}
                        className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-6"
                    >
                        <h1 className="text-7xl md:text-9xl font-[family-name:var(--font-cinzel)] text-transparent bg-clip-text bg-gradient-to-b from-[#e3d5b5] to-[#8b7355] opacity-90 tracking-tighter drop-shadow-2xl">
                            DIMBULAGALA
                        </h1>
                        <p className="mt-6 text-2xl tracking-[0.4em] uppercase text-[#e3d5b5]/60 font-[family-name:var(--font-cormorant)] italic">
                            The Sleeping Giant
                        </p>
                        <button
                            onClick={() => setViewState("inside")}
                            className="mt-12 group flex items-center gap-4 px-10 py-5 border border-[#e3d5b5]/20 rounded-full bg-[#1c1917]/40 backdrop-blur-md hover:bg-[#e3d5b5]/10 hover:border-[#e3d5b5]/40 transition-all duration-500 shadow-[0_0_40px_rgba(139,115,85,0.1)]"
                        >
                            <Compass className="w-5 h-5 text-[#e3d5b5] animate-spin-slow" />
                            <span className="uppercase tracking-widest text-sm font-medium text-[#e3d5b5] font-[family-name:var(--font-cinzel)]">Enter the Sacred Rock</span>
                            <ChevronRight className="w-4 h-4 text-[#e3d5b5] group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>
                )}

            </AnimatePresence>

            {/* 3. UI LAYER: INTERIOR HOTSPOTS */}
            <AnimatePresence>
                {viewState === "inside" && !activePath && (
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 1 } }} exit={{ opacity: 0 }}
                        className="absolute inset-0 z-30"
                    >
                        {/* Title */}
                        <div className="absolute top-12 w-full text-center">
                            <h2 className="text-4xl font-[family-name:var(--font-cinzel)] tracking-[0.2em] text-[#e3d5b5]/50">CHOOSE YOUR PATH</h2>
                        </div>

                        {/* LEFT HOTSPOT (VEDDA) */}
                        <div className="absolute top-[60%] left-[20%] md:left-[25%] -translate-x-1/2 -translate-y-1/2">
                            <Hotspot
                                icon={<Flame />}
                                label="The Vedda Hearth"
                                color="amber"
                                onClick={() => setActivePath("vedda")}
                            />
                        </div>

                        {/* RIGHT HOTSPOT (HERMIT) */}
                        <div className="absolute top-[55%] right-[20%] md:right-[25%] -translate-x-1/2 -translate-y-1/2">
                            <Hotspot
                                icon={<Sparkles />}
                                label="The Hermit's Light"
                                color="blue"
                                onClick={() => setActivePath("hermit")}
                            />
                        </div>

                        {/* Return Button */}
                        <button
                            onClick={() => setViewState("outside")}
                            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#e3d5b5]/40 hover:text-[#e3d5b5] uppercase tracking-widest text-xs font-[family-name:var(--font-cinzel)] flex items-center gap-2 transition-colors"
                        >
                            <X size={14} /> Leave the Cave
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* 4. STORY MODE (THE DEEP DIVE) */}
            <AnimatePresence>
                {activePath && (
                    <StoryMode
                        path={activePath}
                        data={STORY_DATA[activePath]}
                        onClose={() => setActivePath(null)}
                    />
                )}
            </AnimatePresence>

        </section>
    );
}


// --- SUB-COMPONENT: HOTSPOT ---
function Hotspot({ icon, label, color, onClick }: any) {
    const isAmber = color === "amber";
    return (
        <button onClick={onClick} className="group relative flex flex-col items-center justify-center">
            <div className={`
                relative w-20 h-20 rounded-full flex items-center justify-center 
                backdrop-blur-xl border border-white/10 transition-transform duration-500 group-hover:scale-110
                ${isAmber ? 'bg-amber-900/40 text-amber-400' : 'bg-blue-900/40 text-blue-300'}
            `}>
                <div className="scale-125 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">{icon}</div>

                {/* Pulsing Rings */}
                <div className={`absolute inset-0 rounded-full border animate-ping opacity-30 duration-[3s] ${isAmber ? 'border-amber-500' : 'border-blue-500'}`} />
            </div>
            <div className={`
                mt-4 px-5 py-2 bg-[#1c1917]/60 backdrop-blur-md border border-white/5 rounded-lg 
                uppercase tracking-[0.2em] text-xs font-bold transition-all duration-300 transform
                opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0
                font-[family-name:var(--font-cinzel)]
                ${isAmber ? 'text-[#e3d5b5]' : 'text-blue-100'}
            `}>
                {label}
            </div>
        </button>
    )
}


// --- SUB-COMPONENT: IMMERSIVE STORY SLIDESHOW ---
function StoryMode({ path, data, onClose }: { path: "vedda" | "hermit", data: any, onClose: () => void }) {
    const [chapter, setChapter] = useState(0);
    const totalChapters = data.chapters.length;

    const nextChapter = () => {
        if (chapter < totalChapters - 1) setChapter(c => c + 1);
    };

    const prevChapter = () => {
        if (chapter > 0) setChapter(c => c - 1);
    };

    const currentData = data.chapters[chapter];
    const isAmber = path === "vedda";

    return (
        <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 bg-black"
        >
            {/* BACKGROUND IMAGE FADE */}
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={chapter}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 z-0"
                >
                    <Image
                        src={currentData.image}
                        alt={currentData.title}
                        fill
                        className="object-cover opacity-60"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
                </motion.div>
            </AnimatePresence>

            {/* CONTENT OVERLAY */}
            <div className="absolute inset-0 z-10 flex flex-col md:flex-row">

                {/* Left Panel: Text */}
                <div className="w-full md:w-1/2 h-full flex flex-col justify-center p-8 md:p-20">
                    <motion.div
                        key={chapter + "-text"}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        {/* Theme Label */}
                        <div className={`inline-block px-3 py-1 mb-6 border rounded-full text-[10px] uppercase tracking-[0.3em] font-bold ${isAmber ? 'border-amber-500/50 text-amber-400' : 'border-blue-500/50 text-blue-300'}`}>
                            {data.title} • Chapter {chapter + 1}/{totalChapters}
                        </div>

                        {/* Title */}
                        {/* Title */}
                        <h2 className="text-5xl md:text-7xl font-[family-name:var(--font-cinzel)] text-[#f4f1ea] mb-2 leading-tight">
                            {currentData.title}
                        </h2>
                        <p className={`text-sm uppercase tracking-widest mb-8 font-[family-name:var(--font-cinzel)] ${isAmber ? 'text-[#e3d5b5]/60' : 'text-blue-200/60'}`}>
                            {currentData.year}
                        </p>

                        {/* Body Text */}
                        <p className="text-xl md:text-2xl text-[#f4f1ea]/80 font-[family-name:var(--font-cormorant)] font-light leading-relaxed max-w-xl">
                            {currentData.text}
                        </p>

                        {/* Controls */}
                        <div className="flex items-center gap-6 mt-12">
                            <button
                                onClick={prevChapter}
                                disabled={chapter === 0}
                                className="p-4 rounded-full border border-white/10 hover:bg-white/10 disabled:opacity-20 transition-all"
                            >
                                <ChevronLeft />
                            </button>

                            <div className="h-[2px] w-24 bg-white/10 relative overflow-hidden">
                                <motion.div
                                    className={`absolute inset-y-0 left-0 ${isAmber ? 'bg-amber-500' : 'bg-blue-500'}`}
                                    initial={{ width: "0%" }}
                                    animate={{ width: `${((chapter + 1) / totalChapters) * 100}%` }}
                                />
                            </div>

                            <button
                                onClick={nextChapter}
                                disabled={chapter === totalChapters - 1}
                                className={`p-4 rounded-full border border-white/10 hover:bg-white/10 disabled:opacity-20 transition-all ${chapter < totalChapters - 1 ? 'animate-pulse' : ''}`}
                            >
                                <ChevronRight />
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-8 right-8 text-white/50 hover:text-white uppercase tracking-widest text-xs flex items-center gap-2 bg-black/50 px-4 py-2 rounded-full backdrop-blur-md border border-white/10"
                >
                    Close Story <X size={14} />
                </button>
            </div>
        </motion.div>
    );
}