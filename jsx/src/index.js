// Import the React and ReactDom libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = () => {
  const buttonText = { text: 'clickme' };
  const labelText = { text: 'enter something:' };
  return (
    <div>
      <label className='label' htmlFor='name'>
        {labelText.text}
      </label>
      <input id='name' type='text' />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>
        {buttonText.text}
      </button>
    </div>
  );
};

// Take the react component and show it on the screen

ReactDOM.render(<App />, document.querySelector('#root'));
