import React, { useState } from 'react';
import './values.css';
import Accordingvalue from './Accordingvalue';
import valuespng from '../../assets/value.png';
import data from '../../utils/value';

const values = () => {
  const [value, setValue] = useState(data);

  return (
    <div className="values-wrapper">
      <div className=" innerwidth value-container">
        <div className="left-img">
          <img src={valuespng} loading="lazy" alt="Values Picture" />
        </div>
        <div className="right-container">
          <div className="upper-info">
            <h3>Our Value</h3>
            <h2>Value we give to you</h2>
            <div className="desription">
              <p>
                We always ready to help by providing the best services for you.
              </p>
              <p>We Believe a good place to live can make your life Better. </p>
            </div>
          </div>
          <section className="info">
            {data.map((value) => {
              return <Accordingvalue key={value.id} {...value} />;
            })}
          </section>
        </div>
      </div>
    </div>
  );
};

export default values;
