import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "contact@techmahasiswa.id",
      description: "Kirim email untuk pertanyaan umum"
    },
    {
      icon: Phone,
      title: "WhatsApp",
      value: "+62 812-3456-7890",
      description: "Chat langsung dengan tim kami"
    },
    {
      icon: MapPin,
      title: "Lokasi",
      value: "Gedung IT, Lantai 3",
      description: "Universitas Teknologi Indonesia"
    }
  ];

  const socialChannels = [
    {
      name: "Discord",
      description: "Join server Discord untuk diskusi real-time",
      members: "500+ members",
      color: "from-indigo-500 to-purple-600"
    },
    {
      name: "Telegram",
      description: "Grup Telegram untuk update dan informasi",
      members: "300+ members", 
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Instagram",
      description: "Follow Instagram untuk konten dan event updates",
      members: "1k+ followers",
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Hubungi <span className="text-blue-600">Kami</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Punya pertanyaan tentang program kami? Ingin bergabung atau berkontribusi? 
            Jangan ragu untuk menghubungi tim TechMahasiswa.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Send className="w-6 h-6 mr-3 text-blue-600" />
                  Kirim Pesan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nama Lengkap
                    </label>
                    <Input placeholder="Masukkan nama Anda" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email
                    </label>
                    <Input type="email" placeholder="nama@email.com" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nomor WhatsApp
                  </label>
                  <Input placeholder="+62 812-3456-7890" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subjek
                  </label>
                  <Input placeholder="Tentang apa yang ingin Anda sampaikan?" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Pesan
                  </label>
                  <Textarea 
                    placeholder="Tulis pesan Anda di sini..."
                    className="min-h-[120px]"
                  />
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                    <Send className="w-4 h-4 mr-2" />
                    Kirim Pesan
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & Community */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageCircle className="w-6 h-6 mr-3 text-blue-600" />
                  Informasi Kontak
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{info.title}</h4>
                      <p className="font-medium text-blue-600">{info.value}</p>
                      <p className="text-sm text-gray-600">{info.description}</p>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            {/* Community Channels */}
            <Card>
              <CardHeader>
                <CardTitle>Join Komunitas Kami</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialChannels.map((channel, index) => (
                  <motion.div
                    key={channel.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    className="p-4 rounded-lg border group hover:shadow-md transition-all cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {channel.name}
                        </h4>
                        <p className="text-sm text-gray-600 mb-1">{channel.description}</p>
                        <span className="text-xs text-blue-600 font-medium">{channel.members}</span>
                      </div>
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${channel.color}`}></div>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            {/* Office Hours */}
            <Card>
              <CardHeader>
                <CardTitle>Jam Operasional</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Senin - Jumat</span>
                    <span className="font-semibold">09:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sabtu</span>
                    <span className="font-semibold">10:00 - 15:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Minggu</span>
                    <span className="text-red-500">Tutup</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-700">
                    <strong>Note:</strong> Untuk emergency atau pertanyaan urgent, 
                    hubungi WhatsApp kami kapan saja.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Lokasi Kami</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h4 className="text-xl font-semibold mb-4">Universitas Teknologi Indonesia</h4>
                  <p className="text-gray-600 mb-4">
                    Kantor TechMahasiswa berlokasi di Gedung IT Lantai 3, mudah diakses dari 
                    berbagai fakultas dan dekat dengan area parkir mahasiswa.
                  </p>
                  <div className="space-y-2">
                    <p className="flex items-center text-gray-700">
                      <MapPin className="w-4 h-4 mr-2 text-blue-600" />
                      Jl. Teknologi No. 123, Jakarta Selatan
                    </p>
                    <p className="text-sm text-gray-600">
                      Buka setiap hari Senin-Sabtu, kecuali hari libur nasional
                    </p>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin className="w-12 h-12 mx-auto mb-2" />
                    <p>Interactive Map</p>
                    <p className="text-sm">Coming Soon</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}