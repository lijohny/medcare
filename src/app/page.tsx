import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, BriefcaseMedical, Clock, PlayCircle, Plus, User, Users } from 'lucide-react';

export default function Home() {
  return (
    <main>
      <section className="bg-background">
        <div className="container mx-auto px-4 py-12 md:py-24 lg:py-32">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  <Plus className="h-4 w-4" />
                  WELCOME TO MEDIHOME
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                  We Are Here To Hear And Heal Your Health Problems
                </h1>
                <h2 className="text-xl font-medium text-muted-foreground">
                  MediHome - Your Trusted Partner in Healthcare
                </h2>
                <p className="max-w-xl text-muted-foreground">
                  Comprehensive medical care with expert doctors, advanced technology, and compassionate service. Your health, our priority.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="link" className="p-0 text-foreground">
                  View location <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <Card className="bg-secondary p-6">
                <CardContent className="flex flex-col items-center justify-center space-y-2 p-0">
                  <p className="text-5xl font-bold text-foreground">25+</p>
                  <p className="text-muted-foreground">Years of Experience</p>
                </CardContent>
              </Card>
              <Card className="bg-secondary p-6">
                <CardContent className="flex flex-col items-center justify-center space-y-2 p-0">
                  <p className="text-5xl font-bold text-foreground">140+</p>
                  <p className="text-muted-foreground">Specialist Doctors</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="bg-transparent border-0 shadow-none">
              <CardContent className="flex flex-col items-center text-center p-6 bg-secondary rounded-lg">
                <div className="p-3 bg-primary/10 rounded-full mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Expert Doctors</h3>
                <p className="text-muted-foreground">Skilled professionals delivering top-quality care.</p>
              </CardContent>
            </Card>
            <Card className="bg-primary text-primary-foreground border-0 shadow-none">
              <CardContent className="flex flex-col items-center text-center p-6 rounded-lg">
                 <div className="p-3 bg-background/20 rounded-full mb-4">
                  <BriefcaseMedical className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Emergency Care</h3>
                <p>Fast, reliable treatment when you need it most.</p>
              </CardContent>
            </Card>
            <Card className="bg-transparent border-0 shadow-none">
              <CardContent className="flex flex-col items-center text-center p-6 bg-secondary rounded-lg">
                <div className="p-3 bg-primary/10 rounded-full mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">24/7 Full Support</h3>
                <p className="text-muted-foreground">Always here for appointments and emergencies.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="https://placehold.co/300x400.png"
                width={300}
                height={400}
                alt="Doctor with patient"
                className="rounded-lg object-cover w-full h-full"
                data-ai-hint="doctor older patient"
              />
              <div className="relative">
                <Image
                  src="https://placehold.co/300x400.png"
                  width={300}
                  height={400}
                  alt="Medical procedure"
                  className="rounded-lg object-cover w-full h-full"
                  data-ai-hint="medical equipment"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-lg">
                  <PlayCircle className="h-16 w-16 text-white" />
                </div>
              </div>
            </div>
            <div className="space-y-6">
               <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  <Plus className="h-4 w-4" />
                  ABOUT US
                </div>
              <h2 className="text-3xl font-bold text-foreground">MediHome Create A Safe, Your Health Our Priority</h2>
              <p className="text-muted-foreground">
                CareLink provides top-quality healthcare with experienced doctors, emergency services, and round-the-clock support. Your trusted partner for a healthier life.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Our Vision</h4>
                    <p className="text-muted-foreground">To be a trusted leader in quality, accessible, and compassionate healthcare.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                   <BriefcaseMedical className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Our Mission</h4>
                    <p className="text-muted-foreground">CareLink delivers expert, patient-focused care with 24/7, advanced technology, and a focus on wellness.</p>
                  </div>
                </div>
              </div>
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">Book Appointment</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
