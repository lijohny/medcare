import Link from 'next/link';
import { Hospital, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
               <Hospital className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl text-foreground">MediHome</span>
            </Link>
            <p className="text-muted-foreground">
              Your trusted partner for comprehensive and compassionate healthcare services.
            </p>
            <div className="flex gap-4">
              <Link href="#"><Facebook className="h-6 w-6 text-muted-foreground hover:text-primary" /></Link>
              <Link href="#"><Twitter className="h-6 w-6 text-muted-foreground hover:text-primary" /></Link>
              <Link href="#"><Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary" /></Link>
              <Link href="#"><Instagram className="h-6 w-6 text-muted-foreground hover:text-primary" /></Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="#services" className="text-muted-foreground hover:text-primary">Services</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Our Team</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact Info</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>123 Health St, Wellness City</li>
              <li>contact@medihome.com</li>
              <li>+1 234 567 8900</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Newsletter</h4>
            <p className="text-muted-foreground mb-4">Subscribe to our newsletter for latest updates.</p>
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input type="email" placeholder="Email" className="bg-background border-border" />
              <Button type="submit">Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-6 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} MediHome. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
