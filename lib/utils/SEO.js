import Head from 'next/head';

export const SEO = (props) => {
    const {
        title,
        description,
        image = 'https://languageservicesolutions.com/icons/logo.svg',
    } = props;
    return (
        <Head>
            <title>
                {title
                    ? `${title} | Language Service Solutions`
                    : 'Language Service Solutions'}
            </title>
            <meta name="description" content={description} />
            <meta name="image" content={image} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={`${image}`} />
            <meta
                property="og:url"
                content="https://languageservicesolutions.com/"
            />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@LSS" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta property="twitter:image" content={`${image}`} />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
};
