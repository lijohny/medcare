import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ArrowRight,
  BriefcaseMedical,
  HeartPulse,
  Stethoscope,
  Quote,
  Star,
  BrainCircuit,
  Pill,
} from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Your Trusted Partner in Health
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    MediHome provides comprehensive and compassionate healthcare services, ensuring your well-being is our top priority.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg">Book Appointment</Button>
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </div>
              </div>
              <Image
                src="https://placehold.co/600x600.png"
                width="600"
                height="600"
                alt="Hero"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
                data-ai-hint="doctor smiling"
              />
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Our Services</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Comprehensive Medical Care</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer a wide range of services to meet your health needs, from primary care to specialized treatments.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader className="flex flex-col items-center text-center">
                  <div className="p-3 bg-primary/10 rounded-full mb-4">
                    <Stethoscope className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Primary Care</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">Routine check-ups, preventive care, and treatment for common illnesses.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-col items-center text-center">
                  <div className="p-3 bg-primary/10 rounded-full mb-4">
                    <HeartPulse className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Cardiology</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">Specialized heart care, including diagnosis and treatment of cardiovascular diseases.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-col items-center text-center">
                  <div className="p-3 bg-primary/10 rounded-full mb-4">
                    <BrainCircuit className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Neurology</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">Expert diagnosis and management of nervous system disorders.</p>
                </CardContent>
              </Card>
               <Card>
                <CardHeader className="flex flex-col items-center text-center">
                  <div className="p-3 bg-primary/10 rounded-full mb-4">
                    <BriefcaseMedical className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Emergency Care</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">24/7 emergency services for urgent medical needs.</p>
                </CardContent>
              </Card>
               <Card>
                <CardHeader className="flex flex-col items-center text-center">
                  <div className="p-3 bg-primary/10 rounded-full mb-4">
                    <Pill className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Pharmacy</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">On-site pharmacy for convenient prescription filling.</p>
                </CardContent>
              </Card>
                 <Card>
                <CardHeader className="flex flex-col items-center text-center">
                  <div className="p-3 bg-primary/10 rounded-full mb-4">
                    <Stethoscope className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Diagnostics</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">Advanced imaging and lab services for accurate diagnosis.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Testimonials</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Patients Say</h2>
                 <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from our patients about their experience with MediHome.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:grid-cols-3 lg:gap-12 py-12">
              <Card className="p-6">
                 <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <Quote className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-muted-foreground mb-4">The care I received at MediHome was exceptional. The doctors and staff were incredibly professional and compassionate.</p>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-0.5">
                      <Star className="w-4 h-4 fill-primary text-primary" />
                      <Star className="w-4 h-4 fill-primary text-primary" />
                      <Star className="w-4 h-4 fill-primary text-primary" />
                      <Star className="w-4 h-4 fill-primary text-primary" />
                      <Star className="w-4 h-4 fill-primary text-primary" />
                    </div>
                  </div>
                  <p className="font-semibold mt-4">Sarah L.</p>
                </CardContent>
              </Card>
              <Card className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <Quote className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-muted-foreground mb-4">I am so grateful for the team at MediHome. They went above and beyond to ensure I was comfortable and well-cared for.</p>
                   <div className="flex items-center gap-2">
                    <div className="flex items-center gap-0.5">
                      <Star className="w-4 h-4 fill-primary text-primary" />
                      <Star className="w-4 h-4 fill-primary text-primary" />
                      <Star className="w-4 h-4 fill-primary text-primary" />
                      <Star className="w-4 h-4 fill-primary text-primary" />
                      <Star className="w-4 h-4 fill-primary text-primary" />
                    </div>
                  </div>
                  <p className="font-semibold mt-4">John D.</p>
                </CardContent>
              </Card>
               <Card className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <Quote className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-muted-foreground mb-4">The quality of care and the friendly atmosphere make MediHome the best choice for our family's healthcare needs.</p>
                   <div className="flex items-center gap-2">
                    <div className="flex items-center gap-0.5">
                      <Star className="w-4 h-4 fill-primary text-primary" />
                      <Star className="w-4 h-4 fill-primary text-primary" />
                      <Star className="w-4 h-4 fill-primary text-primary" />
                      <Star className="w-4 h-4 fill-primary text-primary" />
                      <Star className="w-4 h-4 text-muted" />
                    </div>
                  </div>
                  <p className="font-semibold mt-4">Maria S.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="blog" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
               <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Our Blog</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Health Insights and News</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Stay informed with the latest health tips, news, and insights from our medical experts.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:grid-cols-3 lg:gap-12 py-12">
               <Card>
                <Image
                  src="https://placehold.co/400x250.png"
                  width={400}
                  height={250}
                  alt="Blog post image"
                  className="rounded-t-lg object-cover w-full aspect-[16/9]"
                  data-ai-hint="healthy food"
                />
                <CardContent className="p-4 text-left">
                  <h3 className="text-lg font-bold mb-2">The Importance of a Balanced Diet</h3>
                  <p className="text-sm text-muted-foreground mb-4">Learn how a balanced diet can improve your overall health and well-being.</p>
                  <Button variant="link" className="p-0">Read More <ArrowRight className="ml-2 h-4 w-4" /></Button>
                </CardContent>
              </Card>
                <Card>
                <Image
                  src="https://placehold.co/400x250.png"
                  width={400}
                  height={250}
                  alt="Blog post image"
                  className="rounded-t-lg object-cover w-full aspect-[16/9]"
                  data-ai-hint="person exercising"
                />
                <CardContent className="p-4 text-left">
                  <h3 className="text-lg font-bold mb-2">Benefits of Regular Exercise</h3>
                  <p className="text-sm text-muted-foreground mb-4">Discover the positive impact of regular physical activity on your mental and physical health.</p>
                  <Button variant="link" className="p-0">Read More <ArrowRight className="ml-2 h-4 w-4" /></Button>
                </CardContent>
              </Card>
                <Card>
                <Image
                  src="https://placehold.co/400x250.png"
                  width={400}
                  height={250}
                  alt="Blog post image"
                  className="rounded-t-lg object-cover w-full aspect-[16/9]"
                  data-ai-hint="person sleeping"
                />
                <CardContent className="p-4 text-left">
                  <h3 className="text-lg font-bold mb-2">The Power of a Good Night's Sleep</h3>
                  <p className="text-sm text-muted-foreground mb-4">Understand why quality sleep is crucial for your health and get tips for better rest.</p>
                  <Button variant="link" className="p-0">Read More <ArrowRight className="ml-2 h-4 w-4" /></Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
