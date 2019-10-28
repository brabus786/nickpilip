import React from 'react';
import UniqueSellingProposition from "./UniqueSellingProposition/Unique_selling_proposition";
import TitlePage from "./TitlePage/TitlePage";
import Section from "./Section/Section";
import Section3Img from './../../assets/img/Device-lab.png';
import Section4Img from './../../assets/img/test.png';
import Section5Img from './../../assets/img/seo.png';
import Section6Img from './../../assets/img/img6.png';
import Section7Img from './../../assets/img/img7.png';
import Section8Img from './../../assets/img/img8.png';
import Section9Img from './../../assets/img/img9.png';
import MySkills from "./MySkills/MySkills";
import Pricing from "./Pricing/Pricing";

const Main = () => {
    return (
        <div>
            <UniqueSellingProposition/>
            <TitlePage/>

            <Section img={Section3Img}>
                <p className={'title_block'}>Responsive Development
                </p>
                <p className={'discription'}>
                    Customers will have the same great expirience on all devices. Websites with great mobile
                    device runks higher by google.
                </p>
            </Section>

            <Section img={Section4Img} leftside>
                <p className={'title_block'}>
                    Blazing Fast Page Loading Speed
                </p>
                <p className={'discription'}>
                    Your e-commerce buissness won't lose customers anymore because of the slow web page. I use tools
                    like crticical css, lazy load, progrssive images formats to make sure that you website fast.
                </p>
                <p className={'block_smol_tekst'}>
                    Amazon famously found that every 100ms of latency cost them 1% in sales. According to Google, as
                    much as 53% of mobile site visitors leave a page that takes longer than 3 seconds to load.
                </p>
                <p className={'block_smol_tekst'}>
                    Be ahead of the competitors. The research has been eye-opening. For 70% of the mobile landing pages
                    we analyzed, it took more than 5 seconds for the visual content above the fold to display on the
                    screen, and it took more than 7 seconds to fully load all visual content above and below the fold
                </p>
            </Section>

            <Section img={Section5Img}>
                <p className={'title_block'}>
                    SEO Friendly, Valid Markup.
                </p>
                <p className={'discription'}>
                    Get your web page rank higher and get better qulity score in ads netwokrs. When I develop a web page
                    I always make sure that my code meets web standarts using w3 validator. Also I pay attention to
                    develop semantic markup and flowo Google Guidlines.
                </p>
            </Section>

            <Section img={Section6Img} leftside>
                <p className={'title_block'}>
                    Cross-browser compitable. Retina.
                </p>
                <p className={'discription'}>
                    Your e-commerce buissness won't lose customers anymore because of the slow web page. I use tools
                    like crticical css, lazy load, progrssive images formats to make sure that you website fast.
                </p>
            </Section>

            <Section img={Section7Img}>
                <p className={'title_block'}>
                    Great Looking shares in social media with Open Graph
                </p>
                <p className={'discription'}>
                    Your e-commerce buissness won't lose customers anymore because of the slow web page. I use tools
                    like crticical css, lazy load, progrssive images formats to make sure that you website fast.
                </p>
            </Section>

            <Section img={Section8Img} leftside>
                <p className={'title_block'}>
                    You will alway have finger on pulse of you webpage
                </p>
                <p className={'discription'}>
                    Your e-commerce buissness won't lose customers anymore because of the slow web page. I use tools
                    like crticical css, lazy load, progrssive images formats to make sure that
                </p>
            </Section>

            <Section img={Section9Img}>
                <p className={'title_block'}>
                    Great user engament with js
                </p>
                <p className={'discription'}>
                    I will help you to develop interective website with Javascript which will increase user enagment,
                    and increase conversion rate
                </p>
            </Section>

            <MySkills/>
            <Pricing/>

        </div>
    )
};

export default Main;