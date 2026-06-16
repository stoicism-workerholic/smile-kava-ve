"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: `${(i * 3.33) % 100}%`,
    delay: `${i * 0.3}s`,
    duration: `${8 + (i % 6)}s`,
}));

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#080604] via-[#1b120c] to-[#000000]" />

            {/* Main Golden Glow */}
            <div className="absolute w-[700px] h-[700px] rounded-full bg-[#d4af37]/20 blur-[120px]" />

            {/* Decorative Glows */}
            <div className="absolute top-20 right-0 w-[350px] h-[350px] rounded-full bg-[#d4af37]/10 blur-[120px]" />

            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#d4af37]/10 blur-[100px]" />

            {/* Luxury Texture */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,#d4af37_1px,transparent_1px)] bg-[length:25px_25px]" />

            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden">
                {particles.map((particle) => (
                    <span
                        key={particle.id}
                        className="particle"
                        style={{
                            left: particle.left,
                            animationDelay: particle.delay,
                            animationDuration: particle.duration,
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 text-center px-6 max-w-6xl">
                {/* Top Badge */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-5 py-2 text-sm uppercase tracking-[3px] text-[#d4af37] backdrop-blur-md"
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
                        rotate: [0, 1, 0, -1, 0],
                    }}
                    transition={{
                        duration: 1,
                        y: {
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        },
                        rotate: {
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                        },
                    }}
                    className="relative mt-8"
                >
                    <div className="absolute inset-0 rounded-full bg-[#d4af37]/30 blur-[100px]" />

                    <Image
                        src="/logo.png"
                        alt="Smile Kava"
                        width={380}
                        height={380}
                        priority
                        className="relative mx-auto h-auto w-[220px] md:w-[300px] lg:w-[380px]"
                    />
                </motion.div>

                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-8 text-5xl md:text-7xl lg:text-8xl font-bold text-[#d4af37]"
                    style={{
                        textShadow:
                            "0 0 20px rgba(212,175,55,0.4), 0 0 40px rgba(212,175,55,0.2)",
                    }}
                >
                    SMILE KAVA
                </motion.h1>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mt-4 text-xl md:text-2xl text-white/90"
                >
                    Roots To Heaven.
                </motion.p>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70"
                >
                    Crafted for calm and rooted in tradition, Smile Kava brings you
                    premium Fijian noble kava, carefully sourced and traditionally
                    prepared to deliver moments of relaxation, connection, and island
                    heritage in every bowl.
                </motion.p>

                {/* Pure Kava Badge */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="mt-8 flex justify-center"
                >
                    <span className="rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-6 py-3 text-[#d4af37] backdrop-blur-md">
                        100% Pure Fijian Kava
                    </span>
                </motion.div>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-12 flex flex-wrap justify-center gap-5"
                >
                    <a
                        href="#products"
                        className="rounded-full bg-[#d4af37] px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
                    >
                        Shop Collection
                    </a>

                    <a
                        href="#about"
                        className="rounded-full border border-[#d4af37] px-8 py-4 text-[#d4af37] transition-all duration-300 hover:scale-105 hover:bg-[#d4af37]/10"
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
                    <div className="flex h-12 w-7 justify-center rounded-full border border-white/20 p-2">
                        <div className="h-3 w-1 rounded-full bg-[#d4af37]" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}