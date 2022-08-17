import React from 'react'
import ReactDOM from 'react-dom/client' //Pacote que renderiza o elemento React no navegador, ele que faz o intermédio entre o navegador e o elemento React
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)


