import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/main.scss";
import App from './App.tsx'
import { FormProvider } from './context/FormProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FormProvider>
      <App />
    </FormProvider>
  </StrictMode>,
)
