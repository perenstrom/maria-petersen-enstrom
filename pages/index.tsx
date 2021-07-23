import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { Box, Container, Paper } from '@material-ui/core';
import { getMainPage } from 'services/contentful';
import { Page } from 'types/local';

interface Props {
  pageData: Page;
}

const IndexPage: NextPage<Props> = ({ pageData }) => {
  return (
    <Container maxWidth="md">
      <Head>
        <title>NextJS Typescript Starter</title>
      </Head>
      <Box mt={6}>
        {pageData.blocks.map(block => (
          <Box mt={2}>
            <Paper>
              <Box p={2}>
                <pre>{JSON.stringify(block, null, 2)}</pre>
              </Box>
            </Paper>
          </Box>
        ))}
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
