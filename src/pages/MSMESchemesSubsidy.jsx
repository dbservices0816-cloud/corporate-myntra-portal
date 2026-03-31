import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import PMEGP from '../assets/Pmegp.png'
import CDP from "../assets/CDP.png"
import LIBS from "../assets/LIBS.png"
import PM from "../assets/PM.png"
import FUND from "../assets/FUND.png"
import FREE from '../assets/FREE.png'
import IC from "../assets/IC.png"
import KYC from "../assets/KYC.png"
import MSME from "../assets/MSME.png"
import RAMP from "../assets/RAMP.png"
import PMS from "../assets/PMS.png"

// hindi
import HiPMEGP from '../assets/HiPmegp.png'
import HiCDP from "../assets/HICDP.png"
 import HiLIBS from "../assets/HiLIBS.png"
 import HiPM from "../assets/HiPM.png"
 import HiFUND from "../assets/HiFUND.png"
 import HiFREE from '../assets/HiFREE.png'
  import HiIC from "../assets/HiRAMP.png"
 import HiuKYC from "../assets/HiKYC.png"
import HiMSME from "../assets/HiMSME.png"
 import HiRAMP from "../assets/HiRAMP.png"
 import HiPMS from "../assets/HiPMS.png"

const MSMESchemesSubsidy = () => {
  const { t, i18n } = useTranslation();
  const isHindi = i18n.language === "hi";

  return (
    <div className="px-4 sm:px-8 lg:px-16 py-10 max-w-6xl mx-auto">

      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-3">
        {t("msmeSubsidy.title")}
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* 1 PMEGP */}
        <Link to="/pmegp-scheme" className="group border rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
          <div className="p-4">
            <h2 className="font-semibold text-lg text-blue-600">
              {t("msmeSubsidy.card1")}
            </h2>
          </div>
          <img
            src={isHindi ? HiPMEGP : PMEGP}
            alt="PMEGP"
            className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
          />
        </Link>

        {/* 2 MSE-CDP */}
        <Link to="/mse-cdp" className="group border rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
          <div className="p-4">
            <h2 className="font-semibold text-lg text-blue-600">
              {t("msmeSubsidy.card2")}
            </h2>
          </div>
          <img
            src={isHindi ? HiCDP : CDP}
            alt="MSE-CDP"
            className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
          />
        </Link>

        {/* 3 ASPIRE */}
        <Link to="/libs" className="group border rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
          <div className="p-4">
            <h2 className="font-semibold text-lg text-blue-600">
              {t("msmeSubsidy.card3")}
            </h2>
          </div>
          <img
            src={isHindi ? HiLIBS : LIBS}
            alt="ASPIRE"
            className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
          />
        </Link>

        {/* 4 PM Vishwakarma */}
        <Link to="/pm" className="group border rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
          <div className="p-4">
            <h2 className="font-semibold text-lg text-blue-600">
              {t("msmeSubsidy.card4")}
            </h2>
          </div>
          <img
            src={isHindi ? HiPM : PM}
            alt="PM Vishwakarma"
            className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
          />
        </Link>

        {/* 5 SRI Fund */}
        <Link to="/zed" className="group border rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
          <div className="p-4">
            <h2 className="font-semibold text-lg text-blue-600">
              {t("msmeSubsidy.card5")}
            </h2>
          </div>
          <img
            src={isHindi ? HiFUND : FUND}
            alt="SRI Fund"
            className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
          />
        </Link>

        {/* 6 CGTMSE */}
        <Link to="/udyam-registration" className="group border rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
          <div className="p-4">
            <h2 className="font-semibold text-lg text-blue-600">
              {t("msmeSubsidy.card6")}
            </h2>
          </div>
          <img
            src={isHindi ? HiFREE : FREE}
            alt="CGTMSE"
            className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
          />
        </Link>

        {/* 7 PMS */}
        <Link to="/pms-scheme" className="group border rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
          <div className="p-4">
            <h2 className="font-semibold text-lg text-blue-600">
              {t("msmeSubsidy.card7")}
            </h2>
          </div>
          <img
            src={isHindi ? HiPMS : PMS}
            alt="PMS Scheme"
            className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
          />
        </Link>

        {/* 8 IC Scheme */}
        <Link to="/procurement-policy" className="group border rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
          <div className="p-4">
            <h2 className="font-semibold text-lg text-blue-600">
              {t("msmeSubsidy.card8")}
            </h2>
          </div>
          <img
            src={isHindi ? HiIC : IC}
            alt="IC Scheme"
            className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
          />
        </Link>

        {/* 9 KGVY */}
        <Link to="/incubation-support" className="group border rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
          <div className="p-4">
            <h2 className="font-semibold text-lg text-blue-600">
              {t("msmeSubsidy.card9")}
            </h2>
          </div>
          <img
            src={isHindi ? HiuKYC : KYC}
            alt="KGVY"
            className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
          />
        </Link>

        {/* 10 MSME Champions */}
        <Link to="/ipr-scheme" className="group border rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
          <div className="p-4">
            <h2 className="font-semibold text-lg text-blue-600">
              {t("msmeSubsidy.card10")}
            </h2>
          </div>
          <img
            src={isHindi ? HiMSME : MSME}
            alt="MSME Champions"
            className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
          />
        </Link>

        {/* 11 RAMP */}
        <Link to="/tool-room" className="group border rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
          <div className="p-4">
            <h2 className="font-semibold text-lg text-blue-600">
              {t("msmeSubsidy.card11")}
            </h2>
          </div>
          <img
            src={isHindi ? HiRAMP : RAMP}
            alt="RAMP Scheme"
            className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
          />
        </Link>

      </div>

    </div>
  );
};

export default MSMESchemesSubsidy;