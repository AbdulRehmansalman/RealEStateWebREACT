import React from 'react';
import prologics from '../../assets/prologis.png';
import equinix from '../../assets/equinix.png';
import tower from '../../assets/tower.png';
import reality from '../../assets/realty.png';
import './company.css'; 

const Company = () => {
  return (
    <>
      <div className="h-company">
        <div className="image-contain">
          <img src={prologics} alt="Company Names" />
        </div>
        <div className="image-contain">
          <img src={tower} alt="Company Names" />
        </div>
        <div className="image-contain">
          <img src={equinix} alt="Company Names" />
        </div>
        <div className="image-contain">
          <img src={reality} alt="Company Names" />
        </div>
      </div>
    </>
  );
};

export default Company;
