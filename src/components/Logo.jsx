import React from 'react'

function Logo({width = '100px'}) {
  const logoUrl = "https://cdn-icons-png.flaticon.com/512/1183/1183621.png"
  return (
    <div>
      <img src={logoUrl} alt="Logo" width={width} />
    </div>
  )
}

export default Logo