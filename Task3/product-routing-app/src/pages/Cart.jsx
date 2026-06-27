import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <div className="mx-auto max-w-xl">

      <h1 className="mb-8 text-4xl font-bold">
        Shopping Cart
      </h1>

      <div className="rounded-xl border p-8 shadow">

        <ShoppingCart className="mx-auto mb-6 h-20 w-20 text-gray-400" />

        <h2 className="mb-3 text-center text-2xl font-semibold">
          Cart Summary
        </h2>

        <p className="mb-2 text-center">
          Products : 0
        </p>

        <p className="mb-6 text-center">
          Total Price : $0
        </p>

        <div className="text-center">
          <Link to="/">
            <Button>
              Continue Shopping
            </Button>
          </Link>
        </div>

      </div>

    </div>
  );
}

export default Cart;