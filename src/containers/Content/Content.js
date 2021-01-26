import React, {useState} from 'react';
import { nanoid } from 'nanoid';
import { useHistory } from 'react-router-dom';
import GoodsCart from '../../components/GoodsCard/GoodsCard';
import { Button } from 'reactstrap';

const Content = () => {
    let history = useHistory();
    const [order, setOrder] = useState([]);
    let array = [];  

    const [goods] = useState([
        {src:'https://turn5.scene7.com/is/image/Turn5/J111210?obj=car&wid=1200&hei=900&sharpen=1',
        title:'Suspension Kit',
        subtitle:'Mitsubishi Montero',
        text:'text',
        id:nanoid()},

        {src:'https://i5.walmartimages.com/asr/5a9bc82d-81c3-433d-ace9-66298f31c7af_1.6aee52003c3162f070e2a0ed04758ee9.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff',
        title:'Suspension Kit',
        subtitle:'TLC 100',
        text:'text',
        id:nanoid()},

        {src:'https://roofrack-bucket.s3.ap-southeast-2.amazonaws.com/wp-content/uploads/2018/09/15094940/100LC-RTLB2-45103B-01_lrgroofrackworldsa-600x321.jpg',
        title:'Roof Rack',
        subtitle:'TLC 100-105 series',
        text:'text',
        id:nanoid()},

        {src:'https://roofrack-bucket.s3.ap-southeast-2.amazonaws.com/wp-content/uploads/2016/10/26135952/LC200-45107B-RTLB1-03_lrgroofrackworldsa.jpg',
        title:'Roof Rack',
        subtitle:'TLC 200',
        text:'text',
        id:nanoid()},

        {src:'https://roosystems.com.au/wp-content/uploads/2017/07/Jeep_Wrangler_bull_bar_2__84804.jpg',
        title:'Bull Bar',
        subtitle:'Wrangler JK series',
        text:'bla bla...',
        id:nanoid()}
    ]);

        const onOrderClick = id =>{
            const index = goods.findIndex(p=>p.id===id);
            setOrder([...order, goods[index]]);
        };


        const PurchaseContinueHandler = () => {
            if(order.length> 0) {
                order.map(item=>{
                    const params = new URLSearchParams(item);
                    array.push(params.toString());
                });
                return (
                    history.push({
                        pathname: '/orders',
                        search: '?' + [...array]
                    })
                );
            };  
          };

    return(
        <div className='text-center'>
            <div className='content container d-flex flex-wrap pb-5 text-center'>
                {goods.map(good=>(
                    <GoodsCart
                    key={good.id}
                    src={good.src}
                    title={good.title}
                    subtitle={good.subtitle}
                    text={good.text}
                    clicked={()=>onOrderClick(good.id)}/>
                ))};
            </div>
            <Button className='m-3' onClick={PurchaseContinueHandler}>                
                    Last Order               
            </Button>
        </div>
    );
};

export default Content