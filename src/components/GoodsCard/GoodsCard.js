import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  import './GoodsCart.css';

const GoodsCart = props => {
  
    return (
        <div className='goods-cart'>
        <Card className='m-1'>
          <CardImg
          src={props.src}
          alt="Card image cap" />

          <CardBody>
            <CardTitle tag="h5">
                {props.title}
            </CardTitle>

            <CardSubtitle tag="h6" className="mb-2 text-muted">
                {props.subtitle}
            </CardSubtitle>

            <CardText>
                {props.text}
            </CardText>

            <Button onClick={props.clicked}>
              Order
            </Button>

          </CardBody>
        </Card>
      </div>
    );
};

export default GoodsCart;