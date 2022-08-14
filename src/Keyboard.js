import { useRef, useEffect } from "react";

const Keyboard = ({ handleClick, handleKeyPress }) => {
  const focused = useRef();
  useEffect(() => {
    focused.current.focus();
  });

  return (
    <div id="keyboard">
      <button onClick={() => handleClick("c")} id="clear">
        Clear
      </button>
      <button onClick={() => handleClick("/")} id="divide">
        ÷
      </button>
      <button onClick={() => handleClick("*")} id="multiply">
        x
      </button>
      <button
        onClick={() => handleClick("7")}
        onKeyPress={(event) => handleKeyPress(event)}
        tabIndex="-1"
        ref={focused}
        id="seven"
      >
        7
      </button>
      <button onClick={() => handleClick("8")} id="eight">
        8
      </button>
      <button onClick={() => handleClick("9")} id="nine">
        9
      </button>
      <button onClick={() => handleClick("-")} id="subtract">
        -
      </button>
      <button onClick={() => handleClick("4")} id="four">
        4
      </button>
      <button onClick={() => handleClick("5")} id="five">
        5
      </button>
      <button onClick={() => handleClick("6")} id="six">
        6
      </button>
      <button onClick={() => handleClick("+")} id="add">
        +
      </button>
      <button onClick={() => handleClick("1")} id="one">
        1
      </button>
      <button onClick={() => handleClick("2")} id="two">
        2
      </button>
      <button onClick={() => handleClick("3")} id="three">
        3
      </button>
      <button onClick={() => handleClick("=")} id="equals">
        =
      </button>
      <button onClick={() => handleClick("0")} id="zero">
        0
      </button>
      <button onClick={() => handleClick(".")} id="decimal">
        .
      </button>
    </div>
  );
};

export default Keyboard;
