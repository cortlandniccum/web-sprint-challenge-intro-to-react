import React from 'react';
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [button, buttonPressed] = useState(false);
  const buttonOn = (e) => {
    buttonPressed(!button);
  };
  console.log(button);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  function User({ name }) {
    const [character, setCharacter] = useState('');
    const fetchUser = (name) =>
      fetch('https://swapi.dev/api/people/${name}`)
        .then(response => response.json())
        .then(character => {
          console.log(character);
          setCharacter(character.name);
        })
  }


  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
}

export default App;
