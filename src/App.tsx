import { useState } from "react";
import "./App.css";
import darkTheme from "./assets/themeDark.png";
import whiteTheme from "./assets/themeWhite.png";
import Date from "../src/components/Date";


const Calculator = () => {

  const [dark, setDark] = useState(true);
  const [display, setDisplay] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value: string) => {
    if (value === "=") {
      try {
        setResult(eval(display));
      } catch (error) {
        setResult("Error");
      }
      setDisplay("");
    } else if (value === "C") {
      setDisplay("");
      setResult("");
    } else {
      setDisplay(display + value);
    }
  };

  return (
    <>
      <div className="container-calculator">
        
        <Date />

        {/* <div className="container-btn-theme">
          {dark ? (
            <img className="btn-white" src={whiteTheme} alt="btn-dark" width="40px" height="40px" onClick={handleTheme => {setDark(false)}} />
          ) : (
            <img src={darkTheme} alt="btn-dark" width="40px" height="40px" onClick={handleTheme => { setDark(true) }}/>
          )}
        </div> */}

        <div className="box-calculator">
          <input type="text" value={display} />
          <div className="btn-calculator">
            {/* Números */}
            <button onClick={() => handleButtonClick("1")}>1</button>
            <button onClick={() => handleButtonClick("2")}>2</button>
            <button onClick={() => handleButtonClick("3")}>3</button>
            <button onClick={() => handleButtonClick("4")}>4</button>
            <button onClick={() => handleButtonClick("5")}>5</button>
            <button onClick={() => handleButtonClick("6")}>6</button>
            <button onClick={() => handleButtonClick("7")}>7</button>
            <button onClick={() => handleButtonClick("8")}>8</button>
            <button onClick={() => handleButtonClick("9")}>9</button>
            <button onClick={() => handleButtonClick("0")}>0</button>

            {/* Operadores */}
            <button className="operator" onClick={() => handleButtonClick("/")}>
              /
            </button>
            <button className="operator" onClick={() => handleButtonClick("-")}>
              -
            </button>
            <button className="operator" onClick={() => handleButtonClick("*")}>
              *
            </button>
            <button className="operator" onClick={() => handleButtonClick("+")}>
              +
            </button>
            <button className="clear" onClick={() => handleButtonClick("C")}>
              C
            </button>
            <button className="equal" onClick={() => handleButtonClick("=")}>
              =
            </button>
          </div>
          {result === "Error" ? (
            <p className="error">Essa operação não pode ser realizada.</p>
          ) : (
            <p className="results">{result}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Calculator;
