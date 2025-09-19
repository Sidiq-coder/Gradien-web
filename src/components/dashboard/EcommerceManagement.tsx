import { motion } from 'motion/react';
import { useState } from 'react';
import { 
  ShoppingCart, 
  Package, 
  DollarSign, 
  TrendingUp, 
  Plus, 
  Edit, 
  Trash2,
  Eye,
  Star,
  MoreHorizontal
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  stock: number;
  status: 'active' | 'inactive' | 'out_of_stock';
  rating: number;
  reviews: number;
  image: string;
  sales: number;
  createdAt: string;
}

export function EcommerceManagement() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: '1',
      name: 'TechMahasiswa Premium Hoodie',
      description: 'Hoodie berkualitas premium dengan desain eksklusif Gradien Unila',
      price: 299000,
      originalPrice: 399000,
      category: 'Apparel',
      stock: 25,
      status: 'active',
      rating: 4.8,
      reviews: 124,
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300',
      sales: 156,
      createdAt: '2024-01-15'
    },
    {
      id: '2',
      name: 'Coding Essentials Bundle',
      description: 'Paket lengkap aksesoris untuk developer yang produktif',
      price: 149000,
      originalPrice: 199000,
      category: 'Accessories',
      stock: 12,
      status: 'active',
      rating: 4.9,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=300',
      sales: 98,
      createdAt: '2024-01-10'
    },
    {
      id: '3',
      name: 'Developer Toolkit Pro',
      description: 'Koleksi digital tools dan resources untuk developer',
      price: 89000,
      originalPrice: 129000,
      category: 'Digital',
      stock: 0,
      status: 'out_of_stock',
      rating: 4.7,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=300',
      sales: 234,
      createdAt: '2024-01-05'
    }
  ]);

  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  // Statistics
  const totalProducts = products.length;
  const activeProducts = products.filter(p => p.status === 'active').length;
  const totalRevenue = products.reduce((sum, p) => sum + (p.price * p.sales), 0);
  const averageRating = products.reduce((sum, p) => sum + p.rating, 0) / products.length;

  // Filtered products
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const handleAddProduct = (productData: Partial<Product>) => {
    const newProduct: Product = {
      id: Date.now().toString(),
      name: productData.name || '',
      description: productData.description || '',
      price: productData.price || 0,
      originalPrice: productData.originalPrice,
      category: productData.category || 'Apparel',
      stock: productData.stock || 0,
      status: 'active',
      rating: 0,
      reviews: 0,
      image: productData.image || 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300',
      sales: 0,
      createdAt: new Date().toISOString().split('T')[0]
    };
    setProducts([...products, newProduct]);
    setIsAddDialogOpen(false);
  };

  const handleEditProduct = (productData: Partial<Product>) => {
    if (editingProduct) {
      setProducts(products.map(p => 
        p.id === editingProduct.id 
          ? { ...p, ...productData }
          : p
      ));
      setEditingProduct(null);
    }
  };

  const handleDeleteProduct = (productId: string) => {
    setProducts(products.filter(p => p.id !== productId));
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-100 text-green-700">Aktif</Badge>;
      case 'inactive':
        return <Badge className="bg-gray-100 text-gray-700">Tidak Aktif</Badge>;
      case 'out_of_stock':
        return <Badge className="bg-red-100 text-red-700">Stok Habis</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">E-commerce Management</h1>
          <p className="text-gray-600 mt-1">Kelola produk dan penjualan Gradien Unila Store</p>
        </div>
        
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-[#0d7377] hover:bg-[#0a5d61] text-white">
              <Plus className="w-4 h-4 mr-2" />
              Tambah Produk
            </Button>
          </DialogTrigger>
          <ProductDialog
            onSubmit={handleAddProduct}
            onCancel={() => setIsAddDialogOpen(false)}
          />
        </Dialog>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Produk</CardTitle>
              <Package className="h-4 w-4 text-[#0d7377]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalProducts}</div>
              <p className="text-xs text-muted-foreground">
                {activeProducts} produk aktif
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Penjualan</CardTitle>
              <ShoppingCart className="h-4 w-4 text-[#14a085]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{products.reduce((sum, p) => sum + p.sales, 0)}</div>
              <p className="text-xs text-muted-foreground">
                Unit terjual
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-[#2dd4bf]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Rp {totalRevenue.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                Revenue keseluruhan
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Rating Rata-rata</CardTitle>
              <Star className="h-4 w-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{averageRating.toFixed(1)}</div>
              <p className="text-xs text-muted-foreground">
                Dari semua produk
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Filter Produk</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Cari produk..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="w-full sm:w-48">
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Kategori" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua Kategori</SelectItem>
                  <SelectItem value="Apparel">Apparel</SelectItem>
                  <SelectItem value="Accessories">Accessories</SelectItem>
                  <SelectItem value="Digital">Digital</SelectItem>
                  <SelectItem value="Stationery">Stationery</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Products Table */}
      <Card>
        <CardHeader>
          <CardTitle>Daftar Produk</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Produk</TableHead>
                  <TableHead>Kategori</TableHead>
                  <TableHead>Harga</TableHead>
                  <TableHead>Stok</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead>Penjualan</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="w-[70px]">Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProducts.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-10 h-10 rounded-lg object-cover"
                        />
                        <div>
                          <div className="font-medium">{product.name}</div>
                          <div className="text-sm text-gray-500 truncate max-w-[200px]">
                            {product.description}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{product.category}</Badge>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium">Rp {product.price.toLocaleString()}</div>
                        {product.originalPrice && (
                          <div className="text-sm text-gray-500 line-through">
                            Rp {product.originalPrice.toLocaleString()}
                          </div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className={`font-medium ${product.stock === 0 ? 'text-red-600' : product.stock < 10 ? 'text-yellow-600' : 'text-green-600'}`}>
                        {product.stock}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span>{product.rating}</span>
                        <span className="text-gray-500">({product.reviews})</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="font-medium">{product.sales}</span>
                    </TableCell>
                    <TableCell>
                      {getStatusBadge(product.status)}
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem onClick={() => setEditingProduct(product)}>
                            <Edit className="w-4 h-4 mr-2" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Eye className="w-4 h-4 mr-2" />
                            Lihat Detail
                          </DropdownMenuItem>
                          <DropdownMenuItem 
                            onClick={() => handleDeleteProduct(product.id)}
                            className="text-red-600"
                          >
                            <Trash2 className="w-4 h-4 mr-2" />
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
        </CardContent>
      </Card>

      {/* Edit Product Dialog */}
      {editingProduct && (
        <Dialog open={!!editingProduct} onOpenChange={() => setEditingProduct(null)}>
          <ProductDialog
            product={editingProduct}
            onSubmit={handleEditProduct}
            onCancel={() => setEditingProduct(null)}
          />
        </Dialog>
      )}
    </div>
  );
}

// Product Dialog Component
function ProductDialog({ 
  product, 
  onSubmit, 
  onCancel 
}: { 
  product?: Product;
  onSubmit: (data: Partial<Product>) => void;
  onCancel: () => void;
}) {
  const [formData, setFormData] = useState({
    name: product?.name || '',
    description: product?.description || '',
    price: product?.price || 0,
    originalPrice: product?.originalPrice || 0,
    category: product?.category || 'Apparel',
    stock: product?.stock || 0,
    image: product?.image || ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <DialogContent className="max-w-md">
      <DialogHeader>
        <DialogTitle>
          {product ? 'Edit Produk' : 'Tambah Produk Baru'}
        </DialogTitle>
      </DialogHeader>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name">Nama Produk</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
          />
        </div>
        
        <div>
          <Label htmlFor="description">Deskripsi</Label>
          <Textarea
            id="description"
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            required
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="price">Harga</Label>
            <Input
              id="price"
              type="number"
              value={formData.price}
              onChange={(e) => setFormData({...formData, price: Number(e.target.value)})}
              required
            />
          </div>
          <div>
            <Label htmlFor="originalPrice">Harga Asli (Opsional)</Label>
            <Input
              id="originalPrice"
              type="number"
              value={formData.originalPrice}
              onChange={(e) => setFormData({...formData, originalPrice: Number(e.target.value)})}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="category">Kategori</Label>
            <Select value={formData.category} onValueChange={(value) => setFormData({...formData, category: value})}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Apparel">Apparel</SelectItem>
                <SelectItem value="Accessories">Accessories</SelectItem>
                <SelectItem value="Digital">Digital</SelectItem>
                <SelectItem value="Stationery">Stationery</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="stock">Stok</Label>
            <Input
              id="stock"
              type="number"
              value={formData.stock}
              onChange={(e) => setFormData({...formData, stock: Number(e.target.value)})}
              required
            />
          </div>
        </div>
        
        <div>
          <Label htmlFor="image">URL Gambar</Label>
          <Input
            id="image"
            value={formData.image}
            onChange={(e) => setFormData({...formData, image: e.target.value})}
            placeholder="https://example.com/image.jpg"
          />
        </div>
        
        <div className="flex space-x-2 pt-4">
          <Button type="submit" className="flex-1 bg-[#0d7377] hover:bg-[#0a5d61] text-white">
            {product ? 'Update' : 'Tambah'} Produk
          </Button>
          <Button type="button" variant="outline" onClick={onCancel}>
            Batal
          </Button>
        </div>
      </form>
    </DialogContent>
  );
}