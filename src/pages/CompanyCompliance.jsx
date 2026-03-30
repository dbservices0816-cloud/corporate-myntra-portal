import { useTranslation } from "react-i18next";

export default function CompanyCompliance() {

  const { t } = useTranslation();

  return (
    <>
      {/* HERO */}
  <div className="section-layout bg-green-600 text-white">
  <div className="section-container">

    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
      {t("companyCompliance.title")}
    </h2>

    <p className="text-sm sm:text-base text-green-100 max-w-3xl">
      {t("companyCompliance.subtitle")}
    </p>

  </div>
</div>

      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* KEY POINTS */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-10">

          <h2 className="text-xl font-semibold text-green-800 mb-4">
            {t("companyCompliance.keyPoints")}
          </h2>

          <ul className="list-disc pl-6 text-gray-700 space-y-2">

            <li>{t("companyCompliance.k1")}</li>
            <li>{t("companyCompliance.k2")}</li>
            <li>{t("companyCompliance.k3")}</li>
            <li>{t("companyCompliance.k4")}</li>

          </ul>

        </div>


        {/* SERVICES */}
        <div className="mb-10">

          <h2 className="text-xl font-semibold text-green-800 mb-4">
            {t("companyCompliance.services")}
          </h2>

          <ul className="list-disc pl-6 text-gray-700 space-y-2">

            <li>{t("companyCompliance.s1")}</li>
            <li>{t("companyCompliance.s2")}</li>
            <li>{t("companyCompliance.s3")}</li>
            <li>{t("companyCompliance.s4")}</li>
            <li>{t("companyCompliance.s5")}</li>

          </ul>

        </div>


        {/* TABLE */}
        <div className="overflow-x-auto">

          <h2 className="text-xl font-semibold text-green-800 mb-4">
            {t("companyCompliance.tableTitle")}
          </h2>

          <table className="w-full border border-green-200 rounded-lg overflow-hidden">

            <thead className="bg-green-600 text-white">
              <tr>
                <th className="text-left px-4 py-3">
                  {t("companyCompliance.area")}
                </th>
                <th className="text-left px-4 py-3">
                  {t("companyCompliance.desc")}
                </th>
                <th className="text-left px-4 py-3">
                  {t("companyCompliance.example")}
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-green-200">

              <tr className="hover:bg-green-50">
                <td className="px-4 py-3 font-medium">
                  {t("companyCompliance.legal")}
                </td>
                <td className="px-4 py-3">
                  {t("companyCompliance.legalDesc")}
                </td>
                <td className="px-4 py-3">
                  {t("companyCompliance.legalEx")}
                </td>
              </tr>

              <tr className="hover:bg-green-50">
                <td className="px-4 py-3 font-medium">
                  {t("companyCompliance.financial")}
                </td>
                <td className="px-4 py-3">
                  {t("companyCompliance.financialDesc")}
                </td>
                <td className="px-4 py-3">
                  {t("companyCompliance.financialEx")}
                </td>
              </tr>

              <tr className="hover:bg-green-50">
                <td className="px-4 py-3 font-medium">
                  {t("companyCompliance.regulatory")}
                </td>
                <td className="px-4 py-3">
                  {t("companyCompliance.regulatoryDesc")}
                </td>
                <td className="px-4 py-3">
                  {t("companyCompliance.regulatoryEx")}
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>
    </>
  );
}