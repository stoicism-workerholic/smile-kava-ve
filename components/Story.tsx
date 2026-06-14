import Image from "next/image";

export default function Story() {
    return (
        <section className="section-padding bg-[#140d09]">
            <div className="container-custom">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <div>
                        <span className="gold-text uppercase tracking-widest">
                            Our Heritage
                        </span>

                        <h2 className="text-5xl font-bold mt-4 mb-6">
                            Traditional Fijian Kava
                        </h2>

                        <p className="text-lg opacity-80 leading-8">
                            Smile Kava is inspired by generations of
                            Pacific Island tradition. Every root is
                            carefully cultivated and harvested from
                            fertile Fijian soil, preserving the
                            authentic experience that has united
                            communities for centuries.
                        </p>

                        <p className="text-lg opacity-80 leading-8 mt-6">
                            Our commitment is simple:
                            deliver premium noble kava while honoring
                            the culture, craftsmanship, and heritage
                            behind every bowl.
                        </p>
                    </div>

                    <div>
                        <Image
                            src="/hero-bg.jpg"
                            alt="Fiji Kava Farm"
                            width={800}
                            height={600}
                            className="rounded-3xl shadow-2xl"
                        />
                    </div>

                </div>

            </div>
        </section>
    );
}