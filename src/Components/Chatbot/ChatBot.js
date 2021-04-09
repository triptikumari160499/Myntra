import React, { useState } from 'react'
import Button from "react-bootstrap/Button"
import Mainfile from "./mainfile"

const ChatBot = () => {
    const [chatBot, setChatBot] = useState(false);
    return (
        <div className="chatbot">
          <Button
            variant="light"
            onClick={() => setChatBot(!chatBot)}
            className="float"
          >
            <i class="fas fa-robot my-float"></i>
          </Button>
          {chatBot ? <Mainfile /> : null}
        </div>
    )
}

export default ChatBot
