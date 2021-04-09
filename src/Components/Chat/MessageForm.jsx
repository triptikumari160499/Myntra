import { useState } from 'react';
import { sendMessage, isTyping } from 'react-chat-engine';
import React, { Component }  from 'react';
import Button from 'react-bootstrap/Button'

const MessageForm = (props) => {
  const [value, setValue] = useState('');
  const { chatId, creds } = props;

  const handleChange = (event) => {
    setValue(event.target.value);

    isTyping(props, chatId);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const text = value.trim();

    if (text.length > 0) {
      sendMessage(creds, chatId, { text });
    }

    setValue('');
  };

  const handleUpload = (event) => {
    sendMessage(creds, chatId, { files: event.target.files, text: '' });
  };

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <input
        className="message-input"
        placeholder="Send a message..."
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <label htmlFor="upload-button">
        <span className="image-button">
        <i  class = "fas fa-images"></i>
        </span>
      </label>
      <input
        type="file"
        multiple={false}
        id="upload-button"
        style={{ display: 'none' }}
        onChange={handleUpload.bind(this)}
      />
      <button type="submit" className="send-button">
      <i  class = "fas fa-share"></i>
      </button>
      {/* Link to Wishlist page */}
      <Button variant = "white" type="submit" className = "wishlist"><i  class = "fas fa-shopping-bag"></i></Button>
    </form>
  );
};

export default MessageForm;
