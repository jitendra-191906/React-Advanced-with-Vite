
import React from 'react'

export const PropsCom =({name,age,gender,city})=>{
  return (
    <>
     <h1>Hello, {name} ,How are you ?</h1>
     <p>what is your age {age}</p>
     <p>what is your gender {gender}</p>    
     <p>what is your city {city}</p>
    </>
  )
}