import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden bg-gray-700">
          <div className="absolute inset-0 z-0">
            {/* The video will be sourced from a CDN in a real application */}
            <video
              className="w-full h-full object-cover brightness-50"
              autoPlay
              loop
              muted
              playsInline
              poster="https://placehold.co/1920x1080.png"
            >
              <source src="https://cdn.coverr.co/videos/coverr-a-doctor-in-a-laboratory-looking-at-a-vial-5317/1080p.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="relative z-10 container px-4 md:px-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-shadow-lg">
              Your Health, Our Priority Anytime, Anywhere
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 mb-8 text-shadow">
              We are dedicated to providing the best healthcare services for you and your family.
            </p>
            <Button size="lg" variant="default">Book an Appointment</Button>
          </div>
        </section>

        {/* The rest of the page sections will be added here */}
      </main>
    </div>
  );
}
