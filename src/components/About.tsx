import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Target, Heart, Users, Lightbulb, ArrowRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      icon: Target,
      title: "Fokus pada Excellence",
      description: "Kami berkomitmen untuk memberikan pengalaman belajar terbaik dan menciptakan standar tinggi dalam setiap kegiatan.",
      color: "from-[#0d7377] to-[#14a085]"
    },
    {
      icon: Heart,
      title: "Komunitas yang Supportif",
      description: "Membangun lingkungan yang inklusif dimana setiap anggota dapat berkembang dan saling mendukung.",
      color: "from-[#14a085] to-[#2dd4bf]"
    },
    {
      icon: Lightbulb,
      title: "Inovasi dan Kreativitas",
      description: "Mendorong pemikiran kreatif dan inovatif untuk menghadapi tantangan teknologi masa depan.",
      color: "from-[#2dd4bf] to-[#67e8f9]"
    }
  ];

  const stats = [
    { number: "3+", label: "Tahun Berdiri", description: "Melayani mahasiswa Unila" },
    { number: "500+", label: "Anggota Aktif", description: "Dari berbagai jurusan" },
    { number: "50+", label: "Event & Workshop", description: "Setiap tahunnya" },
    { number: "100+", label: "Alumni Sukses", description: "Bekerja di tech companies" }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Tentang <span className="text-gradien-gradient">Gradien Unila</span>
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-3 sm:mb-4"
          >
            <p className="text-sm sm:text-base text-[#0d7377] tracking-wide font-medium">
              GERAKAN DIGITAL EKOSISTEM NUSANTARA
            </p>
          </motion.div>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            Kami adalah komunitas mahasiswa teknologi di Universitas Lampung yang berdedikasi 
            untuk mengembangkan ekosistem IT dan mempersiapkan generasi tech talent masa depan.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-16 sm:mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative z-10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop"
                alt="Gradien Unila Team"
                className="rounded-xl sm:rounded-2xl shadow-xl w-full"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-3 -left-3 sm:-top-6 sm:-left-6 w-16 h-16 sm:w-24 sm:h-24 bg-[#b8f2f0] rounded-xl sm:rounded-2xl -z-10"></div>
            <div className="absolute -bottom-3 -right-3 sm:-bottom-6 sm:-right-6 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-br from-[#0d7377] to-[#14a085] rounded-xl sm:rounded-2xl opacity-20 -z-10"></div>
            
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-4 z-20 hidden sm:block"
            >
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-[#0d7377] to-[#14a085] rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm sm:font-semibold text-gray-900">Estd. 2021</div>
                  <div className="text-xs sm:text-sm text-gray-600">Universitas Lampung</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4 sm:space-y-6 order-1 lg:order-2"
          >
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                Membangun Masa Depan Teknologi Indonesia
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Gradien Unila hadir sebagai wadah bagi mahasiswa yang passionate di bidang teknologi. 
                Kami percaya bahwa dengan kolaborasi, pembelajaran berkelanjutan, dan dedikasi, 
                kita dapat menciptakan dampak positif dalam industri teknologi Indonesia.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Sejak 2021, kami telah menjadi rumah bagi ratusan mahasiswa untuk berkembang, 
                berkreasi, dan mempersiapkan diri menghadapi tantangan dunia tech yang dinamis.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-base sm:text-lg font-semibold text-gray-900">Yang Kami Tawarkan:</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#0d7377] rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-gray-600">Workshop dan bootcamp programming</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#14a085] rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-gray-600">Mentorship dari industry experts</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#2dd4bf] rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-gray-600">Project collaboration dan networking</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#0d7377] rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-gray-600">Career preparation dan job placement</span>
                </li>
              </ul>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="w-full sm:w-auto bg-[#0d7377] hover:bg-[#0a5d61] text-white px-6 py-3">
                Pelajari Lebih Lanjut
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16 sm:mb-20"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
            Nilai-Nilai Kami
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <Card className="text-center hover:shadow-xl transition-all duration-300 group h-full">
                  <CardContent className="p-6 sm:p-8">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${value.color} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <value.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-[#0d7377] transition-colors">
                      {value.title}
                    </h4>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="bg-gradient-to-r from-[#e6f7f7] to-[#b8f2f0] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12"
        >
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              Gradien Unila dalam Angka
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Pencapaian yang membanggakan dalam perjalanan kami
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0d7377] mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-xs sm:text-sm text-gray-600">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}