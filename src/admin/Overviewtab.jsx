  import { useEffect, useState } from "react";
  import { stats } from "./Mockdata";
  import Statcard from "./Statcard";

  // ─── Status Badge ─────────────────────────────────────────────────────────────
  const statusConfig = {
    Pending: {
      dot: "bg-amber-400",
      text: "text-amber-300",
      bg: "bg-amber-400/10 border border-amber-400/20",
    },
    Done: {
      dot: "bg-emerald-400",
      text: "text-emerald-300",
      bg: "bg-emerald-400/10 border border-emerald-400/20",
    },
    "In Progress": {
      dot: "bg-blue-400",
      text: "text-blue-300",
      bg: "bg-blue-400/10 border border-blue-400/20",
    },
  };

  function StatusBadge({ status }) {
    const cfg = statusConfig[status] || statusConfig["Pending"];

    return (
      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${cfg.bg} ${cfg.text}`}>
        <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
        {status || "Pending"}
      </span>
    );
  }

  // ─── Overview Tab ─────────────────────────────────────────────────────────────
  const OverviewTab = () => {
    const [queries, setQueries] = useState([]);
    const [loading, setLoading] = useState(true);

    // 🔥 API CALL
    useEffect(() => {
  const fetchQueries = async () => {
    try {
      const API_URL = import.meta.env.VITE_API_URL;

      const res = await fetch(`${API_URL}/api/query`);

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();

      if (Array.isArray(data)) {
        setQueries(data);
      } else if (Array.isArray(data.data)) {
        setQueries(data.data);
      } else if (Array.isArray(data.queries)) {
        setQueries(data.queries);
      } else {
        setQueries([]);
      }
    } catch (err) {
      console.error("API Error:", err);
      setQueries([]);
    } finally {
      setLoading(false);
    }
  };

  fetchQueries();
}, []);

    return (
      <div className="space-y-6">

        {/* ── Stats ───────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <Statcard key={i} stat={s} />
          ))}
        </div>

        {/* ── Table ───────────────────────────────────────── */}
        <div className="rounded-2xl overflow-hidden border border-slate-700/60 bg-slate-800/50 backdrop-blur-sm">

          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-700/60">
            <div>
              <h3 className="text-base font-bold text-slate-100">Recent Queries</h3>
              <p className="text-xs text-slate-500">Latest 5 submissions</p>
            </div>
            <span className="text-xs font-semibold text-indigo-400 bg-indigo-400/10 border border-indigo-400/20 px-3 py-1 rounded-full">
              Live
            </span>
          </div>

          {/* Loading */}
          {loading ? (
            <p className="p-6 text-slate-400">Loading...</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-900/50">
                    {["Name", "Service", "Message", "Status", "Date"].map((h) => (
                      <th key={h} className="px-6 py-3 text-left text-[11px] font-bold uppercase text-slate-500">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-700/40">
                  {queries.length === 0 ? (
                    <tr>
                      <td colSpan="5" className="text-center py-6 text-slate-500">
                        No data found
                      </td>
                    </tr>
                  ) : (
                    queries.slice(0, 5).map((q, i) => (
                      <tr key={q._id || i} className="hover:bg-slate-700/30">

                        {/* Name */}
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white text-xs">
                              {q.name?.charAt(0)?.toUpperCase() || "U"}
                            </div>
                            <span className="text-slate-200">
                              {q.name || "Unknown"}
                            </span>
                          </div>
                        </td>

                        {/* Service */}
                        <td className="px-6 py-4 text-slate-400">
                          {q.service || "—"}
                        </td>

                        {/* Message */}
                        <td className="px-6 py-4 max-w-[200px]">
                          <p className="truncate text-slate-400">
                            {q.msg || "—"}
                          </p>
                        </td>

                        {/* Status */}
                        <td className="px-6 py-4">
                          <StatusBadge status={q.status} />
                        </td>

                        {/* Date */}
                        <td className="px-6 py-4 text-slate-500 text-xs">
                          {q.createdAt
                            ? new Date(q.createdAt).toLocaleDateString()
                            : "—"}
                        </td>

                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}

          {/* Footer */}
          <div className="px-6 py-3 border-t border-slate-700/60">
            <p className="text-xs text-slate-600">
              Showing {Math.min(5, queries.length)} of {queries.length} total queries
            </p>
          </div>

        </div>
      </div>
    );
  };

  export default OverviewTab;