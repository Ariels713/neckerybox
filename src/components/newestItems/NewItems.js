import React from 'react'
import Rating from '../rating/Rating'
import { Card, CardBody, CardTitle, Container, Row, Col } from 'reactstrap'

function Ecommerce() {
  // states for collapses

  document.documentElement.classList.remove('nav-open')

  return (
    <>
      <div className='wrapper'>
        <div className='section latest-offers'>
          <Container>
            <h3 className='section-title'>Newest Items</h3>
            <Row>
              <Col md='4'>
                <Card className='card-product card-plain'>
                  <div className='card-image'>
                    <a href='#pablo' onClick={(e) => e.preventDefault()}>
                      <img
                        alt='...'
                        className='img-rounded img-responsive'
                        src='https://demos.creative-tim.com/paper-kit-pro-react/static/media/balmain_5.e6ddeef3.jpg'
                      />
                    </a>
                    <CardBody>
                      <div className='card-description'>
                        <CardTitle tag='h5'>Green Velvet Dress</CardTitle>
                        <p className='card-description'>
                          This is a limited edition dress for the fall
                          collection. Comes in 3 colours.
                        </p>
                      </div>
                      <div>
                        <Rating value={4.5} text='Get it' />
                      </div>
                      <div className='price'>
                        <strong className='text-danger'>$100.00</strong>
                      </div>
                    </CardBody>
                  </div>
                </Card>
              </Col>
              <Col md='4'>
                <Card className='card-product card-plain'>
                  <div className='card-image'>
                    <a href='#pablo' onClick={(e) => e.preventDefault()}>
                      <img
                        alt='...'
                        className='img-rounded img-responsive'
                        src='https://demos.creative-tim.com/paper-kit-pro-react/static/media/balmain_3.b260238e.jpg'
                      />
                    </a>
                    <CardBody>
                      <div className='card-description'>
                        <CardTitle tag='h5'>Crepe and Organza Dress</CardTitle>
                        <p className='card-description'>
                          This is a limited edition dress for the fall
                          collection. Comes in 3 colours.
                        </p>
                      </div>
                      <div className='price'>
                        <strong className='text-danger'>$100</strong>
                      </div>
                    </CardBody>
                  </div>
                </Card>
              </Col>
              <Col md='4'>
                <Card className='card-product card-plain'>
                  <div className='card-image'>
                    <a href='#pablo' onClick={(e) => e.preventDefault()}>
                      <img
                        alt='...'
                        className='img-rounded img-responsive'
                        src='https://demos.creative-tim.com/paper-kit-pro-react/static/media/balmain_4.ccf9d30e.jpg'
                      />
                    </a>
                    <CardBody>
                      <div className='card-description'>
                        <CardTitle tag='h5'>Lace Mini Dress</CardTitle>
                        <p className='card-description'>
                          This is a limited edition dress for the fall
                          collection. Comes in 3 colours.
                        </p>
                      </div>
                      <div>
                        <Rating value={2.5} text='Get it' />
                      </div>
                      <div className='price'>
                        <s className='mr-1'>$150</s>
                        <strong className='text-danger'>$99</strong>
                      </div>
                    </CardBody>
                  </div>
                </Card>
              </Col>
              <Col md='4'>
                <Card className='card-product card-plain'>
                  <div className='card-image'>
                    <a href='#pablo' onClick={(e) => e.preventDefault()}>
                      <img
                        alt='...'
                        className='img-rounded img-responsive'
                        src='https://demos.creative-tim.com/paper-kit-pro-react/static/media/balmain_4.ccf9d30e.jpg'
                      />
                    </a>
                    <CardBody>
                      <div className='card-description'>
                        <CardTitle tag='h5'>Lace Mini Dress</CardTitle>
                        <p className='card-description'>
                          This is a limited edition dress for the fall
                          collection. Comes in 3 colours.
                        </p>
                      </div>
                      <div className='price'>
                        <s className='mr-1'>$150</s>
                        <strong className='text-danger'>$99</strong>
                      </div>
                    </CardBody>
                  </div>
                </Card>
              </Col>
              <Col md='4'>
                <Card className='card-product card-plain'>
                  <div className='card-image'>
                    <a href='#pablo' onClick={(e) => e.preventDefault()}>
                      <img
                        alt='...'
                        className='img-rounded img-responsive'
                        src='https://demos.creative-tim.com/paper-kit-pro-react/static/media/balmain_3.b260238e.jpg'
                      />
                    </a>
                    <CardBody>
                      <div className='card-description'>
                        <CardTitle tag='h5'>Crepe and Organza Dress</CardTitle>
                        <p className='card-description'>
                          This is a limited edition dress for the fall
                          collection. Comes in 3 colours.
                        </p>
                      </div>
                      <div className='price'>
                        <strong className='text-danger'>$100</strong>
                      </div>
                    </CardBody>
                  </div>
                </Card>
              </Col>
              <Col md='4'>
                <Card className='card-product card-plain'>
                  <div className='card-image'>
                    <a href='#pablo' onClick={(e) => e.preventDefault()}>
                      <img
                        alt='...'
                        className='img-rounded img-responsive'
                        src='https://demos.creative-tim.com/paper-kit-pro-react/static/media/balmain_5.e6ddeef3.jpg'
                      />
                    </a>
                    <CardBody>
                      <div className='card-description'>
                        <CardTitle tag='h5'>Green Velvet Dress</CardTitle>
                        <p className='card-description'>
                          This is a limited edition dress for the fall
                          collection. Comes in 3 colours.
                        </p>
                      </div>
                      <div className='price'>
                        <strong className='text-danger'>$100.00</strong>
                      </div>
                    </CardBody>
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  )
}

export default Ecommerce
