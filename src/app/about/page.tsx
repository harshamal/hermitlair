"use client";

import { motion } from "framer-motion";
import { Heart, Leaf, Users, Target, Award, Globe } from "lucide-react";
import Image from "next/image";
import Footer from "@/components/Footer";

const values = [
    {
        icon: Heart,
        title: "Authentic Connection",
        description: "We believe transformation happens through genuine human connection, not corporate hospitality.",
    },
    {
        icon: Leaf,
        title: "Reverence for Nature",
        description: "The mountain is our teacher. We protect it, learn from it, and share its wisdom with our guests.",
    },
    {
        icon: Users,
        title: "Community First",
        description: "We support local artisans, farmers, and families. Your stay uplifts an entire community.",
    },
    {
        icon: Target,
        title: "Intentional Living",
        description: "Every detail—from meals to meditation—is designed with purpose and mindfulness.",
    },
];

const team = [
    {
        name: "Amara Silva",
        role: "Founder & Vision Keeper",
        bio: "After years in corporate life, Amara found herself burned out and searching. A solo trek to Dimbulagala changed everything. She spent three months living with the monks, learning ancient practices, and discovering what she'd been missing: silence, simplicity, and soul. Hermit's Lair is her gift to others seeking the same transformation.",
        icon: Heart,
    },
    {
        name: "Chef Kumara",
        role: "Culinary Artist",
        bio: "Kumara grew up in a village near the mountain, learning to cook from his grandmother. He believes food is medicine, love made edible. Every meal he creates tells a story—of the land, the seasons, and the people who grew it. His kitchen is a sanctuary of its own.",
        icon: Leaf,
    },
    {
        name: "Meditation Guide Thero",
        role: "Wisdom Keeper",
        bio: "A Buddhist monk who has lived on Dimbulagala for 30 years, Thero guides our meditation sessions with gentleness and depth. He doesn't teach from books—he teaches from lived experience. His presence alone is a teaching.",
        icon: Target,
    },
];

