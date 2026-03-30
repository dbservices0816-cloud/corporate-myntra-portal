import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  const services = [
    { key: "company_registration", link: "/new-company-registration" },
    { key: "company_name", link: "/company-name-availability" },
      { key: "company_compliance", link: "/company-compliance" },
    { key: "annual_filings", link: "/annual-filings" },
    { key: "accounting_management", link: "/accounting-cost-management" },
     { key: "msme_finance", link: "/msme-finance" },
      { key: "msme_registration", link: "/msme-registration" },
    { key: "gst_assistance", link: "/gst-assistance" },
    { key: "gst_compliances", link: "/gst-compliances" },
    { key: "gst_reconciliation", link: "/gst-reconciliation" },
    { key: "income_tax", link: "/income-tax-portal" },
{ key: "pan_application", link: "/pan-application" },
   
   
    { key: "gem_onboarding", link: "/gem-portal-assistance" },
  
    
  ];

  return (
    <div className="bg-slate-50">

      {/* HERO SECTION */}
      <div className="section-layout bg-green-600 text-white">
  <div className="section-container">

    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
      {t("home.hero_title")}
    </h2>

    <p className="text-sm sm:text-base text-green-100 max-w-3xl">
      {t("home.hero_subtitle")}
    </p>

  </div>
</div>

      {/* SERVICES */}
      <section className="py-12 md:py-16 px-4 max-w-7xl mx-auto">

        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
          {t("home.core_services")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

          {services.map((service) => (
            <div
              key={service.key}
              className="bg-white border border-slate-200 shadow-md hover:shadow-xl rounded-2xl p-6 transition duration-300 hover:-translate-y-1"
            >

              <h3 className="text-lg md:text-xl font-semibold mb-3 text-slate-800">
                {t(`home.${service.key}`)}
              </h3>

              <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                {t(`home.${service.key}_desc`)}
              </p>

              <Link
                to={service.link}
                className="text-green-700 font-semibold hover:underline"
              >
                {t("home.learn_more")} →
              </Link>

            </div>
          ))}

        </div>

      </section>

    </div>
  );
}