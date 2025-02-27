import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  useEffect(() => {
    fetch('http://localhost:4000/', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({"query":"query Query($phone: YesNo) {\r\n  allPersons(phone: $phone) {\r\n    name\r\n    phone\r\n  }\r\n}"})
    })
    .then(res => res.json())
    .then(res => {
      console.log(res.data)
    })
  })

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>GraphQL</h1>
    </>
  )
}

export default App
