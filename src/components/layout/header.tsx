'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Hospital, Menu, Clock } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#team', label: 'Our Team' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        'bg-background/80 backdrop-blur-sm border-b'
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Hospital className='h-8 w-8 text-primary' />
          <span className='font-bold text-xl text-foreground'>
            MediHome
          </span>
        </Link>
        
        <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                'transition-colors hover:text-primary',
                'text-foreground/80'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
                <Clock className='h-5 w-5 text-primary' />
                <div className='text-sm text-foreground'>
                    <p className="font-semibold">Open Hours</p>
                    <p className="text-xs">Monday-Saturday 9AM - 6PM</p>
                </div>
            </div>
            <span className='h-8 w-px bg-border'></span>
           <Button variant="default">Book Appointment</Button>
        </div>

        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <Link href="/" className="flex items-center gap-2 mb-8" onClick={() => setIsOpen(false)}>
                <Hospital className="h-6 w-6 text-primary" />
                <span className="font-bold text-xl">MediHome</span>
              </Link>
              <nav className="flex flex-col gap-6 text-lg font-medium">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="transition-colors hover:text-foreground/80 text-foreground/60"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
               <div className="mt-8">
                 <Button className="w-full">Book Appointment</Button>
               </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
