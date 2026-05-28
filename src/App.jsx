import { useEffect, useRef, useState } from 'react';

const experience = [
  {
    role: 'Senior Data Analytics Engineer',
    company: 'JPMorgan Chase',
    timeframe: 'Jun 2022 - Present',
    details: [
      'Engineered a Governance, Risk & Compliance platform processing 3B+ rows and 30+ GB of daily enterprise data across 90 technology metrics.',
      'Built AWS infrastructure with Terraform using Redshift, Glue, Lambda, Step Functions, DynamoDB, and S3.',
      'Co-developed a Python FastAPI backend with DynamoDB and S3 caching layers, reducing Redshift compute overhead and improving query performance.',
      'Delivered production-grade dbt models and Kestra workflows for enterprise-scale data orchestration across large teams.',
      'Owned end-to-end delivery: onboarding, schema migrations, feature enhancements, and production deployments.'
    ]
  },
  {
    role: 'Software Engineer',
    company: 'TietoEVRY',
    timeframe: 'Oct 2021 - Jun 2022',
    details: [
      'Migrated legacy QlikView dashboards into scalable Qlik Sense applications for Cargotec.',
      'Optimized data models and load scripts to improve dashboard performance and maintainability.',
      'Supported enterprise reporting systems and collaborated with global stakeholders on BI solutions.'
    ]
  },
  {
    role: 'Associate Analyst (Data Analytics)',
    company: 'Merck Group',
    timeframe: 'Sep 2019 - Oct 2021',
    details: [
      'Developed enterprise Qlik Sense dashboards for Procurement and Compliance teams.',
      'Integrated and modeled data from multiple ERP systems to build procurement KPI reporting solutions.',
      'Managed reporting enhancements, optimization, automation, and L1–L3 production support.'
    ]
  },
  {
    role: 'Apprentice Trainee (Data Analytics)',
    company: 'Merck Group',
    timeframe: 'Apr 2019 - Sep 2019',
    details: [
      'Built automated Qlik Sense workflows with incremental loading and Salesforce integrations.',
      'Developed Python automation scripts and delivered a complete Qlik Sense project independently.',
      'Received Team Impact Award and Rockstar Rookie recognition.'
    ]
  }
];

const impactMetrics = [
  {
    targetValue: 3,
    label: 'Rows processed daily',
    suffix: 'B+',
    description: 'Powering enterprise metrics and risk signals across the firm.'
  },
  {
    targetValue: 90,
    label: 'Technology metrics tracked',
    suffix: '+',
    description: 'Measuring governance and operational risk with firm-wide consistency.'
  },
  {
    targetValue: 30,
    label: 'Daily data volume',
    suffix: '+ GB',
    description: 'Handling large-scale enterprise data across multiple systems.'
  }
];

const skills = [
  'dbt',
  'SQL',
  'Data Modeling',
  'ETL/ELT',
  'Qlik Sense',
  'QlikView',
  'Tableau',
  'NPrinting',
  'AWS',
  'Terraform',
  'Redshift',
  'Glue',
  'Lambda',
  'Step Functions',
  'DynamoDB',
  'S3',
  'KMS',
  'Python',
  'FastAPI',
  'MySQL',
  'CI/CD',
  'Agile',
  'IaC',
  'Data Governance'
];

const projects = [
  {
    name: 'Global Technology Metrics',
    description: 'A risk-monitoring platform at JPMC that tracks technology metrics across the firm and provides visibility into operational risk signals.',
    highlights: ['Enterprise-scale monitoring', 'Cross-functional risk reporting', 'Data pipeline resilience']
  },
  {
    name: 'Qlik Sense Modernization',
    description: 'Migrated legacy QlikView dashboards to scalable Qlik Sense applications for Cargotec, improving maintainability and performance.',
    highlights: ['Legacy dashboard modernization', 'Optimized data models', 'Global stakeholder collaboration']
  },
  {
    name: 'Procurement KPI Reporting',
    description: 'Built enterprise Qlik Sense dashboards for Merck procurement and compliance teams, integrating data from multiple ERP systems.',
    highlights: ['ERP integration', 'KPI automation', 'Production support and optimization']
  }
];

const education = [
  {
    institution: 'Techno India University',
    qualification: 'Bachelor of Technology - BTech, Computer Science',
    timeframe: '2014 - 2018'
  },
  {
    institution: 'Guru Teg Bahadur Public School',
    qualification: 'Higher Secondary',
    timeframe: '2012 - 2014'
  },
  {
    institution: 'Guru Teg Bahadur Public School, Durgapur',
    qualification: 'Senior Secondary',
    timeframe: '2010 - 2012'
  }
];

