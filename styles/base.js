import css from 'styled-jsx/css';

export default css.global`
  :root {
    /* colors */

    --primary-dark: #346278;
    --primary-medium: #539b92;
    --primary-light: #7fbba1;
    --white: #fff
    --black: #000

    --gradient: linear-gradient(
      to right,
      var(--primary-dark),
      var(--primary-medium),
      var(--primary-light)
    );

    /* Shadows Vercel */

    --shadow-smallest: 0px 4px 8px rgba(0, 0, 0, 0.12);
    --shadow-small: 0 5px 10px rgba(0, 0, 0, 0.12);
    --shadow-medium: 0 8px 30px rgba(0, 0, 0, 0.12);
    --shadow-large: 0 30px 60px rgba(0, 0, 0, 0.12);
    --shadow-hover: 0 30px 60px rgba(0, 0, 0, 0.12);

    /* Shadows level up tuts */

    --elevation-0: inset 0 7px 9px -7px rgba(0,0,0,0.7);
    --elevation-1: 0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24);
    --elevation-2: 0 3px 6px rgba(0,0,0,0.16),0 3px 6px rgba(0,0,0,0.23);
    --elevation-3: 0 10px 20px rgba(0,0,0,0.1),0 6px 6px rgba(0,0,0,0.1);
    --elevation-4: 0 14px 28px rgba(0,0,0,0.25),0 10px 10px rgba(0,0,0,0.22);
    --elevation-5: 0 19px 38px rgba(0,0,0,0.3),0 15px 12px rgba(0,0,0,0.22);

    /* max-widt content */
    --content-width: 1200px;
  }
`;
