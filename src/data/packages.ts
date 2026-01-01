import { Moon, Mountain, Sun, LucideIcon } from "lucide-react";

export interface Package {
    id: string;
    name: string;
    tagline: string;
    duration: string;
    price: string;
    icon: LucideIcon;
    color: string;
    highlight?: boolean;
    description: string;
    features: string[]; // This maps to 'includes' in the other file
    ideal: string;
}

export const packages: Package[] = [
    {
        id: "hermit-solitude",
        name: "The Seeker", // Renamed to match PackagesPage
        tagline: "A Weekend of Stillness",
        duration: "3 Days / 2 Nights",
        price: "$450", // Updated price to match PackagesPage
        icon: Moon,
        color: "sage",
        description: "Perfect for those taking their first step into silence. A gentle introduction to mindful living.",
        features: [
            "2 nights in a private room",
            "All vegetarian meals",
            "Daily guided meditation",
            "Sunrise yoga session",
            "Forest walking meditation",
            "Access to meditation caves",
            "Complimentary herbal tea ceremony",
        ],
        ideal: "Solo travelers, first-time retreat guests, weekend warriors"
    },
    {
        id: "monks-path",
        name: "The Wanderer",
        tagline: "Deeper Into the Mountain",
        duration: "5 Days / 4 Nights",
        price: "$850",
        icon: Mountain,
        color: "champagne",
        highlight: true,
        description: "Our most popular journey. Time to truly disconnect, explore, and rediscover yourself.",
        features: [
            "4 nights in a private room",
            "All vegetarian meals",
            "Daily guided meditation & yoga",
            "Sound healing session",
            "Private mindfulness consultation",
            "Guided nature hikes",
            "Journaling workshop",
            "Access to all facilities",
            "Complimentary massage (60 min)",
        ],
        ideal: "Anyone seeking real transformation, digital detox enthusiasts, nature lovers"
    },
    {
        id: "sages-sanctuary",
        name: "The Transformer",
        tagline: "The Complete Journey",
        duration: "7 Days / 6 Nights",
        price: "$1,400",
        icon: Sun,
        color: "wood",
        description: "A full week to shed what no longer serves you and emerge renewed. Deep, lasting change.",
        features: [
            "6 nights in a premium room",
            "All vegetarian meals",
            "Daily meditation & yoga",
            "3 private coaching sessions",
            "Sound healing & breathwork",
            "Art therapy workshop",
            "Guided forest bathing",
            "Stargazing experience",
            "2 massages (90 min each)",
            "Personalized wellness plan",
        ],
        ideal: "Life transitions, burnout recovery, creative blocks, deep soul work"
    }
];
