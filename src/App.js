import {React, useState, useEffect} from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState('0');
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  useEffect(() => {
    const displayElement = document.querySelector('p');
    displayElement.textContent = display;
  }
  , [display]);

  const handleClick = (e) => {
    const value = e.target.textContent;

    if (value === "." && display !=="0") {
    const operatorsRegex = /[+\-*/]/;
    const displayArray = display.split(operatorsRegex);
    const lastElement = displayArray[displayArray.length - 1];

      if (value === '.' && lastElement.includes('.')) {
        // If the last element already contains a decimal point, ignore additional decimal points
        return;
      }
    }

    

    

    
    if (value === 'AC') {
      setDisplay('0');
      setExpression('');
      setResult('');
    } else if (value === '=') {
      try {
        console.log(expression)
        const answer = eval(expression);
        console.log(answer)
        setDisplay(answer);
        setResult(answer);
        setExpression(answer);

      } catch (error) {
        setDisplay('Error');
        setExpression('');
        setResult('');
      }
    } else {
      if (display === '0') {
        setDisplay(value);
      } else {
        setDisplay(display + value);
      }
      setExpression(expression + value);
    }
  }

  return (
    <div className="App flex justify-center h-screen">
      <div id="calculator" className="h-3/5 w-1/4 min-h-96 min-w-96 bg-slate-300 m-auto" >
        <div  className="h-1/6 w-full bg-black text-white">
          <p id="display" className="text-right mr-3 italic text-sm pt-1"></p>
          <div className="w-full h-2/3 bg-slate-800 flex flex-col justify-end">
            <h1 className='text-right pr-3 text-3xl'>{result}</h1>
          </div>
        </div>
        <div className="w-full h-4/5 flex flex-row flex-start flex-wrap pl-1 pr-1 pb-1">
          <button id="clear" className='mt-1 ml-0 bg-orange-600 w-1/2 h-1/5 text-white p-auto text-xl focus:ring-3 shadow-lg transform active:scale-90 transition-transform border border-black' onClick={handleClick}>AC</button>
          <button id="multiply" className='mt-1 ml-0 bg-sky-600 w-1/4 h-1/5 text-white p-auto text-xl focus:ring-3 shadow-lg transform active:scale-90 transition-transform border border-black' onClick={handleClick}>*</button>
          <button id="divide" className='mt-1 ml-0 bg-sky-600 w-1/4 h-1/5 text-white p-auto text-xl focus:ring-3 shadow-lg transform active:scale-90 transition-transform border border-black' onClick={handleClick}>/</button>
          <button id="seven" className='mt-1 ml-0 bg-sky-600 w-1/4 h-1/5 text-white p-auto text-xl focus:ring-3 shadow-lg transform active:scale-90 transition-transform border border-black' onClick={handleClick}>7</button>
          <button id="eight" className='mt-1 ml-0 bg-sky-600 w-1/4 h-1/5 text-white p-auto text-xl focus:ring-3 shadow-lg transform active:scale-90 transition-transform border border-black' onClick={handleClick}>8</button>
          <button id="nine" className='mt-1 ml-0 bg-sky-600 w-1/4 h-1/5 text-white p-auto text-xl focus:ring-3 shadow-lg transform active:scale-90 transition-transform border border-black' onClick={handleClick}>9</button>
          <button id="subtract" className='mt-1 ml-0 bg-sky-600 w-1/4 h-1/5 text-white p-auto text-xl focus:ring-3 shadow-lg transform active:scale-90 transition-transform border border-black' onClick={handleClick}>-</button>
          <button id="four" className='mt-1 ml-0 bg-sky-600 w-1/4 h-1/5 text-white p-auto text-xl focus:ring-3 shadow-lg transform active:scale-90 transition-transform border border-black' onClick={handleClick}>4</button>
          <button id="five" className='mt-1 ml-0 bg-sky-600 w-1/4 h-1/5 text-white p-auto text-xl focus:ring-3 shadow-lg transform active:scale-90 transition-transform border border-black' onClick={handleClick}>5</button>
          <button id="six" className='mt-1 ml-0 bg-sky-600 w-1/4 h-1/5 text-white p-auto text-xl focus:ring-3 shadow-lg transform active:scale-90 transition-transform border border-black' onClick={handleClick}>6</button>
          <button id="add" className='mt-1 ml-0 bg-sky-600 w-1/4 h-1/5 text-white p-auto text-xl focus:ring-3 shadow-lg transform active:scale-90 transition-transform border border-black' onClick={handleClick}>+</button>
          <button id="one" className='mt-1 ml-0 bg-sky-600 w-1/4 h-1/5 text-white p-auto text-xl focus:ring-3 shadow-lg transform active:scale-90 transition-transform border border-black' onClick={handleClick}>1</button>
          <button id="two" className='mt-1 ml-0 bg-sky-600 w-1/4 h-1/5 text-white p-auto text-xl focus:ring-3 shadow-lg transform active:scale-90 transition-transform border border-black' onClick={handleClick}>2</button>
          <button id="three" className='mt-1 ml-0 bg-sky-600 w-1/4 h-1/5 text-white p-auto text-xl focus:ring-3 shadow-lg transform active:scale-90 transition-transform border border-black' onClick={handleClick}>3</button>
          <button id="decimal" className='mt-1 ml-0 bg-sky-600 w-1/4 h-1/5 text-white p-auto text-xl focus:ring-3 shadow-lg transform active:scale-90 transition-transform border border-black' onClick={handleClick}>.</button>
          <button id="zero" className='mt-1 ml-0 bg-sky-600 w-1/4 h-1/5 text-white p-auto text-xl focus:ring-3 shadow-lg transform active:scale-90 transition-transform border border-black' onClick={handleClick}>0</button>
          <button id="equals" className='mt-1 ml-0 bg-sky-600 w-3/4 h-1/5 text-white p-auto text-xl focus:ring-3 shadow-lg transform active:scale-90 transition-transform border border-black' onClick={handleClick}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;

function CalculatorButtons () {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const operators = ['+', '-', '*', '/'];
  const special = ['AC', '='];

  return (
    <div className="h-3/4 w-full">
      <div className="grid grid-cols-4 gap-2">
        {numbers.map((number) => (
          <button className="bg-slate-300 text-black" key={number}>{number}</button>
        ))}
        {operators.map((operator) => (
          <button className="bg-slate-300 text-black" key={operator}>{operator}</button>
        ))}
        {special.map((special) => (
          <button className="bg-slate-300 text-black" key={special}>{special}</button>
        ))}
      </div>
    </div>
  );
}
