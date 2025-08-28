import React, { useState } from 'react'

function BmiCalculator() {
    const [weight,setWeight]=useState('');
    const [height,setHeight]=useState('');
    const [bmi, setBmi] = useState(null);
    const [status, setStatus] = useState('');
    const calculateBMI=()=>{
        if(!weight || !height){
            alert('Please enter both weight and height!')
            return
        }

        const heightInMeters = parseFloat(height) / 100;
        const bmiValue = (parseFloat(weight) / (heightInMeters * heightInMeters)).toFixed(2);
        setBmi(bmiValue);

        let bmiStatus = '';
        if (bmiValue < 18.5) bmiStatus = 'Underweight';
        else if (bmiValue < 24.9) bmiStatus = 'Normal weight';
        else if (bmiValue < 29.9) bmiStatus = 'Overweight';
        else bmiStatus = 'Obesity';

        setStatus(bmiStatus)
    }
  return (
    <div>
        <div>
            <label>Weight (Kg):</label>
            <input type='number' value={weight} placeholder='Enter your weight' onChange={e => setWeight(e.target.value)}></input>
        </div>
        <div>
            <label>Height (cm):</label>
            <input type='number' value={height} placeholder='Enter your height' onChange={e => setHeight(e.target.value)}></input>
        </div>
        <button onClick={calculateBMI}>Calculate</button>
        {bmi && (
        <div>
          <h3>Your BMI: {bmi}</h3>
          <h3>Status: {status}</h3>
        </div>
      )}
    </div>
  )
}

export default BmiCalculator
