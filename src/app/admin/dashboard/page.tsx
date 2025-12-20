'use client';

import {
    Users,
    BookOpen,
    FileText,
    Briefcase,
    MoreHorizontal,
    Search,
    Filter,
    Download,
    Plus
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export default function AdminDashboardPage() {
    // Mock Data for Stats
    const stats = [
        { title: 'Total Team', value: '4', sub: '+2 this month', icon: Users, color: 'bg-blue-600', subColor: 'text-blue-200' },
        { title: 'Books Published', value: '3', sub: '2.7k total downloads', icon: BookOpen, color: 'bg-purple-600', subColor: 'text-purple-200' },
        { title: 'Insights', value: '3', sub: '4.3k total views', icon: FileText, color: 'bg-green-600', subColor: 'text-green-200' },
        { title: 'Practice Areas', value: '5', sub: 'All active', icon: Briefcase, color: 'bg-orange-600', subColor: 'text-orange-200' },
    ];

    // Mock Data for Table
    const teamMembers = [
        { id: 1, name: 'Dej-Udom Krairit', email: 'dej-udom@dejudom.com', phone: '+66 2 233 0055', position: 'Founder & CEO', department: 'Executive', status: 'active', image: '' },
        { id: 2, name: 'Nipa Pakdeechanuan', email: 'nipa@dejudom.com', phone: '+66 2 233 0056', position: 'Senior Partner', department: 'Corporate', status: 'active', image: '' },
        { id: 3, name: 'Worawut Krairit', email: 'worawut@dejudom.com', phone: '+66 2 233 0057', position: 'Senior Partner', department: 'IP', status: 'active', image: '' },
        { id: 4, name: 'Benjawan Rasdusade', email: 'benjawan@dejudom.com', phone: '+66 2 233 0058', position: 'Partner', department: 'Taxation', status: 'active', image: '' },
    ];

    return (
        <div className="space-y-8">
            {/* Page Header */}
            <div>
                <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Team Members</h1>
                <p className="text-gray-500 mt-1">Manage your content and team members</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <Card key={index} className={`${stat.color} text-white border-none shadow-lg relative overflow-hidden`}>
                        <CardContent className="p-6">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-sm font-medium opacity-90">{stat.title}</p>
                                    <h3 className="text-4xl font-bold mt-2">{stat.value}</h3>
                                    <p className={`text-xs mt-2 ${stat.subColor} flex items-center gap-1`}>
                                        <span className="inline-block">↗</span> {stat.sub}
                                    </p>
                                </div>
                                <div className="p-2 bg-white/20 rounded-lg">
                                    <stat.icon className="w-5 h-5 text-white" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Table Section */}
            <Card className="border-none shadow-sm">
                <CardContent className="p-6">
                    {/* Toolbar */}
                    <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
                        <div className="flex gap-4 flex-1">
                            <div className="relative flex-1 max-w-md">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <Input
                                    placeholder="Search..."
                                    className="pl-10 border-gray-200"
                                />
                            </div>
                            <Button variant="outline" className="gap-2 text-gray-600 border-gray-200">
                                <Filter className="h-4 w-4" />
                                Filter
                            </Button>
                        </div>
                        <div className="flex gap-3">
                            <Button variant="outline" className="gap-2 text-gray-600 border-gray-200">
                                <Download className="h-4 w-4" />
                                Export
                            </Button>
                            <Button className="bg-[#111] hover:bg-black gap-2">
                                <Plus className="h-4 w-4" />
                                Add New
                            </Button>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="rounded-lg border border-gray-100 overflow-hidden">
                        <Table>
                            <TableHeader className="bg-gray-50/50">
                                <TableRow>
                                    <TableHead className="font-semibold text-gray-900 w-[300px]">Member</TableHead>
                                    <TableHead className="font-semibold text-gray-900">Position</TableHead>
                                    <TableHead className="font-semibold text-gray-900">Department</TableHead>
                                    <TableHead className="font-semibold text-gray-900">Contact</TableHead>
                                    <TableHead className="font-semibold text-gray-900">Status</TableHead>
                                    <TableHead className="font-semibold text-gray-900 text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {teamMembers.map((member) => (
                                    <TableRow key={member.id} className="hover:bg-gray-50/50">
                                        <TableCell>
                                            <div className="flex items-center gap-3">
                                                <Avatar className="h-10 w-10 border border-gray-100">
                                                    <AvatarImage src={member.image} />
                                                    <AvatarFallback>{member.name[0]}</AvatarFallback>
                                                </Avatar>
                                                <span className="font-semibold text-gray-900">{member.name}</span>
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-gray-600">{member.position}</TableCell>
                                        <TableCell>
                                            <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100 border-none font-normal">
                                                {member.department}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex flex-col text-sm text-gray-500 gap-1">
                                                <span className="flex items-center gap-1.5">
                                                    ✉️ {member.email}
                                                </span>
                                                <span className="flex items-center gap-1.5">
                                                    📞 {member.phone}
                                                </span>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <Badge className="bg-green-50 text-green-700 hover:bg-green-100 border-none uppercase text-[10px] tracking-wide font-bold shadow-none">
                                                {member.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-gray-900">
                                                <MoreHorizontal className="h-4 w-4" />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
