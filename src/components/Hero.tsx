import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight, Play, Users, Award, Code } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="min-h-screen relative overflow-hidden bg-gradient-to-br from-white via-[#e6f7f7] to-[#b8f2f0]">
      {/* Background Elements */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0"
      >
        <div className="absolute top-10 left-5 sm:top-20 sm:left-20 w-32 h-32 sm:w-72 sm:h-72 bg-[#0d7377] rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-10 right-5 sm:bottom-20 sm:right-20 w-48 h-48 sm:w-96 sm:h-96 bg-[#14a085] rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] bg-[#2dd4bf] rounded-full opacity-5 blur-3xl"></div>
      </motion.div>

      <div className="container mx-auto px-3 sm:px-4 lg:px-6 pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] lg:min-h-[calc(100vh-6rem)]">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center px-3 sm:px-4 py-2 bg-[#b8f2f0] text-[#0d7377] rounded-full text-xs sm:text-sm font-medium"
            >
              <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              <span className="hidden sm:inline">Gerakan Digital Ekosistem Nusantara</span>
              <span className="sm:hidden">GRADIEN</span>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                <span className="block sm:inline">Bergabung dengan</span>
                <span className="text-gradien-gradient block">
                  Gradien Unila
                </span>
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-sm sm:text-base lg:text-lg text-[#0d7377] mt-2 tracking-wide"
              >
                Gerakan Digital Ekosistem Nusantara
              </motion.p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
              Komunitas mahasiswa teknologi yang fokus pada pengembangan skill programming, 
              networking, dan mempersiapkan karir di industri tech.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center lg:justify-start"
            >
              <div className="flex items-center space-x-3 justify-center lg:justify-start">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0d7377] rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Anggota Aktif</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 justify-center lg:justify-start">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#14a085] rounded-full flex items-center justify-center">
                  <Code className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-gray-900">50+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Workshop</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 justify-center lg:justify-start">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#2dd4bf] rounded-full flex items-center justify-center">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-gray-900">100+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Alumni Sukses</div>
                </div>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="w-full sm:w-auto bg-[#0d7377] hover:bg-[#0a5d61] text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg">
                  Bergabung Sekarang
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto border-[#0d7377] text-[#0d7377] hover:bg-[#e6f7f7] px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
                >
                  <Play className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                  Lihat Video
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-first lg:order-last"
          >
            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative z-10"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                alt="Gradien Unila Community"
                className="rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-md mx-auto lg:max-w-none"
              />
            </motion.div>

            {/* Floating Cards */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-4 z-20 hidden sm:block"
            >
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-[#0d7377] to-[#14a085] rounded-full flex items-center justify-center">
                  <Code className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm sm:font-semibold text-gray-900">Next.js Workshop</div>
                  <div className="text-xs sm:text-sm text-gray-600">Sabtu, 20 Jan 2024</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute -top-3 -right-3 sm:-top-6 sm:-right-6 bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-4 z-20 hidden sm:block"
            >
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-[#14a085] to-[#2dd4bf] rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm sm:font-semibold text-gray-900">Study Group</div>
                  <div className="text-xs sm:text-sm text-gray-600">15 orang bergabung</div>
                </div>
              </div>
            </motion.div>

            {/* Background Decorative Elements */}
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 border-2 border-[#b8f2f0] rounded-full opacity-30 -z-10"
            ></motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-[#0d7377] rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 sm:h-3 bg-[#0d7377] rounded-full mt-1 sm:mt-2"
          ></motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}