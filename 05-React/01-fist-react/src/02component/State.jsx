import React, { useState } from 'react'

const State = () => {
    const [fruit, setFruit] = useState("Apple");
    const handleFruitChange=()=>{
        setFruit("Banana")
    }
  return (
    <div>
      <h1>State in react js</h1>
      <p>State change the value and update the UI on webpage.</p>
      <p>If state value change then component re-render and update the UI.</p>
      <p>This is mutable and dynamic</p>
      <hr />
      <h2>Fruit Name:{fruit}</h2>
      <button onClick={handleFruitChange}>Click to change fruit</button>
    </div>
  )
}

export default State
