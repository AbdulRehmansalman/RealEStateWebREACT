import React, { useState } from 'react';
import './navbar.css';
import logo from '../../Assets/logo.png';
import { Tally3 } from 'lucide-react';
import { XCircle } from 'lucide-react';

const navbar = () => {
  const [toggleMenu, SetToggleMenu] = useState(false);
  return (
    <section className="h-Wrapper background-color">
      <div className="h-container inner-width ">
        <div className="h-image">
          <img src={logo} alt="logo" />
        </div>
        <div className="h-menu">
          <p>
            <a href="#">Residences</a>
          </p>
          <p>
            <a href="#">Our Value</a>
          </p>
          <p>
            <a href="#">Contact us</a>
          </p>
          <p>
            <a href="#">Get Started</a>
          </p>
          <button className="btn-contact">Contact</button>
        </div>
        <div className="toggle-menu">
          {toggleMenu ? (
            <XCircle
              color="#17d0e8"
              strokeWidth={2.5}
              onClick={() => SetToggleMenu(false)}
            />
          ) : (
            <Tally3
              color="#00f1f5"
              strokeWidth={2.75}
              onClick={() => SetToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            /* margin-top: 0.5rem; */
            <div className="menu-toggle-container scale-up-center ">
              <div className="toggle-links">
                <div>
                  <p>
                    <a href="#">Residences</a>
                  </p>
                  <p>
                    <a href="#">Our Value</a>
                  </p>
                  <p>
                    <a href="#">Contact us</a>
                  </p>
                  <p>
                    <a href="#">Get Started</a>
                  </p>
                  <button className="btn-contact">Contact</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default navbar;
