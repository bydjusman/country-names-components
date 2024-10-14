import React from 'react';
import CountryInfoPakistan from './components/CountryInfoPakistan/page';
import CountryInfoIndia from './components/CountryInfoIndia/page';
import CountryInfoUSA from './components/CountryInfoUSA/page';
import CountryInfoChina from './components/CountryInfoChina/page';

const HomePage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <CountryInfoPakistan />
      <CountryInfoIndia />
      <CountryInfoUSA />
      <CountryInfoChina />

      <div style={{ marginTop: '30px' }}>
        <a 
          href="https://github.com/bydjusman" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ marginRight: '20px', textDecoration: 'none', color: '#000' }}
        >
          GitHub ★
        </a>
        <a 
          href="https://linkedin.com/in/ᑌs๓ᴀñ̰-khokhar-bb02a2290" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', color: '#0077B5' }}
        >
          LinkedIn ★
        </a>
      </div>


    </div>
  );
};

export default HomePage;