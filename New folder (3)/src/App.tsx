// src/App.tsx
import React, { useState, useCallback, useMemo, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard, User, HeartPulse, Stethoscope, Bell, MessageSquareWarning, Sun, Moon,
  Menu, X, Search, ChevronDown, Phone, Download, Upload, Paperclip,
  CheckCircle2, AlertCircle, Clock, MapPin, QrCode, ShieldCheck, Languages
} from 'lucide-react';
import { BarChart, Bar, ResponsiveContainer } from 'recharts';

// Import UI components from your new library
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "./components/ui/alert-dialog";
import { cn } from "./components/ui/utils"

// --- TYPES ---
type TimelineColor = 'blue' | 'green' | 'saffron' | 'gray';

interface User {
  name: string;
  healthId: string;
  age: number;
  bloodGroup: string;
  location: string;
  emergencyContact: string;
  avatarUrl: string;
}

interface Appointment {
  id: number;
  type: string;
  doctor: string;
  date: string;
  status: 'confirmed' | 'pending';
}

interface HealthRecord {
  id: number;
  name: string;
  date: string;
  size: string;
}

interface HealthJourneyItem {
  id: number;
  date: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: TimelineColor;
}

interface NearbyService {
  id: number;
  name: string;
  distance: string;
}

interface EmergencyContact {
  id: number;
  name: string;
  number: string;
}

interface Stats {
  appointments: number;
  records: number;
  daysSinceCheckup: number;
  notifications: number;
}

interface ChartData {
  name: string;
  records: number;
}

type Color = 'blue' | 'green' | 'saffron' | 'red';

interface InteractiveStatCardProps {
  title: string;
  value: number | string;
  icon: React.ComponentType<{ className?: string }>;
  color: Color;
  data?: ChartData[];
  children?: ReactNode;
}

interface SidebarLinkProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

interface DashboardHeaderProps {
  onMenuClick: () => void;
  theme: string;
  toggleTheme: () => void;
}

interface DashboardSidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

// --- MOCK DATA ---
const user: User = {
  name: "Ravi Kumar",
  healthId: "MH2024789123",
  age: 32,
  bloodGroup: "O+",
  location: "Mumbai, MH",
  emergencyContact: "+91 98765-43210",
  avatarUrl: `https://api.dicebear.com/8.x/initials/svg?seed=Ravi%20Kumar`,
};

const appointments: Appointment[] = [
  { id: 1, type: "General Checkup", doctor: "Dr. Sharma", date: "Dec 24, 2024 at 10:00 AM", status: "confirmed" },
  { id: 2, type: "Follow-up", doctor: "Dr. Patel", date: "Dec 28, 2024 at 2:30 PM", status: "pending" },
];

const healthRecords: HealthRecord[] = [
  { id: 1, name: "Blood Test Report", date: "Dec 15, 2024", size: "2.4 MB" },
  { id: 2, name: "Vaccination Certificate", date: "Nov 20, 2024", size: "1.1 MB" },
  { id: 3, name: "Medical History", date: "Oct 05, 2024", size: "890 KB" },
];

const healthJourney: HealthJourneyItem[] = [
    { id: 1, date: "Dec 24, 2024", title: "General Checkup", description: "Routine checkup with Dr. Sharma. All vitals normal.", icon: Stethoscope, color: "blue" },
    { id: 2, date: "Nov 20, 2024", title: "Flu Vaccine", description: "Received annual influenza vaccination.", icon: ShieldCheck, color: "green" },
    { id: 3, date: "Oct 05, 2024", title: "Initial Registration", description: "Successfully registered on the Migrant Health Portal.", icon: User, color: "gray" },
];

const nearbyServices: NearbyService[] = [
  { id: 1, name: "City General Hospital", distance: "1.2 km away" },
  { id: 2, name: "Community Health Center", distance: "0.8 km away" },
  { id: 3, name: "Police Station - Sector 15", distance: "2.1 km away" },
];

const emergencyContacts: EmergencyContact[] = [
    { id: 1, name: "Emergency Helpline", number: "108" },
    { id: 2, name: "Police Emergency", number: "100" },
    { id: 3, name: "Women Helpline", number: "1091" },
    { id: 4, name: "Migrant Worker Helpline", number: "1800-111-555" },
];

const stats: Stats = {
  appointments: 24,
  records: 12,
  daysSinceCheckup: 15,
  notifications: 3,
};

