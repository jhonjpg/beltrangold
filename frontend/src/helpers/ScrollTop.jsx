import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

const ScrollTop = () => {

      // Move useLocation hook inside the Auth component

      const {pathname} = useLocation()
  

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the route changes
  }, [pathname]);


  return null
}

export default ScrollTop