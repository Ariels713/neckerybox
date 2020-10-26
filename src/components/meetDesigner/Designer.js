import React from 'react'
// reactstrap components
import { Button, Card, CardBody, CardFooter, CardTitle } from 'reactstrap'

// core components

function Designer() {
  return (
    <>
      <Card className='card-profile card-plain'>
        <div className='card-avatar border-white'>
          <a href='#pablo' onClick={(e) => e.preventDefault()}>
            <img
              alt='Ariel and Els'
              src='https://i.ibb.co/zXYRTFS/IMG-20200428-220644-405.jpg'
            ></img>
          </a>
        </div>
        <CardBody>
          <CardTitle tag='h4'>Ariel</CardTitle>
          <h6 className='card-category'>Lead Designer</h6>
          <p className='card-description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </CardBody>
        <CardFooter className='text-center'>
          <Button
            className='btn-icon btn-border btn-round'
            color='default'
            href='#pablo'
            onClick={(e) => e.preventDefault()}
            outline
          >
            {/* <i className='fa fa-check'></i> */}
            Our Team
          </Button>
        </CardFooter>
      </Card>
    </>
  )
}

export default Designer
