import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="w-full p-4 md:p-3 bg-black text-white absolute">


      <div className="w-full flex flex-col-reverse  justify-between gap-5 md:flex-row">
        <div className="w-full h-50 scale-75 md:w-3/12	 text-center md:text-left  md:mb-0">
          <img src="./logo.png" alt="" className="w-full h-full object-contain" />
        </div>


        <div className="w-full md:w-2/12	 text-center md:text-left mb-4 md:mb-0">
          <strong className="text-xl ">Information</strong>
          <p className="text-gray-400 hover:text-white mb-2"><Link to="/about">{t('about')}</Link></p>
          <p className="text-gray-400 hover:text-white mb-2"><Link to="/contact">{t('contact')}</Link></p>
        </div>


        <div className="w-full md:w-2/12	 text-center md:text-left mb-4 md:mb-0">
          <strong className="text-xl ">{t('jewelrys')}</strong>
          <p className="text-gray-400 hover:text-white mb-2"><Link to="/ring">{t('rings')}</Link></p>
          <p className="text-gray-400 hover:text-white mb-2"><Link to="/pendant">{t('pendant')}</Link></p>
          <p className="text-gray-400 hover:text-white mb-2"><Link to="/chain">{t('chain')}</Link></p>
          <p className="text-gray-400 hover:text-white mb-2"><Link to="/bracelet">{t('bracelet')}</Link></p>
        </div>
        
        <div className="w-full md:w-2/12	 text-center md:text-left mb-4 md:mb-0">
        <strong className="text-xl "><Link to="/contact"> {t('contactUs')}</Link></strong>

          <p className="text-gray-400 hover:text-white mb-2">
           
            TEL: 908-591-5193
          </p>
          <p className="text-gray-400 hover:text-white mb-2">
          
           EMAIL:  beltrancoenterprise@gmail.com
          </p>
        

        </div>
        <div className="w-full md:w-1/4 text-center md:text-left mb-4 md:mb-0">
          <strong className="text-xl  w-full pb-10"> FOLLOW US</strong>


          <Link  to="https://www.instagram.com/beltrangold_/" target="_blank" className="text-center w-full flex justify-center  items-center p-10 md:justify-start ">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg>
  </Link>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