export default function AboutPage() {
    return (
        <main className="bg-warm-white min-h-screen">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-shadow to-stone">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://hdblob1.blob.core.windows.net/hermit/DSCN0283.JPG"
                        alt="Hermit's Lair Team"
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
                        <Users className="w-4 h-4 text-white" />
                        <span className="text-sm tracking-[0.3em] uppercase text-white font-semibold">
                            Our Story
                        </span>
                    </div>

                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-tight tracking-tight"
                        style={{
                            fontWeight: 300,
                            textShadow: "0 4px 24px rgba(0,0,0,0.9), 0 2px 12px rgba(0,0,0,0.7)",
                        }}
                    >
                        The Keepers of
                        <br />
                        <span className="italic">the Lair</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-white font-light leading-relaxed"
                        style={{
                            textShadow: "0 2px 12px rgba(0,0,0,0.8)",
                        }}
                    >
                        We're not running a business. We're holding space for transformation.
                    </p>
                </motion.div>
            </section>

            {/* Our Story */}
            <section className="relative py-32 px-6 bg-gradient-to-b from-stone via-warm-white to-cream">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-serif text-shadow mb-8 tracking-tight" style={{ fontWeight: 300 }}>
                            How It
                            <span className="text-sage-dark italic"> Began</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="prose prose-lg max-w-none space-y-6"
                    >
                        <p className="text-xl text-stone-light font-light leading-relaxed">
                            Hermit's Lair wasn't born from a business plan. It emerged from a personal crisis,
                            a mountain pilgrimage, and a promise to share what was found.
                        </p>

                        <p className="text-xl text-stone-light font-light leading-relaxed">
                            Our founder, Amara, was living the life she thought she wanted: successful career,
                            impressive title, busy calendar. But beneath the achievement was exhaustion. Beneath
                            the busyness was emptiness. One day, she broke. Not dramatically—just quietly, like
                            a candle burning out.
                        </p>

                        <p className="text-xl text-stone-light font-light leading-relaxed">
                            A friend suggested she visit Dimbulagala. "Just go sit on the mountain," they said.
                            "See what happens." She went for a weekend. She stayed for three months.
                        </p>

                        <div className="p-8 rounded-3xl glass-sage border border-sage/20 my-12">
                            <p className="text-2xl font-serif text-shadow italic text-center leading-relaxed mb-0">
                                "The mountain didn't fix me. It showed me I wasn't broken—
                                <br />
                                just living a life that wasn't mine."
                            </p>
                        </div>

                        <p className="text-xl text-stone-light font-light leading-relaxed">
                            When she finally returned to the city, she knew she couldn't go back to her old life.
                            But she also couldn't keep the mountain's gift to herself. Hermit's Lair was born from
                            that tension—the desire to create a bridge between the ancient wisdom of this sacred
                            place and the modern souls who desperately need it.
                        </p>

                        <p className="text-xl text-stone-light font-light leading-relaxed">
                            We opened our doors in 2020, right as the world was learning what it meant to slow down.
                            Since then, we've welcomed hundreds of seekers, wanderers, and transformers. Each one
                            leaves a little lighter. Each one takes the mountain with them.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Our Values */}
            <section className="relative py-32 px-6 bg-gradient-to-b from-cream to-linen">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-4xl md:text-5xl font-serif text-shadow mb-6 tracking-tight" style={{ fontWeight: 300 }}>
                            What We
                            <span className="text-sage-dark italic"> Stand For</span>
                        </h2>
                        <p className="text-lg text-stone-light font-light max-w-2xl mx-auto">
                            These aren't corporate values on a wall. They're the principles we live by every day.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <motion.div
                                    key={value.title}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="p-8 rounded-3xl glass-light border border-white/40 shadow-premium hover:shadow-premium-lg transition-all duration-500"
                                >
                                    <div className="inline-flex p-4 rounded-2xl bg-sage/10 mb-6">
                                        <Icon className="w-8 h-8 text-sage-dark" />
                                    </div>
                                    <h3 className="text-2xl font-serif text-shadow mb-4">{value.title}</h3>
                                    <p className="text-stone-light font-light leading-relaxed">
                                        {value.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* The Team */}
            <section className="relative py-32 px-6 bg-gradient-to-b from-linen to-mist">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-4xl md:text-5xl font-serif text-shadow mb-6 tracking-tight" style={{ fontWeight: 300 }}>
                            Meet the
                            <span className="text-sage-dark italic"> Team</span>
                        </h2>
                        <p className="text-lg text-stone-light font-light max-w-2xl mx-auto">
                            The hearts and hands that make Hermit's Lair what it is
                        </p>
                    </motion.div>

                    <div className="space-y-12">
                        {team.map((member, index) => {
                            const Icon = member.icon;
                            return (
                                <motion.div
                                    key={member.name}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    className="p-8 md:p-12 rounded-3xl glass-light border border-white/40 shadow-premium"
                                >
                                    <div className="flex flex-col md:flex-row gap-8 items-start">
                                        <div className="flex-shrink-0">
                                            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-sage to-champagne flex items-center justify-center">
                                                <Icon className="w-12 h-12 text-white" />
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-3xl font-serif text-shadow mb-2">{member.name}</h3>
                                            <p className="text-sage-dark font-medium mb-4">{member.role}</p>
                                            <p className="text-lg text-stone-light font-light leading-relaxed">
                                                {member.bio}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Our Impact */}
            <section className="relative py-32 px-6 bg-gradient-to-b from-mist to-warm-white">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-serif text-shadow mb-6 tracking-tight" style={{ fontWeight: 300 }}>
                            Our
                            <span className="text-sage-dark italic"> Impact</span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {[
                            { number: "500+", label: "Guests Transformed", icon: Users },
                            { number: "100%", label: "Solar Powered", icon: Leaf },
                            { number: "50+", label: "Local Families Supported", icon: Heart },
                        ].map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="text-center p-8 rounded-3xl glass-sage border border-sage/20"
                                >
                                    <Icon className="w-12 h-12 text-sage-dark mx-auto mb-4" />
                                    <p className="text-5xl font-serif text-shadow mb-2">{stat.number}</p>
                                    <p className="text-stone-light font-light">{stat.label}</p>
                                </motion.div>
                            );
                        })}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="p-12 rounded-3xl bg-gradient-to-br from-sage/20 to-champagne/20 border border-sage/30 shadow-premium-lg text-center"
                    >
                        <Globe className="w-16 h-16 text-sage-dark mx-auto mb-6" />
                        <h3 className="text-3xl font-serif text-shadow mb-6">
                            Beyond the Lair
                        </h3>
                        <p className="text-lg text-stone-light font-light leading-relaxed max-w-3xl mx-auto">
                            10% of our profits go to forest conservation and education programs for local children.
                            We also provide free meditation training to nearby villages. When you stay with us,
                            you're part of something bigger than a vacation—you're part of a movement to preserve
                            this sacred land and uplift its people.
                        </p>
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
                            Come Meet Us
                        </h2>
                        <p className="text-lg text-stone-light font-light mb-8 leading-relaxed">
                            We're not perfect. We're just people who care deeply about this work, this mountain,
                            and the souls who find their way here. We'd love to welcome you.
                        </p>
                        <a
                            href="/packages"
                            className="inline-block px-10 py-4 bg-sage text-white rounded-full hover:shadow-premium-lg transition-all duration-300 text-sm tracking-widest uppercase font-medium"
                        >
                            Plan Your Visit
                        </a>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
