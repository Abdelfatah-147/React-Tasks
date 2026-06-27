import { Link, Outlet } from "react-router-dom";
import { ShoppingCart, Store } from "lucide-react";

import { Button } from "@/components/ui/button";

function MainLayout() {
  return (
    <div className="min-h-screen bg-slate-100">

      <nav className="border-b bg-white shadow">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <Link
            to="/"
            className="flex items-center gap-2 text-2xl font-bold"
          >
            <Store className="h-7 w-7" />
            Product Store
          </Link>

          <div className="flex gap-3">

            <Link to="/">
              <Button variant="outline">
                Home
              </Button>
            </Link>

            <Link to="/cart">
              <Button>
                <ShoppingCart className="mr-2 h-4 w-4" />
                Cart
              </Button>
            </Link>

          </div>

        </div>

      </nav>

      <main className="mx-auto max-w-7xl p-6">
        <Outlet />
      </main>

    </div>
  );
}

export default MainLayout;