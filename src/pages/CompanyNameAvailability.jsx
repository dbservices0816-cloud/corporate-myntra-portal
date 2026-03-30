import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function CompanyNameAvailability() {

  const { t } = useTranslation();

  return (
    <div className="w-full min-h-screen bg-white">

      {/* HERO */}
  <div className="section-layout bg-green-600 text-white">
  <div className="section-container">

    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
      {t("companyName.title")}
    </h2>

    <p className="text-sm sm:text-base text-green-100 max-w-3xl">
      {t("companyName.subtitle")}
    </p>

  </div>
</div>
      <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-20 py-10 space-y-10">

        {/* SERVICE */}
        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-green-50 p-6 rounded-2xl shadow-sm">

            <h3 className="text-lg sm:text-xl font-semibold text-green-700 mb-4">
              {t("companyName.service_title")}
            </h3>

            <ul className="space-y-2 text-sm sm:text-base text-slate-700 list-disc pl-5">

              <li>{t("companyName.s1")}</li>
              <li>{t("companyName.s2")}</li>
              <li>{t("companyName.s3")}</li>
              <li>{t("companyName.s4")}</li>
              <li>{t("companyName.s5")}</li>

            </ul>

          </div>


          <div className="bg-slate-50 p-6 rounded-2xl shadow-md text-center space-y-4 flex flex-col justify-center">

            <h3 className="text-lg sm:text-xl font-semibold text-slate-800">
              {t("companyName.check_title")}
            </h3>

            <p className="text-sm sm:text-base text-slate-600">
              {t("companyName.check_desc")}
            </p>

         

<Link
  to="/query-form"
  className="inline-block w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300"
>
  {t("companyName.search")}
</Link>

            <p className="text-xs text-gray-500">
              {t("companyName.note")}
            </p>

          </div>

        </div>


        {/* PROCESS */}
        <div>

          <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-6">
            {t("companyName.how")}
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="bg-slate-50 p-5 rounded-xl shadow-sm">

              <h4 className="font-semibold text-green-600 mb-2">
                1. {t("companyName.step1")}
              </h4>

              <p className="text-sm text-slate-600">
                {t("companyName.step1_desc")}
              </p>

            </div>


            <div className="bg-slate-50 p-5 rounded-xl shadow-sm">

              <h4 className="font-semibold text-green-600 mb-2">
                2. {t("companyName.step2")}
              </h4>

              <p className="text-sm text-slate-600">
                {t("companyName.step2_desc")}
              </p>

            </div>


            <div className="bg-slate-50 p-5 rounded-xl shadow-sm">

              <h4 className="font-semibold text-green-600 mb-2">
                3. {t("companyName.step3")}
              </h4>

              <p className="text-sm text-slate-600">
                {t("companyName.step3_desc")}
              </p>

            </div>

          </div>

        </div>


        {/* WHY */}
        <div>

          <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3">
            {t("companyName.why")}
          </h3>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
            {t("companyName.why_desc")}
          </p>

        </div>


        <p className="text-xs text-gray-500 border-t pt-6">
          {t("companyName.note")}
        </p>

      </div>

    </div>
  );
}