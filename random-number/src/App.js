import React , {useState} from 'react';
import MinMax from './MinMax';
import Result from './Result';
import Alert from './Alert';

import './App.css';

const App = () => {
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');
  const [result,setResult] = useState('');
  const [alert,setAlert] = useState(null);

  const getMin = async (value) => {
    console.log(value);
    if(isNaN(value)) {
      console.log(value);
      setMin('');
    } else {
      console.log(value);
      setMin(value);
    }
  }

  console.log(min);
  console.log(max);

  const getMax = (value) => {
    if(isNaN(value)) {
      console.log(value);
      setMax('');
    } else {
      setMax(value);
    }
  }

  const getResult = (value) => {
    setResult(value);
  }

  const getAlert = (msg,color) => {
    
    setAlert({msg,color});
    setTimeout(() => setAlert(null),3000);
  }

  return (
    <div className='App'>
        <Alert alert={alert}/>
        <MinMax min={min} max={max} getMin={getMin} getMax={getMax}/> 
        <div className='clr'></div>
        <Result min={min} max={max} getMin={getMin} getMax={getMax} getAlert={getAlert} getResult={getResult}/>
        <h1 className='result'>{result}</h1>
    </div>
  )
}

export default App;
