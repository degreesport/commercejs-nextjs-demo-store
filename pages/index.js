import React from 'react';
import Head from 'next/head';
import Root from '../components/common/Root';
import Footer from '../components/common/Footer';
import ExploreBanner from '../components/productAssets/ExploreBanner';
import HeroSection from '../components/homepage/HeroSection';
import HomeBanner from '../components/homepage/HomeBanner';
import ProductsBanner from '../components/homepage/ProductsBanner';

const Home = () => (
  <Root transparentHeader={true}>
    <Head>
      <title>Home | commerce</title>
    </Head>

    <HeroSection />
    <HomeBanner />
    <ProductsBanner />
    <ExploreBanner />
    <Footer />
  </Root>
);

export default Home;
