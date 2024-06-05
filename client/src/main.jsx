import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './app/store'
import { Provider } from 'react-redux'
import {ThemeProvider,createTheme} from '@mui/material/styles';

const theme = createTheme(({
  palette: {
    primary: {
      main: '#C967F5',
    },
    secondary: {
      main: '#ba34eb',
    },
  },
}));

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
  </ThemeProvider>
)
