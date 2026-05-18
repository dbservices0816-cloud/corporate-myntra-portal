import { statusMeta } from "./Mockdata";

const Statusbadge = ({ status }) => {
  const m = statusMeta[status] || statusMeta["Pending"];

  return (
    <span
      style={{
        background: m.bg,
        color: m.text,
        padding: "4px 10px",
        borderRadius: 20,
        fontSize: 12,
        fontWeight: 600,
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
      }}
    >
      {/* Dot */}
      <span
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: m.dot,
          display: "inline-block",
        }}
      />

      {status}
    </span>
  );
};

export default Statusbadge;