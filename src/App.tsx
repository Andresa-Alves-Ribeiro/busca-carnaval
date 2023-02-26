import React, {useState} from 'react';
import Header from './components/Header/Header';
import Cards from './components/Cards/Cards';
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import {CardTypes} from "./components/Types/types";

function App() {
  const { width, height } = useWindowSize();

  return (
    <div className="App">
      <Header />

      <Confetti
        tweenDuration={1000}
        numberOfPieces={400}
        width={width}
        height={height}
        recycle={false}
      />
      
      <Cards />
    </div>
  );
}

export default App;
