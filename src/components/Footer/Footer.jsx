import React from 'react';
import './styles.css';
import { NavLink } from 'react-router-dom';
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <section><section>
          <div className="contact-short">
              <div className="grid grid-two-column">
                  <div>
                      <h3>
                          Ready to get started?
                      </h3>
                      <h3>
                          Talk to us Today
                      </h3>
                  </div>
                  <div>
                      <button>
                          <NavLink to="/contact">
                              Get Started
                          </NavLink>
                      </button>
                  </div>
              </div>
          </div>
      </section>
      <footer>
        <div className="footer-container grid grid-four-column">
            <div className="footer-about">
                <h3>
                    Myntra Tech
                </h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum metus id lorem.
                </p>
            </div>
            <div className="footer-subscribe">
                <h3>
                    Subscribe to get Important Updates
                </h3>
                <form action="#">
                    <input type="email" placeholder='Your Email' />
                    <input type="submit" value="subscribe" />
                </form>
            </div>
            <div className="footer-social">
              <h3>Follow Us</h3>
              <div className="footer-social--icons">
                <div>
                  <FaDiscord className="icons" />
                </div>
                <div>
                  <FaInstagram className="icons" />
                </div>
                <div>
                  {/* <a
                    href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                    target="_blank"> */}
                    <FaYoutube className="icons" />
                  {/* </a> */}
                </div>
              </div>
            </div>
            <div className="footer-contact">
              <h3>Call Us</h3>
              <h3>+91 12345678978</h3>
            </div>
          </div>

          <div className="footer-bottom--section">
            <hr />
            <div className="center-text">
              <p>
                @{new Date().getFullYear()} ThapaTechnical. All Rights Reserved
              </p>
            </div>
          </div>
      </footer>
          </section>
  )
}

export default Footer