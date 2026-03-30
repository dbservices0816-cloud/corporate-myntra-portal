export default function Content() {
  return (
    <div className="w-full lg:w-3/4 bg-white rounded-2xl p-6 md:p-10 shadow-2xl border-t-4 border-green-600">

      {/* Hero Section */}
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
          Company Name Availability
        </h2>

        <p className="text-slate-600 text-base md:text-lg leading-relaxed">
          Before incorporating your company, securing the right name is one of
          the most crucial steps. A properly approved name ensures brand
          protection, compliance, and smooth registration under MCA norms.
        </p>
      </div>

      {/* Highlight Box */}
      <div className="bg-green-50 border-l-4 border-green-600 p-5 rounded-lg mb-8">
        <p className="text-slate-700 text-base">
          Checking company name availability in advance helps avoid rejection,
          legal conflicts, and unnecessary delays in incorporation.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">

        <div className="bg-slate-50 p-5 rounded-xl shadow-sm">
          <h3 className="font-semibold text-lg mb-2 text-green-700">
            MCA Compliance
          </h3>
          <p className="text-slate-600 text-sm md:text-base">
            Ensure your proposed name complies with Ministry of Corporate
            Affairs guidelines.
          </p>
        </div>

        <div className="bg-slate-50 p-5 rounded-xl shadow-sm">
          <h3 className="font-semibold text-lg mb-2 text-green-700">
            Brand Protection
          </h3>
          <p className="text-slate-600 text-sm md:text-base">
            Protect your business identity from duplication or legal disputes.
          </p>
        </div>

        <div className="bg-slate-50 p-5 rounded-xl shadow-sm">
          <h3 className="font-semibold text-lg mb-2 text-green-700">
            Faster Approval
          </h3>
          <p className="text-slate-600 text-sm md:text-base">
            Avoid delays caused by name similarity or restricted words.
          </p>
        </div>

        <div className="bg-slate-50 p-5 rounded-xl shadow-sm">
          <h3 className="font-semibold text-lg mb-2 text-green-700">
            Legal Safety
          </h3>
          <p className="text-slate-600 text-sm md:text-base">
            Reduce the risk of trademark objections and legal complications.
          </p>
        </div>

      </div>

      {/* Process Section */}
      <div className="mb-10">
        <h3 className="text-2xl font-bold text-slate-800 mb-6">
          Our Simple Process
        </h3>

        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="bg-green-600 text-white w-8 h-8 flex items-center justify-center rounded-full font-bold">
              1
            </div>
            <p className="text-slate-700">Submit your preferred company names.</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-green-600 text-white w-8 h-8 flex items-center justify-center rounded-full font-bold">
              2
            </div>
            <p className="text-slate-700">We verify availability & MCA compliance.</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-green-600 text-white w-8 h-8 flex items-center justify-center rounded-full font-bold">
              3
            </div>
            <p className="text-slate-700">Reserve and proceed with incorporation.</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-600 text-white rounded-xl p-6 text-center shadow-lg">
        <h4 className="text-xl md:text-2xl font-semibold mb-3">
          Ready to Check Your Company Name?
        </h4>
        <p className="mb-5 text-sm md:text-base">
          Start your business journey with the right name and hassle-free approval.
        </p>
        <button className="bg-white text-green-700 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition duration-300 shadow-md">
          Check Name Availability Now
        </button>
      </div>

    </div>
  );
}
