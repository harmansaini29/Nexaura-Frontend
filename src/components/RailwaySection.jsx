import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaTrain, FaDatabase, FaCloudUploadAlt, FaCheckCircle, FaInfoCircle } from "react-icons/fa";
import { Tooltip } from "react-tooltip"

const RailwayIntegration = () => {
  const [regionPackets, setRegionPackets] = useState({
    North: {
      total: 5,
      sent: 0,
      approved: 0,
      cities: ["Delhi", "Chandigarh", "Lucknow"]
    },
    South: {
      total: 3,
      sent: 0,
      approved: 0,
      cities: ["Chennai", "Bangalore", "Hyderabad"]
    },
    East: {
      total: 2,
      sent: 0,
      approved: 0,
      cities: ["Kolkata", "Patna", "Bhubaneswar"]
    },
    West: {
      total: 2,
      sent: 0,
      approved: 0,
      cities: ["Mumbai", "Ahmedabad", "Jaipur"]
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setRegionPackets((prev) => {
        const newState = { ...prev };
        for (let region in newState) {
          if (newState[region].sent < newState[region].total) {
            newState[region].sent++;
            break;
          } else if (newState[region].approved < newState[region].sent) {
            newState[region].approved++;
            break;
          }
        }
        return { ...newState };
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getTotals = () => {
    let total = 0, sent = 0, approved = 0;
    Object.values(regionPackets).forEach((r) => {
      total += r.total;
      sent += r.sent;
      approved += r.approved;
    });
    return { total, sent, approved };
  };

  const { total, sent, approved } = getTotals();
  const pending = total - sent;
  const awaitingApproval = sent - approved;

  return (
    <section className="bg-white dark:bg-slate-900 py-20 px-6" id="railways">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4 flex justify-center items-center gap-3">
            <FaTrain className="text-blue-600 dark:text-blue-400" />
            Railway Integration
          </h3>
          <p className="text-gray-600 dark:text-slate-300 max-w-3xl mx-auto mb-8 text-lg">
            NEXAURA securely transmits concession tickets in data packets to Indian Railways. Each packet contains up to 1000 student concessions, grouped by region and manually dispatched and approved before delivery confirmation.
          </p>
        </motion.div>

        {/* Region Packet Status */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {Object.entries(regionPackets).map(([region, data]) => (
            <motion.div
              key={region}
              className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl shadow p-4 text-center hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h4 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-2">
                {region}
              </h4>
              <p className="text-sm text-gray-700 dark:text-slate-300">Total: {data.total}</p>
              <p className="text-sm text-yellow-500">Sent: {data.sent}</p>
              <p className="text-sm text-green-500">Approved: {data.approved}</p>
              <p className="text-xs text-gray-500 dark:text-slate-400 mt-2">
                Cities: {data.cities.join(", ")}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Overall Status */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {[
            { label: "Total Packets", value: total },
            { label: "Sent", value: sent },
            { label: "Approved", value: approved },
            { label: "Pending", value: pending },
            { label: "Awaiting Approval", value: awaitingApproval },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl shadow px-5 py-3 min-w-[120px] text-center hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-xl font-bold text-blue-600 dark:text-blue-400">
                {item.value}
              </p>
              <p className="text-sm text-gray-700 dark:text-slate-300 mt-1 flex items-center justify-center gap-1">
                {item.label}
                <FaInfoCircle className="text-gray-400" title={item.label} />
              </p>
            </motion.div>
          ))}
        </div>

        {/* Live Packet Transmission Animation */}
        <div className="mt-14">
          <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Live Packet Transmission</h4>
          <div className="relative w-full max-w-4xl mx-auto h-32 bg-gradient-to-r from-blue-300 via-sky-500 to-blue-600 dark:from-slate-700 dark:via-blue-700 dark:to-slate-900 rounded-3xl overflow-hidden shadow-inner border-4 border-blue-200 dark:border-slate-700">
            <motion.div
              className="absolute top-0 left-0 h-full bg-cyan-200/30 backdrop-blur-md rounded-r-full"
              initial={{ width: 0 }}
              animate={{ width: `${(sent / total) * 100}%` }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute top-0 left-0 h-full bg-green-300/20 rounded-r-full"
              initial={{ width: 0 }}
              animate={{ width: `${(approved / total) * 100}%` }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />
            <div className="absolute inset-0 flex items-center justify-between px-4 text-white text-sm font-medium">
              <span><FaCloudUploadAlt className="inline mr-1" /> Sent</span>
              <span><FaCheckCircle className="inline mr-1" /> Approved</span>
            </div>
          </div>

          {/* Manual Control */}
          <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              className="bg-gradient-to-br from-slate-200 via-slate-100 to-white dark:from-slate-800 dark:via-slate-700 dark:to-slate-900 p-6 rounded-xl shadow-md border border-slate-300 dark:border-slate-700"
              whileHover={{ scale: 1.03 }}
            >
              <h5 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Manual Railway Server Access</h5>
              <p className="text-sm text-gray-600 dark:text-slate-400 mb-4">
                Initiate secure manual transfer of verified packets to Indian Railways server with elevated credentials.
              </p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="bg-gradient-to-r from-sky-500 to-sky-700 hover:from-sky-600 hover:to-sky-800 text-white font-medium px-6 py-2 rounded-full transition duration-300 shadow-lg"
                onClick={() => alert("Manual API access to railway servers initiated.")}
              >
                Access Railway Server
              </motion.button>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-indigo-200 via-purple-100 to-white dark:from-indigo-700 dark:via-purple-800 dark:to-slate-900 p-6 rounded-xl shadow-md border border-slate-300 dark:border-slate-700"
              whileHover={{ scale: 1.03 }}
            >
              <h5 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Manual Entry Tools</h5>
              <p className="text-sm text-gray-600 dark:text-slate-400 mb-4">
                Use these manual tools to upload region-wise data packets, verify concessions, or reinitiate server requests.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <motion.button whileHover={{ scale: 1.05 }} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition shadow-md">
                  Upload Packet
                </motion.button>
                <motion.button whileHover={{ scale: 1.05 }} className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition shadow-md">
                  Verify Region Data
                </motion.button>
                <motion.button whileHover={{ scale: 1.05 }} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition shadow-md">
                  Resend to Railway
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RailwayIntegration;
