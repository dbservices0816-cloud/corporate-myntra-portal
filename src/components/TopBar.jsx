import { useTranslation } from "react-i18next";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function TopBar() {
  const { t, i18n } = useTranslation();

  const socialLinks = [
    { icon: <FaFacebookF />, href: "#" },
    { icon: <FaInstagram />, href: "#" },
    { icon: <FaTwitter />, href: "#" },
    { icon: <FaLinkedinIn />, href: "#" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-[#5DD3B6] text-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">

        {/* Left — Social Icons (Desktop only) */}
        <div className="hidden md:flex items-center gap-1">
          {socialLinks.map((s, i) => (
            <a
              key={i}
              href={s.href}
              className="p-2 rounded-full text-white hover:bg-white/20 transition"
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Center — Phone Text */}
        {/* Mobile */}
        <div className="md:hidden text-center text-xs font-semibold leading-relaxed flex-1">
          {t("topbar.text")}{" "}
          <a href="tel:+919013203030" className="underline font-bold">
            +91 90132 03030
          </a>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex justify-center flex-1 text-lg lg:text-2xl font-semibold tracking-wide">
          {t("topbar.text")}{" "}
          <a href="tel:+919013203030" className="ml-2 underline font-bold">
            +91 90132 03030
          </a>
        </div>

        {/* Right — Language Dropdown */}
        <div>
          <select
            value={i18n.language}
            onChange={(e) => i18n.changeLanguage(e.target.value)}
            className="bg-white text-black px-2 py-1 rounded text-xs md:text-sm cursor-pointer"
          >
            <option value="en">English</option>
            <option value="hi">हिंदी</option>
          </select>
        </div>

      </div>
    </div>
  );
}