import { navItems } from "./Mockdata";

const Sidebar = ({ active, setActive, onLogout }) => {
  return (
    <div
      style={{
        width: 220,
        minHeight: "100vh",
        background: "#0f172a",
        borderRight: "1px solid #1e293b",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Logo */}
      <div style={{ padding: 20, borderBottom: "1px solid #1e293b" }}>
        <h3 style={{ margin: 0 }}>Admin Panel</h3>
        <p style={{ fontSize: 12, color: "#94a3b8" }}>MSME Services</p>
      </div>

      {/* Navigation */}
      <div style={{ padding: 10 }}>
        {navItems.map((item) => {
          const isActive = active === item.id;
          return (
            <div
              key={item.id}
              onClick={() => setActive(item.id)}
              style={{
                padding: "10px 15px",
                marginBottom: 5,
                borderRadius: 8,
                cursor: "pointer",
                background: isActive ? "#6366f1" : "transparent",
                color: isActive ? "#fff" : "#94a3b8",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <span>{item.icon}</span>
              {item.label}
            </div>
          );
        })}
      </div>

      {/* Bottom */}
      <div
        style={{
          marginTop: "auto",
          padding: 10,
          borderTop: "1px solid #1e293b",
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        {/* Logout */}
        <button
          onClick={onLogout}
          style={{
            width: "100%",
            padding: "10px 15px",
            borderRadius: 8,
            border: "none",
            background: "#450a0a",
            color: "#ef4444",
            fontSize: 14,
            fontWeight: 600,
            cursor: "pointer",
            textAlign: "left",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          🚪 Logout
        </button>

        {/* ✅ FIXED Back to site */}
        <a
          href="/"
          style={{
            color: "#94a3b8",
            textDecoration: "none",
            fontSize: 14,
            padding: "10px 15px",
          }}
        >
          ← Back to Site
        </a>
      </div>
    </div>
  );
};

export default Sidebar;