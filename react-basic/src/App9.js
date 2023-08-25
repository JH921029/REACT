import { Fragment } from "react"
import {useState} from "react";
import HookEffect from "./hook/HookEffect"
import HookRef from "./hook/HookRef";
import HookQ from "./hook/HookQ";
import HookReducer from "./hook/HookReducer";
import IterationComponentQ2 from "./component/IterationComponentQ2";
import Login from "./component/Login";


function App(){
  //보이기 숨기기 - unmount값 확인
  const [visible, setVisible] = useState(true);

  const handleVisible = () =>{
    setVisible(!visible);
  }
  console.log(visible);
  return(
    <Fragment>
      <button onClick={handleVisible}>{visible ? '숨기기' : '보이기'}</button>
      {visible ? <HookEffect/> : null}

      <hr/>
      <HookRef/>

      <hr/>
      <HookQ/>

      <hr/>
      <HookReducer/>

      <hr/>
      <IterationComponentQ2/>

      <hr/>
      <Login/>

    </Fragment>
    
  )
}
 
export default App