import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ShoppingCart, Star, ArrowRight, Package, Users, Zap, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Ecommerce() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featuredProducts = [
    {
      id: 1,
      name: "TechMahasiswa Premium Hoodie",
      price: 299000,
      originalPrice: 399000,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 124,
      badge: "Best Seller",
      category: "Apparel"
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
      category: "Accessories"
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
      category: "Digital"
    }
  ];

  const categories = [
    {
      name: "Apparel",
      icon: "👕",
      count: 25,
      description: "T-shirt, hoodie, dan merchandise keren"
    },
    {
      name: "Accessories",
      icon: "💻",
      description: "Mouse pad, sticker, dan aksesoris tech",
      count: 18
    },
    {
      name: "Digital Products",
      icon: "📱",
      description: "E-book, course, dan resource digital",
      count: 12
    },
    {
      name: "Stationery",
      icon: "📝",
      description: "Notebook, pen, dan alat tulis",
      count: 15
    }
  ];

  const stats = [
    { label: "Happy Customers", value: "2,500+", icon: Users },
    { label: "Products Sold", value: "10K+", icon: Package },
    { label: "Customer Rating", value: "4.8/5", icon: Star },
    { label: "Fast Delivery", value: "1-2 Days", icon: Zap }
  ];

  const handleViewAllProducts = () => {
    window.location.href = '/shop';
  };

  return (
    <section id="ecommerce" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Gradien Unila <span className="text-gradien-gradient">Store</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Dapatkan merchandise eksklusif, tools, dan digital products yang dirancang khusus 
            untuk mendukung journey teknologi Anda. Quality terjamin dengan harga terjangkau!
          </p>
        </motion.div>

        {/* Hero Banner */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <Card className="overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <ShoppingCart className="w-8 h-8 mr-3" />
                  <Badge className="bg-white/20 text-white">Special Offer</Badge>
                </div>
                <h3 className="text-3xl font-bold mb-4">
                  New Year Sale 2024
                </h3>
                <p className="text-blue-100 mb-6 text-lg">
                  Dapatkan diskon hingga 50% untuk semua produk pilihan. 
                  Limited time offer untuk member TechMahasiswa!
                </p>
                <div className="flex items-center space-x-6 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold">50%</div>
                    <div className="text-blue-200 text-sm">Off Selected Items</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">Free</div>
                    <div className="text-blue-200 text-sm">Shipping</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">7 Days</div>
                    <div className="text-blue-200 text-sm">Return Policy</div>
                  </div>
                </div>
                <motion.button
                  onClick={() => (window.location.href = '/shop')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
                >
                  Shop Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </motion.button>
              </CardContent>
              <div className="p-8">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1684560207604-9b0ce238c71b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxlY29tbWVyY2UlMjBvbmxpbmUlMjBzaG9wcGluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU4MDA1NjQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="E-commerce banner"
                  className="rounded-xl w-full"
                />
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Product Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Kategori Produk
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer"
              >
                <Card className="text-center hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                      {category.icon}
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {category.name}
                    </h4>
                    <p className="text-gray-600 text-sm mb-3">{category.description}</p>
                    <Badge variant="secondary" className="text-xs">
                      {category.count} Items
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Featured Products */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Produk Unggulan
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
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
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
                      >
                        Quick Add
                      </motion.button>
                    </div>
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
                    <h4 className="font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </h4>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-blue-600">
                          Rp {product.price.toLocaleString()}
                        </span>
                        <span className="text-sm text-gray-500 line-through">
                          Rp {product.originalPrice.toLocaleString()}
                        </span>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-8 h-8 bg-blue-100 hover:bg-blue-200 rounded-full flex items-center justify-center transition-colors"
                      >
                        <ShoppingCart className="w-4 h-4 text-blue-600" />
                      </motion.button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-12"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                className="text-center"
              >
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center bg-white rounded-3xl p-8 md:p-12 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Jelajahi Toko Lengkap Kami
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Temukan lebih banyak produk menarik, exclusive deals, dan merchandise terbaru 
            di toko online TechMahasiswa. Member mendapat benefit khusus!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={handleViewAllProducts}
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
              >
                <ShoppingCart className="mr-2 w-5 h-5" />
                Kunjungi Toko
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg"
              >
                Lihat Katalog
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}