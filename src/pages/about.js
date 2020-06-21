import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';

import ShapeDivider from '../components/ShapeDivider';
import Layout from '../components/Layout';
import Introduction from '../modules/About/Introduction';
import Resume from '../modules/About/Resume';
import SEO from '../components/seo';
import { primary } from '../styles/colors';

const Container = styled.div`
  width: 100%;
  padding: 0 20%;
  background-color: ${({ color }) => color || 'none'};

  ${media.lessThan('large')`
    padding: 0 24px;
  `}

  ${media.lessThan('medium')`
    padding: 0 16px;
  `}
`;

const Row = styled.div`
  width: 100%;
  height: auto;
  padding: ${({ padding }) => padding || '0'};
`;

const AboutPage = ({ data }) => {
  const { description } = data.site.siteMetadata;
  return (
    <Layout sidebar>
      <SEO title="About" description={description} />
      <Container>
        <ShapeDivider />
        <Row>
          <Introduction />
        </Row>
      </Container>
      <Container color={primary.color500}>
        <Row padding="48px 0">
          <Resume />
        </Row>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        description
      }
    }
  }  
`;

export default AboutPage;

