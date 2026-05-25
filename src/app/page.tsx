"use client";
import { useState } from "react";
 
// All protein values triple-checked against actual food items
const days = [
  {
    day: "Monday", shortDay: "Mon", isRest: false,
    meals: [
      { name: "Pre-Gym Snack", time: "~3:20 AM", emoji: "🌙", note: "Right after Fajr — tiny fuel before gym", items: ["2–3 dates", "Glass of water"], calories: 80, protein: 1 },
      { name: "Back to Bed", time: "~4:45 AM", emoji: "😴", note: "Back to bed — sleep until ~9:00 AM", items: ["Rest & recover — muscle is built now"], calories: 0, protein: 0, isSleep: true },
      { name: "Breakfast", time: "~9:00 AM", emoji: "🌅", note: "Biggest meal — break the fast properly", items: ["100g oats", "3 whole eggs + 2 egg whites", "1 banana", "250ml whole milk", "1 scoop whey (mixed in)"], calories: 850, protein: 70 },
      { name: "Lunch", time: "~12:30 PM", emoji: "☀️", note: null, items: ["200g chicken breast", "200g white rice (cooked)", "Large mixed salad", "1 tbsp olive oil"], calories: 680, protein: 57 },
      { name: "Afternoon Snack", time: "~3:30 PM", emoji: "🍎", note: null, items: ["200g Greek yogurt (0%)", "1 banana", "20g mixed nuts"], calories: 340, protein: 25 },
      { name: "Dinner", time: "~7:00 PM", emoji: "🍽️", note: null, items: ["200g beef mince (5% fat)", "200g rice (cooked)", "Broccoli & peppers"], calories: 720, protein: 48 },
      { name: "Evening Snack", time: "~9:30 PM", emoji: "🌙", note: "Take sleep supplements now", items: ["200g quark", "30g mixed nuts"], calories: 290, protein: 28 },
    ],
    totalCalories: 2960, totalProtein: 229,
  },
  {
    day: "Tuesday", shortDay: "Tue", isRest: false,
    meals: [
      { name: "Pre-Gym Snack", time: "~3:20 AM", emoji: "🌙", note: "Right after Fajr — tiny fuel before gym", items: ["2–3 dates", "Glass of water"], calories: 80, protein: 1 },
      { name: "Back to Bed", time: "~4:45 AM", emoji: "😴", note: "Back to bed — sleep until ~9:00 AM", items: ["Rest & recover — muscle is built now"], calories: 0, protein: 0, isSleep: true },
      { name: "Breakfast", time: "~9:00 AM", emoji: "🌅", note: "Biggest meal — break the fast properly", items: ["5 scrambled eggs", "2 slices wholegrain toast", "1 avocado", "200ml orange juice"], calories: 680, protein: 39 },
      { name: "Lunch", time: "~12:30 PM", emoji: "☀️", note: null, items: ["200g salmon fillet", "300g sweet potato (baked)", "Spinach salad", "Lemon dressing"], calories: 660, protein: 46 },
      { name: "Afternoon Snack", time: "~3:30 PM", emoji: "🍎", note: null, items: ["1 scoop whey + 200ml milk", "1 apple"], calories: 280, protein: 29 },
      { name: "Dinner", time: "~7:00 PM", emoji: "🍽️", note: null, items: ["200g chicken thighs", "250g pasta (cooked)", "Tomato & basil sauce"], calories: 750, protein: 55 },
      { name: "Evening Snack", time: "~9:30 PM", emoji: "🌙", note: "Take sleep supplements now", items: ["250g quark", "100g blueberries", "20g almonds"], calories: 320, protein: 32 },
    ],
    totalCalories: 2770, totalProtein: 202,
  },
  {
    day: "Wednesday", shortDay: "Wed", isRest: false,
    meals: [
      { name: "Pre-Gym Snack", time: "~3:20 AM", emoji: "🌙", note: "Right after Fajr — tiny fuel before gym", items: ["2–3 dates", "Glass of water"], calories: 80, protein: 1 },
      { name: "Back to Bed", time: "~4:45 AM", emoji: "😴", note: "Back to bed — sleep until ~9:00 AM", items: ["Rest & recover — muscle is built now"], calories: 0, protein: 0, isSleep: true },
      { name: "Breakfast", time: "~9:00 AM", emoji: "🌅", note: "Leg day — load up on carbs", items: ["100g oats", "1 scoop whey (mixed in)", "1 banana", "15g peanut butter", "250ml milk"], calories: 720, protein: 48 },
      { name: "Lunch", time: "~12:30 PM", emoji: "☀️", note: null, items: ["200g tuna (in water)", "200g rice (cooked)", "Mixed veg stir-fry", "Soy sauce"], calories: 600, protein: 54 },
      { name: "Afternoon Snack", time: "~3:30 PM", emoji: "🍎", note: null, items: ["200g Greek yogurt", "30g granola", "Mixed berries"], calories: 330, protein: 24 },
      { name: "Dinner", time: "~7:00 PM", emoji: "🍽️", note: null, items: ["300g beef steak", "300g potatoes (mashed)", "Green beans"], calories: 870, protein: 83 },
      { name: "Evening Snack", time: "~9:30 PM", emoji: "🌙", note: "Take sleep supplements now", items: ["200g Greek yogurt", "25g dark chocolate"], calories: 290, protein: 22 },
    ],
    totalCalories: 2890, totalProtein: 232,
  },
  {
    day: "Thursday", shortDay: "Thu", isRest: false,
    meals: [
      { name: "Pre-Gym Snack", time: "~3:20 AM", emoji: "🌙", note: "Right after Fajr — tiny fuel before gym", items: ["2–3 dates", "Glass of water"], calories: 80, protein: 1 },
      { name: "Back to Bed", time: "~4:45 AM", emoji: "😴", note: "Back to bed — sleep until ~9:00 AM", items: ["Rest & recover — muscle is built now"], calories: 0, protein: 0, isSleep: true },
      { name: "Breakfast", time: "~9:00 AM", emoji: "🌅", note: "Biggest meal — break the fast properly", items: ["4 egg omelette (cheese + peppers)", "2 slices wholegrain toast", "1 banana", "250ml milk"], calories: 700, protein: 46 },
      { name: "Lunch", time: "~12:30 PM", emoji: "☀️", note: null, items: ["200g chicken breast", "Wholegrain wrap x2", "Lettuce, tomato, avocado", "Low-fat mayo"], calories: 680, protein: 60 },
      { name: "Afternoon Snack", time: "~3:30 PM", emoji: "🍎", note: null, items: ["1 scoop whey + 200ml milk", "1 pear"], calories: 270, protein: 29 },
      { name: "Dinner", time: "~7:00 PM", emoji: "🍽️", note: null, items: ["200g salmon", "200g rice (cooked)", "Cucumber & tomato salad"], calories: 660, protein: 47 },
      { name: "Evening Snack", time: "~9:30 PM", emoji: "🌙", note: "Take sleep supplements now", items: ["250g quark", "30g walnuts", "Cinnamon"], calories: 350, protein: 32 },
    ],
    totalCalories: 2740, totalProtein: 215,
  },
  {
    day: "Friday", shortDay: "Fri", isRest: false,
    meals: [
      { name: "Pre-Gym Snack", time: "~3:20 AM", emoji: "🌙", note: "Right after Fajr — tiny fuel before gym", items: ["2–3 dates", "Glass of water"], calories: 80, protein: 1 },
      { name: "Back to Bed", time: "~4:45 AM", emoji: "😴", note: "Back to bed — sleep until ~9:00 AM", items: ["Rest & recover — muscle is built now"], calories: 0, protein: 0, isSleep: true },
      { name: "Breakfast", time: "~9:00 AM", emoji: "🌅", note: "Biggest meal — break the fast properly", items: ["100g oats", "200ml milk", "2 boiled eggs", "1 orange", "1 scoop whey"], calories: 660, protein: 54 },
      { name: "Lunch", time: "~12:30 PM", emoji: "☀️", note: null, items: ["200g beef mince (bolognese)", "200g pasta (cooked)", "Parmesan 20g"], calories: 780, protein: 54 },
      { name: "Afternoon Snack", time: "~3:30 PM", emoji: "🍎", note: null, items: ["Protein bar (25g+ protein)", "1 banana"], calories: 320, protein: 26 },
      { name: "Dinner", time: "~7:00 PM", emoji: "🍽️", note: null, items: ["200g chicken breast", "300g sweet potato", "Roasted veg"], calories: 640, protein: 58 },
      { name: "Evening Snack", time: "~9:30 PM", emoji: "🌙", note: "Take sleep supplements now", items: ["200g Greek yogurt", "Mixed berries", "1 tbsp honey"], calories: 270, protein: 21 },
    ],
    totalCalories: 2750, totalProtein: 214,
  },
  {
    day: "Saturday", shortDay: "Sat", isRest: true,
    meals: [
      { name: "Breakfast", time: "~8:00 AM", emoji: "🌅", note: "Rest day — no rush", items: ["5 egg scramble", "2 slices sourdough", "1 avocado", "Black coffee"], calories: 640, protein: 38 },
      { name: "Lunch", time: "~1:00 PM", emoji: "☀️", note: null, items: ["200g chicken thighs", "200g rice (cooked)", "Avocado", "Hot sauce"], calories: 720, protein: 51 },
      { name: "Afternoon Snack", time: "~4:00 PM", emoji: "🍎", note: null, items: ["1 scoop whey + 200ml milk", "30g oats", "1 banana"], calories: 350, protein: 34 },
      { name: "Dinner", time: "~7:00 PM", emoji: "🍽️", note: null, items: ["250g beef steak", "300g potatoes (roasted)", "Side salad"], calories: 820, protein: 70 },
      { name: "Evening Snack", time: "~9:30 PM", emoji: "🌙", note: "Take sleep supplements now", items: ["250g quark", "25g dark chocolate", "1 pear"], calories: 330, protein: 30 },
    ],
    totalCalories: 2860, totalProtein: 223,
  },
  {
    day: "Sunday", shortDay: "Sun", isRest: true,
    meals: [
      { name: "Breakfast", time: "~9:00 AM", emoji: "🌅", note: "Rest day — enjoy it", items: ["4 egg pancakes (oat flour)", "150g Greek yogurt", "Berries", "Maple syrup (small)"], calories: 650, protein: 45 },
      { name: "Lunch", time: "~1:00 PM", emoji: "☀️", note: "Meal prep day — cook for the week", items: ["Roast chicken breast x2", "Roast potatoes 300g", "Carrots, broccoli, peas", "Gravy (low fat)"], calories: 740, protein: 61 },
      { name: "Afternoon Snack", time: "~4:00 PM", emoji: "🍎", note: null, items: ["200g Greek yogurt", "Handful granola", "Honey drizzle"], calories: 320, protein: 23 },
      { name: "Dinner", time: "~7:00 PM", emoji: "🍽️", note: null, items: ["200g salmon", "200g rice (cooked)", "Stir-fried veg", "Teriyaki sauce"], calories: 650, protein: 48 },
      { name: "Evening Snack", time: "~9:30 PM", emoji: "🌙", note: "Take sleep supplements now", items: ["200g Greek yogurt", "Mixed nuts 30g", "Honey drizzle"], calories: 320, protein: 26 },
    ],
    totalCalories: 2680, totalProtein: 203,
  },
];
 
