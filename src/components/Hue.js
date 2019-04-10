import React, { useState } from 'react'

const Hue = () => {
  const [hue, setHue] = useState(0)

  return (
    <div className="hue">
      <h3>Hue</h3>
      <input
        id="hue"
        type="range"
        value={hue}
        min="0"
        max="300"
        step="1"
        onChange={e => setHue(e.target.value)}
      />
      <span id="">{hue}</span>
    </div>
  )
}

export default Hue
