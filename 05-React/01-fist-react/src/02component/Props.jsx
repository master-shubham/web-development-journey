import React from "react";

const Props = () => {
  const userObj = {
    name: "jeo",
    email: "jeo@test.com",
    age: 32,
  };
  return (
    <div>
      <h1>Props in React js</h1>
      <User userObj={userObj} />
    </div>
  );
};

export default Props;

const User = ({userObj}) => {
    
  return (
    <>
      <h1>User Component</h1>
      <p>Name: {userObj.name}</p>
      <p>Email: {userObj.email}</p>
      <p>Age: {userObj.age}</p>
    </>
  );
};
