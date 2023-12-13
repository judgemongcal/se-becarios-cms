import { useState } from 'react';

import './App.css';

function App() {
  return (
    <>
      <label htmlFor="username">UST College Email</label>
      <input
        type="text"
        id="username"
        name="username"
        placeholder="juan.delacruz.med@ust.edu.ph"
      />
      <button>Log In</button>
    </>
  );
}

export default App;
