'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
    Users,
    User,
    FileText,
    Briefcase,
    BookOpen,
    Settings,
    LogOut,
    Plus,
    Search,
    MoreHorizontal,
    Edit,
    Trash2,
    Eye,
    TrendingUp,
    Activity,
    Bell,
    ChevronDown,
    Filter,
    Download,
    Upload,
    Mail,
    Phone,
    Building,
    GraduationCap,
    Image as ImageIcon,
    Globe,
    Tag
} from 'lucide-react';

// Mock data
const mockTeamMembers = [
    { id: 1, name: 'Dej-Udom Krairit', position: 'Founder & CEO', email: 'dej-udom@dejudom.com', phone: '+66 2 233 0055', status: 'active', department: 'Executive', image: '/team-member-1.png' },
    { id: 2, name: 'Nipa Pakdeechanuan', position: 'Senior Partner', email: 'nipa@dejudom.com', phone: '+66 2 233 0056', status: 'active', department: 'Corporate', image: '/team-member-2.png' },
    { id: 3, name: 'Worawut Krairit', position: 'Senior Partner', email: 'worawut@dejudom.com', phone: '+66 2 233 0057', status: 'active', department: 'IP', image: '/team-member-3.png' },
    { id: 4, name: 'Benjawan Rasdusade', position: 'Partner', email: 'benjawan@dejudom.com', phone: '+66 2 233 0058', status: 'active', department: 'Taxation', image: '/team-member-4.png' },
];

const mockBooks = [
    { id: 1, title: 'Thai Tax Law Handbook 2024', author: 'Prof. Dej-Udom Krairit', year: 2024, category: 'Taxation', downloads: 1234, status: 'published', coverImage: '/book-1.jpg' },
    { id: 2, title: 'Corporate Governance in Thailand', author: 'Prof. Dej-Udom Krairit', year: 2023, category: 'Corporate', downloads: 856, status: 'published', coverImage: '/book-2.jpg' },
    { id: 3, title: 'Immigration Law Guide', author: 'Prof. Dej-Udom Krairit', year: 2023, category: 'Immigration', downloads: 642, status: 'draft', coverImage: '/book-3.jpg' },
];

const mockInsights = [
    { id: 1, title: 'New Tax Regulations 2024', slug: 'new-tax-regulations-2024', category: 'Taxation', date: '2024-01-15', status: 'published', views: 2453, author: 'Prof. Dej-Udom Krairit' },
    { id: 2, title: 'Corporate Law Updates', slug: 'corporate-law-updates', category: 'Corporate', date: '2024-01-10', status: 'draft', views: 0, author: 'Nipa Pakdeechanuan' },
    { id: 3, title: 'IP Protection Strategies', slug: 'ip-protection-strategies', category: 'IP', date: '2024-01-05', status: 'published', views: 1876, author: 'Worawut Krairit' },
];

const mockPracticeAreas = [
    { id: 1, name: 'Incorporation & Corporate Matters', slug: 'corporate', description: 'Corporate law and business formation', status: 'active', contacts: 3 },
    { id: 2, name: 'Immigration, Relocation & Work Permit', slug: 'immigration', description: 'Immigration and work permit services', status: 'active', contacts: 2 },
    { id: 3, name: 'Intellectual Property', slug: 'ip', description: 'IP protection and enforcement', status: 'active', contacts: 2 },
    { id: 4, name: 'Litigation, Mediation & ADR', slug: 'litigation', description: 'Dispute resolution services', status: 'active', contacts: 2 },
    { id: 5, name: 'Taxation', slug: 'taxation', description: 'Tax planning and compliance', status: 'active', contacts: 2 },
];

const mockCareers = [
    { id: 1, title: 'Senior Associate - Corporate Law', department: 'Corporate', type: 'Full-time', location: 'Bangkok', status: 'open', applicants: 12, posted: '2024-01-10' },
    { id: 2, title: 'Legal Intern', department: 'All Departments', type: 'Internship', location: 'Bangkok', status: 'open', applicants: 45, posted: '2024-01-05' },
    { id: 3, title: 'Tax Consultant', department: 'Taxation', type: 'Full-time', location: 'Bangkok', status: 'closed', applicants: 8, posted: '2023-12-20' },
];

const mockContacts = [
    { id: 1, name: 'John Smith', email: 'john@example.com', phone: '+66 81 234 5678', subject: 'Corporate Law Inquiry', message: 'I need help with company registration...', date: '2024-01-15', status: 'new' },
    { id: 2, name: 'Sarah Johnson', email: 'sarah@example.com', phone: '+66 82 345 6789', subject: 'Work Permit Question', message: 'How long does it take to get a work permit?', date: '2024-01-14', status: 'replied' },
    { id: 3, name: 'Michael Chen', email: 'michael@example.com', phone: '+66 83 456 7890', subject: 'Tax Consultation', message: 'Need advice on tax planning...', date: '2024-01-13', status: 'in-progress' },
];

const mockAdminUsers = [
    { id: 1, name: 'Admin User', email: 'admin@dejudom.com', role: 'Super Admin', status: 'active', lastLogin: '2024-01-15 10:30', permissions: 'All' },
    { id: 2, name: 'Content Manager', email: 'content@dejudom.com', role: 'Editor', status: 'active', lastLogin: '2024-01-15 09:15', permissions: 'Content Only' },
    { id: 3, name: 'HR Manager', email: 'hr@dejudom.com', role: 'HR Admin', status: 'active', lastLogin: '2024-01-14 16:45', permissions: 'Team & Careers' },
    { id: 4, name: 'Guest User', email: 'guest@dejudom.com', role: 'Viewer', status: 'inactive', lastLogin: '2024-01-10 14:20', permissions: 'Read Only' },
];

type TabType = 'team' | 'books' | 'insights' | 'practice-areas' | 'careers' | 'contacts' | 'admin-users';
type Language = 'th' | 'en';

