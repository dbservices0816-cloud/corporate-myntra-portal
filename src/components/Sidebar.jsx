import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const services = [
    { name: t("sidebar.newCompany"), link: "/new-company-registration" },
    { name: t("sidebar.companyName"), link: "/company-name-availability" },
    { name: t("sidebar.companyCompliance"), link: "/company-compliance" },
    { name: t("sidebar.annualFilings"), link: "/annual-filings" },
    { name: t("sidebar.accounting"), link: "/accounting-cost-management" },
    { name: t("sidebar.msmeFinance"), link: "/msme-finance" },
    { name: t("sidebar.msmeRegistration"), link: "/msme-registrations" },
    { name: t("sidebar.msmeSubsidy"), link: "/msme-schemes-subsidy" },
    { name: t("sidebar.gstAssistance"), link: "/gst-assistance" },
    { name: t("sidebar.gstCompliance"), link: "/gst-compliances" },
    { name: t("sidebar.gstReconciliation"), link: "/gst-reconciliation" },
    { name: t("sidebar.incomeTax"), link: "/income-tax-portal" },
    { name: t("sidebar.panApplication"), link: "/pan-application" },
    { name: t("sidebar.gemPortal"), link: "/gem-portal-Assistance" },
  ];

  return (
    <div className="w-full lg:w-64 xl:w-72 flex-shrink-0">

      {/* MOBILE Drawer */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40">

        {isOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-30"
            onClick={() => setIsOpen(false)}
          />
        )}

        {/* ✅ FIX: Added `flex flex-col` so child <ul> can use flex-1 to fill remaining space */}
        <div
          className={`fixed bottom-0 left-0 right-0 z-40 bg-white rounded-t-2xl shadow-2xl transition-transform duration-300 flex flex-col ${
            isOpen ? "translate-y-0" : "translate-y-full"
          }`}
          style={{ maxHeight: "75vh" }}
        >
          {/* Drag Handle — flex-shrink-0 taaki scroll area affect na ho */}
          <div className="flex justify-center pt-3 pb-1 flex-shrink-0">
            <div className="w-10 h-1 bg-gray-300 rounded-full" />
          </div>

          {/* Header — flex-shrink-0 */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100 flex-shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
              <h3 className="text-base font-bold text-slate-800">
                {t("sidebar.title")}
              </h3>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100"
            >
              ✕
            </button>
          </div>

          {/* ✅ Services — flex-1 + overflow-y-auto = properly scrollable */}
          <ul className="overflow-y-auto flex-1 px-4 py-3 space-y-1">
            {services.map((service) => (
              <li key={service.name}>
                <NavLink
                  to={service.link}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition ${
                      isActive
                        ? "bg-green-500 text-white"
                        : "text-slate-700 hover:bg-green-50 hover:text-green-600"
                    }`
                  }
                >
                  {service.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Floating Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-5 right-5 z-50 bg-green-600 text-white rounded-2xl px-5 py-3 flex items-center gap-2 shadow-xl"
        >
          ☰
          <span className="text-sm font-semibold">
            {t("sidebar.services")}
          </span>
        </button>
      </div>

      {/* DESKTOP Sidebar */}
      <div className="hidden lg:block sticky top-5 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">

        <div className="flex items-center gap-2 px-5 py-4 border-b bg-green-50">
          <span className="w-3 h-3 rounded-full bg-green-500" />
          <h3 className="text-base font-bold text-slate-800">
            {t("sidebar.title")}
          </h3>
        </div>

        <ul className="py-3 px-3 space-y-1 overflow-y-auto max-h-[80vh]">
          {services.map((service) => (
            <li key={service.name}>
              <NavLink
                to={service.link}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition ${
                    isActive
                      ? "bg-green-500 text-white"
                      : "text-slate-600 hover:bg-green-50 hover:text-green-700"
                  }`
                }
              >
                {service.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="px-4 py-4 border-t bg-green-50">
          <p className="text-xs text-gray-500 mb-2 text-center">
            {t("sidebar.help")}
          </p>

          <button
            onClick={() => navigate("/query-form")}
            className="w-full bg-green-600 hover:bg-green-700 text-white text-sm font-semibold py-2.5 rounded-xl"
          >
            {t("sidebar.expert")}
          </button>
        </div>
      </div>
    </div>
  );
}