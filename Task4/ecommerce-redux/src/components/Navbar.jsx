import { Link } from "react-router-dom";
import { ShoppingCart, Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";

import useThemeStore from "@/store/useThemeStore";
import { useLanguage } from "@/context/LanguageContext";

import { useSelector } from "react-redux";

function Navbar() {
  const { theme, toggleTheme } = useThemeStore();

  const { language, toggleLanguage } = useLanguage();

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  return (
    <nav
      className={`border-b shadow ${
        theme === "dark"
          ? "bg-slate-900 text-white"
          : "bg-white text-black"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="text-2xl font-bold"
        >
          {language === "en"
            ? "Welcome 👋"
            : "مرحباً 👋"}
        </Link>

        <div className="flex items-center gap-3">

          <Button
            variant="outline"
            onClick={toggleTheme}
          >
            {theme === "light" ? (
              <Moon className="h-4 w-4" />
            ) : (
              <Sun className="h-4 w-4" />
            )}
          </Button>

          <Button
            variant="outline"
            onClick={toggleLanguage}
          >
            {language === "en"
              ? "AR"
              : "EN"}
          </Button>

          <Link to="/">
            <Button variant="outline">
              {language === "en"
                ? "Products"
                : "المنتجات"}
            </Button>
          </Link>

          <Link to="/cart">
            <Button>

              <ShoppingCart className="mr-2 h-4 w-4" />

              {language === "en"
                ? "Cart"
                : "السلة"}

              {" ("}
              {cartItems.length}
              {")"}

            </Button>
          </Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;