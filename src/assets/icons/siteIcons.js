import React from 'react'

function WeddingRing2(props) {
  const title = props.title || 'wedding ring 2'

  return (
    <svg
      height='18'
      width='18'
      viewBox='0 0 18 18'
      xmlns='http://www.w3.org/2000/svg'
    >
      <title>{title}</title>
      <g>
        <path
          d='M16.5 3.33v-1.08a1.88 1.88 0 0 0-1.88-1.88h-11.25a1.88 1.88 0 0 0-1.87 1.88v1.08a3.38 3.38 0 0 0 0.13 0.93l1.35 4.74-1.35 4.74a3.38 3.38 0 0 0-0.13 0.93v1.08a1.88 1.88 0 0 0 1.87 1.88h11.25a1.88 1.88 0 0 0 1.88-1.88v-1.08a3.38 3.38 0 0 0-0.14-0.93l-1.35-4.74 1.35-4.74a3.38 3.38 0 0 0 0.14-0.93z m-1.27 9.12a1.13 1.13 0 0 1-1.1 1.43h-10.27a1.13 1.13 0 0 1-1.08-1.44l0.88-3.06h10.68z m0-6.88l-0.89 3.06h-10.68l-0.89-3.06a1.13 1.13 0 0 1 1.08-1.44h10.28a1.13 1.13 0 0 1 1.09 1.44z'
          fill='#ed7064'
        />
        <path
          d='M3.66 8.63h10.68l0.89-3.07a1.13 1.13 0 0 0-1.08-1.44h-10.28a1.13 1.13 0 0 0-1.09 1.44z'
          fill='#c64b4b'
        />
        <path
          d='M14.34 9.38h-10.68l-0.89 3.05a1.13 1.13 0 0 0 1.08 1.44h10.28a1.13 1.13 0 0 0 1.09-1.44z'
          fill='#c64b4b'
        />
        <path
          d='M9 7.13l-1.8-2.1 0.68-0.9h2.25l0.67 0.9-1.8 2.1z'
          fill='#a4dae0'
        />
        <path d='M8.4 5.03l0.6-0.9 0.6 0.9h-1.2z' fill='#c8e9ec' />
        <path d='M7.2 5.03l0.67-0.9 0.53 0.9h-1.2z' fill='#c8e9ec' />
        <path d='M9.6 5.03l0.53-0.9 0.67 0.9h-1.2z' fill='#82adb2' />
        <path d='M8.4 5.03l0.6 2.09 0.6-2.09h-1.2z' fill='#82adb2' />
        <path
          d='M6.4 11.63a3 3 0 1 1 5.19-0.01h0.84a3.75 3.75 0 1 0-6.87 0z'
          fill='#ffd764'
        />
      </g>
    </svg>
  )
}

export default WeddingRing2
