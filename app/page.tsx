'use client';

import { useEffect, useState } from 'react';
import { ArrowUpRight, ArrowDown, Code2, Languages, Mail, GraduationCap } from 'lucide-react';
import { Button } from '../components/ui/button';
import { labels, profile, type Language } from '../lib/profile';

export default function Home() {
  const [language, setLanguage] = useState<Language>('zh');
  const t = labels[language];

  useEffect(() => {
    let preferred: string | null = new URLSearchParams(window.location.search).get('lang');
    if (preferred !== 'zh' && preferred !== 'en') {
      try { preferred = localStorage.getItem('jiyu-site-language'); } catch { /* Optional preference. */ }
    }
    if (preferred === 'zh' || preferred === 'en') setLanguage(preferred);
    const updateProgress = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      document.documentElement.style.setProperty('--scroll-progress', String(height > 0 ? Math.min(1, Math.max(0, window.scrollY / height)) : 0));
    };
    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    return () => { window.removeEventListener('scroll', updateProgress); window.removeEventListener('resize', updateProgress); };
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
    document.title = language === 'zh' ? '尹积余 | 厦门大学 · 个人主页' : 'Jiyu Yin | Xiamen University';
    document.querySelector('meta[name="description"]')?.setAttribute('content', profile.bio[language]);
  }, [language]);

  function toggleLanguage() {
    const next = language === 'zh' ? 'en' : 'zh';
    setLanguage(next);
    try { localStorage.setItem('jiyu-site-language', next); } catch { /* Optional preference. */ }
    const url = new URL(window.location.href);
    url.searchParams.set('lang', next);
    window.history.replaceState(null, '', url);
  }

  return <>
    <div className="reading-progress" aria-hidden="true" />
    <a className="skip-link" href="#main">{t.skip}</a>
    <header className="site-header">
      <div className="header-inner wrap">
        <a className="wordmark" href="#main" aria-label={t.home}><img src="/yu-fish-emblem.webp" alt="" width={38} height={38} /><span>{profile.name[language]}<i>.</i></span></a>
        <nav aria-label={t.nav}><a href="#about">{t.about}</a><a href="#research">{t.research}</a><a href="#publications">{t.publications}</a><a href="#projects">{t.projects}</a><a href="#contact">{t.contact}</a></nav>
        <Button variant="ghost" className="language-button" aria-label={t.language} onClick={toggleLanguage}><Languages size={17} aria-hidden="true" /><span lang={language === 'zh' ? 'en' : 'zh-CN'}>{t.switchLabel}</span></Button>
      </div>
    </header>
    <main id="main" className="wrap" lang={language === 'zh' ? 'zh-CN' : 'en'}>
      <section id="about" className="intro" aria-labelledby="profile-heading">
        <div className="identity-visual">
          <div className="portrait-frame"><img className="portrait" src="/portrait.jpg" alt={t.portrait} width={303} height={433} fetchPriority="high" /></div>
          <div className="identity-badge"><GraduationCap size={18} aria-hidden="true" /><span>{language === 'zh' ? '厦门大学' : 'Xiamen University'}</span></div>
          <div className="identity-caption"><span className="live-dot" /> {language === 'zh' ? '博士研究生' : 'PhD candidate'}</div>
        </div>
        <div className="intro-copy">
          <p className="eyebrow"><span className="accent-line" /> {t.heroKicker}</p>
          <h1 id="profile-heading" className={language === 'zh' ? 'name-zh' : 'name-en'}>{profile.name[language]}<span>.</span></h1>
          <p className="academic-title">{t.subtitle}</p>
          <p className="intro-description">{profile.bio[language]}</p>
          <ul className="interest-tags" aria-label={t.researchTitle}>{t.subjectTags.map(tag => <li key={tag}>{tag}</li>)}</ul>
          <div className="intro-links"><a className="primary-link" href={`mailto:${profile.email}`}><Mail size={18} aria-hidden="true" />{t.contactMe}<ArrowUpRight size={18} aria-hidden="true" /></a><a className="text-link" href={profile.github}><Code2 size={18} aria-hidden="true" />GitHub<ArrowUpRight size={16} aria-hidden="true" /></a></div>
        </div>
      </section>

      <section id="research" className="section-space" aria-labelledby="research-heading">
        <div className="section-heading"><div><p className="eyebrow"><span className="section-number">01</span>{t.researchKicker}</p><h2 id="research-heading">{t.researchTitle}</h2></div><span className="section-line" aria-hidden="true" /></div>
        <div className="research-grid">{profile.research.map((item, index) => <article className="research-item" key={index}><span className="research-number" aria-hidden="true">0{index + 1}<ArrowUpRight size={22} /></span><h3>{item.title[language]}</h3><p>{item.detail[language]}</p><div className="research-topics">{item.tags[language]}</div></article>)}</div>
      </section>

      <section id="publications" className="section-space" aria-labelledby="publications-heading">
        <div className="section-heading"><div><p className="eyebrow"><span className="section-number">02</span>{t.publicationKicker}</p><h2 id="publications-heading">{t.publicationTitle}</h2></div><span className="section-line" aria-hidden="true" /></div>
        <div className="publication-list">{profile.publications.map((paper, index) => <article className="publication" key={paper.doi}>
          <div className="publication-index"><span aria-hidden="true">0{index + 1}</span><span>{paper.year || (language === 'zh' ? '已录用' : 'Accepted')}</span></div>
          <div className="publication-content">
            <div className="paper-meta"><span className={`status status-${paper.status}`}>{paper.status === 'accepted' ? t.accepted : t.published}</span>{paper.firstAuthor && <span>{t.firstAuthor}</span>}</div>
            <h3><a href={paper.doi}>{paper.title[language]}<ArrowUpRight size={20} aria-hidden="true" /></a></h3>
            <p className="paper-authors">{paper.authors[language].split(/(尹积余|Jiyu Yin)/).map((part, n) => part === '尹积余' || part === 'Jiyu Yin' ? <strong key={n}>{part}</strong> : part)}</p>
            <p className="paper-venue">{paper.venue[language]}</p>
          </div>
        </article>)}</div>
      </section>

      <section className="academic-history section-space" aria-label={t.education}>
        <div className="education-section"><p className="eyebrow"><span className="section-number">03</span>{t.educationKicker}</p><h2>{t.education}</h2><ol className="education-list">{profile.education.map((item, index) => <li key={index}><p className="education-date">{item.date[language]}</p><h3>{item.school[language]}</h3><p className="education-degree">{item.degree[language]}</p></li>)}</ol></div>
        <div className="honors"><p className="eyebrow"><span className="section-number">04</span>{t.awardKicker}</p><h2>{t.awardTitle}</h2><ul className="honors-list">{profile.awards.map(award => <li key={award.title.en}><span>{award.year}</span><p>{award.title[language]}</p></li>)}</ul></div>
      </section>

      <section id="projects" className="section-space" aria-labelledby="projects-heading">
        <div className="section-heading"><div><p className="eyebrow"><span className="section-number">05</span>{t.projectKicker}</p><h2 id="projects-heading">{t.projectsTitle}</h2></div><a className="text-link all-projects" href={`${profile.github}?tab=repositories`}>{t.allProjects}<ArrowUpRight size={16} aria-hidden="true" /></a></div>
        <div className="project-list">{profile.projects.map((project, index) => <article className="project" key={project.name}><div className="project-top"><Code2 size={24} aria-hidden="true" /><span aria-hidden="true">0{index + 1}</span></div><h3><a href={project.url}>{project.name}<ArrowUpRight size={22} aria-hidden="true" /></a></h3><p className="project-description">{project.description[language]}</p><ul className="project-tags" aria-label={project.name}>{project.tags[language].map(tag => <li key={tag}>{tag}</li>)}</ul></article>)}</div>
      </section>

      <section id="contact" className="contact" aria-labelledby="contact-heading"><div><p className="eyebrow">{t.contactKicker}</p><h2 id="contact-heading">{t.contactTitle}<span>.</span></h2><p className="contact-description">{t.contactText}</p><a className="email-link" href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight size={22} aria-hidden="true" /></a></div><figure className="logo-signature"><img src="/yu-fish-emblem.webp" alt={t.logo} width={110} height={110} loading="lazy" /><figcaption>{t.logoMeaning}</figcaption></figure></section>
    </main>
    <footer className="site-footer wrap"><span>© {new Date().getFullYear()} {profile.name[language]}</span><a href={profile.github}>GitHub<ArrowUpRight size={14} aria-hidden="true" /></a><a href="#main">{t.backTop}<ArrowDown className="up-arrow" size={14} aria-hidden="true" /></a></footer>
  </>;
}
