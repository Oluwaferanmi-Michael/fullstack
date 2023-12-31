import { useState } from 'react'

function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  // 
  const [selected, setSelected] = useState(0)
  // create array
  const arr = new Array(8).fill(0)
  
  // set array as def state
  const [points, setPoints] = useState(arr)
  const copy = [...points]

  // fetch random number
  const randomNumber = () => {
    const number = Math.floor(Math.random() * 8)
    console.log(number)
    setSelected(number)
  }

  // console.log(arr)
  // 
  

  const vote = () => {
    console.log(copy)
    copy[selected] += 1

    setPoints(copy)
  }

  
    const mostVotes = (arr) => {
      let largest = arr[0]
      let i = 0
      for (let index = 0; index < arr.length; index++) {
        if(arr[index] > largest) {
          largest = arr[index] 
          i = index
          console.log('largest vote at this time:', largest)
        }
      }
      console.log('value of largest after loop: ', largest)
      return [largest, i]
    }


  return (
    <>
      {anecdotes[selected]}
      <br></br>
      <p>
        This anecdote has {points[selected]} votes
      </p>

      <button onClick={vote}>vote for this</button>
      <button onClick={randomNumber}>next anecdote</button>

      <br></br>
      <br></br>

      <h1>Anecdote with the most votes</h1>
      <br></br>
      <p>
        {anecdotes[mostVotes(copy)[1]]}
      </p>
      <p>
        {mostVotes(copy)[0]}
      </p>
      <br></br>
    </>
  )
}

export default App
