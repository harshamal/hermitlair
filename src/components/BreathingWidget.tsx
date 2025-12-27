"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface BreathingWidgetProps {
    onComplete?: () => void;
    className?: string;
}

export default function BreathingWidget({ onComplete, className }: BreathingWidgetProps) {
    const [phase, setPhase] = useState<"idle" | "inhale" | "hold" | "exhale">("idle");
    const [cycleCount, setCycleCount] = useState(0);
    const MAX_CYCLES = 3; // Number of breath cycles before auto-completing

    useEffect(() => {
        if (phase === "idle") return;

        let timeout: NodeJS.Timeout;

        if (phase === "inhale") {
            timeout = setTimeout(() => setPhase("hold"), 4000); // Inhale 4s
        } else if (phase === "hold") {
            timeout = setTimeout(() => setPhase("exhale"), 2000); // Hold 2s
        } else if (phase === "exhale") {
            timeout = setTimeout(() => {
                if (cycleCount < MAX_CYCLES - 1) {
                    setCycleCount((c) => c + 1);
                    setPhase("inhale");
                } else {
                    setPhase("idle");
                    if (onComplete) onComplete();
                }
            }, 6000); // Exhale 6s
        }

        return () => clearTimeout(timeout);
    }, [phase, cycleCount, MAX_CYCLES, onComplete]);

    const startBreathing = () => {
        setCycleCount(0);
        setPhase("inhale");
    };

    return (
        <div className={cn("flex flex-col items-center justify-center gap-8", className)}>
            <div className="relative flex items-center justify-center">
                {/* Outer pulsing rings */}
                <AnimatePresence>
                    {phase !== "idle" && (
                        <>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{
                                    opacity: [0, 0.3, 0],
                                    scale: [1, 1.5, 1.5]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute w-64 h-64 rounded-full bg-ochre/20 blur-xl"
                            />
                        </>
                    )}
                </AnimatePresence>

                {/* Main Circle */}
                <motion.div
                    animate={{
                        scale: phase === "inhale" ? 1.3 : phase === "exhale" ? 1.0 : 1.3,
                        borderColor: phase !== "idle" ? "var(--color-ochre)" : "rgba(0,0,0,0.1)",
                    }}
                    transition={{ duration: phase === "inhale" ? 4 : phase === "exhale" ? 6 : 0.5, ease: "easeInOut" }}
                    className="w-48 h-48 rounded-full border-2 border-black/10 flex items-center justify-center relative z-10 bg-sand/50 backdrop-blur-sm"
                >
                    <motion.span
                        key={phase}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="text-xl font-medium text-forest tracking-widest uppercase"
                    >
                        {phase === "idle" ? "Breathe" : phase}
                    </motion.span>
                </motion.div>
            </div>

            <button
                onClick={startBreathing}
                disabled={phase !== "idle"}
                className={cn(
                    "px-6 py-2 rounded-full border border-forest/30 text-forest hover:bg-forest hover:text-sand transition-all duration-500",
                    phase !== "idle" && "opacity-0 pointer-events-none"
                )}
            >
                Start Practice
            </button>
        </div>
    );
}
