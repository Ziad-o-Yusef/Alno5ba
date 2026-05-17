import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowLeft,
  Scale,
  Landmark,
  BriefcaseBusiness,
  ShieldCheck,
  BookOpenText,
  Gavel,
  Globe2,
  Mail,
  Phone,
  MapPin,
  Award,
  GraduationCap,
  Menu,
  X,
} from 'lucide-react'
import './styles.css'

const services = [
  {
    icon: <BriefcaseBusiness />,
    title: 'الشركات والاستثمار',
    text: 'تأسيس الشركات، الحوكمة، العقود التجارية، وإعادة الهيكلة القانونية.',
  },
  {
    icon: <Gavel />,
    title: 'التقاضي والتحكيم',
    text: 'تمثيل قانوني احترافي أمام جهات القضاء والتحكيم في المنازعات التجارية والمدنية.',
  },
  {
    icon: <Scale />,
    title: 'الاستشارات القانونية',
    text: 'آراء قانونية دقيقة تستند إلى خبرة أكاديمية ومهنية متعددة التخصصات.',
  },
  {
    icon: <Landmark />,
    title: 'القانون العام والضريبي',
    text: 'استشارات متخصصة في التشريع الضريبي، المالية العامة، والعقود الإدارية.',
  },
  {
    icon: <ShieldCheck />,
    title: 'الامتثال وإدارة المخاطر',
    text: 'مراجعة السياسات والعقود وتحديد المخاطر القانونية قبل نشوء النزاع.',
  },
  {
    icon: <BookOpenText />,
    title: 'البحث القانوني والصياغة',
    text: 'صياغة العقود والمذكرات والدراسات القانونية العربية والإنجليزية بمستوى مؤسسي.',
  },
]

const team = [
  {
    name: 'الأستاذ الدكتور عابد فايد',
    role: 'رئيس مجلس الإدارة',
    image: '/images/team/abed-fayed.jpg',
    short: 'قيادة استراتيجية وخبرة قانونية وأكاديمية رفيعة.',
  },
  {
    name: 'الأستاذ الدكتور طارق عبد السلام',
    role: 'نائب رئيس مجلس الإدارة',
    image: '/images/team/tarek-abdel-salam.jpg',
    short: 'أستاذ المالية العامة والتشريع الضريبي، وقيادة أكاديمية ومهنية ممتدة.',
    bio: 'أستاذ المالية العامة والتشريع الضريبي وعميد سابق، ويتمتع بخبرة أكاديمية وإدارية تتجاوز 25 عامًا. شغل مناصب قيادية بارزة، وأسهم في تطوير واعتماد برامج أكاديمية متعددة، كما يعمل محاميًا بالنقض ومستشارًا قانونيًا متخصصًا في الشؤون الضريبية.',
  },
  {
    name: 'الأستاذ الدكتور محمد علي عبد السلام',
    role: 'شريك مؤسس',
    image: '/images/team/mohamed-ali-abdel-salam.jpg',
    short: 'أستاذ القانون العام ومنسق برامج أكاديمية بخبرة بحثية وتدريسية واسعة.',
    bio: 'أستاذ القانون العام ويتمتع بخبرة أكاديمية وبحثية واسعة في القانون الدستوري والإداري والقضاء الإداري والعقود الإدارية، وله مشاركات علمية عربية ودولية وخبرة كبيرة في الإشراف العلمي والجودة والتطوير الأكاديمي.',
  },
  {
    name: 'الدكتور عمر طاهر حميدة',
    role: 'الرئيس التنفيذي',
    image: '/images/team/omar-taher.jpg',
    short: 'قيادة تنفيذية وإدارة مؤسسية لخدمات قانونية احترافية.',
  },
  {
    name: 'الدكتور أحمد عمر يوسف',
    role: 'شريك مؤسس',
    image: '/images/team/ahmed-omar-youssef.jpg',
    short: 'خبرة أكاديمية ومهنية في القانون الخاص والقانون الدولي الخاص.',
  },
  {
    name: 'الأستاذ محمود أحمد عبد الحميد',
    role: 'نائب المدير التنفيذي',
    image: '/images/team/mahmoud-ahmed.jpg',
    short: 'إدارة تشغيلية وتنفيذية للملفات القانونية والمؤسسية.',
  },
  {
    name: 'الأستاذ أحمد محمد مصطفى',
    role: 'شريك مؤسس',
    image: '/images/team/ahmed-moustafa.jpg',
    short: 'ممارسة قانونية متخصصة ودعم استشاري للشركات والأفراد.',
  },
  {
    name: 'الأستاذة دعاء رجب الشرقاوي',
    role: 'شريك مؤسس',
    image: '/images/team/doaa-ragab.jpg',
    short: 'خبرة في الصياغة القانونية وإدارة الملفات والاستشارات.',
  },
  {
    name: 'الأستاذ عمر عابد فايد',
    role: 'شريك',
    image: '/images/team/omar-abed-fayed.jpg',
    short: 'محامٍ وباحث دكتوراه في القانون المدني بخلفية أكاديمية ومهنية متقدمة.',
    bio: 'محامٍ وباحث دكتوراه في القانون المدني، تلقى تدريبات متخصصة لدى مكاتب دولية وإقليمية بارزة في العقود والشركات والدمج والاستحواذ والملكية الفكرية والبحث والترجمة القانونية، وتم تكريمه تقديرًا لإسهاماته البحثية.',
  },
]

