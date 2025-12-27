"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Calendar, Users, Mountain, PenTool, Flower, Brain } from "lucide-react";
import Image from "next/image";

export default function LegendSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const y2 = useTransform(scrollYProgress, [0, 1], [-30, 30]);

    return (
        <section
            ref={containerRef}
            className="relative py-32 px-6 bg-gradient-to-b from-warm-white via-linen to-cream overflow-hidden"
        >
            {/* Enhanced Background */}
            <div className="absolute inset-0">
                {/* Gradient orbs */}
                <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-sage/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-champagne/5 rounded-full blur-3xl" />

                {/* Subtle pattern */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(168, 181, 160, 0.5) 2px, transparent 0)`,
                    backgroundSize: '60px 60px'
                }} />
            </div>

            <div className="max-w-[1300px] mx-auto relative z-10">
                {/* Section Header - Full Width */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-24"
                >
                    <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/70 backdrop-blur-md border border-sage/30 mb-8 shadow-lg">
                        <Sparkles className="w-4 h-4 text-sage-dark" />
                        <span className="text-xs tracking-[0.25em] uppercase text-stone font-medium">
                            Ancient Heritage
                        </span>
                    </div>

                    <h2 className="text-6xl md:text-7xl lg:text-8xl font-serif text-shadow mb-6 tracking-tight leading-[1.1]"
                        style={{ fontWeight: 300 }}>
                        The Legend of
                        <br />
                        <span className="text-sage-dark italic">Dimbulagala</span>
                    </h2>

                    <p className="text-xl md:text-2xl text-stone-light font-light max-w-4xl mx-auto leading-relaxed">
                        For over 2,500 years, this sacred mountain has called to those seeking enlightenment.
                        <br />
                        <span className="text-lg text-stone-light/70">Three eras. One eternal truth. Your transformation awaits.</span>
                    </p>
                </motion.div>

                {/* Story 1 - Full Width Magazine Layout */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-32"
                >
                    <div className="grid lg:grid-cols-12 gap-8 items-start">
                        {/* Left Column - Image */}
                        <div className="lg:col-span-7">
                            <motion.div style={{ y: y1 }} className="relative group perspective-1000">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 2.5, ease: "easeOut" }}
                                    className="relative p-4 md:p-6 bg-[#fbf9f5] rounded-xl shadow-2xl border border-[#e6d2a0]/50"
                                >
                                    {/* Frame Texture */}
                                    <div className="absolute inset-0 opacity-20 pointer-events-none rounded-xl"
                                        style={{
                                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.3'/%3E%3C/svg%3E")`
                                        }}
                                    />

                                    {/* Inner Gold Rim */}
                                    <div className="absolute inset-3 md:inset-4 border border-[#8b7355]/30 rounded-lg pointer-events-none" />

                                    {/* Image Container */}
                                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-inner border border-[#8b7355]/10">
                                        <Image
                                            src="https://hdblob1.blob.core.windows.net/hermit/ha%20(1).jpg"
                                            alt="Ancient Dimbulagala Rock"
                                            fill
                                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                        />

                                        {/* Vintage Overlay */}
                                        <div className="absolute inset-0 bg-sepia-[0.3] opacity-20 group-hover:opacity-10 transition-opacity duration-700" />
                                        <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.3)] pointer-events-none" />
                                    </div>

                                    {/* Plaque */}
                                    <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-b from-[#8b7355] to-[#6b5744] text-white text-xs font-serif tracking-widest uppercase rounded shadow-lg border border-[#e6d2a0]/30 min-w-[200px] text-center">
                                        The Sacred Grounds
                                    </div>
                                </motion.div>


                            </motion.div>
                        </div>

                        {/* Right Column - Content (Realistic Scroll Style) */}
                        <div className="lg:col-span-5 relative group px-4 md:px-6">
                            {/* Top Golden Rod */}
                            <div className="relative z-20 h-4 md:h-5 w-[108%] -left-[4%] bg-gradient-to-b from-[#7c6340] via-[#d4b483] to-[#7c6340] rounded-full shadow-xl flex items-center justify-between">
                                {/* Left Finial */}
                                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-[#e6cfa5] to-[#8b7355] shadow-lg -ml-1 border border-[#5c4d35]" />
                                {/* Right Finial */}
                                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-bl from-[#e6cfa5] to-[#8b7355] shadow-lg -mr-1 border border-[#5c4d35]" />
                            </div>

                            {/* Paper Body - Animated Unfurling */}
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                whileInView={{ height: "auto", opacity: 1 }}
                                transition={{ duration: 2.5, ease: "easeInOut" }}
                                viewport={{ once: true, margin: "-100px" }}
                                className="relative z-10 mx-auto w-full -my-2.5 px-6 md:px-10 shadow-2xl bg-gradient-to-r from-[#e3d5b5] via-[#fdfbf7] via-60% to-[#e3d5b5] overflow-hidden"
                            >
                                <div className="py-12">
                                    {/* Paper Texture & Effects */}
                                    <div className="absolute inset-0 opacity-[0.15] mix-blend-multiply pointer-events-none"
                                        style={{
                                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`
                                        }}
                                    />
                                    {/* Surface Sheen (Cylindrical Highlight) */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-white/40 to-black/5 pointer-events-none mix-blend-overlay" />
                                    {/* Curvature Shadows (Top/Bottom) */}
                                    <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/10 to-transparent pointer-events-none" />
                                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />

                                    {/* Content Wrapper - Typing Animation */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ staggerChildren: 0.05, delayChildren: 0.5 }}
                                        viewport={{ once: true }}
                                        className="relative z-10 space-y-6"
                                    >
                                        <motion.div
                                            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                                            className="flex justify-center mb-2"
                                        >
                                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#8b7355]/10 border border-[#8b7355]/20 backdrop-blur-sm">
                                                <span className="text-sm font-bold text-[#8b7355] tracking-widest uppercase font-[family-name:var(--font-cinzel)]">500 BC</span>
                                            </div>
                                        </motion.div>

                                        <motion.div className="relative text-center">
                                            <motion.h3
                                                variants={{ hidden: { opacity: 0, clipPath: "inset(0 100% 0 0)" }, visible: { opacity: 1, clipPath: "inset(0 0 0 0)", transition: { duration: 1.5, ease: "easeInOut" } } }}
                                                className="text-4xl md:text-3xl lg:text-4xl font-[family-name:var(--font-cinzel)] text-[#4a3f2e] leading-[0.9] tracking-tight drop-shadow-sm inline-block"
                                            >
                                                The Sacred Rock
                                            </motion.h3>
                                            <motion.div
                                                initial={{ opacity: 0, x: -10, rotate: -10 }}
                                                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                                                transition={{ delay: 2, duration: 1 }}
                                                className="absolute -right-8 -top-8 text-[#8b7355]/40 hidden md:block"
                                            >
                                                <PenTool className="w-8 h-8" />
                                            </motion.div>
                                        </motion.div>

                                        <div className="space-y-4 text-xl md:text-2xl text-[#5a4a3a] font-[family-name:var(--font-cormorant)] italic leading-relaxed text-justify tracking-wide">
                                            <motion.p
                                                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                                                className="first-letter:text-6xl first-letter:font-[family-name:var(--font-cinzel)] first-letter:not-italic first-letter:text-[#8b7355] first-letter:float-left first-letter:mr-3 first-letter:mt-1"
                                            >
                                                Long before kingdoms rose and fell, Buddhist monks discovered this towering
                                                rock formation rising from the jungle. They sensed something profound—an energy
                                                that stilled the mind and opened the heart.
                                            </motion.p>
                                            <motion.p variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                                                Here, carved into the living stone, they built meditation caves and chambers.
                                                The rock became known as <span className="font-bold text-[#6b5744] not-italic">"Dimbul-agala" </span>
                                                the Misty Rock, named for the clouds that embraced its peak each dawn.
                                            </motion.p>
                                        </div>

                                        {/* Separator */}
                                        <motion.div variants={{ hidden: { opacity: 0, scaleX: 0 }, visible: { opacity: 1, scaleX: 1 } }} className="flex items-center justify-center py-4">
                                            <div className="w-1/2 h-px bg-gradient-to-r from-transparent via-[#8b7355]/30 to-transparent" />
                                        </motion.div>

                                        {/* Key facts */}
                                        <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="grid grid-cols-2 gap-4">
                                            <div className="p-3 text-center">
                                                <Mountain className="w-6 h-6 text-[#8b7355] mx-auto mb-2" />
                                                <p className="text-sm font-bold text-[#6b5744] font-[family-name:var(--font-cinzel)]">Sacred Site</p>
                                                <p className="text-xl text-[#5a4a3a]/80 font-[family-name:var(--font-cormorant)] italic">Ancient Heritage</p>
                                            </div>
                                            <div className="p-3 text-center">
                                                <Users className="w-6 h-6 text-[#8b7355] mx-auto mb-2" />
                                                <p className="text-sm font-bold text-[#6b5744] font-[family-name:var(--font-cinzel)]">Pilgrimage</p>
                                                <p className="text-xl text-[#5a4a3a]/80 font-[family-name:var(--font-cormorant)] italic">Seekers' Path</p>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                </div>
                            </motion.div>

                            {/* Bottom Golden Rod */}
                            <div className="relative z-20 h-4 md:h-5 w-[108%] -left-[4%] bg-gradient-to-b from-[#7c6340] via-[#d4b483] to-[#7c6340] rounded-full shadow-xl flex items-center justify-between">
                                {/* Left Finial */}
                                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-[#e6cfa5] to-[#8b7355] shadow-lg -ml-1 border border-[#5c4d35]" />
                                {/* Right Finial */}
                                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-bl from-[#e6cfa5] to-[#8b7355] shadow-lg -mr-1 border border-[#5c4d35]" />
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Elegant Divider */}
                <div className="flex items-center justify-center gap-4 my-24">
                    <div className="w-24 h-px bg-gradient-to-r from-transparent to-sage/50" />
                    <div className="flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-sage/60" />
                        <div className="w-2 h-2 rounded-full bg-champagne/60" />
                        <div className="w-2 h-2 rounded-full bg-sage/60" />
                    </div>
                    <div className="w-24 h-px bg-gradient-to-l from-transparent to-champagne/50" />
                </div>

                {/* Story 2 - Reversed Layout */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-32"
                >
                    <div className="grid lg:grid-cols-12 gap-8 items-start">
                        {/* Left Column - Content (Realistic Scroll Style) */}
                        <div className="lg:col-span-5 relative group order-2 lg:order-1 px-4 md:px-6">
                            {/* Top Golden Rod */}
                            <div className="relative z-20 h-4 md:h-5 w-[108%] -left-[4%] bg-gradient-to-b from-[#7c6340] via-[#d4b483] to-[#7c6340] rounded-full shadow-xl flex items-center justify-between">
                                {/* Left Finial */}
                                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-[#e6cfa5] to-[#8b7355] shadow-lg -ml-1 border border-[#5c4d35]" />
                                {/* Right Finial */}
                                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-bl from-[#e6cfa5] to-[#8b7355] shadow-lg -mr-1 border border-[#5c4d35]" />
                            </div>

                            {/* Paper Body - Animated Unfurling */}
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                whileInView={{ height: "auto", opacity: 1 }}
                                transition={{ duration: 2.5, ease: "easeInOut" }}
                                viewport={{ once: true, margin: "-100px" }}
                                className="relative z-10 mx-auto w-full -my-2.5 px-6 md:px-10 shadow-2xl bg-gradient-to-r from-[#e3d5b5] via-[#fdfbf7] via-60% to-[#e3d5b5] overflow-hidden"
                            >
                                <div className="py-12">
                                    {/* Paper Texture & Effects */}
                                    <div className="absolute inset-0 opacity-[0.15] mix-blend-multiply pointer-events-none"
                                        style={{
                                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`
                                        }}
                                    />
                                    {/* Surface Sheen (Cylindrical Highlight) */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-white/40 to-black/5 pointer-events-none mix-blend-overlay" />
                                    {/* Curvature Shadows (Top/Bottom) */}
                                    <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/10 to-transparent pointer-events-none" />
                                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />

                                    {/* Content Wrapper - Typing Animation */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ staggerChildren: 0.05, delayChildren: 0.5 }}
                                        viewport={{ once: true }}
                                        className="relative z-10 space-y-6"
                                    >
                                        <motion.div
                                            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                                            className="flex justify-center mb-2"
                                        >
                                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#8b7355]/10 border border-[#8b7355]/20 backdrop-blur-sm">
                                                <span className="text-sm font-bold text-[#8b7355] tracking-widest uppercase font-[family-name:var(--font-cinzel)]">Ancient Times</span>
                                            </div>
                                        </motion.div>

                                        <motion.div className="relative text-center">
                                            <motion.h3
                                                variants={{ hidden: { opacity: 0, clipPath: "inset(0 100% 0 0)" }, visible: { opacity: 1, clipPath: "inset(0 0 0 0)", transition: { duration: 1.5, ease: "easeInOut" } } }}
                                                className="text-4xl md:text-5xl lg:text-4xl font-[family-name:var(--font-cinzel)] text-[#4a3f2e] leading-[0.9] tracking-tight drop-shadow-sm inline-block"
                                            >
                                                The Hermit's Calling
                                            </motion.h3>
                                            <motion.div
                                                initial={{ opacity: 0, x: -10, rotate: -10 }}
                                                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                                                transition={{ delay: 2, duration: 1 }}
                                                className="absolute -right-8 -top-8 text-[#8b7355]/40 hidden md:block"
                                            >
                                                <PenTool className="w-8 h-8" />
                                            </motion.div>
                                        </motion.div>

                                        <div className="space-y-4 text-xl md:text-2xl text-[#5a4a3a] font-[family-name:var(--font-cormorant)] italic leading-relaxed text-justify tracking-wide">
                                            <motion.p variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                                                They called them the <span className="font-bold text-[#8b7355] not-italic">"Hermits of Dimbulagala" </span>
                                                monks who renounced all worldly ties to live in complete solitude on this sacred mountain.
                                            </motion.p>
                                            <motion.p variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                                                In silence, they found answers. In stillness, they discovered peace. Their days
                                                began before dawn, meditating as mist wrapped around the mountain.
                                            </motion.p>
                                            <motion.p variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                                                Each hermit chose a cave, carved from the rock itself. Here they would sit for
                                                hours, days, sometimes weeks in deep meditation.
                                            </motion.p>
                                        </div>

                                        {/* Separator */}
                                        <motion.div variants={{ hidden: { opacity: 0, scaleX: 0 }, visible: { opacity: 1, scaleX: 1 } }} className="flex items-center justify-center py-4">
                                            <div className="w-1/2 h-px bg-gradient-to-r from-transparent via-[#8b7355]/30 to-transparent" />
                                        </motion.div>

                                        {/* Timeline */}
                                        <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="grid grid-cols-2 gap-4">
                                            <div className="p-3 text-center">
                                                <Brain className="w-6 h-6 text-[#8b7355] mx-auto mb-2" />
                                                <p className="text-sm font-bold text-[#6b5744] font-[family-name:var(--font-cinzel)]">Meditation</p>
                                                <p className="text-xl text-[#5a4a3a]/80 font-[family-name:var(--font-cormorant)] italic">Daily Practice</p>
                                            </div>
                                            <div className="p-3 text-center">
                                                <Flower className="w-6 h-6 text-[#8b7355] mx-auto mb-2" />
                                                <p className="text-sm font-bold text-[#6b5744] font-[family-name:var(--font-cinzel)]">Simple Living</p>
                                                <p className="text-xl text-[#5a4a3a]/80 font-[family-name:var(--font-cormorant)] italic">Solitary Life</p>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                </div>
                            </motion.div>

                            {/* Bottom Golden Rod */}
                            <div className="relative z-20 h-4 md:h-5 w-[108%] -left-[4%] bg-gradient-to-b from-[#7c6340] via-[#d4b483] to-[#7c6340] rounded-full shadow-xl flex items-center justify-between">
                                {/* Left Finial */}
                                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-[#e6cfa5] to-[#8b7355] shadow-lg -ml-1 border border-[#5c4d35]" />
                                {/* Right Finial */}
                                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-bl from-[#e6cfa5] to-[#8b7355] shadow-lg -mr-1 border border-[#5c4d35]" />
                            </div>
                        </div>

                        {/* Right Column - Image */}
                        <div className="lg:col-span-7 order-1 lg:order-2">
                            <motion.div style={{ y: y2 }} className="relative group perspective-1000">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 2.5, ease: "easeOut" }}
                                    className="relative p-4 md:p-6 bg-[#fbf9f5] rounded-xl shadow-2xl border border-[#e6d2a0]/50"
                                >
                                    {/* Frame Texture */}
                                    <div className="absolute inset-0 opacity-20 pointer-events-none rounded-xl"
                                        style={{
                                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.3'/%3E%3C/svg%3E")`
                                        }}
                                    />

                                    {/* Inner Gold Rim */}
                                    <div className="absolute inset-3 md:inset-4 border border-[#8b7355]/30 rounded-lg pointer-events-none" />

                                    {/* Image Container */}
                                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-inner border border-[#8b7355]/10">
                                        <Image
                                            src="https://hdblob1.blob.core.windows.net/hermit/DSCN0190.JPG"
                                            alt="Hermit Meditation Caves"
                                            fill
                                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                        />

                                        {/* Vintage Overlay */}
                                        <div className="absolute inset-0 bg-sepia-[0.3] opacity-20 group-hover:opacity-10 transition-opacity duration-700" />
                                        <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.3)] pointer-events-none" />
                                    </div>

                                    {/* Plaque */}
                                    <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-b from-[#8b7355] to-[#6b5744] text-white text-xs font-serif tracking-widest uppercase rounded shadow-lg border border-[#e6d2a0]/30 min-w-[200px] text-center">
                                        The Meditation Caves
                                    </div>
                                </motion.div>


                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* Elegant Divider */}
                <div className="flex items-center justify-center gap-4 my-24">
                    <div className="w-24 h-px bg-gradient-to-r from-transparent to-champagne/50" />
                    <div className="flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-champagne/60" />
                        <div className="w-2 h-2 rounded-full bg-sage/60" />
                        <div className="w-2 h-2 rounded-full bg-champagne/60" />
                    </div>
                    <div className="w-24 h-px bg-gradient-to-l from-transparent to-sage/50" />
                </div>

                {/* Story 3 - Full Width */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-24"
                >
                    <div className="grid lg:grid-cols-12 gap-8 items-start">
                        {/* Left Column - Image */}
                        <div className="lg:col-span-7">
                            <motion.div style={{ y: y1 }} className="relative group perspective-1000">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 2.5, ease: "easeOut" }}
                                    className="relative p-4 md:p-6 bg-[#fbf9f5] rounded-xl shadow-2xl border border-[#e6d2a0]/50"
                                >
                                    {/* Frame Texture */}
                                    <div className="absolute inset-0 opacity-20 pointer-events-none rounded-xl"
                                        style={{
                                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.3'/%3E%3C/svg%3E")`
                                        }}
                                    />

                                    {/* Inner Gold Rim */}
                                    <div className="absolute inset-3 md:inset-4 border border-[#8b7355]/30 rounded-lg pointer-events-none" />

                                    {/* Image Container */}
                                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-inner border border-[#8b7355]/10">
                                        <Image
                                            src="https://hdblob1.blob.core.windows.net/hermit/Untitled%20design%20(16).png"
                                            alt="Modern Hermit's Lair"
                                            fill
                                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                        />

                                        {/* Vintage Overlay */}
                                        <div className="absolute inset-0 bg-sepia-[0.3] opacity-20 group-hover:opacity-10 transition-opacity duration-700" />
                                        <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.3)] pointer-events-none" />
                                    </div>

                                    {/* Plaque */}
                                    <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-b from-[#8b7355] to-[#6b5744] text-white text-xs font-serif tracking-widest uppercase rounded shadow-lg border border-[#e6d2a0]/30 min-w-[200px] text-center">
                                        Your Modern Sanctuary
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>

                        {/* Right Column - Content (Realistic Scroll Style) */}
                        <div className="lg:col-span-5 relative group px-4 md:px-6">
                            {/* Top Golden Rod */}
                            <div className="relative z-20 h-4 md:h-5 w-[108%] -left-[4%] bg-gradient-to-b from-[#7c6340] via-[#d4b483] to-[#7c6340] rounded-full shadow-xl flex items-center justify-between">
                                {/* Left Finial */}
                                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-[#e6cfa5] to-[#8b7355] shadow-lg -ml-1 border border-[#5c4d35]" />
                                {/* Right Finial */}
                                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-bl from-[#e6cfa5] to-[#8b7355] shadow-lg -mr-1 border border-[#5c4d35]" />
                            </div>

                            {/* Paper Body - Animated Unfurling */}
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                whileInView={{ height: "auto", opacity: 1 }}
                                transition={{ duration: 2.5, ease: "easeInOut" }}
                                viewport={{ once: true, margin: "-100px" }}
                                className="relative z-10 mx-auto w-full -my-2.5 px-6 md:px-10 shadow-2xl bg-gradient-to-r from-[#e3d5b5] via-[#fdfbf7] via-60% to-[#e3d5b5] overflow-hidden"
                            >
                                <div className="py-12">
                                    {/* Paper Texture & Effects */}
                                    <div className="absolute inset-0 opacity-[0.15] mix-blend-multiply pointer-events-none"
                                        style={{
                                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`
                                        }}
                                    />
                                    {/* Surface Sheen (Cylindrical Highlight) */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-white/40 to-black/5 pointer-events-none mix-blend-overlay" />
                                    {/* Curvature Shadows (Top/Bottom) */}
                                    <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/10 to-transparent pointer-events-none" />
                                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />

                                    {/* Content Wrapper - Typing Animation */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ staggerChildren: 0.05, delayChildren: 0.5 }}
                                        viewport={{ once: true }}
                                        className="relative z-10 space-y-6"
                                    >
                                        <motion.div
                                            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                                            className="flex justify-center mb-2"
                                        >
                                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#8b7355]/10 border border-[#8b7355]/20 backdrop-blur-sm">
                                                <span className="text-sm font-bold text-[#8b7355] tracking-widest uppercase font-[family-name:var(--font-cinzel)]">Today</span>
                                            </div>
                                        </motion.div>

                                        <motion.div className="relative text-center">
                                            <motion.h3
                                                variants={{ hidden: { opacity: 0, clipPath: "inset(0 100% 0 0)" }, visible: { opacity: 1, clipPath: "inset(0 0 0 0)", transition: { duration: 1.5, ease: "easeInOut" } } }}
                                                className="text-4xl md:text-5xl lg:text-4xl font-[family-name:var(--font-cinzel)] text-[#4a3f2e] leading-[0.9] tracking-tight drop-shadow-sm inline-block"
                                            >
                                                Your Journey Awaits
                                            </motion.h3>
                                            <motion.div
                                                initial={{ opacity: 0, x: -10, rotate: -10 }}
                                                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                                                transition={{ delay: 2, duration: 1 }}
                                                className="absolute -right-8 -top-8 text-[#8b7355]/40 hidden md:block"
                                            >
                                                <PenTool className="w-8 h-8" />
                                            </motion.div>
                                        </motion.div>

                                        <div className="space-y-4 text-xl md:text-2xl text-[#5a4a3a] font-[family-name:var(--font-cormorant)] italic leading-relaxed text-justify tracking-wide">
                                            <motion.p variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="first-letter:text-6xl first-letter:font-[family-name:var(--font-cinzel)] first-letter:not-italic first-letter:text-[#8b7355] first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                                                Now, centuries later, Hermit's Lair honors this sacred legacy. We've created
                                                a sanctuary where modern seekers can experience what those ancient monks
                                                discovered.
                                            </motion.p>
                                            <motion.p variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                                                The mountain still calls with the same voice that summoned hermits millennia ago.
                                                The transformation still happens for those brave enough to answer.
                                            </motion.p>
                                        </div>

                                        {/* Separator */}
                                        <motion.div variants={{ hidden: { opacity: 0, scaleX: 0 }, visible: { opacity: 1, scaleX: 1 } }} className="flex items-center justify-center py-4">
                                            <div className="w-1/2 h-px bg-gradient-to-r from-transparent via-[#8b7355]/30 to-transparent" />
                                        </motion.div>

                                        {/* What awaits */}
                                        <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="grid grid-cols-2 gap-4">
                                            <div className="p-3 text-center">
                                                <Mountain className="w-6 h-6 text-[#8b7355] mx-auto mb-2" />
                                                <p className="text-sm font-bold text-[#6b5744] font-[family-name:var(--font-cinzel)]">Sacred Peaks</p>
                                                <p className="text-xl text-[#5a4a3a]/80 font-[family-name:var(--font-cormorant)] italic">Ancient Caves</p>
                                            </div>
                                            <div className="p-3 text-center">
                                                <Sparkles className="w-6 h-6 text-[#8b7355] mx-auto mb-2" />
                                                <p className="text-sm font-bold text-[#6b5744] font-[family-name:var(--font-cinzel)]">True Wisdom</p>
                                                <p className="text-xl text-[#5a4a3a]/80 font-[family-name:var(--font-cormorant)] italic">Inner Silence</p>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                </div>
                            </motion.div>

                            {/* Bottom Golden Rod */}
                            <div className="relative z-20 h-4 md:h-5 w-[108%] -left-[4%] bg-gradient-to-b from-[#7c6340] via-[#d4b483] to-[#7c6340] rounded-full shadow-xl flex items-center justify-between">
                                {/* Left Finial */}
                                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-[#e6cfa5] to-[#8b7355] shadow-lg -ml-1 border border-[#5c4d35]" />
                                {/* Right Finial */}
                                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-bl from-[#e6cfa5] to-[#8b7355] shadow-lg -mr-1 border border-[#5c4d35]" />
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Final Quote - Full Width */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="mt-32"
                >
                    <div className="max-w-5xl mx-auto text-center relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-sage/5 via-champagne/5 to-sage/5 rounded-3xl blur-2xl" />

                        <div className="relative py-20 px-8 md:px-16">
                            {/* Decorative quote marks */}
                            <div className="absolute top-4 left-4 text-[140px] text-sage/10 font-[family-name:var(--font-cinzel)] leading-none select-none">"</div>
                            <div className="absolute bottom-4 right-4 text-[140px] text-champagne/10 font-[family-name:var(--font-cinzel)] leading-none select-none">"</div>

                            <p className="relative text-3xl md:text-5xl font-[family-name:var(--font-cormorant)] italic text-shadow leading-relaxed mb-10 text-[#4a3f2e]">
                                In the silence of the mountain,
                                <br />
                                the soul remembers its song.
                            </p>

                            <div className="flex items-center justify-center gap-3 mb-6">
                                <div className="w-20 h-px bg-gradient-to-r from-transparent to-sage/60" />
                                <div className="w-2.5 h-2.5 rounded-full bg-sage/70" />
                                <div className="w-2.5 h-2.5 rounded-full bg-champagne/70" />
                                <div className="w-20 h-px bg-gradient-to-l from-transparent to-champagne/60" />
                            </div>

                            <p className="text-sm tracking-[0.3em] uppercase text-stone-light font-medium">
                                Ancient Hermit Wisdom
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
