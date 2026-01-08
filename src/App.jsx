import React, { useState, useEffect } from 'react';
import { BarChart3, Database, TrendingUp, Mail, Github, Linkedin, ChevronDown, Menu, X, Brain, Code2, Award, Briefcase, ExternalLink } from 'lucide-react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: "Telco Customer Churn Analysis",
      description: "Academic project for Data Warehouse and Data Mining course analyzing telecom customer churn patterns. Processed CSV data with Pandas, implemented Logistic Regression with Scikit-learn for worst-case scenario prediction. Applied comprehensive feature selection techniques and created Power BI dashboard for stakeholder insights on churn drivers and customer retention strategies.",
      tags: ["Python", "Pandas", "Scikit-learn", "Power BI", "Logistic Regression"],
      metrics: "Feature selection & worst-case scenario analysis",
      date: "oct 2025",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      link: "https://telecocustomerchurn-capppp4zxdgql2ax2xyhfpkf.streamlit.app"
    },
    {
      title: "Bank Term Deposit Analysis",
      description: "Analyzed 45,000+ customer records using Python and Scikit-learn to predict term deposit subscriptions with Decision Tree classifier. Identified key patterns: longer call durations (>5 min) and fewer contacts (<3) correlate with 23% higher subscription rates.",
      tags: ["Python", "Pandas", "Scikit-learn", "EDA"],
      metrics: "23% improvement in customer segmentation",
      date: "Dec 2025",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
      link: "https://github.com/skarshad1928/Bank-Term-Deposit"  // Added GitHub link here
    },
    {
      title: "Interactive BI Dashboards",
      description: "Designed 3 interactive dashboards using IBM Cognos, Power BI, and Looker Studio for real-time KPI monitoring. Implemented dynamic filtering and drill-down features enabling granular data exploration.",
      tags: ["Power BI", "IBM Cognos", "Looker Studio"],
      metrics: "40% faster decision-making speed",
      date: "NOV 2025",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      link: "https://github.com/skarshad1928/Interactive-BI-Dashboards"
    },
    {
      title: "Generative AI Integration",
      description: "Implemented Hugging Face transformer models for NLP tasks including text generation, sentiment analysis, and document summarization. Explored prompt engineering and fine-tuning for domain-specific applications.",
      tags: ["Python", "Transformers", "NLP", "AI"],
      metrics: "Automated data extraction workflows",
      date: " Expected to Completion  Feb 2026",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      link: "https://github.com/skarshad1928"
    }
  ];

  const skills = [
    { 
      category: "Programming & Analysis", 
      items: ["Python (Pandas, NumPy)", "SQL (MySQL, MongoDB)", "Scikit-learn", "Git"] 
    },
    { 
      category: "Visualization & BI", 
      items: ["Power BI", "Tableau", "IBM Cognos", "Looker Studio"] 
    },
    { 
      category: "Machine Learning", 
      items: ["Decision Trees", "Classification", "Regression", "Feature Engineering"] 
    },
    { 
      category: "Analytics Techniques", 
      items: ["EDA", "Statistical Analysis", "A/B Testing", "KPI Design"] 
    }
  ];

  const experience = [
    {
      role: "Data Analytics Virtual Intern",
      company: "Finlatics",
      period: "Oct 2024",
      description: "Completed intensive financial analytics simulation analyzing banking sector data for subscription prediction challenges.",
      achievements: [
        "Applied end-to-end data science workflow on authentic customer datasets",
        "Delivered comprehensive report with strategic recommendations for marketing ROI"
      ]
    },
    {
      role: "Data Analytics Job Simulation",
      company: "Deloitte Australia",
      period: "Sep 2024",
      description: "Analyzed client datasets in consulting scenarios through Forage virtual experience.",
      achievements: [
        "Extracted actionable insights through statistical analysis and visualization",
        "Developed executive-level reports addressing real business challenges"
      ]
    },
    {
      role: "Data Visualization Job Simulation",
      company: "Tata Group",
      period: "Sep 2024",
      description: "Created stakeholder-focused dashboards for Forage virtual experience.",
      achievements: [
        "Applied visualization principles for non-technical business leaders",
        "Designed KPI tracking systems for real-time actionable intelligence"
      ]
    }
  ];

  const certifications = [
    "Python for Data Science, AI & Development (IBM, 2024)",
    "MongoDB Python Developer Path (MongoDB University, 2024)",
    "Introduction to Generative AI (Simplilearn, 2024)",
    "Hugging Face Projects (Simplilearn, 2024)"
  ];

  const scrollToSection = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-content">
            <div className="nav-logo">
              <BarChart3 className="logo-icon" />
              <span className="logo-text">Shaik Arshad</span>
            </div>
            
            <div className="nav-links">
              {['home', 'about', 'projects', 'experience', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`nav-link ${activeSection === section ? 'active' : ''}`}
                >
                  {section}
                </button>
              ))}
            </div>

            <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="menu-icon" /> : <Menu className="menu-icon" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-content">
              {['home', 'about', 'projects', 'experience', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="mobile-menu-link"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="section hero-section">
        <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
          <div className="hero-avatar">
            <div className="avatar-circle">
              <Database className="avatar-icon" />
            </div>
          </div>
          <h1 className="hero-title">Shaik Arshad</h1>
          <p className="hero-subtitle">
            Data Analytics Student | Financial Modeling | Predictive Analytics
          </p>
          <p className="hero-description">
            Specializing in financial modeling and predictive analytics with proven experience analyzing 45,000+ banking records. 
            Proficient in Python, SQL, and BI tools, building machine learning models and interactive dashboards that drive data-driven decisions.
          </p>
          <div className="hero-buttons">
            <button onClick={() => scrollToSection('projects')} className="btn btn-primary">
              View Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="btn btn-secondary">
              Get in Touch
            </button>
          </div>
          <div className="scroll-indicator">
            <ChevronDown className="scroll-icon" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="section-container">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Background & Education</p>
          
          <div className="card education-card">
            <div className="card-content">
              <Code2 className="card-icon" />
              <div className="card-text">
                <h3 className="card-title">VIT-AP University</h3>
                <p className="card-highlight">Bachelor of Technology in Data Analytics</p>
                <p className="card-period">Sep 2023 – Dec 2027 | Vijayawada, Andhra Pradesh</p>
                <p className="card-description">
                  Pursuing comprehensive education in data analytics with focus on machine learning, statistical methods, and business analytics.
                </p>
                <div className="coursework-grid">
                  <div className="coursework-item">• Database Management Systems</div>
                  <div className="coursework-item">• Machine Learning</div>
                  <div className="coursework-item">• Statistical Methods</div>
                  <div className="coursework-item">• Data Mining</div>
                </div>
              </div>
            </div>
          </div>

          <div className="card certifications-card">
            <div className="card-content">
              <Award className="card-icon cert-icon" />
              <div className="card-text">
                <h3 className="card-title">Certifications</h3>
                <div className="cert-list">
                  {certifications.map((cert, idx) => (
                    <div key={idx} className="cert-item">
                      <span className="cert-bullet"></span>
                      <p>{cert}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects-section">
        <div className="section-container">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Real-world data analysis and machine learning projects</p>
          
          <div className="projects-grid">
            {projects.map((project, idx) => (
              <div key={idx} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-content">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <span className="project-date">{project.date}</span>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="tag">{tag}</span>
                    ))}
                  </div>
                  <div className="project-metrics">
                    <TrendingUp className="metrics-icon" />
                    {project.metrics}
                  </div>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                      <ExternalLink className="link-icon" />
                      Visit Site
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section experience-section">
        <div className="section-container-small">
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">Virtual internships and simulations</p>
          
          <div className="experience-list">
            {experience.map((exp, idx) => (
              <div key={idx} className="experience-card">
                <div className="experience-content">
                  <Briefcase className="experience-icon" />
                  <div className="experience-text">
                    <div className="experience-header">
                      <div>
                        <h3 className="experience-role">{exp.role}</h3>
                        <p className="experience-company">{exp.company}</p>
                      </div>
                      <span className="experience-period">{exp.period}</span>
                    </div>
                    <p className="experience-description">{exp.description}</p>
                    <div className="achievements-list">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="achievement-item">
                          <span className="achievement-bullet"></span>
                          <p>{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills-section">
        <div className="section-container">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">Tools and technologies I work with</p>
          
          <div className="skills-grid">
            {skills.map((skill, idx) => (
              <div key={idx} className="skill-card">
                <h3 className="skill-category">{skill.category}</h3>
                <ul className="skill-list">
                  {skill.items.map((item, i) => (
                    <li key={i} className="skill-item">
                      <span className="skill-bullet"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="card domain-card">
            <div className="card-content">
              <Brain className="card-icon domain-icon" />
              <div className="card-text">
                <h3 className="card-title">Domain Expertise</h3>
                <div className="domain-grid">
                  <div className="domain-item">• Financial Analytics</div>
                  <div className="domain-item">• Customer Segmentation</div>
                  <div className="domain-item">• Campaign Performance Analysis</div>
                  <div className="domain-item">• Churn Prediction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="section-container-small">
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">Open to opportunities in fintech, e-commerce, and consulting</p>
          
          <div className="contact-card">
            <div className="contact-links">
              <a href="mailto:sar213083168@gmail.com" className="contact-link">
                <Mail className="contact-icon" />
                <span>Email</span>
              </a>
              <a href="https://github.com/skarshad1928" target="_blank" rel="noopener noreferrer" className="contact-link">
                <Github className="contact-icon" />
                <span>GitHub</span>
              </a>
              <a href="https://linkedin.com/in/shaik-arshad" target="_blank" rel="noopener noreferrer" className="contact-link">
                <Linkedin className="contact-icon" />
                <span>LinkedIn</span>
              </a>
            </div>
            
            <div className="contact-info">
              <p>📍 Amaravati, Andhra Pradesh, India</p>
              <p>📞 +91-7416828005</p>
            </div>
          </div>

          <div className="footer">
            <p>Eager to apply analytical skills to solve complex business challenges</p>
            <p>© 2026 Shaik Arshad. Built with React & Tailwind CSS</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;