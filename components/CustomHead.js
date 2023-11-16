import Head from 'next/head';

const CustomHead = ({ title, description, imageUrl }) => {
  return (
    <Head>
      <title>Test Vercel App</title>
      <meta property="og:title" content={title} />
      <meta name="description" content={description} />
      <meta property="og:image" content={imageUrl} />
      {/* Add other meta tags as needed */}
    </Head>
  );
};

export default CustomHead;
