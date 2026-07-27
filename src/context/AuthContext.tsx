import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface UserProfile {
  name: string;
  email: string;
  memberId: string;
  membershipType: string;
  role: 'member' | 'admin';
  joinDate: string;
  renewalDate: string;
  daysRemaining: number;
  avatarUrl?: string;
  streakDays: number;
  completedWorkouts: number;
  currentWeightLbs: number;
  targetWeightLbs: number;
  caloriesBurnedToday: number;
  waterOunces: number;
  stepsToday: number;
}

interface AuthContextType {
  isLoggedIn: boolean;
  isAdmin: boolean;
  user: UserProfile | null;
  isLoginModalOpen: boolean;
  isDashboardOpen: boolean;
  isAdminDashboardOpen: boolean;
  isForgotPasswordOpen: boolean;
  login: (username?: string, role?: 'member' | 'admin') => void;
  logout: () => void;
  openLoginModal: () => void;
  closeLoginModal: () => void;
  openDashboard: () => void;
  closeDashboard: () => void;
  openAdminDashboard: () => void;
  closeAdminDashboard: () => void;
  openForgotPassword: () => void;
  closeForgotPassword: () => void;
  updateUserStats: (updated: Partial<UserProfile>) => void;
}

const defaultUser: UserProfile = {
  name: 'Lord Sterling Vance',
  email: 'sterling.vance@aureus.club',
  memberId: 'AUR-88492',
  membershipType: 'VIP Executive Platinum',
  role: 'member',
  joinDate: '2024-01-15',
  renewalDate: '2026-11-30',
  daysRemaining: 127,
  avatarUrl: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785142690/images_rdktty.jpg',
  streakDays: 18,
  completedWorkouts: 42,
  currentWeightLbs: 182,
  targetWeightLbs: 178,
  caloriesBurnedToday: 840,
  waterOunces: 96,
  stepsToday: 11420
};

const defaultAdmin: UserProfile = {
  name: 'Sanctuary Director Alistair Vance',
  email: 'director@aureus.club',
  memberId: 'ADM-00001',
  membershipType: 'Master Director & Admin',
  role: 'admin',
  joinDate: '2023-01-01',
  renewalDate: '2030-12-31',
  daysRemaining: 999,
  avatarUrl: 'https://res.cloudinary.com/akmdvmmw/image/upload/v1785151139/images_5_nfyewv.jpg',
  streakDays: 365,
  completedWorkouts: 250,
  currentWeightLbs: 180,
  targetWeightLbs: 180,
  caloriesBurnedToday: 1200,
  waterOunces: 128,
  stepsToday: 15400
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    return localStorage.getItem('aureus_logged_in') === 'true';
  });
  
  const [user, setUser] = useState<UserProfile | null>(() => {
    const saved = localStorage.getItem('aureus_user');
    return saved ? JSON.parse(saved) : defaultUser;
  });

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [isAdminDashboardOpen, setIsAdminDashboardOpen] = useState(false);
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);

  const isAdmin = user?.role === 'admin';

  // Auto decrement membership countdown daily
  useEffect(() => {
    if (user) {
      const now = new Date();
      const renewal = new Date(user.renewalDate);
      const diffTime = renewal.getTime() - now.getTime();
      const diffDays = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
      if (diffDays !== user.daysRemaining) {
        setUser((prev) => prev ? { ...prev, daysRemaining: diffDays } : null);
      }
    }

    const handleOpenLogin = () => setIsLoginModalOpen(true);
    window.addEventListener('open-login', handleOpenLogin);
    return () => window.removeEventListener('open-login', handleOpenLogin);
  }, []);

  const login = (username?: string, role: 'member' | 'admin' = 'member') => {
    setIsLoggedIn(true);
    localStorage.setItem('aureus_logged_in', 'true');

    const base = role === 'admin' ? defaultAdmin : defaultUser;
    const newUser: UserProfile = {
      ...base,
      role,
      name: username && username.trim().length > 0 ? username : base.name,
      email: username && username.includes('@') ? username : `${(username || role).toLowerCase().replace(/\s+/g, '')}@aureus.club`
    };

    setUser(newUser);
    localStorage.setItem('aureus_user', JSON.stringify(newUser));
    setIsLoginModalOpen(false);
    setIsForgotPasswordOpen(false);

    if (role === 'admin') {
      setIsAdminDashboardOpen(true);
      setIsDashboardOpen(false);
    } else {
      setIsDashboardOpen(true);
      setIsAdminDashboardOpen(false);
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('aureus_logged_in');
    setIsDashboardOpen(false);
    setIsAdminDashboardOpen(false);
  };

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);
  const openDashboard = () => {
    if (isAdmin) {
      setIsAdminDashboardOpen(true);
    } else {
      setIsDashboardOpen(true);
    }
  };
  const closeDashboard = () => setIsDashboardOpen(false);
  const openAdminDashboard = () => setIsAdminDashboardOpen(true);
  const closeAdminDashboard = () => setIsAdminDashboardOpen(false);

  const openForgotPassword = () => {
    setIsLoginModalOpen(false);
    setIsForgotPasswordOpen(true);
  };
  const closeForgotPassword = () => setIsForgotPasswordOpen(false);

  const updateUserStats = (updated: Partial<UserProfile>) => {
    setUser((prev) => {
      if (!prev) return null;
      const next = { ...prev, ...updated };
      localStorage.setItem('aureus_user', JSON.stringify(next));
      return next;
    });
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isAdmin,
        user,
        isLoginModalOpen,
        isDashboardOpen,
        isAdminDashboardOpen,
        isForgotPasswordOpen,
        login,
        logout,
        openLoginModal,
        closeLoginModal,
        openDashboard,
        closeDashboard,
        openAdminDashboard,
        closeAdminDashboard,
        openForgotPassword,
        closeForgotPassword,
        updateUserStats
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
