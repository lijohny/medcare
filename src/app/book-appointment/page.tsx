'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Calendar } from '@/components/ui/calendar';
import { useState } from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { CheckCircle } from 'lucide-react';

const formSchema = z.object({
  fullName: z.string().min(2, { message: 'Full name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(10, { message: 'Phone number must be at least 10 digits.' }),
  serviceType: z.string({ required_error: 'Please select a service type.' }),
  homeAddress: z.string().optional(),
  yourLocation: z.string().optional(),
  useCurrentLocation: z.boolean().optional(),
  reason: z.string().min(10, { message: 'Please provide a reason for your visit.' }),
  appointmentDate: z.date({ required_error: 'Please select a date.' }),
  appointmentTime: z.string({ required_error: 'Please select a time slot.' }),
}).refine(data => {
    if (data.serviceType === 'home') {
        return !!data.homeAddress && data.homeAddress.length > 0;
    }
    return true;
}, {
    message: 'Home address is required for home visits.',
    path: ['homeAddress'],
});

const timeSlots = [
  '10 AM – 11 AM IST',
  '11 AM – 12 PM IST',
  '1 PM – 2 PM IST',
  '3 PM – 4 PM IST',
  '4 PM – 5 PM IST',
  '5 PM – 7 PM IST',
];

export default function BookAppointmentPage() {
  const [step, setStep] = useState(1);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      homeAddress: '',
      yourLocation: '',
      useCurrentLocation: false,
      reason: '',
      appointmentDate: new Date(2025, 5, 13),
      appointmentTime: '10 AM – 11 AM IST',
    },
  });

  const serviceType = form.watch('serviceType');

  async function handleNext() {
    const isValid = await form.trigger(["fullName", "email", "phone", "serviceType", "homeAddress"]);
    if (isValid) {
      setStep(2);
    }
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Proceed to payment logic here
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <h1 className="text-3xl font-bold mb-8 text-center">Appointment details</h1>
          <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
            {step === 1 && (
              <>
                {/* Left side: Step 1 */}
                <div className="space-y-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="serviceType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a service type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="clinic">Clinic Visit</SelectItem>
                            <SelectItem value="home">Home Visit</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Right side: Step 1 (Conditional) */}
                <div className="space-y-6">
                  {serviceType === 'home' && (
                    <>
                      <FormField
                        control={form.control}
                        name="homeAddress"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Home address</FormLabel>
                            <FormControl>
                              <Textarea placeholder="Enter your full address" className="min-h-[100px]" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="yourLocation"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your location (Optional)</FormLabel>
                            <FormControl>
                              <Textarea placeholder="e.g. Google Maps link" className="min-h-[100px]" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="useCurrentLocation"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>Use my current location</FormLabel>
                            </div>
                          </FormItem>
                        )}
                      />
                    </>
                  )}
                   <div className="flex justify-end pt-4">
                     <Button type="button" size="lg" onClick={handleNext}>
                        Continue
                      </Button>
                   </div>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                {/* Left side: Step 2 */}
                <div className="space-y-8">
                   <FormField
                    control={form.control}
                    name="reason"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Reason for Appointment</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Describe your symptoms or the type of doctor you need to see" className="min-h-[150px]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="appointmentDate"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                         <FormLabel>Select a Date</FormLabel>
                        <FormControl>
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            initialFocus
                            className="p-0"
                            defaultMonth={new Date(2025, 5)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Right side: Step 2 */}
                <div className="space-y-8 pt-6">
                    <FormField
                        control={form.control}
                        name="appointmentTime"
                        render={({ field }) => (
                        <FormItem className="space-y-3">
                             <FormLabel>Select a Time Slot</FormLabel>
                            <FormControl>
                            <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="grid grid-cols-2 gap-4"
                            >
                                {timeSlots.map((slot) => (
                                <FormItem key={slot} className="flex-1">
                                    <FormControl>
                                    <RadioGroupItem value={slot} className="sr-only" id={slot} />
                                    </FormControl>
                                    <Label
                                    htmlFor={slot}
                                    className="flex items-center justify-center gap-2 rounded-md border-2 border-muted bg-popover p-4 font-medium hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer text-sm"
                                    >
                                    {slot}
                                    {field.value === slot && <CheckCircle className="h-5 w-5 text-primary" />}
                                    </Label>
                                </FormItem>
                                ))}
                            </RadioGroup>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <div className="flex justify-between items-center w-full pt-4">
                        <Button type="button" variant="outline" onClick={() => setStep(1)}>
                            Back
                        </Button>
                        <Button type="submit" size="lg" className="bg-primary hover:bg-primary/90">
                            Proceed to payment
                        </Button>
                    </div>
                </div>
              </>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
}
