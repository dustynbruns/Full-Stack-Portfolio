import React, { useState } from "react";
import { evaluate, pow, sqrt, sin, cos, tan, log, log10, asin, acos, atan, sinh, cosh, tanh, abs, round, floor, ceil, factorial } from 'mathjs';
import ParticlesBg from "particles-bg";
import "../styles/CalculatorScreen.css";

const CalculatorScreen = () => {
  const [expression, setExpression] = useState("");

  const handleButtonClick = (e) => {
    setExpression((prev) => prev + e.target.value);
  };

  const handleEvaluate = () => {
    try {
      const result = evaluate(expression);
      setExpression(result);
    } catch (err) {
      setExpression("Error");
    }
  };

  const handleClear = () => {
    setExpression("");
  };

  const handleBackspace = () => {
    setExpression((prev) => prev.slice(0, -1));
  };

  const handleFunction = (func) => {
    try {
      const result = func(evaluate(expression));
      setExpression(result);
    } catch (err) {
      setExpression("Error");
    }
  };

  return (
    <div className="calculator-screen">
      <div className="calculator">
        <input
          type="text"
          value={expression}
          readOnly
          className="calculator-display"
        />
        <div className="calculator-buttons">
          {[
            "7",
            "8",
            "9",
            "/",
            "4",
            "5",
            "6",
            "*",
            "1",
            "2",
            "3",            
            "+",
            "(",
            "0",
            ")",
            "-",
            "^",
            ".",
            "=",
            "C",
            "!",
            "sin",
            "cos",
            "tan",
            "log",
            "log10",
            "asin",
            "acos",
            "atan",
            "sinh",
            "cosh",
            "tanh",
            "abs",
            "round",
            "floor",
            "ceil",
            "exp",
            "ln",
            "sqrt",
            "backspace"
          ].map((button) => (
            <>
            <button
              key={button}
              value={button}
              onClick={
                button === "="
                  ? handleEvaluate
                  : button === "C"
                  ? handleClear
                  : button === "sqrt"
                  ? () => handleFunction(sqrt)
                  : button === "sin"
                  ? () => handleFunction(sin)
                  : button === "cos"
                  ? () => handleFunction(cos)
                  : button === "tan"
                  ? () => handleFunction(tan)
                  : button === "log"
                  ? () => handleFunction(log)
                  : button === "log10"
                  ? () => handleFunction(log10)
                  : button === "^"
                  ? () => handleFunction(pow)
                  : button === "asin"
                  ? () => handleFunction(asin)
                  : button === "acos"
                  ? () => handleFunction(acos)
                  : button === "atan"
                  ? () => handleFunction(atan)
                  : button === "sinh"
                  ? () => handleFunction(sinh)
                  : button === "cosh"
                  ? () => handleFunction(cosh)
                  : button === "tanh"
                  ? () => handleFunction(tanh)
                  : button === "abs"
                  ? () => handleFunction(abs)
                  : button === "round"
                  ? () => handleFunction(round)
                  : button === "floor"
                  ? () => handleFunction(floor)
                  : button === "ceil"
                  ? () => handleFunction(ceil)
                  :button === "backspace"
                  ? handleBackspace
                  : button === "!"
                  ? () => handleFunction(factorial)
                  : handleButtonClick
              }
            >
              {button}
            </button>
            
  </>
          ))}
        </div>
      </div>
      <ParticlesBg type="lines" bg={true} num={100} />
    </div>
  );
};

export default CalculatorScreen;
