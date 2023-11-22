import React from 'react';

function help() {
  console.log("HELLO");
}

function App() {
  return (

      <button className='btn btn-primary m-5' onClick={help}>HELLO</button>

  );
}

export default App;
