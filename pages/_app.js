import App from "next/app";
import Layout from "../components/Layout";
import baseTheme from "../styles/base";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return ( 
        <Layout>
          <Component {...pageProps} />
          <style jsx global>
            {baseTheme}
          </style>
        </Layout>
    );
  }
}

export default MyApp;
