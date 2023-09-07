import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { theme } from './theme.ts'
import { BrowserRouter } from 'react-router-dom'

// Chakra init
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </ChakraProvider>
)
