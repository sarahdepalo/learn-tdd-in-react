import { useState } from 'react';

const NewMessageForm = ({onSend}) => {
    const [inputText, setInputText] = useState('');

    const handleTextChange = (event) => {
        setInputText(event.target.value)
    };

    const handleSend = (event) => {
        event.preventDefault();
        onSend(inputText);
        setInputText('');
    };

    return (
        <div>
            <input type="text"
                data-testid="messageText"
                value={inputText}
                onChange={(event) => handleTextChange(event)}
            />
            <button 
                type="button"
                data-testid="sendButton"
                onClick={(event) => handleSend(event)}
            >
                Send
            </button>
        </div>
    );
};


export default NewMessageForm;