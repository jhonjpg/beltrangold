import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';


const About = () => {
  const { t } = useTranslation(); // Obtiene la función de traducción

  return (
    <section className="about w-screen h-max flex flex-col md:h-max flex-row">
      <div className="w-screen pt-5 flex flex-col justify-center items-center md:flex-row md:p-10">
        <article className="w-full flex flex-col justify-center items-center oro mb-10 md:w-2/4 md:h-full gap-3">
          <h2 className="text-gray-400">{t('aboutUs')}</h2>
          <h1 className="text-2xl w-72 md:text-4xl text-center w-9/12">
            {t('transformingMoments')}
          </h1>
          <div className="flex flex-col w-full items-center md:w-3/4 gap-3">
            <div className="w-11/12 flex gap-2 items-start justify-start">
              <span className="text-black w-10 text-5xl h-12">W</span>
              <p className="text-black-300 w-full text-xl text-start">
                {t('welcomeText')}
              </p>
            </div>
            <p className="text-gray-500 w-10/12 text-sm">
              {t('aboutUsPage')}
            </p>
            <p className="text-gray-500 w-10/12 text-sm">
              {t('skilledArtisans')}
            </p>
           
            <button className="p-2 w-40 text-gray-400 border-2 border-gray-400 border-solid hover:bg-gray-300 hover:text-white ease-linear duration-75">
<Link to="/beltrangold/contact"> {t('contactUs')}</Link></button>

          </div>
        </article>
        <div className="w-full h-60 overflow-hidden md:w-2/4 md:h-5/6">
          <img className="w-full h-full object-contain object-center" src="/about.jpg" alt="" />
        </div>
      </div>
    </section>
  );
}

export default About;
