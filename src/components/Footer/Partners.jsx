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
        <div className="center-text">
          <h3>
            Trusted by 1000+ companies
          </h3>
          <div className="brand-section-slider">
            <div>
              <img className="slide" src={allenSolly} alt="Allen Solly" />
            </div>
            <div>
              <img className="slide" src={levis} alt="Levis" />
            </div>
            <div>
              <img className="slide" src={baggit} alt="Baggit" />
            </div>
            <div>
              <img className="slide" src={calvinKlein} alt="Calvin Klein" />
            </div>
          </div>
        </div>
    </section>
    </section>
  )
}

export default Partners