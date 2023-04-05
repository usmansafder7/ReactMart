import { ProductCard } from "../components/ProductCard";
import { useState, useEffect } from "react";


export const ProductsList = () => {

  const [products, setProducts] = useState([]);
  const url = "https://fakestoreapi.com/products";

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(url);
      const result = await response.json();
      setProducts(result);
    }
    fetchProducts();
  }, [url])

  return (
    <main>
      <section className="max-w-7xl mx-auto py-12">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          { products && products.map((product) => (
            <ProductCard key={product.id} product={product}/>
          ))}
        </div>
      </section>
    </main>
  )
}
