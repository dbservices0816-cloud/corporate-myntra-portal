import React from "react";
import { useTranslation } from "react-i18next";
import FREE from "../assets/FREE.png";
import HiFREE from "../assets/HiFREE.png";

export default function CGTMSE() {
  const { t, i18n } = useTranslation();

  const schemeImage = i18n.language === "hi" ? HiFREE : FREE;

  return (
    <div className="px-4 sm:px-8 lg:px-16 py-10 max-w-6xl mx-auto text-slate-800">

      {/* TITLE */}
      <h1 className="text-2xl sm:text-3xl font-bold mb-4">
        {t("cgtmse.title")}
      </h1>

      <p className="mb-6 text-sm sm:text-base leading-relaxed">
        {t("cgtmse.description")}
      </p>

      {/* FEATURES */}
      <h2 className="text-xl font-semibold mb-3">
        {t("cgtmse.featuresTitle")}
      </h2>

      <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base mb-6">
        <li><strong>{t("cgtmse.f1_label")}</strong> {t("cgtmse.f1_detail")}</li>
        <li><strong>{t("cgtmse.f2_label")}</strong> {t("cgtmse.f2_detail")}</li>
        <li><strong>{t("cgtmse.f3_label")}</strong> {t("cgtmse.f3_detail")}</li>
        <li><strong>{t("cgtmse.f4_label")}</strong> {t("cgtmse.f4_detail")}</li>
        <li><strong>{t("cgtmse.f5_label")}</strong> {t("cgtmse.f5_detail")}</li>
      </ul>

      {/* TABLE */}
      <h2 className="text-xl font-semibold mb-3">
        {t("cgtmse.tableTitle")}
      </h2>

      <div className="overflow-x-auto my-6">
        <table className="min-w-full border border-black text-sm sm:text-base">

          <thead>
            <tr className="bg-gray-300">
              <th className="border border-black p-3 text-left font-semibold">
                {t("cgtmse.th_category")}
              </th>
              <th className="border border-black p-3 text-center font-semibold">
                {t("cgtmse.th_col1")}
              </th>
              <th className="border border-black p-3 text-center font-semibold">
                {t("cgtmse.th_col2")}
              </th>
              <th className="border border-black p-3 text-center font-semibold">
                {t("cgtmse.th_col3")}
              </th>
            </tr>
          </thead>

          <tbody>

            <tr className="bg-gray-100">
              <td className="border border-black p-3 font-semibold text-left">
                {t("cgtmse.row1_label")}
              </td>
              <td className="border border-black p-3 text-center">85%</td>
              <td className="border border-black p-3 text-center">75%</td>
              <td className="border border-black p-3 text-center">75%</td>
            </tr>

            <tr className="bg-gray-100">
              <td className="border border-black p-3 font-semibold text-left">
                {t("cgtmse.row2_label")}
              </td>
              <td className="border border-black p-3 text-center">85%</td>
              <td className="border border-black p-3 text-center">80%</td>
              <td className="border border-black p-3 text-center">75%</td>
            </tr>

            <tr className="bg-gray-100">
              <td className="border border-black p-3 font-semibold text-left">
                {t("cgtmse.row3_label")}
              </td>
              <td className="border border-black p-3 text-center">75%</td>
              <td className="border border-black p-3 text-center">75%</td>
              <td className="border border-black p-3 text-center">75%</td>
            </tr>

          </tbody>

        </table>
      </div>

      {/* IMAGE */}
      <h3 className="text-lg sm:text-xl font-semibold text-center mb-4">
        {t("overview")}
      </h3>

      <div className="flex justify-center">
        <img
          src={schemeImage}
          alt={t("cgtmse.imgAlt")}
          className="w-full sm:w-4/5 lg:w-3/4 max-w-4xl border border-gray-400 rounded-md shadow-md"
        />
      </div>

    </div>
  );
}