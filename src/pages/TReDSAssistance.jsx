export default function TReDSAssistance() {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="w-full p-4 sm:p-6 lg:p-8">

        <div className="flex flex-col lg:flex-row gap-8">

          {/* Main Content */}
          <main className="lg:w-2/3 w-full space-y-8">

            {/* Header Section */}
            <div className="bg-white rounded-2xl shadow-lg border-t-4 border-green-600 p-6 sm:p-8">
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
                TReDS Registration & Assistance
              </h1>

              <p className="text-slate-600 text-base leading-relaxed">
                TReDS (Trade Receivables Discounting System) is an RBI-regulated 
                platform that helps MSMEs receive faster payments from large buyers 
                through invoice discounting. It improves cash flow and reduces 
                working capital stress for small and medium businesses.
              </p>
            </div>

            {/* Benefits Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-6">
                Benefits of TReDS Registration
              </h2>

              <div className="grid sm:grid-cols-2 gap-6">

                <div className="bg-green-50 p-5 rounded-xl hover:shadow-md transition">
                  <h3 className="font-semibold text-green-700 mb-2 text-lg">
                    ✔ Faster Payments
                  </h3>
                  <p className="text-sm text-slate-600">
                    Get early payment against invoices without waiting for long credit cycles.
                  </p>
                </div>

                <div className="bg-green-50 p-5 rounded-xl hover:shadow-md transition">
                  <h3 className="font-semibold text-green-700 mb-2 text-lg">
                    ✔ Improved Cash Flow
                  </h3>
                  <p className="text-sm text-slate-600">
                    Strengthen your working capital and manage operations smoothly.
                  </p>
                </div>

                <div className="bg-green-50 p-5 rounded-xl hover:shadow-md transition">
                  <h3 className="font-semibold text-green-700 mb-2 text-lg">
                    ✔ Transparent Digital Process
                  </h3>
                  <p className="text-sm text-slate-600">
                    RBI regulated online system ensuring secure and transparent transactions.
                  </p>
                </div>

                <div className="bg-green-50 p-5 rounded-xl hover:shadow-md transition">
                  <h3 className="font-semibold text-green-700 mb-2 text-lg">
                    ✔ Competitive Discount Rates
                  </h3>
                  <p className="text-sm text-slate-600">
                    Multiple financiers bid on invoices to offer better discounting rates.
                  </p>
                </div>

              </div>
            </div>

            {/* Our Services */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                Our TReDS Services
              </h2>

              <ul className="list-disc pl-6 text-slate-600 space-y-2 text-sm sm:text-base">
                <li>TReDS Platform Registration (RXIL / M1xchange / Invoicemart)</li>
                <li>Documentation & Compliance Support</li>
                <li>Invoice Upload & Discounting Assistance</li>
                <li>Buyer & Financier Coordination</li>
                <li>Ongoing Transaction Support</li>
              </ul>
            </div>

            {/* Documents Required */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                Documents Required
              </h2>

              <ul className="list-disc pl-6 text-slate-600 space-y-2 text-sm sm:text-base">
                <li>Company PAN & Incorporation Certificate</li>
                <li>GST Registration Certificate</li>
                <li>Bank Account Details</li>
                <li>Financial Statements</li>
                <li>KYC of Directors / Partners</li>
              </ul>
            </div>

          </main>

          {/* Sidebar */}
          <aside className="lg:w-1/3 w-full">
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 sticky top-6">

              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                Apply for TReDS Registration
              </h3>

              <p className="text-sm text-slate-600 mb-6">
                Improve your cash flow and receive faster payments through TReDS.
                Our experts will guide you through the complete process.
              </p>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                />

                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                />

                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 rounded-lg transition"
                >
                  Get Started
                </button>
              </form>

            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}