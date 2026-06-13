import { useEffect, useState } from 'react'
import {
  ArrowLeft,
  Award,
  BookOpenText,
  BriefcaseBusiness,
  Globe2,
  GraduationCap,
  Gavel,
  Landmark,
  Mail,
  MapPin,
  Menu,
  Phone,
  Scale,
  ShieldCheck,
  UserRound,
  X,
} from 'lucide-react'
import {
  contact,
  credentials,
  insights,
  projects,
  services,
  team,
} from './data/siteContent'

const iconMap = {
  BookOpenText,
  BriefcaseBusiness,
  Gavel,
  Landmark,
  Scale,
  ShieldCheck,
}

const navLinks = [
  { id: 'home', label: 'الرئيسية' },
  { id: 'about', label: 'من نحن' },
  { id: 'services', label: 'خدماتنا' },
  { id: 'team', label: 'فريق العمل' },
  { id: 'work', label: 'أعمالنا' },
  { id: 'insights', label: 'رؤى قانونية' },
  { id: 'contact', label: 'تواصل معنا' },
]

function getInitials(name) {
  return name
    .replace(/\//g, ' ')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
}

function ImageWithFallback({ src, alt, className, loading = 'lazy' }) {
  const [hasError, setHasError] = useState(false)

  return (
    <div className={`image-shell${className ? ` ${className}` : ''}`}>
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          loading={loading}
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="image-fallback" aria-label={alt} role="img">
          <UserRound size={26} />
          <span>{getInitials(alt)}</span>
        </div>
      )}
    </div>
  )
}

