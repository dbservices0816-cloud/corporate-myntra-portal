import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function GEMPortalAssistance() {
  const { t } = useTranslation();

  const benefits = ["b1", "b2", "b3", "b4"];
  const services = ["s1", "s2", "s3", "s4", "s5"];
  const docs = ["doc1", "doc2", "doc3", "doc4", "doc5"];

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ FIXED: localhost → VITE_API_URL, mobile → phone
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const API_URL = import.meta.env.VITE_API_URL || "http://192.168.0.102:3000";

    try {
      const res = await fetch(`${API_URL}/api/query`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.mobile,
          message: formData.message || "GEM Portal Query",
          type: "gem_portal"
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess(true);
        setFormData({ name: "", mobile: "", email: "", message: "" });
      } else {
        alert(data?.message || "Something went wrong. Please try again.");
      }

    } catch (err) {
      console.error(err);
      alert("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-10">

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">

          {/* Main Content */}
          <main className="lg:w-2/3 w-full space-y-6">

            {/* Header Section */}
            <div className="bg-white rounded-xl shadow-md border-t-4 border-green-600 p-4 sm:p-6">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-3">
                {t("gemPortal.title")}
              </h1>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {t("gemPortal.intro")}
              </p>
            </div>

            {/* Benefits Section */}
            <div className="bg-white rounded-xl shadow-md p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-800 mb-4">
                {t("gemPortal.benefits_title")}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((key) => (
                  <div key={key} className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-700 mb-1">
                      ✔ {t(`gemPortal.${key}_title`)}
                    </h3>
                    <p className="text-sm text-slate-600">
                      {t(`gemPortal.${key}_desc`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="bg-white rounded-xl shadow-md p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-semibold mb-3">
                {t("gemPortal.services_title")}
              </h2>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                {services.map((key) => (
                  <li key={key}>{t(`gemPortal.${key}`)}</li>
                ))}
              </ul>
            </div>

            {/* Documents */}
            <div className="bg-white rounded-xl shadow-md p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-semibold mb-3">
                {t("gemPortal.docs_title")}
              </h2>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                {docs.map((key) => (
                  <li key={key}>{t(`gemPortal.${key}`)}</li>
                ))}
              </ul>
            </div>

          </main>

          {/* Sidebar */}
          <aside className="lg:w-1/3 w-full">
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 sticky top-6">

              <h3 className="text-lg sm:text-xl font-semibold mb-3">
                {t("gemPortal.sidebar_title")}
              </h3>

              <p className="text-sm mb-4">
                {t("gemPortal.sidebar_desc")}
              </p>

              {success ? (
                <div className="text-center py-4">
                  <p className="text-green-600 font-semibold text-lg">
                    ✅ Submitted Successfully!
                  </p>
                  <p className="text-slate-500 text-sm mt-2">
                    We will contact you shortly.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="mt-4 text-green-600 underline text-sm"
                  >
                    Submit another query
                  </button>
                </div>
              ) : (
                <form className="space-y-3" onSubmit={handleSubmit}>

                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text"
                    placeholder={t("gemPortal.name")}
                    className="w-full border rounded-lg px-3 py-2"
                    required
                  />

                  <input
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    type="tel"
                    placeholder={t("gemPortal.mobile")}
                    className="w-full border rounded-lg px-3 py-2"
                    required
                  />

                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder={t("gemPortal.email")}
                    className="w-full border rounded-lg px-3 py-2"
                    required
                  />

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your requirement"
                    className="w-full border rounded-lg px-3 py-2"
                    rows="3"
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition disabled:opacity-60"
                  >
                    {loading ? "Sending..." : t("gemPortal.submit")}
                  </button>

                </form>
              )}

            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}