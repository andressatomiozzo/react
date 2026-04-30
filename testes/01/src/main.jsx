import { createRoot } from "react-dom/client";
import App01 from "./pages/01/App01.jsx";
import App02 from "./pages/02/App02.jsx";
import App03 from "./pages/03/App03.jsx";
import "./index.css";
import App04 from "./pages/04/App04.jsx";
import App05 from "./pages/05/App05.jsx";
import App06 from "./pages/06/App06.jsx";


createRoot(document.getElementById("root")).render(
  <>
    {/* <App01 />*/}
    {/* <App02 />*/}
    {/* <App03/>*/}
    {/* <App04 /> */}
    {/* <App05 /> */}
    <App06 />
  </>,
);
