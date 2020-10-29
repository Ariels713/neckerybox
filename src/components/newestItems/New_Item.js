import React from 'react'
import products from '../../assets/dummyData/products'
import NewItemPageHeader from './NewItemPageHeader'
// import Select from 'react-select'
import { Link } from 'react-router-dom'

// reactstrap components
import {
  Button,
  Card,
  // FormGroup,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption,
  Alert,
} from 'reactstrap'
import Rating from '../rating/Rating'
const New_Item = ({ match }) => {
  const product = products.find((product) => product._id === match.params.id)
  // collapse states and functions
  const [collapseOne, setCollapseOne] = React.useState(false)
  const [collapseTwo, setCollapseTwo] = React.useState(false)
  const [collapseThree, setCollapseThree] = React.useState(false)
  // react-select states
  const [colorSelect, setColorSelect] = React.useState({
    value: '1',
    label: 'Black ',
  })
  const [sizeSelect, setSizeSelect] = React.useState({
    value: '1',
    label: 'Small ',
  })
  // carousel states and functions
  const [activeIndex, setActiveIndex] = React.useState(0)
  const [animating, setAnimating] = React.useState(false)
  const onExiting = () => {
    setAnimating(true)
  }
  const onExited = () => {
    setAnimating(false)
  }
  const next = () => {
    if (animating) return
    const nextIndex =
      activeIndex === product.carouselItems.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }
  const previous = () => {
    if (animating) return
    const nextIndex =
      activeIndex === 0 ? product.carouselItems.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }
  const goToIndex = (newIndex) => {
    if (animating) return
    setActiveIndex(newIndex)
  }

  document.documentElement.classList.remove('nav-open')
  React.useEffect(() => {
    document.body.classList.add('product-page')
    return function cleanup() {
      document.body.classList.remove('product-page')
    }
  })
  return (
    <>
      <NewItemPageHeader />
      <div className='main'>
        <div className='section'>
          <Container>
            <Row className='title-row'>
              <Col md='2'>
                <h4 className='shop'>Best Sellers</h4>
              </Col>
              <Col className='ml-auto' md='4'>
                <div className='pull-right'>
                  <Link to='/'>
                    <Button color='link' style={{ color: '#D151DB' }}>
                      Home
                    </Button>
                  </Link>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md='7' sm='6'>
                <div className='ml-auto mr-auto' id='carousel'>
                  <Card className='page-carousel'>
                    <Carousel
                      activeIndex={activeIndex}
                      next={next}
                      previous={previous}
                    >
                      <CarouselIndicators
                        items={product.carouselItems}
                        activeIndex={activeIndex}
                        onClickHandler={goToIndex}
                      />
                      {product.carouselItems.map((item) => {
                        return (
                          <CarouselItem
                            onExiting={onExiting}
                            onExited={onExited}
                            key={item.src}
                          >
                            <img src={item.src} alt={item.altText} />
                            <CarouselCaption
                              captionText={item.caption}
                              captionHeader=''
                            />
                          </CarouselItem>
                        )
                      })}
                      <a
                        className='left carousel-control carousel-control-prev'
                        data-slide='prev'
                        href='#pablo'
                        onClick={(e) => {
                          e.preventDefault()
                          previous()
                        }}
                        role='button'
                      >
                        <span className='fa fa-angle-left' />
                        <span className='sr-only'>Previous</span>
                      </a>
                      <a
                        className='right carousel-control carousel-control-next'
                        data-slide='next'
                        href='#pablo'
                        onClick={(e) => {
                          e.preventDefault()
                          next()
                        }}
                        role='button'
                      >
                        <span className='fa fa-angle-right' />
                        <span className='sr-only'>Next</span>
                      </a>
                    </Carousel>
                  </Card>
                </div>
                {/* end carousel */}
              </Col>

              <Col md='5' sm='6'>
                <h2>{product.name}</h2>
                <h4 className='price'>
                  <strong>${product.price}</strong>
                </h4>
                <hr />
                <p>{product.description}</p>
                <span className='label label-default shipping'>
                  Free shipping on orders over $100
                </span>
                <br />
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />

                <Row style={{ justifyContent: 'center', marginTop: '1em' }}>
                  {product.countInStock > 0 ? null : (
                    <Alert color='danger' className='content-center'>
                      Out Of Stock
                    </Alert>
                  )}
                  {/* <Col md='6' sm='6'>
                    <label>Select color</label>
                    <FormGroup>
                      <Select
                        className='react-select react-select-default'
                        classNamePrefix='react-select'
                        name='colorSelect'
                        value={colorSelect}
                        onChange={(value) => setColorSelect(value)}
                        options={[
                          { value: '1', label: 'Black ' },
                          { value: '2', label: 'Gray' },
                          { value: '3', label: 'White' },
                        ]}
                        placeholder='COLOR'
                      />
                    </FormGroup>
                  </Col>
                  <Col md='6' sm='6'>
                    <label>Select size</label>
                    <FormGroup>
                      <Select
                        className='react-select react-select-default'
                        classNamePrefix='react-select'
                        name='sizeSelect'
                        value={sizeSelect}
                        onChange={(value) => setSizeSelect(value)}
                        options={[
                          { value: '1', label: 'Small ' },
                          { value: '2', label: 'Medium' },
                          { value: '3', label: 'Large' },
                        ]}
                        placeholder='SIZE'
                      />
                    </FormGroup>
                  </Col> */}
                </Row>
                <hr />
                <Row>
                  <Col className='col' md='7' sm='8'>
                    {product.countInStock > 0 ? (
                      <Button block className='btn-round' color='danger'>
                        Add to Cart  <i className='fa fa-chevron-right' />
                      </Button>
                    ) : (
                      <Button
                        disabled
                        block
                        className='btn-round'
                        color='danger'
                      >
                        Add to Cart  <i className='fa fa-chevron-right' />
                      </Button>
                    )}
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
        <div className='section'>
          <Container>
            <Row className='card-body-row'>
              <Col md='4' sm='4'>
                <div className='info'>
                  <div className='icon icon-warning'>
                    <i className='nc-icon nc-delivery-fast' />
                  </div>
                  <div className='description'>
                    <h4 className='info-title'>2 Days Delivery</h4>
                    <p>
                      Spend your time generating new ideas. You don't have to
                      think of implementing anymore.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md='4' sm='4'>
                <div className='info'>
                  <div className='icon icon-danger'>
                    <i className='nc-icon nc-credit-card' />
                  </div>
                  <div className='description'>
                    <h4 className='info-title'>Refundable Policy</h4>
                    <p>
                      Larger, yet dramatically thinner. More powerful, but
                      remarkably power efficient.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md='4' sm='4'>
                <div className='info'>
                  <div className='icon icon-success'>
                    <i className='nc-icon nc-bulb-63' />
                  </div>
                  <div className='description'>
                    <h4 className='info-title'>Popular Item</h4>
                    <p>
                      Choose from a veriety of colors resembling sugar paper
                      pastels.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
            <hr />
            <p>
              What to find out more about how we build our stuff?{' '}
              <a
                className='link-danger'
                href='#pablo'
                onClick={(e) => e.preventDefault()}
              >
                Learn more.
              </a>
            </p>
            <hr />

            <Row className='add-row'>
              <Col md='4' sm='4'>
                <h4>Complete the Look</h4>
              </Col>
              <Col md='4' sm='4'>
                <h5>Full-Grain Leather Briefcase</h5>
                <p className='price'>
                  <strong>€ 975.00</strong>
                </p>
                <p>
                  Constructed from robust full-grain leather, it's finished with
                  the label's 'city webbing' - a rich take on the brand's
                  signature stripes.
                </p>
                <br />
                <Button className='btn-round' color='danger'>
                  Add to Cart
                </Button>
              </Col>
              <Col className='ml-auto' md='3' sm='4'>
                <img
                  alt='...'
                  className='img-rounded img-responsive'
                  src='https://lh3.googleusercontent.com/EKspFB0Fs4SAR7GnnW6FBGYJkfGxjrwSw7Jo6enK2Ti2UT_H3g9HgeVx-NgmXP8C4G53RUHeSuQp5qSNbCP0KcIjMTRIQoM784xvrSqkCCiDVlyG2SYh5MI7kNvmuOw1ehqv6RvrKSLIK7mt9W9LXWa69FPU2GZxhAdOzWv4qQ1ouwWJYG-Nv8DqAyO9nsrh3vaRefRxBCZ1iROjOU4LlkE5WXRevEp-mT4EgoLRK3LkjYGEBeXSgM33IaMOjGo2iHk-GlPAEfPrWZSTJVpQEqEZdBRMXuKEESPpIkB6QtSLFyn0Vd7Ee-1Am5e8-07gKOCA2sKpMzsZiOJCXFEFAROSIExgIqmE5-5o3qtsBg2vkXGIeB1Ov5FxsZPFyW6r0urzoer5LcpOR9vLVmL-2iS6NRqhdOY-tx8ITgXn1G4I2OYSvFSZ7pSCJro_Xqdt3Pi_ULeL1pvU46ri_7bM7dzDeVOfZqVBM9yYmVyWaoYkGybgzvC_nS1gqY_tg-iKIoG6VR1yMAyQzh4H7ty3_iAYr82rLrcna2WepqUrGwG_4scGXGG_3rh6XaKpqsOCv2x5nHVy8ACnyhhTpwttGOefe486dpxM3at9mPI0IWM45KQ15EyaqkBiyYxAMp-ZkuKW-AL714ILc1oXBS2vPC5RQYvRCFxUabIqQT8OJ9qQfAjdsau4R7iNWtOC2ZE=w1454-h1938-no?authuser=0'
                />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  )
}

export default New_Item
