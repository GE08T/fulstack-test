import { useState } from "react";

const Display = ({counter}) => <p>{counter}</p>

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const App2 = () => {
  let [ counter, setCounter ] = useState(0);
  console.log('rendering with counter value', counter)

  const increaseByOne = () => {
    console.log('increasing value before', counter);
    setCounter(counter + 1);
  }
  const decreaseByOne = () => {
    console.log('decreasing value before', counter);
    setCounter(counter - 1);
  }
  const setToZero = () => {
    console.log('resetting value before', counter);
    setCounter(0);
  }

  return (
    <div>
      <Display counter={counter} />
      <Button onClick={increaseByOne} text="+" />
      <Button onClick={decreaseByOne} text="-" />
      <Button onClick={setToZero} text="Reset" />
    </div>
  )
}

export default App2;