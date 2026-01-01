"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { ChevronDown, HelpCircle, Calendar, Utensils, Wifi, MapPin, Heart, Shield } from "lucide-react";
import Footer from "@/components/Footer";

const faqCategories = [
    {
        name: "Booking & Logistics",
        icon: Calendar,
        questions: [
            {
                q: "How do I book my stay?",
                a: "You can book directly through our website by selecting your preferred package and dates. We'll send you a confirmation email with all the details. For custom retreats or group bookings, please contact us directly at hello@hermitslair.lk"
            },
            {
                q: "What's your cancellation policy?",
                a: "We understand plans change. Cancel up to 30 days before arrival for a full refund. 15-30 days: 50% refund. Less than 15 days: no refund, but you can transfer your booking to someone else or reschedule within 6 months."
            },
            {
                q: "How do I get to Hermit's Lair?",
                a: "We're located in Dimbulagala, Eastern Sri Lanka, about 3.5 hours from Colombo. We can arrange private transfers from Colombo airport ($150) or you can take a scenic train to Polonnaruwa and we'll pick you up (complimentary). Detailed directions are sent upon booking."
            },
            {
                q: "What should I pack?",
                a: "Comfortable, modest clothing for meditation and yoga. Layers for cool mornings. Sturdy shoes for hiking. Sunscreen, hat, and reusable water bottle. A journal. An open heart. Leave your laptop—we provide everything else you need."
            },
        ],
    },
    {
        name: "Food & Dietary Needs",
        icon: Utensils,
        questions: [
            {
                q: "What kind of food do you serve?",
                a: "All meals are vegetarian, prepared with locally sourced, organic ingredients. Think: fresh fruit at sunrise, hearty grain bowls for lunch, warming curries for dinner. We blend Sri Lankan flavors with international comfort food. Every meal is an act of nourishment."
            },
            {
                q: "Can you accommodate dietary restrictions?",
                a: "Absolutely. We cater to vegan, gluten-free, and other dietary needs. Just let us know when you book. Our chef is creative and caring—no one leaves hungry or unsatisfied."
            },
            {
                q: "Is alcohol available?",
                a: "Hermit's Lair is an alcohol-free sanctuary. We believe clarity comes from sobriety. Instead, we offer incredible herbal teas, fresh juices, and ceremonial cacao. Your body (and mind) will thank you."
            },
        ],
    },
    {
        name: "The Experience",
        icon: Heart,
        questions: [
            {
                q: "Do I need meditation or yoga experience?",
                a: "Not at all. We welcome complete beginners and seasoned practitioners alike. Our teachers meet you where you are. The only requirement is willingness to try."
            },
            {
                q: "What's a typical day like?",
                a: "There's no 'typical'—that's the beauty. But here's a rhythm: Wake naturally (or to birdsong). Morning meditation and yoga. Nourishing breakfast. Free time to hike, read, journal, or rest. Lunch. Afternoon workshop or personal time. Evening practice. Dinner. Stargazing or early sleep. You set the pace."
            },
            {
                q: "Can I come alone?",
                a: "Yes! Many of our guests are solo travelers. There's something powerful about journeying alone—you're free to go deep without distraction. Plus, you'll be surrounded by like-minded souls. Solitude doesn't mean loneliness here."
            },
            {
                q: "Is this a silent retreat?",
                a: "Not unless you want it to be. We encourage mindful speech—speaking when it adds value, listening deeply. Some guests choose personal silence. Others connect through conversation. We honor both."
            },
        ],
    },
    {
        name: "Connectivity & Comfort",
        icon: Wifi,
        questions: [
            {
                q: "Is there WiFi?",
                a: "Yes, but we encourage a digital detox. WiFi is available in common areas if you need to check in with the world. But we invite you to check in with yourself instead. Most guests find they don't miss it."
            },
            {
                q: "What about phone signal?",
                a: "Spotty at best, which is part of the magic. You can make calls from certain spots on the property. We have a landline for emergencies. Embrace the disconnection—it's temporary and transformative."
            },
            {
                q: "Are the rooms air-conditioned?",
                a: "We use ceiling fans and natural ventilation. The mountain air is cool, especially at night. We've designed the space to work with nature, not against it. You'll sleep better than you have in years."
            },
            {
                q: "What if I have a medical emergency?",
                a: "We have first aid trained staff and a medical kit on-site. The nearest hospital is 30 minutes away. We take your safety seriously and have protocols in place. Please disclose any medical conditions when booking."
            },
        ],
    },
    {
        name: "Practical Details",
        icon: MapPin,
        questions: [
            {
                q: "What's the weather like?",
                a: "Tropical and beautiful. Warm days (25-30°C), cool nights. Monsoon season is May-September (lush and green, occasional rain). October-April is drier. Every season has its magic."
            },
            {
                q: "Can I extend my stay?",
                a: "If space allows, absolutely! Many guests wish they'd booked longer. Contact us during your stay and we'll do our best to accommodate. Pro tip: book extra days upfront—you'll be glad you did."
            },
            {
                q: "Do you offer day visits?",
                a: "No. Hermit's Lair is designed for immersion, not day trips. Transformation requires time. The minimum stay is 2 nights. Trust us—you'll want more."
            },
            {
                q: "Is Hermit's Lair accessible for people with disabilities?",
                a: "We're working toward full accessibility. Currently, some areas involve stairs and uneven terrain. Please contact us to discuss your specific needs—we'll do everything we can to accommodate you."
            },
        ],
    },
    {
        name: "Safety & Wellbeing",
        icon: Shield,
        questions: [
            {
                q: "Is it safe for solo female travelers?",
                a: "Absolutely. We have a zero-tolerance policy for harassment. Our staff is trained, vetted, and respectful. Many solo women have found Hermit's Lair to be one of the safest, most empowering places they've traveled."
            },
            {
                q: "What's your COVID policy?",
                a: "We follow Sri Lankan health guidelines and maintain high hygiene standards. Small group sizes mean natural social distancing. Fresh air and outdoor spaces are abundant. Your health is our priority."
            },
            {
                q: "Are there wild animals?",
                a: "Yes! You might see monkeys, birds, butterflies, and occasionally elephants in the distance. All part of the magic. We teach you how to coexist respectfully. No dangerous encounters—just wonder."
            },
        ],
    },
];

