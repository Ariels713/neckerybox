import React from 'react'
// reactstrap components
import { Button, Card, CardBody, CardFooter, Row, Col } from 'reactstrap'
// import WeddingRing from '../../assets/icons/siteIcons'
// core components

function RingCard() {
  return (
    <>
      <Row>
        <Col className='ml-auto mr-auto text-center title' md='6'>
          <h2>Fall Ring Collection</h2>
          <h3 className='title-uppercase'>
            <small>Loem Ipsum Lorem Ipusm Lorem Ipsum</small>
          </h3>
        </Col>
      </Row>
      <Row className='justify-content-md-center'>
        <Col md='9' sm='6'>
          <Card
            data-background='image'
            style={{
              backgroundImage: `url(${'https://lh3.googleusercontent.com/2Q6msJxX9BxA6or264AP6ZP5qQWkaBFsf70-JKxfjyEwAvyvScGRFiUtYVtux2gtvNCdfgpUUanFdOi9DgtPpxTjUBxmhpDFpuvuZ6blBK3W0sstnyoBgh3AT43DdPDK3J_UKOT72sIIaFEYuOHImPR20lMqEHFuOzaHxDjK_JZaHfdALiMJsABKq5rEvrQvmYDhiicoEcTdNT14xTqu4Vp6GkvqeiqQ911jc2YJvb-FureTApelOakcEAPznD382_SUtuxX4UsQrI7Fblxrq6INMT29f7kMUCxmXVFi_wbREx94uoR8cTcYO2pgbp7Hfqw8X7sZ57Skucw46i2obUcIxIg1owDgxJXoX13tGciO18PmsahKN1GexsKD9eFfi_pQV08-WZ63UkOJ4vZP7WmSHFfGtA4XhwRRfMQwQQ2ONQM9hCfDhmqWqgnTBk2SjHJEXwtOk8Wigb5Et9g6k0mC2aSwfNn8oST2MqsVEVP22W747pEtUTH8z9b7oMS8GGZrwyVmy_w6ky85SgGsCqwvqQrmxa4HjWTbG3JBcEmZfRttyukghiAb6smT4cqjjFlXQgkw4ruNCWoNuzYiD1IUwq8hgX44go8SfPtNxeCf8Yu2z2Irhau7tSXXVyl_MsY4zMeQbh92gSP0Jd-auSltr3mftYiJ1_cKU980srNQy_lQxnPP54Ardab2sP4=w1521-h1818-no?authuser=0'})`,
            }}
          >
            <CardBody>
              <h6 className='card-category'>Rings</h6>
              <div className='card-icon'>{/* <i>{WeddingRing}</i> */}</div>
              <p className='card-description'>
                Unlike fashionable design, it lasts many years – even in today’s
                throwaway society.
              </p>
              <CardFooter>
                <Button
                  className='btn-round card-link'
                  color='danger'
                  href='#pablo'
                  onClick={(e) => e.preventDefault()}
                >
                  <i aria-hidden={true} className='far fa-gem'></i> Read Article
                </Button>
              </CardFooter>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default RingCard
