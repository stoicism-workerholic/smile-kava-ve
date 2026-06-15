import Image from "next/image";

const products = [
    {
        name: "1 kg Kava",
        image: "/product1.jpg",
        price: "FJD 150",
        description:
            "A generous reserve of our finest noble kava, created for ceremonies, celebrations, and moments that bring people together.",
    },
    {
        name: "1/2 kg Kava",
        image: "/product2.jpg",
        price: "FJD 75",
        description:
            "A versatile favourite, offering the perfect amount of authentic Fijian kava for regular enjoyment and shared experiences.",
    },
    {
        name: "Trial Pack",
        image: "/product3.jpg",
        price: "FJD 10",
        description:
            "Begin your kava journey with a carefully curated sample that captures the essence of Fiji in every serving.",
    },
];

export default function Products() {
    return (<section
        id="products"
        className="relative overflow-hidden py-32 bg-[#0E0906]"
    >
        {/* Background glow */} <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#C89B3C]/10 blur-[180px]" /> <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#C89B3C]/5 blur-[150px]" />

        ```
        <div className="container-custom relative z-10">
            <span className="block text-center text-[#C89B3C] uppercase tracking-[5px] text-sm mb-4">
                Premium Collection
            </span>

            <h2 className="section-title">
                Featured Products
            </h2>

            <p className="section-subtitle">
                Experience authentic Fiji noble kava, carefully selected and
                traditionally crafted for moments of relaxation and connection.
            </p>

            <div className="grid md:grid-cols-3 gap-10 mt-20">
                {products.map((product) => (
                    <div
                        key={product.name}
                        className="
            group
            overflow-hidden
            rounded-[32px]
            border border-white/10
            bg-white/[0.03]
            backdrop-blur-xl
            transition-all
            duration-500
            hover:-translate-y-3
            hover:border-[#C89B3C]/40
          "
                    >
                        <div className="relative overflow-hidden">
                            <Image
                                src={product.image}
                                alt={product.name}
                                width={600}
                                height={700}
                                priority={product.name === "1 kg Kava"}
                                className="
                w-full
                h-[420px]
                object-cover
                transition
                duration-700
                group-hover:scale-110
              "
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                            <div className="absolute bottom-6 left-6">
                                <p className="text-[#C89B3C] text-sm uppercase tracking-[4px]">
                                    Premium Noble Kava
                                </p>

                                <h3 className="text-3xl text-white mt-2">
                                    {product.name}
                                </h3>
                            </div>
                        </div>

                        <div className="p-8">
                            <p className="text-gray-400 leading-7 min-h-[110px]">
                                {product.description}
                            </p>

                            <div className="flex items-center justify-between mt-8">
                                <span className="text-3xl text-[#C89B3C] font-semibold">
                                    {product.price}
                                </span>

                                <button className="btn-primary">
                                    Order Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>

    );
}
