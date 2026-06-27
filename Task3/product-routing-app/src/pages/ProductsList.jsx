import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";

function ProductsList() {
  const [products, setProducts] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get("category");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const filteredProducts = products.filter((product) => {
    if (!category) return true;

    return product.category === category;
  });

  return (
    <div>

      <div className="mb-8">

        <h1 className="text-4xl font-bold">
          Product Store
        </h1>

        <h3 className="mt-2 text-lg text-gray-500">
          Currently Browsing :
          {" "}
          {category ? category : "All Products"}
        </h3>

      </div>

      <div className="mb-8 flex flex-wrap gap-3">

        <Button
          onClick={() =>
            setSearchParams({
              category: "electronics",
            })
          }
        >
          Electronics
        </Button>

        <Button
          onClick={() =>
            setSearchParams({
              category: "jewelery",
            })
          }
        >
          Jewelery
        </Button>

        <Button
          onClick={() =>
            setSearchParams({
              category: "men's clothing",
            })
          }
        >
          Clothing
        </Button>

        <Button
          variant="outline"
          onClick={() => setSearchParams({})}
        >
          All Products
        </Button>

      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {filteredProducts.map((product) => (
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