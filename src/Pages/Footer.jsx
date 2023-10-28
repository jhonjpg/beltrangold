import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';


const Footer = () => {

  const { t } = useTranslation(); // Obtiene la función de traducción

  return (
    <footer className="w-full p-1 h-72 overflow-hidden">
      <ul className="w-full h-full flex items-center justify-center flex-wrap gap-0">
        <li className="w-2/4 h-2/4 md:w-1/4 rounded-full overflow-hidden">
          <img className="w-full h-full object-contain" src="/bc.jpg" alt="" />
        </li>
        <li className="w-2/4 h-2/4 flex flex-col justify-center items-center gap-1 md:w-1/4 justify-start">
          <strong className="text-xl">Información</strong>
          <p className="text-gray-500"> <Link to="/BeltranCo/about">  {t('about')}</Link></p>
          <p className="text-gray-500"> <Link to="/BeltranCo/about">  {t('contact')}</Link></p>
        </li>
        <li className="w-2/4 h-2/4 flex flex-col justify-start items-center gap-1 md:w-1/4">
          <strong className="text-xl">Productos</strong>
   <p className="text-gray-500"> <Link to="/BeltranCo/ring">{t('rings')}</Link></p>
<p className="text-gray-500"> <Link to="/BeltranCo/pendant">{t('Pendant')}</Link></p>
<p className="text-gray-500"> <Link to="/BeltranCo/chain">{t('chain')}</Link></p>
<p className="text-gray-500"> <Link to="/BeltranCo/bracelet">{t('bracelet')}</Link></p>

        </li>
        <li className="w-2/4 h-2/4 flex flex-col justify-start items-center gap-1 md:w-1/4">
          <strong className="text-xl">Contáctanos</strong>
          <p className="text-gray-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="black">
  <path d="M20.59 11l1.58-1.59L19 6.42l-1.16 1.17L17 6.59V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8.59L10 6.42 12.41 9 14 7.41 14.59 7l2.17 2.17L20.59 11zM12 2a1 1 0 0 0-1 1v8.59l-4.29-4.29L4 12l3.59 3.59 4.29-4.29H12a1 1 0 0 0 0 2h8V3a1 1 0 0 0-1-1h-9z"/>
</svg>
 809-343-3323</p>
          <p className="text-gray-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="black">
  <path d="M22 5.98a2 2 0 0 0-2.002-2H4.002A2 2 0 0 0 2 5.98V18a2 2 0 0 0 2.002 2H20a2 2 0 0 0 2-2V5.98zM12.416 13l8.294-5.8H4.302L12.416 13zm9.26-7.707a1 1 0 0 0-1.333-.123l-8.26 5.782-8.253-5.78a1 1 0 0 0-1.456 1.11l9.48 6.636a2 2 0 0 0 2.919 0l9.48-6.635a1 1 0 0 0 .123-1.335z"/>
</svg>
beltranco@gmail.com</p>
          <div className="socialNet">
            <a href="https://www.instagram.com/jonathan_jjpg/" target="_blank" className="socialContainer containerOne">
              <svg className="socialSvg instagramSvg" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.780-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-3.07 1.87-3.75 3.65 3.95c.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
            </a>
        
           
            <a href="https://api.whatsapp.com/send?phone=18496237873" className="socialContainer containerFour" target="_blank">
              <svg className="socialSvg whatsappSvg" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.480 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
              </svg>
            </a>
          </div>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
