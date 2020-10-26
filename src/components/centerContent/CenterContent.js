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
          backgroundImage: `url(${'https://lh3.googleusercontent.com/wh9zZm3_tZgcYU73QL3OeYvW2SjXZWgQyYDk2ZVrORtOk6dfu3GwecVqQ8FnkOENYjVIv6tgwlP1EwmJsdmqawC-uDzHqiHpbqM9QZFZl5u58Gc0iDSwW2tbbGlXzTbrk89qIXxWo478lslx0dmRIWT97TNUcY3m3ce3BvXgWfDqRqyJAi9sx2dYXahjfAbMS00dxEt7Kx1_94QLkzPIWIRuQhO0beuuu13qyKu5Rv4Oq-zgAV01DMH44RnhcFVkJ30ISTc76sQiOJh1pmOFBpH7SRayFCuIL9IONi4vXZeNR0_BroGRT2m5Trd2GLkX6fQdtSc63Uw-lj-dzFfG2ibE0TKPK7FcEKtO42lRyN2lXubdKVwu6WMMYYS3_SpTjyNBVD86ux25i_78GRZgIYmF2N4095e73nSpB1johgdR3u-eX9e3wjCzLfaW5YwuyFJSLkMp4WBfH7umAsKLDngGMxYSYpL_VgLl7twoqJTAiXIKI1a6MD9ex0vAU1qLJjVK6lAdMKrc92IiYctRK1WoxQbCCmsSib0Cf8hFjAlKUi3mRkCZfcIu9MyQbpFj9FSCiQ1WlpNbfzKWoj_erx6DoLcudRitfYClnxWyUM6X9N1yeMtQLDnTe2mh6fkD0Zi8mkUgNxK_KPRJXBKSxZEzDJIsliNSnYtzyhRkzyIaNwEWIfkaN2FeS05kSIk=w1454-h1938-no?authuser=0'})`,
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
