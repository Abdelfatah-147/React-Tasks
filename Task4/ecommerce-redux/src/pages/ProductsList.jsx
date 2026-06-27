import { useEffect, useState } from "react";

import ProductCard from "@/components/ProductCard";

function ProductsList() {

  const [products, setProducts] = useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {

    fetch("https://fakestoreapi.com/products")
      .then((response) => {

        if (!response.ok) {
          throw new Error();
        }

        return response.json();
      })

      .then((data) => {
        setProducts(data);
      })

      .catch(() => {
        setError(
          "Failed To Load Products"
        );
      })

      .finally(() => {
        setLoading(false);
      });

  }, []);

  if (loading) {
    return (
      <h1 className="text-center text-3xl">
        Loading...
      </h1>
    );
  }

  if (error) {
    return (
      <h1 className="text-center text-red-500">
        {error}
      </h1>
    );
  }

  return (
    <div>

      <h1 className="mb-8 text-4xl font-bold">

        Product Store

      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {products.map((product) => (

          <ProductCard
            key={product.id}
            product={product}
          />

        ))}

      </div>

    </div>
  );
}

export default ProductsList;