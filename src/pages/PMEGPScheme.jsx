import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Pmegp from "../assets/Pmegp.png";
import HiPmegp from "../assets/HiPmegp.png";

const PMEGPScheme = () => {
  const { t, i18n } = useTranslation();

  const schemeImage = i18n.language === "hi" ? HiPmegp : Pmegp;

  return (
    <div className="px-4 sm:px-8 lg:px-16 py-10 max-w-6xl mx-auto text-slate-800">

      <h1 className="text-2xl sm:text-3xl font-bold mb-4">
        {t("pmegp.heading")}
      </h1>

      <p className="mb-6 text-sm sm:text-base leading-relaxed">
        {t("pmegp.intro")}
      </p>

      <h2 className="text-xl font-semibold mb-2">{t("pmegp.keyDetails")}</h2>
      <p className="mb-4 text-sm sm:text-base">{t("pmegp.keyDetailsSub")}</p>

      <div className="overflow-x-auto my-6">
        <table className="min-w-full border border-black text-sm sm:text-base">
          <thead>
            <tr className="bg-gray-300">
              <th className="border border-black p-3 text-left font-semibold">{t("pmegp.th_feature")}</th>
              <th className="border border-black p-3 text-center font-semibold">{t("pmegp.th_general")}</th>
              <th className="border border-black p-3 text-center font-semibold">{t("pmegp.th_special")}</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5].map((n) => (
              <tr key={n} className="bg-gray-100">
                <td className="border border-black p-3 font-semibold text-left">{t(`pmegp.row${n}_label`)}</td>
                <td className="border border-black p-3 text-center">{t(`pmegp.row${n}_gen`)}</td>
                <td className="border border-black p-3 text-center">{t(`pmegp.row${n}_spl`)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-semibold mb-3">{t("pmegp.eligibilityHeading")}</h2>
      <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base mb-6">
        <li><strong>{t("pmegp.e1_label")}</strong> {t("pmegp.e1_text")}</li>
        <li><strong>{t("pmegp.e2_label")}</strong> {t("pmegp.e2_text")}</li>
        <li>
          <strong>{t("pmegp.e3_label")}</strong> {t("pmegp.e3_text")}
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>{t("pmegp.e3s1_label")}</strong> {t("pmegp.e3s1_text")}</li>
            <li><strong>{t("pmegp.e3s2_label")}</strong> {t("pmegp.e3s2_text")}</li>
          </ul>
        </li>
        <li><strong>{t("pmegp.e4_label")}</strong> {t("pmegp.e4_text")}</li>
      </ul>

      <p className="text-sm sm:text-base mb-8">
        {t("pmegp.contact")}{" "}
        <Link to="/query-form" className="text-blue-600 underline">
          {t("pmegp.contactLink")}
        </Link>.
      </p>

      <h3 className="text-lg sm:text-xl font-semibold text-center mb-4">
        {t("pmegp.overview")}
      </h3>
      <div className="flex justify-center">
        <img
          src={schemeImage}
          alt="PMEGP Scheme"
          className="w-full sm:w-4/5 lg:w-3/4 max-w-4xl border border-gray-400 rounded-md shadow-md"
        />
      </div>

    </div>
  );
};

export default PMEGPScheme;