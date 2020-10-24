import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import AdminScreen from "./screens/AdminScreen";

function App(){
  return(
    <div class="grid-container">
     <header>
       <a href="/">React Shopping Cart</a>
     </header>
     <main></main>
     <footer>All right is reserved</footer>
    </div>
  )
}

export default App;
