import { Typography } from '@mui/material';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amazona</title>
        <meta
          name="description"
          content="The ecommerce platform built with SanityCMS and NextJS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Typography component="h1" variant="h1">
        Sanity Amazona
      </Typography>
    </div>
  );
}
