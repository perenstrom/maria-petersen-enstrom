import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { Box } from '@material-ui/core';
import { getMainPage } from 'services/contentful';
import { Page } from 'types/local';
import { HeroBlock } from 'components/HeroBlock';
import { GalleryBlock } from 'components/GalleryBlock';
import { TextBlock } from 'components/TextBlock';

interface Props {
  pageData: Page;
}

const IndexPage: NextPage<Props> = ({ pageData }) => {
  return (
    <>
      <HeroBlock heading={pageData.heading} heroImage={pageData.heroImage} />
        <Head>
          <title>Maria Petersén Enström Design</title>
          <meta property="og:title" content={pageData.meta.title} />
          <meta property="og:image" content={pageData.meta.image} />
          <meta property="og:description" content={pageData.meta.description} />
          <meta name="Description" content={pageData.meta.description} />
        </Head>
        <Box mt={6} mb={6}>
          {pageData.blocks.map(block => {
            switch (block.contentType) {
              case 'gallery':
                return <GalleryBlock key={block.id} {...block} />;
              case 'text':
                return <TextBlock key={block.id} {...block} />;
            }
          })}
        </Box>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props, {}> = async () => {
  const pageData = await getMainPage();

  return {
    props: { pageData }
  };
};

export default IndexPage;