export default function FAQPage() {
    const [openQuestion, setOpenQuestion] = useState<string | null>(null);

    return (
        <main className="bg-warm-white min-h-screen">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-shadow to-stone">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://hdblob1.blob.core.windows.net/hermit/DSCN0165.JPG"
                        alt="FAQ"
                        fill
                        className="object-cover opacity-60"
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
                        <HelpCircle className="w-4 h-4 text-white" />
                        <span className="text-sm tracking-[0.3em] uppercase text-white font-semibold">
                            Questions Answered
                        </span>
                    </div>

                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-tight tracking-tight"
                        style={{
                            fontWeight: 300,
                            textShadow: "0 4px 24px rgba(0,0,0,0.9), 0 2px 12px rgba(0,0,0,0.7)",
                        }}
                    >
                        Everything You
                        <br />
                        <span className="italic">Need to Know</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-white font-light leading-relaxed max-w-2xl mx-auto"
                        style={{
                            textShadow: "0 2px 12px rgba(0,0,0,0.8)",
                        }}
                    >
                        Questions from fellow seekers, answered with care
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

            {/* FAQ Categories */}
            <section className="relative py-32 px-6 bg-gradient-to-b from-cream to-warm-white">
                <div className="max-w-5xl mx-auto">
                    {faqCategories.map((category, catIndex) => {
                        const CategoryIcon = category.icon;
                        return (
                            <motion.div
                                key={category.name}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                                className="mb-16"
                            >
                                {/* Category Header */}
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-3 rounded-2xl bg-sage/10">
                                        <CategoryIcon className="w-6 h-6 text-sage-dark" />
                                    </div>
                                    <h2 className="text-3xl font-serif text-shadow">{category.name}</h2>
                                </div>

                                {/* Questions */}
                                <div className="space-y-4">
                                    {category.questions.map((faq, qIndex) => {
                                        const questionId = `${catIndex}-${qIndex}`;
                                        const isOpen = openQuestion === questionId;

                                        return (
                                            <motion.div
                                                key={qIndex}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.4, delay: qIndex * 0.05 }}
                                                className="rounded-2xl glass-light border border-white/40 shadow-premium overflow-hidden"
                                            >
                                                <button
                                                    onClick={() => setOpenQuestion(isOpen ? null : questionId)}
                                                    className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-sage/5 transition-colors duration-300"
                                                >
                                                    <span className="text-lg font-medium text-shadow pr-4">
                                                        {faq.q}
                                                    </span>
                                                    <motion.div
                                                        animate={{ rotate: isOpen ? 180 : 0 }}
                                                        transition={{ duration: 0.3 }}
                                                    >
                                                        <ChevronDown className="w-5 h-5 text-sage-dark flex-shrink-0" />
                                                    </motion.div>
                                                </button>

                                                <motion.div
                                                    initial={false}
                                                    animate={{
                                                        height: isOpen ? "auto" : 0,
                                                        opacity: isOpen ? 1 : 0,
                                                    }}
                                                    transition={{ duration: 0.3 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="px-8 pb-6 pt-2">
                                                        <p className="text-stone-light font-light leading-relaxed">
                                                            {faq.a}
                                                        </p>
                                                    </div>
                                                </motion.div>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* Still Have Questions CTA */}
            <section className="relative py-32 px-6 bg-gradient-to-b from-warm-white to-linen">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="p-12 rounded-3xl bg-gradient-to-br from-sage/20 to-champagne/20 border border-sage/30 shadow-premium-lg"
                    >
                        <HelpCircle className="w-16 h-16 text-sage-dark mx-auto mb-6" />
                        <h2 className="text-4xl font-serif text-shadow mb-6">
                            Still Have Questions?
                        </h2>
                        <p className="text-lg text-stone-light font-light mb-8 leading-relaxed">
                            We're here to help. No question is too small, no concern too trivial.
                            Reach out and we'll get back to you within 24 hours.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="mailto:hello@hermitslair.lk"
                                className="px-10 py-4 bg-sage text-white rounded-full hover:shadow-premium-lg transition-all duration-300 text-sm tracking-widest uppercase font-medium"
                            >
                                Email Us
                            </a>
                            <a
                                href="tel:+94771234567"
                                className="px-10 py-4 border-2 border-sage text-sage rounded-full hover:bg-sage hover:text-white transition-all duration-300 text-sm tracking-widest uppercase font-medium"
                            >
                                Call Us
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
