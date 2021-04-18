import React from "react"
import "./css/App.css"
import BooksApp from "./Components/BooksApp";
import BooksAppProvider from "./Components/ThemeContext";

function App() {
  return (

  <BooksAppProvider>
    <BooksApp/>
  </BooksAppProvider>
  );
}

export default App;
