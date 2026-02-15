import React from "react";

export const Ifelse = ({ name, isOnline, hidden, premium, Vip }) => {
  if (hidden && !isOnline) {
    return  null
  }
  return (
    <>
      {/* Terrnatory Operator */}

      <h3>
        {name}

 {/* AND OPERATORS */}
        {premium && <span>user is premium</span>}
        {Vip && <span>user is Vip</span>}

      </h3>
      <span>{isOnline ? "Online" : "Offilne"}</span>
      <p>{isOnline ? "Avaline for chat" : "try after some time"}</p>
      {isOnline ? <button>send message</button> : <span>try AGAIN</span>}
    </>
  );

  //If else statement
  // if (isOnline) {
  //   return (
  //     <>
  //       <h1>{name}</h1>
  //       <p>User is online</p>
  //       <button>Send Messsage</button>
  //     </>
  //   );
  // }
  // return (
  //   <>
  //     <h1>{name}</h1>
  //     <p>User is offline</p>
  //     <span>Check Back To letter</span>
  //   </>
  // );
};
