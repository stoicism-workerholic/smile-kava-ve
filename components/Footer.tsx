export default function Footer() {
    return (
        <footer className="bg-black py-12 border-t border-white/10">
            <div className="container-custom text-center">
                <h3 className="text-3xl gold-text">
                    Smile Kava
                </h3>

                <p className="mt-4 opacity-70">
                    Roots To Heaven
                </p>

                <p className="mt-6 text-sm opacity-50">
                    © 2026 Smile Kava. All Rights Reserved.
                </p>

                <p className="mt-2 text-xs opacity-40">
                    Website designed & developed by{" "}
                    <a
                        href="https://balu-web-builder.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#D4AF37] transition-colors"
                    >
                        Fiji Web Hub
                    </a>
                </p>
            </div>
        </footer>
    );
}