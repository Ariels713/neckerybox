import React from 'react'
import Rating from '../rating/Rating'
import { Card, CardBody, CardTitle, Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import products from '../../assets/dummyData/products'
function NewItems() {
  // states for collapses

  document.documentElement.classList.remove('nav-open')

  return (
    <>
      <div className='wrapper'>
        <div className='section latest-offers'>
          <Container>
            <h3 className='section-title'>Newest Items</h3>
            <Row>
              {products.map((item) => {
                return (
                  <Col md='4' key={item._id}>
                    <Card className='card-product card-plain'>
                      <div className='card-image'>
                        <Link tag={Link} to={`/newitems/${item._id}`}>
                          <img
                            alt='...'
                            className='img-rounded img-responsive'
                            src={item.image}
                            key={item._id}
                          />
                        </Link>
                        <CardBody>
                          <div className='card-description'>
                            <Link tag={Link} to={`/newitems/${item._id}`}>
                              <CardTitle tag='h5'>{item.name}</CardTitle>
                            </Link>
                            <p className='card-description'>
                              {item.description}
                            </p>
                          </div>
                          <div>
                            <Rating
                              value={item.rating}
                              text={`${item.numReviews} reviews`}
                            />
                          </div>
                          <div className='price'>
                            <strong className='text-danger'>
                              {item.price}
                            </strong>
                          </div>
                        </CardBody>
                      </div>
                    </Card>
                  </Col>
                )
              })}
            </Row>
          </Container>
        </div>
      </div>
    </>
  )
}

export default NewItems