// Translation object
const translations = {
    en: {
        // Header
        companyName: 'Dej-Udom & Associates',
        adminDashboard: 'Admin Dashboard',
        myAccount: 'My Account',
        settings: 'Settings',
        logout: 'Logout',

        // Navigation
        teamMembers: 'Team Members',
        booksArticles: 'Books & Articles',
        insights: 'Insights',
        practiceAreas: 'Practice Areas',
        careers: 'Careers',
        contactMessages: 'Contact Messages',
        adminUsers: 'Admin Users',

        // Page Headers
        manageContent: 'Manage your content and team members',

        // Stats Cards
        totalTeam: 'Total Team',
        thisMonth: 'this month',
        booksPublished: 'Books Published',
        totalDownloads: 'total downloads',
        totalViews: 'total views',
        allActive: 'All active',

        // Toolbar
        search: 'Search...',
        filter: 'Filter',
        export: 'Export',
        addNew: 'Add New',

        // Table Headers
        member: 'Member',
        position: 'Position',
        department: 'Department',
        contact: 'Contact',
        status: 'Status',
        actions: 'Actions',
        title: 'Title',
        author: 'Author',
        year: 'Year',
        category: 'Category',
        downloads: 'Downloads',
        date: 'Date',
        views: 'Views',
        slug: 'Slug',
        description: 'Description',
        contacts: 'Contacts',
        jobTitle: 'Job Title',
        type: 'Type',
        location: 'Location',
        applicants: 'Applicants',
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        subject: 'Subject',
        message: 'Message',
        role: 'Role',
        permissions: 'Permissions',
        lastLogin: 'Last Login',

        // Actions
        viewDetails: 'View Details',
        edit: 'Edit',
        delete: 'Delete',
        viewApplicants: 'View Applicants',
        reply: 'Reply',
        viewMessage: 'View Message',
        changePassword: 'Change Password',

        // Dialog
        addNewTeamMember: 'Add New Team Member',
        addNewBook: 'Add New Book',
        addNewInsight: 'Add New Insight',
        addNewPracticeArea: 'Add New Practice Area',
        addNewJobPosition: 'Add New Job Position',
        addNewAdminUser: 'Add New Admin User',
        fillDetails: 'Fill in the details below to add a new item.',
        cancel: 'Cancel',
        save: 'Save',

        // Form Labels
        fullName: 'Full Name',
        enterFullName: 'Enter full name',
        seniorPartner: 'e.g. Senior Partner',
        selectDepartment: 'Select department',
        executive: 'Executive',
        corporate: 'Corporate',
        intellectualProperty: 'Intellectual Property',
        taxation: 'Taxation',
        immigration: 'Immigration',
        litigation: 'Litigation',
        emailPlaceholder: 'email@dejudom.com',
        phonePlaceholder: '+66 2 233 0055',
        profileImage: 'Profile Image',
        uploadImage: 'Click to upload or drag and drop',
        imageFormat: 'PNG, JPG up to 5MB',
        bookTitle: 'Book Title',
        enterBookTitle: 'Enter book title',
        authorName: 'Author name',
        selectCategory: 'Select category',
        publicationYear: 'Publication Year',
        bookCover: 'Book Cover',
        uploadCover: 'Click to upload cover image',
        coverFormat: 'PNG, JPG up to 10MB',
        articleTitle: 'Article Title',
        enterArticleTitle: 'Enter article title',
        urlSlug: 'URL Slug',
        articleSlug: 'article-url-slug',
        selectAuthor: 'Select author',
        practiceAreaName: 'Practice Area Name',
        corporateLaw: 'e.g. Corporate Law',
        corporateLawSlug: 'corporate-law',
        briefDescription: 'Brief description',
        employmentType: 'Employment Type',
        selectType: 'Select type',
        fullTime: 'Full-time',
        partTime: 'Part-time',
        internship: 'Internship',
        contract: 'Contract',
        bangkok: 'Bangkok',
        selectRole: 'Select role',
        superAdmin: 'Super Admin',
        editor: 'Editor',
        hrAdmin: 'HR Admin',
        viewer: 'Viewer',
        selectPermissions: 'Select permissions',
        allAccess: 'All Access',
        contentOnly: 'Content Only',
        teamCareers: 'Team & Careers',
        readOnly: 'Read Only',
        password: 'Password',
        enterPassword: 'Enter password',

        // Status
        active: 'active',
        inactive: 'inactive',
        published: 'published',
        draft: 'draft',
        open: 'open',
        closed: 'closed',
        new: 'new',
        replied: 'replied',
        inProgress: 'in-progress',
    },
    th: {
        // Header
        companyName: 'เดชอุดม แอนด์ แอสโซซิเอทส์',
        adminDashboard: 'แดชบอร์ดผู้ดูแลระบบ',
        myAccount: 'บัญชีของฉัน',
        settings: 'ตั้งค่า',
        logout: 'ออกจากระบบ',

        // Navigation
        teamMembers: 'สมาชิกทีม',
        booksArticles: 'หนังสือและบทความ',
        insights: 'บทความวิชาการ',
        practiceAreas: 'สาขาบริการ',
        careers: 'ร่วมงานกับเรา',
        contactMessages: 'ข้อความติดต่อ',
        adminUsers: 'ผู้ดูแลระบบ',

        // Page Headers
        manageContent: 'จัดการเนื้อหาและสมาชิกทีมของคุณ',

        // Stats Cards
        totalTeam: 'ทีมทั้งหมด',
        thisMonth: 'เดือนนี้',
        booksPublished: 'หนังสือที่เผยแพร่',
        totalDownloads: 'ดาวน์โหลดทั้งหมด',
        totalViews: 'เข้าชมทั้งหมด',
        allActive: 'ใช้งานทั้งหมด',

        // Toolbar
        search: 'ค้นหา...',
        filter: 'กรอง',
        export: 'ส่งออก',
        addNew: 'เพิ่มใหม่',

        // Table Headers
        member: 'สมาชิก',
        position: 'ตำแหน่ง',
        department: 'แผนก',
        contact: 'ติดต่อ',
        status: 'สถานะ',
        actions: 'การดำเนินการ',
        title: 'ชื่อเรื่อง',
        author: 'ผู้แต่ง',
        year: 'ปี',
        category: 'หมวดหมู่',
        downloads: 'ดาวน์โหลด',
        date: 'วันที่',
        views: 'ผู้เข้าชม',
        slug: 'URL',
        description: 'คำอธิบาย',
        contacts: 'ผู้ติดต่อ',
        jobTitle: 'ตำแหน่งงาน',
        type: 'ประเภท',
        location: 'สถานที่',
        applicants: 'ผู้สมัคร',
        name: 'ชื่อ',
        email: 'อีเมล',
        phone: 'โทรศัพท์',
        subject: 'หัวข้อ',
        message: 'ข้อความ',
        role: 'บทบาท',
        permissions: 'สิทธิ์',
        lastLogin: 'เข้าสู่ระบบล่าสุด',

        // Actions
        viewDetails: 'ดูรายละเอียด',
        edit: 'แก้ไข',
        delete: 'ลบ',
        viewApplicants: 'ดูผู้สมัคร',
        reply: 'ตอบกลับ',
        viewMessage: 'ดูข้อความ',
        changePassword: 'เปลี่ยนรหัสผ่าน',

        // Dialog
        addNewTeamMember: 'เพิ่มสมาชิกทีมใหม่',
        addNewBook: 'เพิ่มหนังสือใหม่',
        addNewInsight: 'เพิ่มบทความใหม่',
        addNewPracticeArea: 'เพิ่มสาขาบริการใหม่',
        addNewJobPosition: 'เพิ่มตำแหน่งงานใหม่',
        addNewAdminUser: 'เพิ่มผู้ดูแลระบบใหม่',
        fillDetails: 'กรอกรายละเอียดด้านล่างเพื่อเพิ่มรายการใหม่',
        cancel: 'ยกเลิก',
        save: 'บันทึก',

        // Form Labels
        fullName: 'ชื่อ-นามสกุล',
        enterFullName: 'กรอกชื่อ-นามสกุล',
        seniorPartner: 'เช่น หุ้นส่วนอาวุโส',
        selectDepartment: 'เลือกแผนก',
        executive: 'ผู้บริหาร',
        corporate: 'กฎหมายธุรกิจ',
        intellectualProperty: 'ทรัพย์สินทางปัญญา',
        taxation: 'ภาษีอากร',
        immigration: 'คนเข้าเมือง',
        litigation: 'คดีความ',
        emailPlaceholder: 'email@dejudom.com',
        phonePlaceholder: '+66 2 233 0055',
        profileImage: 'รูปโปรไฟล์',
        uploadImage: 'คลิกเพื่ออัปโหลดหรือลากวาง',
        imageFormat: 'PNG, JPG สูงสุด 5MB',
        bookTitle: 'ชื่อหนังสือ',
        enterBookTitle: 'กรอกชื่อหนังสือ',
        authorName: 'ชื่อผู้แต่ง',
        selectCategory: 'เลือกหมวดหมู่',
        publicationYear: 'ปีที่เผยแพร่',
        bookCover: 'ปกหนังสือ',
        uploadCover: 'คลิกเพื่ออัปโหลดรูปปก',
        coverFormat: 'PNG, JPG สูงสุด 10MB',
        articleTitle: 'ชื่อบทความ',
        enterArticleTitle: 'กรอกชื่อบทความ',
        urlSlug: 'URL Slug',
        articleSlug: 'url-slug-บทความ',
        selectAuthor: 'เลือกผู้เขียน',
        practiceAreaName: 'ชื่อสาขาบริการ',
        corporateLaw: 'เช่น กฎหมายธุรกิจ',
        corporateLawSlug: 'corporate-law',
        briefDescription: 'คำอธิบายโดยย่อ',
        employmentType: 'ประเภทการจ้างงาน',
        selectType: 'เลือกประเภท',
        fullTime: 'เต็มเวลา',
        partTime: 'พาร์ทไทม์',
        internship: 'ฝึกงาน',
        contract: 'สัญญาจ้าง',
        bangkok: 'กรุงเทพฯ',
        selectRole: 'เลือกบทบาท',
        superAdmin: 'ผู้ดูแลระบบสูงสุด',
        editor: 'บรรณาธิการ',
        hrAdmin: 'ผู้ดูแล HR',
        viewer: 'ผู้ดู',
        selectPermissions: 'เลือกสิทธิ์',
        allAccess: 'เข้าถึงทั้งหมด',
        contentOnly: 'เนื้อหาเท่านั้น',
        teamCareers: 'ทีมและงาน',
        readOnly: 'อ่านอย่างเดียว',
        password: 'รหัสผ่าน',
        enterPassword: 'กรอกรหัสผ่าน',

        // Status
        active: 'ใช้งาน',
        inactive: 'ไม่ใช้งาน',
        published: 'เผยแพร่แล้ว',
        draft: 'ฉบับร่าง',
        open: 'เปิดรับ',
        closed: 'ปิดรับ',
        new: 'ใหม่',
        replied: 'ตอบกลับแล้ว',
        inProgress: 'กำลังดำเนินการ',
    }
};

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState<TabType>('team');
    const [searchQuery, setSearchQuery] = useState('');
    const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
    const [language, setLanguage] = useState<Language>('en');

    const t = translations[language];

    // Form states
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        position: '',
        department: '',
        phone: '',
        title: '',
        author: '',
        category: '',
        year: '',
        slug: '',
        description: '',
        type: '',
        location: '',
        subject: '',
        message: '',
    });

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
        setIsAddDialogOpen(false);
        // Reset form
        setFormData({
            name: '', email: '', position: '', department: '', phone: '',
            title: '', author: '', category: '', year: '', slug: '',
            description: '', type: '', location: '', subject: '', message: '',
        });
    };

    const renderAddForm = () => {
        switch (activeTab) {
            case 'team':
                return (
                    <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input id="name" value={formData.name} onChange={(e) => handleInputChange('name', e.target.value)} placeholder="Enter full name" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="position">Position</Label>
                            <Input id="position" value={formData.position} onChange={(e) => handleInputChange('position', e.target.value)} placeholder="e.g. Senior Partner" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="department">Department</Label>
                            <Select value={formData.department} onValueChange={(value) => handleInputChange('department', value)}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select department" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Executive">Executive</SelectItem>
                                    <SelectItem value="Corporate">Corporate</SelectItem>
                                    <SelectItem value="IP">Intellectual Property</SelectItem>
                                    <SelectItem value="Taxation">Taxation</SelectItem>
                                    <SelectItem value="Immigration">Immigration</SelectItem>
                                    <SelectItem value="Litigation">Litigation</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" value={formData.email} onChange={(e) => handleInputChange('email', e.target.value)} placeholder="email@dejudom.com" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="phone">Phone</Label>
                            <Input id="phone" value={formData.phone} onChange={(e) => handleInputChange('phone', e.target.value)} placeholder="+66 2 233 0055" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="image">Profile Image</Label>
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors cursor-pointer">
                                <ImageIcon className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                                <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                                <p className="text-xs text-gray-500 mt-1">PNG, JPG up to 5MB</p>
                            </div>
                        </div>
                    </div>
                );

            case 'books':
                return (
                    <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                            <Label htmlFor="title">Book Title</Label>
                            <Input id="title" value={formData.title} onChange={(e) => handleInputChange('title', e.target.value)} placeholder="Enter book title" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="author">Author</Label>
                            <Input id="author" value={formData.author} onChange={(e) => handleInputChange('author', e.target.value)} placeholder="Author name" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="category">Category</Label>
                            <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select category" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Taxation">Taxation</SelectItem>
                                    <SelectItem value="Corporate">Corporate</SelectItem>
                                    <SelectItem value="IP">Intellectual Property</SelectItem>
                                    <SelectItem value="Immigration">Immigration</SelectItem>
                                    <SelectItem value="Litigation">Litigation</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="year">Publication Year</Label>
                            <Input id="year" type="number" value={formData.year} onChange={(e) => handleInputChange('year', e.target.value)} placeholder="2024" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="cover">Book Cover</Label>
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors cursor-pointer">
                                <Upload className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                                <p className="text-sm text-gray-600">Click to upload cover image</p>
                                <p className="text-xs text-gray-500 mt-1">PNG, JPG up to 10MB</p>
                            </div>
                        </div>
                    </div>
                );


            case 'insights':
                return (
                    <div className="grid gap-6 py-4 max-h-[70vh] overflow-y-auto">
                        {/* Basic Information Section */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 pb-2 border-b">
                                <FileText className="h-5 w-5 text-[#0a2608]" />
                                <h3 className="font-semibold text-gray-900">Basic Information</h3>
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="title" className="text-sm font-medium">Article Title *</Label>
                                <Input
                                    id="title"
                                    value={formData.title}
                                    onChange={(e) => handleInputChange('title', e.target.value)}
                                    placeholder="e.g. New Tax Regulations 2024: What Businesses Need to Know"
                                    className="text-base"
                                />
                                <p className="text-xs text-gray-500">This will be the main heading of your article</p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="slug" className="text-sm font-medium">URL Slug *</Label>
                                    <Input
                                        id="slug"
                                        value={formData.slug}
                                        onChange={(e) => handleInputChange('slug', e.target.value)}
                                        placeholder="new-tax-regulations-2024"
                                    />
                                    <p className="text-xs text-gray-500">URL-friendly version</p>
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="category" className="text-sm font-medium">Category *</Label>
                                    <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Taxation">Taxation</SelectItem>
                                            <SelectItem value="Corporate">Corporate</SelectItem>
                                            <SelectItem value="IP">Intellectual Property</SelectItem>
                                            <SelectItem value="Immigration">Immigration</SelectItem>
                                            <SelectItem value="Litigation">Litigation</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>

                        {/* Author & Publishing Section */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 pb-2 border-b">
                                <User className="h-5 w-5 text-[#0a2608]" />
                                <h3 className="font-semibold text-gray-900">Author & Publishing</h3>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="author" className="text-sm font-medium">Author *</Label>
                                    <Select value={formData.author} onValueChange={(value) => handleInputChange('author', value)}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select author" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {mockTeamMembers.map(member => (
                                                <SelectItem key={member.id} value={member.name}>{member.name}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="readTime" className="text-sm font-medium">Read Time (minutes)</Label>
                                    <Input
                                        id="readTime"
                                        type="number"
                                        value={formData.phone}
                                        onChange={(e) => handleInputChange('phone', e.target.value)}
                                        placeholder="8"
                                    />
                                    <p className="text-xs text-gray-500">Estimated reading time</p>
                                </div>
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="publishDate" className="text-sm font-medium">Publish Date</Label>
                                <Input
                                    id="publishDate"
                                    type="date"
                                    value={formData.year}
                                    onChange={(e) => handleInputChange('year', e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 pb-2 border-b">
                                <BookOpen className="h-5 w-5 text-[#0a2608]" />
                                <h3 className="font-semibold text-gray-900">Content</h3>
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="content" className="text-sm font-medium">Article Content *</Label>
                                <textarea
                                    id="content"
                                    value={formData.message}
                                    onChange={(e) => handleInputChange('message', e.target.value)}
                                    placeholder="Enter your article content in HTML format...

Example:
<p>Thailand's tax landscape is undergoing significant changes...</p>
<h2>Key Changes</h2>
<p>The Revenue Department has introduced...</p>"
                                    className="min-h-[200px] w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0a2608] focus:border-transparent font-mono"
                                    rows={10}
                                />
                                <p className="text-xs text-gray-500">Use HTML tags for formatting (h2, h3, p, ul, ol, li, strong)</p>
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="tags" className="text-sm font-medium">Tags</Label>
                                <Input
                                    id="tags"
                                    value={formData.description}
                                    onChange={(e) => handleInputChange('description', e.target.value)}
                                    placeholder="Tax Law, Corporate Tax, Compliance, 2024 Regulations"
                                />
                                <p className="text-xs text-gray-500">Separate tags with commas</p>
                            </div>
                        </div>

                        {/* Media Section */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 pb-2 border-b">
                                <ImageIcon className="h-5 w-5 text-[#0a2608]" />
                                <h3 className="font-semibold text-gray-900">Cover Image</h3>
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="coverImage" className="text-sm font-medium">Cover Image *</Label>
                                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#0a2608] transition-colors cursor-pointer bg-gray-50">
                                    <ImageIcon className="h-12 w-12 mx-auto mb-3 text-gray-400" />
                                    <p className="text-sm font-medium text-gray-700 mb-1">Click to upload cover image</p>
                                    <p className="text-xs text-gray-500">Recommended: 1200x630px (16:9 ratio)</p>
                                    <p className="text-xs text-gray-500 mt-1">PNG, JPG up to 5MB</p>
                                </div>
                            </div>
                        </div>

                        {/* SEO & Metadata Section */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 pb-2 border-b">
                                <Tag className="h-5 w-5 text-[#0a2608]" />
                                <h3 className="font-semibold text-gray-900">SEO & Metadata</h3>
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="metaDescription" className="text-sm font-medium">Meta Description</Label>
                                <textarea
                                    id="metaDescription"
                                    value={formData.subject}
                                    onChange={(e) => handleInputChange('subject', e.target.value)}
                                    placeholder="Brief summary for search engines (150-160 characters)"
                                    className="min-h-[80px] w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0a2608] focus:border-transparent"
                                    rows={3}
                                    maxLength={160}
                                />
                                <p className="text-xs text-gray-500">Optimal length: 150-160 characters</p>
                            </div>
                        </div>

                        {/* Status Section */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 pb-2 border-b">
                                <Settings className="h-5 w-5 text-[#0a2608]" />
                                <h3 className="font-semibold text-gray-900">Publishing Status</h3>
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="status" className="text-sm font-medium">Status</Label>
                                <Select value={formData.type} onValueChange={(value) => handleInputChange('type', value)}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select status" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="draft">
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                                Draft
                                            </div>
                                        </SelectItem>
                                        <SelectItem value="published">
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                                Published
                                            </div>
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>
                );

            case 'practice-areas':
                return (
                    <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                            <Label htmlFor="name">Practice Area Name</Label>
                            <Input id="name" value={formData.name} onChange={(e) => handleInputChange('name', e.target.value)} placeholder="e.g. Corporate Law" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="slug">URL Slug</Label>
                            <Input id="slug" value={formData.slug} onChange={(e) => handleInputChange('slug', e.target.value)} placeholder="corporate-law" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="description">Description</Label>
                            <Input id="description" value={formData.description} onChange={(e) => handleInputChange('description', e.target.value)} placeholder="Brief description" />
                        </div>
                    </div>
                );

            case 'careers':
                return (
                    <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                            <Label htmlFor="title">Job Title</Label>
                            <Input id="title" value={formData.title} onChange={(e) => handleInputChange('title', e.target.value)} placeholder="e.g. Senior Associate" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="department">Department</Label>
                            <Select value={formData.department} onValueChange={(value) => handleInputChange('department', value)}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select department" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Corporate">Corporate</SelectItem>
                                    <SelectItem value="IP">Intellectual Property</SelectItem>
                                    <SelectItem value="Taxation">Taxation</SelectItem>
                                    <SelectItem value="All">All Departments</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="type">Employment Type</Label>
                            <Select value={formData.type} onValueChange={(value) => handleInputChange('type', value)}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Full-time">Full-time</SelectItem>
                                    <SelectItem value="Part-time">Part-time</SelectItem>
                                    <SelectItem value="Internship">Internship</SelectItem>
                                    <SelectItem value="Contract">Contract</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="location">Location</Label>
                            <Input id="location" value={formData.location} onChange={(e) => handleInputChange('location', e.target.value)} placeholder="Bangkok" />
                        </div>
                    </div>
                );

            case 'admin-users':
                return (
                    <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input id="name" value={formData.name} onChange={(e) => handleInputChange('name', e.target.value)} placeholder="Enter full name" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" value={formData.email} onChange={(e) => handleInputChange('email', e.target.value)} placeholder="admin@dejudom.com" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="role">Role</Label>
                            <Select value={formData.department} onValueChange={(value) => handleInputChange('department', value)}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select role" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Super Admin">Super Admin</SelectItem>
                                    <SelectItem value="Editor">Editor</SelectItem>
                                    <SelectItem value="HR Admin">HR Admin</SelectItem>
                                    <SelectItem value="Viewer">Viewer</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="permissions">Permissions</Label>
                            <Select value={formData.type} onValueChange={(value) => handleInputChange('type', value)}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select permissions" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="All">All Access</SelectItem>
                                    <SelectItem value="Content">Content Only</SelectItem>
                                    <SelectItem value="Team">Team & Careers</SelectItem>
                                    <SelectItem value="Read">Read Only</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" value={formData.message} onChange={(e) => handleInputChange('message', e.target.value)} placeholder="Enter password" />
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50">
            {/* Top Header Bar */}
            <div className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-50 shadow-sm">
                <div className="h-full px-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-[#0a2608] to-[#0d3209] rounded-lg flex items-center justify-center">
                                <span className="text-secondary font-bold text-lg">D</span>
                            </div>
                            <div>
                                <h1 className="text-lg font-bold text-gray-900">{t.companyName}</h1>
                                <p className="text-xs text-gray-500">{t.adminDashboard}</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="sm" className="relative">
                            <Bell className="h-5 w-5" />
                            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                        </Button>

                        {/* Language Switcher */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm" className="flex items-center gap-2">
                                    <Globe className="h-5 w-5" />
                                    <span className="text-sm font-medium">{language === 'th' ? 'ไทย' : 'EN'}</span>
                                    <ChevronDown className="h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-32">
                                <DropdownMenuItem onClick={() => setLanguage('en')}>
                                    <span className={language === 'en' ? 'font-bold' : ''}>🇬🇧 English</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setLanguage('th')}>
                                    <span className={language === 'th' ? 'font-bold' : ''}>🇹🇭 ไทย</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="flex items-center gap-2">
                                    <Avatar className="h-8 w-8">
                                        <AvatarImage src="/team-member-1.png" />
                                        <AvatarFallback>AD</AvatarFallback>
                                    </Avatar>
                                    <span className="text-sm font-medium">Admin</span>
                                    <ChevronDown className="h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-56">
                                <DropdownMenuLabel>{t.myAccount}</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <Settings className="h-4 w-4 mr-2" />
                                    {t.settings}
                                </DropdownMenuItem>
                                <DropdownMenuItem className="text-red-600">
                                    <LogOut className="h-4 w-4 mr-2" />
                                    {t.logout}
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>


            {/* Sidebar */}
            <div className="fixed top-16 left-0 bottom-0 w-72 bg-gradient-to-br from-emerald-600 via-green-600 to-teal-700 shadow-2xl overflow-y-auto">
                {/* Sidebar Header */}
                <div className="p-6 border-b border-white/10">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center shadow-lg">
                            <span className="text-[#0a2608] font-bold text-lg">D</span>
                        </div>
                        <div>
                            <h2 className="text-white font-bold text-sm">Admin Panel</h2>
                            <p className="text-secondary text-xs">Management System</p>
                        </div>
                    </div>
                </div>

                <nav className="p-4 space-y-6">
                    {/* Content Management Section */}
                    <div>
                        <div className="px-3 mb-3">
                            <span className="text-xs font-semibold text-secondary uppercase tracking-wider">Content</span>
                        </div>
                        <div className="space-y-1">
                            <button
                                onClick={() => setActiveTab('team')}
                                className={`w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl text-left transition-all group ${activeTab === 'team'
                                    ? 'bg-secondary text-[#0a2608] shadow-lg shadow-secondary/20'
                                    : 'hover:bg-white/10 text-white/80 hover:text-white'
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <Users className={`h-5 w-5 ${activeTab === 'team' ? 'text-[#0a2608]' : 'text-secondary'}`} />
                                    <span className="font-medium text-sm">{t.teamMembers}</span>
                                </div>
                                <span className={`text-xs px-2 py-0.5 rounded-full ${activeTab === 'team'
                                    ? 'bg-[#0a2608]/10 text-[#0a2608]'
                                    : 'bg-white/10 text-white/60'
                                    }`}>
                                    {mockTeamMembers.length}
                                </span>
                            </button>

                            <button
                                onClick={() => setActiveTab('books')}
                                className={`w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl text-left transition-all group ${activeTab === 'books'
                                    ? 'bg-secondary text-[#0a2608] shadow-lg shadow-secondary/20'
                                    : 'hover:bg-white/10 text-white/80 hover:text-white'
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <BookOpen className={`h-5 w-5 ${activeTab === 'books' ? 'text-[#0a2608]' : 'text-secondary'}`} />
                                    <span className="font-medium text-sm">{t.booksArticles}</span>
                                </div>
                                <span className={`text-xs px-2 py-0.5 rounded-full ${activeTab === 'books'
                                    ? 'bg-[#0a2608]/10 text-[#0a2608]'
                                    : 'bg-white/10 text-white/60'
                                    }`}>
                                    {mockBooks.length}
                                </span>
                            </button>

                            <button
                                onClick={() => setActiveTab('insights')}
                                className={`w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl text-left transition-all group ${activeTab === 'insights'
                                    ? 'bg-secondary text-[#0a2608] shadow-lg shadow-secondary/20'
                                    : 'hover:bg-white/10 text-white/80 hover:text-white'
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <FileText className={`h-5 w-5 ${activeTab === 'insights' ? 'text-[#0a2608]' : 'text-secondary'}`} />
                                    <span className="font-medium text-sm">{t.insights}</span>
                                </div>
                                <span className={`text-xs px-2 py-0.5 rounded-full ${activeTab === 'insights'
                                    ? 'bg-[#0a2608]/10 text-[#0a2608]'
                                    : 'bg-white/10 text-white/60'
                                    }`}>
                                    {mockInsights.length}
                                </span>
                            </button>

                            <button
                                onClick={() => setActiveTab('practice-areas')}
                                className={`w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl text-left transition-all group ${activeTab === 'practice-areas'
                                    ? 'bg-secondary text-[#0a2608] shadow-lg shadow-secondary/20'
                                    : 'hover:bg-white/10 text-white/80 hover:text-white'
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <Briefcase className={`h-5 w-5 ${activeTab === 'practice-areas' ? 'text-[#0a2608]' : 'text-secondary'}`} />
                                    <span className="font-medium text-sm">{t.practiceAreas}</span>
                                </div>
                                <span className={`text-xs px-2 py-0.5 rounded-full ${activeTab === 'practice-areas'
                                    ? 'bg-[#0a2608]/10 text-[#0a2608]'
                                    : 'bg-white/10 text-white/60'
                                    }`}>
                                    {mockPracticeAreas.length}
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Operations Section */}
                    <div>
                        <div className="px-3 mb-3">
                            <span className="text-xs font-semibold text-secondary uppercase tracking-wider">Operations</span>
                        </div>
                        <div className="space-y-1">
                            <button
                                onClick={() => setActiveTab('careers')}
                                className={`w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl text-left transition-all group ${activeTab === 'careers'
                                    ? 'bg-secondary text-[#0a2608] shadow-lg shadow-secondary/20'
                                    : 'hover:bg-white/10 text-white/80 hover:text-white'
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <GraduationCap className={`h-5 w-5 ${activeTab === 'careers' ? 'text-[#0a2608]' : 'text-secondary'}`} />
                                    <span className="font-medium text-sm">{t.careers}</span>
                                </div>
                                <span className={`text-xs px-2 py-0.5 rounded-full ${activeTab === 'careers'
                                    ? 'bg-[#0a2608]/10 text-[#0a2608]'
                                    : 'bg-white/10 text-white/60'
                                    }`}>
                                    {mockCareers.length}
                                </span>
                            </button>

                            <button
                                onClick={() => setActiveTab('contacts')}
                                className={`w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl text-left transition-all group relative ${activeTab === 'contacts'
                                    ? 'bg-secondary text-[#0a2608] shadow-lg shadow-secondary/20'
                                    : 'hover:bg-white/10 text-white/80 hover:text-white'
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <Mail className={`h-5 w-5 ${activeTab === 'contacts' ? 'text-[#0a2608]' : 'text-secondary'}`} />
                                    <span className="font-medium text-sm">{t.contactMessages}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    {mockContacts.filter(c => c.status === 'new').length > 0 && (
                                        <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                                    )}
                                    <span className={`text-xs px-2 py-0.5 rounded-full ${activeTab === 'contacts'
                                        ? 'bg-[#0a2608]/10 text-[#0a2608]'
                                        : 'bg-white/10 text-white/60'
                                        }`}>
                                        {mockContacts.length}
                                    </span>
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* System Section */}
                    <div>
                        <div className="px-3 mb-3">
                            <span className="text-xs font-semibold text-secondary uppercase tracking-wider">System</span>
                        </div>
                        <div className="space-y-1">
                            <button
                                onClick={() => setActiveTab('admin-users')}
                                className={`w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl text-left transition-all group ${activeTab === 'admin-users'
                                    ? 'bg-secondary text-[#0a2608] shadow-lg shadow-secondary/20'
                                    : 'hover:bg-white/10 text-white/80 hover:text-white'
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <Settings className={`h-5 w-5 ${activeTab === 'admin-users' ? 'text-[#0a2608]' : 'text-secondary'}`} />
                                    <span className="font-medium text-sm">{t.adminUsers}</span>
                                </div>
                                <span className={`text-xs px-2 py-0.5 rounded-full ${activeTab === 'admin-users'
                                    ? 'bg-[#0a2608]/10 text-[#0a2608]'
                                    : 'bg-white/10 text-white/60'
                                    }`}>
                                    {mockAdminUsers.length}
                                </span>
                            </button>
                        </div>
                    </div>
                </nav>

                {/* Sidebar Footer */}
                <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10 bg-[#0d3209]/50 backdrop-blur-sm">
                    <div className="text-center">
                        <p className="text-xs text-secondary/80">Version 1.0.0</p>
                        <p className="text-xs text-white/40 mt-1">© 2024 Dej-Udom</p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="ml-72 mt-16 p-8">
                {/* Header */}
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        {activeTab === 'team' && t.teamMembers}
                        {activeTab === 'books' && t.booksArticles}
                        {activeTab === 'insights' && t.insights}
                        {activeTab === 'practice-areas' && t.practiceAreas}
                        {activeTab === 'careers' && t.careers}
                        {activeTab === 'contacts' && t.contactMessages}
                        {activeTab === 'admin-users' && t.adminUsers}
                    </h2>
                    <p className="text-gray-600">{t.manageContent}</p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium">{t.totalTeam}</CardTitle>
                            <Users className="h-4 w-4 opacity-80" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold">{mockTeamMembers.length}</div>
                            <p className="text-xs opacity-80 mt-1 flex items-center gap-1">
                                <TrendingUp className="h-3 w-3" />
                                +2 {t.thisMonth}
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-500 to-purple-600 text-white">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium">{t.booksPublished}</CardTitle>
                            <BookOpen className="h-4 w-4 opacity-80" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold">{mockBooks.length}</div>
                            <p className="text-xs opacity-80 mt-1 flex items-center gap-1">
                                <Activity className="h-3 w-3" />
                                2.7k {t.totalDownloads}
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow-lg bg-gradient-to-br from-green-500 to-green-600 text-white">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium">{t.insights}</CardTitle>
                            <FileText className="h-4 w-4 opacity-80" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold">{mockInsights.length}</div>
                            <p className="text-xs opacity-80 mt-1 flex items-center gap-1">
                                <TrendingUp className="h-3 w-3" />
                                4.3k {t.totalViews}
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-500 to-orange-600 text-white">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium">{t.practiceAreas}</CardTitle>
                            <Briefcase className="h-4 w-4 opacity-80" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold">{mockPracticeAreas.length}</div>
                            <p className="text-xs opacity-80 mt-1">{t.allActive}</p>
                        </CardContent>
                    </Card>
                </div>

                {/* Toolbar */}
                <Card className="mb-6 border-0 shadow-md">
                    <CardContent className="p-4">
                        <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3 flex-1">
                                <div className="relative flex-1 max-w-md">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                    <Input
                                        type="text"
                                        placeholder={t.search}
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="pl-10 border-gray-200"
                                    />
                                </div>

                                <Button variant="outline" size="sm" className="gap-2">
                                    <Filter className="h-4 w-4" />
                                    {t.filter}
                                </Button>
                            </div>

                            <div className="flex items-center gap-2">
                                <Button variant="outline" size="sm" className="gap-2">
                                    <Download className="h-4 w-4" />
                                    {t.export}
                                </Button>

                                <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
                                    <DialogTrigger asChild>
                                        <Button className="bg-gradient-to-r from-[#0a2608] to-[#0d3209] hover:opacity-90 gap-2 shadow-md">
                                            <Plus className="h-4 w-4" />
                                            {t.addNew}
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
                                        <DialogHeader>
                                            <DialogTitle>
                                                {activeTab === 'team' && t.addNewTeamMember}
                                                {activeTab === 'books' && t.addNewBook}
                                                {activeTab === 'insights' && t.addNewInsight}
                                                {activeTab === 'practice-areas' && t.addNewPracticeArea}
                                                {activeTab === 'careers' && t.addNewJobPosition}
                                                {activeTab === 'admin-users' && t.addNewAdminUser}
                                            </DialogTitle>
                                            <DialogDescription>
                                                {t.fillDetails}
                                            </DialogDescription>
                                        </DialogHeader>
                                        {renderAddForm()}
                                        <DialogFooter>
                                            <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>{t.cancel}</Button>
                                            <Button onClick={handleSubmit} className="bg-gradient-to-r from-[#0a2608] to-[#0d3209]">{t.save}</Button>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Content Table */}
                <Card className="border-0 shadow-lg">
                    <CardContent className="p-0">
                        {activeTab === 'team' && (
                            <Table>
                                <TableHeader>
                                    <TableRow className="bg-gray-50">
                                        <TableHead className="font-semibold">Member</TableHead>
                                        <TableHead className="font-semibold">Position</TableHead>
                                        <TableHead className="font-semibold">Department</TableHead>
                                        <TableHead className="font-semibold">Contact</TableHead>
                                        <TableHead className="font-semibold">Status</TableHead>
                                        <TableHead className="text-right font-semibold">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {mockTeamMembers.map((member) => (
                                        <TableRow key={member.id} className="hover:bg-gray-50 transition-colors">
                                            <TableCell className="font-medium">
                                                <div className="flex items-center gap-3">
                                                    <Avatar className="h-10 w-10 border-2 border-gray-100">
                                                        <AvatarImage src={member.image} />
                                                        <AvatarFallback className="bg-gradient-to-br from-[#0a2608] to-[#0d3209] text-white">
                                                            {member.name.split(' ').map(n => n[0]).join('')}
                                                        </AvatarFallback>
                                                    </Avatar>
                                                    <span className="font-semibold text-gray-900">{member.name}</span>
                                                </div>
                                            </TableCell>
                                            <TableCell className="text-gray-600">{member.position}</TableCell>
                                            <TableCell>
                                                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                                                    {member.department}
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="text-gray-600">
                                                <div className="flex flex-col gap-1">
                                                    <div className="flex items-center gap-1 text-xs">
                                                        <Mail className="h-3 w-3" />
                                                        {member.email}
                                                    </div>
                                                    <div className="flex items-center gap-1 text-xs">
                                                        <Phone className="h-3 w-3" />
                                                        {member.phone}
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <Badge className="bg-green-100 text-green-700 border-0 hover:bg-green-100">
                                                    {member.status}
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger asChild>
                                                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                                            <MoreHorizontal className="h-4 w-4" />
                                                        </Button>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent align="end" className="w-48">
                                                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                        <DropdownMenuSeparator />
                                                        <DropdownMenuItem>
                                                            <Eye className="h-4 w-4 mr-2" />
                                                            View Details
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem>
                                                            <Edit className="h-4 w-4 mr-2" />
                                                            Edit
                                                        </DropdownMenuItem>
                                                        <DropdownMenuSeparator />
                                                        <DropdownMenuItem className="text-red-600">
                                                            <Trash2 className="h-4 w-4 mr-2" />
                                                            Delete
                                                        </DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        )}

                        {activeTab === 'books' && (
                            <Table>
                                <TableHeader>
                                    <TableRow className="bg-gray-50">
                                        <TableHead className="font-semibold">Title</TableHead>
                                        <TableHead className="font-semibold">Author</TableHead>
                                        <TableHead className="font-semibold">Year</TableHead>
                                        <TableHead className="font-semibold">Category</TableHead>
                                        <TableHead className="font-semibold">Downloads</TableHead>
                                        <TableHead className="font-semibold">Status</TableHead>
                                        <TableHead className="text-right font-semibold">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {mockBooks.map((book) => (
                                        <TableRow key={book.id} className="hover:bg-gray-50 transition-colors">
                                            <TableCell className="font-semibold text-gray-900">{book.title}</TableCell>
                                            <TableCell className="text-gray-600">{book.author}</TableCell>
                                            <TableCell className="text-gray-600">{book.year}</TableCell>
                                            <TableCell>
                                                <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                                                    {book.category}
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="text-gray-600">{book.downloads.toLocaleString()}</TableCell>
                                            <TableCell>
                                                <Badge className={book.status === 'published' ? 'bg-green-100 text-green-700 border-0' : 'bg-yellow-100 text-yellow-700 border-0'}>
                                                    {book.status}
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger asChild>
                                                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                                            <MoreHorizontal className="h-4 w-4" />
                                                        </Button>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent align="end" className="w-48">
                                                        <DropdownMenuItem>
                                                            <Eye className="h-4 w-4 mr-2" />
                                                            View Details
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem>
                                                            <Edit className="h-4 w-4 mr-2" />
                                                            Edit
                                                        </DropdownMenuItem>
                                                        <DropdownMenuSeparator />
                                                        <DropdownMenuItem className="text-red-600">
                                                            <Trash2 className="h-4 w-4 mr-2" />
                                                            Delete
                                                        </DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        )}

                        {activeTab === 'insights' && (
                            <Table>
                                <TableHeader>
                                    <TableRow className="bg-gray-50">
                                        <TableHead className="font-semibold">Title</TableHead>
                                        <TableHead className="font-semibold">Author</TableHead>
                                        <TableHead className="font-semibold">Category</TableHead>
                                        <TableHead className="font-semibold">Date</TableHead>
                                        <TableHead className="font-semibold">Views</TableHead>
                                        <TableHead className="font-semibold">Status</TableHead>
                                        <TableHead className="text-right font-semibold">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {mockInsights.map((insight) => (
                                        <TableRow key={insight.id} className="hover:bg-gray-50 transition-colors">
                                            <TableCell className="font-semibold text-gray-900">{insight.title}</TableCell>
                                            <TableCell className="text-gray-600">{insight.author}</TableCell>
                                            <TableCell>
                                                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                                                    {insight.category}
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="text-gray-600">{insight.date}</TableCell>
                                            <TableCell className="text-gray-600">{insight.views.toLocaleString()}</TableCell>
                                            <TableCell>
                                                <Badge
                                                    className={insight.status === 'published'
                                                        ? 'bg-green-100 text-green-700 border-0 hover:bg-green-100'
                                                        : 'bg-yellow-100 text-yellow-700 border-0 hover:bg-yellow-100'}
                                                >
                                                    {insight.status}
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger asChild>
                                                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                                            <MoreHorizontal className="h-4 w-4" />
                                                        </Button>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent align="end" className="w-48">
                                                        <DropdownMenuItem>
                                                            <Eye className="h-4 w-4 mr-2" />
                                                            View Details
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem>
                                                            <Edit className="h-4 w-4 mr-2" />
                                                            Edit
                                                        </DropdownMenuItem>
                                                        <DropdownMenuSeparator />
                                                        <DropdownMenuItem className="text-red-600">
                                                            <Trash2 className="h-4 w-4 mr-2" />
                                                            Delete
                                                        </DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        )}

                        {activeTab === 'practice-areas' && (
                            <Table>
                                <TableHeader>
                                    <TableRow className="bg-gray-50">
                                        <TableHead className="font-semibold">Practice Area</TableHead>
                                        <TableHead className="font-semibold">Slug</TableHead>
                                        <TableHead className="font-semibold">Description</TableHead>
                                        <TableHead className="font-semibold">Contacts</TableHead>
                                        <TableHead className="font-semibold">Status</TableHead>
                                        <TableHead className="text-right font-semibold">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {mockPracticeAreas.map((area) => (
                                        <TableRow key={area.id} className="hover:bg-gray-50 transition-colors">
                                            <TableCell className="font-semibold text-gray-900">{area.name}</TableCell>
                                            <TableCell className="text-gray-600 font-mono text-sm">{area.slug}</TableCell>
                                            <TableCell className="text-gray-600">{area.description}</TableCell>
                                            <TableCell className="text-gray-600">{area.contacts} members</TableCell>
                                            <TableCell>
                                                <Badge className="bg-green-100 text-green-700 border-0">
                                                    {area.status}
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger asChild>
                                                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                                            <MoreHorizontal className="h-4 w-4" />
                                                        </Button>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent align="end" className="w-48">
                                                        <DropdownMenuItem>
                                                            <Eye className="h-4 w-4 mr-2" />
                                                            View Page
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem>
                                                            <Edit className="h-4 w-4 mr-2" />
                                                            Edit
                                                        </DropdownMenuItem>
                                                        <DropdownMenuSeparator />
                                                        <DropdownMenuItem className="text-red-600">
                                                            <Trash2 className="h-4 w-4 mr-2" />
                                                            Delete
                                                        </DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        )}

                        {activeTab === 'careers' && (
                            <Table>
                                <TableHeader>
                                    <TableRow className="bg-gray-50">
                                        <TableHead className="font-semibold">Job Title</TableHead>
                                        <TableHead className="font-semibold">Department</TableHead>
                                        <TableHead className="font-semibold">Type</TableHead>
                                        <TableHead className="font-semibold">Location</TableHead>
                                        <TableHead className="font-semibold">Applicants</TableHead>
                                        <TableHead className="font-semibold">Status</TableHead>
                                        <TableHead className="text-right font-semibold">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {mockCareers.map((job) => (
                                        <TableRow key={job.id} className="hover:bg-gray-50 transition-colors">
                                            <TableCell className="font-semibold text-gray-900">{job.title}</TableCell>
                                            <TableCell className="text-gray-600">{job.department}</TableCell>
                                            <TableCell>
                                                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                                                    {job.type}
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="text-gray-600">{job.location}</TableCell>
                                            <TableCell className="text-gray-600">{job.applicants} applicants</TableCell>
                                            <TableCell>
                                                <Badge className={job.status === 'open' ? 'bg-green-100 text-green-700 border-0' : 'bg-gray-100 text-gray-700 border-0'}>
                                                    {job.status}
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger asChild>
                                                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                                            <MoreHorizontal className="h-4 w-4" />
                                                        </Button>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent align="end" className="w-48">
                                                        <DropdownMenuItem>
                                                            <Eye className="h-4 w-4 mr-2" />
                                                            View Applicants
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem>
                                                            <Edit className="h-4 w-4 mr-2" />
                                                            Edit
                                                        </DropdownMenuItem>
                                                        <DropdownMenuSeparator />
                                                        <DropdownMenuItem className="text-red-600">
                                                            <Trash2 className="h-4 w-4 mr-2" />
                                                            Delete
                                                        </DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        )}

                        {activeTab === 'contacts' && (
                            <Table>
                                <TableHeader>
                                    <TableRow className="bg-gray-50">
                                        <TableHead className="font-semibold">Name</TableHead>
                                        <TableHead className="font-semibold">Contact</TableHead>
                                        <TableHead className="font-semibold">Subject</TableHead>
                                        <TableHead className="font-semibold">Date</TableHead>
                                        <TableHead className="font-semibold">Status</TableHead>
                                        <TableHead className="text-right font-semibold">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {mockContacts.map((contact) => (
                                        <TableRow key={contact.id} className="hover:bg-gray-50 transition-colors">
                                            <TableCell className="font-semibold text-gray-900">{contact.name}</TableCell>
                                            <TableCell className="text-gray-600">
                                                <div className="flex flex-col gap-1">
                                                    <div className="flex items-center gap-1 text-xs">
                                                        <Mail className="h-3 w-3" />
                                                        {contact.email}
                                                    </div>
                                                    <div className="flex items-center gap-1 text-xs">
                                                        <Phone className="h-3 w-3" />
                                                        {contact.phone}
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell className="text-gray-600">{contact.subject}</TableCell>
                                            <TableCell className="text-gray-600">{contact.date}</TableCell>
                                            <TableCell>
                                                <Badge className={
                                                    contact.status === 'new' ? 'bg-blue-100 text-blue-700 border-0' :
                                                        contact.status === 'replied' ? 'bg-green-100 text-green-700 border-0' :
                                                            'bg-yellow-100 text-yellow-700 border-0'
                                                }>
                                                    {contact.status}
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger asChild>
                                                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                                            <MoreHorizontal className="h-4 w-4" />
                                                        </Button>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent align="end" className="w-48">
                                                        <DropdownMenuItem>
                                                            <Eye className="h-4 w-4 mr-2" />
                                                            View Message
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem>
                                                            <Mail className="h-4 w-4 mr-2" />
                                                            Reply
                                                        </DropdownMenuItem>
                                                        <DropdownMenuSeparator />
                                                        <DropdownMenuItem className="text-red-600">
                                                            <Trash2 className="h-4 w-4 mr-2" />
                                                            Delete
                                                        </DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        )}

                        {activeTab === 'admin-users' && (
                            <Table>
                                <TableHeader>
                                    <TableRow className="bg-gray-50">
                                        <TableHead className="font-semibold">Name</TableHead>
                                        <TableHead className="font-semibold">Email</TableHead>
                                        <TableHead className="font-semibold">Role</TableHead>
                                        <TableHead className="font-semibold">Permissions</TableHead>
                                        <TableHead className="font-semibold">Last Login</TableHead>
                                        <TableHead className="font-semibold">Status</TableHead>
                                        <TableHead className="text-right font-semibold">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {mockAdminUsers.map((admin) => (
                                        <TableRow key={admin.id} className="hover:bg-gray-50 transition-colors">
                                            <TableCell className="font-semibold text-gray-900">{admin.name}</TableCell>
                                            <TableCell className="text-gray-600">
                                                <div className="flex items-center gap-1 text-sm">
                                                    <Mail className="h-3 w-3" />
                                                    {admin.email}
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <Badge variant="outline" className={
                                                    admin.role === 'Super Admin' ? 'bg-red-50 text-red-700 border-red-200' :
                                                        admin.role === 'Editor' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                                                            admin.role === 'HR Admin' ? 'bg-purple-50 text-purple-700 border-purple-200' :
                                                                'bg-gray-50 text-gray-700 border-gray-200'
                                                }>
                                                    {admin.role}
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="text-gray-600 text-sm">{admin.permissions}</TableCell>
                                            <TableCell className="text-gray-600 text-sm">{admin.lastLogin}</TableCell>
                                            <TableCell>
                                                <Badge className={admin.status === 'active' ? 'bg-green-100 text-green-700 border-0' : 'bg-gray-100 text-gray-700 border-0'}>
                                                    {admin.status}
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger asChild>
                                                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                                            <MoreHorizontal className="h-4 w-4" />
                                                        </Button>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent align="end" className="w-48">
                                                        <DropdownMenuItem>
                                                            <Eye className="h-4 w-4 mr-2" />
                                                            View Details
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem>
                                                            <Edit className="h-4 w-4 mr-2" />
                                                            Edit
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem>
                                                            <Settings className="h-4 w-4 mr-2" />
                                                            Change Password
                                                        </DropdownMenuItem>
                                                        <DropdownMenuSeparator />
                                                        <DropdownMenuItem className="text-red-600">
                                                            <Trash2 className="h-4 w-4 mr-2" />
                                                            Delete
                                                        </DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
