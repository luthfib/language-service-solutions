import Head from "next/head";

export const SEO = (props) => {
  const { title, description, image } = props;
  return (
    <Head>
      <title>
        {title
          ? `${title} | Language Service Solutions`
          : "Language Service Solutions"}
      </title>
      <meta name="description" content={description} />
    </Head>
  );
};
