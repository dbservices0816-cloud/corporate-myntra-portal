import { useState } from "react";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

export default function QueryForm() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // API URL
  const API_URL =
    import.meta.env.VITE_API_URL ||
    "https://corporate-myntra-backend.onrender.com";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    const loadingToast = toast.loading(t("queryForm.loading"));

    try {
      const response = await fetch(`${API_URL}/api/query`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      console.log("Server Response:", data);

      toast.dismiss(loadingToast);
      toast.success(t("queryForm.success"));

      // ✅ WhatsApp message
      const message = `New Query:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}`;

      const whatsappUrl = `https://wa.me/919013203030?text=${encodeURIComponent(
        message
      )}`;

      // ✅ 1 sec delay (better UX)
      setTimeout(() => {
        window.open(whatsappUrl, "_blank");
      }, 800);

      // ✅ Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error:", error);
      toast.dismiss(loadingToast);
      toast.error(error.message || t("queryForm.error"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-green-700">
          {t("queryForm.title")}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder={t("queryForm.name")}
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <input
            type="email"
            name="email"
            placeholder={t("queryForm.email")}
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <input
            type="tel"
            name="phone"
            placeholder={t("queryForm.phone")}
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <textarea
            name="message"
            placeholder={t("queryForm.message")}
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition disabled:opacity-60"
          >
            {loading ? t("queryForm.submitting") : t("queryForm.submit")}
          </button>
        </form>
      </div>
    </div>
  );
}