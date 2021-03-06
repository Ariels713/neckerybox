import React from 'react'
// reactstrap components
import { Button, Card, CardBody, CardFooter, Row, Col } from 'reactstrap'

// core components

function EaringCard() {
  return (
    <>
      <Row>
        <Col className='ml-auto mr-auto text-center title' md='6'>
          <h2>Fall Earing Collection</h2>
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
              backgroundImage: `url(${'https://lh3.googleusercontent.com/_GkdkOATWEGr9sOJLVIMFkPStZD7_h-D4OERwlOWvtTICF0c05t_IUwKZo5ovRqc91ly180ADazKj-BGlDIh5yxBUXXMxKIfoklR_3rhkoaA-nsixzee0wy6N9LdRV0u0F0U3_s6X8xC3UjRg93fqeQaq1aWkwYBVPcqGlflWslyrUhDxEtGKxMUAcn-iV4SLbwyh0GbnMp-fljfcQ7VLpRnMJyifxDx8VyeRgv8cP1S8SR0ivMJXXx4xGdK5PqDkSGu3VUPM7VUFE3K4Pzq0p9Q0_jjxgiLKQF7v7UM4Pk_dQo2qsc1rKprWzHDkw6L3YluGPo5cV0T6kHuLTHvYIXpdM72vNCV7U_o_OO_vxinJCCdnvXTAfbqVGAOXpcA20UPfsLwpCIxNpAlSDof5g1X0oxTHKKi1UBRtrcLLU2_rCoQLqDGxaQL_OjF975fh6Uw4i6Aa5VlHRVakahEpUCphbiy_Kpz60MLHrPUUgvLyyQik7ylfCtUkE6qOqzqGCqZV6aaGmcY_bAMGHWrFBtwh90Y14nfQyEVKFef_i-Wu7qD6sj74uTLlCtppIXfoQJo8tIX2-O7kNUBSg3vSaEDzpfwbjlvd6OPb-mtBDOJMvvhbrUEPjZbHzvMYgGD74R7KDYR4JG6lES4JYT4IqN9P9dHll0xewgrD-4pj-JzC1MElDRvEzxKUekod_Y=w231-h230-no?authuser=0'})`,
            }}
          >
            <CardBody>
              <h6 className='card-category'>Earings</h6>
              <div className='card-icon'>
                <i aria-hidden={true} className='fas fa-ring'></i>
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
                  <i aria-hidden={true} className='fas fa-ring'></i> Collection
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
