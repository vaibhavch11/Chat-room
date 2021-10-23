import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import './App.css';


import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useState } from "react";

import { Timeline } from 'primereact/timeline';

function App() {

  const [author,setAuthor] = useState("");
  const [message,setMessage] = useState("");
  const [messages,setMessages] = useState([{
    author:"Bot",message:"Hello"
  },]);

  const addMessage = () => {
    const send = {author , message};
    setMessages([...messages, send]);
    setMessage("");
    // console.log(send);
  };

  return (
    <div>
    <div classsName = "p-col-12">

      <div className = "p-inputgroup">
        <span className="p-inputgroup-addon">
        <i className="pi pi-user"></i>
        </span>

        <InputText placeholder="Username" value={author}
          onChange = {(e)=>setAuthor(e.target.value)}
        />
        <InputText placeholder="Message" 
          value={message}
          onChange = {(e)=>setMessage(e.target.value)}
        />

        <Button label = "Send" onClick={() => addMessage()}/>

        
      </div>

    </div>
    
      <div>
        <h5></h5>
        <Timeline value = {messages} opposite={(item)=> item.author}
          content = {(item)=>(<small className = "p-text-secondary">{item.message}</small>)}
        />
      </div>
     
    </div>
  );
}

export default App;
