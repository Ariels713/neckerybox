import React from 'react'

// reactstrap components
import { Container } from 'reactstrap'

// core components

function EcommerceHeader() {
  return (
    <>
      <div
        className='page-header'
        style={{
          backgroundImage: `url(${'https://dl.airtable.com/.attachments/df2ac6891edff3a8fe43b849f0a5e257/e9bdae79/main_image_slider.jpg'})`,
        }}
      >
        <div className='filter' />
        <div className='content-center'>
          <Container className='text-center'>
            <h1>Neckery Box Designs</h1>
            <h3>Free Shipping on orders over $99</h3>
          </Container>
        </div>
      </div>
    </>
  )
}

export default EcommerceHeader
