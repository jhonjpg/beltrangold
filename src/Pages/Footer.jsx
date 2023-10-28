import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="w-full p-4 md:p-8 bg-yellow-50 text-white">
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/4 text-center md:text-left mb-4 md:mb-0">
          <img src="./bc.jpg" alt="" className="w-36 h-36 md:w-full md:h-auto rounded-full object-contain" />
        </div>
        <div className="w-full md:w-1/4 text-center md:text-left mb-4 md:mb-0">
          <strong className="text-xl text-black">Información</strong>
          <p className="text-gray-500 mb-2"><Link to="/beltrangold/about">{t('about')}</Link></p>
          <p className="text-gray-500 mb-2"><Link to="/beltrangold/contact">{t('contact')}</Link></p>
        </div>
        <div className="w-full md:w-1/4 text-center md:text-left mb-4 md:mb-0">
          <strong className="text-xl text-black">Productos</strong>
          <p className="text-gray-500 mb-2"><Link to="/beltrangold/ring">{t('rings')}</Link></p>
          <p className="text-gray-500 mb-2"><Link to="/beltrangold/pendant">{t('pendant')}</Link></p>
          <p className="text-gray-500 mb-2"><Link to="/beltrangold/chain">{t('chain')}</Link></p>
          <p className="text-gray-500 mb-2"><Link to="/beltrangold/bracelet">{t('bracelet')}</Link></p>
        </div>
        <div className="w-full md:w-1/4 text-center md:text-left mb-4 md:mb-0">
        <strong className="text-xl text-black"><Link to="/beltrangold/contact"> {t('contactUs')}</Link></strong>

          <p className="text-gray-500 mb-2">
           
            TEL: 809-343-3323
          </p>
          <p className="text-gray-500 mb-2">
          
           EMAIL:  beltrangold@gmail.com
          </p>
          <div className="socialNet">
  <a href="https://www.instagram.com/jonathan_jjpg/" target="_blank" className="socialContainer containerOne">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
  <path d="M8 1.333a6.667 6.667 0 0 1 6.667 6.667 6.667 6.667 0 0 1-6.667 6.667A6.667 6.667 0 0 1 1.333 8 6.667 6.667 0 0 1 8 1.333zm0 1.333a5.333 5.333 0 0 0-5.334 5.334 5.333 5.333 0 0 0 5.334 5.333 5.333 5.333 0 0 0 5.333-5.333 5.333 5.333 0 0 0-5.333-5.334zm3.814 1.927a.6.6 0 1 1-.6.6.6.6 0 0 1 .6-.6zM8 3.333a4.667 4.667 0 0 0-4.667 4.667 4.667 4.667 0 0 0 4.667 4.667 4.667 4.667 0 0 0 4.667-4.667 4.667 4.667 0 0 0-4.667-4.667zm4.2 9.934a.2.2 0 0 1-.2.2.2.2 0 0 1-.2-.2v-2.467a.2.2 0 0 1 .2-.2h.467a.2.2 0 0 1 .2.2v2.467z"/>
</svg>
 </a>
  <a href="https://www.tiktok.com/your-tiktok-account" target="_blank" className="socialContainer containerFour">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
  <path d="M8 0c-4.416 0-8 3.584-8 8s3.584 8 8 8 8-3.584 8-8-3.584-8-8-8zm0 1.333a6.667 6.667 0 0 1 6.667 6.667 6.667 6.667 0 0 1-6.667 6.667 6.667 6.667 0 0 1-6.667-6.667 6.667 6.667 0 0 1 6.667-6.667zm.867 4.267h-1.733a.533.533 0 0 0-.534.534v5.2c0 .295.24.534.534.534h1.733a.534.534 0 0 0 .533-.534v-5.2a.534.534 0 0 0-.533-.534zm-1.067 6.933a.667.667 0 1 1 0-1.334.667.667 0 0 1 0 1.334zm0 1.333a.933.933 0 1 1 0-1.867.933.933 0 0 1 0 1.867z"/>
</svg>
  </a>
</div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
