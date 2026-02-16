import { useState } from "react"
export const Loginout = () => {

      const [isLogin, setislogin] = useState(false)
      const [inputmsg, setinputmsg] = useState("")
      const handlelogin = () => {
            setislogin(!isLogin)
      }
      const handleChange = (e) => {
            setinputmsg(e.target.value)
      }
      return (
            <>
                  <button onClick={handlelogin}>{isLogin ? "logout" : "login"}</button>
                  <h1>hello input</h1>
                  <input type="text" placeholder="enter your message" onChange={handleChange} value={inputmsg} />
                  <button onClick={() => setinputmsg("")}>Reset</button>
                  <p>{inputmsg}</p>
            </>
      )
}