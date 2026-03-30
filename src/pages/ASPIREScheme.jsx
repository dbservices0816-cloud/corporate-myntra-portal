import React from "react";
import { useTranslation } from "react-i18next";
import LIBS from "../assets/LIBS.png";
import HiLIBS from "../assets/HiLIBS.png";

export default function ASPIREScheme() {
  const { t, i18n } = useTranslation();

  const schemeImage = i18n.language === "hi" ? HiLIBS : LIBS;

  return (
    <div className="px-4 sm:px-8 py-10 max-w-5xl mx-auto text-slate-800">

      <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-black">
        {t("aspire.heading")}
      </h1>

      <p className="text-sm sm:text-base leading-relaxed mb-8">
        {t("aspire.intro")}
      </p>

      <h2 className="text-xl font-semibold mb-4">
        {t("aspire.summaryTitle")}
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="min-w-full border border-black text-sm sm:text-base">

          <tbody>

            <tr>
              <td className="border border-black p-2 font-semibold w-1/3">
                {t("aspire.row1_label")}
              </td>
              <td className="border border-black p-2">
                {t("aspire.row1_detail")}
              </td>
            </tr>

            <tr>
              <td className="border border-black p-2 font-semibold">
                {t("aspire.row2_label")}
              </td>
              <td className="border border-black p-2">
                {t("aspire.row2_detail")}
              </td>
            </tr>

            <tr>
              <td className="border border-black p-2 font-semibold">
                {t("aspire.row3_label")}
              </td>
              <td className="border border-black p-2">
                {t("aspire.row3_detail")}
              </td>
            </tr>

            <tr>
              <td className="border border-black p-2 font-semibold">
                {t("aspire.row4_label")}
              </td>
              <td className="border border-black p-2">
                {t("aspire.row4_detail")}
              </td>
            </tr>

            <tr>
              <td className="border border-black p-2 font-semibold">
                {t("aspire.row5_label")}
              </td>
              <td className="border border-black p-2">
                {t("aspire.row5_detail")}
              </td>
            </tr>

            <tr>
              <td className="border border-black p-2 font-semibold">
                {t("aspire.row6_label")}
              </td>
              <td className="border border-black p-2">
                <a
                  
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 underline hover:text-emerald-800"
                >
                  CorporateMitraPortal.com
                </a>
              </td>
            </tr>

          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-semibold mb-3">
        {t("aspire.howTitle")}
      </h2>

      <p className="text-sm sm:text-base leading-relaxed mb-10">
        {t("aspire.howDesc")}
      </p>


       <h3 className="text-lg sm:text-xl font-semibold text-center mb-4">
        {t("pmegp.overview")}
      </h3>

      <div className="flex justify-center">
        <img
          src={schemeImage}
          alt="ASPIRE Scheme"
          className="w-full sm:w-4/5 lg:w-3/4 max-w-4xl border border-gray-300 rounded-md shadow-md"
        />
      </div>

    </div>
  );
}