const healthRecordsChartData: ChartData[] = [
  { name: 'Jul', records: 1 }, { name: 'Aug', records: 2 }, { name: 'Sep', records: 1 },
  { name: 'Oct', records: 1 }, { name: 'Nov', records: 2 }, { name: 'Dec', records: 1 },
];


// --- NEW & ENHANCED DASHBOARD COMPONENTS ---

function InteractiveStatCard({ title, value, icon: Icon, color, data, children }: InteractiveStatCardProps) {
  const colorClasses: Record<Color, { bg: string; text: string; fill?: string }> = {
    blue: { bg: 'bg-gov-blue-bg', text: 'text-gov-blue', fill: 'var(--chart-1)' },
    green: { bg: 'bg-gov-green-bg', text: 'text-gov-green', fill: 'var(--chart-2)' },
    saffron: { bg: 'bg-gov-saffron-bg', text: 'text-gov-saffron' },
    red: { bg: 'bg-gov-red-bg', text: 'text-gov-red' },
  };
  const currentColors = colorClasses[color] || colorClasses.blue;

  return (
    <Card className="transition-all hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        <div className={cn("flex h-8 w-8 items-center justify-center rounded-lg", currentColors.bg)}>
            <Icon className={cn("h-4 w-4", currentColors.text)} />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground">{value}</div>
        {children}
        {data && (
            <div className="h-16 mt-4 -ml-6">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} margin={{ top: 5, right: 10, left: 10, bottom: 0 }}>
                        <Bar dataKey="records" fill={currentColors.fill} radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        )}
      </CardContent>
    </Card>
  );
}

