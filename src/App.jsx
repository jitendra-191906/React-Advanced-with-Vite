import './App.css';
import {Withjsx,WithOutJSX } from './Components/Withjsx';
import {PropsCom} from './Components/PropsCom';




function App() {
  return (
    <>
    {/* <Withjsx/>
    <WithOutJSX/> */}
<PropsCom name='jitendra' age='22' gender='male' city='Lucknow'/>
<PropsCom name='sourabh' age='22' gender='male' city='Lucknow'/>
<PropsCom name='rohit' age='22' gender='male' city='Lucknow'/>

{/* //now we know the destructure */}


    </>
  );
}

export default App;
