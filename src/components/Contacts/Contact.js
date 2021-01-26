import React from 'react';
import NavBar from '../../containers/NavBar/NavBar';
import Footer from '../Footer/Footer';

const Contact = () => {
    return(
       <>
            <NavBar/>
           <div className='container p-5 m-5'>
            <h3> Press</h3>
            <p>
            North America:
            Press@tesla.com
            </p>
            <p>
            Europe & Middle East:
            EUPress@tesla.com
            </p>
            <p>
            Australia and Asia:
            APACPress@tesla.com
            </p>
            <p>
            China:
            China-Press@tesla.com
            </p>
            <div>
                <h2>Боулдер, Walnut</h2>
                <p>
                    3333 Walnut St
                    Boulder CO, 80301
                </p>
                <p>
                    United States
                    Телефон: +1 303-245-0086
                </p>
            </div>
           </div>

            <Footer/>
       </>
    );
};

export default Contact;