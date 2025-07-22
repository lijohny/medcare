import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Heart, Users, Stethoscope, Star, Quote } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            {/* Placeholder for video */}
            <Image
              src="https://placehold.co/1920x1080.png"
              layout="fill"
              objectFit="cover"
              alt="Background video placeholder"
              className="brightness-50"
              data-ai-hint="medical professional background"
            />
          </div>
          <div className="relative z-10 container px-4 md:px-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
              Your Health, Our Priority Anytime, Anywhere
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 mb-8">
              We are dedicated to providing the best healthcare services for you and your family.
            </p>
            <Button size="lg">Book an Appointment</Button>
          </div>
        </section>

        {/* The rest of the page sections will be added here */}
      </main>
    </div>
  );
}
