import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Overviewtab from "./Overviewtab";
import Queriestab from "./Queriestab";
import Settingstab from "./Settingstab";

const tabTitles = {
  overview: { title: "Dashboard Overview", sub: "Aaj ka summary dekhein" },
  queries: { title: "All Queries", sub: "Saare submissions manage karein" },
  settings: { title: "Settings", sub: "Admin profile aur preferences" },
};

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("isAdmin");
    navigate("/");
  };

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#0f172a",
        fontFamily: "'Segoe UI', system-ui, sans-serif",
      }}
    >
      {/* Sidebar */}
      <Sidebar active={activeTab} setActive={setActiveTab} onLogout={handleLogout} />

      {/* Main Content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>

        {/* Topbar */}
        <div
          style={{
            padding: "20px 32px",
            borderBottom: "1px solid #1e293b",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "#0f172a",
            position: "sticky",
            top: 0,
            zIndex: 10,
          }}
        >
          {/* Title */}
          <div>
            <div style={{ fontSize: 22, fontWeight: 800, color: "#f1f5f9", letterSpacing: -0.5 }}>
              {tabTitles[activeTab].title}
            </div>
            <div style={{ fontSize: 13, color: "#475569", marginTop: 2 }}>
              {tabTitles[activeTab].sub}
            </div>
          </div>

          {/* Admin Avatar */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 16,
                color: "#fff",
                fontWeight: 700,
              }}
            >
              A
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#e2e8f0" }}>Admin</div>
              <div style={{ fontSize: 11, color: "#475569" }}>Super User</div>
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div style={{ flex: 1, padding: "28px 32px", overflowY: "auto" }}>
          {activeTab === "overview" && <Overviewtab />}
          {activeTab === "queries" && <Queriestab />}
          {activeTab === "settings" && <Settingstab />}
        </div>

      </div>
    </div>
  );
};

export default Dashboard;