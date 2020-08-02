import { useEffect } from 'react';

//check whether the clicked element is our current element
//or if the clicked element contains the current element
//If so, we don’t do anything, otherwise, call a function, handler (for example setting the Navbar open state to false).
export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
};
