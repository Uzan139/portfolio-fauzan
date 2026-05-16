import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const profile = {
  nama: "Fauzan",
  role: "Mahasiswa Rekayasa Perangkat Lunak",
  univ: "Universitas Pendidikan Indonesia (UPI)",
  email: "uzanardi139@upi.edu",
  sosial: {
    github: "https://github.com/Uzan139",
    linkedin: "https://linkedin.com/in/fauzan-ardiansyah-99a1973a5",
    instagram: "https://instagram.com/uzanardi_",
  },
};

const aboutCards = [
  {
    title: "UI/UX Design",
    icon: "🎨",
    description:
      "Perancangan antarmuka berpusat pada pengguna dengan pendekatan design thinking yang sistematis serta penerapan pola desain yang telah tervalidasi.",
  },
  {
    title: "Frontend Development",
    icon: "👩🏻‍💻",
    description:
      "Pengembangan kode yang bersih, terstruktur, dan mudah dipelihara menggunakan React, TypeScript, serta teknologi web modern.",
  },
  {
    title: "QA/QC",
    icon: "✔",
    href: "https://drive.google.com/drive/folders/1M8jwhM_Qg8Sc_m5_oGTQXSzJKkbRFg_X?usp=sharing",
    description:
      "Pendekatan berorientasi kualitas melalui pengujian sistematis, analisis edge case, serta proses validasi yang terstruktur.",
  },
  {
    title: "organizational experience",
    icon: "👥",
    href: "https://drive.google.com/drive/folders/1DtlIw29Dr6JBrUnwV9Lpf__JDo9gMMIg?usp=sharing",
    description:
      "Pengalaman dalam organisasi yang memperkuat kemampuan leadership, kolaborasi tim, problem solving, serta komunikasi efektif dalam merancang dan menjalankan program kerja.",
  },
];

const projects = [
  {
    title: "Aplikasi Bercocok Tanam",
    badge: "Web App",
    type: "video",
    media: "/video_project_taneasy.mp4",
    description:
      "Platform pertanian komprehensif yang dirancang untuk memberdayakan petani dan penghobi tanaman. Mengintegrasikan fitur jual-beli alat dan bahan tani, pusat edukasi teknik bercocok tanam, serta fitur Carbon Calculator untuk mendukung praktik pertanian berkelanjutan.",
    tags: ["Next.js", "Machine Learning", "UI/UX", "Frontend"],
    demo: "https://www.figma.com/design/1WkbnLv1kMASV2NCLmqqQz/TanEasy-New-Version?t=ZvbHYBwWjxPrU7Kg-1",
    source: "https://github.com/taneasy-company",
  },
  {
    title: "Velocity Adlaunch",
    badge: "Web App",
    type: "video",
    media: "/video_project_velocity.mp4",
    description:
      "Alat manajemen periklanan inovatif yang menyederhanakan proses pembuatan iklan. Dengan memanfaatkan Meta Ads API, proyek ini memungkinkan integrasi yang mulus untuk peluncuran dan manajemen kampanye secara otomatis.",
    tags: ["Next.js", "UI/UX", "Meta Ads API"],
    demo: "#",
    source: "#",
  },
  {
    title: "QA/QC",
    badge: "Web App",
    type: "image",
    media: "/qa-qc.png",
    description:
      "Spesialis penjaminan kualitas yang berfokus pada pengiriman perangkat lunak berkinerja tinggi melalui pengujian fungsional, non-fungsional, identifikasi bug, dan validasi pengalaman pengguna.",
    tags: ["Integration Test", "Functional Test", "Smoke Test"],
    demo: "#",
    source: "#",
  },
  {
    title: "UI/UX Designer",
    badge: "Web App",
    type: "image",
    media: "/ui-ux-design.jpeg",
    description:
      "Desainer yang berpusat pada pengguna, berfokus pada antarmuka digital yang intuitif melalui wireframe, prototipe high-fidelity, dan sistem desain yang menjembatani estetika dengan fungsionalitas.",
    tags: ["Figma", "Moodboard"],
    demo: "https://www.figma.com/design/i6J5M9LReiUVKXDLHBiWXN/CleanPlus-App?node-id=0-1&t=HEPZTVpBzpJolxXu-1",
    source: "#",
  },
];

