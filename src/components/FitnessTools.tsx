import { useState } from "react";
import { Scale, Flame, Calculator, Sparkles, AlertCircle, RefreshCw, Bike, Dumbbell, Zap, Heart, Utensils } from "lucide-react";
import { motion } from "motion/react";

export default function FitnessTools() {
  // BMI States
  const [bmiUnit, setBmiUnit] = useState<"metric" | "imperial">("metric");
  const [weightKg, setWeightKg] = useState<string>("70");
  const [heightCm, setHeightCm] = useState<string>("175");
  const [weightLbs, setWeightLbs] = useState<string>("154");
  const [heightFt, setHeightFt] = useState<string>("5");
  const [heightIn, setHeightIn] = useState<string>("9");
  
  const [bmiResult, setBmiResult] = useState<{
    score: number;
    category: "Underweight" | "Normal" | "Overweight" | "Obese" | null;
    color: string;
    advice: string;
    targetWorkout: string;
  } | null>(null);

  // Calorie Estimator States
  const [userWeight, setUserWeight] = useState<number>(70); // in kg
  const [workoutType, setWorkoutType] = useState<string>("strength");
  const [intensity, setIntensity] = useState<number>(1.2); // multiplier
  const [duration, setDuration] = useState<number>(45); // minutes

  const workoutMETs: Record<string, { label: string; met: number; icon: any }> = {
    strength: { label: "Strength Architecture (Heavy/Free Weights)", met: 6.0, icon: Dumbbell },
    hiit: { label: "High-Intensity Interval Cardio (HIIT)", met: 8.5, icon: Zap },
    boxing: { label: "Combat & Boxing/MMA Conditioning", met: 7.5, icon: Heart },
    cycling: { label: "Power Spin & High-RPM Cycling", met: 7.0, icon: Bike },
    yoga: { label: "Agility & Power Yoga Flow", met: 4.0, icon: Utensils },
  };

  const calculateBMI = () => {
    let bmiValue = 0;
    if (bmiUnit === "metric") {
      const weight = parseFloat(weightKg);
      const height = parseFloat(heightCm) / 100;
      if (weight > 0 && height > 0) {
        bmiValue = weight / (height * height);
      }
    } else {
      const weight = parseFloat(weightLbs);
      const feet = parseFloat(heightFt) || 0;
      const inches = parseFloat(heightIn) || 0;
      const totalInches = (feet * 12) + inches;
      if (weight > 0 && totalInches > 0) {
        bmiValue = (weight / (totalInches * totalInches)) * 703;
      }
    }

    if (bmiValue > 0) {
      let category: "Underweight" | "Normal" | "Overweight" | "Obese" = "Normal";
      let color = "text-emerald-500 bg-emerald-50 border-emerald-200";
      let advice = "";
      let targetWorkout = "";

      if (bmiValue < 18.5) {
        category = "Underweight";
        color = "text-sky-500 bg-sky-50 border-sky-200";
        advice = "A structured caloric surplus paired with resistance training is recommended. Focus on gradual mass building and clean dietary fats.";
        targetWorkout = "Heavy Strength Hypertrophy Program (3-4x weekly)";
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        category = "Normal";
        color = "text-emerald-500 bg-emerald-50 border-emerald-200";
        advice = "Fantastic! You are in the healthier optimal zone. Maintain this with progressive overload conditioning and physical sustainability.";
        targetWorkout = "Hybrid Strength & Functional High-Intensity Circuit Program";
      } else if (bmiValue >= 24.9 && bmiValue < 29.9) {
        category = "Overweight";
        color = "text-amber-500 bg-amber-50 border-amber-200";
        advice = "A moderate caloric deficit combined with consistent weightlifting & high-energy interval training will enhance body recomposition.";
        targetWorkout = "Athletic Fat-Loss & Body Recomposition Protocol";
      } else {
        category = "Obese";
        color = "text-rose-500 bg-rose-50 border-rose-200";
        advice = "Focus on cardiovascular restoration combined with targeted low-impact functional weights to build metabolic strength safely.";
        targetWorkout = "Low-Impact Biomechanical Cardio & High-Rep Circuit";
      }

      setBmiResult({
        score: Math.round(bmiValue * 10) / 10,
        category,
        color,
        advice,
        targetWorkout
      });
    }
  };

  const calculateCalories = (): number => {
    const selectedWorkout = workoutMETs[workoutType] || { met: 5.0 };
    const metValue = selectedWorkout.met * intensity;
    // Calories = METs * weight in kg * (duration in hours)
    const durationHours = duration / 60;
    const burned = metValue * userWeight * durationHours;
    return Math.round(burned);
  };

  const clearBMI = () => {
    setBmiResult(null);
    setWeightKg("70");
    setHeightCm("175");
    setWeightLbs("154");
    setHeightFt("5");
    setHeightIn("9");
  };

  return (
    <section id="fitness-tools" className="py-24 bg-white border-t border-b border-gray-100 relative overflow-hidden">
      {/* Decorative design elements */}
      <div className="absolute top-[20%] right-[-100px] w-[350px] h-[350px] bg-gradient-to-tr from-amber-100/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-100px] w-[350px] h-[350px] bg-gradient-to-tr from-orange-100/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center gap-1.5 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-full mb-4 text-xs font-semibold tracking-wider text-gray-500 uppercase font-mono shadow-inner">
            <Calculator className="w-3.5 h-3.5 text-amber-500" />
            <span>Interactive Health Metrics</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#1A1A1A] tracking-tight mb-4">
            Interactive Fitness Tools
          </h2>
          <p className="text-gray-500 max-w-lg text-sm sm:text-base">
            Use our precise calculators to map your starting benchmarks and calculate dynamic workout calorie outputs based on your body dimensions.
          </p>
        </motion.div>

        {/* Dual Panel Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          
          {/* Panel 1: BMI Calculator Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="bg-[#FAF9F9] rounded-[32px] p-8 border border-gray-200/50 shadow-sm relative overflow-hidden"
          >
            <div className="flex items-center gap-3.5 mb-6">
              <div className="w-11 h-11 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600 border border-amber-100/70">
                <Scale className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-extrabold text-gray-900 text-lg sm:text-xl">
                  Body Mass Index (BMI)
                </h3>
                <p className="text-gray-400 text-xs font-mono font-medium tracking-wide">
                  COMPARE BODY WEIGHT TO HEIGHT STATS
                </p>
              </div>
            </div>

            {/* Metric / Imperial Selector tabs */}
            <div className="flex gap-1.5 bg-white border border-gray-200 p-1 rounded-xl mb-6">
              <button
                type="button"
                onClick={() => { setBmiUnit("metric"); setBmiResult(null); }}
                className={`flex-1 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer ${
                  bmiUnit === "metric"
                    ? "bg-[#1A1A1A] text-white shadow-sm"
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                Metric (KG / CM)
              </button>
              <button
                type="button"
                onClick={() => { setBmiUnit("imperial"); setBmiResult(null); }}
                className={`flex-1 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer ${
                  bmiUnit === "imperial"
                    ? "bg-[#1A1A1A] text-white shadow-sm"
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                Imperial (LBS / FT-IN)
              </button>
            </div>

            {/* Input fields based on selected unit */}
            <div className="space-y-4 mb-6">
              {bmiUnit === "metric" ? (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold tracking-wider font-mono text-[#1A1A1A] uppercase mb-2">
                      Weight (kg)
                    </label>
                    <input
                      type="number"
                      value={weightKg}
                      onChange={(e) => setWeightKg(e.target.value)}
                      placeholder="e.g., 72"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1A1A1A] focus:outline-none focus:ring-1 focus:ring-[#1A1A1A] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold tracking-wider font-mono text-[#1A1A1A] uppercase mb-2">
                      Height (cm)
                    </label>
                    <input
                      type="number"
                      value={heightCm}
                      onChange={(e) => setHeightCm(e.target.value)}
                      placeholder="e.g., 176"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1A1A1A] focus:outline-none focus:ring-1 focus:ring-[#1A1A1A] transition-all"
                    />
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold tracking-wider font-mono text-[#1A1A1A] uppercase mb-2">
                      Weight (lbs)
                    </label>
                    <input
                      type="number"
                      value={weightLbs}
                      onChange={(e) => setWeightLbs(e.target.value)}
                      placeholder="e.g., 150"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1A1A1A] focus:outline-none focus:ring-1 focus:ring-[#1A1A1A] transition-all"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold tracking-wider font-mono text-[#1A1A1A] uppercase mb-2">
                        Height (Feet)
                      </label>
                      <input
                        type="number"
                        value={heightFt}
                        onChange={(e) => setHeightFt(e.target.value)}
                        placeholder="e.g., 5"
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1A1A1A] focus:outline-none focus:ring-1 focus:ring-[#1A1A1A] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold tracking-wider font-mono text-[#1A1A1A] uppercase mb-2">
                        Height (Inches)
                      </label>
                      <input
                        type="number"
                        value={heightIn}
                        onChange={(e) => setHeightIn(e.target.value)}
                        placeholder="e.g., 8"
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1A1A1A] focus:outline-none focus:ring-1 focus:ring-[#1A1A1A] transition-all"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* BMI Actions */}
            <div className="flex gap-3 mb-6">
              <button
                type="button"
                onClick={calculateBMI}
                className="flex-grow bg-[#1A1A1A] text-white font-semibold text-xs py-3.5 px-4 rounded-xl shadow-md hover:bg-amber-500 hover:text-black transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Calculate BMI Score</span>
              </button>
              <button
                type="button"
                onClick={clearBMI}
                className="p-3 bg-white hover:bg-gray-50 border border-gray-200 rounded-xl text-gray-500 hover:text-[#1A1A1A] transition-colors"
                title="Reset Calculator"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>

            {/* BMI Result Presentation Details */}
            {bmiResult ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="bg-white border border-gray-200/80 rounded-2xl p-6 shadow-xs"
              >
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
                  <div>
                    <span className="block text-gray-400 text-[10px] font-mono uppercase tracking-wider mb-0.5">
                      Your Classified BMI
                    </span>
                    <h4 className="font-display font-black text-[#1A1A1A] text-3xl leading-none">
                      {bmiResult.score}
                    </h4>
                  </div>
                  <div className={`px-3 py-1.5 rounded-full border text-[11px] font-extrabold uppercase tracking-widest font-mono ${bmiResult.color}`}>
                    {bmiResult.category}
                  </div>
                </div>

                <div className="space-y-4 text-xs font-semibold">
                  <div>
                    <span className="block text-amber-600 uppercase text-[9px] font-mono font-bold tracking-widest leading-none mb-1">
                      Professional Coaching Advice
                    </span>
                    <p className="text-gray-600 leading-relaxed font-normal">
                      {bmiResult.advice}
                    </p>
                  </div>
                  <div className="bg-[#FAF9F9] border border-gray-100 rounded-xl p-3 flex gap-2.5 items-start">
                    <AlertCircle className="w-4 h-4 text-[#1A1A1A] shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[#1A1A1A] font-extrabold text-[11px] tracking-tight leading-normal">
                        Optimal Workout Strategy
                      </span>
                      <p className="text-gray-500 text-[11px] font-normal leading-normal mt-0.5">
                        {bmiResult.targetWorkout}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="rounded-2xl border border-dashed border-gray-200 p-8 text-center bg-gray-50/50">
                <span className="text-[11px] font-mono uppercase text-gray-400 block tracking-wide">
                  Enter height / weight to construct statistics
                </span>
              </div>
            )}
          </motion.div>

          {/* Panel 2: Calorie Expenditure Estimator */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="bg-[#FAF9F9] rounded-[32px] p-8 border border-gray-200/50 shadow-sm overflow-hidden"
          >
            <div className="flex items-center gap-3.5 mb-6">
              <div className="w-11 h-11 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600 border border-orange-100/70">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-extrabold text-gray-900 text-lg sm:text-xl">
                  Calorie Expenditure Estimator
                </h3>
                <p className="text-gray-400 text-xs font-mono font-medium tracking-wide">
                  WORKOUT ENERGY METRIC COMPILER
                </p>
              </div>
            </div>

            <div className="space-y-5">
              
              {/* Weight Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold tracking-wider font-mono text-[#1A1A1A] uppercase">
                    Your Current Weight
                  </label>
                  <span className="text-sm font-extrabold text-[#1A1A1A] font-mono py-0.5 px-2 bg-white rounded-lg border border-gray-100">
                    {userWeight} KG
                  </span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="140"
                  value={userWeight}
                  onChange={(e) => setUserWeight(Number(e.target.value))}
                  className="w-full accent-[#1A1A1A] cursor-pointer"
                />
              </div>

              {/* Workout Type Selector */}
              <div>
                <label className="block text-xs font-bold tracking-wider font-mono text-[#1A1A1A] uppercase mb-2">
                  Select Workout Modality
                </label>
                <select
                  value={workoutType}
                  onChange={(e) => setWorkoutType(e.target.value)}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1A1A1A] focus:outline-none focus:ring-1 focus:ring-[#1A1A1A] transition-all cursor-pointer font-semibold"
                >
                  {Object.entries(workoutMETs).map(([key, workout]) => (
                    <option key={key} value={key}>
                      {workout.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Intensity Multiplier Option */}
              <div>
                <label className="block text-xs font-bold tracking-wider font-mono text-[#1A1A1A] uppercase mb-2">
                  Target Work Intensity Level
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Active Recovery (Low)", multiplier: 0.9 },
                    { label: "Steady Overload (Moderate)", multiplier: 1.2 },
                    { label: "Competitive Zone (High)", multiplier: 1.5 }
                  ].map((lvl) => (
                    <button
                      type="button"
                      key={lvl.label}
                      onClick={() => setIntensity(lvl.multiplier)}
                      className={`p-3 rounded-xl border text-[11px] sm:text-xs font-extrabold tracking-wide transition-all duration-200 cursor-pointer text-center leading-snug ${
                        intensity === lvl.multiplier
                          ? "bg-[#1A1A1A] text-white border-transparent"
                          : "bg-white text-gray-700 border-gray-200 hover:border-gray-300 hover:bg-gray-50/50"
                      }`}
                    >
                      {lvl.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Duration Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold tracking-wider font-mono text-[#1A1A1A] uppercase">
                    Workout Duration
                  </label>
                  <span className="text-sm font-extrabold text-[#1A1A1A] font-mono py-0.5 px-2 bg-white rounded-lg border border-gray-100">
                    {duration} Minutes
                  </span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="180"
                  step="5"
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className="w-full accent-[#1A1A1A] cursor-pointer"
                />
              </div>

              {/* Estimated Expenditure Outputs Display */}
              <div className="bg-white border border-gray-200/80 rounded-2xl p-6 mt-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-[#1A1A1A] uppercase block font-bold leading-none mb-1.5">
                      Estimated Calories Burned
                    </span>
                    <h4 className="font-display font-black text-[#1A1A1A] text-3xl inline-flex items-center gap-2">
                      <span>{calculateCalories()}</span>
                      <span className="text-xs font-mono font-bold text-orange-500 uppercase">kcal</span>
                    </h4>
                  </div>
                  <div className="text-left sm:text-right border-t sm:border-t-0 sm:border-l border-gray-100 pt-3 sm:pt-0 sm:pl-4 shrink-0">
                    <span className="text-[10px] font-mono text-gray-400 block tracking-widest uppercase mb-1">
                      Post-Workout Guide
                    </span>
                    <span className="text-xs font-semibold text-gray-700 block max-w-[200px]">
                      Drink approx. <strong>{Math.round(duration * 12)}ml</strong> water and replenish with <strong>{Math.round(calculateCalories() * 0.05)}g</strong> of target proteins.
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
