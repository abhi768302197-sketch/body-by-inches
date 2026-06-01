import { Check, Flame } from "lucide-react";
import { MEMBERSHIP_PLANS } from "../data";
import { MembershipPlan } from "../types";
import { motion } from "motion/react";

interface MembershipProps {
  onSelectPlan: (planName: string) => void;
}

export default function Membership({ onSelectPlan }: MembershipProps) {
  return (
    <section id="membership" className="py-24 bg-white relative">
      {/* Blurred background circles inspired by Omni AI mockup */}
      <div className="absolute bottom-1/4 left-10 w-[300px] h-[300px] bg-amber-50/10 rounded-full blur-[90px] pointer-events-none" />

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
            <span>✦ MEMBERSHIP PACKAGES</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#1A1A1A] tracking-tight mb-4">
            Transparent Pricing, Peak Results
          </h2>
          <p className="text-gray-500 max-w-lg text-sm sm:text-base">
            Configure your fitness journey with our flexible membership structures. Flat pricing with zero hidden fees.
          </p>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
          {MEMBERSHIP_PLANS.map((plan: MembershipPlan, index: number) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: plan.popular ? 1.02 : 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={plan.id}
              className={`relative rounded-[28px] p-8 border transition-all duration-300 flex flex-col h-full bg-white z-10 ${
                plan.popular
                  ? "border-[#1A1A1A] shadow-[0_24px_50px_-12px_rgba(26,26,26,0.12)]"
                  : "border-gray-200 hover:border-gray-300 hover:shadow-md"
              }`}
            >
              {/* Card Badge */}
              {plan.badge && (
                <span
                  className={`absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] font-extrabold uppercase tracking-widest font-mono shadow-sm ${
                    plan.popular
                      ? "bg-amber-500 text-black animate-pulse"
                      : "bg-[#1A1A1A] text-white"
                  }`}
                >
                  {plan.popular && <Flame className="w-3.5 h-3.5 fill-current" />}
                  {plan.badge}
                </span>
              )}

              {/* Plan name & Cost */}
              <div className="mb-6 mt-2">
                <h3 className="font-display font-extrabold text-xl text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 min-h-[40px]">
                  {plan.description}
                </p>
                
                <div className="flex items-baseline gap-1.5 border-b border-gray-100 pb-5">
                  <span className="font-display font-black text-4xl sm:text-5xl text-[#1A1A1A]">
                    {plan.price}
                  </span>
                  <span className="text-gray-500 text-sm font-semibold">
                    / {plan.billingPeriod}
                  </span>
                </div>
              </div>

              {/* Feature List */}
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="p-0.5 rounded-full bg-gray-100 text-gray-800 flex items-center justify-center mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-gray-600 text-[13px] sm:text-sm font-medium">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Buy Button */}
              <button
                onClick={() => onSelectPlan(plan.name)}
                className={`w-full py-4 px-4 rounded-xl font-bold tracking-tight text-center text-sm transition-all duration-300 cursor-pointer ${
                  plan.popular
                    ? "bg-[#1A1A1A] text-white hover:bg-amber-500 hover:text-black shadow-lg shadow-black/10"
                    : "bg-gray-100 hover:bg-[#1A1A1A] hover:text-white text-gray-800"
                }`}
              >
                Choose {plan.name === "Essential Trial Session" ? "Trial" : "Plan"}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
