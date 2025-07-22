import { Button } from '@/components/ui/button';
import { Stethoscope, Users, MessageSquareText, CalendarDays, ClipboardPen, Syringe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden">
          <div className="absolute inset-0 z-0 bg-gray-700">
            {/* The video will be sourced from a CDN in a real application */}
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
          <div className="relative z-10 container mx-auto px-4 md:px-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-shadow-lg">
              Your Health, Our Priority Anytime, Anywhere
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 mb-8 text-shadow">
              We are dedicated to providing the best healthcare services for you
              and your family.
            </p>
            <Button size="lg" variant="default">
              Book an Appointment
            </Button>
          </div>
        </section>

        {/* Commitment Section */}
        <section id="services" className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Our Commitment to Your Well-being
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                We are dedicated to providing compassionate, high-quality care
                in the comfort of your own home.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 text-primary p-4 rounded-full w-fit">
                    <Stethoscope className="h-8 w-8" />
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl font-semibold text-gray-800 mb-2">
                    24/7 Service
                  </CardTitle>
                  <p className="text-gray-600">
                    Our dedicated team is available around the clock to provide
                    the care you need, whenever you need it.
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 text-primary p-4 rounded-full w-fit">
                    <Users className="h-8 w-8" />
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl font-semibold text-gray-800 mb-2">
                    Expert Medical Team
                  </CardTitle>
                  <p className="text-gray-600">
                    Our team of experienced and compassionate professionals is
                    committed to your health and well-being.
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 text-primary p-4 rounded-full w-fit">
                    <MessageSquareText className="h-8 w-8" />
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl font-semibold text-gray-800 mb-2">
                    Easy Online Communication
                  </CardTitle>
                  <p className="text-gray-600">
                    Stay connected with your care team through our secure and
                    easy-to-use online platform.
                  </p>
                </CardContent>
              </Card>
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

        {/* The rest of the page sections will be added here */}
      </main>
    </div>
  );
}
