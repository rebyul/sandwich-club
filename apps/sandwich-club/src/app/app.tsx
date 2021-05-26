import React, { useEffect, useState } from 'react';

export const App = () => {
  const [m, setMessage] = useState({ message: '' });

  useEffect(() => {
    fetch('/api')
      .then((r) => r.json())
      .then(setMessage);
  }, []);

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <img src="/assets/LunchBunch.png" />
      </div>
      <div>{m.message}</div>
      <a href="">Enrol into this weeks Sandwich Club</a>
      <br />
      <br />
      <h1>How it works?</h1>
      <br />
      <h2>reviews</h2>
    </>
  );
};

export default App;
