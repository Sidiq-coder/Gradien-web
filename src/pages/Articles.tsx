import { motion } from 'motion/react';
import { useState } from 'react';
import { Search, Calendar, Clock, User, Filter, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function ArticlesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Frontend', 'Backend', 'Data Science', 'Career', 'Design', 'Mobile'];

  const articles = [
    {
      id: 1,
      title: "Panduan Lengkap Menjadi Full Stack Developer di 2024",
      excerpt: "Pelajari roadmap terbaru untuk menjadi Full Stack Developer yang sukses, termasuk teknologi yang wajib dikuasai dan tips untuk memulai karir di industri tech.",
      author: "Ahmad Rizki",
      date: "15 Jan 2024",
      readTime: "8 min read",
      category: "Career",
      image: "https://images.unsplash.com/photo-1565489030990-e211075fe11c?w=400&h=250&fit=crop",
      featured: true,
      views: 2500
    },
    {
      id: 2,
      title: "React vs Vue.js: Mana yang Lebih Baik untuk Pemula?",
      excerpt: "Perbandingan lengkap antara React dan Vue.js dari perspektif learning curve, ecosystem, dan job opportunities.",
      author: "Sari Indah",
      date: "12 Jan 2024",
      readTime: "6 min read",
      category: "Frontend",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=250&fit=crop",
      views: 1800
    },
    {
      id: 3,
      title: "Machine Learning untuk Mahasiswa IT: Getting Started",
      excerpt: "Tutorial step-by-step memulai journey machine learning dengan Python dan library populer seperti scikit-learn.",
      author: "Budi Santoso",
      date: "10 Jan 2024",
      readTime: "10 min read",
      category: "Data Science",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
      views: 2100
    },
    {
      id: 4,
      title: "Tips Interview Technical untuk Fresh Graduate",
      excerpt: "Strategi dan persiapan menghadapi technical interview di perusahaan teknologi besar.",
      author: "Maya Putri",
      date: "8 Jan 2024",
      readTime: "7 min read",
      category: "Career",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
      views: 1650
    },
    {
      id: 5,
      title: "Microservices Architecture: Concepts & Implementation",
      excerpt: "Mengenal arsitektur microservices, kapan menggunakannya, dan implementasi praktis dengan Docker dan Kubernetes.",
      author: "John Doe",
      date: "5 Jan 2024",
      readTime: "12 min read",
      category: "Backend",
      image: "https://images.unsplash.com/photo-1518486888148-b4d5ba31f8c8?w=400&h=250&fit=crop",
      views: 1920
    },
    {
      id: 6,
      title: "UI/UX Design Trends 2024: What's Next?",
      excerpt: "Eksplorasi trend terbaru dalam dunia UI/UX design yang akan mendominasi tahun 2024.",
      author: "Jane Smith",
      date: "3 Jan 2024",
      readTime: "5 min read",
      category: "Design",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop",
      views: 1400
    },
    {
      id: 7,
      title: "Building RESTful APIs with Node.js and Express",
      excerpt: "Tutorial komprehensif membangun RESTful API menggunakan Node.js, Express, dan MongoDB.",
      author: "Alex Johnson",
      date: "1 Jan 2024",
      readTime: "15 min read",
      category: "Backend",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
      views: 2300
    },
    {
      id: 8,
      title: "Flutter vs React Native: Mobile Development Showdown",
      excerpt: "Perbandingan detail antara Flutter dan React Native untuk pengembangan aplikasi mobile cross-platform.",
      author: "Sarah Lee",
      date: "28 Dec 2023",
      readTime: "9 min read",
      category: "Mobile",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
      views: 1750
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Page Hero */}
      <section className="pt-24 pb-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Artikel</h1>
            <p className="text-gray-600 mt-2">Artikel terbaru seputar teknologi, programming, dan karier IT.</p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-10">
        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Cari artikel..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="flex items-center">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                className={selectedCategory === category ? "bg-blue-600 hover:bg-blue-700" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Results count */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6"
        >
          <p className="text-gray-600">
            Menampilkan {filteredArticles.length} artikel
            {selectedCategory !== 'All' && ` dalam kategori ${selectedCategory}`}
            {searchTerm && ` untuk "${searchTerm}"`}
          </p>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <Badge variant="secondary" className="bg-white/90 text-gray-700">
                      {article.category}
                    </Badge>
                    {article.featured && (
                      <Badge className="bg-red-500 text-white">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    )}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs">
                    {article.views.toLocaleString()} views
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* No results */}
        {filteredArticles.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center py-12"
          >
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Tidak ada artikel ditemukan
            </h3>
            <p className="text-gray-600 mb-6">
              Coba ubah kata kunci pencarian atau kategori
            </p>
            <Button onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}>
              Reset Filter
            </Button>
          </motion.div>
        )}

        {/* Load More */}
        {filteredArticles.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-12"
          >
            <Button size="lg" variant="outline">
              Load More Articles
            </Button>
          </motion.div>
        )}
      </div>
      <Footer />
    </div>
  );
}