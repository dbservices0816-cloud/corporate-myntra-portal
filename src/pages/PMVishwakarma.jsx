import React from "react";
import PM from "../assets/PM.png";
import HiPM from "../assets/HiPM.png"
import { useTranslation } from "react-i18next";

export default function PMVishwakarma() {
  const { t, i18n } = useTranslation();

  const schemeImage = i18n.language === "hi" ? HiPM : PM;

  return (
    <div className="px-4 sm:px-8 py-10 max-w-5xl mx-auto text-slate-800">

      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl font-bold mb-4">
        {t("pmVishwakarma.title")}
      </h1>

      {/* Description */}
      <p className="text-sm sm:text-base leading-relaxed mb-8">
        {t("pmVishwakarma.description")}
      </p>

      {/* Scheme Overview */}
      <h2 className="text-xl font-semibold mb-4">
        {t("pmVishwakarma.schemeTitle")}
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="min-w-full border border-black text-sm sm:text-base">
          <tbody>

            <tr>
              <td className="border border-black p-2 font-semibold w-1/3">
                {t("pmVishwakarma.row1_label")}
              </td>
              <td className="border border-black p-2">
                {t("pmVishwakarma.row1_detail")}
              </td>
            </tr>

            <tr>
              <td className="border border-black p-2 font-semibold">
                {t("pmVishwakarma.row2_label")}
              </td>
              <td className="border border-black p-2">
                {t("pmVishwakarma.row2_detail")}
              </td>
            </tr>

            <tr>
              <td className="border border-black p-2 font-semibold">
                {t("pmVishwakarma.row3_label")}
              </td>
              <td className="border border-black p-2">
                {t("pmVishwakarma.row3_detail")}
              </td>
            </tr>

            <tr>
              <td className="border border-black p-2 font-semibold">
                {t("pmVishwakarma.row4_label")}
              </td>
              <td className="border border-black p-2">
                {t("pmVishwakarma.row4_detail")}
              </td>
            </tr>

            <tr>
              <td className="border border-black p-2 font-semibold">
                {t("pmVishwakarma.row5_label")}
              </td>
              <td className="border border-black p-2">
                {t("pmVishwakarma.row5_detail")}
              </td>
            </tr>

            <tr>
              <td className="border border-black p-2 font-semibold">
                {t("pmVishwakarma.row6_label")}
              </td>
              <td className="border border-black p-2">
                {t("pmVishwakarma.row6_detail")}
              </td>
            </tr>

            <tr>
              <td className="border border-black p-2 font-semibold">
                {t("pmVishwakarma.row7_label")}
              </td>
              <td className="border border-black p-2">
                {t("pmVishwakarma.row7_detail")}
              </td>
            </tr>

          </tbody>
        </table>
      </div>

      {/* Application Process */}
      <h2 className="text-xl font-semibold mb-3">
        {t("pmVishwakarma.processTitle")}
      </h2>

      <p className="text-sm sm:text-base leading-relaxed mb-10">
        {t("pmVishwakarma.processDesc")}
      </p>

       <h3 className="text-lg sm:text-xl font-semibold text-center mb-4">
        {t("pmegp.overview")}
      </h3>

      {/* Image Section */}
      <div className="flex justify-center">
        <img
          src={schemeImage}
          alt={t("pmVishwakarma.imgAlt")}
          className="w-full sm:w-4/5 lg:w-3/4 max-w-4xl border border-gray-300 rounded-md shadow-md"
        />
      </div>

    </div>
  );
}