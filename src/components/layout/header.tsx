'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Hospital, Menu, Clock, LogIn } from 'lucide-react';

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
          : 'bg-white/30 backdrop-blur-sm',
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Hospital className="h-8 w-8 text-primary" />
          <span className={cn(
              'font-bold text-xl',
               'text-foreground'
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
                'text-foreground/80'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center space-x-6">
            <div className={cn(
                'flex items-center gap-2',
                'text-foreground'
                )}>
              <Clock className="h-5 w-5" />
              <div className="text-xs">
                <p className="font-medium">Open Hours</p>
                <p className={'text-muted-foreground'}>Monday-Saturday 9AM - 6PM</p>
              </div>
            </div>
            <Link href="/book-appointment">
              <Button variant="outline" className={cn(
                isScrolled ? 'border-primary text-primary hover:bg-primary hover:text-primary-foreground' : 'border-primary text-primary hover:bg-primary hover:text-primary-foreground'
              )}>Book Appointment</Button>
            </Link>
             <Link href="/login">
              <Button variant="ghost">
                <LogIn className="mr-2 h-4 w-4" />
                Login
              </Button>
            </Link>
        </div>

        <div className="lg:hidden flex items-center gap-2">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={cn('text-foreground hover:bg-black/20 hover:text-foreground')}>
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
              <div className="mt-8 space-y-4">
                <Link href="/book-appointment">
                  <Button variant="default" className="w-full">Book Appointment</Button>
                </Link>
                 <Link href="/login">
                  <Button variant="outline" className="w-full">
                    <LogIn className="mr-2 h-4 w-4" />
                    Login
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
