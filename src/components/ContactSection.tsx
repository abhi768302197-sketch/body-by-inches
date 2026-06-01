import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, ArrowUpRight, Clock } from "lucide-react";
import { motion } from "motion/react";

interface ContactProps {
  preFilledSubject?: string;
  onClearPreFill?: () => void;
}

export default function ContactSection({ preFilledSubject, onClearPreFill }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    subject: "",
    message: ""
  });

  const [formValidation, setFormValidation] = useState({
    name: "",
    email: "",
    gender: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Update subject if user selected prefill (dynamic flow from membership/classes)
  useEffect(() => {
    if (preFilledSubject) {
      setFormData((prev) => ({
        ...prev,
        subject: `Inquiry: ${preFilledSubject}`
      }));
      // Smooth scroll to the form element
      const formEl = document.getElementById("contact-form-container");
      if (formEl) {
        formEl.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [preFilledSubject]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when typing
    if (formValidation[name as keyof typeof formValidation]) {
      setFormValidation((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleValidation = () => {
    let isValid = true;
    const errors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      errors.name = "Full Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = "Email Address is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email format";
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = "Please include a brief message or request";
      isValid = false;
    }

    setFormValidation(errors);
    return isValid;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!handleValidation()) return;

    setIsSubmitting(true);
    
    // Simulate API delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        gender: "",
        subject: "",
        message: ""
      });
      if (onClearPreFill) onClearPreFill();

      // Clear success banner after 6 seconds
      setTimeout(() => setSubmitSuccess(false), 6000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
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
            <span>✦ CONTACT REGISTRATION</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#1A1A1A] tracking-tight mb-4">
            Body By Inches - Sector 21A, Noida
          </h2>
          <p className="text-gray-500 max-w-lg text-sm sm:text-base">
            Have functional setup questions or need scheduling help? We are online to guide you into physical results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          
          {/* Left: Contact Info Info-blocks */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8 h-full">
            <div className="space-y-6">
              
              {/* Info blocks stack */}
              {[
                {
                  id: "support-email",
                  icon: <Mail className="w-5 h-5" />,
                  tag: "Email Support",
                  desc: "Reach out if you want to bring your practice into reality.",
                  link: "mailto:info@bodybyinches.com",
                  label: "info@bodybyinches.com"
                },
                {
                  id: "support-tel",
                  icon: <Phone className="w-5 h-5" />,
                  tag: "Direct Hotlines",
                  desc: "Ask regarding active slots or customized schedules.",
                  link: "tel:+919990856112",
                  label: "+91 99908 56112"
                },
                {
                  id: "support-address",
                  icon: <MapPin className="w-5 h-5" />,
                  tag: "Main Headquarter",
                  desc: null,
                  custom: (
                    <p className="text-gray-500 text-xs sm:text-sm mb-1 font-medium leading-relaxed">
                      Road, Block I, Sector 21A, <br />
                      Noida, Uttar Pradesh 201307, India <br />
                      (Google Maps Verified Location)
                    </p>
                  )
                },
                {
                  id: "support-hours",
                  icon: <Clock className="w-5 h-5 text-gray-800" />,
                  tag: "Operating Hours",
                  desc: null,
                  custom: (
                    <div className="space-y-1.5 text-xs sm:text-sm font-medium mt-2">
                      <div className="flex justify-between border-b border-gray-100 pb-1 text-gray-800">
                        <span>Mon – Sat:</span>
                        <span className="font-bold">6:00 AM – 10:00 PM</span>
                      </div>
                      <div className="flex justify-between text-rose-600 font-bold">
                        <span>Sunday:</span>
                        <span>CLOSED</span>
                      </div>
                    </div>
                  )
                }
              ].map((infoBlock, index) => (
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  key={infoBlock.id}
                  className="bg-[#FAF9F9] rounded-[24px] p-6 border border-gray-200/50 flex gap-5 items-start"
                >
                  <div className="p-3 bg-white text-gray-800 rounded-xl shadow-sm border border-gray-100 flex items-center justify-center">
                    {infoBlock.icon}
                  </div>
                  <div className="flex-1">
                    <span className="text-[11px] font-mono tracking-widest text-amber-600 uppercase font-bold block mb-1">
                      {infoBlock.tag}
                    </span>
                    {infoBlock.desc && (
                      <p className="text-gray-500 text-xs sm:text-sm mb-2 font-medium">
                        {infoBlock.desc}
                      </p>
                    )}
                    {infoBlock.link && (
                      <a
                        href={infoBlock.link}
                        className="font-display font-extrabold text-[#1A1A1A] text-base hover:text-amber-600 transition-colors inline-flex items-center gap-1 cursor-pointer"
                      >
                        <span>{infoBlock.label}</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                    {infoBlock.custom}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick whatsapp CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-6 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-[24px] flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono tracking-widest text-emerald-700 font-extrabold uppercase">
                  ✦ Direct WhatsApp Line
                </span>
                <p className="text-emerald-900 leading-snug font-display font-extrabold text-base mt-1.5 mb-3">
                  Need an Instant Feedback Slot?
                </p>
                <p className="text-gray-600 text-xs leading-relaxed mb-4">
                  Skip the emails. Hit the link below to load WhatsApp Web directly. Standard agent responds in ~5 mins.
                </p>
              </div>
              <a
                href="https://wa.me/919990856112?text=Hello%20Body%20By%20Inches%2C%20I'd%20like%20to%20book%20a%20free%20guided%20trial%20session."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#1A1A1A] hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider py-3 px-5 rounded-xl transition-all duration-300 shadow-md"
              >
                <span>Message on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* Right: Actual Form matching Omni AI aesthetics */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            id="contact-form-container"
            className="lg:col-span-7 bg-[#FAF9F9] rounded-[32px] p-8 border border-gray-200/50 shadow-sm relative overflow-hidden"
          >
            {/* Success Animation overlay */}
            {submitSuccess && (
              <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-30 flex flex-col items-center justify-center p-8 text-center animate-fade-in">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-650 rounded-full flex items-center justify-center mb-4 border border-emerald-200">
                  <MessageSquare className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="font-display font-extrabold text-2xl text-gray-900 mb-2">
                  Message Transmitted!
                </h3>
                <p className="text-gray-500 text-sm max-w-sm mb-6 leading-relaxed">
                  Thank you for registering. An athlete operations lead from our Sector 21A, Noida team will call or WhatsApp you within 12 hours.
                </p>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="bg-[#1A1A1A] hover:bg-gray-800 text-white text-xs font-bold py-2.5 px-6 rounded-lg transition-colors"
                >
                  Return to Form
                </button>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Full Name field */}
              <div>
                <label className="block text-xs font-bold tracking-wider font-mono text-[#1A1A1A] uppercase mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g., Varun Roy"
                  className={`w-full bg-white border rounded-xl px-4 py-3.5 text-sm text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#1A1A1A] transition-all ${
                    formValidation.name ? "border-rose-500" : "border-gray-200"
                  }`}
                />
                {formValidation.name && (
                  <p className="text-rose-500 text-xs mt-1.5 font-semibold font-mono">
                    {formValidation.name}
                  </p>
                )}
              </div>

              {/* Email Address field */}
              <div>
                <label className="block text-xs font-bold tracking-wider font-mono text-[#1A1A1A] uppercase mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g., varun.roy@gmail.com"
                  className={`w-full bg-white border rounded-xl px-4 py-3.5 text-sm text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#1A1A1A] transition-all id-contact-email ${
                    formValidation.email ? "border-rose-500" : "border-gray-200"
                  }`}
                />
                {formValidation.email && (
                  <p className="text-rose-500 text-xs mt-1.5 font-semibold font-mono">
                    {formValidation.email}
                  </p>
                )}
              </div>

              {/* Gender Selection field */}
              <div>
                <label className="block text-xs font-bold tracking-wider font-mono text-[#1A1A1A] uppercase mb-2">
                  Select Gender
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-[#1A1A1A] focus:outline-none focus:ring-1 focus:ring-[#1A1A1A] transition-all cursor-pointer"
                >
                  <option value="">-- Choose Gender --</option>
                  <option value="Men">Men</option>
                  <option value="Women">Women</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Subject Select Option drop-down menu */}
              <div>
                <label className="block text-xs font-bold tracking-wider font-mono text-[#1A1A1A] uppercase mb-2">
                  Subject Of Interest
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-[#1A1A1A] focus:outline-none focus:ring-1 focus:ring-[#1A1A1A] transition-all cursor-pointer"
                >
                  <option value="">-- Choose Priority Subject --</option>
                  <option value="Inquiry: Trial Session">Book Complimentary 1-Day Trial Pass</option>
                  <option value="Inquiry: Core Transformation">Enquire on Core Transformation (₹1,999/mo)</option>
                  <option value="Inquiry: Peak Annual Tier">Enquire on Peak Performance Elite (₹19,999/yr)</option>
                  <option value="Inquiry: Custom Personal Coaching">Enquire on 1-on-1 Certified Personal Coaching</option>
                  <option value="Inquiry: Other Questions">Other Feedback / Questions</option>
                </select>
              </div>

              {/* Message field */}
              <div>
                <label className="block text-xs font-bold tracking-wider font-mono text-[#1A1A1A] uppercase mb-2">
                  How may we assist you?
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your fitness targets, physical injuries if any, or previous sports experience..."
                  className={`w-full bg-white border rounded-xl px-4 py-3.5 text-sm text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#1A1A1A] transition-all ${
                    formValidation.message ? "border-rose-500" : "border-gray-200"
                  }`}
                />
                {formValidation.message && (
                  <p className="text-rose-500 text-xs mt-1.5 font-semibold font-mono">
                    {formValidation.message}
                  </p>
                )}
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#1A1A1A] text-white hover:bg-amber-500 hover:text-black font-bold py-4 px-6 rounded-xl border border-transparent shadow-lg text-sm uppercase tracking-wider transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Transmitting Details...</span>
                  </>
                ) : (
                  <>
                    <span>Send Your Message</span>
                    <Send className="w-4 h-4 ml-1" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
