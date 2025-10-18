# Coolify Deployment Guide

Bu rehber, T-Rage Studios web sitesini Coolify üzerinde nasıl yayınlayacağınızı açıklar.

## Ön Hazırlık

1. GitHub reponuzun public veya Coolify'ın erişebileceği bir repo olduğundan emin olun
2. Coolify hesabınıza giriş yapın

## Coolify'da Deployment Adımları

### 1. Yeni Application Oluşturma

1. Coolify dashboard'unda **"New Application"** veya **"+ Add Resource"** butonuna tıklayın
2. **"Public Repository"** seçeneğini seçin
3. GitHub repo URL'nizi girin:
   ```
   https://github.com/Emirhan1Arslan/tragestudios.git
   ```
4. Branch olarak **"main"** seçin

### 2. Build Pack Seçimi

- **Build Pack:** `Dockerfile` (otomatik algılanmalı)
- Coolify projede bulunan Dockerfile'ı otomatik olarak kullanacaktır

### 3. Port Ayarları

- **Port:** `80` (Dockerfile'da EXPOSE 80 tanımlı)
- Coolify otomatik olarak bu portu dış dünyaya açacaktır

### 4. Environment Variables (Opsiyonel)

Eğer özel ayarlar yapmanız gerekiyorsa:

```env
VITE_APP_NAME=T-Rage Studios
VITE_CONTACT_EMAIL=info@tragestudios.com
```

**Not:** Build time environment variables Vite tarafından compile esnasında kullanılır.

### 5. Domain Ayarları

1. **"Domains"** bölümünden domain ekleyin
2. Coolify size bir subdomain verebilir veya kendi domain'inizi ekleyebilirsiniz
3. SSL sertifikası otomatik olarak Let's Encrypt ile oluşturulur

### 6. Build ve Deploy

1. **"Deploy"** butonuna tıklayın
2. Build loglarını izleyin:
   - Node.js dependencies yükleniyor
   - Vite build çalışıyor
   - Nginx container oluşturuluyor
3. Deploy tamamlandığında site otomatik olarak yayına alınır

## Build Süreci

Coolify aşağıdaki adımları otomatik olarak yapacak:

```bash
1. Git clone
2. npm ci (dependencies install)
3. npm run build (Vite production build)
4. Nginx container'ı başlat
5. Built files'ları serve et
```

## Health Check

Dockerfile'da tanımlı health check sayesinde Coolify sitenizin sağlıklı çalışıp çalışmadığını kontrol eder:
- Her 30 saniyede bir kontrol
- 5 saniye başlangıç bekleme süresi
- 3 başarısız deneme sonrası unhealthy

## Troubleshooting

### Build Hataları

1. **Node version hatası:** Dockerfile'da Node 20 kullanılıyor, bu güncel bir versiyon
2. **Dependency hatası:** `package.json` dosyasını kontrol edin
3. **Build timeout:** Coolify ayarlarından build timeout süresini artırın

### Runtime Hataları

1. **404 Error:** Nginx yapılandırması SPA routing için ayarlı, sorun olmamalı
2. **Port conflict:** Coolify otomatik port mapping yapar, manuel ayar gereksiz

## Otomatik Deploy (Webhook)

Coolify otomatik olarak webhook kurar:
- GitHub'a her push'da otomatik build ve deploy
- `main` branch'e yapılan her değişiklik otomatik yayına alınır

## Monitoring

Coolify dashboard'undan:
- **Logs:** Real-time application logs
- **Metrics:** CPU, Memory, Network kullanımı
- **Status:** Container durumu ve health check sonuçları

## Backup

Coolify otomatik backup yapmaz, ancak:
- Kodlar GitHub'da güvende
- Her deployment versiyonlanmış
- Gerekirse önceki versiyona rollback yapılabilir

## Önemli Notlar

✅ **Hazır:** Dockerfile ve nginx.conf production-ready
✅ **Optimize:** Multi-stage build ile küçük image boyutu
✅ **Güvenli:** Security headers nginx.conf'da tanımlı
✅ **Hızlı:** Gzip compression aktif
✅ **SEO:** Static asset caching yapılandırılmış

## Domain SSL

Coolify otomatik olarak:
- Let's Encrypt SSL sertifikası oluşturur
- HTTPS'yi zorlar
- Sertifikaları otomatik yeniler

## Maliyetsiz Hosting

Eğer kendi sunucunuzda Coolify kullanıyorsanız:
- Tek maliyet sunucu maliyeti
- Sınırsız deployment
- Sınırsız bandwidth (sunucu limitine bağlı)

---

## Hızlı Başlangıç Özeti

1. Coolify'da **New Application** → **Public Repository**
2. Repo URL: `https://github.com/Emirhan1Arslan/tragestudios.git`
3. Branch: `main`
4. Build Pack: `Dockerfile`
5. **Deploy** butonuna tıkla
6. Domain'i ayarla ve bekle!

Site 2-3 dakika içinde yayında olacak! 🚀
