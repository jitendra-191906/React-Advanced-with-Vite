
import { useState } from "react"
export const Batching =()=>{
      const [count,setcount]=useState(0);
      const [name,setname]= useState("")
      let islogin=true
console.log("components rander")
      const handleClick =()=>{
            setcount(count+1)
            setname("update")
            islogin=false
      }
      return(
            <>
            <p>counter : {count}</p>
            <p>name : {name}</p>
            <p>{islogin ? "yes":"no"}</p>
            <button onClick={handleClick}>update all three</button>
            </>
      )
}