function ExternalIcon() {
  return <span aria-hidden="true">↗</span>;
}

function GithubIcon() {
  return <span aria-hidden="true">⌘</span>;
}

export default function HomePage() {
  return (
    <main>
      <header className="hero-container">
        <section className="hero-content" aria-label="Perkenalan">
          <p className="subtitle">HALO, SAYA</p>
          <h1>
            {profile.nama} <br />
            <span className="highlight">{profile.role}</span>
          </h1>

          <p className="description">
            Saya adalah {profile.role} di {profile.univ} yang tertarik pada
            pengembangan web, quality assurance, dan software engineering.
          </p>

          <div className="cta-buttons">
            <a href="#projects" className="btn btn-primary">
              Lihat Proyek
            </a>
            <a
              href={`https://mail.google.com/mail/?view=cm&to=${profile.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Hubungi Saya
            </a>
          </div>

          <div className="social-links">
  <a
    href={profile.sosial.github}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
  >
    <FaGithub />
  </a>

  <a
    href={profile.sosial.linkedin}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
  >
    <FaLinkedin />
  </a>

  <a
    href={profile.sosial.instagram}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
  >
    <FaInstagram />
  </a>
</div>
        </section>

        <div className="hero-image">
          <img src="/foto-ozan.jpg" alt={`Foto profil ${profile.nama}`} loading="lazy" />
        </div>
      </header>

      <section className="about-modern" id="about">
        <div className="container">
          <div className="about-heading">
            <span className="about-eyebrow">TENTANG SAYA</span>
            <h2>Fondasi Teknis yang Terintegrasi dengan Design Thinking</h2>
            <p>
              Saya menerapkan pendekatan rekayasa perangkat lunak yang
              menyeimbangkan ketelitian teknis dengan empati terhadap pengguna,
              guna menghasilkan solusi yang andal secara fungsional, sistematis,
              dan berorientasi pada kebutuhan pengguna.
            </p>
          </div>

          <div className="about-cards">
            {aboutCards.map((card) => (
              <a
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="about-card"
                key={card.title}
              >
                <div className="about-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </a>
            ))}
          </div>

          <div className="about-education">
            <h3>Pendidikan dan Latar Belakang</h3>
            <ul>
              <li>
                <strong>Status Saat Ini:</strong> Mahasiswa Rekayasa Perangkat
                Lunak, Universitas Pendidikan Indonesia (UPI)
              </li>
              <li>
                <strong>Bidang Fokus:</strong> Frontend Development, UI/UX
                Design, Quality Assurance, dan Teknologi Web
              </li>
              <li>
                <strong>Pendekatan Kerja:</strong> Pemecahan masalah secara
                sistematis dengan penekanan pada kualitas kode, konsistensi
                design system, serta implementasi yang realistis dan terukur.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="project-section" id="projects">
        <div className="container">
          <div className="section-header">
            <p className="subtitle-centered">PORTOFOLIO</p>
            <h2>Proyek Terbaru</h2>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card-modern" key={project.title}>
                <div className="project-media">
                  {project.type === "video" ? (
                    <video autoPlay muted loop playsInline>
                      <source src={project.media} type="video/mp4" />
                      Browser Anda tidak mendukung video.
                    </video>
                  ) : (
                    <img src={project.media} alt={project.title} loading="lazy" />
                  )}
                  <span className="project-badge">{project.badge}</span>
                </div>

                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="project-actions">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalIcon /> Lihat Proyek
                    </a>
                    <a href={project.source} target="_blank" rel="noopener noreferrer">
                      <GithubIcon /> Kode Sumber
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
