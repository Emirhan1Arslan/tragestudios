import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send, Github, Twitter, Linkedin } from 'lucide-react'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Mesajınız alındı! En kısa sürede size dönüş yapacağız.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'info@tragestudios.com',
      link: 'mailto:info@tragestudios.com',
    },
    {
      icon: Phone,
      title: 'Telefon',
      value: '+90 (555) 123-4567',
      link: 'tel:+905551234567',
    },
    {
      icon: MapPin,
      title: 'Adres',
      value: 'İstanbul, Türkiye',
      link: '#',
    },
  ]

  const socials = [
    { icon: Github, link: 'https://github.com', label: 'GitHub' },
    { icon: Twitter, link: 'https://twitter.com', label: 'Twitter' },
    { icon: Linkedin, link: 'https://linkedin.com', label: 'LinkedIn' },
  ]

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">İletişime Geçin</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Projeleriniz için bizimle iletişime geçin. Size yardımcı olmaktan mutluluk duyarız.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">İletişim Bilgileri</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <motion.a
                      key={index}
                      href={info.link}
                      whileHover={{ x: 10 }}
                      className="flex items-start space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-primary-500/50 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500/30 transition-colors">
                        <Icon className="w-6 h-6 text-primary-400" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 mb-1">{info.title}</div>
                        <div className="text-white font-medium">{info.value}</div>
                      </div>
                    </motion.a>
                  )
                })}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Sosyal Medya</h3>
              <div className="flex space-x-4">
                {socials.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="w-12 h-12 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 flex items-center justify-center hover:border-primary-500/50 hover:bg-primary-500/10 transition-colors"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5 text-gray-400 hover:text-primary-400" />
                    </motion.a>
                  )
                })}
              </div>
            </div>

            {/* Decorative Element */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="w-64 h-64 bg-primary-500/10 rounded-full blur-3xl" />
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                  Adınız
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-colors text-white"
                  placeholder="Ad Soyad"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-colors text-white"
                  placeholder="ornek@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                  Konu
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-colors text-white"
                  placeholder="Mesaj konusu"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-colors text-white resize-none"
                  placeholder="Mesajınızı buraya yazın..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-primary-500 hover:bg-primary-600 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors group"
              >
                <span>Mesaj Gönder</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
