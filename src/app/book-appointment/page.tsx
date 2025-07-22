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
  homeAddress: z.string().optional(),
  yourLocation: z.string().optional(),
  useCurrentLocation: z.boolean().optional(),
  service: z.string({ required_error: 'Please select a service.' }),
  appointmentDate: z.date({ required_error: 'Please select a date.' }),
  appointmentTime: z.string({ required_error: 'Please select a time slot.' }),
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
  const [date, setDate] = useState<Date | undefined>(new Date(2025, 5, 13));

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      homeAddress: '',
      yourLocation: '',
      useCurrentLocation: false,
      appointmentDate: new Date(2025, 5, 13),
      appointmentTime: '10 AM – 11 AM IST',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid md:grid-cols-2 gap-16">
            {/* Left side: Form */}
            <div>
              <h1 className="text-3xl font-bold mb-8">Appointment details</h1>
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
                  name="homeAddress"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Home address</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Enter" className="min-h-[100px]" {...field} />
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
                      <FormLabel>Your location</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Enter" className="min-h-[100px]" {...field} />
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
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex justify-between items-center">
                  <div>
                    <p className="font-bold text-gray-800">MediHome clinic</p>
                    <p className="text-sm text-gray-600">4.5 km • 15 min</p>
                  </div>
                  <a href="#" className="font-semibold text-primary text-sm hover:underline">
                    Get directions
                  </a>
                </div>
              </div>
            </div>

            {/* Right side: Service, Calendar, Time */}
            <div className="space-y-8 pt-16">
              <FormField
                control={form.control}
                name="service"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Service required</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="consultation">General Medical Consultation</SelectItem>
                        <SelectItem value="disease-management">Chronic Disease Management</SelectItem>
                        <SelectItem value="lab-collection">Lab Sample Collection</SelectItem>
                        <SelectItem value="physiotherapy">Physiotherapy Services</SelectItem>
                        <SelectItem value="nursing">Nursing Care</SelectItem>
                        <SelectItem value="dental">Dental Consultation</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="appointmentDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
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

              <FormField
                control={form.control}
                name="appointmentTime"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="grid grid-cols-3 gap-4"
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

              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                Proceed to payment
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
