"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Benefits", href: "#benefits" },
        { name: "Products", href: "#products" },
        { name: "Contact", href: "#contact" },
    ];

    return (<nav
        className="
     fixed
     top-0
     left-0
     w-full
     z-50
     border-b
     border-white/10
     bg-black/20
     backdrop-blur-xl
   "
    > <div className="container-custom"> <div className="flex items-center justify-between py-4">
        {/* Logo */} <Link
            href="/"
            className="flex items-center gap-4"
        > <Image
                src="/logo.png"
                alt="Smile Kava"
                width={56}
                height={56}
                className="rounded-full"
                priority
            />


            <div>
                <h1 className="text-2xl font-semibold text-[#C89B3C]">
                    Smile Kava
                </h1>

                <p className="text-xs uppercase tracking-[3px] text-gray-400">
                    Premium Fiji Noble Kava
                </p>
            </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
                <a
                    key={link.name}
                    href={link.href}
                    className="
              text-gray-200
              transition
              duration-300
              hover:text-[#C89B3C]
            "
                >
                    {link.name}
                </a>
            ))}

            <a
                href="#products"
                className="btn-primary font-semibold"
            >
                Shop Now
            </a>
        </div>

        {/* Mobile Button */}
        <button
            onClick={() => setOpen(!open)}
            className="
          md:hidden
          flex
          items-center
          justify-center
          h-12
          w-12
          rounded-full
          bg-white/5
          border
          border-white/10
        "
        >
            {open ? (
                <X size={24} />
            ) : (
                <Menu size={24} />
            )}
        </button>
    </div>
        </div>

        {/* Mobile Menu */}
        <div
            className={`
      md:hidden
      overflow-hidden
      transition-all
      duration-300
      ${open ? "max-h-[400px]" : "max-h-0"}
    `}
        >
            <div className="border-t border-white/10 bg-black/80 backdrop-blur-xl">
                <div className="container-custom py-6 flex flex-col gap-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className="
              text-lg
              text-gray-200
              transition
              hover:text-[#C89B3C]
            "
                        >
                            {link.name}
                        </a>
                    ))}

                    <a
                        href="#products"
                        onClick={() => setOpen(false)}
                        className="btn-primary text-center"
                    >
                        Shop Now
                    </a>
                </div>
            </div>
        </div>
    </nav>


    );
}
