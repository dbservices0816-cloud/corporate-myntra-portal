import { useTranslation } from "react-i18next";

export default function Project() {

  const { t } = useTranslation();

  const projects = [
    {
      title: t("projects.project1_title"),
      desc: t("projects.project1_desc"),
    },
    {
      title: t("projects.project2_title"),
      desc: t("projects.project2_desc"),
    },
    {
      title: t("projects.project3_title"),
      desc: t("projects.project3_desc"),
    },
    {
      title: t("projects.project4_title"),
      desc: t("projects.project4_desc"),
    },
    {
      title: t("projects.project5_title"),
      desc: t("projects.project5_desc"),
    },
    {
      title: t("projects.project6_title"),
      desc: t("projects.project6_desc"),
    },
  ];

  return (
    <div className="bg-green-50 min-h-screen">

      {/* HERO */}
  <div className="section-layout bg-green-600 text-white">
  <div className="section-container">

    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
      {t("projects.title")}
    </h2>

    <p className="text-sm sm:text-base text-green-100 max-w-3xl">
      {t("projects.subtitle")}
    </p>

  </div>
</div>

      {/* PROJECT GRID */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 py-10">

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {projects.map((project, index) => (

            <div
              key={index}
              className="bg-white p-6 rounded-xl border border-green-100 shadow-md hover:shadow-xl transition"
            >

              <h3 className="text-lg font-bold text-green-700 mb-2">
                {project.title}
              </h3>

              <p className="text-gray-600 text-sm mb-4">
                {project.desc}
              </p>

              <button className="bg-green-600 text-white px-5 py-2 rounded-lg text-sm hover:bg-green-700 transition">
                {t("projects.view")}
              </button>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}