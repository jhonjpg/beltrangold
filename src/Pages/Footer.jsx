import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="w-full p-4 md:p-8 bg-yellow-50 text-white">
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/4 text-center md:text-left mb-4 md:mb-0">
          <img src="../bc.jpg" alt="" className="w-36 h-36 md:w-full md:h-auto rounded-full object-contain" />
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
          
           EMAIL:  beltrancoenterprise@gmail.com
          </p>
          <div className="socialNet">

</div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
