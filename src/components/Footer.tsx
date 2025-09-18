import { motion } from 'motion/react';
import { 
  Github, 
  Instagram, 
  Linkedin, 
  Mail, 
  MapPin, 
  Phone,
  ArrowUp
} from 'lucide-react';
import gradienLogo from 'figma:asset/ae495aabe004ee9e291840853315a29e5347ac5a.png';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const smoothScrollTo = (elementId: string) => {
    const element = document.querySelector(elementId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      smoothScrollTo(href);
    }
  };

  const footerSections = [
    {
      title: "Quick Links",
      links: [
        { label: "Tentang Kami", href: "#about" },
        { label: "Program", href: "#programs" },
        { label: "Artikel", href: "#articles" },
        { label: "E-commerce", href: "#ecommerce" },
        { label: "Tim", href: "#team" },
        { label: "Kontak", href: "#contact" }
      ]
    },
    {
      title: "Programs",
      links: [
        { label: "Coding Bootcamp", href: "#" },
        { label: "Career Preparation", href: "#" },
        { label: "Study Groups", href: "#" },
        { label: "Mentorship", href: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "#" },
        { label: "Documentation", href: "#" },
        { label: "Tutorials", href: "#" },
        { label: "FAQ", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "mailto:contact@gradienunila.id", label: "Email" }
  ];

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Main Footer */}
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1 md:col-span-2 lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <div className="flex items-start space-x-3 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center overflow-hidden bg-white flex-shrink-0">
                  <img 
                    src={gradienLogo} 
                    alt="Gradien Unila Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="min-w-0">
                  <span className="text-lg sm:text-xl lg:text-2xl font-bold block">Gradien Unila</span>
                  <p className="text-xs sm:text-sm text-[#14a085] mt-1 tracking-wide leading-tight">
                    Gerakan Digital Ekosistem Nusantara
                  </p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Membangun masa depan teknologi melalui komunitas mahasiswa yang passionate 
                dan kolaboratif dalam mengembangkan skill IT di Universitas Lampung.
              </p>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3"
            >
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-[#14a085] mt-0.5 flex-shrink-0" />
                <span className="text-sm">Gedung IT Lt.3, Universitas Lampung</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-[#14a085] flex-shrink-0" />
                <span className="text-sm">+62 812-3456-7890</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-[#14a085] flex-shrink-0" />
                <span className="text-sm">contact@gradienunila.id</span>
              </div>
            </motion.div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="lg:col-span-1"
            >
              <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">{section.title}</h3>
              <ul className="space-y-2 sm:space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-sm text-gray-300 hover:text-[#14a085] transition-colors block cursor-pointer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800"
        >
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Stay Updated</h3>
              <p className="text-sm text-gray-300">
                Dapatkan update terbaru tentang event, workshop, dan program dari Gradien Unila.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#14a085] transition-colors text-sm"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#0d7377] hover:bg-[#0a5d61] px-4 sm:px-6 py-3 rounded-lg font-semibold transition-colors text-sm whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6">
          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:justify-between md:items-center">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-gray-400 text-xs sm:text-sm text-center md:text-left"
            >
              © 2024 Gradien Unila. All rights reserved. Made with ❤️ by students, for students.
            </motion.div>

            {/* Social Links & Back to Top */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center md:justify-end items-center space-x-3 sm:space-x-4"
            >
              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-8 h-8 bg-gray-800 hover:bg-[#0d7377] rounded-lg flex items-center justify-center transition-colors group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4 text-gray-400 group-hover:text-white" />
                  </motion.a>
                ))}
              </div>

              {/* Back to Top */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-8 h-8 bg-gray-800 hover:bg-[#0d7377] rounded-lg flex items-center justify-center transition-colors group ml-2"
                aria-label="Back to top"
              >
                <ArrowUp className="w-4 h-4 text-gray-400 group-hover:text-white" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-[#0d7377] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-[#14a085] rounded-full blur-2xl"></div>
      </div>
    </footer>
  );
}