import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, CheckCircle, Heart, Users, Stethoscope, Star, Quote } from 'lucide-react';
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

        {/* Feature Cards Section */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="text-center p-8 border-none shadow-lg">
                <Heart className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Compassionate Care</h3>
                <p className="text-muted-foreground">We provide care that is respectful of and responsive to individual patient preferences, needs, and values.</p>
              </Card>
              <Card className="text-center p-8 border-none shadow-lg">
                <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Experienced Team</h3>
                <p className="text-muted-foreground">Our team of dedicated professionals is equipped with the knowledge and experience to handle your needs.</p>
              </Card>
              <Card className="text-center p-8 border-none shadow-lg">
                <Stethoscope className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Advanced Technology</h3>
                <p className="text-muted-foreground">We use state-of-the-art technology to ensure you receive the highest quality diagnosis and treatment.</p>
              </Card>
            </div>
          </div>
        </section>
        
        {/* About Us Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">About Us</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Who We Are</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  MediHome is a leading provider of in-home healthcare services, committed to delivering clinical excellence and compassionate care. Our mission is to help our patients live safely and comfortably in their own homes.
                </p>
                <Button>Learn More</Button>
              </div>
               <Image
                src="https://placehold.co/600x400.png"
                width="600"
                height="400"
                alt="About Us"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                data-ai-hint="diverse group doctors"
              />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 text-center">
            <div className="space-y-4 mb-12">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">How It Works</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Your Path to Better Health</h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed">
                We've simplified the process to ensure you get the care you need, right when you need it.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center">
                 <div className="flex items-center justify-center bg-primary text-primary-foreground rounded-full h-16 w-16 text-2xl font-bold mb-4">1</div>
                 <h3 className="text-xl font-bold mb-2">Book an Appointment</h3>
                 <p className="text-muted-foreground">Easily schedule a visit online or by phone with one of our specialists.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center bg-primary text-primary-foreground rounded-full h-16 w-16 text-2xl font-bold mb-4">2</div>
                <h3 className="text-xl font-bold mb-2">Get a Consultation</h3>
                <p className="text-muted-foreground">Receive a thorough consultation from the comfort of your home via telehealth or an in-person visit.</p>
              </div>
               <div className="flex flex-col items-center">
                <div className="flex items-center justify-center bg-primary text-primary-foreground rounded-full h-16 w-16 text-2xl font-bold mb-4">3</div>
                <h3 className="text-xl font-bold mb-2">Receive Treatment</h3>
                <p className="text-muted-foreground">Get a personalized treatment plan and ongoing support from our dedicated care team.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
               <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">Testimonials</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Patients Say</h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed">
                Real stories from people we've helped on their journey to wellness.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-1 lg:grid-cols-2">
              <Card className="p-6 border-none shadow-lg">
                <CardContent className="p-0">
                  <Quote className="w-8 h-8 text-primary mb-4" />
                  <p className="text-muted-foreground mb-6">"The care and attention I received were outstanding. The team at MediHome made me feel comfortable and secure throughout my recovery."</p>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="https://placehold.co/40x40.png" alt="Jane Doe" data-ai-hint="woman smiling" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">Jane Doe</p>
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                           <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="p-6 border-none shadow-lg">
                 <CardContent className="p-0">
                  <Quote className="w-8 h-8 text-primary mb-4" />
                  <p className="text-muted-foreground mb-6">"Booking an appointment was so easy, and the virtual consultation was just as thorough as an in-person visit. Highly recommend!"</p>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="https://placehold.co/40x40.png" alt="John Smith" data-ai-hint="man smiling"/>
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">John Smith</p>
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                           <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
