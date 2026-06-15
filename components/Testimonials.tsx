const reviews = [
    {
        name: "James R.",
        location: "Nadi, Fiji",
        text: "The closest experience to drinking authentic kava in Fiji. Smooth, fresh, and exceptionally well crafted.",
    },
    {
        name: "Sarah M.",
        location: "Suva, Fiji",
        text: "Excellent quality and beautifully packaged. You can truly taste the care and tradition behind every serving.",
    },
    {
        name: "David T.",
        location: "Lautoka, Fiji",
        text: "Smooth, relaxing, and clearly premium. Smile Kava has become an essential part of my evening routine.",
    },
];

export default function Testimonials() {
    return (<section
        className="relative overflow-hidden py-32 bg-[#0E0906]"
    >
        {/* Background glow */} <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#C89B3C]/10 blur-[160px]" /> <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#C89B3C]/5 blur-[180px]" />

        ```
        <div className="container-custom relative z-10">
            <span className="block text-center text-[#C89B3C] uppercase tracking-[5px] text-sm mb-4">
                Testimonials
            </span>

            <h2 className="section-title">
                Customer Stories
            </h2>

            <p className="section-subtitle">
                Hear from those who have experienced the authentic taste and
                tradition of premium Fijian noble kava.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-20">
                {reviews.map((review) => (
                    <div
                        key={review.name}
                        className="
            relative
            overflow-hidden
            rounded-[30px]
            border border-white/10
            bg-white/[0.03]
            backdrop-blur-xl
            p-10
            transition-all
            duration-500
            hover:-translate-y-2
            hover:border-[#C89B3C]/40
          "
                    >
                        {/* Quote mark */}
                        <div className="absolute top-6 right-8 text-7xl text-[#C89B3C]/20 font-serif">
                            "
                        </div>

                        <div className="text-[#C89B3C] text-xl mb-6 tracking-[3px]">
                            ★★★★★
                        </div>

                        <p className="text-gray-300 leading-8 text-lg min-h-[170px]">
                            {review.text}
                        </p>

                        <div className="mt-10 pt-6 border-t border-white/10">
                            <h4 className="text-white text-lg">
                                {review.name}
                            </h4>

                            <p className="text-[#C89B3C] text-sm uppercase tracking-[3px] mt-1">
                                {review.location}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>


    );
}
