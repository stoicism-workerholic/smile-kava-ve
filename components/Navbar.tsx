"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 glass">
            <div className="container-custom px-6 py-4 flex items-center justify-between">

                <Link href="/" className="flex items-center gap-3">
                    <Image
                        src="/logo.png"
                        alt="Smile Kava"
                        width={50}
                        height={50}
                        className="rounded-full"
                    />
                    <span className="font-bold text-xl gold-text">
                        Smile Kava
                    </span>
                </Link>

                <div className="hidden md:flex gap-8 items-center">
                    <a href="#about">About</a>
                    <a href="#benefits">Benefits</a>
                    <a href="#products">Products</a>
                    <a href="#contact">Contact</a>

                    <a
                        href="#products"
                        className="btn-primary font-semibold"
                    >
                        Shop Now
                    </a>
                </div>

                <button
                    className="md:hidden"
                    onClick={() => setOpen(!open)}
                >
                    <Menu />
                </button>
            </div>

            {open && (
                <div className="md:hidden bg-black p-6 space-y-4">
                    <a href="#about" className="block">About</a>
                    <a href="#benefits" className="block">Benefits</a>
                    <a href="#products" className="block">Products</a>
                    <a href="#contact" className="block">Contact</a>
                </div>
            )}
        </nav>
    );
}