import React from 'react';
import './styles.css';
import allenSolly from '../../assets/allenSolly.png';
import levis from  '../../assets/levis.jpg';
import baggit from '../../assets/baggit.png';
import calvinKlein from '../../assets/calvinKlein.jpg';

const Partners = () => {
  return (
    <section className='partners'>
      <section className="brand-section">
        <div className="container">
          <h3>
            Trusted by 1000+ companies
          </h3>
          <div className="brand-section-slider">
            <div className="slide">
              <img src={allenSolly} alt="Allen Solly" />
            </div>
            <div className="slide">
              <img src={levis} alt="Levis" />
            </div>
            <div className="slide">
              <img src={baggit} alt="Baggit" />
            </div>
            <div className="slide">
              <img src={calvinKlein} alt="Calvin Klein" />
            </div>
          </div>
        </div>
    </section>
    </section>
  )
}

export default Partners