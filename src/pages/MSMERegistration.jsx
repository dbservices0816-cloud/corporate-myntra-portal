import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function MSMERegistration() {
  const { t } = useTranslation();

  const [showPopup, setShowPopup] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: ""
  });

  // Auto popup after 6 seconds (same as NewCompanyRegistration)
  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 6000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    if (loading) return;
    setLoading(true);

    const API_URL = import.meta.env.VITE_API_URL || "https://corporate-myntra-backend.onrender.com";

    try {
      const res = await fetch(`${API_URL}/api/query`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.mobile,
          message: formData.message || "MSME Registration Query",
          type: "msme_registration"
        })
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitted(true);

        // WhatsApp redirect (same logic as NewCompanyRegistration)
        const message = `MSME Registration Query:
Name: ${formData.name}
Phone: ${formData.mobile}
Email: ${formData.email}
Message: ${formData.message || "MSME Registration Query"}`;

        const isMobile = /iPhone|Android/i.test(navigator.userAgent);

        const whatsappUrl = isMobile
          ? `https://wa.me/919013203030?text=${encodeURIComponent(message)}`
          : `https://web.whatsapp.com/send?phone=919013203030&text=${encodeURIComponent(message)}`;

        setTimeout(() => {
          window.open(whatsappUrl, "_blank");
        }, 800);

        // Reset form
        setFormData({ name: "", mobile: "", email: "", message: "" });
      } else {
        alert(data?.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ TABLE DATA (kept same as original)
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

      {/* POPUP - Same as NewCompanyRegistration */}
      {showPopup && (
        <div
          onClick={(e) => e.target === e.currentTarget && setShowPopup(false)}
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
        >
          <div className="bg-white w-full max-w-md rounded-2xl p-6 relative shadow-2xl">

            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black font-bold"
            >
              ✕
            </button>

            {!submitted ? (
              <>
                <h3 className="text-xl font-bold text-green-700 mb-2">
                  {t("msmeRegistration.popup_title") || "MSME Registration"}
                </h3>

                <p className="text-sm text-gray-500 mb-4">
                  {t("msmeRegistration.popup_desc") || "Get expert assistance for your MSME Registration"}
                </p>

                <form onSubmit={handleSubmit} className="space-y-3">
                  {["name", "mobile", "email"].map((field) => (
                    <input
                      key={field}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      type={field === "email" ? "email" : field === "mobile" ? "tel" : "text"}
                      placeholder={t(`msmeRegistration.${field}`)}
                      className="w-full border rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-green-500"
                      required
                    />
                  ))}

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your requirement"
                    className="w-full border rounded-lg px-4 py-2 text-sm"
                    rows="3"
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition disabled:opacity-60"
                  >
                    {loading ? "Sending..." : t("msmeRegistration.submit")}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-6">
                <div className="text-4xl mb-3">✅</div>
                <h3 className="text-lg font-semibold text-green-700 mb-2">
                  {t("msmeRegistration.success") || "Submitted Successfully"}
                </h3>
                <p className="text-slate-500 text-sm">
                  We will contact you shortly.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setShowPopup(false); }}
                  className="mt-4 text-green-600 underline text-sm"
                >
                  Close
                </button>
              </div>
            )}

          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-6">

        {/* MAIN CONTENT - Same layout & styling as original */}
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

          {/* CONTENT SECTION */}
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

            {/* TABLE - Same as original */}
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

            {/* BENEFITS - Same */}
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

            {/* DOCUMENTS - Same */}
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

            {/* PROCESS - Same */}
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

        {/* SIDEBAR - Now also has "Open Form" button like CTA in NewCompany */}
        <aside className="lg:w-1/3">
          <div className="bg-white p-6 rounded-xl shadow sticky top-6">

            <h3 className="font-semibold mb-2">
              {t("msmeRegistration.sidebar_title")}
            </h3>

            <p className="text-sm mb-4">
              {t("msmeRegistration.sidebar_desc")}
            </p>

            

            {/* Inline Form (kept as backup) */}
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-3">
                {["name", "mobile", "email"].map((field) => (
                  <input
                    key={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    type={field === "email" ? "email" : field === "mobile" ? "tel" : "text"}
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
                />

                <button
                  disabled={loading}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition disabled:opacity-60"
                >
                  {loading ? "Sending..." : t("msmeRegistration.submit")}
                </button>
              </form>
            ) : (
              <p className="text-green-600 font-semibold text-center py-4">
                ✅ Submitted Successfully
              </p>
            )}

          </div>
        </aside>

      </div>
    </div>
  );
}