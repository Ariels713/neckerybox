import React from 'react'

// reactstrap components
import { Container } from 'reactstrap'

// core components

function AboutUsHeader() {
  return (
    <>
      <div
        className='page-header page-header-xs settings-background'
        style={{
          backgroundImage: `url(${'https://dl.airtable.com/.attachments/df2ac6891edff3a8fe43b849f0a5e257/e9bdae79/main_image_slider.jpg'})`,
        }}
      >
        <div className='filter filter-danger' />
        <div className='content-center'>
          <Container>
            <h1>
              Meet <br />
              Our Designers!
            </h1>
            <h3>Find out what inspires them!</h3>
          </Container>
        </div>
      </div>
    </>
  )
}

export default AboutUsHeader
