export default function About() {
    return (
        <section
            id="about"
            className="section-padding"
        >
            <div className="container-custom">

                <h2 className="section-title">
                    From The Heart Of Fiji
                </h2>

                <p className="section-subtitle">
                    Smile Kava is rooted in centuries of
                    Pacific Island tradition. Every batch is
                    carefully selected from premium noble
                    kava farms across Fiji.
                </p>

                <div className="grid md:grid-cols-2 gap-10 mt-16">

                    <div className="card p-8">
                        <h3 className="gold-text text-2xl mb-4">
                            Authentic Heritage
                        </h3>

                        <p>
                            For generations, kava has united
                            families and communities throughout
                            the Pacific.
                        </p>
                    </div>

                    <div className="card p-8">
                        <h3 className="gold-text text-2xl mb-4">
                            Premium Quality
                        </h3>

                        <p>
                            Carefully harvested and processed
                            to preserve its traditional strength
                            and smooth taste.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}