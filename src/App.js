import React, { Component, useState } from 'react'

import './App.css'
import './styles/colorpicker.css'

const ColorPicker = () => {
  const [saturation, setSat] = useState(
    Math.round(0 + Math.random() * (100 - 0))
  )
  const [hue, setHue] = useState(Math.round(0 + Math.random() * (300 - 0)))
  const [light, setLight] = useState(Math.round(0 + Math.random() * (100 - 0)))
  const [alpha, setAlpha] = useState(1)

  const randomize = () => {
    setSat(Math.round(0 + Math.random() * (100 - 0)))
    setHue(Math.round(0 + Math.random() * (300 - 0)))
    setLight(Math.round(0 + Math.random() * (100 - 0)))
  }

  return (
    <div className="color-picker">
      <h1>Color Picker</h1>
      <div className="img-block">
        <div
          className="color-block"
          style={{
            backgroundColor: `hsla(${hue}, ${saturation}%, ${light}%, ${alpha})`
          }}
        />
      </div>
      <h2>
        <span>hsla</span>
        <span>({hue},</span>
        <span>{saturation}%,</span>
        <span>{light}%,</span>
        <span>{alpha})</span>
      </h2>
      <div>
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
      </div>
      <div className="button">
        <button onClick={randomize}>Randomize</button>
      </div>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <ColorPicker />
      </div>
    )
  }
}

export default App
