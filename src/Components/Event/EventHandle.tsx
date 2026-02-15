import React from "react"

export const EventHandle = ({ text="like" }) => {
      const name ="jitendra"
      const clicked =()=>{
            console.log(`hey ${name},You clicked ${text}`)
      }

      return (
            <>
                  <button onClick={clicked}>{text}</button>
            </>
      )
}