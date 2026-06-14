export default function Testimonials() {
    const reviews = [
        {
            name: "James R.",
            text: "The closest experience to drinking authentic kava in Fiji."
        },
        {
            name: "Sarah M.",
            text: "Excellent quality and beautifully packaged."
        },
        {
            name: "David T.",
            text: "Smooth, relaxing, and clearly premium."
        }
    ];

    return (
        <section className="section-padding">

            <div className="container-custom">

                <h2 className="section-title">
                    Customer Stories
                </h2>

                <div className="grid md:grid-cols-3 gap-8 mt-16">

                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="card p-8"
                        >
                            <div className="text-yellow-400 text-xl">
                                ★★★★★
                            </div>

                            <p className="mt-4 opacity-80">
                                "{review.text}"
                            </p>

                            <h4 className="gold-text mt-6">
                                {review.name}
                            </h4>
                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}