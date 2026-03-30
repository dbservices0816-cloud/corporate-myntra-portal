import React from "react";
import { useTranslation } from "react-i18next";
import KYC from "../assets/KYC.png";
import HiKYC from "../assets/HiKYC.png";

export default function KGVYScheme() {
  const { t, i18n } = useTranslation();

  const schemeImage = i18n.language === "hi" ? HiKYC : KYC;

  return (
    <div className="px-4 sm:px-8 lg:px-16 py-10 max-w-6xl mx-auto text-slate-800">

      {/* TITLE */}
      <h1 className="text-2xl sm:text-3xl font-bold mb-4">
        {t("kgvy.title")}
      </h1>

      {/* DESCRIPTION */}
      <div className="mb-6 space-y-3 text-sm sm:text-base leading-relaxed">
        <p>{t("kgvy.desc1")}</p>
        <p>{t("kgvy.desc2")}</p>

        <p>
          {t("kgvy.desc3_before")}
          <strong> {t("kgvy.desc3_bold1")} </strong>
          {t("kgvy.desc3_middle")}
          <strong> {t("kgvy.desc3_bold2")} </strong>
          {t("kgvy.desc3_after")}
        </p>
      </div>

      {/* TABLE TITLE */}
      <h2 className="text-xl font-semibold mb-3">
        {t("kgvy.tableTitle")}
      </h2>

      {/* TABLE */}
      <div className="overflow-x-auto my-6">
        <table className="min-w-full border border-black text-sm sm:text-base">

          <thead>
            <tr className="bg-gray-300">
              <th className="border border-black p-3 text-left font-semibold">
                {t("kgvy.th_component")}
              </th>
              <th className="border border-black p-3 text-left font-semibold">
                {t("kgvy.th_features")}
              </th>
            </tr>
          </thead>

          <tbody>

            {[1,2,3,4,5,6].map((n)=>(
              <tr key={n} className="bg-gray-100">
                <td className="border border-black p-3 font-semibold text-left">
                  {t(`kgvy.row${n}_label`)}
                </td>
                <td className="border border-black p-3">
                  {t(`kgvy.row${n}_detail`)}
                </td>
              </tr>
            ))}

          </tbody>

        </table>
      </div>

      {/* APPLY INFO */}
      <p className="mb-8 text-sm sm:text-base">
        <strong>{t("kgvy.apply_label")}</strong> {t("kgvy.apply_desc")}
        
      </p>

      {/* IMAGE */}
      <h3 className="text-lg sm:text-xl font-semibold text-center mb-4">
        {t("overview")}
      </h3>

      <div className="flex justify-center">
        <img
          src={schemeImage}
          alt={t("kgvy.imgAlt")}
          className="w-full sm:w-4/5 lg:w-3/4 max-w-4xl border border-gray-400 rounded-md shadow-md"
        />
      </div>

    </div>
  );
}