import React from 'react';
import { 
  Calendar, 
  FileText, 
  User, 
  MessageSquare, 
  Download,
  Upload,
  QrCode,
  Clock,
  Phone,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export const UpcomingAppointments = React.memo(function UpcomingAppointments() {
  const appointments = [
    {
      date: 'Dec 24, 2024',
      time: '10:00 AM',
      doctor: 'Dr. Sharma',
      type: 'General Checkup',
      status: 'confirmed',
      reminder: true
    },
    {
      date: 'Dec 28, 2024', 
      time: '2:30 PM',
      doctor: 'Dr. Patel',
      type: 'Follow-up',
      status: 'pending',
      reminder: false
    }
  ];

  return (
    <Card className="h-full border-border shadow-sm">
      <CardHeader className="pb-3 sm:pb-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
          <div>
            <CardTitle className="flex items-center space-x-2 text-gov-blue text-base sm:text-lg">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-gov-blue-light flex-shrink-0" />
              <span>Upcoming Appointments</span>
            </CardTitle>
            <CardDescription className="text-muted-foreground text-sm">Your scheduled medical appointments</CardDescription>
          </div>
          <Button size="sm" variant="outline" className="border-gov-blue-light text-gov-blue hover:bg-gov-blue-bg self-start sm:self-auto text-xs sm:text-sm">
            View All
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-3 sm:space-y-4">
        {appointments.map((apt, index) => (
          <div key={index} className="p-3 sm:p-4 rounded-lg border border-border hover:bg-gov-blue-bg transition-colors">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between space-y-2 sm:space-y-0">
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-1 sm:gap-2 mb-2">
                  <Badge variant={apt.status === 'confirmed' ? 'default' : 'secondary'} 
                         className={`text-xs ${apt.status === 'confirmed' ? 'bg-gov-green text-white' : 'bg-gov-saffron-bg text-gov-saffron'}`}>
                    {apt.status === 'confirmed' ? (
                      <CheckCircle className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
                    ) : (
                      <Clock className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
                    )}
                    {apt.status}
                  </Badge>
                  {apt.reminder && (
                    <Badge variant="outline" className="text-gov-green border-gov-green text-xs">
                      <Phone className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
                      <span className="hidden sm:inline">Auto-remind</span>
                      <span className="sm:hidden">Remind</span>
                    </Badge>
                  )}
                </div>
                <h4 className="font-semibold text-gov-blue text-sm sm:text-base truncate">{apt.type}</h4>
                <p className="text-xs sm:text-sm text-muted-foreground font-medium truncate">{apt.doctor}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">{apt.date} at {apt.time}</p>
              </div>
              <Button size="sm" variant="ghost" className="text-gov-blue hover:bg-gov-blue-bg self-end sm:self-start p-2">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
});

export const HealthRecords = React.memo(function HealthRecords() {
  const records = [
    { name: 'Blood Test Report', date: 'Dec 15, 2024', size: '2.4 MB' },
    { name: 'Vaccination Certificate', date: 'Nov 20, 2024', size: '1.1 MB' },
    { name: 'Medical History', date: 'Oct 05, 2024', size: '890 KB' }
  ];

  return (
    <Card className="h-full border-border shadow-sm">
      <CardHeader className="pb-3 sm:pb-4">
        <CardTitle className="flex items-center space-x-2 text-gov-blue text-base sm:text-lg">
          <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-gov-green flex-shrink-0" />
          <span className="truncate">Personal Health Records</span>
        </CardTitle>
        <CardDescription className="text-muted-foreground text-sm">Upload, view, and manage your medical documents</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
          {records.map((record, index) => (
            <div key={index} className="flex items-center justify-between p-2 sm:p-3 rounded-lg border border-border hover:bg-gov-green-bg transition-colors">
              <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
                <FileText className="w-3 h-3 sm:w-4 sm:h-4 text-gov-green flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-xs sm:text-sm text-gov-blue truncate">{record.name}</p>
                  <p className="text-xs text-muted-foreground">{record.date} • {record.size}</p>
                </div>
              </div>
              <div className="flex space-x-1">
                <Button size="sm" variant="ghost" className="text-gov-blue hover:bg-gov-blue-bg p-1 sm:p-2">
                  <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <Button size="sm" className="bg-gov-green hover:bg-gov-green/90 text-white text-xs sm:text-sm">
            <Upload className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            Upload
          </Button>
          <Button size="sm" variant="outline" className="border-gov-blue text-gov-blue hover:bg-gov-blue-bg text-xs sm:text-sm">
            <span className="hidden sm:inline">Attach to Doctor</span>
            <span className="sm:hidden">Attach</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
});

export const ProfileSnapshot = React.memo(function ProfileSnapshot() {
  return (
    <Card className="h-full border-border shadow-sm">
      <CardHeader className="pb-3 sm:pb-4">
        <CardTitle className="flex items-center space-x-2 text-gov-blue text-base sm:text-lg">
          <User className="w-4 h-4 sm:w-5 sm:h-5 text-gov-saffron flex-shrink-0" />
          <span>Profile Snapshot</span>
        </CardTitle>
        <CardDescription className="text-muted-foreground text-sm">Your health ID and key information</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
          <Avatar className="w-12 h-12 sm:w-16 sm:h-16 border-2 border-gov-blue-light flex-shrink-0">
            <AvatarImage src="/api/placeholder/64/64" />
            <AvatarFallback className="bg-gov-blue text-white font-semibold text-sm sm:text-base">RK</AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold text-gov-blue text-sm sm:text-base truncate">Ravi Kumar</h3>
            <p className="text-xs sm:text-sm text-muted-foreground font-medium truncate">Health ID: MH2024789123</p>
            <Badge variant="outline" className="text-gov-green border-gov-green mt-1 text-xs">✓ Verified</Badge>
          </div>
        </div>
        
        <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
          <div className="flex justify-between text-xs sm:text-sm">
            <span className="text-muted-foreground font-medium">Age:</span>
            <span className="text-gov-blue font-semibold">32 years</span>
          </div>
          <div className="flex justify-between text-xs sm:text-sm">
            <span className="text-muted-foreground font-medium">Blood Group:</span>
            <span className="text-gov-red font-semibold">O+</span>
          </div>
          <div className="flex justify-between text-xs sm:text-sm">
            <span className="text-muted-foreground font-medium">Location:</span>
            <span className="text-gov-blue font-semibold truncate ml-2">Mumbai, MH</span>
          </div>
          <div className="flex justify-between text-xs sm:text-sm">
            <span className="text-muted-foreground font-medium">Emergency Contact:</span>
            <span className="text-gov-blue font-semibold truncate ml-2">+91 98765-43210</span>
          </div>
        </div>

        <Button className="w-full" variant="outline" className="border-gov-blue text-gov-blue hover:bg-gov-blue-bg text-xs sm:text-sm">
          <QrCode className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
          Show QR Code
        </Button>
      </CardContent>
    </Card>
  );
});

export const EmergencyServices = React.memo(function EmergencyServices() {
  const emergencyContacts = [
    { service: 'Emergency Helpline', number: '108', type: 'medical' },
    { service: 'Police Emergency', number: '100', type: 'police' },
    { service: 'Women Helpline', number: '1091', type: 'support' },
    { service: 'Migrant Worker Helpline', number: '1800-111-555', type: 'support' }
  ];

  const nearbyServices = [
    { name: 'City General Hospital', distance: '1.2 km', available: true },
    { name: 'Community Health Center', distance: '0.8 km', available: true },
    { name: 'Police Station - Sector 15', distance: '2.1 km', available: true }
  ];

  return (
    <Card className="h-full border-border shadow-sm">
      <CardHeader className="pb-3 sm:pb-4">
        <CardTitle className="flex items-center space-x-2 text-gov-blue text-base sm:text-lg">
          <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-gov-red flex-shrink-0" />
          <span>Emergency Services</span>
        </CardTitle>
        <CardDescription className="text-muted-foreground text-sm">Quick access to emergency contacts and services</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 sm:space-y-4">
          {/* Emergency Alert */}
          <div className="p-2 sm:p-3 bg-gov-red-bg border border-gov-red rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-2 h-2 bg-gov-red rounded-full animate-pulse"></div>
              <span className="text-xs sm:text-sm font-semibold text-gov-red">Emergency Contacts</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2">
              {emergencyContacts.map((contact, index) => (
                <Button 
                  key={index}
                  size="sm" 
                  variant="outline" 
                  className="justify-start border-gov-red text-gov-red hover:bg-gov-red hover:text-white text-xs font-medium p-2 h-auto"
                >
                  <Phone className="w-2 h-2 sm:w-3 sm:h-3 mr-1 flex-shrink-0" />
                  <div className="text-left min-w-0 flex-1">
                    <div className="font-semibold truncate">{contact.number}</div>
                    <div className="text-xs opacity-75 truncate">{contact.service}</div>
                  </div>
                </Button>
              ))}
            </div>
          </div>

          {/* Nearby Services */}
          <div>
            <h4 className="text-xs sm:text-sm font-semibold text-gov-blue mb-2">Nearby Services</h4>
            <div className="space-y-1 sm:space-y-2">
              {nearbyServices.map((service, index) => (
                <div key={index} className="flex items-center justify-between p-2 rounded border border-border hover:bg-gov-green-bg transition-colors">
                  <div className="flex items-center space-x-2 min-w-0 flex-1">
                    <div className={`w-2 h-2 rounded-full flex-shrink-0 ${service.available ? 'bg-gov-green' : 'bg-muted-foreground'}`}></div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs sm:text-sm font-semibold text-gov-blue truncate">{service.name}</p>
                      <p className="text-xs text-muted-foreground">{service.distance} away</p>
                    </div>
                  </div>
                  <Button size="sm" variant="ghost" className="text-gov-blue hover:bg-gov-blue-bg p-1 sm:p-2 flex-shrink-0">
                    <Phone className="w-2 h-2 sm:w-3 sm:h-3" />
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <Button size="sm" className="bg-gov-red hover:bg-gov-red/90 text-white font-semibold text-xs sm:text-sm">
              <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              SOS Alert
            </Button>
            <Button size="sm" variant="outline" className="border-gov-blue text-gov-blue hover:bg-gov-blue-bg font-medium text-xs sm:text-sm">
              <FileText className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Medical Info</span>
              <span className="sm:hidden">Medical</span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
});