import React from "react";

const App210 = () => {
  const inputRef = React.useRef();
  React.useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <form>
      <input type="text" placeholder="nome" />
      <input type="text" placeholder="email" ref={inputRef} />
    </form>
  );
};

export default App210;
