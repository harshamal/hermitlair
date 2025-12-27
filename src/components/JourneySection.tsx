"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Brain, Leaf, Flame, ArrowRight, X, Wind, Droplets, Sparkles, MoveRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

// --- Types ---
type JourneyType = "mindfulness" | "nature" | "reset";

interface JourneyStep {
    id: string;
    title: string;
    text: string[];
    subtext?: string;
    visualType: "breath" | "particles" | "lotus" | "forest" | "water" | "fire" | "list" | "cinematic";
    listItems?: string[];
    bgImage: string; // Background is now mandatory for the immersive feel
}

interface JourneyData {
    id: JourneyType;
    title: string;
    subtitle: string;
    description: string;
    icon: React.ElementType;
    color: string;
    accentColor: string;
    bgColor: string;
    steps: JourneyStep[];
}

// --- Data: The Narrative ---
const journeys: JourneyData[] = [
    {
        id: "mindfulness",
        title: "The Path of Silence",
        subtitle: "Mindfulness & Higher Consciousness",
        description: "Leave the noise of the world behind. Step into a silence so deep, you can finally hear yourself.",
        icon: Brain,
        color: "text-amber-100",
        accentColor: "bg-amber-500",
        bgColor: "bg-stone-950",
        steps: [
            {
                id: "m1",
                title: "The Threshold",
                text: ["The world is loud.", "Here, the mountain swallows the noise."],
                subtext: "Take a deep breath. You have arrived.",
                visualType: "cinematic",
                bgImage: "https://hdblob1.blob.core.windows.net/hermit/hermit%20(12).jpg"
            },
            {
                id: "m2",
                title: "Dissolve",
                text: ["Your thoughts are like clouds.", "Watch them drift. Do not hold them."],
                subtext: "Let go of the need to know.",
                visualType: "particles",
                bgImage: "https://hdblob1.blob.core.windows.net/hermit/DSCN0190.JPG"
            },
            {
                id: "m3",
                title: "Presence",
                text: ["There is no past here. No future.", "Only the sensation of air on skin."],
                subtext: "Be exactly where you are.",
                visualType: "breath",
                bgImage: "https://hdblob1.blob.core.windows.net/hermit/ha%20(13).jpg"
            },
            {
                id: "m4",
                title: "The Practice",
                text: ["We do not just sit. We become."],
                visualType: "list",
                listItems: [
                    "Silent Walking Meditation",
                    "Deep Forest Breathwork",
                    "Sensory Deprivation (Cave)",
                    "Guidance by the Hermit"
                ],
                bgImage: "https://hdblob1.blob.core.windows.net/hermit/ha%20(10).jpg"
            }
        ]
    },
    {
        id: "nature",
        title: "The Roots of Being",
        subtitle: "Nature Immersion & Eco-Harmony",
        description: "You are not separate from this earth. Reconnect with the ancient rhythm that beats in the soil.",
        icon: Leaf,
        color: "text-emerald-100",
        accentColor: "bg-emerald-600",
        bgColor: "bg-stone-900",
        steps: [
            {
                id: "n1",
                title: "Into the Green",
                text: ["The forest has been waiting for you.", "Can you feel its eyes?"],
                subtext: "Walk softly. You are a guest.",
                visualType: "forest",
                bgImage: "https://hdblob1.blob.core.windows.net/hermit/DSCN0204.JPG"
            },
            {
                id: "n2",
                title: "Living Water",
                text: ["Water flows without effort.", "It teaches us the path of least resistance."],
                subtext: "Listen to the stream.",
                visualType: "water",
                bgImage: "https://hdblob1.blob.core.windows.net/hermit/hermit%20(17).jpg"
            },
            {
                id: "n3",
                title: "Earth & Bone",
                text: ["We build with the land, not against it.", "Mud, stone, timber, soul."],
                visualType: "cinematic",
                bgImage: "https://hdblob1.blob.core.windows.net/hermit/DSCN0165.JPG"
            },
            {
                id: "n4",
                title: "Eco-Living",
                text: ["A life in harmony."],
                visualType: "list",
                listItems: [
                    "Farm-to-Table Foraging",
                    "Natural Building Workshops",
                    "River Bathing Rituals",
                    "Tree Planting Ceremony"
                ],
                bgImage: "https://hdblob1.blob.core.windows.net/hermit/ha%20(1).jpg"
            }
        ]
    },
    {
        id: "reset",
        title: "The Great Unburdening",
        subtitle: "Inner Reset & Emotional Detox",
        description: "Put down the weight you have been carrying. The fire will burn away what you no longer need.",
        icon: Flame,
        color: "text-orange-100",
        accentColor: "bg-orange-600",
        bgColor: "bg-stone-950",
        steps: [
            {
                id: "r1",
                title: "The Weight",
                text: ["We carry invisible stones.", "Stress. Expectation. Grief."],
                subtext: "It is time to set them down.",
                visualType: "cinematic",
                bgImage: "https://hdblob1.blob.core.windows.net/hermit/DSCN0311.JPG"
            },
            {
                id: "r2",
                title: "The Burn",
                text: ["Fire transforms.", "Give your burdens to the flame."],
                subtext: "Watch them turn to ash.",
                visualType: "fire",
                bgImage: "https://hdblob1.blob.core.windows.net/hermit/DSCN0242.JPG" // Needs a fire image ideally
            },
            {
                id: "r3",
                title: "Rebirth",
                text: ["Empty space is not nothing.", "It is room for something new."],
                visualType: "lotus",
                bgImage: "https://hdblob1.blob.core.windows.net/hermit/ha%20(11).jpg"
            },
            {
                id: "r4",
                title: "Detox Methods",
                text: ["Systematic renewal."],
                visualType: "list",
                listItems: [
                    "Digital Detox (No Tech)",
                    "Emotional Release Writing",
                    "Fire Gazing Trance",
                    "Fasting & Clean Eating"
                ],
                bgImage: "https://hdblob1.blob.core.windows.net/hermit/DSCN0283.JPG"
            }
        ]
    }
];

