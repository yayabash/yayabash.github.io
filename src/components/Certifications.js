import React, { useState } from "react"
import Fade from "./animations/Fade"
import { useLanguage } from "../contexts/LanguageContext"
import { getText } from "../data"
import siteData from "../data"
import "../styles/certifications.scss"

const Certifications = () => {
  const { language } = useLanguage()
  const [activeModal, setActiveModal] = useState(null)

  const handleExploreMore = (certIndex) => {
    setActiveModal(certIndex)
  }

  const handleCloseModal = () => {
    setActiveModal(null)
  }

  return (
    <div className="section" id="certifications">
      <div className="container">
        <Fade bottom cascade distance="20px">
          <h1>{getText(siteData.sections.certifications, language)}</h1>
        </Fade>
        <div className="certifications-wrapper">
          <div className="certifications-grid">
            <Fade bottom distance="20px">
              {siteData.certifications && siteData.certifications.map((cert, index) => (
                <div key={index} className="certification-card">
                  <div className="cert-background">
                    {cert.imageSrc && (
                      <img 
                        src={cert.imageSrc} 
                        alt={getText(cert.title, language)}
                        className="cert-image"
                      />
                    )}
                    <div className="cert-overlay"></div>
                  </div>
                  
                  <div className="cert-content">
                    <h3 className="cert-title">{getText(cert.title, language)}</h3>
                    <p className="cert-issuer">{getText(cert.issuer, language)}</p>
                    <button 
                      onClick={() => handleExploreMore(index)}
                      className="cert-btn"
                    >
                      {getText({ en: "Show Credential" }, language)}
                    </button>
                  </div>
                </div>
              ))}
            </Fade>
          </div>
        </div>
      </div>

      {activeModal !== null && (
        <div className="cert-modal-backdrop" onClick={handleCloseModal}>
          <div className="cert-modal" onClick={(e) => e.stopPropagation()}>
            <button className="cert-modal-close" onClick={handleCloseModal}>
              ✕
            </button>
            
            <div className="cert-modal-content">
              {siteData.certifications[activeModal].imageSrc && (
                <img 
                  src={siteData.certifications[activeModal].imageSrc}
                  alt={getText(siteData.certifications[activeModal].title, language)}
                  className="modal-cert-image"
                />
              )}
              
              <div className="cert-details">
                <h3>{getText(siteData.certifications[activeModal].title, language)}</h3>
                <p className="detail-issuer">
                  <strong>{getText({ en: "Issued by:" }, language)}</strong> {getText(siteData.certifications[activeModal].issuer, language)}
                </p>
                <p className="detail-date">
                  <strong>{getText({ en: "Date:" }, language)}</strong> {getText(siteData.certifications[activeModal].date, language)}
                </p>
                <p className="detail-description">
                  {getText(siteData.certifications[activeModal].description, language)}
                </p>
                
                {siteData.certifications[activeModal].credentialId && (
                  <p className="detail-id">
                    <strong>{getText({ en: "Credential ID:" }, language)}</strong> {siteData.certifications[activeModal].credentialId}
                  </p>
                )}
                
                {siteData.certifications[activeModal].credentialUrl && siteData.certifications[activeModal].credentialUrl !== "#" && (
                  <div className="cert-link-container">
                    <a 
                      href={siteData.certifications[activeModal].credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-link-btn"
                    >
                      {getText({ en: "View Full Credential" }, language)}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Certifications
