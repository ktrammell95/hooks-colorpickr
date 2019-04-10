import React, { useState } from 'react'

const Light = () => {
  const [light, setLight] = useState(0)

  return (
    <div className="light">
      <h3>Light</h3>
      <input
        id="light"
        type="range"
        value={light}
        min="0"
        max="100"
        step="1"
        onChange={e => setLight(e.target.value)}
      />
      <span id="">{light}</span>
    </div>
  )
}
export default Light
