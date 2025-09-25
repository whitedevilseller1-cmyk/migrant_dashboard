import React from 'react';
import { Bell, Settings, User, Search, Menu } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface DashboardHeaderProps {
  onMenuClick: () => void;
}

export const DashboardHeader = React.memo(function DashboardHeader({ onMenuClick }: DashboardHeaderProps) {
  return (
    <header className="bg-white border-b border-border px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between shadow-md sticky top-0 z-30">
      {/* Left Section - Mobile Menu + Logo */}
      <div className="flex items-center space-x-3 sm:space-x-4">
        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="sm"
          className="lg:hidden text-gov-blue hover:bg-gov-blue-bg p-2"
          onClick={onMenuClick}
        >
          <Menu className="w-5 h-5" />
        </Button>
        
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Government Logo Placeholder */}
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-gov-blue to-gov-blue-light rounded-lg flex items-center justify-center shadow-sm">
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-sm flex items-center justify-center">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gov-saffron rounded-full"></div>
            </div>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-lg sm:text-xl font-semibold text-gov-blue">Migrant Dashboard</h1>
            <p className="text-xs sm:text-sm text-muted-foreground font-medium">Government Portal</p>
          </div>
          <div className="sm:hidden">
            <h1 className="text-base font-semibold text-gov-blue">Dashboard</h1>
          </div>
        </div>
      </div>

      {/* Center Section - Search (Hidden on mobile) */}
      <div className="hidden md:flex flex-1 max-w-md mx-8">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <input
            type="text"
            placeholder="Search health records, appointments..."
            className="w-full pl-10 pr-4 py-2 text-sm border border-border rounded-lg focus:ring-2 focus:ring-gov-blue-light focus:border-gov-blue-light bg-input-background text-gov-blue placeholder:text-muted-foreground"
          />
        </div>
      </div>

      {/* Right Section - Quick Actions */}
      <div className="flex items-center space-x-2 sm:space-x-3">
        {/* Mobile search button */}
        <Button variant="ghost" size="sm" className="md:hidden text-gov-blue hover:bg-gov-blue-bg p-2">
          <Search className="w-4 h-4" />
        </Button>
        
        <Button variant="ghost" size="sm" className="relative text-gov-blue hover:bg-gov-blue-bg p-2">
          <Bell className="w-4 h-4 sm:w-5 sm:h-5" />
          <Badge className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 p-0 bg-gov-red text-white text-xs flex items-center justify-center">
            3
          </Badge>
        </Button>
        
        <Button variant="ghost" size="sm" className="hidden sm:flex text-gov-blue hover:bg-gov-blue-bg">
          <Settings className="w-5 h-5" />
        </Button>
        
        <Button variant="ghost" size="sm" className="flex items-center space-x-2 text-gov-blue hover:bg-gov-blue-bg p-2 sm:px-3">
          <User className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="hidden md:block font-medium text-sm">Profile</span>
        </Button>
      </div>
    </header>
  );
});