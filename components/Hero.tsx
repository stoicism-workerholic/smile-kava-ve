"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c0c] via-[#152010] to-[#000000]" />

            {/* Golden Glow */}
            <div className="absolute w-[700px] h-[700px] rounded-full bg-[#d4af37]/20 blur-[120px]" />

            {/* Dust Effect */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,#d4af37_1px,transparent_1px)] bg-[length:25px_25px]" />

            <div className="relative z-10 text-center px-6 max-w-6xl">

                <motion.div
                    initial={{ opacity: 0, scale: .8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="relative"
                >
                    {/* Logo Glow */}
                    <div className="absolute inset-0 bg-[#d4af37]/30 blur-[100px] rounded-full" />

                    <Image
                        alt="Smile kava"
                        src="/logo.png"
                        width={380}
                        height={380}
                        priority
                        className="relative mx-auto"
                    />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: .2 }}
                    className="text-5xl md:text-8xl font-bold mt-8 text-[#d4af37]"
                >
                    SMILE KAVA
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: .4 }}
                    className="text-xl md:text-2xl text-white/80 mt-4"
                >
                    Small money, big Dopes.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: .6 }}
                    className="max-w-2xl mx-auto mt-6 text-white/70"
                >
                    Premium Fiji Noble Kava crafted for relaxation,
                    connection, and tradition.


                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: .8 }}
                    className="mt-10 flex flex-wrap justify-center gap-5"
                >
                    <a
                        href="#products"
                        className="px-8 py-4 rounded-full bg-[#d4af37] text-black font-bold hover:scale-105 transition"
                    >
                        Shop Collection
                    </a>

                    <a
                        href="#about"
                        className="px-8 py-4 rounded-full border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37]/10 transition"
                    >
                        Learn More
                    </a>
                </motion.div>

            </div>
        </section>
    );
}