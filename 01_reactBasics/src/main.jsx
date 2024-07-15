import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const myElement = React.createElement(
    "a",
    {href: 'https://snapchat.com', target: '_blank'},
    "Expect Text"
)
ReactDOM.createRoot(document.getElementById('root')).
render(

    myElement
    // <App />
    
)
