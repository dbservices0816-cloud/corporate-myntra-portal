import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function CompanyRegistration() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // ✅ ENV based API
  const API_URL = import.meta.env.VITE_API_URL || "http://192.168.0.102:3000";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ API CALL FIXED
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/query`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      console.log("API Response:", data);

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      alert(t("company.form_success"));

      // ✅ reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

    } catch (error) {
      console.error("Error:", error);
      alert(error.message || "Server error");
    } finally {
      setLoading(false);
    }
  };

  const benefits = [
    "limited_liability",
    "legal_entity",
    "fund_raising",
    "credibility",
    "perpetual",
    "tax_benefits"
  ];

  const steps = [
    "name_approval",
    "dsc_din",
    "document_filing",
    "certificate"
  ];

  return (
    <div className="bg-green-50 min-h-screen">

      {/* HERO */}
      <div className="section-layout bg-green-600 text-white">
        <div className="section-container">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            {t("company.title")}
          </h2>

          <p className="text-sm sm:text-base text-green-100 max-w-3xl">
            {t("company.subtitle")}
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 py-10">

        {/* BENEFITS */}
        <div className="bg-white p-6 rounded-xl border border-green-100 shadow-md mb-12">
          <h2 className="text-xl font-bold text-green-700 mb-4">
            {t("company.benefits_title")}
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            <ul className="space-y-2 text-gray-700">
              {benefits.slice(0, Math.ceil(benefits.length / 2)).map((benefit, i) => (
                <li key={i}>✔ {t(`company.${benefit}`)}</li>
              ))}
            </ul>

            <ul className="space-y-2 text-gray-700">
              {benefits.slice(Math.ceil(benefits.length / 2)).map((benefit, i) => (
                <li key={i}>✔ {t(`company.${benefit}`)}</li>
              ))}
            </ul>
          </div>
        </div>

        

        {/* PROCESS */}
        <h2 className="text-2xl font-bold text-green-700 mb-6">
          {t("company.process")}
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl border border-green-100 shadow-md hover:shadow-xl transition"
            >
              <h3 className="font-semibold text-green-700 mb-2">
                {t("company.step")} {i + 1}
              </h3>

              <p className="text-gray-700 text-sm">
                {t(`company.${step}`)}
              </p>
            </div>
          ))}
        </div>
        {/* DOCUMENTS */}
<div className="bg-white p-6 rounded-xl border border-green-100 shadow-md mb-12">
  <h2 className="text-xl font-bold text-green-700 mb-4">
    {t("company.documents")}
  </h2>

  <div className="grid sm:grid-cols-2 gap-6">
    <ul className="space-y-2 text-gray-700">
      <li>✔ {t("company.pan")}</li>
      <li>✔ {t("company.aadhaar")}</li>
      <li>✔ {t("company.photo")}</li>
      <li>✔ {t("company.contact")}</li>
    </ul>

    <ul className="space-y-2 text-gray-700">
      <li>✔ {t("company.address")}</li>
      <li>✔ {t("company.bill")}</li>
      <li>✔ {t("company.rent")}</li>
      <li>✔ {t("company.noc")}</li>
    </ul>
  </div>
</div>

        {/* FORM */}
        <div>
          <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
            {t("company.consult")}
          </h2>

          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-xl border border-green-100 shadow-md grid sm:grid-cols-2 gap-5"
          >

            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder={t("company.name")}
              required
              onChange={handleChange}
              className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-400 outline-none"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder={t("company.email")}
              required
              onChange={handleChange}
              className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-400 outline-none"
            />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              placeholder={t("company.phone")}
              required
              onChange={handleChange}
              className="border rounded-lg px-3 py-2 sm:col-span-2 focus:ring-2 focus:ring-green-400 outline-none"
            />

            <textarea
              name="message"
              value={formData.message}
              placeholder="Enter your message"
              rows="4"
              required
              onChange={handleChange}
              className="border rounded-lg px-3 py-2 sm:col-span-2 focus:ring-2 focus:ring-green-400 outline-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="sm:col-span-2 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition disabled:opacity-60"
            >
              {loading ? "Submitting..." : t("company.submit")}
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}