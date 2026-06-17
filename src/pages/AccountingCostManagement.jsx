import { useState } from "react";
import { useTranslation } from "react-i18next";
import toast from "react-hot-toast";

export default function AccountingCostManagement() {

  const { t } = useTranslation();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL || "https://corporate-myntra-backend.onrender.com";

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
        body: JSON.stringify(form),
      });

      const data = await response.json();

      console.log("API Response:", data);

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      toast.dismiss(loadingToast);
      toast.success(t("accounting.success"));

      setSubmitted(true);

      // WhatsApp redirect
      const message = `Accounting & Cost Management Query:
Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
Message: ${form.message || "Accounting & Cost Management Query"}`;

      const isMobile = /iPhone|Android/i.test(navigator.userAgent);

      const whatsappUrl = isMobile
        ? `https://wa.me/919013203030?text=${encodeURIComponent(message)}`
        : `https://web.whatsapp.com/send?phone=919013203030&text=${encodeURIComponent(message)}`;

      setTimeout(() => {
        window.open(whatsappUrl, "_blank");
      }, 800);

      setForm({
        name: "",
        phone: "",
        email: "",
        message: ""
      });

    } catch (error) {
      console.error(error);
      toast.dismiss(loadingToast);
      toast.error(error.message || "Server error");
    } finally {
      setLoading(false);
    }
  };

  const accountingServices = [
    "bookkeeping",
    "financial_statement",
    "audit_support",
    "management_accounting",
    "advisory",
    "budgeting"
  ];

  const costServices = [
    "cost_sheet",
    "budget_planning",
    "break_even",
    "inventory",
    "profitability",
    "mis_reporting"
  ];

  const benefits = [
    "accurate_records",
    "better_decision",
    "profitability",
    "tax_compliance",
    "risk_reduction"
  ];

  return (
    <div className="bg-white w-full">

      {/* HERO */}
      <div className="w-full h-[260px] bg-green-600 text-white px-5 sm:px-10 lg:px-20 flex items-center">
        <div className="max-w-6xl mx-auto w-full">

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            {t("accounting.title")}
          </h2>

          <p className="text-sm sm:text-base text-green-100 max-w-3xl">
            {t("accounting.subtitle")}
          </p>

        </div>
      </div>

      <section className="py-10 px-6">

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          <div className="md:col-span-2 space-y-6">

            {/* ACCOUNTING */}
            <div className="bg-white border border-green-100 rounded-xl p-6 shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-green-700">
                {t("accounting.services_title")}
              </h2>

              <ul className="space-y-3">
                {accountingServices.map((service) => (
                  <li key={service}>✔ {t(`accounting.${service}`)}</li>
                ))}
              </ul>
            </div>

            {/* COST MANAGEMENT */}
            <div className="bg-white border border-green-100 rounded-xl p-6 shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-green-700">
                {t("accounting.cost_title")}
              </h2>

              <ul className="space-y-3">
                {costServices.map((item) => (
                  <li key={item}>✔ {t(`accounting.${item}`)}</li>
                ))}
              </ul>
            </div>

            {/* BENEFITS */}
            <div className="bg-white border border-green-100 rounded-xl p-6 shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-green-700">
                {t("accounting.why")}
              </h2>

              <ul className="space-y-3">
                {benefits.map((b) => (
                  <li key={b}>✔ {t(`accounting.${b}`)}</li>
                ))}
              </ul>
            </div>

          </div>

          {/* FORM */}
          <div>

            <div className="border rounded-xl p-5 shadow-md">

              <h3 className="text-lg font-bold mb-4">
                {t("accounting.consult")}
              </h3>

              {submitted ? (
                <div className="text-center py-6">
                  <div className="text-4xl mb-3">✅</div>
                  <p className="text-green-600 font-semibold">
                    {t("accounting.success")}
                  </p>
                  <p className="text-slate-500 text-sm mt-1">
                    We will contact you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)} 
                    className="mt-4 text-green-600 underline text-sm"
                  >
                    Close
                  </button>
                </div>
              ) : (

                <form onSubmit={handleSubmit} className="space-y-3">

                  {["name", "phone", "email"].map((field) => (
                    <input
                      key={field}
                      type={field === "email" ? "email" : "text"}
                      placeholder={t(`accounting.${field}`)}
                      className="w-full border rounded-md px-3 py-2 text-sm"
                      value={form[field]}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          [field]: e.target.value
                        })
                      }
                      required
                    />
                  ))}

                  <textarea
                    name="message"
                    placeholder="Enter your message"
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="w-full border rounded-md px-3 py-2 text-sm"
                    rows="3"
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 disabled:opacity-60"
                  >
                    {loading ? "Sending..." : t("accounting.request")}
                  </button>

                </form>
              )}

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}