"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
    return (<section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
        {/* Background */} <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c0c] via-[#152010] to-[#000000]" />


        {/* Golden Glow */}
        <div className="absolute w-[700px] h-[700px] rounded-full bg-[#d4af37]/20 blur-[120px]" />

        {/* Decorative Glow */}
        <div className="absolute top-20 right-0 w-[350px] h-[350px] rounded-full bg-[#d4af37]/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#d4af37]/10 blur-[100px]" />

        {/* Texture */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,#d4af37_1px,transparent_1px)] bg-[length:25px_25px]" />

        <div className="relative z-10 text-center px-6 max-w-6xl">
            {/* Badge */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-5 py-2 text-sm uppercase tracking-[3px] text-[#d4af37]"
            >
                Premium Fiji Noble Kava
            </motion.div>

            {/* Logo */}
            <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    y: [0, -8, 0],
                }}
                transition={{
                    duration: 1,
                    y: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    },
                }}
                className="relative mt-8"
            >
                <div className="absolute inset-0 bg-[#d4af37]/30 blur-[100px] rounded-full" />

                <Image
                    src="/logo.png"
                    alt="Smile Kava"
                    width={380}
                    height={380}
                    priority
                    className="relative mx-auto w-[220px] md:w-[300px] lg:w-[380px] h-auto"
                />
            </motion.div>

            {/* Heading */}
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold mt-8 text-[#d4af37]"
            >
                SMILE KAVA
            </motion.h1>

            {/* Tagline */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-white/90 mt-4"
            >
                Crafted for Calm. Rooted in Tradition.
            </motion.p>

            {/* Description */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="max-w-2xl mx-auto mt-6 text-white/70 text-lg leading-8"
            >
                Experience premium Fijian noble kava, carefully sourced and
                traditionally prepared to bring moments of relaxation,
                connection, and island heritage to every bowl.
            </motion.p>

            {/* Buttons */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-12 flex flex-wrap justify-center gap-5"
            >
                <a
                    href="#products"
                    className="btn-primary font-semibold"
                >
                    Shop Collection
                </a>

                <a
                    href="#about"
                    className="px-8 py-4 rounded-full border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37]/10 transition"
                >
                    Discover Our Story
                </a>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                }}
                className="mt-20 flex justify-center"
            >
                <div className="h-12 w-7 rounded-full border border-white/20 flex justify-center p-2">
                    <div className="h-3 w-1 rounded-full bg-[#d4af37]" />
                </div>
            </motion.div>
        </div>
    </section>

    );
}
