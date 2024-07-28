import React, { useState } from 'react'

const Chat = () => {
   const [messages, setMessages] = useState([])
   const [inputValue, setInputValue] = useState('')

   const handleInputChange = (e)=>{
    setInputValue(e.target.value)
   }

   const handleSendMessage = (e) =>{
    e.preventDefault();
    setMessages((prevMessage) => [...prevMessage, inputValue])
    setInputValue('')
   }

   const handleDeleteMessage = (index)=>{
    
    setMessages(prevMessage => prevMessage.filter((_, messageIndex)=> messageIndex !== index));
   }

  return (
    <div>
        <h2>Chat</h2>
        <form onSubmit={handleSendMessage}>
            <input
            type='text'
            value={inputValue}
            onChange={handleInputChange}
            placeholder='Enter a message'/>
            <button type='submit'>Send</button>
        </form>
        <ul>
        { messages.length === 0 ?(
                <p>Message is empty</p>
              ) :
                messages.map((task,index)=>{
                 return( <li key={index}> {task}
                    <button onClick={()=>handleDeleteMessage(index)}>Delete</button>
                </li>)
              })}
        </ul>
    </div>
  )
}

export default Chat