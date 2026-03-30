import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function NewCompanyRegistration() {

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

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 6000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ FIXED: e.preventDefault(), VITE_API_URL, mobile → phone
  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    if (loading) return;
    setLoading(true);

    const API_URL = import.meta.env.VITE_API_URL || "http://192.168.0.102:3000";

    try {
      const response = await fetch(`${API_URL}/api/query`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.mobile,
          message: formData.message || "New Company Registration Query",
          type: "new_company_popup"
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
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

  const companyTypes = [
    {
      title: t("newCompany.private_title"),
      desc: t("newCompany.private_desc"),
      points: [
        t("newCompany.private_point1"),
        t("newCompany.private_point2"),
        t("newCompany.private_point3"),
        t("newCompany.private_point4"),
      ],
    },
    {
      title: t("newCompany.opc_title"),
      desc: t("newCompany.opc_desc"),
      points: [
        t("newCompany.opc_point1"),
        t("newCompany.opc_point2"),
        t("newCompany.opc_point3"),
        t("newCompany.opc_point4"),
      ],
    },
    {
      title: t("newCompany.llp_title"),
      desc: t("newCompany.llp_desc"),
      points: [
        t("newCompany.llp_point1"),
        t("newCompany.llp_point2"),
        t("newCompany.llp_point3"),
        t("newCompany.llp_point4"),
      ],
    },
    {
      title: t("newCompany.public_title"),
      desc: t("newCompany.public_desc"),
      points: [
        t("newCompany.public_point1"),
        t("newCompany.public_point2"),
        t("newCompany.public_point3"),
        t("newCompany.public_point4"),
      ],
    },
  ];

  const benefits = [
    t("newCompany.benefit1"),
    t("newCompany.benefit2"),
    t("newCompany.benefit3"),
    t("newCompany.benefit4"),
    t("newCompany.benefit5"),
    t("newCompany.benefit6"),
  ];

  const documents = [
    t("newCompany.doc1"),
    t("newCompany.doc2"),
    t("newCompany.doc3"),
    t("newCompany.doc4"),
    t("newCompany.doc5"),
    t("newCompany.doc6"),
  ];

  return (
    <div className="bg-green-50">

      {/* POPUP */}
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
                  {t("newCompany.popup_title")}
                </h3>

                <p className="text-sm text-gray-500 mb-4">
                  {t("newCompany.popup_desc")}
                </p>

                {/* ✅ form tag added with onSubmit */}
                <form onSubmit={handleSubmit} className="space-y-3">

                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text"
                    className="w-full border rounded-lg px-4 py-2"
                    placeholder={t("newCompany.name")}
                    required
                  />

                  <input
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    type="tel"
                    className="w-full border rounded-lg px-4 py-2"
                    placeholder={t("newCompany.mobile")}
                    required
                  />

                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    className="w-full border rounded-lg px-4 py-2"
                    placeholder={t("newCompany.email")}
                    required
                  />

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-4 py-2"
                    placeholder="Enter your requirement"
                    rows="3"
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition disabled:opacity-60"
                  >
                    {loading ? "Sending..." : t("newCompany.submit")}
                  </button>

                </form>
              </>
            ) : (
              <div className="text-center py-6">
                <div className="text-4xl mb-3">✅</div>
                <h3 className="text-lg font-semibold text-green-700 mb-2">
                  {t("newCompany.success")}
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

      {/* HERO */}
      <div className="section-layout bg-green-600 text-white">
        <div className="section-container">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            {t("newCompany.title")}
          </h2>
          <p className="text-green-100">
            {t("newCompany.subtitle")}
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* TYPES */}
        <h2 className="text-2xl font-bold text-green-700 mb-6">
          {t("newCompany.types")}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {companyTypes.map((c, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-lg font-bold text-green-700">{c.title}</h3>
              <p className="text-sm text-gray-500">{c.desc}</p>
              <ul className="text-sm mt-2 space-y-1">
                {c.points.map((p, i) => <li key={i}>• {p}</li>)}
              </ul>
            </div>
          ))}
        </div>

        {/* BENEFITS + DOCS */}
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-bold text-green-700 mb-3">
              {t("newCompany.benefits_title")}
            </h2>
            <ul className="space-y-1">
              {benefits.map((b, i) => <li key={i}>✔ {b}</li>)}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-bold text-green-700 mb-3">
              {t("newCompany.documents_title")}
            </h2>
            <ul className="space-y-1">
              {documents.map((d, i) => <li key={i}>📄 {d}</li>)}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-green-500 text-white p-8 rounded-3xl text-center shadow-xl">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            {t("newCompany.cta_title")}
          </h2>
          <button
            onClick={() => { setSubmitted(false); setShowPopup(true); }}
            className="bg-white text-green-600 font-semibold px-6 py-2 rounded-full hover:bg-green-50 transition"
          >
            {t("newCompany.cta_btn")}
          </button>
        </div>

      </div>

    </div>
  );
}