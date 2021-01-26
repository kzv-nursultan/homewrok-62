import React, {useRef} from 'react';
import Navbar from '../NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import GoodsCart from '../../components/GoodsCard/GoodsCard';

const parseSearch = search => {
    const params = new URLSearchParams(search);      
    return Object.fromEntries(params);    
  };

const Orders = props => {
    const parsed = parseSearch(props.location.search);
    const order = useRef(parsed);

    const orderList = (
        <div className='text-center' style={{width:'200px', margin:'5px auto'}}>
            <h3>Your last Order:</h3>
            <GoodsCart 
            src={order.current.src}
            title={order.current.title}
            subtitle={order.current.subtitle}
            text={order.current.text}/>
        </div>
    );

    return(
        <>
            <Navbar/>
            <div className='container m-5'>
                {orderList}
            </div>
            <Footer/>
        </>
    );
};

export default Orders;
