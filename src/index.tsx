import { render } from 'react-dom'
import App from './components/App'
import ThemeProvider from './assets/theme/ThemeProvider'
import React from 'react'

render(
    <React.StrictMode>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </React.StrictMode>
    ,
    document.getElementById('root')
)
