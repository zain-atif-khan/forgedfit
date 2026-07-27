import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import {
  X,
  User,
  Calendar as CalendarIcon,
  Clock,
  Award,
  Flame,
  Dumbbell,
  Plus,
  Trash2,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Droplets,
  Footprints,
  LogOut,
  CheckCircle2,
  TrendingDown,
  Activity,
  Heart
} from 'lucide-react';

interface WorkoutEvent {
  id: string;
  date: string; // YYYY-MM-DD
  title: string;
  category: string; // 'Chest' | 'Legs' | 'Cardio' | 'Yoga' | 'Recovery' | 'HIIT' | 'Upper Body' | 'Lower Body'
  durationMinutes: number;
  sets?: number;
  reps?: number;
  notes?: string;
}

const CATEGORY_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  Chest: { bg: 'bg-amber-500/20', text: 'text-amber-300', border: 'border-amber-500/40' },
  Legs: { bg: 'bg-emerald-500/20', text: 'text-emerald-300', border: 'border-emerald-500/40' },
  Cardio: { bg: 'bg-rose-500/20', text: 'text-rose-300', border: 'border-rose-500/40' },
  Yoga: { bg: 'bg-purple-500/20', text: 'text-purple-300', border: 'border-purple-500/40' },
  Recovery: { bg: 'bg-cyan-500/20', text: 'text-cyan-300', border: 'border-cyan-500/40' },
  HIIT: { bg: 'bg-orange-500/20', text: 'text-orange-300', border: 'border-orange-500/40' },
  'Upper Body': { bg: 'bg-blue-500/20', text: 'text-blue-300', border: 'border-blue-500/40' },
  'Lower Body': { bg: 'bg-teal-500/20', text: 'text-teal-300', border: 'border-teal-500/40' },
};

