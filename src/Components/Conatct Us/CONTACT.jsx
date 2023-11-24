import React from 'react';
import './contact.css';
import contact from '../../assets/contact.jpg';
import { Phone } from 'lucide-react';
import { Mail } from 'lucide-react';
import { MessageCircle } from 'lucide-react';
import { Video } from 'lucide-react';

const CONTACT = () => {
  return (
    <div className="c-wrapper">
      <div className="c-container">
        <div className="c-left">
          <div className="upper-div">
            <h3>Our Contact Us </h3>
            <h2>Easy to contact us</h2>
            <p>
              We always ready to help by provide best services for you.We
              believe a good place to live can <br></br>make your life better.{' '}
            </p>
          </div>
          <div className="lower-div">
            <div className="rowCard">
              <div className="card">
                <div className="start">
                  <div className="logo">
                    <Phone color="#2ae5c5" strokeWidth={1.5} />
                  </div>
                  <div className="card-detail">
                    <h3>Call</h3>
                    <p>021 345 7334</p>
                  </div>
                </div>
                <div className="card-btn">
                  <button className="btn"> call now</button>
                </div>
              </div>
              <div className="card">
                <div className="start">
                  <div className="logo">
                    <Video color="#11b6df" />
                  </div>
                  <div className="card-detail">
                    <h3>Video Call</h3>
                    <p>021 345 7334</p>
                  </div>
                </div>
                <div className="card-btn">
                  <button className="btn"> Video Call now</button>
                </div>
              </div>
            </div>
            <div className="rowCard">
              <div className="card">
                <div className="start">
                  <div className="logo">
                    <MessageCircle color="#11b6df" />
                  </div>
                  <div className="card-detail">
                    <h3>Chat</h3>
                    <p>021 345 7334</p>
                  </div>
                </div>
                <div className="card-btn">
                  <button className="btn"> chat now</button>
                </div>
              </div>
              <div className="card">
                <div className="start">
                  <div className="logo">
                    <Mail color="#11b6df" />
                  </div>
                  <div className="card-detail">
                    <h3>Message</h3>
                    <p>021 345 7334</p>
                  </div>
                </div>
                <div className="card-btn">
                  <button className="btn"> message now</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="c-right">
          <img src={contact} alt="Image" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default CONTACT;