function UpcomingAppointments() {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
            <CardTitle>Upcoming Appointments</CardTitle>
            <Button variant="ghost" size="sm">View All</Button>
        </div>
        <CardDescription>Your scheduled medical appointments</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {appointments.map(apt => (
            <li key={apt.id} className="flex items-center space-x-4 p-3 rounded-lg transition-colors hover:bg-secondary">
              <div className={cn("flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full", apt.status === 'confirmed' ? 'bg-gov-green-bg' : 'bg-gov-saffron-bg')}>
                {apt.status === 'confirmed' ? <CheckCircle2 className="h-5 w-5 text-gov-green" /> : <Clock className="h-5 w-5 text-gov-saffron" />}
              </div>
              <div className="flex-1">
                <p className="font-semibold">{apt.type}</p>
                <p className="text-sm text-muted-foreground">{apt.doctor} • {apt.date}</p>
              </div>
              <Badge variant={apt.status === 'confirmed' ? 'default' : 'secondary'} className={cn(apt.status === 'confirmed' ? 'bg-gov-green-bg text-gov-green' : 'bg-gov-saffron-bg text-gov-saffron')}>{apt.status}</Badge>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

function ProfileSnapshot() {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle>Profile Snapshot</CardTitle>
        <CardDescription>Your health ID and key information</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex items-center space-x-4 mb-4">
            <div className="relative">
                <img src={user.avatarUrl} alt={user.name} className="h-16 w-16 rounded-full border-2 border-primary" />
            </div>
          <div>
            <p className="font-bold text-lg">{user.name}</p>
            <p className="text-xs text-muted-foreground">{user.healthId}</p>
            <Badge className="mt-1 bg-gov-green-bg text-gov-green">✓ Verified</Badge>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between"><span>Age:</span> <span className="font-medium">{user.age} years</span></div>
          <div className="flex justify-between"><span>Blood Group:</span> <span className="font-medium text-red-600">{user.bloodGroup}</span></div>
          <div className="flex justify-between"><span>Location:</span> <span className="font-medium">{user.location}</span></div>
          <div className="flex justify-between items-center"><span>Emergency:</span> <a href={`tel:${user.emergencyContact}`} className="font-medium text-primary hover:underline">{user.emergencyContact}</a></div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full"><QrCode className="mr-2 h-4 w-4" /> Show QR Code</Button>
      </CardFooter>
    </Card>
  );
}

function HealthRecords() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Personal Health Records</CardTitle>
                <CardDescription>Upload, view, and manage your documents</CardDescription>
            </CardHeader>
            <CardContent>
                <ul className="space-y-3 mb-4">
                    {healthRecords.map(rec => (
                        <li key={rec.id} className="flex items-center space-x-3 p-2.5 rounded-lg border">
                            <Paperclip className="h-5 w-5 text-muted-foreground" />
                            <div className="flex-1">
                                <p className="font-medium text-sm">{rec.name}</p>
                                <p className="text-xs text-muted-foreground">{rec.date} • {rec.size}</p>
                            </div>
                            <Button variant="ghost" size="icon" className="h-8 w-8"><Download className="h-4 w-4" /></Button>
                        </li>
                    ))}
                </ul>
                <div className="flex space-x-2">
                    <Button className="w-full bg-gov-green hover:bg-gov-green/90"><Upload className="mr-2 h-4 w-4" /> Upload</Button>
                    <Button variant="secondary" className="w-full"><Paperclip className="mr-2 h-4 w-4" /> Attach</Button>
                </div>
            </CardContent>
        </Card>
    );
}

function HealthJourneyTimeline() {
    const colorClasses: Record<TimelineColor, { bg: string; border: string; icon: string }> = {
        blue: { bg: 'bg-gov-blue-bg', border: 'border-gov-blue', icon: 'text-gov-blue' },
        green: { bg: 'bg-gov-green-bg', border: 'border-gov-green', icon: 'text-gov-green' },
        saffron: { bg: 'bg-gov-saffron-bg', border: 'border-gov-saffron', icon: 'text-gov-saffron' },
        gray: { bg: 'bg-secondary', border: 'border-muted-foreground', icon: 'text-muted-foreground' },
    };
    return (
        <Card>
            <CardHeader>
                <CardTitle>My Health Journey</CardTitle>
                <CardDescription>A timeline of your key health events</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="relative pl-2">
                    <div className="absolute left-7 top-2 bottom-2 w-0.5 bg-border -z-0" />
                    <ul className="space-y-8">
                        {healthJourney.map(event => {
                             const currentColors = colorClasses[event.color] || colorClasses.gray;
                             const Icon = event.icon;
                             return (
                                <li key={event.id} className="flex items-start space-x-4">
                                    <div className={cn("flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full border-2 bg-background z-10", currentColors.border, currentColors.bg)}>
                                        <Icon className={cn("h-5 w-5", currentColors.icon)} />
                                    </div>
                                    <div className="flex-1 pt-1.5">
                                        <p className="font-semibold">{event.title}</p>
                                        <p className="text-xs text-muted-foreground mb-1">{event.date}</p>
                                        <p className="text-sm">{event.description}</p>
                                    </div>
                                </li>
                             )
                        })}
                    </ul>
                </div>
            </CardContent>
        </Card>
    )
}

function EmergencyServices() {
    const [isAlertOpen, setIsAlertOpen] = useState(false);
    return (
        <>
        <Card className="border-gov-red/50 bg-gov-red-bg/50">
            <CardHeader>
                <div className="flex items-center space-x-2">
                    <MessageSquareWarning className="h-6 w-6 text-gov-red" />
                    <CardTitle className="text-gov-red">Emergency Services</CardTitle>
                </div>
                <CardDescription className="text-gov-red/80">Quick access to emergency contacts and nearby services.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                        <p className="font-semibold text-sm mb-3">Emergency Contacts</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {emergencyContacts.map(c => (
                                <a key={c.id} href={`tel:${c.number}`} className="flex items-center space-x-3 p-3 rounded-lg bg-background border transition-colors hover:border-gov-red">
                                    <Phone className="h-5 w-5 text-gov-red" />
                                    <div>
                                        <p className="font-medium text-sm">{c.name}</p>
                                        <p className="text-xs text-muted-foreground">{c.number}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div>
                        <p className="font-semibold text-sm mb-3">Nearby Services</p>
                        <ul className="space-y-2">
                           {nearbyServices.map(s => (
                                <li key={s.id} className="flex items-center justify-between p-3 rounded-lg bg-background border">
                                    <div>
                                        <p className="font-medium text-sm">{s.name}</p>
                                        <p className="text-xs text-muted-foreground">{s.distance}</p>
                                    </div>
                                    <Button variant="ghost" size="icon" className="h-8 w-8"><MapPin className="h-4 w-4" /></Button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 mt-6">
                    <Button onClick={() => setIsAlertOpen(true)} className="w-full bg-gov-red hover:bg-gov-red/90"><AlertCircle className="mr-2 h-4 w-4"/>SOS Alert</Button>
                    <Button variant="secondary" className="w-full">Medical Info</Button>
                </div>
            </CardContent>
        </Card>
        <AlertDialog open={isAlertOpen} onOpenChange={setIsAlertOpen}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Confirm SOS Alert?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This will immediately notify your emergency contact ({user.emergencyContact}) with your current location. Are you sure?
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={() => setIsAlertOpen(false)}>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => {setIsAlertOpen(false);}}>Yes, Send Alert</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
        </>
    );
}


// --- LAYOUT COMPONENTS ---

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

function DashboardContent() {
  return (
    <>
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-2xl font-bold text-foreground">Welcome back, {user.name.split(' ')[0]}</h1>
        <p className="text-muted-foreground mt-1">You have <span className="font-semibold text-primary">{stats.notifications} new notifications</span> and an appointment coming up.</p>
      </motion.div>
      <div className="my-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        <motion.div variants={cardVariants} initial="hidden" animate="visible" transition={{ delay: 0 * 0.05, duration: 0.4, ease: "easeOut" }}>
            <InteractiveStatCard title="Total Appointments" value={stats.appointments} icon={Stethoscope} color="blue" />
        </motion.div>
        <motion.div variants={cardVariants} initial="hidden" animate="visible" transition={{ delay: 1 * 0.05, duration: 0.4, ease: "easeOut" }}>
            <InteractiveStatCard title="Health Records" value={stats.records} icon={HeartPulse} color="green" data={healthRecordsChartData} />
        </motion.div>
        <motion.div variants={cardVariants} initial="hidden" animate="visible" transition={{ delay: 2 * 0.05, duration: 0.4, ease: "easeOut" }}>
            <InteractiveStatCard title="Days Since Checkup" value={stats.daysSinceCheckup} icon={Clock} color="saffron" />
        </motion.div>
        <motion.div variants={cardVariants} initial="hidden" animate="visible" transition={{ delay: 3 * 0.05, duration: 0.4, ease: "easeOut" }}>
            <InteractiveStatCard title="Notifications" value={stats.notifications} icon={Bell} color="red" />
        </motion.div>
        <motion.div variants={cardVariants} initial="hidden" animate="visible" transition={{ delay: 4 * 0.05, duration: 0.4, ease: "easeOut" }}>
            <InteractiveStatCard title="Emergency Contacts" value={emergencyContacts.length} icon={Phone} color="red" />
        </motion.div>
        <motion.div variants={cardVariants} initial="hidden" animate="visible" transition={{ delay: 5 * 0.05, duration: 0.4, ease: "easeOut" }}>
            <InteractiveStatCard title="Nearby Services" value={nearbyServices.length} icon={MapPin} color="blue" />
        </motion.div>
        <motion.div variants={cardVariants} initial="hidden" animate="visible" transition={{ delay: 6 * 0.05, duration: 0.4, ease: "easeOut" }}>
            <InteractiveStatCard title="Health Journey" value={healthJourney.length} icon={User} color="green" />
        </motion.div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div variants={cardVariants} initial="hidden" animate="visible" transition={{ delay: 7 * 0.05, duration: 0.4, ease: "easeOut" }} className="lg:col-span-2"><UpcomingAppointments /></motion.div>
        <motion.div variants={cardVariants} initial="hidden" animate="visible" transition={{ delay: 8 * 0.05, duration: 0.4, ease: "easeOut" }}><ProfileSnapshot /></motion.div>
        <motion.div variants={cardVariants} initial="hidden" animate="visible" transition={{ delay: 9 * 0.05, duration: 0.4, ease: "easeOut" }} className="lg:col-span-2"><HealthJourneyTimeline /></motion.div>
        <motion.div variants={cardVariants} initial="hidden" animate="visible" transition={{ delay: 10 * 0.05, duration: 0.4, ease: "easeOut" }}><HealthRecords /></motion.div>
        <motion.div variants={cardVariants} initial="hidden" animate="visible" transition={{ delay: 11 * 0.05, duration: 0.4, ease: "easeOut" }} className="lg:col-span-3"><EmergencyServices /></motion.div>
      </div>
    </>
  );
}

interface DashboardHeaderProps {
  onMenuClick: () => void;
  theme: string;
  toggleTheme: () => void;
}

function DashboardHeader({ onMenuClick, theme, toggleTheme }: DashboardHeaderProps) {
    return (
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-background/80 px-4 backdrop-blur-md sm:px-6">
            <div className="flex items-center gap-4">
                 <Button variant="ghost" size="icon" className="lg:hidden" onClick={onMenuClick}><Menu className="h-6 w-6" /></Button>
                <div className="relative hidden md:block">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <input type="search" placeholder="Search..." className="w-full rounded-lg bg-secondary py-2 pl-8 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
            </div>
            <div className="flex items-center gap-2">
                 <Button variant="ghost" size="icon" onClick={toggleTheme}>
                    <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                 </Button>
                 <Button variant="ghost" size="icon"><Languages className="h-5 w-5" /></Button>
                 <div className="relative">
                    <Button variant="ghost" size="icon">
                        <Bell className="h-5 w-5" />
                        {stats.notifications > 0 && <span className="absolute top-1 right-1 flex h-2.5 w-2.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gov-red opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-gov-red"></span></span>}
                    </Button>
                </div>
                <div className="flex items-center gap-2">
                    <img src={user.avatarUrl} alt={user.name} className="h-9 w-9 rounded-full border-2 border-primary" />
                    <div className="hidden sm:flex flex-col items-start">
                        <span className="text-sm font-semibold">{user.name}</span>
                        <span className="text-xs text-muted-foreground">Patient</span>
                    </div>
                     <Button variant="ghost" size="icon"><ChevronDown className="h-4 w-4" /></Button>
                </div>
            </div>
        </header>
    );
}

interface SidebarLinkProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const SidebarLink = ({ icon: Icon, label, isActive, onClick }: SidebarLinkProps) => (
    <a href="#" onClick={onClick} className={cn("flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary", isActive && "bg-secondary text-primary font-semibold")}>
        <Icon className="h-4 w-4" />{label}
    </a>
);

interface DashboardSidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

function DashboardSidebar({ activeTab, onTabChange, isOpen, onClose }: DashboardSidebarProps) {
    const sidebarContent = (
         <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-16 items-center border-b px-4 lg:px-6">
                <a href="#" className="flex items-center gap-2 font-semibold">
                    <div className="w-6 h-6 bg-gradient-to-br from-gov-blue to-gov-saffron rounded flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-sm"></div>
                    </div><span>Migrant Dashboard</span>
                </a>
            </div>
            <div className="flex-1 overflow-y-auto">
                <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                    <SidebarLink icon={LayoutDashboard} label="Dashboard" isActive={activeTab === 'dashboard'} onClick={() => onTabChange('dashboard')} />
                    <SidebarLink icon={Stethoscope} label="Appointments" isActive={activeTab === 'appointments'} onClick={() => onTabChange('appointments')} />
                    <SidebarLink icon={HeartPulse} label="Health Records" isActive={activeTab === 'health-records'} onClick={() => onTabChange('health-records')} />
                    <SidebarLink icon={User} label="Profile" isActive={activeTab === 'profile'} onClick={() => onTabChange('profile')} />
                    <SidebarLink icon={Bell} label="Notifications" isActive={activeTab === 'notifications'} onClick={() => onTabChange('notifications')} />
                    <SidebarLink icon={MessageSquareWarning} label="Emergency" isActive={activeTab === 'emergency'} onClick={() => onTabChange('emergency')} />
                </nav>
            </div>
             <div className="mt-auto p-4 border-t">
                 <Card>
                    <CardHeader className="p-2 pt-0 md:p-4"><CardTitle>Need Help?</CardTitle><CardDescription>Contact support for portal issues.</CardDescription></CardHeader>
                    <CardContent className="p-2 pt-0 md:p-4 md:pt-0"><Button size="sm" className="w-full">Contact Support</Button></CardContent>
                 </Card>
             </div>
        </div>
    );
    
    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div initial={{ x: "-100%" }} animate={{ x: "0%" }} exit={{ x: "-100%" }} transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }} className="fixed inset-y-0 left-0 z-50 w-72 border-r bg-background lg:hidden">
                        {sidebarContent}
                        <Button variant="ghost" size="icon" className="absolute top-4 right-4" onClick={onClose}><X className="h-6 w-6"/></Button>
                    </motion.div>
                )}
            </AnimatePresence>
            <aside className="hidden w-72 border-r bg-muted/40 lg:block">{sidebarContent}</aside>
        </>
    );
}


// --- MAIN APP COMPONENT ---

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);

  const toggleTheme = useCallback(() => setTheme(theme === 'light' ? 'dark' : 'light'), [theme]);

  const handleTabChange = useCallback((tab: string) => {
    setActiveTab(tab);
    setSidebarOpen(false);
  }, []);

  const currentContent = useMemo(() => {
    // For this dashboard, we will always show the main content.
    // In a real app, you would swap components here based on `activeTab`.
    return <DashboardContent />;
  }, [activeTab]);

  return (
    <div className="flex min-h-screen w-full">
      <DashboardSidebar activeTab={activeTab} onTabChange={handleTabChange} isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex flex-1 flex-col">
        <DashboardHeader onMenuClick={() => setSidebarOpen(true)} theme={theme} toggleTheme={toggleTheme} />
        <main className="flex-1 p-4 sm:p-6 bg-secondary/60">
          {currentContent}
        </main>
      </div>
    </div>
  );
}
