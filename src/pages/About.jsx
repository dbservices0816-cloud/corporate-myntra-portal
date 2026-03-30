import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
export default function About() {
  const { t } = useTranslation();

  const whyPoints = ["w1", "w2", "w3", "w4", "w5", "w6"];

  return (
    <div className="bg-white w-full">

      {/* HERO */}

      <section className="relative bg-gradient-to-r from-green-500 to-emerald-600 text-white py-20 px-6 text-center overflow-hidden">
  
  {/* subtle background effect */}
  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_left,_white,_transparent)]"></div>

  <div className="relative max-w-5xl mx-auto">
    
    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
      {t("about.title")}
    </h2>

    <p className="max-w-2xl mx-auto text-green-100 text-lg md:text-xl leading-relaxed">
      {t("about.hero_desc")}
    </p>

  </div>
</section>
    
      {/* CONTENT */}
      <section className="py-10 px-6">
        <div className="max-w-6xl mx-auto space-y-6">

          {/* WHO WE ARE */}
          <div className="bg-white border border-green-100 rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-green-700">
              {t("about.who_title")}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {t("about.who_desc")}
            </p>
          </div>

          {/* MISSION & VISION */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-green-100 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-green-700 mb-3">
                {t("about.mission_title")}
              </h3>
              <p className="text-gray-700">{t("about.mission_desc")}</p>
            </div>

            <div className="bg-white border border-green-100 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-green-700 mb-3">
                {t("about.vision_title")}
              </h3>
              <p className="text-gray-700">{t("about.vision_desc")}</p>
            </div>
          </div>

          {/* WHY CHOOSE US */}
          <div className="bg-white border border-green-100 rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-green-700">
              {t("about.why_title")}
            </h2>
            <ul className="space-y-3">
              {whyPoints.map((key) => (
                <li key={key} className="flex gap-3 items-start">
                  <span className="text-green-600">✔</span>
                  <span className="text-gray-700 font-medium">
                    {t(`about.${key}`)}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="bg-green-600 text-white rounded-xl p-6 text-center shadow-md">
            <h2 className="text-2xl font-bold mb-3">
              {t("about.cta_title")}
            </h2>
            <p className="text-green-100 mb-5">
              {t("about.cta_desc")}
            </p>
           <Link to="/query-form">
  <button className="bg-white text-green-600 px-6 py-2 rounded-md font-semibold hover:bg-green-100">
    {t("about.cta_btn")}
  </button>
</Link>
          </div>

        </div>
      </section>

    </div>
  );
}