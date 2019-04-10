import React, { useState } from 'react'

const Saturation = () => {
  const [saturation, setSat] = useState(0)

  return (
    <div className="saturation">
      <h3>Saturation</h3>
      <input
        id="saturation"
        type="range"
        value={saturation}
        min="0"
        max="100"
        step="1"
        onChange={e => setSat(e.target.value)}
      />
      <span id="">{saturation}</span>
    </div>
  )
}

export default Saturation
