import { useState } from "react";

const History = (props) => {
  if (props.allClick.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }

  return (
    <div>
      button press history: {props.allClick.join(' ')}
    </div>
  )
}

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const App3 = () => {
  const [ leftClick, setLeftClick ] = useState(0);
  const [ rightClick, setRightClick ] = useState(0);
  const [ allClick, setAllClick ] = useState([]);
  const [ total, setTotal ] = useState(0);
  
  const handleClickLeft = () => {
    setAllClick(allClick.concat('L'));
    const updatedLeft = leftClick + 1;
    setLeftClick(updatedLeft);
    setTotal(updatedLeft + rightClick);
  }

  const handleClickRight = () => {
    setAllClick(allClick.concat('R'));
    const updatedRight = rightClick + 1;
    setRightClick(updatedRight);
    setTotal(leftClick + updatedRight);
  }

  return (
    <div>
      <p>{leftClick}</p>
      <Button onClick={handleClickLeft} text="Left" />
      <Button onClick={handleClickRight} text="Right" />
      <p>{rightClick}</p>
      <History allClick={allClick} />
    </div>
  )

}

export default App3;
