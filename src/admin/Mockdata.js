export const stats = [
  {
    label: "Total Queries",
    value: "248",
    change: "+12%",
    icon: "📋",
    accent: "#6366f1",
  },
  {
    label: "GST Registrations",
    value: "87",
    change: "+8%",
    icon: "🧾",
    accent: "#10b981",
  },
  {
    label: "MSME Filings",
    value: "63",
    change: "+5%",
    icon: "🏭",
    accent: "#f59e0b",
  },
  {
    label: "Pending Tasks",
    value: "14",
    change: "-3%",
    icon: "⏳",
    accent: "#ef4444",
  },
];

export const allQueries = [
  {
    id: 1,
    name: "Ramesh Kumar",
    service: "GST Registration",
    msg: "GST registration ke liye help chahiye",
    status: "Pending",
    date: "01 Apr 2026",
    phone: "9876543210",
  },
  {
    id: 2,
    name: "Sunita Sharma",
    service: "MSME Registration",
    msg: "MSME apply karna hai urgently",
    status: "Done",
    date: "31 Mar 2026",
    phone: "9123456780",
  },
  {
    id: 3,
    name: "Ajay Verma",
    service: "Company Registration",
    msg: "Private limited company register karni hai",
    status: "In Progress",
    date: "30 Mar 2026",
    phone: "9988776655",
  },
  {
    id: 4,
    name: "Priya Singh",
    service: "Annual Filing",
    msg: "Annual return filing pending hai",
    status: "Done",
    date: "29 Mar 2026",
    phone: "9001122334",
  },
  {
    id: 5,
    name: "Manoj Tiwari",
    service: "PAN Application",
    msg: "New PAN card apply karna hai",
    status: "Pending",
    date: "28 Mar 2026",
    phone: "8877665544",
  },
  {
    id: 6,
    name: "Kavita Rao",
    service: "GEM Portal",
    msg: "GEM portal registration me issue aa raha hai",
    status: "In Progress",
    date: "27 Mar 2026",
    phone: "7766554433",
  },
];

export const navItems = [
  { id: "overview", label: "Overview", icon: "▦" },
  { id: "queries", label: "All Queries", icon: "≡" },
  { id: "settings", label: "Settings", icon: "⚙" },
];

export const statusMeta = {
  Pending: {
    bg: "#fef3c7",
    text: "#92400e",
    dot: "#f59e0b",
  },
  Done: {
    bg: "#d1fae5",
    text: "#065f46",
    dot: "#10b981",
  },
  "In Progress": {
    bg: "#dbeafe",
    text: "#1e3a8a",
    dot: "#3b82f6",
  },
};