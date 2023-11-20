import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ShoppingCartProvider from './context/shoppingCartProvider.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <ShoppingCartProvider>
     <App />
    </ShoppingCartProvider>
  </BrowserRouter>,
)
