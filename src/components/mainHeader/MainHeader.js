import React from 'react'

// reactstrap components
import { Container } from 'reactstrap'

// core components

function EcommerceHeader() {
  return (
    <>
      <div
        className='page-header page-header-small'
        style={{
          backgroundImage: `url(${'https://lh3.googleusercontent.com/GYhVtNUUBjak0A_pgvTzfEQ61aD-H9BxwNfhtW9x8z0jmXUg1dQ-g8gUW8ygm5CdjGbRionfzdiLMwKLBPIy5gVpIf3bBAYZdCb8iArONIXbF6yXxN4wVVL4Qh-sUb7JbHQtFqZmGX4zibZCsPZhEoekv5a1iLsube8pqurmTuRkUGZigMt-aY6OJbI922pXmVl7hWT2asRlAViE8fu7DPYO9lRkiDiuCxtTORDNUjUwSzBNaWmF3WZeH-hYLPyrv2o_PMbbw8TVUu7qfKaZBiPuX2OH-JqadoyDzL3DlPm8AKQY9neldVZP0WMXe9T_S7mRt9zxHgWVjiEcT1lnSW32jcAm3pWmyHJA6xDIlyyUuiahnD0ckfHdwqPlREAplLLjdUF6cgnDCZckDMPlG7rIGf_DrvDrwMdBYB7fC1jJyt-gBt2clr_D9U3iOsVGOvka8OSfeoMipQ_2MlKXJKM6x1_BJ9Z79BzJjfmsyD4Fr_ZdXsWgXA0crnLyHjRhFLNsUIoGEbA4MUCnTFQGVnrW4rn6wSHRtDNw_urH8DpFkJg_K1qURa2zebWk_XyefTuULzwUqLj1uuM6P0xoFdmceHQNRsX4PwCQBS_OfBuFTwtQWcaYtHcPtMUgMgDs64sPFL2hDhKfKmHfL35-e9xZSi_4ZeeAihQ1faGBxdsOy-CJ_mck8fhhBZy3_7g=w2268-h1938-no?authuser=0'})`,
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
