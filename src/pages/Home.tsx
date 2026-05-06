import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MessageCircle, ArrowRight, Briefcase, User, Instagram, Headphones, X, ZoomIn, Mic } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

/* Design System: Dark Gradient + Glassmorphism
   - Background: Dark gradient (slate-950 → blue-950 → purple-950)
   - Cards: Glassmorphism (blur + transparency)
   - Primary: Blue (#3B82F6) + Purple accents
   - Animations: Fade-up, scale hover, smooth transitions
*/

// Profile image from public folder
const profileImage = '/profile.jpeg';

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string; title: string; caption: string } | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const services = [
    { icon: Briefcase, title: 'Administrative Services', description: 'Email management, scheduling, document organization' },
    { icon: User, title: 'Personal Assistant Tasks', description: 'Calendar management, meeting coordination, task tracking' },
    { icon: Instagram, title: 'Social Media Management', description: 'Content scheduling, engagement, community management' },
    { icon: Headphones, title: 'Customer Support', description: 'Client communication, inquiry handling, support coordination' },
  ];

  const idealClients = [
    'Real estate agents',
    'Content creators & influencers',
    'Entrepreneurs',
    'Interior designers',
  ];

  const problemsSolved = [
    'Disorganization',
    'Poor communication management',
    'Administrative stress',
    'Time overload',
  ];

  const projects = [
    {
      title: 'Trello Social Media Management System',
      description: 'Designed and implemented a comprehensive Trello workflow system for social media management, streamlining content planning, post scheduling, campaign tracking, and team collaboration across multiple platforms.',
      results: '75% improvement in content organization and publishing efficiency',
      tools: 'Trello, Google Forms, Google Sheets',
      image: '/Trello.jpeg',
      imageAlt: 'Trello social media management board showing organized content workflows',
      imageCaption: 'Trello Board - Social media content planning and campaign management dashboard'
    },
    {
      title: 'Google Forms People Data Collection Hub',
      description: 'Created automated Google Forms with integrated Google Sheets for collecting and managing people\'s details, enabling seamless contact information gathering, survey responses, lead capture, and customer data organization.',
      results: '90% reduction in manual data entry and improved data accuracy',
      tools: 'Google Forms, Google Sheets, Trello',
      image: '/Googleform.jpeg',
      imageAlt: 'Google Forms dashboard showing people data collection and management',
      imageCaption: 'Google Forms - People details collection and data management system'
    },

    {
      title: 'Microsoft Forms Automated Data Collection Portal',
      description: 'Built an end-to-end automated data collection system using Microsoft Forms with conditional logic, integrated Excel dashboards for instant data visualization, and SharePoint for automated document routing and approval workflows. This solution eliminated manual data entry and provided real-time insights for decision making.',
      results: '90% reduction in data processing time and 99% data accuracy',
      tools: 'Microsoft Forms, Excel, SharePoint',
      image: '/Microsoft.jpeg',
      imageAlt: 'Microsoft Forms automated data collection dashboard',
      imageCaption: 'Microsoft Forms - Smart data collection with automated workflows'
    },
  ];

  // Smooth scroll function for navigation links
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to handle "Get In Touch" button click
  const handleGetInTouch = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to handle "Learn More" button click
  const handleLearnMore = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to open image modal
  const openImageModal = (project: typeof projects[0]) => {
    setSelectedImage({
      src: project.image,
      alt: project.imageAlt,
      title: project.title,
      caption: project.imageCaption
    });
  };

  // Function to close image modal
  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 text-white overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeImageModal}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[90vh] bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* Close button */}
              <button
                onClick={closeImageModal}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-all duration-300 hover:scale-110"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Image */}
              <div className="relative h-[70vh] overflow-hidden">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Caption */}
              <div className="p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-2xl font-bold mb-2 text-white">{selectedImage.title}</h3>
                <p className="text-gray-300">{selectedImage.caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full z-50 flex justify-between items-center p-6 bg-black/40 backdrop-blur-md border-b border-white/10"
      >
        <motion.h1
          className="flex items-center gap-2 font-bold text-xl cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <Briefcase className="text-blue-400" size={24} />
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Taiwo VA
          </span>
        </motion.h1>

        <div className="hidden md:flex gap-8">
          {['About', 'Services', 'Projects', 'Contact'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => handleSmoothScroll(e, item.toLowerCase())}
              className="text-gray-300 hover:text-blue-400 transition-colors font-medium cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              {item}
            </motion.a>
          ))}
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Image Section */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center md:justify-end"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-50" />
                <img
                  src={profileImage}
                  alt="Taiwo Abidemi Mariam"
                  className="w-80 h-80 rounded-full object-cover border-4 border-blue-400 shadow-2xl relative z-10"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/320x320?text=Taiwo+VA';
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Text Section */}
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.div variants={itemVariants}>
                <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-semibold border border-blue-400/30 backdrop-blur-sm">
                  Professional Virtual Assistant
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-6xl font-bold leading-tight"
              >
                Taiwo Abidemi <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Mariam</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-xl text-gray-300 leading-relaxed"
              >
                Detail-oriented Virtual Assistant providing reliable administrative support, calendar management, and client communication.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <Button
                  onClick={handleGetInTouch}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 cursor-pointer"
                >
                  Get In Touch
                  <ArrowRight size={20} />
                </Button>
                <Button
                  onClick={handleLearnMore}
                  className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-semibold border border-white/20 backdrop-blur-sm transition-all duration-300 cursor-pointer"
                >
                  Learn More
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-6 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-12 hover:bg-white/15 transition-all duration-300">
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                I started my journey as a Virtual Assistant out of a passion for organization and helping others stay productive. What began as assisting with small tasks grew into a commitment to providing reliable and efficient support to businesses and professionals.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                With a keen eye for detail and a dedication to excellence, I've helped numerous clients streamline their daily operations, reduce administrative burdens, and focus on what truly matters—growing their business. My approach combines proactive problem-solving with clear communication to ensure nothing falls through the cracks.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                Whether it's managing a complex calendar, organizing important documents, or providing seamless customer support, I take pride in being the reliable backbone that allows entrepreneurs and professionals to operate at their best.
              </p>

              {/* Full Width Earth Section */}
              <div className="w-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-5 border border-blue-400/30 flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/40 to-purple-500/40 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Working From</p>
                    <p className="font-semibold text-white">Nigeria | Remote Worldwide</p>
                  </div>
                </div>

                <div className="h-12 w-px bg-gradient-to-b from-transparent via-blue-400/50 to-transparent hidden md:block"></div>

                <div className="flex items-center gap-3">
                  <div>
                    <p className="text-sm text-gray-400">Languages</p>
                    <div className="flex gap-2">
                      <span className="text-white font-medium"> English</span>
                    </div>
                  </div>
                </div>

                <div className="h-12 w-px bg-gradient-to-b from-transparent via-purple-400/50 to-transparent hidden md:block"></div>

                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <div>
                    <p className="text-sm text-gray-400">Status</p>
                    <p className="text-green-400 font-medium">Available for Work</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-20 px-6 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '0px 0px -100px 0px' }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12">Services</h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '0px 0px -100px 0px' }}
              className="grid md:grid-cols-2 gap-6"
            >
              {services.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -10 }}
                    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 hover:bg-white/15 transition-all duration-300 group cursor-pointer"
                  >
                    <Icon className="text-blue-400 mb-4 group-hover:text-purple-400 transition-colors" size={32} />
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-400">{service.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Ideal Clients Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            className="grid md:grid-cols-2 gap-12"
          >
            {/* Ideal Clients */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-12 hover:bg-white/15 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6">Ideal Clients</h3>
              <ul className="space-y-4">
                {idealClients.map((client, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <span className="inline-block w-2 h-2 bg-blue-400 rounded-full" />
                    {client}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Problems Solved */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-12 hover:bg-white/15 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6">Problems I Solve</h3>
              <ul className="space-y-4">
                {problemsSolved.map((problem, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <span className="inline-block w-2 h-2 bg-purple-400 rounded-full" />
                    {problem}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 px-6 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects</h2>
              <p className="text-gray-400 text-lg">Showcasing my expertise in Trello and Google Forms automation</p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '0px 0px -100px 0px' }}
              className="grid md:grid-cols-2 gap-6"
            >
              {projects.map((project, idx) => {
                // Tool image mapping
                const toolImageMap: Record<string, string> = {
                  'Trello': '/Trello.jpeg',
                  'Google Forms': '/Googleform.jpeg',
                  'Microsoft Forms': '/Microsoft.jpeg',
                  
                };

                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -10 }}
                    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl overflow-hidden hover:bg-white/15 transition-all duration-300 group cursor-pointer"
                  >
                    {/* Project Image - Clickable */}
                    <div
                      className="relative cursor-pointer group/image"
                      onClick={() => openImageModal(project)}
                    >
                      <div className="h-64 overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20 relative">
                        <img
                          src={project.image}
                          alt={project.imageAlt}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover/image:scale-110"
                          onError={(e) => {
                            e.currentTarget.src = 'https://via.placeholder.com/800x400/1e293b/3B82F6?text=' + project.title;
                          }}
                        />
                        {/* Zoom overlay */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="bg-white/20 backdrop-blur-md rounded-full p-3 transform scale-90 group-hover/image:scale-100 transition-transform duration-300">
                            <ZoomIn className="w-8 h-8 text-white" />
                          </div>
                        </div>
                      </div>
                     
                    </div>


                    <div className="p-6 pt-4">
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-semibold border border-blue-400/30">
                          Featured Project
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors">{project.title}</h3>
                      <p className="text-gray-400 mb-4 leading-relaxed text-sm">{project.description}</p>

                      <div className="space-y-3 pt-4 border-t border-white/10">
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Key Result</p>
                          <p className="text-green-400 font-semibold">{project.results}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-6 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
              <p className="text-gray-400 text-lg">Let me help you streamline your workflow</p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '0px 0px -100px 0px' }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-12 max-w-2xl"
            >
              <div className="space-y-6">
                <motion.div variants={itemVariants} className="flex items-center gap-4">
                  <Mail className="text-blue-400" size={24} />
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-lg font-semibold">Abidemimariam299@gmail.com</p>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="flex items-center gap-4">
                  <Phone className="text-blue-400" size={24} />
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="text-lg font-semibold">09132883046</p>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="flex items-center gap-4">
                  <MessageCircle className="text-blue-400" size={24} />
                  <div>
                    <p className="text-sm text-gray-400">WhatsApp</p>
                    <p className="text-lg font-semibold">07012997168</p>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="pt-4 border-t border-white/10 space-y-2">
                  <p className="text-sm text-gray-400">Preferred Contact: <span className="text-blue-300 font-semibold">Email</span></p>
                  <p className="text-sm text-gray-400">Response Time: <span className="text-purple-300 font-semibold">24 hours</span></p>
                </motion.div>
              </div>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 mt-8"
              >
                <a
                  href="mailto:Abidemimariam299@gmail.com"
                  className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50"
                >
                  <Mail size={20} />
                  Send Email
                </a>
                <a
                  href="https://wa.me/2347012997168"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold border border-white/20 backdrop-blur-sm flex items-center justify-center gap-2 transition-all duration-300"
                >
                  <MessageCircle size={20} />
                  WhatsApp
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-6 border-t border-white/10 bg-black/40 backdrop-blur-md">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© 2026 Taiwo Abidemi Mariam - Virtual Assistant Portfolio</p>
          <p className="text-sm mt-2">Specializing in Trello Social Media Management & Google Forms Data Collection</p>
        </div>
      </footer>
    </div>
  );
}