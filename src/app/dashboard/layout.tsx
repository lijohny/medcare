import { AdminHeader } from '@/components/layout/admin-header';
import { Sidebar, SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';
import { LayoutDashboard, Users, CreditCard, Activity } from 'lucide-react';
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
            <SidebarContent>
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
              </SidebarMenu>
            </SidebarContent>
        </Sidebar>
        <div className="flex flex-col flex-1">
          <AdminHeader />
          <main className="flex-1 container mx-auto p-4 sm:px-6 sm:py-0 md:gap-8">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
