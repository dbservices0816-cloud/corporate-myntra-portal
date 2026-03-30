import { useState } from "react";

export default function CompanyRight() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <aside className="w-full lg:w-[380px] xl:w-[420px]">
      <div className="space-y-8 lg:sticky lg:top-10">

        {/* ABOUT */}
        <div className="rounded-2xl border bg-white p-6 lg:p-8 shadow-sm hover:shadow-md transition">
          <h3 className="text-lg lg:text-xl font-bold mb-4 text-slate-900">
            Company Registration
          </h3>
          <p className="text-sm lg:text-base text-slate-600 leading-relaxed">
            Register your Private Limited Company with complete legal compliance,
            expert documentation, and fast government approval. 
            We ensure a smooth and hassle-free process from start to finish.
          </p>
        </div>

        {/* BENEFITS */}
        <div className="rounded-2xl border bg-emerald-50 p-6 lg:p-8 shadow-sm">
          <h3 className="text-base lg:text-lg font-bold mb-5 text-emerald-700">
            Key Benefits
          </h3>
          <ul className="space-y-3 text-sm lg:text-base text-slate-700">
            {[
              "Limited Liability Protection",
              "Separate Legal Identity",
              "Easy Fund Raising",
              "Higher Business Credibility",
              "Perpetual Succession",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="text-emerald-600 text-lg">✔</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* FORM */}
        <div className="rounded-2xl border bg-white p-6 lg:p-8 shadow-lg">
          <h3 className="text-lg lg:text-xl font-bold mb-6 text-slate-900">
            Get Free Consultation
          </h3>

          {submitted ? (
            <div className="text-center py-8">
              <div className="text-4xl mb-3">✅</div>
              <div className="font-semibold text-emerald-600 text-lg">
                Request Submitted!
              </div>
              <p className="text-sm text-gray-400 mt-2">
                Our expert will contact you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-lg border px-4 py-3 text-sm lg:text-base focus:ring-2 focus:ring-emerald-500 outline-none"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                required
              />

              <input
                type="tel"
                placeholder="Your Phone Number"
                className="w-full rounded-lg border px-4 py-3 text-sm lg:text-base focus:ring-2 focus:ring-emerald-500 outline-none"
                value={form.phone}
                onChange={(e) =>
                  setForm({ ...form, phone: e.target.value })
                }
                required
              />

              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full rounded-lg border px-4 py-3 text-sm lg:text-base focus:ring-2 focus:ring-emerald-500 outline-none"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                required
              />

              <button
                type="submit"
                className="w-full rounded-lg bg-emerald-600 py-3 text-sm lg:text-base font-semibold text-white hover:bg-emerald-700 transition shadow-md"
              >
                Request Now
              </button>
            </form>
          )}
        </div>

        {/* CONTACT CARDS */}
        <div className="rounded-xl border bg-emerald-50 p-5 text-sm lg:text-base shadow-sm">
          📞 <span className="font-semibold text-emerald-700">
            +91 98765 43210
          </span>
        </div>

        <div className="rounded-xl border bg-green-50 p-5 text-sm lg:text-base shadow-sm">
          💬 <span className="font-semibold text-green-700">
            Chat on WhatsApp
          </span>
        </div>

      </div>
    </aside>
  );
}