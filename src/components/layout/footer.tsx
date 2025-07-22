import Link from 'next/link';
import { Hospital, Phone, Mail, MapPin, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="bg-[#0A182E] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-2">
               <div className="bg-white p-2 rounded-md">
                <Hospital className="h-6 w-6 text-primary" />
               </div>
              <span className="font-bold text-xl">MediHome</span>
            </Link>
            <h3 className="text-3xl font-bold">Your Health, Our Priority Anytime, Anywhere</h3>
            <p className="text-gray-400">
              Reach out to us for all your healthcare needs.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
                <Button>
                    <Phone className="mr-2 h-4 w-4" /> Contact Us
                </Button>
                <Button>
                    <Mail className="mr-2 h-4 w-4" /> Email Us
                </Button>
                 <Button>
                    <Phone className="mr-2 h-4 w-4" /> (310) 123-44567
                </Button>
                <Button>
                    <MapPin className="mr-2 h-4 w-4" /> Location on map
                </Button>
            </div>
          </div>
           <div className="lg:col-span-2 lg:col-start-8">
            <h4 className="font-semibold text-yellow-400 mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white">Our Mission & Vision</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white">Careers</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white">Legal Notice</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white">Global Network</Link></li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-yellow-400 mb-4">Services</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-300 hover:text-white">Pharmacy Services</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white">Medical Specialties</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white">Health Checkups</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white">Health Consultation</Link></li>
               <li><Link href="#" className="text-gray-300 hover:text-white">Emergency Services</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex gap-6 mb-4 md:mb-0">
                <Link href="#"><Instagram className="h-5 w-5 text-gray-400 hover:text-white" /></Link>
                <Link href="#"><Linkedin className="h-5 w-5 text-gray-400 hover:text-white" /></Link>
                <Link href="#"><Facebook className="h-5 w-5 text-gray-400 hover:text-white" /></Link>
                <Link href="#"><Twitter className="h-5 w-5 text-gray-400 hover:text-white" /></Link>
            </div>
             <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-gray-400 mb-4 md:mb-0">
                <Link href="#" className="hover:text-white">Privacy Policy</Link>
                <Link href="#" className="hover:text-white">Terms & Condition</Link>
                <Link href="#" className="hover:text-white">Do not share or sell my information</Link>
            </div>
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Care Link. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
