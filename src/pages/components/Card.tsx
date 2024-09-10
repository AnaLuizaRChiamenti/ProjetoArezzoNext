import { useEffect, useState } from "react";
import { GetProducts } from "../api/get-products"
import Image from "next/image";

interface Product {
    name: string;
    price: {
        formattedValue: string;
    };
    imageUrl?: string;
}

export default function Card() {
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        const loadProducts = async () => {
            const allProducts = await GetProducts();
            const firstFiveProducts = allProducts.slice(0, 5);
            setProducts(firstFiveProducts);
        };

        loadProducts();
    }, []);


    return (
        <div className="w-full flex overflow-x-auto gap-1">
            {products.map((product, index) => (
                <div key={index} className="flex flex-col items-center min-w-52">
                    <div className="relative w-full h-[492px] mb-2">
                        {product.imageUrl ? (
                            <Image
                                src={product.imageUrl}
                                alt={product.name}
                                layout="fill"
                                objectFit="cover"
                            />
                        ) : (
                            <p>Imagem não disponível</p>
                        )}
                    </div>
                    <div className="w-full flex items-center justify-between px-2">
                        <h2 className="text-sm truncate w-2/3">{product.name}</h2>
                        <p className="text-sm font-bold truncate w-1/3 text-right">{product.price.formattedValue}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
