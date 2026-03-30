import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function GSTAssistance() {
  const { t } = useTranslation();
  const [showPopup, setShowPopup] = useState(false);

  const [popupForm, setPopupForm] = useState({
    name: "",
    mobile: "",
    business: "",
    message: ""
  });

  const [sidebarForm, setSidebarForm] = useState({
    name: "",
    mobile: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  const handlePopupChange = (e) => {
    setPopupForm({ ...popupForm, [e.target.name]: e.target.value });
  };

  const handleSidebarChange = (e) => {
    setSidebarForm({ ...sidebarForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e, type) => {
    e.preventDefault();
    setLoading(true);

    const dataToSend = type === "popup" ? popupForm : sidebarForm;
    const API_URL = import.meta.env.VITE_API_URL || "http://192.168.0.102:3000";

    try {
      const res = await fetch(`${API_URL}/api/query`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: dataToSend.name,
          email: dataToSend.email || "noemail@gmail.com",
          phone: dataToSend.mobile,
          message: dataToSend.message || "GST Assistance Query",
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Query submitted successfully!");
        if (type === "popup") {
          setPopupForm({ name: "", mobile: "", business: "", message: "" });
          setShowPopup(false);
        } else {
          setSidebarForm({ name: "", mobile: "", email: "", message: "" });
        }
      } else {
        alert(data?.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submit error:", error);
      alert("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ================= POPUP ================= */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center px-4 z-50">
          <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-2xl relative">

            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-3 right-4 text-lg font-bold text-gray-500 hover:text-black"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-green-600 mb-4 text-center">
              {t("gstAssistance.popup_title")}
            </h2>

            <form className="space-y-3" onSubmit={(e) => handleSubmit(e, "popup")}>

              <input
                name="name"
                value={popupForm.name}
                onChange={handlePopupChange}
                type="text"
                placeholder={t("gstAssistance.name")}
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
                required
              />

              <input
                name="mobile"
                value={popupForm.mobile}
                onChange={handlePopupChange}
                type="tel"
                placeholder={t("gstAssistance.mobile")}
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
                required
              />

              <input
                name="business"
                value={popupForm.business}
                onChange={handlePopupChange}
                type="text"
                placeholder={t("gstAssistance.business")}
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              />

              <textarea
                name="message"
                value={popupForm.message}
                onChange={handlePopupChange}
                placeholder="Enter your requirement"
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
                rows="3"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-green-600 text-white py-2.5 rounded-lg hover:bg-green-700 transition disabled:opacity-60"
              >
                {loading ? "Sending..." : t("gstAssistance.popup_btn")}
              </button>

            </form>

          </div>
        </div>
      )}
      {/* ================= END POPUP ================= */}

      <div className="min-h-screen bg-slate-100">
        <div className="w-full p-4 sm:p-6 lg:p-8">

          <div className="flex flex-col lg:flex-row gap-8">

            {/* Main Content */}
            <main className="lg:w-2/3 w-full space-y-8">

              {/* Header */}
              <div className="bg-white rounded-2xl shadow-lg border-t-4 border-green-600 p-6 sm:p-8">
                <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
                  {t("gstAssistance.title")}
                </h1>
                <p className="text-slate-600 text-base leading-relaxed">
                  {t("gstAssistance.intro")}
                </p>
              </div>

              {/* Who Needs GST */}
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                  {t("gstAssistance.who_title")}
                </h2>
                <ul className="list-disc pl-6 text-slate-600 space-y-2">
                  {["w1","w2","w3","w4","w5"].map((key) => (
                    <li key={key}>{t(`gstAssistance.${key}`)}</li>
                  ))}
                </ul>
              </div>

              {/* GST Services */}
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                <h2 className="text-2xl font-semibold mb-6">
                  {t("gstAssistance.services_title")}
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="bg-green-50 p-5 rounded-xl">
                      <h3 className="text-green-700 font-semibold">
                        ✔ {t(`gstAssistance.s${i}_title`)}
                      </h3>
                      <p>{t(`gstAssistance.s${i}_desc`)}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Documents */}
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                <h2 className="text-2xl font-semibold mb-4">
                  {t("gstAssistance.docs_title")}
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  {["doc1","doc2","doc3","doc4","doc5"].map((k) => (
                    <li key={k}>{t(`gstAssistance.${k}`)}</li>
                  ))}
                </ul>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                <h2 className="text-2xl font-semibold mb-4">
                  {t("gstAssistance.why_title")}
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  {["why1","why2","why3","why4"].map((k) => (
                    <li key={k}>{t(`gstAssistance.${k}`)}</li>
                  ))}
                </ul>
              </div>

            </main>

            {/* Sidebar */}
            <aside className="lg:w-1/3 w-full">
              <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 sticky top-6">

                <h3 className="text-xl font-semibold mb-4">
                  {t("gstAssistance.sidebar_title")}
                </h3>

                <p className="text-sm mb-6">
                  {t("gstAssistance.sidebar_desc")}
                </p>

                <form className="space-y-4" onSubmit={(e) => handleSubmit(e, "sidebar")}>

                  <input
                    name="name"
                    value={sidebarForm.name}
                    onChange={handleSidebarChange}
                    type="text"
                    placeholder={t("gstAssistance.name")}
                    className="w-full border rounded-lg px-4 py-2"
                    required
                  />

                  <input
                    name="mobile"
                    value={sidebarForm.mobile}
                    onChange={handleSidebarChange}
                    type="tel"
                    placeholder={t("gstAssistance.mobile")}
                    className="w-full border rounded-lg px-4 py-2"
                    required
                  />

                  <input
                    name="email"
                    value={sidebarForm.email}
                    onChange={handleSidebarChange}
                    type="email"
                    placeholder={t("gstAssistance.email")}
                    className="w-full border rounded-lg px-4 py-2"
                    required
                  />

                  <textarea
                    name="message"
                    value={sidebarForm.message}
                    onChange={handleSidebarChange}
                    placeholder="Enter your requirement"
                    className="w-full border rounded-lg px-4 py-2"
                    rows="3"
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-green-600 text-white py-2.5 rounded-lg hover:bg-green-700 transition disabled:opacity-60"
                  >
                    {loading ? "Sending..." : t("gstAssistance.sidebar_btn")}
                  </button>

                </form>

              </div>
            </aside>

          </div>
        </div>
      </div>
    </>
  );
}