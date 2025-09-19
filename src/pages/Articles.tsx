import { motion } from 'motion/react';
import { ArrowLeft, Calendar, Clock, User, Search, Filter, BookOpen } from 'lucide-react';
import { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface ArticlesPageProps {
  onNavigate: (page: 'home' | 'login' | 'register' | 'dashboard' | 'articles' | 'shop') => void;
}

export function ArticlesPage({ onNavigate }: ArticlesPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const allArticles = [
    {
      id: 1,
      title: "Panduan Lengkap Menjadi Full Stack Developer di 2024",
      excerpt: "Pelajari roadmap terbaru untuk menjadi Full Stack Developer yang sukses, termasuk teknologi yang wajib dikuasai dan tips untuk memulai karir di industri tech.",
      author: "Ahmad Rizki",
      date: "15 Jan 2024",
      readTime: "8 min read",
      category: "Career Development",
      image: "https://images.unsplash.com/photo-1565489030990-e211075fe11c?w=400&h=250&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "React vs Vue.js: Mana yang Lebih Baik untuk Pemula?",
      excerpt: "Perbandingan lengkap antara React dan Vue.js dari perspektif learning curve, ecosystem, dan job opportunities.",
      author: "Sari Indah",
      date: "12 Jan 2024",
      readTime: "6 min read",
      category: "Frontend",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Machine Learning untuk Mahasiswa IT: Getting Started",
      excerpt: "Tutorial step-by-step memulai journey machine learning dengan Python dan library populer seperti scikit-learn.",
      author: "Budi Santoso",
      date: "10 Jan 2024",
      readTime: "10 min read",
      category: "Data Science",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      title: "Tips Interview Technical untuk Fresh Graduate",
      excerpt: "Strategi dan persiapan menghadapi technical interview di perusahaan teknologi besar.",
      author: "Maya Putri",
      date: "8 Jan 2024",
      readTime: "7 min read",
      category: "Career",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop"
    },
    {
      id: 5,
      title: "Microservices Architecture: Concepts & Implementation",
      excerpt: "Mengenal arsitektur microservices, kapan menggunakannya, dan implementasi praktis dengan Docker dan Kubernetes.",
      author: "John Doe",
      date: "5 Jan 2024",
      readTime: "12 min read",
      category: "Backend",
      image: "https://images.unsplash.com/photo-1518486888148-b4d5ba31f8c8?w=400&h=250&fit=crop"
    },
    {
      id: 6,
      title: "UI/UX Design Trends 2024: What's Next?",
      excerpt: "Eksplorasi trend terbaru dalam dunia UI/UX design yang akan mendominasi tahun 2024.",
      author: "Jane Smith",
      date: "3 Jan 2024",
      readTime: "5 min read",
      category: "Design",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop"
    },
    {
      id: 7,
      title: "Panduan Docker untuk Pemula: Dari Zero to Hero",
      excerpt: "Belajar Docker dari dasar, mulai dari konsep containerization hingga deployment aplikasi production.",
      author: "Ahmad Rizki",
      date: "1 Jan 2024",
      readTime: "15 min read",
      category: "DevOps",
      image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=400&h=250&fit=crop"
    },
    {
      id: 8,
      title: "Best Practices untuk Clean Code dalam JavaScript",
      excerpt: "Tips dan trik menulis kode JavaScript yang bersih, readable, dan maintainable untuk project jangka panjang.",
      author: "Sari Indah",
      date: "28 Des 2023",
      readTime: "9 min read",
      category: "Frontend",
      image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=250&fit=crop"
    }
  ];

  const categories = [
    { value: 'all', label: 'Semua Kategori' },
    { value: 'Frontend', label: 'Frontend' },
    { value: 'Backend', label: 'Backend' },
    { value: 'Data Science', label: 'Data Science' },
    { value: 'Career Development', label: 'Career Development' },
    { value: 'Career', label: 'Career' },
    { value: 'Design', label: 'Design' },
    { value: 'DevOps', label: 'DevOps' }
  ];

  const filteredArticles = allArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => onNavigate('home')}
                className="flex items-center space-x-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Kembali</span>
              </Button>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Artikel <span className="text-gradien-gradient">Gradien Unila</span>
                </h1>
                <p className="text-gray-600 text-sm sm:text-base">
                  Kumpulan artikel teknologi, tutorial, dan insight dari komunitas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-8">
        {/* Search and Filter */}
        <div className="mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Cari artikel..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <div className="w-full sm:w-48">
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <Filter className="w-4 h-4 mr-2" />
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category.value} value={category.value}>
                          {category.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="mt-4 flex flex-wrap gap-2">
                <div className="text-sm text-gray-600">
                  Menampilkan {filteredArticles.length} dari {allArticles.length} artikel
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Articles Grid */}
        <div className="grid gap-8">
          {filteredArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="grid md:grid-cols-3 gap-0">
                  {/* Image */}
                  <div className="relative md:col-span-1">
                    <ImageWithFallback
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {article.featured && (
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-[#0d7377] text-white">
                          <BookOpen className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      </div>
                    )}
                    <div className="absolute top-3 right-3">
                      <Badge variant="secondary" className="bg-white/90 text-gray-700">
                        {article.category}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-2 p-6">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#0d7377] transition-colors">
                      {article.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>

                      <Button 
                        className="bg-[#0d7377] hover:bg-[#0a5d61] text-white"
                        size="sm"
                      >
                        Baca Selengkapnya
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-16">
            <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Tidak ada artikel ditemukan
            </h3>
            <p className="text-gray-500">
              Coba ubah kata kunci pencarian atau filter kategori
            </p>
          </div>
        )}

        {/* Load More */}
        {filteredArticles.length > 0 && (
          <div className="text-center mt-12">
            <Button 
              variant="outline"
              size="lg"
              className="border-[#0d7377] text-[#0d7377] hover:bg-[#e6f7f7]"
            >
              Muat Lebih Banyak Artikel
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}