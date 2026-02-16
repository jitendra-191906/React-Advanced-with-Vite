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
      <p> name{user.name}</p>
      <p>age{user.age}</p>
      <p> city{user.address.city}</p>
      <p> country{user.address.country}</p>

      <button onClick={handleAge}>chnage the age </button>
      <button onClick={handlename}>chnage the name </button>
      <button onClick={handlecity}>chnage the city </button>
    </>
  );
};
