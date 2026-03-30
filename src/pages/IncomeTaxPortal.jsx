import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function IncomeTaxPortal() {
  const { t } = useTranslation();

  const services = ["s1", "s2", "s3", "s4", "s5", "s6"];
  const steps = ["step1", "step2", "step3", "step4"];

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
          message: formData.message || "Income Tax Query",
          type: "income_tax"
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
      <div className="w-full p-4 sm:p-6 lg:p-8">

        <div className="flex flex-col lg:flex-row gap-8">

          {/* Main Content */}
          <main className="lg:w-2/3 w-full space-y-8">

            {/* Header */}
            <div className="bg-white rounded-2xl shadow-lg border-t-4 border-green-600 p-6 sm:p-8">
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
                {t("incomeTax.title")}
              </h1>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                {t("incomeTax.intro")}
              </p>
              <Link
                to="/query-form"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                {t("incomeTax.consult_btn")}
              </Link>
            </div>

            {/* Services */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-6">
                {t("incomeTax.services_title")}
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {services.map((key) => (
                  <div key={key} className="bg-green-50 p-5 rounded-xl">
                    <h3 className="font-semibold text-green-700 mb-2 text-lg">
                      ✔ {t(`incomeTax.${key}`)}
                    </h3>
                    <p className="text-sm text-slate-600">
                      {t(`incomeTax.${key}_desc`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Important */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                {t("incomeTax.why_title")}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {t("incomeTax.why_desc")}
              </p>
            </div>

            {/* Process */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-6">
                {t("incomeTax.process_title")}
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {steps.map((key, index) => (
                  <div key={key} className="bg-green-50 p-5 rounded-xl">
                    <h3 className="font-semibold text-green-700 mb-2 text-lg">
                      {t("incomeTax.step")} {index + 1}
                    </h3>
                    <p className="text-sm text-slate-600">
                      {t(`incomeTax.${key}`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-green-50 border border-green-200 rounded-2xl shadow-md p-6 text-center">
              <h2 className="text-xl sm:text-2xl font-semibold text-green-700 mb-3">
                {t("incomeTax.cta_title")}
              </h2>
              <p className="text-gray-700 mb-5 text-sm sm:text-base">
                {t("incomeTax.cta_desc")}
              </p>
              <Link
                to="/query-form"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                {t("incomeTax.cta_btn")}
              </Link>
            </div>

          </main>

          {/* Sidebar */}
          <aside className="lg:w-1/3 w-full">
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 sticky top-6">

              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                {t("incomeTax.sidebar_title")}
              </h3>

              <p className="text-sm text-slate-600 mb-6">
                {t("incomeTax.sidebar_desc")}
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
                <form className="space-y-4" onSubmit={handleSubmit}>

                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text"
                    placeholder={t("incomeTax.name")}
                    className="w-full border rounded-lg px-4 py-2"
                    required
                  />

                  <input
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    type="tel"
                    placeholder={t("incomeTax.mobile")}
                    className="w-full border rounded-lg px-4 py-2"
                    required
                  />

                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder={t("incomeTax.email")}
                    className="w-full border rounded-lg px-4 py-2"
                    required
                  />

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your requirement"
                    className="w-full border rounded-lg px-4 py-2"
                    rows="3"
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-green-600 text-white py-2.5 rounded-lg hover:bg-green-700 transition disabled:opacity-60"
                  >
                    {loading ? "Sending..." : t("incomeTax.sidebar_btn")}
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