function App() {
  const [counts, setCounts] = useState(Array(impactMetrics.length).fill(0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const heroStatsRef = useRef(null);
  const animationFrames = useRef({});

  useEffect(() => {
    const element = heroStatsRef.current;
    if (!element || hasAnimated) return;

    const animateMetric = (metric, index, timestamp, startTime) => {
      if (!startTime) {
        animationFrames.current[index] = { startTime: timestamp };
      }
      const duration = 2200;
      const rawProgress = Math.min((timestamp - animationFrames.current[index].startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - rawProgress, 2);
      const nextValue = Math.round(metric.targetValue * easedProgress);
      setCounts((current) => {
        const next = [...current];
        next[index] = nextValue;
        return next;
      });
      if (rawProgress < 1) {
        animationFrames.current[index].id = window.requestAnimationFrame((time) => animateMetric(metric, index, time, animationFrames.current[index].startTime));
      }
    };

    const triggerAnimation = () => {
      setHasAnimated(true);
      impactMetrics.forEach((metric, index) => {
        animationFrames.current[index] = {};
        window.requestAnimationFrame((timestamp) => animateMetric(metric, index, timestamp, 0));
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            triggerAnimation();
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      Object.values(animationFrames.current).forEach((item) => {
        if (item?.id) {
          window.cancelAnimationFrame(item.id);
        }
      });
    };
  }, [hasAnimated]);

  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="brand-mark">SK</div>
        <nav className="site-nav">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <header className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Senior Data Analytics Engineer | Cloud-native Data Platforms</p>
          <h1>Sumeet Kumar Shaw</h1>
          <p className="hero-description">
            Analytics Engineer with 7+ years of experience building scalable cloud-native data platforms,
            enterprise BI systems, and automated analytics solutions across banking and enterprise environments.
          </p>
          <div className="hero-actions">
            <a href="mailto:shawsumeet1@gmail.com" className="button button-primary">Email Me</a>
            <a href="https://www.linkedin.com/in/shawsumeet1/" className="button button-secondary" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>

          <div className="hero-stats" ref={heroStatsRef}>
            {impactMetrics.map((metric, index) => (
              <div key={metric.label} className="stat-card">
                <span className="stat-value">
                  {counts[index]}{metric.suffix}
                </span>
                <span className="stat-label">{metric.label}</span>
                <p>{metric.description}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="hero-panel">
          <div className="panel-card">
            <h2>What I build</h2>
            <p>
              Scalable analytics foundations that help business and technology stakeholders act on accurate,
              secure, and measurable insight.
            </p>
          </div>
          <div className="panel-card accent-card">
            <h3>Focus areas</h3>
            <ul>
              <li>Enterprise data pipelines</li>
              <li>Operational risk metrics</li>
              <li>Data governance and resilience</li>
            </ul>
          </div>
        </aside>
      </header>

      <main className="content-grid">
        <section id="about" className="section about-section">
          <div className="section-header">
            <span>01</span>
            <h2>About</h2>
          </div>
          <div className="section-content">
            <p>
              Analytics Engineer with 7+ years of experience building scalable cloud-native data platforms,
              enterprise BI systems, and automated analytics solutions across banking and enterprise environments.
              Specialized in AWS, Terraform, dbt, Python, SQL, and Qlik technologies with expertise in high-performance
              data pipelines processing 3B+ rows daily.
            </p>
            <p>
              I help teams turn technology metrics into reliable, actionable insight by combining modern engineering,
              automation, and governance across enterprise risk and compliance systems.
            </p>
          </div>
        </section>

        <section id="experience" className="section experience-section">
          <div className="section-header">
            <span>02</span>
            <h2>Experience</h2>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article key={item.company} className="timeline-item">
                <div className="timeline-marker" />
                <div>
                  <h3>{item.role}</h3>
                  <p className="meta">{item.company} · {item.timeframe}</p>
                  <ul>
                    {item.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <div className="section-header">
            <span>03</span>
            <h2>Skills</h2>
          </div>
          <div className="skill-list">
            {skills.map((skill) => (
              <span key={skill} className="skill-pill">{skill}</span>
            ))}
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="section-header">
            <span>04</span>
            <h2>Projects</h2>
          </div>
          <div className="cards-grid">
            {projects.map((project) => (
              <article key={project.name} className="card project-card">
                <div className="project-tag">Featured</div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="project-highlights">
                  {project.highlights.map((highlight) => (
                    <span key={highlight} className="highlight-pill">{highlight}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="section education-section">
          <div className="section-header">
            <span>05</span>
            <h2>Education</h2>
          </div>
          <div className="education-list">
            {education.map((item) => (
              <article key={item.institution} className="education-card">
                <h3>{item.institution}</h3>
                <p className="meta">{item.qualification}</p>
                <p className="education-timeframe">{item.timeframe}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="certifications" className="section certifications-section">
          <div className="section-header">
            <span>06</span>
            <h2>Certifications</h2>
          </div>
          <div className="certification-list">
            <span>DP-203: Microsoft Certified Azure Data Engineer Associate</span>
            <span>DP-900: Microsoft Certified Azure Data Fundamentals</span>
            <span>Apache Spark Essential Training</span>
            <span>Tableau Certifications & Badges</span>
            <span>Data Science Foundations</span>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="section-header">
            <span>07</span>
            <h2>Contact</h2>
          </div>
          <div className="section-content contact-card">
            <p>
              I’m available for analytics engineering and data pipeline opportunities. Based in Hyderabad, Telangana,
              India, I partner with teams to build secure and scalable enterprise data systems.
            </p>
            <div className="contact-details">
              <div>
                <strong>Email</strong>
                <p><a href="mailto:shawsumeet1@gmail.com">shawsumeet1@gmail.com</a></p>
              </div>
              <div>
                <strong>Location</strong>
                <p>Hyderabad, Telangana, India</p>
              </div>
              <div>
                <strong>LinkedIn</strong>
                <p><a href="https://www.linkedin.com/in/shawsumeet1/" target="_blank" rel="noreferrer">linkedin.com/in/shawsumeet1</a></p>
              </div>
            </div>
            <div className="contact-links">
              <a href="mailto:shawsumeet1@gmail.com" className="button button-primary">Email</a>
              <a href="https://www.linkedin.com/in/shawsumeet1/" className="button button-secondary" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>Built for Sumeet Kumar Shaw — Analytics Engineer at JPMorgan Chase</p>
      </footer>
    </div>
  );
}

export default App;
