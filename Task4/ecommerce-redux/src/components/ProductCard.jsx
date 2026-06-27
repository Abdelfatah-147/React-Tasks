import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addToCart } from "@/store/cartSlice";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <Card className="overflow-hidden transition hover:shadow-xl">

      <div className="flex h-60 items-center justify-center bg-slate-100 p-6">

        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain"
        />

      </div>

      <CardHeader>

        <div className="flex justify-between gap-3">

          <CardTitle className="line-clamp-2">
            {product.title}
          </CardTitle>

          <Badge>

            {product.price > 100
              ? "Premium"
              : "Best Seller"}

          </Badge>

        </div>

      </CardHeader>

      <CardContent>

        <h2 className="mb-2 text-2xl font-bold">

          ${product.price}

        </h2>

        <p className="capitalize text-muted-foreground">

          {product.category}

        </p>

      </CardContent>

      <CardFooter className="flex gap-2">

        <Button
          className="flex-1"
          onClick={() =>
            dispatch(addToCart(product))
          }
        >
          Add To Cart
        </Button>

        <Link
          to={`/product/${product.id}`}
          className="flex-1"
        >
          <Button
            className="w-full"
            variant="outline"
          >
            Details
          </Button>
        </Link>

      </CardFooter>

    </Card>
  );
}

export default ProductCard;