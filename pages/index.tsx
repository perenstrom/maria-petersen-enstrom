import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { Box, Container } from '@material-ui/core';
import { getMainPage } from 'services/contentful';
import { Page } from 'types/local';
import { HeroBlock } from 'components/HeroBlock';
import { GalleryBlock } from 'components/GalleryBlock';
import { TextBlock } from 'components/TextBlock';

interface Props {
  pageData: Page;
}

const IndexPage: NextPage<Props> = ({ pageData }) => {
  return (<>
    <HeroBlock heading={pageData.heading} heroImage={pageData.heroImage} />
    <Container maxWidth="md">
      <Head>
        <title>Maria Petersén Enström Design</title>
      </Head>
      <Box mt={6}>
        {pageData.blocks.map(block => {
          switch (block.contentType) {
            case 'gallery':
              return <GalleryBlock {...block} />;
            case 'text':
              return <TextBlock {...block} />;
          }
        })}
      </Box>
    </Container></>
  );
};

export const getStaticProps: GetStaticProps<Props, {}> = async () => {
  const pageData = await getMainPage();

  return {
    props: { pageData }
  };
};

export default IndexPage;
