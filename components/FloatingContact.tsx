"use client";

import { Phone } from "lucide-react";

export default function FloatingContact() {
    return (
        <a
            href="tel:8462969"
            className="fixed bottom-6 right-6 z-50 bg-[#c89b3c] text-black p-4 rounded-full shadow-lg hover:scale-110 transition"
        >
            <Phone />
        </a>
    );
}