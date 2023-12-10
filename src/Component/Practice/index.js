import React from 'react'
import './practice.css' 
import bussinessLawImg from '../../Assets/business.png'
import partnershipLawImg from '../../Assets/partner.png'
import realEstateLawImg from '../../Assets/estate.png'
import business2LawImg from '../../Assets/busines.png'
import elderAbuseLawImg from'../../Assets/elder.png'
import landLordDisputeLawImg  from '../../Assets/landlord.png'
  
const PracticeA = () => {
  return (
    <div className="practicecont" id="practice-area">
      <div className="practicetext">
        Area of Practices
      </div>

      <div className="practiceimg">
        <div className="practiceimg1  relative-container">
          <img src={bussinessLawImg} alt="practice-images" />
          <p>Business LAW</p>
        </div>

        <div className="practiceimg2 relative-container  ">
          <img src={partnershipLawImg} alt="practice-images" />
          <p>Partnership LAW </p>
        </div>

        <div className="practiceimg3 relative-container  ">
          <img src={realEstateLawImg} alt="practice-images" />
          <p>Real Estate LAW</p>
        </div>

        <div className="practiceimg4 relative-container ">
          <img src={business2LawImg} alt="practice-images" />
          <p>Business LAW</p>
        </div>

        <div className="practiceimg5 relative-container ">
          <img src={landLordDisputeLawImg} alt="practice-images" />
          <p>LandLord DISPUTES</p>
        </div>

        <div className="practiceimg6 relative-container  ">
          <img src={elderAbuseLawImg} alt="practice-images" />
          <p>Elder ABUSE</p>
        </div>
      </div>
    </div>
  );
};


export default PracticeA