import React from 'react';

import { useEffect } from 'react';

const WaitHeader = () => {
  
  useEffect(()=> {
    setTimeout(()=> {
      document.querySelector('h1').remove()
    }, 250)
  })

  return (
    <div>
      <h1>Testing React Component!</h1>
    </div>
  )
}

export default WaitHeader;
