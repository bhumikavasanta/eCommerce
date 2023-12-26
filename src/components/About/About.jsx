import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import { useProductContext } from '../../context/ProductContext';
import Footer from '../Footer/Footer';

const About = () => {

  const { name } = useProductContext();

  return (
    <section className='about'>
      <HeroSection />
      {name}
      <Footer />
    </section>
  )
}

export default About