import '../styles/globals.css';
import '../styles/fonts.css';
import '../styles/helpers.css';

import App from 'next/app';
import Layout from '../components/Layout';

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </>
        );
    }
}

export default MyApp;
