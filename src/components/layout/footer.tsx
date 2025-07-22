import Link from 'next/link';
import { Hospital, Phone, Mail, MapPin, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="bg-[#0A1931] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo and Slogan */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <Link href="/" className="inline-block bg-white p-2 rounded-md">
              <div className="flex items-center space-x-2">
                <Hospital className="h-8 w-8 text-primary" />
                <span className="font-bold text-xl text-gray-800">
                  MediHome
                </span>
              </div>
            </Link>
            <h2 className="text-3xl font-bold">Your Health, Our Priority<br/>Anytime, Anywhere</h2>
            <p className="text-gray-400">Reach out to us for all your healthcare needs.</p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Phone className="mr-2 h-4 w-4" /> Contact Us
              </Button>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Mail className="mr-2 h-4 w-4" /> Email Us
              </Button>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Phone className="mr-2 h-4 w-4" /> (310) 123-44567
              </Button>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <MapPin className="mr-2 h-4 w-4" /> Location on map
              </Button>
            </div>
          </div>

          {/* Company Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Our Mission & Vision</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Careers</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Legal Notice</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Global Network</Link></li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Services</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white">Pharmacy Services</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Medical Specialties</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Health Checkups</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Health Consultation</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Emergency Services</Link></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <Link href="#"><Instagram className="h-5 w-5 hover:text-white" /></Link>
            <Link href="#"><Linkedin className="h-5 w-5 hover:text-white" /></Link>
            <Link href="#"><Facebook className="h-5 w-5 hover:text-white" /></Link>
            <Link href="#"><Twitter className="h-5 w-5 hover:text-white" /></Link>
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms & Condition</Link>
            <Link href="#" className="hover:text-white">Do not share or sell my information</Link>
          </div>
          <div>
            <p>&copy; {new Date().getFullYear()} MediHome. All Rights Reserved.</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
