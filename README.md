# Tragestudios Website

Modern ve interaktif Tragestudios oyun geliştirme stüdyosu web sitesi.

## Özellikler

- Modern ve koyu tema tasarım
- Framer Motion ile akıcı animasyonlar
- Responsive tasarım (mobil, tablet, desktop)
- Parçacık efektleri ve hover animasyonları
- SEO optimize
- Docker desteği ile kolay deployment

## Teknolojiler

- **React 18** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animasyonlar
- **Lucide React** - İkonlar

## Kurulum

### Gereksinimler

- Node.js 20+
- npm veya yarn

### Yerel Geliştirme

1. Bağımlılıkları yükleyin:
```bash
npm install
```

2. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

3. Tarayıcınızda `http://localhost:3000` adresini açın

### Production Build

```bash
npm run build
npm run preview
```

## Deployment

### Coolify ile Deployment (Önerilen)

Coolify ile tek tıkla deployment için [DEPLOYMENT.md](DEPLOYMENT.md) dosyasına bakın.

**Hızlı Adımlar:**
1. Coolify'da **New Application** → **Public Repository**
2. Repo URL: `https://github.com/Emirhan1Arslan/tragestudios.git`
3. Branch: `main`
4. Build Pack: `Dockerfile` (otomatik algılanır)
5. **Deploy** butonuna tıklayın

Detaylı rehber için: [DEPLOYMENT.md](DEPLOYMENT.md)

### Docker ile Deployment

#### Docker Build

```bash
docker build -t tragestudios-website .
```

#### Docker Run

```bash
docker run -p 8080:80 tragestudios-website
```

#### Docker Compose ile Çalıştırma

```bash
docker-compose up -d
```

Website `http://localhost:8080` adresinde erişilebilir olacaktır.

#### Docker Compose Durdurma

```bash
docker-compose down
```

## Proje Yapısı

```
tragestudios/
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Games.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── ParticleBackground.jsx
│   │   └── Services.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── Dockerfile
├── docker-compose.yml
├── nginx.conf
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Özelleştirme

### Renkler

Renk temasını değiştirmek için `tailwind.config.js` dosyasındaki `primary` renklerini düzenleyin.

### İçerik

- Oyunları düzenlemek için: `src/components/Games.jsx`
- Hizmetleri düzenlemek için: `src/components/Services.jsx`
- İletişim bilgilerini düzenlemek için: `src/components/Contact.jsx`

## Lisans

© 2024 Tragestudios. Tüm hakları saklıdır.
