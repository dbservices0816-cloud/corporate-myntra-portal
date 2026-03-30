import React from "react";
import { useTranslation } from "react-i18next";
import PMS from "../assets/PMS.png";
import HiPMS from "../assets/HiPMS.png";

export default function ProcurementMarketingSupport() {
  const { t, i18n } = useTranslation();

  const schemeImage = i18n.language === "hi" ? HiPMS : PMS;

  return (
    <div className="px-4 sm:px-8 lg:px-16 py-10 max-w-6xl mx-auto text-slate-800">

      {/* TITLE */}
      <h1 className="text-2xl sm:text-3xl font-bold mb-4">
        {t("pms.title")}
      </h1>

      {/* DESCRIPTION */}
      <div className="mb-6 space-y-3 text-sm sm:text-base leading-relaxed">
        <p>{t("pms.desc1")}</p>
        <p>{t("pms.desc2")}</p>
      </div>

      {/* TABLE TITLE */}
      <h2 className="text-xl font-semibold mb-3">
        {t("pms.tableTitle")}
      </h2>

      {/* TABLE */}
      <div className="overflow-x-auto my-6">
        <table className="min-w-full border border-black text-sm sm:text-base">

          <thead>
            <tr className="bg-gray-300">
              <th className="border border-black p-3 text-left font-semibold">
                {t("pms.th_feature")}
              </th>
              <th className="border border-black p-3 text-left font-semibold">
                {t("pms.th_details")}
              </th>
            </tr>
          </thead>

          <tbody>

            {[1,2,3,4,5,6].map((n)=>(
              <tr key={n} className="bg-gray-100">
                <td className="border border-black p-3 font-semibold text-left">
                  {t(`pms.row${n}_label`)}
                </td>
                <td className="border border-black p-3">
                  {t(`pms.row${n}_detail`)}
                </td>
              </tr>
            ))}

          </tbody>

        </table>
      </div>

      {/* IMAGE */}
      <h3 className="text-lg sm:text-xl font-semibold text-center mb-4">
        {t("overview")}
      </h3>

      <div className="flex justify-center mb-10">
        <img
          src={schemeImage}
          alt={t("pms.imgAlt")}
          className="w-full sm:w-4/5 lg:w-3/4 max-w-4xl border border-gray-400 rounded-md shadow-md"
        />
      </div>

      {/* CTA */}
      <div className="text-center">
        <h2 className="text-xl sm:text-2xl font-semibold mb-3">
          {t("pms.ctaTitle")}
        </h2>

        <p className="mb-6 text-sm sm:text-base">
          {t("pms.ctaDesc")}
        </p>

        <a
          href="/query-form"
          className="border border-black px-6 py-2 rounded-md hover:bg-black hover:text-white transition"
        >
          {t("pms.ctaBtn")}
        </a>
      </div>

    </div>
  );
}