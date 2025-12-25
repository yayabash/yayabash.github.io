import React, { useState } from "react"
import Card from "./atoms/Card"
import Fade from "./animations/Fade"
import { useLanguage } from "../contexts/LanguageContext"
import { getText } from "../data"
import siteData from "../data"
import Modal from "./modal"
import "../styles/volunteer.scss"

const Volunteer = () => {
  const { language } = useLanguage();
  const [openModal, setOpenModal] = useState(false);
  const [id, setId] = useState(0);

  // Navigation functions for modal
  const handlePrevious = () => {
    if (id > 0) {
      setId(id - 1);
    }
  };
  
  const handleNext = () => {
    if (id < siteData.volunteer.length - 1) {
      setId(id + 1);
    }
  };
  
  return (
    <div className="section" id="volunteer">
      <div className="container">
        <Fade bottom cascade distance="20px">
          <h1>{getText({ en: "Volunteer" }, language)}</h1>
        </Fade>
        <div className="volunteer-wrapper">
          <div className="grid">
            <Fade bottom distance="20px">
              {siteData.volunteer && siteData.volunteer.map((volunteer, index) => (
                <Card
                  key={index}
                  id={index}
                  heading={getText(volunteer.title, language)}
                  paragraph={getText(volunteer.organization, language)}
                  imgUrl={volunteer.imageSrc}
                  setOpenModal={setOpenModal}
                  setId={setId}
                  type="volunteer"
                ></Card>
              ))}
            </Fade>
          </div>
        </div>

        {openModal && <Modal 
          closeModal={setOpenModal} 
          id={id} 
          totalItems={siteData.volunteer.length}
          onPrevious={handlePrevious}
          onNext={handleNext}
          type="volunteer"
          volunteerData={siteData.volunteer[id]}
        />}
      </div>
    </div>
  )
}

export default Volunteer