export const MemberDashboardModal: React.FC = () => {
  const { activePalette } = useTheme();
  const { isDashboardOpen, closeDashboard, user, logout, updateUserStats } = useAuth();

  const [currentTime, setCurrentTime] = useState<string>('');
  const [currentDateStr, setCurrentDateStr] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>(
    new Date().toISOString().split('T')[0]
  );

  const [calendarYear, setCalendarYear] = useState(2026);
  const [calendarMonth, setCalendarMonth] = useState(6); // 0-indexed: 6 = July

  // Saved workouts in localStorage
  const [workouts, setWorkouts] = useState<WorkoutEvent[]>(() => {
    const saved = localStorage.getItem('aureus_member_workouts');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // fallback default
      }
    }
    const today = new Date().toISOString().split('T')[0];
    return [
      {
        id: '1',
        date: today,
        title: 'Hypertrophy Chest & Deltoids',
        category: 'Chest',
        durationMinutes: 60,
        sets: 16,
        reps: 10,
        notes: 'Incline DB Press 100lbs, Cable Flyes & Dip Finisher'
      },
      {
        id: '2',
        date: today,
        title: 'Infrared Sauna & Plunge',
        category: 'Recovery',
        durationMinutes: 45,
        notes: '20 mins 180°F sauna followed by 5 mins 45°F plunge'
      }
    ];
  });

  // Workout form state
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState('Chest');
  const [newDuration, setNewDuration] = useState(45);
  const [newSets, setNewSets] = useState(4);
  const [newReps, setNewReps] = useState(10);
  const [newNotes, setNewNotes] = useState('');
  const [isAddingWorkout, setIsAddingWorkout] = useState(false);

  // Live clock
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
      setCurrentDateStr(now.toLocaleDateString([], { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  // Save workouts to localStorage
  useEffect(() => {
    localStorage.setItem('aureus_member_workouts', JSON.stringify(workouts));
  }, [workouts]);

  if (!isDashboardOpen || !user) return null;

  const handleAddWorkout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newEvent: WorkoutEvent = {
      id: Date.now().toString(),
      date: selectedDate,
      title: newTitle.trim(),
      category: newCategory,
      durationMinutes: Number(newDuration),
      sets: Number(newSets),
      reps: Number(newReps),
      notes: newNotes.trim()
    };

    setWorkouts((prev) => [...prev, newEvent]);
    setNewTitle('');
    setNewNotes('');
    setIsAddingWorkout(false);

    // Update stats
    updateUserStats({
      completedWorkouts: user.completedWorkouts + 1,
      caloriesBurnedToday: user.caloriesBurnedToday + Math.round(newDuration * 8)
    });
  };

  const handleDeleteWorkout = (id: string) => {
    setWorkouts((prev) => prev.filter((w) => w.id !== id));
  };

  const handleAddWater = () => {
    updateUserStats({ waterOunces: user.waterOunces + 8 });
  };

  // Days in selected calendar month
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const daysInMonth = getDaysInMonth(calendarYear, calendarMonth);
  const firstDay = getFirstDayOfMonth(calendarYear, calendarMonth);

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const handlePrevMonth = () => {
    if (calendarMonth === 0) {
      setCalendarMonth(11);
      setCalendarYear((y) => y - 1);
    } else {
      setCalendarMonth((m) => m - 1);
    }
  };

  const handleNextMonth = () => {
    if (calendarMonth === 11) {
      setCalendarMonth(0);
      setCalendarYear((y) => y + 1);
    } else {
      setCalendarMonth((m) => m + 1);
    }
  };

  const selectedDateWorkouts = workouts.filter((w) => w.date === selectedDate);

  // AI Workout Recommender
  const getAiRecommendation = () => {
    const categories = ['Chest & Triceps', 'Leg Architectural Power', 'Explosive HIIT & Conditioning', 'Longevity & Mobility Yoga', 'Full Body Recomp', 'Contrast Plunge & Sauna'];
    const idx = new Date(selectedDate).getDate() % categories.length;
    const recs = [
      {
        title: 'Hypertrophy Chest & Triceps Structural Focus',
        category: 'Chest',
        duration: 55,
        difficulty: 'Advanced',
        calories: 520,
        desc: 'Focus on 45° Incline DB presses, weighted dips, and mechanical dropsets.'
      },
      {
        title: 'Architectural Leg & Posterior Chain Power',
        category: 'Legs',
        duration: 65,
        difficulty: 'Elite',
        calories: 680,
        desc: 'Safety bar squats, Romanian deadlifts, and belt squat tempo pulses.'
      },
      {
        title: 'High-Velocity Athletic HIIT & Sled Pushes',
        category: 'HIIT',
        duration: 40,
        difficulty: 'High',
        calories: 490,
        desc: 'AirBike intervals, 100lb sled pushes, and kettlebell clean & presses.'
      },
      {
        title: 'Full Body Mobility & Vinyasa Reset',
        category: 'Yoga',
        duration: 50,
        difficulty: 'Moderate',
        calories: 310,
        desc: 'Hip opener sequence, spine decompression, and deep diaphragmatic breathwork.'
      },
      {
        title: 'Targeted Upper Body Recomp & Lat Width',
        category: 'Upper Body',
        duration: 60,
        difficulty: 'Advanced',
        calories: 560,
        desc: 'Neutral grip pullups, chest supported rows, and facepull supersets.'
      },
      {
        title: 'Biohacking Thermal Recovery & Plunge',
        category: 'Recovery',
        duration: 45,
        difficulty: 'Restorative',
        calories: 220,
        desc: '3 cycles: 15 mins 180°F infrared sauna + 3 mins 45°F cold plunge.'
      }
    ];
    return recs[idx];
  };

  const aiRec = getAiRecommendation();

  const handleAddAiRecToCalendar = () => {
    const newEvent: WorkoutEvent = {
      id: Date.now().toString(),
      date: selectedDate,
      title: aiRec.title,
      category: aiRec.category,
      durationMinutes: aiRec.duration,
      notes: aiRec.desc
    };
    setWorkouts((prev) => [...prev, newEvent]);
    updateUserStats({
      completedWorkouts: user.completedWorkouts + 1,
      caloriesBurnedToday: user.caloriesBurnedToday + aiRec.calories
    });
  };

  return (
    <div
      className="fixed inset-0 z-[999999] flex items-center justify-center p-3 sm:p-6 backdrop-blur-3xl bg-[var(--overlay-dark)] animate-in fade-in duration-300 overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeDashboard();
      }}
    >
      <div
        className="relative max-w-6xl w-full my-auto rounded-3xl border shadow-[var(--shadow-lg)] overflow-hidden flex flex-col max-h-[94vh]"
        style={{
          backgroundColor: activePalette.bgMain,
          borderColor: activePalette.accentGold,
        }}
      >
        {/* Top Member Header Bar */}
        <div
          className="p-6 sm:p-8 border-b flex flex-col md:flex-row md:items-center justify-between gap-6 shrink-0 relative"
          style={{
            backgroundColor: activePalette.bgCard,
            borderColor: activePalette.borderMain,
          }}
        >
          {/* Member Profile Avatar & Welcome */}
          <div className="flex items-center space-x-5">
            <div className="relative shrink-0">
              <img
                src={user.avatarUrl}
                alt={user.name}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 shadow-[var(--shadow-md)]"
                style={{ borderColor: activePalette.accentGold }}
              />
              <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 border-2 border-black rounded-full flex items-center justify-center text-[10px] text-[var(--text-ivory)] font-bold" title="Active VIP Status">
                ✓
              </span>
            </div>

            <div>
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] uppercase font-mono font-bold tracking-wider border bg-amber-500/10 text-amber-300 border-amber-500/30">
                  {user.membershipType}
                </span>
                <span className="text-xs font-mono font-semibold" style={{ color: activePalette.textSecondary }}>
                  {user.memberId}
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-light tracking-tight mt-1" style={{ color: activePalette.textPrimary }}>
                Welcome, {user.name}
              </h2>
              <p className="text-xs font-light mt-0.5" style={{ color: activePalette.textSecondary }}>
                {currentDateStr} • <span className="font-mono text-amber-300">{currentTime}</span>
              </p>
            </div>
          </div>

          {/* Countdown & Live Renewal Widget */}
          <div className="flex items-center space-x-4 self-start md:self-auto">
            <div
              className="p-3.5 px-5 rounded-2xl border text-center shadow-md flex items-center space-x-3"
              style={{
                backgroundColor: activePalette.bgMain,
                borderColor: activePalette.borderMain,
              }}
            >
              <Clock size={20} style={{ color: activePalette.accentGold }} />
              <div className="text-left">
                <span className="text-[10px] uppercase tracking-wider block font-semibold" style={{ color: activePalette.textSecondary }}>
                  Membership Status
                </span>
                <div className="flex items-baseline space-x-1.5">
                  <span className="font-serif text-xl font-bold" style={{ color: activePalette.accentGold }}>
                    {user.daysRemaining} Days
                  </span>
                  <span className="text-[10px] font-light" style={{ color: activePalette.textSecondary }}>
                    Remaining
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={logout}
              title="Logout Session"
              className="p-3.5 rounded-2xl border flex items-center space-x-2 text-xs uppercase tracking-wider font-bold transition-all hover:bg-rose-500/20 hover:text-rose-300 hover:border-rose-500/40"
              style={{
                backgroundColor: activePalette.bgMain,
                borderColor: activePalette.borderMain,
                color: activePalette.textSecondary,
              }}
            >
              <LogOut size={16} />
              <span className="hidden sm:inline">Logout</span>
            </button>

            <button
              onClick={closeDashboard}
              className="w-10 h-10 rounded-full flex items-center justify-center border transition-transform hover:scale-110 active:scale-95 shrink-0"
              style={{
                backgroundColor: activePalette.bgMain,
                borderColor: activePalette.borderMain,
                color: activePalette.textPrimary,
              }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Member Suite Quick Section Jump Bar */}
        <div
          className="px-6 py-2.5 border-b flex items-center space-x-2 overflow-x-auto no-scrollbar shrink-0 text-xs"
          style={{
            backgroundColor: activePalette.bgMain,
            borderColor: activePalette.borderMain,
          }}
        >
          <span className="text-[10px] uppercase tracking-wider font-semibold shrink-0" style={{ color: activePalette.textSecondary }}>
            Quick Navigation:
          </span>
          {[
            { label: '📊 Metrics', id: 'dash-sec-stats' },
            { label: '📅 Interactive Calendar', id: 'dash-sec-calendar' },
            { label: '🏋️ Workout Planner', id: 'dash-sec-planner' },
            { label: '🤖 AI Protocol', id: 'dash-sec-ai' },
            { label: '💧 Biohacking & Spa', id: 'dash-sec-biohacking' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => {
                const el = document.getElementById(tab.id);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-3 py-1 rounded-full border text-[11px] font-semibold hover:border-amber-400 transition-colors shrink-0"
              style={{
                backgroundColor: activePalette.bgCard,
                borderColor: activePalette.borderMain,
                color: activePalette.accentGold,
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Modal Main Dashboard Content Area */}
        <div id="member-dashboard-scroll-body" className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1 min-h-0 custom-scrollbar scroll-smooth touch-pan-y">
          {/* Quick Stats Grid Widgets */}
          <div id="dash-sec-stats" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="p-4 rounded-2xl border flex flex-col justify-between" style={{ backgroundColor: activePalette.bgCard, borderColor: activePalette.borderMain }}>
              <div className="flex justify-between items-start">
                <span className="text-[10px] uppercase tracking-wider font-semibold" style={{ color: activePalette.textSecondary }}>Workout Streak</span>
                <Flame size={16} className="text-amber-400" />
              </div>
              <div className="mt-3">
                <span className="font-serif text-2xl font-bold text-amber-300">{user.streakDays} Days</span>
                <span className="text-[10px] block opacity-70" style={{ color: activePalette.textSecondary }}>Unbroken Activity</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl border flex flex-col justify-between" style={{ backgroundColor: activePalette.bgCard, borderColor: activePalette.borderMain }}>
              <div className="flex justify-between items-start">
                <span className="text-[10px] uppercase tracking-wider font-semibold" style={{ color: activePalette.textSecondary }}>Workouts Done</span>
                <Dumbbell size={16} className="text-emerald-400" />
              </div>
              <div className="mt-3">
                <span className="font-serif text-2xl font-bold text-emerald-300">{user.completedWorkouts}</span>
                <span className="text-[10px] block opacity-70" style={{ color: activePalette.textSecondary }}>Sessions Logged</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl border flex flex-col justify-between" style={{ backgroundColor: activePalette.bgCard, borderColor: activePalette.borderMain }}>
              <div className="flex justify-between items-start">
                <span className="text-[10px] uppercase tracking-wider font-semibold" style={{ color: activePalette.textSecondary }}>Weight Goal</span>
                <TrendingDown size={16} className="text-cyan-400" />
              </div>
              <div className="mt-3">
                <span className="font-serif text-2xl font-bold text-cyan-300">{user.currentWeightLbs} lbs</span>
                <span className="text-[10px] block opacity-70 text-cyan-400/80">Target: {user.targetWeightLbs} lbs</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl border flex flex-col justify-between" style={{ backgroundColor: activePalette.bgCard, borderColor: activePalette.borderMain }}>
              <div className="flex justify-between items-start">
                <span className="text-[10px] uppercase tracking-wider font-semibold" style={{ color: activePalette.textSecondary }}>Calories Today</span>
                <Activity size={16} className="text-rose-400" />
              </div>
              <div className="mt-3">
                <span className="font-serif text-2xl font-bold text-rose-300">{user.caloriesBurnedToday} kcal</span>
                <span className="text-[10px] block opacity-70" style={{ color: activePalette.textSecondary }}>Active Burn</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl border flex flex-col justify-between" style={{ backgroundColor: activePalette.bgCard, borderColor: activePalette.borderMain }}>
              <div className="flex justify-between items-start">
                <span className="text-[10px] uppercase tracking-wider font-semibold" style={{ color: activePalette.textSecondary }}>Hydration</span>
                <Droplets size={16} className="text-blue-400" />
              </div>
              <div className="mt-3 flex items-baseline justify-between">
                <span className="font-serif text-2xl font-bold text-blue-300">{user.waterOunces} oz</span>
                <button
                  onClick={handleAddWater}
                  className="text-[10px] font-bold px-2 py-0.5 rounded border border-blue-400/40 bg-blue-500/20 text-blue-300 hover:bg-blue-500/40"
                  title="Add 8 oz water"
                >
                  +8 oz
                </button>
              </div>
            </div>

            <div className="p-4 rounded-2xl border flex flex-col justify-between" style={{ backgroundColor: activePalette.bgCard, borderColor: activePalette.borderMain }}>
              <div className="flex justify-between items-start">
                <span className="text-[10px] uppercase tracking-wider font-semibold" style={{ color: activePalette.textSecondary }}>Steps Today</span>
                <Footprints size={16} className="text-purple-400" />
              </div>
              <div className="mt-3">
                <span className="font-serif text-2xl font-bold text-purple-300">{user.stepsToday.toLocaleString()}</span>
                <span className="text-[10px] block opacity-70" style={{ color: activePalette.textSecondary }}>Daily Goal: 10,000</span>
              </div>
            </div>
          </div>

          {/* Main 2-Column Section: Left Calendar Planner + Right AI Recommender & Logs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Interactive Calendar (Cols 1-7) */}
            <div className="lg:col-span-7 space-y-6">
              <div id="dash-sec-calendar" className="p-6 rounded-3xl border shadow-[var(--shadow-md)]" style={{ backgroundColor: activePalette.bgCard, borderColor: activePalette.borderMain }}>
                {/* Calendar Month Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <CalendarIcon size={20} style={{ color: activePalette.accentGold }} />
                    <h3 className="font-serif text-xl sm:text-2xl font-medium" style={{ color: activePalette.textPrimary }}>
                      {monthNames[calendarMonth]} {calendarYear}
                    </h3>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={handlePrevMonth}
                      className="p-2 rounded-xl border hover:bg-[var(--card-hover-bg)] transition-colors"
                      style={{ borderColor: activePalette.borderMain, color: activePalette.textPrimary }}
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      onClick={handleNextMonth}
                      className="p-2 rounded-xl border hover:bg-[var(--card-hover-bg)] transition-colors"
                      style={{ borderColor: activePalette.borderMain, color: activePalette.textPrimary }}
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>

                {/* Day of Week Headers */}
                <div className="grid grid-cols-7 gap-2 text-center text-[10px] uppercase font-mono font-bold mb-3" style={{ color: activePalette.textSecondary }}>
                  <span>Sun</span>
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                </div>

                {/* Calendar Days Grid */}
                <div className="grid grid-cols-7 gap-2">
                  {/* Empty leading padding slots */}
                  {Array.from({ length: firstDay }).map((_, i) => (
                    <div key={`empty-${i}`} className="h-12 rounded-xl opacity-20 bg-neutral-900/40" />
                  ))}

                  {/* Day Buttons */}
                  {Array.from({ length: daysInMonth }).map((_, i) => {
                    const dayNum = i + 1;
                    const formattedDay = dayNum < 10 ? `0${dayNum}` : `${dayNum}`;
                    const formattedMonth = calendarMonth + 1 < 10 ? `0${calendarMonth + 1}` : `${calendarMonth + 1}`;
                    const dateStr = `${calendarYear}-${formattedMonth}-${formattedDay}`;

                    const isSelected = selectedDate === dateStr;
                    const isToday = dateStr === new Date().toISOString().split('T')[0];
                    const dayWorkouts = workouts.filter((w) => w.date === dateStr);

                    return (
                      <button
                        key={dateStr}
                        onClick={() => setSelectedDate(dateStr)}
                        className={`h-12 rounded-xl border p-1 flex flex-col justify-between items-center transition-all relative ${
                          isSelected ? 'ring-2 ring-amber-400 font-bold scale-[1.05]' : 'hover:border-amber-400/50'
                        }`}
                        style={{
                          backgroundColor: isSelected
                            ? `${activePalette.accentGold}25`
                            : isToday
                            ? `${activePalette.accentGold}10`
                            : activePalette.bgMain,
                          borderColor: isSelected
                            ? activePalette.accentGold
                            : isToday
                            ? `${activePalette.accentGold}60`
                            : activePalette.borderMain,
                          color: isSelected ? activePalette.accentGold : activePalette.textPrimary,
                        }}
                      >
                        <span className="text-xs">{dayNum}</span>

                        {/* Event Category Indicator Dots */}
                        <div className="flex space-x-1 overflow-hidden">
                          {dayWorkouts.map((w) => (
                            <span
                              key={w.id}
                              className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"
                            />
                          ))}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Selected Day Workouts List & Form */}
              <div id="dash-sec-planner" className="p-6 rounded-3xl border shadow-[var(--shadow-md)]" style={{ backgroundColor: activePalette.bgCard, borderColor: activePalette.borderMain }}>
                <div className="flex items-center justify-between mb-4 border-b pb-3" style={{ borderColor: activePalette.borderMain }}>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider font-semibold block" style={{ color: activePalette.accentGold }}>
                      Schedule & Planner
                    </span>
                    <h4 className="font-serif text-lg font-medium" style={{ color: activePalette.textPrimary }}>
                      Workouts for {selectedDate}
                    </h4>
                  </div>

                  <button
                    onClick={() => setIsAddingWorkout(!isAddingWorkout)}
                    className="px-4 py-2 rounded-full border text-xs uppercase tracking-wider font-bold flex items-center space-x-1.5 transition-all hover:scale-105"
                    style={{
                      backgroundColor: isAddingWorkout ? activePalette.bgMain : activePalette.accentGold,
                      color: isAddingWorkout ? activePalette.textPrimary : activePalette.bgMain,
                      borderColor: activePalette.accentGold,
                    }}
                  >
                    <Plus size={14} />
                    <span>{isAddingWorkout ? 'Cancel' : 'Add Workout'}</span>
                  </button>
                </div>

                {/* Add Workout Form */}
                {isAddingWorkout && (
                  <form onSubmit={handleAddWorkout} className="p-4 mb-6 rounded-2xl border space-y-4 animate-in fade-in" style={{ backgroundColor: activePalette.bgMain, borderColor: activePalette.accentGold }}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-[10px] uppercase tracking-wider block font-semibold mb-1" style={{ color: activePalette.textSecondary }}>
                          Workout Title *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Heavy Upper Body Architectural"
                          value={newTitle}
                          onChange={(e) => setNewTitle(e.target.value)}
                          className="w-full border rounded-xl px-3 py-2 text-xs focus:outline-none"
                          style={{
                            backgroundColor: activePalette.bgCard,
                            borderColor: activePalette.borderMain,
                            color: activePalette.textPrimary,
                          }}
                        />
                      </div>

                      <div>
                        <label className="text-[10px] uppercase tracking-wider block font-semibold mb-1" style={{ color: activePalette.textSecondary }}>
                          Category Tag
                        </label>
                        <select
                          value={newCategory}
                          onChange={(e) => setNewCategory(e.target.value)}
                          className="w-full border rounded-xl px-3 py-2 text-xs focus:outline-none"
                          style={{
                            backgroundColor: activePalette.bgCard,
                            borderColor: activePalette.borderMain,
                            color: activePalette.textPrimary,
                          }}
                        >
                          <option value="Chest">Chest</option>
                          <option value="Legs">Legs</option>
                          <option value="Cardio">Cardio</option>
                          <option value="Yoga">Yoga</option>
                          <option value="Recovery">Recovery</option>
                          <option value="HIIT">HIIT</option>
                          <option value="Upper Body">Upper Body</option>
                          <option value="Lower Body">Lower Body</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      <div>
                        <label className="text-[10px] uppercase tracking-wider block font-semibold mb-1" style={{ color: activePalette.textSecondary }}>
                          Duration (Mins)
                        </label>
                        <input
                          type="number"
                          min={10}
                          max={180}
                          value={newDuration}
                          onChange={(e) => setNewDuration(Number(e.target.value))}
                          className="w-full border rounded-xl px-3 py-2 text-xs focus:outline-none"
                          style={{
                            backgroundColor: activePalette.bgCard,
                            borderColor: activePalette.borderMain,
                            color: activePalette.textPrimary,
                          }}
                        />
                      </div>

                      <div>
                        <label className="text-[10px] uppercase tracking-wider block font-semibold mb-1" style={{ color: activePalette.textSecondary }}>
                          Sets
                        </label>
                        <input
                          type="number"
                          min={1}
                          max={30}
                          value={newSets}
                          onChange={(e) => setNewSets(Number(e.target.value))}
                          className="w-full border rounded-xl px-3 py-2 text-xs focus:outline-none"
                          style={{
                            backgroundColor: activePalette.bgCard,
                            borderColor: activePalette.borderMain,
                            color: activePalette.textPrimary,
                          }}
                        />
                      </div>

                      <div>
                        <label className="text-[10px] uppercase tracking-wider block font-semibold mb-1" style={{ color: activePalette.textSecondary }}>
                          Reps
                        </label>
                        <input
                          type="number"
                          min={1}
                          max={50}
                          value={newReps}
                          onChange={(e) => setNewReps(Number(e.target.value))}
                          className="w-full border rounded-xl px-3 py-2 text-xs focus:outline-none"
                          style={{
                            backgroundColor: activePalette.bgCard,
                            borderColor: activePalette.borderMain,
                            color: activePalette.textPrimary,
                          }}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] uppercase tracking-wider block font-semibold mb-1" style={{ color: activePalette.textSecondary }}>
                        Notes / Weights Used
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Incline Bench 225lbs x 4 sets"
                        value={newNotes}
                        onChange={(e) => setNewNotes(e.target.value)}
                        className="w-full border rounded-xl px-3 py-2 text-xs focus:outline-none"
                        style={{
                          backgroundColor: activePalette.bgCard,
                          borderColor: activePalette.borderMain,
                          color: activePalette.textPrimary,
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      style={{ backgroundColor: activePalette.accentGold, color: activePalette.bgMain }}
                      className="w-full py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider font-button"
                    >
                      Save Workout Event
                    </button>
                  </form>
                )}

                {/* Workout List */}
                {selectedDateWorkouts.length === 0 ? (
                  <p className="text-xs font-light text-center py-6" style={{ color: activePalette.textSecondary }}>
                    No workouts scheduled for {selectedDate}. Click "Add Workout" or use the AI Recommender.
                  </p>
                ) : (
                  <div className="space-y-3">
                    {selectedDateWorkouts.map((w) => {
                      const tagColor = CATEGORY_COLORS[w.category] || CATEGORY_COLORS.Chest;
                      return (
                        <div
                          key={w.id}
                          className="p-4 rounded-2xl border flex items-center justify-between transition-all hover:scale-[1.01]"
                          style={{
                            backgroundColor: activePalette.bgMain,
                            borderColor: activePalette.borderMain,
                          }}
                        >
                          <div className="space-y-1">
                            <div className="flex items-center space-x-2">
                              <span className={`px-2.5 py-0.5 rounded-full text-[9px] uppercase font-mono font-bold border ${tagColor.bg} ${tagColor.text} ${tagColor.border}`}>
                                {w.category}
                              </span>
                              <span className="text-xs font-semibold" style={{ color: activePalette.textPrimary }}>
                                {w.title}
                              </span>
                            </div>

                            <p className="text-[11px] font-light" style={{ color: activePalette.textSecondary }}>
                              {w.durationMinutes} Mins {w.sets ? `• ${w.sets} Sets x ${w.reps} Reps` : ''} {w.notes ? `• ${w.notes}` : ''}
                            </p>
                          </div>

                          <button
                            onClick={() => handleDeleteWorkout(w.id)}
                            className="p-2 rounded-lg text-rose-400 hover:bg-rose-500/10 transition-colors"
                            title="Delete workout"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: AI Recommender & Health Protocol (Cols 8-12) */}
            <div className="lg:col-span-5 space-y-6">
              {/* AI Workout Recommender Widget */}
              <div id="dash-sec-ai" className="p-6 rounded-3xl border shadow-[var(--shadow-md)] relative overflow-hidden" style={{ backgroundColor: activePalette.bgCard, borderColor: activePalette.accentGold }}>
                <div className="flex items-center space-x-2 mb-3">
                  <Sparkles size={18} style={{ color: activePalette.accentGold }} />
                  <span className="text-[10px] uppercase tracking-[0.25em] font-bold" style={{ color: activePalette.accentGold }}>
                    AI Protocol Recommender
                  </span>
                </div>

                <h4 className="font-serif text-xl font-medium mb-2" style={{ color: activePalette.textPrimary }}>
                  Recommended Protocol
                </h4>

                <div className="p-4 rounded-2xl border mb-4 space-y-2" style={{ backgroundColor: activePalette.bgMain, borderColor: activePalette.borderMain }}>
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-bold" style={{ color: activePalette.accentGold }}>
                      {aiRec.title}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono font-bold">
                      {aiRec.difficulty}
                    </span>
                  </div>

                  <p className="text-xs font-light" style={{ color: activePalette.textSecondary }}>
                    {aiRec.desc}
                  </p>

                  <div className="flex items-center space-x-4 pt-2 text-[11px] font-mono" style={{ color: activePalette.textSecondary }}>
                    <span>⏱ {aiRec.duration} Mins</span>
                    <span>🔥 ~{aiRec.calories} kcal</span>
                  </div>
                </div>

                <button
                  onClick={handleAddAiRecToCalendar}
                  style={{ backgroundColor: activePalette.accentGold, color: activePalette.bgMain }}
                  className="w-full py-3 rounded-full font-bold text-xs uppercase tracking-wider font-button hover:opacity-90 transition-all shadow-md flex items-center justify-center space-x-2"
                >
                  <Plus size={14} />
                  <span>Add Recommended Protocol To {selectedDate}</span>
                </button>
              </div>

              {/* Recovery Suite & Spa Reservations */}
              <div id="dash-sec-biohacking" className="p-6 rounded-3xl border shadow-[var(--shadow-md)]" style={{ backgroundColor: activePalette.bgCard, borderColor: activePalette.borderMain }}>
                <span className="text-[10px] uppercase tracking-[0.22em] font-semibold block mb-1" style={{ color: activePalette.accentGold }}>
                  Biohacking Suite
                </span>
                <h4 className="font-serif text-lg font-medium mb-4" style={{ color: activePalette.textPrimary }}>
                  Reserved Recovery Sessions
                </h4>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-2xl border flex items-center justify-between text-xs" style={{ backgroundColor: activePalette.bgMain, borderColor: activePalette.borderMain }}>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-400" />
                      <div>
                        <span className="font-semibold block" style={{ color: activePalette.textPrimary }}>45°F Contrast Cold Plunge</span>
                        <span className="text-[10px] font-light" style={{ color: activePalette.textSecondary }}>Today • 11:30 AM</span>
                      </div>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-mono font-bold">Confirmed</span>
                  </div>

                  <div className="p-3.5 rounded-2xl border flex items-center justify-between text-xs" style={{ backgroundColor: activePalette.bgMain, borderColor: activePalette.borderMain }}>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-amber-400" />
                      <div>
                        <span className="font-semibold block" style={{ color: activePalette.textPrimary }}>Eucalyptus Steam Vault</span>
                        <span className="text-[10px] font-light" style={{ color: activePalette.textSecondary }}>Tomorrow • 05:00 PM</span>
                      </div>
                    </div>
                    <span className="text-[10px] text-amber-300 font-mono font-bold">Reserved</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
