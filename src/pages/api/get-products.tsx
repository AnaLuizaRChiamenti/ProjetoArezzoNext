import axios from "axios";
import { useEffect, useState } from "react";

interface Image {
  url: string;
}

interface Product {
  images: Image[];
  name: string;
  price: {
    formattedValue: string;
  };
}

export const GetProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get('http://localhost:3001/products');

    const filteredProducts = response.data.map((product: Product) => ({
      name: product.name,
      price: product.price,
      imageUrl: product.images[0]?.url
    }))

    return filteredProducts;
  } catch (err) {
    console.log('Erro ao buscar produtos:', err);
    return [];
  }
};