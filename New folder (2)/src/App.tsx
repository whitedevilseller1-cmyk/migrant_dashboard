import { useState, useCallback, useMemo } from 'react';
import { DashboardHeader } from './components/DashboardHeader';
import { DashboardSidebar } from './components/DashboardSidebar';
import { ProfilePage } from './components/ProfilePage';
import { 
  UpcomingAppointments, 
  HealthRecords, 
  ProfileSnapshot, 
  EmergencyServices 
} from './components/DashboardCards';

// Dashboard Content Component
function DashboardContent() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
      {/* Welcome Section */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-xl sm:text-2xl font-semibold text-gov-blue mb-2">
          Welcome back, Ravi Kumar
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          Manage your health records and appointments from your government portal dashboard.
        </p>
      </div>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
        {/* Appointments Card */}
        <div className="xl:col-span-2">
          <UpcomingAppointments />
        </div>
        
        {/* Profile Snapshot */}
        <div>
          <ProfileSnapshot />
        </div>
        
        {/* Health Records */}
        <div>
          <HealthRecords />
        </div>
        
        {/* Emergency Services */}
        <div className="xl:col-span-2">
          <EmergencyServices />
        </div>
      </div>

      {/* Quick Stats */}
      <div className="mt-6 sm:mt-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        <div className="bg-white rounded-lg p-3 sm:p-4 border border-border shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="mb-2 sm:mb-0">
              <p className="text-xs sm:text-sm text-muted-foreground">Total Appointments</p>
              <p className="text-xl sm:text-2xl font-semibold text-gov-blue">24</p>
            </div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gov-blue-bg rounded-lg flex items-center justify-center self-end sm:self-auto">
              <div className="w-4 h-4 sm:w-5 sm:h-5 bg-gov-blue-light rounded"></div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-3 sm:p-4 border border-border shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="mb-2 sm:mb-0">
              <p className="text-xs sm:text-sm text-muted-foreground">Health Records</p>
              <p className="text-xl sm:text-2xl font-semibold text-gov-blue">12</p>
            </div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gov-green-bg rounded-lg flex items-center justify-center self-end sm:self-auto">
              <div className="w-4 h-4 sm:w-5 sm:h-5 bg-gov-green rounded"></div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-3 sm:p-4 border border-border shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="mb-2 sm:mb-0">
              <p className="text-xs sm:text-sm text-muted-foreground">Days Since Checkup</p>
              <p className="text-xl sm:text-2xl font-semibold text-gov-blue">15</p>
            </div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gov-saffron-bg rounded-lg flex items-center justify-center self-end sm:self-auto">
              <div className="w-4 h-4 sm:w-5 sm:h-5 bg-gov-saffron rounded"></div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-3 sm:p-4 border border-border shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="mb-2 sm:mb-0">
              <p className="text-xs sm:text-sm text-muted-foreground">Notifications</p>
              <p className="text-xl sm:text-2xl font-semibold text-gov-blue">3</p>
            </div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gov-red-bg rounded-lg flex items-center justify-center self-end sm:self-auto">
              <div className="w-4 h-4 sm:w-5 sm:h-5 bg-gov-red rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Page wrapper components
function HealthRecordsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-xl sm:text-2xl font-semibold text-gov-blue mb-2">
          Health Records
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          View and manage your complete medical records and documents.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <HealthRecords />
      </div>
    </div>
  );
}

function AppointmentsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-xl sm:text-2xl font-semibold text-gov-blue mb-2">
          Doctor Appointments
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          Schedule and manage your medical appointments.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <UpcomingAppointments />
      </div>
    </div>
  );
}

function EmergencyPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-xl sm:text-2xl font-semibold text-gov-blue mb-2">
          Emergency Services
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          Quick access to emergency contacts and medical services.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <EmergencyServices />
      </div>
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleTabChange = useCallback((tab: string) => {
    setActiveTab(tab);
    setSidebarOpen(false);
  }, []);

  const handleMenuClick = useCallback(() => {
    setSidebarOpen(true);
  }, []);

  const handleSidebarClose = useCallback(() => {
    setSidebarOpen(false);
  }, []);

  const currentContent = useMemo(() => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardContent />;
      case 'profile':
        return <ProfilePage />;
      case 'health-records':
        return <HealthRecordsPage />;
      case 'appointments':
        return <AppointmentsPage />;
      case 'emergency':
        return <EmergencyPage />;
      default:
        return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
            <div className="mb-6 sm:mb-8">
              <h1 className="text-xl sm:text-2xl font-semibold text-gov-blue mb-2">
                Page Not Found
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground">
                The requested page could not be found.
              </p>
            </div>
          </div>
        );
    }
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-gov-blue-bg">
      <div className="flex">
        {/* Sidebar */}
        <DashboardSidebar 
          activeTab={activeTab} 
          onTabChange={handleTabChange}
          isOpen={sidebarOpen}
          onClose={handleSidebarClose}
        />
        
        {/* Main Content */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Header */}
          <DashboardHeader onMenuClick={handleMenuClick} />
          
          {/* Page Content */}
          <main className="flex-1 p-4 sm:p-6">
            {currentContent}
          </main>

          {/* Footer */}
          <footer className="bg-white border-t border-border px-4 sm:px-6 py-4 shadow-sm">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0">
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-gov-blue to-gov-saffron rounded flex items-center justify-center">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-sm"></div>
                    </div>
                    <span className="text-sm text-gov-blue font-medium">Government of India</span>
                  </div>
                  <div className="text-sm text-gov-green font-semibold">✓ Secure Portal</div>
                </div>
                <div className="text-xs text-muted-foreground text-center sm:text-right">
                  <div className="sm:hidden">© 2024 Ministry of Health & Family Welfare</div>
                  <div className="hidden sm:block">© 2024 Ministry of Health & Family Welfare • Privacy Policy • Terms of Service</div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}