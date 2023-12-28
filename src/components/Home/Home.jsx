import React from 'react';
import './styles.css';
import HeroSection from '../HeroSection/HeroSection';
import Services from '../Footer/Services';
import Partners from '../Footer/Partners';
import Footer from '../Footer/Footer';
import FeatureProducts from './FeatureProducts';

const Home = () => {
  return (
    <section className='home'>
      <HeroSection />
      <FeatureProducts />
      <Services />
      <Partners />
      <Footer />
    </section>
  )
}

export default Home