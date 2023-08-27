import './styles.scss';
import Board from './Components/Board';
// import { useState } from 'react';

function App() {
  // const [values,setValues] = useState(0);

  // const onBtnCall =(e)=>{
  //   setValues(e.target.value);
  // }

  // console.log(values);

  return (
    <div className="app">
      {/* <button onClick={onBtnCall}>Click here</button> */}
      <Board />
    </div>
  );
}

export default App;
