import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Home, 
  Users, 
  FileText, 
  ShoppingBag, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  Bell,
  Search
} from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '../ui/dropdown-menu';
import { useAuth } from '../../contexts/AuthContext';
import gradienLogo from 'figma:asset/ae495aabe004ee9e291840853315a29e5347ac5a.png';

interface DashboardLayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onPageChange: (page: string) => void;
  onNavigate: (page: 'home' | 'login' | 'register' | 'dashboard' | 'articles' | 'shop') => void;
}

export function DashboardLayout({ children, currentPage, onPageChange, onNavigate }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, logout } = useAuth();

  const navigation = [
    { name: 'Dashboard', href: 'overview', icon: Home },
    { name: 'Kelola Anggota', href: 'members', icon: Users },
    { name: 'Kelola Artikel', href: 'articles', icon: FileText },
    { name: 'Kelola E-commerce', href: 'ecommerce', icon: ShoppingBag },
    { name: 'Pengaturan', href: 'settings', icon: Settings },
  ];

  const handleLogout = () => {
    logout();
    onNavigate('home');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        >
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75"></div>
        </div>
      )}

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex items-center justify-between h-16 px-6 border-b">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg overflow-hidden">
              <img 
                src={gradienLogo} 
                alt="Gradien Unila" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h2 className="font-bold text-gray-900">Gradien Unila</h2>
              <p className="text-xs text-[#0d7377]">Dashboard</p>
            </div>
          </div>
          <button
            className="lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        <nav className="mt-6 px-3">
          <div className="space-y-1">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  onPageChange(item.href);
                  setSidebarOpen(false);
                }}
                className={`
                  w-full flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-colors
                  ${currentPage === item.href
                    ? 'bg-[#0d7377] text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                  }
                `}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.name}
              </button>
            ))}
          </div>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t">
          <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={user?.avatar} />
              <AvatarFallback className="bg-[#0d7377] text-white">
                {user?.name?.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                {user?.name}
              </p>
              <p className="text-xs text-gray-500 truncate">
                {user?.role === 'admin' ? 'Administrator' : 'Member'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top header */}
        <header className="bg-white border-b h-16 flex items-center justify-between px-4 lg:px-6">
          <div className="flex items-center space-x-4">
            <button
              className="lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="w-6 h-6 text-gray-500" />
            </button>
            
            <div className="hidden sm:block">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Cari..."
                  className="pl-10 w-64"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Bell className="w-5 h-5" />
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user?.avatar} />
                    <AvatarFallback className="bg-[#0d7377] text-white">
                      {user?.name?.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                <div className="flex items-center justify-start gap-2 p-2">
                  <div className="flex flex-col space-y-1 leading-none">
                    <p className="font-medium">{user?.name}</p>
                    <p className="w-[200px] truncate text-sm text-muted-foreground">
                      {user?.email}
                    </p>
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => onPageChange('settings')}>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Pengaturan</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Keluar</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-4 lg:p-6">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  );
}