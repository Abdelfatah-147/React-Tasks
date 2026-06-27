import { useDispatch, useSelector } from "react-redux";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import {
  removeFromCart,
  clearCart,
} from "@/store/cartSlice";

function Cart() {

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  const dispatch = useDispatch();

  const total = cartItems.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="text-center">

        <h1 className="mb-3 text-5xl font-bold">

          Shopping Cart

        </h1>

        <p className="text-gray-500">

          Your cart is empty.

        </p>

      </div>
    );
  }

  return (
    <div>

      <div className="mb-8 flex items-center justify-between">

        <h1 className="text-4xl font-bold">

          Shopping Cart

        </h1>

        <Button
          variant="destructive"
          onClick={() =>
            dispatch(clearCart())
          }
        >
          Clear Cart
        </Button>

      </div>

      <div className="space-y-4">

        {cartItems.map((item) => (

          <Card key={item.id}>

            <CardContent className="flex items-center justify-between p-5">

              <div>

                <h3 className="font-bold">

                  {item.title}

                </h3>

                <p>

                  Price :
                  ${item.price}

                </p>

                <p>

                  Quantity :
                  {item.quantity}

                </p>

                <p className="font-semibold">

                  Subtotal :
                  ${(item.price * item.quantity).toFixed(2)}

                </p>

              </div>

              <Button
                variant="destructive"
                onClick={() =>
                  dispatch(removeFromCart(item.id))
                }
              >
                Remove
              </Button>

            </CardContent>

          </Card>

        ))}

      </div>

      <div className="mt-8 rounded-xl border p-6">

        <h2 className="text-2xl font-bold">

          Total :
          ${total.toFixed(2)}

        </h2>

      </div>

    </div>
  );
}

export default Cart;