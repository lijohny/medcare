import Link from 'next/link';
import { Hospital, Phone, Mail, MapPin, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} MediHome. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
