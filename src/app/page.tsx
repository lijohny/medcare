import { Button } from '@/components/ui/button';
import { Stethoscope, Users, MessageSquareText, CalendarDays, ClipboardPen, Syringe, Plus, ArrowRight, User, FolderPlus, History, PlayCircle, Home, Eye, Beaker, HeartPulse, Hospital, Star, Quote } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

const doctors = [
  { name: 'Dr. John Smith', specialty: 'Cardiologist', hint: 'doctor portrait' },
  { name: 'Dr. Sarah Johnson', specialty: 'Orthopedic Surgeon', hint: 'doctor portrait' },
  { name: 'Dr. Michael Lee', specialty: 'Pediatrician', hint: 'doctor portrait' },
  { name: 'Dr. Emily Davis', specialty: 'Gynecologist', hint: 'doctor portrait' },
];

const testimonials = [
  {
    name: 'Samantha Elizabeth',
    location: 'New York, NY',
    quote: 'I had an excellent experience at MediHome during a recent emergency. The team was incredibly supportive and attentive, and I received prompt treatment. I truly felt cared for and reassured throughout the entire process.',
  },
  {
    name: 'Olivia Marie',
    location: 'Los Angeles, CA',
    quote: 'CareLink has been my go-to for health consultations, and I am always impressed by the professionalism and genuine care from the doctors. They take the time to listen and explain things, making every visit feel personal.',
  },
  {
    name: 'Jessica Claire',
    location: 'Chicago, IL',
    quote: "The specialists at MediHome provided me with the guidance I needed to manage my health condition. Their expertise and timely support made a huge difference in my recovery, and I'm grateful for the comprehensive care I received.",
  },
];

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
                <Link href="/book-appointment">
                  <Button size="lg">Book Appointment</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Commitment Section */}
        <section id="commitment" className="py-16 md:py-24 bg-zinc-800 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-left space-y-6">
              <div className="flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-orange-500">
                <Plus className="h-5 w-5 bg-orange-500 text-black rounded-full p-0.5" />
                <span>Our Commitment</span>
              </div>
              <h2 className="text-4xl font-bold leading-tight text-white">
                Dedicated To Excellence In Healthcare Through Trusted Partnerships
              </h2>
              <p className="text-gray-300 max-w-3xl">
                We are committed to providing exceptional care by working with leading healthcare professionals, technology providers, and trusted partners.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center pt-8">
                <Image src="https://placehold.co/150x60/ffffff/000000.png?text=logoipsum" alt="Partner Logo 1" width={150} height={60} className="grayscale hover:grayscale-0 transition-all" />
                <Image src="https://placehold.co/150x60/ffffff/000000.png?text=logoipsum" alt="Partner Logo 2" width={150} height={60} className="grayscale hover:grayscale-0 transition-all" />
                <Image src="https://placehold.co/150x60/ffffff/000000.png?text=logoipsum" alt="Partner Logo 3" width={150} height={60} className="grayscale hover:grayscale-0 transition-all" />
                <Image src="https://placehold.co/150x60/ffffff/000000.png?text=logoipsum" alt="Partner Logo 4" width={150} height={60} className="grayscale hover:grayscale-0 transition-all" />
                <Image src="https://placehold.co/150x60/ffffff/000000.png?text=logoipsum" alt="Partner Logo 5" width={150} height={60} className="grayscale hover:grayscale-0 transition-all" />
                <Image src="https://placehold.co/150x60/ffffff/000000.png?text=logoipsum" alt="Partner Logo 6" width={150} height={60} className="grayscale hover:grayscale-0 transition-all" />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="flex items-center justify-center gap-2 text-sm font-semibold tracking-wider uppercase text-primary">
                  <Plus className="h-5 w-5" />
                  <span>Our Services</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">Comprehensive Healthcare Solutions</h2>
              <p className="mt-4 text-gray-600">
                At MediHome, we offer a wide range of medical services tailored to your needs, from routine check-ups to specialized treatments.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white/80 backdrop-blur-sm shadow-lg rounded-2xl p-8 text-center flex flex-col items-center">
                <div className="bg-primary/10 text-primary p-4 rounded-full mb-4">
                  <Syringe className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">General Medical Consultation</h3>
                <p className="text-sm text-gray-600">Comprehensive medical check-ups and consultations for various health concerns in the comfort of your home.</p>
              </Card>
              <Card className="bg-primary text-primary-foreground shadow-lg rounded-2xl p-8 text-center flex flex-col items-center">
                <div className="bg-white/20 p-4 rounded-full mb-4">
                  <HeartPulse className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Chronic Disease Management</h3>
                <p className="text-sm text-primary-foreground/90">Regular monitoring and management of chronic conditions like diabetes, hypertension, and heart disease.</p>
              </Card>
              <Card className="bg-white/80 backdrop-blur-sm shadow-lg rounded-2xl p-8 text-center flex flex-col items-center">
                <div className="bg-primary/10 text-primary p-4 rounded-full mb-4">
                  <Beaker className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Lab Sample Collection</h3>
                <p className="text-sm text-gray-600">Our technicians collect blood and other samples at your home for laboratory testing and analysis.</p>
              </Card>
              <Card className="bg-white/80 backdrop-blur-sm shadow-lg rounded-2xl p-8 text-center flex flex-col items-center">
                <div className="bg-primary/10 text-primary p-4 rounded-full mb-4">
                  <Stethoscope className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Physiotherapy Services</h3>
                <p className="text-sm text-gray-600">Professional physiotherapy sessions at home for rehabilitation, pain management, and mobility improvement.</p>
              </Card>
              <Card className="bg-white/80 backdrop-blur-sm shadow-lg rounded-2xl p-8 text-center flex flex-col items-center">
                <div className="bg-primary/10 text-primary p-4 rounded-full mb-4">
                  <Hospital className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Nursing Care</h3>
                <p className="text-sm text-gray-600">Skilled nursing services including wound care, injections, IV therapy, and post-operative care.</p>
              </Card>
              <Card className="bg-white/80 backdrop-blur-sm shadow-lg rounded-2xl p-8 text-center flex flex-col items-center">
                <div className="bg-primary/10 text-primary p-4 rounded-full mb-4">
                  <User className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Dental Consultation</h3>
                <p className="text-sm text-gray-600">Initial dental assessments, consultations, and minor dental procedures in your home environment.</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="flex items-center justify-center gap-2 text-sm font-semibold tracking-wider uppercase text-primary">
                <Plus className="h-5 w-5 bg-primary text-primary-foreground rounded-full p-0.5" />
                <span>Our Doctors</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">Meet Our Specialist Doctors</h2>
              <p className="mt-4 text-gray-600">
                Our team of specialist doctors is dedicated to providing expert care across a wide range of medical fields.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {doctors.map((doctor) => (
                <div key={doctor.name} className="text-center">
                  <div className="bg-gray-200 rounded-2xl mb-4">
                    <Image
                      src="https://placehold.co/300x400.png"
                      alt={`Portrait of ${doctor.name}`}
                      data-ai-hint={doctor.hint}
                      width={300}
                      height={400}
                      className="rounded-2xl object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{doctor.name}</h3>
                  <p className="text-sm text-gray-600">{doctor.specialty}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-16 md:py-24" style={{ backgroundColor: '#F0F4FF' }}>
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-primary">
                  <Plus className="h-5 w-5" />
                  <span>How It Works</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Trusted Healthcare With A Focus On Your Well-Being</h2>
              </div>
              <p className="text-gray-600">
                At MediHome, we've streamlined the healthcare process to ensure you receive the best care with ease and convenience.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6">
                <div className="flex items-center gap-6">
                  <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-full bg-primary text-primary-foreground font-bold text-2xl">01</div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-800">Book An Appointment</h3>
                    <p className="text-gray-600">Schedule your visit through our easy-to-use online platform or by calling our friendly support team. Choose the time that works best for you.</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-6">
                  <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-full bg-primary text-primary-foreground font-bold text-2xl">02</div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-800">Consult Our Experts</h3>
                    <p className="text-gray-600">Meet with our highly skilled doctors and medical specialists who will listen to your concerns, provide an accurate diagnosis, and recommend the effective treatment options.</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-6">
                  <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-full bg-primary text-primary-foreground font-bold text-2xl">03</div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-800">Receive Care</h3>
                    <p className="text-gray-600">Once a treatment plan is established, our team ensures you receive the necessary medical services, whether it's a prescription from our pharmacy, specialized care.</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-6">
                  <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-full bg-primary text-primary-foreground font-bold text-2xl">04</div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-800">Follow-Up</h3>
                    <p className="text-gray-600">After your treatment, we stay connected for follow-up consultations, ensuring your recovery is progressing smoothly and addressing any further questions you may have.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 md:py-24 bg-primary text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <div className="flex items-center justify-center gap-2 text-sm font-semibold tracking-wider uppercase text-orange-400">
                <Plus className="h-5 w-5 bg-orange-400 text-black rounded-full p-0.5" />
                <span>Patient Testimonials</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mt-4">Hear From Those Who Trust Care Link</h2>
              <p className="mt-4 text-primary-foreground/80 max-w-2xl mx-auto">
                Our patients' experiences speak volumes. Read how MediHome has provided compassionate, expert care and made a difference in their lives.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.name} className="space-y-4 relative">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-lg bg-gray-300 flex-shrink-0">
                       <Image src="https://placehold.co/64x64.png" width={64} height={64} alt="User avatar" className="rounded-lg object-cover" data-ai-hint="user avatar" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{testimonial.name}</h3>
                      <p className="text-sm text-primary-foreground/80">{testimonial.location}</p>
                    </div>
                    <div className="absolute top-0 right-0 bg-orange-400 text-black rounded-full p-2">
                      <Quote className="h-6 w-6" />
                    </div>
                  </div>
                  <p className="text-primary-foreground/90">{testimonial.quote}</p>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
