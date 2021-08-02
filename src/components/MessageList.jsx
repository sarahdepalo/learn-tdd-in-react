const MessageList = ({ messages }) => {
  return (
    <div>
      <ul>
        {messages.map((message, index) => (
          <li key={`${index}-${message}`}>{message}</li>
        ))}
      </ul>
    </div>
  );
};

export default MessageList;
