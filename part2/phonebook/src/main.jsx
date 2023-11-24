import {React, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import axios from 'axios'

    axios
        .get('http://localhost:3001/persons')
        .then( person => {
            const people = person.data
            ReactDOM.createRoot(document.getElementById('root')).render(<App initial={people} />)
    })

