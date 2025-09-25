import React from 'react';
import { 
  User, 
  MapPin, 
  Phone, 
  Mail, 
  Calendar,
  Shield,
  Edit,
  Camera,
  QrCode,
  Download,
  Eye
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Separator } from './ui/separator';

export const ProfilePage = React.memo(function ProfilePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-0 space-y-4 sm:space-y-6">
      {/* Page Header */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-xl sm:text-2xl font-semibold text-gov-blue mb-2">Profile Management</h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          Manage your personal information and government health records.
        </p>
      </div>

      {/* Profile Header Card */}
      <Card className="border-border shadow-md">
        <CardContent className="pt-4 sm:pt-6">
          <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6">
            <div className="relative self-center sm:self-start">
              <Avatar className="w-20 h-20 sm:w-24 sm:h-24 border-2 border-gov-blue-light">
                <AvatarImage src="/api/placeholder/96/96" />
                <AvatarFallback className="text-lg sm:text-xl bg-gov-blue text-white font-semibold">RK</AvatarFallback>
              </Avatar>
              <Button size="sm" className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 rounded-full p-0 bg-gov-blue hover:bg-gov-blue/90">
                <Camera className="w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between space-y-3 sm:space-y-0">
                <div className="min-w-0 flex-1">
                  <h2 className="text-lg sm:text-xl font-semibold text-gov-blue truncate">Ravi Kumar Singh</h2>
                  <p className="text-sm sm:text-base text-muted-foreground mt-1 font-medium">Health ID: MH2024789123</p>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-2">
                    <Badge variant="outline" className="text-gov-green border-gov-green text-xs">
                      <Shield className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
                      Verified
                    </Badge>
                    <Badge variant="outline" className="text-gov-blue border-gov-blue text-xs">
                      Active Worker
                    </Badge>
                  </div>
                </div>
                <Button variant="outline" className="border-gov-blue text-gov-blue hover:bg-gov-blue-bg text-sm sm:self-start w-full sm:w-auto">
                  <Edit className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  Edit Profile
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Personal Information */}
        <Card className="border-border shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-gov-blue text-base sm:text-lg">
              <User className="w-4 h-4 sm:w-5 sm:h-5 text-gov-blue-light" />
              <span>Personal Information</span>
            </CardTitle>
            <CardDescription className="text-muted-foreground text-sm">Your basic personal details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 sm:space-y-4">
            <div className="space-y-2 sm:space-y-3">
              <div className="flex flex-col sm:flex-row sm:justify-between py-2 space-y-1 sm:space-y-0">
                <span className="text-muted-foreground font-medium text-sm">Full Name:</span>
                <span className="font-semibold text-gov-blue text-sm">Ravi Kumar Singh</span>
              </div>
              <Separator />
              
              <div className="flex flex-col sm:flex-row sm:justify-between py-2 space-y-1 sm:space-y-0">
                <span className="text-muted-foreground font-medium text-sm">Gender:</span>
                <span className="text-gov-blue font-semibold text-sm">Male</span>
              </div>
              <Separator />
              
              <div className="flex flex-col sm:flex-row sm:justify-between py-2 space-y-1 sm:space-y-0">
                <span className="text-muted-foreground font-medium text-sm">Date of Birth:</span>
                <span className="text-gov-blue font-semibold text-sm">15th March, 1992</span>
              </div>
              <Separator />
              
              <div className="flex flex-col sm:flex-row sm:justify-between py-2 space-y-1 sm:space-y-0">
                <span className="text-muted-foreground font-medium text-sm">Age:</span>
                <span className="text-gov-blue font-semibold text-sm">32 years</span>
              </div>
              <Separator />
              
              <div className="flex flex-col sm:flex-row sm:justify-between py-2 space-y-1 sm:space-y-0">
                <span className="text-muted-foreground font-medium text-sm">Blood Group:</span>
                <span className="font-semibold text-gov-red text-sm">O+</span>
              </div>
              <Separator />
              
              <div className="flex flex-col sm:flex-row sm:justify-between py-2 space-y-1 sm:space-y-0">
                <span className="text-muted-foreground font-medium text-sm">Marital Status:</span>
                <span className="text-gov-blue font-semibold text-sm">Married</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="border-border shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-gov-blue text-base sm:text-lg">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-gov-green" />
              <span>Contact Information</span>
            </CardTitle>
            <CardDescription className="text-muted-foreground text-sm">How to reach you</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 sm:space-y-4">
            <div className="space-y-2 sm:space-y-3">
              <div className="flex flex-col sm:flex-row sm:justify-between py-2 space-y-1 sm:space-y-0">
                <span className="text-muted-foreground font-medium text-sm">Mobile Number:</span>
                <span className="font-semibold text-gov-blue text-sm">+91 98765-43210</span>
              </div>
              <Separator />
              
              <div className="flex flex-col sm:flex-row sm:justify-between py-2 space-y-1 sm:space-y-0">
                <span className="text-muted-foreground font-medium text-sm">Email Address:</span>
                <span className="text-gov-blue font-semibold text-sm break-all">ravi.singh@gmail.com</span>
              </div>
              <Separator />
              
              <div className="flex flex-col sm:flex-row sm:justify-between py-2 space-y-1 sm:space-y-0">
                <span className="text-muted-foreground font-medium text-sm">Emergency Contact:</span>
                <span className="font-semibold text-gov-red text-sm">+91 87654-32109</span>
              </div>
              <Separator />
              
              <div className="flex flex-col sm:flex-row sm:justify-between py-2 space-y-1 sm:space-y-0">
                <span className="text-muted-foreground font-medium text-sm">Emergency Contact Name:</span>
                <span className="text-gov-blue font-semibold text-sm">Sunita Singh (Wife)</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Address Information */}
      <Card className="border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-gov-blue text-base sm:text-lg">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-gov-saffron" />
            <span>Address Information</span>
          </CardTitle>
          <CardDescription className="text-muted-foreground text-sm">Your current and permanent addresses</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Current Address */}
            <div className="space-y-3">
              <h4 className="font-semibold text-gov-blue text-sm sm:text-base">Current Address</h4>
              <div className="p-3 sm:p-4 bg-gov-blue-bg rounded-lg border border-border">
                <p className="text-xs sm:text-sm text-gov-blue leading-relaxed font-medium">
                  Room 204, Krishna Building<br />
                  Kandivali West<br />
                  Mumbai - 400067<br />
                  Maharashtra, India
                </p>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between text-xs sm:text-sm space-y-1 sm:space-y-0">
                <span className="text-muted-foreground font-medium">Duration of Stay:</span>
                <span className="text-gov-blue font-semibold">2 years 3 months</span>
              </div>
            </div>

            {/* Permanent Address */}
            <div className="space-y-3">
              <h4 className="font-semibold text-gov-blue text-sm sm:text-base">Permanent Address</h4>
              <div className="p-3 sm:p-4 bg-gov-green-bg rounded-lg border border-border">
                <p className="text-xs sm:text-sm text-gov-blue leading-relaxed font-medium">
                  Village Rampur<br />
                  Post Office - Rampur<br />
                  District - Sitapur<br />
                  Uttar Pradesh - 261001<br />
                  India
                </p>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between text-xs sm:text-sm space-y-1 sm:space-y-0">
                <span className="text-muted-foreground font-medium">Home State:</span>
                <span className="text-gov-blue font-semibold">Uttar Pradesh</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Government Documents */}
      <Card className="border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-gov-blue text-base sm:text-lg">
            <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-gov-saffron" />
            <span>Government Documents</span>
          </CardTitle>
          <CardDescription className="text-muted-foreground text-sm">Your government identification documents</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="p-3 sm:p-4 border border-border rounded-lg hover:bg-gov-green-bg transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 space-y-1 sm:space-y-0">
                <span className="font-semibold text-gov-blue text-sm">Aadhaar Card</span>
                <Badge variant="outline" className="text-gov-green border-gov-green text-xs self-start">✓ Verified</Badge>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground mb-2 font-medium">**** **** **** 7890</p>
              <div className="flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-2">
                <Button size="sm" variant="outline" className="border-gov-blue text-gov-blue hover:bg-gov-blue-bg text-xs">
                  <Eye className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
                  View
                </Button>
                <Button size="sm" variant="outline" className="border-gov-blue text-gov-blue hover:bg-gov-blue-bg text-xs">
                  <Download className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
                  Download
                </Button>
              </div>
            </div>

            <div className="p-3 sm:p-4 border border-border rounded-lg hover:bg-gov-green-bg transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 space-y-1 sm:space-y-0">
                <span className="font-semibold text-gov-blue text-sm">PAN Card</span>
                <Badge variant="outline" className="text-gov-green border-gov-green text-xs self-start">✓ Verified</Badge>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground mb-2 font-medium">ABCDE1234F</p>
              <div className="flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-2">
                <Button size="sm" variant="outline" className="border-gov-blue text-gov-blue hover:bg-gov-blue-bg text-xs">
                  <Eye className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
                  View
                </Button>
                <Button size="sm" variant="outline" className="border-gov-blue text-gov-blue hover:bg-gov-blue-bg text-xs">
                  <Download className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
                  Download
                </Button>
              </div>
            </div>

            <div className="p-3 sm:p-4 border border-border rounded-lg hover:bg-gov-green-bg transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 space-y-1 sm:space-y-0">
                <span className="font-semibold text-gov-blue text-sm">Voter ID</span>
                <Badge variant="outline" className="text-gov-green border-gov-green text-xs self-start">✓ Verified</Badge>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground mb-2 font-medium">ABC1234567</p>
              <div className="flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-2">
                <Button size="sm" variant="outline" className="border-gov-blue text-gov-blue hover:bg-gov-blue-bg text-xs">
                  <Eye className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
                  View
                </Button>
                <Button size="sm" variant="outline" className="border-gov-blue text-gov-blue hover:bg-gov-blue-bg text-xs">
                  <Download className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
                  Download
                </Button>
              </div>
            </div>

            <div className="p-3 sm:p-4 border border-border rounded-lg hover:bg-gov-blue-bg transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 space-y-1 sm:space-y-0">
                <span className="font-semibold text-gov-blue text-sm">Health ID QR Code</span>
                <Badge variant="outline" className="text-gov-blue-light border-gov-blue-light text-xs self-start">● Active</Badge>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground mb-2 font-medium">MH2024789123</p>
              <div className="flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-2">
                <Button size="sm" variant="outline" className="border-gov-blue text-gov-blue hover:bg-gov-blue-bg text-xs">
                  <QrCode className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
                  Show QR
                </Button>
                <Button size="sm" variant="outline" className="border-gov-blue text-gov-blue hover:bg-gov-blue-bg text-xs">
                  <Download className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
                  Download
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
});