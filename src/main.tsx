import ReactDOM from 'react-dom/client'
import App from './components/App'
import './index.css'
import ThemeProvider from './providers/ThemeProvider'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <ThemeProvider>
      <App />
    </ThemeProvider>,
)
