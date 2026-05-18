import { useState } from "react";
import { useNavigate } from "react-router-dom";

// ✅ Seedha yahan password set karo
const ADMIN_PASSWORD = "msme@admin123";

export default function Login() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem("isAdmin", "true");
      navigate("/admin");
    } else {
      setError(true);
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <div style={{
      minHeight: "100vh", background: "#0f172a",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontFamily: "'Segoe UI', system-ui, sans-serif",
    }}>
      <div style={{
        background: "#1e293b", border: "1px solid #334155",
        borderRadius: 20, padding: "40px 36px", width: "100%", maxWidth: 380,
        animation: shake ? "shake 0.4s ease" : "none",
      }}>
        <style>{`
          @keyframes shake {
            0%,100%{transform:translateX(0)}
            20%{transform:translateX(-8px)}
            40%{transform:translateX(8px)}
            60%{transform:translateX(-6px)}
            80%{transform:translateX(6px)}
          }
        `}</style>

        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div style={{
            width: 56, height: 56, borderRadius: 16,
            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 26, margin: "0 auto 14px",
          }}>🔐</div>
          <div style={{ fontSize: 20, fontWeight: 800, color: "#f1f5f9" }}>Admin Access</div>
          <div style={{ fontSize: 13, color: "#475569", marginTop: 4 }}>MSME Services Panel</div>
        </div>

        <div style={{ marginBottom: 16 }}>
          <label style={{
            fontSize: 11, fontWeight: 700, color: "#64748b",
            textTransform: "uppercase", letterSpacing: 1,
            display: "block", marginBottom: 8,
          }}>
            Password
          </label>
          <input
            type="password"
            placeholder="Admin password daalo"
            value={password}
            onChange={e => { setPassword(e.target.value); setError(false); }}
            onKeyDown={e => e.key === "Enter" && handleLogin()}
            style={{
              width: "100%", padding: "12px 16px", borderRadius: 10,
              border: `1px solid ${error ? "#ef4444" : "#334155"}`,
              background: "#0f172a", color: "#f1f5f9", fontSize: 15,
              outline: "none", boxSizing: "border-box",
            }}
          />
          {error && (
            <div style={{ color: "#ef4444", fontSize: 12, marginTop: 6 }}>
              ❌ Galat password — dobara try karo
            </div>
          )}
        </div>

        <button
          onClick={handleLogin}
          style={{
            width: "100%", padding: "13px", borderRadius: 10, border: "none",
            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
            color: "#fff", fontSize: 15, fontWeight: 700, cursor: "pointer",
          }}
        >
          Login →
        </button>
      </div>
    </div>
  );
}