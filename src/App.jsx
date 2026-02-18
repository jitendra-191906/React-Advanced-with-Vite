import "./App.css";

import { PropsPatterns } from "./Components/PropsPatterns/PropsPatterns";
import { SpredOp } from "./Components/PropsPatterns/SpredOp";
import Children from "./Components/PropsPatterns/Children";
import { Ifelse } from "./Components/ConditionalRendering/Ifelse";
import { RanderList } from "./Components/RanderList";
import { Aleart } from "./Aleart";
import { EventHandle } from "./Components/Event/EventHandle";
import { ParrentCom } from "./Components/Event/ParrentCom";
import { ParrentCom1 } from "./Components/Event/ParrentCom";
import { StateManagement } from "./Components/State/StateManagement";
import { Loginout } from "./Components/State/Loginout";
import { Batching } from "./Components/Batching";
import { TestObj } from "./Components/Object/TestObj";
import { ArrayObj } from "./Components/Array";
import { Usercount } from "./Components/Hooks/Usercount";
import { ShoppingCart } from "./Components/Hooks/ShoppingCart";
import { Lazy } from "./Components/Hooks/Lazy";
import { CustomUseState } from "./Components/CustomUseState";
import { Header } from "./Components/Hooks/ContactHook/header";
import { UserContextProvider } from "./Components/Hooks/ContactHook/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          justifyContent: "space-between",
        }}
      >
        <Header />

        {/* <CustomUseState /> */}
        {/* <Lazy /> */}
        {/* <ShoppingCart /> */}
        {/* <Usercount /> */}
        {/* <ArrayObj /> */}
        {/* <TestObj />

        <Batching />
        <Loginout />
        <StateManagement />

        <ParrentCom />
        <ParrentCom1 />
        <EventHandle text="Like" />
        <EventHandle text="BookMark" />

        <Aleart> This is sucess message </Aleart>
        <Aleart type="error"> This is error message </Aleart>

        <RanderList />
        <Ifelse name="jitu" isOnline={true} hidden={true} premium={true} />
        <Ifelse name="Niku" isOnline={false} hidden={false} Vip={true} />
        <PropsPatterns />
        <PropsPatterns name="nikita" age="12" />
        <PropsPatterns age="12" />

        <SpredOp id="123" />

        <Children>
          <h1>name : rakesh</h1>
          <h1>role : manager</h1>
          <h1>age : 45</h1>
        </Children> */}
      </div>
    </UserContextProvider>
  );
}

export default App;
