"use client";

import { useEffect, useState } from "react";

type Language = "en" | "zh";

const publications = [
  {
    year: "2026",
    venue: "IEEE TGRS",
    title:
      "SKYDET: An End-to-End Multiscale Attentive Detection Network From Foundation Models for Small Objects in Remote Sensing Images",
    authors: (
      <>
        <strong>Yao Zhang</strong>, Wei Guo, Boxiang Xie, Lingfeng Lin, Jie Zhang,
        Hongwei Yang, Yuke Meng, Yi Liu, Wei Zhang
      </>
    ),
    journal: "IEEE Transactions on Geoscience and Remote Sensing",
    paper: "https://doi.org/10.1109/TGRS.2026.3716766",
    code: "https://github.com/zhangyyy-ai-rs/SKYDET",
  },
  {
    year: "2026",
    venue: "IEEE IoT-J",
    title:
      "E²-Former: An Edge-Enhanced Transformer for UAV-Based Small Object Detection",
    authors: (
      <>
        Jie Zhang*, <strong>Yao Zhang*</strong>, Said M. Easa, Boxiang Xie,
        Lingfeng Lin, Xiuzhuang Zhou, Nianyin Zeng, Wei Zhang, Mengmeng Song
      </>
    ),
    journal: "IEEE Internet of Things Journal",
    paper: "https://doi.org/10.1109/JIOT.2026.3684962",
  },
  {
    year: "2026",
    venue: "IEEE JSTARS",
    title:
      "HSRNet: Lightweight Remote Sensing Small Object Detection for Multiscale and Dense Scenes",
    authors: (
      <>
        Boxiang Xie*, <strong>Yao Zhang*</strong>, Lingfeng Lin, Wei Zhang, Jie
        Zhang, Honggang Li
      </>
    ),
    journal:
      "IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing",
    paper: "https://doi.org/10.1109/JSTARS.2026.3686223",
  },
  {
    year: "2025",
    venue: "IEEE GRSL",
    title: "MERS-Net: A Lightweight and Efficient Remote Sensing Image Object Detector",
    authors: (
      <>
        <strong>Yao Zhang</strong>, Hongyang Zhao, Xingdong Li, HongGang Li, Jing
        Jin
      </>
    ),
    journal: "IEEE Geoscience and Remote Sensing Letters",
    paper: "https://doi.org/10.1109/LGRS.2025.3569672",
  },
  {
    year: "2026",
    venue: "Remote Sensing",
    title: "PanDiM: A Diffusion Mamba Network for High-Fidelity Pansharpening",
    authors: (
      <>
        Haobo Xu*, <strong>Yao Zhang*</strong>, Lingfeng Lin, Jiajin Wu, Boxiang
        Xie, Wei Zhang, Honggang Li, Jing Qu
      </>
    ),
    journal: "Remote Sensing",
    paper: "https://doi.org/10.3390/rs18142299",
    code: "https://github.com/HongshiXu/PanDiM",
  },
  {
    year: "2025",
    venue: "Scientific Reports",
    title:
      "A Target Detection Model HR-YOLO for Advanced Driver Assistance Systems in Foggy Conditions",
    authors: (
      <>
        <strong>Yao Zhang</strong>, Na Jia
      </>
    ),
    journal: "Scientific Reports",
    paper: "https://doi.org/10.1038/s41598-025-98286-4",
  },
];

