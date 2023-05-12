import css from 'styled-jsx/css';

export default css.global`
    :root {
        /*  New colors */
        --wheat: #edeae5;
        --yellow: #ffc425;
        --yellow-light: #fce181;
        --blue: #02a5d9;
        --blue-light: #b3e5ff;
        --green: #01b1b0;
        --green-darker: #012b2d;
        --green-light: #9fedd7;

        --rgb-wheat: 237, 234, 229;
        --rgb-yellow: 255, 196, 37;
        --rgb-yellow-light: 252, 225, 12;
        --rgb-blue: 2, 165, 217;
        --rgb-blue-light: 179, 229, 25;
        --rgb-green: 1, 177, 176;
        --rgb-green-darker: 1, 43, 4;
        --rgb-green-light: 159, 237, 21;

        /* colors */

        --primary-dark: #346278;
        --primary-medium: #02a8a3;
        --primary-light: #7fbba1;
        --white: #fff;
        --black: #000;
        --transparent: #ffffff00;

        --gradient: linear-gradient(
            to right,
            var(--primary-dark),
            var(--primary-medium)
        );

        --gradient2: linear-gradient(
            to left,
            var(--primary-dark),
            var(--primary-medium)
        );

        --gradient3: linear-gradient(
            10deg,
            var(--primary-medium),
            var(--primary-dark)
        );

        /* Shadows level up tuts */

        --elevation-0: inset 0 7px 9px -7px rgba(0, 0, 0, 0.7);
        --elevation-1: 0 1px 3px rgba(0, 0, 0, 0.12),
            0 1px 2px rgba(0, 0, 0, 0.24);
        --elevation-2: 0 3px 6px rgba(0, 0, 0, 0.16),
            0 3px 6px rgba(0, 0, 0, 0.23);
        --elevation-3: 0 10px 20px rgba(0, 0, 0, 0.1),
            0 6px 6px rgba(0, 0, 0, 0.1);
        --elevation-4: 0 14px 28px rgba(0, 0, 0, 0.25),
            0 10px 10px rgba(0, 0, 0, 0.22);
        --elevation-5: 0 19px 38px rgba(0, 0, 0, 0.3),
            0 15px 12px rgba(0, 0, 0, 0.22);

        --shadow-primary-dark: 0 10px 20px rgba(52, 98, 120, 0.17),
            0 6px 6px rgba(52, 98, 120, 0.17);
        --shadow-primary-medium: 0 10px 20px rgba(83, 155, 146, 0.17),
            0 6px 6px rgba(83, 155, 146, 0.17);
        --shadow-primary-light: 0 10px 20px rgba(127, 187, 161, 0.17),
            0 6px 6px rgba(127, 187, 161, 0.17);

        --elevation-3-wheat: 0 10px 20px rgba(var(--rgb-wheat), 0.17),
            0 6px 6px rgba(var(--rgb-wheat), 0.17);
        --elevation-3-yellow: 0 10px 20px rgba(var(--rgb-yellow), 0.17),
            0 6px 6px rgba(var(--rgb-yellow), 0.17);
        --elevation-3-yellow-light: 0 10px 20px
                rgba(var(--rgb-yellow-light), 0.17),
            0 6px 6px rgba(var(--rgb-yellow-light), 0.17);
        --elevation-3-blue: 0 10px 20px rgba(var(--rgb-blue), 0.17),
            0 6px 6px rgba(var(--rgb-blue), 0.17);
        --elevation-3-blue-light: 0 10px 20px rgba(var(--rgb-blue-light), 0.17),
            0 6px 6px rgba(var(--rgb-blue-light), 0.17);
        --elevation-3-green: 0 10px 20px rgba(var(--rgb-green), 0.17),
            0 6px 6px rgba(var(--rgb-green), 0.17);
        --elevation-3-green-light: 0 10px 20px
                rgba(var(--rgb-green-light), 0.17),
            0 6px 6px rgba(var(--rgb-green-light), 0.17);
        --elevation-3-green-darker: 0 10px 20px
                rgba(var(--rgb-green-darker), 0.17),
            0 6px 6px rgba(var(--rgb-green-darker), 0.17);

        /* sizes */
        --content-width: 1536px;
        --nav-height: 100px;
        --border-radius: 20px;
        --element-width: 90%;
        --element-padding: 40px 40px;
    }

    @font-face {
        font-family: 'matiasregular';
        src: url('/fonts/matias-webfont.woff2') format('woff2'),
            url('/fonts/matias-webfont.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;800&display=swap');

    html,
    body {
        padding: 0px;
        margin: 0px;
        overflow-x: hidden;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        font-family: 'matiasregular', 'Open Sans', sans-serif;
    }
    body {
        --color-text: var(--green-darker);
        color: var(--color-text);
    }

    .container {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: unset;
    }

    header {
        width: 100%;
        background: var(--green);
        position: fixed;
        top: 0;
        z-index: 9999999;
        box-shadow: var(--shadow-small);
        
    }

    header.homepage{
        background: transparent;
        transition: background-color 0.3s ease;
    }

    header.homepage.scrolled {
        background: transparent;
        width: 100%;
        height: 100%
        z-index: -1;
        background: #ffffffab;
        backdrop-filter: saturate(180%) blur(5px);

     
    }

    section {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: var(--border-radius);
        max-width: var(--content-width);
        margin: 0 auto;
        padding: 0 20px;
    }

    .description {
        line-height: 1.5;
        font-size: 1.5rem;
    }

    main {
        flex: 1;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        padding-top: var(--nav-height);
        transition: padding-top 0.5s ease;
    }

    * {
        box-sizing: border-box;
    }

    h1,
    h2,
    h3 {
        --letter-spacing: 2px;
        letter-spacing: var(--letter-spacing);
    }

    h1,
    .like-1 {
        font-size: 2em;
    }

    h2,
    .like-2 {
        font-size: 1.5em;
    }

    h3,
    .like-3 {
        font-size: 1.17em;
        line-height: 1.4em;
    }

    h4 {
        font-size: 1em;
    }

    p + p {
        margin-top: 1em;
    }

    a,
    a:hover,
    a:active,
    a:visited {
        color: inherit;
        text-decoration: none;
    }

    .no-margin {
        margin: 0;
    }

    .margin-1 {
        margin: 60px 0;
    }

    .margin-top-1 {
        margin-top: 60px;
    }

    .margin-bottom-1 {
        margin-bottom: 60px;
    }

    .margin-2 {
        margin: 25px 0;
    }

    .margin-top-2 {
        margin-top: 25px;
    }

    .margin-bottom-2 {
        margin-bottom: 25px;
    }

    .shadow-3 {
        box-shadow: var(--elevation-3);
    }

    .scrolled {
        --nav-height: 85px;
    }

    .scrolled + main {
        --nav-height: 85px;
    }

    .scrolled .navigation {
        --logo-size: 70px;
    }

    .letter-spacing--small {
        --letter-spacing: 3px;
    }
    .all-caps {
        text-transform: uppercase;
    }

    @media (max-width: 768px) {
        :root {
            --border-radius: 10px;
            --element-width: 92.5%;
            --element-padding: 40px 25px;
        }
        .margin-1 {
            margin: 40px 0;
        }

        .margin-top-1 {
            margin-top: 40px;
        }

        .margin-bottom-1 {
            margin-bottom: 40px;
        }

        .scrolled {
            --nav-height: 80px;
        }

        .scrolled .navigation {
            --hamburger-size: 25px;
            --logo-size: 50px;
            --logo-circle: 60px;
        }
        .card {
            margin: 1rem;
            flex-basis: 45%;
            padding: 1.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 1px solid var(--wheat);
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
        }
    }
`;
