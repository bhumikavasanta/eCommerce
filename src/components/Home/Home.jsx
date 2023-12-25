import React from 'react';
import './styles.css';
import HeroSection from '../HeroSection/HeroSection';
import Services from '../Footer/Services';
import Partners from '../Footer/Partners';

const Home = () => {
  return (
    <section className='home'>
      <HeroSection />
      <Services />
      <Partners />
    </section>
  )
}

export default Home