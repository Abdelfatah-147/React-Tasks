import { Outlet } from "react-router-dom";

import Navbar from "@/components/Navbar";

import useThemeStore from "@/store/useThemeStore";

function MainLayout() {

  const { theme } = useThemeStore();

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        theme === "dark"
          ? "bg-slate-950 text-white"
          : "bg-slate-100 text-black"
      }`}
    >
      <Navbar />

      <main className="mx-auto max-w-7xl p-6">

        <Outlet />

      </main>
    </div>
  );
}

export default MainLayout;