const content = {
  en: {
    nav: ["About", "Research", "News", "Publications", "Education", "Service"],
    navIds: ["about", "research", "news", "publications", "education", "service"],
    name: "Yao Zhang",
    affiliation: "Wuhan University",
    role: "Incoming Master’s Student",
    tagline: "Exploring visual and multimodal intelligence for Earth observation.",
    location: "Wuhan, China",
    aboutTitle: "About Me",
    about: (
      <>
        Hi! I am <strong>Yao Zhang (张耀)</strong>, an incoming Master’s student in
        Surveying Engineering at <a href="https://www.whu.edu.cn/" target="_blank" rel="noreferrer">Wuhan University</a>.
        I will join the State Key Laboratory of Information Engineering in
        Surveying, Mapping and Remote Sensing in September 2026. Before that, I
        received my B.Eng. in Mechanical Design, Manufacturing and Automation
        from Northeast Forestry University in 2026.
      </>
    ),
    researchIntro: "My research interests include:",
    research: [
      ["Remote Sensing Foundation Models", "learning and adapting general visual representations for Earth observation imagery."],
      ["Multimodal Large Language Models", "connecting geospatial visual information with language understanding."],
      ["Multimodal Reasoning", "reasoning over visual evidence and structured spatial context."],
    ],
    welcome: (
      <>
        I am happy to discuss research and potential collaborations. Feel free to
        contact me by email (
        <a href="mailto:zhangyyy.ai@whu.edu.cn">zhangyyy.ai@whu.edu.cn</a>,{` `}
        <a href="mailto:zhangyyy.ai@gmail.com">zhangyyy.ai@gmail.com</a>).
      </>
    ),
    newsTitle: "News",
    news: "I launched my personal academic website.",
    publicationsTitle: "Selected Publications",
    publicationNote:
      "Selected first-author and equal-contribution papers. * denotes equal contribution.",
    paper: "Paper",
    code: "Code",
    allPapers: "View all publications on Google Scholar",
    educationTitle: "Education",
    education: [
      {
        school: "Wuhan University",
        website: "https://www.whu.edu.cn/",
        degree: "Master’s Student in Surveying Engineering",
        unit: "State Key Laboratory of Information Engineering in Surveying, Mapping and Remote Sensing",
        date: "2026.09 – 2028.06",
      },
      {
        school: "Northeast Forestry University",
        website: "https://www.nefu.edu.cn/",
        degree: "B.Eng. in Mechanical Design, Manufacturing and Automation",
        unit: "College of Mechanical and Electrical Engineering",
        date: "2022.09 – 2026.06",
      },
    ],
    serviceTitle: "Academic Service",
    reviewer: "Reviewer",
    service: [
      "IEEE Transactions on Geoscience and Remote Sensing (TGRS)",
      "IEEE Geoscience and Remote Sensing Letters (GRSL)",
    ],
    updated: "Last updated: August 2026",
    language: "中文",
    theme: "Toggle dark mode",
  },
  zh: {
    nav: ["关于", "研究方向", "动态", "论文", "教育经历", "学术服务"],
    navIds: ["about", "research", "news", "publications", "education", "service"],
    name: "张耀",
    affiliation: "武汉大学",
    role: "即将入学硕士研究生",
    tagline: "探索面向地球观测的视觉与多模态智能。",
    location: "中国 · 武汉",
    aboutTitle: "关于我",
    about: (
      <>
        你好！我是<strong>张耀（Yao Zhang）</strong>，即将进入
        <a href="https://www.whu.edu.cn/" target="_blank" rel="noreferrer">武汉大学</a>
        攻读测绘工程硕士，并将于 2026 年 9 月加入测绘遥感信息工程国家重点实验室。
        此前，我于 2026 年在东北林业大学获得机械设计制造及其自动化专业工学学士学位。
      </>
    ),
    researchIntro: "我的研究兴趣包括：",
    research: [
      ["遥感视觉基础模型", "面向地球观测影像学习和适配通用视觉表征。"],
      ["多模态大语言模型", "连接地理空间视觉信息与语言理解。"],
      ["多模态推理", "基于视觉证据与结构化空间上下文进行推理。"],
    ],
    welcome: (
      <>
        欢迎交流科研问题及潜在合作，也欢迎通过邮箱与我联系（
        <a href="mailto:zhangyyy.ai@whu.edu.cn">zhangyyy.ai@whu.edu.cn</a>、
        <a href="mailto:zhangyyy.ai@gmail.com">zhangyyy.ai@gmail.com</a>）。
      </>
    ),
    newsTitle: "动态",
    news: "创建了我的个人学术主页。",
    publicationsTitle: "精选论文",
    publicationNote: "仅选取第一作者及共同一作论文。* 表示共同贡献。",
    paper: "论文",
    code: "代码",
    allPapers: "在 Google Scholar 查看全部论文",
    educationTitle: "教育经历",
    education: [
      {
        school: "武汉大学",
        website: "https://www.whu.edu.cn/",
        degree: "测绘工程硕士研究生",
        unit: "测绘遥感信息工程国家重点实验室",
        date: "2026.09 – 2028.06",
      },
      {
        school: "东北林业大学",
        website: "https://www.nefu.edu.cn/",
        degree: "机械设计制造及其自动化 工学学士",
        unit: "机电工程学院",
        date: "2022.09 – 2026.06",
      },
    ],
    serviceTitle: "学术服务",
    reviewer: "审稿人",
    service: [
      "IEEE Transactions on Geoscience and Remote Sensing (TGRS)",
      "IEEE Geoscience and Remote Sensing Letters (GRSL)",
    ],
    updated: "最后更新：2026 年 8 月",
    language: "EN",
    theme: "切换深浅色模式",
  },
};

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const [dark, setDark] = useState(false);
  const t = content[language];

  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    const initial = stored
      ? stored === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(initial);
    document.documentElement.dataset.theme = initial ? "dark" : "light";
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === "en" ? "en" : "zh-CN";
  }, [language]);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
    window.localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <>
      <header className="topbar">
        <div className="topbar-inner">
          <a className="home-link" href="#about">
            {language === "en" ? "Homepage" : "主页"}
          </a>
          <nav aria-label="Main navigation">
            {t.nav.map((item, index) => (
              <a key={item} href={`#${t.navIds[index]}`}>
                {item}
              </a>
            ))}
          </nav>
          <div className="tools">
            <button type="button" onClick={toggleTheme} aria-label={t.theme} title={t.theme}>
              {dark ? "☀" : "☾"}
            </button>
            <button type="button" onClick={() => setLanguage(language === "en" ? "zh" : "en") }>
              {t.language}
            </button>
          </div>
        </div>
      </header>

      <main className="page-layout">
        <aside className="profile-card">
          <img className="avatar" src="/assets/yao-zhang.jpg" alt="Yao Zhang" />
          <h1>{t.name}</h1>
          <p className="name-alt">{language === "en" ? "张耀" : "Yao Zhang"}</p>
          <p className="role">{t.role}</p>
          <p className="affiliation">{t.affiliation}</p>
          <p className="tagline">{t.tagline}</p>
          <ul className="profile-links">
            <li><span>⌖</span>{t.location}</li>
            <li><span>✉</span><a href="mailto:zhangyyy.ai@whu.edu.cn">Email</a></li>
            <li><span>G</span><a href="https://scholar.google.com/citations?user=qxeun8AAAAAJ&hl=en" target="_blank" rel="noreferrer">Google Scholar</a></li>
            <li><span>⌘</span><a href="https://github.com/zhangyyy-ai-rs" target="_blank" rel="noreferrer">GitHub</a></li>
            <li><span>iD</span><a href="https://orcid.org/0009-0005-6399-3614" target="_blank" rel="noreferrer">ORCID</a></li>
          </ul>
        </aside>

        <article className="content">
          <section id="about" className="intro-section">
            <h2>{t.aboutTitle}</h2>
            <p>{t.about}</p>
            <div id="research" className="research-block">
              <p>{t.researchIntro}</p>
              <ul>
                {t.research.map(([name, description], index) => (
                  <li key={name}>
                    <strong className={`research-color research-color-${index + 1}`}>{name}</strong>: {description}
                  </li>
                ))}
              </ul>
            </div>
            <p>{t.welcome}</p>
          </section>

          <section id="news">
            <h2>📰 {t.newsTitle}</h2>
            <div className="news-item">
              <time>2026.08</time>
              <span>{t.news}</span>
            </div>
          </section>

          <section id="publications">
            <div className="section-title-row">
              <h2>📝 {t.publicationsTitle}</h2>
              <a href="https://scholar.google.com/citations?user=qxeun8AAAAAJ&hl=en" target="_blank" rel="noreferrer">
                {t.allPapers} →
              </a>
            </div>
            <p className="section-note">{t.publicationNote}</p>
            <div className="publication-timeline">
              {["2026", "2025"].map((year) => (
                <div className="publication-year" key={year}>
                  <h3 className="year-label">{year}</h3>
                  <div className="publication-list">
                    {publications.filter((publication) => publication.year === year).map((publication) => (
                      <article className="publication-card" key={publication.title}>
                        <div className="publication-topline">
                          <span className="venue-badge">{publication.venue}</span>
                        </div>
                        <h3>
                          <a href={publication.paper} target="_blank" rel="noreferrer">
                            {publication.title}
                          </a>
                        </h3>
                        <p className="authors">{publication.authors}</p>
                        <p className="journal"><em>{publication.journal}, {publication.year}</em></p>
                        <div className="paper-links">
                          <a href={publication.paper} target="_blank" rel="noreferrer">{t.paper}</a>
                          {publication.code && <a href={publication.code} target="_blank" rel="noreferrer">{t.code}</a>}
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="education">
            <h2>🎓 {t.educationTitle}</h2>
            <div className="education-list">
              {t.education.map((item) => (
                <article className="education-item" key={item.school}>
                  <div>
                    <h3><a href={item.website} target="_blank" rel="noreferrer">{item.school}</a></h3>
                    <p className="degree">{item.degree}</p>
                    <p>{item.unit}</p>
                  </div>
                  <time>{item.date}</time>
                </article>
              ))}
            </div>
          </section>

          <section id="service">
            <h2>📋 {t.serviceTitle}</h2>
            <h3 className="subheading">{t.reviewer}</h3>
            <ul className="service-list">
              {t.service.map((journal) => <li key={journal}>{journal}</li>)}
            </ul>
          </section>

          <footer>
            <p>© 2026 Yao Zhang (张耀). All rights reserved.</p>
            <p>{t.updated}</p>
          </footer>
        </article>
      </main>
    </>
  );
}
