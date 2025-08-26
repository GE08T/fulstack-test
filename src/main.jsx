import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import App2 from "./App2.jsx";
import App3 from "./App3.jsx";
import App4 from "./App4.jsx";
import App5 from "./App5.jsx";
import App8 from "./App8.jsx";

const notes = [
  {
    id: 1,
    content: "HTML is easy",
    important: false,
  },
  { id: 2, content: "Browser can execute only JavaScript", important: false },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true,
  },
];

ReactDOM.createRoot(document.getElementById("root")).render(<App8 />);
