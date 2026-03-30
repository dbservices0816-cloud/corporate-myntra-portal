import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-white text-green-700 pt-10 pb-6 mt-12 border-t">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8">

        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-green-600 mb-4">
            CorporateMitraPortal
          </h2>
          <p className="text-sm text-green-700">
            {t("footer.desc")}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-green-600 mb-4">
            {t("footer.quickLinks")}
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-green-900">
                {t("footer.home")}
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-green-900">
                {t("footer.about")}
              </Link>
            </li>
            <li>
              <Link to="/new-company-registration" className="hover:text-green-900">
                {t("footer.services")}
              </Link>
            </li>
            <li>
              <Link to="/query-form" className="hover:text-green-900">
                {t("footer.contact")}
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-green-600 mb-4">
            {t("footer.ourServices")}
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/company-registration" className="hover:text-green-900">
                {t("footer.s1")}
              </Link>
            </li>
            <li>
              <Link to="/gst-assistance" className="hover:text-green-900">
                {t("footer.s2")}
              </Link>
            </li>
            <li>
              <Link to="/msme-registrations" className="hover:text-green-900">
                {t("footer.s3")}
              </Link>
            </li>
            <li>
              <Link to="/accounting-cost-management" className="hover:text-green-900">
                {t("footer.s4")}
              </Link>
            </li>
            <li>
              <Link to="/pan-application" className="hover:text-green-900">
                {t("footer.s5")}
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-green-600 mb-4">
            {t("footer.followUs")}
          </h3>

          <div className="flex space-x-4">
            <a href="#" className="border border-green-600 text-green-600 p-3 rounded-full hover:bg-green-600 hover:text-white transition">
              <FaFacebookF />
            </a>
            <a href="#" className="border border-green-600 text-green-600 p-3 rounded-full hover:bg-green-600 hover:text-white transition">
              <FaInstagram />
            </a>
            <a href="#" className="border border-green-600 text-green-600 p-3 rounded-full hover:bg-green-600 hover:text-white transition">
              <FaTwitter />
            </a>
            <a href="#" className="border border-green-600 text-green-600 p-3 rounded-full hover:bg-green-600 hover:text-white transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="border-t border-green-200 mt-8 pt-4 text-center text-sm text-green-600">
        © {new Date().getFullYear()} CorporateMitraPortal. {t("footer.rights")}
      </div>
    </footer>
  );
}