const projects = [
  {
    title: 'حوكمة الشركات',
    category: 'قطاع الشركات',
    text: 'إعداد منظومة عقود وسياسات داخلية لشركات ناشئة ومتوسطة.',
  },
  {
    title: 'منازعات تجارية',
    category: 'التقاضي التجاري',
    text: 'تمثيل ودعم قانوني في نزاعات تجارية ومدنية ذات طبيعة مركبة.',
  },
  {
    title: 'استشارات ضريبية',
    category: 'الاستشارات الضريبية',
    text: 'تحليل قانوني وتشريعي للالتزامات الضريبية والمخاطر المحتملة.',
  },
]

const insights = [
  'مستقبل المكاتب القانونية بين الخبرة التقليدية والتحول الرقمي',
  'أهمية الحوكمة القانونية في حماية الشركات العائلية',
  'التحكيم التجاري كآلية فعالة لتسوية المنازعات العابرة للحدود',
]

function Header() {
  const [open, setOpen] = useState(false)
  const links = ['الرئيسية', 'من نحن', 'خدماتنا', 'فريق العمل', 'أعمالنا', 'رؤى قانونية', 'تواصل معنا']

  return (
    <header className="site-header">
      <a href="#home" className="brand" aria-label="النخبة جروب للمحاماة والاستشارات القانونية">
        <img src="/images/logo.png" alt="النخبة جروب" />
        <span>
          النخبة جروب
          <br />
          <small>للمحاماة والاستشارات القانونية</small>
        </span>
      </a>

      <button
        className="menu-btn"
        type="button"
        aria-label={open ? 'إغلاق القائمة' : 'فتح القائمة'}
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>

      <nav className={open ? 'nav open' : 'nav'}>
        {links.map((label, index) => (
          <a
            key={label}
            href={`#${['home', 'about', 'services', 'team', 'work', 'insights', 'contact'][index]}`}
            onClick={() => setOpen(false)}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
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
          <span>ورؤية عابرة للحدود</span>
        </h1>
        <p className="hero-text">
          نقدم خدمات قانونية مؤسسية تجمع بين العمق الأكاديمي والخبرة العملية، لخدمة الشركات
          والأفراد في بيئة أعمال تتطلب الدقة والثقة وسرعة الاستجابة.
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
        <strong>استشارات قانونية متكاملة</strong>
        <span>شركات، تقاضٍ، تحكيم، وضرائب</span>
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
            كيان قانوني يسعى إلى تقديم خدمات قانونية عالية الجودة تجمع بين الرصانة العلمية
            والخبرة العملية، من خلال فريق يضم أساتذة قانون ومحامين ومستشارين متخصصين في فروع
            قانونية متعددة.
          </p>
          <div className="stats">
            <span>
              <b>+25</b>
              سنة خبرة أكاديمية ومهنية
            </span>
            <span>
              <b>9</b>
              قيادات وشركاء
            </span>
            <span>
              <b>360</b>
              خدمة قانونية متكاملة
            </span>
          </div>
        </div>

        <div className="about-visual reveal delay">
          <div className="visual-box">
            <Scale size={72} />
            <p>ثقة • دقة • التزام</p>
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
          {services.map((service, index) => (
            <article
              className="service-card reveal"
              style={{ animationDelay: `${index * 70}ms` }}
              key={service.title}
            >
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Team() {
  const [active, setActive] = useState(team[1])

  return (
    <section id="team" className="section team">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">فريق القيادة</p>
          <h2>فريق العمل والقيادة</h2>
        </div>

        <div className="team-layout">
          <div className="team-grid">
            {team.map((member) => (
              <button
                className={active.name === member.name ? 'person active' : 'person'}
                key={member.name}
                type="button"
                onClick={() => setActive(member)}
              >
                <div className="avatar">
                  <img
                    src={member.image}
                    onError={(event) => {
                      event.currentTarget.style.display = 'none'
                    }}
                    alt={member.name}
                  />
                  <span>{member.name.split(' ').slice(-2).join(' ')}</span>
                </div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </button>
            ))}
          </div>

          <aside className="bio-card reveal">
            <p className="eyebrow">ملف قيادي</p>
            <h3>{active.name}</h3>
            <strong>{active.role}</strong>
            <p>{active.bio || active.short}</p>
            <div className="bio-tags">
              <span>
                <GraduationCap size={16} />
                خبرة أكاديمية
              </span>
              <span>
                <Award size={16} />
                ممارسة مهنية
              </span>
              <span>
                <Globe2 size={16} />
                منظور دولي
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
          <h2>نماذج من مجالات الدعم القانوني</h2>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="project" key={project.title}>
              <span>{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
              <img
                src={`/images/projects/project-${index + 1}.jpg`}
                onError={(event) => {
                  event.currentTarget.style.display = 'none'
                }}
                alt={project.title}
              />
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
          <h2>مساحة مخصصة للمقالات والتحليلات القانونية</h2>
        </div>

        <div className="insight-list">
          {insights.map((item) => (
            <article className="insight" key={item}>
              <span>مقالة</span>
              <h3>{item}</h3>
              <a href="#contact">
                اقرأ المزيد <ArrowLeft size={16} />
              </a>
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
          <img src="/images/logo.png" alt="النخبة جروب" className="footer-logo" />
          <h2>النخبة جروب</h2>
          <p>للمحاماة والاستشارات القانونية</p>
        </div>

        <div>
          <h3>تواصل معنا</h3>
          <p>
            <Phone size={17} /> +20 000 000 0000
          </p>
          <p>
            <Mail size={17} /> info@elitegrouplaw.com
          </p>
          <p>
            <MapPin size={17} /> القاهرة، جمهورية مصر العربية
          </p>
        </div>

        <div>
          <h3>روابط سريعة</h3>
          <a href="#services">الخدمات</a>
          <a href="#team">فريق العمل</a>
          <a href="#insights">الرؤى القانونية</a>
        </div>
      </div>

      <div className="copyright">© 2026 النخبة جروب للمحاماة والاستشارات القانونية. جميع الحقوق محفوظة.</div>
    </footer>
  )
}

function App() {
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
        <Contact />
      </main>
    </>
  )
}

createRoot(document.getElementById('root')).render(<App />)
