const Statcard = ({ stat }) => {
  return (
    <div
      style={{
        background: "#1e293b",
        border: "1px solid #334155",
        borderRadius: 16,
        padding: 20,
        color: "#fff",
        position: "relative",
      }}
    >
      {/* Top Section */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ fontSize: 24 }}>{stat.icon}</div>

        <span
          style={{
            fontSize: 12,
            padding: "2px 8px",
            borderRadius: 10,
           
            color: stat.change.startsWith("+") ? "#10b981" : "#ef4444",
          }}
        >
          {stat.change}
        </span>
      </div>

      {/* Value */}
      <div style={{ marginTop: 15 }}>
        <h2 style={{ margin: 0 }}>{stat.value}</h2>
        <p style={{ margin: 0, color: "#94a3b8" }}>{stat.label}</p>
      </div>

      {/* Bottom Accent Line */}
      <div
        style={{
          marginTop: 10,
          height: 3,
          borderRadius: 2,
          background: `linear-gradient(90deg, ${stat.accent}, transparent)`,
        }}
      />
    </div>
  );
};

export default Statcard;