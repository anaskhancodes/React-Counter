import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Counter = () => {

  const [islit, setlit] = React.useState(0);

  const Add = () => { // ADD +
    console.log("Add 1")

    setlit(islit + 1);
  }

  const Sub = () => { // SUB -
    console.log("Sub 1")

    if(islit === 0){
      return;
    }

    setlit(islit - 1)
  }

  const Reset= () => { // ADD +
    console.log("Add 1")

    setlit(0);
  }



  return <div>

    <div className='main'>

      <div className='num'>
        {islit}
      </div>

      <div className='btn'>
        <button onClick={Add} className='add'>+</button>
        <button onClick={Sub} className='sub'>-</button>
        <br />
        <button onClick={Reset} className='reset'>Reset</button>
      </div>
      
    </div>
  </div>

}

ReactDOM.render(<Counter />, document.querySelector('#root'));
