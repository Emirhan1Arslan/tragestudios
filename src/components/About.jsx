import { motion } from 'framer-motion'
import { Target, Rocket, Heart, Award } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Misyonumuz',
      description: 'Oyun sektöründe yenilikçi ve kaliteli ürünler sunarak oyuncu deneyimini en üst düzeye çıkarmak.',
    },
    {
      icon: Rocket,
      title: 'Vizyonumuz',
      description: 'Global oyun pazarında tanınan ve tercih edilen bir stüdyo olmak.',
    },
    {
      icon: Heart,
      title: 'Değerlerimiz',
      description: 'Yaratıcılık, kalite, tutku ve oyuncu odaklı yaklaşım.',
    },
    {
      icon: Award,
      title: 'Hedefimiz',
      description: 'Her projede mükemmellik standartlarını yakalamak ve aşmak.',
    },
  ]

  const stats = [
    { value: '50+', label: 'Proje Tamamlandı' },
    { value: '10+', label: 'Aktif Oyun' },
    { value: '1M+', label: 'Mutlu Oyuncu' },
    { value: '25+', label: 'Takım Üyesi' },
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Hakkımızda</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Tragestudios, tutkulu bir ekiple oyun ve yazılım geliştirme alanında
            yenilikçi çözümler sunan bir stüdyodur. 2020'den beri sektörde aktif
            olarak hizmet vermekteyiz.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
            >
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 card-glow"
              >
                <div className="relative mb-4">
                  <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary-400" />
                  </div>
                  <div className="absolute inset-0 blur-xl bg-primary-500 opacity-20" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default About
