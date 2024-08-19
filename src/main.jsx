import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import "@fontsource/ubuntu-mono";
import "@fontsource/ubuntu-mono/400.css"; 
import "@fontsource/ubuntu-mono/700.css"; 
import { theme } from './theme/index.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider
    theme={theme}>
    <App />
    </ChakraProvider>
  </React.StrictMode>,
)
