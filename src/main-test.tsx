import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

function SimpleApp() {
  return (
    <div style={{ padding: '20px', fontSize: '24px', color: 'red' }}>
      <h1>TEST - React is Working!</h1>
      <p>If you see this, React is loading correctly.</p>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SimpleApp />
  </StrictMode>,
)
