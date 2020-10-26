import React from 'react'
// reactstrap components
import { Button, Card, CardBody, CardFooter, Row, Col } from 'reactstrap'

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
              backgroundImage: `url(${'https://lh3.googleusercontent.com/Oezh2v0sxJu9PXy6qZjgYQRA2w5NuGfWYrzM-XoFZAtuhpDqj7vZDtbDRCtBWPrRd9JZ9OnMLA1MNFGL0-Z2LFekW-t82U7IeYOnR2h74gjjY7Z7udihinIZmRaJu6PmaeqpjYUOa84WtQi-91eciu7Oll4bB3IPlL4YV2EHdtZzX7CypfWJtm4NbgUnY0uM9hBrFx89NtQ_DCTlKF20eLxddo7C3YLwFpo6qUVo572GkTv-TuerteY4Zdpg2RQ4vccd_VWqu_SMCt9u-9fnFVxbUW516ZA9os9ovVs8NyohuMDP1XkKBTCjl2MkRQ0zQQQnEt-etRaO25yTAYl2BFb6NtS4HkvfGl5S24e_bntSC57dPHkpoOfYh-7z84FndSF0hvnRaKJxvGxMlZgXkb_JdEoaqYLq5K4ldYshVRPQIUHtaH3P1PDFX2bEJhpb5lNo4eGkZmhjMq3zzzj5haxYyhnMeE3hMpbvBnE7S7-rBAGlpVOga0bjP_Rnqoi6C7g5sH3PprkIlaIVDz5gFY_9CsVTSfrw6CbcM9K2sW9rwD59Bqn7btFyS8Sva0sse6F3S3N4O_-KaPLNmjMMnTSaAZWleq-s4hVcPDsAfrFP3D3dpn2f8AYTYmpL63k122kZEmYWMPwmrFP-QoDr5fEVv0ZA6y1DCugQq3gnZnQyM_-tPldJM-vKsAp7_Lg=w1454-h1938-no?authuser=0'})`,
            }}
          >
            <CardBody>
              <h6 className='card-category'>Necklaces</h6>
              <div className='card-icon'>
                <i aria-hidden={true} className='fas fa-rainbow'></i>
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
                  <i aria-hidden={true} className='fas fa-rainbow'></i> Read
                  Article
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
