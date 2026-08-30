import React from 'react'

const JsxWithCurlyBracket = () => {
  const name = "javaScript"
  let x=10
  let y=20
  function sum(a,b){
    return a+b;
  }

  const userDetails = {
    name:"jeon",
    email:"jeon@test.com",
    age:32
  }

  return (
    <div>
      <h1>Jsx With Curly Bracket</h1>
      <h2>Language: {name}</h2>
      <h2>X + Y = {sum(x,y)}</h2>
      <hr />
      <h1>User Details</h1>
      <p>{userDetails.name}</p>
      <p>{userDetails.email}</p>
      <p>{userDetails.age}</p>
    </div>
  );
}

export default JsxWithCurlyBracket
