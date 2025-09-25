import React from 'react';
import { 
  LayoutDashboard, 
  FileText, 
  Calendar, 
  User, 
  Bell, 
  AlertCircle,
  QrCode,
  HelpCircle,
  X
} from 'lucide-react';
import { Button } from './ui/button';

const navigationItems = [
  { icon: LayoutDashboard, label: 'Dashboard', key: 'dashboard' },
  { icon: FileText, label: 'Health Records', key: 'health-records' },
  { icon: Calendar, label: 'Doctor Appointment', key: 'appointments' },
  { icon: User, label: 'Profile', key: 'profile' },
  { icon: Bell, label: 'Notifications', key: 'notifications' },
  { icon: AlertCircle, label: 'Emergency Services', key: 'emergency' },
];

interface DashboardSidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

export const DashboardSidebar = React.memo(function DashboardSidebar({ activeTab, onTabChange, isOpen, onClose }: DashboardSidebarProps) {
  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      <aside className={`
        fixed lg:relative z-50 lg:z-auto
        w-64 lg:w-64 bg-white border-r border-border 
        h-screen flex flex-col shadow-lg
        transform transition-transform duration-300 ease-in-out lg:transform-none
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
      {/* Mobile close button */}
      <div className="lg:hidden flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-gradient-to-br from-gov-blue to-gov-saffron rounded flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-sm"></div>
          </div>
          <span className="font-medium text-gov-blue">Menu</span>
        </div>
        <Button variant="ghost" size="sm" onClick={onClose} className="text-gov-blue hover:bg-gov-blue-bg">
          <X className="w-5 h-5" />
        </Button>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 px-4 py-4 lg:py-6 space-y-1 lg:space-y-2 overflow-y-auto">
        {navigationItems.map((item, index) => (
          <Button
            key={index}
            variant={activeTab === item.key ? "default" : "ghost"}
            className={`w-full justify-start space-x-3 h-10 lg:h-11 font-medium text-sm lg:text-base ${
              activeTab === item.key 
                ? 'bg-gov-blue text-white hover:bg-gov-blue/90 shadow-sm' 
                : 'text-gov-blue hover:bg-gov-blue-bg hover:text-gov-blue'
            }`}
            onClick={() => onTabChange(item.key)}
          >
            <item.icon className="w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0" />
            <span className="truncate">{item.label}</span>
          </Button>
        ))}
      </nav>

      {/* Quick Actions */}
      <div className="p-4 border-t border-border space-y-2 lg:space-y-3">
        <div className="text-xs lg:text-sm font-semibold text-gov-blue mb-2">Quick Access</div>
        
        <Button variant="outline" className="w-full justify-start space-x-2 lg:space-x-3 h-9 lg:h-10 text-xs lg:text-sm border-gov-blue-light text-gov-blue hover:bg-gov-blue-bg">
          <QrCode className="w-3 h-3 lg:w-4 lg:h-4 flex-shrink-0" />
          <span>Show Health ID</span>
        </Button>
        
        <Button variant="ghost" size="sm" className="w-full justify-start space-x-2 lg:space-x-3 h-8 lg:h-9 text-xs lg:text-sm text-gov-blue-light hover:bg-gov-blue-bg hover:text-gov-blue">
          <HelpCircle className="w-3 h-3 lg:w-4 lg:h-4 flex-shrink-0" />
          <span>Forgot ID?</span>
        </Button>
      </div>

      {/* Footer */}
      <div className="p-3 lg:p-4 border-t border-border bg-gov-blue-bg">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-br from-gov-blue to-gov-saffron rounded-lg flex items-center justify-center shadow-sm flex-shrink-0">
            <div className="w-3 h-3 lg:w-4 lg:h-4 bg-white rounded-sm"></div>
          </div>
          <div className="text-xs min-w-0">
            <div className="font-semibold text-gov-blue truncate">Government of India</div>
            <div className="text-gov-green font-medium">✓ Verified Portal</div>
          </div>
        </div>
      </div>
    </aside>
    </>
  );
});