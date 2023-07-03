import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  // Access the current location object from react-router-dom
  const { pathname } = useLocation();

  // Scroll to the top of the page whenever the pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // This component doesn't render any content, so it returns null
  return null;
};
