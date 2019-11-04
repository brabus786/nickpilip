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
                    Customers will have the same great expirience on all devices. Websites with great mobile versions rank higher by Google. I will convert your design to a responsive website with Bootstrap 4.
                </p>
            </Section>

            <Section img={Section4Img} leftside>
                <p className={'title_block'}>
                    Blazing Fast Page Loading Speed
                </p>
                <p className={'discription'}>
                Your e-commerce business won't lose customers anymore because of the slow web page. I use tools like critical CSS, lazy load, progressive image formats to make sure that your website is fast.
                </p>
                <p className={'block_smol_tekst'}>
                    Amazon famously found that every 100ms of latency cost them 1% in sales. According to Google, as
                    much as 53% of mobile site visitors leave a page that takes longer than 3 seconds to load.
                </p>
                <p className={'block_smol_tekst'}>
                    Be ahead of the competitors with my PSD to HTML services. From <a href="https://www.thinkwithgoogle.com/marketing-resources/data-measurement/mobile-page-speed-new-industry-benchmarks/" rel="noopener noreferrer" target="_blank">Think with Google research.</a>
                    "The research has been eye-opening. For 70% of the mobile landing pages
                    we analyzed, it took more than 5 seconds for the visual content above the fold to display on the
                    screen, and it took more than 7 seconds to fully load all visual content above and below the fold"
                </p>
            </Section>

            <Section img={Section5Img}>
                <p className={'title_block'}>
                    SEO Friendly, Valid Markup
                </p>
                <p className={'discription'}>
                    Get your web page rank higher and get a better quality score in ad networks. When I develop a web page I always make sure that my HTML markup meets web standards using w3 validator. Also, develop semantic markup and flow Google Guidelines.                   
                </p>
            </Section>

            <Section img={Section6Img} leftside>
                <p className={'title_block'}>
                    Cross-browser Compitable, Retina support
                </p>
                <p className={'discription'}>
                    You will reach more customers on all platforms and devices. I will convert your design to a cross-browser compatible and retina friendly HTML markup.
                </p>
            </Section>

            <Section img={Section7Img}>
                <p className={'title_block'}>
                    Get the most out of social media link shares with Open Graph
                </p>
                <p className={'discription'}>
                    Your posts of the links will look more attractive and have a higher conversion rate.
                    I will setup Open Graph meta tags on the webpage to make sure that ref will look great. 
                </p>
            </Section>

            <Section img={Section8Img} leftside>
                <p className={'title_block'}>
                    Setup Anyalitcs Tools
                </p>
                <p className={'discription'}>
                    I will help you to setup on the website tools like Google Analytics, Google Tag Manager, Hot Jar...
                </p>
            </Section>

            <Section img={Section9Img}>
                <p className={'title_block'}>
                    Greate user engament with JavaScript
                </p>
                <p className={'discription'}>
                    I will develop live interactive and animated elements from your design with JavaScript. Also, I can integrate the website with API and connect to backend services.
                </p>
            </Section>

            <MySkills/>
            <Pricing/>

        </div>
    )
};

export default Main;