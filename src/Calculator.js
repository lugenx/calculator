import Display from "./Display";
import Keyboard from "./Keyboard";
import { useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [bottomDisplay, setBottomDisplay] = useState("0");

  const [symbolCount, setSymbolCount] = useState(0);
  const [dotCount, setDotCount] = useState(0);

  const displayEndsWithSymbols = /([\*,\/,\-,\+]+)$/g.test(display); //or a symbol

  const symbolsCountAtTheEnd = display.match(/([\*,\/,\-,\+]+)$/g)
    ? display.match(/([\*,\/,\-,\+]+)$/g)[0].length
    : 0;

  const calculateIt = (input) => {
    switch (input) {
      case "c":
        setDisplay("0");
        setBottomDisplay("0");
        setSymbolCount(0);
        setDotCount(0);
        break;

      case "0":
        setDisplay(display.concat(input).replace(/^0+(?!\.)/, "0"));
        //problem is here

        setBottomDisplay(bottomDisplay.concat(input).replace(/^0+(?!\.)/, "0"));
        break;

      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        setDisplay(display.concat(input).replace(/^0+(?!\.)/, ""));
        setBottomDisplay(input);
        break;

      case "-":
        setDisplay(display.concat(input).replace(/^0+(?!\.)/, "0"));
        setSymbolCount(symbolCount + 1);
        setBottomDisplay(input);
        break;
      case "+":
      case "*":
      case "/":
        if (!displayEndsWithSymbols) {
          setDisplay(display.concat(input).replace(/^0+(?!\.)/, "0"));
          setSymbolCount(symbolCount + 1);
          setBottomDisplay(input);
        } else {
          setDisplay(
            display
              .slice(0, display.length - symbolsCountAtTheEnd)
              .concat(input)
              .replace(/^0+(?!\.)/, "0")
          );
          setSymbolCount(symbolCount + 1);
          setBottomDisplay(input);
        }
        break;
      case ".":
        if (dotCount > symbolCount) return;
        setDisplay(display.concat(input).replace(/^0+(?!\.)/, "0"));
        setDotCount(dotCount + 1);
        setBottomDisplay(input);
        break;

      case "=":
      case "Enter":
        if (display !== 0) {
          setDisplay(display.concat(input).replace(/^0+(?!\.)/, ""));
          const result = Function("return " + display);
          const answer = Math.round(10000000000 * result()) / 10000000000;
          setDisplay(answer.toString());
          setBottomDisplay(answer.toString());
        }
    }
  };

  const handleClick = (key) => {
    calculateIt(key);
  };

  const handleKeyPress = (e) => {
    const pressedKey = e.key;
    calculateIt(pressedKey);
  };

  return (
    <div id="calculator">
      <Display display={display} bottomDisplay={bottomDisplay} />
      <Keyboard handleClick={handleClick} handleKeyPress={handleKeyPress} />
    </div>
  );
};

export default Calculator;
