"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { BookOpen, Star, Moon, Mountain, Scroll, Droplets, Skull, Compass, Feather, ArrowRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

// --- Story Data ---
const stories = [
    {
        id: "origin",
        year: "Prehistory",
        title: "The Sleeping Giant",
        subtitle: "Dimbulagala (Gunner's Quoin)",
        icon: Mountain,
        text: "Before history began, the earth shifted. Rising from the dry plains of Polonnaruwa stands Dimbulagala. To the British, it was 'Gunner's Quoin'. To the ancients, a celestial marker. Legends say the rock is a sleeping giant, guarding a vortex of energy that connects the earth to the stars.",
        mystery: "Locals whisper that on certain moonless nights, a strange glow emanates from the highest peak—not fire, but something colder.",
        image: "https://hdblob1.blob.core.windows.net/hermit/DSCN0165.JPG",
        quote: "The earth remembers what we have forgotten."
    },
    {
        id: "indigenous",
        year: "The Lost Tribe",
        title: "The Last Stronghold",
        subtitle: "The Lineage of Yapa",
        icon: Feather,
        text: "This rock was the final refuge of the Yaksha clans and later, the Vedda people. It is here that Handage Yapa, a tribal chieftain of the Millana Vedda clan, held court. His bloodline didn't vanish; it merged with the spiritual. His own son cast aside the bow for robes, becoming the first tribal descendant to lead the Dimbulagala Monastery.",
        mystery: "Deep in the 'Caves of the Hunters', markings remain that predate Buddhism. Maps of the stars? Or hunting grounds of the spirit?",
        image: "https://hdblob1.blob.core.windows.net/hermit/ha%20(1).jpg",
        quote: "We do not own the land. We are the land."
    },
    {
        id: "monks",
        year: "3rd Century BC",
        title: "The Invisible Library",
        subtitle: "The Caves of the Arhats",
        icon: Scroll,
        text: "For over 2,000 years, this rock has been a sanctuary for Arhats—monks who achieved enlightenment. The caves are honeycombed with inscriptions in early Brahmi script. It is said they didn't just record history, but hid secret knowledge of the mind: maps to higher dimensions of consciousness.",
        mystery: "Archaeologists have found inscriptions that cannot be translated. Are they a lost language, or a code for the initiated?",
        image: "https://hdblob1.blob.core.windows.net/hermit/ha%20(10).jpg",
        quote: "Silence is the loudest voice."
    },
    {
        id: "water",
        year: "Timeless",
        title: "The Water That Never Dies",
        subtitle: "Namal Pokuna (Lotus Pond)",
        icon: Droplets,
        text: "High in the rocky canopy lies Namal Pokuna. Despite the scorching heat of the dry zone, this ancient pool never runs dry. It was believed to be a healing bath for the sick, fed by a spring that touches the roots of medicinal ironwood trees.",
        mystery: "It is said that one who bathes here with a pure heart washes away not just dirt, but the karma of a thousand years.",
        image: "https://hdblob1.blob.core.windows.net/hermit/DSCN0323.JPG",
        quote: "Water has memory."
    },
    {
        id: "sky",
        year: "Unknown",
        title: "The Sky Gate",
        subtitle: "Connection to the Cosmos",
        icon: Star,
        text: "Dimbulagala is often linked to the Ravana legends. Some believe the unique magnetic anomaly of the rock served as a landing point for the Vimanas (flying chariots) of old. The geometry of the mountain aligns perfectly with constellations lost to modern astronomy.",
        mystery: "Compass needles spin wildly in certain caves. What lies beneath the rock that disturbs the magnetic field?",
        image: "https://hdblob1.blob.core.windows.net/hermit/ha%20(14).jpg",
        quote: "Look up. We are not alone."
    }
];

