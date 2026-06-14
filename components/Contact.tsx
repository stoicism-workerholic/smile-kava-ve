export default function Contact() {
    return (
        <section
            id="contact"
            className="section-padding bg-[#140d09]"
        >
            <div className="container-custom max-w-4xl">

                <h2 className="section-title">
                    Contact Us
                </h2>

                <div className="card p-10 mt-12">

                    <form className="space-y-6">

                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-4 rounded-xl bg-black/20 border border-white/10"
                        />

                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full p-4 rounded-xl bg-black/20 border border-white/10"
                        />

                        <textarea
                            rows={6}
                            placeholder="Your Message"
                            className="w-full p-4 rounded-xl bg-black/20 border border-white/10"
                        />

                        <button
                            type="submit"
                            className="btn-primary"
                        >
                            Send Message
                        </button>

                    </form>

                    <div className="mt-10 border-t border-white/10 pt-8">

                        <h3 className="gold-text text-xl">
                            Smile Kava
                        </h3>

                        <p className="mt-2">
                            Premium Fiji Noble Kava
                        </p>

                        <p className="mt-2">
                            Phone: 8462969
                        </p>

                        <p>
                            Email: info@smilekava.com
                        </p>

                    </div>

                </div>

            </div>
        </section>
    );
}