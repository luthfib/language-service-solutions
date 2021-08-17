import App from "next/app";
import ComingSoon from "../components/ComingSoon";
import Layout from "../components/Layout";
import baseTheme from "../styles/base";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const underMaintenance = process.env.NEXT_PUBLIC_MAINTENANCE == "true";
    return (
      <>
        {!underMaintenance ? (
          <Layout>
            <Component {...pageProps} />
            <style jsx global>
              {baseTheme}
            </style>
          </Layout>
        ) : (
          <>
            <style jsx global>
              {baseTheme}
            </style>
            <ComingSoon />
          </>
        )}
      </>
    );
  }
}

export default MyApp;
