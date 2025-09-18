import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Code, Briefcase, Trophy, BookOpen, Users, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Programs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const programs = [
    {
      icon: Code,
      title: "Coding Bootcamp",
      description: "Program intensif untuk menguasai programming dari basic hingga advanced level.",
      features: ["Full Stack Development", "Mobile Development", "Data Science", "DevOps"],
      duration: "3 Bulan",
      level: "Beginner - Advanced",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Briefcase,
      title: "Career Preparation",
      description: "Persiapan karir komprehensif untuk masuk ke industri teknologi.",
      features: ["Technical Interview", "Portfolio Building", "CV Writing", "Job Search Strategy"],
      duration: "6 Minggu",
      level: "Intermediate",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: Trophy,
      title: "Competition Team",
      description: "Tim khusus untuk mengikuti kompetisi programming dan hackathon.",
      features: ["Algorithm Training", "Problem Solving", "Team Collaboration", "Competition Strategy"],
      duration: "Ongoing",
      level: "Advanced",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: BookOpen,
      title: "Study Groups",
      description: "Kelompok belajar untuk berbagi knowledge dan diskusi teknologi terkini.",
      features: ["Weekly Meetups", "Peer Learning", "Research Discussion", "Knowledge Sharing"],
      duration: "Weekly",
      level: "All Levels",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: Users,
      title: "Mentorship Program",
      description: "Program mentoring dengan profesional industri dan senior berpengalaman.",
      features: ["1-on-1 Mentoring", "Career Guidance", "Industry Insights", "Network Building"],
      duration: "6 Bulan",
      level: "All Levels",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: Zap,
      title: "Innovation Lab",
      description: "Laboratorium inovasi untuk mengembangkan project teknologi terbaru.",
      features: ["Startup Incubation", "Tech Innovation", "Product Development", "Research & Development"],
      duration: "Flexible",
      level: "Advanced",
      color: "from-emerald-500 to-emerald-600"
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Program <span className="text-blue-600">Unggulan</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Berbagai program yang dirancang khusus untuk mengembangkan skill teknis dan soft skill 
            mahasiswa IT agar siap menghadapi tantangan industri teknologi.
          </p>
        </motion.div>

        {/* Featured Program */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <Card className="overflow-hidden bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Code className="w-8 h-8 mr-3" />
                  <Badge variant="secondary" className="bg-white/20 text-white">Featured Program</Badge>
                </div>
                <h3 className="text-3xl font-bold mb-4">Full Stack Developer Track</h3>
                <p className="text-blue-100 mb-6">
                  Program flagship kami yang telah terbukti menghasilkan 200+ developer profesional. 
                  Kurikulum yang up-to-date dengan standar industri dan mentoring langsung dari praktisi.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="font-semibold">Duration</div>
                    <div className="text-blue-100">6 Bulan</div>
                  </div>
                  <div>
                    <div className="font-semibold">Success Rate</div>
                    <div className="text-blue-100">95%</div>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Daftar Sekarang
                </motion.button>
              </CardContent>
              <div className="p-8">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1540058404349-2e5fabf32d75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjB3b3Jrc2hvcCUyMHN0dWRlbnRzfGVufDF8fHx8MTc1Nzk2MTM4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Coding workshop"
                  className="rounded-xl w-full"
                />
              </div>
            </div>
          </Card>
        </motion.div>

        {/* All Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <CardHeader>
                  <div className={`w-12 h-12 bg-gradient-to-br ${program.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <program.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="group-hover:text-blue-600 transition-colors">
                    {program.title}
                  </CardTitle>
                  <CardDescription>{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Durasi:</span>
                      <span className="font-semibold">{program.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Level:</span>
                      <span className="font-semibold">{program.level}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Materi Utama:</h4>
                      <div className="flex flex-wrap gap-1">
                        {program.features.map((feature, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Siap Memulai Journey Teknologi Anda?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan mahasiswa lainnya yang telah memulai perjalanan karir teknologi mereka bersama kami.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors"
          >
            Lihat Semua Program
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}