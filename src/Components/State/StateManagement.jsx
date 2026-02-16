import { useState } from "react"
export const StateManagement = () => {
      const [count, setcount] = useState(0);
      // let countx = 0;
      console.log('counter component rendered')
      // const handleCount = () => {

      //       countx = countx + 1;
      //       console.log(countx)

      // };


      return (
            <>
                  <p>
                        counter function here
                  </p>
                  <p> Counter :-{count}</p >
                  {/* <button onClick={handleCount}> Incre</button> */}


                  <button onClick={() => setcount(count + 1)}> Incre</button>
                  <button onClick={() => setcount(count - 1)}> Decr</button>
                  <button onClick={() => setcount(0)}> Reset</button>



            </>
      )
}