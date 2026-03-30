

export default function OPCRegistration() {
  return (
    <div className="bg-gradient-to-br from-emerald-50 via-white to-green-50 min-h-screen">

      {/* HERO SECTION */}
      <section className="bg-emerald-700 text-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          OPC Registration
        </h1>
        <p className="max-w-2xl mx-auto text-sm md:text-lg text-emerald-100">
          Start your One Person Company with limited liability protection
          and full legal compliance.
        </p>
      </section>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* LEFT CONTENT */}
          <div className="flex-1 space-y-12">

            {/* ABOUT OPC */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                What is OPC?
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                One Person Company (OPC) is a business structure that allows
                a single entrepreneur to operate a corporate entity with limited
                liability protection. It combines the benefits of sole
                proprietorship and private limited company.
              </p>
            </section>

            {/* BENEFITS */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Benefits of OPC
              </h2>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  "Limited Liability Protection",
                  "Single Owner Control",
                  "Separate Legal Entity",
                  "Better Credibility",
                  "Easy Fund Raising",
                  "Tax Advantages",
                ].map((benefit) => (
                  <div
                    key={benefit}
                    className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition"
                  >
                    <h3 className="font-semibold text-gray-800 mb-2">
                      {benefit}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Secure and structured growth for your business.
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* DOCUMENTS */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Required Documents
              </h2>

              <div className="grid sm:grid-cols-2 gap-8 text-sm text-gray-600">
                <ul className="space-y-3 list-disc pl-5">
                  <li>PAN Card of Director</li>
                  <li>Aadhaar Card</li>
                  <li>Passport Size Photo</li>
                  <li>Mobile & Email ID</li>
                </ul>

                <ul className="space-y-3 list-disc pl-5">
                  <li>Registered Office Address Proof</li>
                  <li>Electricity Bill</li>
                  <li>Rent Agreement (if rented)</li>
                  <li>NOC from Owner</li>
                </ul>
              </div>
            </section>

            {/* PROCESS */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                OPC Registration Process
              </h2>

              <div className="grid md:grid-cols-4 gap-6 text-center">
                {[
                  "Name Approval",
                  "DSC & DIN Application",
                  "Document Filing",
                  "Certificate of Incorporation",
                ].map((step, index) => (
                  <div
                    key={step}
                    className="bg-white border p-6 rounded-xl shadow-sm"
                  >
                    <div className="text-emerald-700 font-bold mb-2">
                      Step {index + 1}
                    </div>
                    <p className="text-sm text-gray-600">{step}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* PRICING */}
            <section className="bg-emerald-700 text-white p-8 rounded-xl text-center">
              <h2 className="text-2xl font-bold mb-4">
                Affordable Pricing
              </h2>
              <p className="mb-6">
                Complete OPC Registration starting at
              </p>
              <div className="text-3xl font-bold mb-6">
                ₹3,999 Only
              </div>
              <button className="bg-white text-emerald-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Apply Now
              </button>
            </section>

          </div>

         

        </div>
      </div>
    </div>
  );
}