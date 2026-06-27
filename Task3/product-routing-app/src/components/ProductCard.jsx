import { Link } from "react-router-dom";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

function ProductCard({ product }) {
  return (
    <Card className="overflow-hidden">

      <div className="flex h-56 items-center justify-center bg-slate-100 p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain"
        />
      </div>

      <CardHeader>

        <div className="flex items-start justify-between gap-3">

          <CardTitle className="line-clamp-2">
            {product.title}
          </CardTitle>

          <Badge
            className={
              product.price > 100
                ? "bg-blue-600"
                : "bg-green-600"
            }
          >
            {product.price > 100
              ? "Premium"
              : "Best Seller"}
          </Badge>

        </div>

      </CardHeader>

      <CardContent>

        <h3 className="text-xl font-bold">
          ${product.price}
        </h3>

        <p className="capitalize text-muted-foreground">
          {product.category}
        </p>

      </CardContent>

      <CardFooter>

        <Link
          to={`/product/${product.id}`}
          className="w-full"
        >
          <Button className="w-full">
            View Details
          </Button>
        </Link>

      </CardFooter>

    </Card>
  );
}

export default ProductCard;