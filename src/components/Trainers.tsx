import { Award, ArrowUpRight, Zap } from "lucide-react";
import { TRAINERS } from "../data";
import { Trainer } from "../types";
import { motion } from "motion/react";

export default function Trainers() {
  return (
    <section id="trainers" className="py-24 bg-[#FAF9F9] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center gap-1 bg-gray-100 border border-gray-200 px-3 py-1 rounded-full mb-4 text-xs font-semibold tracking-wider text-gray-600 uppercase">
            <span>✦ CO-FOUNDERS & ELITE COACHING</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#1A1A1A] tracking-tight mb-4">
            Meet the Builders of Body By Inches
          </h2>
          <p className="text-gray-500 max-w-lg text-sm sm:text-base">
            Certified biomechanics experts and sports science leaders holding master certifications in athlete development.
          </p>
        </motion.div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TRAINERS.map((trainer: Trainer, index: number) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={trainer.id}
              className="group bg-white rounded-[24px] overflow-hidden border border-gray-200/50 hover:border-gray-300 shadow-sm hover:shadow-[0_24px_50px_-15px_rgba(0,0,0,0.07)] transition-all duration-300 flex flex-col h-full"
            >
              {/* Photo Container */}
              <div className="relative aspect-square overflow-hidden bg-gray-50">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover object-center scale-100 group-hover:scale-104 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay details */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10" />
              </div>

              {/* Core Info details always visible */}
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-[11px] font-mono tracking-wider font-extrabold text-amber-600 uppercase mb-1">
                  {trainer.specialty}
                </span>
                <h3 className="font-display font-black text-lg text-gray-900 mb-2">
                  {trainer.name}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm mb-4 leading-relaxed font-medium">
                  {trainer.bio}
                </p>

                {/* Certifications and credentials tag format */}
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <span className="text-[10px] font-mono tracking-wider font-bold text-gray-400 block mb-2 uppercase">
                    Credentials & Licenses
                  </span>
                  
                  <div className="flex flex-wrap gap-1.5">
                    {trainer.certifications.map((cert, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center gap-1 bg-gray-50 border border-gray-200 text-gray-700 text-[10px] font-bold px-2.5 py-1 rounded-md"
                      >
                        <Zap className="w-2.5 h-2.5 text-amber-500 fill-amber-500/15" />
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
