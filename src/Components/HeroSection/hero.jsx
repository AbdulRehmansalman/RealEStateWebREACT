import React from 'react';
import { MapPin, Type } from 'lucide-react';
import './hero.css';
import CountUp from 'react-countup';
import heroImage from './../../assets/hero-image.png';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
const hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="hero-container background-color">
        <div className="hero-left">
          <div className="hero-title">
            <div className="orange-circle"></div>
            <motion.h1
              initial={{ y: '2rem', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: 'spring',
              }}
            >
              Discover <br />
              Most Suitable <br />
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 40,
                  strings: ['Property', 'Houses', 'Apartments', 'SportsAreas'],
                }}
              />
            </motion.h1>
          </div>
          <div className="hero-desc">
            <span className="secondary-text">
              Find a variety of properties that suit you very easily
            </span>
            <span className="secondary-text">
              {' '}
              Forget all difficulties in finding a residence for you.
            </span>
          </div>
          <div className="search-bar">
            <MapPin color="rgb(29, 143, 230)" />
            <input type="text" />
            <button className="button1">Search</button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span style={{ paddingLeft: '5px', color: 'orange' }}>+</span>
                <br></br>
                <span className="secondaryText">Premium Product</span>
              </span>
            </div>
            <div className="stat">
              <span>
                <CountUp start={1800} end={2000} duration={4} />
                <span style={{ paddingLeft: '5px', color: 'orange' }}>+</span>
                <br></br>
                <span className="secondaryText">Happy Customer</span>
              </span>
            </div>
            <div className="stat">
              <span>
                <CountUp start={18} end={30} duration={4} />
                <span style={{ paddingLeft: '5px', color: 'orange' }}>+</span>
                <br></br>
                <span className="secondaryText">Award Winning</span>
              </span>
            </div>
          </div>
        </div>
        {/* Right Side  */}
        <div className="hero-right">
          <motion.div
            className="img-container"
            initial={{ y: '7rem', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: 'spring',
            }}
          >
            <img src={heroImage} alt="image" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default hero;
