import {
    Leaf,
    ShieldCheck,
    Globe,
    HeartHandshake,
} from "lucide-react";

const benefits = [
    {
        icon: Leaf,
        title: "100% Natural",
        description:
            "Pure noble kava sourced directly from Fiji with no additives or artificial ingredients.",
    },
    {
        icon: ShieldCheck,
        title: "Premium Quality",
        description:
            "Every batch is carefully selected and processed to ensure exceptional consistency.",
    },
    {
        icon: Globe,
        title: "Fiji Sourced",
        description:
            "Harvested from the fertile soils of Fiji, where kava traditions have flourished for centuries.",
    },
    {
        icon: HeartHandshake,
        title: "Traditional Heritage",
        description:
            "Crafted with respect for the cultural ceremonies and communities that made kava legendary.",
    },
];

export default function Benefits() {
    return (<section
        id="benefits"
        className="relative overflow-hidden py-32 bg-[#140d09]"
    >
        {/* Background glow */} <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#C89B3C]/10 rounded-full blur-[160px]" /> <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#C89B3C]/5 rounded-full blur-[200px]" />


        <div className="container-custom relative z-10">
            <span className="block text-center text-[#C89B3C] uppercase tracking-[5px] text-sm mb-4">
                The Smile Kava Difference
            </span>

            <h2 className="section-title">
                Why Choose Smile Kava
            </h2>

            <p className="section-subtitle">
                Experience authentic Fijian noble kava crafted with care,
                tradition, and uncompromising quality.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
                {benefits.map((benefit) => {
                    const Icon = benefit.icon;

                    return (
                        <div
                            key={benefit.title}
                            className="
              group
              relative
              overflow-hidden
              rounded-[30px]
              border border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              p-8
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-[#C89B3C]/40
            "
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-[#C89B3C]/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                            <div className="relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-[#C89B3C]/10 flex items-center justify-center mb-6">
                                    <Icon
                                        size={32}
                                        className="text-[#C89B3C]"
                                    />
                                </div>

                                <h3 className="text-2xl text-white mb-4">
                                    {benefit.title}
                                </h3>

                                <p className="text-gray-400 leading-7">
                                    {benefit.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    </section>

    );
}
