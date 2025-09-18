import { motion } from 'motion/react';
import { useState } from 'react';
import { Search, Filter, ShoppingCart, Heart, Star, Grid, List } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function ShopPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('newest');

  const categories = ['All', 'Apparel', 'Accessories', 'Digital Products', 'Stationery'];
  const sortOptions = [
    { value: 'newest', label: 'Terbaru' },
    { value: 'price-low', label: 'Harga Terendah' },
    { value: 'price-high', label: 'Harga Tertinggi' },
    { value: 'rating', label: 'Rating Tertinggi' },
    { value: 'popular', label: 'Terpopuler' }
  ];

  const products = [
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
      description: "Hoodie premium dengan material cotton blend yang nyaman dan berkualitas tinggi.",
      inStock: true,
      discount: 25
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
      description: "Paket lengkap untuk coding: mouse pad, sticker, dan aksesoris lainnya.",
      inStock: true,
      discount: 25
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
      category: "Digital Products",
      description: "Koleksi digital tools dan resources untuk developer profesional.",
      inStock: true,
      discount: 31
    },
    {
      id: 4,
      name: "TechMahasiswa T-Shirt",
      price: 149000,
      originalPrice: 179000,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
      rating: 4.6,
      reviews: 67,
      badge: "New",
      category: "Apparel",
      description: "T-shirt dengan design eksklusif TechMahasiswa, material cotton combed 30s.",
      inStock: true,
      discount: 17
    },
    {
      id: 5,
      name: "Programming Notebook Set",
      price: 79000,
      originalPrice: 99000,
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop",
      rating: 4.5,
      reviews: 43,
      badge: "Limited",
      category: "Stationery",
      description: "Set notebook khusus untuk coding dan planning project.",
      inStock: true,
      discount: 20
    },
    {
      id: 6,
      name: "Tech Sticker Pack",
      price: 35000,
      originalPrice: 45000,
      image: "https://images.unsplash.com/photo-1558618047-dd6c0e41cde0?w=400&h=400&fit=crop",
      rating: 4.4,
      reviews: 89,
      badge: "Popular",
      category: "Accessories",
      description: "Koleksi sticker tech companies dan programming languages.",
      inStock: true,
      discount: 22
    },
    {
      id: 7,
      name: "Full Stack Course Bundle",
      price: 199000,
      originalPrice: 299000,
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=400&fit=crop",
      rating: 4.9,
      reviews: 234,
      badge: "Best Value",
      category: "Digital Products",
      description: "Kursus lengkap Full Stack Development dengan mentor berpengalaman.",
      inStock: true,
      discount: 33
    },
    {
      id: 8,
      name: "Premium Mouse Pad",
      price: 89000,
      originalPrice: 109000,
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
      rating: 4.3,
      reviews: 56,
      badge: "Quality",
      category: "Accessories",
      description: "Mouse pad dengan surface premium untuk gaming dan productivity.",
      inStock: false,
      discount: 18
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddToCart = (productId: number) => {
    console.log('Added to cart:', productId);
    // Here you would implement cart logic
  };

  const handleToggleWishlist = (productId: number) => {
    console.log('Toggle wishlist:', productId);
    // Here you would implement wishlist logic
  };

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
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Toko</h1>
            <p className="text-gray-600 mt-2">Merchandise dan digital products eksklusif Gradien Unila.</p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-10">
        {/* Search and Filters */}
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
                placeholder="Cari produk..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <Button variant="outline" className="flex items-center">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
              <div className="flex border rounded-lg">
                <Button
                  onClick={() => setViewMode('grid')}
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  className="rounded-r-none"
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  onClick={() => setViewMode('list')}
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  className="rounded-l-none"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
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
            Menampilkan {filteredProducts.length} produk
            {selectedCategory !== 'All' && ` dalam kategori ${selectedCategory}`}
            {searchTerm && ` untuk "${searchTerm}"`}
          </p>
        </motion.div>

        {/* Products Grid/List */}
        <div className={viewMode === 'grid' ? "grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" : "space-y-4"}>
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={viewMode === 'list' ? 'w-full' : ''}
            >
              {viewMode === 'grid' ? (
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-red-500 text-white">
                        {product.badge}
                      </Badge>
                    </div>
                    {product.discount > 0 && (
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-green-500 text-white">
                          -{product.discount}%
                        </Badge>
                      </div>
                    )}
                    <div className="absolute top-12 right-3">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleToggleWishlist(product.id)}
                        className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                      >
                        <Heart className="w-4 h-4 text-gray-600" />
                      </motion.button>
                    </div>
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <Badge variant="secondary" className="bg-gray-700 text-white">
                          Out of Stock
                        </Badge>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
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
                    <h4 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </h4>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-blue-600">
                          Rp {product.price.toLocaleString()}
                        </span>
                        {product.originalPrice > product.price && (
                          <span className="text-sm text-gray-500 line-through">
                            Rp {product.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                    </div>
                    <Button
                      onClick={() => handleAddToCart(product.id)}
                      disabled={!product.inStock}
                      className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300"
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <Card className="hover:shadow-lg transition-all duration-300">
                  <div className="flex">
                    <div className="relative w-48 h-48">
                      <ImageWithFallback
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-red-500 text-white text-xs">
                          {product.badge}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="flex-1 p-6">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h4>
                          <Badge variant="outline" className="text-xs mb-2">
                            {product.category}
                          </Badge>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => handleToggleWishlist(product.id)}
                          className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                        >
                          <Heart className="w-4 h-4 text-gray-600" />
                        </motion.button>
                      </div>
                      <p className="text-gray-600 mb-4">{product.description}</p>
                      <div className="flex items-center mb-4">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="ml-1 font-medium">{product.rating}</span>
                        <span className="ml-1 text-gray-500">({product.reviews} reviews)</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold text-blue-600">
                            Rp {product.price.toLocaleString()}
                          </span>
                          {product.originalPrice > product.price && (
                            <span className="text-lg text-gray-500 line-through">
                              Rp {product.originalPrice.toLocaleString()}
                            </span>
                          )}
                        </div>
                        <Button
                          onClick={() => handleAddToCart(product.id)}
                          disabled={!product.inStock}
                          className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300"
                        >
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              )}
            </motion.div>
          ))}
        </div>

        {/* No results */}
        {filteredProducts.length === 0 && (
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
              Tidak ada produk ditemukan
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
        {filteredProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-12"
          >
            <Button size="lg" variant="outline">
              Load More Products
            </Button>
          </motion.div>
        )}
      </div>
      <Footer />
    </div>
  );
}