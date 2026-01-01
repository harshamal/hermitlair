"use client";

import { motion } from "framer-motion";
import { Leaf, Wind, Sun, Moon, Droplets, Flame, Mountain, Heart } from "lucide-react";
import Image from "next/image";
import Footer from "@/components/Footer";

const rooms = [
    {
        name: "The Seeker's Chamber",
        description: "A cozy sanctuary for solo travelers seeking solitude and self-discovery",
        features: ["Single queen bed", "Mountain view", "Private meditation corner", "Writing desk", "En-suite bathroom"],
        capacity: "1 guest",
        icon: Moon,
    },
    {
        name: "The Wanderer's Haven",
        description: "Spacious comfort for couples or friends journeying together",
        features: ["King or twin beds", "Panoramic windows", "Sitting area", "Balcony", "Luxury bathroom"],
        capacity: "2 guests",
        icon: Sun,
    },
    {
        name: "The Transformer's Suite",
        description: "Our premium space for those seeking the deepest transformation",
        features: ["King bed", "360° mountain views", "Private meditation deck", "Soaking tub", "Separate living area"],
        capacity: "2 guests",
        icon: Mountain,
    },
];

const spaces = [
    {
        name: "Meditation Hall",
        description: "A sacred space where silence speaks louder than words",
        icon: Moon,
        details: "Floor-to-ceiling windows frame the mountain. Cushions arranged in circles. The scent of sandalwood. Here, we gather at dawn and dusk to sit in stillness together.",
    },
    {
        name: "The Chalets",
        description: "Private sanctuaries nestled in nature",
        icon: Mountain,
        details: "Architecturally designed to blend into the landscape. Each chalet offers complete privacy, immersive forest views, and modern comforts. Your personal retreat from the world.",
    },
    {
        name: "Dining Pavilion",
        description: "Where nourishment becomes communion",
        icon: Flame,
        details: "Open-air dining with views of the forest canopy. Long communal tables for connection, intimate corners for solitude. Every meal is prepared with intention and served with love.",
    },
    {
        name: "Yoga Deck",
        description: "Suspended between earth and sky",
        icon: Wind,
        details: "A wooden platform nestled among the trees. Morning mist rises as you flow through sun salutations. Birds provide the soundtrack. Nature is your teacher here.",
    },
    {
        name: "The Scenic Pool",
        description: "Natural spring water, ancient healing",
        icon: Droplets,
        details: "Fed by mountain springs, this pool has been used for purification rituals for centuries. Surrounded by ferns and flowers. Swim under stars or soak in afternoon sun.",
    },
    {
        name: "Forest Trails",
        description: "Paths walked by hermits for millennia",
        icon: Mountain,
        details: "Winding trails through dense jungle lead to meditation caves, waterfalls, and viewpoints. Each step is a meditation. Each turn reveals new beauty. Get lost to find yourself.",
    },
];

