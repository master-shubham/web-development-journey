import React, { useState } from 'react'

const Toggle = () => {
    const [isShow,setIsShow]=useState(false)
    const userInfo={
        name:"jeo",
        email:"jeo@test.com",
        age:32
    }
  return (
    <div>
      <h1>User Information</h1>
      <button onClick={() => setIsShow(!isShow)}>
        {isShow ? "Hide User Info" : "Show User Info"}
      </button>
      {isShow && (
        <div>
          <p>{userInfo.name}</p>
          <p>{userInfo.email}</p>
          <p>{userInfo.age}</p>
        </div>
      )}
    </div>
  );
}

export default Toggle
