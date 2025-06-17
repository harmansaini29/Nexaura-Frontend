import React from "react";
import { motion } from "framer-motion";
import { FaLock, FaCloud, FaSyncAlt, FaClipboardList } from "react-icons/fa";

const features = [
  {
    title: "Authentication",
    description: "Secure login and data access protocols for all partners.",
    icon: <FaLock className="text-sky-500 text-3xl mb-4" />,
  },
  {
    title: "Cloud Integration",
    description: "Seamless connectivity with cloud APIs and services.",
    icon: <FaCloud className="text-sky-500 text-3xl mb-4" />,
  },
  {
    title: "Real-Time Sync",
    description: "Instant data updates across connected companies.",
    icon: <FaSyncAlt className="text-sky-500 text-3xl mb-4" />,
  },
  {
    title: "Audit Logs",
    description: "Track every change and access point for transparency.",
    icon: <FaClipboardList className="text-sky-500 text-3xl mb-4" />,
  },
];

const PlatformHighlights = () => {
  return (
    <section className="bg-slate-100 py-20 px-6 text-center" id="highlights">
      <div className="max-w-6xl mx-auto">
        <motion.h3
          className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Platform Highlights
        </motion.h3>

        <motion.p
          className="text-slate-600 max-w-3xl mx-auto mb-12 text-base sm:text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Discover the core features that make{" "}
          <span className="font-semibold text-slate-800">NEXAURA</span> a
          secure, reliable, and scalable platform for inter-company
          connectivity.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white border border-slate-200 hover:border-sky-400 rounded-2xl shadow-md p-6 text-left transition-transform duration-300 hover:shadow-xl hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {feature.icon}
              <h4 className="text-lg font-semibold text-slate-800 mb-2">
                {feature.title}
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Optional CTA */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <button className="px-8 py-3 bg-sky-600 text-white font-medium rounded-xl shadow hover:bg-sky-700 transition duration-300">
            View Full Features
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PlatformHighlights;
