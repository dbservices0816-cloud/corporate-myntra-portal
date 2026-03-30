import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function MSMERegistration() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

 const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  const API_URL = import.meta.env.VITE_API_URL || "http://192.168.0.102:3000";

  try {
    const res = await fetch(`${API_URL}/api/query`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.mobile,
        message: formData.message,
      })
    });

    const data = await res.json();

    if (res.ok) {
      setSubmitted(true);
      setFormData({ name: "", mobile: "", email: "", message: "" });
    } else {
      alert(data.message);
    }
  } catch {
    alert("Server Error");
  } finally {
    setLoading(false);
  }
};

  // ✅ TABLE DATA
  const tableRows = [
    {
      label: t("msmeRegistration.prev_invest"),
      values: [
        t("msmeRegistration.prev_invest_micro"),
        t("msmeRegistration.prev_invest_small"),
        t("msmeRegistration.prev_invest_medium")
      ],
      type: "previous"
    },
    {
      label: t("msmeRegistration.rev_invest"),
      values: [
        t("msmeRegistration.rev_invest_micro"),
        t("msmeRegistration.rev_invest_small"),
        t("msmeRegistration.rev_invest_medium")
      ],
      type: "revised"
    },
    {
      label: t("msmeRegistration.prev_turnover"),
      values: [
        t("msmeRegistration.prev_turnover_micro"),
        t("msmeRegistration.prev_turnover_small"),
        t("msmeRegistration.prev_turnover_medium")
      ],
      type: "previous"
    },
    {
      label: t("msmeRegistration.rev_turnover"),
      values: [
        t("msmeRegistration.rev_turnover_micro"),
        t("msmeRegistration.rev_turnover_small"),
        t("msmeRegistration.rev_turnover_medium")
      ],
      type: "revised"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-6">

        {/* MAIN */}
        <main className="lg:w-2/3 space-y-6">

          {/* HEADER */}
          <div className="bg-white p-6 rounded-xl shadow border-t-4 border-green-600">
            <h1 className="text-3xl font-bold">
              {t("msmeRegistration.title")}
            </h1>
            <p className="text-slate-600 mt-2">
              {t("msmeRegistration.intro")}
            </p>
          </div>

          {/* CONTENT */}
          <div className="bg-white p-6 rounded-xl shadow space-y-6">

            {/* DESCRIPTION */}
            <div>
              <h2 className="text-xl font-semibold">
                {t("msmeRegistration.def_title")}
              </h2>
              <p className="text-sm text-slate-600 mt-2">
                {t("msmeRegistration.def_desc")}
              </p>
            </div>

            {/* TABLE */}
            <div className="overflow-x-auto">
              <table className="w-full border text-sm">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border p-2 text-left">
                      {t("msmeRegistration.col_criteria")}
                    </th>
                    <th className="border p-2">
                      {t("msmeRegistration.col_micro")}
                    </th>
                    <th className="border p-2">
                      {t("msmeRegistration.col_small")}
                    </th>
                    <th className="border p-2">
                      {t("msmeRegistration.col_medium")}
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {tableRows.map((row, i) => (
                    <tr
                      key={i}
                      className={
                        row.type === "previous"
                          ? "bg-red-50"
                          : "bg-green-50 font-semibold text-green-700"
                      }
                    >
                      <td className="border p-2">
                        {row.label}
                      </td>

                      {row.values.map((val, idx) => (
                        <td key={idx} className="border p-2 text-center">
                          {val}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* BENEFITS */}
            <div>
              <h3 className="text-lg font-semibold mb-3">
                {t("msmeRegistration.benefits_title")}
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="border p-3 rounded-lg bg-slate-50">
                    <p className="font-medium text-sm">
                      {t(`msmeRegistration.b${i}_title`)}
                    </p>
                    <p className="text-xs text-slate-600 mt-1">
                      {t(`msmeRegistration.b${i}_desc`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* DOCUMENTS */}
            <div>
              <h3 className="text-lg font-semibold mb-3">
                {t("msmeRegistration.docs_title")}
              </h3>

              <ul className="list-disc pl-5 text-sm space-y-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <li key={i}>{t(`msmeRegistration.doc${i}`)}</li>
                ))}
              </ul>
            </div>

            {/* PROCESS */}
            <div>
              <h3 className="text-lg font-semibold mb-3">
                {t("msmeRegistration.process_title")}
              </h3>

              <ol className="list-decimal pl-5 text-sm space-y-1">
                {[1, 2, 3, 4].map((i) => (
                  <li key={i}>{t(`msmeRegistration.step${i}`)}</li>
                ))}
              </ol>
            </div>

          </div>
        </main>

        {/* SIDEBAR */}
        <aside className="lg:w-1/3">
          <div className="bg-white p-6 rounded-xl shadow sticky top-6">

            <h3 className="font-semibold mb-2">
              {t("msmeRegistration.sidebar_title")}
            </h3>

            <p className="text-sm mb-4">
              {t("msmeRegistration.sidebar_desc")}
            </p>

            {submitted ? (
              <p className="text-green-600 font-semibold">
                ✅ Submitted Successfully
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">

                {["name", "mobile", "email"].map((field) => (
                  <input
                    key={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    type={field === "email" ? "email" : "text"}
                    placeholder={t(`msmeRegistration.${field}`)}
                    className="w-full border px-3 py-2 rounded-lg text-sm focus:ring-2 focus:ring-green-500"
                    required
                  />
                ))}

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your requirement"
                  className="w-full border px-3 py-2 rounded-lg text-sm"
                  rows="3"
                  required
                />

                <button
                  disabled={loading}
                  className="w-full bg-green-600 text-white py-2 rounded-lg"
                >
                  {loading ? "Sending..." : t("msmeRegistration.submit")}
                </button>

              </form>
            )}

          </div>
        </aside>

      </div>
    </div>
  );
}