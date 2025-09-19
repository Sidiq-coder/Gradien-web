import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Search, 
  Filter, 
  Plus, 
  MoreHorizontal, 
  Edit, 
  Trash2, 
  Mail, 
  Phone,
  Calendar,
  UserCheck,
  UserX
} from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Badge } from '../ui/badge';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '../ui/dropdown-menu';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '../ui/table';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '../ui/select';

export function MembersManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterRole, setFilterRole] = useState('all');

  const members = [
    {
      id: 1,
      name: 'Ahmad Rizki Pratama',
      email: 'ahmad.rizki@gmail.com',
      phone: '+62 812-3456-7890',
      role: 'admin',
      status: 'active',
      joinDate: '2023-01-15',
      lastActive: '2024-01-10',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      department: 'Teknik Informatika',
      semester: 6
    },
    {
      id: 2,
      name: 'Sari Indah Permata',
      email: 'sari.indah@gmail.com',
      phone: '+62 813-9876-5432',
      role: 'member',
      status: 'active',
      joinDate: '2023-02-20',
      lastActive: '2024-01-09',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      department: 'Sistem Informasi',
      semester: 4
    },
    {
      id: 3,
      name: 'Budi Santoso',
      email: 'budi.santoso@gmail.com',
      phone: '+62 814-5555-1234',
      role: 'member',
      status: 'inactive',
      joinDate: '2023-03-10',
      lastActive: '2023-12-15',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      department: 'Teknik Komputer',
      semester: 8
    },
    {
      id: 4,
      name: 'Maya Putri Sari',
      email: 'maya.putri@gmail.com',
      phone: '+62 815-7777-8888',
      role: 'member',
      status: 'active',
      joinDate: '2023-04-05',
      lastActive: '2024-01-08',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      department: 'Teknik Informatika',
      semester: 2
    },
    {
      id: 5,
      name: 'Dedi Kurniawan',
      email: 'dedi.kurniawan@gmail.com',
      phone: '+62 816-9999-0000',
      role: 'member',
      status: 'pending',
      joinDate: '2024-01-01',
      lastActive: '2024-01-05',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face',
      department: 'Sistem Informasi',
      semester: 1
    }
  ];

  const filteredMembers = members.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || member.status === filterStatus;
    const matchesRole = filterRole === 'all' || member.role === filterRole;
    
    return matchesSearch && matchesStatus && matchesRole;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Aktif</Badge>;
      case 'inactive':
        return <Badge variant="secondary">Tidak Aktif</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">Pending</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getRoleBadge = (role: string) => {
    return role === 'admin' 
      ? <Badge className="bg-[#0d7377] text-white hover:bg-[#0a5d61]">Admin</Badge>
      : <Badge variant="outline">Member</Badge>;
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Kelola Anggota</h1>
          <p className="text-gray-600 mt-2">
            Kelola data anggota komunitas Gradien Unila
          </p>
        </div>
        <Button className="bg-[#0d7377] hover:bg-[#0a5d61] text-white">
          <Plus className="w-4 h-4 mr-2" />
          Tambah Anggota
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Anggota</p>
                <p className="text-2xl font-bold text-gray-900">1,247</p>
              </div>
              <UserCheck className="w-8 h-8 text-[#0d7377]" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Anggota Aktif</p>
                <p className="text-2xl font-bold text-green-600">1,156</p>
              </div>
              <UserCheck className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Tidak Aktif</p>
                <p className="text-2xl font-bold text-red-600">76</p>
              </div>
              <UserX className="w-8 h-8 text-red-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pending</p>
                <p className="text-2xl font-bold text-yellow-600">15</p>
              </div>
              <Calendar className="w-8 h-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardHeader>
          <CardTitle>Daftar Anggota</CardTitle>
          <CardDescription>
            Kelola dan pantau aktivitas anggota komunitas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Cari nama atau email anggota..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-full sm:w-40">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Semua Status</SelectItem>
                <SelectItem value="active">Aktif</SelectItem>
                <SelectItem value="inactive">Tidak Aktif</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={filterRole} onValueChange={setFilterRole}>
              <SelectTrigger className="w-full sm:w-40">
                <SelectValue placeholder="Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Semua Role</SelectItem>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="member">Member</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Members Table */}
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Anggota</TableHead>
                  <TableHead>Kontak</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Bergabung</TableHead>
                  <TableHead>Terakhir Aktif</TableHead>
                  <TableHead className="text-right">Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredMembers.map((member) => (
                  <TableRow key={member.id}>
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={member.avatar} />
                          <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium text-gray-900">{member.name}</div>
                          <div className="text-sm text-gray-500">{member.department} • Semester {member.semester}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="flex items-center text-sm text-gray-600">
                          <Mail className="w-4 h-4 mr-2" />
                          {member.email}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Phone className="w-4 h-4 mr-2" />
                          {member.phone}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      {getRoleBadge(member.role)}
                    </TableCell>
                    <TableCell>
                      {getStatusBadge(member.status)}
                    </TableCell>
                    <TableCell className="text-sm text-gray-600">
                      {new Date(member.joinDate).toLocaleDateString('id-ID')}
                    </TableCell>
                    <TableCell className="text-sm text-gray-600">
                      {new Date(member.lastActive).toLocaleDateString('id-ID')}
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Mail className="mr-2 h-4 w-4" />
                            Kirim Email
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Hapus
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          {filteredMembers.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">Tidak ada anggota yang ditemukan</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}