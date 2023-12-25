import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';
import HeroLogo from '../../assets/heroLogo.jpg';

const HeroSection = () => {
  return (
    <section className='hero'>
        <div className="container">
            <div className="grid grid-two-column">
                <div className="hero-section-data">
                    <p className="intro-data">
                        Welcome to
                    </p>
                    <h1>
                        Myntra
                    </h1>
                    <p>
                    Get The Best Of Fashion From Your Favourite Brands On Myntra At Great Deals & Discounts. Shoppable Looks From India's Top Influencers At Myntra Studio. Hurry Up And Shop Now. Premium Brands. Jackpot Savings. Save on Fashion. 30 Days Return.
                    </p>
                    <NavLink>
                        <button>
                            Start Shopping
                        </button>
                    </NavLink>
                </div>
                <div className="hero-section-image">
                    <figure>
                        <img src={HeroLogo} alt="HeroLogo" className="img-style" />
                    </figure>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection