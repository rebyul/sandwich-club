import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Link, useHistory } from 'react-router-dom';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export const App = () => {
  const [m, setMessage] = useState({ message: '' });
  const [modalIsOpen, setIsLoginOpen] = React.useState(false);

  const openLoginModal = () => {
    setIsLoginOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginOpen(false);
  };

  const history = useHistory();

  useEffect(() => {
    fetch('/api')
      .then((r) => r.json())
      .then(setMessage);
  }, []);

  return (
    <>
      <button onClick={openLoginModal}>Login to account</button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeLoginModal} style={customStyles}>
        <h1>Welcome back to Lunch Bunch!</h1>
        <input type="text" /> <br />
        <input type="text" />
        <br />
        <button onClick={() => history.push('/login')}>Login</button>
      </Modal>
      {/* <BrowserRouter>
        <div className="app">
          <nav className="app-nav">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </nav>
          <div className="app-content">
            <Route path="/login" exact component={Home} />
          </div>
        </div>
      </BrowserRouter> */}
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
