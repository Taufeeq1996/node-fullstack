import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([]) 

  useEffect(() => {
    axios.get('http://localhost:3000/jokes')
    .then(res => {
      setJokes(res.data);
    })
    .catch(err => {
      console.log(err);
    })
  })

  return (
    <>
      <h1>Full Stack Node Express</h1>
      <p>Jokes: {jokes.length}</p>  

      {
        jokes.map((joke, id) => {
          <div className="jokes">
            <h3>{joke.setup}</h3>
            <h3>{joke.punchline}</h3>
          </div>
        })
      }
    </>
  )
}

export default App
