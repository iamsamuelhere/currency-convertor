import { useState } from 'react';
const App = () => {
  const [inr, setInr] = useState('');
  const [usd, setUsd] = useState('');
  return (
    <>
      <div
        style={{
          border: '0.7px solid grey',
          height: '40vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          padding: '10px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h3>Currency Convertor</h3>
          <span>Convert Indian Rupee to USD</span>
        </div>
        {/* Input fields and Button */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <span>INR</span>
              <input
                type="number"
                style={{
                  padding: '10px',
                  fontSize: '1rem',
                  border: '0.5px solid grey',
                }}
                name="inr"
                value={inr}
                onChange={(e) => {
                  setInr(e.target.value);
                  setUsd(e.target.value / 83.51);
                }}
              />
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <span>USD</span>

              <input
                type="number"
                style={{
                  padding: '10px',
                  fontSize: '1rem',
                  border: '0.5px solid grey',
                }}
                name="usd"
                value={usd}
                onChange={(e) => {
                  setUsd(e.target.value);
                  setInr(e.target.value * 83.51);
                }}
              />
            </div>
          </div>
          <button
            style={{
              width: '100%',
              marginTop: '20px',
              fontSize: '1rem',
              backgroundColor: 'black',
              color: 'white',
              padding: '10px',
            }}
            onClick={() => {
              setInr('');
              setUsd('');
            }}
          >
            Clear
          </button>
        </div>
        {/* Value */}
        <div
          style={{
            margin: '20px',
            border: '0.5px solid grey',
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <b>$ 1.00 = 83.51 INR</b>
            <span>Last updated on 10 July 2024</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
