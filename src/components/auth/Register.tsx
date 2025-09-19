import { useState } from 'react';
import { motion } from 'motion/react';
import { Eye, EyeOff, UserPlus, ArrowLeft } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { useAuth } from '../../contexts/AuthContext';
import { toast } from 'sonner@2.0.3';
import gradienLogo from 'figma:asset/ae495aabe004ee9e291840853315a29e5347ac5a.png';

interface RegisterProps {
  onToggleMode: () => void;
  onBack: () => void;
}

export function Register({ onToggleMode, onBack }: RegisterProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { register, loading } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !password || !confirmPassword) {
      toast.error('Harap isi semua field');
      return;
    }

    if (password !== confirmPassword) {
      toast.error('Password dan konfirmasi password tidak cocok');
      return;
    }

    if (password.length < 6) {
      toast.error('Password minimal 6 karakter');
      return;
    }

    const success = await register(name, email, password);
    
    if (success) {
      toast.success('Registrasi berhasil! Selamat datang di Gradien Unila.');
      // Navigation will be handled automatically by App.tsx useEffect
    } else {
      toast.error('Terjadi kesalahan saat registrasi');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#e6f7f7] to-[#b8f2f0] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <Card className="shadow-2xl border-0">
          <CardHeader className="space-y-4 text-center">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#0d7377] to-[#14a085] flex items-center justify-center">
                <img 
                  src={gradienLogo} 
                  alt="Gradien Unila Logo" 
                  className="w-10 h-10 object-contain"
                />
              </div>
            </motion.div>
            <div>
              <CardTitle className="text-2xl font-bold text-gray-900">Bergabung dengan Gradien Unila</CardTitle>
              <CardDescription className="text-gray-600 mt-2">
                Daftar untuk mengakses dashboard dan bergabung dengan komunitas
              </CardDescription>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nama Lengkap</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Masukkan nama lengkap"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="nama@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Masukkan password (min. 6 karakter)"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-12 pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Konfirmasi Password</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="Ulangi password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="h-12 pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-[#0d7377] hover:bg-[#0a5d61] text-white"
                disabled={loading}
              >
                {loading ? (
                  <div className="flex items-center">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Memproses...
                  </div>
                ) : (
                  <>
                    <UserPlus className="w-5 h-5 mr-2" />
                    Daftar
                  </>
                )}
              </Button>
            </form>

            <div className="text-center space-y-4">
              <div className="text-sm text-gray-600">
                Sudah punya akun?{' '}
                <button
                  onClick={onToggleMode}
                  className="text-[#0d7377] hover:text-[#0a5d61] font-medium"
                >
                  Masuk sekarang
                </button>
              </div>
              
              <button
                onClick={onBack}
                className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-1" />
                Kembali ke beranda
              </button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}