import { render } from 'react-dom'
import App from './components/App'
import ThemeProvider from './assets/theme/ThemeProvider'

render(
    <ThemeProvider>
        <App/>
    </ThemeProvider>,
    document.getElementById('root')
)
