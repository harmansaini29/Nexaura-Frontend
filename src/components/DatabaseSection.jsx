import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaDatabase,
  FaCloud,
  FaSyncAlt,
  FaShieldAlt,
  FaProjectDiagram,
  FaTools,
  FaFileAlt,
  FaClipboardList,
  FaChevronDown,
  FaChevronUp,
  FaLock,
} from "react-icons/fa";

const logs = [
  { ticketId: "TXN001", from: "St. Xavier’s College", to: "Indian Railways", timestamp: "2025-06-15 14:32", status: "Sent" },
  { ticketId: "TXN002", from: "Green Valley Public School", to: "Indian Railways", timestamp: "2025-06-15 14:45", status: "Sent" },
  { ticketId: "TXN003", from: "Indian Railways", to: "City Engineering College", timestamp: "2025-06-15 15:10", status: "Approved" },
  { ticketId: "TXN004", from: "Indian Railways", to: "St. Xavier’s College", timestamp: "2025-06-15 15:25", status: "Rejected" },
];

const DatabaseSection = () => {
  const [showLogs, setShowLogs] = useState(true);
  const [statusFilter, setStatusFilter] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");

  const filteredLogs =
    statusFilter === "All" ? logs : logs.filter((log) => log.status === statusFilter);

  const handleAccessClick = () => setShowModal(true);

  const handleLogin = () => {
    if (username === "admin" && password === "1234") {
      window.open("https://nexaura-database.net/access", "_blank"); // Replace with actual URL
      setShowModal(false);
      setUsername("");
      setPassword("");
      setAuthError("");
    } else {
      setAuthError("Invalid credentials. Please try again.");
    }
  };

  return (
    <section className="bg-slate-50 dark:bg-slate-900 py-20 px-6" id="database">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center items-center gap-3 mb-4 text-slate-800 dark:text-white">
            <FaDatabase className="text-3xl text-blue-600 dark:text-blue-400" />
            <h3 className="text-3xl md:text-4xl font-bold">Database Connectivity</h3>
          </div>
          <p className="text-slate-600 dark:text-slate-300 max-w-3xl mx-auto text-[17px] mb-10">
            Enable secure and fast communication between Indian Railways and educational institutions using our cloud-backed, API-powered system.
          </p>
        </motion.div>

        {/* Feature List */}
        <motion.div
          className="bg-white dark:bg-slate-800 rounded-xl shadow-lg max-w-4xl mx-auto text-left p-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <ul className="space-y-5 text-slate-700 dark:text-slate-200 text-[16px] leading-relaxed">
            <li className="flex items-start gap-3"><FaSyncAlt className="mt-1 text-blue-500" />Real-time data sync between railways and institutions</li>
            <li className="flex items-start gap-3"><FaCloud className="mt-1 text-purple-500" />Cloud-native, multi-region database setup</li>
            <li className="flex items-start gap-3"><FaShieldAlt className="mt-1 text-green-500" />Secure, token-based API communication</li>
            <li className="flex items-start gap-3"><FaProjectDiagram className="mt-1 text-amber-500" />Modular architecture for scalable integration</li>
            <li className="flex items-start gap-3"><FaTools className="mt-1 text-pink-500" />Tools for export/import, diagnostics, and analytics</li>
            <li className="flex items-start gap-3"><FaFileAlt className="mt-1 text-indigo-500" />Full logging for secure audit trails</li>
            <li className="flex items-start gap-3"><FaClipboardList className="mt-1 text-rose-500" />Dashboard access to ticket status & history</li>
          </ul>
        </motion.div>

        {/* Controls */}
        <div className="mt-12 flex flex-col sm:flex-row justify-between items-center gap-4">
          <button
            onClick={() => setShowLogs(!showLogs)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition"
          >
            {showLogs ? <FaChevronUp /> : <FaChevronDown />}
            {showLogs ? "Hide Logs" : "Show Logs"}
          </button>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border border-slate-300 dark:border-slate-600 rounded px-3 py-2 text-sm bg-white dark:bg-slate-800 dark:text-white"
          >
            <option value="All">All</option>
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
            <option value="Sent">Sent</option>
          </select>
        </div>

        {/* Logs Table */}
        {showLogs && (
          <motion.div
            className="mt-8 overflow-x-auto rounded-lg shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <table className="min-w-full text-sm text-left bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600">
              <thead className="bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200">
                <tr>
                  <th className="py-3 px-4 border-b">Ticket ID</th>
                  <th className="py-3 px-4 border-b">From</th>
                  <th className="py-3 px-4 border-b">To</th>
                  <th className="py-3 px-4 border-b">Time</th>
                  <th className="py-3 px-4 border-b">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredLogs.map((log, index) => (
                  <tr key={index} className="hover:bg-slate-50 dark:hover:bg-slate-700 transition">
                    <td className="py-3 px-4 border-b dark:border-slate-600 text-slate-800 dark:text-white">{log.ticketId}</td>
                    <td className="py-3 px-4 border-b dark:border-slate-600 text-slate-700 dark:text-slate-200">{log.from}</td>
                    <td className="py-3 px-4 border-b dark:border-slate-600 text-slate-700 dark:text-slate-200">{log.to}</td>
                    <td className="py-3 px-4 border-b dark:border-slate-600 text-slate-700 dark:text-slate-300">{log.timestamp}</td>
                    <td className="py-3 px-4 border-b dark:border-slate-600">
                      <span className={`inline-block px-2 py-1 rounded text-xs font-semibold ${
                        log.status === "Approved"
                          ? "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100"
                          : log.status === "Rejected"
                          ? "bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100"
                          : "bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100"
                      }`}>
                        {log.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        )}

        {/* Access Button */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <button
            onClick={handleAccessClick}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg shadow-md transition duration-300"
          >
            <FaLock className="text-white text-lg" />
            Access Database Server
          </button>
        </motion.div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-xl max-w-md w-full p-6 relative z-10">
              <h4 className="text-lg font-semibold mb-2 text-slate-800 dark:text-white">Security Check</h4>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Enter credentials to access the secured database server. admin-pass:1234
              </p>

              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full mb-3 px-4 py-2 border rounded bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-600 text-slate-800 dark:text-white"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mb-3 px-4 py-2 border rounded bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-600 text-slate-800 dark:text-white"
              />

              {authError && (
                <p className="text-sm text-red-500 mb-3">{authError}</p>
              )}

              <div className="flex justify-end gap-3 mt-4">
                <button onClick={() => setShowModal(false)} className="px-4 py-2 text-slate-600 dark:text-white hover:underline">
                  Cancel
                </button>
                <button
                  onClick={handleLogin}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Proceed
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DatabaseSection;
