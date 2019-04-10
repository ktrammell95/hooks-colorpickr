import React, { useState } from 'react'

const Alpha = () => {
  const [alpha, setAlpha] = useState(0)

  return (
    <div className="alpha">
      <h3>Alpha</h3>
      <input
        id="alpha"
        type="range"
        value={alpha}
        min="0"
        max="1"
        step=".01"
        onChange={e => setAlpha(e.target.value)}
      />
      <span id="">{alpha}</span>
    </div>
  )
}

export default Alpha
