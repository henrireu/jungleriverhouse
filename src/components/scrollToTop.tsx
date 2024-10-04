import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Vierittää ylös
  }, [pathname]); // Tämä effect ajetaan aina kun pathname muuttuu

  return null; // Ei renderöi mitään
};

export default ScrollToTop;