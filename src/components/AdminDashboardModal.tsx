import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import {
  X,
  ShieldCheck,
  Users,
  Calendar,
  Zap,
  TrendingUp,
  Activity,
  Plus,
  Check,
  Search,
  Filter,
  DollarSign,
  Award,
  Clock,
  QrCode,
  Sliders,
  Bell,
  RefreshCw,
  Trash2,
  Lock,
  UserCheck
} from 'lucide-react';

interface DayPassReservation {
  id: string;
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  goal: string;
  status: 'Confirmed' | 'Checked In' | 'VIP Valet Assigned';
  code: string;
}

interface MemberRecord {
  id: string;
  name: string;
  tier: string;
  status: 'Active' | 'Pending Renewal' | 'Paused';
  joinDate: string;
  visitsThisMonth: number;
  assignedCoach: string;
}

export const AdminDashboardModal: React.FC = () => {
  const { activePalette } = useTheme();
  const { isAdminDashboardOpen, closeAdminDashboard, user, logout } = useAuth();

  const [activeTab, setActiveTab] = useState<'overview' | 'members' | 'passes' | 'equipment' | 'financials'>('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [broadcastMessage, setBroadcastMessage] = useState('');
  const [broadcastSent, setBroadcastSent] = useState(false);

  // Initial mock data for Day Pass reservations
  const [reservations, setReservations] = useState<DayPassReservation[]>([
    {
      id: 'RES-101',
      name: 'David Sterling',
      phone: '+1 (555) 389-9000',
      email: 'david@sterling.com',
      date: '2026-07-28',
      time: '10:00 AM',
      goal: 'Strength & Body Transformation',
      status: 'Confirmed',
      code: 'AUR-882194'
    },
    {
      id: 'RES-102',
      name: 'Victoria Thorne',
      phone: '+1 (555) 492-1100',
      email: 'v.thorne@apex.co',
      date: '2026-07-28',
      time: '02:00 PM',
      goal: 'Contrast Hydrotherapy & Spa',
      status: 'VIP Valet Assigned',
      code: 'AUR-991203'
    },
    {
      id: 'RES-103',
      name: 'Julian Vance',
      phone: '+1 (555) 201-9944',
      email: 'julian@vanceventures.com',
      date: '2026-07-29',
      time: '08:00 AM',
      goal: '1-on-1 Master Coaching',
      status: 'Confirmed',
      code: 'AUR-341092'
    },
    {
      id: 'RES-104',
      name: 'Sophia Chen',
      phone: '+1 (555) 778-3011',
      email: 'sophia@techfund.io',
      date: '2026-07-29',
      time: '06:00 PM',
      goal: 'Biohacking & HRV Recovery',
      status: 'Checked In',
      code: 'AUR-552019'
    }
  ]);

  // Initial mock data for Members
  const [members, setMembers] = useState<MemberRecord[]>([
    { id: 'AUR-88492', name: 'Lord Sterling Vance', tier: 'Executive Platinum', status: 'Active', joinDate: '2024-01-15', visitsThisMonth: 18, assignedCoach: 'Marcus Vance' },
    { id: 'AUR-99301', name: 'Lady Eleanor Vance', tier: 'Founding Charter VIP', status: 'Active', joinDate: '2024-02-01', visitsThisMonth: 22, assignedCoach: 'Dr. Chloe Thorne' },
    { id: 'AUR-77210', name: 'Alexander Wright', tier: 'Biometric Elite', status: 'Active', joinDate: '2024-03-10', visitsThisMonth: 14, assignedCoach: 'Elena Vance' },
    { id: 'AUR-66104', name: 'Dr. Harrison Wells', tier: 'Cellular Wellness', status: 'Pending Renewal', joinDate: '2023-11-20', visitsThisMonth: 8, assignedCoach: 'Marcus Vance' },
    { id: 'AUR-55092', name: 'Isabella Rossi', tier: 'Executive Platinum', status: 'Active', joinDate: '2024-05-04', visitsThisMonth: 19, assignedCoach: 'Elena Vance' },
  ]);

  // Facility status state
  const [equipmentStatus, setEquipmentStatus] = useState([
    { name: 'Technogym Biocircuit Rack A', status: 'Optimal', temp: '72°F Air', load: '85%' },
    { name: 'Eucalyptus Steam Vault #1', status: 'Active', temp: '118°F Temp', load: '60%' },
    { name: 'Sub-Zero Cryo Chamber', status: 'Active', temp: '-160°F Cold', load: '90%' },
    { name: 'Hyperice Compression Lounge', status: 'Optimal', temp: 'Room Temp', load: '40%' },
    { name: 'Oxygen Hyperbaric Pod #2', status: 'Maintenance', temp: 'Standby', load: '0%' }
  ]);

  if (!isAdminDashboardOpen) return null;

  const handleUpdateStatus = (id: string, newStatus: 'Confirmed' | 'Checked In' | 'VIP Valet Assigned') => {
    setReservations(prev => prev.map(r => r.id === id ? { ...r, status: newStatus } : r));
  };

  const handleSendBroadcast = (e: React.FormEvent) => {
    e.preventDefault();
    if (!broadcastMessage) return;
    setBroadcastSent(true);
    setTimeout(() => setBroadcastSent(false), 3000);
    setBroadcastMessage('');
  };

  const filteredReservations = reservations.filter(r =>
    r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.phone.includes(searchQuery)
  );

  const filteredMembers = members.filter(m =>
    m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    m.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    m.tier.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      className="fixed inset-0 z-[999999] flex items-center justify-center p-3 sm:p-6 backdrop-blur-3xl bg-[var(--overlay-dark)] transition-opacity duration-300"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeAdminDashboard();
      }}
    >
      <div
        className="border rounded-3xl max-w-6xl w-full h-[92vh] flex flex-col overflow-hidden shadow-[var(--shadow-lg)] relative"
        style={{
          backgroundColor: activePalette.bgCard,
          borderColor: activePalette.accentGold,
        }}
      >
        {/* Top Header Bar */}
        <div
          className="px-6 py-5 border-b flex items-center justify-between shrink-0"
          style={{
            backgroundColor: activePalette.bgMain,
            borderColor: activePalette.borderMain,
          }}
        >
          <div className="flex items-center space-x-4">
            <div
              className="w-10 h-10 rounded-2xl border flex items-center justify-center font-bold"
              style={{
                borderColor: activePalette.accentGold,
                backgroundColor: `${activePalette.accentGold}20`,
                color: activePalette.accentGold,
              }}
            >
              <ShieldCheck size={22} />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-[10px] uppercase font-bold tracking-[0.25em] px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30">
                  Master Director Controls
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-light" style={{ color: activePalette.textPrimary }}>
                Forge Fit Executive Admin Director Dashboard
              </h2>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => {
                logout();
                closeAdminDashboard();
              }}
              className="px-3.5 py-1.5 rounded-full border text-xs font-bold uppercase tracking-wider text-rose-300 border-rose-500/30 bg-rose-500/10 hover:bg-rose-500/20 transition-all"
            >
              Exit Admin
            </button>
            <button
              onClick={closeAdminDashboard}
              className="w-9 h-9 rounded-full flex items-center justify-center border hover:scale-105 active:scale-95 transition-all"
              style={{
                backgroundColor: activePalette.bgCard,
                borderColor: activePalette.borderMain,
                color: activePalette.textPrimary,
              }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Admin Navigation Tabs */}
        <div
          className="px-6 py-3 border-b flex items-center space-x-2 overflow-x-auto no-scrollbar shrink-0"
          style={{
            backgroundColor: activePalette.bgMain,
            borderColor: activePalette.borderMain,
          }}
        >
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center space-x-2 transition-all shrink-0 ${
              activeTab === 'overview' ? 'border shadow-md' : 'opacity-60 hover:opacity-100'
            }`}
            style={{
              backgroundColor: activeTab === 'overview' ? activePalette.bgCard : 'transparent',
              borderColor: activeTab === 'overview' ? activePalette.accentGold : 'transparent',
              color: activeTab === 'overview' ? activePalette.accentGold : activePalette.textSecondary,
            }}
          >
            <Activity size={14} />
            <span>Sanctuary Metrics</span>
          </button>

          <button
            onClick={() => setActiveTab('passes')}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center space-x-2 transition-all shrink-0 ${
              activeTab === 'passes' ? 'border shadow-md' : 'opacity-60 hover:opacity-100'
            }`}
            style={{
              backgroundColor: activeTab === 'passes' ? activePalette.bgCard : 'transparent',
              borderColor: activeTab === 'passes' ? activePalette.accentGold : 'transparent',
              color: activeTab === 'passes' ? activePalette.accentGold : activePalette.textSecondary,
            }}
          >
            <QrCode size={14} />
            <span>VIP Day Pass Bookings ({reservations.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('members')}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center space-x-2 transition-all shrink-0 ${
              activeTab === 'members' ? 'border shadow-md' : 'opacity-60 hover:opacity-100'
            }`}
            style={{
              backgroundColor: activeTab === 'members' ? activePalette.bgCard : 'transparent',
              borderColor: activeTab === 'members' ? activePalette.accentGold : 'transparent',
              color: activeTab === 'members' ? activePalette.accentGold : activePalette.textSecondary,
            }}
          >
            <Users size={14} />
            <span>Member Directory ({members.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('equipment')}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center space-x-2 transition-all shrink-0 ${
              activeTab === 'equipment' ? 'border shadow-md' : 'opacity-60 hover:opacity-100'
            }`}
            style={{
              backgroundColor: activeTab === 'equipment' ? activePalette.bgCard : 'transparent',
              borderColor: activeTab === 'equipment' ? activePalette.accentGold : 'transparent',
              color: activeTab === 'equipment' ? activePalette.accentGold : activePalette.textSecondary,
            }}
          >
            <Zap size={14} />
            <span>Facility Status</span>
          </button>

          <button
            onClick={() => setActiveTab('financials')}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center space-x-2 transition-all shrink-0 ${
              activeTab === 'financials' ? 'border shadow-md' : 'opacity-60 hover:opacity-100'
            }`}
            style={{
              backgroundColor: activeTab === 'financials' ? activePalette.bgCard : 'transparent',
              borderColor: activeTab === 'financials' ? activePalette.accentGold : 'transparent',
              color: activeTab === 'financials' ? activePalette.accentGold : activePalette.textSecondary,
            }}
          >
            <DollarSign size={14} />
            <span>Financial Insights</span>
          </button>
        </div>

        {/* Main Admin Body Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 min-h-0 custom-scrollbar scroll-smooth touch-pan-y">

          {/* TAB 1: OVERVIEW METRICS */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Stat Cards Matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-5 rounded-2xl border space-y-2 shadow-[var(--shadow-sm)]" style={{ backgroundColor: activePalette.bgMain, borderColor: activePalette.borderMain }}>
                  <div className="flex justify-between items-center text-xs" style={{ color: activePalette.textSecondary }}>
                    <span className="uppercase tracking-widest font-semibold">Active Members</span>
                    <Users size={16} className="text-amber-400" />
                  </div>
                  <div className="text-3xl font-serif font-bold text-amber-300">1,284</div>
                  <div className="text-[11px] text-emerald-400 flex items-center space-x-1">
                    <TrendingUp size={12} />
                    <span>+14% new VIP signups this month</span>
                  </div>
                </div>

                <div className="p-5 rounded-2xl border space-y-2 shadow-[var(--shadow-sm)]" style={{ backgroundColor: activePalette.bgMain, borderColor: activePalette.borderMain }}>
                  <div className="flex justify-between items-center text-xs" style={{ color: activePalette.textSecondary }}>
                    <span className="uppercase tracking-widest font-semibold">Monthly Recurring Revenue</span>
                    <DollarSign size={16} className="text-emerald-400" />
                  </div>
                  <div className="text-3xl font-serif font-bold text-emerald-400">$428,500</div>
                  <div className="text-[11px] text-emerald-400 flex items-center space-x-1">
                    <TrendingUp size={12} />
                    <span>99.2% retention rate</span>
                  </div>
                </div>

                <div className="p-5 rounded-2xl border space-y-2 shadow-[var(--shadow-sm)]" style={{ backgroundColor: activePalette.bgMain, borderColor: activePalette.borderMain }}>
                  <div className="flex justify-between items-center text-xs" style={{ color: activePalette.textSecondary }}>
                    <span className="uppercase tracking-widest font-semibold">Pass Reservations</span>
                    <QrCode size={16} className="text-amber-400" />
                  </div>
                  <div className="text-3xl font-serif font-bold text-amber-300">{reservations.length} Pending</div>
                  <div className="text-[11px] text-amber-300">4 guests checked in today</div>
                </div>

                <div className="p-5 rounded-2xl border space-y-2 shadow-[var(--shadow-sm)]" style={{ backgroundColor: activePalette.bgMain, borderColor: activePalette.borderMain }}>
                  <div className="flex justify-between items-center text-xs" style={{ color: activePalette.textSecondary }}>
                    <span className="uppercase tracking-widest font-semibold">Sanctuary Occupancy</span>
                    <Activity size={16} className="text-amber-400" />
                  </div>
                  <div className="text-3xl font-serif font-bold text-amber-300">78%</div>
                  <div className="text-[11px] text-neutral-300">Peak hours: 06:00 - 09:00 AM</div>
                </div>
              </div>

              {/* Quick Actions & Broadcast Panel */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Broadcast Announcement */}
                <div className="p-6 rounded-2xl border space-y-4 shadow-[var(--shadow-md)]" style={{ backgroundColor: activePalette.bgMain, borderColor: activePalette.borderMain }}>
                  <div className="flex items-center space-x-2">
                    <Bell size={18} className="text-amber-400" />
                    <h3 className="font-serif text-lg font-medium" style={{ color: activePalette.textPrimary }}>
                      Broadcast Member Announcement
                    </h3>
                  </div>
                  <p className="text-xs font-light text-neutral-300">
                    Send real-time mobile push notifications and email alerts to all executive sanctuary members.
                  </p>
                  <form onSubmit={handleSendBroadcast} className="space-y-3">
                    <textarea
                      rows={3}
                      placeholder="e.g. VIP Eucalyptus Vault #2 is now open following morning bio-cleaning..."
                      value={broadcastMessage}
                      onChange={(e) => setBroadcastMessage(e.target.value)}
                      className="w-full border rounded-xl p-3 text-xs focus:outline-none"
                      style={{
                        backgroundColor: activePalette.bgCard,
                        borderColor: activePalette.borderMain,
                        color: activePalette.textPrimary,
                      }}
                    />
                    <div className="flex justify-between items-center">
                      {broadcastSent ? (
                        <span className="text-xs text-emerald-400 font-bold flex items-center space-x-1">
                          <Check size={14} />
                          <span>Announcement Transmitted to 1,284 Members!</span>
                        </span>
                      ) : <span />}
                      <button
                        type="submit"
                        style={{ backgroundColor: activePalette.accentGold, color: activePalette.bgMain }}
                        className="px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider font-button shadow-[var(--shadow-sm)] ml-auto"
                      >
                        Transmit Broadcast
                      </button>
                    </div>
                  </form>
                </div>

                {/* Sanctuary Live Status Control */}
                <div className="p-6 rounded-2xl border space-y-4 shadow-[var(--shadow-md)]" style={{ backgroundColor: activePalette.bgMain, borderColor: activePalette.borderMain }}>
                  <div className="flex items-center space-x-2">
                    <Sliders size={18} className="text-amber-400" />
                    <h3 className="font-serif text-lg font-medium" style={{ color: activePalette.textPrimary }}>
                      Live Sanctuary Controls
                    </h3>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div className="flex justify-between items-center p-3 rounded-xl border" style={{ backgroundColor: activePalette.bgCard, borderColor: activePalette.borderMain }}>
                      <div>
                        <span className="font-semibold block" style={{ color: activePalette.textPrimary }}>Valet Reception Gate</span>
                        <span className="text-[10px] text-emerald-400">Automated RFID active</span>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold uppercase">ONLINE</span>
                    </div>

                    <div className="flex justify-between items-center p-3 rounded-xl border" style={{ backgroundColor: activePalette.bgCard, borderColor: activePalette.borderMain }}>
                      <div>
                        <span className="font-semibold block" style={{ color: activePalette.textPrimary }}>Eucalyptus Mist Purifier</span>
                        <span className="text-[10px] text-amber-300">Refill cycle in 3 hours</span>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold uppercase">ACTIVE</span>
                    </div>

                    <div className="flex justify-between items-center p-3 rounded-xl border" style={{ backgroundColor: activePalette.bgCard, borderColor: activePalette.borderMain }}>
                      <div>
                        <span className="font-semibold block" style={{ color: activePalette.textPrimary }}>Sub-Zero Cryotherapy System</span>
                        <span className="text-[10px] text-amber-300">Set at -160°F (-106°C)</span>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold uppercase">OPTIMAL</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: VIP DAY PASS RESERVATIONS */}
          {activeTab === 'passes' && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="font-serif text-2xl font-light" style={{ color: activePalette.textPrimary }}>
                    Guest Day Pass Reservations
                  </h3>
                  <p className="text-xs font-light text-neutral-300">
                    Real-time guest passes requested via website form. Approve, check-in, or assign VIP valet.
                  </p>
                </div>

                <div className="relative w-full sm:w-64">
                  <Search size={14} className="absolute left-3 top-3 text-neutral-400" />
                  <input
                    type="text"
                    placeholder="Search pass, name, code..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs border rounded-xl focus:outline-none"
                    style={{
                      backgroundColor: activePalette.bgMain,
                      borderColor: activePalette.borderMain,
                      color: activePalette.textPrimary,
                    }}
                  />
                </div>
              </div>

              <div className="border rounded-2xl overflow-hidden shadow-[var(--shadow-md)]" style={{ backgroundColor: activePalette.bgMain, borderColor: activePalette.borderMain }}>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="border-b uppercase text-[10px] tracking-wider" style={{ borderColor: activePalette.borderMain, color: activePalette.textSecondary }}>
                      <tr>
                        <th className="p-4">Pass Code</th>
                        <th className="p-4">Guest Name</th>
                        <th className="p-4">Contact</th>
                        <th className="p-4">Date & Time</th>
                        <th className="p-4">Goal</th>
                        <th className="p-4">Status</th>
                        <th className="p-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y" style={{ borderColor: activePalette.borderMain }}>
                      {filteredReservations.map((res) => (
                        <tr key={res.id} className="hover:bg-[var(--card-hover-bg)] transition-colors">
                          <td className="p-4 font-mono font-bold text-amber-300">{res.code}</td>
                          <td className="p-4 font-semibold" style={{ color: activePalette.textPrimary }}>{res.name}</td>
                          <td className="p-4 text-neutral-300">{res.phone}<br /><span className="text-[10px] text-neutral-400">{res.email}</span></td>
                          <td className="p-4 font-mono">{res.date}<br /><span className="text-[10px] text-amber-300">{res.time}</span></td>
                          <td className="p-4 text-neutral-300">{res.goal}</td>
                          <td className="p-4">
                            <span
                              className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${
                                res.status === 'Checked In'
                                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                                  : res.status === 'VIP Valet Assigned'
                                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/30'
                                  : 'bg-blue-500/20 text-blue-300 border-blue-500/30'
                              }`}
                            >
                              {res.status}
                            </span>
                          </td>
                          <td className="p-4 text-right space-x-2">
                            {res.status !== 'Checked In' && (
                              <button
                                onClick={() => handleUpdateStatus(res.id, 'Checked In')}
                                className="px-2.5 py-1 rounded-lg border text-[10px] font-bold uppercase bg-emerald-500/10 text-emerald-300 border-emerald-500/30 hover:bg-emerald-500/20"
                              >
                                Check In
                              </button>
                            )}
                            {res.status !== 'VIP Valet Assigned' && (
                              <button
                                onClick={() => handleUpdateStatus(res.id, 'VIP Valet Assigned')}
                                className="px-2.5 py-1 rounded-lg border text-[10px] font-bold uppercase bg-amber-500/10 text-amber-300 border-amber-500/30 hover:bg-amber-500/20"
                              >
                                Assign Valet
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: MEMBER DIRECTORY */}
          {activeTab === 'members' && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="font-serif text-2xl font-light" style={{ color: activePalette.textPrimary }}>
                    Executive Member Directory
                  </h3>
                  <p className="text-xs font-light text-neutral-300">
                    Manage founding members, assigned master coaches, and VIP tier statuses.
                  </p>
                </div>

                <div className="relative w-full sm:w-64">
                  <Search size={14} className="absolute left-3 top-3 text-neutral-400" />
                  <input
                    type="text"
                    placeholder="Search member ID or name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs border rounded-xl focus:outline-none"
                    style={{
                      backgroundColor: activePalette.bgMain,
                      borderColor: activePalette.borderMain,
                      color: activePalette.textPrimary,
                    }}
                  />
                </div>
              </div>

              <div className="border rounded-2xl overflow-hidden shadow-[var(--shadow-md)]" style={{ backgroundColor: activePalette.bgMain, borderColor: activePalette.borderMain }}>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="border-b uppercase text-[10px] tracking-wider" style={{ borderColor: activePalette.borderMain, color: activePalette.textSecondary }}>
                      <tr>
                        <th className="p-4">Member ID</th>
                        <th className="p-4">Full Name</th>
                        <th className="p-4">Tier</th>
                        <th className="p-4">Visits / Mo</th>
                        <th className="p-4">Master Coach</th>
                        <th className="p-4">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y" style={{ borderColor: activePalette.borderMain }}>
                      {filteredMembers.map((m) => (
                        <tr key={m.id} className="hover:bg-[var(--card-hover-bg)] transition-colors">
                          <td className="p-4 font-mono font-bold text-amber-300">{m.id}</td>
                          <td className="p-4 font-semibold" style={{ color: activePalette.textPrimary }}>{m.name}</td>
                          <td className="p-4 text-amber-200">{m.tier}</td>
                          <td className="p-4 font-mono text-emerald-400">{m.visitsThisMonth} visits</td>
                          <td className="p-4 text-neutral-300">{m.assignedCoach}</td>
                          <td className="p-4">
                            <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase border ${m.status === 'Active' ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' : 'bg-amber-500/20 text-amber-300 border-amber-500/30'}`}>
                              {m.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: EQUIPMENT & SANCTUARY MONITOR */}
          {activeTab === 'equipment' && (
            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-light" style={{ color: activePalette.textPrimary }}>
                Sanctuary Machinery & Hydro-Bio Lab Monitor
              </h3>
              <p className="text-xs font-light text-neutral-300">
                Real-time telemetry feeds for biometric strength machinery and thermal recovery vaults.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {equipmentStatus.map((eq, i) => (
                  <div key={i} className="p-5 rounded-2xl border space-y-3 shadow-[var(--shadow-sm)]" style={{ backgroundColor: activePalette.bgMain, borderColor: activePalette.borderMain }}>
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-serif text-base font-medium" style={{ color: activePalette.textPrimary }}>{eq.name}</h4>
                        <span className="text-[10px] font-mono text-amber-300 block">{eq.temp}</span>
                      </div>
                      <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold uppercase border ${eq.status === 'Maintenance' ? 'bg-rose-500/20 text-rose-300 border-rose-500/30' : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'}`}>
                        {eq.status}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between text-[10px]" style={{ color: activePalette.textSecondary }}>
                        <span>Capacity Load</span>
                        <span>{eq.load}</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-neutral-800 overflow-hidden">
                        <div className="h-full bg-amber-400 rounded-full" style={{ width: eq.load }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: FINANCIAL INSIGHTS */}
          {activeTab === 'financials' && (
            <div className="space-y-6">
              <h3 className="font-serif text-2xl font-light" style={{ color: activePalette.textPrimary }}>
                Financial Overview & Sanctuary Analytics
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-6 rounded-2xl border space-y-2" style={{ backgroundColor: activePalette.bgMain, borderColor: activePalette.borderMain }}>
                  <span className="text-xs uppercase tracking-widest font-semibold block text-neutral-400">Total YTD Revenue</span>
                  <span className="font-serif text-4xl font-bold text-amber-300">$2,842,000</span>
                  <span className="text-xs text-emerald-400 block">+18.4% vs last fiscal year</span>
                </div>

                <div className="p-6 rounded-2xl border space-y-2" style={{ backgroundColor: activePalette.bgMain, borderColor: activePalette.borderMain }}>
                  <span className="text-xs uppercase tracking-widest font-semibold block text-neutral-400">Average Member LTV</span>
                  <span className="font-serif text-4xl font-bold text-emerald-400">$14,200</span>
                  <span className="text-xs text-emerald-400 block">36-month average retention</span>
                </div>

                <div className="p-6 rounded-2xl border space-y-2" style={{ backgroundColor: activePalette.bgMain, borderColor: activePalette.borderMain }}>
                  <span className="text-xs uppercase tracking-widest font-semibold block text-neutral-400">Private Coaching Revenue</span>
                  <span className="font-serif text-4xl font-bold text-amber-300">$128,400 / mo</span>
                  <span className="text-xs text-amber-300 block">Fully booked 3 weeks ahead</span>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
