'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-10rem)] bg-gray-50">
      <Card className="w-full max-w-sm">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl">Login</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col">
          <Link href="/dashboard" className="w-full">
            <Button className="w-full">Login</Button>
          </Link>
          <p className="mt-4 text-xs text-center text-gray-700">
            Don't have an account?{' '}
            <Link href="#" className=" text-blue-600 hover:underline">
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
