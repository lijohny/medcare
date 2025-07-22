'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Clock, Hospital, Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { href: '#', label: 'Home' },
  { href: '#', label: 'Services' },
  { href: '#', label: 'Our Team' },
  { href: '#', label: 'Contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
          <div className="bg-white p-2 rounded-md">
            <Hospital className="h-6 w-6 text-black" />
          </div>
          <span className="font-bold text-xl text-white">MediHome</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-primary text-foreground/80"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            <div className="text-sm">
              <p className="font-medium text-foreground">Open Hours</p>
              <p className="text-xs text-muted-foreground">Monday-Saturday 9AM - 6PM</p>
            </div>
          </div>
          <Button variant="outline">Book Appointment</Button>
        </div>

        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background">
              <Link href="/" className="flex items-center gap-2 mb-8" onClick={() => setIsOpen(false)}>
                <div className="bg-white p-2 rounded-md">
                  <Hospital className="h-6 w-6 text-black" />
                </div>
                <span className="font-bold text-xl">MediHome</span>
              </Link>
              <nav className="flex flex-col gap-6 text-lg font-medium">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="transition-colors hover:text-primary text-foreground/80"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
               <div className="mt-8 flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <div className="text-sm">
                      <p className="font-medium text-foreground">Open Hours</p>
                      <p className="text-xs text-muted-foreground">Monday-Saturday 9AM - 6PM</p>
                    </div>
                  </div>
                  <Button variant="outline">Book Appointment</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
