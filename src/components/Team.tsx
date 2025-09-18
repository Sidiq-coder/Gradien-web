import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const leadership = [
    {
      name: "Ahmad Rizki",
      role: "Ketua Umum",
      description: "Full Stack Developer dengan 3+ tahun pengalaman di startup teknologi",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      github: "#",
      email: "ahmad@techmahasiswa.id"
    },
    {
      name: "Sari Indah",
      role: "Wakil Ketua",
      description: "Data Scientist yang passionate dalam AI/ML dan pengembangan komunitas",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      github: "#",
      email: "sari@techmahasiswa.id"
    },
    {
      name: "Budi Santoso",
      role: "Sekretaris",
      description: "Mobile Developer dengan expertise di React Native dan Flutter",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      github: "#",
      email: "budi@techmahasiswa.id"
    },
    {
      name: "Maya Putri",
      role: "Bendahara",
      description: "UI/UX Designer yang berpengalaman dalam design thinking dan user research",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b8d5?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      github: "#",
      email: "maya@techmahasiswa.id"
    }
  ];

  const divisions = [
    {
      title: "Programming Division",
      description: "Fokus pada pengembangan skill programming dan software development",
      members: "25+ Members",
      lead: "John Doe",
      technologies: ["JavaScript", "Python", "Java", "Go", "Rust"]
    },
    {
      title: "Data Science Division",
      description: "Mengembangkan kemampuan analisis data dan machine learning",
      members: "18+ Members",
      lead: "Jane Smith",
      technologies: ["Python", "R", "TensorFlow", "PyTorch", "SQL"]
    },
    {
      title: "Design Division",
      description: "Mengasah skill UI/UX design dan visual communication",
      members: "15+ Members",
      lead: "Alex Johnson",
      technologies: ["Figma", "Adobe XD", "Sketch", "Photoshop", "Illustrator"]
    },
    {
      title: "Mobile Division",
      description: "Spesialisasi dalam pengembangan aplikasi mobile native dan cross-platform",
      members: "20+ Members",
      lead: "Sarah Lee",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Xamarin"]
    },
    {
      title: "Cloud & DevOps",
      description: "Mengelola infrastruktur cloud dan automation deployment",
      members: "12+ Members",
      lead: "Mike Wilson",
      technologies: ["AWS", "Azure", "Docker", "Kubernetes", "Jenkins"]
    },
    {
      title: "Cybersecurity",
      description: "Fokus pada keamanan sistem dan ethical hacking",
      members: "10+ Members",
      lead: "Emma Davis",
      technologies: ["Penetration Testing", "Network Security", "Cryptography", "OSINT"]
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tim <span className="text-blue-600">Leadership</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Dikelola oleh mahasiswa berpengalaman dan passionate yang berkomitmen untuk 
            memajukan ekosistem teknologi di lingkungan kampus.
          </p>
        </motion.div>

        {/* Leadership Team */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {leadership.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="text-center group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden group-hover:scale-110 transition-transform duration-300">
                      <ImageWithFallback
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-6">{member.description}</p>
                  <div className="flex justify-center space-x-3">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href={member.linkedin}
                      className="w-8 h-8 bg-blue-100 hover:bg-blue-200 rounded-full flex items-center justify-center transition-colors"
                    >
                      <Linkedin className="w-4 h-4 text-blue-600" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href={member.github}
                      className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                    >
                      <Github className="w-4 h-4 text-gray-600" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href={`mailto:${member.email}`}
                      className="w-8 h-8 bg-green-100 hover:bg-green-200 rounded-full flex items-center justify-center transition-colors"
                    >
                      <Mail className="w-4 h-4 text-green-600" />
                    </motion.a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Divisions */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Divisi <span className="text-blue-600">Spesialisasi</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {divisions.map((division, index) => (
              <motion.div
                key={division.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {division.title}
                      </h4>
                      <span className="text-sm text-blue-600 font-semibold bg-blue-50 px-2 py-1 rounded">
                        {division.members}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{division.description}</p>
                    <div className="mb-4">
                      <span className="text-sm font-semibold text-gray-700">Lead: </span>
                      <span className="text-sm text-blue-600">{division.lead}</span>
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold text-gray-700 mb-2">Tech Stack:</h5>
                      <div className="flex flex-wrap gap-1">
                        {division.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-16 bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Bergabung dengan Tim Kami
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Kami selalu mencari mahasiswa yang passionate dan berkomitmen untuk bergabung 
            dalam mengembangkan komunitas teknologi. Posisi leadership dan divisi terbuka sepanjang tahun.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Daftar Sebagai Member
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Apply Leadership Position
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}