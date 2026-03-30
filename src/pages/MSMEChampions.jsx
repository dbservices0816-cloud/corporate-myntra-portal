import React from "react";
import { useTranslation } from "react-i18next";
import MSME from "../assets/MSME.png";
import HiMSME from "../assets/HiMSME.png";

export default function MSMEChampions() {
  const { t, i18n } = useTranslation();

  const schemeImage = i18n.language === "hi" ? HiMSME : MSME;

  return (
    <div className="px-4 sm:px-8 lg:px-16 py-10 max-w-6xl mx-auto text-slate-800">

      {/* TITLE */}
      <h1 className="text-2xl sm:text-3xl font-bold mb-4">
        {t("msmeChampions.title")}
      </h1>

      {/* DESCRIPTION */}
      <div className="mb-6 space-y-3 text-sm sm:text-base leading-relaxed">
        <p>{t("msmeChampions.desc1")}</p>

        <p>
          {t("msmeChampions.desc2_before")}
          <strong> {t("msmeChampions.desc2_bold1")} </strong>,
          <strong> {t("msmeChampions.desc2_bold2")} </strong>{" "}
          {t("msmeChampions.desc2_and")}
          <strong> {t("msmeChampions.desc2_bold3")} </strong>.
        </p>
      </div>

      {/* TABLE TITLE */}
      <h2 className="text-xl font-semibold mb-3">
        {t("msmeChampions.tableTitle")}
      </h2>

      {/* TABLE */}
      <div className="overflow-x-auto my-6">
        <table className="min-w-full border border-black text-sm sm:text-base">

          <thead>
            <tr className="bg-gray-300">
              <th className="border border-black p-3 text-left font-semibold">
                {t("msmeChampions.th_pillar")}
              </th>
              <th className="border border-black p-3 text-left font-semibold">
                {t("msmeChampions.th_focus")}
              </th>
              <th className="border border-black p-3 text-left font-semibold">
                {t("msmeChampions.th_support")}
              </th>
            </tr>
          </thead>

          <tbody>

            {[1,2,3].map((n)=>(
              <tr key={n} className="bg-gray-100">
                <td className="border border-black p-3 font-semibold text-left">
                  {t(`msmeChampions.row${n}_label`)}
                </td>
                <td className="border border-black p-3">
                  {t(`msmeChampions.row${n}_focus`)}
                </td>
                <td className="border border-black p-3">
                  {t(`msmeChampions.row${n}_support`)}
                </td>
              </tr>
            ))}

          </tbody>

        </table>
      </div>

      {/* ELIGIBILITY */}
      

      {/* IMAGE */}
      <h3 className="text-lg sm:text-xl font-semibold text-center mb-4">
        {t("overview")}
      </h3>

      <div className="flex justify-center">
        <img
          src={schemeImage}
          alt={t("msmeChampions.imgAlt")}
          className="w-full sm:w-4/5 lg:w-3/4 max-w-4xl border border-gray-400 rounded-md shadow-md"
        />
      </div>

    </div>
  );
}