const workouts = [
  {
    day: "Monday", type: "Push", emoji: "🏋️", focus: "Chest · Shoulders · Triceps", color: "#f59e0b",
    exercises: [
      { name: "Flat Dumbbell Press", sets: "4", reps: "6–8", rest: "3 min", note: "Greater range of motion than barbell — go as heavy as possible with clean form" },
      { name: "Overhead Press", sets: "3", reps: "8", rest: "2–3 min", note: "Seated or standing" },
      { name: "Incline Dumbbell Press", sets: "3", reps: "10–12", rest: "90 sec", note: null },
      { name: "Lateral Raises", sets: "4", reps: "15", rest: "60 sec", note: "Bumped to 4 sets — side delts drive shoulder width" },
      { name: "Tricep Pushdowns", sets: "3", reps: "8–10", rest: "60 sec", note: "Heavier than 12-rep range — closer to failure = more growth" },
      { name: "Overhead Tricep Extension", sets: "2", reps: "8–10", rest: "60 sec", note: null },
      { name: "Hanging Leg Raises", sets: "3", reps: "12", rest: "60 sec", note: "Lower abs + obliques engagement" },
      { name: "Stomach Vacuum Hold", sets: "3", reps: "30 sec", rest: "30 sec", note: "Trains transverse abdominis — shrinks waist over time" },
    ],
  },
  {
    day: "Tuesday", type: "Pull", emoji: "💪", focus: "Back · Biceps", color: "#3b82f6",
    exercises: [
      { name: "Deadlift", sets: "4", reps: "5", rest: "3 min", note: "Heaviest lift of the week — add 5kg when all reps are clean" },
      { name: "Pull-Ups / Lat Pulldown", sets: "3", reps: "8", rest: "2 min", note: "Use lat pulldown if pull-ups are too hard yet" },
      { name: "Cable Rows", sets: "3", reps: "10–12", rest: "90 sec", note: "Squeeze at the end of each rep" },
      { name: "Face Pulls", sets: "3", reps: "15", rest: "60 sec", note: "Great for shoulder health — don't skip" },
      { name: "Barbell Bicep Curls", sets: "3", reps: "10", rest: "60 sec", note: null },
      { name: "Hammer Curls", sets: "2", reps: "12", rest: "60 sec", note: null },
      { name: "💪 ARM PUMP SUPERSET", sets: "3", reps: "12+12", rest: "60 sec", note: "Dumbbell Curl → straight into Overhead Tricep Extension. No rest between exercises, 60 sec between rounds." },
      { name: "Cable Woodchoppers", sets: "3", reps: "12 each side", rest: "60 sec", note: "Light weight — targets obliques without bulking the waist" },
      { name: "Side Plank", sets: "3", reps: "30 sec each side", rest: "30 sec", note: null },
    ],
  },
  {
    day: "Wednesday", type: "Legs", emoji: "🦵", focus: "Quads · Hamstrings · Glutes · Calves", color: "#4ade80",
    exercises: [
      { name: "Barbell Squat", sets: "4", reps: "5", rest: "3 min", note: "King of all exercises — add 5kg when all reps are clean" },
      { name: "Romanian Deadlift", sets: "3", reps: "8", rest: "2–3 min", note: "Feel the hamstring stretch at the bottom" },
      { name: "Leg Press", sets: "3", reps: "10–12", rest: "90 sec", note: null },
      { name: "Leg Curl (machine)", sets: "3", reps: "12", rest: "60 sec", note: null },
      { name: "Bulgarian Split Squat", sets: "3", reps: "10 each leg", rest: "90 sec", note: "Rear foot on bench, front foot forward, dumbbell in each hand — drive through the heel" },
      { name: "Calf Raises", sets: "4", reps: "15–20", rest: "45 sec", note: "Pause at top and bottom of every rep" },
      { name: "Plank", sets: "3", reps: "60 sec", rest: "45 sec", note: "Full core stability — keep body in a straight line" },
    ],
  },
  {
    day: "Thursday", type: "Push", emoji: "🏋️", focus: "Chest · Shoulders · Triceps", color: "#f59e0b",
    exercises: [
      { name: "Incline Dumbbell Press", sets: "4", reps: "6–8", rest: "2–3 min", note: "Upper chest focus — go heavier than Monday's flat press" },
      { name: "Dumbbell Shoulder Press", sets: "3", reps: "10", rest: "2 min", note: null },
      { name: "Cable Chest Flyes", sets: "3", reps: "12", rest: "90 sec", note: "Feel the stretch at the bottom" },
      { name: "Arnold Press", sets: "3", reps: "10", rest: "90 sec", note: "Great for full shoulder development" },
      { name: "Cable Lateral Raises", sets: "3", reps: "12–15", rest: "60 sec", note: "Constant tension — even more effective than dumbbells for width" },
      { name: "Skull Crushers", sets: "3", reps: "8–10", rest: "60 sec", note: null },
      { name: "Dips (weighted if able)", sets: "3", reps: "10", rest: "90 sec", note: null },
      { name: "Dumbbell Pullovers", sets: "3", reps: "12", rest: "90 sec", note: "Stretches the ribcage and chest — key for wider chest appearance" },
      { name: "Bicycle Crunches", sets: "3", reps: "20 total", rest: "45 sec", note: "Hits both upper abs and obliques together" },
    ],
  },
  {
    day: "Friday", type: "Pull", emoji: "💪", focus: "Back · Biceps", color: "#3b82f6",
    exercises: [
      { name: "Barbell Rows", sets: "4", reps: "5", rest: "3 min", note: "Main compound — add 2.5kg when all reps are clean" },
      { name: "Chest-Supported Row", sets: "3", reps: "10", rest: "2 min", note: "Takes lower back fatigue out of the equation" },
      { name: "Wide-Grip Lat Pulldown", sets: "3", reps: "10–12", rest: "90 sec", note: null },
      { name: "Single-Arm Dumbbell Row", sets: "3", reps: "12", rest: "60 sec", note: null },
      { name: "EZ Bar Curls", sets: "3", reps: "10", rest: "60 sec", note: null },
      { name: "Cable Curls", sets: "2", reps: "15", rest: "45 sec", note: "Squeeze hard at the top" },
      { name: "💪 ARM PUMP SUPERSET", sets: "3", reps: "12+12", rest: "60 sec", note: "Hammer Curl → straight into Cable Tricep Pushdown. No rest between exercises, 60 sec between rounds." },
      { name: "Hanging Knee Raises", sets: "3", reps: "15", rest: "60 sec", note: "Twist slightly at the top to hit obliques" },
      { name: "Ab Wheel Rollouts", sets: "3", reps: "10", rest: "60 sec", note: "Or do plank if you don't have an ab wheel" },
    ],
  },
  { day: "Saturday", type: "Rest", emoji: "😴", focus: "Full Rest Day", color: "#a78bfa", exercises: [] },
  { day: "Sunday", type: "Rest", emoji: "😴", focus: "Full Rest Day", color: "#a78bfa", exercises: [] },
];
 
