
import React from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";
import Fade from "../components/animations/Fade";
import "../css/resume.scss";


import data from "../data";

const ResumeSection = () => (
  <div className="section" id="resume">
    <div className="container">
      <Fade bottom cascade distance="20px">
        <h1>Resume</h1>
      </Fade>
      <Fade bottom duration={1000} distance="20px">
        <div className="resume-block">
          {/* Contact */}
          <h2>{data.name.en}</h2>
          <h3>Robotics Engineer & AI Researcher</h3>
          <div className="resume-contact">
            <span>Email: <a href="mailto:yaxye2200@gmail.com">yaxye2200@gmail.com</a></span> |
            <a href="https://www.linkedin.com/in/yahye-bashiir-b5922b140/" target="_blank" rel="noopener noreferrer">LinkedIn</a> |
            <a href="https://github.com/yayabash" target="_blank" rel="noopener noreferrer">GitHub</a> |
            <a href="https://scholar.google.com/citations?hl=en&user=0YSkT7UAAAAJ" target="_blank" rel="noopener noreferrer">Scholar</a>
          </div>
          <div style={{textAlign: 'center', marginBottom: '1.5em'}}>
            <a href="/Resume-1.pdf" target="_blank" rel="noopener noreferrer" className="resume-download-btn">View/Download PDF Resume</a>
          </div>



          {/* MORIA / NVIDIA */}
          <h4>MORIA / NVIDIA</h4>
          <p>{data.nvidiaExperience[0].en}</p>

          {/* Education */}
          <h4>Education</h4>
          <ul>
            {data.education.map((edu, idx) => (
              <li key={idx}>
                <strong>{edu.title.en}</strong> — {edu.para.en}
                <ul>
                  {edu.description.map((d, i) => <li key={i}>{d.en}</li>)}
                </ul>
              </li>
            ))}
          </ul>

          {/* Internships */}
          <h4>Internships</h4>
          <ul>
            {data.projects.map((proj, idx) => (
              <li key={idx}>
                <strong>{proj.position.en}</strong> — {proj.para.en}
                <ul>
                  {proj.description.map((d, i) => <li key={i}>{d.en}</li>)}
                </ul>
              </li>
            ))}
          </ul>

          {/* Projects */}
          <h4>Projects</h4>
          <ul>
            {data.projectsCarouselItems.map((proj, idx) => (
              <li key={idx}>
                <strong>{proj.title.en}</strong>
                <div>{proj.description.en}</div>
              </li>
            ))}
          </ul>

          {/* Volunteer */}
          <h4>Volunteer</h4>
          <ul>
            {data.volunteer.map((vol, idx) => (
              <li key={idx}>
                <strong>{vol.title.en}</strong> — {vol.organization.en} ({vol.date})
                <ul>
                  {vol.details.map((d, i) => <li key={i}>{d.en}</li>)}
                </ul>
              </li>
            ))}
          </ul>

          {/* Certifications */}
          <h4>Certifications</h4>
          <ul>
            {data.certifications.map((cert, idx) => (
              <li key={idx}>
                <strong>{cert.title.en}</strong> — {cert.issuer.en} ({cert.date.en})
                <div>{cert.description.en}</div>
                <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">View Credential</a>
              </li>
            ))}
          </ul>

          {/* Skills */}
          <h4>Skills</h4>
          <ul>
            {data.skills.map((skill, idx) => (
              <li key={idx}>{skill.para}</li>
            ))}
          </ul>
        </div>
      </Fade>
    </div>
  </div>
);

export default function Resume() {
  return (
    <div>
      <Layout>
        <SEO title="Resume" />
        <ResumeSection />
      </Layout>
    </div>
  );
}


