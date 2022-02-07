import { useState } from "react";
import AddAndClear from "./component/AddAndClear";
import MainPart from "./component/MainPart";


function App() {
  let [ ans , setAns] = useState("");
  let [remove, setRemove] = useState(true);


  return (
    <div className="App">
     <AddAndClear ans = {ans} setAns={setAns} remove={remove} setRemove={setRemove}/>
     {
       remove?<MainPart ans={ans}/>:null
     }
    </div>
  );
}

export default App;
