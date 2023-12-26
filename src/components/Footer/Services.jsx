import React from 'react';
import './styles.css';
import { TbTruckDelivery } from 'react-icons/tb';
import { MdSecurity } from 'react-icons/md';
import { GiReceiveMoney } from 'react-icons/gi';
import { RiSecurePaymentLine } from 'react-icons/ri';

const Services = () => {
  return (
    <section className='services'>
        <div className="center-text">
          <div className="grid grid-three-column">
            <div className="services-1">
              <div>
                <TbTruckDelivery className='icon' />
                <h3>
                  Super Fast and Free Delivery
                </h3>
              </div>
            </div>
            <div className="services-2">
              <div className="services-column-2">
                <div>
                  <MdSecurity className='icon' />
                  <h3>
                    Non Contact Shipping
                  </h3>
                </div>
              </div>
              <div className="services-column-2">
                <div>
                  <GiReceiveMoney className='icon' />
                  <h3>
                    Money Back Guaranteed
                  </h3>
                </div>
              </div>
            </div>
            <div className="services-3">
              <div>
                <RiSecurePaymentLine className='icon' />
                <h3>
                  Super Secure Payment System
                </h3>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Services