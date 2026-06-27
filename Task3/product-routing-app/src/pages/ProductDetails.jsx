import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function ProductDetails() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      });
  }, [id]);

  if (!product) {
    return (
      <div className="text-center text-xl">
        Loading Product...
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl">

      <Button
        className="mb-6"
        onClick={() => navigate("/")}
      >
        Back
      </Button>

      <Card>

        <div className="grid gap-8 p-8 md:grid-cols-2">

          <div className="flex items-center justify-center">

            <img
              src={product.image}
              alt={product.title}
              className="h-80 object-contain"
            />

          </div>

          <div>

            <CardHeader>

              <CardTitle className="text-3xl">
                {product.title}
              </CardTitle>

            </CardHeader>

            <CardContent className="space-y-4">

              <h2 className="text-2xl font-bold text-blue-600">
                ${product.price}
              </h2>

              <p className="capitalize text-gray-500">
                {product.category}
              </p>

              <p>
                {product.description}
              </p>

            </CardContent>

          </div>

        </div>

      </Card>

    </div>
  );
}

export default ProductDetails;