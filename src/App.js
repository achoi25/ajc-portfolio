import React, { useState } from 'react';
import { BookA, Mail, Phone, Linkedin, Award, MapPin, Calendar, Code2, Briefcase, GraduationCap, User, Trophy } from 'lucide-react';
import { resumeData } from './data/resumeData';
import './styles/Portfolio.css';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('about');

  const TabButton = ({ id, label, icon: Icon, isActive, onClick }) => (
    <button
      className={`tab-button ${isActive ? 'active' : ''}`}
      onClick={() => onClick(id)}
    >
      <Icon size={18} />
      <span>{label}</span>
    </button>
  );

  const AboutSection = () => (
    <div className="section">
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-name">{resumeData.personal.name}</h1>
          <p className="hero-subtitle">Data Science & Computer Science Student</p>
          <p className="hero-description">
            Passionate researcher and developer specializing in software solutions, 
            data analysis, and machine learning.
          </p>
          <div className="contact-grid">
            <div className="contact-item">
              <Phone size={18} />
              <span>{resumeData.personal.phone}</span>
            </div>
            <div className="contact-item">
              <Mail size={18} />
              <a href={`mailto:${resumeData.personal.email}`} className="contact-link">
                {resumeData.personal.email}
              </a>
            </div>
            <div className="contact-item">
              <Linkedin size={18} />
              <a 
                href={resumeData.personal.linkedin}  
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-link"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-card">
            <BookA size={40} />
            <span>Student at the University of Illinois Urbana-Champaign</span>
          </div>
          <div className="floating-card delay-1">
            <Award size={40} />
            <span>Research Scientist</span>
          </div>
          <div className="floating-card delay-2">
            <Code2 size={40} />
            <span>Aspiring Full Stack Developer</span>
          </div>
        </div>
      </div>

      <div className="about-highlights">
        <div className="highlight-card">
          <h3>Current Focus</h3>
          <p>Studying the potential applications of natural-language processing in both quantitative and conventional trading</p>
        </div>
        <div className="highlight-card">
          <h3>Recent Achievement</h3>
          <p>M3 Mathworks Math Modeling Challenge Semifinalist with $1,500 scholarship</p>
        </div>
        <div className="highlight-card">
          <h3>Passion Project</h3>
          <p>VCTStats: Novel heuristics for Valorant Champions Tour professional players, derived from correlation matrix-based multiple regressions</p>
        </div>
      </div>
    </div>
  );

  const EducationSection = () => (
    <div className="section">
      <div className="section-header">
        <GraduationCap size={32} />
        <h2 className="section-title">Education</h2>
      </div>
      {resumeData.education.map((edu, index) => (
        <div key={index} className="education-card">
          <div className="card-header">
            <div className="card-main">
              <h3 className="institution">{edu.institution}</h3>
              <p className="degree">{edu.degree}</p>
              {edu.status && <span className="status-badge">{edu.status}</span>}
            </div>
            <div className="card-meta">
              <div className="meta-item">
                <Calendar size={16} />
                <span>{edu.period}</span>
              </div>
              <div className="meta-item">
                <MapPin size={16} />
                <span>{edu.location}</span>
              </div>
            </div>
          </div>
          <div className="card-details">
            <div className="detail-grid">
              <div className="detail-section">
                <h4>Activities & Leadership</h4>
                <ul>
                  {edu.activities.map((activity, i) => (
                    <li key={i}>{activity}</li>
                  ))}
                </ul>
              </div>
              <div className="detail-section">
                <h4>Key Courses</h4>
                <ul>
                  {edu.courses.map((course, i) => (
                    <li key={i}>{course}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const ExperienceSection = () => (
    <div className="section">
      <div className="section-header">
        <Briefcase size={32} />
        <h2 className="section-title">Experience</h2>
      </div>
      {resumeData.experience.map((exp, index) => (
        <div key={index} className="experience-card">
          <div className="timeline-dot"></div>
          <div className="card-content">
            <div className="card-header">
              <div className="card-main">
                <h3 className="company">{exp.company}</h3>
                <p className="position">{exp.position}</p>
              </div>
              <div className="card-meta">
                <div className="meta-item">
                  <Calendar size={16} />
                  <span>{exp.period}</span>
                </div>
                <div className="meta-item">
                  <MapPin size={16} />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>
            <div className="achievements">
              {exp.achievements.map((achievement, i) => (
                <div key={i} className="achievement-item">
                  <span className="achievement-bullet">•</span>
                  <p>{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const ProjectsSection = () => (
    <div className="section">
      <div className="section-header">
        <Code2 size={32} />
        <h2 className="section-title">Projects</h2>
      </div>
      {resumeData.projects.map((project, index) => (
        <div key={index} className="project-card">
          <div className="project-header">
            <h3 className="project-name">{project.name}</h3>
            <span className="project-period">{project.period}</span>
          </div>
          <div className="project-meta">
            <div className="tech-stack">
              <span className="tech-label">Technologies: </span>
              <span className="tech-list">{project.technologies.join(', ')}</span>
            </div>
          </div>
          <div className="project-description">
            {project.description.map((desc, i) => (
              <div key={i} className="description-item">
                <span className="description-bullet">•</span>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  const SkillsSection = () => (
    <div className="section">
      <div className="section-header">
        <Trophy size={32} />
        <h2 className="section-title">Skills & Accomplishments</h2>
      </div>
      
      <div className="skills-container">
        <div className="skills-list">
          <div className="skill-category">
            <div className="category-header">
              <Code2 size={24} />
              <h3>Programming Languages</h3>
            </div>
            <p className="skills-text">
              {resumeData.skills.programming.join(', ')}
            </p>
          </div>
          
          <div className="skill-category">
            <div className="category-header">
              <Award size={24} />
              <h3>Libraries & Tools</h3>
            </div>
            <p className="skills-text">
              {resumeData.skills.libraries.join(', ')}
            </p>
          </div>
          
          <div className="skill-category">
            <div className="category-header">
              <Trophy size={24} />
              <h3>Other Skills</h3>
            </div>
            <p className="skills-text">
              {resumeData.skills.other.join(', ')}
            </p>
          </div>
        </div>

        <div className="languages-section">
          <h3>Languages</h3>
          <div className="language-items">
            <div className="language-item">
              <span className="language">English</span>
              <span className="proficiency">{resumeData.languages.english}</span>
            </div>
            <div className="language-item">
              <span className="language">Korean</span>
              <span className="proficiency">{resumeData.languages.korean}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="accomplishments-section">
        <h3>Major Accomplishments</h3>
        <div className="accomplishments-grid">
          {resumeData.accomplishments.map((acc, index) => (
            <div key={index} className="accomplishment-card">
              <div className="accomplishment-header">
                <h4>{acc.title}</h4>
                <span className="accomplishment-period">{acc.period}</span>
              </div>
              <p className="accomplishment-description">{acc.description}</p>
              <div className="accomplishment-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderActiveSection = () => {
    switch (activeTab) {
      case 'about': return <AboutSection />;
      case 'education': return <EducationSection />;
      case 'experience': return <ExperienceSection />;
      case 'projects': return <ProjectsSection />;
      case 'skills': return <SkillsSection />;
      default: return <AboutSection />;
    }
  };

  return (
    <div className="portfolio">
      <nav className="tab-navigation">
        <div className="nav-container">
          <div className="nav-brand">
            <User size={24} />
            <span>Andrew Choi</span>
          </div>
          <div className="tabs">
            <TabButton id="about" label="About" icon={User} isActive={activeTab === 'about'} onClick={setActiveTab} />
            <TabButton id="education" label="Education" icon={GraduationCap} isActive={activeTab === 'education'} onClick={setActiveTab} />
            <TabButton id="experience" label="Experience" icon={Briefcase} isActive={activeTab === 'experience'} onClick={setActiveTab} />
            <TabButton id="projects" label="Projects" icon={Code2} isActive={activeTab === 'projects'} onClick={setActiveTab} />
            <TabButton id="skills" label="Skills" icon={Trophy} isActive={activeTab === 'skills'} onClick={setActiveTab} />
          </div>
        </div>
      </nav>
      
      <main className="content">
        {renderActiveSection()}
      </main>
      
      <footer className="footer">
        <p>© 2025 Andrew Choi. Built with React & Firebase.</p>
      </footer>
    </div>
  );
};

export default Portfolio;