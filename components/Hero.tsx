"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="hero-gradient min-h-screen flex items-center justify-center text-center px-6">

            <div className="max-w-5xl">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Image
                        src="/logo.png"
                        alt="Smile Kava"
                        width={180}
                        height={180}
                        className="mx-auto mb-8 h-auto"
                    />
                </motion.div>

                <motion.h1
                    className="text-5xl md:text-8xl font-bold gold-text"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: .2 }}
                >
                    SMILE KAVA
                </motion.h1>

                <motion.h2
                    className="text-xl md:text-3xl mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: .4 }}
                >
                    Roots To Heaven
                </motion.h2>

                <motion.p
                    className="max-w-3xl mx-auto mt-8 text-lg opacity-80"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: .6 }}
                >
                    Premium Fiji Noble Kava sourced directly
                    from the heart of Fiji. Authentic,
                    traditional, and crafted for connection.
                </motion.p>

                <motion.div
                    className="mt-10 flex flex-wrap gap-4 justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: .8 }}
                >
                    <a href="#products" className="btn-primary">
                        Shop Collection
                    </a>

                    <a href="#about" className="btn-secondary">
                        Learn More
                    </a>
                </motion.div>
            </div>
        </section>
    );
}