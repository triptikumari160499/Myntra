import React, { useEffect, useState } from "react";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";
import MessageForm from "./MessageForm";
import axios from "axios";

const ChatFeed = (props) => {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const res = await axios.get(
      "https://myntra-backend-hackathon.herokuapp.com/images/"
    );
    console.log(res.data);
    setData(res.data);
  }, []);
  //     const config = {
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     }
  //     const body = JSON.stringify({chat_id,img_src});
  //     const res = await aixos.post('/api/auth', body, config);
  // console.log(res.data)

  //   axios({
  //     url: `https://myntra-backend-hackathon.herokuapp.com/images/`,
  //     method: "get",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   }).then((res) => {
  //     setData(res.data);
  //   });
  // }

  const { chats, activeChat, userName, messages } = props;

  const chat = chats && chats[activeChat];
  const renderReadReceipts = (message, isMyMessage) =>
    chat.people.map(
      (person, index) =>
        person.last_read === message.id && (
          <div
            key={`read_${index}`}
            className="read-receipt"
            style={{
              float: isMyMessage ? "right" : "left",
              backgroundImage:
                person.person.avatar && `url(${person.person.avatar})`,
            }}
          />
        )
    );
  const renderMessages = () => {
    const keys = Object.keys(messages);

    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessageKey = index === 0 ? null : keys[index - 1];
      const isMyMessage = userName === message.sender.username;
      return (
        <div key={`msg_${index}`} style={{ width: "100%" }}>
          <div className="message-block">
            {isMyMessage ? (
              <MyMessage message={message} />
            ) : (
              <TheirMessage
                message={message}
                lastMessage={messages[lastMessageKey]}
              />
            )}
          </div>

          <div
            className="read-receipts"
            style={{
              marginRight: isMyMessage ? "18px" : "0px",
              marginLeft: isMyMessage ? "0px" : "68px",
            }}
          >
            {renderReadReceipts(message, isMyMessage)}
          </div>
        </div>
      );
    });
  };

  if (!chat) return <div />;
  return (
    <div className="chat-feed">
      <div className="chat-title-container">
        <div className="chat-title">{chat?.title}</div>
        <div className="chat-subtitle">
          {chat.people.map((person) => `${person.person.username}`)}
        </div>
      </div>
      {renderMessages()}
      {/* {chat?.id == data.chat_id ? (
        <img src={data.img_src} alt="Sent Image" />
      ) : null} */}
      {data.map((object, idx) => {
        if (chat.id === object.chat_id)
          return <img src={object.img_src} alt="Sent Image" className="send-image"/>;
        return null;
      })}

      <div style={{ height: "100px" }} />
      <div className="message-form-container">
        <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  );
};

export default ChatFeed;
