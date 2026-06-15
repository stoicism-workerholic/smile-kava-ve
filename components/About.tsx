export default function About() {
    return (
        <section
            id="about"
            className="relative overflow-hidden py-32 bg-[#140d09]"
        >
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[180px]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#D4AF37]/5 rounded-full blur-[150px]" />

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    <div className="relative group">
                        <div className="absolute -inset-3 rounded-[40px] bg-gradient-to-br from-[#D4AF37]/60 via-transparent to-[#D4AF37]/30 blur-sm" />

                        <div className="relative overflow-hidden rounded-[36px]">
                            <img
                                src="/kava-roots.png"
                                alt="Fijian Kava Roots"
                                className="w-full h-[650px] object-cover transition duration-700 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                            <div className="absolute bottom-8 left-8 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl px-7 py-5">
                                <p className="text-xs uppercase tracking-[5px] text-[#D4AF37]">
                                    Rooted in Fijian Tradition
                                </p>

                                <p className="text-white text-xl font-light mt-2">
                                    Crafted from Fiji&apos;s Finest Noble Kava
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <span className="text-[#D4AF37] uppercase tracking-[6px] text-sm">
                            Our Story
                        </span>

                        <h2 className="mt-5 text-6xl xl:text-7xl leading-[1.1] font-serif text-white">
                            From The
                            <span className="block text-[#D4AF37]">
                                Heart of Fiji
                            </span>
                        </h2>

                        <div className="w-24 h-[2px] bg-[#D4AF37] mt-8 mb-10" />

                        <p className="text-gray-300 text-xl leading-9">
                            Deeply rooted in centuries of Pacific Island tradition,
                            Smile Kava sources only premium noble kava from the fertile
                            soils of Fiji. Every harvest is carefully selected to honour
                            authenticity, quality, and the spirit of connection.
                        </p>

                        <p className="text-gray-400 text-lg leading-8 mt-8">
                            More than a beverage, kava represents community,
                            ceremony, and moments shared together. We preserve this
                            heritage by delivering an experience that is as pure and
                            calming as the islands from which it comes.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6 mt-14">
                            <div className="backdrop-blur-xl bg-white/[0.03] border border-white/10 rounded-3xl p-8 hover:border-[#D4AF37]/30 transition">
                                <div className="text-4xl mb-5">🌿</div>

                                <h3 className="text-[#D4AF37] text-2xl mb-4">
                                    Authentic Heritage
                                </h3>

                                <p className="text-gray-400">
                                    A tradition passed through generations,
                                    bringing people together in celebration and connection.
                                </p>
                            </div>

                            <div className="backdrop-blur-xl bg-white/[0.03] border border-white/10 rounded-3xl p-8 hover:border-[#D4AF37]/30 transition">
                                <div className="text-4xl mb-5">✨</div>

                                <h3 className="text-[#D4AF37] text-2xl mb-4">
                                    Premium Quality
                                </h3>

                                <p className="text-gray-400">
                                    Sustainably harvested and traditionally processed
                                    for a smooth, authentic kava experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}