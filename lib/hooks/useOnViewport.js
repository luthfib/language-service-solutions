import { useEffect } from "react"; //If so, we don’t do anything, otherwise, call a function, handler (for example setting the Navbar open state to false).

const useOnViewport = (ref) => {
  useEffect(() => {
    const handler = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const visible =
        rect.top + rect.height / 2 <=
        (window.innerHeight || document.documentElement.clientHeight);

      return visible ? ref?.current.classList.add("animate") : "";
    };
    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, [ref]);
};

export { useOnViewport };
