
import { CustomButtonEffect } from "./CustomButtonEffect"
export const ParrentCom = () =>{
      const handleclick =()=>{
alert('Thank you for sending message');
      } 
      return (
            <>
            <h1>helllo Button</h1>
            < CustomButtonEffect  onClick={handleclick}  text="sending messageeing"/>
            </>
      )
}
export const ParrentCom1 = () =>{
      const handleclick = ()=>{
alert(`Thank you for subscribing`);
      } 
      return (
            <>
            <h1>helllo Button</h1>
            < CustomButtonEffect  onClick={handleclick}  text ="subscribe"/>
            </>
      )
}