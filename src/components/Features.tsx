import { Dumbbell, Award, Clock, Users, LucideIcon } from "lucide-react";
import { FEATURES } from "../data";
import { motion } from "motion/react";

// Helper to resolve icon component dynamically and safely
const iconMap: Record<string, LucideIcon> = {
  Dumbbell: Dumbbell,
  ShieldAlert: Award,  // Handled safely here as fallback
  Clock: Clock,
  Users: Users
};

export default function Features() {
  return (
    <section id="why-choose" className="py-24 bg-white relative">
      {/* Backlighting effect */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-amber-50/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Category Pill Layout style */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center gap-1 bg-gray-100 border border-gray-200 px-3 py-1 rounded-full mb-4 text-xs font-semibold tracking-wider text-gray-600 uppercase">
            <span>✦ WHY CHOOSE US</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#1A1A1A] tracking-tight mb-4">
            Forged For Peak Performance
          </h2>
          <p className="text-gray-500 max-w-lg text-sm sm:text-base">
            Every feature at Body By Inches is built deliberately to guide and accelerate your physical transformation.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((item, index) => {
            // Safe Lucide Lookup
            const IconComponent = iconMap[item.iconName] || iconMap["ShieldAlert"] || Award;
            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={item.id}
                className="group relative bg-[#F9F9F9] hover:bg-white rounded-[24px] p-8 border border-gray-200/50 hover:border-gray-200 hover:shadow-[0_24px_48px_-15px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col items-start"
              >
                {/* Glow border overlay hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 rounded-[24px] transition-opacity duration-300 pointer-events-none" />

                {/* Styled icon container matching Omni AI aesthetics */}
                <div className="p-4 rounded-xl bg-white shadow-sm border border-gray-200/40 text-gray-900 group-hover:text-amber-600 group-hover:scale-105 transition-all duration-300 mb-6">
                  <IconComponent className="w-5 h-5 stroke-[2]" />
                </div>

                <h3 className="font-display font-bold text-[#1A1A1A] text-lg mb-3">
                  {item.title}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
