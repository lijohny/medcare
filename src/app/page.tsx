import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export default function Home() {
  return (
    <main>
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Quality Healthcare, Right at Your Doorstep.
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  MediHome provides professional and compassionate medical care in the comfort of your own home. Our certified professionals are dedicated to your well-being.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg">Explore Our Services</Button>
                <Button size="lg" variant="outline">Contact Us</Button>
              </div>
            </div>
            <Image
              src="https://placehold.co/600x400.png"
              alt="Healthcare professional visiting a patient at home"
              width={600}
              height={400}
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              data-ai-hint="doctor patient"
            />
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Commitment to You</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We believe in a patient-centric approach, where your needs and comfort are our top priority. Here's what sets us apart.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 mt-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><CheckCircle className="text-primary"/> Expert Care</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Our team consists of licensed and experienced nurses, therapists, and caregivers.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><CheckCircle className="text-primary"/> Personalized Plans</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">We create customized care plans tailored to the specific needs of each patient.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><CheckCircle className="text-primary"/> 24/7 Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">We're always available to answer your questions and provide support when you need it.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
