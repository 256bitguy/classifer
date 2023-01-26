import { useState } from 'react';

export default function Intext() {
  const [message1, setMessage] = useState('');

  const [updated, setUpdated] = useState(message1);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleClick = () => {
   setUpdated(message1);
  };

  return (
     

    <div>
      <label>text</label><br/>
      <input
        type="text"
        id="message1"
        name="message1"
        placeholder='Input text'
        onChange={handleChange}
        value={message1}
      />
      <button onClick={handleClick}>submit</button>
      <h2>Updated: {updated}</h2>
    </div>
  );
}