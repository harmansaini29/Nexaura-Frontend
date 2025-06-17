import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaCheckCircle, FaHourglassHalf, FaUniversity, FaFileDownload } from "react-icons/fa";
import { Bar } from "react-chartjs-2";
import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const CollegeSchoolAccess = () => {
  const institutionData = [
    {
      id: "SCH001",
      institution: "Green Valley Public School",
      students: 340,
      lastUpdated: "2025-06-10",
      status: "Verified",
    },
    {
      id: "CLG014",
      institution: "City Engineering College",
      students: 1250,
      lastUpdated: "2025-06-12",
      status: "Pending",
    },
    {
      id: "CLG009",
      institution: "St. Xavier’s College",
      students: 980,
      lastUpdated: "2025-06-11",
      status: "Verified",
    },
    {
      id: "SCH002",
      institution: "Riverside High School",
      students: 410,
      lastUpdated: "2025-06-13",
      status: "Pending",
    },
  ];

  const [searchText, setSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredInstitutions = institutionData.filter((entry) => {
    const matchesSearch = entry.institution
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const matchesStatus =
      statusFilter === "All" || entry.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const verifiedCount = institutionData.filter((d) => d.status === "Verified").length;
  const pendingCount = institutionData.filter((d) => d.status === "Pending").length;

  const chartData = {
    labels: ["Verified", "Pending"],
    datasets: [
      {
        label: "Institutions",
        data: [verifiedCount, pendingCount],
        backgroundColor: ["#22c55e", "#facc15"],
        borderRadius: 6,
      },
    ],
  };

  const exportToCSV = () => {
    const headers = "ID,Institution,Students,Last Updated,Status\n";
    const rows = institutionData
      .map(
        (entry) =>
          `${entry.id},"${entry.institution}",${entry.students},${entry.lastUpdated},${entry.status}`
      )
      .join("\n");
    const csv = headers + rows;

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "institution_data.csv";
    link.click();
  };

  const toggleStatus = (id) => {
    const updated = institutionData.map((entry) =>
      entry.id === id
        ? {
            ...entry,
            status: entry.status === "Verified" ? "Pending" : "Verified",
          }
        : entry
    );
    // This just logs - in real system, you'd update backend state
    console.log("Updated Institution Status:", updated);
    alert("Status toggled for: " + id);
  };

  return (
    <section className="bg-white py-20 px-6" id="college-school-access">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div className="text-center mb-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h3 className="text-4xl font-bold text-slate-800 mb-4">
            Institution <span className="text-blue-600">Concession Access</span>
          </h3>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Manage, verify and download real-time concession data for students across schools and colleges.
          </p>
        </motion.div>

        {/* Chart and Download */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6">
          <div className="w-full md:w-1/2">
            <Bar data={chartData} options={{ responsive: true, plugins: { legend: { display: false } } }} />
          </div>
          <div>
            <button onClick={exportToCSV} className="bg-sky-600 hover:bg-sky-700 text-white font-medium px-5 py-2 rounded-md flex items-center gap-2 shadow">
              <FaFileDownload /> Export CSV
            </button>
          </div>
        </div>

        {/* Filter & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <div className="relative w-full md:w-1/2">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-100"
            />
          </div>
          <div className="flex gap-2">
            {["All", "Verified", "Pending"].map((status) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`px-4 py-2 rounded text-sm font-medium transition ${
                  statusFilter === status
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto bg-slate-50 rounded-xl border border-slate-200 shadow">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 text-slate-800 text-[15px]">
              <tr>
                <th className="py-3 px-4 border-b">ID</th>
                <th className="py-3 px-4 border-b">Institution Name</th>
                <th className="py-3 px-4 border-b">Students</th>
                <th className="py-3 px-4 border-b">Last Updated</th>
                <th className="py-3 px-4 border-b">Status</th>
                <th className="py-3 px-4 border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredInstitutions.length > 0 ? (
                filteredInstitutions.map((entry) => (
                  <tr key={entry.id} className="hover:bg-slate-100 transition">
                    <td className="py-3 px-4 border-b">{entry.id}</td>
                    <td className="py-3 px-4 border-b">{entry.institution}</td>
                    <td className="py-3 px-4 border-b">{entry.students}</td>
                    <td className="py-3 px-4 border-b">{entry.lastUpdated}</td>
                    <td className="py-3 px-4 border-b">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                          entry.status === "Verified"
                            ? "bg-green-200 text-green-800"
                            : "bg-yellow-200 text-yellow-800"
                        }`}
                      >
                        {entry.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 border-b">
                      <button
                        onClick={() => toggleStatus(entry.id)}
                        className="text-blue-600 hover:underline text-sm"
                      >
                        Toggle Status
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="py-4 text-center text-gray-500">
                    No institutions found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer Hint */}
        <div className="mt-8 text-center text-gray-500 text-sm flex items-center justify-center gap-2">
          <FaUniversity className="text-blue-400" />
          <span>
            Admin login required to approve or edit institution records.
          </span>
        </div>
      </div>
    </section>
  );
};

export default CollegeSchoolAccess;
