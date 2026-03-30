import { useTranslation } from "react-i18next";

export default function AnnualFilings() {

  const { t } = useTranslation();

  return (
    <div className="bg-green-50 w-full overflow-hidden">

      {/* HERO */}
   <div className="section-layout bg-green-600 text-white">
  <div className="section-container">

    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
      {t("annualFilings.title")}
    </h2>

    <p className="text-sm sm:text-base text-green-100 max-w-3xl">
      {t("annualFilings.subtitle")}
    </p>

  </div>
</div>


      {/* ABOUT */}
      <section className="py-8 px-6 sm:px-10 lg:px-20">

        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-2xl font-bold mb-4 text-green-700">
            {t("annualFilings.aboutTitle")}
          </h2>

          <p className="text-slate-700 max-w-4xl mx-auto">
            {t("annualFilings.aboutDesc")}
          </p>

        </div>

      </section>


      {/* SERVICES */}
      <section className="bg-white py-8 px-6 sm:px-10 lg:px-20">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-2xl font-bold text-center mb-6 text-green-700">
            {t("annualFilings.servicesTitle")}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

            <div className="shadow-md rounded-xl p-4 border-t-4 border-green-400">

              <h3 className="text-lg font-semibold mb-2">
                {t("annualFilings.aocTitle")}
              </h3>

              <p className="text-slate-600 text-sm">
                {t("annualFilings.aocDesc")}
              </p>

            </div>


            <div className="shadow-md rounded-xl p-4 border-t-4 border-green-400">

              <h3 className="text-lg font-semibold mb-2">
                {t("annualFilings.mgtTitle")}
              </h3>

              <p className="text-slate-600 text-sm">
                {t("annualFilings.mgtDesc")}
              </p>

            </div>


            <div className="shadow-md rounded-xl p-4 border-t-4 border-green-400">

              <h3 className="text-lg font-semibold mb-2">
                {t("annualFilings.kycTitle")}
              </h3>

              <p className="text-slate-600 text-sm">
                {t("annualFilings.kycDesc")}
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="bg-green-400 text-white py-8 text-center px-6">

        <div className="max-w-4xl mx-auto">

          <h2 className="text-2xl font-bold mb-3">
            {t("annualFilings.ctaTitle")}
          </h2>

          <p className="mb-5 text-green-100">
            {t("annualFilings.ctaDesc")}
          </p>

          <a
            href="/query-form"
            className="bg-white text-green-600 px-7 py-2 rounded-lg font-semibold"
          >
            {t("annualFilings.ctaBtn")}
          </a>

        </div>

      </section>

    </div>
  );
}