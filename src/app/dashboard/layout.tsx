'use client';
import { AdminHeader } from '@/components/layout/admin-header';
import { Sidebar, SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';
import { LayoutDashboard, Users, CreditCard, Activity, UserCog } from 'lucide-react';
import Link from 'next/link';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex h-full min-h-screen bg-muted/40">
        <Sidebar>
            <SidebarHeader />
            <SidebarContent className="pl-4">
              <SidebarMenu>
                <SidebarMenuItem>
                  <Link href="/dashboard">
                    <SidebarMenuButton isActive>
                      <LayoutDashboard />
                      Dashboard
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
                 <SidebarMenuItem>
                   <Link href="#">
                    <SidebarMenuButton>
                      <Users />
                      Appointments
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
                 <SidebarMenuItem>
                  <Link href="#">
                    <SidebarMenuButton>
                      <CreditCard />
                      New Patients
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
                 <SidebarMenuItem>
                  <Link href="#">
                    <SidebarMenuButton>
                      <Activity />
                      Activity
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <Link href="/dashboard/user-management">
                    <SidebarMenuButton>
                      <UserCog />
                      User Management
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarContent>
        </Sidebar>
        <SidebarInset>
            <AdminHeader />
            <main className="flex-1 flex flex-col">
                {children}
            </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
