import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import serverApi from '../../app/api/ServerApi';

import batangHitam from '../../img/8397555_8b356e64-ec39-4549-b2e5-eed09e519db7_554_554.jpg'

// styled-components

const CardBody = styled.div`
    padding:5px 10px;
`
const Kard = styled.div`
    width:230px;
    height:auto;
    background-color:white;
    border-radius:15px;
    box-sizing:border-box;
    word-wrap:break-word;
    
    border: 1px solid;
    border-bottom-left-radius :15px;
    border-bottom-right-radius :15px;

    margin:10px 0px 10px 0px;
    
`
const Kontainer = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content: space-between;
`
const Kimg = styled.img`
    width:100%;
    height:auto;
    border-top-left-radius :15px;
    border-top-right-radius :15px;
`
// styled-components


function Kartu () {

  let [productData,setProductData] = useState([]);

  useEffect( () => {
    takeProduct();
  }, [])

  const takeProduct = async () => {
    const getProduct = await serverApi({
      method:"GET",
      mode: 'cors',
      url:"/api/products"
    }) 
    setProductData(getProduct.data.data);

  }

  const mentensAlert = () => {
    alert('maaf server sedang maintenance')
  }


  return (
      <Kontainer>
        {
          productData.map( item => (
            <Kard>
          <Kimg style={{maxHeight: '10rem', height:'100%'}} src={`http://localhost:3000/images/products/${item.image_url}`}/>
          <CardBody>
            <Card.Title>{item.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{item.category.name}</Card.Subtitle>
            <Card.Text>
            {item.price}
            </Card.Text>
            <Button onClick={mentensAlert} variant="primary">Order</Button>
          </CardBody>
        </Kard>
          ))
        }
        </Kontainer>
  )
}

export default Kartu;