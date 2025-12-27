"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue, animate } from "framer-motion";
import Image from "next/image";
import { Maximize2, X, Pause } from "lucide-react";

// Constructed from user's blob storage screenshots
const galleryImages = [
    // Nature / DSCN Series
    "https://hdblob1.blob.core.windows.net/hermit/DSCN0136.JPG",
    "https://hdblob1.blob.core.windows.net/hermit/DSCN0142.JPG",
    "https://hdblob1.blob.core.windows.net/hermit/DSCN0157.JPG",
    "https://hdblob1.blob.core.windows.net/hermit/DSCN0162.JPG",
    "https://hdblob1.blob.core.windows.net/hermit/DSCN0165.JPG",
    "https://hdblob1.blob.core.windows.net/hermit/DSCN0190.JPG",
    "https://hdblob1.blob.core.windows.net/hermit/DSCN0196.JPG",
    "https://hdblob1.blob.core.windows.net/hermit/DSCN0204.JPG",
    "https://hdblob1.blob.core.windows.net/hermit/DSCN0234.JPG",
    "https://hdblob1.blob.core.windows.net/hermit/DSCN0242.JPG",
    "https://hdblob1.blob.core.windows.net/hermit/DSCN0283.JPG",
    "https://hdblob1.blob.core.windows.net/hermit/DSCN0311.JPG",
    "https://hdblob1.blob.core.windows.net/hermit/DSCN0323.JPG",
    // Hermit & HA Series
    "https://hdblob1.blob.core.windows.net/hermit/ha%20(4).jpg",
    "https://hdblob1.blob.core.windows.net/hermit/ha%20(5).jpg",
    "https://hdblob1.blob.core.windows.net/hermit/ha%20(6).jpg",
    "https://hdblob1.blob.core.windows.net/hermit/ha%20(7).jpg",
    "https://hdblob1.blob.core.windows.net/hermit/ha%20(8).jpg",
    "https://hdblob1.blob.core.windows.net/hermit/ha%20(9).jpg",
    "https://hdblob1.blob.core.windows.net/hermit/ha%20(30).jpg",
    "https://hdblob1.blob.core.windows.net/hermit/ha%20(31).jpg",
    "https://hdblob1.blob.core.windows.net/hermit/hermit%20(1).jpg",
    "https://hdblob1.blob.core.windows.net/hermit/hermit%20(10).jpg",
    "https://hdblob1.blob.core.windows.net/hermit/hermit%20(11).jpg",
    "https://hdblob1.blob.core.windows.net/hermit/hermit%20(12).jpg",
];

// Split images into two rows for the marquee
const row1 = galleryImages.slice(0, Math.ceil(galleryImages.length / 2));
const row2 = galleryImages.slice(Math.ceil(galleryImages.length / 2));

export default function GallerySection() {
    const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

    return (
        <section className="relative py-32 bg-[#fbf9f5] overflow-hidden min-h-screen flex flex-col justify-center">

            {/* Background Texture */}
            <div className="absolute inset-0 pointer-events-none opacity-30 mix-blend-multiply"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238b7355' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
            />

            <div className="relative z-10 w-full mb-16 px-6 text-center">
                <span className="text-[#8b7355] uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Visual Diary</span>
                <h2 className="text-5xl md:text-7xl font-[family-name:var(--font-cinzel)] text-[#4a3f2e]">
                    Stream of <span className="text-[#8b7355] italic">Memories</span>
                </h2>
            </div>

            {/* Marquee Rows */}
            <div className="flex flex-col gap-8 md:gap-12 relative z-10">
                {/* Row 1: Moves Left */}
                <MarqueeRow images={row1} direction="left" speed={80} setLightbox={setLightboxSrc} />

                {/* Row 2: Moves Right */}
                <MarqueeRow images={row2} direction="right" speed={90} setLightbox={setLightboxSrc} />
            </div>

            {/* Lightbox Modal */}
            {lightboxSrc && (
                <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4">
                    <button
                        onClick={() => setLightboxSrc(null)}
                        className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-50 transform hover:scale-110 duration-200"
                    >
                        <X size={40} />
                    </button>
                    <div className="relative w-full max-w-7xl h-[85vh] p-4">
                        <Image
                            src={lightboxSrc}
                            alt="Gallery Preview"
                            fill
                            className="object-contain"
                            priority
                            sizes="100vw"
                        />
                    </div>
                </div>
            )}
        </section>
    );
}

function MarqueeRow({ images, direction, speed, setLightbox }: { images: string[], direction: "left" | "right", speed: number, setLightbox: (src: string) => void }) {

    // We duplicate the array to create a seamless loop
    const duplicatedImages = [...images, ...images, ...images];

    return (
        <div className="w-full overflow-hidden flex relative group">
            {/* Gradient Masks for fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 z-10 bg-gradient-to-r from-[#fbf9f5] to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 z-10 bg-gradient-to-l from-[#fbf9f5] to-transparent pointer-events-none" />

            <motion.div
                className="flex gap-4 md:gap-8 min-w-max"
                animate={{
                    x: direction === "left" ? ["0%", "-33.33%"] : ["-33.33%", "0%"]
                }}
                transition={{
                    duration: speed,
                    ease: "linear",
                    repeat: Infinity
                }}
            >
                {duplicatedImages.map((src, i) => (
                    <div
                        key={i}
                        className="relative w-[280px] h-[180px] md:w-[400px] md:h-[260px] flex-shrink-0 cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 md:hover:scale-105 filter grayscale-[20%] hover:grayscale-0"
                        onClick={() => setLightbox(src)}
                    >
                        <Image
                            src={src}
                            alt="Gallery Image"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 300px, 400px"
                            loading="lazy"
                        />
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300 flex items-center justify-center group-hover/card">
                            <Maximize2 className="text-white opacity-0 hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" size={24} />
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
