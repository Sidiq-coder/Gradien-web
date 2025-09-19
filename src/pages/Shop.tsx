import { motion } from 'motion/react';
import { ArrowLeft, ShoppingCart, Star, Search, Filter, Grid, List, Heart } from 'lucide-react';
import { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface ShopPageProps {
  onNavigate: (page: 'home' | 'login' | 'register' | 'dashboard' | 'articles' | 'shop') => void;
}

export function ShopPage({ onNavigate }: ShopPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const allProducts = [
    {
      id: 1,
      name: "TechMahasiswa Premium Hoodie",
      price: 299000,
      originalPrice: 399000,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 124,
      badge: "Best Seller",
      category: "Apparel",
      description: "Hoodie berkualitas premium dengan design eksklusif Gradien Unila. Material cotton combed 30s yang nyaman dan tahan lama."
    },
    {
      id: 2,
      name: "Coding Essentials Bundle",
      price: 149000,
      originalPrice: 199000,
      image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop",
      rating: 4.9,
      reviews: 89,
      badge: "Bundle Deal",
      category: "Accessories",
      description: "Paket lengkap aksesoris untuk developer: mouse pad, sticker pack, notebook, dan pen eksklusif Gradien Unila."
    },
    {
      id: 3,
      name: "Developer Toolkit Pro",
      price: 89000,
      originalPrice: 129000,
      image: "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=400&h=400&fit=crop",
      rating: 4.7,
      reviews: 156,
      badge: "Hot Item",
      category: "Digital",
      description: "Koleksi digital tools, templates, dan resources premium untuk mempercepat workflow development Anda."
    },
    {
      id: 4,
      name: "Gradien Unila T-Shirt",
      price: 159000,
      originalPrice: 199000,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
      rating: 4.6,
      reviews: 78,
      badge: "New",
      category: "Apparel",
      description: "T-shirt casual dengan logo Gradien Unila. Material katun premium yang breathable dan nyaman dipakai sehari-hari."
    },
    {
      id: 5,
      name: "Programming Notebook Set",
      price: 89000,
      originalPrice: 120000,
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop",
      rating: 4.5,
      reviews: 92,
      badge: "Limited",
      category: "Stationery",
      description: "Set notebook khusus programmer dengan template untuk algoritma, flowchart, dan note-taking yang terstruktur."
    },
    {
      id: 6,
      name: "Gradien Totebag Canvas",
      price: 129000,
      originalPrice: 169000,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
      rating: 4.7,
      reviews: 45,
      badge: "Eco-Friendly",
      category: "Accessories",
      description: "Totebag canvas berkualitas tinggi dengan design minimalis Gradien Unila. Perfect untuk kampus atau daily activities."
    },
    {
      id: 7,
      name: "Sticker Pack Gradien",
      price: 25000,
      originalPrice: 35000,
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=400&fit=crop",
      rating: 4.9,
      reviews: 203,
      badge: "Popular",
      category: "Accessories",
      description: "Paket sticker waterproof dengan berbagai design tech-themed dan logo Gradien Unila untuk laptop dan gadget."
    },
    {
      id: 8,
      name: "Tech Learning Course Bundle",
      price: 299000,
      originalPrice: 499000,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 167,
      badge: "Course",
      category: "Digital",
      description: "Bundle kursus online lengkap: Web Development, Mobile App, dan Data Science dengan mentor berpengalaman."
    }
  ];

  const categories = [
    { value: 'all', label: 'Semua Kategori' },
    { value: 'Apparel', label: 'Apparel' },
    { value: 'Accessories', label: 'Accessories' },
    { value: 'Digital', label: 'Digital Products' },
    { value: 'Stationery', label: 'Stationery' }
  ];

  const sortOptions = [
    { value: 'newest', label: 'Terbaru' },
    { value: 'price-low', label: 'Harga Terendah' },
    { value: 'price-high', label: 'Harga Tertinggi' },
    { value: 'rating', label: 'Rating Tertinggi' },
    { value: 'popular', label: 'Terpopuler' }
  ];

  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'popular':
        return b.reviews - a.reviews;
      default:
        return 0;
    }
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
                  <span className="text-gradien-gradient">Gradien Unila</span> Store
                </h1>
                <p className="text-gray-600 text-sm sm:text-base">
                  Merchandise & digital products untuk tech enthusiast
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
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Cari produk..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 lg:gap-3">
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
                  
                  <div className="w-full sm:w-48">
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {sortOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex border rounded-lg">
                    <Button
                      variant={viewMode === 'grid' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('grid')}
                      className="rounded-r-none"
                    >
                      <Grid className="w-4 h-4" />
                    </Button>
                    <Button
                      variant={viewMode === 'list' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('list')}
                      className="rounded-l-none"
                    >
                      <List className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 flex justify-between items-center">
                <div className="text-sm text-gray-600">
                  Menampilkan {filteredProducts.length} dari {allProducts.length} produk
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Products Grid */}
        <div className={viewMode === 'grid' 
          ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" 
          : "grid gap-6"
        }>
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {viewMode === 'grid' ? (
                <ProductCard product={product} />
              ) : (
                <ProductListItem product={product} />
              )}
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Tidak ada produk ditemukan
            </h3>
            <p className="text-gray-500">
              Coba ubah kata kunci pencarian atau filter kategori
            </p>
          </div>
        )}

        {/* Load More */}
        {filteredProducts.length > 0 && (
          <div className="text-center mt-12">
            <Button 
              variant="outline"
              size="lg"
              className="border-[#0d7377] text-[#0d7377] hover:bg-[#e6f7f7]"
            >
              Muat Lebih Banyak Produk
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

// Product Card Component
function ProductCard({ product }: { product: any }) {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
      <div className="relative">
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <Badge className="bg-red-500 text-white">
            {product.badge}
          </Badge>
        </div>
        <div className="absolute top-3 right-3">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors"
          >
            <Heart className="w-4 h-4 text-gray-600" />
          </motion.button>
        </div>
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#0d7377] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#0a5d61] transition-colors"
          >
            Quick Add
          </motion.button>
        </div>
      </div>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="outline" className="text-xs">
            {product.category}
          </Badge>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm font-medium">{product.rating}</span>
            <span className="ml-1 text-xs text-gray-500">({product.reviews})</span>
          </div>
        </div>
        <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#0d7377] transition-colors line-clamp-1">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-[#0d7377]">
              Rp {product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                Rp {product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-8 h-8 bg-[#e6f7f7] hover:bg-[#b8f2f0] rounded-full flex items-center justify-center transition-colors"
          >
            <ShoppingCart className="w-4 h-4 text-[#0d7377]" />
          </motion.button>
        </div>
      </CardContent>
    </Card>
  );
}

// Product List Item Component
function ProductListItem({ product }: { product: any }) {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      <div className="grid md:grid-cols-4 gap-0">
        {/* Image */}
        <div className="relative md:col-span-1">
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            className="w-full h-48 md:h-32 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 left-3">
            <Badge className="bg-red-500 text-white text-xs">
              {product.badge}
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className="md:col-span-3 p-4 flex justify-between">
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <Badge variant="outline" className="text-xs">
                {product.category}
              </Badge>
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="ml-1 text-sm font-medium">{product.rating}</span>
                <span className="ml-1 text-xs text-gray-500">({product.reviews})</span>
              </div>
            </div>
            
            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#0d7377] transition-colors">
              {product.name}
            </h3>
            
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">
              {product.description}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-xl font-bold text-[#0d7377]">
                  Rp {product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-500 line-through">
                    Rp {product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
              
              <div className="flex items-center space-x-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-8 h-8 bg-white border rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                  <Heart className="w-4 h-4 text-gray-600" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#0d7377] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#0a5d61] transition-colors flex items-center"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}