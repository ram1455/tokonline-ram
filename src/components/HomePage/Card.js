import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import serverApi from '../../app/api/ServerApi';


import helm1  from '../../img/helm1.jpg';
import helm2  from '../../img/helm2.jpg';
import helm3  from '../../img/helm3.jpg';
import helm4  from '../../img/helm4.jpg';
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
      <Kard>
          <Kimg style={{maxHeight: '10rem', height:'100%'}} src={helm1}/>
          <CardBody>
            <Card.Title>HELM X1</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">big-helmet</Card.Subtitle>
            <Card.Text>
            Rp.1.000.000
            </Card.Text>
            <Button onClick={mentensAlert} variant="success">Order</Button>
          </CardBody>
        </Kard>
      <Kard>
          <Kimg style={{maxHeight: '10rem', height:'100%'}} src={helm2}/>
          <CardBody>
            <Card.Title>HELM G-SLIM </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">slim-helmet</Card.Subtitle>
            <Card.Text>
            Rp.800.000
            </Card.Text>
            <Button onClick={mentensAlert} variant="success">Order</Button>
          </CardBody>
        </Kard>
      <Kard>
          <Kimg style={{maxHeight: '10rem', height:'100%'}} src={helm3}/>
          <CardBody>
            <Card.Title>HELM TK-normal</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">average-helmet</Card.Subtitle>
            <Card.Text>
            Rp.789.000
            </Card.Text>
            <Button onClick={mentensAlert} variant="success">Order</Button>
          </CardBody>
        </Kard>
      <Kard>
          <Kimg style={{maxHeight: '10rem', height:'100%'}} src={helm4}/>
          <CardBody>
            <Card.Title>BLACK-KNIGHT HELM</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">ekslusif average-helmet</Card.Subtitle>
            <Card.Text>
            Rp.4.500.000
            </Card.Text>
            <Button onClick={mentensAlert} variant="success">Order</Button>
          </CardBody>
        </Kard>
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
            <Button onClick={mentensAlert} variant="success">Order</Button>
          </CardBody>
        </Kard>
          ))
        }
        </Kontainer>
  )
}

export default Kartu;