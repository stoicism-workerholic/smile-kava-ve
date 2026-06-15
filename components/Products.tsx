import Image from "next/image";

const products = [
    {
        name: "1 kg Kava",
        image: "/product1.jpg",
        price: "Fjd 150"
    },
    {
        name: "1/2 kg kava",
        image: "/product2.jpg",
        price: "Fjd 75"
    },
    {
        name: "Trial pack",
        image: "/product3.jpg",
        price: "Fjd 10"
    }
];

export default function Products() {
    return (
        <section
            id="products"
            className="section-padding"
        >
            <div className="container-custom">

                <h2 className="section-title">
                    Featured Products
                </h2>

                <div className="grid md:grid-cols-3 gap-8 mt-16">

                    {products.map((product) => (
                        <div
                            key={product.name}
                            className="card overflow-hidden group"
                        >
                            <div className="overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={600}
                                    height={600}
                                    priority={product.name === "1 kg Kava"}
                                    className="w-full h-[350px] object-cover group-hover:scale-110 transition duration-500"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-2xl gold-text">
                                    {product.name}
                                </h3>

                                <p className="mt-2 opacity-80">
                                    Premium Fiji Noble Kava
                                </p>

                                <div className="mt-4 text-xl font-bold">
                                    {product.price}
                                </div>

                                <button className="btn-primary mt-6 w-full">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}
