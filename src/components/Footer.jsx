import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-6 mt-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} NEXAURA. All rights reserved.
        </p>
        <div className="flex gap-4 text-sm">
          <a href="#privacy" className="hover:text-white transition">Privacy</a>
          <a href="#terms" className="hover:text-white transition">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
