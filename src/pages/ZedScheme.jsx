import React from "react";
import FUND from "../assets/FUND.png";
import HiFUND from "../assets/HiFUND.png";
import { useTranslation } from "react-i18next";

export default function SRIFund() {
  const { t, i18n } = useTranslation();

  const schemeImage = i18n.language === "hi" ? HiFUND : FUND;

  return (
    <div className="bg-white py-10 px-6">

      <div className="max-w-5xl mx-auto">

        {/* TITLE */}
        <h1 className="text-3xl font-bold text-black mb-6">
          {t("sriFund.title")}
        </h1>

        {/* DESCRIPTION */}
        <p className="text-black mb-4">
          {t("sriFund.desc1")}
        </p>

        <p className="text-black mb-4">
          {t("sriFund.desc2_before")} <strong>{t("sriFund.desc2_bold")}</strong> {t("sriFund.desc2_after")}
        </p>

        <p className="text-black mb-6">
          {t("sriFund.desc3")}
        </p>

        {/* FEATURES */}
        <h2 className="text-2xl font-semibold text-black mb-4">
          {t("sriFund.featuresTitle")}
        </h2>

        <table className="w-full border mb-8">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border text-left">{t("sriFund.th_feature")}</th>
              <th className="p-3 border text-left">{t("sriFund.th_details")}</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td className="p-3 border">{t("sriFund.row1_label")}</td>
              <td className="p-3 border">{t("sriFund.row1_detail")}</td>
            </tr>

            <tr>
              <td className="p-3 border">{t("sriFund.row2_label")}</td>
              <td className="p-3 border">{t("sriFund.row2_detail")}</td>
            </tr>

            <tr>
              <td className="p-3 border">{t("sriFund.row3_label")}</td>
              <td className="p-3 border">{t("sriFund.row3_detail")}</td>
            </tr>

            <tr>
              <td className="p-3 border">{t("sriFund.row4_label")}</td>
              <td className="p-3 border">{t("sriFund.row4_detail")}</td>
            </tr>

            <tr>
              <td className="p-3 border">{t("sriFund.row5_label")}</td>
              <td className="p-3 border">{t("sriFund.row5_detail")}</td>
            </tr>

            <tr>
              <td className="p-3 border">{t("sriFund.row6_label")}</td>
              <td className="p-3 border">{t("sriFund.row6_detail")}</td>
            </tr>

          </tbody>
        </table>

        {/* NEXT STEP */}
        <p className="text-black mb-6">
          {t("sriFund.nextStep_before")} <strong>{t("sriFund.nextStep_bold")}</strong>{t("sriFund.nextStep_after")}
        </p>

         <h3 className="text-lg sm:text-xl font-semibold text-center mb-4">
        {t("pmegp.overview")}
      </h3>

        {/* IMAGE */}
        <div className="max-w-4xl mx-auto">
          <img
            src={schemeImage}
            alt={t("sriFund.imgAlt")}
            className="w-full rounded-lg"
          />
        </div>

      </div>

    </div>
  );
}