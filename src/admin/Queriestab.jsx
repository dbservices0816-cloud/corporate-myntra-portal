import { useState, useEffect } from "react";
import Statusbadge from "./Statusbadge";

const Queriestab = () => {
  const [queries, setQueries] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  const fetchQueries = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/query");
      const data = await res.json();

      if (data.success) {
        const formatted = data.data.map((q) => ({
          id: q._id,
          name: q.name,
          phone: q.phone,
          service: q.message,
          status: "Pending",
          date: new Date(q.createdAt).toLocaleDateString(),
        }));

        setQueries(formatted);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQueries();
  }, []);

  const filtered = queries.filter((q) => {
    const matchSearch =
      q.name.toLowerCase().includes(search.toLowerCase()) ||
      q.service.toLowerCase().includes(search.toLowerCase());

    const matchFilter = filter === "All" || q.status === filter;

    return matchSearch && matchFilter;
  });

  return (
    <div className="text-white">
      
      {/* 🔍 Toolbar */}
      <div className="flex flex-wrap gap-3 mb-6">
        
        <input
          type="text"
          placeholder="Search by name or service..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 w-64"
        />

        {["All", "Pending", "In Progress", "Done"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition 
              ${filter === f 
                ? "bg-indigo-600 text-white shadow-md" 
                : "bg-slate-700 hover:bg-slate-600 text-gray-300"
              }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* 📋 Table */}
      <div className="bg-slate-900 rounded-xl border border-slate-700 overflow-hidden shadow-lg">
        
        {loading ? (
          <div className="p-6 text-gray-400">Loading...</div>
        ) : (
          <table className="w-full text-sm">
            
            {/* Header */}
            <thead className="bg-slate-800 text-gray-400 uppercase text-xs tracking-wide">
              <tr>
                <th className="px-4 py-3 text-left">#</th>
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left">Phone</th>
                <th className="px-4 py-3 text-left">Message</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Date</th>
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center py-6 text-gray-400">
                    No data found
                  </td>
                </tr>
              ) : (
                filtered.map((q, i) => (
                  <tr
                    key={q.id}
                    className="border-t border-slate-700 hover:bg-slate-800 transition"
                  >
                    <td className="px-4 py-3">{i + 1}</td>
                    <td className="px-4 py-3 font-medium">{q.name}</td>
                    <td className="px-4 py-3 text-gray-300">{q.phone}</td>
                    <td className="px-4 py-3 text-gray-300 max-w-xs truncate">
                      {q.service}
                    </td>
                    <td className="px-4 py-3">
                      <Statusbadge status={q.status} />
                    </td>
                    <td className="px-4 py-3 text-gray-400">{q.date}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Queriestab;