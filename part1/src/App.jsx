import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


const Hello = (props) => {
  console.log(props);
  return (
    <div>
      <p>Hello world {props.name}, you are {props.age} years old</p>
    </div>
  );
}

const App = () => {

  const now = Date();
  console.log('Hello from component');
  const a  = 4;
  const b = 7;

  const name = 'Peter';
  const age = 10;

  console.log(now, a+b);
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name = {name} age={age}/>
      <Hello name = 'Maya' age='23'/>
    </div>
  )
}

export default App
