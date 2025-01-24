import { createRoot } from "react-dom/client";
import "./globals.css";
import App from "./App.jsx";

// if ("serviceWorker" in navigator) {
//   window.addEventListener("load", () => {
//     navigator.serviceWorker
//       .register("/service-worker.js")
//       .then((registration) => {
//         console.log(registration.scope);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   });
// }

createRoot(document.getElementById("root")).render(<App />);
