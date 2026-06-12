<div align="center">

# ✦ Durga Prasad — Portfolio

### Full Stack Developer · Backend Engineer · API Architect

[![Live Demo](https://img.shields.io/badge/🌐_Portfolio-Live_Site-6366f1?style=for-the-badge&logoColor=white)](https://durga-portfolio.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-Durga1534-181717?style=for-the-badge&logo=github)](https://github.com/Durga1534)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-durgaprasad23-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/durgaprasad23)
[![Email](https://img.shields.io/badge/Email-Contact_Me-EA4335?style=for-the-badge&logo=gmail)](mailto:kondurudurgaprasad.2@gmail.com)

![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white)

</div>

---

## 🖥️ Overview

A **production-grade developer portfolio** built to stand out with recruiters. Features a split-layout hero with terminal aesthetic, experience section, project case studies, JSON-LD structured data, and optimized SEO — all in Next.js 16.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🎯 **Split Hero Layout** | Asymmetric design with terminal preview and featured project spotlight |
| 📖 **Case Study Pages** | Deep-dive writeups for FreelanceFlow and JobSense AI |
| 💼 **Experience Section** | Shipped products, open source, and credentials |
| 📊 **Real Metrics** | 6 shipped apps, 4 live deploys, 3 production backends |
| 🔤 **Custom Typography** | Syne (display) + DM Sans (body) via `next/font` |
| 🗂️ **Project Cards** | Always-visible links on mobile, `next/image` optimization |
| 🔍 **SEO** | Dynamic OG image, sitemap, robots.txt, JSON-LD schema |
| ♿ **Accessibility** | Skip link, focus rings, keyboard-navigable controls |
| 📬 **EmailJS Contact** | Working contact form with error handling |
| 📱 **Fully Responsive** | Mobile drawer navbar, adaptive grids |

---

## 🛠️ Tech Stack

```
Frontend     Next.js 16 · React 19 · TypeScript · Tailwind CSS v4
Animations   Framer Motion · CSS keyframes
Typography   Syne · DM Sans (next/font)
Email        @emailjs/browser
Deployment   Vercel
```

---

## 📁 Project Structure

```
Portfolio/
├── app/
│   ├── globals.css              # Design system, animations, typography
│   ├── layout.tsx               # Fonts, metadata, JSON-LD
│   ├── page.tsx                 # Page assembly
│   ├── sitemap.ts               # Auto-generated sitemap
│   ├── robots.ts                # Crawler rules
│   ├── opengraph-image.tsx      # Dynamic OG image
│   └── projects/[slug]/         # Case study pages
├── components/
│   ├── HeroSection.tsx          # Split layout + terminal
│   ├── About.tsx                # Bio, stats, education
│   ├── Experience.tsx           # Work & shipped products
│   ├── Skills.tsx               # Tab-filtered skill grid
│   ├── Projects.tsx             # Project cards + case study links
│   └── Contact.tsx              # EmailJS form
├── lib/
│   ├── site.ts                  # Site config, metrics, experience data
│   └── projects.ts              # Shared project + case study data
└── public/
    ├── Profile.jpg
    └── project screenshots
```

---

## 🚀 Getting Started

```bash
git clone https://github.com/Durga1534/Portfolio.git
cd Portfolio
npm install
cp .env.example .env.local   # Add EmailJS credentials
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment Variables

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

---

## 📦 Build & Deploy

```bash
npm run build
npm start
```

Update `siteConfig.url` in `lib/site.ts` with your deployed domain before going live.

---

## 🔗 Case Studies

| Project | Route |
|---|---|
| FreelanceFlow | `/projects/freelanceflow` |
| JobSense AI | `/projects/jobsense-ai` |

---

<div align="center">

**Designed & built by [Durga Prasad](https://github.com/Durga1534)**

*Full Stack Developer · Available for opportunities*

</div>
