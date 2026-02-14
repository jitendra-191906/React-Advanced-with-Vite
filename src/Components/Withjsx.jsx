import React from 'react';

export const Withjsx = () => {
  return (
    <>
      <div id='con'>
        <h1>Hello Jsx</h1>
      </div>
    </>
  );
};

//without jsx
export const WithOutJSX = () => {
    return React.createElement('div', {id:"con"},
      React.createElement("h1",null ,"Hello Jsx") );
} 

