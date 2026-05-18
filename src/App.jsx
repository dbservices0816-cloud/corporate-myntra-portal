import { Routes, Route, useLocation } from "react-router-dom";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import CompanyNameAvailability from "./pages/CompanyNameAvailability";
import GSTAssistance from "./pages/GSTAssistance";
import Footer from "./components/Footer";
import NewCompanyRegistration from "./pages/NewCompanyRegistration";
import MSMERegistration from "./pages/MSMERegistration";
import AnnualFilings from "./pages/AnnualFilings";
import QueryForm from "./pages/QueryForm";
import GEMPortalAssistance from "./pages/GeMPortalAssistance";
import { Toaster } from "react-hot-toast";
import TReDSAssistance from "./pages/TReDSAssistance";
import MSMEFinance from "./pages/MSMEFinance";
import AccountingCostManagement from "./pages/AccountingCostManagement";
import GSTCompliances from "./pages/GSTCompliances";
import GSTReconciliation from "./pages/GSTReconciliation";
import IncomeTaxPortal from "./pages/IncomeTaxPortal";
import PANApplication from "./pages/PANApplication";
import CompanyRegistration from "./features/CompanyRegistration";
import CompanyRight from "./features/CompanyRight";
import OPCRegistration from "./features/OPCRegistration";
import ScrollToTop from "./components/ScrollToTop";
import Project from "./pages/Project";
import About from "./pages/About";
import PMEGPScheme from "./pages/PMEGPScheme";
import MSMESchemesSubsidy from "./pages/MSMESchemesSubsidy";
import PMSScheme from "./pages/PMSScheme";
import MSECDPScheme from "./pages/MSECDPScheme";
import ASPIREScheme from "./pages/ASPIREScheme";
import PMVishwakarma from "./pages/PMVishwakarma";
import SRIFund from "./pages/ZedScheme";
import CGTMSE from "./pages/CGTMSE";
import ProcurementMarketingSupport from "./pages/ProcurementMarketingSupport";
import RAMPScheme from "./pages/RAMPScheme";
import ICScheme from "./pages/ICScheme";
import KGVYScheme from "./pages/KGVYScheme";
import MSMEChampions from "./pages/MSMEChampions";
import CompanyCompliance from "./pages/CompanyCompliance";
import Dashboard from "./admin/Dashboard";
import Login from "./admin/auth/Login";
import ProtectedRoute from "./admin/auth/ProtectedRoute";
import Expert from "./Experts/Expert";

export default function App() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");

  // ✅ Admin routes — user wala layout bilkul nahi dikhega
  if (isAdmin) {
    return (
      <>
        <Toaster position="top-right" />
        <ScrollToTop />
        <Routes>
          {/* Login page — koi bhi dekh sakta hai */}
          <Route path="/admin/login" element={<Login />} />

          {/* Dashboard — sirf logged in admin */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </>
    );
  }

  // ✅ Normal user layout
  return (
    <div className="bg-slate-100 min-h-screen font-sans flex flex-col">
      <Toaster position="top-right" />
      <ScrollToTop />
      <TopBar />

      <div className="pt-10 md:pt-11 flex flex-col flex-1">
        <Header />

        <div className="flex flex-col lg:flex-row p-4 md:p-6 gap-6 flex-1">
          <Sidebar />

          <div className="flex-1 bg-white p-6 rounded-lg shadow">
            <Routes>
              <Route path="/" element={<Home />} />
               <Route path="/talk-to-an-expert" element={<Expert />} />
              <Route path="/new-company-registration" element={<NewCompanyRegistration />} />
              <Route path="/company-name-availability" element={<CompanyNameAvailability />} />
              <Route path="/gst-assistance" element={<GSTAssistance />} />
              <Route path="/msme-registrations" element={<MSMERegistration />} />
              <Route path="/annual-filings" element={<AnnualFilings />} />
              <Route path="/query-form" element={<QueryForm />} />
              <Route path="/gem-portal-Assistance" element={<GEMPortalAssistance />} />
              <Route path="/treds-assistance" element={<TReDSAssistance />} />
              <Route path="/msme-finance" element={<MSMEFinance />} />
              <Route path="/accounting-cost-management" element={<AccountingCostManagement />} />
              <Route path="/gst-compliances" element={<GSTCompliances />} />
              <Route path="/gst-reconciliation" element={<GSTReconciliation />} />
              <Route path="/income-tax-portal" element={<IncomeTaxPortal />} />
              <Route path="/pan-application" element={<PANApplication />} />
              <Route path="/company-registration" element={<CompanyRegistration />} />
              <Route path="/CompanyRight" element={<CompanyRight />} />
              <Route path="/opc-registration" element={<OPCRegistration />} />
              <Route path="/project" element={<Project />} />
              <Route path="/about" element={<About />} />
              <Route path="/pmegp-scheme" element={<PMEGPScheme />} />
              <Route path="/msme-schemes-subsidy" element={<MSMESchemesSubsidy />} />
              <Route path="/pms-cdp" element={<PMSScheme />} />
              <Route path="/mse-cdp" element={<MSECDPScheme />} />
              <Route path="/libs" element={<ASPIREScheme />} />
              <Route path="/pm" element={<PMVishwakarma />} />
              <Route path="/zed" element={<SRIFund />} />
              <Route path="/udyam-registration" element={<CGTMSE />} />
              <Route path="/pms-scheme" element={<ProcurementMarketingSupport />} />
              <Route path="/tool-room" element={<RAMPScheme />} />
              <Route path="/procurement-policy" element={<ICScheme />} />
              <Route path="/incubation-support" element={<KGVYScheme />} />
              <Route path="/ipr-scheme" element={<MSMEChampions />} />
              <Route path="/company-compliance" element={<CompanyCompliance />} />
            </Routes>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}