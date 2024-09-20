import React from 'react';
import { RouterProvider } from "react-router-dom";
// import { Counter } from './features/counter/Counter';
import './App.scss';
 

import { router } from './routes';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
