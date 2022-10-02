import React from "react";

export default function Toggle() {
  const [show, setShow] = React.useState(true);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  function toggle() {
    setShow((prevShow) => !prevShow);
  }
  React.useEffect(() => {
    function changeWindow() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", changeWindow);
    return function () {
      window.removeEventListener("resize", changeWindow);
    };
  }, []);
  return (
    <div className="">
      <button onClick={toggle}>
        {show ? "Hide WindowTracker" : "Show windowTracker"}{" "}
      </button>
      {show && <h1>Window width: {windowWidth}</h1>}
    </div>
  );
}
