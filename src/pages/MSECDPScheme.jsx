import React from "react";
import { useTranslation } from "react-i18next";
import CDP from "../assets/CDP.png";
import HICDP from "../assets/HICDP.png";

export default function MSECDPScheme() {
  const { t, i18n } = useTranslation();

  const schemeImage = i18n.language === "hi" ? HICDP : CDP;

  return (
    <div className="px-4 sm:px-8 py-10 max-w-5xl mx-auto text-slate-800">

      <h1 className="text-2xl sm:text-3xl font-bold mb-4">
        {t("msecdp.heading")}
      </h1>

      <p className="text-sm sm:text-base leading-relaxed mb-8">
        {t("msecdp.intro")}
      </p>

      <h2 className="text-xl font-semibold mb-4">
        {t("msecdp.summaryTitle")}
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="min-w-full border border-black text-sm sm:text-base">

          <thead>
            <tr>
              <th className="border border-black p-2 text-left">
                {t("msecdp.th_feature")}
              </th>
              <th className="border border-black p-2 text-left">
                {t("msecdp.th_details")}
              </th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td className="border border-black p-2 font-semibold">
                {t("msecdp.row1_label")}
              </td>
              <td className="border border-black p-2">
                {t("msecdp.row1_detail")}
              </td>
            </tr>

            <tr>
              <td className="border border-black p-2 font-semibold">
                {t("msecdp.row2_label")}
              </td>
              <td className="border border-black p-2">
                {t("msecdp.row2_detail")}
              </td>
            </tr>

            <tr>
              <td className="border border-black p-2 font-semibold">
                {t("msecdp.row3_label")}
              </td>
              <td className="border border-black p-2">
                {t("msecdp.row3_detail")}
              </td>
            </tr>

            <tr>
              <td className="border border-black p-2 font-semibold">
                {t("msecdp.row4_label")}
              </td>
              <td className="border border-black p-2">
                {t("msecdp.row4_detail")}
              </td>
            </tr>

            <tr>
              <td className="border border-black p-2 font-semibold">
                {t("msecdp.row5_label")}
              </td>
              <td className="border border-black p-2">
                <a
                  href="https://cluster.dcmsme.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  cluster.dcmsme.gov.in
                </a>
              </td>
            </tr>

          </tbody>
        </table>
      </div>

      <h3 className="text-lg sm:text-xl font-semibold text-center mb-4">
        {t("pmegp.overview")}
      </h3>

      <div className="flex justify-center mt-8">
        
        <img
          src={schemeImage}
          alt="MSE-CDP Scheme"
          className="w-full sm:w-4/5 lg:w-3/4 max-w-4xl border border-gray-400 rounded-md shadow-md"
        />
      </div>

    </div>
  );
}