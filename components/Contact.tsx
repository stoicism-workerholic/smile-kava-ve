import {
    Mail,
    Phone,
    MapPin,
} from "lucide-react";

export default function Contact() {
    return (<section
        id="contact"
        className="relative overflow-hidden py-32 bg-[#140d09]"
    >
        {/* Background glow */} <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-[#C89B3C]/10 blur-[160px]" /> <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#C89B3C]/5 blur-[180px]" />


        <div className="container-custom relative z-10">
            <span className="block text-center text-[#C89B3C] uppercase tracking-[5px] text-sm mb-4">
                Get In Touch
            </span>

            <h2 className="section-title">
                Contact Us
            </h2>

            <p className="section-subtitle">
                We'd love to hear from you. Whether you have a question about our
                products or would like to place an order, we're here to help.
            </p>

            <div className="grid lg:grid-cols-2 gap-10 mt-20">
                {/* Contact Information */}
                <div
                    className="
          rounded-[32px]
          border border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
          p-10
        "
                >
                    <h3 className="text-3xl text-white mb-8">
                        Smile Kava
                    </h3>

                    <p className="text-gray-400 leading-8 mb-10">
                        Premium Fijian noble kava, carefully sourced and crafted to bring
                        the authentic taste and tradition of Fiji to your home.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <Phone
                                className="text-[#C89B3C] mt-1"
                                size={22}
                            />

                            <div>
                                <p className="text-white font-medium">
                                    Phone
                                </p>

                                <p className="text-gray-400">
                                    <a
                                        href="tel:8462969">8462969</a>

                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Mail
                                className="text-[#C89B3C] mt-1"
                                size={22}
                            />

                            <div>
                                <p className="text-white font-medium">
                                    Email
                                </p>

                                <a
                                    href="mailto:alifataukeiduadua@gmail.com"
                                    className="text-gray-400 hover:text-[#C89B3C] transition"
                                >
                                    alifataukeiduadua@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <MapPin
                                className="text-[#C89B3C] mt-1"
                                size={22}
                            />

                            <div>
                                <p className="text-white font-medium">
                                    Origin
                                </p>

                                <p className="text-gray-400">
                                    Fiji Islands
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div
                    className="
          rounded-[32px]
          border border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
          p-10
        "
                >
                    <form className="space-y-6">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="
              w-full
              rounded-2xl
              border border-white/10
              bg-black/20
              px-5
              py-4
              text-white
              placeholder:text-gray-500
              outline-none
              focus:border-[#C89B3C]/50
            "
                        />

                        <input
                            type="email"
                            placeholder="Email Address"
                            className="
              w-full
              rounded-2xl
              border border-white/10
              bg-black/20
              px-5
              py-4
              text-white
              placeholder:text-gray-500
              outline-none
              focus:border-[#C89B3C]/50
            "
                        />

                        <textarea
                            rows={6}
                            placeholder="Your Message"
                            className="
              w-full
              rounded-2xl
              border border-white/10
              bg-black/20
              px-5
              py-4
              text-white
              placeholder:text-gray-500
              outline-none
              focus:border-[#C89B3C]/50
            "
                        />

                        <button
                            type="submit"
                            className="btn-primary w-full"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>


    );
}
