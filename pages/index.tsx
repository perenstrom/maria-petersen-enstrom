import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { Box, Container, Paper, Typography } from '@material-ui/core';
import { Entry } from 'contentful';
import { IPage } from 'types/contentful/contentful';
import { getMainPage } from 'services/contentful';

interface Props {
  pageData: Entry<IPage>;
}

const IndexPage: NextPage<Props> = ({ pageData }) => {
  return (
    <Container maxWidth="md">
      <Head>
        <title>NextJS Typescript Starter</title>
      </Head>
      <Box mt={6}>
        <Paper>
          <Box p={2}>
            <Typography variant={'h1'}>
              Opinionated NextJS Typescript starter
            </Typography>
            <Typography variant={'subtitle1'}>With Material-UI</Typography>
            <pre>{JSON.stringify(pageData, null, 2)}</pre>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export const getStaticProps: GetStaticProps<Props, {}> = async () => {
  const pageData = await getMainPage();

  return {
    props: { pageData }
  };
};

export default IndexPage;
