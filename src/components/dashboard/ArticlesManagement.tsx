import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Search, 
  Filter, 
  Plus, 
  MoreHorizontal, 
  Edit, 
  Trash2, 
  Eye,
  Calendar,
  FileText,
  TrendingUp,
  Users
} from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Badge } from '../ui/badge';
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '../ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { useAuth } from '../../contexts/AuthContext';
import type { OutputData } from '@editorjs/editorjs';

interface ArticleItem {
  id: number | string;
  title: string;
  excerpt: string;
  author: string;
  authorAvatar: string;
  category: string;
  status: 'published' | 'draft' | 'review';
  publishDate: string;
  views: number;
  likes: number;
  comments: number;
  readTime: string;
  featured: boolean;
  content?: OutputData;
  thumbnail?: string;
}

export function ArticlesManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterCategory, setFilterCategory] = useState('all');
  const { user } = useAuth();

  const initialArticles: ArticleItem[] = [
    {
      id: 1,
      title: 'Panduan Lengkap Menjadi Full Stack Developer di 2024',
      excerpt: 'Pelajari roadmap terbaru untuk menjadi Full Stack Developer yang sukses...',
      author: 'Ahmad Rizki',
      authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      category: 'Career Development',
      status: 'published',
      publishDate: '2024-01-15',
      views: 1250,
      likes: 89,
      comments: 24,
      readTime: '8 min',
      featured: true
    },
    {
      id: 2,
      title: 'React vs Vue.js: Mana yang Lebih Baik untuk Pemula?',
      excerpt: 'Perbandingan lengkap antara React dan Vue.js dari perspektif learning curve...',
      author: 'Sari Indah',
      authorAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      category: 'Frontend',
      status: 'published',
      publishDate: '2024-01-12',
      views: 890,
      likes: 67,
      comments: 15,
      readTime: '6 min',
      featured: false
    },
    {
      id: 3,
      title: 'Machine Learning untuk Mahasiswa IT: Getting Started',
      excerpt: 'Tutorial step-by-step memulai journey machine learning dengan Python...',
      author: 'Budi Santoso',
      authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      category: 'Data Science',
      status: 'draft',
      publishDate: '2024-01-10',
      views: 0,
      likes: 0,
      comments: 0,
      readTime: '10 min',
      featured: false
    },
    {
      id: 4,
      title: 'Tips Interview Technical untuk Fresh Graduate',
      excerpt: 'Strategi dan persiapan menghadapi technical interview di perusahaan teknologi...',
      author: 'Maya Putri',
      authorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      category: 'Career',
      status: 'review',
      publishDate: '2024-01-08',
      views: 0,
      likes: 0,
      comments: 0,
      readTime: '7 min',
      featured: false
    },
    {
      id: 5,
      title: 'Microservices Architecture: Concepts & Implementation',
      excerpt: 'Mengenal arsitektur microservices, kapan menggunakannya, dan implementasi praktis...',
      author: 'Dedi Kurniawan',
      authorAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face',
      category: 'Backend',
      status: 'published',
      publishDate: '2024-01-05',
      views: 654,
      likes: 45,
      comments: 12,
      readTime: '12 min',
      featured: false
    }
  ];

  const [articles, setArticles] = useState<ArticleItem[]>(initialArticles);

  // Load artikel baru dari localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem('gradien_new_articles');
      if (raw) {
        const extrasRaw: any[] = JSON.parse(raw);
        const extras: ArticleItem[] = extrasRaw.map((a) => {
          const plain = a.excerpt && a.excerpt.length > 0
            ? a.excerpt
            : (a.content ? extractPlainText(a.content) : '');
          const words = plain ? plain.split(/\s+/).filter(Boolean).length : 0;
          const minutes = Math.max(1, Math.round(words / 200));
          return {
            id: a.id ?? Date.now(),
            title: a.title ?? 'Untitled',
            excerpt: plain.slice(0, 160),
            author: a.author || (user?.name || 'Admin'),
            authorAvatar: a.authorAvatar || (user?.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'),
            category: a.category ?? 'Frontend',
            status: a.status ?? 'draft',
            publishDate: a.publishDate ?? new Date().toISOString().slice(0, 10),
            views: a.views ?? 0,
            likes: a.likes ?? 0,
            comments: a.comments ?? 0,
            readTime: a.readTime ?? `${minutes} min`,
            featured: a.featured ?? false,
            content: a.content,
            thumbnail: a.thumbnail,
          } as ArticleItem;
        });
        setArticles([...extras, ...initialArticles]);
      }
    } catch (e) {
      console.error('Failed to load new articles:', e);
    }
  }, [user]);

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || article.status === filterStatus;
    const matchesCategory = filterCategory === 'all' || article.category === filterCategory;
    
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'published':
        return <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Published</Badge>;
      case 'draft':
        return <Badge variant="secondary">Draft</Badge>;
      case 'review':
        return <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">Review</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Frontend': 'bg-blue-100 text-blue-700',
      'Backend': 'bg-green-100 text-green-700',
      'Data Science': 'bg-purple-100 text-purple-700',
      'Career Development': 'bg-orange-100 text-orange-700',
      'Career': 'bg-orange-100 text-orange-700',
      'Design': 'bg-pink-100 text-pink-700'
    };
    return colors[category] || 'bg-gray-100 text-gray-700';
  };

  // Navigasi ke halaman tulis artikel baru
  const goToAddArticle = () => {
    window.location.hash = 'add-article';
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Kelola Artikel</h1>
          <p className="text-gray-600 mt-2">
            Kelola konten artikel untuk komunitas Gradien Unila
          </p>
        </div>
        <Button onClick={goToAddArticle} className="bg-[#0d7377] hover:bg-[#0a5d61] text-white">
          <Plus className="w-4 h-4 mr-2" />
          Tulis Artikel
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Artikel</p>
                <p className="text-2xl font-bold text-gray-900">156</p>
              </div>
              <FileText className="w-8 h-8 text-[#0d7377]" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Published</p>
                <p className="text-2xl font-bold text-green-600">142</p>
              </div>
              <FileText className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Views</p>
                <p className="text-2xl font-bold text-blue-600">45.2K</p>
              </div>
              <TrendingUp className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Avg. Engagement</p>
                <p className="text-2xl font-bold text-purple-600">8.4%</p>
              </div>
              <Users className="w-8 h-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardHeader>
          <CardTitle>Daftar Artikel</CardTitle>
          <CardDescription>
            Kelola dan pantau performa artikel komunitas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Cari judul artikel atau penulis..."
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
                <SelectItem value="published">Published</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="review">Review</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={filterCategory} onValueChange={setFilterCategory}>
              <SelectTrigger className="w-full sm:w-40">
                <SelectValue placeholder="Kategori" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Semua Kategori</SelectItem>
                <SelectItem value="Frontend">Frontend</SelectItem>
                <SelectItem value="Backend">Backend</SelectItem>
                <SelectItem value="Data Science">Data Science</SelectItem>
                <SelectItem value="Career Development">Career Development</SelectItem>
                <SelectItem value="Design">Design</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Articles Table */}
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Artikel</TableHead>
                  <TableHead>Penulis</TableHead>
                  <TableHead>Kategori</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Publikasi</TableHead>
                  <TableHead>Performa</TableHead>
                  <TableHead className="text-right">Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredArticles.map((article) => (
                  <TableRow key={article.id}>
                    <TableCell className="max-w-md">
                      <div className="space-y-2">
                        <div className="flex items-start space-x-2">
                          <h3 className="font-medium text-gray-900 line-clamp-2">
                            {article.title}
                          </h3>
                          {article.featured && (
                            <Badge className="bg-[#0d7377] text-white hover:bg-[#0a5d61] text-xs">
                              Featured
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-gray-500 line-clamp-2">
                          {article.excerpt}
                        </p>
                        <span className="text-xs text-gray-400">{article.readTime} read</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={article.authorAvatar} />
                          <AvatarFallback>{article.author.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <span className="text-sm font-medium text-gray-900">{article.author}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getCategoryColor(article.category)} variant="secondary">
                        {article.category}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {getStatusBadge(article.status)}
                    </TableCell>
                    <TableCell className="text-sm text-gray-600">
                      {new Date(article.publishDate).toLocaleDateString('id-ID')}
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="flex items-center text-sm text-gray-600">
                          <Eye className="w-4 h-4 mr-1" />
                          {article.views.toLocaleString()}
                        </div>
                        <div className="text-xs text-gray-500">
                          ❤️ {article.likes} • 💬 {article.comments}
                        </div>
                      </div>
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
                            <Eye className="mr-2 h-4 w-4" />
                            Lihat
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit
                          </DropdownMenuItem>
                          {article.status === 'draft' && (
                            <DropdownMenuItem>
                              <FileText className="mr-2 h-4 w-4" />
                              Publish
                            </DropdownMenuItem>
                          )}
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
          
          {filteredArticles.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">Tidak ada artikel yang ditemukan</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

// Util: ekstrak plain text dari OutputData Editor.js
function extractPlainText(output: OutputData): string {
  if (!output || !Array.isArray(output.blocks)) return '';
  const parts: string[] = [];
  for (const block of output.blocks as any[]) {
    if (!block) continue;
    switch (block.type) {
      case 'paragraph':
        parts.push((block.data?.text ?? '').replace(/<[^>]+>/g, ''));
        break;
      case 'header':
        parts.push((block.data?.text ?? '').replace(/<[^>]+>/g, ''));
        break;
      case 'list':
        if (Array.isArray(block.data?.items)) {
          for (const item of block.data.items) {
            parts.push(String(item).replace(/<[^>]+>/g, ''));
          }
        }
        break;
      case 'checklist':
        if (Array.isArray(block.data?.items)) {
          for (const item of block.data.items) {
            parts.push(String(item?.text ?? '').replace(/<[^>]+>/g, ''));
          }
        }
        break;
      default:
        break;
    }
  }
  return parts.join(' ').replace(/\s+/g, ' ').trim();
}

// Catatan: Dialog pembuatan artikel dipindahkan ke halaman terpisah (pages/AddArticle.tsx)