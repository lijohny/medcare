import { Button } from '@/components/ui/button';
import { Stethoscope, Users, MessageSquareText, CalendarDays, ClipboardPen, Syringe, Plus, ArrowRight, User, FolderPlus, History, PlayCircle, Home, Eye } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-auto min-h-[calc(100vh-5rem)] flex items-center justify-center text-white overflow-hidden py-20 md:py-32">
          <div className="absolute inset-0 z-0 bg-gray-700">
            <video
              className="w-full h-full object-cover brightness-50"
              autoPlay
              loop
              muted
              playsInline
              poster="https://placehold.co/1920x1080.png"
            >
              <source
                src="https://cdn.coverr.co/videos/coverr-a-doctor-in-a-laboratory-looking-at-a-vial-5317/1080p.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-sm font-semibold tracking-wider uppercase text-yellow-400">
                  <Plus className="h-5 w-5 bg-yellow-400 text-black rounded-full p-0.5" />
                  <span>Welcome to MediHome</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white text-shadow-lg">
                  We Are Here To Hear And Heal Your Health Problems
                </h1>
                <p className="font-semibold text-lg md:text-xl text-gray-200 text-shadow">
                  MediHome - Your Trusted Partner in Healthcare
                </p>
                <p className="max-w-xl mx-auto lg:mx-0 text-gray-300">
                  Comprehensive medical care with expert doctors, advanced technology, and compassionate service. Your health, our priority.
                </p>
                <a href="#" className="inline-flex items-center gap-2 font-medium text-white hover:text-primary transition-colors">
                  View location <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              <div className="flex flex-col gap-6">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardContent className="p-6 text-center">
                    <p className="text-5xl font-bold">25+</p>
                    <p className="text-lg text-gray-200">Years of Experience</p>
                  </CardContent>
                </Card>
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardContent className="p-6 text-center">
                    <p className="text-5xl font-bold">140+</p>
                    <p className="text-lg text-gray-200">Specialist Doctors</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white/80 backdrop-blur-sm shadow-lg rounded-2xl flex items-center p-6 gap-4">
                <div className="bg-primary/10 text-primary p-3 rounded-full">
                  <User className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">Expert Doctors</h3>
                  <p className="text-sm text-gray-600">Skilled professionals delivering top-quality care.</p>
                </div>
              </Card>
              <Card className="bg-primary text-primary-foreground shadow-lg rounded-2xl flex items-center p-6 gap-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <FolderPlus className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Emergency Care</h3>
                  <p className="text-sm text-primary-foreground/90">Fast, reliable treatment when you need it most.</p>
                </div>
              </Card>
              <Card className="bg-white/80 backdrop-blur-sm shadow-lg rounded-2xl flex items-center p-6 gap-4">
                <div className="bg-primary/10 text-primary p-3 rounded-full">
                  <History className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">24/7 Full Support</h3>
                  <p className="text-sm text-gray-600">Always here for appointments and emergencies.</p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about-us" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative flex justify-center items-center h-[500px]">
                <div className="absolute top-0 left-0 w-3/4 h-full">
                  <Image
                    src="https://placehold.co/400x600.png"
                    alt="Clinic Interior"
                    data-ai-hint="clinic interior"
                    width={400}
                    height={600}
                    className="rounded-3xl object-cover h-full w-full shadow-lg"
                  />
                </div>
                <div className="relative ml-auto w-3/4 h-3/4">
                   <Image
                      src="https://placehold.co/400x400.png"
                      alt="Doctor and patient"
                      data-ai-hint="doctor patient"
                      width={400}
                      height={400}
                      className="rounded-3xl object-cover h-full w-full shadow-2xl"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-3xl">
                      <button className="text-white">
                        <PlayCircle className="h-20 w-20 hover:scale-110 transition-transform"/>
                      </button>
                    </div>
                </div>
              </div>
              <div className="space-y-8">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 text-primary p-1.5 rounded-md">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                  <span className="text-primary font-semibold tracking-wider">ABOUT US</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                  MediHome Create A Safe, Your Health Our Priority
                </h2>
                <p className="text-gray-600">
                  MediHome provides top-quality healthcare with experienced doctors, emergency services, and round-the-clock support. Your trusted partner for a healthier life.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="flex gap-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-full h-fit">
                      <Stethoscope className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 mb-1">Our Vision</h4>
                      <p className="text-sm text-gray-600">To be a trusted leader in quality, accessible, and compassionate healthcare.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-full h-fit">
                      <Home className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 mb-1">Our Vision</h4>
                      <p className="text-sm text-gray-600">MediHome delivers expert, patient-focused care with 24/7, advanced technology, and a focus on wellness.</p>
                    </div>
                  </div>
                </div>
                <Button size="lg">Book Appointment</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Commitment Section */}
        <section id="commitment" className="py-16 md:py-24 bg-[#111827] text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="flex items-center justify-center gap-2 text-sm font-semibold tracking-wider uppercase text-yellow-400">
                <Plus className="h-5 w-5" />
                <span>Our Commitment</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Dedicated To Excellence In Healthcare Through Trusted Partnerships
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                We are committed to providing exceptional care by working with leading healthcare professionals, technology providers, and trusted partners.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center pt-8">
                <Image src="https://placehold.co/150x60/ffffff/000000.png?text=Logo" alt="Partner Logo 1" width={150} height={60} className="grayscale hover:grayscale-0 transition-all" />
                <Image src="https://placehold.co/150x60/ffffff/000000.png?text=Logo" alt="Partner Logo 2" width={150} height={60} className="grayscale hover:grayscale-0 transition-all" />
                <Image src="https://placehold.co/150x60/ffffff/000000.png?text=Logo" alt="Partner Logo 3" width={150} height={60} className="grayscale hover:grayscale-0 transition-all" />
                <Image src="https://placehold.co/150x60/ffffff/000000.png?text=Logo" alt="Partner Logo 4" width={150} height={60} className="grayscale hover:grayscale-0 transition-all" />
                <Image src="https://placehold.co/150x60/ffffff/000000.png?text=Logo" alt="Partner Logo 5" width={150} height={60} className="grayscale hover:grayscale-0 transition-all" />
                <Image src="https://placehold.co/150x60/ffffff/000000.png?text=Logo" alt="Partner Logo 6" width={150} height={60} className="grayscale hover:grayscale-0 transition-all" />
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">How It Works</h2>
              <p className="mt-4 text-lg text-gray-600">
                Our streamlined process ensures you receive the best care without any hassle.
              </p>
            </div>
            <div className="relative">
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5">
                  <div className="absolute top-1/2 left-0 w-full h-0.5">
                    <svg width="100%" height="2">
                      <line x1="0" y1="1" x2="100%" y2="1" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="8 8" />
                    </svg>
                  </div>
              </div>
              <div className="grid md:grid-cols-3 gap-12 text-center relative">
                <div className="flex flex-col items-center">
                  <div className="bg-primary/10 text-primary p-5 rounded-full mb-6 relative z-10">
                    <CalendarDays className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">Book an Appointment</h3>
                  <p className="text-gray-600">Schedule your appointment online or by phone.</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-primary/10 text-primary p-5 rounded-full mb-6 relative z-10">
                    <ClipboardPen className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">Get a Diagnosis</h3>
                  <p className="text-gray-600">Our expert team will conduct a thorough assessment.</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-primary/10 text-primary p-5 rounded-full mb-6 relative z-10">
                    <Syringe className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">Receive Your Treatment</h3>
                  <p className="text-gray-600">Personalized care and treatment in the comfort of your home.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
