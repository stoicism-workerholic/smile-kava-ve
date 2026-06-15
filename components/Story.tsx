import Image from "next/image";

export default function Story() {
    return (<section
        className="relative overflow-hidden py-32 bg-[#140d09]"
    >
        {/* Background glow */} <div className="absolute top-0 left-0 w-[450px] h-[450px] rounded-full bg-[#C89B3C]/10 blur-[180px]" /> <div className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full bg-[#C89B3C]/5 blur-[140px]" />

        ```
        <div className="container-custom relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
                {/* Image */}
                <div className="relative order-2 lg:order-1">
                    <div className="absolute -inset-3 rounded-[40px] bg-gradient-to-br from-[#C89B3C]/50 via-transparent to-[#C89B3C]/20 blur-sm" />

                    <div className="relative overflow-hidden rounded-[36px]">
                        <Image
                            src="/picture.png"
                            alt="Founder of Smile Kava"
                            width={800}
                            height={900}
                            className="w-full object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                        <div className="absolute bottom-8 left-8">
                            <p className="text-[#C89B3C] uppercase tracking-[4px] text-sm">
                                Founder
                            </p>

                            <h3 className="text-3xl text-white mt-2">
                                The Face Behind Smile Kava
                            </h3>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="order-1 lg:order-2">
                    <span className="text-[#C89B3C] uppercase tracking-[5px] text-sm">
                        Our Story
                    </span>

                    <h2 className="text-5xl md:text-6xl text-white mt-5 leading-tight">
                        Sharing Fiji's
                        <span className="block text-[#C89B3C]">
                            Kava Tradition
                        </span>
                    </h2>

                    <div className="w-24 h-[2px] bg-[#C89B3C] mt-8 mb-10" />

                    <p className="text-gray-300 text-lg leading-9">
                        Smile Kava was founded with a simple mission:
                        to share the authentic experience of premium Fijian
                        noble kava with people around the world while staying
                        true to the traditions that have united Pacific Island
                        communities for generations.
                    </p>

                    <p className="text-gray-400 text-lg leading-9 mt-8">
                        Every product reflects our commitment to quality,
                        heritage, and the spirit of connection. From the fertile
                        soils of Fiji to your home, each serving carries the
                        story of our islands and the people who have cherished
                        kava for centuries.
                    </p>

                    <div className="mt-12 border-l-2 border-[#C89B3C] pl-6">
                        <p className="text-white text-xl italic">
                            "Kava is more than a drink—it's a tradition of
                            connection, community, and sharing meaningful moments."
                        </p>

                        <p className="text-[#C89B3C] mt-4 uppercase tracking-[3px] text-sm">
                            Founder, Smile Kava
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>


    );
}
