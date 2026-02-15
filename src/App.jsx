import "./App.css";

import { PropsPatterns } from "./Components/PropsPatterns/PropsPatterns";
import { SpredOp } from "./Components/PropsPatterns/SpredOp";
import Children from "./Components/PropsPatterns/Children";
import {Ifelse }from "./Components/ConditionalRendering/Ifelse";
import { RanderList } from "./Components/RanderList";

function App() {

  return (
    <>
      <RanderList/>
      <Ifelse name="jitu" isOnline={true}  hidden={true} premium={true}/>
      <Ifelse name="Niku" isOnline={false}  hidden ={false}  Vip ={true}/>
      <PropsPatterns />
      <PropsPatterns name="nikita" age="12" />
      <PropsPatterns age="12" />

      <SpredOp id="123" />

      <Children>
        <h1>name : rakesh

        </h1>
        <h1>role : manager</h1>
        <h1>age : 45</h1>
      </Children>
    </>
  );
}

export default App;
