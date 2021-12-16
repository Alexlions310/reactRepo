import * as React from 'react'

function MainLogo(props) {
  return (
    <svg width={38} height={38} viewBox='0 0 38 38' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <circle cx={19} cy={19} r={19} fill='url(#prefix__paint0_radial)' />
      <path
        d='M15.871 9.902v4.807a1.6 1.6 0 01-.091.534l-3.595 10.173c-.386 1.092.476 2.22 1.697 2.22H24.12c1.22 0 2.083-1.128 1.697-2.22l-3.595-10.174a1.603 1.603 0 01-.091-.533V9.902m-6.26 0h6.26m-6.26 0h-.223c-.37 0-.671-.284-.671-.633 0-.35.3-.633.67-.633h6.707c.37 0 .67.283.67.633 0 .35-.3.633-.67.633h-.223'
        stroke='#fff'
      />
      <defs>
        <radialGradient
          id='prefix__paint0_radial'
          cx={0}
          cy={0}
          r={1}
          gradientUnits='userSpaceOnUse'
          gradientTransform='matrix(32.57145 -25.78575 24.24696 30.62772 4.071 31.893)'
        >
          <stop stopColor='#ABE6D1' />
          <stop offset={1} stopColor='#84CBEC' />
        </radialGradient>
      </defs>
    </svg>
  )
}

export default MainLogo
