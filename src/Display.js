const Display = ({ display, bottomDisplay }) => {
  return (
    <div>
      <div id="display">{display}</div>
      <div id="bottom-display">{bottomDisplay}</div>
    </div>
  );
};

export default Display;
