import { createRoot } from "react-dom/client";
import "tailwindcss";
import App from "./App";
import "./index.css"; // Optional, if you have global styles
const root = createRoot(document.getElementById("root")!);
root.render(<App />);
