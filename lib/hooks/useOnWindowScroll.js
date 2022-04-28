import { useEffect } from "react"; //If so, we don’t do anything, otherwise, call a function, handler (for example setting the Navbar open state to false).
export const useOnWindowScroll = (ref, css, scroll) => {
  useEffect(() => {
    // console.log(ref);
    const scrolled = () => {
      if (ref.current) {
        if (window.scrollY > scroll) {
          ref.current.classList.add(`${css}`);
        } else {
          // console.log(ref);
          ref.current.classList.remove(`${css}`);
        }
      }
    };
    window.addEventListener("scroll", scrolled);
    return () => {
      window.removeEventListener("scroll", scrolled);
    };
  }, [ref]);
};
