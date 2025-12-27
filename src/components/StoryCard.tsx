"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface StoryCardProps {
    title: string;
    summary: string;
    content: string;
    source?: string;
    image?: string; // Placeholder for now
    className?: string;
}

export default function StoryCard({ title, summary, content, source, className }: StoryCardProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={cn("w-full max-w-2xl bg-white/50 backdrop-blur-md border border-stone-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-500", className)}>
            <div className="flex justify-between items-start cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                <div>
                    <h3 className="text-xl font-serif text-forest mb-2">{title}</h3>
                    <p className="text-stone-600 leading-relaxed">{summary}</p>
                </div>
                <button className="ml-4 p-2 text-stone-400 hover:text-forest transition-colors">
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="pt-6 mt-4 border-t border-stone-100 text-stone-700 leading-loose space-y-4">
                            <div dangerouslySetInnerHTML={{ __html: content }} />
                            {source && (
                                <p className="text-xs text-stone-400 mt-4 italic">
                                    Source: {source}
                                </p>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
