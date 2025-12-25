import React from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";
import Fade from "../components/animations/Fade";
import "../css/resume.scss";
import { useLanguage } from "../contexts/LanguageContext";
import data, { getText } from "../data";

// Resume data extracted from Resume.pdf
const resumeData = {
  name: "Yahye Bashir",
  title: "Robotics Engineer & AI Researcher",
  contact: {
    email: "yaxye2200@gmail.com",
    linkedin: "https://www.linkedin.com/in/yahye-bashiir-b5922b140/",
    github: "https://github.com/yayabash",
    scholar: "https://scholar.google.com/citations?hl=en&user=0YSkT7UAAAAJ"
  },
  education: [
    {
      school: "Bursa Technical University",
      degree: "MSc Mechatronics Engineering (AI Option)",
      years: "2022 – 2024",
      details: [
        "GPA: 3.13, specialized in robotics, AI, control systems, embedded systems",
        "President's Scholarship, Sanford Flaming Foundation Award, Dean's Honor List"
      ]
    },
    {
      school: "ROBOT TECHNOLOGIES AND INTELLIGENT SYSTEMS RESEARCH CENTER",
      degree: "Researcher",
      years: "2023 – 2024",
      details: [
        "Published in IEEE Robotics and Automation Letters",
        "Researched human perception of robot behaviors"
      ]
    },
    {
      school: "Northeastern University",
      degree: "Modern Robotics Specialization (In Progress)",
      years: "2024 – Present",
      details: [
        "Focus: classical control, RL for mobile robots"
      ]
    }
  ],
  experience: [
    {
      company: "Drone Market",
      title: "Mechanical Engineering Intern",
      years: "2024",
      details: [
        "Designed and prototyped drone components",
        "Collaborated with cross-functional teams"
      ]
    },
    {
      company: "NVIDIA",
      title: "Robotics Research Intern",
      years: "2023",
      details: [
        "Worked on Isaac Sim and AI robotics projects"
      ]
    },
    {
      company: "Tesla",
      title: "Autopilot Intern",
      years: "2022",
      details: [
        "Contributed to Autopilot software and testing"
      ]
    }
  ],
  skills: [
    "Python", "C/C++", "ROS/ROS2", "OpenCV", "TensorFlow", "PyTorch", "SolidWorks", "Isaac Sim", "Embedded Systems"
  ]
};

const ResumeSection = () => (
  <div className="section" id="resume">
    <div className="container">
      <Fade bottom cascade distance="20px">
        <h1>Resume</h1>
      </Fade>
      <Fade bottom duration={1000} distance="20px">
        <div className="resume-block">
          <h2>{resumeData.name}</h2>
          <h3>{resumeData.title}</h3>
          <div className="resume-contact">
            <span>Email: <a href={`mailto:${resumeData.contact.email}`}>{resumeData.contact.email}</a></span> | 
            <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
            <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer">GitHub</a> | 
            <a href={resumeData.contact.scholar} target="_blank" rel="noopener noreferrer">Scholar</a>
          </div>
          <h4>Education</h4>
          <ul>
            {resumeData.education.map((edu, idx) => (
              <li key={idx}>
                <strong>{edu.school}</strong> — {edu.degree} ({edu.years})
                <ul>
                  {edu.details.map((d, i) => <li key={i}>{d}</li>)}
                </ul>
              </li>
            ))}
          </ul>
          <h4>Experience</h4>
          <ul>
            {resumeData.experience.map((exp, idx) => (
              <li key={idx}>
                <strong>{exp.company}</strong> — {exp.title} ({exp.years})
                <ul>
                  {exp.details.map((d, i) => <li key={i}>{d}</li>)}
                </ul>
              </li>
            ))}
          </ul>
          <h4>Skills</h4>
          <p>{resumeData.skills.join(", ")}</p>
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
