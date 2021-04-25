import baseTheme from "../styles/base";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>
        {baseTheme}
      </style>
    </>
  );
}

export default MyApp;
