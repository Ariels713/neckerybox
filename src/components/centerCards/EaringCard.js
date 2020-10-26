import React from 'react'
// reactstrap components
import { Button, Card, CardBody, CardFooter, Row, Col } from 'reactstrap'

// core components

function EaringCard() {
  return (
    <>
      <Row>
        <Col className='ml-auto mr-auto text-center title' md='6'>
          <h2>A place for storytelling</h2>
          <h3 className='title-uppercase'>
            <small>Written by designers for designers</small>
          </h3>
        </Col>
      </Row>
      <Row className='justify-content-md-center'>
        <Col md='9' sm='6'>
          <Card
            data-background='image'
            style={{
              backgroundImage: `url(${'https://i.ibb.co/zXYRTFS/IMG-20200428-220644-405.jpg'})`,
            }}
          >
            <CardBody>
              <h6 className='card-category'>Travel</h6>
              <div className='card-icon'>
                <i className='nc-icon nc-spaceship'></i>
              </div>
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
                  <i aria-hidden={true} className='fa fa-book'></i>
                  Read Article
                </Button>
              </CardFooter>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default EaringCard
