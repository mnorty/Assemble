import React from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import {HashRouter} from 'react-router-dom'
import router from './router'

function App() {
  return (//Hashrouter is what lets us navigate between pages easily,the Router in the JSX is providing a index of visitable pages. if we remove login, the button is still there bt it doesnt go anywhere. Navbar isnt in the router because we want that to be displayed with all components.
   <HashRouter>
     <Navbar/>
     {router} 
   </HashRouter>
  );
}

export default App;
