/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from '../Banner';
import Tabs from '../Tabs/Tabs';
import PicGallery from '../PicGallery';
import OfferSection from '../OfferSection';
import FeatureSection from '../FeatureSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PicGallery></PicGallery>
            <Tabs></Tabs>
            <OfferSection></OfferSection>
            <FeatureSection></FeatureSection>
        </div>
    );
};

export default Home;