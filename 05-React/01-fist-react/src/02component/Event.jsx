import React from 'react'

const Event = () => {
    const handleClick=()=>{
        alert("Function called.")
    }
    const handleClickGreet=()=>{
        alert("Hello")
    }
  return (
    <div>
      <h1>Event</h1>
      <button onClick={handleClick}>Click me</button>
      <button onClick={()=>handleClickGreet()}>Click to greeting</button>
    </div>
  )
}

export default Event
