import { useState } from "react";
import { useTranslation } from "react-i18next";
import toast from "react-hot-toast";

export default function MSMEFinance() {

  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL || "http://192.168.0.102:3000";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ FIXED: mobile → phone map kiya
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    const loadingToast = toast.loading("Sending...");

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
          message: formData.message || "MSME Finance Query",
          type: "msme_finance"
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || "Something went wrong");
      }

      toast.dismiss(loadingToast);
      toast.success(t("msmeFinance.success"));

      setSubmitted(true);
      setFormData({ name: "", mobile: "", email: "", message: "" });

    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error(error.message || "Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100">

      <div className="w-full p-4 sm:p-6 lg:p-8">

        <div className="flex flex-col lg:flex-row gap-8">

          {/* LEFT CONTENT */}
          <main className="lg:w-2/3 w-full space-y-8">

            <div className="bg-white rounded-2xl shadow-lg border-t-4 border-green-600 p-6 sm:p-8">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                {t("msmeFinance.title")}
              </h1>
              <p>{t("msmeFinance.subtitle")}</p>
            </div>

            {/* FINANCE TYPES */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
              <h2 className="text-2xl font-semibold mb-6">
                {t("msmeFinance.financeTypes")}
              </h2>

              <div className="grid sm:grid-cols-2 gap-6">
                {["workingLoan","termLoan","machineryLoan","govtLoan"].map((item) => (
                  <div key={item} className="bg-green-50 p-5 rounded-xl">
                    <h3 className="font-semibold text-green-700 mb-2">
                      ✔ {t(`msmeFinance.${item}`)}
                    </h3>
                    <p className="text-sm">
                      {t(`msmeFinance.${item}Desc`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* BENEFITS */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
              <h2 className="text-2xl font-semibold mb-4">
                {t("msmeFinance.benefitsTitle")}
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                {[1,2,3,4,5].map(i => (
                  <li key={i}>{t(`msmeFinance.b${i}`)}</li>
                ))}
              </ul>
            </div>

            {/* DOCUMENTS */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
              <h2 className="text-2xl font-semibold mb-4">
                {t("msmeFinance.docsTitle")}
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                {[1,2,3,4,5].map(i => (
                  <li key={i}>{t(`msmeFinance.d${i}`)}</li>
                ))}
              </ul>
            </div>

          </main>

          {/* FORM */}
          <aside className="lg:w-1/3 w-full">
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 sticky top-6">

              <h3 className="text-xl font-semibold mb-4">
                {t("msmeFinance.applyTitle")}
              </h3>

              <p className="text-sm mb-6">
                {t("msmeFinance.applyDesc")}
              </p>

              {submitted ? (
                <div className="text-center py-4">
                  <p className="text-green-600 font-semibold text-lg">
                    ✅ {t("msmeFinance.success")}
                  </p>
                  <p className="text-slate-500 text-sm mt-2">
                    We will contact you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-green-600 underline text-sm"
                  >
                    Submit another query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t("msmeFinance.name")}
                    className="w-full border rounded-lg px-4 py-2"
                    required
                  />

                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder={t("msmeFinance.mobile")}
                    className="w-full border rounded-lg px-4 py-2"
                    required
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t("msmeFinance.email")}
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
                    {loading ? "Sending..." : t("msmeFinance.applyBtn")}
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