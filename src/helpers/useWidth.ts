import { useState, useEffect } from "react";

const useWidth = ():number => {
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  
    useEffect(() => {
      const windowWidthHandler = () => {
        setWindowWidth(window.innerWidth);
      }
      window.addEventListener("resize", windowWidthHandler);
  
      return () => {
        window.removeEventListener("resize", windowWidthHandler);
      }
    })
  
    return windowWidth;
  }

export default useWidth;