const restDayTips = [
  "Hit your 8–10k steps — a long walk counts",
  "Stretch or foam roll for 10–15 mins",
  "Meal prep Sunday — cook rice, chicken & potatoes in bulk",
  "Take all supplements as normal",
  "Aim for 8–9 hours of sleep tonight",
];
 
// Supplement doses based on YOUR specific products
const supplementCategories = [
  {
    label: "💪 Muscle & Performance", color: "#f59e0b",
    items: [
      {
        name: "Impact Creatine Monohydrate",
        dose: "1.5 scoops = 5g",
        timing: "Morning with water — every single day",
        detail: "Your scoop gives 3.4g per serving. 1.5 scoops = 5.1g — the proven daily target.",
        color: "#f59e0b",
      },
      {
        name: "Impact Whey Protein",
        dose: "1–2 scoops",
        timing: "Post-gym or whenever needed to hit protein",
        detail: "22g protein per 30g scoop. Use 1 scoop (22g) or 2 scoops (44g) to reach your daily protein target.",
        color: "#fbbf24",
      },
    ],
  },
  {
    label: "🌿 General Health", color: "#3b82f6",
    items: [
      {
        name: "Vitamin D3 + K2",
        dose: "1 tablet daily",
        timing: "With breakfast",
        detail: "1 tablet = 2000 IU D3 + 100mcg K2 (133% RDI). Perfect dose for daily maintenance.",
        color: "#3b82f6",
      },
      {
        name: "Omega-3 Softgels",
        dose: "3 softgels daily",
        timing: "With breakfast",
        detail: "3 softgels = 900mg total omega-3 (540mg EPA + 360mg DHA). Good anti-inflammatory dose.",
        color: "#06b6d4",
      },
      {
        name: "Daily Probiotic Capsules",
        dose: "1 capsule daily",
        timing: "With breakfast",
        detail: "Your formula has 13.4B CFU across 8 strains — excellent. 1 capsule is exactly right.",
        color: "#22d3ee",
      },
    ],
  },
  {
    label: "🧴 Skin & Acne", color: "#4ade80",
    items: [
      {
        name: "Zinc (with Vitamin C)",
        dose: "1 tablet daily",
        timing: "With food — never on empty stomach",
        detail: "1 tablet = 15mg zinc + 60mg Vit C. Sits comfortably within the NHS safe limit of 25mg/day. Therapeutic for acne and hormone support without the copper depletion risk of higher doses.",
        color: "#4ade80",
      },
      {
        name: "Spearmint Tea",
        dose: "2 cups daily",
        timing: "Morning & afternoon",
        detail: "Not a pill — just brew and drink. Reduces hormonal acne naturally.",
        color: "#86efac",
      },
    ],
  },
  {
    label: "😴 Sleep & Recovery", color: "#a78bfa",
    items: [
      {
        name: "Magnesium Bisglycinate",
        dose: "3 tablets before bed",
        timing: "30–60 mins before bed",
        detail: "Your tablet = 113mg elemental magnesium. 3 tablets = 339mg, well within the NHS safe limit of 400mg/day. Combined with magnesium from food, this hits the sweet spot for sleep and muscle recovery.",
        color: "#8b5cf6",
      },
      {
        name: "Ashwagandha KSM-66®",
        dose: "1 capsule before bed",
        timing: "Before bed",
        detail: "Your capsule = 500mg KSM-66® — the premium, most studied form. 1 capsule is the exact clinical dose. Perfect.",
        color: "#a78bfa",
      },
      {
        name: "L-Theanine",
        dose: "1 capsule (200mg)",
        timing: "Before bed — stack with magnesium",
        detail: "Source from Holland & Barrett or Amazon (Solgar / Now Foods). 200mg is the optimal dose for calm focus and sleep quality.",
        color: "#c4b5fd",
      },
    ],
  },
];

