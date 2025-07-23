'use client';

import { useState, useMemo } from 'react';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { MoreHorizontal, Search, UserPlus } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

const users = [
    {
        name: "John Doe",
        email: "john.doe@example.com",
        role: "Admin",
    },
    {
        name: "Jane Smith",
        email: "jane.smith@example.com",
        role: "Editor",
    },
    {
        name: "Samuel Green",
        email: "sam.green@example.com",
        role: "Viewer",
    },
    {
        name: "Emily White",
        email: "emily.white@example.com",
        role: "Editor",
    },
    {
        name: 'Liam Johnson',
        email: 'liam.johnson@example.com',
        role: 'Admin',
      },
      {
        name: 'Olivia Brown',
        email: 'olivia.brown@example.com',
        role: 'Viewer',
      },
      {
        name: 'Noah Davis',
        email: 'noah.davis@example.com',
        role: 'Editor',
      },
]

export default function UserManagementPage() {
    const [activeTab, setActiveTab] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredUsers = useMemo(() => {
        let filtered = users;
        if (activeTab !== 'all') {
            filtered = filtered.filter(user => user.role.toLowerCase() === activeTab);
        }
        if (searchTerm) {
            filtered = filtered.filter(user => 
                user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                user.email.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        return filtered;
    }, [activeTab, searchTerm]);

    const getRoleBadgeVariant = (role: string) => {
        switch (role) {
            case 'Admin': return 'default';
            case 'Editor': return 'secondary';
            case 'Viewer': return 'outline';
            default: return 'outline';
        }
    }

  return (
    <div className="py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
            <div className="flex items-center pb-4 gap-4">
                <TabsList>
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="admin">Admin</TabsTrigger>
                    <TabsTrigger value="editor">Editor</TabsTrigger>
                    <TabsTrigger value="viewer">Viewer</TabsTrigger>
                </TabsList>
                <div className="ml-auto flex items-center gap-2">
                    <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Search by name or email..."
                            className="pl-8 sm:w-[300px]"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <Button>
                        <UserPlus className="mr-2 h-4 w-4" /> Add User
                    </Button>
                </div>
            </div>
            <Card>
            <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>Manage your users and their roles.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                <TableHeader>
                    <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead className='hidden md:table-cell'>Email</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>
                        <span className="sr-only">Actions</span>
                    </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filteredUsers.map((user) => (
                    <TableRow key={user.email}>
                        <TableCell className="font-medium">
                            <div>{user.name}</div>
                            <div className='md:hidden text-sm text-muted-foreground'>{user.email}</div>
                        </TableCell>
                        <TableCell className='hidden md:table-cell'>{user.email}</TableCell>
                        <TableCell>
                            <Badge variant={getRoleBadgeVariant(user.role)}>{user.role}</Badge>
                        </TableCell>
                        <TableCell>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                            <Button aria-haspopup="true" size="icon" variant="ghost">
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </CardContent>
            </Card>
        </Tabs>
    </div>
  )
}
