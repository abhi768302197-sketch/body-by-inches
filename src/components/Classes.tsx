import { useState } from "react";
import { Clock, User, ArrowRight, ShieldCheck } from "lucide-react";
import { CLASSES_PROGRAMS } from "../data";
import { ClassProgram } from "../types";
import { motion, AnimatePresence } from "motion/react";

interface ClassesProps {
  onBookClass: (className: string) => void;
}

export default function Classes({ onBookClass }: ClassesProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Strength", "Cardio", "Mind & Body", "Combat"];

  const filteredClasses = activeCategory === "All"
    ? CLASSES_PROGRAMS
    : CLASSES_PROGRAMS.filter(c => c.category === activeCategory);

  return (
    <section id="classes" className="py-24 bg-[#FAF9F9] relative overflow-hidden">
      {/* Blurred decorative backlights */}
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-sky-50/30 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <div className="inline-flex items-center gap-1 bg-gray-100 border border-gray-200 px-3 py-1 rounded-full mb-4 text-xs font-semibold tracking-wider text-gray-600 uppercase">
            <span>✦ TRAINING PROGRAMS</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#1A1A1A] tracking-tight mb-4">
            Curated Classes For Every Metric
          </h2>
          <p className="text-gray-500 max-w-lg text-sm sm:text-base">
            Explore focused structural exercises engineered to build strength, metabolic capacity, and absolute flexibility.
          </p>

          {/* Filtering Categories Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 bg-white border border-gray-200/80 rounded-2xl shadow-sm">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  activeCategory === category
                    ? "bg-[#1A1A1A] text-white shadow-md shadow-black/10"
                    : "text-gray-500 hover:text-[#1A1A1A] hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Classes Card Grid with AnimatePresence for filter fluidity */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredClasses.map((item: ClassProgram, index: number) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                key={item.id}
                className="group bg-white rounded-[24px] overflow-hidden border border-gray-200/60 shadow-sm hover:shadow-[0_24px_48px_-15px_rgba(0,0,0,0.08)] hover:border-gray-300 transition-all duration-300 flex flex-col h-full"
              >
                {/* Image Container with category badge */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <span className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm border border-gray-200 text-xs font-bold px-3 py-1.5 rounded-lg text-gray-800 uppercase tracking-widest font-mono">
                    {item.category}
                  </span>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-100" />
                </div>

                {/* Text Area */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-display font-extrabold text-[#1A1A1A] text-xl mb-2 group-hover:text-amber-600 transition-colors duration-200">
                    {item.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-6 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Training facts layout */}
                  <div className="mt-auto space-y-3 pt-4 border-t border-gray-100 text-xs font-semibold text-gray-600">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-400 stroke-[2.5]" />
                      <span>Duration:</span>
                      <span className="text-[#1A1A1A] ml-auto">{item.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-gray-400 stroke-[2.5]" />
                      <span>Trainer:</span>
                      <span className="text-[#1A1A1A] ml-auto">{item.trainerName}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-gray-400 stroke-[2.5]" />
                      <span>Timings:</span>
                      <span className="text-[#1A1A1A] ml-auto">{item.timing}</span>
                    </div>
                  </div>

                  {/* Instant Action button */}
                  <button
                    onClick={() => onBookClass(item.name)}
                    className="w-full mt-6 bg-gray-50 hover:bg-[#1A1A1A] hover:text-white text-gray-800 text-sm font-semibold py-3 px-4 rounded-xl border border-gray-200/85 hover:border-transparent transition-all duration-200 flex items-center justify-center gap-2 group/btn"
                  >
                    <span>Book Free Trial</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