const getTodayIndex = () => {
  const d = new Date().getDay(); // 0=Sun, 1=Mon, ..., 6=Sat
  return (d + 6) % 7; // shift so Mon=0, Tue=1, ..., Sun=6
};
 
export default function MealPlan() {
  const [selectedDay, setSelectedDay] = useState(getTodayIndex());
  const [activeTab, setActiveTab] = useState("meals");
  const [expandedSupp, setExpandedSupp] = useState<string | null>(null);
 
  const day = days[selectedDay];
  const workout = workouts[selectedDay];
 
  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0f", color: "#e8e8f0", fontFamily: "'Georgia', serif" }}>
 
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #0a0a0f 100%)", borderBottom: "1px solid #2a2a3e", padding: "28px 24px 20px", textAlign: "center" }}>
        <div style={{ fontSize: "11px", letterSpacing: "4px", color: "#f59e0b", textTransform: "uppercase", marginBottom: "6px", fontFamily: "monospace" }}>
          85kg · 12% Body Fat · Full Programme
        </div>
        <h1 style={{ margin: 0, fontSize: "clamp(20px, 5vw, 30px)", fontWeight: "700", color: "#ffffff" }}>
          Your Muscle-Building Week
        </h1>
        <p style={{ margin: "6px 0 0", color: "#555", fontSize: "13px" }}>11pm Sleep → 3:20am Gym → 4:45am Bed → 9am Rise → Evening Cardio</p>
      </div>
 
      {/* Day Selector */}
      <div style={{ display: "flex", overflowX: "auto", padding: "14px 14px 0", gap: "6px", scrollbarWidth: "none", borderBottom: "1px solid #1e1e2e" }}>
        {days.map((d, i) => {
          const isSelected = selectedDay === i;
          return (
            <button key={i} onClick={() => setSelectedDay(i)} style={{
              flexShrink: 0, padding: "7px 13px", borderRadius: "8px 8px 0 0", border: "none", cursor: "pointer",
              fontSize: "12px", fontWeight: isSelected ? "700" : "400",
              background: isSelected ? (d.isRest ? "#a78bfa" : "#f59e0b") : "#1a1a2e",
              color: isSelected ? "#0a0a0f" : d.isRest ? "#6a5a8a" : "#777",
              transition: "all 0.2s",
            }}>
              {d.shortDay}
            </button>
          );
        })}
      </div>
 
      {/* Tab Nav */}
      <div style={{ display: "flex", padding: "0 12px", background: "#111118", borderBottom: "1px solid #1e1e2e" }}>
        {["meals", "workouts", "supplements"].map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)} style={{
            padding: "11px 14px", border: "none", background: "none", cursor: "pointer",
            fontSize: "11px", textTransform: "uppercase", letterSpacing: "2px", whiteSpace: "nowrap",
            color: activeTab === tab ? "#f59e0b" : "#555",
            borderBottom: activeTab === tab ? "2px solid #f59e0b" : "2px solid transparent",
            fontFamily: "monospace", transition: "all 0.2s",
          }}>
            {tab}
          </button>
        ))}
      </div>
 
      <div style={{ padding: "16px", maxWidth: "600px", margin: "0 auto" }}>
 
        {/* ── MEALS ── */}
        {activeTab === "meals" && (
          <>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px", marginBottom: "16px" }}>
              <div style={{ background: "linear-gradient(135deg, #1a1a0a, #2a1a0a)", border: "1px solid #3a2a0a", borderRadius: "12px", padding: "12px", textAlign: "center" }}>
                <div style={{ fontSize: "22px", fontWeight: "700", color: "#f59e0b" }}>{day.totalCalories}</div>
                <div style={{ fontSize: "9px", letterSpacing: "2px", color: "#666", textTransform: "uppercase" }}>Calories</div>
              </div>
              <div style={{ background: "linear-gradient(135deg, #0a0a1a, #0a1a2a)", border: "1px solid #0a2a3a", borderRadius: "12px", padding: "12px", textAlign: "center" }}>
                <div style={{ fontSize: "22px", fontWeight: "700", color: "#3b82f6" }}>{day.totalProtein}g</div>
                <div style={{ fontSize: "9px", letterSpacing: "2px", color: "#666", textTransform: "uppercase" }}>Protein</div>
              </div>
              <div style={{ background: "linear-gradient(135deg, #0a1a0a, #0a2a0a)", border: "1px solid #0a3a1a", borderRadius: "12px", padding: "12px", textAlign: "center" }}>
                <div style={{ fontSize: "22px", fontWeight: "700", color: "#4ade80" }}>8–10k</div>
                <div style={{ fontSize: "9px", letterSpacing: "2px", color: "#666", textTransform: "uppercase" }}>Steps</div>
              </div>
            </div>
 
            {day.isRest && (
              <div style={{ background: "#160f2a", border: "1px solid #2a1a4a", borderRadius: "12px", padding: "14px", marginBottom: "14px", display: "flex", gap: "10px", alignItems: "center" }}>
                <span style={{ fontSize: "20px" }}>😴</span>
                <div>
                  <div style={{ fontSize: "13px", fontWeight: "600", color: "#a78bfa" }}>Weekend Rest Day</div>
                  <div style={{ fontSize: "11px", color: "#555", marginTop: "2px" }}>No gym. Hit 8–10k steps and recover.</div>
                </div>
              </div>
            )}
 
            {day.meals.map((meal, i) => {
              if (meal.isSleep) return (
                <div key={i} style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                    <div style={{ width: "30px", height: "30px", borderRadius: "50%", background: "#0f0f1a", border: "1px dashed #2a2a3e", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px" }}>😴</div>
                    {i < day.meals.length - 1 && <div style={{ width: "1px", flex: 1, background: "#1e1e2e", marginTop: "4px", minHeight: "12px" }} />}
                  </div>
                  <div style={{ flex: 1, background: "#0d0d16", border: "1px dashed #1e1e2e", borderRadius: "12px", padding: "11px 13px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ fontSize: "12px", color: "#555", fontStyle: "italic" }}>{meal.note}</div>
                    <span style={{ fontSize: "11px", color: "#a78bfa", fontFamily: "monospace", flexShrink: 0, marginLeft: "8px" }}>{meal.time}</span>
                  </div>
                </div>
              );
              return (
                <div key={i} style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                    <div style={{ width: "30px", height: "30px", borderRadius: "50%", background: "#1a1a2e", border: "1px solid #2a2a3e", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px" }}>{meal.emoji}</div>
                    {i < day.meals.length - 1 && <div style={{ width: "1px", flex: 1, background: "#1e1e2e", marginTop: "4px", minHeight: "12px" }} />}
                  </div>
                  <div style={{ flex: 1, background: "#111118", border: "1px solid #1e1e2e", borderRadius: "12px", padding: "11px 13px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "4px", flexWrap: "wrap", gap: "3px" }}>
                      <div style={{ display: "flex", alignItems: "baseline", gap: "8px", flexWrap: "wrap" }}>
                        <span style={{ fontWeight: "600", fontSize: "13px", color: "#e8e8f0" }}>{meal.name}</span>
                        <span style={{ fontSize: "11px", color: "#f59e0b", fontFamily: "monospace" }}>{meal.time}</span>
                      </div>
                      {meal.calories > 0 && (
                        <div style={{ display: "flex", gap: "8px" }}>
                          <span style={{ fontSize: "10px", color: "#f59e0b" }}>{meal.calories} kcal</span>
                          <span style={{ fontSize: "10px", color: "#3b82f6", fontWeight: "600" }}>{meal.protein}g protein</span>
                        </div>
                      )}
                    </div>
                    {meal.note && <div style={{ fontSize: "10px", color: "#a78bfa", marginBottom: "5px", fontStyle: "italic" }}>{meal.note}</div>}
                    {meal.items.map((item, j) => (
                      <div key={j} style={{ fontSize: "11px", color: "#777", padding: "1px 0", display: "flex", gap: "6px" }}>
                        <span style={{ color: "#333", fontSize: "9px" }}>▸</span>{item}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
 
            <div style={{ background: "#0f100a", border: "1px solid #2a2e1a", borderRadius: "12px", padding: "14px", marginTop: "6px" }}>
              <div style={{ fontSize: "10px", letterSpacing: "3px", color: "#f59e0b", textTransform: "uppercase", marginBottom: "8px", fontFamily: "monospace" }}>
                {day.isRest ? "⏰ Weekend Schedule" : "⏰ Weekday Schedule"}
              </div>
              {day.isRest ? [
                ["Morning", "Wake whenever — no alarm needed"],
                ["During day", "Hit 8–10k steps — walk, errands, anything"],
                ["Sunday", "Meal prep — cook rice, chicken & potatoes in bulk"],
                ["~9:30 PM", "Evening snack + sleep supplements"],
              ].map(([time, desc], i) => (
                <div key={i} style={{ display: "flex", gap: "10px", padding: "2px 0", fontSize: "11px" }}>
                  <span style={{ color: "#a78bfa", fontFamily: "monospace", flexShrink: 0, width: "70px" }}>{time}</span>
                  <span style={{ color: "#555" }}>{desc}</span>
                </div>
              )) : [
                ["11:00 PM", "Sleep 😴 (previous night)"],
                ["~3:20 AM", "Wake · Fajr prayer · eat dates"],
                ["~3:30 AM", "Gym — weights only"],
                ["~4:20 AM", "Leave gym"],
                ["~4:30 AM", "Home · cold shower 🚿"],
                ["~4:45 AM", "Back to bed 😴"],
                ["~9:00 AM", "Wake up · breakfast"],
                ["~12:30 PM", "Lunch"],
                ["~3:30 PM", "Afternoon snack"],
                ["~7:00 PM", "Dinner"],
                ["Evening", "30–45 min walk/jog cardio 🏃"],
                ["~9:30 PM", "Evening snack + sleep supps · bed by 11"],
              ].map(([time, desc], i) => (
                <div key={i} style={{ display: "flex", gap: "10px", padding: "2px 0", fontSize: "11px" }}>
                  <span style={{ color: "#f59e0b", fontFamily: "monospace", flexShrink: 0, width: "68px" }}>{time}</span>
                  <span style={{ color: "#555" }}>{desc}</span>
                </div>
              ))}
            </div>
 
            {/* Protein target reality check */}
            <div style={{ background: "#0a1018", border: "1px solid #1a2a3a", borderRadius: "12px", padding: "14px", marginTop: "10px" }}>
              <div style={{ fontSize: "10px", letterSpacing: "3px", color: "#3b82f6", textTransform: "uppercase", marginBottom: "8px", fontFamily: "monospace" }}>🎯 Protein Target — The Honest Number</div>
              <div style={{ fontSize: "12px", color: "#777", lineHeight: "1.7", marginBottom: "8px" }}>
                Research-backed range is <span style={{ color: "#3b82f6" }}>1.6–2.2g per kg bodyweight</span>. Going higher is wasted.
              </div>
              {[
                ["At 73kg (now)", "117–161g/day"],
                ["At 80kg (mid bulk)", "128–176g/day"],
                ["At 85kg (target)", "136–187g/day"],
              ].map(([label, target], i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", padding: "3px 0", borderBottom: i < 2 ? "1px solid #1a1a2a" : "none" }}>
                  <span style={{ color: "#666" }}>{label}</span>
                  <span style={{ color: "#3b82f6", fontFamily: "monospace" }}>{target}</span>
                </div>
              ))}
              <div style={{ fontSize: "10px", color: "#444", marginTop: "8px", fontStyle: "italic", lineHeight: "1.5" }}>
                The meals naturally hit 200g+ which gives a buffer, but don&apos;t force-feed protein past your range.
              </div>
            </div>
 
            {/* Hydration */}
            <div style={{ background: "#0a141a", border: "1px solid #1a2e3a", borderRadius: "12px", padding: "14px", marginTop: "10px" }}>
              <div style={{ fontSize: "10px", letterSpacing: "3px", color: "#06b6d4", textTransform: "uppercase", marginBottom: "8px", fontFamily: "monospace" }}>💧 Hydration — Drink to Thirst</div>
              <div style={{ fontSize: "12px", color: "#777", lineHeight: "1.7", marginBottom: "6px" }}>
                Target roughly <span style={{ color: "#06b6d4" }}>2.5–3.5L/day</span> with your training load, but listen to your body.
              </div>
              {[
                "Best indicator: urine should be pale straw yellow",
                "Tea, coffee, milk all count toward hydration",
                "Don't force-drink past 4L without electrolytes",
                "Creatine pulls water into muscles — you'll feel thirstier",
              ].map((tip, i) => (
                <div key={i} style={{ fontSize: "11px", color: "#666", padding: "2px 0", display: "flex", gap: "6px" }}>
                  <span style={{ color: "#06b6d4" }}>▸</span>{tip}
                </div>
              ))}
            </div>
          </>
        )}
 
        {/* ── WORKOUTS ── */}
        {activeTab === "workouts" && (
          <>
            {workout.type === "Rest" ? (
              <>
                <div style={{ background: "linear-gradient(135deg, #160f2a, #0a0a0f)", border: "1px solid #2a1a4a", borderRadius: "14px", padding: "20px", marginBottom: "14px", textAlign: "center" }}>
                  <div style={{ fontSize: "36px", marginBottom: "8px" }}>😴</div>
                  <div style={{ fontSize: "18px", fontWeight: "700", color: "#a78bfa" }}>Weekend Rest</div>
                  <div style={{ fontSize: "12px", color: "#555", marginTop: "4px" }}>No gym. Your muscles grow during rest.</div>
                </div>
                <div style={{ background: "#111118", border: "1px solid #1e1e2e", borderRadius: "12px", padding: "16px", marginBottom: "12px" }}>
                  <div style={{ fontSize: "10px", letterSpacing: "3px", color: "#4ade80", textTransform: "uppercase", marginBottom: "10px", fontFamily: "monospace" }}>🚶 Steps Goal — 8,000–10,000</div>
                  {["A 60–90 min walk easily hits 8–10k steps", "Spread steps across the day, don't save them all for evening", "Park further away, take stairs, walk while on calls", "Use your phone or watch to track — what gets measured gets done"].map((tip, i) => (
                    <div key={i} style={{ fontSize: "12px", color: "#888", padding: "4px 0", display: "flex", gap: "8px" }}>
                      <span style={{ color: "#4ade80" }}>✓</span> {tip}
                    </div>
                  ))}
                </div>
                <div style={{ background: "#111118", border: "1px solid #1e1e2e", borderRadius: "12px", padding: "16px" }}>
                  <div style={{ fontSize: "10px", letterSpacing: "3px", color: "#a78bfa", textTransform: "uppercase", marginBottom: "10px", fontFamily: "monospace" }}>Rest Day Checklist</div>
                  {restDayTips.map((tip, i) => (
                    <div key={i} style={{ fontSize: "13px", color: "#888", padding: "5px 0", display: "flex", gap: "10px", borderBottom: i < restDayTips.length - 1 ? "1px solid #1a1a2a" : "none" }}>
                      <span style={{ color: "#a78bfa" }}>✓</span>{tip}
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <>
                <div style={{ background: `linear-gradient(135deg, ${workout.color}12, #0a0a0f)`, border: `1px solid ${workout.color}28`, borderRadius: "14px", padding: "16px", marginBottom: "12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <div style={{ fontSize: "20px", fontWeight: "700", color: workout.color }}>{workout.emoji} {workout.type}</div>
                    <div style={{ fontSize: "12px", color: "#888", marginTop: "2px" }}>{workout.focus}</div>
                    <div style={{ fontSize: "10px", color: "#444", marginTop: "4px", fontFamily: "monospace" }}>🕔 3:30 AM – 4:20 AM · Weights only</div>
                  </div>
                  <div style={{ background: `${workout.color}18`, border: `1px solid ${workout.color}35`, borderRadius: "10px", padding: "8px 14px", textAlign: "center" }}>
                    <div style={{ fontSize: "20px", fontWeight: "700", color: workout.color }}>{workout.exercises.length}</div>
                    <div style={{ fontSize: "9px", color: "#555", letterSpacing: "1px", textTransform: "uppercase" }}>Exercises</div>
                  </div>
                </div>
                <div style={{ background: "#0a1a0a", border: "1px solid #1a3a1a", borderRadius: "10px", padding: "10px 14px", marginBottom: "10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "11px", color: "#4ade80" }}>🚶 Daily Steps Goal</span>
                  <span style={{ fontSize: "13px", fontWeight: "700", color: "#4ade80", fontFamily: "monospace" }}>8,000–10,000</span>
                </div>
                <div style={{ background: "#0a0f1a", border: "1px solid #1a2a3a", borderRadius: "10px", padding: "10px 14px", marginBottom: "10px" }}>
                  <span style={{ fontSize: "10px", color: "#3b82f6", letterSpacing: "2px", textTransform: "uppercase", fontFamily: "monospace" }}>⚡ Warm-Up First</span>
                  <div style={{ fontSize: "11px", color: "#555", marginTop: "3px" }}>5 min light cardio + 2 warm-up sets at 50% before each compound lift</div>
                </div>
                {workout.exercises.map((ex, i) => (
                  <div key={i} style={{ background: "#111118", border: "1px solid #1e1e2e", borderLeft: `3px solid ${workout.color}`, borderRadius: "12px", padding: "12px 14px", marginBottom: "8px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                      <span style={{ fontSize: "13px", fontWeight: "600", color: "#e8e8f0", flex: 1, paddingRight: "8px" }}>{i + 1}. {ex.name}</span>
                      <span style={{ background: `${workout.color}18`, color: workout.color, padding: "3px 8px", borderRadius: "6px", fontSize: "11px", fontFamily: "monospace", whiteSpace: "nowrap", flexShrink: 0 }}>
                        {ex.sets} × {ex.reps}
                      </span>
                    </div>
                    <div style={{ fontSize: "10px", color: "#333", marginTop: "3px" }}>Rest: {ex.rest}</div>
                    {ex.note && <div style={{ fontSize: "11px", color: "#555", marginTop: "4px", fontStyle: "italic" }}>💡 {ex.note}</div>}
                  </div>
                ))}
                <div style={{ background: "#0a1a0f", border: "1px solid #1a3a1a", borderRadius: "12px", padding: "13px", marginBottom: "10px" }}>
                  <div style={{ fontSize: "10px", letterSpacing: "3px", color: "#4ade80", textTransform: "uppercase", marginBottom: "6px", fontFamily: "monospace" }}>🏃 Cardio — Evening (Not After Weights)</div>
                  <div style={{ fontSize: "12px", color: "#888" }}>30–45 min walk/jog in the evening — 1 min walk, 1 min jog (alternate)</div>
                  <div style={{ fontSize: "11px", color: "#444", marginTop: "4px" }}>Splitting cardio from weights by 6+ hours maximises muscle growth. Evening walk also chips into your 8–10k step goal.</div>
                </div>
                <div style={{ background: "#111118", border: "1px solid #2a2a0a", borderRadius: "12px", padding: "13px" }}>
                  <div style={{ fontSize: "10px", letterSpacing: "3px", color: "#f59e0b", textTransform: "uppercase", marginBottom: "6px", fontFamily: "monospace" }}>📈 Progressive Overload</div>
                  <div style={{ fontSize: "12px", color: "#555", lineHeight: "1.6" }}>
                    Add <span style={{ color: "#f59e0b" }}>2.5kg</span> to upper body and <span style={{ color: "#f59e0b" }}>5kg</span> to lower body whenever you hit all reps cleanly. Never miss this.
                  </div>
                </div>
                <div style={{ background: "#1a1019", border: "1px solid #3a1a2e", borderRadius: "12px", padding: "13px", marginTop: "10px" }}>
                  <div style={{ fontSize: "10px", letterSpacing: "3px", color: "#f472b6", textTransform: "uppercase", marginBottom: "6px", fontFamily: "monospace" }}>📐 V-Taper Strategy</div>
                  <div style={{ fontSize: "12px", color: "#666", lineHeight: "1.6", marginBottom: "8px" }}>
                    For wider chest, broader shoulders, smaller waist:
                  </div>
                  {[
                    "Wider chest → Bench, incline press, flyes & pullovers (already in)",
                    "Broader shoulders → Heavy lateral raises 2x a week (Mon dumbbell + Thu cable)",
                    "Wider back → Pull-ups and wide-grip pulldowns flare the lats",
                    "Smaller waist → AVOID weighted side bends (they thicken obliques)",
                    "Trained obliques → Use bodyweight/light work only — vacuums, planks",
                  ].map((tip, i) => (
                    <div key={i} style={{ fontSize: "11px", color: "#888", padding: "3px 0", display: "flex", gap: "8px" }}>
                      <span style={{ color: "#f472b6" }}>▸</span>{tip}
                    </div>
                  ))}
                </div>
              </>
            )}
          </>
        )}
 
        {/* ── SUPPLEMENTS ── */}
        {activeTab === "supplements" && (
          <div>
            <div style={{ background: "#0a0f1a", border: "1px solid #1a2a3a", borderRadius: "10px", padding: "12px 14px", marginBottom: "18px" }}>
              <div style={{ fontSize: "10px", color: "#3b82f6", letterSpacing: "2px", textTransform: "uppercase", fontFamily: "monospace", marginBottom: "4px" }}>💡 Your Exact Products</div>
              <div style={{ fontSize: "12px", color: "#555", lineHeight: "1.6" }}>Doses below are calculated from the nutrition labels on your specific supplements. Tap any card for details.</div>
            </div>
 
            {supplementCategories.map((cat, ci) => (
              <div key={ci} style={{ marginBottom: "22px" }}>
                <div style={{ fontSize: "10px", letterSpacing: "3px", color: cat.color, textTransform: "uppercase", marginBottom: "10px", fontFamily: "monospace" }}>{cat.label}</div>
                {cat.items.map((s, i) => {
                  const key = `${ci}-${i}`;
                  const isOpen = expandedSupp === key;
                  return (
                    <div key={i} onClick={() => setExpandedSupp(isOpen ? null : key)} style={{
                      background: "#111118", border: `1px solid ${s.color}18`, borderLeft: `3px solid ${s.color}`,
                      borderRadius: "12px", padding: "13px 14px", marginBottom: "8px", cursor: "pointer",
                    }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontWeight: "700", fontSize: "14px", color: s.color, marginBottom: "2px" }}>{s.name}</div>
                          <div style={{ fontSize: "11px", color: "#555" }}>{s.timing}</div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "4px", marginLeft: "8px", flexShrink: 0 }}>
                          <div style={{ background: `${s.color}18`, color: s.color, padding: "3px 9px", borderRadius: "20px", fontSize: "10px", fontFamily: "monospace", whiteSpace: "nowrap" }}>
                            {s.dose}
                          </div>
                          <div style={{ fontSize: "9px", color: "#333" }}>{isOpen ? "▲ hide" : "▼ why"}</div>
                        </div>
                      </div>
                      {isOpen && (
                        <div style={{ marginTop: "10px", padding: "10px", background: "#0a0a14", borderRadius: "8px", fontSize: "11px", color: "#888", lineHeight: "1.6", borderTop: `1px solid ${s.color}18` }}>
                          {s.detail}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
 
            <div style={{ background: "#0a1a0f", border: "1px solid #1a3a1a", borderRadius: "12px", padding: "14px", marginBottom: "14px" }}>
              <div style={{ fontSize: "10px", letterSpacing: "3px", color: "#4ade80", textTransform: "uppercase", marginBottom: "8px", fontFamily: "monospace" }}>🧴 Acne Habits</div>
              {["Wash face right after every gym session", "Change pillowcase twice a week", "Stay well hydrated — drink to thirst, pale urine", "Consider reducing dairy if acne persists"].map((tip, i) => (
                <div key={i} style={{ fontSize: "12px", color: "#777", padding: "3px 0", display: "flex", gap: "8px" }}>
                  <span style={{ color: "#4ade80" }}>✓</span> {tip}
                </div>
              ))}
            </div>
 
            <div style={{ background: "#1a0a0a", border: "1px solid #3a1a1a", borderRadius: "12px", padding: "14px" }}>
              <div style={{ fontSize: "10px", letterSpacing: "3px", color: "#f87171", textTransform: "uppercase", marginBottom: "8px", fontFamily: "monospace" }}>✗ Save Your Money</div>
              {["BCAAs — whey covers this completely", "Mass gainers — just eat more real food", "Testosterone boosters — don't work", "Fat burners — don't work"].map((item, i) => (
                <div key={i} style={{ fontSize: "12px", color: "#555", padding: "3px 0", display: "flex", gap: "8px" }}>
                  <span style={{ color: "#f87171" }}>✗</span> {item}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
