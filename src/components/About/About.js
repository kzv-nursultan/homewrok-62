import React from 'react';
import NavBar from '../../containers/NavBar/NavBar';
import Footer from '../Footer/Footer';
import TextAbout from './TextAbout';

const About = () => {
    return (
        <>
            <NavBar/>
            <TextAbout
            title='OUR STORY'
            text='The origins of ARB go back to 1975, when company founder, 
            Tony Brown, was inspired by a 4WDing trip through the top end of Australia.
            Back then, 4WDers relied on homemade or ill-fitting equipment that was not 
            designed for extensive Outback expeditions. Endless corrugated roads, 
            extreme temperatures, and the heavy loads carried by Australian travellers 
            were tremendously punishing on vehicles that regularly tackled these kinds 
            of conditions. Tony’s many years spent toiling on his Series 1 Land Rover 
            proved extremely beneficial to others in the top end during his travels. 
            Damaged bull bars and broken roof racks ensured Tony’s expertise was regularly 
            called upon, and through this experience an idea was born – well engineered,
             durable equipment that would meet the vigorous demands of 4WD owners.'
            src='https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/4x4/2017/05/11/Misc/Andy-Brown-ARB.jpg'/>
            
            <TextAbout
            title='ARB MANUFACTURING'
            text='ARB continues to maintain its position as an innovator in the industry 
            by utilising the most modern, state-of-the-art fabrication equipment and machinery.
            Today’s requirements for more complex designs are met with highly advanced, 
            Computer Numerically Controlled (CNC) sheet fabrication facilities. 
            ARB’s production facilities are equipped with a range of state-of-the-art 
            machinery suited to the manufacture of metal products. 
            Our manufacturing capabilities include laser cutting, brake pressing, 
            guillotining, CNC bending, machining and turning. We’re equipped with MIG, TIG, 
            robot and spot welding facilities and also have powder coating and spray 
            painting centres.            
            We have a stringent quality control system in place, 
            ensuring our exceptionally high standards are maintained. 
            These factors, combined with our level of automation, 
            enable us to produce some of the finest 4WD accessories in the world.'
            src='https://documents.trendmicro.com/images/TEx/articles/manufacturing.jpg'/>

            <TextAbout
            title='ARB DISTRIBUTION'
            text='Finished goods are stored at ARB’s main warehouse in Melbourne, 
            Australia, where they are shipped out to over 100 countries worldwide.
            In addition to the products we make ourselves, you’ll find floor 
            to ceiling stacks of other leading brand name accessories such as IPF lights, 
            Safari snorkels, Hi-Lift jacks and Warn winches. These products are built to 
            the same uncompromising standards as our own, and have been carefully selected 
            to complement the ARB range.
            Naturally, we provide a comprehensive warranty with our accessories. 
            Products manufactured or solely distributed by us have a minimum two 
            year nationwide warranty.'
            src='https://www.co-production.net/images/2020/08/26/mexico-vs-china-manufacturing.jpg'/>

            <Footer/>
            
        </>

    );
};

export default About;