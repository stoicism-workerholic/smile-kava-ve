import {
    Leaf,
    ShieldCheck,
    Globe,
    HeartHandshake
} from "lucide-react";

export default function Benefits() {
    return (
        <section
            id="benefits"
            className="section-padding bg-[#140d09]"
        >
            <div className="container-custom">

                <h2 className="section-title">
                    Why Choose Smile Kava
                </h2>

                <div className="grid md:grid-cols-4 gap-6 mt-16">

                    <div className="card p-8 text-center">
                        <Leaf
                            size={50}
                            className="mx-auto gold-text"
                        />
                        <h3 className="mt-4 mb-2">
                            100% Natural
                        </h3>
                    </div>

                    <div className="card p-8 text-center">
                        <ShieldCheck
                            size={50}
                            className="mx-auto gold-text"
                        />
                        <h3 className="mt-4 mb-2">
                            Premium Quality
                        </h3>
                    </div>

                    <div className="card p-8 text-center">
                        <Globe
                            size={50}
                            className="mx-auto gold-text"
                        />
                        <h3 className="mt-4 mb-2">
                            Fiji Sourced
                        </h3>
                    </div>

                    <div className="card p-8 text-center">
                        <HeartHandshake
                            size={50}
                            className="mx-auto gold-text"
                        />
                        <h3 className="mt-4 mb-2">
                            Traditional Heritage
                        </h3>
                    </div>

                </div>
            </div>
        </section>
    );
}