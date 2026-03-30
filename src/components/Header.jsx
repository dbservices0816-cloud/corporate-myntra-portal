import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CMP from "../assets/CMP.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

  const menuItems = [
    { name: t("navbar.home"), path: "/" },
    { name: t("navbar.company"), path: "/company-registration" },
    { name: t("navbar.accounting"), path: "/accounting-cost-management" },
    { name: t("navbar.projects"), path: "/project" },
  ];

  return (
    <div className="w-full shadow-md">

      {/* Main Header */}
      <div className="bg-green-600 flex items-center justify-between px-4 py-2">

        {/* 🔥 Bigger Logo */}
        <div className="flex items-center">
          <img
            src={CMP}
            alt="CorporateMitraPortal Logo"
            className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto object-contain"
          />
        </div>

        
        <div className="hidden md:flex items-center gap-6 text-white  text-2xl flex-1 justify-center">
          {menuItems.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              className="transition"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          <a
            href="mailto:dbservices0816@gmail.com"
            className="hidden sm:block text-white text-sm md:text-base"
          >
            dbservices0816@gmail.com
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-2xl"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-green-700">
          {menuItems.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className="block px-5 py-3 text-white border-b border-green-600"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}

    </div>
  );
}