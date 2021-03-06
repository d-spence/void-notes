// Message component; displays a message under navigation bar
import React from 'react';
import './components.css';

function Message({ msg, toggleMsg }) {
  return (
    <div className="message">
      <span className="message-text">{msg}</span>
      <button
        variant="secondary"
        className="message-btn"
        size="sm"
        onClick={toggleMsg}
      >x</button>
    </div>
  );
}

export default Message;