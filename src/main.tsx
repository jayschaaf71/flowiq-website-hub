import { createRoot } from 'react-dom/client'
import { StrictMode } from "react";
import App from './App.tsx'
import './index.css'
import ErrorBoundary from "./components/ErrorBoundary";
import Analytics from "./components/Analytics";
import SecurityHeaders from "./components/SecurityHeaders";
import { GlobalSEO } from "./components/SEOEnhancements";
import MobileNavOptimizations from "./components/MobileOptimizations";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary>
      <SecurityHeaders />
      <GlobalSEO />
      <MobileNavOptimizations />
      <Analytics />
      <App />
    </ErrorBoundary>
  </StrictMode>
);
