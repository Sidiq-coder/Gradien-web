import { motion } from 'motion/react';
import { Users, FileText, ShoppingBag, TrendingUp, Calendar, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Badge } from '../ui/badge';

export function Overview() {
  const stats = [
    {
      title: 'Total Anggota',
      value: '1,247',
      change: '+12%',
      changeType: 'positive' as const,
      icon: Users,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Artikel Diterbitkan',
      value: '156',
      change: '+8%',
      changeType: 'positive' as const,
      icon: FileText,
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Produk Terjual',
      value: '892',
      change: '+23%',
      changeType: 'positive' as const,
      icon: ShoppingBag,
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Pendapatan',
      value: 'Rp 45.2M',
      change: '+15%',
      changeType: 'positive' as const,
      icon: TrendingUp,
      color: 'from-[#0d7377] to-[#14a085]'
    }
  ];

  const recentActivities = [
    {
      id: 1,
      user: 'Ahmad Rizki',
      action: 'menerbitkan artikel baru',
      target: 'Panduan React.js untuk Pemula',
      time: '2 jam yang lalu',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    },
    {
      id: 2,
      user: 'Sari Indah',
      action: 'menambahkan produk baru',
      target: 'Hoodie Gradien Limited Edition',
      time: '4 jam yang lalu',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
    },
    {
      id: 3,
      user: 'Budi Santoso',
      action: 'bergabung sebagai anggota baru',
      target: '',
      time: '6 jam yang lalu',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    },
    {
      id: 4,
      user: 'Maya Putri',
      action: 'memperbarui profil',
      target: '',
      time: '1 hari yang lalu',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Workshop React Advanced',
      date: '15 Jan 2024',
      time: '19:00 WIB',
      participants: 45,
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'Webinar Career Development',
      date: '18 Jan 2024',
      time: '20:00 WIB',
      participants: 120,
      status: 'upcoming'
    },
    {
      id: 3,
      title: 'Coding Competition',
      date: '22 Jan 2024',
      time: '09:00 WIB',
      participants: 78,
      status: 'registration'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-600 mt-2">
          Selamat datang kembali! Berikut adalah ringkasan aktivitas komunitas Gradien Unila.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
                    <div className="flex items-center mt-2">
                      <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                      <span className="text-sm text-green-600">{stat.change}</span>
                      <span className="text-sm text-gray-500 ml-1">dari bulan lalu</span>
                    </div>
                  </div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Aktivitas Terbaru</CardTitle>
              <CardDescription>
                Aktivitas terkini dari anggota komunitas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3">
                    <Avatar className="h-9 w-9">
                      <AvatarImage src={activity.avatar} />
                      <AvatarFallback>{activity.user.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900">
                        <span className="font-medium">{activity.user}</span>{' '}
                        {activity.action}
                        {activity.target && (
                          <span className="font-medium text-[#0d7377]"> {activity.target}</span>
                        )}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Upcoming Events */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Event Mendatang</CardTitle>
              <CardDescription>
                Jadwal event dan kegiatan komunitas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-[#0d7377] rounded-lg flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{event.title}</h4>
                        <p className="text-sm text-gray-600">{event.date} • {event.time}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge 
                        variant={event.status === 'upcoming' ? 'default' : 'secondary'}
                        className={event.status === 'upcoming' ? 'bg-[#0d7377]' : ''}
                      >
                        {event.participants} peserta
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Aksi Cepat</CardTitle>
            <CardDescription>
              Shortcut untuk tugas-tugas yang sering dilakukan
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="p-4 text-left border rounded-lg hover:bg-gray-50 transition-colors">
                <Users className="w-8 h-8 text-[#0d7377] mb-2" />
                <h4 className="font-medium text-gray-900">Tambah Anggota</h4>
                <p className="text-sm text-gray-600">Undang anggota baru ke komunitas</p>
              </button>
              
              <button className="p-4 text-left border rounded-lg hover:bg-gray-50 transition-colors">
                <FileText className="w-8 h-8 text-[#0d7377] mb-2" />
                <h4 className="font-medium text-gray-900">Tulis Artikel</h4>
                <p className="text-sm text-gray-600">Buat artikel baru untuk komunitas</p>
              </button>
              
              <button className="p-4 text-left border rounded-lg hover:bg-gray-50 transition-colors">
                <ShoppingBag className="w-8 h-8 text-[#0d7377] mb-2" />
                <h4 className="font-medium text-gray-900">Tambah Produk</h4>
                <p className="text-sm text-gray-600">Upload produk baru ke toko</p>
              </button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}