function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => {
      document.body.classList.remove('menu-open')
      window.removeEventListener('keydown', handleEscape)
    }
  }, [open])

  return (
    <>
      <header className="site-header">
        <a href="#home" className="brand" aria-label="النخبة جروب للمحاماة والاستشارات القانونية">
          <img src="/images/logo.png" alt="شعار النخبة جروب" />
          <span>
            النخبة جروب
            <small>للمحاماة والاستشارات القانونية</small>
          </span>
        </a>

        <button
          className="menu-btn"
          type="button"
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label={open ? 'إغلاق القائمة' : 'فتح القائمة'}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X /> : <Menu />}
        </button>

        <nav id="site-nav" className={open ? 'nav open' : 'nav'} aria-label="التنقل الرئيسي">
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      <button
        type="button"
        className={open ? 'nav-backdrop visible' : 'nav-backdrop'}
        aria-label="إغلاق القائمة"
        onClick={() => setOpen(false)}
      />
    </>
  )
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay" />
      <div className="container hero-content reveal">
        <p className="eyebrow">مكتب محاماة واستشارات قانونية</p>
        <h1>
          خبرة قانونية راسخة
          <br />
          <span>ورؤية مهنية منضبطة</span>
        </h1>
        <p className="hero-text">
          نقدم خدمات قانونية مؤسسية تستند إلى التأهيل الأكاديمي والخبرة العملية، بما
          يدعم الشركات والأفراد في الملفات الاستشارية والتعاقدية والقضائية والتحكيمية.
        </p>

        <div className="hero-actions">
          <a href="#services" className="btn primary">
            استكشف خدماتنا <ArrowLeft size={18} />
          </a>
          <a href="#team" className="btn ghost">
            تعرّف على الفريق
          </a>
        </div>
      </div>

      <div className="hero-card reveal delay">
        <strong>مجالات عمل متخصصة</strong>
        <span>الشركات، التقاضي، التحكيم، الشؤون الضريبية، والصياغة القانونية.</span>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section about">
      <div className="container split">
        <div className="panel dark reveal">
          <p className="eyebrow">من نحن</p>
          <h2>النخبة جروب للمحاماة والاستشارات القانونية</h2>
          <p>
            كيان قانوني يعمل بمنهج مؤسسي يوازن بين الصرامة العلمية والاحتياج العملي،
            ويضم قيادات أكاديمية وممارسين قانونيين في تخصصات متعددة، بما يسمح ببناء
            معالجة دقيقة للملفات وتقديم دعم قانوني متكامل في مختلف مراحل العمل.
          </p>

          <div className="stats">
            {credentials.map((item) => (
              <article key={item.title} className="stat-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="about-visual reveal delay">
          <div className="visual-box">
            <img src="/images/logo.png" alt="شعار النخبة جروب" className="about-logo" />
            <p>دقة • التزام • معالجة قانونية مؤسسية</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">خدماتنا</p>
          <h2>حلول قانونية مصممة لاحتياجات المؤسسات والأفراد</h2>
        </div>

        <div className="grid cards">
          {services.map((service) => {
            const Icon = iconMap[service.icon]
            return (
              <article className="service-card reveal" key={service.id}>
                <div className="icon">
                  <Icon />
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Team() {
  const [activeMemberId, setActiveMemberId] = useState(team[0].id)
  const activeMember = team.find((member) => member.id === activeMemberId) ?? team[0]

  return (
    <section id="team" className="section team">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">فريق العمل</p>
          <h2>القيادات والشركاء</h2>
        </div>

        <div className="team-layout">
          <div className="team-grid">
            {team.map((member) => (
              <button
                key={member.id}
                type="button"
                className={activeMember.id === member.id ? 'person active' : 'person'}
                onClick={() => setActiveMemberId(member.id)}
                aria-pressed={activeMember.id === member.id}
              >
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="avatar"
                />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </button>
            ))}
          </div>

          <aside className="bio-card reveal">
            <p className="eyebrow">الملف المهني</p>
            <ImageWithFallback
              src={activeMember.image}
              alt={activeMember.name}
              className="bio-image"
            />
            <h3>{activeMember.name}</h3>
            <strong>{activeMember.role}</strong>
            <p>{activeMember.bio}</p>
            <div className="bio-tags" aria-label="مجالات الخبرة">
              {activeMember.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <div className="bio-highlights">
              <span>
                <GraduationCap size={16} />
                تأهيل أكاديمي
              </span>
              <span>
                <Award size={16} />
                ممارسة مهنية
              </span>
              <span>
                <Globe2 size={16} />
                معالجة متخصصة
              </span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

function Work() {
  return (
    <section id="work" className="section work">
      <div className="container">
        <div className="section-head light reveal">
          <p className="eyebrow">أعمالنا</p>
          <h2>مساحة تعريفية بنماذج مجالات الدعم القانوني</h2>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project disabled-card" key={project.id} aria-disabled="true">
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <div className="project-overlay" />
              <div className="card-badge">قيد الإعداد</div>
              <div className="project-content">
                <span>{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
                <button type="button" className="inline-link" disabled aria-disabled="true">
                  غير متاح حاليًا <ArrowLeft size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Insights() {
  return (
    <section id="insights" className="section insights">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">رؤى قانونية</p>
          <h2>قسم المقالات والتحليلات القانونية قيد الإعداد</h2>
        </div>

        <div className="insight-list">
          {insights.map((item) => (
            <article className="insight disabled-card" key={item.id} aria-disabled="true">
              <span className="card-badge light-badge">قريبًا</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <button type="button" className="inline-link dark-link" disabled aria-disabled="true">
                سيتم النشر لاحقًا <ArrowLeft size={16} />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <footer id="contact" className="footer">
      <div className="container footer-grid">
        <div>
          <img src="/images/logo.png" alt="شعار النخبة جروب" className="footer-logo" />
          <h2>النخبة جروب</h2>
          <p>للمحاماة والاستشارات القانونية</p>
          <p className="footer-note">{contact.note}</p>
        </div>

        <div>
          <h3>{contact.title}</h3>
          <p>
            <Phone size={17} />
            بيانات الهاتف قيد الاعتماد
          </p>
          <p>
            <Mail size={17} />
            البريد الإلكتروني الرسمي سيُضاف قريبًا
          </p>
          <p>
            <MapPin size={17} />
            العنوان الرسمي سيُعلن بعد اعتماد بيانات النشر
          </p>
        </div>

        <div>
          <h3>ملاحظات</h3>
          {contact.items.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </div>

      <div className="copyright">
        © 2026 النخبة جروب للمحاماة والاستشارات القانونية. جميع الحقوق محفوظة.
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Team />
        <Work />
        <Insights />
      </main>
      <Contact />
    </>
  )
}
