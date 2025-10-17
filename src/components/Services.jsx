import { motion } from 'framer-motion'
import { Code2, Palette, Smartphone, Globe, Database, Shield } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: 'Oyun Geliştirme',
      description: 'Unity, Unreal Engine ve özel motorlarla profesyonel oyun geliştirme hizmetleri.',
      features: ['PC/Console Oyunlar', 'Mobile Games', 'VR/AR Deneyimler'],
    },
    {
      icon: Palette,
      title: 'Game Design',
      description: 'Yaratıcı ve etkileyici oyun mekanikleri ve hikaye tasarımı.',
      features: ['Level Design', 'Character Design', 'UI/UX Design'],
    },
    {
      icon: Smartphone,
      title: 'Mobil Uygulama',
      description: 'iOS ve Android platformları için native ve cross-platform uygulamalar.',
      features: ['React Native', 'Flutter', 'Swift/Kotlin'],
    },
    {
      icon: Globe,
      title: 'Web Geliştirme',
      description: 'Modern web teknolojileriyle ölçeklenebilir ve performanslı web uygulamaları.',
      features: ['React/Next.js', 'Node.js Backend', 'Cloud Solutions'],
    },
    {
      icon: Database,
      title: 'Backend Sistemler',
      description: 'Güvenilir ve ölçeklenebilir sunucu tarafı çözümleri ve API geliştirme.',
      features: ['REST/GraphQL API', 'Microservices', 'Real-time Systems'],
    },
    {
      icon: Shield,
      title: 'Güvenlik & Test',
      description: 'Kapsamlı test süreçleri ve güvenlik analizleri.',
      features: ['QA Testing', 'Security Audit', 'Performance Testing'],
    },
  ]

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Hizmetlerimiz</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Oyun geliştirmeden web çözümlerine kadar geniş yelpazede profesyonel hizmetler
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 card-glow transition-all duration-300"
              >
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-primary-400" />
                  </div>
                  <div className="absolute inset-0 blur-2xl bg-primary-500 opacity-0 group-hover:opacity-30 transition-opacity" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover effect line */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex items-center text-primary-400 font-semibold group-hover:translate-x-2 transition-transform">
                    Daha Fazla Bilgi
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
