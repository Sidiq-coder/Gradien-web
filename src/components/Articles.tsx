import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Calendar, Clock, User, ArrowRight, BookOpen, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Articles() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featuredArticle = {
    id: 1,
    title: "Panduan Lengkap Menjadi Full Stack Developer di 2024",
    excerpt: "Pelajari roadmap terbaru untuk menjadi Full Stack Developer yang sukses, termasuk teknologi yang wajib dikuasai dan tips untuk memulai karir di industri tech.",
    author: "Ahmad Rizki",
    date: "15 Jan 2024",
    readTime: "8 min read",
    category: "Career Development",
    image: "https://images.unsplash.com/photo-1565489030990-e211075fe11c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwYmxvZyUyMGFydGljbGUlMjB3cml0aW5nfGVufDF8fHx8MTc1ODAwNTY0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    featured: true
  };

  const articles = [
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
    }
  ];

  const categories = [
    { name: "Frontend", count: 15, color: "bg-blue-100 text-blue-700" },
    { name: "Backend", count: 12, color: "bg-green-100 text-green-700" },
    { name: "Data Science", count: 8, color: "bg-purple-100 text-purple-700" },
    { name: "Career", count: 10, color: "bg-orange-100 text-orange-700" },
    { name: "Design", count: 6, color: "bg-pink-100 text-pink-700" }
  ];

  const handleViewAllArticles = () => {
    window.location.href = '/articles';
  };

  return (
    <section id="articles" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Artikel <span className="text-gradien-gradient">Terbaru</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Baca artikel terbaru seputar teknologi, programming, career development, 
            dan insight menarik dari komunitas Gradien Unila.
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`px-4 py-2 rounded-full ${category.color} cursor-pointer transition-all duration-200`}
            >
              <span className="font-medium">{category.name}</span>
              <span className="ml-1 text-sm">({category.count})</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Article */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <Card className="overflow-hidden bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <BookOpen className="w-6 h-6 text-blue-600 mr-3" />
                  <Badge className="bg-blue-600 text-white">Featured Article</Badge>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {featuredArticle.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <User className="w-4 h-4 mr-1" />
                  <span className="mr-4">{featuredArticle.author}</span>
                  <Calendar className="w-4 h-4 mr-1" />
                  <span className="mr-4">{featuredArticle.date}</span>
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{featuredArticle.readTime}</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
                >
                  Baca Selengkapnya
                  <ArrowRight className="ml-2 w-4 h-4" />
                </motion.button>
              </CardContent>
              <div className="p-8">
                <div className="relative">
                  <ImageWithFallback
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="rounded-xl w-full shadow-lg"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white text-blue-600 shadow-md">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Trending
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Recent Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="bg-white/90 text-gray-700">
                      {article.category}
                    </Badge>
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

        {/* Stats & CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-gray-600">Artikel Diterbitkan</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">50K+</div>
              <div className="text-gray-600">Monthly Readers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-gray-600">Expert Contributors</div>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Jelajahi Semua Artikel Kami
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Dapatkan akses ke library lengkap artikel teknologi, tutorial, dan insight 
            dari para expert di industri. Update terbaru setiap minggu!
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              onClick={handleViewAllArticles}
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
            >
              Lihat Semua Artikel
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}