
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log('Starting app initialization...');
console.log('Current location:', window.location.href);

const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error('Root element not found!');
} else {
  console.log('Root element found, creating React app...');
  createRoot(rootElement).render(<App />);
  console.log('React app rendered successfully');
}
