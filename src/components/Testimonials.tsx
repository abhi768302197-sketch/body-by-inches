import { Star, MessageSquareQuote, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  daysActive: number;
  highlight: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Aman Sen",
    role: "Sector 21A Member",
    content: "Body By Inches has completely changed my perception of fitness centers in Noida. The brand new Sector 21A facility features state-of-the-art Hammer Strength weights and the trainers actually understand biomechanics. Lost 8kg of body fat in exactly 3 months!",
    daysActive: 120,
    highlight: "Weight Loss & Conditioning"
  },
  {
    id: 2,
    name: "Rohan Verma",
    role: "Athlete & Powerlifter",
    content: "The lifting platforms and calibrated plates are top-notch. It’s an elite, non-crowded space where you can focus on functional muscular health and heavy training without ego. Highly recommend booking a trial slot.",
    daysActive: 90,
    highlight: "Strength Architecture"
  },
  {
    id: 3,
    name: "Meera Nair",
    role: "Corporate Executive",
    content: "Fabulous group sessions and very flexible timings. Being open from 6:00 AM straight to 10:00 PM fits my strict corporate schedule perfectly. The space is exceptionally clean, from the recovery showers to individual key lockers.",
    daysActive: 180,
    highlight: "Agility & Power Yoga"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#FAFAFA] border-t border-b border-gray-100 relative overflow-hidden">
      {/* Structural background orbs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] bg-gradient-to-tr from-amber-100/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center gap-1.5 bg-white border border-gray-200 px-3 py-1.5 rounded-full mb-4 text-xs font-semibold tracking-wider text-gray-500 uppercase font-mono shadow-sm">
            <MessageSquareQuote className="w-3.5 h-3.5 text-amber-500" />
            <span>COMMUNITY REVIEWS</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#1A1A1A] tracking-tight mb-4">
            Transformations That Speak
          </h2>
          <p className="text-gray-500 max-w-lg text-sm sm:text-base">
            Read first-hand accounts of personal breakthroughs and fitness transformations from verified Body By Inches members.
          </p>
        </motion.div>

        {/* Testimonials grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={t.id}
              className="bg-white border border-gray-200/60 rounded-[28px] p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative"
            >
              <div>
                <span className="inline-block bg-amber-50/80 text-amber-800 text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-amber-200/50 mb-6">
                  {t.highlight}
                </span>
                
                <p className="text-gray-600 text-sm sm:text-sm leading-relaxed mb-6 italic">
                  "{t.content}"
                </p>
              </div>

              <div className="border-t border-gray-100 pt-6 flex items-center justify-between">
                <div>
                  <h4 className="font-display font-extrabold text-sm text-gray-900 leading-snug">
                    {t.name}
                  </h4>
                  <p className="text-gray-400 text-xs font-medium font-mono">
                    {t.role}
                  </p>
                </div>
                <div className="text-right">
                  <span className="block font-semibold text-xs text-[#1A1A1A]">
                    {t.daysActive}+ Days
                  </span>
                  <span className="text-gray-400 text-[10px] uppercase tracking-wider font-mono">
                    Active Member
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Rating Section directly below testimonials */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto bg-white border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.02)] rounded-[24px] p-6 text-center flex flex-col sm:flex-row items-center justify-between gap-6 hover:border-amber-400 transition-colors duration-300"
        >
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-500 border border-amber-100 shrink-0">
              <Star className="w-6 h-6 fill-current" />
            </div>
            <div>
              <span className="block text-gray-400 text-[10px] font-mono font-bold uppercase tracking-widest leading-none mb-1.5">
                Verified Map Location
              </span>
              <h4 className="font-display font-extrabold text-[#1A1A1A] text-lg leading-tight">
                Google Reviews: 3.9/5 ⭐ (10 Reviews)
              </h4>
            </div>
          </div>
          <div className="flex flex-col items-center sm:items-end justify-center shrink-0">
            <div className="flex gap-0.5 text-amber-400 mb-1">
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 text-gray-300" />
            </div>
            <a
              href="https://maps.google.com/?q=Body+By+Inches+Gym+Sector+21A+Noida&ll=28.5990337,77.3457704"
              target="_blank"
              rel="noreferrer"
              className="text-[11px] font-mono text-amber-600 hover:text-amber-700 font-bold hover:underline transition-all uppercase tracking-wider inline-flex items-center gap-1.5"
            >
              <span>View Business profile</span>
              <ShieldCheck className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
