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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-sm border-b'
          : 'bg-black/20',
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Hospital className="h-8 w-8 text-primary" />
          <span className={cn(
              'font-bold text-xl',
               isScrolled ? 'text-foreground' : 'text-white'
            )}>
            MediHome
          </span>
        </Link>
        
        <nav className="hidden lg:flex flex-1 items-center justify-center space-x-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                'transition-colors hover:text-primary',
                isScrolled ? 'text-foreground/80' : 'text-gray-200'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center space-x-6">
            <div className={cn(
                'flex items-center gap-2',
                isScrolled ? 'text-foreground' : 'text-white'
                )}>
              <Clock className="h-5 w-5" />
              <div className="text-xs">
                <p className="font-medium">Open Hours</p>
                <p className={isScrolled ? 'text-muted-foreground' : 'text-gray-300'}>Monday-Saturday 9AM - 6PM</p>
              </div>
            </div>
           <Button variant="outline" className={cn(
               isScrolled ? 'border-primary text-primary hover:bg-primary hover:text-primary-foreground' : 'border-white text-white hover:bg-white hover:text-black'
           )}>Book Appointment</Button>
        </div>

        <div className="lg:hidden flex items-center gap-2">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={cn(isScrolled ? 'text-foreground' : 'text-white hover:bg-white/20 hover:text-white')}>
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
                <Button variant="default" className="w-full">Book Appointment</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
