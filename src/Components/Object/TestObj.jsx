import { useState } from "react";

export const TestObj = () => {
  const [user, setUser] = useState({
    name: "jitendra",
    age: 34,
    address: {
      city: "kct",
      country: "usa",
    },
  });
  console.log("user component rander ", user);
  const handleAge = () => {
    setUser({
      ...user,
      age: 12,
    });
  };

  const handlename = () => {
    setUser({
      ...user,
      name: "nikita",
    });
  };

  const handlecity = () => {
    setUser({
      ...user,
      address: {
        ...user.address,
        city: "magalpura",
      },
    });
  };
  return (
    <>
      <div
        style={{
          backgroundColor: "lightblue",
          padding: 20,
          borderRadius: 20,
        }}
      >
        <p> Name: {user.name}</p>
        <p>Age: {user.age}</p>
        <p> City:{user.address.city}</p>
        <p> Country: {user.address.country}</p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 20,
          }}
        >
          <button onClick={handleAge}>chnage the age </button>
          <button onClick={handlename}>chnage the name </button>
          <button onClick={handlecity}>chnage the city </button>
        </div>
      </div>
    </>
  );
};