export default function StorySection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    // Auto-advance logic (optional, but good for horizontal sliders)
    // const nextStory = () => setActiveIndex((prev) => (prev + 1) % stories.length);
    // const prevStory = () => setActiveIndex((prev) => (prev - 1 + stories.length) % stories.length);

    return (
        <section ref={containerRef} className="relative min-h-screen bg-stone-950 flex flex-col justify-center py-24 overflow-hidden">

            {/* Background Layer - Full Screen Crossfade */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={stories[activeIndex].id}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={stories[activeIndex].image}
                            alt={stories[activeIndex].title}
                            fill
                            className="object-cover opacity-40"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/80 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950" />
                    </motion.div>
                </AnimatePresence>

                {/* Ambient Particles */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 animate-pulse" />
            </div>

            <div className="relative z-10 max-w-[1800px] mx-auto px-6 w-full h-full flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

                {/* LEFT SIDE: The "Book" / Navigation */}
                <div className="lg:w-1/3 flex flex-col justify-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="space-y-2"
                    >
                        <div className="flex items-center gap-3 text-amber-500 mb-2">
                            <div className="h-px w-8 bg-amber-500" />
                            <span className="uppercase tracking-[0.3em] text-xs font-bold">Legends of the Lair</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-serif text-white leading-none">
                            Secrets of <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600">The Rock</span>
                        </h2>
                    </motion.div>

                    {/* Story List / Menu */}
                    <div className="space-y-2">
                        {stories.map((story, idx) => (
                            <button
                                key={story.id}
                                onClick={() => setActiveIndex(idx)}
                                className={cn(
                                    "group w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center justify-between border",
                                    idx === activeIndex
                                        ? "bg-white/10 border-amber-500/30 shadow-[0_0_30px_rgba(251,191,36,0.1)]"
                                        : "bg-transparent border-transparent hover:bg-white/5 hover:border-white/10"
                                )}
                            >
                                <div className="flex items-center gap-4">
                                    <span className={cn(
                                        "text-sm font-mono transition-colors",
                                        idx === activeIndex ? "text-amber-400" : "text-stone-600 group-hover:text-stone-400"
                                    )}>
                                        0{idx + 1}
                                    </span>
                                    <span className={cn(
                                        "text-lg font-serif transition-colors",
                                        idx === activeIndex ? "text-white" : "text-stone-500 group-hover:text-stone-300"
                                    )}>
                                        {story.title}
                                    </span>
                                </div>
                                {idx === activeIndex && (
                                    <motion.div layoutId="active-arrow">
                                        <ArrowRight size={16} className="text-amber-400" />
                                    </motion.div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* RIGHT SIDE: The Active Story Card (Horizontal Layout) */}
                <div className="lg:w-2/3 w-full relative min-h-[500px] flex items-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
                            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, x: -50, filter: "blur(10px)" }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="w-full bg-stone-900/60 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-12 relative overflow-hidden group"
                        >
                            {/* Glowing Accent */}
                            <div className="absolute -right-32 -top-32 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px]" />

                            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8">

                                {/* Icon & Year */}
                                <div className="md:col-span-3 flex flex-col items-start justify-between h-full border-r border-white/5 pr-8">
                                    <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-900/40 to-stone-900 border border-amber-500/20 text-amber-200 shadow-lg mb-8">
                                        {(() => {
                                            const Icon = stories[activeIndex].icon;
                                            return <Icon size={40} strokeWidth={1.5} />;
                                        })()}
                                    </div>
                                    <div className="mt-auto">
                                        <div className="text-stone-500 text-xs uppercase tracking-widest mb-1">Era</div>
                                        <div className="text-amber-500 font-mono text-lg">{stories[activeIndex].year}</div>
                                    </div>
                                </div>

                                {/* Text Content */}
                                <div className="md:col-span-9 space-y-8">
                                    <div>
                                        <h3 className="text-4xl md:text-5xl font-serif text-white mb-2">{stories[activeIndex].title}</h3>
                                        <p className="text-stone-400 uppercase tracking-widest text-sm">{stories[activeIndex].subtitle}</p>
                                    </div>

                                    <p className="text-xl text-stone-200 leading-relaxed font-light">
                                        {stories[activeIndex].text}
                                    </p>

                                    <div className="bg-black/30 p-6 rounded-xl border-l-2 border-amber-500/50 flex gap-4">
                                        <div className="shrink-0 mt-1">
                                            <Moon size={20} className="text-amber-500" />
                                        </div>
                                        <div>
                                            <div className="text-amber-500 font-bold uppercase text-xs tracking-widest mb-1">The Mystery</div>
                                            <p className="text-stone-400 italic font-serif text-sm leading-relaxed">
                                                "{stories[activeIndex].mystery}"
                                            </p>
                                        </div>
                                    </div>

                                    <div className="pt-4 border-t border-white/5">
                                        <p className="text-stone-500 text-sm font-serif italic">"{stories[activeIndex].quote}"</p>
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
}
