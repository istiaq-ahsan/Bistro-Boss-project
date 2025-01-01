import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import Router from './Routes/Router';
import { HelmetProvider } from 'react-helmet-async';
import AuthProviders from './providers/AuthProviders';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProviders>
        <div className='max-w-screen-xl mx-auto'>
          <RouterProvider router={Router} />
        </div>
      </AuthProviders>
    </HelmetProvider>
  </StrictMode>,
)