// --- Visual Components ---

const FogOverlay = () => (
    <div className="absolute inset-0 z-10 pointer-events-none opacity-40 mix-blend-screen overflow-hidden">
        <motion.div
            animate={{ x: ["-10%", "10%"] }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/20 to-transparent blur-3xl"
        />
        <motion.div
            animate={{ x: ["10%", "-10%"] }}
            transition={{ duration: 25, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-b from-transparent via-green-400/10 to-transparent blur-2xl"
        />
    </div>
);

const BreathVisual = () => (
    <div className="relative flex items-center justify-center h-64 w-64">
        {[1, 2, 3].map((i) => (
            <motion.div
                key={i}
                animate={{ scale: [1, 1.8, 1], opacity: [0.1, 0, 0.1] }}
                transition={{ duration: 6, delay: i * 1, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full border border-white/30"
            />
        ))}
        <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-32 h-32 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center"
        >
            <Wind className="text-white/80 w-12 h-12" />
        </motion.div>
    </div>
);

const ListVisual = ({ items }: { items: string[] }) => (
    <div className="relative w-full max-w-md">
        <ul className="space-y-6">
            {items.map((item, i) => (
                <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.2, duration: 0.8 }}
                    className="flex items-center gap-4 text-xl md:text-2xl text-white/90 font-light tracking-wide border-b border-white/10 pb-4"
                >
                    <Sparkles size={16} className="text-amber-200 shrink-0" />
                    {item}
                </motion.li>
            ))}
        </ul>
    </div>
);

// --- Main Component ---

export default function JourneySection() {
    const [activeJourney, setActiveJourney] = useState<JourneyType | null>(null);
    const [stepIndex, setStepIndex] = useState(0);
    const [direction, setDirection] = useState(1); // 1 for forward, -1 for back

    const currentJourney = journeys.find(j => j.id === activeJourney);
    const currentStep = currentJourney?.steps[stepIndex];

    const handleNext = () => {
        if (!currentJourney) return;
        if (stepIndex < currentJourney.steps.length - 1) {
            setDirection(1);
            setStepIndex(prev => prev + 1);
        } else {
            handleClose();
        }
    };

    const handlePrev = () => {
        if (stepIndex > 0) {
            setDirection(-1);
            setStepIndex(prev => prev - 1);
        }
    };

    const handleClose = () => {
        setActiveJourney(null);
        setStepIndex(0);
        setDirection(1);
    };

    return (
        <section className="py-32 px-6 min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-stone-950">

            {/* Main Section Background */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://hdblob1.blob.core.windows.net/hermit/hermitback%20(2).png"
                    alt="Hermit's Lair Background"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-black/80" />
                <FogOverlay />
            </div>

            {/* Section Header */}
            <div className="max-w-4xl w-full mb-20 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-amber-200 uppercase tracking-[0.4em] text-xs font-bold mb-4 block">The Path</span>
                    <h2 className="text-5xl md:text-7xl font-[family-name:var(--font-cinzel)] text-white mb-6">
                        Choose Your <span className="text-amber-500 italic">Journey</span>
                    </h2>
                    <p className="text-lg text-stone-300 font-light max-w-2xl mx-auto font-[family-name:var(--font-cormorant)] italic text-2xl">
                        Three roads lead to the same center. Which one calls to you?
                    </p>
                </motion.div>
            </div>

            {/* The Three Portals */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl w-full relative z-10 px-4">
                {journeys.map((journey, idx) => (
                    <motion.div
                        key={journey.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2 }}
                        onClick={() => setActiveJourney(journey.id)}
                        className="group cursor-pointer relative h-[500px] rounded-[2rem] overflow-hidden border border-white/10 hover:border-amber-500/50 transition-all duration-700 shadow-2xl"
                    >
                        {/* Card Background */}
                        <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110">
                            {/* <Image
                                src={journey.steps[0].bgImage}
                                alt={journey.title}
                                fill
                                className="object-cover grayscale-50 group-hover:grayscale-0 transition-all duration-1000"
                            /> */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-10 group-hover:opacity-80 transition-opacity duration-700" />
                        </div>

                        {/* Content */}
                        <div className="absolute inset-0 flex flex-col justify-end p-10">
                            <motion.div
                                className={cn("w-16 h-16 rounded-full flex items-center justify-center mb-6 backdrop-blur-md bg-white/10 border border-white/20 group-hover:scale-110 transition-transform duration-500", journey.color)}
                            >
                                <journey.icon size={32} />
                            </motion.div>

                            <h3 className="text-3xl font-serif text-white mb-3 group-hover:text-amber-100 transition-colors duration-300">
                                {journey.title}
                            </h3>

                            <p className="text-stone-400 text-sm font-medium uppercase tracking-widest mb-4">
                                {journey.subtitle}
                            </p>

                            <p className="text-stone-300 font-light leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                {journey.description}
                            </p>

                            <div className="mt-8 flex items-center gap-2 text-amber-200 text-sm font-medium uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                                Begin Journey <MoveRight size={16} />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* IMMERSIVE OVERLAY */}
            <AnimatePresence mode="wait">
                {activeJourney && currentJourney && currentStep && (
                    <motion.div
                        key="overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white overflow-hidden"
                    >
                        {/* Dynamic Background Layer with Zoom Effect */}
                        <AnimatePresence mode="popLayout">
                            <motion.div
                                key={currentStep.id}
                                initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                                animate={{ opacity: 0.4, scale: 1, filter: "blur(0px)" }}
                                exit={{ opacity: 0, scale: 0.95, filter: "blur(5px)" }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                                className="absolute inset-0 z-0"
                            >
                                <Image
                                    src={currentStep.bgImage}
                                    alt="Background"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
                            </motion.div>
                        </AnimatePresence>

                        {/* Floating Particles/Fog */}
                        <FogOverlay />

                        {/* Close Button */}
                        <button
                            onClick={handleClose}
                            className="absolute top-8 right-8 z-50 p-4 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 transition-all hover:rotate-90 duration-500"
                        >
                            <X size={24} className="text-white/70" />
                        </button>

                        {/* Main Content Container */}
                        <div className="relative z-10 max-w-6xl w-full px-6 h-full flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">

                            {/* Left Side: Visual/Icon */}
                            <motion.div
                                key={`visual-${stepIndex}`}
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className="flex-1 flex items-center justify-center"
                            >
                                {currentStep.visualType === "breath" && <BreathVisual />}
                                {currentStep.visualType === "list" && <ListVisual items={currentStep.listItems || []} />}
                                {currentStep.visualType === "cinematic" && (
                                    <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(255,255,255,0.1)]">
                                        <Image src={currentStep.bgImage} alt="Circle" fill className="object-cover opacity-80" />
                                    </div>
                                )}
                                {/* Fallback icons for other types */}
                                {["particles", "forest", "water", "fire", "lotus"].includes(currentStep.visualType) && (
                                    <div className="p-12 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_60px_rgba(255,255,255,0.1)]">
                                        <currentJourney.icon size={80} strokeWidth={0.5} className="text-white/80" />
                                    </div>
                                )}
                            </motion.div>

                            {/* Right Side: Text Narrative */}
                            <motion.div
                                key={`text-${stepIndex}`}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 50 }}
                                transition={{ duration: 1, delay: 0.4 }}
                                className="flex-1 text-left space-y-8"
                            >
                                <div className="space-y-2">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "4rem" }}
                                        className={cn("h-1 mb-6", currentJourney.accentColor)}
                                    />
                                    <h2 className="text-5xl md:text-7xl font-serif text-white leading-tight tracking-tight drop-shadow-lg">
                                        {currentStep.title}
                                    </h2>
                                </div>

                                <div className="space-y-6">
                                    {currentStep.text.map((line, i) => (
                                        <p key={i} className="text-xl md:text-3xl font-light text-stone-200 leading-relaxed">
                                            {line}
                                        </p>
                                    ))}
                                    {currentStep.subtext && (
                                        <p className="text-lg text-amber-200/80 italic font-serif mt-4 border-l-2 border-amber-500/30 pl-4">
                                            {currentStep.subtext}
                                        </p>
                                    )}
                                </div>

                                {/* Navigation Controls */}
                                <div className="flex items-center gap-6 pt-12">
                                    {stepIndex > 0 && (
                                        <button
                                            onClick={handlePrev}
                                            className="text-stone-400 hover:text-white transition-colors uppercase tracking-widest text-sm font-medium"
                                        >
                                            Back
                                        </button>
                                    )}
                                    <button
                                        onClick={handleNext}
                                        className="group flex items-center gap-4 px-8 py-4 bg-white text-black rounded-full hover:bg-amber-50 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                                    >
                                        <span className="uppercase tracking-widest font-bold text-sm">
                                            {stepIndex === currentJourney.steps.length - 1 ? "Complete" : "Go Deeper"}
                                        </span>
                                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </motion.div>

                        </div>

                        {/* Progress Bar */}
                        <div className="absolute bottom-0 left-0 w-full h-2 bg-white/10">
                            <motion.div
                                className={cn("h-full", currentJourney.accentColor)}
                                initial={{ width: `${(stepIndex / currentJourney.steps.length) * 100}%` }}
                                animate={{ width: `${((stepIndex + 1) / currentJourney.steps.length) * 100}%` }}
                                transition={{ duration: 1, ease: "easeInOut" }}
                            />
                        </div>

                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    );
}
