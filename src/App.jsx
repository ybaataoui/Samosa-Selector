import './App.css'
import { useState } from 'react'

const App = () => {

  //create a variable count and initialize it to 0.
  const [count, setCount] = useState(0);
  //create a variable multiplier and initialize it to 1.
  const [multiplier, setMultiplier] = useState(1);

  //update function that update the count variable
  const updateCount = () => setCount(count + multiplier);

  const buyDoubleSruffed = () => {
    if (count >= 10) {
      setMultiplier(multiplier * 2);
      setCount(count - 10);
    }
  }

  const buyPartyPack = () => {
    if (count >= 100) {
      setMultiplier(multiplier * 10);
      setCount(count - 100);
    }
  }

  const buyFullFeast = () => {
    if (count >= 1000) {
      setMultiplier(multiplier * 100);
      setCount(count - 1000);
    }
  }

  return (
    <div className='App'>
      <div className='header'>
        <h1>Samosa Selector</h1>
        <h2>Count: {count}</h2>
        <img src="https://1.bp.blogspot.com/-PliQJWdsgqk/YEED_9WumdI/AAAAAAAAAjw/uE2SPkiBJ7UurYcSigcaduwwH2fXl3eQwCLcBGAsYHQ/s2031/PNG%2BData%2BFree%2BDownload%2B%252838%2529.png" 
        alt="" className='samosa' onClick={updateCount}/>
      </div>

      <div className='container'>
        <div className='upgrade'>
          <h3>Double Stuffed 👯‍♀️</h3>
          <p>2x per click</p>
          <button onClick={buyDoubleSruffed}>10 samosas</button>
        </div>
        <div className='upgrade'>
          <h3>Party Pack 🎉</h3>
          <p>5x per click</p>
          <button onClick={buyPartyPack}>100 samosas</button>
        </div>
        <div className='upgrade'>
          <h3>Full Feast 👩🏽‍🍳</h3>
          <p>10x per click</p>
          <button onClick={buyFullFeast}>1000 samosas</button>
        </div>
      </div>

    </div>
  )
}

export default App