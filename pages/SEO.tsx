import Head from "next/head";

interface ISeo {
  title: string;
}

function SEO({ title }: ISeo) {
  return (
    <Head>
      <title>{`Let's play! with ${title}`}</title>
    </Head>
  );
}

export default SEO;