export default function SanctuaryPage() {
    return (
        <main className="bg-warm-white min-h-screen">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-shadow to-stone">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://hdblob1.blob.core.windows.net/hermit/ha (3).jpg"
                        alt="Hermit's Lair Sanctuary"
                        fill
                        className="object-cover opacity-40"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5 }}
                    className="relative z-10 text-center px-6 max-w-5xl"
                >
                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-xl mb-8">
                        <Heart className="w-4 h-4 text-white" />
                        <span className="text-sm tracking-[0.3em] uppercase text-white font-semibold">
                            Your Sacred Space
                        </span>
                    </div>

                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-tight tracking-tight"
                        style={{
                            fontWeight: 300,
                            textShadow: "0 4px 24px rgba(0,0,0,0.9), 0 2px 12px rgba(0,0,0,0.7)",
                        }}
                    >
                        The
                        <br />
                        <span className="italic">Sanctuary</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-white font-light leading-relaxed"
                        style={{
                            textShadow: "0 2px 12px rgba(0,0,0,0.8)",
                        }}
                    >
                        More than a place to stay. A space designed to hold your transformation.
                    </p>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
                >
                    <span className="text-xs tracking-[0.2em] uppercase text-white font-bold drop-shadow-lg block mb-2">
                        Scroll to explore
                    </span>
                </motion.div>
            </section>

            {/* Philosophy Section */}
            <section className="relative py-32 px-6 bg-[#faf9f6] overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-b from-transparent to-[#8b7355]/20" />

                <div className="max-w-[1200px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-20 relative z-10"
                    >
                        <h2 className="text-5xl md:text-6xl font-[family-name:var(--font-cinzel)] text-[#4a3f2e] mb-8 leading-tight">
                            Built with <span className="text-[#8b7355] italic">Intention</span>
                        </h2>

                        <div className="w-24 h-[1px] bg-[#8b7355]/30 mx-auto mb-12" />

                        <div className="grid md:grid-cols-2 gap-12 text-left">
                            <p className="text-xl text-[#5a4a3a] font-[family-name:var(--font-cormorant)] font-light leading-relaxed">
                                We didn't build Hermit's Lair to be another retreat center. We built it to be a living,
                                breathing extension of the mountain itself—a place where architecture dissolves into nature,
                                where comfort serves consciousness, where every detail whispers: "You are safe here. You can let go."
                            </p>
                            <p className="text-xl text-[#5a4a3a] font-[family-name:var(--font-cormorant)] font-light leading-relaxed">
                                The chalet is constructed from local materials—teak wood from sustainable forests, stone from
                                the mountain, clay tiles baked in village kilns. Solar panels power our lights. Rainwater fills
                                our tanks. We tread lightly because this land is sacred.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl"
                    >
                        <Image src="https://hdblob1.blob.core.windows.net/hermit/ha (30).jpg" alt="Architecture" fill className="object-cover" />
                        <div className="absolute inset-0 bg-black/20" />
                        <div className="absolute bottom-0 left-0 right-0 p-12 bg-gradient-to-t from-black/80 to-transparent">
                            <p className="text-3xl md:text-4xl text-white font-[family-name:var(--font-cormorant)] italic text-center">
                                "The space holds you so you can hold yourself."
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Rooms Section */}
            <section className="relative py-32 px-6 bg-[#f4f1ea]">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-20"
                    >
                        <span className="text-sm tracking-[0.4em] uppercase text-[#8b7355] font-[family-name:var(--font-cinzel)] font-bold mb-4 block">Accommodations</span>
                        <h2 className="text-5xl md:text-7xl font-[family-name:var(--font-cinzel)] text-[#4a3f2e]">
                            Your <span className="text-[#8b7355] italic">Chamber</span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {rooms.map((room, index) => {
                            const Icon = room.icon;
                            return (
                                <motion.div
                                    key={room.name}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    className="group relative p-10 rounded-[2rem] bg-white border border-[#8b7355]/10 hover:border-[#8b7355]/30 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(139,115,85,0.1)] transition-all duration-700"
                                >
                                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-700">
                                        <Icon size={120} strokeWidth={0.5} />
                                    </div>

                                    <div className="relative z-10">
                                        <div className="inline-flex p-4 rounded-2xl bg-[#faf9f6] border border-[#8b7355]/10 mb-8 group-hover:scale-110 transition-transform duration-500">
                                            <Icon className="w-8 h-8 text-[#8b7355]" />
                                        </div>

                                        <h3 className="text-2xl font-[family-name:var(--font-cinzel)] text-[#4a3f2e] mb-4">
                                            {room.name}
                                        </h3>
                                        <p className="text-[#5a4a3a]/70 font-[family-name:var(--font-cormorant)] text-lg mb-8 leading-relaxed font-light min-h-[60px]">
                                            {room.description}
                                        </p>

                                        <div className="pt-6 border-t border-[#8b7355]/10">
                                            <ul className="space-y-3">
                                                {room.features.map((feature, i) => (
                                                    <li key={i} className="flex items-center gap-3 text-sm text-[#5a4a3a] font-[family-name:var(--font-cormorant)] font-medium uppercase tracking-wider">
                                                        <div className="w-1 h-1 rounded-full bg-[#8b7355]" />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Shared Spaces */}
            <section className="relative py-32 px-6 bg-[#313b2c] text-[#f4f1ea] overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-30" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-24"
                    >
                        <span className="text-sm tracking-[0.4em] uppercase text-[#8b7355] font-[family-name:var(--font-cinzel)] font-bold mb-4 block">The Grounds</span>
                        <h2 className="text-5xl md:text-7xl font-[family-name:var(--font-cinzel)] text-[#e3d5b5]">
                            Sacred <span className="text-white/20">Spaces</span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {spaces.map((space, index) => {
                            const Icon = space.icon;
                            // Add images to spaces (using placeholders from your blob or generics)
                            const bgImage = index === 0 ? "https://hdblob1.blob.core.windows.net/hermit/hermit (3).jpg" :
                                index === 1 ? "https://hdblob1.blob.core.windows.net/hermit/DSCN0327.JPG" :
                                    index === 2 ? "https://hdblob1.blob.core.windows.net/hermit/DSCN0330.JPG" :
                                        index === 3 ? "https://hdblob1.blob.core.windows.net/hermit/ha (16).jpg" :
                                            index === 4 ? "https://hdblob1.blob.core.windows.net/hermit/meditatetransform.png" :
                                                index === 5 ? "https://hdblob1.blob.core.windows.net/hermit/DSCN0196.JPG" :
                                                    "https://hdblob1.blob.core.windows.net/hermit/DSCN0196.JPG" // Fallback

                            return (
                                <motion.div
                                    key={space.name}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="group relative h-[400px] rounded-[2.5rem] overflow-hidden border border-white/10"
                                >
                                    <Image src={bgImage} alt={space.name} fill className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-40" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                                    <div className="absolute inset-0 p-10 flex flex-col justify-end">
                                        <div className="mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                            <div className="flex items-center gap-4 mb-3">
                                                <div className="p-3 rounded-full bg-[#e3d5b5]/10 backdrop-blur-md text-[#e3d5b5]">
                                                    <Icon size={24} />
                                                </div>
                                                <h3 className="text-2xl font-[family-name:var(--font-cinzel)] text-[#e3d5b5]">
                                                    {space.name}
                                                </h3>
                                            </div>
                                            <p className="text-[#f4f1ea]/70 font-[family-name:var(--font-cormorant)] text-lg font-light leading-relaxed max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                                {space.details}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Sustainability */}
            <section className="relative py-32 px-6 bg-gradient-to-b from-mist to-warm-white">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <Leaf className="w-16 h-16 text-sage-dark mx-auto mb-8" />
                        <h2 className="text-4xl md:text-5xl font-serif text-shadow mb-8 tracking-tight" style={{ fontWeight: 300 }}>
                            Treading
                            <span className="text-sage-dark italic"> Lightly</span>
                        </h2>
                        <p className="text-xl text-stone-light font-light leading-relaxed mb-12">
                            This mountain has stood for millions of years. We're just passing through. Our commitment
                            is to leave it better than we found it.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 text-left">
                            {[
                                "100% solar-powered electricity",
                                "Rainwater harvesting & natural filtration",
                                "Zero single-use plastics",
                                "Organic waste composting",
                                "Locally sourced, seasonal ingredients",
                                "Support for local artisans & farmers",
                                "Wildlife corridor preservation",
                                "Carbon-neutral operations",
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="flex items-center gap-3 p-4 rounded-2xl bg-sage/5"
                                >
                                    <Leaf className="w-5 h-5 text-sage-dark flex-shrink-0" />
                                    <span className="text-stone-light font-light">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative py-32 px-6 bg-warm-white">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="p-12 rounded-3xl bg-gradient-to-br from-sage/20 to-champagne/20 border border-sage/30 shadow-premium-lg"
                    >
                        <h2 className="text-4xl font-serif text-shadow mb-6">
                            Ready to Come Home?
                        </h2>
                        <p className="text-lg text-stone-light font-light mb-8 leading-relaxed">
                            Your chamber awaits. The mountain is calling. All that's left is to answer.
                        </p>
                        <a
                            href="/packages"
                            className="inline-block px-10 py-4 bg-sage text-white rounded-full hover:shadow-premium-lg transition-all duration-300 text-sm tracking-widest uppercase font-medium"
                        >
                            View Packages & Book
                        </a>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
