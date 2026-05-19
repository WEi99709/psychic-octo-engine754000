 "use client";

import { motion } from "framer-motion";

export default function AHCInteriorWebsite() {
  const services = [
    {
      title: "Residential Structural Engineering",
      desc: "Structural engineering solutions for custom homes, duplexes, granny flats, renovations, upper-storey additions and multi-unit residential developments.",
    },
    {
      title: "Commercial Structural Design",
      desc: "Engineering consultancy for commercial buildings, industrial warehouses, retail developments and mixed-use projects.",
    },
    {
      title: "Structural Alterations",
      desc: "Beam design, wall removals, structural openings and engineering support for renovation and modification works.",
    },
    {
      title: "Retaining Wall Engineering",
      desc: "Retaining wall design, excavation support, structural assessments and drainage coordination services.",
    },
    {
      title: "Construction Support",
      desc: "Construction stage inspections, builder coordination, engineering certification and practical site support.",
    },
    {
      title: "Engineering Reports",
      desc: "Structural inspections, dilapidation reports, engineer certifications and council compliance documentation.",
    },
  ];

  return (
    <main className="bg-white text-slate-900 font-sans">
      <section className="min-h-screen flex items-center justify-center bg-black text-white">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-5xl font-bold">AHC INTERIOR</h1>
          <p>Structural Engineering Consultancy</p>
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-10">Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="p-6 bg-slate-100 rounded-xl">
              <h3 className="font-bold mb-2">{s.title}</h3>
              <p className="text-sm text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
