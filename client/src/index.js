import React from 'react';
import { createRoot } from 'react-dom/client'; // createRoot(container!) if you use TypeScript
import App from './Components/App';
const root = createRoot(document.getElementById("root"));

root.render(
  <App />
)