import { useState } from "react";

const Settingstab = () => {
  const [name, setName] = useState("Admin User");
  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("");
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2000);
  };

  return (
    <div style={{ maxWidth: 500 }}>
      
      <div
        style={{
          background: "#1e293b",
          padding: 20,
          borderRadius: 12,
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          gap: 15,
        }}
      >
        <h3>Profile Settings</h3>

        {/* Name */}
        <input
          type="text"
          placeholder="Admin Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />

        {/* Password */}
        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />

        {/* Button */}
        <button
          onClick={handleSave}
          style={{
            padding: "10px 20px",
            borderRadius: 8,
            border: "none",
            background: saved ? "#10b981" : "#6366f1",
            color: "#fff",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          {saved ? "✓ Saved!" : "Save Changes"}
        </button>
      </div>
    </div>
  );
};

const inputStyle = {
  padding: 10,
  borderRadius: 8,
  border: "1px solid #334155",
  background: "#0f172a",
  color: "#fff",
  outline: "none",
};

export default Settingstab;