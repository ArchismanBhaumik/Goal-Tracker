import React from 'react'

function LandingPage({userName}) {
  return (
    <p className='typewriter'> Hi {userName?`${userName} What's on your mind?`:`Stranger`}</p>
  )
}

export default LandingPage