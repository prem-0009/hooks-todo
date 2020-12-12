
// import './App.css';

import Todos from "./components/Todos";
import { useState } from "react";



function App() {

  const [todos, setTodos]= useState([]);
  return (
    <div className="App">
      <Todos 
      
      // onSubmit={(text)=>setTodos([{text, complete:false}, ...todos])} 
      />
      <div>
        {/* {
          todos.map(({text})=>
            <div key={text}>{text}</div>
            )
          } */}
      </div>
    </div>
  );
}

export default App;
