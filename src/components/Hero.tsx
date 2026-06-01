import { ArrowUpRight, Sparkles, Play } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onJoinClick: () => void;
  onExploreClick: () => void;
}

export default function Hero({ onJoinClick, onExploreClick }: HeroProps) {
  // Safe container and item staggered child config
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 flex flex-col items-center justify-center overflow-hidden bg-[#F9F9F9]"
    >
      {/* Omni AI Inspired Subtle Blurred Circles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-amber-100/30 to-purple-100/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-gradient-to-tr from-blue-100/20 to-teal-100/20 rounded-full blur-[100px] pointer-events-none -z-10" />
      
      {/* Absolute center spherical design reminiscent of the Omni AI dome/orb */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] md:w-[640px] md:h-[640px] rounded-full border border-gray-200/40 bg-gradient-to-b from-white/60 to-gray-50/20 shadow-[0_32px_120px_-20px_rgba(0,0,0,0.06)] pointer-events-none -z-10 flex items-center justify-center p-8"
      >
        {/* Secondary inner orbital rings */}
        <div className="w-[85%] h-[85%] rounded-full border border-dashed border-gray-300/30 flex items-center justify-center animate-[spin_120s_linear_infinite]">
          <div className="w-[70%] h-[70%] rounded-full bg-radial-gradient from-white to-gray-50/10 border border-gray-200/20 shadow-inner flex items-center justify-center">
            {/* The soft glass sphere */}
            <div className="w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-white/80 via-white/40 to-transparent shadow-[inset_-4px_-4px_16px_rgba(0,0,0,0.02)] backdrop-blur-sm" />
          </div>
        </div>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto px-6 text-center z-10 flex flex-col items-center"
      >
        {/* Dynamic Badge - AI Practice-like Pill */}
        <motion.div 
          variants={itemVariants}
          className="inline-flex items-center gap-1.5 bg-white border border-gray-200 shadow-sm px-3.5 py-1.5 rounded-full mb-8 text-xs font-semibold tracking-wider uppercase text-gray-700"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500/10" />
          <span>Premium Fitness Experience</span>
        </motion.div>

        {/* Large Headline */}
        <motion.h1 
          variants={itemVariants}
          className="font-display font-extrabold text-[#1A1A1A] tracking-tight leading-[1.1] text-4xl sm:text-5xl md:text-6xl max-w-3xl mb-6"
        >
          Sculpt Your Vision. <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-[#1A1A1A] to-amber-600">
            Elevate Your Limits.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          variants={itemVariants}
          className="text-gray-600 text-lg sm:text-xl max-w-2xl mb-10 leading-relaxed font-normal"
        >
          Welcome to <span className="font-semibold text-[#1A1A1A]">Body By Inches</span>, 
          Sector 21A, Noida. An architectural masterclass in expert-guided performance, 
          state-of-the-art weights, and physical transformations.
        </motion.p>

        {/* Professional Call To Action layout */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 w-full max-w-md"
        >
          <button
            onClick={onJoinClick}
            className="w-full sm:w-auto bg-[#1A1A1A] text-white font-semibold px-8 py-4 rounded-xl border border-transparent shadow-[0_12px_24px_-8px_rgba(26,26,26,0.25)] hover:bg-amber-500 hover:text-black hover:shadow-[0_12px_24px_-8px_rgba(245,158,11,0.3)] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Choose Your Plan</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
          </button>
          
          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto bg-white hover:bg-gray-100 text-[#1A1A1A] font-semibold px-8 py-4 rounded-xl border border-gray-200 shadow-sm transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Book A Guided Trial</span>
            <span className="inline-block p-0.5 rounded-full bg-gray-100 group-hover:bg-amber-100 transition-colors">
              <Play className="w-3 h-3 fill-current text-gray-500 group-hover:text-amber-600" />
            </span>
          </button>
        </motion.div>

        {/* Hero Bottom Key Metrics & Security Flags */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 py-6 px-8 bg-white/70 border border-gray-200/55 backdrop-blur-sm rounded-2xl w-full max-w-3xl shadow-sm"
        >
          <div className="text-center">
            <span className="block font-display font-extrabold text-2xl sm:text-3xl text-gray-900 leading-none mb-1">
              5,000+
            </span>
            <span className="text-xs font-mono tracking-wider uppercase text-gray-500 font-medium">
              Sq. Ft. Facility
            </span>
          </div>
          <div className="text-center border-l border-gray-200/50">
            <span className="block font-display font-extrabold text-2xl sm:text-3xl text-gray-900 leading-none mb-1">
              100%
            </span>
            <span className="text-xs font-mono tracking-wider uppercase text-gray-500 font-medium">
              Certified Staff
            </span>
          </div>
          <div className="text-center border-l border-gray-200/50">
            <span className="block font-display font-extrabold text-2xl sm:text-3xl text-gray-900 leading-none mb-1">
              24/7
            </span>
            <span className="text-xs font-mono tracking-wider uppercase text-gray-500 font-medium">
              Keycard Access
            </span>
          </div>
          <div className="text-center border-l border-gray-200/50">
            <span className="block font-display font-extrabold text-2xl sm:text-3xl text-gray-900 leading-none mb-1">
              1-on-1
            </span>
            <span className="text-xs font-mono tracking-wider uppercase text-gray-500 font-medium">
              Goal Tracking
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* Modern Gym Hero Image Backdrop (Framing with negative spaces) */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full max-w-5xl px-6 mt-12 relative"
      >
        <div className="relative aspect-[21/9] sm:aspect-[16/7] md:aspect-[21/8] rounded-[24px] overflow-hidden border border-gray-200 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=80"
            alt="Body By Inches Premium Weights Area"
            className="w-full h-full object-cover object-center scale-102 hover:scale-105 transition-transform duration-700 pointer-events-none"
            referrerPolicy="no-referrer"
          />
          
          {/* Quick Info card placed on top of the image */}
          <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-white font-display font-bold text-lg md:text-xl leading-snug">
                Exclusive Gym Floor & Strength Rig
              </p>
              <p className="text-gray-300 text-xs md:text-sm">
                No overcrowding. Premium biomechanically optimized experience in Sector 21A, Noida.
              </p>
            </div>
            <a
              href="#why-choose"
              className="inline-flex items-center gap-1 bg-white/11 hover:bg-[#F59E0B] hover:text-black text-white text-xs font-semibold px-4 py-2.5 rounded-lg backdrop-blur-md transition-colors"
            >
              <span>Explore Features</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
