import './App.css';
import React, { useState } from 'react';

function App() {


  const [weight, setweight] = useState(0);
  const [height, setheight] = useState(0);
  const [bmi, setbmi] = useState('');
  const [message, setMessage] = useState('');

  //logic
  let calbmi = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert("please enter a valid weight & height");
    }
    else{
      let bmi= (weight/(height*height)*703)
      setbmi(bmi.toFixed(1));
      //
      if(bmi <=25){
        setMessage('You are under weight')
      }
      else if(bmi >= 25 && bmi <= 35){
        setMessage('You are a healthy weight person')
      }
      else{
        setMessage('You are overweight')
      }
    }


  }
  let reload= () =>{
    window.location.reload()
  }

  return (<div className="App">
    <div className="container">
      <h2>Bmi Calculator</h2>
      <form onSubmit={calbmi}>
        <div>
          <div>
            <label>Weight Lbs</label>
            <input type="number" placeholder="Enter Weight Value" value={weight} onChange={(e) => setweight(e.target.value)} />
          </div>
          <div>
            <label>Height</label>
            <input type="number" placeholder="Enter Height Value" value={height} onChange={(e) => setheight(e.target.value)} />
          </div>
        </div>
        <div>
          <button className="btn" type="submit">Submit</button>
          <button className="btn btn-outline" onClick={reload} type='submit'>reload</button>
        </div>
        <div className="center">
          <h3>Your BMI is{bmi}</h3>
          <p>{message}</p>
        </div>
      </form>
    </div>
  </div>);

}

export default App;
